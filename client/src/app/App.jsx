import React, { useEffect, useMemo, useRef, useState } from "react";
import { generalBuilderPaths, generalConceptIndex, nvidiaAcronymExpansions, nvidiaServices, serviceFilters, studySections } from "../data/study-services.js";

const h = React.createElement;
const MISSING_LLM_KEY_MESSAGE = "Coach chat needs an LLM API key. Create .env from .env.example, set LLM_API_KEY, then restart the dev server.";

async function api(path, options = {}) {
  const response = await fetch(path, {
    headers: { "content-type": "application/json" },
    ...options
  });
  const contentType = response.headers.get("content-type") || "";
  const body = contentType.includes("application/json")
    ? await response.json().catch(() => null)
    : null;
  if (!response.ok) {
    const error = new Error(body?.error || `Request failed: ${response.status}`);
    error.status = response.status;
    error.code = body?.code || "";
    throw error;
  }
  return body || {};
}

function coachErrorMessage(err, fallback = "Coach request failed") {
  if (err?.code === "missing_llm_api_key" || /LLM_API_KEY|API key/i.test(err?.message || "")) {
    return MISSING_LLM_KEY_MESSAGE;
  }
  return err?.message || fallback;
}

function certPath(path, slug) {
  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}cert=${encodeURIComponent(slug)}`;
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function scoreTone(percent) {
  if (percent >= 80) return "good";
  if (percent >= 65) return "warn";
  return "bad";
}

const studyFocus = {
  "LLM Architecture": "Transformers, attention, embeddings, encoder/decoder tradeoffs, sampling.",
  "Prompt Engineering": "CoT, few-shot patterns, constrained outputs, validation wrappers, hallucination control.",
  "Data Preparation": "Tokenizers, BPE/WordPiece, class imbalance, dataset format, curation for training and RAG.",
  "Model Optimization": "Quantization, pruning, distillation, KV cache, TensorRT, ablations, latency/throughput tradeoffs.",
  "Fine-Tuning": "SFT vs PEFT, LoRA/adapters/P-tuning, DPO/GRPO, overfitting, hallucination mitigation.",
  "Evaluation": "BLEU, ROUGE, perplexity, RAG faithfulness, LLM-as-judge bias, human review, error analysis.",
  "GPU Acceleration and Optimization": "DDP/FSDP, tensor/pipeline/data/expert parallelism, Tensor Cores, Nsight profiling.",
  "Model Deployment": "NIM, Triton/Dynamo-Triton, Docker, Kubernetes, dynamic batching, model serving.",
  "Production Monitoring and Reliability": "Dashboards, drift, logs, anomaly diagnosis, versioning, retraining triggers.",
  "Safety, Ethics, and Compliance": "Guardrails, bias/fairness audits, policy monitoring, responsible deployment.",
  "Agent Lifecycle and Architecture": "Workflow vs agent, observe-reason-act loops, supervision, state ownership, handoffs.",
  "Data Curation and Knowledge Grounding": "Training data curation, RAG pipelines, chunking, metadata filtering, freshness.",
  "Model Selection and Customization": "Model routing, registries, prompt/RAG/tuning choices, adapter governance.",
  "Tooling, Orchestration, and Memory": "Tool schemas, function runtime, retries, idempotency, memory scope, workflow state.",
  "Inference Serving and Deployment": "Inference microservices, serving gateways, batching, canaries, fallback, rollout.",
  "Latency, Throughput, and Traffic Control": "p50/p95/p99, TTFT, queue delay, concurrency, batching, backpressure, rollout safety.",
  "Evaluation and Safety": "Trajectory evaluation, groundedness, LLM-as-judge calibration, guardrails, red-team suites.",
  "Observability, Operations, and Cost": "Traces, task success, p95/p99 latency, route drift, token cost, incident replay.",
  "Human Oversight and Governance": "Risk-tiered approvals, escalation, audit artifacts, review feedback loops."
};

const ADAPTIVE_PRACTICE_TARGET = 20;
const QUICK_PRACTICE_TARGET = 20;
const SECTION_QUIZ_TARGET = 10;
const DRILL_COUNTS = [1, 5, 10, 20];
const DRILL_DIFFICULTIES = ["any", "easy", "medium", "hard", "expert"];
const ADAPTIVE_PRACTICE_FLOWS = ["practice-adaptive", "practice-coach-bank", "practice-coach-generated", "practice-coach-mixed"];
const PRACTICE_SOURCE_FILTERS = [
  { value: "all", label: "All sources" },
  { value: "original", label: "Downloaded/original" },
  { value: "generated", label: "Generated" }
];
const PRACTICE_RESET_EPOCH = "source-split-2026-05-05";

function loadJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function resetPracticeStorageOnce() {
  try {
    const marker = "ncp-practice-reset-epoch";
    if (localStorage.getItem(marker) === PRACTICE_RESET_EPOCH) return;
    for (const key of Object.keys(localStorage)) {
      if (key.endsWith("-history") || key.endsWith("-confidence") || key.startsWith("recent-mock-ids-")) {
        localStorage.removeItem(key);
      }
    }
    localStorage.setItem(marker, PRACTICE_RESET_EPOCH);
  } catch {
    // Ignore storage failures; server-side state is still reset below.
  }
}

function idSet(values) {
  return new Set(Array.isArray(values) ? values : []);
}

function scrollToTop() {
  window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" }));
}

function scrollToElementId(id, block = "center") {
  if (!id) return;
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block });
    });
  });
}

function scrollToStudyPanel() {
  scrollToElementId("study-mode-panel", "start");
}

function uniqueQuestionList(questions) {
  return [...new Map((questions || []).map((question) => [question.id, question])).values()];
}

function shuffledQuestions(questions, limit = questions.length) {
  const copy = [...questions];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(limit, copy.length));
}

// Permute a question's answer choices, keep id stable, and store the shuffled→original
// index mapping on `_originalIndices` so the user's selection can be back-translated for grading.
function shuffleQuestionChoices(question) {
  const n = question.choices.length;
  const indices = [...Array(n).keys()];
  for (let i = indices.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return {
    ...question,
    choices: indices.map((idx) => question.choices[idx]),
    whyWrong: indices.map((idx) => question.whyWrong?.[idx] || ""),
    answer: indices.indexOf(question.answer),
    _originalIndices: indices
  };
}

function shuffleSet(questions, limit = questions.length) {
  return shuffledQuestions(uniqueQuestionList(questions), limit).map(shuffleQuestionChoices);
}

// Translate user-selected (shuffled) indices back to original indices so the server grader
// (which reads the unshuffled bank) sees the right answer.
function answersToOriginal(answers, sessionQuestions) {
  const out = {};
  for (const q of sessionQuestions) {
    const sel = answers[q.id];
    if (sel === undefined) continue;
    out[q.id] = q._originalIndices ? q._originalIndices[sel] : sel;
  }
  return out;
}

// Used by startKeywordPractice (Study Mode service cards): keyword matches across
// question text + topic + domain so we don't depend on every service having a topic tag.
function selectFromBank(questions, { keyword, limit = 20 } = {}) {
  const kw = (keyword || "").trim().toLowerCase();
  const matches = questions.filter((q) => {
    if (!kw) return true;
    const hay = `${q.question} ${q.topic || ""} ${q.domain || ""}`.toLowerCase();
    return hay.includes(kw);
  });
  return shuffledQuestions(matches, limit);
}

function questionSearchText(question) {
  return [
    question.question,
    question.topic,
    question.domain,
    question.explanation,
    ...(question.choices || []),
    ...(question.whyWrong || [])
  ].filter(Boolean).join(" ").toLowerCase();
}

function questionMatchesAnyKeyword(question, keywords) {
  const cleaned = (keywords || [])
    .map((keyword) => String(keyword || "").trim().toLowerCase())
    .filter(Boolean);
  if (!cleaned.length) return true;
  const hay = questionSearchText(question);
  return cleaned.some((keyword) => hay.includes(keyword));
}

function questionMatchesDifficulty(question, difficulty) {
  const target = String(difficulty || "any").toLowerCase();
  if (target === "any") return true;
  const actual = String(question.difficulty || "medium").toLowerCase();
  return target === "easy" || target === "easier" ? actual === "easier" || actual === "easy" : actual === target;
}

function questionsForDifficulty(questions, difficulty) {
  return questions.filter((question) => questionMatchesDifficulty(question, difficulty));
}

function uniqueQuestions(questions) {
  return uniqueQuestionList(questions);
}

function practiceQuestionSource(question) {
  return question?.source === "original" ? "original" : "generated";
}

function questionsForSource(questions, sourceFilter = "all") {
  if (sourceFilter === "all") return questions;
  return questions.filter((question) => practiceQuestionSource(question) === sourceFilter);
}

function mixedSourceProfile(examLabelValue) {
  if (examLabelValue === "Agentic AI") {
    return {
      conceptShare: 0.93,
      conceptPercent: 93,
      nvidiaPercent: 7,
      label: "NCP-AAI blueprint mix",
      description: "Follows the current Agentic AI blueprint: mostly agent design, development, evaluation, deployment, memory, knowledge, safety, operations, and oversight, with a dedicated NVIDIA Platform Implementation slice."
    };
  }
  if (examLabelValue === "GenAI LLMs") {
    return {
      conceptShare: 0.55,
      conceptPercent: 55,
      nvidiaPercent: 45,
      label: "GENL PDF-shaped mix",
      description: "General LLM architecture, optimization, tuning, and evaluation balanced with NVIDIA GPU and deployment practice."
    };
  }
  if (examLabelValue === "Agentic AI General") {
    return {
      conceptShare: 0.3,
      conceptPercent: 30,
      nvidiaPercent: 70,
      label: "General study coverage mix",
      description: "Balances the saved baseline with generated scenario questions across the builder-path study cards."
    };
  }
  return {
    conceptShare: 0.5,
    conceptPercent: 50,
    nvidiaPercent: 50,
    label: "Balanced mix",
    description: "A balanced split between broad concepts and implementation-specific questions."
  };
}

function practiceScopeConfig(exam) {
  const label = examLabel(exam);
  if (label === "Agentic AI") {
    return {
      isSecondary: (question) => question.domain === "NVIDIA Platform Implementation",
      primaryLabel: "Exam sections",
      secondaryLabel: "NVIDIA Platform Implementation",
      mixedLabel: "Blueprint-weighted mix",
      primaryMatchLabel: "exam-section",
      secondaryMatchLabel: "platform-section",
      primaryCountLabel: "exam-section question",
      secondaryCountLabel: "platform question",
      primaryPercentLabel: "other sections",
      secondaryPercentLabel: "NVIDIA platform",
      primaryActionLabel: "Core exam sections",
      secondaryActionLabel: "NVIDIA platform section",
      noSecondaryLabel: "No NVIDIA Platform Implementation questions yet",
      panelDescription: "Pick from fixed mock tests, current exam sections, or the dedicated NVIDIA Platform Implementation section.",
      focusDescription: "Choose an exam section, concept-map lane, NVIDIA service boundary, or keyword, then pick source and focus for the drill.",
      sourceTitle: "Question focus",
      sourceHint: "Current blueprint sections vs the dedicated NVIDIA platform section",
      keywordPlaceholder: "ReAct, tool schemas, memory, RAG, guardrails..."
    };
  }
  if (label === "Agentic AI General") {
    return {
      isSecondary: (question) => practiceQuestionSource(question) === "generated",
      primaryLabel: "Saved baseline",
      secondaryLabel: "Generated scenarios",
      mixedLabel: "Mixed scenarios",
      primaryMatchLabel: "saved-baseline",
      secondaryMatchLabel: "generated-scenario",
      primaryCountLabel: "saved question",
      secondaryCountLabel: "generated question",
      primaryPercentLabel: "saved baseline",
      secondaryPercentLabel: "generated scenarios",
      primaryActionLabel: "Saved baseline",
      secondaryActionLabel: "Generated scenarios",
      noSecondaryLabel: "No generated scenarios yet",
      panelDescription: "Pick the next best drill or generate new scenario questions.",
      focusDescription: "Choose a blueprint section, study playbook, lifecycle path, or keyword, then pick source and scenario set for the drill.",
      sourceTitle: "Question set",
      sourceHint: "Saved/original questions vs generated scenario questions",
      keywordPlaceholder: "RAG, policy controls, model routing..."
    };
  }
  return {
    isSecondary: (question) => question.questionScope === "nvidia_specific",
    primaryLabel: "Certificate concepts",
    secondaryLabel: "NVIDIA-specific",
    mixedLabel: "Recommended mix",
    primaryMatchLabel: "certificate-concept",
    secondaryMatchLabel: "NVIDIA-specific",
    primaryCountLabel: "concept question",
    secondaryCountLabel: "NVIDIA-specific question",
    primaryPercentLabel: "certificate concepts",
    secondaryPercentLabel: "NVIDIA-specific",
    primaryActionLabel: "Concepts only",
    secondaryActionLabel: "NVIDIA platform scope",
    noSecondaryLabel: "No NVIDIA-specific questions yet",
    panelDescription: "Pick from fixed mock tests, NVIDIA-specific questions, or broader certificate concept questions.",
    focusDescription: "Choose an exam section, lifecycle path, NVIDIA service, or keyword, then pick source and scope for the drill.",
    sourceTitle: "Question scope",
    sourceHint: "General concepts vs NVIDIA-specific",
    keywordPlaceholder: "TensorRT-LLM, NIM, Retriever, LoRA..."
  };
}

function countPhrase(count, noun) {
  const clean = String(noun || "question");
  return `${count} ${clean}${count === 1 || clean.endsWith("s") ? "" : "s"}`;
}

function buildBalancedMixedQuestions(conceptQuestions, nvidiaQuestions, count, conceptShare = 0.5) {
  const target = Math.max(1, count || QUICK_PRACTICE_TARGET);
  const concepts = uniqueQuestions(conceptQuestions);
  const nvidia = uniqueQuestions(nvidiaQuestions);
  const selected = [];
  const selectedIds = new Set();
  const conceptTarget = Math.max(0, Math.min(target, Math.round(target * conceptShare)));

  function takeFrom(pool, limit) {
    const picks = shuffledQuestions(pool.filter((question) => !selectedIds.has(question.id)), limit);
    for (const question of picks) {
      selected.push(question);
      selectedIds.add(question.id);
    }
  }

  takeFrom(concepts, conceptTarget);
  takeFrom(nvidia, target - selected.length);
  if (selected.length < target) {
    takeFrom([...concepts, ...nvidia], target - selected.length);
  }
  return shuffledQuestions(selected, target);
}

function domainPercent(score) {
  if (!score || !score.total) return null;
  return Math.round((score.correct / score.total) * 100);
}

function buildDashboard(exam, history, confidence, currentGrade, learnerProfile = null) {
  const latest = currentGrade || history[0]?.grade || null;
  const domains = exam.domains.map((domain) => {
    const score = latest?.byDomain?.[domain.name] || null;
    const percent = domainPercent(score);
    const sampleSize = score?.total || 0;
    const measured = learnerProfile?.domains?.[domain.name] || null;
    const profileAttempts = measured?.attempts || 0;
    const self = confidence[domain.name] ?? 2;
    const reliablePercent = sampleSize >= 5 ? percent : measured?.attempts >= 5 ? Math.round((measured.accuracy || 0) * 100) : null;
    const samplePenalty = sampleSize && sampleSize < 5 ? (5 - sampleSize) * 9 : profileAttempts && profileAttempts < 5 ? (5 - profileAttempts) * 5 : 0;
    const weakness = (reliablePercent === null ? 55 : 100 - reliablePercent) + samplePenalty + (4 - self) * 12 + domain.weight / 2;
    return {
      ...domain,
      score,
      percent,
      sampleSize,
      reliablePercent,
      measured,
      confidence: self,
      focus: studyFocus[domain.name] || "Review official objectives and missed questions.",
      weakness
    };
  });
  const recommendations = [...domains]
    .sort((a, b) => b.weakness - a.weakness)
    .slice(0, 3)
    .map((domain) => {
      const signals = [];
      if (domain.percent !== null) {
        signals.push(domain.sampleSize < 5 ? `${domain.percent}% on ${domain.sampleSize}Q sample` : `${domain.percent}% last score`);
      }
      if (domain.measured?.attempts) signals.push(`${domain.measured.correct}/${domain.measured.attempts} all-time`);
      if (!signals.length) signals.push(`${domain.weight}% exam weight`);
      return {
        ...domain,
        reason: signals.join(" · ")
      };
    });

  return {
    domains,
    strong: domains.filter((domain) => domain.reliablePercent !== null && domain.reliablePercent >= 80 && (domain.measured?.attempts || domain.sampleSize) >= 5 && domain.confidence >= 3),
    weak: [...domains].sort((a, b) => b.weakness - a.weakness).slice(0, 4),
    recommendations,
    attempts: history.length
  };
}

const RECENT_MOCK_DEBOOST_MS = 48 * 60 * 60 * 1000;

function loadRecentMockSeen(slug) {
  const key = `recent-mock-ids-${slug}`;
  const map = loadJson(key, {});
  const cutoff = Date.now() - RECENT_MOCK_DEBOOST_MS;
  let pruned = false;
  for (const id of Object.keys(map)) {
    if (map[id] < cutoff) { delete map[id]; pruned = true; }
  }
  if (pruned) saveJson(key, map);
  return map;
}

function recordMockSeen(slug, ids) {
  const key = `recent-mock-ids-${slug}`;
  const map = loadJson(key, {});
  const now = Date.now();
  for (const id of ids) map[id] = now;
  saveJson(key, map);
}

function buildAdaptiveSet(exam, dashboard, limit = 24, recentMockSeen = {}) {
  const weakNames = new Set(dashboard.weak.map((domain) => domain.name));
  const scored = exam.questions.map((question, index) => {
    const domain = dashboard.domains.find((item) => item.name === question.domain);
    const confidence = domain?.confidence ?? 2;
    const difficulty = String(question.difficulty || "medium").toLowerCase();
    const weakBoost = weakNames.has(question.domain) ? 90 : 0;
    const domainWeakness = domain?.weakness || 0;
    const difficultyBoost =
      confidence >= 4
        ? ({ easy: -22, medium: -8, hard: 20, advanced: 26, expert: 30 }[difficulty] || 8)
        : confidence <= 1
          ? ({ easy: 20, medium: 12, hard: -10, advanced: -18, expert: -22 }[difficulty] || 0)
          : ({ easy: 4, medium: 10, hard: 8, advanced: 4, expert: 0 }[difficulty] || 0);
    const recentMockDeboost = recentMockSeen[question.id] ? -60 : 0;
    const score = weakBoost + domainWeakness + difficultyBoost + recentMockDeboost - index / 1000;
    return { question, score };
  });
  return scored
    .sort((a, b) => b.score - a.score)
    .map((item) => item.question)
    .slice(0, Math.min(limit, exam.questions.length));
}

function parseLatestMockAttempt(markdown, mockId) {
  if (!markdown) return null;
  const sectionRe = new RegExp(`^## ${mockId} — (.+?)\\n([\\s\\S]*?)(?=^## |\\s*$)`, "m");
  const match = markdown.match(sectionRe);
  if (!match) return null;
  const date = match[1].trim();
  const body = match[2];
  const scoreMatch = body.match(/\*\*Score:\*\*\s*(\d+)%\s*\((\d+)\/(\d+)\)\s*—\s*(PASS|FAIL)/);
  if (!scoreMatch) return { date };
  return {
    date,
    percent: Number(scoreMatch[1]),
    correct: Number(scoreMatch[2]),
    total: Number(scoreMatch[3]),
    passed: scoreMatch[4] === "PASS"
  };
}

function parseBestMockAttempt(markdown, mockId) {
  if (!markdown) return null;
  const re = new RegExp(`## ${mockId} — .+?\\n[\\s\\S]*?\\*\\*Score:\\*\\*\\s*(\\d+)%`, "g");
  let best = 0;
  let m;
  while ((m = re.exec(markdown)) !== null) {
    const pct = Number(m[1]);
    if (pct > best) best = pct;
  }
  return best || null;
}

function examLabel(exam) {
  const code = exam?.certification?.code;
  if (code === "NCP-AAI") return "Agentic AI";
  if (code === "AAI-GEN") return "Agentic AI General";
  return "GenAI LLMs";
}

function themeForCertification(exam) {
  const slug = String(exam?.slug || "").toLowerCase();
  const code = String(exam?.certification?.code || "").toLowerCase();
  if (slug.includes("aws") || code.includes("aws")) return "aws";
  if (code === "aai-gen" || slug.includes("general")) return "blue";
  return "nvidia";
}

function brandingForExam(exam) {
  const theme = themeForCertification(exam);
  const label = examLabel(exam);
  if (theme === "blue") {
    return {
      brand: "GENERAL",
      chooserLabel: "Study track",
      resourceLabel: "Reference page",
      suiteLabel: "Builder paths",
      serviceLabel: "Study cards",
      studyDescription: "Study vendor-neutral AI systems by the builder path: what you are trying to build, which decision comes next, and where platform examples fit.",
      studyCardCopy: {
        study: "Study agentic AI by builder paths and decision cards.",
        lifecycle: "Builder paths",
        services: "Study cards",
        suite: "Cross-vendor patterns",
        quiz: "Banked quick quizzes from local questions"
      }
    };
  }
  if (theme === "aws") {
    return {
      brand: "AWS",
      chooserLabel: "Study track",
      resourceLabel: "AWS reference page",
      suiteLabel: "AWS suite",
      serviceLabel: "AWS service",
      studyDescription: "Study by lifecycle order, related platform examples, or blueprint section. Quick quiz pulls from the local bank.",
      studyCardCopy: {
        study: "Study AWS sections and services before taking questions.",
        lifecycle: "AWS lifecycle stages",
        services: "AWS service map",
        suite: "AWS suite basics",
        quiz: "Banked quick quizzes from section questions"
      }
    };
  }
  if (label === "Agentic AI") {
    return {
      brand: "NVIDIA",
      chooserLabel: "Certification",
      resourceLabel: "Official NVIDIA page",
      suiteLabel: "Platform map",
      serviceLabel: "NVIDIA services",
      studyDescription: "Study the official Agentic AI exam sections in handbook order, then open NVIDIA service boundaries only when product wording matters. Quick quiz pulls from the local bank.",
      studyCardCopy: {
        study: "Study official exam sections first, then open NVIDIA services only when product wording matters.",
        lifecycle: "Exam sections",
        services: "NVIDIA service boundaries",
        suite: "Agentic AI concepts in official exam order",
        quiz: "Banked quick quizzes from section questions"
      }
    };
  }
  return {
    brand: "NVIDIA",
    chooserLabel: "Certification",
    resourceLabel: "Official NVIDIA page",
    suiteLabel: "Platform map",
    serviceLabel: "NVIDIA services",
    studyDescription: "Study by lifecycle order, grouped NVIDIA services, or blueprint section. Quick quiz pulls from the local bank.",
    studyCardCopy: {
      study: "Study exam sections and NVIDIA services before taking questions.",
      lifecycle: "NVIDIA lifecycle stages",
      services: "NVIDIA services by lifecycle topic",
      suite: "NVIDIA suite basics: GPUs, NeMo, NIM, Nsight, TensorRT, Nemotron",
      quiz: "Banked quick quizzes from section questions"
    }
  };
}

function App() {
  resetPracticeStorageOnce();
  const [selectedCertSlug, setSelectedCertSlug] = useState("agentic_ai_professional");
  const [exam, setExam] = useState(null);
  const [certifications, setCertifications] = useState([]);
  const [mistakes, setMistakes] = useState("");
  const [answers, setAnswers] = useState({});
  const [flagged, setFlagged] = useState({});
  const [revealed, setRevealed] = useState({});
  const [sessionQuestions, setSessionQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(120 * 60);
  const [mode, setMode] = useState("start");
  const [sessionKind, setSessionKind] = useState("test");
  const [flow, setFlow] = useState(null); // null | practice-mock | practice-adaptive | practice-generated | practice-section | test-mock-1
  const [track, setTrack] = useState(null); // null | practice | test
  const [studyView, setStudyView] = useState("lifecycle");
  const [activeServiceFilter, setActiveServiceFilter] = useState("All");
  const [selectedServiceName, setSelectedServiceName] = useState("NeMo Framework");
  const [selectedSuiteTopicId, setSelectedSuiteTopicId] = useState("platform-map");
  const [activeSectionExam, setActiveSectionExam] = useState("All");
  const [selectedSectionName, setSelectedSectionName] = useState("NVIDIA Platform Implementation");
  const [pendingStudyJump, setPendingStudyJump] = useState(null);
  const [studyStatus, setStudyStatus] = useState("");
  const [grade, setGrade] = useState(null);
  const [history, setHistory] = useState(() => loadJson("ncp-genl-history", []));
  const [confidence, setConfidence] = useState(() => loadJson("ncp-genl-confidence", {}));
  const [learnerProfile, setLearnerProfile] = useState(null);
  const [generationStatus, setGenerationStatus] = useState({ state: "idle", message: "" });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [coachNotes, setCoachNotes] = useState({});
  const [coachStatus, setCoachStatus] = useState({ state: "idle", message: "" });
  const [mockDef, setMockDef] = useState(null);
  const [mockResultsMd, setMockResultsMd] = useState("");
  const [selectedMockId, setSelectedMockId] = useState("mock_1");
  const [selectedMockSource, setSelectedMockSource] = useState("original");
  const [availableMocks, setAvailableMocks] = useState([]);
  const [examStartedAt, setExamStartedAt] = useState(null);
  const [appearance, setAppearance] = useState(() => localStorage.getItem("study-appearance") || "light");
  const genAbortRef = useRef(null);
  const coachAbortRef = useRef(null);
  const finalizingRef = useRef(false);
  const guidedCandidateIdsRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("study-appearance", appearance);
    document.documentElement.dataset.appearance = appearance;
  }, [appearance]);

  useEffect(() => {
    if (!exam) return;
    document.documentElement.dataset.colorTheme = themeForCertification(exam);
  }, [exam]);

  useEffect(() => {
    if (exam?.certification?.code === "AAI-GEN" && track === "test") {
      setTrack(null);
    }
  }, [exam, track]);

  useEffect(() => {
    async function load() {
      setError("");
      const [examData, mistakeData, profileData, mockData, mocksListData] = await Promise.all([
        api(certPath("/api/exam", selectedCertSlug)),
        api(certPath("/api/mistakes", selectedCertSlug)),
        api(certPath("/api/learner-profile", selectedCertSlug)).catch(() => null),
        api(certPath("/api/mock-results", selectedCertSlug)).catch(() => ({ markdown: "" })),
        api(certPath("/api/mocks", selectedCertSlug)).catch(() => ({ mocks: [] }))
      ]);
      const certData = await api("/api/certifications").catch(() => ({ certifications: [] }));
      setExam(examData);
      setCertifications(certData.certifications || []);
      setMistakes(mistakeData.markdown);
      setSessionQuestions(examData.questions);
      setSecondsLeft(examData.certification.durationMinutes * 60);
      setHistory(loadJson(`${selectedCertSlug}-history`, []));
      setConfidence(loadJson(`${selectedCertSlug}-confidence`, {}));
      setGrade(null);
      setAnswers({});
      setFlagged({});
      setRevealed({});
      setCurrent(0);
      setFlow(null);
      setMode("start");
      setMockDef(null);
      const examSections = studySections.filter((section) => section.exam === examLabel(examData));
      setSelectedSectionName(examSections[0]?.name || studySections[0]?.name || "");
      setActiveServiceFilter("All");
      setLearnerProfile(profileData?.profile || null);
      setMockResultsMd(mockData.markdown || "");
      const mocks = mocksListData.mocks || [];
      setAvailableMocks(mocks);
      if (mocks.length && !mocks.some((m) => m.id === selectedMockId && (m.source || "original") === selectedMockSource)) {
        setSelectedMockSource(mocks[0].source || "original");
        setSelectedMockId(mocks[0].id);
      }
      setGenerationStatus({ state: "idle", message: "" });
    }
    load().catch((loadError) => setError(loadError.message));
  }, [selectedCertSlug]);

  useEffect(() => {
    if (mode !== "exam" || sessionKind !== "test") return undefined;
    const timer = setInterval(() => {
      setSecondsLeft((value) => {
        if (value <= 1) {
          clearInterval(timer);
          submitExam();
          return 0;
        }
        return value - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [mode, sessionKind, answers]);

  const activeQuestions = sessionQuestions.length ? sessionQuestions : exam?.questions || [];
  const question = activeQuestions[current];
  const answeredCount = activeQuestions.filter((item) => answers[item.id] !== undefined).length;
  const flaggedCount = Object.values(flagged).filter(Boolean).length;
  const activeBankCount = Array.isArray(exam?.practicePoolIds) && exam.practicePoolIds.length
    ? exam.practicePoolIds.length
    : exam?.questions?.length || 0;
  const bankLabel = exam?.questions?.length && activeBankCount !== exam.questions.length
    ? `${activeBankCount}/${exam.questions.length} questions`
    : `${activeBankCount} questions`;
  const originalBankIdSet = idSet(exam?.originalBankIds);
  const generatedPracticeIdSet = idSet(
    Array.isArray(exam?.generatedPracticeIds) ? exam.generatedPracticeIds : exam?.approvedGeneratedIds
  );

  const dashboard = useMemo(() => {
    if (!exam) return { domains: [], weak: [], strong: [], attempts: 0 };
    return buildDashboard(exam, history, confidence, grade, learnerProfile);
  }, [exam, history, confidence, grade, learnerProfile]);

  // Practice mode draws from original-bank IDs plus generated practice IDs.
  // Mock tests keep the full pool (they need every ID resolvable).
  const practiceQuestions = useMemo(() => {
    if (!exam) return [];
    const ids = exam.practicePoolIds;
    if (!Array.isArray(ids) || !ids.length) return exam.questions;
    const idSet = new Set(ids);
    return exam.questions.filter((q) => idSet.has(q.id));
  }, [exam]);
  const practiceExam = useMemo(() => (
    exam ? { ...exam, questions: practiceQuestions } : null
  ), [exam, practiceQuestions]);

  const domainStats = useMemo(() => dashboard.domains.map((domain) => {
    if (!exam) return { ...domain, total: 0, answered: 0 };
    const total = exam.questions.filter((item) => item.domain === domain.name).length;
    const answered = activeQuestions.filter((item) => item.domain === domain.name && answers[item.id] !== undefined).length;
    return { ...domain, total, answered };
  }), [dashboard, exam, activeQuestions, answers]);

  const mockSummary = useMemo(() => ({
    latest: parseLatestMockAttempt(mockResultsMd, selectedMockId),
    bestPercent: parseBestMockAttempt(mockResultsMd, selectedMockId)
  }), [mockResultsMd, selectedMockId]);

  function rememberCoachReply(questionId, learnerQuestion, reply) {
    const note = [
      learnerQuestion ? `Learner asked: ${learnerQuestion}` : "",
      reply ? `Coach: ${reply}` : ""
    ].filter(Boolean).join("\n\n");
    if (!note) return;
    setCoachNotes((prev) => ({
      ...prev,
      [questionId]: {
        note,
        reason: "Saved from coach chat"
      }
    }));
  }

  async function postSessionLog(gradeResult, questionsForLog = sessionQuestions) {
    const entries = questionsForLog.map((q) => {
      const selectedIndex = answers[q.id];
      const coach = coachNotes[q.id]?.note || "";
      return {
        id: q.id,
        domain: q.domain,
        question: q.question,
        choices: q.choices,
        correctIndex: q.answer,
        selectedIndex,
        correct: selectedIndex === q.answer,
        explanation: q.explanation,
        coachNote: coach
      };
    });
    if (!entries.length) return;
    try {
      await api(certPath("/api/session-log", selectedCertSlug), {
        method: "POST",
        body: JSON.stringify({
          flow: flow || sessionKind,
          grade: gradeResult,
          entries
        })
      });
    } catch (err) {
      console.warn("session log write failed", err);
    }
  }

  async function generateQuestions({ count = 5, weakOnly = false, focusDomains = [], service = null, topic = '', difficulty = 'hard' } = {}) {
    if (genAbortRef.current) { genAbortRef.current.abort(); genAbortRef.current = null; }
    const controller = new AbortController();
    genAbortRef.current = controller;
    const aborted = () => controller.signal.aborted;
    const timeoutId = setTimeout(() => controller.abort(), 120000);

    const scope = service?.name ? ' for ' + service.name : (topic ? ' on "' + topic + '"' : '');
    setGenerationStatus({ state: 'running', message: 'Generating ' + count + ' ' + difficulty + ' question' + (count === 1 ? '' : 's') + scope + '…' });
    try {
      const result = await api(certPath('/api/generate-questions', selectedCertSlug), {
        method: 'POST',
        signal: controller.signal,
        body: JSON.stringify({ mode: 'study', count, weakOnly, focusDomains, service, topic, difficulty })
      });
      if (aborted()) return;
      if (!result.accepted) {
        setGenerationStatus({ state: 'warn', message: 'No questions accepted. ' + (result.stopReason ? '(' + result.stopReason + ')' : 'Try a different difficulty or topic.') });
        return;
      }
      const refreshed = await api(certPath('/api/exam', selectedCertSlug));
      if (aborted()) return;
      setExam(refreshed);
      const ids = new Set(result.autoApprovedIds || []);
      const questions = uniqueQuestionList(refreshed.questions.filter((q) => ids.has(q.id))).map(shuffleQuestionChoices);
      if (!questions.length) {
        setGenerationStatus({ state: 'warn', message: 'Questions generated but not found in bank. Try Practice → focused questions.' });
        return;
      }
      resetSessionState({ keepGeneration: true });
      setFlow('practice-generated');
      setSessionKind('practice');
      setSessionQuestions(questions);
      setSecondsLeft(0);
      setMode('exam');
      setGenerationStatus({ state: 'idle', message: '' });
      scrollToTop();
    } catch (err) {
      if (aborted()) return;
      setGenerationStatus({ state: 'error', message: (err.message || String(err)).replace(/DeepSeek|moonshot|kimi|anthropic.com|openai|model/gi, 'question generator').slice(0, 200) });
    } finally {
      clearTimeout(timeoutId);
    }
  }

  async function generateStudyQuiz({ service = null, sectionName = '', difficulty = 'hard', count = 5 } = {}) {
    if (genAbortRef.current) { genAbortRef.current.abort(); genAbortRef.current = null; }
    const controller = new AbortController();
    genAbortRef.current = controller;
    const aborted = () => controller.signal.aborted;
    const timeoutId = setTimeout(() => controller.abort(), 120000);

    const label = service?.name || sectionName;
    const topic = sectionName || '';
    setGenerationStatus({ state: 'running', message: 'Generating ' + count + ' ' + difficulty + ' question' + (count === 1 ? '' : 's') + ' for ' + label + '…' });
    try {
      const result = await api(certPath('/api/generate-questions', selectedCertSlug), {
        method: 'POST',
        signal: controller.signal,
        body: JSON.stringify({ mode: 'study', count, difficulty, service, topic, focusDomains: topic ? [topic] : [] })
      });
      if (aborted()) return;
      if (!result.accepted) {
        setGenerationStatus({ state: 'warn', message: 'No questions generated. ' + (result.stopReason ? '(' + result.stopReason + ')' : 'Try a different difficulty.') });
        return;
      }
      const refreshed = await api(certPath('/api/exam', selectedCertSlug));
      if (aborted()) return;
      setExam(refreshed);
      const ids = new Set(result.autoApprovedIds || []);
      const questions = uniqueQuestionList(refreshed.questions.filter((q) => ids.has(q.id))).map(shuffleQuestionChoices);
      if (!questions.length) {
        setGenerationStatus({ state: 'warn', message: 'Questions generated but not found in bank. Try Practice → focused questions.' });
        return;
      }
      resetSessionState({ keepGeneration: true });
      setFlow('practice-generated');
      setSessionKind('practice');
      setSessionQuestions(questions);
      setSecondsLeft(0);
      setMode('exam');
      setGenerationStatus({ state: 'idle', message: '' });
      scrollToTop();
    } catch (err) {
      if (aborted()) return;
      setGenerationStatus({ state: 'error', message: (err.message || String(err)).replace(/DeepSeek|moonshot|kimi|anthropic.com|openai|model/gi, 'question generator').slice(0, 200) });
    } finally {
      clearTimeout(timeoutId);
    }
  }

  function cancelGeneration() {
    if (genAbortRef.current) { genAbortRef.current.abort(); genAbortRef.current = null; }
    setGenerationStatus({ state: 'idle', message: '' });
  }

  function resetSessionState({ keepGeneration = false } = {}) {
    if (!keepGeneration && genAbortRef.current) { genAbortRef.current.abort(); genAbortRef.current = null; }
    if (coachAbortRef.current) { coachAbortRef.current.abort(); coachAbortRef.current = null; }
    finalizingRef.current = false;
    guidedCandidateIdsRef.current = null;
    setAnswers({});
    setFlagged({});
    setRevealed({});
    setCurrent(0);
    setGrade(null);
    setCoachNotes({});
    setCoachStatus({ state: "idle", message: "" });
    setExamStartedAt(null);
    setGenerationStatus({ state: "idle", message: "" });
  }

  function returnToStart({ confirmFirst = true } = {}) {
    if (confirmFirst && mode === "exam") {
      const ok = window.confirm("Exit this session? Your in-progress answers will be discarded and not graded.");
      if (!ok) return;
    }
    resetSessionState();
    setSessionQuestions(exam ? exam.questions : []);
    setSecondsLeft(exam ? exam.certification.durationMinutes * 60 : 0);
    setFlow(null);
    setTrack(null);
    setMockDef(null);
    setMode("start");
    scrollToTop();
  }

  function returnToPractice({ confirmFirst = false } = {}) {
    if (confirmFirst && mode === "exam") {
      const ok = window.confirm("Exit this session? Your in-progress answers will be discarded and not graded.");
      if (!ok) return;
    }
    resetSessionState();
    setSessionQuestions(exam ? exam.questions : []);
    setSecondsLeft(exam ? exam.certification.durationMinutes * 60 : 0);
    setFlow(null);
    setTrack("practice");
    setMockDef(null);
    setMode("start");
    scrollToTop();
  }

  async function startFlow(nextFlow) {
    if (!exam) return;
    setError("");
    if (!exam.questions.length) {
      setError(`No question bank exists yet for ${exam.certification.name}. Use Study Mode or generate draft questions first.`);
      return;
    }
    resetSessionState();
    setFlow(nextFlow);
    setExamStartedAt(Date.now());

    if (ADAPTIVE_PRACTICE_FLOWS.includes(nextFlow)) {
      setSessionKind("practice");
      const recentMockSeen = loadRecentMockSeen(selectedCertSlug);
      let pool = practiceQuestions;
      if (nextFlow === "practice-coach-generated") {
        pool = exam.questions.filter((q) => generatedPracticeIdSet.has(q.id));
      } else if (nextFlow === "practice-coach-bank") {
        pool = originalBankIdSet.size
          ? exam.questions.filter((q) => originalBankIdSet.has(q.id))
          : practiceQuestions.filter((q) => !generatedPracticeIdSet.has(q.id));
      }
      const adaptiveExam = { ...exam, questions: pool };
      const seed = buildAdaptiveSet(adaptiveExam, dashboard, 1, recentMockSeen);
      const first = seed.length ? seed[0] : pool[0];
      if (!first) {
        setError(nextFlow === "practice-coach-generated"
          ? "No generated practice questions are available yet."
          : "No practice questions available. Generate some first.");
        setFlow(null);
        return;
      }
      setSessionQuestions([shuffleQuestionChoices(first)]);
      setSecondsLeft(0);
      setMode("exam");
      scrollToTop();
      return;
    }

    if (nextFlow === "practice-generated") {
      setSessionKind("practice");
      const pool = exam.questions.filter((q) => generatedPracticeIdSet.has(q.id));
      if (!pool.length) {
        setError("No generated practice questions are available yet.");
        setFlow(null);
        return;
      }
      setSessionQuestions(shuffleSet(pool, QUICK_PRACTICE_TARGET));
      setSecondsLeft(0);
      setMode("exam");
      scrollToTop();
      return;
    }

    if (nextFlow === "practice-mock" || nextFlow === "test-mock-1") {
      const isPractice = nextFlow === "practice-mock";
      setBusy(true);
      try {
        const mockId = selectedMockId || "mock_1";
        const data = await api(certPath(`/api/mock?id=${mockId}&source=${selectedMockSource}`, selectedCertSlug));
        if (!data.questions?.length) throw new Error("Mock test has no questions");
        setMockDef(data.mock);
        setSessionQuestions(shuffleSet(data.questions));
        setSessionKind(isPractice ? "practice" : "test");
        setSecondsLeft(isPractice ? 0 : (data.mock.durationMinutes || 90) * 60);
        setMode("exam");
        scrollToTop();
      } catch (err) {
        setError(`Failed to load mock: ${err.message}`);
        setFlow(null);
      } finally {
        setBusy(false);
      }
      return;
    }
  }

  function startTargetedGuidedPractice({ questions, label = "selected focus", flowName = "practice-coach-bank" } = {}) {
    if (!exam) return;
    const pool = uniqueQuestionList(Array.isArray(questions) ? questions : []);
    if (!pool.length) {
      setError(`No banked questions found for ${label}. Generate new questions for this focus first.`);
      return;
    }
    resetSessionState();
    guidedCandidateIdsRef.current = pool.map((q) => q.id);
    setFlow(flowName);
    setSessionKind("practice");
    setExamStartedAt(Date.now());
    const adaptiveExam = { ...exam, questions: pool };
    const seed = buildAdaptiveSet(adaptiveExam, dashboard, 1, loadRecentMockSeen(selectedCertSlug));
    setSessionQuestions([shuffleQuestionChoices(seed[0] || pool[0])]);
    setSecondsLeft(0);
    setMode("exam");
    scrollToTop();
  }

  function startQuestionDrill({ questions, label = "selected focus", count = QUICK_PRACTICE_TARGET, difficulty = "any", flowName = "practice-section" } = {}) {
    if (!exam) return;
    const pool = questionsForDifficulty(Array.isArray(questions) ? questions : [], difficulty);
    if (!pool.length) {
      const qualifier = difficulty === "any" ? "" : ` ${difficulty}`;
      setError(`No${qualifier} questions found for ${label}. Try another difficulty or source.`);
      return;
    }
    resetSessionState();
    setFlow(flowName);
    setSessionKind("practice");
    setExamStartedAt(Date.now());
    setSessionQuestions(shuffleSet(pool, count));
    setSecondsLeft(0);
    setMode("exam");
    scrollToTop();
  }

  function startSectionPractice(sectionName) {
    if (!exam) return;
    const pool = practiceQuestions.filter((item) => item.domain === sectionName);
    if (!pool.length) {
      setStudyStatus(`No banked questions yet for ${sectionName}. Add or draft questions for this section first.`);
      return;
    }
    resetSessionState();
    setFlow("practice-section");
    setSessionKind("practice");
    setSessionQuestions(shuffleSet(pool, SECTION_QUIZ_TARGET));
    setSecondsLeft(0);
    setMode("exam");
    scrollToTop();
  }

  // Quick quiz launched from a Study Mode service card. Matches by keyword across
  // question text + topic + domain so we don't depend on every service having a topic tag.
  function startKeywordPractice(label, keywords) {
    if (!exam) return;
    const pool = (Array.isArray(keywords) ? keywords : [keywords])
      .filter(Boolean)
      .flatMap((kw) => selectFromBank(practiceQuestions, { keyword: kw, limit: 9999 }));
    const dedup = [...new Map(pool.map((q) => [q.id, q])).values()];
    if (!dedup.length) {
      setStudyStatus(`No banked questions yet mention "${label}". Add a topic tag or draft questions first.`);
      return;
    }
    resetSessionState();
    setFlow("practice-section");
    setSessionKind("practice");
    setSessionQuestions(shuffleSet(dedup, SECTION_QUIZ_TARGET));
    setSecondsLeft(0);
    setMode("exam");
    scrollToTop();
  }

  function answerQuestion(index) {
    if (!question) return;
    setAnswers((currentAnswers) => ({ ...currentAnswers, [question.id]: index }));
    if (sessionKind === "practice") {
      setRevealed((revealedMap) => ({ ...revealedMap, [question.id]: true }));
    }
  }

  function toggleFlag() {
    setFlagged((currentFlags) => ({ ...currentFlags, [question.id]: !currentFlags[question.id] }));
  }

  async function fetchCoachingAndAdvance() {
    const isCoachPractice = ADAPTIVE_PRACTICE_FLOWS.includes(flow);
    if (!isCoachPractice || !question) return;
    if (sessionQuestions.length >= ADAPTIVE_PRACTICE_TARGET) {
      setCoachStatus({ state: "idle", message: "" });
      return;
    }
    const selectedIndex = answers[question.id];
    if (selectedIndex === undefined) return;

    // Abort any previous coach fetch still in flight.
    if (coachAbortRef.current) { coachAbortRef.current.abort(); coachAbortRef.current = null; }
    const controller = new AbortController();
    coachAbortRef.current = controller;
    const aborted = () => controller.signal.aborted;

    setCoachStatus({ state: "running", message: "Choosing next practice question…" });
    try {
      const seenIds = sessionQuestions.map((q) => q.id);
      const recentHistory = sessionQuestions.map((q) => ({
        id: q.id,
        domain: q.domain,
        correct: answers[q.id] === q.answer
      }));
      const originalSelected = question._originalIndices ? question._originalIndices[selectedIndex] : selectedIndex;
      const result = await api(certPath("/api/adaptive/coach", selectedCertSlug), {
        method: "POST",
        signal: controller.signal,
        body: JSON.stringify({
          questionId: question.id,
          selectedIndex: originalSelected,
          seenIds,
          history: recentHistory,
          practiceOnly: true,
          candidateSource: guidedCandidateIdsRef.current ? "all" : flow === "practice-coach-generated" ? "generated" : flow === "practice-coach-bank" ? "bank" : "all",
          candidateIds: guidedCandidateIdsRef.current || undefined
        })
      });
      if (aborted()) return;
      setCoachNotes((prev) => ({ ...prev, [question.id]: { note: result.note, reason: result.reason } }));

      if (aborted()) return;
      if (sessionQuestions.length + 1 >= ADAPTIVE_PRACTICE_TARGET || !result.nextId) {
        setCoachStatus({ state: "ok", message: "Session complete." });
        await finalizeAdaptivePractice();
        return;
      }
      const nextQuestion = exam.questions.find((q) => q.id === result.nextId);
      if (!nextQuestion) {
        setCoachStatus({ state: "warn", message: "Practice selector picked an unknown question. Ending session." });
        await finalizeAdaptivePractice();
        return;
      }
      setSessionQuestions((prev) => [...prev, shuffleQuestionChoices(nextQuestion)]);
      setCurrent((prev) => prev + 1);
      setCoachStatus({ state: "idle", message: "" });
    } catch (err) {
      if (aborted()) return;
      // The server falls back to heuristic picks when the LLM is slow;
      // this error means the entire endpoint is unreachable.
      setCoachStatus({ state: "error", message: coachErrorMessage(err, "Practice selector is unreachable. Tap again to retry.") });
    }
  }

  async function finalizeAdaptivePractice() {
    // Guard against double calls (e.g. submitExam while fetchCoachingAndAdvance is also finalizing).
    if (finalizingRef.current) return;
    finalizingRef.current = true;

    // Abort any in-progress coach fetch.
    if (coachAbortRef.current) { coachAbortRef.current.abort(); coachAbortRef.current = null; }

    setBusy(true);
    try {
      const result = await api(certPath("/api/exam/grade", selectedCertSlug), {
        method: "POST",
        body: JSON.stringify({
          answers: answersToOriginal(answers, sessionQuestions),
          questionIds: sessionQuestions.map((q) => q.id)
        })
      });
      setCurrent(0);
      setGrade(result);
      const nextHistory = [{ date: new Date().toISOString(), grade: result, sessionKind: "practice", flow }, ...history].slice(0, 20);
      setHistory(nextHistory);
      saveJson(`${selectedCertSlug}-history`, nextHistory);
      setMode("review");
      await saveWrongAnswers(result);
      await postSessionLog(result);
      try {
        const profileResponse = await api(certPath("/api/learner-profile/session", selectedCertSlug), {
          method: "POST",
          body: JSON.stringify({ grade: result })
        });
        setLearnerProfile(profileResponse.profile);
      } catch (profileError) {
        console.warn("learner profile update failed", profileError);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
      finalizingRef.current = false;
    }
  }

  async function submitExam() {
    // Abort any in-progress coaching before finalizing.
    if (coachAbortRef.current) { coachAbortRef.current.abort(); coachAbortRef.current = null; }
    if (ADAPTIVE_PRACTICE_FLOWS.includes(flow)) {
      await finalizeAdaptivePractice();
      return;
    }
    setBusy(true);
    setError("");
    try {
      const gradingQuestions = sessionKind === "practice"
        ? activeQuestions.filter((item) => answers[item.id] !== undefined)
        : activeQuestions;
      const questionsToGrade = gradingQuestions.length ? gradingQuestions : activeQuestions.slice(0, current + 1);
      const result = await api(certPath("/api/exam/grade", selectedCertSlug), {
        method: "POST",
        body: JSON.stringify({
          answers: answersToOriginal(answers, questionsToGrade),
          questionIds: questionsToGrade.map((item) => item.id)
        })
      });
      const nextHistory = [{ date: new Date().toISOString(), grade: result, sessionKind, flow }, ...history].slice(0, 20);
      setHistory(nextHistory);
      saveJson(`${selectedCertSlug}-history`, nextHistory);
      if (sessionKind === "practice") setSessionQuestions(questionsToGrade);
      setCurrent(0);
      setGrade(result);
      setMode("review");
      await saveWrongAnswers(result);
      await postSessionLog(result, questionsToGrade);
      try {
        const profileResponse = await api(certPath("/api/learner-profile/session", selectedCertSlug), {
          method: "POST",
          body: JSON.stringify({ grade: result })
        });
        setLearnerProfile(profileResponse.profile);
      } catch (profileError) {
        console.warn("learner profile update failed", profileError);
      }
      if (flow === "test-mock-1" && mockDef) {
        try {
          const durationUsedSec = examStartedAt ? Math.round((Date.now() - examStartedAt) / 1000) : null;
          await api(certPath(`/api/mock?id=${mockDef.id}`, selectedCertSlug), {
            method: "POST",
            body: JSON.stringify({
              grade: result,
              passingScorePercent: mockDef.passingScorePercent ?? 70,
              durationUsedSec
            })
          });
          const refreshed = await api(certPath("/api/mock-results", selectedCertSlug));
          setMockResultsMd(refreshed.markdown || "");
        } catch (mockError) {
          console.warn("mock result save failed", mockError);
        }
      }
      // Track every question seen in a mock attempt (timed or untimed) so adaptive
      // practice can deboost them for the next 48h.
      if (flow === "test-mock-1" || flow === "practice-mock") {
        recordMockSeen(selectedCertSlug, questionsToGrade.map((q) => q.id));
      }
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setBusy(false);
    }
  }

  async function saveWrongAnswers(result) {
    const wrongRows = result.rows.filter((row) => !row.correct);
    if (!wrongRows.length) return;

    await Promise.all(wrongRows.map((row) => {
      const missed = exam.questions.find((item) => item.id === row.id);
      if (!missed) return Promise.resolve();
      const selected = row.selected === undefined ? "No answer selected" : missed.choices[row.selected];
      return api(certPath("/api/mistakes", selectedCertSlug), {
        method: "POST",
        body: JSON.stringify({
          title: `Practice miss: ${missed.domain}`,
          mistake: `${missed.question} Selected: ${selected}`,
          correction: `Correct: ${missed.choices[missed.answer]}. ${missed.explanation}`,
          source: `${exam.certification.code} ${flow || "session"}`,
          prompt: missed.id
        })
      });
    }));

    const refreshed = await api(certPath("/api/mistakes", selectedCertSlug));
    setMistakes(refreshed.markdown);
  }

  if (!exam) {
    return h("main", { className: "loading" }, h("div", { className: "loader" }), h("p", null, "Loading certification practice exam..."));
  }

  const isAdaptivePractice = ADAPTIVE_PRACTICE_FLOWS.includes(flow);
  const adaptivePosition = isAdaptivePractice ? `${sessionQuestions.length}/${ADAPTIVE_PRACTICE_TARGET}` : null;
  const showHeaderStatus = !(mode === "exam" && sessionKind === "practice");
  const branding = brandingForExam(exam);
  const certificationCodeClass = exam.certification?.code
    ? `cert-code-${exam.certification.code.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`
    : "";

  return h(
    "main",
    { className: `exam-shell theme-${themeForCertification(exam)} ${exam.slug ? `cert-${exam.slug}` : ""} ${certificationCodeClass}` },
    h(
      "header",
      { className: "exam-header" },
      h(
        "div",
        { className: "exam-title" },
        h("span", { className: "brand-mark" }, branding.brand),
        h("div", null, h("p", { className: "eyebrow" }, exam.certification.code), h("h1", null, exam.certification.name))
      ),
      showHeaderStatus
        ? h(
            "div",
            { className: "exam-statusbar" },
            h(
              "div",
              null,
              h("span", null, mode === "review" ? "Score" : mode === "start" ? "Level" : "Time remaining"),
              h(
                "strong",
                { className: grade ? scoreTone(grade.percent) : "" },
                mode === "review"
                  ? `${grade.percent}%`
                  : mode === "start"
                    ? exam.certification.level
                    : formatTime(secondsLeft)
              )
            ),
            h(
              "div",
              null,
              h("span", null, mode === "start" ? "Format" : "Delivery"),
              h("strong", null, mode === "start" ? `${exam.certification.questionRange} Q · ${exam.certification.durationMinutes} min` : flowLabel(flow, mockDef))
            ),
            h(
              "div",
              null,
              h("span", null, mode === "start" ? "Active bank" : "Items"),
              h(
                "strong",
                null,
                mode === "start"
                  ? bankLabel
                  : mode === "review"
                    ? `${grade.correct}/${grade.total}`
                    : `${answeredCount}/${activeQuestions.length}`
              )
            )
          )
        : null
      ,
      h("button", {
        className: "theme-toggle",
        type: "button",
        onClick: () => setAppearance((value) => value === "dark" ? "light" : "dark"),
        title: appearance === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }, appearance === "dark" ? "Light" : "Dark")
    ),
    error
      ? h("div", { className: "error" },
          h("span", null, error),
          h("button", { onClick: () => setError("") }, "Dismiss"))
      : null,
    mode === "start" ? h(StartScreen, {
      exam, domainStats, dashboard, learnerProfile, mockSummary, mockResultsMd,
      track, setTrack, busy, certifications, studyView, setStudyView,
      branding,
      availableMocks, selectedMockId, setSelectedMockId, selectedMockSource, setSelectedMockSource,
      selectedCertSlug, setSelectedCertSlug,
      activeServiceFilter, setActiveServiceFilter, selectedServiceName, setSelectedServiceName,
      selectedSuiteTopicId, setSelectedSuiteTopicId,
      activeSectionExam, setActiveSectionExam, selectedSectionName, setSelectedSectionName,
      pendingStudyJump, setPendingStudyJump,
      studyStatus, setStudyStatus,
      setExam,
      startFlow, startTargetedGuidedPractice, startQuestionDrill, startSectionPractice, startKeywordPractice, generateQuestions, generateStudyQuiz, generationStatus, cancelGeneration
    }) : null,
    mode === "exam"
      ? h(ExamScreen, {
          questions: activeQuestions,
          question,
          current,
          setCurrent,
          answers,
          answeredCount,
          flagged,
          flaggedCount,
          secondsLeft,
          answerQuestion,
          toggleFlag,
          submitExam,
          busy,
          sessionKind,
          revealed,
          flow,
          generationStatus,
          coachNotes,
          coachStatus,
          adaptivePosition,
          adaptiveTarget: ADAPTIVE_PRACTICE_TARGET,
          fetchCoachingAndAdvance,
          rememberCoachReply,
          revealAnswer: () => setRevealed((map) => ({ ...map, [question.id]: true })),
          onExit: () => returnToStart({ confirmFirst: true }),
          selectedCertSlug
        })
      : null,
    mode === "review"
      ? h(ReviewScreen, {
          exam,
          questions: activeQuestions,
          grade,
          current,
          setCurrent,
          answers,
          flagged,
          domainStats,
          mistakes,
          flow,
          coachNotes,
          mockResultsMd,
          mockDef,
          startFlow,
          onExit: () => returnToStart({ confirmFirst: false }),
          onBackToPractice: () => returnToPractice({ confirmFirst: false })
        })
      : null
  );
}

function flowLabel(flow, mockDef) {
  switch (flow) {
    case "practice-section": return "Certificate Concept Practice";
    case "practice-adaptive": return "Guided Practice";
    case "practice-coach-bank": return "Guided Certificate Concepts";
    case "practice-coach-generated": return "Guided Focus Set";
    case "practice-coach-mixed": return "Guided Recommended Mix";
    case "practice-generated": return "Focused Practice";
    case "practice-mixed": return "Mixed Practice";
    case "practice-mock": return mockDef ? `Mock Review — ${mockDef.name}` : "Mock Review";
    case "test-mock-1": return mockDef?.name || "Mock Test";
    default: return "—";
  }
}

function StartScreen(props) {
  const { exam, domainStats, dashboard, learnerProfile, mockSummary, mockResultsMd,
    track, setTrack, busy, certifications, studyView, setStudyView,
    branding,
    availableMocks, selectedMockId, setSelectedMockId, selectedMockSource, setSelectedMockSource,
    selectedCertSlug, setSelectedCertSlug,
    activeServiceFilter, setActiveServiceFilter, selectedServiceName, setSelectedServiceName,
    selectedSuiteTopicId, setSelectedSuiteTopicId,
    activeSectionExam, setActiveSectionExam, selectedSectionName, setSelectedSectionName,
    pendingStudyJump, setPendingStudyJump,
    studyStatus, setStudyStatus,
    setExam,
    startFlow, startTargetedGuidedPractice, startQuestionDrill, startSectionPractice, startKeywordPractice, generateQuestions, generateStudyQuiz, generationStatus, cancelGeneration } = props;
  const isGenericStudy = exam.certification.code === "AAI-GEN";

  return h(
    "section",
    { className: `start-grid ${track ? `track-${track}` : ""}` },
    h(CertificationChooser, { exam, certifications, selectedCertSlug, setSelectedCertSlug, setTrack, branding }),
    h(TrackChooser, { track, setTrack, mockSummary, exam, branding }),
    track === "practice"
      ? h(PracticePanel, {
          exam, domainStats, dashboard, learnerProfile,
          startFlow, startTargetedGuidedPractice, startQuestionDrill, generateQuestions, generationStatus, cancelGeneration,
          availableMocks, selectedMockId, setSelectedMockId, selectedMockSource, setSelectedMockSource,
          selectedCertSlug,
          refreshExam: () => api(certPath("/api/exam", selectedCertSlug)).then(setExam)
        })
      : null,
    track === "test" && !isGenericStudy
      ? h(TestPanel, {
          exam, mockSummary, mockResultsMd, busy, startFlow, availableMocks, selectedMockId, setSelectedMockId, selectedMockSource, setSelectedMockSource
        })
      : null,
    track === "study"
      ? h(StudyModePanel, {
          exam,
          branding,
          studyView,
          setStudyView,
          activeServiceFilter,
          setActiveServiceFilter,
          selectedServiceName,
          setSelectedServiceName,
          selectedSuiteTopicId,
          setSelectedSuiteTopicId,
          activeSectionExam,
          setActiveSectionExam,
          selectedSectionName,
          setSelectedSectionName,
          selectedCertSlug,
          setSelectedCertSlug,
          setTrack,
          pendingStudyJump,
          setPendingStudyJump,
          studyStatus,
          setStudyStatus,
          generationStatus,
          generateQuestions,
          generateStudyQuiz,
          cancelGeneration,
          startSectionPractice,
          startKeywordPractice
        })
      : null,
    track === "test" && !isGenericStudy
      ? h(BlueprintPanel, { exam, domainStats, selectedCertSlug, compact: true, branding })
      : null
  );
}

function CertificationChooser({ exam, certifications, selectedCertSlug, setSelectedCertSlug, setTrack, branding }) {
  const certOptions = certifications.length
    ? certifications
    : [{ slug: exam.slug || "genai_llms_professional", name: exam.certification.name }];
  return h(
    "div",
    { className: "cert-chooser" },
    h(
      "div",
      null,
      h("span", null, branding.chooserLabel),
      h("strong", null, `${exam.certification.code} · ${exam.certification.level}`),
      h("p", null, exam.certification.name)
    ),
    h(
      "select",
      {
        value: selectedCertSlug || exam.slug || certOptions[0].slug,
        onChange: (event) => {
          setSelectedCertSlug(event.target.value);
          setTrack(null);
        },
        title: "Choose which certification to study or practice."
      },
      certOptions.map((cert) => h("option", { key: cert.slug, value: cert.slug }, cert.name))
    )
  );
}

function BlueprintPanel({ exam, domainStats, selectedCertSlug, compact = false, branding = brandingForExam(exam) }) {
  return h(
    "div",
    { className: `blueprint-panel ${compact ? "compact" : ""}` },
    h("div", { className: "panel-title-row" },
      h("h2", null, "Blueprint Coverage"),
      h("span", null, exam.certification.code)
    ),
    h("div", { className: "domain-list" }, domainStats.map((domain) => h(DomainRow, { key: domain.name, domain }))),
    h("div", { className: "resource-links" },
      exam.questions.length
        ? h("a", { href: certPath("/api/questions.md", selectedCertSlug), target: "_blank", rel: "noreferrer" }, "View question bank")
        : h("span", null, "No question bank yet"),
      h("a", { href: exam.certification.source, target: "_blank", rel: "noreferrer" }, branding.resourceLabel)
    )
  );
}

function TrackChooser({ track, setTrack, mockSummary, exam, branding }) {
  const hasQuestionBank = exam.questions.length > 0;
  const isGenericStudy = exam.certification.code === "AAI-GEN";
  if (track === "study") {
    return h("div", { className: "track-chooser track-chooser-compact", "aria-label": "Session mode" },
      h("span", null, "Mode"),
      h("button", { type: "button", className: "active", onClick: () => setTrack("study") }, "Study"),
      h("button", { type: "button", onClick: () => setTrack("practice") }, "Practice"),
      isGenericStudy ? null : h("button", { type: "button", onClick: () => setTrack("test") }, "Mock Tests")
    );
  }
  return h(
    "div",
    { className: "track-chooser" },
    h("h2", null, "Choose your session"),
    h("p", { className: "muted" }, isGenericStudy
      ? "Use Study for builder paths and Practice for short guided drills."
      : "Practice = short shuffled study sets with explanations. Test = exam-style under time."),
    h(
      "div",
      { className: `track-cards ${isGenericStudy ? "track-cards-two" : ""}` },
      h(
        "button",
        { className: `track-card ${track === "study" ? "active" : ""}`, onClick: () => setTrack("study") },
        h("strong", null, "Study"),
        h("p", null, branding.studyCardCopy.study),
        h("ul", null,
          h("li", null, isGenericStudy ? "Builder paths for agentic AI systems" : "Blueprint sections for the selected certification"),
          h("li", null, branding.studyCardCopy.services),
          h("li", null, isGenericStudy ? "Curate data, select models, build agents, serve, evaluate" : branding.studyCardCopy.suite),
          h("li", null, branding.studyCardCopy.quiz)
        )
      ),
      h(
        "button",
        { className: `track-card ${track === "practice" ? "active" : ""}`, onClick: () => setTrack("practice") },
        h("strong", null, "Practice"),
        h("p", null, "Shuffled question sets with immediate explanations and an end-of-session review."),
        h("ul", null,
          h("li", null, "No timer"),
          h("li", null, hasQuestionBank ? "Coach chat available inside each question" : "Question bank not built yet"),
          h("li", null, "Review answered questions at finish")
        )
      ),
      isGenericStudy ? null : h(
        "button",
        { className: `track-card ${track === "test" ? "active" : ""}`, onClick: () => setTrack("test") },
        h("strong", null, "Mock Tests"),
        h("p", null, "Fixed downloaded or generated mock sets with timed, deferred grading."),
        h("ul", null,
          h("li", null, `${exam.certification.durationMinutes} min real exam`),
          h("li", null, hasQuestionBank ? "Downloaded and generated mock choices" : "Practice tests unlock after questions exist"),
          h("li", null, "Mock selection for repeatable scoring")
        ),
        mockSummary?.latest
          ? h("p", { className: "track-meta" },
              `Mock 1 last: ${mockSummary.latest.percent}% — best ${mockSummary.bestPercent || "n/a"}%`
            )
          : null
      ),
    )
  );
}

// Cert-aware lifecycle flow shown at top of Study Mode. Each stage is a card with
// the verb the lifecycle calls for + the NVIDIA tools that map to that stage.
const LIFECYCLE_FLOWS = {
  "GenAI LLMs": {
    title: "NVIDIA GenAI LLM mental model",
    lanes: {
      "Core: Deploy optimized LLM endpoint": "Main NCP-GENL path: choose an approved model, optimize generation, expose it as an endpoint, then profile bottlenecks.",
      "Core: Build grounded LLM application": "Use when the model needs private or fresh knowledge, prompt/context control, guardrails, and answer-quality evaluation.",
      "Secondary: Fine-tune existing model": "Use when durable behavior, style, criteria adherence, or preference alignment must change. Tune only after data and evals are ready.",
      "Reference: Train model from zero": "Background lifecycle anchor for this cert. Know the steps, but full pretraining is not the default professional LLM application path."
    },
    stages: [
      { id: "genl-infer-model", lane: "Core: Deploy optimized LLM endpoint", context: "Choose model", name: "Choose model or artifact", tools: ["Nemotron models"], optionalTools: ["NGC"], note: "Pick an approved model family, checkpoint, container, or catalog artifact before optimizing or serving it" },
      { id: "genl-infer-optimize", lane: "Core: Deploy optimized LLM endpoint", context: "Optimize", name: "Optimize generation runtime", tools: ["TensorRT-LLM"], optionalTools: ["Nsight Systems", "Nsight Compute"], note: "Tune batching, KV cache, quantization, prefill/decode speed, and verify the real bottleneck before changing hardware" },
      { id: "genl-infer-serve", lane: "Core: Deploy optimized LLM endpoint", context: "Deploy", name: "Serve production endpoint", tools: ["NIM"], optionalTools: ["Triton Inference Server", "NIM Operator", "Dynamo (Triton Dynamo)"], note: "Expose the model as an API; add multi-framework serving, K8s lifecycle, or distributed LLM serving when scale demands it" },
      { id: "genl-infer-operate", lane: "Core: Deploy optimized LLM endpoint", context: "Operate", name: "Profile and improve endpoint", tools: ["Nsight Systems"], optionalTools: ["Nsight Compute", "TensorRT-LLM"], note: "Start with system timelines, then drill into kernels or runtime settings after a specific bottleneck is visible" },

      { id: "genl-rag-ingest", lane: "Core: Build grounded LLM application", context: "Runtime knowledge", name: "Prepare private knowledge", tools: ["NeMo Retriever"], optionalTools: ["NeMo Curator", "RAPIDS"], note: "Extract, clean, chunk, embed, index, rerank, preserve permissions, and keep citations outside model weights" },
      { id: "genl-rag-prompt", lane: "Core: Build grounded LLM application", context: "Prompt and context", name: "Bind answers to evidence", tools: ["NIM"], optionalTools: ["NeMo Retriever", "NeMo Guardrails"], note: "Use prompts, context packing, abstention rules, and policy checks when the base model should not learn new facts" },
      { id: "genl-rag-eval", lane: "Core: Build grounded LLM application", context: "Quality and policy", name: "Evaluate and guard outputs", tools: ["NeMo Evaluator", "NeMo Guardrails"], optionalTools: ["NeMo Retriever"], note: "Measure groundedness, answer quality, safety, regressions, and retrieval failures before release" },

      { id: "genl-tune-data", lane: "Secondary: Fine-tune existing model", context: "Data processing", name: "Process tuning data", tools: ["NeMo Curator"], optionalTools: ["RAPIDS"], note: "Prepare SFT examples, labels, preference data, PII cleanup, split hygiene, and validation holdouts" },
      { id: "genl-tune-model", lane: "Secondary: Fine-tune existing model", context: "Fine-tune", name: "Fine-tune behavior", tools: ["NeMo Customizer"], optionalTools: ["NeMo Framework", "NGC"], note: "Use PEFT/LoRA first when possible; heavier SFT, alignment, or distributed recipes are more scenario-specific" },
      { id: "genl-tune-eval", lane: "Secondary: Fine-tune existing model", context: "Evaluation", name: "Evaluate tuned model", tools: ["NeMo Evaluator"], optionalTools: ["NeMo Guardrails"], note: "Compare against baseline for task quality, safety, overfitting, and regressions before serving the tuned artifact" },
      { id: "genl-tune-deploy", lane: "Secondary: Fine-tune existing model", context: "Deploy", name: "Deploy tuned endpoint", tools: ["NIM"], optionalTools: ["NIM Operator", "Triton Inference Server"], note: "Serve the tuned model or adapter-backed endpoint with rollout, rollback, and monitoring controls" },

      { id: "genl-train-data", lane: "Reference: Train model from zero", context: "Data processing", name: "Process foundation corpus", tools: [], optionalTools: ["NeMo Curator", "RAPIDS"], note: "Reference-only: dedupe, filter, redact PII, check licenses, manage contamination, tokenize, and split holdouts" },
      { id: "genl-train-run", lane: "Reference: Train model from zero", context: "Training", name: "Train foundation model", tools: [], optionalTools: ["NeMo Framework", "NCCL", "NGC"], note: "Reference-only: distributed recipes, collectives, checkpoints, mixed precision, and artifact tracking" },
      { id: "genl-train-eval", lane: "Reference: Train model from zero", context: "Evaluation", name: "Evaluate trained model", tools: [], optionalTools: ["NeMo Evaluator"], note: "Reference-only: quality, safety, capability, bias, and readiness checks before publishing" },
      { id: "genl-train-deploy", lane: "Reference: Train model from zero", context: "Publish", name: "Publish and serve artifact", tools: [], optionalTools: ["NGC", "NIM", "NIM Operator"], note: "Reference-only: register the approved artifact, package it, expose an inference API, and keep rollback evidence" }
    ]
  },
  "Agentic AI": {
    title: "Agentic AI exam concept map",
    lanes: {
      "1. Agent Architecture and Design": "Design roles, autonomy boundaries, reasoning loops, communication, state ownership, and multi-agent structure before choosing a product.",
      "2. Agent Development": "Build prompts, tool contracts, structured outputs, API/function calls, orchestration, retries, and graceful failure behavior.",
      "3. Evaluation and Tuning": "Evaluate final answers and full trajectories, then choose the smallest fix: prompt, schema, RAG, policy, routing, or tuning.",
      "4. Deployment and Scaling": "Operate the full agent chain under load: endpoints, tools, retrieval, memory, guardrails, queues, p95/p99, and rollouts.",
      "5. Cognition, Planning, and Memory": "Understand ReAct, plan-and-execute, reflection, task decomposition, memory types, and memory governance.",
      "6. Knowledge Integration and Data Handling": "Ground agents with RAG, structured data, knowledge graphs, ETL, metadata, ACLs, citations, and freshness controls.",
      "7. NVIDIA Platform Implementation": "Know the NVIDIA service boundaries: Agent Toolkit, Retriever, Guardrails, Evaluator, NIM, Triton, TensorRT-LLM, Dynamo, Nsight, Curator.",
      "8. Run, Monitor, and Maintain": "Trace live runs, monitor quality/safety/cost/latency, replay incidents, and feed failures back into evals and fixes.",
      "9. Safety, Ethics, and Compliance": "Layer policy controls around inputs, retrieval, tools, outputs, memory, PII, tenant isolation, and auditability.",
      "10. Human-AI Interaction and Oversight": "Place humans where risk requires them: approval, override, escalation, review evidence, and feedback loops."
    },
    stages: [
      { id: "aai-arch-boundary", lane: "1. Agent Architecture and Design", context: "Boundary", name: "Agent vs workflow vs chat", tools: ["NeMo Agent Toolkit"], optionalTools: [], note: "Choose a simple response, RAG workflow, deterministic state graph, or autonomous agent based on task uncertainty, tool need, and risk." },
      { id: "aai-arch-reasoning", lane: "1. Agent Architecture and Design", context: "Reasoning loop", name: "Pick the reasoning pattern", tools: ["NeMo Agent Toolkit"], optionalTools: ["Nemotron models"], note: "Match ReAct, router, plan-and-execute, supervisor, or blackboard patterns to dynamic observations and role boundaries." },
      { id: "aai-arch-multi-agent", lane: "1. Agent Architecture and Design", context: "Coordination", name: "Design multi-agent coordination", tools: ["NeMo Agent Toolkit"], optionalTools: [], note: "Use multiple agents only when roles, permissions, expertise, state, and communication contracts are separable and testable." },
      { id: "aai-arch-state", lane: "1. Agent Architecture and Design", context: "State", name: "Own state and handoffs", tools: ["NeMo Agent Toolkit"], optionalTools: [], note: "Define who owns task state, evidence, confidence, memory writes, approval gates, and audit trails across handoffs." },

      { id: "aai-dev-tool-contracts", lane: "2. Agent Development", context: "Tools", name: "Wire tool/API contracts", tools: ["NeMo Agent Toolkit"], optionalTools: ["NIM"], note: "Define function schemas, typed inputs, preconditions, permissions, idempotency, and output validation before execution." },
      { id: "aai-dev-structured-output", lane: "2. Agent Development", context: "Outputs", name: "Control prompts and structured outputs", tools: ["NeMo Agent Toolkit"], optionalTools: ["NeMo Guardrails"], note: "Use prompt templates, JSON schemas, validators, routing outputs, and refusal/escalation formats instead of trusting free-form text." },
      { id: "aai-dev-parallel-recovery", lane: "2. Agent Development", context: "Reliability", name: "Parallelize safely and recover", tools: ["NeMo Agent Toolkit"], optionalTools: [], note: "Parallelize independent read-only calls, sequence dependent writes, bound retries, checkpoint state, and fail gracefully." },
      { id: "aai-dev-orchestration", lane: "2. Agent Development", context: "Runtime", name: "Implement orchestration runtime", tools: ["NeMo Agent Toolkit"], optionalTools: ["NeMo Retriever", "NeMo Guardrails"], note: "Wire workflows, tools, retrievers, memory, routes, and policy gates as explicit runtime components." },

      { id: "aai-eval-trajectory", lane: "3. Evaluation and Tuning", context: "Trajectory", name: "Score the whole trajectory", tools: ["NeMo Evaluator"], optionalTools: ["NeMo Agent Toolkit"], note: "Evaluate route, retrieval, tool choice, tool arguments, memory use, final answer, safety, cost, and latency." },
      { id: "aai-eval-rag-tools", lane: "3. Evaluation and Tuning", context: "Layered eval", name: "Evaluate retrieval and tools", tools: ["NeMo Evaluator"], optionalTools: ["NeMo Retriever"], note: "Separate RAG recall/relevance/citation failures from tool selection, argument, authorization, and side-effect failures." },
      { id: "aai-eval-smallest-fix", lane: "3. Evaluation and Tuning", context: "Improve", name: "Choose the smallest fix", tools: ["NeMo Evaluator"], optionalTools: ["NeMo Customizer", "NeMo Curator"], note: "Fix prompts, schemas, retrieval, memory, routing, or policy before fine-tuning; tune only for durable behavior gaps." },
      { id: "aai-eval-feedback", lane: "3. Evaluation and Tuning", context: "Feedback", name: "Turn feedback into regression cases", tools: ["NeMo Evaluator"], optionalTools: [], note: "Convert incidents, user ratings, reviewer labels, and failed traces into replayable eval cases and release gates." },

      { id: "aai-deploy-decompose", lane: "4. Deployment and Scaling", context: "Topology", name: "Decompose the agent service", tools: ["NIM"], optionalTools: ["NeMo Retriever", "NeMo Guardrails"], note: "Scale model endpoints, orchestrator, tools, memory, vector DB, guardrails, and gateway as separate bottleneck owners." },
      { id: "aai-deploy-tail-latency", lane: "4. Deployment and Scaling", context: "Traffic", name: "Manage user traffic and tail latency", tools: ["NIM"], optionalTools: ["Triton Inference Server", "TensorRT-LLM"], note: "Translate user count into concurrency, request rate, token length, workflow steps, p95/p99, queue depth, and SLOs." },
      { id: "aai-deploy-resilience", lane: "4. Deployment and Scaling", context: "Resilience", name: "Add backpressure and isolation", tools: ["NIM Operator"], optionalTools: ["Dynamo (Triton Dynamo)"], note: "Use queues, timeouts, circuit breakers, bulkheads, async jobs, workload lanes, and autoscaling before failures cascade." },
      { id: "aai-deploy-rollout", lane: "4. Deployment and Scaling", context: "Release", name: "Roll out and profile safely", tools: ["Nsight Systems"], optionalTools: ["Nsight Compute", "NIM Operator"], note: "Use canary, blue-green, rollback, versioned prompts/indexes/tools, health checks, and trace-first bottleneck diagnosis." },

      { id: "aai-cog-react", lane: "5. Cognition, Planning, and Memory", context: "ReAct", name: "Use ReAct with stopping criteria", tools: ["NeMo Agent Toolkit"], optionalTools: [], note: "Reason, act, observe, and stop with budgets; avoid loops, redundant tools, and ungrounded private reasoning." },
      { id: "aai-cog-plan-reflect", lane: "5. Cognition, Planning, and Memory", context: "Planning", name: "Plan, decompose, and reflect carefully", tools: ["NeMo Agent Toolkit"], optionalTools: [], note: "Use planning for dependent subtasks and reflection for recoverable errors, while accounting for latency and weak self-critique." },
      { id: "aai-cog-memory-types", lane: "5. Cognition, Planning, and Memory", context: "Memory types", name: "Separate memory types", tools: ["NeMo Agent Toolkit"], optionalTools: ["NeMo Retriever"], note: "Distinguish working, session, long-term, episodic, semantic, entity, vector, and audit memory." },
      { id: "aai-cog-memory-governance", lane: "5. Cognition, Planning, and Memory", context: "Memory policy", name: "Govern memory writes and recall", tools: ["NeMo Agent Toolkit"], optionalTools: ["NeMo Guardrails"], note: "Use consent, TTL, deletion, sensitivity checks, relevance gates, and audit records for persistent memory." },

      { id: "aai-knowledge-rag", lane: "6. Knowledge Integration and Data Handling", context: "RAG", name: "Build the retrieval path", tools: ["NeMo Retriever"], optionalTools: [], note: "Parse, chunk, embed, index, hybrid search, rerank, pack context, cite sources, and evaluate groundedness." },
      { id: "aai-knowledge-structured", lane: "6. Knowledge Integration and Data Handling", context: "Structured data", name: "Use structured data and graphs", tools: [], optionalTools: ["NeMo Retriever"], note: "Choose SQL/API/knowledge graph access when exact relationships, permissions, or current system state matter more than semantic similarity." },
      { id: "aai-knowledge-access", lane: "6. Knowledge Integration and Data Handling", context: "Access", name: "Preserve ACLs, freshness, and provenance", tools: ["NeMo Retriever"], optionalTools: ["NeMo Guardrails"], note: "Enforce tenant filters before context assembly; keep source lineage, freshness, citations, and unauthorized-context checks." },
      { id: "aai-knowledge-curation", lane: "6. Knowledge Integration and Data Handling", context: "Data prep", name: "Separate curation from runtime retrieval", tools: ["NeMo Curator"], optionalTools: ["RAPIDS", "NeMo Retriever"], note: "Use curation for offline corpus cleanup, tuning examples, or eval sets; use retrieval for query-time knowledge." },

      { id: "aai-platform-core", lane: "7. NVIDIA Platform Implementation", context: "Core stack", name: "Map the core agentic stack", tools: ["NeMo Agent Toolkit", "NeMo Retriever", "NeMo Guardrails", "NeMo Evaluator", "NIM"], optionalTools: [], note: "Know which NVIDIA component owns orchestration, retrieval, policy, evaluation, and inference APIs." },
      { id: "aai-platform-serving", lane: "7. NVIDIA Platform Implementation", context: "Serving stack", name: "Map serving and optimization tools", tools: ["NIM", "Triton Inference Server", "TensorRT-LLM"], optionalTools: ["Dynamo (Triton Dynamo)", "NIM Operator"], note: "Separate packaged inference APIs, model serving, LLM engine optimization, distributed serving, and Kubernetes lifecycle." },
      { id: "aai-platform-diagnostics", lane: "7. NVIDIA Platform Implementation", context: "Diagnostics", name: "Choose the right diagnostic layer", tools: ["Nsight Systems"], optionalTools: ["Nsight Compute"], note: "Use system timelines before kernel deep dives; do not diagnose an agent workflow with a CUDA-kernel tool first." },
      { id: "aai-platform-boundaries", lane: "7. NVIDIA Platform Implementation", context: "Traps", name: "Avoid product-boundary traps", tools: ["NeMo Curator", "NeMo Customizer", "NeMo Framework"], optionalTools: ["NGC", "NCCL"], note: "Curator prepares data, Customizer/Framework change models, NGC stores artifacts, NCCL is distributed training support, not agent orchestration." },

      { id: "aai-run-trace", lane: "8. Run, Monitor, and Maintain", context: "Trace", name: "Trace live agent runs", tools: ["NeMo Agent Toolkit"], optionalTools: ["Nsight Systems"], note: "Log route, prompt, model, retrieval, tools, memory, guardrails, reviews, versions, latency, cost, and replay identifiers." },
      { id: "aai-run-dashboard", lane: "8. Run, Monitor, and Maintain", context: "Monitor", name: "Monitor behavior and reliability", tools: ["NeMo Evaluator"], optionalTools: [], note: "Track task success, groundedness, hallucination, refusal correctness, tool errors, retries, escalation rate, cost, and p95/p99." },
      { id: "aai-run-maintain", lane: "8. Run, Monitor, and Maintain", context: "Maintain", name: "Maintain prompts, tools, memory, and indexes", tools: [], optionalTools: ["NeMo Retriever", "NeMo Evaluator"], note: "Update schemas, prompts, indexes, memory quality, API keys, eval suites, and regression gates from production incidents." },

      { id: "aai-safety-layered", lane: "9. Safety, Ethics, and Compliance", context: "Controls", name: "Layer safety controls", tools: ["NeMo Guardrails"], optionalTools: [], note: "Check inputs, retrieved content, tool/action proposals, tool results, memory writes, and final outputs at the right boundary." },
      { id: "aai-safety-injection", lane: "9. Safety, Ethics, and Compliance", context: "Threats", name: "Defend against injection and leakage", tools: ["NeMo Guardrails"], optionalTools: ["NeMo Retriever"], note: "Treat user and retrieved content as untrusted; enforce ACLs, tenant filters, least privilege, and PII retention policy." },
      { id: "aai-safety-audit", lane: "9. Safety, Ethics, and Compliance", context: "Audit", name: "Keep compliance evidence", tools: ["NeMo Guardrails"], optionalTools: ["NeMo Evaluator"], note: "Record policy decisions, evidence, reviewer actions, model/tool versions, fairness checks, and incident response evidence." },

      { id: "aai-human-routing", lane: "10. Human-AI Interaction and Oversight", context: "Routing", name: "Choose HITL vs HOTL", tools: [], optionalTools: ["NeMo Guardrails"], note: "Use human-in-the-loop for high-impact approval, human-on-the-loop for sampled monitoring, and automation for low-risk reversible work." },
      { id: "aai-human-review-card", lane: "10. Human-AI Interaction and Oversight", context: "Review UX", name: "Design review evidence cards", tools: [], optionalTools: ["NeMo Agent Toolkit"], note: "Show proposed action, confidence, sources, tool plan, policy result, versions, and safe default so reviewers can decide quickly." },
      { id: "aai-human-feedback", lane: "10. Human-AI Interaction and Oversight", context: "Feedback", name: "Close the oversight feedback loop", tools: ["NeMo Evaluator"], optionalTools: ["NeMo Guardrails"], note: "Use reviewer labels, overrides, escalations, and complaints to update evals, prompts, policies, tools, data, or memory rules." }
    ]
  },
  "Agentic AI General": {
    title: "Agentic AI general study paths",
    lanes: {
      "Build agent/RAG application": "Most exam and product work starts here: choose workflow vs RAG vs bounded agent, wire tools/memory, add policy, and evaluate trajectories.",
      "Use existing model or API": "Default product path when no weight change is needed: choose a model/API, adapt with prompts/context, wrap it in a serving layer, then measure it.",
      "Fine-tune existing model": "Use when an existing model is close, but durable behavior, style, criteria adherence, or preference alignment must change.",
      "Train model from zero": "Rare anchor path: prepare corpora, run distributed training, evaluate the new artifact, then publish it for serving.",
      "Operate, govern, and improve": "After release, observe behavior, evaluate regressions, optimize cost/latency, and turn feedback into fixes."
    },
    stages: [
      { id: "gen-agent-architecture", lane: "Build agent/RAG application", context: "Decision rule", name: "Decide: fixed workflow, RAG, or ReAct loop", tools: ["Agent Orchestration Runtime", "Prompt and Context Design"], note: "Study the split: fixed workflow for known/auditable steps, RAG for source-grounded answers, ReAct when tool observations decide the next action." },
      { id: "gen-agent-ingest", lane: "Build agent/RAG application", context: "Knowledge prep", name: "Ingest private knowledge", tools: ["Knowledge Ingestion and Permission Pipeline"], note: "Extract, chunk, enrich metadata, preserve ACLs, source lineage, retention rules" },
      { id: "gen-agent-rag", lane: "Build agent/RAG application", context: "Grounding", name: "Build retrieval path", tools: ["Knowledge and RAG Pipeline"], note: "Search, filter, rerank, assemble context, cite sources, evaluate groundedness and anti-hallucination measures" },
      { id: "gen-agent-react", lane: "Build agent/RAG application", context: "ReAct loop", name: "Use ReAct only for dynamic tool loops", tools: ["Agent Orchestration Runtime", "Tool Gateway and Function Runtime"], note: "ReAct = Reason -> Act -> Observe -> decide next step. Use it when tool observations change the path; avoid it for fixed audited workflows." },
      { id: "gen-agent-workflow", lane: "Build agent/RAG application", context: "Workflow", name: "Orchestrate tools and memory", tools: ["Agent Orchestration Runtime", "Tool Gateway and Function Runtime", "Memory Store"], note: "State, routing, tool schemas, permissions, idempotency, memory scopes" },
      { id: "gen-agent-policy", lane: "Build agent/RAG application", context: "Runtime safety", name: "Apply policy controls", tools: ["Policy and Guardrails Layer"], note: "Input, retrieved content, tool proposal, tool result, and output checks" },
      { id: "gen-agent-eval", lane: "Build agent/RAG application", context: "Trajectory eval", name: "Evaluate agent behavior", tools: ["Evaluation and Regression Harness"], note: "Final answer, groundedness, tool correctness, safety, latency, and cost" },

      { id: "gen-api-select", lane: "Use existing model or API", context: "Model/API", name: "Choose existing model", tools: ["Model Selection and Registry"], note: "Pick hosted API, open model, catalog artifact, or approved internal model for the job" },
      { id: "gen-api-prompt", lane: "Use existing model or API", context: "No weight change", name: "Design prompt and context", tools: ["Prompt and Context Design"], note: "Instructions, examples, output schema, context packing, prompt versions, rollback" },
      { id: "gen-api-serve", lane: "Use existing model or API", context: "Runtime", name: "Expose and route calls", tools: ["Model Inference Endpoint", "Model Serving Gateway"], note: "Endpoint/API, auth, rate limits, fallback, canary, batching, traffic policy" },
      { id: "gen-api-measure", lane: "Use existing model or API", context: "Check", name: "Measure quality and cost", tools: ["Evaluation and Regression Harness", "Cost/Latency Optimizer"], note: "Prompt evals, latency, token cost, model routing, cache/context discipline" },

      { id: "gen-tune-select", lane: "Fine-tune existing model", context: "Base model", name: "Select base model", tools: ["Model Selection and Registry"], note: "Choose the base model/API or checkpoint; record lineage and constraints" },
      { id: "gen-tune-data", lane: "Fine-tune existing model", context: "Tuning data", name: "Curate examples", tools: ["Training Data Curation Pipeline"], note: "Prepare SFT examples, preference pairs, tool traces, PII cleanup, validation holdouts" },
      { id: "gen-tune-adapt", lane: "Fine-tune existing model", context: "Adaptation", name: "Tune durable behavior", tools: ["Model Customization Toolkit"], note: "PEFT/LoRA, SFT, preference tuning, or alignment when prompts/RAG are not enough" },
      { id: "gen-tune-eval", lane: "Fine-tune existing model", context: "Release gate", name: "Compare against baseline", tools: ["Evaluation and Regression Harness", "Model Selection and Registry"], note: "Measure gains, regressions, safety, overfitting, and adapter/version approval" },
      { id: "gen-tune-serve", lane: "Fine-tune existing model", context: "Deploy", name: "Deploy tuned endpoint", tools: ["Model Inference Endpoint", "Model Serving Gateway"], note: "Serve the tuned model or adapter-backed endpoint with rollout controls" },

      { id: "gen-train-data", lane: "Train model from zero", context: "Training data", name: "Curate model corpus", tools: ["Training Data Curation Pipeline"], note: "Dedupe, filter, license-check, redact PII, control contamination, split holdouts" },
      { id: "gen-train-run", lane: "Train model from zero", context: "Training", name: "Run foundation training", tools: ["Foundation Model Training Stack"], note: "Training recipe, distributed jobs, checkpoints, experiment tracking, model card inputs" },
      { id: "gen-train-eval", lane: "Train model from zero", context: "Evaluation", name: "Evaluate trained model", tools: ["Evaluation and Regression Harness"], note: "Quality, safety, regression, bias, capability, and readiness evidence" },
      { id: "gen-train-serve", lane: "Train model from zero", context: "Publish trained checkpoint", name: "Register and serve trained artifact", tools: ["Model Inference Endpoint", "Model Serving Gateway"], note: "Register the newly trained checkpoint, package it as an endpoint, route traffic, and keep rollback path" },

      { id: "gen-ops-observe", lane: "Operate, govern, and improve", context: "Live traces", name: "Observe production runs", tools: ["Observability and Trace Monitor"], note: "Trace model, retrieval, tool, guardrail, route, cost, failure, and task success" },
      { id: "gen-ops-optimize", lane: "Operate, govern, and improve", context: "Efficiency", name: "Optimize serving path", tools: ["Cost/Latency Optimizer", "Model Serving Gateway"], note: "Batching, caching, routing, context discipline, model size, queueing, prefill/decode" },
      { id: "gen-ops-scale-users", lane: "Operate, govern, and improve", context: "Traffic scale", name: "Plan for 100, 10k, or 1M users", tools: ["Latency, Throughput, and Traffic Control", "Model Serving Gateway"], note: "User count is only the start; convert it into request rate, concurrency, token shape, queue depth, p95/p99, and failure isolation." },
      { id: "gen-ops-review", lane: "Operate, govern, and improve", context: "Oversight", name: "Review and govern risk", tools: ["Human Review and Governance Console", "Policy and Guardrails Layer"], note: "Approval gates, sampled review, escalation, audit evidence, policy updates" },
      { id: "gen-ops-feedback", lane: "Operate, govern, and improve", context: "Improvement loop", name: "Feed fixes back", tools: ["Evaluation and Regression Harness", "Training Data Curation Pipeline", "Prompt and Context Design"], note: "Turn incidents and review labels into evals, prompts, data fixes, or tuning work" }
    ]
  }
};

const STUDY_ROUTE_JUMP_TARGETS = {
  "Agent Lifecycle and Architecture": {
    certSlug: "agentic_ai_general_study",
    studyView: "builder",
    builderPathId: "build-tool-using-agent",
    cardId: "choose-workflow-or-agent"
  },
  "Data Curation and Knowledge Grounding": {
    certSlug: "agentic_ai_general_study",
    studyView: "builder",
    builderPathId: "build-rag-application",
    cardId: "define-knowledge-need"
  },
  "Model Selection and Customization": {
    certSlug: "agentic_ai_general_study",
    studyView: "builder",
    builderPathId: "use-existing-model-or-api",
    cardId: "choose-model-or-api"
  },
  "Tooling, Orchestration, and Memory": {
    certSlug: "agentic_ai_general_study",
    studyView: "builder",
    builderPathId: "build-tool-using-agent",
    cardId: "design-tool-contracts"
  },
  "Inference Serving and Deployment": {
    certSlug: "agentic_ai_general_study",
    studyView: "builder",
    builderPathId: "deploy-and-serve-ai-system",
    cardId: "choose-serving-shape"
  },
  "Latency, Throughput, and Traffic Control": {
    certSlug: "agentic_ai_general_study",
    studyView: "builder",
    builderPathId: "deploy-and-serve-ai-system",
    cardId: "handle-latency-and-throughput"
  },
  "Evaluation and Safety": {
    certSlug: "agentic_ai_general_study",
    studyView: "builder",
    builderPathId: "build-tool-using-agent",
    cardId: "evaluate-trajectory"
  },
  "Observability, Operations, and Cost": {
    certSlug: "agentic_ai_general_study",
    studyView: "builder",
    builderPathId: "run-evaluate-and-improve",
    cardId: "trace-every-run"
  },
  "Human Oversight and Governance": {
    certSlug: "agentic_ai_general_study",
    studyView: "builder",
    builderPathId: "run-evaluate-and-improve",
    cardId: "review-human-risk"
  },
  "Prompt and Context Design": {
    certSlug: "agentic_ai_general_study",
    studyView: "builder",
    builderPathId: "use-existing-model-or-api",
    cardId: "write-prompt-contract"
  },
  "Policy and Guardrails Layer": {
    certSlug: "agentic_ai_general_study",
    studyView: "builder",
    builderPathId: "build-tool-using-agent",
    cardId: "apply-runtime-safety"
  },
  "NVIDIA Platform Implementation": {
    certSlug: "agentic_ai_professional",
    studyView: "sections",
    sectionName: "NVIDIA Platform Implementation",
    sectionExam: "Agentic AI"
  },
  "NVIDIA Suite": {
    certSlug: "agentic_ai_professional",
    studyView: "suite",
    suiteTopicId: "platform-map"
  }
};

function studyRouteJumpTarget(studyPage) {
  const target = STUDY_ROUTE_JUMP_TARGETS[studyPage];
  if (!target) return null;
  return {
    studyPage,
    ...target
  };
}

const AAI_LIFECYCLE_STAGE_DETAILS = {
  "aai-arch-boundary": {
    focus: "This card defines the first exam decision: do you need a chat answer, a deterministic workflow, a RAG workflow, or an autonomous agent with tools and state?",
    sections: ["Agent Architecture and Design"],
    studyPages: ["Agent Lifecycle and Architecture", "Tooling, Orchestration, and Memory"],
    checks: ["Use a workflow when the process is fixed and auditable", "Use an agent when steps depend on observations or tool results", "Use human review when autonomy or action risk exceeds the allowed boundary"],
    signals: ["agent vs workflow", "too much autonomy", "deterministic path", "approval gate", "tool-needed task"],
    code: ["if fixed_process: use_state_graph()", "elif needs_tools_and_replanning: use_bounded_agent()", "elif high_risk_action: require_human_approval()"].join("\n"),
    nvidiaExamples: [["NeMo Agent Toolkit", "Recognize it when the scenario asks to implement the workflow or agent runtime."]]
  },
  "aai-arch-reasoning": {
    focus: "The exam expects you to map the reasoning pattern to task shape instead of choosing the most advanced-sounding agent.",
    sections: ["Agent Architecture and Design", "Cognition, Planning, and Memory"],
    studyPages: ["Agent Lifecycle and Architecture", "Tooling, Orchestration, and Memory"],
    checks: ["ReAct fits dynamic tool observation loops", "Plan-and-execute fits decomposable dependent tasks", "Router/supervisor patterns fit explicit role or policy boundaries"],
    signals: ["ReAct", "plan-and-execute", "router", "supervisor", "blackboard", "reflection"],
    code: ["if observations_change_next_step: pattern = \"react\"", "elif task_has_dependent_subtasks: pattern = \"plan_execute\"", "elif roles_are_separate: pattern = \"supervisor\""].join("\n"),
    nvidiaExamples: [["NeMo Agent Toolkit", "Use for ReAct, router, sequential, parallel, or multi-agent workflow wiring."], ["Nemotron models", "Use as a model-family example when reasoning-model choice is explicit."]]
  },
  "aai-arch-multi-agent": {
    focus: "Multi-agent design is useful only when role separation reduces complexity more than it adds latency, handoff, and evaluation burden.",
    sections: ["Agent Architecture and Design"],
    studyPages: ["Agent Lifecycle and Architecture", "Evaluation and Safety"],
    checks: ["Define each role, allowed tools, shared state, and handoff contract", "Propagate evidence and confidence between agents", "Avoid multi-agent designs for simple single-agent workflows"],
    signals: ["single vs multi-agent", "handoff", "specialist roles", "shared memory", "agent-to-agent communication"],
    code: ["for agent in specialists:", "    agent.tools = allowed_tools(agent.role)", "supervisor.merge(outputs, evidence, confidence)"].join("\n"),
    nvidiaExamples: [["NeMo Agent Toolkit", "Use when the product question is about coordinating multiple agents or publishing A2A/MCP style interfaces."]]
  },
  "aai-arch-state": {
    focus: "State ownership is what makes the agent auditable and recoverable: the system must know who owns task state, evidence, approvals, memory writes, and transitions.",
    sections: ["Agent Architecture and Design", "Run, Monitor, and Maintain"],
    studyPages: ["Tooling, Orchestration, and Memory", "Human Oversight and Governance"],
    checks: ["Centralize state when approvals or auditability matter", "Record source evidence and confidence across handoffs", "Version prompts, tools, model, retriever, and policy decisions"],
    signals: ["stateful orchestration", "handoff", "audit trail", "decision traceability", "lost context"],
    code: ["state = load_task_state(task_id)", "state = transition(state, observation, approval)", "audit.log(state.prev, state.next, state.reason)"].join("\n"),
    nvidiaExamples: [["NeMo Agent Toolkit", "Use for traceable workflow state and handoff implementation."]]
  },
  "aai-dev-tool-contracts": {
    focus: "The model can propose a tool call, but deterministic runtime code owns schema validation, permissions, preconditions, idempotency, and output checks.",
    sections: ["Agent Development"],
    studyPages: ["Tooling, Orchestration, and Memory"],
    checks: ["Tool arguments must be typed and validated", "Authorization happens before the side effect", "Writes need idempotency keys and audit logs"],
    signals: ["tool schema", "API wrapper", "function calling", "permissions", "idempotency", "side effect"],
    code: ["call = model.propose_tool(schema)", "validate(call.args); authorize(user, call)", "execute(call, idempotency_key=task_id)"].join("\n"),
    nvidiaExamples: [["NeMo Agent Toolkit", "Use for workflow and tool wiring."], ["NIM", "Use as the model endpoint behind the agent, not as the tool contract owner."]]
  },
  "aai-dev-structured-output": {
    focus: "Structured outputs turn a probabilistic model response into a runtime decision object that can be validated, routed, retried, or escalated.",
    sections: ["Agent Development", "Safety, Ethics, and Compliance"],
    studyPages: ["Prompt and Context Design", "Policy and Guardrails Layer"],
    checks: ["Use JSON/schema output for routes, actions, and tool arguments", "Validate model output before downstream execution", "Prefer schema or prompt fixes before model tuning for formatting failures"],
    signals: ["JSON schema", "structured output", "route label", "validator", "formatting failure"],
    code: ["raw = model.generate(messages)", "action = parse_json(raw, schema)", "if not valid(action): repair_or_escalate()"].join("\n"),
    nvidiaExamples: [["NeMo Guardrails", "Use when output or dialog policy must be enforced around the structured response."]]
  },
  "aai-dev-parallel-recovery": {
    focus: "Agent speed and reliability depend on knowing when calls can run in parallel and how failures stop without retry storms.",
    sections: ["Agent Development", "Deployment and Scaling"],
    studyPages: ["Tooling, Orchestration, and Memory", "Latency, Throughput, and Traffic Control"],
    checks: ["Parallelize independent read-only tools", "Sequence dependent writes and irreversible actions", "Use bounded retries, checkpoint state, fallback, and escalation"],
    signals: ["parallel tool calls", "sequential tools are slow", "retry loop", "timeout", "graceful failure"],
    code: ["if tools_are_independent_and_read_only: run_parallel(tools)", "else: run_in_dependency_order(tools)", "retry_with_backoff(max_attempts=3)"].join("\n"),
    nvidiaExamples: [["NeMo Agent Toolkit", "Use when the implementation is an agent workflow with retry and trace hooks."]]
  },
  "aai-dev-orchestration": {
    focus: "Development questions often test the runtime wiring: prompts, tools, retrievers, memory, guardrails, route state, and error states.",
    sections: ["Agent Development"],
    studyPages: ["Agent Lifecycle and Architecture", "Tooling, Orchestration, and Memory", "Data Curation and Knowledge Grounding"],
    checks: ["Keep model endpoint, retrieval, tools, memory, and policy as separate components", "Make state transitions and error paths explicit", "Instrument the workflow so evaluation and operations can reuse traces"],
    signals: ["orchestration framework", "workflow config", "tool group", "retriever", "memory", "runtime wiring"],
    code: ["workflow = {llms, tools, retrievers, memory, rails}", "trace = workflow.run(input, state)", "evaluate(trace)"].join("\n"),
    nvidiaExamples: [["NeMo Agent Toolkit", "Use for the workflow runtime."], ["NeMo Retriever", "Use for retrieval wiring."], ["NeMo Guardrails", "Use for runtime policy wiring."]]
  },
  "aai-eval-trajectory": {
    focus: "Agent evaluation scores the path, not just final text. Two answers can be identical while one path leaked data, called bad tools, or cost too much.",
    sections: ["Evaluation and Tuning"],
    studyPages: ["Evaluation and Safety", "Observability, Operations, and Cost"],
    checks: ["Score route, retrieval, tool choice, arguments, observations, memory, safety, cost, and latency", "Use trace replay for failures", "Keep final answer metrics separate from trajectory metrics"],
    signals: ["trajectory evaluation", "tool correctness", "path optimality", "task success", "latency/cost"],
    code: ["score.answer = task_success(output)", "score.tools = tool_correctness(trace)", "score.safety = policy_pass(trace)"].join("\n"),
    nvidiaExamples: [["NeMo Evaluator", "Use for agent/RAG/model evaluation and regression checks."], ["NeMo Agent Toolkit", "Use when trace replay or workflow inspection is named."]]
  },
  "aai-eval-rag-tools": {
    focus: "Evaluation must localize failures. Wrong document, right document wrong segment, bad tool args, and unauthorized action are different fixes.",
    sections: ["Evaluation and Tuning", "Knowledge Integration and Data Handling"],
    studyPages: ["Evaluation and Safety", "Data Curation and Knowledge Grounding"],
    checks: ["RAG eval measures recall, relevance, groundedness, and citation support", "Tool eval measures selection, arguments, authorization, and side effects", "Do not fine-tune before locating the failing layer"],
    signals: ["right doc wrong segment", "unsupported citation", "bad tool argument", "tool-call success"],
    code: ["if retrieval_recall_low: tune_retrieval()", "elif tool_args_invalid: fix_schema_examples()", "elif answer_unsupported: add_groundedness_gate()"].join("\n"),
    nvidiaExamples: [["NeMo Evaluator", "Use for evaluation harnesses."], ["NeMo Retriever", "Use when retrieval quality is the failing layer."]]
  },
  "aai-eval-smallest-fix": {
    focus: "The best fix is usually the smallest layer that owns the failure. Tuning is not the default answer for tool, RAG, schema, or policy failures.",
    sections: ["Evaluation and Tuning"],
    studyPages: ["Model Selection and Customization", "Evaluation and Safety"],
    checks: ["Prompt/schema fixes for instruction and formatting failures", "RAG fixes for missing or changing facts", "Fine-tuning only for durable behavior gaps with curated examples"],
    signals: ["prompt vs fine-tune", "durable behavior", "LoRA/SFT", "feedback loop", "regression holdout"],
    code: ["fix = classify_failure(trace)", "apply_smallest_owner_fix(fix)", "run_regression_suite(before_promote=True)"].join("\n"),
    nvidiaExamples: [["NeMo Evaluator", "Use to prove the failure and verify the fix."], ["NeMo Customizer", "Use only when supported model customization is the right layer."], ["NeMo Curator", "Use for curated examples or holdouts."]]
  },
  "aai-eval-feedback": {
    focus: "Production feedback is useful only when it becomes eval cases, labels, policies, prompts, data fixes, or tool/schema changes.",
    sections: ["Evaluation and Tuning", "Run, Monitor, and Maintain"],
    studyPages: ["Evaluation and Safety", "Human Oversight and Governance"],
    checks: ["Convert incidents and reviews into replayable tests", "Track metric movement after each fix", "Avoid bundling unrelated changes into one aggregate score"],
    signals: ["user feedback", "review labels", "regression", "A/B", "canary evaluation"],
    code: ["case = make_eval_case(trace, reviewer_label)", "candidate = apply_fix(case.failure_layer)", "promote_if(candidate.score > baseline.score)"].join("\n"),
    nvidiaExamples: [["NeMo Evaluator", "Use for scheduled regression and candidate comparison."]]
  },
  "aai-deploy-decompose": {
    focus: "Deployment questions are about the whole agent chain, not just the model endpoint.",
    sections: ["Deployment and Scaling"],
    studyPages: ["Inference Serving and Deployment", "Latency, Throughput, and Traffic Control"],
    checks: ["Scale model, retriever, vector DB, tools, memory, guardrails, and orchestrator separately", "Use endpoint separation for generator, embeddings, reranker, batch, and real-time traffic", "Trace before adding capacity"],
    signals: ["agent service", "microservices", "endpoint separation", "model endpoint", "retriever endpoint"],
    code: ["deploy(agent_api)", "deploy(generator_nim); deploy(embedding_nim)", "deploy(retriever, vector_db, policy_layer)"].join("\n"),
    nvidiaExamples: [["NIM", "Use for optimized model APIs."], ["NeMo Retriever", "Use for RAG services."], ["NeMo Guardrails", "Use for policy services."]]
  },
  "aai-deploy-tail-latency": {
    focus: "User count is not capacity by itself. Convert it to concurrent requests, request rate, token lengths, workflow steps, queue depth, and p95/p99 SLOs.",
    sections: ["Deployment and Scaling", "Run, Monitor, and Maintain"],
    studyPages: ["Latency, Throughput, and Traffic Control", "Observability, Operations, and Cost"],
    checks: ["p95 means 95% of requests finish at or below that time", "p99 exposes tail latency hidden by averages", "TTFT matters for chat responsiveness even when total latency is acceptable"],
    signals: ["p95", "p99", "TTFT", "many users", "queue delay", "tail latency"],
    code: ["slo = {p95_ms, p99_ms, ttft_ms}", "trace_by_span(requests)", "fix_span_with_worst_tail_latency()"].join("\n"),
    nvidiaExamples: [["NIM", "Use for served model endpoints."], ["Triton Inference Server", "Use when serving/batching behavior is central."], ["TensorRT-LLM", "Use when LLM decode, KV cache, batching, or TTFT is central."]]
  },
  "aai-deploy-resilience": {
    focus: "Backpressure and isolation protect the system when tools, vector DBs, or model endpoints are slow or overloaded.",
    sections: ["Deployment and Scaling"],
    studyPages: ["Latency, Throughput, and Traffic Control", "Inference Serving and Deployment"],
    checks: ["Use queues, timeouts, circuit breakers, and bulkheads", "Separate real-time and batch lanes", "Autoscale on the component that is saturated, not the loudest product name"],
    signals: ["backpressure", "circuit breaker", "bulkhead", "autoscaling lag", "shared queue", "head-of-line blocking"],
    code: ["if queue_depth > threshold: shed_or_degrade()", "if tool_timeout_rate_high: open_circuit(tool)", "route(batch, lane=\"offline\")"].join("\n"),
    nvidiaExamples: [["NIM Operator", "Use for Kubernetes lifecycle and scale of NIM deployments."], ["Dynamo (Triton Dynamo)", "Use for distributed LLM serving patterns."]]
  },
  "aai-deploy-rollout": {
    focus: "Safe rollout requires versioned artifacts, canaries, rollback, health checks, and profiling before broad traffic.",
    sections: ["Deployment and Scaling", "Run, Monitor, and Maintain"],
    studyPages: ["Inference Serving and Deployment", "Observability, Operations, and Cost"],
    checks: ["Canary new prompts, tools, models, retrievers, and policies", "Rollback uses versioned model/prompt/tool/index/policy metadata", "Use system timeline first for performance diagnosis"],
    signals: ["canary", "blue-green", "rollback", "health check", "Nsight", "profile bottleneck"],
    code: ["gateway.canary(version=\"agent-v2\", traffic=0.05)", "if quality_bad or p99_bad: rollback(version=\"agent-v1\")", "profile(trace_id)"].join("\n"),
    nvidiaExamples: [["Nsight Systems", "Use for end-to-end timeline diagnosis."], ["Nsight Compute", "Use after a kernel is isolated."], ["NIM Operator", "Use for K8s rollout and lifecycle."]]
  },
  "aai-cog-react": {
    focus: "ReAct combines reasoning, tool action, observation, and next-step selection. It must have budgets and stopping criteria.",
    sections: ["Cognition, Planning, and Memory"],
    studyPages: ["Agent Lifecycle and Architecture", "Tooling, Orchestration, and Memory"],
    checks: ["Use ReAct for dynamic tool feedback", "Bound tool calls and loop depth", "Stop when evidence is sufficient or confidence is too low"],
    signals: ["ReAct", "plan-act-observe", "tool observation", "loop", "stopping criteria"],
    code: ["while budget_left:", "    action = choose_next_action(state)", "    state = observe(execute(action))"].join("\n"),
    nvidiaExamples: [["NeMo Agent Toolkit", "Use for implementing ReAct-style workflows."]]
  },
  "aai-cog-plan-reflect": {
    focus: "Planning and reflection improve complex tasks but add cost, latency, and failure modes if the evaluator is weak.",
    sections: ["Cognition, Planning, and Memory"],
    studyPages: ["Agent Lifecycle and Architecture", "Evaluation and Safety"],
    checks: ["Plan for dependent subtasks", "Replan when observations invalidate the plan", "Use reflection only when critique has a useful signal"],
    signals: ["plan-and-execute", "task decomposition", "reflection", "critic", "replanning"],
    code: ["plan = make_plan(task)", "for step in plan: execute_or_replan(step)", "if critic_finds_issue: revise()"].join("\n"),
    nvidiaExamples: [["NeMo Agent Toolkit", "Use for plan/execution workflow patterns."]]
  },
  "aai-cog-memory-types": {
    focus: "Memory is not one thing. The exam distinguishes current context, task state, long-term preferences, prior events, facts, entities, vectors, and audit logs.",
    sections: ["Cognition, Planning, and Memory"],
    studyPages: ["Tooling, Orchestration, and Memory", "Data Curation and Knowledge Grounding"],
    checks: ["Working/session memory is not persistent memory", "Entity memory stores facts tied to users/accounts/projects", "Vector memory is retrieval, not unlimited context"],
    signals: ["short-term memory", "long-term memory", "episodic", "semantic", "entity", "vector store"],
    code: ["working = current_task_state()", "long_term = memory.search(user, query)", "audit = append_only_decision_log()"].join("\n"),
    nvidiaExamples: [["NeMo Agent Toolkit", "Use for workflow memory integration."], ["NeMo Retriever", "Use when memory is implemented as retrieval over stored facts."]]
  },
  "aai-cog-memory-governance": {
    focus: "Persistent memory is a data-governance feature. It needs consent, TTL, deletion, sensitivity checks, relevance gates, and auditability.",
    sections: ["Cognition, Planning, and Memory", "Safety, Ethics, and Compliance"],
    studyPages: ["Tooling, Orchestration, and Memory", "Human Oversight and Governance"],
    checks: ["Do not use context window for cross-session preference memory", "Never write sensitive memory without policy and consent", "Filter recall by relevance, recency, user, and permission"],
    signals: ["remember preference", "forget/delete", "TTL", "consent", "privacy", "memory retrieval correctness"],
    code: ["if should_remember(fact) and consent_ok:", "    memory.write(fact, ttl, sensitivity)", "recall = memory.search(query, filters={user, ttl, permission})"].join("\n"),
    nvidiaExamples: [["NeMo Guardrails", "Use for policy checks around memory write/recall decisions."]]
  },
  "aai-knowledge-rag": {
    focus: "RAG is query-time knowledge. It should not be confused with fine-tuning or memorizing private/fresh facts in model weights.",
    sections: ["Knowledge Integration and Data Handling"],
    studyPages: ["Data Curation and Knowledge Grounding", "Evaluation and Safety"],
    checks: ["Parse, chunk, embed, index, retrieve, rerank, pack, cite", "Choose hybrid retrieval when dense-only misses lexical constraints", "Evaluate groundedness and citation support"],
    signals: ["RAG", "chunking", "embeddings", "hybrid search", "rerank", "citations"],
    code: ["chunks = chunk(parse(docs))", "hits = hybrid_search(query, filters=acl)", "context = rerank_pack_cite(hits)"].join("\n"),
    nvidiaExamples: [["NeMo Retriever", "Use for extraction, embedding, indexing, retrieval, reranking, and citations."]]
  },
  "aai-knowledge-structured": {
    focus: "Some knowledge questions require exact relationships or live system state, where SQL, APIs, or knowledge graphs beat pure vector similarity.",
    sections: ["Knowledge Integration and Data Handling", "Agent Development"],
    studyPages: ["Data Curation and Knowledge Grounding", "Tooling, Orchestration, and Memory"],
    checks: ["Use SQL/API tools for exact current records", "Use knowledge graphs when relationships and provenance matter", "Validate queries and keep writes gated"],
    signals: ["SQL", "API", "knowledge graph", "structured data", "exact relationship", "current record"],
    code: ["if exact_relationship_needed: use_knowledge_graph()", "elif live_record_needed: call_read_only_api()", "else: retrieve_semantic_context()"].join("\n"),
    nvidiaExamples: []
  },
  "aai-knowledge-access": {
    focus: "Enterprise knowledge must preserve access controls before context reaches the model. Guardrails do not replace ACLs.",
    sections: ["Knowledge Integration and Data Handling", "Safety, Ethics, and Compliance"],
    studyPages: ["Data Curation and Knowledge Grounding", "Policy and Guardrails Layer"],
    checks: ["Apply tenant/document/row filters before retrieval results enter context", "Keep provenance, timestamps, citations, and freshness metadata", "Block unauthorized context rather than asking the model to ignore it"],
    signals: ["ACL", "tenant isolation", "document permissions", "freshness", "provenance", "unauthorized context"],
    code: ["hits = search(query, filters=user_acl)", "context = pack(authorized_only(hits))", "assert no_cross_tenant_sources(context)"].join("\n"),
    nvidiaExamples: [["NeMo Retriever", "Use for permission-aware retrieval pipelines."], ["NeMo Guardrails", "Use for policy checks, not as pre-retrieval access control."]]
  },
  "aai-knowledge-curation": {
    focus: "Curation prepares corpora, examples, and holdouts offline. Retrieval serves query-time knowledge. The exam may test this boundary directly.",
    sections: ["Knowledge Integration and Data Handling", "NVIDIA Platform Implementation"],
    studyPages: ["Data Curation and Knowledge Grounding", "Model Selection and Customization"],
    checks: ["Use curation for dedupe, PII cleanup, filtering, labels, and eval/tuning examples", "Use retrieval for fresh/private facts at answer time", "Do not use fine-tuning to add changing internal knowledge"],
    signals: ["NeMo Curator", "dedupe", "PII cleanup", "eval holdout", "training examples", "query-time retrieval"],
    code: ["curated = curate(raw_docs)", "index = build_retrieval_index(curated.public_or_allowed)", "holdouts = split_eval_cases(curated.labels)"].join("\n"),
    nvidiaExamples: [["NeMo Curator", "Use for offline data/corpus/example preparation."], ["RAPIDS", "Use when GPU dataframe processing is the bottleneck."], ["NeMo Retriever", "Use after data becomes runtime retrieval content."]]
  },
  "aai-platform-core": {
    focus: "This is the product-boundary domain. Know what each core NVIDIA service owns in an agentic system.",
    sections: ["NVIDIA Platform Implementation"],
    studyPages: ["NVIDIA Platform Implementation", "NVIDIA Suite"],
    checks: ["Agent Toolkit orchestrates", "Retriever retrieves and reranks", "Guardrails governs policy", "Evaluator evaluates", "NIM serves model APIs"],
    signals: ["which NVIDIA service", "agent orchestration", "enterprise RAG", "guardrails", "evaluation", "NIM endpoint"],
    code: ["agent = AgentToolkit(workflow)", "docs = Retriever.search(query)", "model = NIM.openai_client(base_url)"].join("\n"),
    nvidiaExamples: [["NeMo Agent Toolkit", "Agent workflow runtime."], ["NeMo Retriever", "RAG/retrieval."], ["NeMo Guardrails", "Policy/safety."], ["NeMo Evaluator", "Evaluation."], ["NIM", "Inference API."]]
  },
  "aai-platform-serving": {
    focus: "Serving tools live at different layers. The exam often tests NIM vs Triton vs TensorRT-LLM vs Dynamo vs NIM Operator.",
    sections: ["NVIDIA Platform Implementation", "Deployment and Scaling"],
    studyPages: ["Inference Serving and Deployment", "Latency, Throughput, and Traffic Control"],
    checks: ["NIM packages optimized inference APIs", "Triton serves/schedules models and ensembles", "TensorRT-LLM optimizes LLM engines, KV cache, batching, and decode"],
    signals: ["NIM", "Triton", "TensorRT-LLM", "Dynamo", "NIM Operator", "KV cache"],
    code: ["client = OpenAI(base_url=NIM_URL)", "triton_model_config = dynamic_batching()", "engine = tensorrt_llm_build(checkpoint)"].join("\n"),
    nvidiaExamples: [["NIM", "Packaged inference microservice."], ["Triton Inference Server", "Serving and batching layer."], ["TensorRT-LLM", "LLM optimization engine."], ["Dynamo (Triton Dynamo)", "Distributed serving."], ["NIM Operator", "Kubernetes lifecycle."]]
  },
  "aai-platform-diagnostics": {
    focus: "Use the profiling tool that matches the question layer: full-system timeline first, CUDA kernel deep dive second.",
    sections: ["NVIDIA Platform Implementation", "Deployment and Scaling"],
    studyPages: ["Observability, Operations, and Cost", "Latency, Throughput, and Traffic Control"],
    checks: ["Nsight Systems for end-to-end CPU/GPU timeline", "Nsight Compute after one kernel is isolated", "Do not use kernel tools to solve tool/API or vector DB latency"],
    signals: ["timeline", "kernel", "CUDA", "GPU utilization", "end-to-end latency", "bottleneck"],
    code: ["if bottleneck_unknown: open_nsight_systems_trace()", "elif slow_kernel_known: inspect_with_nsight_compute()"].join("\n"),
    nvidiaExamples: [["Nsight Systems", "System timeline."], ["Nsight Compute", "CUDA kernel analysis."]]
  },
  "aai-platform-boundaries": {
    focus: "Boundary traps stop product-name memorization from becoming wrong answers.",
    sections: ["NVIDIA Platform Implementation"],
    studyPages: ["NVIDIA Platform Implementation", "Data Curation and Knowledge Grounding"],
    checks: ["Curator prepares data, not runtime retrieval", "Customizer/Framework change model behavior, not orchestration", "NGC stores artifacts; NCCL is distributed communication"],
    signals: ["Curator vs Retriever", "NIM vs Nemotron", "Triton vs TensorRT-LLM", "Guardrails vs access control", "NGC"],
    code: ["if need_runtime_facts: choose_retriever()", "elif need_dataset_cleanup: choose_curator()", "elif need_model_behavior_change: choose_customizer_or_framework()"].join("\n"),
    nvidiaExamples: [["NeMo Curator", "Offline data prep."], ["NeMo Customizer", "Managed customization."], ["NeMo Framework", "Training/customization framework."], ["NGC", "Catalog/registry."], ["NCCL", "Multi-GPU communication."]]
  },
  "aai-run-trace": {
    focus: "Live agents need traces that explain route, retrieval, tool calls, policy decisions, latency, cost, and versions.",
    sections: ["Run, Monitor, and Maintain"],
    studyPages: ["Observability, Operations, and Cost", "Evaluation and Safety"],
    checks: ["Trace every model, retrieval, tool, memory, guardrail, and review span", "Record model/prompt/tool/index/policy versions", "Make incidents replayable"],
    signals: ["distributed tracing", "trace replay", "versioned prompt", "route drift", "incident"],
    code: ["trace.log({route, model, index, tools, rails})", "trace.add_latency_spans()", "evals.add_case(trace.replay())"].join("\n"),
    nvidiaExamples: [["NeMo Agent Toolkit", "Use for workflow traces."], ["Nsight Systems", "Use when latency needs timeline diagnosis."]]
  },
  "aai-run-dashboard": {
    focus: "Production monitoring must include behavior and quality, not just uptime or GPU utilization.",
    sections: ["Run, Monitor, and Maintain"],
    studyPages: ["Observability, Operations, and Cost", "Latency, Throughput, and Traffic Control"],
    checks: ["Monitor task success, groundedness, hallucination, refusal correctness, and escalation", "Monitor p95/p99, TTFT, queue delay, tool latency, and cost", "Alert on drift and regressions"],
    signals: ["dashboard", "p95/p99", "tool retry rate", "groundedness", "safety refusal correctness"],
    code: ["metrics.emit({task_success, groundedness, p99, cost})", "if metric_drift: open_incident(trace_id)"].join("\n"),
    nvidiaExamples: [["NeMo Evaluator", "Use for scheduled quality and regression checks."]]
  },
  "aai-run-maintain": {
    focus: "Maintenance turns production failures into controlled updates to prompts, tools, memory, indexes, policies, and evals.",
    sections: ["Run, Monitor, and Maintain", "Evaluation and Tuning"],
    studyPages: ["Observability, Operations, and Cost", "Data Curation and Knowledge Grounding"],
    checks: ["Update tool schemas and prompts from trace evidence", "Refresh retrieval indexes and validate memory stores", "Run regression tests before rollout"],
    signals: ["re-index", "schema update", "memory quality", "rotating keys", "continuous improvement"],
    code: ["incident = triage(trace)", "patch_owner_layer(incident)", "run_regression_then_canary()"].join("\n"),
    nvidiaExamples: [["NeMo Retriever", "Use when maintenance is retrieval/index refresh."], ["NeMo Evaluator", "Use when maintenance adds regression cases."]]
  },
  "aai-safety-layered": {
    focus: "Safety is layered across the agent path, not a single final output filter.",
    sections: ["Safety, Ethics, and Compliance"],
    studyPages: ["Evaluation and Safety", "Policy and Guardrails Layer"],
    checks: ["Check input, retrieved content, tool proposal, tool result, memory write, and final output", "Use least privilege and safe defaults", "Escalate high-risk or low-confidence actions"],
    signals: ["input rail", "retrieval rail", "execution rail", "output rail", "policy check"],
    code: ["rails.check_input(user_msg)", "rails.check_tool_call(action)", "rails.check_output(answer)"].join("\n"),
    nvidiaExamples: [["NeMo Guardrails", "Use for runtime policy, dialog, retrieval, tool, and output controls."]]
  },
  "aai-safety-injection": {
    focus: "Prompt injection and data leakage questions test trust boundaries: user and retrieved content are untrusted.",
    sections: ["Safety, Ethics, and Compliance", "Knowledge Integration and Data Handling"],
    studyPages: ["Policy and Guardrails Layer", "Data Curation and Knowledge Grounding"],
    checks: ["Preserve document ACLs before retrieval context", "Block cross-tenant leakage and unauthorized tool access", "Keep PII retention and memory writes governed"],
    signals: ["prompt injection", "indirect prompt injection", "tenant leakage", "PII persistence", "least privilege"],
    code: ["context = authorized_context_only(query, user)", "if retrieved_text_contains_instruction: isolate_as_data()", "deny_tool_if_not_allowed(user, action)"].join("\n"),
    nvidiaExamples: [["NeMo Guardrails", "Use for policy checks."], ["NeMo Retriever", "Use for permission-aware retrieval."]]
  },
  "aai-safety-audit": {
    focus: "Compliance questions ask whether decisions can be explained and audited after the fact.",
    sections: ["Safety, Ethics, and Compliance", "Human-AI Interaction and Oversight"],
    studyPages: ["Human Oversight and Governance", "Observability, Operations, and Cost"],
    checks: ["Record evidence, policy result, tool plan, reviewer action, and versions", "Keep immutable audit trails for high-risk decisions", "Monitor fairness and safety regressions"],
    signals: ["audit trail", "decision traceability", "compliance review", "bias/fairness", "immutable logs"],
    code: ["audit.store({evidence, policy, tool_plan, reviewer, versions})", "compliance_report = replay_decision(trace_id)"].join("\n"),
    nvidiaExamples: [["NeMo Guardrails", "Use for policy decision evidence."], ["NeMo Evaluator", "Use for safety/fairness regression checks."]]
  },
  "aai-human-routing": {
    focus: "Oversight must be risk-based. Sending every task to a human does not scale, and sending high-impact actions directly to tools is unsafe.",
    sections: ["Human-AI Interaction and Oversight"],
    studyPages: ["Human Oversight and Governance", "Evaluation and Safety"],
    checks: ["HITL means approval before high-impact action", "HOTL means sampled monitoring or supervision", "Use confidence, reversibility, and impact to route review"],
    signals: ["human-in-the-loop", "human-on-the-loop", "approval gate", "review queue", "confidence threshold"],
    code: ["if high_impact or low_confidence: require_hitl()", "elif medium_risk: sample_for_hotl()", "else: auto_execute_with_audit()"].join("\n"),
    nvidiaExamples: [["NeMo Guardrails", "Use for escalation/refusal policy when product-specific."]]
  },
  "aai-human-review-card": {
    focus: "Review UX is part of system design. Humans need evidence and proposed action context, not just a raw transcript.",
    sections: ["Human-AI Interaction and Oversight"],
    studyPages: ["Human Oversight and Governance", "Observability, Operations, and Cost"],
    checks: ["Show proposed action, confidence, sources, policy result, tool plan, and versions", "Offer approve, edit, reject, escalate, and override paths", "Record reviewer decision and reason"],
    signals: ["review card", "explainability", "confidence", "override", "safe default"],
    code: ["review = {action, evidence, confidence, policy, versions}", "decision = reviewer.decide(review)", "audit.store(decision)"].join("\n"),
    nvidiaExamples: [["NeMo Agent Toolkit", "Use when workflow trace evidence feeds the review card."]]
  },
  "aai-human-feedback": {
    focus: "Human feedback should improve the system through evals, prompts, policies, tools, data, memory rules, or model tuning.",
    sections: ["Human-AI Interaction and Oversight", "Evaluation and Tuning"],
    studyPages: ["Human Oversight and Governance", "Evaluation and Safety"],
    checks: ["Convert review labels into eval cases", "Update the owning layer, not a random downstream component", "Measure whether review load decreases without safety loss"],
    signals: ["feedback loop", "review labels", "escalation quality", "override", "continuous improvement"],
    code: ["evals.add_case(trace, reviewer_label)", "fix = choose_owner_layer(failure)", "monitor(review_load, safety_score)"].join("\n"),
    nvidiaExamples: [["NeMo Evaluator", "Use to turn review labels into regression checks."], ["NeMo Guardrails", "Use when feedback changes policy behavior."]]
  }
};

function lifecycleStageDetailFor(examLabel, stageKey) {
  if (examLabel === "Agentic AI") return AAI_LIFECYCLE_STAGE_DETAILS[stageKey] || null;
  if (examLabel === "Agentic AI General") return GENERAL_LIFECYCLE_STAGE_DETAILS[stageKey] || null;
  return null;
}

const STUDY_CONCEPT_LOOKUP = {
  "Agentic AI": [
    {
      id: "aai-react-vs-workflow",
      title: "ReAct vs workflow decision rule",
      route: "Agent Architecture and Design / Agent vs workflow card",
      summary: "Read this to learn the exam rule: ReAct is for dynamic tool-observation loops; workflow/graph is for fixed, auditable steps; RAG is for grounding answers in documents.",
      keywords: ["react", "re act", "reason act", "workflow", "graph", "agent vs workflow", "deterministic workflow", "bounded agent", "dynamic tools"],
      target: { certSlug: "agentic_ai_professional", studyView: "lifecycle", stageId: "aai-arch-boundary", sectionName: "Agent Architecture and Design", sectionExam: "Agentic AI" },
      lookFor: ["ReAct = next action depends on observation", "Workflow/graph = fixed path, audit, recovery", "RAG = retrieve evidence before answering"],
      also: ["Pick the reasoning pattern", "Use ReAct with stopping criteria", "General Study: Agent Lifecycle and Architecture"],
      featured: true
    },
    {
      id: "aai-react-loop",
      title: "ReAct loop and stopping criteria",
      route: "Study handbook -> Use ReAct with stopping criteria",
      summary: "Use this when the next step depends on tool observations and you need budgets, loop detection, stop conditions, or escalation rules.",
      keywords: ["react", "reason action observation", "thought action observation", "tool loop", "stop condition", "max iteration", "looping agent", "observation"],
      target: { certSlug: "agentic_ai_professional", studyView: "lifecycle", stageId: "aai-cog-react", sectionName: "Cognition, Planning, and Memory", sectionExam: "Agentic AI" },
      also: ["Agent Architecture and Design", "Agent Development"],
      featured: true
    },
    {
      id: "aai-stateful-stateless",
      title: "Stateless vs stateful orchestration",
      route: "Exam Sections -> Agent Development",
      summary: "Use this for checkpoints, recovery after failures, idempotency, retries, and the difference between recomputing a request and resuming a workflow.",
      keywords: ["stateful", "stateless", "checkpoint", "resume", "recovery", "idempotency", "retry", "workflow breaks", "step fails", "long running"],
      target: { certSlug: "agentic_ai_professional", studyView: "sections", sectionName: "Agent Development", sectionExam: "Agentic AI" },
      also: ["Parallelize safely and recover", "Own state and handoffs"],
      featured: true
    },
    {
      id: "aai-tool-contracts-mcp",
      title: "Tool schemas, guided decoding, and MCP",
      route: "Study handbook -> Wire tool/API contracts",
      summary: "Use this when questions mention malformed tool arguments, duplicated wrappers, JSON schemas, function calling, permissions, or MCP servers.",
      keywords: ["tool schema", "json schema", "guided decoding", "function calling", "mcp", "tool server", "wrong argument type", "permissions", "api wrapper"],
      target: { certSlug: "agentic_ai_professional", studyView: "lifecycle", stageId: "aai-dev-tool-contracts", sectionName: "Agent Development", sectionExam: "Agentic AI" },
      also: ["Tooling, Orchestration, and Memory", "Tool Gateway and Function Runtime"],
      featured: true
    },
    {
      id: "aai-rag-retrieval",
      title: "RAG, query decomposition, and hybrid retrieval",
      route: "Study handbook -> Build the retrieval path",
      summary: "Use this for compare-A-vs-B questions, BM25 plus vector search, RRF, reranking, citations, ACLs, freshness, and grounding.",
      keywords: ["rag", "retrieval", "query decomposition", "compare", "hybrid search", "bm25", "rrf", "rerank", "cross encoder", "citations", "acl"],
      target: { certSlug: "agentic_ai_professional", studyView: "lifecycle", stageId: "aai-knowledge-rag", sectionName: "Knowledge Integration and Data Handling", sectionExam: "Agentic AI" },
      also: ["Data Curation and Knowledge Grounding", "Knowledge and RAG Pipeline"],
      featured: true
    },
    {
      id: "aai-nim-triton-tensorrt",
      title: "NIM vs Triton vs TensorRT-LLM",
      route: "Study handbook -> Map serving and optimization tools",
      summary: "Use this for product-boundary questions about packaged inference APIs, multi-model serving, dynamic batching, KV cache, and LLM engine optimization.",
      keywords: ["nim", "triton", "tensorrt", "tensorrt-llm", "dynamic batching", "inflight batching", "prefix caching", "kv cache", "serving", "low latency"],
      target: { certSlug: "agentic_ai_professional", studyView: "lifecycle", stageId: "aai-platform-serving", sectionName: "NVIDIA Platform Implementation", sectionExam: "Agentic AI" },
      also: ["NVIDIA service boundaries", "Deployment and Scaling"],
      featured: true
    },
    {
      id: "aai-guardrails-policy",
      title: "Guardrails vs prompts or temperature",
      route: "Study handbook -> Layer safety controls",
      summary: "Use this when the stem asks about topic boundaries, jailbreaks, PII, tool policy, input rails, dialog rails, output rails, or runtime enforcement.",
      keywords: ["guardrails", "rails", "input rail", "dialog rail", "output rail", "temperature", "prompt injection", "policy", "pii", "jailbreak", "compliance"],
      target: { certSlug: "agentic_ai_professional", studyView: "lifecycle", stageId: "aai-safety-layered", sectionName: "Safety, Ethics, and Compliance", sectionExam: "Agentic AI" },
      also: ["Policy and Guardrails Layer", "NeMo Guardrails"],
      featured: false
    },
    {
      id: "aai-eval-monitoring",
      title: "Trajectory eval vs monitoring",
      route: "Study handbook -> Score the whole trajectory",
      summary: "Use this for final-answer accuracy traps, golden sets, LLM-as-judge, human review, data drift, trace replay, and production regressions.",
      keywords: ["evaluation", "monitoring", "trajectory", "golden set", "llm judge", "human review", "data drift", "trace", "final answer accuracy", "regression"],
      target: { certSlug: "agentic_ai_professional", studyView: "lifecycle", stageId: "aai-eval-trajectory", sectionName: "Evaluation and Tuning", sectionExam: "Agentic AI" },
      also: ["Run, Monitor, and Maintain", "Evaluation and Safety"],
      featured: false
    },
    {
      id: "aai-human-approval",
      title: "Human approval and oversight",
      route: "Study handbook -> Choose HITL vs HOTL",
      summary: "Use this for approval gates, review queues, high-impact actions, human-in-the-loop, human-on-the-loop, and reviewer evidence cards.",
      keywords: ["human", "hitl", "hotl", "approval", "approval gate", "oversight", "review queue", "high risk", "high impact", "escalation"],
      target: { certSlug: "agentic_ai_professional", studyView: "lifecycle", stageId: "aai-human-routing", sectionName: "Human-AI Interaction and Oversight", sectionExam: "Agentic AI" },
      also: ["Human Oversight and Governance", "Safety, Ethics, and Compliance"],
      featured: false
    }
  ],
  "GenAI LLMs": [
    {
      id: "genl-kv-cache-optimization",
      title: "KV cache, batching, and TensorRT-LLM",
      route: "Study handbook -> Optimize generation runtime",
      summary: "Use this for latency, throughput, memory, TTFT, batching, quantization, speculative decoding, and KV-cache pressure.",
      keywords: ["kv cache", "batching", "continuous batching", "inflight batching", "tensorrt", "tensorrt-llm", "quantization", "ttft", "throughput", "latency"],
      target: { certSlug: "genai_llms_professional", studyView: "lifecycle", stageId: "genl-infer-optimize", sectionName: "Model Optimization", sectionExam: "GenAI LLMs" },
      also: ["Model Optimization", "TensorRT-LLM", "GPU Acceleration and Optimization"],
      featured: true
    },
    {
      id: "genl-nim-triton-deployment",
      title: "NIM vs Triton vs NIM Operator",
      route: "Services -> Production serving boundary",
      summary: "Use this for packaged model APIs, multi-framework serving, Kubernetes lifecycle, rollout, scaling, and health management.",
      keywords: ["nim", "triton", "nim operator", "kubernetes", "deployment", "serving", "model endpoint", "health check", "rollout", "triton inference server"],
      target: { certSlug: "genai_llms_professional", studyView: "services", serviceName: "NIM" },
      also: ["Model Deployment", "Triton Inference Server", "NIM Operator"],
      featured: true
    },
    {
      id: "genl-rag-grounding",
      title: "RAG, citations, and private knowledge",
      route: "Study handbook -> Build grounded LLM application",
      summary: "Use this when answers need fresh/private facts, retrieval, reranking, citations, ACLs, abstention, or source-grounded evaluation.",
      keywords: ["rag", "retrieval", "citations", "private knowledge", "fresh facts", "rerank", "embedding", "acl", "groundedness", "neMo retriever"],
      target: { certSlug: "genai_llms_professional", studyView: "lifecycle", stageId: "genl-rag-ingest", sectionName: "Prompt Engineering", sectionExam: "GenAI LLMs" },
      also: ["NeMo Retriever", "Prompt Engineering", "Evaluation"],
      featured: true
    },
    {
      id: "genl-lora-sft-tuning",
      title: "LoRA, SFT, and tuning decision",
      route: "Study handbook -> Fine-tune behavior",
      summary: "Use this when durable behavior, style, preference data, adapters, PEFT, catastrophic forgetting, or held-out evals matter.",
      keywords: ["lora", "qlora", "peft", "sft", "fine tuning", "fine-tuning", "adapter", "preference", "dpo", "rlhf", "forgetting"],
      target: { certSlug: "genai_llms_professional", studyView: "lifecycle", stageId: "genl-tune-model", sectionName: "Fine-Tuning", sectionExam: "GenAI LLMs" },
      also: ["NeMo Customizer", "NeMo Framework", "Fine-Tuning"],
      featured: true
    },
    {
      id: "genl-evaluation-judge",
      title: "Evaluation, LLM-as-judge, and regression",
      route: "Study handbook -> Evaluate and guard outputs",
      summary: "Use this for model comparison, prompt/RAG/tuning variants, faithfulness, human review, safety checks, and production regressions.",
      keywords: ["evaluation", "eval", "llm-as-judge", "judge", "regression", "faithfulness", "groundedness", "human evaluation", "benchmark", "quality"],
      target: { certSlug: "genai_llms_professional", studyView: "lifecycle", stageId: "genl-rag-eval", sectionName: "Evaluation", sectionExam: "GenAI LLMs" },
      also: ["NeMo Evaluator", "Production Monitoring and Reliability"],
      featured: false
    },
    {
      id: "genl-guardrails-pii-policy",
      title: "Guardrails, PII, and policy controls",
      route: "Study handbook -> Evaluate and guard outputs",
      summary: "Use this for safety rails, PII, tenant isolation, prompt injection, refusals, red-teaming, and compliance checks.",
      keywords: ["guardrails", "pii", "policy", "safety", "red team", "red-teaming", "prompt injection", "compliance", "tenant", "refusal"],
      target: { certSlug: "genai_llms_professional", studyView: "services", serviceName: "NeMo Guardrails" },
      also: ["Safety, Ethics, and Compliance", "NeMo Guardrails"],
      featured: false
    }
  ],
  "Agentic AI General": [
    {
      id: "gen-react-workflow",
      title: "ReAct vs workflow decision rule",
      route: "Agent Orchestration Runtime playbook / Architecture card",
      summary: "Read this to learn the decision rule: ReAct is for dynamic tool-observation loops; workflow/graph is for fixed, auditable steps; RAG is for grounding answers in documents.",
      keywords: ["react", "workflow", "rag", "agent", "graph", "router", "supervisor", "orchestration"],
      target: { certSlug: "agentic_ai_general_study", studyView: "lifecycle", stageId: "gen-agent-architecture", serviceName: "Agent Orchestration Runtime", serviceFilter: "Build agent/RAG application" },
      lookFor: ["ReAct = tool result changes next step", "Workflow/graph = known process and audit trail", "RAG = source-grounded answer from private docs"],
      also: ["Agent Orchestration Runtime", "Tool Gateway and Function Runtime"],
      featured: true
    },
    {
      id: "gen-tools-memory",
      title: "Tools, memory, and state",
      route: "Lifecycle map -> Orchestrate tools and memory",
      summary: "Use this when you need tool schemas, permissions, retries, idempotency, memory scope, and workflow state without NVIDIA-specific names.",
      keywords: ["tools", "memory", "state", "checkpoint", "idempotency", "permissions", "schema", "workflow breaks"],
      target: { certSlug: "agentic_ai_general_study", studyView: "lifecycle", stageId: "gen-agent-workflow", serviceName: "Agent Orchestration Runtime", serviceFilter: "Build agent/RAG application" },
      also: ["Tool Gateway and Function Runtime", "Memory Store"],
      featured: true
    },
    {
      id: "gen-anti-hallucination",
      title: "Anti-hallucination measures",
      route: "Prompt and Context Design playbook / Knowledge and RAG Pipeline",
      summary: "Use this for 2026-style hallucination mitigation: write evidence rules, allow uncertainty, require citations, expose unknowns, retrieve missing facts, and evaluate groundedness.",
      keywords: ["anti hallucination", "anti-hallucination", "hallucination", "hallucination measures", "prompt engineering", "unsupported claims", "evidence rules", "groundedness", "faithfulness", "citation support", "no evidence refusal", "unknowns", "insufficient evidence"],
      target: { certSlug: "agentic_ai_general_study", studyView: "services", stageId: "gen-api-prompt", serviceName: "Prompt and Context Design", serviceFilter: "Use existing model or API" },
      also: ["Knowledge and RAG Pipeline", "Evaluation and Regression Harness", "Policy and Guardrails Layer"],
      featured: true
    }
  ]
};

function normalizedStudyText(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function conceptSearchText(entry) {
  return normalizedStudyText([
    entry.title,
    entry.route,
    entry.summary,
    ...(entry.keywords || []),
    ...(entry.also || [])
  ].join(" "));
}

function rankedConceptLookupEntries(entries, query) {
  const clean = normalizedStudyText(query);
  if (!clean) {
    return [
      ...entries.filter((entry) => entry.featured),
      ...entries.filter((entry) => !entry.featured)
    ].slice(0, 6);
  }
  const terms = clean.split(/\s+/).filter(Boolean);
  return entries
    .map((entry) => {
      const text = conceptSearchText(entry);
      const title = normalizedStudyText(entry.title);
      const keywordText = normalizedStudyText((entry.keywords || []).join(" "));
      const matches = terms.filter((term) => text.includes(term)).length;
      const score = matches * 10
        + (title.includes(clean) ? 12 : 0)
        + (keywordText.includes(clean) ? 8 : 0)
        + (entry.featured ? 1 : 0);
      return { entry, score, matches };
    })
    .filter((item) => item.matches > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.entry)
    .slice(0, 6);
}

function StudyConceptFinder({ entries, query, setQuery, onOpen }) {
  if (!entries.length) return null;
  const visibleEntries = rankedConceptLookupEntries(entries, query);
  const examples = entries.filter((entry) => entry.featured).slice(0, 4);
  const hasQuery = Boolean(String(query || "").trim());
  return h("details", { className: "concept-finder concept-finder-compact", open: hasQuery },
    h("summary", null,
      h("div", null,
        h("span", null, "Concept finder"),
        h("h3", null, "Find the chapter or concept")
      )
    ),
    h("div", { className: "concept-finder-body" },
      h("label", { className: "concept-finder-search" },
        h("span", null, "Search concepts"),
        h("input", {
          type: "search",
          value: query,
          onChange: (event) => setQuery(event.target.value),
          placeholder: "Try: ReAct vs workflow, stateful, NIM Triton, RAG..."
        })
      ),
      h("div", { className: "concept-finder-examples" },
        h("span", null, "Try"),
        examples.map((entry) => h("button", {
          key: entry.id,
          type: "button",
          onClick: () => setQuery(entry.keywords?.[0] || entry.title)
        }, entry.title))
      ),
      hasQuery
        ? visibleEntries.length
          ? h("div", { className: "concept-finder-results" },
              visibleEntries.map((entry) => {
                const routeLabel = String(entry.route || "").replace(/^Exam Concept Map\s*->\s*/, "Exam Sections -> ");
                return h("button", {
                  key: entry.id,
                  type: "button",
                  className: "concept-finder-card",
                  onClick: () => onOpen(entry)
                },
                  h("span", { className: "concept-finder-main" },
                    h("strong", null, entry.title),
                    h("p", null, entry.summary)
                  ),
                  h("span", { className: "concept-finder-route" }, routeLabel),
                  h("span", { className: "concept-finder-open" }, "Open")
                );
              })
            )
          : h("p", { className: "concept-finder-empty" }, "No direct route yet. Try a broader term like workflow, RAG, guardrails, memory, evaluation, or serving.")
        : null
    )
  );
}

function generalCardElementId(cardId) {
  return `general-builder-card-${cardId}`;
}

function generalTagLabel(tag) {
  return String(tag || "").replace(/_/g, " ");
}

function findGeneralBuilderPath(pathId) {
  return generalBuilderPaths.find((path) => path.id === pathId) || generalBuilderPaths[0] || null;
}

function findGeneralBuilderCard(pathId, cardId) {
  const path = findGeneralBuilderPath(pathId);
  const card = path?.cards.find((item) => item.id === cardId) || path?.cards[0] || null;
  return { path, card };
}

function generalCardText(path, card) {
  return normalizedStudyText([
    path?.title,
    path?.description,
    card?.title,
    card?.purpose,
    card?.keyDecision,
    ...(card?.searchKeywords || []),
    ...(card?.relatedPlatformExamples || []),
    ...(card?.conceptSplitTags || []),
    ...(card?.detailSections || []).flatMap((section) => [section.heading, section.content, ...(section.items || [])]),
    ...(card?.studyPage?.examRecognition || []),
    ...(card?.studyPage?.commonTraps || []),
    ...(card?.studyPage?.nvidiaMapping || []),
    ...(card?.studyPage?.whatToMeasure || []),
    ...(card?.studyPage?.implementationPattern || []),
    ...(card?.studyPage?.failureModes || []),
    ...(card?.studyPage?.deepDiveNotes || []),
    ...(card?.studyPage?.coreConcepts || [])
  ].join(" "));
}

function generalIndexText(entry) {
  return normalizedStudyText([
    entry.keyword,
    entry.matchLabel,
    entry.description,
    ...(entry.aliases || [])
  ].join(" "));
}

function buildGeneralStudySearchResults(query) {
  const clean = normalizedStudyText(query);
  const seen = new Set();
  const resultKey = (pathId, cardId) => `${pathId}:${cardId}`;
  const addResult = (results, item) => {
    const key = resultKey(item.builderPathId, item.cardId);
    if (seen.has(key)) return;
    const { path, card } = findGeneralBuilderCard(item.builderPathId, item.cardId);
    if (!path || !card) return;
    seen.add(key);
    results.push({
      ...item,
      builderPathTitle: path.title,
      cardTitle: card.title,
      description: item.description || card.purpose,
      label: item.matchLabel || item.keyword || card.title
    });
  };

  if (!clean) {
    const seeded = [];
    generalConceptIndex.slice(0, 8).forEach((entry) => addResult(seeded, entry));
    return seeded;
  }

  const terms = clean.split(/\s+/).filter(Boolean);
  const indexed = generalConceptIndex
    .map((entry) => {
      const text = generalIndexText(entry);
      const exact = normalizedStudyText(entry.keyword) === clean || normalizedStudyText(entry.matchLabel) === clean;
      const phrase = text.includes(clean);
      const matches = terms.filter((term) => text.includes(term)).length;
      return { entry, score: (exact ? 60 : 0) + (phrase ? 25 : 0) + matches * 8 };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  const results = [];
  indexed.forEach((item) => addResult(results, item.entry));

  const fallback = [];
  for (const path of generalBuilderPaths) {
    for (const card of path.cards) {
      const text = generalCardText(path, card);
      const phrase = text.includes(clean);
      const matches = terms.filter((term) => text.includes(term)).length;
      const score = (phrase ? 10 : 0) + matches * 4;
      if (score > 0) {
        fallback.push({
          builderPathId: path.id,
          cardId: card.id,
          matchLabel: card.title,
          description: card.purpose,
          score
        });
      }
    }
  }
  fallback.sort((a, b) => b.score - a.score).forEach((item) => addResult(results, item));
  return results.slice(0, 10);
}

function generalTutorExamples(card) {
  if (!card) return ["Which builder path should I start with?", "RAG, agent, or fine tuning?", "What traps matter most?"];
  const firstKeyword = (card.searchKeywords || []).find((keyword) => keyword !== card.title) || card.title;
  return [
    `What inputs matter for ${card.title}?`,
    `What traps should I watch for in ${card.title}?`,
    `How do I recognize ${firstKeyword} in exam questions?`
  ];
}

function compactStudyPhrase(value, maxLength = 118) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (text.length <= maxLength) return text;
  const shortened = text.slice(0, maxLength - 1).replace(/\s+\S*$/, "").trim();
  return `${shortened || text.slice(0, maxLength - 1)}…`;
}

const generalPathCardMeta = {
  "use-existing-model-or-api": { lane: "Model/API app", cue: "Use when an approved model/API can solve the task without new retrieval, tools, or weight changes.", artifact: "Prompted call + runtime wrapper" },
  "build-rag-application": { lane: "RAG knowledge app", cue: "Use when answers need fresh, private, cited facts.", artifact: "Permissioned retrieval path" },
  "build-tool-using-agent": { lane: "Tool-using workflow", cue: "Use when the system must plan, use tools, or keep state.", artifact: "Workflow + tool contracts" },
  "fine-tune-existing-model": { lane: "Model adaptation", cue: "Use when stable behavior must be learned into an existing model.", artifact: "Adapter/tuning release" },
  "train-model-from-zero": { lane: "Foundation training", cue: "Use when full/foundation training is justified by a strategic capability gap.", artifact: "Corpus + training stack" },
  "deploy-and-serve-ai-system": { lane: "Production serving", cue: "Use when the model or workflow must run under traffic.", artifact: "Endpoint + rollout plan" },
  "run-evaluate-and-improve": { lane: "Evaluation loop", cue: "Use after launch to measure, review, and route fixes.", artifact: "Eval + feedback loop" }
};

function GeneralSearchRouter({ searchQuery, setSearchQuery, onOpenSearchResult, compact = false }) {
  const searchResults = buildGeneralStudySearchResults(searchQuery);
  const seedExamples = generalConceptIndex.slice(0, 6);
  const hasQuery = Boolean(searchQuery.trim());
  const visibleResults = hasQuery ? searchResults : (compact ? [] : searchResults.slice(0, 8));
  return h("div", { className: `general-search-router ${compact ? "general-search-router-compact" : ""}` },
    h("div", { className: "general-search-head" },
      h("div", null,
        h("span", null, "Find route"),
        h("h3", null, "Jump by decision clue")
      ),
      h("label", { className: "general-search-field" },
        h("span", null, "Decision clue"),
        h("input", {
          type: "search",
          value: searchQuery,
          onChange: (event) => setSearchQuery(event.target.value),
          placeholder: "Try: hallucination, ReAct, p99, ACL, LoRA..."
        })
      )
    ),
    h("div", { className: "general-search-seeds" },
      h("span", null, "Try"),
      seedExamples.map((entry) => h("button", {
        key: entry.keyword,
        type: "button",
        onClick: () => setSearchQuery(entry.keyword)
      }, entry.keyword))
    ),
    visibleResults.length || hasQuery
      ? h("div", { className: "general-search-results" },
          visibleResults.length
            ? visibleResults.map((result) => h("button", {
            key: `${result.builderPathId}-${result.cardId}-${result.label}`,
            type: "button",
            className: "general-search-row",
            onClick: () => onOpenSearchResult(result)
          },
            h("span", { className: "general-search-route" }, `${result.builderPathTitle} / ${result.cardTitle}`),
            h("strong", null, result.label),
            compact ? null : h("span", { className: "general-search-summary" }, result.description)
          ))
            : h("p", { className: "general-search-empty" }, "No exact route yet. Try a broader clue such as RAG, memory, audit, serving, tuning, or evaluation.")
        )
      : null
  );
}

function StudyPageHeader({ path, card = null }) {
  if (!path) return null;
  const chapter = path.chapter || {};
  const meta = generalPathCardMeta[path.id] || {};
  const isCard = Boolean(card);
  const title = isCard ? card.title : chapter.title || path.title;
  const subtitle = isCard
    ? card.purpose || card.keyDecision
    : chapter.intro || path.description;
  const tags = isCard
    ? [
        ...(card.conceptSplitTags || []).map(generalTagLabel),
        meta.lane,
        meta.artifact
      ]
    : [
        meta.lane,
        meta.artifact,
        `${path.cards.length} focused study cards`
      ];
  return h("header", { className: `general-book-header general-page-header ${isCard ? "general-page-header-card" : "general-page-header-path"}` },
    h("span", { className: "general-book-eyebrow" }, isCard ? `Builder path ${path.order} / Step ${card.stepNumber}` : `Builder path ${path.order}`),
    h("h1", null, title),
    h("p", null, renderInline(subtitle)),
    h("div", { className: "general-book-badges" },
      h("span", null, isCard ? "Focused study card" : "Technical chapter"),
      tags.filter(Boolean).map((tag) => h("span", { key: tag }, tag))
    )
  );
}

function StudyToolsBar({ tutorNode, searchRouter }) {
  if (!tutorNode && !searchRouter) return null;
  return h("section", { className: "general-study-tools-bar", "aria-label": "Study tools" },
    tutorNode ? h("div", { className: "general-study-tools-tutor" }, tutorNode) : null,
    searchRouter ? h("div", { className: "general-study-tools-route" }, searchRouter) : null
  );
}

function GeneralStudyBreadcrumbs({ path, card, onShowPaths, onShowPath }) {
  return h("div", { className: "general-breadcrumbs", "aria-label": "General Study route" },
    h("button", { type: "button", onClick: onShowPaths }, "Builder Paths"),
    path ? h("span", { "aria-hidden": "true" }, "/") : null,
    path ? h("button", { type: "button", onClick: onShowPath }, path.title) : null,
    card ? h("span", { "aria-hidden": "true" }, "/") : null,
    card ? h("strong", null, card.title) : null
  );
}

function GeneralStudyList({ items, ordered = false }) {
  const clean = (items || []).filter(Boolean);
  if (!clean.length) return null;
  const tag = ordered ? "ol" : "ul";
  return h(tag, { className: "general-study-list" },
    clean.map((item, index) => h("li", { key: `${index}-${item}` }, renderInline(item)))
  );
}

function normalizeRichCodeBlock(block) {
  if (typeof block === "string") return { code: block };
  return block || {};
}

function legacyBlocksFromStudySection(section) {
  const codeBlocks = (section.codeBlocks || []).map(normalizeRichCodeBlock);
  return [
    ...(section.paragraphs || []).map((text) => ({ type: "paragraph", text })),
    ...(section.steps?.length ? [{ type: "numbered", items: section.steps }] : []),
    ...(section.items?.length ? [{ type: "list", items: section.items }] : []),
    ...(section.tables || []).map((table) => ({
      type: "table",
      title: table.caption,
      columns: table.headers || table.columns || [],
      rows: table.rows || []
    })),
    ...codeBlocks.map((block) => ({
      type: block.type || "code",
      title: block.label || block.title,
      language: block.language || block.lang,
      code: block.code || ""
    })),
    ...(section.callouts || []).map((callout) => ({
      type: "callout",
      tone: callout.tone || "note",
      title: callout.title,
      text: callout.body || callout.text,
      items: callout.items || []
    })),
    ...(section.examples || []).map((example) => ({
      type: "badGood",
      badTitle: example.badTitle || "Bad pattern",
      bad: example.bad,
      goodTitle: example.goodTitle || "Better pattern",
      good: example.good,
      title: example.title
    })),
    ...(section.recap ? [{ type: "recap", items: [section.recap] }] : [])
  ];
}

function richBlocksForSection(section) {
  return section.blocks?.length ? section.blocks : legacyBlocksFromStudySection(section);
}

function renderRichText(value, options = {}) {
  if (Array.isArray(value)) {
    return value.map((text, index) => h("p", { key: `${index}-${text}` }, renderInline(text, options)));
  }
  return h("p", null, renderInline(value || "", options));
}

function FormulaBlock({ block }) {
  const formula = block.latex || block.formula || block.text || "";
  if (!formula) return null;
  return h("figure", { className: "rich-formula-block" },
    block.title ? h("figcaption", null, renderInline(block.title)) : null,
    h("div", { className: "rich-formula-text", "aria-label": block.title || "Formula" }, formula)
  );
}

function CodeBlock({ block, pseudocode = false }) {
  const code = block.code || block.text || "";
  if (!code) return null;
  const language = block.language || block.lang || (pseudocode ? "pseudocode" : "");
  return h("figure", { className: `rich-code-block ${pseudocode ? "rich-code-pseudocode" : ""}`.trim() },
    (block.title || block.label || language)
      ? h("figcaption", null,
          block.title || block.label || null,
          language ? h("span", null, language) : null
        )
      : null,
    h("pre", { tabIndex: 0 }, h("code", null, code))
  );
}

function RichTableBlock({ block }) {
  const columns = block.columns || block.headers || block.header || [];
  const rows = block.rows || [];
  if (!columns.length || !rows.length) return null;
  const normalizedColumns = columns.map((column) => (
    typeof column === "string"
      ? { key: column, label: column }
      : { key: column.key || column.label || column.title, label: column.label || column.title || column.key }
  ));
  return h("figure", { className: "rich-table-block" },
    block.title || block.caption ? h("figcaption", null, renderInline(block.title || block.caption)) : null,
    h("div", { className: "rich-table-wrap" },
      h("table", { className: "rich-table" },
        h("thead", null,
          h("tr", null, normalizedColumns.map((column, index) => h("th", { key: `${index}-${column.label}` }, renderInline(column.label || ""))))
        ),
        h("tbody", null,
          rows.map((row, rowIndex) => {
            const cells = Array.isArray(row)
              ? row
              : normalizedColumns.map((column) => row?.[column.key] ?? "");
            return h("tr", { key: rowIndex },
              normalizedColumns.map((column, columnIndex) => h("td", { key: `${columnIndex}-${column.key}` }, renderInline(cells[columnIndex] ?? "")))
            );
          })
        )
      )
    )
  );
}

function DiagramBlock({ block }) {
  const nodes = block.nodes || [];
  const edges = block.edges || [];
  if (!nodes.length && !edges.length) return null;
  const nodeLabel = (node) => typeof node === "string" ? node : (node.label || node.title || node.id || "");
  const edgeLabel = (edge) => {
    if (typeof edge === "string") return edge;
    const from = edge.from || edge.source || "";
    const to = edge.to || edge.target || "";
    const label = edge.label ? `: ${edge.label}` : "";
    return `${from} -> ${to}${label}`;
  };
  return h("figure", { className: "rich-diagram-block", role: "group", "aria-label": block.title || "Diagram" },
    block.title ? h("figcaption", null, renderInline(block.title)) : null,
    nodes.length ? h("div", { className: "rich-diagram-nodes" },
      nodes.map((node, index) => h("div", { className: "rich-diagram-node", key: `${index}-${nodeLabel(node)}` },
        h("strong", null, renderInline(nodeLabel(node))),
        typeof node === "object" && node.detail ? h("p", null, renderInline(node.detail)) : null
      ))
    ) : null,
    edges.length ? h("ol", { className: "rich-diagram-edges" },
      edges.map((edge, index) => h("li", { key: `${index}-${edgeLabel(edge)}` }, renderInline(edgeLabel(edge))))
    ) : null
  );
}

function BadGoodBlock({ block }) {
  if (!block.bad && !block.good) return null;
  return h("div", { className: "rich-bad-good-block" },
    block.title ? h("strong", { className: "rich-bad-good-title" }, renderInline(block.title)) : null,
    h("div", { className: "rich-bad-good-grid" },
      h("section", { className: "rich-example-bad" },
        h("strong", null, block.badTitle || "Bad pattern"),
        block.bad ? renderRichText(block.bad) : null
      ),
      h("section", { className: "rich-example-good" },
        h("strong", null, block.goodTitle || "Better pattern"),
        block.good ? renderRichText(block.good) : null
      )
    )
  );
}

function RichContentBlock({ block, index, renderOptions = {} }) {
  if (!block) return null;
  const type = block.type || "paragraph";
  switch (type) {
    case "paragraph":
      return h("div", { className: "rich-content-block rich-paragraph-block" }, renderRichText(block.text || block.body || "", renderOptions));
    case "list":
      return h("section", { className: "rich-content-block rich-organized-list rich-points-block" },
        h("div", { className: "rich-list-heading" },
          h("span", null, block.title || "Key checks")
        ),
        h("ul", { className: "rich-list rich-insight-list" },
          (block.items || []).filter(Boolean).map((item, itemIndex) => h("li", { key: `${itemIndex}-${item}` },
            h("span", { className: "rich-insight-copy" }, renderListItemInline(item, renderOptions))
          ))
        )
      );
    case "numbered":
      return h("section", { className: "rich-content-block rich-organized-list rich-process-block" },
        h("div", { className: "rich-list-heading" },
          h("span", null, block.title || "Workflow sequence")
        ),
        h("ol", { className: "rich-list rich-numbered-list rich-step-card-list" },
          (block.items || []).filter(Boolean).map((item, itemIndex) => h("li", { key: `${itemIndex}-${item}` },
            h("span", { className: "rich-step-count", "aria-hidden": "true" }, String(itemIndex + 1)),
            h("span", { className: "rich-step-copy" }, renderListItemInline(item, renderOptions))
          ))
        )
      );
    case "callout":
    case "warning":
    case "examTrap": {
      const tone = type === "warning" ? "warning" : type === "examTrap" ? "exam-trap" : (block.tone || "note");
      return h("aside", { className: `rich-content-block rich-callout rich-callout-${tone}` },
        block.title ? h("strong", null, renderInline(block.title, renderOptions)) : null,
        block.text || block.body ? renderRichText(block.text || block.body, renderOptions) : null,
        block.items?.length ? h("ul", null, block.items.map((item, itemIndex) => h("li", { key: `${itemIndex}-${item}` }, renderListItemInline(item, renderOptions)))) : null
      );
    }
    case "formula":
      return h(FormulaBlock, { block });
    case "code":
      return h(CodeBlock, { block });
    case "pseudocode":
      return h(CodeBlock, { block, pseudocode: true });
    case "table":
      return h(RichTableBlock, { block });
    case "diagram":
      return h(DiagramBlock, { block });
    case "badGood":
      return h(BadGoodBlock, { block });
    case "scenario":
      return h("aside", { className: "rich-content-block rich-scenario-block" },
        block.title ? h("strong", null, renderInline(block.title, renderOptions)) : null,
        block.text || block.body ? renderRichText(block.text || block.body, renderOptions) : null
      );
    case "checklist":
      return h("ul", { className: "rich-content-block rich-checklist" },
        (block.items || []).filter(Boolean).map((item, itemIndex) => h("li", { key: `${itemIndex}-${item}` }, renderListItemInline(item, renderOptions)))
      );
    case "recap": {
      const recapItems = (block.items || []).filter(Boolean);
      return h("div", { className: "rich-content-block rich-recap-block" },
        h("strong", null, block.title || "Recap"),
        block.text ? renderRichText(block.text, renderOptions) : null,
        recapItems.length === 1
          ? h("p", { className: "rich-recap-copy" }, renderListItemInline(recapItems[0], renderOptions))
          : recapItems.length
            ? h("ul", null, recapItems.map((item, itemIndex) => h("li", { key: `${itemIndex}-${item}` }, renderListItemInline(item, renderOptions))))
            : null
      );
    }
    default:
      return h("div", { className: "rich-content-block rich-unknown-block", key: `unknown-${index}` }, renderRichText(block.text || block.body || "", renderOptions));
  }
}

function StudySection({ section, index, variant = "card" }) {
  if (!section) return null;
  const isPath = variant === "path";
  const sectionClass = isPath ? "general-chapter-section" : "general-card-lesson-section";
  const labelClass = isPath ? "general-chapter-section-label" : "general-card-lesson-label";
  const bodyClass = isPath ? "general-chapter-section-body" : "general-card-lesson-body";
  const blocks = richBlocksForSection(section);
  const renderOptions = { autoHighlight: true, highlightSeen: new Set(), highlightCount: { value: 0 }, maxHighlights: isPath ? 10 : 12 };
  return h("section", { className: `${sectionClass} study-section-rich` },
    h("div", { className: labelClass },
      h("h4", null, section.title)
    ),
    h("div", { className: bodyClass },
      blocks.map((block, blockIndex) => h(RichContentBlock, {
        key: `${section.title}-${blockIndex}-${block.type || "legacy"}`,
        block,
        index: blockIndex,
        renderOptions
      }))
    )
  );
}

function StudyArticle({ title, intro, eyebrow = "Chapter", className = "", children }) {
  return h("article", { className: `study-article ${className}`.trim() },
    title || intro ? h("div", { className: "general-card-lesson-cover" },
      eyebrow ? h("span", null, eyebrow) : null,
      title ? h("h3", null, title) : null,
      intro ? h("p", null, renderInline(intro)) : null
    ) : null,
    children
  );
}

function GeneralStudyDecisionTable({ rows }) {
  if (!rows?.length) return null;
  return h("div", { className: "general-table-wrap" },
    h("table", { className: "general-study-table" },
      h("thead", null,
        h("tr", null,
          h("th", null, "Scenario clue"),
          h("th", null, "Choose"),
          h("th", null, "Avoid"),
          h("th", null, "Why")
        )
      ),
      h("tbody", null,
        rows.map((row, index) => h("tr", { key: `${index}-${row.clue}` },
          h("td", null, renderInline(row.clue || "")),
          h("td", null, renderInline(row.choose || "")),
          h("td", null, renderInline(row.avoid || "")),
          h("td", null, renderInline(row.why || ""))
        ))
      )
    )
  );
}

function GeneralStudyScenarioCards({ scenarios }) {
  if (!scenarios?.length) return null;
  return h("div", { className: "general-scenario-grid" },
    scenarios.map((scenario, index) => h("article", { className: "general-scenario-card", key: `${index}-${scenario.scenario}` },
      h("span", null, `Scenario ${index + 1}`),
      h("p", null, renderInline(scenario.scenario || "")),
      h("strong", null, "Best answer pattern"),
      h("p", null, renderInline(scenario.answer || "")),
      h("em", null, renderInline(scenario.trap || ""))
    ))
  );
}

function GeneralStudyCardSection({ title, children, className = "" }) {
  if (!children) return null;
  return h("section", { className: `general-study-section ${className}`.trim() },
    h("h4", null, title),
    children
  );
}

function GeneralSourceCapabilityNotes({ card }) {
  const sourceName = card.studyPage?.sourceCapabilityNames?.[0] || "";
  const capabilityState = useCapabilityMarkdown(sourceName, Boolean(sourceName));
  if (!sourceName) return null;
  return h("details", { className: "general-source-notes" },
    h("summary", null,
      h("span", null, "Optional source reference"),
      h("strong", null, sourceName),
      h("em", null, "Open only if you want the backing playbook notes.")
    ),
    h("div", { className: "general-source-notes-body" },
      h(CapabilityPlaybook, {
        state: capabilityState,
        title: sourceName,
        missingPath: `certifications/agentic_ai_general_study/capabilities/${topicSlug(sourceName)}.md`,
        idPrefix: `general-source-${topicSlug(sourceName)}`,
        showIndex: true,
        indexLabel: "Source index",
        defaultOpenFirst: false,
        className: "embedded"
      })
    )
  );
}

function GeneralStudyLessonSection({ section, index }) {
  return h(StudySection, { section, index, variant: "card" });
}

function GeneralCardQuickTabs({ tabs }) {
  const cleanTabs = (tabs || []).filter((tab) => tab?.title && tab?.items?.length);
  if (!cleanTabs.length) return null;
  return h("section", { className: "general-card-review-panel", "aria-label": "Chapter review notes" },
    h("div", { className: "general-card-review-head" },
      h("span", null, "Chapter review"),
      h("h3", null, "What to remember"),
      h("p", null, "Decision frame, common traps, and evidence checks from this chapter.")
    ),
    h("div", { className: "general-card-review-list" },
      cleanTabs.map((tab, index) => h("article", { className: "general-card-review-section", key: tab.title },
        h("div", { className: "general-card-review-section-head" },
          h("span", null, String(index + 1).padStart(2, "0")),
          h("h4", null, tab.title)
        ),
        h(GeneralStudyList, { items: tab.items })
      ))
    )
  );
}

function GeneralStudyLesson({ lesson }) {
  if (!lesson?.sections?.length) return null;
  return h(StudyArticle, {
    className: "general-card-lesson",
    eyebrow: "Chapter body",
    intro: lesson.intro
  },
    h("div", { className: "general-card-lesson-flow" },
      lesson.sections.map((section, index) => h(GeneralStudyLessonSection, {
        key: `${index}-${section.title}`,
        section,
        index
      }))
    )
  );
}

function GeneralStudyReferenceReview({ study, card }) {
  return h("details", { className: "general-study-reference" },
    h("summary", null,
      h("span", null, "Reference appendix"),
      h("strong", null, "Decision details, exam checks, and platform examples"),
      h("em", null, "Open this after reading the chapter.")
    ),
    h("div", { className: "general-study-snapshot" },
      h("section", null,
        h("span", null, "Purpose"),
        h("p", null, renderInline(study.purpose || card.purpose))
      ),
      h("section", null,
        h("span", null, "Key decision"),
        h("p", null, renderInline(study.keyDecision || card.keyDecision))
      ),
      h("section", null,
        h("span", null, "When this step appears"),
        h("p", null, renderInline(study.when || card.purpose))
      ),
      h("section", null,
        h("span", null, "Mental model"),
        h("p", null, renderInline(study.mentalModel || "Identify the decision owner before choosing a tool."))
      )
    ),
    h("div", { className: "general-study-content" },
      h(GeneralStudyCardSection, { title: "Decision", className: "decision" },
        h("p", null, renderInline(study.decisionToMake || card.keyDecision))
      ),
      h(GeneralStudyCardSection, { title: "Inputs", className: "io" }, h(GeneralStudyList, { items: study.inputs || [] })),
      h(GeneralStudyCardSection, { title: "Outputs", className: "io" }, h(GeneralStudyList, { items: study.outputs || [] })),
      h(GeneralStudyCardSection, { title: "What To Measure", className: "measure" },
        h(GeneralStudyList, { items: study.whatToMeasure || [] })
      ),
      h(GeneralStudyCardSection, { title: "Exam Recognition", className: "exam-signal" },
        h(GeneralStudyList, { items: study.examRecognition || [] })
      ),
      h(GeneralStudyCardSection, { title: "Decision Table", className: "decision-table" },
        h(GeneralStudyDecisionTable, { rows: study.decisionTable || [] })
      ),
      h(GeneralStudyCardSection, { title: "Traps", className: "risk" }, h(GeneralStudyList, { items: study.traps || [] })),
      h(GeneralStudyCardSection, { title: "Common Traps", className: "risk wide" }, h(GeneralStudyList, { items: study.commonTraps || [] })),
      h(GeneralStudyCardSection, { title: "Failure Modes", className: "risk" },
        h(GeneralStudyList, { items: study.failureModes || [] })
      ),
      h(GeneralStudyCardSection, { title: "Implementation", className: "implementation" },
        h(GeneralStudyList, { items: study.implementationPattern || [], ordered: true })
      ),
      h(GeneralStudyCardSection, { title: "NVIDIA Mapping", className: "platform" },
        h(GeneralStudyList, { items: study.nvidiaMapping || [] })
      ),
      h(GeneralStudyCardSection, { title: "Platform Examples", className: "platform" },
        h(GeneralStudyList, { items: study.relatedPlatformExamples || [] })
      ),
      h(GeneralStudyCardSection, { title: "Scenarios", className: "scenarios" },
        h(GeneralStudyScenarioCards, { scenarios: study.scenarios || [] })
      ),
      h(GeneralStudyCardSection, { title: "Core Concepts", className: "deep-dive" },
        h(GeneralStudyList, { items: study.coreConcepts || [] })
      ),
      h(GeneralStudyCardSection, { title: "Deep Dive Notes", className: "deep-dive" },
        h(GeneralStudyList, { items: study.deepDiveNotes || [] })
      ),
      h(GeneralStudyCardSection, { title: "Hands-on Checks", className: "implementation" },
        h(GeneralStudyList, { items: study.handsOnChecks || [], ordered: true })
      ),
      h(GeneralStudyCardSection, { title: "Search Keywords", className: "keywords" },
        h("div", { className: "general-keyword-chips" },
          (study.searchKeywords || card.searchKeywords || []).map((keyword) => h("span", { key: keyword }, keyword))
        )
      )
    )
  );
}

function GeneralStudyCardPage({ path, card, highlightedCardId, onShowPaths, onShowPath, onSelectCard, toolsNode = null }) {
  const study = card.studyPage || {};
  const isHighlighted = card.id === highlightedCardId;
  return h("article", {
    id: generalCardElementId(card.id),
    className: `general-card-page ${isHighlighted ? "highlighted" : ""}`
  },
    h(GeneralStudyBreadcrumbs, { path, card, onShowPaths, onShowPath }),
    h(StudyPageHeader, { path, card }),
    h(FocusedLessonBanner, { path, card, onShowPath }),
    h(CompactChapterNav, {
      path,
      activeCardId: card.id,
      onSelectCard,
      eyebrow: "Chapter path",
      title: "Study this chapter in order",
      variant: "focused"
    }),
    h("div", { className: "general-card-article-body" },
      h(GeneralStudyLesson, { lesson: study.lesson }),
      h(GeneralCardQuickTabs, { tabs: study.lesson?.quickReview }),
      h(GeneralStudyReferenceReview, { study, card }),
      h(GeneralSourceCapabilityNotes, { card })
    ),
    toolsNode,
    h(CompactPrevNextNav, { path, card, onSelectCard })
  );
}

function FocusedLessonBanner({ path, card, onShowPath }) {
  if (!path || !card) return null;
  return h("section", { className: "general-focused-lesson-banner", "aria-label": "Focused lesson context" },
    h("div", null,
      h("span", null, "Focused lesson"),
      h("strong", null, `Step ${card.stepNumber} of ${path.cards.length}`),
      h("p", null, path.title)
    ),
    h("button", { type: "button", onClick: () => onShowPath(path.id) }, "Back to chapter overview")
  );
}

function GeneralPathChapterSection({ section, index }) {
  return h(StudySection, { section, index, variant: "path" });
}

function GeneralPathChapter({ path }) {
  const chapter = path.chapter;
  if (!chapter?.sections?.length) return null;
  return h("article", { className: "general-path-chapter" },
    h("div", { className: "general-chapter-flow" },
      chapter.sections.map((section, index) => h(GeneralPathChapterSection, {
        key: `${index}-${section.title}`,
        section,
        index
      }))
    )
  );
}

function CompactPrevNextNav({ path, card = null, onShowPath, onSelectCard }) {
  if (!path) return null;
  if (card) {
    const currentIndex = path.cards.findIndex((item) => item.id === card.id);
    const previous = currentIndex > 0 ? path.cards[currentIndex - 1] : null;
    const next = currentIndex >= 0 && currentIndex < path.cards.length - 1 ? path.cards[currentIndex + 1] : null;
    if (!previous && !next) return null;
    return h("nav", { className: "general-compact-prev-next", "aria-label": "Focused study card navigation" },
      previous ? h("button", {
        type: "button",
        className: "general-chapter-nav-box previous",
        "aria-label": `Previous step: ${previous.title}`,
        onClick: () => onSelectCard(previous.id)
      },
        h("span", null, "Previous step"),
        h("strong", null, previous.title)
      ) : h("span", { className: "general-compact-nav-spacer", "aria-hidden": "true" }),
      next ? h("button", {
        type: "button",
        className: "general-chapter-nav-box next",
        "aria-label": `Next step: ${next.title}`,
        onClick: () => onSelectCard(next.id)
      },
        h("span", null, "Next step"),
        h("strong", null, next.title)
      ) : null
    );
  }
  const paths = [...generalBuilderPaths].sort((a, b) => a.order - b.order);
  const currentIndex = paths.findIndex((item) => item.id === path.id);
  const previous = currentIndex > 0 ? paths[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < paths.length - 1 ? paths[currentIndex + 1] : null;
  if (!previous && !next) return null;
  return h("nav", { className: "general-compact-prev-next", "aria-label": "Builder path chapter navigation" },
    previous ? h("button", {
      type: "button",
      className: "general-chapter-nav-box previous",
      "aria-label": `Previous chapter: ${previous.title}`,
      onClick: () => onShowPath(previous.id)
    },
      h("span", null, "Previous chapter"),
      h("strong", null, previous.title)
    ) : h("span", { className: "general-compact-nav-spacer", "aria-hidden": "true" }),
    next ? h("button", {
      type: "button",
      className: "general-chapter-nav-box next",
      "aria-label": `Next chapter: ${next.title}`,
      onClick: () => onShowPath(next.id)
    },
      h("span", null, "Next chapter"),
      h("strong", null, next.title)
    ) : null
  );
}

function CompactChapterNav({ path, activeCardId = "", onSelectCard, eyebrow = "Chapter path", title = "Study these steps in order", variant = "overview" }) {
  if (!path?.cards?.length) return null;
  const activeCard = path.cards.find((card) => card.id === activeCardId) || null;
  const orderedCards = [...path.cards].sort((a, b) => (a.stepNumber || 0) - (b.stepNumber || 0));
  const context = activeCard ? `${path.title} - current step ${activeCard.stepNumber}: ${activeCard.title}` : `${path.title} - ${title}`;
  const navTitle = path.title || "Chapter steps";
  const isFocused = variant === "focused";
  return h("nav", { className: `general-compact-chapter-nav ${isFocused ? "general-focused-step-rail" : "general-overview-step-grid"}`, "aria-label": `${navTitle} chapter path` },
    h("div", { className: "general-focused-nav-head" },
      h("span", null, eyebrow),
      h("h2", null, activeCard ? "Switch step" : "Focused study cards"),
      h("p", null, context)
    ),
    h("div", { className: "general-compact-step-list" },
      orderedCards.map((card) => h("button", {
        key: card.id,
        type: "button",
        className: `general-compact-step-link ${card.id === activeCardId ? "active" : ""}`,
        onClick: () => onSelectCard(card.id),
        "aria-current": card.id === activeCardId ? "step" : undefined
      },
        h("span", { className: "general-step-number" }, `Step ${card.stepNumber}`),
        h("strong", null, card.title),
        isFocused ? h("small", null, card.id === activeCardId ? "Current lesson" : "Open lesson") : [
          h("p", { key: "phrase" }, compactStudyPhrase(card.purpose || card.keyDecision)),
          h("small", { key: "action" }, "Open lesson")
        ]
      ))
    )
  );
}

function GeneralPathChooserPage({ onSelectPath, supportNode = null }) {
  return h("div", { className: "general-path-chooser-page" },
    h("div", { className: "general-path-title general-path-title-main" },
      h("span", null, "Step 1"),
      h("h3", null, "Choose Builder Path"),
      h("p", null, "Start with what you are trying to build. Each path opens a sequential build page, then each step opens a full study card.")
    ),
    supportNode,
    h("div", { className: "general-path-grid" },
      generalBuilderPaths.map((path) => {
        const meta = generalPathCardMeta[path.id] || {};
        return h("button", {
        key: path.id,
        type: "button",
        className: `general-path-card general-path-card-${path.id}`,
        onClick: () => onSelectPath(path.id)
      },
        h("div", { className: "general-path-card-head" },
          h("span", { className: "general-path-order" }, String(path.order).padStart(2, "0")),
          h("small", null, meta.lane || "Builder path")
        ),
        h("strong", null, path.title),
        meta.cue ? h("p", { className: "general-path-cue" }, meta.cue) : null,
        h("p", null, path.description),
        h("div", { className: "general-path-card-foot" },
          h("em", null, `${path.cards.length} sequential study cards`),
          meta.artifact ? h("span", null, meta.artifact) : null
        )
      );
      })
    )
  );
}

function GeneralPathStepsPage({ path, onShowPaths, onShowPath, onSelectCard, toolsNode = null }) {
  return h("div", { className: "general-path-page" },
    h(GeneralStudyBreadcrumbs, { path, onShowPaths, onShowPath: () => {} }),
    h(StudyPageHeader, { path }),
    h(CompactChapterNav, {
      path,
      onSelectCard,
      title: "Study these steps in order"
    }),
    h(GeneralPathChapter, { path }),
    toolsNode,
    h(CompactPrevNextNav, { path, onShowPath })
  );
}

function GeneralBuilderStudy({
  screen,
  selectedPathId,
  selectedCardId,
  highlightedCardId,
  searchQuery,
  setSearchQuery,
  tutorNode,
  onSelectPath,
  onSelectCard,
  onShowPaths,
  onShowPath,
  onOpenSearchResult
}) {
  const selectedPath = selectedPathId ? findGeneralBuilderPath(selectedPathId) : null;
  const selectedCard = selectedPath && selectedCardId
    ? selectedPath.cards.find((card) => card.id === selectedCardId) || null
    : null;
  const searchRouter = h(GeneralSearchRouter, { searchQuery, setSearchQuery, onOpenSearchResult, compact: true });
  const toolsNode = h(StudyToolsBar, { tutorNode, searchRouter });

  if (screen === "card" && selectedPath && selectedCard) {
    return h("section", { className: "general-builder-study general-builder-study-card" },
      h("div", { className: "general-builder-main" },
        h(GeneralStudyCardPage, {
          path: selectedPath,
          card: selectedCard,
          highlightedCardId,
          onShowPaths,
          onShowPath: () => onShowPath(selectedPath.id),
          onSelectCard,
          toolsNode
        })
      )
    );
  }

  if (screen === "path" && selectedPath) {
    return h("section", { className: "general-builder-study general-builder-study-path" },
      h("div", { className: "general-builder-main" },
        h(GeneralPathStepsPage, {
          path: selectedPath,
          onShowPaths,
          onShowPath,
          onSelectCard,
          toolsNode
        })
      )
    );
  }

  return h("section", { className: "general-builder-study general-builder-study-paths" },
    h("div", { className: "general-builder-main" },
      h(GeneralPathChooserPage, { onSelectPath, supportNode: toolsNode })
    )
  );
}

const SECTION_NVIDIA_SERVICE_GUIDES = {
  "Agentic AI": {
    "Agent Architecture and Design": [
      ["NeMo Agent Toolkit", "Workflow architecture: ReAct, router, sequential/parallel execution, memory, MCP/A2A publishing, and tool wiring."],
      ["Nemotron models", "Reasoning model choice for agents that plan, call tools, or follow enterprise instructions."],
      ["NeMo Retriever", "RAG architecture when the agent needs private or changing knowledge instead of learned facts."],
      ["NeMo Guardrails", "Policy layer around dialog, retrieval, and tool/action proposals."],
      ["NIM", "The model endpoint the agent calls, not the agent workflow itself."]
    ],
    "Agent Development": [
      ["NeMo Agent Toolkit", "Implement the workflow config, functions, function groups, retrievers, memory, and execution pattern."],
      ["NIM", "Serve the LLM or embedding/rerank model behind the workflow."],
      ["NeMo Retriever", "Connect document extraction, embeddings, search, rerank, citations, and permissions."],
      ["NeMo Guardrails", "Validate prompts, tool calls, tool results, and final outputs at runtime."],
      ["NGC", "Find model/container artifacts before wiring them into the app."]
    ],
    "Evaluation and Tuning": [
      ["NeMo Evaluator", "Measure task success, groundedness, safety, regression, and LLM-as-judge scores."],
      ["NeMo Agent Toolkit", "Replay and inspect agent traces, routes, tool calls, latency, and workflow failures."],
      ["NeMo Guardrails", "Evaluate whether policy checks block the right inputs, tools, retrieved content, and outputs."],
      ["NeMo Customizer", "Fine-tune an existing model when evals show durable behavior needs to change."],
      ["NeMo Curator", "Prepare or clean examples, labels, traces, and holdouts before tuning or evaluation."]
    ],
    "Deployment and Scaling": [
      ["NIM", "Expose optimized model APIs for the agent to call in production."],
      ["NIM Operator", "Manage NIM deployments, profiles, rollout, scale, and health on Kubernetes."],
      ["Dynamo (Triton Dynamo)", "Distributed LLM serving when prefill/decode or multi-node routing becomes the scaling problem."],
      ["Triton Inference Server", "Serve multi-framework models, ensembles, dynamic batching, or custom inference pipelines."],
      ["Nsight Systems", "Profile end-to-end latency across model calls, tools, retrieval, queues, and GPU activity."]
    ],
    "Cognition, Planning, and Memory": [
      ["NeMo Agent Toolkit", "Pick the control-flow pattern: ReAct, plan/reasoning wrapper, router, ReWOO, sequential, parallel, or memory agent."],
      ["Nemotron models", "Use reasoning/instruction models that can plan and follow tool-use constraints."],
      ["NeMo Retriever", "Support semantic memory or knowledge lookup without putting facts into model weights."],
      ["NeMo Guardrails", "Constrain plans, tool choices, and memory/retrieval use when autonomy creates risk."]
    ],
    "Knowledge Integration and Data Handling": [
      ["NeMo Retriever", "Primary answer for enterprise RAG: extract, chunk, embed, index, search, rerank, cite, and preserve permissions."],
      ["NeMo Curator", "Offline cleanup for corpora or examples before they become training, tuning, or evaluation data."],
      ["RAPIDS", "GPU-accelerated tabular/text processing when data prep becomes large-scale."],
      ["NeMo Guardrails", "Runtime policy checks around retrieved content and final answers, after access filtering is correct."],
      ["NeMo Evaluator", "Measure retrieval quality, groundedness, citation quality, and RAG regressions."]
    ],
    "NVIDIA Platform Implementation": [
      ["NeMo Agent Toolkit", "Agent workflow layer: tools, memory, routing, retrievers, traces, evals, API/MCP/A2A exposure."],
      ["NeMo Retriever", "RAG/retrieval layer: extraction, embeddings, indexing/search, reranking, citations."],
      ["NeMo Guardrails", "Runtime safety and policy layer for dialog, retrieval, tools, and outputs."],
      ["NIM", "Production model API layer for LLMs, embeddings, rerankers, and other supported models."],
      ["NeMo Evaluator", "Quality and regression layer for models, RAG, and agent trajectories."],
      ["TensorRT-LLM", "LLM inference optimization layer: KV cache, batching, quantization, engines."],
      ["Triton Inference Server", "General multi-framework inference server and ensemble layer."],
      ["NIM Operator", "Kubernetes operations layer for NIM lifecycle and scale."],
      ["NeMo Curator", "Offline data curation layer for training, tuning, and evaluation datasets."],
      ["NeMo Customizer", "Managed customization layer for LoRA/PEFT jobs on supported base models."]
    ],
    "Run, Monitor, and Maintain": [
      ["NeMo Evaluator", "Scheduled regression checks for answer quality, safety, groundedness, and task success."],
      ["NeMo Agent Toolkit", "Agent traces, route inspection, workflow profiling, and tool-call failure analysis."],
      ["Nsight Systems", "System timeline when latency or GPU utilization needs root-cause analysis."],
      ["NIM Operator", "Operational control for NIM rollout, scaling, health, and profile management."],
      ["NIM", "Live model endpoint metrics, health checks, and serving behavior."]
    ],
    "Safety, Ethics, and Compliance": [
      ["NeMo Guardrails", "Primary runtime policy answer for prompt injection, unsafe outputs, dialog policy, and risky tool actions."],
      ["NeMo Retriever", "Permission-aware retrieval so unauthorized context never reaches the model."],
      ["NeMo Evaluator", "Offline red-team, safety, bias, groundedness, and regression evaluation."],
      ["NeMo Curator", "PII, license, safety, and contamination checks before training or tuning data is used."],
      ["NeMo Agent Toolkit", "Workflow-level auditability for tool calls, traces, approvals, and handoffs."]
    ],
    "Human-AI Interaction and Oversight": [
      ["NeMo Guardrails", "Escalation and refusal behavior for user-facing dialog and high-risk actions."],
      ["NeMo Agent Toolkit", "Workflow handoffs, approval steps, trace evidence, and reviewable tool calls."],
      ["NeMo Evaluator", "Turn human feedback and review labels into regression checks."],
      ["NeMo Retriever", "Ground user-facing answers in reviewable sources and citations."]
    ]
  },
  "GenAI LLMs": {
    "LLM Architecture": [
      ["Nemotron models", "Concrete NVIDIA model family to recognize when architecture, reasoning, instruction, or reward models are discussed."],
      ["TensorRT-LLM", "Connect architecture choices to inference behavior: attention kernels, KV cache, batching, quantization, and decode speed."],
      ["NIM", "The serving package that exposes a supported model architecture as a callable API."],
      ["Nsight Systems", "Profile architecture/runtime bottlenecks before drilling into kernels."]
    ],
    "Prompt Engineering": [
      ["NIM", "Call the model endpoint while iterating on prompts, schemas, and context."],
      ["NeMo Retriever", "Add private or fresh evidence when prompts alone cannot supply missing knowledge."],
      ["NeMo Guardrails", "Add policy, refusal, jailbreak, and output checks around prompt-driven behavior."],
      ["NeMo Evaluator", "Compare prompt variants for quality, groundedness, safety, and regressions."]
    ],
    "Data Preparation": [
      ["NeMo Curator", "Primary answer for cleaning, deduping, filtering, scoring, redacting, and splitting training or tuning data."],
      ["RAPIDS", "GPU-accelerated dataframes and preprocessing when corpora are large."],
      ["NeMo Retriever", "Use for query-time RAG ingestion and chunk/vector outputs, not training corpus outputs."],
      ["NGC", "Manage artifacts and containers used around data preparation workflows."]
    ],
    "Model Optimization": [
      ["TensorRT-LLM", "Primary answer for LLM runtime optimization: engines, fused kernels, KV cache, batching, quantization, and TTFT."],
      ["Triton Inference Server", "Serve optimized models with batching, ensembles, model repositories, HTTP/gRPC, and instance groups."],
      ["NIM", "Use a packaged optimized microservice when you want supported production serving rather than building the stack yourself."],
      ["Nsight Systems", "Start profiling with end-to-end timelines."],
      ["Nsight Compute", "Kernel-level investigation after Nsight Systems points to a CUDA kernel."]
    ],
    "Fine-Tuning": [
      ["NeMo Customizer", "Managed fine-tuning/customization job for supported base models with LoRA/PEFT-style outputs."],
      ["NeMo Framework", "Full training/customization stack when you need deeper recipes, distributed training, or custom control."],
      ["NeMo Curator", "Prepare SFT, preference, alignment, and validation datasets before tuning."],
      ["NeMo Evaluator", "Compare tuned model against baseline for quality, safety, and regressions."],
      ["NIM", "Deploy the approved tuned model or adapter-backed endpoint after evaluation."]
    ],
    "Evaluation": [
      ["NeMo Evaluator", "Primary answer for benchmarks, LLM-as-judge, RAG metrics, safety, regression, and reportable evals."],
      ["NeMo Guardrails", "Runtime policy behavior to test alongside quality metrics."],
      ["NeMo Retriever", "Evaluate retrieval, reranking, citations, and groundedness for RAG workflows."],
      ["Nsight Systems", "Profile performance when evaluation includes latency and throughput behavior."]
    ],
    "GPU Acceleration and Optimization": [
      ["TensorRT-LLM", "LLM inference acceleration with NVIDIA kernels, batching, paged KV cache, and quantization."],
      ["Nsight Systems", "System-level GPU and CPU timeline for utilization, stalls, and end-to-end latency."],
      ["Nsight Compute", "Kernel-level CUDA metrics after a specific kernel is suspect."],
      ["NCCL", "Multi-GPU and multi-node collective communication for distributed training or serving."],
      ["RAPIDS", "GPU-accelerated data processing when preprocessing is the bottleneck."]
    ],
    "Model Deployment": [
      ["NIM", "Primary packaged model microservice answer for supported optimized inference APIs."],
      ["Triton Inference Server", "General production inference server for multi-framework models, ensembles, and batching."],
      ["NIM Operator", "Deploy, scale, and manage NIM on Kubernetes."],
      ["Dynamo (Triton Dynamo)", "Distributed LLM serving and disaggregated serving patterns at scale."],
      ["NGC", "Catalog and registry source for containers, models, and artifacts."]
    ],
    "Production Monitoring and Reliability": [
      ["NIM Operator", "Kubernetes lifecycle, rollout, health, scale, and profile operations for NIM deployments."],
      ["NIM", "Endpoint health, metrics, errors, rate limits, and production API behavior."],
      ["NeMo Evaluator", "Continuous or scheduled quality, safety, and regression checks after release."],
      ["Nsight Systems", "Performance investigation when live latency or utilization drifts."],
      ["Dynamo (Triton Dynamo)", "Reliability and routing concerns for distributed LLM serving."]
    ],
    "Safety, Ethics, and Compliance": [
      ["NeMo Guardrails", "Primary runtime control for unsafe prompts, outputs, policies, and jailbreak/tool-risk checks."],
      ["NeMo Evaluator", "Offline safety, bias, red-team, groundedness, and regression measurement."],
      ["NeMo Curator", "PII, license, provenance, contamination, and safety filtering before data enters training or tuning."],
      ["NeMo Retriever", "Permission-aware RAG so sensitive data is filtered before context assembly."]
    ]
  }
};

const GENERAL_LIFECYCLE_STAGE_DETAILS = {
  "gen-train-data": {
    focus: "This is pretraining data curation, not RAG ingestion. The output is a versioned learning corpus with safe train/val/test splits.",
    checks: ["Source inventory and license/provenance pass", "Exact and fuzzy dedupe before expensive filters", "PII/secrets redaction or quarantine", "Zero known overlap with eval/benchmark/canary sets"],
    metrics: ["duplicate removal rate", "PII/secret hit rate", "license rejection rate", "contamination hit count", "source blend percentages"],
    code: [
      "docs = inventory_sources(raw_sources)",
      "docs = exact_dedupe(docs, key=sha256(normalize(text)))",
      "docs = fuzzy_dedupe(docs, method=\"minhash_lsh\")",
      "docs = redact_or_quarantine_pii(docs)",
      "assert contamination_hits(docs, eval_sets) == 0",
      "train, val, test = split_by_source_or_time(docs)"
    ].join("\n")
  },
  "gen-train-run": {
    focus: "This is the actual foundation-training job. The input is the curated corpus; the output is checkpoints plus tokenizer/config/training evidence.",
    checks: ["Architecture/tokenizer/config fixed before large run", "Distributed plan covers data/tensor/pipeline/expert parallelism", "Checkpoint includes optimizer, scheduler, RNG, tokenizer, and sharded metadata", "Loss, grad norm, throughput, and data loader health monitored"],
    metrics: ["next-token cross-entropy", "perplexity", "tokens/sec", "grad norm", "GPU utilization", "checkpoint restore success"],
    code: [
      "for batch in train_loader:",
      "    logits = model(batch.input_ids).logits",
      "    loss_lm = cross_entropy(logits[:, :-1], batch.labels[:, 1:])",
      "    loss = loss_lm + moe_load_balance_loss(model)",
      "    loss.backward(); clip_grad_norm_(model.parameters(), 1.0)",
      "    optimizer.step(); scheduler.step(); save_checkpoint_if_due()"
    ].join("\n")
  },
  "gen-train-eval": {
    focus: "This evaluates the newly trained artifact before anyone publishes it. It is not prompt-only testing; it is release evidence for a new base model.",
    checks: ["Capability benchmarks and domain tasks", "Safety, bias, refusal, and policy behavior", "Contamination audit against training corpus", "Regression against prior baseline or target profile"],
    metrics: ["task accuracy/F1", "perplexity on held-out data", "safety pass rate", "bias slices", "groundedness if used in RAG", "p95 latency in serving profile"],
    code: [
      "scores = run_eval_suites(candidate_model, protected_holdouts)",
      "scores[\"contamination\"] = contamination_hits(train_corpus, holdouts)",
      "release_pass = (scores.capability >= target",
      "                and scores.safety >= target_safety",
      "                and scores.contamination == 0)"
    ].join("\n")
  },
  "gen-train-serve": {
    focus: "This is publishing a model you just trained. Registry means checkpoint lineage and release approval here; it does not mean selecting a different model.",
    checks: ["Register checkpoint, tokenizer, config, dataset card, model card, and eval report", "Package a serving profile with precision/context limits", "Expose endpoint with health, auth, rate limits, metrics, and rollback", "Route canary traffic only after release gate passes"],
    metrics: ["readiness/health", "time to first token", "tokens/sec", "p95/p99 latency", "error rate", "rollback time"],
    code: [
      "artifact = registry.register(checkpoint, tokenizer, config, eval_report)",
      "endpoint = deploy_endpoint(artifact, profile=\"bf16-or-fp8-validated\")",
      "gateway.canary(route=\"trained-v1\", endpoint=endpoint, traffic=0.05)",
      "if live_quality_ok() and p95_latency_ok(): gateway.promote(\"trained-v1\")"
    ].join("\n")
  },
  "gen-tune-select": {
    focus: "This is base-model selection for adaptation. You are not training from zero; you are choosing the checkpoint/API that is closest to the needed behavior.",
    checks: ["Task fit, context length, modality, tool use, license, and hosting constraints", "Baseline eval before tuning", "Adapter compatibility and deployment path", "Rollback target recorded"],
    metrics: ["baseline task score", "latency/cost", "license/hosting fit", "safety baseline", "context fit"],
    code: [
      "candidates = load_approved_models(task, constraints)",
      "baseline_scores = {m.id: eval_model(m, task_eval) for m in candidates}",
      "base = argmax(candidates, key=lambda m: utility(m, baseline_scores[m.id]))"
    ].join("\n")
  },
  "gen-tune-data": {
    focus: "This curates examples for tuning, not a giant pretraining corpus. The data shape tells you the method: SFT examples, preference pairs, or tool traces.",
    checks: ["Prompt/response examples follow target schema", "Preference pairs are consistent and policy-aligned", "Duplicate prompts and leakage removed", "Validation and regression holdouts protected"],
    metrics: ["label agreement", "duplicate prompt rate", "schema-valid example rate", "PII hit rate", "holdout leakage count"],
    code: [
      "examples = load_sft_examples()",
      "examples = remove_duplicate_prompts(examples)",
      "examples = validate_schema_and_labels(examples)",
      "train, val, regression = protected_split(examples, by=\"user_or_task\")"
    ].join("\n")
  },
  "gen-tune-adapt": {
    focus: "This changes durable behavior with adapters or tuning. Use it when prompts/RAG are not enough and the base model already has the core capability.",
    checks: ["Method chosen from data shape and budget: LoRA/QLoRA/SFT/preference", "Target modules/rank/learning rate selected", "Overfitting and forgetting monitored", "Adapter lineage tied to base model"],
    metrics: ["SFT cross-entropy", "preference win rate", "DPO/pairwise loss", "task score", "regression score"],
    code: [
      "adapter = attach_lora(base, rank=16, targets=[\"q_proj\", \"v_proj\"])",
      "loss_sft = cross_entropy(adapter(batch.prompt), batch.response)",
      "loss_dpo = -log_sigmoid(beta * (policy_margin - ref_margin)).mean()",
      "optimize(loss_sft or loss_dpo)"
    ].join("\n")
  },
  "gen-tune-eval": {
    focus: "This release gate compares the tuned artifact against the untuned baseline. A tuned model must improve target behavior without breaking old behavior.",
    checks: ["Target task improves enough to matter", "General regression suite stays within tolerance", "Safety/refusal behavior does not degrade", "Adapter/version approval recorded"],
    metrics: ["delta task score", "win rate vs baseline", "safety pass rate", "regression pass rate", "overfit gap train-vs-val"],
    code: [
      "candidate = base + adapter",
      "delta = eval(candidate, target_set) - eval(base, target_set)",
      "regression_ok = eval(candidate, regression_set) >= eval(base, regression_set) - 0.01",
      "approve = delta >= 0.03 and regression_ok and safety_ok(candidate)"
    ].join("\n")
  },
  "gen-tune-serve": {
    focus: "This deploys the tuned artifact or adapter-backed profile. The serving path must know which base and adapter are coupled.",
    checks: ["Endpoint loads base + adapter or merged checkpoint", "Canary compares tuned route to baseline route", "Rollback can disable adapter quickly", "Monitoring separates adapter failures from base model failures"],
    metrics: ["adapter load success", "route-specific task score", "p95 latency delta", "cost delta", "rollback success"],
    code: [
      "profile = ServingProfile(base=base.id, adapter=adapter.id)",
      "endpoint = deploy_endpoint(profile)",
      "gateway.split({\"baseline\": 0.95, \"tuned\": 0.05})",
      "if regression_detected(): gateway.disable_route(\"tuned\")"
    ].join("\n")
  },
  "gen-api-select": {
    focus: "This is the main place where model selection belongs: you will use an existing API, open model, catalog artifact, or approved internal endpoint.",
    checks: ["Task, modality, context, latency, cost, safety, license, and data residency fit", "Generator vs embedding vs reranker role separated", "Eval run on real workload", "Registry records approved choice"],
    metrics: ["quality score", "p95 latency", "cost per task", "context fit", "safety score", "hosting risk"],
    code: [
      "for model in candidates:",
      "    score[model] = quality(model) - cost_penalty(model) - latency_penalty(model)",
      "chosen = max(candidates, key=lambda m: score[m])",
      "registry.approve(chosen, eval_report, constraints)"
    ].join("\n")
  },
  "gen-api-prompt": {
    focus: "This adapts behavior without changing weights. For 2026 prompt engineering, treat the prompt as a contract for task, evidence, schema, uncertainty, and verification.",
    checks: ["Instruction hierarchy clear", "Retrieved/tool content isolated as data", "Evidence-only factual claims and no-evidence behavior defined", "Citation support checked per claim", "Schema validation and repair policy defined", "Prompt version tied to model and evals"],
    metrics: ["schema valid rate", "exact/task score", "refusal correctness", "citation support", "unsupported-claim rate", "prompt-regression pass rate"],
    code: [
      "messages = [system_policy, developer_schema, user_task, evidence_block]",
      "raw = model.generate(messages)",
      "parsed = validate_or_retry_json(raw, schema)",
      "unsupported = unsupported_claims(parsed.answer, evidence_block)",
      "score = eval_prompt_output(parsed, gold, citations, unsupported)"
    ].join("\n")
  },
  "gen-api-serve": {
    focus: "This exposes the chosen existing model/API through production controls. No training happens here.",
    checks: ["Auth, rate limits, context/output limits, and error mapping", "Fallback and canary routes approved", "Batching/cache policy respects tenant and version", "Endpoint and gateway metrics traced"],
    metrics: ["time to first token", "tokens/sec", "error rate", "cache hit rate", "fallback rate", "p95/p99 latency"],
    code: [
      "route = gateway.choose(task, risk, tenant, cost_budget)",
      "response = endpoint.call(route.model, messages, limits)",
      "trace.log(route=route.id, tokens=response.usage, latency=response.latency)"
    ].join("\n")
  },
  "gen-api-measure": {
    focus: "This checks whether the existing-model path is good enough before spending effort on tuning or training.",
    checks: ["Prompt evals and regression suite", "Latency/cost by route and token count", "Cache/context bloat measured", "Escalate to RAG or tuning only if metrics prove the gap"],
    metrics: ["task score", "schema valid rate", "cost per completed task", "p95 latency", "context token count", "route mix"],
    code: [
      "scores = evaluate_prompt_route(route, eval_cases)",
      "cost = sum(tokens * price for tokens in trace.token_usage)",
      "if scores.quality < target: choose_next_fix(prompt_or_rag_or_tuning)"
    ].join("\n")
  },
  "gen-agent-architecture": {
    focus: "This is the first agentic design decision. Do not start by choosing a product; choose the control pattern that matches task uncertainty, evidence need, tool risk, and auditability.",
    checks: ["Direct chat for simple low-risk answers", "RAG workflow when private or fresh evidence is needed", "Deterministic graph when steps and approvals are known", "Bounded ReAct only when tool observations change the next step", "Supervisor/multi-agent only when roles or permissions are truly separable"],
    metrics: ["task success", "route accuracy", "approval correctness", "unnecessary-agent rate", "tool-call count", "p95 latency"],
    code: [
      "if simple_low_risk: direct_model_call()",
      "elif needs_private_evidence: rag_workflow()",
      "elif fixed_audited_process: state_graph_with_approvals()",
      "elif observations_change_next_step: bounded_react_loop()",
      "else: router_or_supervisor_if_roles_are_separable()"
    ].join("\n")
  },
  "gen-agent-ingest": {
    focus: "This prepares runtime knowledge for RAG/agents. It does not change model weights.",
    checks: ["Parse PDFs/tables/code with structure", "Chunk by sections and preserve source metadata", "Propagate ACL/tenant/sensitivity fields", "Delete/update path proven"],
    metrics: ["parse coverage", "metadata completeness", "ACL test pass rate", "PII/secret hit rate", "deletion propagation time"],
    code: [
      "blocks = parse_document(doc)",
      "chunks = structure_aware_chunk(blocks)",
      "records = attach_metadata_acl_source(chunks, doc)",
      "index.upsert(embed(records), deletion_key=doc.id)"
    ].join("\n")
  },
  "gen-agent-rag": {
    focus: "This is the query-time evidence path: retrieve, rerank, pack context, answer with citations, and apply anti-hallucination measures.",
    checks: ["Dense+sparse retrieval when exact terms matter", "ACL filters before retrieval/context", "Reranker top-N tuned", "Citation support checked per claim", "No-evidence refusal used instead of forced answers"],
    metrics: ["recall@k", "MRR/nDCG", "answer-bearing chunk rank", "groundedness", "unsupported citation rate", "hallucination rate"],
    code: [
      "dense = vector_search(embed(query), filters=acl)",
      "sparse = bm25_search(query, filters=acl)",
      "candidates = rrf([dense, sparse])",
      "context = pack(cross_encoder_rerank(query, candidates)[:8])",
      "answer = generate_from_context(query, context)",
      "assert citations_entail_claims(answer, context)"
    ].join("\n")
  },
  "gen-agent-react": {
    focus: "ReAct means Reason -> Act -> Observe -> Reason again. It belongs in agent/RAG applications only when each tool result can change the next action.",
    checks: ["Use ReAct for dynamic tool feedback, not known fixed processes", "Validate every tool call outside the model", "Set max steps, token budget, timeout budget, retry limits, and explicit stop criteria", "Trace thought/action/observation state enough to evaluate the trajectory"],
    metrics: ["tool success rate", "step budget exhaustion rate", "loop termination reason", "trajectory score", "p95 latency per step"],
    code: [
      "while budget_left(state):",
      "    thought = planner.decide_next_need(state)",
      "    action = tool_gateway.validate_and_execute(thought.proposed_call)",
      "    state = observe_and_update(state, action.result)",
      "    if evidence_sufficient(state) or should_escalate(state): break"
    ].join("\n")
  },
  "gen-agent-workflow": {
    focus: "This controls the agent runtime: state, tools, memory, retries, approvals, and recovery.",
    checks: ["State owner and stop conditions explicit", "Tool schema/auth/idempotency enforced outside the model", "Memory writes are scoped and consented", "Checkpoints avoid duplicate side effects"],
    metrics: ["trajectory success", "tool success", "duplicate-prevented count", "memory helpfulness", "step budget exhaustion rate"],
    code: [
      "state = load_or_create_task_state(task)",
      "proposal = planner.next_action(state)",
      "result = tool_gateway.execute(proposal, user)",
      "state = update_state(state, result); checkpoint(state)"
    ].join("\n")
  },
  "gen-agent-policy": {
    focus: "This wraps runtime safety around input, retrieved content, tool proposals, tool results, and output.",
    checks: ["Prompt injection detection on retrieved/tool content", "PII/secrets redaction or blocking", "Tool risk and approval policy", "Groundedness/refusal output policy"],
    metrics: ["block precision/recall", "PII leak rate", "jailbreak success rate", "groundedness pass rate", "escalation accuracy"],
    code: [
      "if input_policy.block(user_msg): return refuse()",
      "safe_chunks = [c for c in chunks if not prompt_injection(c)]",
      "tool_policy.authorize(proposed_call, user)",
      "return output_policy.check(answer, evidence=safe_chunks)"
    ].join("\n")
  },
  "gen-agent-eval": {
    focus: "This evaluates the full agent trajectory, not only the final text.",
    checks: ["Final answer correctness and groundedness", "Retrieval and tool choices inspected", "Policy and approval placement checked", "Latency/cost measured per span"],
    metrics: ["trajectory score", "tool correctness", "retrieval recall@k", "groundedness", "safety pass rate", "cost per task"],
    code: [
      "trace = run_agent_case(case)",
      "score = weighted_mean({",
      "  \"answer\": answer_score(trace), \"tool\": tool_score(trace),",
      "  \"groundedness\": groundedness(trace), \"safety\": safety_score(trace)",
      "})"
    ].join("\n")
  },
  "gen-ops-observe": {
    focus: "This observes production behavior after release. It turns live failures into replayable evidence.",
    checks: ["Trace route, retrieval, model, tool, guardrail, review, and final answer spans", "Version tags on model/prompt/index/tools/policy", "Task success captured beyond HTTP 200", "Incidents replayable"],
    metrics: ["task success rate", "empty retrieval rate", "tool failure rate", "unsupported citation rate", "p95/p99 by span", "replay coverage"],
    code: [
      "with trace.span(\"retrieval\"): chunks = retriever.search(query)",
      "with trace.span(\"model\"): answer = model.generate(prompt)",
      "trace.set_versions(model, prompt, index, tools, policy)",
      "trace.set_outcome(task_success=score_task(answer))"
    ].join("\n")
  },
  "gen-ops-optimize": {
    focus: "This reduces cost/latency only after traces show the bottleneck.",
    checks: ["Separate retrieval, prefill, decode, tools, queueing, and guardrail time", "Tune routing, batching, caching, context, or precision with evals", "Do not optimize away quality/safety", "Monitor route drift"],
    metrics: ["p50/p95/p99", "time to first token", "tokens/sec", "cache hit rate", "cost per completed task", "quality after optimization"],
    code: [
      "bottleneck = max(stage_latencies(trace), key=p95)",
      "fix = choose_fix(bottleneck)",
      "candidate = apply_optimization(fix)",
      "approve = eval(candidate).quality_ok and p95(candidate) < p95(baseline)"
    ].join("\n")
  },
  "gen-ops-scale-users": {
    focus: "The mindset changes as load grows: user count must become active concurrency, request rate, token shape, workflow fan-out, queue depth, p95/p99 SLOs, and isolation policy.",
    checks: ["100 users: correctness, traces, simple limits, and one reliable rollback path may be enough", "10k users: calculate peak RPS/concurrency, separate real-time and batch lanes, and autoscale on queue/span signals", "1M+ users: add tenant isolation, priority queues, backpressure, bulkheads, regional/cell isolation, canaries, and incident replay"],
    metrics: ["active concurrency", "requests/sec", "TTFT", "p95/p99", "queue depth", "tokens/sec", "tool timeout rate", "cost per completed task"],
    code: [
      "rps = active_users * requests_per_user_per_minute / 60",
      "inflight = rps * average_latency_seconds",
      "if p99_bad or queue_depth_rising: isolate_lanes_and_apply_backpressure()",
      "if rollout_regresses_quality_or_tail: rollback_version()"
    ].join("\n")
  },
  "gen-ops-review": {
    focus: "This governs risk with human review, approval, sampling, escalation, and audit.",
    checks: ["Risk tiers mapped to auto/sample/approve/escalate/block", "Reviewer card includes evidence and versions", "Feedback labels curated before reuse", "Audit trail complete"],
    metrics: ["approval rate", "reviewer agreement", "escalation rate", "SLA breach rate", "false allow/block rate", "feedback-to-eval rate"],
    code: [
      "tier = risk_tier(action, confidence, authorization)",
      "if tier == \"approval_required\": review_queue.submit(case)",
      "elif tier == \"sample_review\": maybe_sample(case)",
      "audit.write(case, tier, reviewer_decision)"
    ].join("\n")
  },
  "gen-ops-feedback": {
    focus: "This turns incidents and review labels into the right kind of fix: eval, prompt, retrieval, data, policy, tuning, or serving.",
    checks: ["Failure classified by layer", "New regression case added before fix", "Fix owner chosen from evidence", "Holdouts protected from training contamination"],
    metrics: ["incident recurrence rate", "new eval coverage", "fix pass rate", "regression pass rate", "time to mitigation"],
    code: [
      "failure = classify_incident(trace)",
      "eval_set.add_regression_case(trace)",
      "fix = route_fix(failure, choices=[\"prompt\", \"rag\", \"policy\", \"tuning\", \"serving\"])",
      "approve = run_regression_suite(fix).passes"
    ].join("\n")
  }
};

const SERVICE_GROUPS = [
  { name: "Data and knowledge", className: "data", match: (service) => service.group === "Data and knowledge" },
  { name: "Model lifecycle", className: "model", match: (service) => service.group === "Model lifecycle" },
  { name: "Agent runtime", className: "agent", match: (service) => service.group === "Agent runtime" },
  { name: "Serving and operations", className: "serving", match: (service) => service.group === "Serving and operations" },
  { name: "Safety and evaluation", className: "safety", match: (service) => service.group === "Safety and evaluation" },
  { name: "Governance", className: "governance", match: (service) => service.group === "Governance" },
  { name: "NeMo family", className: "nemo", match: (service) => service.name.startsWith("NeMo") },
  { name: "NIM and serving", className: "serving", match: (service) => ["NIM", "NIM Operator", "Triton Inference Server", "Dynamo (Triton Dynamo)"].includes(service.name) },
  { name: "Optimization and profiling", className: "optimize", match: (service) => ["TensorRT-LLM", "Nsight Systems", "Nsight Compute", "NCCL"].includes(service.name) },
  { name: "Data, RAG, and models", className: "data", match: (service) => ["RAPIDS", "Nemotron models", "NGC"].includes(service.name) }
];

const SERVICE_ORDER = [
  "Training Data Curation Pipeline", "Knowledge Ingestion and Permission Pipeline",
  "Model Selection and Registry", "Prompt and Context Design", "Foundation Model Training Stack", "Model Customization Toolkit",
  "Knowledge and RAG Pipeline", "Agent Orchestration Runtime", "Tool Gateway and Function Runtime", "Memory Store",
  "Policy and Guardrails Layer", "Model Inference Endpoint",
  "Model Serving Gateway", "Evaluation and Regression Harness", "Observability and Trace Monitor",
  "Cost/Latency Optimizer", "Human Review and Governance Console",
  "NeMo Curator", "RAPIDS", "NGC",
  "NeMo Framework", "NCCL", "NeMo Customizer",
  "Nemotron models", "NeMo Agent Toolkit", "NeMo Retriever", "NeMo Guardrails",
  "TensorRT-LLM", "NIM", "Triton Inference Server", "Dynamo (Triton Dynamo)", "NIM Operator",
  "NeMo Evaluator", "Nsight Systems", "Nsight Compute"
];

const ACRONYM_PATTERN = new RegExp(
  `\\b(${Object.keys(nvidiaAcronymExpansions)
    .sort((a, b) => b.length - a.length)
    .map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")})\\b`,
  "g"
);

function expandNvidiaAcronyms(text) {
  const source = String(text || "");
  return source.replace(ACRONYM_PATTERN, (match, _acronym, offset) => {
    if (source.slice(offset + match.length, offset + match.length + 2) === " (") return match;
    return `${match} (${nvidiaAcronymExpansions[match]})`;
  });
}

function serviceSummaryText(service, fallback = "") {
  const description = fallback || service.description || "";
  return service.fullName ? `${service.fullName}. ${description}` : description;
}

const LIFECYCLE_CONTEXT_FILTERS = {
  "GenAI LLMs": [
    { label: "All", lane: "All", short: "All" },
    { label: "Deploy optimized LLM endpoint", lane: "Core: Deploy optimized LLM endpoint", short: "LLM endpoint" },
    { label: "Build grounded LLM application", lane: "Core: Build grounded LLM application", short: "Grounded app" },
    { label: "Fine-tune existing model", lane: "Secondary: Fine-tune existing model", short: "Fine-tune" },
    { label: "Train model from zero reference", lane: "Reference: Train model from zero", short: "Train zero" }
  ],
  "Agentic AI": [
    { label: "All", lane: "All", short: "All" },
    { label: "Agent Architecture and Design", lane: "1. Agent Architecture and Design", short: "Architecture" },
    { label: "Agent Development", lane: "2. Agent Development", short: "Development" },
    { label: "Evaluation and Tuning", lane: "3. Evaluation and Tuning", short: "Evaluation" },
    { label: "Deployment and Scaling", lane: "4. Deployment and Scaling", short: "Deploy" },
    { label: "Cognition, Planning, and Memory", lane: "5. Cognition, Planning, and Memory", short: "Memory" },
    { label: "Knowledge Integration and Data Handling", lane: "6. Knowledge Integration and Data Handling", short: "Knowledge" },
    { label: "NVIDIA Platform Implementation", lane: "7. NVIDIA Platform Implementation", short: "NVIDIA" },
    { label: "Run, Monitor, and Maintain", lane: "8. Run, Monitor, and Maintain", short: "Operate" },
    { label: "Safety, Ethics, and Compliance", lane: "9. Safety, Ethics, and Compliance", short: "Safety" },
    { label: "Human-AI Interaction and Oversight", lane: "10. Human-AI Interaction and Oversight", short: "Human" }
  ],
  "Agentic AI General": [
    { label: "All", lane: "All", short: "All" },
    { label: "Train model from zero", lane: "Train model from zero", short: "Train zero" },
    { label: "Fine-tune existing model", lane: "Fine-tune existing model", short: "Fine-tune" },
    { label: "Use existing model or API", lane: "Use existing model or API", short: "Existing API" },
    { label: "Build agent/RAG application", lane: "Build agent/RAG application", short: "Agent/RAG" },
    { label: "Operate, govern, and improve", lane: "Operate, govern, and improve", short: "Operate" }
  ]
};

const NVIDIA_SUITE_TOPICS = [
  {
    id: "platform-map",
    category: "Foundation",
    title: "NVIDIA GenAI and Agentic Platform Map",
    summary: "The shared suite across the NVIDIA certs: data curation, model selection/customization, RAG and agent tooling, optimized inference, production serving, evaluation, guardrails, and profiling.",
    examSignal: "When a question names many NVIDIA tools, first identify the lifecycle path: existing-model inference, grounded application, fine-tuning, train-from-zero reference, agent workflow, or operations.",
    keyIdeas: [
      "**GPU hardware** provides accelerated math and memory bandwidth.",
      "**CUDA, NCCL, and libraries** expose the GPU and scale work across devices.",
      "**NeMo family** covers data curation, training/customization, retrieval, agent workflows, guardrails, and evaluation.",
      "**TensorRT-LLM, Triton, NIM, and Dynamo** are serving/inference-side tools, but at different abstraction levels.",
      "**NGC and Nemotron** sit near model/artifact selection: model family, containers, Helm charts, and approved assets.",
      "**Nsight Systems and Nsight Compute** diagnose performance; they do not train, serve, retrieve, or guardrail models."
    ],
    mustKnow: [
      "NeMo Framework builds/customizes models; NIM packages optimized model inference behind production APIs.",
      "TensorRT-LLM optimizes LLM inference engines and runtime behavior; Triton serves models from multiple frameworks.",
      "NIM Operator manages NIM lifecycle on Kubernetes; it is not an inference engine by itself.",
      "NeMo Retriever is RAG/retrieval; NeMo Guardrails is policy/safety; NeMo Evaluator is quality evaluation.",
      "NeMo Agent Toolkit is agent workflow orchestration and observability; it is not the model endpoint.",
      "Nsight Systems is timeline/system-level; Nsight Compute is CUDA kernel-level."
    ],
    traps: [
      "Do not answer with a deployment tool when the bottleneck is training, curation, or model customization.",
      "Do not answer with NeMo Framework when the question asks for a packaged inference microservice.",
      "Do not answer with Nsight Compute for an end-to-end latency timeline unless the issue has already been narrowed to one CUDA kernel.",
      "Do not answer with a model family when the question asks for retrieval, serving, guardrails, or evaluation."
    ],
    related: ["NeMo Curator", "NeMo Framework", "NeMo Retriever", "NeMo Guardrails", "NIM", "TensorRT-LLM", "Nsight Systems"]
  },
  {
    id: "nemo-family",
    category: "Products",
    title: "NeMo Family",
    summary: "NeMo is the generative AI application/model lifecycle family: curate data, train or customize models, retrieve knowledge, build agent workflows, apply guardrails, and evaluate outputs.",
    examSignal: "Pick NeMo when the scenario is about building/customizing/evaluating GenAI behavior, not merely hosting an already-optimized endpoint.",
    keyIdeas: [
      "**NeMo Framework** is the training/customization framework for LLM, multimodal, speech, and related GenAI models.",
      "**NeMo Curator** prepares high-quality datasets through filtering, dedupe, classification, and synthetic-data workflows.",
      "**NeMo Customizer** focuses on managed parameter-efficient customization such as LoRA/PEFT.",
      "**NeMo Retriever** supports enterprise retrieval pipelines for RAG.",
      "**NeMo Agent Toolkit** supports agent workflow composition, tracing, and evaluation patterns.",
      "**NeMo Guardrails** constrains dialog, tool use, and safety behavior.",
      "**NeMo Evaluator** measures model or agent quality with benchmarks and judge workflows."
    ],
    mustKnow: [
      "Training/customization questions usually contrast NeMo Framework or NeMo Customizer with NIM.",
      "RAG questions usually point to NeMo Retriever, not NeMo Framework.",
      "Agent workflow questions point to NeMo Agent Toolkit, then pair it with Retriever, Guardrails, Evaluator, and NIM as needed.",
      "Policy/tool-control questions point to NeMo Guardrails.",
      "Quality or LLM-as-judge questions point to NeMo Evaluator."
    ],
    traps: [
      "NeMo is not a single runtime. The family has several products with different lifecycle jobs.",
      "NeMo Framework can support deployment workflows, but exam questions usually separate it from NIM/Triton serving.",
      "Retriever does not create safety policy; Guardrails does not build vector indexes; Agent Toolkit does not replace the model endpoint."
    ],
    related: ["NeMo Curator", "NeMo Framework", "NeMo Customizer", "NeMo Retriever", "NeMo Agent Toolkit", "NeMo Guardrails", "NeMo Evaluator"]
  },
  {
    id: "serving-stack",
    category: "Products",
    title: "Serving Stack: TensorRT-LLM, Triton, NIM, Dynamo",
    summary: "The serving stack turns trained models into fast, scalable production inference. The tools differ by level: engine optimization, model server, packaged microservice, and distributed LLM serving.",
    examSignal: "If the scenario says API endpoint, model profiles, batching, KV cache, concurrency, Kubernetes rollout, or production latency, you are likely in serving/optimization territory.",
    keyIdeas: [
      "**TensorRT-LLM** builds optimized LLM inference engines and runtimes using NVIDIA GPU optimizations.",
      "**Triton Inference Server** serves models from multiple frameworks through HTTP/gRPC with batching and model management.",
      "**NIM** packages optimized AI model inference into NVIDIA-supported microservices and APIs.",
      "**NIM Operator** handles Kubernetes lifecycle for NIM deployments: rollout, scaling, health, and profiles.",
      "**Dynamo** is for distributed LLM serving concerns such as disaggregated prefill/decode and large-scale routing."
    ],
    mustKnow: [
      "TensorRT-LLM is optimization/runtime; Triton is a general inference server; NIM is packaged production microservice.",
      "Use NIM when the question wants an easy production API for an optimized model.",
      "Use Triton when the question emphasizes multi-framework serving, ensembles, dynamic batching, or HTTP/gRPC serving.",
      "Use Dynamo when serving is distributed across nodes or split into specialized LLM serving roles."
    ],
    traps: [
      "NIM is not the same as NeMo. NIM serves; NeMo generally builds/customizes/evaluates.",
      "TensorRT-LLM is not the user-facing API layer by itself in most exam scenarios.",
      "NIM Operator manages NIM on Kubernetes; it does not replace NIM or Triton."
    ],
    related: ["TensorRT-LLM", "Triton Inference Server", "NIM", "NIM Operator", "Dynamo (Triton Dynamo)"]
  },
  {
    id: "gpu-hardware",
    category: "Hardware",
    title: "GPU and H100 Basics",
    summary: "For NVIDIA GenAI exams, GPUs matter because LLM training and inference are constrained by tensor math, memory capacity, memory bandwidth, interconnect, and batching/concurrency behavior.",
    examSignal: "If the scenario mentions H100, A100, memory, batch size, KV cache, FP8/FP16/BF16/TF32/INT8, MIG, NVLink, nvidia-smi, or GPU utilization, think hardware-aware optimization.",
    keyIdeas: [
      "**H100** is based on the Hopper architecture and includes fourth-generation Tensor Cores plus a Transformer Engine for FP8-oriented LLM acceleration.",
      "**H100 SXM** is commonly shown with 80GB GPU memory, 3.35TB/s memory bandwidth, NVLink up to 900GB/s, and up to 700W configurable TDP.",
      "**H100 NVL** is shown with 94GB memory, 3.9TB/s memory bandwidth, NVLink up to 600GB/s, and 350-400W configurable TDP.",
      "**MIG** partitions a GPU into isolated instances; useful for utilization/isolation, not for making one huge model fit across partitions.",
      "**NVLink/NCCL** matter when scaling training or inference across GPUs; PCIe-only setups have different communication limits.",
      "**NVIDIA SMI / nvidia-smi** is the command-line utility for checking driver/CUDA-visible GPU state such as utilization, memory, temperature, power, processes, and MIG mode."
    ],
    mustKnow: [
      "Memory capacity determines whether weights, activations, and KV cache fit.",
      "Memory bandwidth and KV cache behavior affect token throughput and latency.",
      "FP8/FP16/BF16/INT8 are precision choices; lower precision can improve throughput/memory use if accuracy is acceptable.",
      "Batching improves throughput but can hurt latency if not controlled.",
      "nvidia-smi is useful for quick health/utilization checks, but it is not a training library, guardrail, or deep profiler.",
      "Adding GPUs is not always first: profile whether bottleneck is data, retrieval, CPU, network, memory, or kernels."
    ],
    traps: [
      "Do not blindly add GPUs before identifying the bottleneck.",
      "Do not use MIG as a substitute for model parallelism.",
      "Do not confuse nvidia-smi with Nsight Systems or Nsight Compute; SMI shows coarse device/process state, not timeline traces or kernel metrics.",
      "Do not confuse training memory problems with serving latency problems."
    ],
    related: ["H100", "A100", "CUDA", "NCCL", "NVLink", "MIG", "NVIDIA SMI", "Tensor Cores"]
  },
  {
    id: "nemotron-ngc",
    category: "Models",
    title: "Nemotron Models and NGC",
    summary: "Nemotron is NVIDIA's open model family for agentic, reasoning, multimodal, retrieval, safety, and enterprise AI tasks. NGC is the catalog/registry side for containers, models, resources, and deployable assets.",
    examSignal: "If the question asks which model family to choose for NVIDIA agentic reasoning, tool use, coding, or enterprise agent workloads, Nemotron is the likely model answer. If it asks where to find packaged containers/checkpoints/resources, think NGC.",
    keyIdeas: [
      "**Nemotron** includes open models and technologies for specialized agentic AI systems.",
      "**Llama Nemotron** reasoning models are offered in Nano, Super, and Ultra sizes for different accuracy/compute targets.",
      "**Nano** is for smaller/edge or cost-sensitive deployments; **Super** balances throughput and accuracy; **Ultra** targets highest accuracy for larger data-center systems.",
      "**NGC** is where NVIDIA distributes many model, container, Helm chart, and software assets.",
      "Model choice must consider accuracy, latency, cost, deployment target, context needs, and tool/function-calling behavior."
    ],
    mustKnow: [
      "Nemotron is a model family, not the same thing as NeMo Framework.",
      "A model can be served through NIM or Triton after selection/optimization.",
      "NGC is a source of assets; it is not itself the inference runtime."
    ],
    traps: [
      "Do not pick Nemotron when the question asks for a guardrail, evaluator, or retrieval pipeline.",
      "Do not pick NGC as the tool that trains, serves, or profiles by itself.",
      "Do not assume the largest model is best when latency, budget, or edge deployment is the constraint."
    ],
    related: ["Nemotron models", "NGC", "NIM", "NeMo Framework"]
  },
  {
    id: "profiling",
    category: "Performance",
    title: "Nsight, Profiling, and Bottleneck Diagnosis",
    summary: "NVIDIA profiling tools help you locate performance bottlenecks before changing hardware or code. The key split is system timeline versus kernel-level CUDA metrics.",
    examSignal: "If the question asks how to diagnose latency, utilization gaps, CPU/GPU overlap, CUDA API calls, or kernel occupancy, choose the profiling tool at the right level.",
    keyIdeas: [
      "**Nsight Systems** is the system-wide timeline profiler: CPU threads, GPU work, CUDA API calls, memory transfers, and gaps between operations.",
      "**Nsight Compute** is the CUDA kernel profiler: occupancy, memory throughput, warp behavior, instruction mix, and detailed kernel metrics.",
      "**NVIDIA SMI / nvidia-smi** is a coarse operational check for GPU state, memory use, power, thermals, utilization, processes, and MIG mode.",
      "Use Systems first when you do not know where time goes; use Compute once a specific CUDA kernel is suspicious.",
      "Profiling should precede optimization: measure bottleneck, change one variable, measure again.",
      "Common LLM serving bottlenecks include token generation, prefill, KV cache memory pressure, embedding model calls, retrieval latency, and batching policy."
    ],
    mustKnow: [
      "Systems = broad timeline. Compute = deep kernel metrics.",
      "SMI = quick device/process status, not application tracing or kernel profiling.",
      "Profiling is diagnosis; TensorRT-LLM/Triton/NIM are optimization/serving choices.",
      "Low GPU utilization may be caused by CPU preprocessing, network waits, retrieval, data loading, small batches, or synchronization."
    ],
    traps: [
      "Do not use Nsight Compute first when the issue may be CPU, network, I/O, or scheduling.",
      "Do not answer with a profiler when the question asks for the production serving component.",
      "Do not optimize kernels before confirming the kernel is the bottleneck."
    ],
    related: ["Nsight Systems", "Nsight Compute", "NVIDIA SMI", "TensorRT-LLM", "Triton Inference Server"]
  },
  {
    id: "data-stack",
    category: "Data",
    title: "RAPIDS, Data Prep, and Retrieval Grounding",
    summary: "Data quality and retrieval quality often dominate GenAI system behavior. NVIDIA has separate tools for GPU-accelerated data processing, data curation, and enterprise RAG.",
    examSignal: "If a question mentions dedupe, filtering, preprocessing, tabular/vector dataframes, embedding/indexing, or grounding answers in enterprise content, do not jump straight to model training.",
    keyIdeas: [
      "**RAPIDS** accelerates data science and dataframe/graph/ML-style preprocessing workflows on GPUs.",
      "**NeMo Curator** is for preparing high-quality training or instruction data through curation pipelines.",
      "**NeMo Retriever** is for enterprise extraction, embedding, indexing, reranking, and retrieval pipelines.",
      "RAG fixes missing/private/fast-changing knowledge without necessarily fine-tuning the base model.",
      "Fine-tuning changes model behavior; retrieval supplies external knowledge at query time."
    ],
    mustKnow: [
      "Use Curator for dataset quality before training/customization.",
      "Use Retriever for grounding answers in enterprise documents.",
      "Use RAPIDS when the focus is accelerated data processing, not LLM-specific safety or serving."
    ],
    traps: [
      "Do not fine-tune just to add changing facts; use retrieval when possible.",
      "Do not use Retriever to clean noisy training data; use Curator.",
      "Do not use RAPIDS as the answer for dialog safety, model serving, or LLM evaluation."
    ],
    related: ["RAPIDS", "NeMo Curator", "NeMo Retriever", "NeMo Framework"]
  }
];

const GENERAL_SUITE_TOPICS = [
  {
    id: "platform-patterns",
    category: "Foundation",
    title: "Common Agentic AI Platform Pattern",
    summary: "Most agent platforms share the same layers: data curation, model registry/customization, retrieval, orchestration, tool execution, guardrails, serving, evaluation, observability, and human oversight.",
    examSignal: "When comparing NVIDIA, AWS, Azure, GCP, or open-source stacks, identify the lifecycle layer before memorizing product names.",
    keyIdeas: [
      "**Data layer** prepares training data and runtime knowledge separately.",
      "**Model layer** chooses, adapts, versions, and approves base models or adapters.",
      "**Agent runtime** coordinates planning, tools, memory, retries, and state.",
      "**Serving layer** exposes model endpoints and routes traffic.",
      "**Safety/ops layer** evaluates, monitors, governs, and escalates."
    ],
    mustKnow: [
      "A NIM-like service is an inference microservice, not an agent orchestrator.",
      "A NeMo Curator-like service is data curation, not runtime retrieval.",
      "A Bedrock Knowledge Bases-like service is RAG/retrieval, not fine-tuning.",
      "A guardrail/policy layer is runtime enforcement, not IAM by itself.",
      "A review queue is only useful when feedback flows back into evals and fixes."
    ],
    traps: [
      "Do not choose a model when the problem is orchestration, retrieval, serving, or monitoring.",
      "Do not fine-tune for facts that change frequently and need citations.",
      "Do not apply authorization after sensitive chunks are already in context."
    ],
    related: ["Training Data Curation Pipeline", "Knowledge Ingestion and Permission Pipeline", "Knowledge and RAG Pipeline", "Agent Orchestration Runtime", "Model Inference Endpoint", "Evaluation and Regression Harness"]
  },
  {
    id: "aws-nvidia-map",
    category: "Vendor Map",
    title: "NVIDIA / AWS / Open-Source Equivalence Map",
    summary: "Different vendors name the layers differently, but the engineering question is usually the same: what phase of the lifecycle owns this requirement?",
    examSignal: "Translate product names into roles: curator, customizer, retriever, orchestrator, guardrail, inference endpoint, evaluator, monitor, or reviewer.",
    keyIdeas: [
      "**Curator:** NVIDIA NeMo Curator, AWS Glue/DataBrew-style prep, Spark/Ray pipelines.",
      "**Retriever:** NVIDIA NeMo Retriever, Amazon Bedrock Knowledge Bases, Kendra, vector DB pipelines.",
      "**Orchestrator:** NVIDIA NeMo Agent Toolkit, LangGraph, Semantic Kernel, Step Functions, custom workflow runtimes.",
      "**Inference microservice:** NVIDIA NIM, Bedrock/SageMaker endpoints, vLLM/TGI services.",
      "**Evaluator/monitor:** NeMo Evaluator, Bedrock evaluation, OpenTelemetry, tracing dashboards, internal eval harnesses."
    ],
    mustKnow: [
      "Map by lifecycle phase before comparing brand names.",
      "Some vendor products combine layers; still identify the underlying role.",
      "Open-source stacks can implement the same phases with more integration work."
    ],
    traps: [
      "Do not assume one vendor service replaces the whole lifecycle.",
      "Do not compare services by name similarity; compare by input, output, and ownership boundary.",
      "Do not skip governance just because the serving endpoint is managed."
    ],
    related: ["Model Inference Endpoint", "Agent Orchestration Runtime", "Policy and Guardrails Layer", "Observability and Trace Monitor"]
  },
  {
    id: "lifecycle-decisions",
    category: "Decisions",
    title: "Lifecycle Decision Rules",
    summary: "Good agent design starts by naming the requirement: learn behavior, ground facts, coordinate tools, enforce policy, serve models, evaluate quality, monitor operations, or approve risk.",
    examSignal: "Scenario words like fresh facts, tool mutation, p99 latency, judge bias, tenant filtering, or approval gate point to different lifecycle owners.",
    keyIdeas: [
      "**Fresh/private facts** usually point to retrieval, not fine-tuning.",
      "**Durable style/behavior** can point to prompt design, PEFT, SFT, or preference tuning.",
      "**State-changing tools** point to a tool gateway and approval policy.",
      "**Latency/cost** requires tracing before optimization.",
      "**Regulated actions** need risk-tiered human oversight and audit evidence."
    ],
    mustKnow: [
      "Prompting is cheapest but weakest as an enforcement boundary.",
      "RAG supplies knowledge; fine-tuning changes behavior.",
      "Serving exposes models; orchestration controls workflows.",
      "Monitoring watches live systems; evaluation gates changes."
    ],
    traps: [
      "Do not add a larger model before locating the lifecycle mismatch.",
      "Do not treat final-answer accuracy as full agent success.",
      "Do not let review feedback die in free-text notes."
    ],
    related: ["Model Customization Toolkit", "Tool Gateway and Function Runtime", "Cost/Latency Optimizer", "Human Review and Governance Console"]
  }
];

function serviceGroupName(service) {
  return SERVICE_GROUPS.find((group) => group.match(service))?.name || "Other capabilities";
}

function serviceGroupClass(value) {
  const service = typeof value === "string" ? serviceByName(value) || { name: value } : value;
  const name = serviceGroupName(service);
  return SERVICE_GROUPS.find((group) => group.name === name)?.className || "other";
}

function serviceByName(name) {
  return nvidiaServices.find((service) => service.name === name);
}

function sortServices(services) {
  return [...services].sort((a, b) => {
    const ai = SERVICE_ORDER.indexOf(a.name);
    const bi = SERVICE_ORDER.indexOf(b.name);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi) || a.name.localeCompare(b.name);
  });
}

function lifecycleContextFiltersForExam(label) {
  return LIFECYCLE_CONTEXT_FILTERS[label] || null;
}

function lifecycleContextForFilter(examLabel, label) {
  const filters = lifecycleContextFiltersForExam(examLabel);
  return filters?.find((filter) => filter.label === label) || filters?.[0] || null;
}

function lifecycleContextForLane(examLabel, lane) {
  const filters = lifecycleContextFiltersForExam(examLabel);
  return filters?.find((filter) => filter.lane === lane) || {
    label: lane || examLabel,
    lane,
    short: (lane || examLabel).replace(/^(Core|Secondary|Reference):\s*/, "")
  };
}

function lifecycleUsageRole(stage, role) {
  if ((stage.lane || "").startsWith("Reference:")) {
    return { id: "reference", label: "Reference only", className: "reference", rank: 2 };
  }
  if (role === "core") {
    return { id: "study-first", label: "Core use", className: "study-first", rank: 0 };
  }
  return { id: "good-to-know", label: "Support use", className: "good-to-know", rank: 1 };
}

function lifecycleUsagesForService(serviceOrName, examLabel) {
  const name = typeof serviceOrName === "string" ? serviceOrName : serviceOrName?.name;
  const flow = LIFECYCLE_FLOWS[examLabel];
  if (!name || !flow) return [];
  return flow.stages.flatMap((stage, stageIndex) => {
    const entries = [
      ...(stage.tools || []).map((tool, toolIndex) => ({ tool, rawRole: "core", toolIndex })),
      ...(stage.optionalTools || []).map((tool, toolIndex) => ({ tool, rawRole: "optional", toolIndex: (stage.tools || []).length + toolIndex }))
    ].filter((entry) => entry.tool === name);
    return entries.map((entry) => {
      const role = lifecycleUsageRole(stage, entry.rawRole);
      const context = lifecycleContextForLane(examLabel, stage.lane);
      return {
        serviceName: name,
        lane: stage.lane,
        contextLabel: context.label,
        contextShort: context.short,
        stageId: lifecycleStageKey(stage),
        stageName: stage.name,
        stageContext: stage.context,
        stageNote: stage.note,
        rawRole: entry.rawRole,
        roleId: role.id,
        roleLabel: role.label,
        roleClass: role.className,
        roleRank: role.rank,
        stageIndex,
        toolIndex: entry.toolIndex
      };
    });
  }).sort((a, b) => a.stageIndex - b.stageIndex || a.toolIndex - b.toolIndex || a.roleRank - b.roleRank);
}

function lifecycleUsagesForFilter(service, filter, examLabel) {
  const context = lifecycleContextForFilter(examLabel, filter);
  const usages = lifecycleUsagesForService(service, examLabel);
  if (!context) return [];
  return context.lane === "All" ? usages : usages.filter((usage) => usage.lane === context.lane);
}

function bestLifecycleUsage(service, filter = "All", examLabel) {
  const usages = lifecycleUsagesForFilter(service, filter, examLabel);
  return [...usages].sort((a, b) => a.roleRank - b.roleRank || a.stageIndex - b.stageIndex || a.toolIndex - b.toolIndex)[0] || null;
}

function serviceMatchesStudyFilter(service, filter, currentExamLabel) {
  if (filter === "All") return true;
  if (lifecycleContextFiltersForExam(currentExamLabel)) {
    return lifecycleUsagesForFilter(service, filter, currentExamLabel).length > 0;
  }
  return service.filters.includes(filter);
}

function sortServicesForStudyContext(services, filter, currentExamLabel) {
  const sorted = sortServices(services);
  if (!lifecycleContextFiltersForExam(currentExamLabel)) return sorted;
  return [...sorted].sort((a, b) => {
    const au = bestLifecycleUsage(a, filter, currentExamLabel);
    const bu = bestLifecycleUsage(b, filter, currentExamLabel);
    const ai = au ? au.stageIndex * 100 + au.roleRank * 10 + au.toolIndex : 9999;
    const bi = bu ? bu.stageIndex * 100 + bu.roleRank * 10 + bu.toolIndex : 9999;
    return ai - bi || a.name.localeCompare(b.name);
  });
}

function lifecycleStageKey(stage) {
  return stage.id || stage.name;
}

function lifecycleStageToServiceFilter(stage, currentExamLabel) {
  if (!lifecycleContextFiltersForExam(currentExamLabel)) return null;
  return lifecycleContextForLane(currentExamLabel, stage?.lane).label;
}

function serviceFilterLabelsForExam(currentExamLabel, examServices, topicFilters) {
  const lifecycleFilters = lifecycleContextFiltersForExam(currentExamLabel);
  if (lifecycleFilters) return lifecycleFilters.map((filter) => filter.label);
  return ["All", ...topicFilters].filter((filter) => filter === "All" || examServices.some((service) => service.filters.includes(filter)));
}

function firstServiceForFilters(examServices, serviceFilter, serviceGroup, currentExamLabel) {
  return examServices.find((service) =>
    serviceMatchesStudyFilter(service, serviceFilter, currentExamLabel) &&
    (serviceGroup === "All" || serviceGroupName(service) === serviceGroup)
  );
}

function firstServiceForStudyFilter(examServices, serviceFilter, currentExamLabel) {
  return examServices.find((service) => serviceMatchesStudyFilter(service, serviceFilter, currentExamLabel));
}

function firstServiceForGroup(examServices, serviceGroup) {
  return examServices.find((service) => serviceGroup === "All" || serviceGroupName(service) === serviceGroup);
}

function agenticUsageBadgeText(usage) {
  if (!usage) return "";
  return `${usage.contextShort}: ${usage.roleLabel}`;
}

function uniqueLifecycleUsages(usages) {
  const seen = new Set();
  return usages.filter((usage) => {
    const key = `${usage.lane}-${usage.stageId}-${usage.roleId}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function lifecycleUsageSummary(service, activeServiceFilter = "All", examLabel) {
  const usages = activeServiceFilter === "All"
    ? uniqueLifecycleUsages(lifecycleUsagesForService(service, examLabel))
    : uniqueLifecycleUsages(lifecycleUsagesForFilter(service, activeServiceFilter, examLabel));
  return usages.sort((a, b) => a.roleRank - b.roleRank || a.stageIndex - b.stageIndex || a.toolIndex - b.toolIndex);
}

function compactLifecycleUsageSummary(service, activeServiceFilter = "All", examLabel) {
  const usages = activeServiceFilter === "All"
    ? lifecycleUsagesForService(service, examLabel)
    : lifecycleUsagesForFilter(service, activeServiceFilter, examLabel);
  const byContextRole = new Map();
  usages
    .sort((a, b) => a.roleRank - b.roleRank || a.stageIndex - b.stageIndex || a.toolIndex - b.toolIndex)
    .forEach((usage) => {
      const key = `${usage.lane}-${usage.roleId}`;
      if (!byContextRole.has(key)) byContextRole.set(key, usage);
    });
  return [...byContextRole.values()].sort((a, b) => a.roleRank - b.roleRank || a.stageIndex - b.stageIndex || a.toolIndex - b.toolIndex);
}

function allLifecycleUsageBadges(service, activeServiceFilter = "All", examLabel) {
  const all = compactLifecycleUsageSummary(service, "All", examLabel);
  if (activeServiceFilter === "All") return all;
  const active = new Set(compactLifecycleUsageSummary(service, activeServiceFilter, examLabel).map((usage) => `${usage.lane}-${usage.roleId}`));
  return [...all].sort((a, b) => {
    const ai = active.has(`${a.lane}-${a.roleId}`) ? 0 : 1;
    const bi = active.has(`${b.lane}-${b.roleId}`) ? 0 : 1;
    return ai - bi || a.roleRank - b.roleRank || a.stageIndex - b.stageIndex || a.toolIndex - b.toolIndex;
  });
}

function lifecyclePlaybookGroups(examServices, activeServiceFilter, examLabel) {
  const flow = LIFECYCLE_FLOWS[examLabel];
  if (!flow) return [];
  const serviceByName = new Map(examServices.map((service) => [service.name, service]));
  const filter = lifecycleContextForFilter(examLabel, activeServiceFilter);
  const lanes = [...new Set(flow.stages.map((stage) => stage.lane || "Shared"))]
    .filter((lane) => !filter || filter.lane === "All" || filter.lane === lane);

  return lanes.map((lane) => {
    const entries = [];
    flow.stages
      .filter((stage) => (stage.lane || "Shared") === lane)
      .forEach((stage) => {
        [...(stage.tools || []), ...(stage.optionalTools || [])].forEach((tool, toolIndex) => {
          const service = serviceByName.get(tool);
          if (!service) return;
          entries.push({ service, stage, toolIndex, role: toolIndex < (stage.tools || []).length ? "core" : "support" });
        });
      });
    return { lane, description: flow.lanes?.[lane] || "", entries };
  }).filter((group) => group.entries.length);
}

function LifecyclePlaybookCard({ service, stage, selected, onClick }) {
  return h("button", {
    className: `service-card lifecycle-playbook-card ${serviceGroupClass(service)} ${selected ? "active" : ""}`,
    onClick
  },
    h("span", { className: "lifecycle-stage-context" }, stage.context),
    h("strong", null, service.name),
    h("p", null, stage.note),
    h("small", { className: "service-priority-note" }, `${stage.name} / ${stage.lane}`)
  );
}

function compactStudyText(value, maxLength = 150) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trim()}...`;
}

function nvidiaExamSections(examLabelValue) {
  return studySections.filter((section) => section.exam === examLabelValue);
}

function nvidiaSectionNumber(section, sections = nvidiaExamSections(section?.exam)) {
  const index = sections.findIndex((item) => item.name === section?.name);
  return index >= 0 ? String(index + 1).padStart(2, "0") : "01";
}

function nvidiaServiceId(service) {
  return service?.name || "";
}

function nvidiaSectionId(section) {
  return section?.name || "";
}

function lifecycleStageId(stage) {
  return lifecycleStageKey(stage);
}

function NvidiaStudyBreadcrumbs({ examLabel: label, viewLabel, itemLabel = "", onHome, onView }) {
  return h("div", { className: "general-breadcrumbs nvidia-breadcrumbs", "aria-label": "NVIDIA study route" },
    h("button", { type: "button", onClick: onHome }, label),
    viewLabel ? h("span", { "aria-hidden": "true" }, "/") : null,
    viewLabel ? h("button", { type: "button", onClick: onView || onHome }, viewLabel) : null,
    itemLabel ? h("span", { "aria-hidden": "true" }, "/") : null,
    itemLabel ? h("strong", null, itemLabel) : null
  );
}

function NvidiaStudyPageHeader({ eyebrow, title, subtitle, badges = [], tags = [] }) {
  return h("header", { className: "general-book-header general-page-header nvidia-book-header" },
    h("span", { className: "general-book-eyebrow" }, eyebrow),
    h("h1", null, title),
    subtitle ? h("p", null, renderInline(subtitle)) : null,
    h("div", { className: "general-book-badges" },
      [...badges, ...tags].filter(Boolean).slice(0, 10).map((tag, index) => h("span", { key: `${index}-${tag}` }, tag))
    )
  );
}

function NvidiaStudyTabs({ activeView, onSelectView, branding, currentExamLabel }) {
  const showLifecycle = currentExamLabel !== "Agentic AI";
  const tabs = [
    { key: "suite", label: "Platform map" },
    showLifecycle ? { key: "lifecycle", label: "Study handbook" } : null,
    showLifecycle ? { key: "services", label: "Services" } : { key: "sections", label: "Exam chapters" },
    showLifecycle ? { key: "sections", label: "Exam chapters" } : { key: "services", label: "Services" }
  ].filter(Boolean);
  return h("nav", { className: "study-tabs nvidia-study-tabs", "aria-label": "NVIDIA study views" },
    tabs.map((tab) => h("button", {
      key: tab.key,
      type: "button",
      className: activeView === tab.key ? "active" : "",
      onClick: () => onSelectView(tab.key)
    }, tab.label))
  );
}

function NvidiaSectionChapterNav({ sections, selectedSection, onSelectSection, eyebrow = "Official exam sections", title = "Chapter navigation" }) {
  if (!sections?.length) return null;
  return h("nav", { className: "general-compact-chapter-nav nvidia-compact-chapter-nav", "aria-label": title },
    h("div", { className: "general-focused-nav-head" },
      h("span", null, eyebrow),
      h("h2", null, title)
    ),
    h("div", { className: "nvidia-compact-row-list" },
      sections.map((section, index) => h(SectionCard, {
        key: `${section.exam}-${section.name}`,
        section,
        selected: section.name === selectedSection?.name,
        index: index + 1,
        compact: true,
        onClick: () => onSelectSection(section.name)
      }))
    )
  );
}

function NvidiaSectionJumpBar({ sections, selectedSection, onSelectSection }) {
  if (!sections?.length) return null;
  return h("div", { className: "nvidia-section-jump-bar" },
    h("label", { htmlFor: "nvidia-section-jump-select" },
      h("span", null, "Official chapter"),
      h("strong", null, "Open another full chapter")
    ),
    h("select", {
      id: "nvidia-section-jump-select",
      className: "service-jump-select",
      value: selectedSection?.name || "",
      onChange: (event) => onSelectSection(event.target.value)
    },
      sections.map((section, index) => h("option", {
        key: `${section.exam}-${section.name}`,
        value: section.name
      }, `${String(index + 1).padStart(2, "0")} · ${section.name}`))
    ),
    selectedSection ? h("span", { className: "nvidia-section-jump-meta" }, `${selectedSection.weight}% exam weight`) : null
  );
}

function NvidiaServiceChapterNav({ services, selectedService, onSelectService, eyebrow = "Focused concepts", title = "Concept navigation" }) {
  if (!services?.length) return null;
  return h("nav", { className: "general-compact-chapter-nav nvidia-compact-chapter-nav", "aria-label": title },
    h("div", { className: "general-focused-nav-head" },
      h("span", null, eyebrow),
      h("h2", null, title)
    ),
    h("div", { className: "nvidia-compact-row-list nvidia-service-row-list" },
      services.map((service, index) => h(ServiceCard, {
        key: service.name,
        service,
        selected: service.name === selectedService?.name,
        index: index + 1,
        compact: true,
        onClick: () => onSelectService(service.name)
      }))
    )
  );
}

function NvidiaStageConceptNav({ stages, selectedStage, onSelectStage, onSelectService, onSelectSection, examLabel }) {
  if (!stages?.length) return null;
  const sections = nvidiaExamSections(examLabel);
  const selectedStageKey = selectedStage ? lifecycleStageKey(selectedStage) : "";
  return h("nav", { className: "general-compact-chapter-nav nvidia-compact-chapter-nav nvidia-stage-nav", "aria-label": "Concept cues" },
    h("div", { className: "general-focused-nav-head" },
      h("span", null, "Compact concept navigation"),
      h("h2", null, "Concept cues in exam order")
    ),
    h("div", { className: "nvidia-compact-row-list" },
      stages.map((stage, index) => {
        const stageKey = lifecycleStageKey(stage);
        const detail = lifecycleStageDetailFor(examLabel, stageKey);
        const section = sections.find((item) => item.name === (detail?.sections || [])[0]);
        return h("article", {
          id: `lifecycle-stage-${topicSlug(stageKey)}`,
          key: stageKey,
          className: `nvidia-compact-nav-row nvidia-stage-row ${stageKey === selectedStageKey ? "active" : ""}`
        },
          h("button", {
            type: "button",
            className: "nvidia-compact-row-main",
            onClick: () => onSelectStage?.(stageKey),
            "aria-current": stageKey === selectedStageKey ? "step" : undefined
          },
            h("span", { className: "nvidia-row-number" }, String(index + 1).padStart(2, "0")),
            h("span", { className: "nvidia-row-copy" },
              h("strong", null, stage.name),
              h("p", null, compactStudyText(detail?.focus || stage.note))
            ),
            h("span", { className: "nvidia-row-meta" }, section ? `${section.name} · ${section.weight}%` : stage.context)
          ),
          detail?.sections?.length ? h("div", { className: "nvidia-row-chips" },
            detail.sections.slice(0, 2).map((item) => h("button", {
              key: item,
              type: "button",
              onClick: () => onSelectSection?.(item)
            }, item))
          ) : null,
          (stage.tools?.length || stage.optionalTools?.length)
            ? h("div", { className: "nvidia-row-chips nvidia-row-tool-chips" },
                [...(stage.tools || []), ...(stage.optionalTools || [])].slice(0, 4).map((tool) => h("button", {
                  key: tool,
                  type: "button",
                  onClick: () => onSelectService?.(tool, stage)
                }, tool))
              )
            : null
        );
      })
    )
  );
}

function NvidiaPrevNextNav({ items, selectedId, getId, getTitle, onSelect, previousLabel = "Previous", nextLabel = "Next", placement = "" }) {
  const currentIndex = (items || []).findIndex((item) => getId(item) === selectedId);
  if (currentIndex < 0) return null;
  const previous = currentIndex > 0 ? items[currentIndex - 1] : null;
  const next = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;
  if (!previous && !next) return null;
  return h("nav", { className: `general-compact-prev-next nvidia-compact-prev-next${placement ? ` nvidia-compact-prev-next-${placement}` : ""}`, "aria-label": "NVIDIA chapter navigation" },
    previous ? h("button", {
      type: "button",
      className: "general-chapter-nav-box previous",
      onClick: () => onSelect(previous)
    },
      h("span", null, previousLabel),
      h("strong", null, getTitle(previous))
    ) : h("span", { className: "general-compact-nav-spacer", "aria-hidden": "true" }),
    next ? h("button", {
      type: "button",
      className: "general-chapter-nav-box next",
      onClick: () => onSelect(next)
    },
      h("span", null, nextLabel),
      h("strong", null, getTitle(next))
    ) : null
  );
}

function NvidiaRelatedLinks({ items, selectedId, getId, getTitle, getMeta, onSelect, eyebrow = "Related links", title = "Keep nearby concepts in view" }) {
  const related = (items || []).filter((item) => getId(item) !== selectedId).slice(0, 8);
  if (!related.length) return null;
  return h("section", { className: "general-related-card-links nvidia-related-card-links", "aria-label": title },
    h("div", { className: "general-related-card-links-head" },
      h("span", null, eyebrow),
      h("h2", null, title)
    ),
    h("div", { className: "general-related-card-link-list" },
      related.map((item) => h("button", {
        key: getId(item),
        type: "button",
        onClick: () => onSelect(item)
      },
        getMeta ? h("span", null, getMeta(item)) : null,
        h("strong", null, getTitle(item))
      ))
    )
  );
}

function LifecycleStagePlaybook({ stage, examLabel, onSelectService, onSelectSection, onSelectStudyPage }) {
  const stageKey = lifecycleStageKey(stage);
  const detail = lifecycleStageDetailFor(examLabel, stageKey);
  if (!stage || !detail) return null;
  const isAgenticExam = examLabel === "Agentic AI";
  const playbooks = detail.nvidiaExamples || [...(stage.tools || []), ...(stage.optionalTools || [])].map((tool) => [tool, "Open the related study page."]);
  const signalItems = detail.signals || detail.metrics || [];
  return h("section", { className: `lifecycle-stage-playbook ${serviceGroupClass(stage.tools?.[0] || "")}` },
    h("div", { className: "lifecycle-stage-playbook-title" },
      h("span", null, `${stage.lane} / ${stage.context}`),
      h("h4", null, stage.name),
      h("p", null, detail.focus)
    ),
    h("div", { className: "lifecycle-stage-playbook-grid" },
      h("article", null,
        h("strong", null, isAgenticExam ? "Official sections" : "Checks in this lane"),
        isAgenticExam
          ? h("div", { className: "lifecycle-section-chips" }, (detail.sections || []).map((item) => h("button", {
              key: item,
              type: "button",
              onClick: () => onSelectSection?.(item),
              title: `Open ${item} exam section`
            }, item)))
          : h("ul", null, detail.checks.map((item) => h("li", { key: item }, item)))
      ),
      isAgenticExam && detail.studyPages?.length
        ? h("article", null,
            h("strong", null, "General Study first"),
            h("div", { className: "lifecycle-section-chips lifecycle-study-chips" },
              detail.studyPages.map((item) => {
                const target = studyRouteJumpTarget(item);
                return h("button", {
                  key: item,
                  type: "button",
                  disabled: !target,
                  onClick: () => onSelectStudyPage?.(item),
                  title: target?.certSlug === "agentic_ai_general_study" ? `Open ${item} in General Study` : `Open ${item}`
                }, item);
              })
            )
          )
        : null,
      h("article", null,
        h("strong", null, isAgenticExam ? "What to know" : "Scores, losses, or signals"),
        h("ul", null, (isAgenticExam ? detail.checks : signalItems).map((item) => h("li", { key: item }, item)))
      ),
      h("article", { className: "lifecycle-stage-code" },
        h("strong", null, isAgenticExam ? "Pattern to recognize" : "Typical code shape"),
        h("pre", null, h("code", null, detail.code))
      ),
      h("article", null,
        h("strong", null, isAgenticExam ? "NVIDIA examples if named" : "Open playbooks"),
        isAgenticExam && signalItems.length
          ? h("p", { className: "lifecycle-signal-line" }, signalItems.slice(0, 5).join(" · "))
          : null,
        playbooks.length
          ? h("div", { className: "selected-service-chips" },
              playbooks.map(([tool, purpose]) => h("button", {
                key: tool,
                type: "button",
                className: `selected-service-chip ${serviceGroupClass(tool)}`,
                onClick: () => onSelectService?.(tool, stage)
              }, h("strong", null, tool), isAgenticExam ? h("small", null, purpose) : null))
            )
          : h("p", null, "This reference step is explained by the lane-specific checks above.")
      )
    )
  );
}

function LifecycleFlow({ examLabel: label, selectedStageId, onSelectStage, onSelectService, onSelectSection, onSelectStudyPage, branding }) {
  const flow = LIFECYCLE_FLOWS[label];
  if (!flow) return null;
  const cardLabel = branding.serviceLabel === "Study Playbooks" ? "study playbook" : (branding.serviceLabel || "service").toLowerCase();
  const selectedStage = flow.stages.find((stage) => lifecycleStageKey(stage) === selectedStageId) || flow.stages[0];
  const sections = nvidiaExamSections(label);
  const selectedDetail = lifecycleStageDetailFor(label, lifecycleStageKey(selectedStage));
  const selectedSection = sections.find((section) => (selectedDetail?.sections || []).includes(section.name));

  return h("article", { className: "study-article nvidia-lifecycle-article" },
    h("div", { className: "general-card-lesson-cover" },
      h("span", null, "Article body"),
      h("h3", null, flow.title),
      h("p", null, label === "Agentic AI"
        ? "Use the compact chapter links above for official exam sections, then use these concept cues to jump into the specific decision pattern the question is testing."
        : `Use this as a handbook index for ${cardLabel} and official section study. The concept cues stay compact so the article remains the center of the page.`)
    ),
    selectedSection ? h("aside", { className: "rich-content-block rich-callout nvidia-exam-signal" },
      h("strong", null, "Current official section"),
      h("p", null, `${selectedSection.name} is ${selectedSection.weight}% of the exam. ${selectedSection.description}`)
    ) : null,
    h(NvidiaStageConceptNav, {
      stages: flow.stages,
      selectedStage,
      onSelectStage,
      onSelectService,
      onSelectSection,
      examLabel: label
    }),
    h("section", { className: "general-card-lesson-section nvidia-selected-concept" },
      h("div", { className: "general-card-lesson-label" },
        h("h4", null, selectedStage.name)
      ),
      h("div", { className: "general-card-lesson-body" },
        h(LifecycleStagePlaybook, {
          stage: selectedStage,
          examLabel: label,
          onSelectService,
          onSelectSection,
          onSelectStudyPage
        })
      )
    )
  );
}

function StudyModePanel({
  exam,
  branding,
  studyView,
  setStudyView,
  activeServiceFilter,
  setActiveServiceFilter,
  selectedServiceName,
  setSelectedServiceName,
  selectedSuiteTopicId,
  setSelectedSuiteTopicId,
  activeSectionExam,
  setActiveSectionExam,
  selectedSectionName,
  setSelectedSectionName,
  selectedCertSlug,
  setSelectedCertSlug,
  setTrack,
  pendingStudyJump,
  setPendingStudyJump,
  studyStatus,
  setStudyStatus,
  generationStatus,
  generateQuestions,
  generateStudyQuiz,
  cancelGeneration,
  startSectionPractice,
  startKeywordPractice
}) {
  const [selectedLifecycleStage, setSelectedLifecycleStage] = useState("");
  const [activeServiceGroup, setActiveServiceGroup] = useState("All");
  const [quizDifficulty, setQuizDifficulty] = useState("hard");
  const [conceptLookupQuery, setConceptLookupQuery] = useState("");
  const [generalStudyScreen, setGeneralStudyScreen] = useState("paths");
  const [selectedGeneralPathId, setSelectedGeneralPathId] = useState("");
  const [selectedGeneralCardId, setSelectedGeneralCardId] = useState("");
  const [highlightedGeneralCardId, setHighlightedGeneralCardId] = useState("");
  const [nvidiaServiceScreen, setNvidiaServiceScreen] = useState("list");
  const [nvidiaSectionScreen, setNvidiaSectionScreen] = useState("list");
  const currentExamLabel = examLabel(exam);
  const currentCertSlug = exam.slug || selectedCertSlug || "genai_llms_professional";
  const isGenericStudy = exam.certification.code === "AAI-GEN";
  const isAgenticExam = currentExamLabel === "Agentic AI";
  const isLifecycleAwareNvidia = Boolean(lifecycleContextFiltersForExam(currentExamLabel));
  const effectiveStudyView = isGenericStudy ? "builder" : (isAgenticExam && studyView === "lifecycle" ? "sections" : studyView);
  const defaultNvidiaStudyView = isAgenticExam ? "sections" : "lifecycle";
  useEffect(() => {
    if (isGenericStudy && studyView !== "builder") setStudyView("builder");
    if (!isGenericStudy && (studyView === "builder" || (isAgenticExam && studyView === "lifecycle"))) setStudyView(defaultNvidiaStudyView);
  }, [isGenericStudy, isAgenticExam, defaultNvidiaStudyView, studyView, setStudyView]);

  useEffect(() => {
    if (!isGenericStudy) return;
    if (generalStudyScreen === "paths") return;
    const path = selectedGeneralPathId ? findGeneralBuilderPath(selectedGeneralPathId) : generalBuilderPaths[0];
    if (!selectedGeneralPathId && path) setSelectedGeneralPathId(path.id);
    if (generalStudyScreen === "card" && path && !path.cards.some((card) => card.id === selectedGeneralCardId)) {
      setSelectedGeneralCardId(path.cards[0]?.id || "");
    }
  }, [isGenericStudy, generalStudyScreen, selectedGeneralPathId, selectedGeneralCardId]);

  function applyStudyJumpTarget(target, options = {}) {
    const nextView = target.studyView || (target.builderPathId ? "builder" : defaultNvidiaStudyView);
    setStudyView(isAgenticExam && nextView === "lifecycle" ? "sections" : nextView);
    setActiveServiceFilter(target.serviceFilter || "All");
    if (target.serviceName) {
      setActiveServiceGroup("All");
      setSelectedServiceName(target.serviceName);
      if (!isGenericStudy) setNvidiaServiceScreen("detail");
    }
    if (target.builderPathId) setSelectedGeneralPathId(target.builderPathId);
    if (target.cardId) {
      setSelectedGeneralCardId(target.cardId);
      setHighlightedGeneralCardId(target.cardId);
      setGeneralStudyScreen("card");
    } else if (target.builderPathId) {
      setSelectedGeneralCardId("");
      setGeneralStudyScreen("path");
    }
    if (target.stageId) setSelectedLifecycleStage(target.stageId);
    if (target.sectionName) {
      setActiveSectionExam(target.sectionExam || currentExamLabel);
      setSelectedSectionName(target.sectionName);
      setNvidiaSectionScreen("detail");
    }
    if (target.suiteTopicId) setSelectedSuiteTopicId(target.suiteTopicId);
    if (target.studyPage) setStudyStatus(`Opened study route: ${target.studyPage}`);
    if (options.scroll !== false && target.scrollMode !== "none") {
      if (target.cardId) scrollToElementId(generalCardElementId(target.cardId));
      else scrollToTop();
    }
  }

  useEffect(() => {
    if (!pendingStudyJump || currentCertSlug !== pendingStudyJump.certSlug) return;
    applyStudyJumpTarget(pendingStudyJump);
    setPendingStudyJump?.(null);
  }, [pendingStudyJump, currentCertSlug, setPendingStudyJump]);
  const topicFilters = serviceFilters.filter((filter) => !["Agentic AI", "GenAI LLMs", "Agentic AI General"].includes(filter));
  const examServices = sortServices(nvidiaServices.filter((service) => service.exams.includes(currentExamLabel)));
  const availableServiceGroups = SERVICE_GROUPS.filter((group) => examServices.some((service) => serviceGroupName(service) === group.name));
  const filteredServices = sortServicesForStudyContext(examServices.filter((service) => {
    if (!serviceMatchesStudyFilter(service, activeServiceFilter, currentExamLabel)) return false;
    if (activeServiceGroup !== "All" && serviceGroupName(service) !== activeServiceGroup) return false;
    return true;
  }), activeServiceFilter, currentExamLabel);
  const selectedService = filteredServices.find((service) => service.name === selectedServiceName) || filteredServices[0] || examServices[0] || nvidiaServices[0];
  const suiteTopics = currentExamLabel === "Agentic AI General" ? GENERAL_SUITE_TOPICS : NVIDIA_SUITE_TOPICS;
  const selectedSuiteTopic = suiteTopics.find((topic) => topic.id === selectedSuiteTopicId) || suiteTopics[0];
  const filteredSections = studySections.filter((section) => section.exam === currentExamLabel);
  const selectedSection = filteredSections.find((section) => section.name === selectedSectionName) || filteredSections[0] || studySections[0];
  const lifecycleFlow = LIFECYCLE_FLOWS[currentExamLabel];
  const activeLifecycleStage = lifecycleFlow?.stages.find((stage) => lifecycleStageKey(stage) === selectedLifecycleStage) || lifecycleFlow?.stages[0] || null;
  const selectedGeneralPath = selectedGeneralPathId ? findGeneralBuilderPath(selectedGeneralPathId) : null;
  const selectedGeneralCard = selectedGeneralPath && selectedGeneralCardId
    ? selectedGeneralPath.cards.find((card) => card.id === selectedGeneralCardId) || null
    : null;
  const selectedGeneralStudy = { path: selectedGeneralPath, card: selectedGeneralCard };
  const generalStudyChatTopic = selectedGeneralStudy.path && selectedGeneralStudy.card
    ? `${selectedGeneralStudy.path.title} / ${selectedGeneralStudy.card.title}`
    : selectedGeneralStudy.path
      ? selectedGeneralStudy.path.title
      : "General Study / Builder Paths";
  const studyChatTopic = isGenericStudy
    ? generalStudyChatTopic
    : effectiveStudyView === "sections"
    ? nvidiaSectionScreen === "detail" ? selectedSection.name : `${currentExamLabel} official exam chapters`
    : effectiveStudyView === "services"
      ? nvidiaServiceScreen === "detail" ? selectedService.name : `${currentExamLabel} NVIDIA service boundaries`
      : effectiveStudyView === "suite"
        ? selectedSuiteTopic.title
        : activeLifecycleStage?.name || currentExamLabel;
  const groupedServices = SERVICE_GROUPS
    .map((group) => ({ ...group, services: sortServicesForStudyContext(filteredServices.filter((service) => serviceGroupName(service) === group.name), activeServiceFilter, currentExamLabel) }))
    .filter((group) => group.services.length);
  const otherServices = filteredServices.filter((service) => !SERVICE_GROUPS.some((group) => group.name === serviceGroupName(service)));
  const serviceFilterLabels = serviceFilterLabelsForExam(currentExamLabel, examServices, topicFilters);

  useEffect(() => {
    if (!serviceFilterLabels.includes(activeServiceFilter)) setActiveServiceFilter("All");
  }, [activeServiceFilter, serviceFilterLabels, setActiveServiceFilter]);

  useEffect(() => {
    if (effectiveStudyView !== "services" || !examServices.length || filteredServices.length) return;
    const firstForStudyFilter = firstServiceForStudyFilter(examServices, activeServiceFilter, currentExamLabel);
    if (activeServiceGroup !== "All" && firstForStudyFilter) {
      setActiveServiceGroup("All");
      setSelectedServiceName(firstForStudyFilter.name);
      return;
    }
    const firstForGroup = firstServiceForGroup(examServices, activeServiceGroup);
    if (activeServiceFilter !== "All" && firstForGroup) {
      setActiveServiceFilter("All");
      setSelectedServiceName(firstForGroup.name);
    }
  }, [effectiveStudyView, examServices, filteredServices.length, activeServiceFilter, activeServiceGroup, currentExamLabel, setActiveServiceFilter, setSelectedServiceName]);

  function quickServiceQuiz() {
    // Search bank by service name and any related framework keywords (e.g. "NeMo", "TensorRT").
    const keywords = [selectedService.name, ...(selectedService.keywords || [])].filter(Boolean);
    startKeywordPractice(selectedService.name, keywords);
  }

  function quickSectionQuiz() {
    startSectionPractice(selectedSection.name);
  }

  function openNvidiaServicePage(serviceName) {
    if (!serviceName) return;
    setSelectedServiceName(serviceName);
    setNvidiaServiceScreen("detail");
    scrollToStudyPanel();
  }

  function selectServiceGroup(groupName) {
    setActiveServiceGroup(groupName);
    setNvidiaServiceScreen("list");
    const first = firstServiceForFilters(examServices, activeServiceFilter, groupName, currentExamLabel);
    if (first) {
      setSelectedServiceName(first.name);
      return;
    }
    const firstInGroup = firstServiceForGroup(examServices, groupName);
    if (firstInGroup) {
      setActiveServiceFilter("All");
      setSelectedServiceName(firstInGroup.name);
    }
  }

  function selectServiceFilter(filter) {
    setActiveServiceFilter(filter);
    setNvidiaServiceScreen("list");
    const first = firstServiceForFilters(examServices, filter, activeServiceGroup, currentExamLabel);
    if (first) {
      setSelectedServiceName(first.name);
      return;
    }
    const firstForFilter = firstServiceForStudyFilter(examServices, filter, currentExamLabel);
    if (firstForFilter) {
      setActiveServiceGroup("All");
      setSelectedServiceName(firstForFilter.name);
    }
  }

  function openServiceFromLifecycle(serviceName, stage = activeLifecycleStage) {
    setSelectedServiceName(serviceName);
    setNvidiaServiceScreen("detail");
    setActiveServiceGroup("All");
    const nextFilter = lifecycleStageToServiceFilter(stage, currentExamLabel);
    if (nextFilter) setActiveServiceFilter(nextFilter);
    setStudyView("services");
  }

  function openSectionFromLifecycle(sectionName) {
    setActiveSectionExam(currentExamLabel);
    setSelectedSectionName(sectionName);
    setNvidiaServiceScreen("list");
    setNvidiaSectionScreen("detail");
    setStudyView("sections");
    scrollToStudyPanel();
  }

  function showNvidiaSectionIndex() {
    setStudyView("sections");
    setNvidiaSectionScreen("list");
    scrollToStudyPanel();
  }

  function openStudyRouteFromLifecycle(studyPage) {
    const target = studyRouteJumpTarget(studyPage);
    if (!target) return;
    setPendingStudyJump?.(target);
    setTrack?.("study");
    if (currentCertSlug === target.certSlug) {
      applyStudyJumpTarget(target);
      setPendingStudyJump?.(null);
      return;
    }
    setSelectedCertSlug?.(target.certSlug);
  }

  function openConceptLookupEntry(entry) {
    const target = entry.target || (entry.studyPage ? studyRouteJumpTarget(entry.studyPage) : null);
    if (!target) return;
    const nextTarget = { ...target, studyPage: entry.title, scrollMode: "none" };
    setTrack?.("study");
    if (target.certSlug && currentCertSlug !== target.certSlug) {
      setPendingStudyJump?.(nextTarget);
      setSelectedCertSlug?.(target.certSlug);
      return;
    }
    applyStudyJumpTarget(nextTarget, { scroll: false });
    if ((target.studyView || "") === "builder" && target.cardId) {
      scrollToElementId(generalCardElementId(target.cardId));
      return;
    }
    if (!isAgenticExam && (target.studyView || "lifecycle") === "lifecycle" && target.stageId) {
      scrollToElementId(`lifecycle-stage-${topicSlug(target.stageId)}`);
    }
  }

  function selectGeneralBuilderPath(pathId) {
    const path = findGeneralBuilderPath(pathId);
    if (!path) return;
    setSelectedGeneralPathId(path.id);
    setSelectedGeneralCardId("");
    setHighlightedGeneralCardId("");
    setGeneralStudyScreen("path");
    scrollToStudyPanel();
  }

function selectGeneralBuilderCard(cardId) {
    if (!selectedGeneralPathId) setSelectedGeneralPathId(generalBuilderPaths[0]?.id || "");
    setSelectedGeneralCardId(cardId);
    setHighlightedGeneralCardId(cardId);
    setGeneralStudyScreen("card");
    scrollToElementId(generalCardElementId(cardId), "start");
  }

  function showGeneralBuilderPaths() {
    setSelectedGeneralPathId("");
    setSelectedGeneralCardId("");
    setHighlightedGeneralCardId("");
    setGeneralStudyScreen("paths");
    scrollToStudyPanel();
  }

  function showGeneralBuilderPath(pathId = selectedGeneralPathId) {
    const path = findGeneralBuilderPath(pathId);
    if (!path) return;
    setSelectedGeneralPathId(path.id);
    setSelectedGeneralCardId("");
    setHighlightedGeneralCardId("");
    setGeneralStudyScreen("path");
    scrollToStudyPanel();
  }

  function openGeneralSearchResult(result) {
    setSelectedGeneralPathId(result.builderPathId);
    setSelectedGeneralCardId(result.cardId);
    setHighlightedGeneralCardId(result.cardId);
    setGeneralStudyScreen("card");
    scrollToElementId(generalCardElementId(result.cardId), "start");
  }

  const familyFilterGroup = h("div", { key: "family", className: "filter-group filter-group-family" },
    h("span", null, "Filter by service family"),
    h(
      "div",
      { className: "filter-pills" },
      ["All", ...availableServiceGroups.map((group) => group.name)].map((groupName) => h("button", {
        key: groupName,
        className: activeServiceGroup === groupName ? "active" : "",
        onClick: () => selectServiceGroup(groupName)
      }, groupName))
    )
  );

  const lifecycleContextFilterGroup = currentExamLabel === "Agentic AI"
    ? h("div", { key: "context", className: "filter-group filter-group-context filter-group-exam-sections" },
        h("span", null, "Filter by Agentic AI exam section"),
        h("div", { className: "exam-section-filter-list" },
          (lifecycleContextFiltersForExam(currentExamLabel) || []).map((filter, index) => {
            const section = filteredSections.find((item) => item.name === filter.label);
            const serviceCount = examServices.filter((service) =>
              serviceMatchesStudyFilter(service, filter.label, currentExamLabel) &&
              (activeServiceGroup === "All" || serviceGroupName(service) === activeServiceGroup)
            ).length;
            const sectionNumber = filter.label === "All" ? "All" : filter.lane.match(/^\d+/)?.[0] || String(index);
            return h("button", {
              key: filter.label,
              type: "button",
              className: `exam-section-filter-row ${activeServiceFilter === filter.label ? "active" : ""}`,
              onClick: () => selectServiceFilter(filter.label)
            },
              h("span", { className: "exam-section-filter-number" }, sectionNumber),
              h("span", { className: "exam-section-filter-main" },
                h("strong", null, filter.label === "All" ? "All exam sections" : filter.label),
                h("small", null, section?.description || (filter.label === "All" ? "Show all service references for this certificate." : filter.short))
              ),
              h("span", { className: "exam-section-filter-count" }, `${serviceCount} ${serviceCount === 1 ? "service" : "services"}`)
            );
          })
        )
      )
    : h("div", { key: "context", className: "filter-group filter-group-context" },
        h("span", null, isLifecycleAwareNvidia ? `Filter by ${currentExamLabel} lifecycle context` : "Filter by lifecycle topic"),
        h(
          "div",
          { className: "filter-pills" },
          serviceFilterLabels.map((filter) => h("button", {
            key: filter,
            className: activeServiceFilter === filter ? "active" : "",
            onClick: () => selectServiceFilter(filter)
          }, filter))
        )
      );
  const serviceSelectValue = filteredServices.some((service) => service.name === selectedService.name) ? selectedService.name : "";
  const serviceSelectorGroup = h("div", { key: "selector", className: "filter-group service-selector-group" },
    h("label", { htmlFor: "service-jump-select" }, isGenericStudy ? "Select study playbook" : "Select service"),
    h("div", { className: "service-jump-row" },
      h("select", {
        id: "service-jump-select",
        className: "service-jump-select",
        value: serviceSelectValue,
        disabled: !filteredServices.length,
        onChange: (event) => {
          if (event.target.value) openNvidiaServicePage(event.target.value);
        }
      },
        h("option", { value: "", disabled: true }, filteredServices.length ? "Choose a service..." : "No services match these filters"),
        groupedServices.map((group) => h("optgroup", { key: group.name, label: group.name },
          group.services.map((service) => h("option", { key: service.name, value: service.name }, service.name))
        )),
        otherServices.length ? h("optgroup", { key: "other", label: "Other capabilities" },
          otherServices.map((service) => h("option", { key: service.name, value: service.name }, service.name))
        ) : null
      ),
      h("span", { className: "service-jump-meta" },
        `${filteredServices.length} ${isGenericStudy ? "playbooks" : "services"} visible`
      )
    )
  );
  const studyChatNode = h(StudyChatPanel, {
    certSlug: exam.slug || "genai_llms_professional",
    topic: studyChatTopic,
    examples: isGenericStudy ? generalTutorExamples(selectedGeneralStudy.card) : undefined,
    inline: true
  });

  if (isGenericStudy) {
    return h(
      "div",
      { className: "study-panel", id: "study-mode-panel" },
      h(
        "div",
        { className: "study-head" },
        h("div", null,
          h("h2", null, "Study Mode"),
          h("p", null, branding.studyDescription)
        )
      ),
      h(GeneralBuilderStudy, {
        screen: generalStudyScreen,
        selectedPathId: selectedGeneralPathId,
        selectedCardId: selectedGeneralCardId,
        highlightedCardId: highlightedGeneralCardId,
        searchQuery: conceptLookupQuery,
        setSearchQuery: setConceptLookupQuery,
        tutorNode: studyChatNode,
        onSelectPath: selectGeneralBuilderPath,
        onSelectCard: selectGeneralBuilderCard,
        onShowPaths: showGeneralBuilderPaths,
        onShowPath: showGeneralBuilderPath,
        onOpenSearchResult: openGeneralSearchResult
      })
    );
  }

  const nvidiaConceptEntries = STUDY_CONCEPT_LOOKUP[currentExamLabel] || [];
  const nvidiaConceptFinder = nvidiaConceptEntries.length ? h(StudyConceptFinder, {
    entries: nvidiaConceptEntries,
    query: conceptLookupQuery,
    setQuery: setConceptLookupQuery,
    onOpen: openConceptLookupEntry
  }) : null;
  const nvidiaToolsNode = h(StudyToolsBar, { tutorNode: studyChatNode, searchRouter: nvidiaConceptFinder });
  const nvidiaTabsNode = h(NvidiaStudyTabs, {
    activeView: effectiveStudyView,
    onSelectView: (view) => {
      if (view === "sections") {
        showNvidiaSectionIndex();
        return;
      }
      setStudyView(view);
      if (view === "services") setNvidiaServiceScreen("list");
    },
    branding,
    currentExamLabel
  });
  const sectionNav = h(NvidiaSectionChapterNav, {
    sections: filteredSections,
    selectedSection,
    onSelectSection: openSectionFromLifecycle,
    eyebrow: "Official chapter index",
    title: "Exam chapters"
  });
  const serviceFilterNode = h(NvidiaServiceFilterStrip, {
    sectionFilters: serviceFilterLabels,
    activeSectionFilter: activeServiceFilter,
    onSectionFilter: selectServiceFilter,
    familyGroups: availableServiceGroups,
    activeFamily: activeServiceGroup,
    onFamily: selectServiceGroup,
    services: filteredServices,
    selectedServiceName: selectedService.name,
    onService: openNvidiaServicePage
  });
  const serviceIndexNode = h(NvidiaServiceIndex, {
    services: filteredServices,
    selectedService,
    onSelectService: openNvidiaServicePage,
    currentExamLabel
  });

  function renderNvidiaPage({ viewKey, viewLabel, itemLabel = "", header, beforeNav = null, navNode = null, bodyNode, prevNextNode = null, relatedNode = null, onHome = null, onView = null }) {
    const topPrevNextNode = prevNextNode ? React.cloneElement(prevNextNode, { key: "top-prev-next", placement: "top" }) : null;
    const bottomPrevNextNode = prevNextNode ? React.cloneElement(prevNextNode, { key: "bottom-prev-next", placement: "bottom" }) : null;
    return h("div", { className: `nvidia-handbook-page nvidia-handbook-${viewKey}` },
      h(NvidiaStudyBreadcrumbs, {
        examLabel: currentExamLabel,
        viewLabel,
        itemLabel,
        onHome: onHome || (() => setStudyView(defaultNvidiaStudyView)),
        onView: onView || (() => setStudyView(viewKey))
      }),
      h(NvidiaStudyPageHeader, header),
      nvidiaToolsNode,
      nvidiaTabsNode,
      beforeNav,
      navNode,
      topPrevNextNode,
      bodyNode,
      bottomPrevNextNode,
      relatedNode,
      studyStatus ? h("p", { className: "study-status" }, studyStatus) : null
    );
  }

  const lifecycleStages = lifecycleFlow?.stages || [];
  const selectedStageId = activeLifecycleStage ? lifecycleStageKey(activeLifecycleStage) : "";
  const activeStageTitle = activeLifecycleStage?.name || currentExamLabel;
  const lifecyclePage = renderNvidiaPage({
    viewKey: "lifecycle",
    viewLabel: "Study Handbook",
    itemLabel: activeStageTitle,
    header: {
      eyebrow: `NVIDIA · ${exam.certification?.code || currentExamLabel}`,
      title: `${currentExamLabel} Study Handbook`,
      subtitle: branding.studyDescription,
      badges: ["Technical handbook", `${filteredSections.length} official sections`, `${examServices.length} NVIDIA references`],
      tags: filteredSections.slice(0, 4).map((section) => `${section.name} · ${section.weight}%`)
    },
    navNode: sectionNav,
    bodyNode: h(LifecycleFlow, {
      examLabel: currentExamLabel,
      selectedStageId,
      onSelectStage: setSelectedLifecycleStage,
      onSelectService: openServiceFromLifecycle,
      onSelectSection: openSectionFromLifecycle,
      onSelectStudyPage: openStudyRouteFromLifecycle,
      branding
    }),
    prevNextNode: h(NvidiaPrevNextNav, {
      items: lifecycleStages,
      selectedId: selectedStageId,
      getId: lifecycleStageId,
      getTitle: (stage) => stage.name,
      onSelect: (stage) => setSelectedLifecycleStage(lifecycleStageKey(stage)),
      previousLabel: "Previous concept",
      nextLabel: "Next concept"
    }),
    relatedNode: h(NvidiaRelatedLinks, {
      items: filteredSections,
      selectedId: selectedSection.name,
      getId: nvidiaSectionId,
      getTitle: (section) => section.name,
      getMeta: (section) => `${section.weight}%`,
      onSelect: (section) => openSectionFromLifecycle(section.name),
      eyebrow: "Related official sections",
      title: "Open a full exam chapter"
    })
  });

  const sectionsListPage = renderNvidiaPage({
    viewKey: "sections",
    viewLabel: "Exam Sections",
    itemLabel: "",
    header: {
      eyebrow: `Official chapters · ${currentExamLabel}`,
      title: "Official Exam Chapters",
      subtitle: "Official blueprint chapters for the selected certification, ordered by exam weight and concept flow.",
      badges: ["Exam Sections", `${filteredSections.length} official chapters`, currentExamLabel],
      tags: filteredSections.slice(0, 4).map((section) => `${section.name} · ${section.weight}%`)
    },
    onHome: showNvidiaSectionIndex,
    onView: showNvidiaSectionIndex,
    navNode: sectionNav
  });

  const sectionDetailPage = renderNvidiaPage({
    viewKey: "sections",
    viewLabel: "Exam Sections",
    itemLabel: selectedSection.name,
    header: {
      eyebrow: `Official chapter · ${currentExamLabel}`,
      title: selectedSection.name,
      subtitle: selectedSection.description,
      badges: ["Official chapter", `${selectedSection.weight}% exam weight`, currentExamLabel],
      tags: selectedSection.keyIdeas || []
    },
    onHome: showNvidiaSectionIndex,
    onView: showNvidiaSectionIndex,
    beforeNav: h(NvidiaSectionJumpBar, {
      sections: filteredSections,
      selectedSection,
      onSelectSection: openSectionFromLifecycle
    }),
    bodyNode: h(SectionDetail, {
      section: selectedSection,
      certSlug: exam.slug || "genai_llms_professional",
      quickQuiz: quickSectionQuiz,
      generateStudyQuiz,
      quizDifficulty,
      setQuizDifficulty,
      studyStatus,
      generationStatus,
      cancelGeneration,
      handbook: true
    }),
    prevNextNode: h(NvidiaPrevNextNav, {
      items: filteredSections,
      selectedId: selectedSection.name,
      getId: nvidiaSectionId,
      getTitle: (section) => section.name,
      onSelect: (section) => openSectionFromLifecycle(section.name),
      previousLabel: "Previous section",
      nextLabel: "Next section"
    })
  });

  const serviceListPage = renderNvidiaPage({
    viewKey: "services",
    viewLabel: branding.serviceLabel,
    itemLabel: "",
    header: {
      eyebrow: `NVIDIA services · ${currentExamLabel}`,
      title: "NVIDIA Service Pages",
      subtitle: "Filter the product map, then open one service as its own study chapter.",
      badges: ["Services", `${filteredServices.length} visible`, currentExamLabel],
      tags: activeServiceFilter === "All" ? [] : [activeServiceFilter]
    },
    beforeNav: serviceFilterNode,
    bodyNode: serviceIndexNode
  });

  const serviceDetailPage = renderNvidiaPage({
    viewKey: "services",
    viewLabel: branding.serviceLabel,
    itemLabel: selectedService.name,
    header: {
      eyebrow: `${branding.serviceLabel} · ${currentExamLabel}`,
      title: selectedService.name,
      subtitle: serviceSummaryText(selectedService),
      badges: [branding.serviceLabel, selectedService.lifecycle || serviceGroupName(selectedService), currentExamLabel],
      tags: (selectedService.keywords || selectedService.filters || []).slice(0, 8)
    },
    onView: () => {
      setStudyView("services");
      setNvidiaServiceScreen("list");
    },
    bodyNode: h(ServiceDetail, {
      service: selectedService,
      certSlug: exam.slug || "genai_llms_professional",
      quickQuiz: quickServiceQuiz,
      generateStudyQuiz,
      quizDifficulty,
      setQuizDifficulty,
      studyStatus,
      generationStatus,
      cancelGeneration,
      branding,
      showLifecyclePriority: false,
      activeServiceFilter,
      currentExamLabel,
      handbook: true
    }),
    prevNextNode: h(NvidiaPrevNextNav, {
      items: filteredServices,
      selectedId: selectedService.name,
      getId: nvidiaServiceId,
      getTitle: (service) => service.name,
      onSelect: (service) => openNvidiaServicePage(service.name),
      previousLabel: "Previous concept",
      nextLabel: "Next concept"
    })
  });

  const suitePage = renderNvidiaPage({
    viewKey: "suite",
    viewLabel: branding.suiteLabel,
    itemLabel: selectedSuiteTopic.title,
    header: {
      eyebrow: `${branding.suiteLabel} · ${currentExamLabel}`,
      title: selectedSuiteTopic.title,
      subtitle: selectedSuiteTopic.summary,
      badges: [branding.suiteLabel, selectedSuiteTopic.category, currentExamLabel],
      tags: (selectedSuiteTopic.related || []).slice(0, 8)
    },
    bodyNode: h(SuiteStudyView, {
      topics: suiteTopics,
      selectedTopic: selectedSuiteTopic,
      setSelectedTopicId: setSelectedSuiteTopicId,
      studyStatus,
      suiteLabel: branding.suiteLabel,
      handbook: true
    })
  });

  return h(
    "div",
    { className: "study-panel nvidia-study-panel", id: "study-mode-panel" },
    effectiveStudyView === "services"
      ? nvidiaServiceScreen === "detail" ? serviceDetailPage : serviceListPage
      : effectiveStudyView === "suite"
        ? suitePage
        : effectiveStudyView === "sections"
          ? nvidiaSectionScreen === "detail" ? sectionDetailPage : sectionsListPage
          : lifecyclePage
  );
}

function ServiceCard({ service, selected, onClick, priorityRole = "", showLifecyclePriority = false, activeServiceFilter = "All", currentExamLabel = "Agentic AI", compact = false, index = 0 }) {
  const usageSummary = showLifecyclePriority ? allLifecycleUsageBadges(service, activeServiceFilter, currentExamLabel) : [];
  const activeUsage = showLifecyclePriority ? bestLifecycleUsage(service, activeServiceFilter, currentExamLabel) || usageSummary[0] : null;
  const priorityLabel = priorityRole === "core"
    ? "Core"
    : priorityRole === "optional"
      ? "Support"
      : "";
  if (compact) {
    return h("button", {
      className: `service-card nvidia-compact-nav-row nvidia-service-nav-row ${serviceGroupClass(service)} ${selected ? "active" : ""}`,
      type: "button",
      onClick,
      "aria-current": selected ? "page" : undefined
    },
      h("span", { className: "nvidia-row-number" }, String(index || 1).padStart(2, "0")),
      h("span", { className: "nvidia-row-copy" },
        h("strong", null, service.name),
        h("p", null, compactStudyText(serviceSummaryText(service), 132))
      ),
      h("span", { className: "nvidia-row-meta" }, service.lifecycle || serviceGroupName(service)),
      h("span", { className: "nvidia-row-chips" },
        (service.filters || service.exams || []).slice(0, 3).map((item) => h("span", { key: item }, item))
      )
    );
  }
  return h(
    "button",
    { className: `service-card ${serviceGroupClass(service)} ${priorityRole ? `stage-${priorityRole}` : ""} ${selected ? "active" : ""}`, onClick },
    priorityLabel ? h("span", { className: `service-priority ${priorityRole || topicSlug(priority.tier)}` }, priorityLabel) : null,
    showLifecyclePriority && usageSummary.length ? h("div", { className: "service-context-chips" },
      usageSummary.slice(0, 4).map((usage) => h("span", {
        key: `${usage.lane}-${usage.stageId}-${usage.roleId}`,
        className: `service-context-chip ${usage.roleClass}`
      }, agenticUsageBadgeText(usage))),
      usageSummary.length > 4 ? h("span", { className: "service-context-chip more" }, `+${usageSummary.length - 4} more`) : null
    ) : null,
    h("span", null, service.lifecycle),
    h("strong", null, service.name),
    h("p", null, serviceSummaryText(service)),
    showLifecyclePriority && activeUsage ? h("small", { className: "service-priority-note" }, `${activeUsage.stageName}: ${activeUsage.stageNote}`) : null,
    h("em", null, service.exams.join(" + "))
  );
}

function SectionCard({ section, selected, onClick, compact = false, index = 0 }) {
  if (compact) {
    return h(
      "button",
      {
        className: `service-card section-card nvidia-compact-nav-row nvidia-section-nav-row ${selected ? "active" : ""}`,
        type: "button",
        onClick,
        "aria-current": selected ? "page" : undefined
      },
      h("span", { className: "nvidia-row-number" }, String(index || 1).padStart(2, "0")),
      h("span", { className: "nvidia-row-copy" },
        h("strong", null, section.name),
        h("p", null, compactStudyText(section.description, 150))
      ),
      h("span", { className: "nvidia-row-meta" }, `${section.weight}% exam weight`),
      h("span", { className: "nvidia-row-chips" },
        section.keyIdeas.slice(0, 4).map((idea) => h("span", { key: idea }, idea))
      )
    );
  }
  return h(
    "button",
    { className: `service-card section-card ${selected ? "active" : ""}`, onClick },
    h("span", null, `${section.exam} · ${section.weight}%`),
    h("strong", null, section.name),
    h("p", null, section.description),
    h("em", null, section.keyIdeas.slice(0, 3).join(" · "))
  );
}

function SuiteStudyView({ topics, selectedTopic, setSelectedTopicId, studyStatus, suiteLabel, handbook = false }) {
  const grouped = [...new Set(topics.map((topic) => topic.category))].map((category) => ({
    category,
    topics: topics.filter((topic) => topic.category === category)
  }));

  if (handbook) {
    return h("div", { className: "nvidia-suite-handbook" },
      h("div", { className: "nvidia-suite-two-pane" },
        h("nav", { className: "general-compact-chapter-nav nvidia-compact-chapter-nav nvidia-suite-topic-nav", "aria-label": suiteLabel },
          h("div", { className: "general-focused-nav-head" },
            h("span", null, suiteLabel),
            h("h2", null, "Compact related links")
          ),
          h("div", { className: "nvidia-compact-row-list" },
            topics.map((topic, index) => h("button", {
              key: topic.id,
              type: "button",
              className: `service-card suite-topic-card nvidia-compact-nav-row ${topic.id === selectedTopic.id ? "active" : ""}`,
              onClick: () => setSelectedTopicId(topic.id),
              "aria-current": topic.id === selectedTopic.id ? "page" : undefined
            },
              h("span", { className: "nvidia-row-number" }, String(index + 1).padStart(2, "0")),
              h("span", { className: "nvidia-row-copy" },
                h("strong", null, topic.title),
                h("p", null, compactStudyText(topic.summary, 96))
              ),
              h("span", { className: "nvidia-row-meta" }, topic.category),
              h("span", { className: "nvidia-row-chips" },
                topic.related.slice(0, 3).map((item) => h("span", { key: item }, item))
              )
            ))
          )
        ),
        h(SuiteTopicDetail, { topic: selectedTopic, studyStatus, suiteLabel, handbook: true })
      )
    );
  }

  return h(
    "div",
    { className: "service-layout suite-layout" },
    h(
      "div",
      { className: "service-cards suite-cards" },
      grouped.map((group) => h("section", { key: group.category, className: "service-group suite-group" },
        h("h3", null, group.category),
        group.topics.map((topic) => h(SuiteTopicCard, {
          key: topic.id,
          topic,
          selected: topic.id === selectedTopic.id,
          onClick: () => setSelectedTopicId(topic.id)
        }))
      ))
    ),
    h(SuiteTopicDetail, { topic: selectedTopic, studyStatus, suiteLabel })
  );
}

function SuiteTopicCard({ topic, selected, onClick }) {
  return h(
    "button",
    { className: `service-card suite-topic-card ${selected ? "active" : ""}`, onClick },
    h("span", null, topic.category),
    h("strong", null, topic.title),
    h("p", null, topic.summary),
    h("em", null, topic.related.slice(0, 4).join(" + "))
  );
}

function SuiteTopicDetail({ topic, studyStatus, suiteLabel, handbook = false }) {
  return h(
    "article",
    { className: `service-detail suite-detail nvidia-detail-article ${handbook ? "nvidia-handbook-article" : ""}`.trim() },
    h("div", { className: `service-detail-title ${handbook ? "nvidia-handbook-title" : ""}`.trim() },
      h("span", null, suiteLabel),
      h("h3", null, topic.title),
      h("p", null, topic.summary)
    ),
    h("div", { className: "study-map suite-study-map" },
      h("section", { className: "identity" },
      h("span", null, "Recognition clue"),
        h("p", null, topic.examSignal)
      ),
      h("section", { className: "use" },
        h("span", null, "Key mental model"),
        h("p", null, topic.keyIdeas[0] ? renderInline(topic.keyIdeas[0]) : "")
      ),
      h("section", { className: "trap" },
        h("span", null, "Decision trap"),
        h("p", null, topic.traps[0] || "")
      )
    ),
    h("div", { className: "suite-knowledge-grid" },
      h(SuiteKnowledgeCard, { title: "Key ideas", items: topic.keyIdeas }),
      h(SuiteKnowledgeCard, { title: "Must know", items: topic.mustKnow }),
      h(SuiteKnowledgeCard, { title: "Decision traps", items: topic.traps }),
      h(SuiteKnowledgeCard, { title: "Related terms", items: topic.related })
    ),
    h("details", { className: "suite-reference" },
      h("summary", null, "Study notes"),
      h("p", null, "Use this page as the quick glossary before drilling specific capabilities. For scenario questions, classify the phase first, then choose the product or component that owns that phase.")
    ),
    studyStatus ? h("p", { className: "study-status" }, studyStatus) : null
  );
}

function SuiteKnowledgeCard({ title, items }) {
  return h(
    "section",
    { className: "suite-knowledge-card" },
    h("span", null, title),
    h("ul", null, items.map((item) => h("li", { key: item }, renderInline(item))))
  );
}

function StudyFirstPanel({ markdown }) {
  const content = markdownSections(markdown)[normalizeHeadingName("What to study first")]?.content;
  if (!content?.trim()) return null;
  return h("section", { className: "study-first-panel service-section" },
    h("div", { className: "service-section-heading" },
      h("span", null, "Start here"),
      h("h4", null, "What to study first")
    ),
    h("div", { className: "study-first-body" }, renderStudyFirstContent(content))
  );
}

function splitStudyFirstParts(label, value) {
  const text = String(value || "").trim().replace(/\.;/g, ";").replace(/\s+/g, " ");
  if (!text) return [];
  if (/^concrete surface$/i.test(label)) {
    return text
      .split(/\s+(?=(?:Access|Inside|I\/O|Input|Output):)/g)
      .map((part) => part.trim())
      .filter(Boolean);
  }
  if (/^(study first|must know)$/i.test(label)) {
    const parts = text.split(/;\s+/).map((part) => part.trim().replace(/[.;]\s*$/, "")).filter(Boolean);
    return parts.length > 1 ? parts : [text];
  }
  return [text];
}

function renderStudyFirstContent(content) {
  const lines = String(content || "").split("\n");
  const nodes = [];
  let prose = [];
  let pendingRow = null;
  const renderOptions = { autoHighlight: true, highlightSeen: new Set(), highlightCount: { value: 0 }, maxHighlights: 8 };
  function flushRow() {
    if (!pendingRow) return;
    const label = pendingRow.label;
    const parts = splitStudyFirstParts(label, pendingRow.values.join("; "));
    nodes.push(h("div", { className: `study-first-row study-first-${topicSlug(label)}`, key: `${label}-${nodes.length}` },
      h("strong", null, label),
      parts.length > 1
        ? h("ul", null, parts.map((part, index) => h("li", { key: `${index}-${part}` }, renderInline(part, renderOptions))))
        : h("p", null, renderInline(parts[0] || "", renderOptions))
    ));
    pendingRow = null;
  }
  function flushProse() {
    const text = prose.join("\n").trim();
    prose = [];
    if (text) nodes.push(h("div", { className: "study-first-prose", key: `p-${nodes.length}` }, renderMarkdown(text, renderOptions)));
  }
  for (const line of lines) {
    const match = line.match(/^-\s+\*\*(.+?)\*\*:?\s*(.+)$/);
    if (!match) {
      const continuation = line.match(/^-\s+(.+)$/);
      if (pendingRow && /^(study first|must know)$/i.test(pendingRow.label) && continuation) {
        pendingRow.values.push(continuation[1].trim());
        continue;
      }
      flushRow();
      prose.push(line);
      continue;
    }
    flushProse();
    flushRow();
    const label = match[1].trim().replace(/:\s*$/, "");
    pendingRow = { label, values: [match[2].trim()] };
  }
  flushRow();
  flushProse();
  return nodes.length ? nodes : renderMarkdown(content, { autoHighlight: true });
}

function ImplementationCards({ impl }) {
  if (!impl) return null;
  const codePanel = impl.codeBlocks.length ? h("div", { className: "impl-code" },
    h("span", null, "Code and calls to recognize"),
    ...impl.codeBlocks.map(function(cb) {
      return h("pre", { key: cb.code.slice(0, 20) }, h("code", null, cb.code));
    })
  ) : null;

  return h("div", { className: "implementation-cards service-section" },
    h("div", { className: "service-section-heading" },
      h("span", null, "Start here"),
      h("h4", null, "Actual implementation / How you use it")
    ),
    codePanel,
    h("div", { className: "impl-grid" },
      h("section", { className: "impl-what" },
        h("span", null, "What it is technically"),
        h("p", null, renderInline(impl.whatItIs)),
        impl.inside ? h("p", { className: "impl-inside" }, h("strong", null, "Inside: "), renderInline(impl.inside)) : null
      ),
      h("section", { className: "impl-access" },
        h("span", null, "How you access it"),
        h("p", null, renderInline(impl.howToAccess))
      ),
      h("section", { className: "impl-io" },
        h("span", null, "Input → Output"),
        h("p", null, h("strong", null, "Input: "), renderInline(impl.input)),
        h("p", null, h("strong", null, "Output: "), renderInline(impl.output))
      ),
      impl.handoff ? h("section", { className: "impl-handoff" },
        h("span", null, "Data / artifact handoff"),
        h("p", null, renderInline(impl.handoff))
      ) : null,
      impl.nextStep ? h("section", { className: "impl-next" },
        h("span", null, "What happens next"),
        h("p", null, renderInline(impl.nextStep))
      ) : null,
      h("section", { className: "impl-mental" },
        h("span", null, "One-line mental model"),
        h("p", null, renderInline(impl.mentalModel))
      )
    )
  );
}

function ExamDecisionCards({ study }) {
  return h("div", { className: "exam-decision service-section" },
    h("div", { className: "service-section-heading" },
      h("span", null, "Service guide"),
      h("h4", null, "Place it in the right part of the stack")
    ),
    h("div", { className: "study-map" },
      h("section", { className: "identity" },
        h("span", null, "Where it fits"),
        h("strong", null, renderInline(study.lifecycle)),
        h("p", null, renderInline(study.where))
      ),
      h("section", { className: "use" },
        h("span", null, "Use it when"),
        h("p", null, renderInline(study.use))
      ),
      h("section", { className: "avoid" },
        h("span", null, "Use something else when"),
        h("p", null, renderInline(study.avoid))
      ),
      h("section", { className: "trap" },
        h("span", null, "Common mix-up"),
        h("p", null, renderInline(study.traps))
      ),
      h("section", { className: "scenario" },
        h("span", null, "Typical situation"),
        h("p", null, renderInline(study.scenario))
      )
    )
  );
}

function markdownSectionContent(markdown, heading) {
  return markdownSections(markdown)[normalizeHeadingName(heading)]?.content?.trim() || "";
}

function firstStudyFirstValue(markdown, label) {
  const content = markdownSectionContent(markdown, "What to study first");
  if (!content) return "";
  const escaped = String(label).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = content.match(new RegExp(`^-\\s+\\*\\*${escaped}:\\*\\*\\s*(.+)$`, "im"));
  return match?.[1]?.trim() || "";
}

function firstParagraphFromSection(markdown, heading) {
  const content = markdownSectionContent(markdown, heading);
  if (!content) return "";
  return content
    .split(/\n{2,}/)
    .find((part) => part.trim() && !/^[-*]\s+/.test(part.trim()) && !/^\|/.test(part.trim()))?.trim() || content.trim();
}

function markdownSummaryContent(markdown, fallback = {}) {
  return markdownSectionContent(markdown, "What it is, in one paragraph")
    || firstParagraphFromSection(markdown, "What You Are Building")
    || firstStudyFirstValue(markdown, "Core idea")
    || valueFromCardData(generatedBlock(markdown), "What it is")
    || valueFromCardData(generatedBlock(markdown), "What it covers")
    || fallback.description
    || fallback.summary
    || "";
}

function markdownLifecycleContent(markdown, fallback = {}) {
  const lifecycle = markdownSectionContent(markdown, "Where it sits in the lifecycle");
  if (lifecycle) return lifecycle;
  const lane = firstParagraphFromSection(markdown, "Lifecycle Lane Playbooks");
  if (lane) return lane;
  const cardLifecycle = valueFromCardData(generatedBlock(markdown), "Lifecycle") || fallback.lifecycle || fallback.exam || "";
  return cardLifecycle ? `**Lifecycle layer:** ${cardLifecycle}` : "";
}

function markdownRightAnswerContent(markdown, fallback = {}) {
  return markdownSectionContent(markdown, "When it is the right answer")
    || firstStudyFirstValue(markdown, "Use it when")
    || firstStudyFirstValue(markdown, "Right-answer trigger")
    || valueFromCardData(generatedBlock(markdown), "Use it when")
    || valueFromCardData(generatedBlock(markdown), "Use this section when")
    || fallback.use
    || "";
}

function markdownBoundaryContent(markdown, fallback = {}) {
  return markdownSectionContent(markdown, "Adjacent-service decision boundary")
    || markdownSectionContent(markdown, "Adjacent-service decision boundaries")
    || markdownSectionContent(markdown, "Decision Guide")
    || markdownSectionContent(markdown, "Decision guide")
    || valueFromCardData(generatedBlock(markdown), "Common trap")
    || fallback.traps
    || "";
}

function serviceDecisionCards(markdown, fallback = {}) {
  return [
    {
      kind: "summary",
      label: "What it is, in one paragraph",
      className: "identity summary",
      content: markdownSummaryContent(markdown, fallback)
    },
    {
      kind: "detail",
      label: "Where it sits in the lifecycle",
      className: "scenario lifecycle",
      content: markdownLifecycleContent(markdown, fallback)
    },
    {
      kind: "detail",
      label: "When it is the right answer",
      className: "use right-answer",
      content: markdownRightAnswerContent(markdown, fallback)
    },
    {
      kind: "detail",
      label: "Adjacent-service decision boundaries",
      className: "trap boundary",
      content: markdownBoundaryContent(markdown, fallback)
    }
  ].filter((card) => card.content);
}

function firstCodeBlocks(markdown, limit = 2) {
  const blocks = [];
  const codeRe = /```(\w*)\n([\s\S]*?)```/g;
  let match;
  while ((match = codeRe.exec(String(markdown || ""))) !== null && blocks.length < limit) {
    blocks.push({ lang: match[1] || "text", code: match[2].trim() });
  }
  return blocks;
}

function codeChipFromBlock(block) {
  const lines = String(block?.code || "")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#") && !line.startsWith("//"));
  return lines.find((line) => /(curl|docker|kubectl|POST |GET |from |import |client\.|_type:|model=|nmp )/.test(line)) || lines[0] || "";
}

function inlineCodeTokens(text, limit = 3) {
  const tokens = [];
  const re = /`([^`]+)`/g;
  let match;
  while ((match = re.exec(String(text || ""))) !== null && tokens.length < limit) tokens.push(match[1]);
  return tokens;
}

function pipelineSteps(markdown) {
  const content = markdownSectionContent(markdown, "Pipeline") || markdownSectionContent(markdown, "Operating model");
  if (!content) return [];
  return content
    .split("\n")
    .map((line) => line.match(/^\s*(?:\d+\.|-)\s+(.+)$/)?.[1]?.trim())
    .filter(Boolean);
}

function buildStudyFlow({ markdown, title, kind = "Service", impl = null, fallback = {} }) {
  const summary = markdownSummaryContent(markdown, fallback);
  const steps = pipelineSteps(markdown);
  const concrete = firstStudyFirstValue(markdown, "Concrete surface")
    || firstStudyFirstValue(markdown, "Call surface")
    || firstStudyFirstValue(markdown, "Study first");
  const codeBlocks = impl?.codeBlocks?.length ? impl.codeBlocks.slice(0, 2) : firstCodeBlocks(markdown, 2);
  const codeChips = [
    ...codeBlocks.map(codeChipFromBlock).filter(Boolean),
    ...inlineCodeTokens(concrete, 3)
  ].filter(Boolean).slice(0, 3);
  const input = impl?.input
    || steps[0]
    || firstStudyFirstValue(markdown, "Input")
    || firstStudyFirstValue(markdown, "Use it when")
    || summary;
  const output = impl?.output
    || impl?.nextStep
    || steps[steps.length - 1]
    || firstStudyFirstValue(markdown, "Output")
    || valueFromCardData(generatedBlock(markdown), "Scenario signal")
    || valueFromCardData(generatedBlock(markdown), "Recognition clues")
    || "Correct service choice, architecture boundary, or study decision.";
  if (!summary && !input && !output && !codeChips.length) return null;
  return {
    inputLabel: kind === "Topic" ? "Question signal" : "Input",
    inputTitle: kind === "Topic" ? "What the stem is asking" : "What you provide",
    input,
    middleLabel: kind === "Topic" ? "Pattern to recognize" : kind,
    title,
    serviceText: impl?.whatItIs || summary,
    codeChips,
    note: impl?.handoff || "",
    outputLabel: kind === "Topic" ? "Answer pattern" : "Output",
    outputTitle: kind === "Topic" ? "What the correct answer does" : "What you get back",
    output,
    nextStep: impl?.nextStep || ""
  };
}

function CustomizerFlowDiagram() {
  return h("div", { className: "service-flow-diagram customizer-flow", "aria-label": "NeMo Customizer input output flow" },
    h("section", { className: "flow-node flow-input" },
      h("span", null, "Input"),
      h("strong", null, "What you provide"),
      h("p", { className: "flow-kicker" }, "Registered resources plus the tuning recipe."),
      h("ul", null,
        h("li", null, h("b", null, "Base model: "), h("code", null, "default/llama-3-2-1b"), " Model Entity"),
        h("li", null, h("b", null, "Dataset: "), h("code", null, "fileset://default/legal-sft-jsonl"), " uploaded JSONL examples"),
        h("li", null, h("b", null, "Recipe: "), "SFT + LoRA/PEFT knobs: rank, alpha, epochs")
      )
    ),
    h("div", { className: "flow-arrow", "aria-hidden": "true" }, "->"),
    h("section", { className: "flow-node flow-service" },
      h("span", null, "Service"),
      h("strong", null, "NeMo Customizer job"),
      h("p", { className: "flow-kicker" }, "Runs managed fine-tuning; submit job, monitor status/metrics."),
      h("div", { className: "flow-code-stack" },
        h("code", null, "client.customization.jobs.create(...)"),
        h("code", null, "POST /v1/customization/jobs")
      ),
      h("p", { className: "flow-note" }, "Local files are prep artifacts; the job reads platform entities.")
    ),
    h("div", { className: "flow-arrow", "aria-hidden": "true" }, "->"),
    h("section", { className: "flow-node flow-output" },
      h("span", null, "Output"),
      h("strong", null, "What you get back"),
      h("p", { className: "flow-kicker" }, "A deployable artifact, not a running endpoint yet."),
      h("ul", null,
        h("li", null, h("b", null, "LoRA path: "), "adapter FileSet attached to the base Model Entity"),
        h("li", null, h("b", null, "Full SFT path: "), "new customized Model Entity"),
        h("li", null, h("b", null, "Next: "), "evaluate with NeMo Evaluator, then deploy with NIM / DMS")
      ),
      h("p", { className: "flow-note" }, "For LoRA serving, enable adapter loading on the base model.")
    )
  );
}

function StudyFlowDiagram({ markdown, title, kind = "Service", impl = null, fallback = {}, serviceSlug = "" }) {
  if (serviceSlug === "nemo-customizer") return h(CustomizerFlowDiagram);
  const flow = buildStudyFlow({ markdown, title, kind, impl, fallback });
  if (!flow) return null;
  return h("div", { className: "service-flow-diagram", "aria-label": `${title} input output flow` },
    h("section", { className: "flow-node flow-input" },
      h("span", null, flow.inputLabel || "Input"),
      h("strong", null, flow.inputTitle),
      h("p", { className: "flow-kicker" }, renderInline(flow.input, { autoHighlight: true, maxHighlights: 3 }))
    ),
    h("div", { className: "flow-arrow", "aria-hidden": "true" }, "->"),
    h("section", { className: "flow-node flow-service" },
      h("span", null, flow.middleLabel),
      h("strong", null, flow.title),
      flow.serviceText ? h("p", { className: "flow-kicker" }, renderInline(flow.serviceText, { autoHighlight: true, maxHighlights: 3 })) : null,
      flow.codeChips.length ? h("div", { className: "flow-code-stack" },
        flow.codeChips.map((chip) => h("code", { key: chip }, chip))
      ) : null,
      flow.note ? h("p", { className: "flow-note" }, renderInline(flow.note, { autoHighlight: true, maxHighlights: 2 })) : null
    ),
    h("div", { className: "flow-arrow", "aria-hidden": "true" }, "->"),
    h("section", { className: "flow-node flow-output" },
      h("span", null, flow.outputLabel || "Output"),
      h("strong", null, flow.outputTitle),
      h("p", { className: "flow-kicker" }, renderInline(flow.output, { autoHighlight: true, maxHighlights: 3 })),
      flow.nextStep ? h("p", { className: "flow-note" }, renderInline(flow.nextStep, { autoHighlight: true, maxHighlights: 2 })) : null
    )
  );
}

function MarkdownCodePreview({ markdown, impl = null }) {
  const codeBlocks = impl?.codeBlocks?.length ? impl.codeBlocks : firstCodeBlocks(markdown, 1);
  if (!codeBlocks.length) return null;
  return h("section", { className: "service-section code-preview-section" },
    h("div", { className: "service-section-heading" },
      h("span", null, "Start here"),
      h("h4", null, "Code and calls to recognize")
    ),
    h("div", { className: "impl-code" },
      codeBlocks.slice(0, 2).map((block, index) => h("pre", { key: `${block.lang}-${index}` }, h("code", null, block.code)))
    )
  );
}

function ServiceDecisionSnapshot({ markdown, mode = "all", serviceSlug = "", fallback = {} }) {
  const cards = serviceDecisionCards(markdown, fallback).filter((card) => {
    if (mode === "summary") return card.kind === "summary";
    if (mode === "details") return card.kind === "detail";
    return true;
  });

  if (!cards.length) return null;
  const heading =
    mode === "summary"
      ? { eyebrow: "Start here", title: "What it is" }
      : mode === "details"
        ? { eyebrow: "Decision guide", title: "Lifecycle and boundaries" }
        : { eyebrow: "Start here", title: "Decision snapshot" };
  const renderOptions = { autoHighlight: true, highlightSeen: new Set(), highlightCount: { value: 0 }, maxHighlights: 10 };
  return h("div", { className: "decision-snapshot service-section" },
    h("div", { className: "service-section-heading" },
      h("span", null, heading.eyebrow),
      h("h4", null, heading.title)
    ),
    h("div", { className: "study-map" },
      cards.map((card) => h("section", { className: card.className, key: card.label },
        h("span", null, card.label),
        h("div", { className: "decision-card-body" }, renderMarkdown(card.content, renderOptions))
      ))
    ),
    mode === "summary" ? h(StudyFlowDiagram, {
      markdown,
      title: fallback.name || fallback.title || markdownTitle(markdown),
      kind: fallback.kind || "Service",
      impl: fallback.impl,
      fallback,
      serviceSlug
    }) : null
  );
}

function LifecycleUsagePanel({ service, activeServiceFilter = "All", currentExamLabel = "Agentic AI" }) {
  const allUsages = lifecycleUsageSummary(service, "All", currentExamLabel);
  if (!allUsages.length) return null;
  const isAgenticExam = currentExamLabel === "Agentic AI";
  const activeUsages = activeServiceFilter === "All" ? [] : lifecycleUsageSummary(service, activeServiceFilter, currentExamLabel);
  const activeKeys = new Set(activeUsages.map((usage) => `${usage.lane}-${usage.stageId}-${usage.roleId}`));
  const orderedUsages = [
    ...activeUsages,
    ...allUsages.filter((usage) => !activeKeys.has(`${usage.lane}-${usage.stageId}-${usage.roleId}`))
  ];

  return h("div", { className: "agentic-usage-panel service-section" },
    h("div", { className: "service-section-heading" },
      h("span", null, isAgenticExam ? "Exam concept usage" : "Lifecycle usage"),
      h("h4", null, isAgenticExam ? "Where this service matters in exam concepts" : "Where this service appears in the lifecycle")
    ),
    h("div", { className: "agentic-usage-grid" },
      orderedUsages.map((usage) => {
        const detail = currentExamLabel === "Agentic AI General" ? GENERAL_LIFECYCLE_STAGE_DETAILS[usage.stageId] : null;
        return h("article", {
          key: `${usage.lane}-${usage.stageId}-${usage.roleId}`,
          className: `agentic-usage-card ${usage.roleClass} ${activeKeys.has(`${usage.lane}-${usage.stageId}-${usage.roleId}`) ? "active" : ""}`
        },
          h("span", null, usage.roleLabel),
          h("strong", null, `${usage.contextLabel} -> ${usage.stageName}`),
          h("p", null, usage.stageNote),
          detail ? h("div", { className: "agentic-usage-detail" },
            h("small", null, "Checks"),
            h("p", null, detail.checks.slice(0, 2).join("; ")),
            h("small", null, "Metrics"),
            h("p", null, detail.metrics.slice(0, 3).join(", "))
          ) : null,
          h("em", null, usage.stageContext)
        );
      })
    )
  );
}

const NVIDIA_SECTION_CODE_EXAMPLES = {
  "Agent Architecture and Design": {
    label: "Architecture pattern to recognize",
    code: `[User request]
  -> risk_and_complexity_router
     -> deterministic FAQ path
     -> RAG path with cited evidence
     -> stateful workflow / ReAct path
     -> human approval path

execution_layer.validate(action.schema, permissions, risk)
workflow_state = { observations, approvals, tool_budget, stop_condition }`
  },
  "Agent Development": {
    label: "Tool wrapper contract",
    code: `tool:
  name: refund_order
  schema:
    required: [order_id, reason]
    properties:
      order_id: { type: string }
      reason: { type: string, enum: [duplicate, damaged, late] }
  preconditions: [authenticated, policy_checked, amount_under_limit]
  retry:
    max_attempts: 3
    backoff: exponential
    idempotency_key: required
  observation:
    shape: { summary, key_fields, audit_ref }`
  },
  "Evaluation and Tuning": {
    label: "Evaluation harness shape",
    code: `eval_suite:
  dataset: agent_regression_cases.jsonl
  checks: [task_success, tool_choice, groundedness, safety, latency]
  judge: llm_as_judge_with_rubric
  gates:
    groundedness: ">= 0.90"
    unsafe_output_rate: "== 0"
    p95_latency_ms: "<= 2500"`
  },
  "Deployment and Scaling": {
    label: "Production serving boundary",
    code: `client -> API gateway -> agent runtime -> NIM endpoint
                                  -> retrieval service
                                  -> tool gateway

scale separately:
  agent workers: concurrency and queues
  model serving: batching, KV cache, GPU profiles
  tools/RAG: rate limits, indexes, caches`
  },
  "Cognition, Planning, and Memory": {
    label: "Bounded planning loop",
    code: `while budget.remaining() and not state.done:
    plan = planner(goal, state.observations, memory.scope(user_id))
    action = policy.validate(plan.next_action)
    observation = tools.run(action)
    state.save(observation)
    if loop_detector.repeated(action, observation):
        escalate_or_replan(state)`
  },
  "Knowledge Integration and Data Handling": {
    label: "RAG data path",
    code: `documents -> extract -> chunk -> embed -> index
query -> retrieve -> rerank -> assemble_context -> answer_with_citations

preserve:
  source_id, permissions, timestamp, chunk_id, citation span`
  },
  "NVIDIA Platform Implementation": {
    label: "NVIDIA stack map",
    code: `NeMo Agent Toolkit -> workflow, tools, memory, traces
NeMo Retriever     -> extract, embed, retrieve, rerank, cite
NIM                -> callable model endpoints
NeMo Guardrails    -> runtime policy checks
NeMo Evaluator     -> quality and regression gates
Nsight             -> performance diagnosis`
  },
  "Run, Monitor, and Maintain": {
    label: "Operational trace record",
    code: `trace:
  run_id: aai-2026-0517-001
  route: risk_router -> rag -> tool_gateway -> answer
  tool_calls: [{ name, args_hash, status, latency_ms }]
  retrieval: { recall_set, citations, reranker_score }
  quality: { groundedness, policy_result, user_feedback }
  action: alert | rollback | tune_prompt | update_eval`
  },
  "Safety, Ethics, and Compliance": {
    label: "Layered policy checks",
    code: `policy_layers:
  input: [jailbreak, pii, disallowed_topic]
  retrieval: [permission_filter, source_policy]
  tool_call: [schema, authorization, risk_gate]
  output: [groundedness, refusal_policy, disclosure_rules]
  audit: [trace_id, approval_id, evidence_refs]`
  },
  "Human-AI Interaction and Oversight": {
    label: "Oversight routing",
    code: `if risk_score > threshold or confidence < minimum:
    create_review_task(
      proposed_action=agent.next_action,
      evidence=state.citations,
      reversible=policy.is_reversible(agent.next_action),
      approval_required=True
    )`
  }
};

function chapterCodeExampleFor(title, kind, markdown) {
  if (kind === "section" && NVIDIA_SECTION_CODE_EXAMPLES[title]) {
    return NVIDIA_SECTION_CODE_EXAMPLES[title];
  }
  const block = firstCodeBlocks(markdown, 1)[0];
  if (!block) return null;
  return { label: "Code/config surface to recognize", code: block.code };
}

function NvidiaChapterCodeCallout({ title, kind, markdown }) {
  const example = chapterCodeExampleFor(title, kind, markdown);
  if (!example?.code) return null;
  return h("section", { className: "nvidia-chapter-code-callout" },
    h("div", { className: "nvidia-chapter-code-copy" },
      h("span", null, kind === "section" ? "Concrete pattern" : "Call surface"),
      h("h3", null, example.label),
      h("p", null, kind === "section"
        ? "Use this as the shape to recognize in scenario questions before memorizing the surrounding notes."
        : "Start from the concrete API, CLI, YAML, or model surface before reading product descriptions.")
    ),
    h("pre", null, h("code", null, example.code))
  );
}

function promoteDeepDiveChapterBody(markdown) {
  const lines = String(markdown || "").split("\n");
  const out = [];
  let skippingDeepDiveContents = false;
  let inFence = false;

  for (const line of lines) {
    if (/^```/.test(line.trim())) {
      inFence = !inFence;
      if (!skippingDeepDiveContents) out.push(line);
      continue;
    }

    const heading = !inFence ? line.match(/^(#{2,6})\s+(.+?)\s*$/) : null;
    if (heading) {
      const title = heading[2].trim();
      const deepDiveTitle = title.match(/^deep dives?$/i);
      const deepDiveContents = title.match(/^deep dive contents$/i);
      const promotedTitle = title.match(/^deep dive:\s*(.+)$/i);

      if (deepDiveTitle) {
        skippingDeepDiveContents = false;
        continue;
      }
      if (deepDiveContents) {
        skippingDeepDiveContents = true;
        continue;
      }
      skippingDeepDiveContents = false;
      if (promotedTitle) {
        const cleanTitle = promotedTitle[1].trim().replace(/\s+deep dive$/i, "");
        out.push(`## ${cleanTitle}`);
        continue;
      }
    }

    if (skippingDeepDiveContents) continue;
    out.push(line);
  }

  return out.join("\n");
}

function nvidiaChapterBodyFromMarkdown(markdown) {
  let body = stripFrontmatter(markdown).replace(/^#\s+.+\n+/, "");
  [
    "What to study first",
    "Certification boundary",
    "General Study first",
    "Must-know exam bullets",
    "Hands-on checks / study prompts",
    "Top terms to memorize",
    "Mock signals"
  ].forEach((heading) => {
    body = removeMarkdownSection(body, heading);
  });
  body = removeMarkdownSection(body, "Study card data");
  body = body.replace(/<!-- STUDY_ENRICHMENT_START -->\s*/g, "");
  body = body.replace(/<!-- STUDY_ENRICHMENT_END -->/g, "");
  body = promoteDeepDiveChapterBody(body);
  return cleanMarkdownFragment(body);
}

function nvidiaFallbackChapterMarkdown(title, fallback = {}) {
  const keyIdeas = fallback.keyIdeas || fallback.mustKnow || [];
  return [
    fallback.description ? `## What this chapter is about\n\n${fallback.description}` : "",
    keyIdeas.length ? `## Core ideas\n\n${keyIdeas.map((item) => `- ${item}`).join("\n")}` : "",
    fallback.use ? `## When this is the right chapter\n\n${fallback.use}` : "",
    fallback.traps ? `## Exam traps\n\n${fallback.traps}` : "",
    fallback.scenario ? `## Recognition clues\n\n${fallback.scenario}` : ""
  ].filter(Boolean).join("\n\n").trim() || `## ${title}\n\nOpen the reference material below while this chapter loads.`;
}

function markdownHeadingEntries(markdown, levels = [2, 3], limit = 14) {
  const wanted = new Set(levels);
  const entries = [];
  let inFence = false;
  for (const line of String(markdown || "").split("\n")) {
    if (/^```/.test(line.trim())) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const match = line.match(/^(#{1,6})\s+(.+?)\s*$/);
    if (!match) continue;
    const level = match[1].length;
    const title = match[2].trim();
    if (wanted.has(level) && !/^deep dive contents$/i.test(title)) {
      entries.push({ title, level });
    }
    if (entries.length >= limit) break;
  }
  return entries;
}

function scrollToNvidiaChapterHeading(title) {
  const headings = [...document.querySelectorAll(".nvidia-topic-chapter-content .md-h")];
  const target = headings.find((node) => node.textContent.trim() === title);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function NvidiaChapterSectionMap({ markdown, kind = "section" }) {
  const entries = markdownHeadingEntries(markdown);
  if (entries.length < 3) return null;
  return h("nav", { className: "nvidia-chapter-section-map", "aria-label": "Study section map" },
    h("div", { className: "nvidia-chapter-section-map-head" },
      h("span", null, kind === "section" ? "Section map" : "Page map"),
      h("strong", null, kind === "section" ? "This exam section is split into study subtopics" : "Jump through this page")
    ),
    h("div", { className: "nvidia-chapter-section-map-list" },
      entries.map((entry) => h("button", {
        key: `${entry.level}-${entry.title}`,
        type: "button",
        className: entry.level > 2 ? "nested" : "",
        onClick: () => scrollToNvidiaChapterHeading(entry.title)
      }, entry.title))
    )
  );
}

function NvidiaChapterArticle({ state, title, fallback = {}, kind = "section", missingPath = "" }) {
  const renderOptions = {
    autoHighlight: true,
    highlightSeen: new Set(),
    highlightCount: { value: 0 },
    maxHighlights: kind === "section" ? 34 : 26
  };
  const body = state.status === "ok"
    ? nvidiaChapterBodyFromMarkdown(state.markdown)
    : "";
  const isStub = state.status === "ok" && (/status:\s*stub/i.test(state.markdown) || /Stub — populate/i.test(state.markdown));
  const articleMarkdown = body && !isStub
    ? body
    : nvidiaFallbackChapterMarkdown(title, fallback);
  return h("section", {
    id: kind === "section" ? "nvidia-section-chapter" : `nvidia-${kind}-chapter`,
    className: `nvidia-topic-chapter-body nvidia-${kind}-chapter-body`
  },
    h("div", { className: "nvidia-topic-chapter-lede" },
      h("span", null, kind === "section" ? "Book chapter" : "Service chapter"),
      h("h2", null, kind === "section" ? "What this chapter is really testing" : "How this service works"),
      state.status === "loading" || state.status === "idle"
        ? h("p", null, "Loading the full chapter text...")
        : state.status === "missing"
          ? h("p", null,
              "No markdown source was found yet",
              missingPath ? [" at ", h("code", { key: "path" }, missingPath)] : "",
              ". The chapter summary below stays visible while the source is added."
            )
          : fallback.description ? h("p", null, renderInline(fallback.description, renderOptions)) : null
    ),
    h(NvidiaChapterCodeCallout, { title, kind, markdown: state.markdown }),
    h(NvidiaChapterSectionMap, { markdown: articleMarkdown, kind }),
    h("div", { className: "nvidia-topic-chapter-content" }, renderMarkdown(articleMarkdown, renderOptions))
  );
}

function NvidiaReferencePanel({ summary = "Open compact reference material", subtitle = "", children }) {
  const items = React.Children.toArray(children).filter(Boolean);
  if (!items.length) return null;
  return h("details", { className: "nvidia-reference-tabs" },
    h("summary", null,
      h("span", null, summary),
      subtitle ? h("em", null, subtitle) : null
    ),
    h("div", { className: "nvidia-reference-tabs-body" }, items)
  );
}

function NvidiaServiceFilterStrip({
  sectionFilters,
  activeSectionFilter,
  onSectionFilter,
  familyGroups,
  activeFamily,
  onFamily,
  services,
  selectedServiceName,
  onService
}) {
  return h("section", { className: "nvidia-service-filter-strip", "aria-label": "NVIDIA service filters" },
    h("label", null,
      h("span", null, "Exam chapter"),
      h("select", {
        className: "service-jump-select",
        value: activeSectionFilter,
        onChange: (event) => onSectionFilter(event.target.value)
      },
        sectionFilters.map((filter) => h("option", { key: filter, value: filter }, filter === "All" ? "All chapters" : filter))
      )
    ),
    h("label", null,
      h("span", null, "Service family"),
      h("select", {
        className: "service-jump-select",
        value: activeFamily,
        onChange: (event) => onFamily(event.target.value)
      },
        ["All", ...familyGroups.map((group) => group.name)].map((group) => h("option", { key: group, value: group }, group))
      )
    ),
    h("label", null,
      h("span", null, "Open service page"),
      h("select", {
        className: "service-jump-select",
        value: services.some((service) => service.name === selectedServiceName) ? selectedServiceName : "",
        disabled: !services.length,
        onChange: (event) => {
          if (event.target.value) onService(event.target.value);
        }
      },
        h("option", { value: "", disabled: true }, services.length ? "Choose a service..." : "No services match"),
        services.map((service, index) => h("option", { key: service.name, value: service.name },
          `${String(index + 1).padStart(2, "0")} · ${service.name}`
        ))
      )
    ),
    h("div", { className: "nvidia-service-filter-count" },
      h("strong", null, services.length),
      h("span", null, services.length === 1 ? "service visible" : "services visible")
    )
  );
}

function NvidiaServiceIndex({ services, selectedService, onSelectService, currentExamLabel }) {
  if (!services?.length) {
    return h("section", { className: "nvidia-service-index" },
      h("div", { className: "nvidia-service-index-head" },
        h("span", null, "Service pages"),
        h("h2", null, "No services match these filters")
      )
    );
  }
  return h("section", { className: "nvidia-service-index" },
    h("div", { className: "nvidia-service-index-head" },
      h("span", null, "Service pages"),
      h("h2", null, "Open one focused service chapter"),
      h("p", null, `These are NVIDIA product boundaries for ${currentExamLabel}. Use them after you know the exam chapter concept.`)
    ),
    h("div", { className: "nvidia-service-table", role: "list" },
      services.map((service, index) => h("button", {
        key: service.name,
        type: "button",
        className: `nvidia-service-table-row ${serviceGroupClass(service)} ${service.name === selectedService?.name ? "active" : ""}`,
        onClick: () => onSelectService(service.name),
        role: "listitem",
        "aria-label": `Open service chapter: ${service.name}`,
        "aria-current": service.name === selectedService?.name ? "page" : undefined
      },
        h("span", { className: "nvidia-service-table-number" }, String(index + 1).padStart(2, "0")),
        h("span", { className: "nvidia-service-table-main" },
          h("strong", null, service.name),
          h("small", null, compactStudyText(serviceSummaryText(service), 180))
        ),
        h("span", { className: "nvidia-service-table-family" }, service.lifecycle || serviceGroupName(service)),
        h("span", { className: "nvidia-service-table-cues" },
          (service.filters || service.exams || []).slice(0, 3).map((cue) => h("em", { key: cue }, cue))
        )
      ))
    )
  );
}

function ServiceDetail({ service, certSlug, quickQuiz, generateStudyQuiz, quizDifficulty, setQuizDifficulty, studyStatus, generationStatus, cancelGeneration, branding = { serviceLabel: "Service" }, showLifecyclePriority = false, activeServiceFilter = "All", currentExamLabel = "Agentic AI", handbook = false }) {
  const isGenericStudy = service.exams?.includes("Agentic AI General");
  const markdownState = useServiceMarkdown(service.name, !isGenericStudy);
  const capabilityState = useCapabilityMarkdown(service.name, isGenericStudy);
  const study = parseStudyContent(markdownState.markdown, service, "service");
  const implementation = extractImplementationDetails(markdownState.markdown);
  const titleSummary = service.fullName || (!implementation ? study.description : "");
  const serviceSlug = topicSlug(service.name);

  if (isGenericStudy) {
    const detailIndexPrefix = `capability-${serviceSlug}`;
    const playbookIndexPrefix = `playbook-${serviceSlug}`;
    const topSections = [
      {
        title: "What it is",
        id: studySectionId(detailIndexPrefix, "What it is", 0),
        node: ServiceDecisionSnapshot({ markdown: capabilityState.markdown, mode: "summary", serviceSlug, fallback: { ...study, name: service.name, kind: "Capability" } })
      },
      {
        title: "Code and calls",
        id: studySectionId(detailIndexPrefix, "Code and calls", 1),
        node: MarkdownCodePreview({ markdown: capabilityState.markdown })
      },
      {
        title: "Lifecycle usage",
        id: studySectionId(detailIndexPrefix, "Lifecycle usage", 2),
        node: LifecycleUsagePanel({ service, activeServiceFilter, currentExamLabel })
      }
    ].filter((section) => section.node);
    const playbookIndexSections = capabilityPlaybookSectionsFromMarkdown(capabilityState.markdown)
      .map((section, index) => ({
        title: section.title,
        id: studySectionId(playbookIndexPrefix, section.title, index)
      }));
    const detailIndexSections = [
      ...topSections.map(({ title, id }) => ({ title, id })),
      ...playbookIndexSections
    ];
    return h(
      "article",
      { className: "service-detail generic-capability-detail" },
      h("div", { className: "service-detail-title" },
        h("span", null, "Study playbook"),
        h("h3", null, service.name),
        h("p", null, renderInline(serviceSummaryText(service, study.description)))
      ),
      h(StudyPageIndex, { sections: detailIndexSections, idPrefix: detailIndexPrefix, label: "Study detail index" }),
      topSections.map(({ title, id, node }) => h(SectionDetailsBlock, {
        key: id,
        id,
        className: "generic-capability-top-section",
        title
      }, node)),
      h(CapabilityPlaybook, {
        state: capabilityState,
        title: service.name,
        missingPath: `certifications/agentic_ai_general_study/capabilities/${topicSlug(service.name)}.md`,
        afterSectionTitle: "Pipeline",
        afterSection: h(RelatedVendorServiceCards, { service, compact: true }),
        idPrefix: playbookIndexPrefix,
        showIndex: false
      })
    );
  }

  const serviceReferenceContent = [
    h(ServiceDecisionSnapshot, { key: "summary", markdown: markdownState.markdown, mode: "summary", serviceSlug, fallback: { ...study, impl: implementation, kind: "Service" } }),
    h(ImplementationCards, { key: "implementation", impl: implementation }),
    h(ServiceDecisionSnapshot, { key: "details", markdown: markdownState.markdown, mode: "details", serviceSlug, fallback: { ...study, impl: implementation, kind: "Service" } }),
    h(StudyFirstPanel, { key: "first", markdown: markdownState.markdown }),
    showLifecyclePriority ? h(LifecycleUsagePanel, { key: "usage", service, activeServiceFilter, currentExamLabel }) : null,
    h(ExamDecisionCards, { key: "decision", study }),
    h(RelatedVendorServiceCards, { key: "vendors", service }),
    h(StudyDeepDive, { key: "deep", item: study })
  ].filter(Boolean);

  if (handbook) {
    return h(
      "article",
      { className: "service-detail nvidia-detail-article nvidia-handbook-article" },
      h(NvidiaReferencePanel, {
        summary: "Open quick notes, cards, and NVIDIA examples",
        subtitle: "Optional notes"
      }, serviceReferenceContent),
      h(NvidiaChapterArticle, {
        state: markdownState,
        title: service.name,
        fallback: { ...study, description: serviceSummaryText(service, study.description) },
        kind: "service",
        missingPath: `certifications/_shared/services/${topicSlug(service.name)}.md`
      })
    );
  }

  return h(
    "article",
    { className: `service-detail nvidia-detail-article ${handbook ? "nvidia-handbook-article" : ""}`.trim() },
    handbook ? null : h("div", { className: "service-detail-title" },
      h("span", null, branding.serviceLabel),
      h("h3", null, service.name),
      titleSummary ? h("p", null, renderInline(titleSummary)) : null
    ),
    serviceReferenceContent,
    handbook || (isGenericStudy && markdownState.status === "missing") ? null : h(StudyMarkdown, {
      state: markdownState,
      title: service.name,
      missingPath: `certifications/_shared/services/${topicSlug(service.name)}.md`,
      templatePath: "certifications/_SERVICE_TEMPLATE.md",
      summary: "Deep-dive notes (shared across certs)"
    })
  );
}

function RelatedVendorServiceCards({ service, compact = false }) {
  const related = service.relatedVendorServices || [];
  if (!related.length) return null;
  return h("section", { className: `vendor-map service-section${compact ? " vendor-map-compact" : ""}` },
    h("div", { className: "service-section-heading" },
      h("span", null, "Platform map"),
      h("h4", null, "Implementation examples")
    ),
    h("div", { className: "vendor-card-grid" },
      related.map((item) => h("article", { key: `${item.vendor}-${item.service}`, className: `vendor-card vendor-${topicSlug(item.vendor)}` },
        h("span", null, item.vendor),
        h("strong", null, expandNvidiaAcronyms(item.service)),
        h("p", null, item.role)
      ))
    )
  );
}

function examLabelForSection(section, certSlug) {
  if (section?.exam) return section.exam;
  if (certSlug === "agentic_ai_professional") return "Agentic AI";
  if (certSlug === "genai_llms_professional") return "GenAI LLMs";
  return "";
}

function sectionNvidiaServiceGuide(section, certSlug) {
  const examLabel = examLabelForSection(section, certSlug);
  const entries = SECTION_NVIDIA_SERVICE_GUIDES[examLabel]?.[section?.name] || [];
  return entries
    .map(([name, purpose]) => {
      const service = serviceByName(name);
      if (!service) return null;
      return { service, purpose };
    })
    .filter(Boolean);
}

function SectionNvidiaServiceGuide({ section, certSlug }) {
  const items = sectionNvidiaServiceGuide(section, certSlug);
  if (!items.length) return null;
  const isAgentic = examLabelForSection(section, certSlug) === "Agentic AI";
  const isPlatformSection = section?.name === "NVIDIA Platform Implementation";
  const compact = isAgentic && !isPlatformSection;
  const body = h(React.Fragment, null,
    h("div", { className: "section-service-guide-head" },
      h("span", null, compact ? "NVIDIA examples" : "NVIDIA platform map"),
      h("h4", null, compact ? "Only use these when the question names NVIDIA products" : "Services to know in this section"),
      h("p", null, compact
        ? "Most of this exam section is concept-first. Open this only when product wording appears in the stem or answer choices."
        : "This is the one section where NVIDIA product mapping is the main study target.")
    ),
    h("div", {
      className: `section-service-guide-flow${items.length > 5 ? " is-multirow" : ""}${compact ? " is-compact" : ""}`,
      "aria-label": compact ? "Conditional NVIDIA service examples" : "NVIDIA service flow, read left to right"
    },
      items.flatMap(({ service, purpose }, index) => {
        const card = h("article", {
          key: service.name,
          className: `section-service-guide-card ${serviceGroupClass(service)}`
        },
          h("span", { className: "section-service-guide-step" }, compact ? "Example" : `Step ${index + 1}`),
          h("div", { className: "section-service-guide-card-title" },
            h("strong", null, service.name),
            h("span", null, service.lifecycle || serviceGroupName(service))
          ),
          h("p", null, renderInline(purpose))
        );
        if (compact || index === items.length - 1) return [card];
        return [
          card,
          h("div", { key: `${service.name}-arrow`, className: "section-service-guide-arrow", "aria-hidden": "true" }, "->")
        ];
      })
    )
  );
  if (compact) {
    return h(
      "details",
      { className: "section-block section-service-guide section-service-guide-conditional" },
      h("summary", null, "Conditional NVIDIA product examples"),
      body
    );
  }
  return h(
    "section",
    { className: "section-block section-service-guide" },
    body
  );
}

function SectionDetailsBlock({ id = null, className = "", title, open = false, children }) {
  return h("details", { id, className: `section-block ${className}`.trim(), open },
    h("summary", null, title),
    children
  );
}

function studySectionId(prefix, title, index) {
  return `${prefix}-${topicSlug(title)}-${index}`;
}

function openStudySection(sectionId) {
  const target = document.getElementById(sectionId);
  if (!target) return;
  if (target.tagName.toLowerCase() === "details") target.open = true;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function StudyPageIndex({ sections, idPrefix, label = "Page index" }) {
  const items = (sections || []).filter((section) => section?.title);
  if (items.length < 2) return null;
  return h("nav", { className: "study-page-index", "aria-label": label },
    h("span", null, label),
    h("div", { className: "study-page-index-grid" },
      items.map((section, index) => {
        const sectionId = section.id || studySectionId(idPrefix, section.title, index);
        return h("button", {
          key: sectionId,
          type: "button",
          "aria-controls": sectionId,
          onClick: () => openStudySection(sectionId)
        }, renderInline(section.title));
      })
    )
  );
}

function SectionDetail({ section, certSlug, quickQuiz, generateStudyQuiz, quizDifficulty, setQuizDifficulty, studyStatus, generationStatus, cancelGeneration, handbook = false }) {
  const markdownState = useTopicMarkdown(certSlug, section.name);
  const study = parseStudyContent(markdownState.markdown, section, "section");
  const isGenericStudy = certSlug === "agentic_ai_general_study";
  const sectionReferenceContent = [
    h(StudyFirstPanel, { key: "first", markdown: markdownState.markdown }),
    h(ServiceDecisionSnapshot, { key: "summary", markdown: markdownState.markdown, mode: "summary", serviceSlug: topicSlug(section.name), fallback: { ...study, name: study.name || section.name, kind: "Topic" } }),
    h(MarkdownCodePreview, { key: "code", markdown: markdownState.markdown }),
    h("div", { key: "map", className: "study-map section-map" },
      h("section", { className: "identity" },
        h("span", null, "Key ideas"),
        h("div", { className: "idea-chips" }, study.keyIdeas.map((idea) => h("span", { key: idea }, renderInline(idea))))
      ),
      h("section", { className: "use" },
        h("span", null, "Study when"),
        h("p", null, renderInline(study.use))
      ),
      h("section", { className: "avoid" },
        h("span", null, "Real trap"),
        h("p", null, renderInline(study.traps))
      ),
      h("section", { className: "scenario" },
        h("span", null, "Recognition clues"),
        h("p", null, renderInline(study.scenario))
      )
    ),
    h(SectionNvidiaServiceGuide, { key: "service-guide", section, certSlug }),
    study.studyNotes.length ? h(SectionDetailsBlock, { key: "notes", className: "section-study-notes", title: "Study notes" },
      h("ul", null, study.studyNotes.map((item) =>
        h("li", { key: item }, renderInline(item))
      ))
    ) : null,
    study.mustKnow.length ? h(SectionDetailsBlock, { key: "must", className: "section-must-know", title: "Must know" },
      h("div", { className: "must-know-grid" }, study.mustKnow.map((item) =>
        h("div", { className: "must-know-card", key: item }, renderDefinitionItem(item))
      ))
    ) : null,
    study.decisionGuide ? h(SectionDetailsBlock, { key: "decision", className: "section-table-block", title: "Decision guide" },
      h("div", { className: "section-table-wrap" },
        h("table", null,
          h("thead", null, h("tr", null, study.decisionGuide.header.map((cell, j) => h("th", { key: j }, renderInline(cell))))),
          h("tbody", null, study.decisionGuide.rows.map((row, j) =>
            h("tr", { key: j }, row.map((cell, k) => h("td", { key: k }, renderInline(cell))))
          ))
        )
      )
    ) : null,
    study.commonConfusions ? h(SectionDetailsBlock, { key: "confusions", className: "section-table-block section-confusions", title: "Common confusions" },
      h("div", { className: "section-table-wrap" },
        h("table", null,
          h("thead", null, h("tr", null, study.commonConfusions.header.map((cell, j) => h("th", { key: j }, renderInline(cell))))),
          h("tbody", null, study.commonConfusions.rows.map((row, j) =>
            h("tr", { key: j }, row.map((cell, k) => h("td", { key: k }, renderInline(cell))))
          ))
        )
      )
    ) : null,
    study.miniScenarios.length ? h(SectionDetailsBlock, { key: "scenarios", className: "section-scenarios", title: "Mini scenario drill" },
      study.miniScenarios.map((s) =>
        h("div", { className: "scenario-card", key: s.num },
          h("p", { className: "scenario-text" },
            h("strong", null, `${s.num}.`), " ", renderInline(s.scenario)
          ),
          h("p", { className: "scenario-best" },
            h("strong", null, "Best answer pattern: "), renderInline(s.bestAnswer)
          ),
          h("p", { className: "scenario-trap" },
            h("strong", null, "Trap: "), renderInline(s.trap)
          )
        )
      )
    ) : null,
    study.examSignals.length ? h(SectionDetailsBlock, { key: "signals", className: "section-signals", title: "What to recognize" },
      h("div", { className: "signal-tags" }, study.examSignals.map((sig) =>
        h("span", { className: "signal-tag", key: sig }, renderInline(sig))
      ))
    ) : null,
    study.handsOn.length ? h(SectionDetailsBlock, { key: "hands", className: "section-hands-on", title: "Hands-on checks" },
      h("ol", { className: "checklist" }, study.handsOn.map((item) =>
        h("li", { className: "checklist-item", key: item }, renderInline(item))
      ))
    ) : null
  ].filter(Boolean);

  if (handbook) {
    return h(
      "article",
      { className: "service-detail nvidia-detail-article nvidia-handbook-article" },
      h(NvidiaReferencePanel, {
        summary: "Open quick notes, cards, and NVIDIA examples",
        subtitle: "Optional notes"
      }, sectionReferenceContent),
      h(NvidiaChapterArticle, {
        state: markdownState,
        title: section.name,
        fallback: { ...study, description: study.description || section.description },
        kind: "section",
        missingPath: `certifications/${certSlug}/topics/${topicSlug(section.name)}.md`
      })
    );
  }

  return h(
    "article",
    { className: `service-detail nvidia-detail-article ${handbook ? "nvidia-handbook-article" : ""}`.trim() },
    handbook ? null : h("div", { className: "service-detail-title" },
      h("span", null, `Exam section · ${study.weight}%`),
      h("h3", null, study.name || section.name),
      h("p", null, renderInline(study.description))
    ),
    sectionReferenceContent,
    isGenericStudy && markdownState.status === "missing" ? null : h(StudyMarkdown, {
      state: markdownState,
      title: section.name,
      missingPath: `certifications/${certSlug}/topics/${topicSlug(section.name)}.md`,
      templatePath: "certifications/_TOPIC_TEMPLATE.md",
      summary: "Deep-dive notes",
      defaultOpen: false
    })
  );
}

function renderDefinitionItem(item) {
  const match = String(item || "").match(/^\*\*(.+?)\*\*\s*(?::|—|-)\s*(.+)$/);
  if (!match) return h("span", null, renderInline(item));
  return [
    h("strong", { key: "term" }, match[1]),
    h("span", { key: "desc" }, renderInline(match[2]))
  ];
}

function topicSlug(name) {
  return String(name).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function useServiceMarkdown(serviceName, enabled = true) {
  const [state, setState] = useState({ status: "idle", markdown: "" });
  const slug = topicSlug(serviceName);
  useEffect(() => {
    if (!enabled) {
      setState({ status: "idle", markdown: "" });
      return undefined;
    }
    let cancelled = false;
    setState({ status: "loading", markdown: "" });
    fetch(`/api/service?slug=${encodeURIComponent(slug)}`)
      .then((r) => r.ok ? r.json() : Promise.reject(r.status))
      .then((data) => { if (!cancelled) setState({ status: "ok", markdown: data.markdown || "" }); })
      .catch(() => { if (!cancelled) setState({ status: "missing", markdown: "" }); });
    return () => { cancelled = true; };
  }, [slug, enabled]);
  return state;
}

function useCapabilityMarkdown(serviceName, enabled = true) {
  const [state, setState] = useState({ status: "idle", markdown: "" });
  const slug = topicSlug(serviceName);
  useEffect(() => {
    if (!enabled) {
      setState({ status: "idle", markdown: "" });
      return undefined;
    }
    let cancelled = false;
    setState({ status: "loading", markdown: "" });
    fetch(`/api/capability?slug=${encodeURIComponent(slug)}`)
      .then((r) => r.ok ? r.json() : Promise.reject(r.status))
      .then((data) => { if (!cancelled) setState({ status: "ok", markdown: data.markdown || "" }); })
      .catch(() => { if (!cancelled) setState({ status: "missing", markdown: "" }); });
    return () => { cancelled = true; };
  }, [slug, enabled]);
  return state;
}

function useTopicMarkdown(certSlug, sectionName) {
  const [state, setState] = useState({ status: "idle", markdown: "" });
  useEffect(() => {
    let cancelled = false;
    setState({ status: "loading", markdown: "" });
    const slug = topicSlug(sectionName);
    fetch(`/api/topic?cert=${encodeURIComponent(certSlug)}&slug=${encodeURIComponent(slug)}`)
      .then((r) => r.ok ? r.json() : Promise.reject(r.status))
      .then((data) => { if (!cancelled) setState({ status: "ok", markdown: data.markdown || "" }); })
      .catch(() => { if (!cancelled) setState({ status: "missing", markdown: "" }); });
    return () => { cancelled = true; };
  }, [certSlug, sectionName]);
  return state;
}

function stripFrontmatter(markdown) {
  return String(markdown || "").replace(/^---[\s\S]*?---\s*/, "").trim();
}

function parseFrontmatter(markdown) {
  const match = String(markdown || "").match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return {};
  return Object.fromEntries(match[1].split("\n").map((line) => {
    const parts = line.match(/^([^:]+):\s*(.*)$/);
    if (!parts) return null;
    return [parts[1].trim(), parts[2].trim().replace(/^["']|["']$/g, "")];
  }).filter(Boolean));
}

function markdownTitle(markdown) {
  return stripFrontmatter(markdown).match(/^#\s+(.+)$/m)?.[1]?.trim() || "";
}

function normalizeHeadingName(value) {
  return String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
}

function cleanMarkdownFragment(text) {
  const lines = String(text || "").replace(/\r\n/g, "\n").split("\n");
  const cleaned = [];
  let inFence = false;
  for (const line of lines) {
    if (/^```/.test(line.trim())) {
      inFence = !inFence;
      cleaned.push(line);
      continue;
    }
    if (!inFence && /^(?:-{3,}|\*{3,}|_{3,})$/.test(line.trim())) continue;
    cleaned.push(line);
  }
  return cleaned.join("\n").trim();
}

function markdownSections(markdown) {
  const lines = stripFrontmatter(markdown).split("\n");
  const sections = {};
  for (let i = 0; i < lines.length; i += 1) {
    const match = lines[i].match(/^(#{2,4})\s+(.+?)\s*$/);
    if (!match) continue;
    const level = match[1].length;
    const title = match[2].trim();
    const buf = [];
    let j = i + 1;
    while (j < lines.length) {
      const next = lines[j].match(/^(#{2,4})\s+(.+?)\s*$/);
      if (next && next[1].length <= level) break;
      buf.push(lines[j]);
      j += 1;
    }
    sections[normalizeHeadingName(title)] = { title, level, content: cleanMarkdownFragment(buf.join("\n")) };
  }
  return sections;
}

function generatedBlock(markdown) {
  const generated = String(markdown || "").match(/<!-- STUDY_ENRICHMENT_START -->([\s\S]*?)<!-- STUDY_ENRICHMENT_END -->/)?.[1];
  if (generated) return generated;
  return markdownSections(markdown)[normalizeHeadingName("Study card data")]?.content || "";
}

function valueFromCardData(block, label) {
  const match = block.match(new RegExp(`^- \\*\\*${label}:\\*\\*\\s*(.+)$`, "im"));
  return match?.[1]?.trim() || "";
}

function listFromCardData(block, heading) {
  const lines = String(block || "").split("\n");
  const start = lines.findIndex((line) => line.trim().toLowerCase() === `### ${heading}`.toLowerCase());
  if (start === -1) return [];
  const collected = [];
  for (let i = start + 1; i < lines.length; i += 1) {
    if (/^#{2,3}\s+/.test(lines[i])) break;
    collected.push(lines[i]);
  }
  return collected.join("\n")
    .split("\n")
    .map((line) => line.replace(/^\s*[-*]\s+/, "").trim())
    .filter(Boolean);
}

function tableFromCardData(block, heading) {
  const lines = String(block || "").split("\n");
  const start = lines.findIndex((line) => line.trim().toLowerCase() === `### ${heading}`.toLowerCase());
  if (start === -1) return null;
  let tableStart = -1;
  for (let i = start + 1; i < lines.length; i++) {
    if (lines[i].includes("|")) { tableStart = i; break; }
    if (/^#{2,3}\s+/.test(lines[i])) return null;
  }
  if (tableStart === -1) return null;
  if (!lines[tableStart + 1] || !/^\s*\|?\s*-{2,}/.test(lines[tableStart + 1])) return null;
  const header = lines[tableStart].split("|").map((s) => s.trim()).filter(Boolean);
  let i = tableStart + 2;
  const rows = [];
  while (i < lines.length && lines[i].includes("|") && lines[i].trim() && !/^#{2,3}\s+/.test(lines[i])) {
    let cells = lines[i].split("|").map((s) => s.trim());
    if (cells[0] === "") cells = cells.slice(1);
    if (cells[cells.length - 1] === "") cells = cells.slice(0, -1);
    rows.push(cells);
    i++;
  }
  const normRows = rows.map((r) => {
    while (r.length < header.length) r.push("");
    return r.slice(0, header.length);
  });
  return { header, rows: normRows };
}

function scenariosFromCardData(block, heading) {
  const lines = String(block || "").split("\n");
  const start = lines.findIndex((line) => line.trim().toLowerCase() === `### ${heading}`.toLowerCase());
  if (start === -1) return [];
  const scenarios = [];
  let cur = null;
  let curField = null;
  for (let i = start + 1; i < lines.length; i++) {
    const line = lines[i];
    if (/^#{2,3}\s+/.test(line)) break;
    const sm = line.trim().match(/^(\d+)\.\s+Scenario:\s*(.+)$/i);
    if (sm) {
      if (cur) scenarios.push(cur);
      cur = { num: sm[1], scenario: sm[2].trim(), bestAnswer: "", trap: "" };
      curField = null;
      continue;
    }
    if (!cur) continue;
    const bm = line.trim().match(/^Best answer pattern:\s*(.+)$/i);
    const tm = line.trim().match(/^Trap:\s*(.+)$/i);
    if (bm) { cur.bestAnswer = bm[1].trim(); curField = "bestAnswer"; }
    else if (tm) { cur.trap = tm[1].trim(); curField = "trap"; }
    else if (line.trim() && curField) { cur[curField] += " " + line.trim(); }
  }
  if (cur) scenarios.push(cur);
  return scenarios;
}

const STRUCTURED_STUDY_HEADINGS = [
  "What to study first",
  "Study card data",
  "Study notes",
  "Must know",
  "Decision guide",
  "Common confusions",
  "Mini scenario drill",
  "What to recognize",
  "Hands-on checks",
  "Study tips from practice questions"
];

function removeMarkdownSections(markdown, headings) {
  const names = new Set(headings.map(normalizeHeadingName));
  const lines = String(markdown || "").split("\n");
  const out = [];
  let skipLevel = 0;
  for (const line of lines) {
    const heading = line.match(/^(#{2,4})\s+(.+?)\s*$/);
    if (heading) {
      const level = heading[1].length;
      if (skipLevel && level <= skipLevel) skipLevel = 0;
      if (!skipLevel && names.has(normalizeHeadingName(heading[2]))) {
        skipLevel = level;
        continue;
      }
    }
    if (!skipLevel) out.push(line);
  }
  return out.join("\n");
}

function markdownBodyForStudy(markdown, { removeStructured = true } = {}) {
  let body = stripFrontmatter(markdown);
  body = removeMarkdownSection(body, "At a glance");
  body = removeMarkdownSection(body, "Actual implementation / How you use it");
  body = removeMarkdownSection(body, "Mock signals");
  if (removeStructured) body = removeMarkdownSections(body, STRUCTURED_STUDY_HEADINGS);
  body = body.replace(/<!-- STUDY_ENRICHMENT_START -->\s*/g, "");
  body = body.replace(/<!-- STUDY_ENRICHMENT_END -->/g, "");
  return body.trim();
}

function extractImplementationDetails(markdown) {
  if (!markdown) return null;
  const sections = markdownSections(markdown);
  const section =
    sections[normalizeHeadingName("Actual implementation / How you use it")]?.content ||
    sections[normalizeHeadingName("At a glance")]?.content ||
    "";
  if (!section.trim()) return null;
  const fields = {};
  const rowRe = /\|\s*\*\*(.+?)\*\*\s*\|\s*(.+?)\s*\|/g;
  let rm;
  while ((rm = rowRe.exec(section)) !== null) fields[rm[1].trim()] = rm[2].trim();
  const codeBlocks = [];
  const codeRe = /```(\w*)\n([\s\S]*?)```/g;
  let cm;
  while ((cm = codeRe.exec(section)) !== null) codeBlocks.push({ lang: cm[1] || "text", code: cm[2].trim() });
  const mentalMatch = section.match(/\*\*Mental model\*\*:\s*(.+)/);
  const whatItIs = fields["What it is technically"] || fields["What it is"] || "";
  const inputOutput = fields["Input → Output"] || fields["Input -> Output"] || "";
  const input = fields["Typical input"] || fields["Input"] || inputOutput.match(/Input:\s*(.+?)(?:<br>|Output:|$)/i)?.[1]?.trim() || "";
  const output = fields["Typical output"] || fields["Output"] || inputOutput.match(/Output:\s*(.+)$/i)?.[1]?.trim() || "";
  const mentalModel = fields["One-line mental model"] || (mentalMatch ? mentalMatch[1].trim() : "");
  if (!whatItIs && !fields["How you access it"] && !input && !output && !codeBlocks.length && !mentalModel) return null;
  return {
    whatItIs,
    howToAccess: fields["How you access it"] || "",
    input,
    output,
    inside: fields["Inside"] || "",
    handoff: fields["Data / artifact handoff"] || fields["Data and artifact handoff"] || fields["Handoff"] || "",
    nextStep: fields["What happens next"] || fields["Next step"] || fields["After output"] || "",
    codeBlocks,
    mentalModel
  };
}

function removeMarkdownSection(markdown, heading) {
  const lines = String(markdown || "").split("\n");
  const out = [];
  let skipping = false;
  for (const line of lines) {
    if (line.trim().toLowerCase() === `## ${heading}`.toLowerCase()) {
      skipping = true;
      continue;
    }
    if (skipping && (/^##\s+/.test(line) || /^<!-- STUDY_ENRICHMENT_START -->/.test(line))) {
      skipping = false;
    }
    if (!skipping) out.push(line);
  }
  return out.join("\n");
}

function parseStudyContent(markdown, fallback, kind) {
  const block = generatedBlock(markdown);
  const frontmatter = parseFrontmatter(markdown);
  const isService = kind === "service";
  const title = markdownTitle(markdown) || fallback.name || fallback.title || "";
  const description = valueFromCardData(block, isService ? "What it is" : "What it covers") || fallback.description || "";
  const lifecycle = valueFromCardData(block, "Lifecycle") || fallback.lifecycle || fallback.exam || frontmatter.domain || "";
  const exams = valueFromCardData(block, "Relevant exams") || (fallback.exams || [fallback.exam]).filter(Boolean).join(", ");
  const mustKnow = listFromCardData(block, "Must know");
  const decisionGuide = tableFromCardData(block, "Decision guide");
  const commonConfusions = tableFromCardData(block, "Common confusions");
  const miniScenarios = scenariosFromCardData(block, "Mini scenario drill");
  const explicitKeyIdeas = listFromCardData(block, "Key ideas");
  const compactKeyIdeas = explicitKeyIdeas.length
    ? explicitKeyIdeas.slice(0, 4)
    : mustKnow.slice(0, 4).map((item) => item.match(/^\*\*(.+?)\*\*/)?.[1] || item).filter(Boolean);
  return {
    ...fallback,
    title,
    name: title || fallback.name,
    weight: Number(frontmatter.weight) || fallback.weight,
    status: frontmatter.status || fallback.status,
    description,
    lifecycle,
    where: isService ? `${serviceGroupName(fallback)} · ${exams}` : `${frontmatter.domain || fallback.exam} · ${Number(frontmatter.weight) || fallback.weight}%`,
    use: valueFromCardData(block, isService ? "Use it when" : "Use this section when") || fallback.use || "",
    avoid: valueFromCardData(block, "Do not use it when") || fallback.avoid || "",
    traps: valueFromCardData(block, "Common trap") || fallback.traps || "",
    scenario: valueFromCardData(block, "Scenario signal") || valueFromCardData(block, "Recognition clues") || fallback.scenario || "",
    studyNotes: listFromCardData(block, "Study notes").length ? listFromCardData(block, "Study notes") : (fallback.studyNotes || []),
    mustKnow: mustKnow.length ? mustKnow : (fallback.mustKnow || fallback.keyIdeas || []),
    keyIdeas: compactKeyIdeas.length ? compactKeyIdeas : (fallback.keyIdeas || fallback.mustKnow || []),
    examSignals: listFromCardData(block, "What to recognize").length ? listFromCardData(block, "What to recognize") : (fallback.examSignals || []),
    handsOn: listFromCardData(block, "Hands-on checks").length ? listFromCardData(block, "Hands-on checks") : (fallback.handsOn || []),
    relatedServices: listFromCardData(block, "Related services").length ? listFromCardData(block, "Related services") : (fallback.relatedServices || []),
    decisionGuide,
    commonConfusions,
    miniScenarios
  };
}

function splitMarkdownByHeading(markdown, levels = [2]) {
  const wanted = new Set(levels);
  const lines = String(markdown || "").split("\n");
  const prelude = [];
  const sections = [];
  let current = null;
  let inFence = false;

  for (const line of lines) {
    if (/^```/.test(line.trim())) {
      inFence = !inFence;
      (current ? current.lines : prelude).push(line);
      continue;
    }
    const heading = !inFence ? line.match(/^(#{1,6})\s+(.+?)\s*$/) : null;
    const level = heading ? heading[1].length : 0;
    if (heading && wanted.has(level)) {
      if (current) sections.push({ ...current, content: cleanMarkdownFragment(current.lines.join("\n")) });
      current = { level, title: heading[2].trim(), lines: [] };
      continue;
    }
    (current ? current.lines : prelude).push(line);
  }
  if (current) sections.push({ ...current, content: cleanMarkdownFragment(current.lines.join("\n")) });
  return { prelude: cleanMarkdownFragment(prelude.join("\n")), sections };
}

function renderCollapsibleMarkdownSections(markdown, options = {}) {
  const sectionLevels = options.sectionLevels || [2];
  const nestedLevels = options.nestedLevels || [3];
  const openTitles = options.openTitles || new Set();
  const idPrefix = options.idPrefix || "study-section";
  const { prelude, sections } = splitMarkdownByHeading(markdown, sectionLevels);
  if (!sections.length) return renderMarkdown(markdown, options);

  const nodes = [];
  if (prelude) {
    nodes.push(h("div", { key: "prelude", className: "md-section-prelude" }, renderMarkdown(prelude, options)));
  }
  sections.forEach((section, index) => {
    const sectionId = studySectionId(idPrefix, section.title, index);
    const nested = splitMarkdownByHeading(section.content, nestedLevels);
    const hasNested = nested.sections.length >= 2;
    const body = hasNested
      ? [
          nested.prelude ? h("div", { key: "nested-prelude", className: "md-section-prelude" }, renderMarkdown(nested.prelude, options)) : null,
          ...nested.sections.map((nestedSection, nestedIndex) => h("details", {
            id: studySectionId(sectionId, nestedSection.title, nestedIndex),
            key: `${nestedSection.title}-${nestedIndex}`,
            className: "md-section-details md-section-details-nested"
          },
            h("summary", null, renderInline(nestedSection.title, options)),
            h("div", { className: "md-section-body" }, renderMarkdown(nestedSection.content, options))
          ))
        ].filter(Boolean)
      : renderMarkdown(section.content, options);
    nodes.push(h("details", {
      id: sectionId,
      key: `${section.title}-${index}`,
      className: "md-section-details",
      open: openTitles.has(section.title)
    },
      h("summary", null, renderInline(section.title, options)),
      h("div", { className: "md-section-body" }, body)
    ));
  });
  return nodes;
}

function StudyMarkdown({ state, title, missingPath, templatePath, summary, removeStructured = true, defaultOpen = null }) {
  if (state.status === "loading" || state.status === "idle") return null;
  if (state.status === "missing") {
    return h("div", { className: "topic-md missing" },
      h("p", { className: "muted" },
        `No deep-dive markdown yet for "${title}". Create `,
        h("code", null, missingPath),
        ` from `,
        h("code", null, templatePath),
        ".")
    );
  }
  const isStub = /status:\s*stub/i.test(state.markdown) || /Stub — populate/i.test(state.markdown);
  if (isStub) {
    return h("details", { className: "topic-md missing" },
      h("summary", null, "Markdown source is ready to edit"),
      h("p", { className: "muted" },
        "Deep-dive content will render here after you replace the TODOs in ",
        h("code", null, missingPath),
        ".")
    );
  }
  const body = markdownBodyForStudy(state.markdown, { removeStructured });
  const shouldOpen = defaultOpen ?? false;
  const idPrefix = `markdown-${topicSlug(title)}`;
  return h("details", { className: "topic-md", open: shouldOpen },
    h("summary", null, summary),
    h(MarkdownOutline, { markdown: body, idPrefix }),
    h("div", { className: "topic-md-body" }, renderCollapsibleMarkdownSections(body, { idPrefix }))
  );
}

const CAPABILITY_PLAYBOOK_SECTIONS = [
  "What to study first",
  "What You Are Building",
  "Pipeline",
  "Core Concepts",
  "Decision Guide",
  "Lifecycle Lane Playbooks",
  "Common Traps",
  "Deep Dive",
  "Platform Examples",
  "Exam Signals",
  "Hands-on Checks"
];

function capabilityPlaybookSectionsFromMarkdown(markdown) {
  const sections = markdownSections(markdown);
  return CAPABILITY_PLAYBOOK_SECTIONS
    .map((sectionTitle) => ({ title: sectionTitle, section: sections[normalizeHeadingName(sectionTitle)] }))
    .filter(({ section }) => section?.content);
}

function CapabilityPlaybook({
  state,
  title,
  missingPath,
  afterSectionTitle,
  afterSection,
  idPrefix: idPrefixOverride = null,
  showIndex = true,
  indexLabel = "Playbook index",
  defaultOpenFirst = false,
  className = ""
}) {
  if (state.status === "loading" || state.status === "idle") {
    return h("div", { className: "capability-playbook loading" },
      h("p", { className: "muted" }, "Loading study playbook...")
    );
  }
  if (state.status === "missing") {
    return h("div", { className: "topic-md missing" },
      h("p", { className: "muted" },
        `No study playbook yet for "${title}". Create `,
        h("code", null, missingPath),
        ".")
    );
  }
  const body = stripFrontmatter(state.markdown).replace(/^#\s+.+\n+/, "").trim();
  const availableSections = capabilityPlaybookSectionsFromMarkdown(state.markdown);
  const idPrefix = idPrefixOverride || `playbook-${topicSlug(title)}`;
  const renderedSections = availableSections.map(({ title: sectionTitle, section }, index) => {
    const sectionId = studySectionId(idPrefix, sectionTitle, index);
    const shouldInsertAfterSection = afterSection && normalizeHeadingName(sectionTitle) === normalizeHeadingName(afterSectionTitle);
    return h("details", {
      id: sectionId,
      key: sectionTitle,
      className: `playbook-section playbook-${topicSlug(sectionTitle)}`,
      open: defaultOpenFirst && index === 0
    },
      h("summary", null, sectionTitle),
      h("div", { className: "playbook-section-body" },
        renderCollapsibleMarkdownSections(section.content, {
          autoHighlight: true,
          sectionLevels: [3],
          nestedLevels: [4],
          openTitles: new Set(),
          idPrefix: `${sectionId}-sub`
        }),
        shouldInsertAfterSection ? h("div", { className: "playbook-inline-map" }, afterSection) : null
      )
    );
  }).filter(Boolean);
  if (!renderedSections.length) {
    return h("div", { className: `capability-playbook ${className}`.trim() },
      h("div", { className: "playbook-section-body" }, renderMarkdown(body, { autoHighlight: true }))
    );
  }
  return h("div", { className: `capability-playbook ${className}`.trim() },
    showIndex ? h(StudyPageIndex, { sections: availableSections, idPrefix, label: indexLabel }) : null,
    renderedSections
  );
}

function MarkdownOutline({ markdown, idPrefix }) {
  const { sections } = splitMarkdownByHeading(markdown, [2]);
  const visibleSections = sections.filter((section) => !/^deep dive contents$/i.test(section.title));
  return h(StudyPageIndex, { sections: visibleSections, idPrefix, label: "Deep-dive index" });
}

// Tiny markdown renderer (no deps). Handles: # h1-h4, paragraphs, bullet/numbered
// lists, blockquote, fenced code, inline `code`, **bold**, *italic*, [text](url), and
// pipe tables. Output is a tree of React elements — no innerHTML.
function isMarkdownTableStart(lines, index) {
  const line = lines[index] || "";
  const next = lines[index + 1] || "";
  return line.includes("|") && /^\s*\|?\s*-{2,}/.test(next);
}

function renderMarkdown(text, options = {}) {
  const lines = String(text || "").replace(/\r\n/g, "\n").split("\n");
  const renderOptions = options.autoHighlight
    ? {
        ...options,
        highlightSeen: options.highlightSeen || new Set(),
        highlightCount: options.highlightCount || { value: 0 },
        maxHighlights: options.maxHighlights ?? 6
      }
    : options;
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i += 1; continue; }
    if (/^<!--[\s\S]*?-->\s*$/.test(line.trim())) { i += 1; continue; }
    if (/^(?:-{3,}|\*{3,}|_{3,})$/.test(line.trim())) { i += 1; continue; }
    // Fenced code
    if (/^```/.test(line)) {
      const buf = [];
      i += 1;
      while (i < lines.length && !/^```/.test(lines[i])) { buf.push(lines[i]); i += 1; }
      i += 1;
      blocks.push({ type: "code", text: buf.join("\n") });
      continue;
    }
    // Collapsible detail block, used by study notes for optional mock references.
    if (/^<details>\s*$/.test(line.trim())) {
      let summary = "Details";
      const buf = [];
      i += 1;
      if (i < lines.length) {
        const summaryMatch = lines[i].trim().match(/^<summary>(.+)<\/summary>$/);
        if (summaryMatch) {
          summary = summaryMatch[1].trim();
          i += 1;
        }
      }
      while (i < lines.length && !/^<\/details>\s*$/.test(lines[i].trim())) {
        buf.push(lines[i]);
        i += 1;
      }
      if (i < lines.length) i += 1;
      blocks.push({ type: "details", summary, text: buf.join("\n") });
      continue;
    }
    // Heading
    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      blocks.push({ type: "h", level: heading[1].length, text: heading[2].trim() });
      i += 1;
      continue;
    }
    // Blockquote (collect contiguous)
    if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        buf.push(lines[i].replace(/^>\s?/, ""));
        i += 1;
      }
      blocks.push({ type: "quote", text: buf.join(" ") });
      continue;
    }
    // Table (line + separator + rows)
    if (isMarkdownTableStart(lines, i)) {
      const header = line.split("|").map((s) => s.trim()).filter(Boolean);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].includes("|") && lines[i].trim()) {
        let cells = lines[i].split("|").map((s) => s.trim());
        if (cells[0] === "") cells = cells.slice(1);
        if (cells[cells.length - 1] === "") cells = cells.slice(0, -1);
        rows.push(cells);
        i += 1;
      }
      // Normalize: ensure each row has exactly header.length cells
      const norm = rows.map((r) => {
        const cells = r;
        while (cells.length < header.length) cells.push("");
        return cells.slice(0, header.length);
      });
      blocks.push({ type: "table", header, rows: norm });
      continue;
    }
    // List
    if (/^\s*[-*]\s+/.test(line) || /^\s*\d+\.\s+/.test(line)) {
      const ordered = /^\s*\d+\.\s+/.test(line);
      const listLinePattern = ordered ? /^\s*\d+\.\s+/ : /^\s*[-*]\s+/;
      const items = [];
      while (i < lines.length) {
        if (listLinePattern.test(lines[i])) {
          items.push(lines[i].replace(/^\s*(?:\d+\.|[-*])\s+/, ""));
          i += 1;
          continue;
        }
        if (!lines[i].trim()) {
          let nextListIndex = i + 1;
          while (nextListIndex < lines.length && !lines[nextListIndex].trim()) nextListIndex += 1;
          if (nextListIndex < lines.length && listLinePattern.test(lines[nextListIndex])) {
            i = nextListIndex;
            continue;
          }
        }
        break;
      }
      blocks.push({ type: ordered ? "ol" : "ul", items });
      continue;
    }
    // Paragraph (collect until blank or block-y line)
    const buf = [line];
    i += 1;
    while (i < lines.length && lines[i].trim() && !isMarkdownTableStart(lines, i) && !/^(#{1,4}\s|>\s?|\s*[-*]\s|\s*\d+\.\s|```|(?:-{3,}|\*{3,}|_{3,})\s*$)/.test(lines[i].trim())) {
      buf.push(lines[i]);
      i += 1;
    }
    blocks.push({ type: "p", text: buf.join(" ") });
  }

  return blocks.map((b, idx) => {
    const key = `b${idx}`;
    switch (b.type) {
      case "h": return h(`h${Math.min(6, b.level + 2)}`, { key, className: "md-h" }, renderInline(b.text, renderOptions));
      case "p": return h("p", { key, className: "md-p" }, renderInline(b.text, renderOptions));
      case "quote": return h("blockquote", { key, className: "md-quote" }, renderInline(b.text, renderOptions));
      case "code": return h("pre", { key, className: "md-code" }, b.text);
      case "details": return h("details", { key, className: "md-details" }, h("summary", null, renderInline(b.summary, renderOptions)), h("div", { className: "md-details-body" }, renderMarkdown(b.text, renderOptions)));
      case "ul": return h("ul", { key, className: "md-ul" }, b.items.map((it, j) =>
        h("li", { key: j }, h("span", { className: "md-list-copy" }, renderListItemInline(it, renderOptions)))
      ));
      case "ol": return h("ol", { key, className: "md-ol" }, b.items.map((it, j) =>
        h("li", { key: j }, h("span", { className: "md-list-copy" }, renderListItemInline(it, renderOptions)))
      ));
      case "table":
        return h("div", { key, className: "md-table-wrap" },
          h("table", { className: "md-table" },
            h("thead", null, h("tr", null, b.header.map((cell, j) => h("th", { key: j }, renderInline(cell, renderOptions))))),
            h("tbody", null, b.rows.map((row, j) => h("tr", { key: j }, row.map((cell, k) => h("td", { key: k }, renderInline(cell, renderOptions))))))
          )
        );
      default: return null;
    }
  });
}

const PLAYBOOK_RISK_TERMS = [
  "benchmark leakage", "train/test overlap", "prompt injection", "jailbreak", "data leakage",
  "contamination", "PII", "secrets", "toxicity", "unsafe", "license", "licenses",
  "hallucination", "overfitting", "forgetting", "high-risk", "privacy"
];

const PLAYBOOK_KEY_TERMS = [
  "RAG ingestion", "tool gateway", "model registry", "human review", "dataset card",
  "dataset cards", "model card", "model cards", "source lineage", "evaluation holdout",
  "continued pretraining", "pretraining", "fine-tuning", "preference tuning",
  "SFT", "PEFT", "LoRA", "DPO", "GRPO", "RAG", "ACL", "MinHash", "LSH", "SHA-256",
  "MD5", "deduplication", "fuzzy dedupe", "exact dedupe", "redaction",
  "holdout", "lineage", "provenance", "structured outputs", "output schema",
  "instruction hierarchy", "few-shot examples", "idempotency", "permissions",
  "approval gate", "approval gates", "rollback", "canary", "routing", "batching",
  "p95", "p99", "latency", "cost", "quality", "guardrails", "policy", "observability", "tool calls",
  "hosted API", "open-weight model", "open-weight", "self-hosted endpoint",
  "NeMo Customizer", "NeMo microservice", "API-driven model customization",
  "base Model Entity", "Dataset FileSet", "customization job", "LoRA adapter",
  "fine-tuned Model Entity", "managed fine-tuning",
  "base checkpoint", "tuned adapter", "tuned adapters", "embedding model",
  "reasoning model", "multimodal model", "model artifact", "model artifacts",
  "base model", "base models", "API", "APIs", "checkpoint", "checkpoints",
  "context length", "modality", "modalities", "serving path", "serving paths",
  "task examples", "license constraints", "data residency", "deployment environment",
  "auditability", "failure modes", "eval report", "eval reports",
  "evals", "risk approval", "FP16", "BF16",
  "FP8", "INT8", "INT4", "quantized", "distilled", "adapter-backed",
  "tool-specialized", "MoE", "rollback-ready", "ReAct", "execution layer",
  "supervisor", "orchestrator", "planning gate", "state machine",
  "graph", "workflow", "peer-to-peer", "blackboard", "BDI",
  "plan-and-execute", "human escalation", "risk-based routing",
  "approval gates", "centralized state", "tool boundary", "tool boundaries",
  "working memory", "episodic memory", "semantic memory", "retrieval",
  "reranking", "citations", "chunking", "embeddings", "schema validation"
];

const PLAYBOOK_HIGHLIGHT_PATTERN = new RegExp(
  `(${[...PLAYBOOK_RISK_TERMS, ...PLAYBOOK_KEY_TERMS]
    .sort((a, b) => b.length - a.length)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")})`,
  "gi"
);

function playbookHighlightClass(value) {
  const normalized = String(value || "").toLowerCase();
  return PLAYBOOK_RISK_TERMS.some((term) => term.toLowerCase() === normalized)
    ? "md-riskterm"
    : "md-keyterm";
}

function isHighlightBoundary(source, index, length) {
  const before = index > 0 ? source[index - 1] : "";
  const after = index + length < source.length ? source[index + length] : "";
  return !/[A-Za-z0-9]/.test(before) && !/[A-Za-z0-9]/.test(after);
}

function renderHighlightedPlain(text, options = {}) {
  const source = String(text || "");
  const out = [];
  let lastIdx = 0;
  let key = 0;
  const keyPrefix = options.highlightKeyPrefix || "hl";
  let match;
  PLAYBOOK_HIGHLIGHT_PATTERN.lastIndex = 0;
  while ((match = PLAYBOOK_HIGHLIGHT_PATTERN.exec(source)) !== null) {
    const normalized = match[0].toLowerCase();
    if (!isHighlightBoundary(source, match.index, match[0].length)) continue;
    if (options.highlightSeen?.has(normalized)) continue;
    if (options.highlightCount && options.highlightCount.value >= (options.maxHighlights ?? 6)) continue;
    if (match.index > lastIdx) out.push(source.slice(lastIdx, match.index));
    out.push(h("mark", { key: `${keyPrefix}${key++}`, className: playbookHighlightClass(match[0]) }, match[0]));
    options.highlightSeen?.add(normalized);
    if (options.highlightCount) options.highlightCount.value += 1;
    lastIdx = match.index + match[0].length;
  }
  if (lastIdx < source.length) out.push(source.slice(lastIdx));
  return out;
}

function renderListItemInline(text, options = {}) {
  const source = String(text || "");
  if (options.autoHighlight) {
    const leadMatch = source.match(/^([^:]{2,72}):\s+(.+)$/);
    if (leadMatch && !/^https?:\/\//i.test(leadMatch[1])) {
      const leadText = leadMatch[1].trim().replace(/^\*\*(.+)\*\*$/, "$1");
      return [
        h("strong", { key: "lead", className: "md-lead" }, renderInline(leadText, { ...options, autoHighlight: false })),
        ": ",
        ...renderInline(leadMatch[2], options)
      ];
    }
  }
  return renderInline(source, options);
}

function safeMarkdownHref(href) {
  const value = String(href || "").trim();
  if (!value) return null;
  if (/^(#|\/(?!\/)|\.{1,2}\/)/.test(value)) return value;
  try {
    const parsed = new URL(value, window.location.origin);
    if (["http:", "https:", "mailto:"].includes(parsed.protocol)) return value;
  } catch {
    return null;
  }
  return null;
}

function renderInline(text, options = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*\s](?:[^*]*?[^*\s])?\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let lastIdx = 0;
  let key = 0;
  let m;
  const source = String(text || "")
    .replace(/;\.{2,}/g, "...")
    .replace(/\.;/g, ".")
    .replace(/,;/g, ",");
  while ((m = re.exec(source)) !== null) {
    if (m.index > lastIdx) {
      const plain = source.slice(lastIdx, m.index);
      out.push(...(options.autoHighlight ? renderHighlightedPlain(plain, { ...options, highlightKeyPrefix: `h${key++}-` }) : [plain]));
    }
    const tok = m[0];
    if (tok.startsWith("**")) out.push(h("strong", { key: `i${key++}` }, tok.slice(2, -2)));
    else if (tok.startsWith("`")) out.push(h("code", { key: `i${key++}` }, tok.slice(1, -1)));
    else if (tok.startsWith("[")) {
      const linkMatch = tok.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      const href = safeMarkdownHref(linkMatch[2]);
      out.push(href
        ? h("a", { key: `i${key++}`, href, target: "_blank", rel: "noreferrer" }, linkMatch[1])
        : linkMatch[1]);
    }
    else if (tok.startsWith("*")) out.push(h("em", { key: `i${key++}` }, tok.slice(1, -1)));
    lastIdx = m.index + tok.length;
  }
  if (lastIdx < source.length) {
    const plain = source.slice(lastIdx);
    out.push(...(options.autoHighlight ? renderHighlightedPlain(plain, { ...options, highlightKeyPrefix: `h${key++}-` }) : [plain]));
  }
  return out;
}

function StudyDeepDive({ item, generic = false }) {
  const groups = [
      [generic ? "Mental model" : "Study path", item.studyNotes],
      ["Core ideas", item.mustKnow],
      ["When to use it", item.examSignals],
      [generic ? "Practice checks" : "Practice task", item.handsOn],
      [generic ? "Related capabilities" : "Nearby services", item.relatedServices]
  ].filter(([, values]) => Array.isArray(values) && values.length);

  if (!groups.length) return null;
  return h(
    "div",
    { className: "study-deep-dive service-section" },
    h("div", { className: "service-section-heading" },
      h("span", null, generic ? "Study notes" : "Study guide"),
      h("h4", null, generic ? "Build the mental model" : "Build a working model of the service")
    ),
    h("div", { className: "study-deep-dive-grid" },
      groups.map(([label, values]) => h(
        "article",
        { key: label, className: `study-group ${topicSlug(label)}` },
        h("h5", null, label),
        h("ul", null, values.map((value) => h("li", { key: value }, renderInline(label === "Related capabilities" || label === "Nearby services" ? expandNvidiaAcronyms(value) : value))))
      ))
    )
  );
}

function practiceStudyByOptions(isGenericStudy, currentExamLabel = "Agentic AI") {
  const isAgenticExam = currentExamLabel === "Agentic AI";
  const options = [
    { value: "recommended", label: "Recommended" },
    { value: "section", label: "Exam section" },
    { value: "service", label: isGenericStudy ? "Playbook" : "NVIDIA service" }
  ];
  options.push({ value: "lifecycle", label: isAgenticExam ? "Concept map" : "Lifecycle path" });
  options.push({ value: "keyword", label: "Keyword" });
  return options;
}

function cleanLifecycleLabel(label) {
  return String(label || "").replace(/^(Core|Secondary|Reference):\s*/, "");
}

function agenticLifecycleOptions(label = "Agentic AI") {
  const flow = LIFECYCLE_FLOWS[label] || LIFECYCLE_FLOWS["Agentic AI"];
  const stages = flow?.stages || [];
  const isAgenticExam = label === "Agentic AI";
  return [
    { lane: "__all__", label: isAgenticExam ? "All concept-map lanes" : "All lifecycle paths", stages },
    ...Object.keys(flow?.lanes || {}).map((lane) => ({
    lane,
    label: cleanLifecycleLabel(lane),
    stages: stages.filter((stage) => stage.lane === lane)
    }))
  ];
}

function buildPracticeTarget({ studyBy, domainName, serviceName, lifecycleLane, keyword, lifecycleLabel = "Agentic AI" }) {
  if (studyBy === "section") {
    if (!domainName || domainName === "__all__") {
      return {
        label: "All exam sections",
        keywords: [],
        all: true,
        topic: `All ${lifecycleLabel} blueprint sections.`,
        service: null
      };
    }
    return {
      label: domainName,
      domain: domainName,
      keywords: [],
      topic: `${lifecycleLabel} blueprint section: ${domainName}.`,
      service: null
    };
  }
  if (studyBy === "service") {
    if (serviceName === "__all__") {
      return {
        label: lifecycleLabel === "Agentic AI General" ? "All study playbooks" : "All NVIDIA services",
        keywords: [],
        all: true,
        topic: lifecycleLabel === "Agentic AI General"
          ? "All general study playbooks and capability questions."
          : lifecycleLabel === "Agentic AI"
            ? "All NVIDIA services that are useful for Agentic AI exam concepts."
            : `All ${lifecycleLabel} NVIDIA services and lifecycle questions.`,
        service: null
      };
    }
    const service = serviceByName(serviceName);
    if (!service) return { label: "selected service", keywords: [], topic: "", service: null };
    return {
      label: service.name,
      keywords: [service.name, service.lifecycle, ...(service.keywords || [])],
      topic: service.quizPrompt || service.scenario || service.name,
      service
    };
  }
  if (studyBy === "lifecycle") {
    const options = agenticLifecycleOptions(lifecycleLabel);
    const option = options.find((item) => item.lane === lifecycleLane) || options[0];
    const stages = option?.stages || [];
    const isAgenticExam = lifecycleLabel === "Agentic AI";
    if (option?.lane === "__all__") {
      return {
        label: isAgenticExam ? "All exam concept lanes" : "All lifecycle paths",
        keywords: [],
        all: true,
        topic: isAgenticExam ? "All Agentic AI exam concept-map lanes." : `All ${lifecycleLabel} lifecycle paths.`,
        service: null
      };
    }
    const tools = stages.flatMap((stage) => [...(stage.tools || []), ...(stage.optionalTools || [])]);
    const stageNames = stages.flatMap((stage) => [stage.name, stage.context, stage.note]);
    const label = option?.label || `${lifecycleLabel} lifecycle`;
    return {
      label,
      keywords: [label, lifecycleLane, ...stageNames, ...tools],
      topic: isAgenticExam
        ? `Agentic AI exam concept lane: ${label}. Concepts: ${stages.map((stage) => `${stage.name} (${stage.context})`).join("; ")}. NVIDIA examples if named: ${[...new Set(tools)].join(", ")}.`
        : `${lifecycleLabel} lifecycle: ${label}. Stages: ${stages.map((stage) => `${stage.name} (${stage.context})`).join("; ")}. Tools: ${[...new Set(tools)].join(", ")}.`,
      service: null
    };
  }
  if (studyBy === "keyword") {
    const clean = String(keyword || "").trim();
    return {
      label: clean || "All keywords",
      keywords: clean ? [clean] : [],
      all: !clean,
      topic: clean || "All keyword topics in the current question bank.",
      service: null
    };
  }
  return {
    label: "recommended weak domains",
    keywords: [],
    topic: "",
    service: null
  };
}

function filteredPracticeQuestions(questions, target, studyBy) {
  if (studyBy === "recommended") return questions;
  if (target?.all) return questions;
  if (target?.domain) return questions.filter((question) => question.domain === target.domain);
  if (!target?.keywords?.length) return [];
  return questions.filter((question) => questionMatchesAnyKeyword(question, target.keywords));
}

function PracticeDrillSetup({
  count,
  setCount,
  difficulty,
  setDifficulty,
  difficultyOptions = DRILL_DIFFICULTIES,
  bankCount,
  generatedCount,
  target,
  running = false,
  generationStatus = null,
  bankLabel = "Certificate concepts",
  generatedLabel = "NVIDIA-specific",
  mixedLabel = "Recommended mix",
  bankMatchLabel = "certificate-concept",
  generatedMatchLabel = "NVIDIA-specific",
  scopeTitle = "Question scope",
  scopeHint = "General concepts vs NVIDIA-specific",
  sourceFilter = "all",
  setSourceFilter = () => {},
  sourceOptions = [],
  mockSlotCount = 0,
  onGenerateNew,
  onCancelGenerate,
  onStartBank,
  onStartGenerated,
  onStartMixed
}) {
  const bankStartCount = Math.min(count, bankCount);
  const generatedStartCount = Math.min(count, generatedCount);
  const mixedCount = bankCount + generatedCount;
  const mixedStartCount = Math.min(count, mixedCount);
  const generateCount = Math.min(count, 10);
  const targetLabel = target?.label || "selected focus";
  const startCountLabel = (start, total) => {
    if (!total) return "No match";
    if (start >= total) return `${total} match${total === 1 ? "" : "es"}`;
    return `Start ${start} of ${total}`;
  };
  return h("div", { className: "practice-drill-setup" },
    h("div", { className: "drill-selectors" },
      h("div", { className: "drill-group" },
        h("span", { className: "drill-label" }, "Count"),
        h("div", { className: "drill-chip-group" },
          DRILL_COUNTS.map((n) =>
            h("button", { key: n, type: "button", className: `drill-chip ${count === n ? "active" : ""}`, onClick: () => setCount(n) }, `${n}Q`)
          )
        )
      ),
      h("div", { className: "drill-group drill-group-diff" },
        h("span", { className: "drill-label" }, "Difficulty"),
        h("div", { className: "drill-chip-group" },
          difficultyOptions.map((d) =>
            h("button", { key: d, type: "button", className: `drill-chip drill-chip-difficulty diff-${d} ${difficulty === d ? "active" : ""}`, onClick: () => setDifficulty(d) }, d)
          )
        )
      )
    ),
    sourceOptions.length ? h("div", { className: "practice-source-filter" },
      h("div", { className: "practice-source-filter-head" },
        h("span", { className: "drill-label" }, "Question source"),
        h("em", null, "Unique drill bank plus fixed mock slots")
      ),
      h("div", { className: "practice-source-filter-actions" },
        sourceOptions.map((option) => h("button", {
          key: option.value,
          type: "button",
          className: `practice-source-filter-btn ${sourceFilter === option.value ? "active" : ""}`,
          disabled: option.count === 0,
          onClick: () => setSourceFilter(option.value)
        },
          h("strong", null, option.label),
          h("span", null, `${option.count} unique match${option.count === 1 ? "" : "es"}`),
          typeof option.slotCount === "number"
            ? h("em", null, `${option.slotCount} fixed mock slot${option.slotCount === 1 ? "" : "s"}`)
            : null
        ))
      )
    ) : null,
    h("div", { className: "practice-drill-summary" },
      h("strong", null, targetLabel),
      h("span", null, `${bankCount} ${bankMatchLabel} scope match${bankCount === 1 ? "" : "es"} · ${generatedCount} ${generatedMatchLabel} scope match${generatedCount === 1 ? "" : "es"} after source and difficulty filters`),
      h("em", null, `${mockSlotCount} fixed mock slot${mockSlotCount === 1 ? "" : "s"} after source and difficulty filters`)
    ),
    h("div", { className: "practice-drill-actions" },
      h("div", { className: "practice-source-head" },
        h("span", null, scopeTitle),
        h("em", null, scopeHint)
      ),
      h("div", { className: "practice-source-actions" },
        h("button", { type: "button", className: "pp-btn pp-btn-source pp-btn-original", disabled: !bankCount, onClick: onStartBank },
          h("strong", null, bankLabel),
          h("span", null, startCountLabel(bankStartCount, bankCount))
        ),
        h("button", { type: "button", className: "pp-btn pp-btn-source pp-btn-generated-bank", disabled: !generatedCount, onClick: onStartGenerated },
          h("strong", null, generatedLabel),
          h("span", null, startCountLabel(generatedStartCount, generatedCount))
        ),
        h("button", { type: "button", className: "pp-btn pp-btn-source pp-btn-mixed", disabled: !mixedCount || !onStartMixed, onClick: onStartMixed },
          h("strong", null, mixedLabel),
          h("span", null, startCountLabel(mixedStartCount, mixedCount))
        )
      ),
      onGenerateNew
        ? h("div", { className: "practice-generate-more" },
            h("span", null, "Need more coverage?"),
            h("button", { type: "button", className: "pp-btn pp-btn-generate-small", disabled: running, onClick: onGenerateNew },
              running ? "Generating..." : `Generate ${generateCount} new drafts`
            )
          )
        : null
    ),
    generationStatus?.message ? h("p", { className: `generation-status ${generationStatus.state}` }, generationStatus.message) : null,
    running && onCancelGenerate ? h("button", { type: "button", className: "ghost small", onClick: onCancelGenerate }, "Cancel generation") : null
  );
}

function StudyChatPanel({ certSlug, topic, examples: exampleOverride, alwaysOpen = false, compact = false, inline = false }) {
  const [open, setOpen] = useState(alwaysOpen || inline);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const inputRef = React.useRef(null);
  const requestRef = React.useRef(null);

  useEffect(() => () => {
    if (requestRef.current) requestRef.current.abort();
  }, []);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  async function send(msg) {
    const message = (msg || input).trim();
    if (!message || busy) return;
    if (requestRef.current) requestRef.current.abort();
    const controller = new AbortController();
    requestRef.current = controller;
    const timeout = setTimeout(() => controller.abort(), 35000);
    setBusy(true);
    setError('');
    const nextHistory = [...history, { role: 'user', content: message }];
    setHistory(nextHistory);
    setInput('');
    try {
      const result = await api(certPath('/api/study-chat', certSlug), {
        method: 'POST',
        signal: controller.signal,
        body: JSON.stringify({ message, topic: topic || '', history })
      });
      setHistory([...nextHistory, { role: 'assistant', content: result.reply || '(empty reply)' }]);
    } catch (err) {
      if (controller.signal.aborted) {
        setError('Request stopped. Try a shorter question.');
      } else {
        setError(coachErrorMessage(err, 'Chat failed'));
      }
    } finally {
      clearTimeout(timeout);
      if (requestRef.current === controller) requestRef.current = null;
      setBusy(false);
    }
  }

  if (!open && !inline) {
    return h('button', {
      className: 'study-chat-toggle',
      onClick: () => setOpen(true),
      type: 'button'
    }, 'Quick concept chat');
  }

  const closeBtn = alwaysOpen
    ? null
    : h('button', { className: 'helper-chat-close', onClick: () => setOpen(false), type: 'button' }, '×');

  const isGenericStudy = certSlug === "agentic_ai_general_study";
  const examples = exampleOverride?.length ? exampleOverride : isGenericStudy
    ? ['Where does MinHash fit?', 'RAG or fine-tuning?', 'What is a tool gateway?']
    : ['What is KV cache?', 'Difference between NIM and Triton?', 'When to use LoRA vs SFT?'];

  if (inline) {
    return h('div', { className: 'study-assistant-panel' },
      h('div', { className: 'study-assistant-head' },
        h('div', null,
          h('strong', null, 'Ask the tutor'),
          h('span', null, topic ? `Context: ${topic}` : isGenericStudy ? 'Vendor-neutral agentic AI concepts' : 'NVIDIA certification concepts')
        ),
        h('div', { className: 'helper-chat-examples' },
          examples.map((ex) => h('button', {
            key: ex, className: 'chip', onClick: () => send(ex), disabled: busy, type: 'button'
          }, ex))
        )
      ),
      h('div', { className: 'helper-chat-input' },
        h('textarea', {
          ref: inputRef,
          value: input,
          onChange: (e) => setInput(e.target.value),
          placeholder: topic ? `Ask about ${topic}...` : 'Ask a concept question...',
          disabled: busy,
          rows: 1,
          onKeyDown: (e) => {
            if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
          }
        }),
        h('button', {
          className: 'helper-send', type: 'button',
          disabled: busy || !input.trim(),
          onClick: () => send()
        }, busy ? 'Thinking...' : 'Send')
      ),
      busy ? h('p', { className: 'helper-chat-status' }, 'Thinking...') : null,
      error ? h('p', { className: 'helper-chat-error' }, error) : null,
      history.length
        ? h('div', { className: 'helper-chat-log' },
            history.map((turn, i) => h('div', { key: i, className: 'helper-turn ' + turn.role },
              h('strong', null, turn.role === 'user' ? 'You' : 'Tutor'),
              turn.role === 'assistant'
                ? h('div', { className: 'helper-turn-body' }, renderMarkdown(turn.content))
                : h('p', null, turn.content)
            ))
          )
        : null
    );
  }

  return h('div', { className: `study-chat-panel ${compact ? "compact-chat" : ""}` },
    h('div', { className: 'helper-chat-head' },
      h('div', null,
        h('strong', null, 'Quick chat'),
        h('span', { className: 'helper-chat-desc' }, isGenericStudy ? 'Ask anything about agentic AI builder path concepts' : 'Ask anything about NVIDIA tools or certification topics')
      ),
      closeBtn
    ),
    history.length
      ? h('div', { className: 'helper-chat-log' },
          history.map((turn, i) => h('div', { key: i, className: 'helper-turn ' + turn.role },
            h('strong', null, turn.role === 'user' ? 'You' : 'Tutor'),
            turn.role === 'assistant'
              ? h('div', { className: 'helper-turn-body' }, renderMarkdown(turn.content))
              : h('p', null, turn.content)
          ))
        )
      : h('div', { className: 'helper-chat-welcome' },
          compact ? null : h('p', null, topic ? 'Ask anything about ' + topic + (isGenericStudy ? ' or related builder path topics.' : ' or related NVIDIA topics.') : isGenericStudy ? 'Ask anything about agentic AI builder paths, tools, RAG, serving, or governance.' : 'Ask anything about NVIDIA tools, LLMs, or certification concepts.'),
          h('div', { className: 'helper-chat-examples' },
            examples.map((ex) => h('button', {
              key: ex, className: 'chip', onClick: () => send(ex), disabled: busy, type: 'button'
            }, ex))
          )
        ),
    busy ? h('p', { className: 'helper-chat-status' }, 'Thinking…') : null,
    error ? h('p', { className: 'helper-chat-error' }, error) : null,
    h('div', { className: 'helper-chat-input' },
      h('textarea', {
        ref: inputRef,
        value: input,
        onChange: (e) => setInput(e.target.value),
        placeholder: 'Ask a concept question…',
        disabled: busy,
        rows: compact ? 1 : 2,
        onKeyDown: (e) => {
          if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
        }
      }),
      h('button', {
        className: 'helper-send', type: 'button',
        disabled: busy || !input.trim(),
        onClick: () => send()
      }, busy ? 'Thinking…' : 'Send')
    ),
    h('p', { className: 'helper-chat-hint' }, 'Enter to send · Shift+Enter for new line')
  );
}

function groupMocksBySource(availableMocks = []) {
  const original = availableMocks.filter((m) => (m.source || "original") === "original");
  const generated = availableMocks.filter((m) => (m.source || "original") === "generated");
  return { original, generated };
}

function questionsById(questions = []) {
  return new Map((questions || []).map((question) => [question.id, question]));
}

function mockSlotQuestions(availableMocks = [], questionMap = new Map(), sourceFilter = "all") {
  return availableMocks
    .filter((mock) => sourceFilter === "all" || (mock.source || "original") === sourceFilter)
    .flatMap((mock) => (mock.questionIds || []).map((id) => questionMap.get(id)).filter(Boolean));
}

function countMockSlots({ availableMocks = [], questionMap = new Map(), sourceFilter = "all", target, studyBy, difficulty = "any" }) {
  const slotQuestions = mockSlotQuestions(availableMocks, questionMap, sourceFilter);
  return questionsForDifficulty(filteredPracticeQuestions(slotQuestions, target, studyBy), difficulty).length;
}

function sourceLabel(source, variant = "mock") {
  if (variant === "drill") return source === "generated" ? "Generated drills" : "Saved drills";
  return source === "generated" ? "Generated mocks" : "Downloaded mocks";
}

function mockSetSummary(mocks, variant = "mock") {
  const totalQuestions = mocks.reduce((sum, mock) => sum + (mock.questionCount || 0), 0);
  if (variant === "drill") return `${mocks.length} set${mocks.length === 1 ? "" : "s"} · ${totalQuestions} total questions`;
  return `${mocks.length} test${mocks.length === 1 ? "" : "s"} · ${totalQuestions} total questions`;
}

function mockPickerOptionLabel(mock, variant = "mock") {
  const parts = [mock.name, `${mock.questionCount} questions`];
  if (variant !== "drill") {
    parts.push(mock.durationMinutes ? `${mock.durationMinutes} min` : "untimed");
  }
  return parts.join(" · ");
}

function switchMockSource({ source, availableMocks, setSelectedMockSource, setSelectedMockId }) {
  const nextMock = availableMocks.find((m) => (m.source || "original") === source);
  setSelectedMockSource(source);
  if (nextMock) setSelectedMockId(nextMock.id);
}

function MockSourceControl({ availableMocks = [], selectedMockSource = "original", setSelectedMockSource, setSelectedMockId, variant = "mock" }) {
  const groups = groupMocksBySource(availableMocks);
  const sources = ["original", "generated"].filter((source) => groups[source].length);
  if (!sources.length) return null;
  return h("div", { className: "mock-source-control" },
    h("span", { className: "mock-control-label" }, variant === "drill" ? "Drill source" : "Mock type"),
    h("div", { className: "mock-source-tabs" },
      sources.map((source) => h("button", {
        key: source,
        type: "button",
        className: `mock-source-tab ${selectedMockSource === source ? "active" : ""}`,
        onClick: () => switchMockSource({ source, availableMocks, setSelectedMockSource, setSelectedMockId })
      },
        h("strong", null, sourceLabel(source, variant)),
        h("span", null, mockSetSummary(groups[source], variant))
      ))
    )
  );
}

function MockPicker({ availableMocks = [], selectedMockId = "mock_1", setSelectedMockId = () => {}, selectedMockSource = "original", setSelectedMockSource = () => {}, actionLabel = "Start", onAction, disabled = false, variant = "mock" }) {
  const hasSelectedSource = availableMocks.some((m) => (m.source || "original") === selectedMockSource);
  const effectiveSource = hasSelectedSource ? selectedMockSource : (availableMocks[0]?.source || "original");
  const sourceMocks = availableMocks.filter((m) => (m.source || "original") === effectiveSource);
  const selectedMock = sourceMocks.find((m) => m.id === selectedMockId) || sourceMocks[0] || availableMocks[0];
  return h("div", { className: "mock-picker" },
    h(MockSourceControl, { availableMocks, selectedMockSource: effectiveSource, setSelectedMockSource, setSelectedMockId, variant }),
    h("label", { className: "mock-select-label" },
      h("span", null, variant === "drill" ? "Choose drill set" : "Choose mock test"),
      h("select", {
        className: "pp-select pp-select-full",
        value: selectedMock?.id || selectedMockId,
        onChange: (e) => setSelectedMockId(e.target.value),
        disabled: !sourceMocks.length
      },
        sourceMocks.map((m) => h("option", { key: `${m.source}-${m.id}`, value: m.id }, mockPickerOptionLabel(m, variant)))
      )
    ),
    selectedMock?.description ? h("p", { className: "mock-picker-desc" }, selectedMock.description) : null,
    onAction
      ? h("button", { className: "pp-btn pp-btn-primary pp-btn-full", disabled: disabled || !selectedMock, onClick: onAction },
          selectedMock ? `${actionLabel} ${selectedMock.name}` : actionLabel
        )
      : null
  );
}

function PracticePanel(props) {
  const { exam, dashboard, learnerProfile, startFlow, startQuestionDrill, generateQuestions, generationStatus, cancelGeneration,
    availableMocks = [], selectedMockId, setSelectedMockId, selectedMockSource, setSelectedMockSource,
    selectedCertSlug, refreshExam } = props;
  const hasBank = exam.questions.length > 0;
  const approvedDraftCount = exam.approvedGeneratedIds?.length || 0;
  const pendingCount = exam.pendingGeneratedIds?.length || 0;
  const mockGroups = groupMocksBySource(availableMocks);
  const practiceBankCount = Array.isArray(exam.practicePoolIds) && exam.practicePoolIds.length ? exam.practicePoolIds.length : exam.questions.length;
  const isGenericStudy = exam.certification.code === "AAI-GEN";
  const currentExamLabel = examLabel(exam);
  const scopeConfig = practiceScopeConfig(exam);
  const practiceServices = sortServices(nvidiaServices.filter((service) => service.exams.includes(currentExamLabel)));
  const lifecycleOptions = agenticLifecycleOptions(currentExamLabel);
  const studyByOptions = practiceStudyByOptions(isGenericStudy, currentExamLabel).filter((option) => option.value !== "recommended");
  const defaultStudyBy = studyByOptions[0]?.value || "keyword";
  const sectionOptions = [{ name: "__all__", label: "All exam sections" }, ...(exam.domains || []).map((domain) => ({ name: domain.name, label: domain.name }))];
  const sectionOptionsKey = sectionOptions.map((option) => option.name).join("|");
  const [studyBy, setStudyBy] = useState(defaultStudyBy);
  const [domainName, setDomainName] = useState("__all__");
  const [serviceName, setServiceName] = useState("__all__");
  const [lifecycleLane, setLifecycleLane] = useState(lifecycleOptions[0]?.lane || "");
  const [keyword, setKeyword] = useState("");
  const [drillCount, setDrillCount] = useState(10);
  const [drillDifficulty, setDrillDifficulty] = useState("any");
  const [drillSource, setDrillSource] = useState("all");
  useEffect(() => {
    if (!studyByOptions.some((option) => option.value === studyBy)) {
      setStudyBy(defaultStudyBy);
    }
    if (domainName !== "__all__" && !sectionOptions.some((option) => option.name === domainName)) {
      setDomainName("__all__");
    }
    if (serviceName !== "__all__" && practiceServices.length && !practiceServices.some((service) => service.name === serviceName)) {
      setServiceName("__all__");
    }
    if (lifecycleOptions.length && !lifecycleOptions.some((option) => option.lane === lifecycleLane)) {
      setLifecycleLane(lifecycleOptions[0].lane);
    }
  }, [studyByOptions, studyBy, defaultStudyBy, sectionOptionsKey, domainName, practiceServices, serviceName, lifecycleOptions, lifecycleLane]);
  const practiceIdSet = idSet(Array.isArray(exam.practicePoolIds) && exam.practicePoolIds.length ? exam.practicePoolIds : exam.questions.map((q) => q.id));
  const practicePool = exam.questions.filter((q) => practiceIdSet.has(q.id));
  const allConceptPool = practicePool.filter((q) => !scopeConfig.isSecondary(q));
  const allNvidiaSpecificPool = practicePool.filter((q) => scopeConfig.isSecondary(q));
  const sourceFilteredPracticePool = questionsForSource(practicePool, drillSource);
  const conceptPool = sourceFilteredPracticePool.filter((q) => !scopeConfig.isSecondary(q));
  const nvidiaSpecificPool = sourceFilteredPracticePool.filter((q) => scopeConfig.isSecondary(q));
  const originalBankCount = allConceptPool.length;
  const generatedPracticeCount = allNvidiaSpecificPool.length;
  const bankDrillLabel = scopeConfig.primaryLabel;
  const generatedDrillLabel = scopeConfig.secondaryLabel;
  const mixedDrillLabel = scopeConfig.mixedLabel;
  const bankMatchLabel = scopeConfig.primaryMatchLabel;
  const generatedMatchLabel = scopeConfig.secondaryMatchLabel;
  const mixProfile = mixedSourceProfile(currentExamLabel);
  const generatedSourceLabel = approvedDraftCount
    ? `${countPhrase(generatedPracticeCount, scopeConfig.secondaryCountLabel)} · ${approvedDraftCount} approved draft${approvedDraftCount === 1 ? "" : "s"}`
    : countPhrase(generatedPracticeCount, scopeConfig.secondaryCountLabel);
  const target = buildPracticeTarget({ studyBy, domainName, serviceName, lifecycleLane, keyword, lifecycleLabel: currentExamLabel });
  const bankMatches = filteredPracticeQuestions(conceptPool, target, studyBy);
  const generatedMatches = filteredPracticeQuestions(nvidiaSpecificPool, target, studyBy);
  const allTargetMatches = filteredPracticeQuestions(practicePool, target, studyBy);
  const canUseStudyFilters = ["Agentic AI", "Agentic AI General", "GenAI LLMs"].includes(currentExamLabel);
  const difficultyOptions = DRILL_DIFFICULTIES.filter((difficulty) => {
    if (difficulty === "any") return true;
    return questionsForDifficulty(allTargetMatches, difficulty).length > 0;
  });
  const difficultyOptionsKey = difficultyOptions.join("|");
  useEffect(() => {
    if (!difficultyOptions.includes(drillDifficulty)) {
      setDrillDifficulty(difficultyOptions.includes("any") ? "any" : difficultyOptions[0] || "any");
    }
  }, [difficultyOptionsKey, drillDifficulty]);
  const bankDifficultyMatches = questionsForDifficulty(bankMatches, drillDifficulty);
  const generatedDifficultyMatches = questionsForDifficulty(generatedMatches, drillDifficulty);
  const questionMap = useMemo(() => questionsById(exam.questions), [exam.questions]);
  const currentMockSlotCount = countMockSlots({
    availableMocks,
    questionMap,
    sourceFilter: drillSource,
    target,
    studyBy,
    difficulty: "any"
  });
  const currentDifficultyMockSlotCount = countMockSlots({
    availableMocks,
    questionMap,
    sourceFilter: drillSource,
    target,
    studyBy,
    difficulty: drillDifficulty
  });
  const sourceFilterOptions = PRACTICE_SOURCE_FILTERS.map((option) => ({
    ...option,
    count: questionsForDifficulty(questionsForSource(allTargetMatches, option.value), drillDifficulty).length,
    slotCount: countMockSlots({
      availableMocks,
      questionMap,
      sourceFilter: option.value,
      target,
      studyBy,
      difficulty: drillDifficulty
    })
  }));
  const sourceFilterOptionsKey = sourceFilterOptions.map((option) => `${option.value}:${option.count}`).join("|");
  useEffect(() => {
    const selectedSource = sourceFilterOptions.find((option) => option.value === drillSource);
    if (selectedSource && selectedSource.value !== "all" && selectedSource.count === 0) {
      setDrillSource("all");
    }
  }, [sourceFilterOptionsKey, drillSource]);
  const weakDomainNames = new Set((dashboard.weak || []).map((domain) => domain.name));
  const weakBankPool = allConceptPool.filter((question) => weakDomainNames.has(question.domain));
  const weakGeneratedPool = allNvidiaSpecificPool.filter((question) => weakDomainNames.has(question.domain));
  const recommendedMixedGuidedPool = buildBalancedMixedQuestions(
    weakBankPool.length ? weakBankPool : allConceptPool,
    weakGeneratedPool.length ? weakGeneratedPool : allNvidiaSpecificPool,
    ADAPTIVE_PRACTICE_TARGET * 3,
    mixProfile.conceptShare
  );
  function startRecommendedMixedGuided() {
    startTargetedGuidedPractice({
      questions: recommendedMixedGuidedPool,
      label: "recommended mixed weak-area practice",
      flowName: "practice-coach-mixed"
    });
  }
  function startConceptGuided() {
    startTargetedGuidedPractice({
      questions: weakBankPool.length ? weakBankPool : allConceptPool,
      label: scopeConfig.primaryLabel.toLowerCase(),
      flowName: "practice-coach-bank"
    });
  }
  function startNvidiaGuided() {
    startTargetedGuidedPractice({
      questions: weakGeneratedPool.length ? weakGeneratedPool : allNvidiaSpecificPool,
      label: scopeConfig.secondaryLabel.toLowerCase(),
      flowName: "practice-coach-generated"
    });
  }
  function startMixedDrill() {
    const questions = buildBalancedMixedQuestions(bankDifficultyMatches, generatedDifficultyMatches, drillCount, mixProfile.conceptShare);
    startQuestionDrill({
      questions,
      label: `${target.label} recommended mix`,
      count: questions.length,
      difficulty: "any",
      flowName: "practice-mixed"
    });
  }
  const profileRecommendations = h(ProfileRecommendations, { dashboard, learnerProfile, isGenericStudy });

  const recommendedReviewGrid = h("div", { className: `practice-overview-grid ${canUseStudyFilters ? "practice-overview-secondary" : ""}` },
    h("div", { className: "pp-card pp-card-guided pp-card-feature guided-plan-card" },
      h("div", { className: "pp-card-body" },
        h("span", { className: "pp-badge pp-badge-guided" }, "Recommended"),
        h("h3", null, "Recommended mixed practice"),
        h("p", null, `${mixProfile.description} It starts from your weak domains first, then keeps the scope mix close to the study-guide shape.`),
        h("div", { className: "guided-mix-summary" },
          h("span", null, h("strong", null, `${mixProfile.conceptPercent}%`), ` ${scopeConfig.primaryPercentLabel}`),
          h("span", null, h("strong", null, `${mixProfile.nvidiaPercent}%`), ` ${scopeConfig.secondaryPercentLabel}`)
        )
      ),
      h("div", { className: "pp-card-foot guided-plan-actions" },
        h("button", {
          className: "pp-btn pp-btn-primary pp-btn-full",
          disabled: !recommendedMixedGuidedPool.length,
          onClick: startRecommendedMixedGuided
        }, `Start recommended mix (${ADAPTIVE_PRACTICE_TARGET}Q)`),
        h("div", { className: "guided-secondary-actions" },
          h("button", {
            className: "pp-btn",
            disabled: !hasBank || !allConceptPool.length,
            onClick: startConceptGuided
          }, scopeConfig.primaryActionLabel),
          generatedPracticeCount
            ? h("button", {
                className: "pp-btn",
                onClick: startNvidiaGuided
              }, scopeConfig.secondaryActionLabel)
            : h("span", { className: "pp-card-hint" }, scopeConfig.noSecondaryLabel)
        )
      )
    ),
    h("div", { className: "pp-side-panel practice-review-panel" },
      h("div", { className: "pp-side-head" },
        h("span", { className: "pp-badge pp-badge-review" }, "Review"),
        h("h3", null, isGenericStudy ? "Generated drill review" : "Mock test review")
      ),
      h("p", { className: "muted" }, isGenericStudy
        ? "Review fixed generated study sets. Separate from the Study By filter below."
        : "Review fixed mock tests separately from the focused drills below."),
      h(MockPicker, {
        availableMocks,
        selectedMockId,
        setSelectedMockId,
        selectedMockSource,
        setSelectedMockSource,
        actionLabel: "Review",
        variant: isGenericStudy ? "drill" : "mock",
        disabled: !hasBank,
        onAction: () => startFlow("practice-mock")
      })
    )
  );

  const focusedPracticeControls = canUseStudyFilters ? h("section", { className: "practice-focus-section" },
    h("div", { className: "pp-card pp-card-drill pp-card-feature practice-focus-card practice-focus-unified" },
      h("div", { className: "pp-card-body" },
        h("span", { className: "pp-badge pp-badge-drill" }, "Filter"),
        h("h3", null, `Practice ${target.label}`),
        h("p", null, scopeConfig.focusDescription),
        h(PracticeScopePanel, {
          studyBy,
          setStudyBy,
          studyByOptions,
          sectionOptions,
          domainName,
          setDomainName,
          serviceLabel: isGenericStudy ? "Study playbook" : "NVIDIA service",
          keywordPlaceholder: scopeConfig.keywordPlaceholder,
          agenticServices: practiceServices,
          serviceName,
          setServiceName,
          lifecycleOptions,
          lifecycleLane,
          setLifecycleLane,
          keyword,
          setKeyword,
          bankMatches,
          generatedMatches,
          mockSlotCount: currentMockSlotCount,
          target,
          embedded: true
        })
      ),
      h("div", { className: "pp-card-foot" },
        h(PracticeDrillSetup, {
          count: drillCount,
          setCount: setDrillCount,
          difficulty: drillDifficulty,
          setDifficulty: setDrillDifficulty,
          difficultyOptions,
          bankCount: bankDifficultyMatches.length,
          generatedCount: generatedDifficultyMatches.length,
          bankLabel: bankDrillLabel,
          generatedLabel: generatedDrillLabel,
          mixedLabel: mixedDrillLabel,
          bankMatchLabel,
          generatedMatchLabel,
          scopeTitle: scopeConfig.sourceTitle,
          scopeHint: scopeConfig.sourceHint,
          sourceFilter: drillSource,
          setSourceFilter: setDrillSource,
          sourceOptions: sourceFilterOptions,
          mockSlotCount: currentDifficultyMockSlotCount,
          target,
          running: generationStatus?.state === "running",
          generationStatus,
          onCancelGenerate: cancelGeneration,
          onGenerateNew: () => generateQuestions({
            count: Math.min(drillCount, 10),
            difficulty: drillDifficulty === "any" ? "hard" : drillDifficulty,
            topic: target.topic,
            weakOnly: false,
            service: target.service || null
          }),
          onStartBank: () => startQuestionDrill({
            questions: bankMatches,
            label: target.label,
            count: drillCount,
            difficulty: drillDifficulty,
            flowName: "practice-section"
          }),
          onStartGenerated: () => startQuestionDrill({
            questions: generatedMatches,
            label: `${target.label} ${scopeConfig.secondaryLabel.toLowerCase()}`,
            count: drillCount,
            difficulty: drillDifficulty,
            flowName: "practice-generated"
          }),
          onStartMixed: startMixedDrill
        })
      )
    )
  ) : h("div", { className: "practice-main-grid" },
    h("div", { className: "practice-primary" },
      h("div", { className: "pp-card pp-card-guided pp-card-feature" },
        h("div", { className: "pp-card-body" },
          h("span", { className: "pp-badge pp-badge-guided" }, "Guided"),
          h("h3", null, "Recommended guided practice"),
          h("p", null, `${ADAPTIVE_PRACTICE_TARGET} untimed questions selected from your weakest blueprint domains, with coach explanations after each answer.`)
        ),
        h("div", { className: "pp-card-foot pp-card-actions" },
          h("button", {
            className: "pp-btn pp-btn-primary pp-btn-full",
            disabled: !hasBank || !bankMatches.length,
            onClick: () => studyBy === "recommended"
              ? startFlow("practice-coach-bank")
              : startTargetedGuidedPractice({ questions: bankMatches, label: target.label })
          },
            studyBy === "recommended" ? `Start ${ADAPTIVE_PRACTICE_TARGET}Q guided` : `Guided ${target.label}`
          ),
          generatedPracticeCount
            ? h("button", {
                className: "pp-btn pp-btn-full",
                disabled: !generatedMatches.length,
              onClick: () => studyBy === "recommended"
                ? startFlow("practice-coach-generated")
                : startTargetedGuidedPractice({ questions: generatedMatches, label: `${target.label} ${scopeConfig.secondaryLabel.toLowerCase()}` })
              }, generatedMatches.length ? `Guided ${scopeConfig.secondaryLabel} (${Math.min(ADAPTIVE_PRACTICE_TARGET, generatedMatches.length)}Q)` : `No ${scopeConfig.secondaryLabel.toLowerCase()} match`)
            : h("span", { className: "pp-card-hint" }, scopeConfig.noSecondaryLabel)
        )
      ),

      h("div", { className: "pp-card pp-card-drill pp-card-feature" },
        h("div", { className: "pp-card-body" },
          h("span", { className: "pp-badge pp-badge-drill" }, "Drill"),
          h("h3", null, "Question drill setup"),
          h("p", null, `Choose count and difficulty, then start ${scopeConfig.primaryLabel.toLowerCase()}, ${scopeConfig.secondaryLabel.toLowerCase()}, or the recommended mix.`)
        ),
        h("div", { className: "pp-card-foot" },
          h(PracticeDrillSetup, {
            count: drillCount,
            setCount: setDrillCount,
            difficulty: drillDifficulty,
            setDifficulty: setDrillDifficulty,
            difficultyOptions,
            bankCount: bankDifficultyMatches.length,
            generatedCount: generatedDifficultyMatches.length,
            bankLabel: bankDrillLabel,
            generatedLabel: generatedDrillLabel,
            mixedLabel: mixedDrillLabel,
            bankMatchLabel,
            generatedMatchLabel,
            scopeTitle: scopeConfig.sourceTitle,
            scopeHint: scopeConfig.sourceHint,
            sourceFilter: drillSource,
            setSourceFilter: setDrillSource,
            sourceOptions: sourceFilterOptions,
            mockSlotCount: currentDifficultyMockSlotCount,
            target,
            onStartBank: () => startQuestionDrill({
              questions: bankMatches,
              label: target.label,
              count: drillCount,
              difficulty: drillDifficulty,
              flowName: "practice-section"
            }),
            onStartGenerated: () => startQuestionDrill({
              questions: generatedMatches,
              label: `${target.label} ${scopeConfig.secondaryLabel.toLowerCase()}`,
              count: drillCount,
              difficulty: drillDifficulty,
              flowName: "practice-generated"
            }),
            onStartMixed: startMixedDrill
          })
        )
      )
    )
  );

  return h("div", { className: `practice-panel practice-workspace ${isGenericStudy ? "generic-practice" : ""}` },
    h("div", { className: "pp-head" },
      h("div", null,
        h("h2", null, "Practice"),
        h("p", { className: "muted" }, scopeConfig.panelDescription)
      ),
      h("span", { className: "pp-bank-count" }, `${countPhrase(originalBankCount, scopeConfig.primaryCountLabel)} · ${countPhrase(generatedPracticeCount, scopeConfig.secondaryCountLabel)}`)
    ),

    !hasBank
      ? h("p", { className: "empty-bank-note" }, `No ${exam.certification.code} questions yet - generate some below.`)
      : null,

    h("div", { className: "practice-dashboard" },
      h("div", { className: "practice-stat" },
        h("span", null, "Question pool"),
        h("strong", null, `${practiceBankCount}/${exam.questions.length}`),
        h("em", null, `${countPhrase(originalBankCount, scopeConfig.primaryCountLabel)} · ${generatedSourceLabel}`)
      ),
      isGenericStudy ? null : h("div", { className: "practice-stat" },
        h("span", null, "Review queue"),
        h("strong", null, `${approvedDraftCount}Q`),
        h("em", null, pendingCount ? `${pendingCount} pending review` : "no draft queue")
      ),
      isGenericStudy ? null : h("div", { className: "practice-stat" },
        h("span", null, "Downloaded mocks"),
        h("strong", null, `${mockGroups.original.length}`),
        h("em", null, mockGroups.original.map((m) => `${m.questionCount}Q`).join(" · ") || "none")
      ),
      isGenericStudy ? null : h("div", { className: "practice-stat" },
        h("span", null, "Generated mock tests"),
        h("strong", null, `${mockGroups.generated.length}`),
        h("em", null, mockGroups.generated.map((m) => `${m.questionCount}Q`).join(" · ") || "none")
      ),
      isGenericStudy ? h("div", { className: "practice-stat" },
        h("span", null, "Saved drill sets"),
        h("strong", null, `${mockGroups.generated.length}`),
        h("em", null, mockGroups.generated.map((m) => `${m.questionCount}Q`).join(" · ") || "none")
      ) : null
    ),

    profileRecommendations,
    focusedPracticeControls,
    recommendedReviewGrid,

    pendingCount ? h(ReviewQueue, { pendingCount, selectedCertSlug, onChange: refreshExam }) : null,

    dashboard.attempts || learnerProfile?.sessions
      ? h("p", { className: "profile-summary" },
          `${dashboard.attempts || 0} saved attempt${dashboard.attempts === 1 ? "" : "s"}`,
          learnerProfile?.sessions
            ? ` · ${learnerProfile.sessions} session${learnerProfile.sessions === 1 ? "" : "s"} (updated ${learnerProfile.lastUpdated?.slice(0, 10) || "-"})`
            : ""
        )
      : null
  );
}

function PracticeScopePanel({
  studyBy,
  setStudyBy,
  studyByOptions,
  sectionOptions = [],
  domainName,
  setDomainName,
  serviceLabel,
  keywordPlaceholder,
  agenticServices,
  serviceName,
  setServiceName,
  lifecycleOptions,
  lifecycleLane,
  setLifecycleLane,
  keyword,
  setKeyword,
  bankMatches,
  generatedMatches = [],
  mockSlotCount = 0,
  target,
  embedded = false
}) {
  const conceptCount = bankMatches.length;
  const nvidiaCount = generatedMatches.length;
  const totalCount = conceptCount + nvidiaCount;
  const lifecycleOption = studyByOptions.find((option) => option.value === "lifecycle");
  const lifecycleFieldLabel = lifecycleOption?.label || "Lifecycle path";
  return h("div", { className: `practice-scope-panel ${embedded ? "practice-scope-embedded" : ""}` },
    h("div", { className: "practice-scope-head" },
      h("div", null,
        h("span", { className: "pp-profile-label" }, "Current filter"),
        h("strong", null, target?.label || "recommended weak domains")
      ),
      h("span", { className: `scope-bank-count ${totalCount ? "" : "empty"}` },
        studyBy === "recommended"
          ? "Adaptive weak-domain concepts"
          : `${totalCount} unique before difficulty · ${mockSlotCount} fixed mock slot${mockSlotCount === 1 ? "" : "s"}`
      )
    ),
    h("div", { className: "practice-scope-grid" },
      h("div", { className: "practice-scope-field practice-filter-buttons" },
        h("span", null, "Filter by"),
        h("div", { className: "scope-button-row" },
          studyByOptions.map((option) => h("button", {
            key: option.value,
            type: "button",
            className: studyBy === option.value ? "active" : "",
            onClick: () => setStudyBy(option.value)
          }, option.label))
        )
      ),
      studyBy === "section"
        ? h("label", { className: "practice-scope-field" },
            h("span", null, "Exam section"),
            h("select", {
              value: domainName,
              onChange: (e) => setDomainName(e.target.value)
            },
              sectionOptions.map((option) => h("option", { key: option.name, value: option.name }, option.label))
            )
          )
        : null,
      studyBy === "service"
        ? h("label", { className: "practice-scope-field" },
            h("span", null, serviceLabel),
            h("select", {
              value: serviceName,
              onChange: (e) => setServiceName(e.target.value)
            },
              h("option", { value: "__all__" }, serviceLabel === "Study playbook" ? "All study playbooks" : "All NVIDIA services"),
              agenticServices.map((service) => h("option", { key: service.name, value: service.name }, service.name))
            )
          )
        : null,
      studyBy === "lifecycle"
        ? h("label", { className: "practice-scope-field" },
            h("span", null, lifecycleFieldLabel),
            h("select", {
              value: lifecycleLane,
              onChange: (e) => setLifecycleLane(e.target.value)
            }, lifecycleOptions.map((option) => h("option", { key: option.lane, value: option.lane }, option.label)))
          )
        : null,
      studyBy === "keyword"
        ? h("label", { className: "practice-scope-field" },
            h("span", null, "Keyword"),
            h("input", {
              type: "text",
              value: keyword,
              onChange: (e) => setKeyword(e.target.value),
              placeholder: keywordPlaceholder,
              maxLength: 80
            })
          )
        : null
    )
  );
}

function ProfileRecommendations({ dashboard, learnerProfile, isGenericStudy = false }) {
  const recommendations = dashboard.recommendations || [];
  const strongest = [...(dashboard.strong || dashboard.domains || [])]
    .filter((d) => d.reliablePercent !== null || (d.measured?.attempts || d.sampleSize || 0) >= 5)
    .sort((a, b) => {
      const score = (d) => (d.reliablePercent ?? 50) + Math.min(d.measured?.attempts || 0, 10);
      return score(b) - score(a);
    })
    .slice(0, 3);
  const weak = (dashboard.weak || recommendations).slice(0, 3);
  const needsEvidence = [...(dashboard.domains || [])]
    .filter((d) => d.reliablePercent === null && !(d.measured?.attempts >= 5))
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 3);

  function domainItem(domain, tone) {
    const detail = domain.reason
      || (domain.reliablePercent !== null ? `${domain.reliablePercent}% reliable score` : null)
      || (domain.measured?.attempts ? `${domain.measured.correct}/${domain.measured.attempts} all-time` : null)
      || `${domain.weight}% of exam`;
    return h("li", { key: `${tone}-${domain.name}` },
      h("strong", null, domain.name),
      h("span", null, detail)
    );
  }

  return h("div", { className: "pp-profile" },
    h("section", { className: "pp-profile-block priority" },
      h("span", { className: "pp-profile-label" }, "Study next"),
      h("ul", null, recommendations.length
        ? recommendations.slice(0, 3).map((d) => domainItem(d, "next"))
        : [h("li", { key: "next-empty" }, h("strong", null, "Build a baseline"), h("span", null, "Finish one mock or guided session to unlock recommendations."))]
      )
    ),
    h("section", { className: "pp-profile-block" },
      h("span", { className: "pp-profile-label" }, "Needs work"),
      h("ul", null, weak.length
        ? weak.map((d) => domainItem(d, "weak"))
        : [h("li", { key: "weak-empty" }, h("strong", null, "No weak pattern yet"), h("span", null, "More answered questions will make this useful."))]
      )
    ),
    h("section", { className: "pp-profile-block" },
      h("span", { className: "pp-profile-label" }, "Looking good"),
      h("ul", null, strongest.length
        ? strongest.map((d) => domainItem(d, "strong"))
        : [h("li", { key: "strong-empty" }, h("strong", null, "Not enough evidence"), h("span", null, isGenericStudy ? "Mark questions easy/hard or complete a drill." : "Mark questions easy/hard or complete a mock."))]
      )
    ),
    h("section", { className: "pp-profile-block" },
      h("span", { className: "pp-profile-label" }, "Needs evidence"),
      h("ul", null, needsEvidence.length
        ? needsEvidence.map((d) => domainItem(d, "evidence"))
        : [h("li", { key: "evidence-empty" }, h("strong", null, "Coverage looks measured"), h("span", null, learnerProfile?.sessions ? `${learnerProfile.sessions} saved sessions` : "No gaps detected."))]
      )
    )
  );
}

function ReviewQueue({ pendingCount, selectedCertSlug, onChange }) {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    setError("");
    try {
      const data = await api(certPath("/api/approvals", selectedCertSlug));
      setPending(data.pending || []);
    } catch (err) {
      setError(err.message || "Failed to load review queue");
    }
  }

  useEffect(() => {
    if (open) load();
  }, [open, selectedCertSlug, pendingCount]);

  async function act(id, action) {
    setBusy(true);
    try {
      await api(certPath("/api/approvals", selectedCertSlug), {
        method: "POST",
        body: JSON.stringify({ id, action })
      });
      setPending((prev) => prev.filter((p) => p.id !== id));
      if (onChange) await onChange();
    } catch (err) {
      setError(err.message || "Failed to update approval");
    } finally {
      setBusy(false);
    }
  }

  return h("details", {
    className: "review-queue review-queue-full",
    open,
    onToggle: (e) => setOpen(e.target.open)
  },
    h("summary", null, `Review Queue (${pendingCount} pending)`),
    error ? h("p", { className: "generation-status error" }, error) : null,
    pending.length === 0 && open
      ? h("p", { className: "muted" }, "No questions awaiting review.")
      : null,
    h("ul", { className: "review-queue-list" },
      pending.map((q) => h("li", { key: q.id, className: "review-queue-row" },
        h("div", { className: "review-queue-meta" },
          h("strong", null, q.id),
          q.domain ? h("span", { className: "muted" }, ` · ${q.domain}`) : null,
          q.difficulty ? h("span", { className: "muted" }, ` · ${q.difficulty}`) : null
        ),
        h("p", null, q.summary || "(no preview)"),
        h("div", { className: "review-queue-actions" },
          h("button", { className: "primary", disabled: busy, onClick: () => act(q.id, "approve") }, "✓ Approve"),
          h("button", { className: "ghost", disabled: busy, onClick: () => act(q.id, "reject") }, "✗ Reject")
        )
      ))
    )
  );
}


function TestPanel({ exam, mockSummary, mockResultsMd, busy, startFlow, availableMocks = [], selectedMockId = "mock_1", setSelectedMockId = () => {}, selectedMockSource = "original", setSelectedMockSource = () => {} }) {
  const hasQuestionBank = exam.questions.length > 0;
  const sourceMocks = availableMocks.filter((m) => (m.source || "original") === selectedMockSource);
  const selectedMock = sourceMocks.find((m) => m.id === selectedMockId) || sourceMocks[0] || { name: "Mock Test", durationMinutes: 90, questionCount: 50 };
  return h(
    "div",
    { className: "launch-panel" },
    h("h2", null, "Mock Tests"),
    !hasQuestionBank
      ? h("p", { className: "empty-bank-note" }, `No ${exam.certification.code} test bank yet. Study Mode works now; timed tests unlock after questions are added.`)
      : null,
    h("p", null, "Fixed exam-style sets with timed, deferred grading. No feedback until you submit."),
    h(
      "div",
      { className: "exam-facts" },
      h("div", null, h("span", null, "Real exam"), h("strong", null, `${exam.certification.questionRange} Q · ${exam.certification.durationMinutes} min`)),
      h("div", null, h("span", null, "Pass at"), h("strong", null, `${exam.certification.passingScorePercent || 70}%`)),
      h("div", null, h("span", null, "Level"), h("strong", null, exam.certification.level))
    ),
    availableMocks.length > 1
      ? h("div", { className: "mock-exam-picker" },
          h("div", { className: "mock-exam-head" },
            h("h3", null, "Select mock test"),
            h("p", { className: "muted" }, "Choose downloaded originals for baseline checks or generated mocks for harder local simulations.")
          ),
          h(MockPicker, {
            availableMocks,
            selectedMockId,
            setSelectedMockId,
            selectedMockSource,
            setSelectedMockSource
          })
        )
      : null,
    h(
      "div",
      { className: "mock-summary" },
      h("h3", null, `${selectedMock.name} — ${selectedMock.questionCount} Q · ${selectedMock.durationMinutes} min`),
      mockSummary?.latest
        ? h("div", { className: "mock-card" },
            h("p", null, `Last attempt: `, h("strong", { className: scoreTone(mockSummary.latest.percent) }, `${mockSummary.latest.percent}%`),
              ` (${mockSummary.latest.correct}/${mockSummary.latest.total}) — ${mockSummary.latest.passed ? "PASS" : "FAIL"} on ${mockSummary.latest.date.slice(0, 10)}`),
            mockSummary.bestPercent && mockSummary.bestPercent !== mockSummary.latest.percent
              ? h("p", { className: "muted" }, `Best so far: ${mockSummary.bestPercent}%`)
              : null
          )
        : h("p", { className: "muted" }, "No attempts yet. Take it once to set a baseline."),
      h(
        "div",
        { className: "mode-buttons" },
        h("button", {
          className: "primary", disabled: busy || !hasQuestionBank,
          onClick: () => startFlow("test-mock-1")
        }, busy ? "Loading…" : hasQuestionBank ? (mockSummary?.latest ? `Retake ${selectedMock.name}` : `Begin ${selectedMock.name}`) : "No mock yet")
      )
    ),
    mockResultsMd
      ? h("details", { className: "mock-history" },
          h("summary", null, "Full mock results history"),
          h("pre", null, mockResultsMd))
      : null
  );
}

function ExamScreen(props) {
  const {
    questions, question, current, setCurrent, answers, answeredCount, flagged, flaggedCount,
    secondsLeft, answerQuestion, toggleFlag, submitExam,
    busy, sessionKind, revealed, flow, generationStatus, coachNotes, coachStatus, adaptivePosition, adaptiveTarget,
    fetchCoachingAndAdvance, rememberCoachReply, revealAnswer, onExit, selectedCertSlug
  } = props;

  const isPractice = sessionKind === "practice";
  const isAdaptive = ADAPTIVE_PRACTICE_FLOWS.includes(flow);
  const selected = answers[question.id];
  const isRevealed = isPractice && revealed[question.id];
  const correct = isRevealed && selected === question.answer;
  const submitLabel = isAdaptive ? "Finish Guided Practice" : isPractice ? "Finish Practice" : "End Exam";
  const coachEntry = coachNotes[question.id];
  const progressLabel = isAdaptive ? adaptivePosition : `${answeredCount}/${questions.length}`;
  const nextUnansweredIndex = (() => {
    if (!isPractice || isAdaptive) return null;
    for (let index = current + 1; index < questions.length; index += 1) {
      if (answers[questions[index].id] === undefined) return index;
    }
    for (let index = 0; index < current; index += 1) {
      if (answers[questions[index].id] === undefined) return index;
    }
    return null;
  })();
  const canAdvance = isPractice && !isAdaptive ? nextUnansweredIndex !== null : current < questions.length - 1;

  return h(
    "section",
    { className: "exam-layout" },
    h(
      "div",
      { className: `driver-bar ${isPractice ? "practice-driver" : "test-driver"}` },
      isPractice
        ? h("div", null, h("span", null, "Mode"), h("strong", null, isAdaptive ? `Guided (${adaptivePosition})` : "Practice"))
        : h("div", null, h("span", null, "Mode"), h("strong", null, "Timed Test")),
      h("div", null, h("span", null, "Question"), h("strong", null, `${current + 1} of ${questions.length}`)),
      h("div", null, h("span", null, "Progress"), h("strong", null, progressLabel)),
      h("button", { className: "exit-button", onClick: onExit }, "Exit to start"),
      h("button", { className: "end-exam", disabled: busy, onClick: submitExam }, busy ? "Scoring..." : submitLabel)
    ),
    generationStatus?.state === "running"
      ? h("div", { className: "gen-indicator" }, h("span", { className: "pulse-dot" }), " ", generationStatus.message)
      : null,
    !isPractice
      ? h(
          "aside",
          { className: "navigator" },
          h("div", { className: "progress-line" }, h("strong", null, `${answeredCount}/${questions.length}`), h("span", null, "answered")),
          h(
            "div",
            { className: "question-grid" },
            questions.map((item, index) => {
              let status = answers[item.id] !== undefined ? "answered" : "empty";
              if (isPractice && revealed[item.id]) {
                status = answers[item.id] === item.answer ? "correct" : "wrong";
              }
              const isCurrent = index === current ? "current" : "";
              const isFlagged = flagged[item.id] ? "flagged" : "";
              return h("button", { key: item.id, className: `q-dot ${status} ${isCurrent} ${isFlagged}`, onClick: () => setCurrent(index) }, index + 1);
            })
          )
        )
      : h(
          "aside",
          { className: "navigator adaptive practice-compact" },
          h("div", { className: "progress-line" },
            h("strong", null, isAdaptive ? adaptivePosition : `${answeredCount}/${questions.length}`),
            h("span", null, isAdaptive ? "guided" : "practice set"),
            h("small", null, isAdaptive ? `target ${adaptiveTarget}` : "shuffled from bank")),
          h(
            "div",
            { className: "question-grid" },
            questions.map((item, index) => {
              let status = answers[item.id] !== undefined ? "answered" : "empty";
              if (revealed[item.id]) status = answers[item.id] === item.answer ? "correct" : "wrong";
              const isCurrent = index === current ? "current" : "";
              return h("button", { key: item.id, className: `q-dot ${status} ${isCurrent}`, onClick: () => setCurrent(index) }, index + 1);
            })
          ),
          h("p", { className: "muted" }, isAdaptive ? "Guided practice chooses the next question after you reveal the current answer. You can still go back." : "Answer, read the explanation, move on. Stop anytime for a review of what you answered.")
        ),
    h(
      "article",
      { className: "question-panel" },
      h("div", { className: "question-meta" },
        h("span", null, `Question ${current + 1} of ${questions.length}`),
        h("strong", null, question.domain)
      ),
      h("h2", null, question.question),
      h(
        "div",
        { className: isRevealed ? "choices review" : "choices" },
        question.choices.map((choice, index) => {
          const isSelected = selected === index;
          let className = "choice";
          if (isRevealed) {
            if (index === question.answer) className += " correct";
            else if (isSelected) className += " wrong";
          } else if (isSelected) {
            className += " selected";
          }
          if (isRevealed) {
            return h("div", { key: choice, className }, h("span", null, String.fromCharCode(65 + index)), h("p", null, choice));
          }
          return h("button", { key: choice, className, onClick: () => answerQuestion(index) }, h("span", null, String.fromCharCode(65 + index)), h("p", null, choice));
        })
      ),
      isRevealed
        ? h(
            "div",
            { className: correct ? "explanation correct" : "explanation wrong" },
            h("div", { className: "explanation-head" },
              h("strong", null, correct ? "Correct" : "Missed"),
              h(QuestionDifficultyBadge, { difficulty: question.difficulty })
            ),
            h("p", null, question.explanation),
            !correct && question.whyWrong[selected]
              ? h("p", { className: "why-wrong" }, h("strong", null, `Why your choice (${String.fromCharCode(65 + selected)}) is wrong: `), question.whyWrong[selected])
              : null
          )
        : null,
      isPractice
        ? h(HelperChat, {
            question,
            selectedCertSlug,
            includeAnswer: Boolean(isRevealed),
            onRemember: rememberCoachReply
          })
        : null,
      isAdaptive && coachEntry && coachEntry.reason !== "Saved from coach chat"
        ? h("div", { className: "coach-note" },
            h("strong", null, "Practice guide"),
            coachEntry.note
              ? h("p", null, coachEntry.note)
              : h("p", { className: "muted" }, "Keep going — guided practice is selecting your next question based on your weak areas."),
            coachEntry.reason ? h("p", { className: "muted" }, h("em", null, coachEntry.reason)) : null)
        : null,
      isAdaptive && coachStatus.state !== "idle"
        ? h("p", { className: `coach-status ${coachStatus.state}` }, coachStatus.message)
        : null,
      h(
        "div",
        { className: "question-actions" },
        current > 0
          ? h("button", { className: "prev-btn", onClick: () => setCurrent(current - 1) }, "← Previous")
          : null,
        isPractice && selected !== undefined && !isRevealed
          ? h("button", { className: "primary", onClick: revealAnswer }, "Reveal answer")
          : null,
        isAdaptive && isRevealed && current === questions.length - 1
          ? h("button", {
              className: "primary",
              disabled: coachStatus.state === "running",
              onClick: fetchCoachingAndAdvance
            }, coachStatus.state === "running" ? "Choosing…" : "Continue practice →")
          : null,
        (!isAdaptive || current < questions.length - 1)
          ? h("button", {
              className: "next-btn",
              onClick: () => setCurrent(isPractice && !isAdaptive ? nextUnansweredIndex : Math.min(questions.length - 1, current + 1)),
              disabled: !canAdvance
            }, isPractice && !isAdaptive ? "Next unanswered →" : "Next →")
          : null
      )
    )
  );
}

function HelperChat({ question, selectedCertSlug, includeAnswer = false, onRemember }) {
  const [open, setOpen] = useState(true);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const inputRef = React.useRef(null);
  const requestRef = React.useRef(null);

  // Reset chat when the question changes.
  useEffect(() => {
    if (requestRef.current) {
      requestRef.current.abort();
      requestRef.current = null;
    }
    setHistory([]);
    setInput("");
    setError("");
    setBusy(false);
    setOpen(true);
  }, [question.id]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  useEffect(() => () => {
    if (requestRef.current) requestRef.current.abort();
  }, []);

  async function send(msg) {
    const message = (msg || input).trim();
    if (!message || busy) return;
    if (requestRef.current) requestRef.current.abort();
    const controller = new AbortController();
    requestRef.current = controller;
    const timeout = setTimeout(() => controller.abort(), 45000);
    setBusy(true);
    setError("");
    const nextHistory = [...history, { role: "user", content: message }];
    setHistory(nextHistory);
    setInput("");
    try {
      const result = await api(certPath("/api/question-helper", selectedCertSlug), {
        method: "POST",
        signal: controller.signal,
        body: JSON.stringify({
          questionId: question.id,
          message,
          history: history,
          includeAnswer
        })
      });
      const reply = result.reply || "(empty reply)";
      setHistory([...nextHistory, { role: "assistant", content: reply }]);
      if (onRemember) onRemember(question.id, message, reply);
    } catch (err) {
      if (controller.signal.aborted) {
        setError("Coach request stopped. Try a shorter question or ask again.");
      } else {
        setError(coachErrorMessage(err, "Helper request failed"));
      }
    } finally {
      clearTimeout(timeout);
      if (requestRef.current === controller) requestRef.current = null;
      setBusy(false);
    }
  }

  function closeCoach() {
    if (requestRef.current) {
      requestRef.current.abort();
      requestRef.current = null;
    }
    setBusy(false);
    setOpen(false);
  }

  if (!open) {
    return h("button", {
      className: "coach-open-btn",
      onClick: () => setOpen(true),
      type: "button"
    }, "Ask the coach");
  }

  const examples = includeAnswer
    ? ["Why is this answer correct?", "Explain the wrong options", "How does this relate to NVIDIA tools?"]
    : ["What concept is this testing?", "Give me a hint without the answer", "Which NVIDIA tool is relevant?"];

  return h("div", { className: "helper-chat" },
    h("div", { className: "helper-chat-head" },
      h("div", null,
        h("strong", null, includeAnswer ? "Coach" : "Coach hint"),
        h("span", { className: "helper-chat-desc" },
          includeAnswer ? "Ask about concepts, trade-offs, or NVIDIA tooling" : "Ask for a hint — the coach won't reveal the answer")
      ),
      h("button", { className: "helper-chat-close", onClick: closeCoach, "aria-label": "Close coach", type: "button" }, "×")
    ),
    history.length
      ? h("div", { className: "helper-chat-log" },
          history.map((turn, i) => h("div", {
            key: i,
            className: `helper-turn ${turn.role}`
          },
            h("strong", null, turn.role === "user" ? "You" : "Coach"),
            turn.role === "assistant"
              ? h("div", { className: "helper-turn-body" }, renderMarkdown(turn.content))
              : h("p", null, turn.content)
          ))
        )
      : h("div", { className: "helper-chat-welcome" },
          h("p", null, includeAnswer
            ? "The coach knows the correct answer. Ask why it's right, why distractors are wrong, or how this applies with real NVIDIA tooling."
            : "The coach knows the answer but will guide you without revealing it. Ask for a conceptual hint or clarification."),
          h("div", { className: "helper-chat-examples" },
            examples.map((ex) => h("button", {
              key: ex,
              className: "chip",
              onClick: () => send(ex),
              disabled: busy,
              type: "button"
            }, ex))
          )
        ),
    busy ? h("p", { className: "helper-chat-status" }, "Coach is thinking…") : null,
    error ? h("p", { className: "helper-chat-error" }, error) : null,
    h("div", { className: "helper-chat-input" },
      h("textarea", {
        ref: inputRef,
        value: input,
        onChange: (e) => setInput(e.target.value),
        placeholder: "Type your question…",
        disabled: busy,
        rows: 3,
        onKeyDown: (e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            send();
          }
        }
      }),
      h("button", {
        className: "helper-send",
        type: "button",
        disabled: busy || !input.trim(),
        onClick: () => send()
      }, busy ? "Thinking…" : "Send")
    ),
    h("p", { className: "helper-chat-hint" }, "Enter to send · Shift+Enter for new line")
  );
}

function ReviewScreen(props) {
  const { questions, grade, current, setCurrent, answers, flagged, domainStats, mistakes,
    flow, coachNotes, mockResultsMd, mockDef, startFlow, onExit, onBackToPractice } = props;
  const question = questions[current];
  const selected = answers[question.id];
  const correct = selected === question.answer;
  const isMock = flow === "test-mock-1";
  const isAdaptive = ADAPTIVE_PRACTICE_FLOWS.includes(flow);
  const weakAreas = Object.entries(grade.byDomain || {})
    .map(([name, score]) => ({ name, pct: Math.round((score.correct / score.total) * 100) }))
    .filter((d) => d.pct < 70)
    .sort((a, b) => a.pct - b.pct);

  return h(
    "section",
    { className: "review-layout" },
    h(
      "aside",
      { className: "review-summary" },
      h("h2", null, isMock ? `${mockDef?.name || "Mock Test"} Result` : isAdaptive ? "Guided Practice Result" : "Result"),
      h(
        "div",
        { className: "mode-buttons review-actions-top" },
        isMock
          ? h("button", { className: "primary big", onClick: () => startFlow("test-mock-1") }, `Retake ${mockDef?.name || "Mock Test"}`)
          : isAdaptive
            ? h("button", { className: "primary big", onClick: onBackToPractice }, "Back to practice")
            : h("button", { className: "primary big", onClick: () => startFlow(flow || "practice-adaptive") }, "Retake"),
        h("button", { className: "secondary", onClick: onExit }, "← Back to start")
      ),
      h("div", { className: `score-orb ${scoreTone(grade.percent)}` }, h("strong", null, `${grade.percent}%`), h("span", null, `${grade.correct}/${grade.total}`)),
      isMock
        ? h("p", { className: "muted" }, "Saved to mock_results.md. Retake to track progress.")
        : null,
      weakAreas.length
        ? h("div", { className: "weak-list" },
            h("strong", null, "Areas to improve"),
            h("ul", null, weakAreas.map((d) => h("li", { key: d.name }, `${d.name} — ${d.pct}%`))))
        : h("p", { className: "muted" }, "All domains ≥ 70%."),
      h("div", { className: "domain-list" }, domainStats.map((domain) => h(DomainRow, { key: domain.name, domain, showScore: true })))
    ),
    h(
      "article",
      { className: "review-panel" },
      h(
        "div",
        { className: "review-nav" },
        questions.map((item, index) => {
          const row = grade.rows.find((gradeRow) => gradeRow.id === item.id);
          return h("button", {
            key: item.id,
            className: `q-dot ${row.correct ? "correct" : "wrong"} ${index === current ? "current" : ""}`,
            onClick: () => setCurrent(index)
          }, index + 1);
        })
      ),
      h("div", { className: "question-meta" }, h("span", null, `Review ${current + 1}`), h("strong", null, question.domain)),
      h("h2", null, question.question),
      h(
        "div",
        { className: "choices review" },
        question.choices.map((choice, index) => {
          const className = [
            "choice",
            index === question.answer ? "correct" : "",
            index === selected && index !== question.answer ? "wrong" : ""
          ].join(" ");
          return h("div", { key: choice, className }, h("span", null, String.fromCharCode(65 + index)), h("p", null, choice));
        })
      ),
      h("div", { className: correct ? "explanation correct" : "explanation wrong" },
        h("div", { className: "explanation-head" },
          h("strong", null, correct ? "Correct" : "Missed"),
          h(QuestionDifficultyBadge, { difficulty: question.difficulty })
        ),
        h("p", null, question.explanation)
      ),
      coachNotes[question.id]
        ? h("div", { className: "coach-note" },
            h("strong", null, "Coach said"),
            h("p", null, coachNotes[question.id].note))
        : null,
      isMock && mockResultsMd
        ? h("details", { className: "mock-history" },
            h("summary", null, "Mock results history"),
            h("pre", null, mockResultsMd))
        : null,
      h("details", { className: "mistake-log" }, h("summary", null, "Mistake markdown log"), h("pre", null, mistakes))
    )
  );
}

function QuestionDifficultyBadge({ difficulty }) {
  const value = String(difficulty || "medium").toLowerCase();
  const label = value === "easier" ? "easy" : value;
  return h("span", { className: `question-difficulty-badge diff-${label}` }, `Difficulty: ${label}`);
}

function DomainRow({ domain, showScore = false }) {
  const scoreText = showScore && domain.score ? `${domain.score.correct}/${domain.score.total}` : `${domain.answered}/${domain.total} practiced`;
  return h(
    "div",
    { className: "domain-row" },
    h("div", null, h("strong", null, domain.name), h("span", null, `${domain.weight}% of exam`)),
    h("em", null, scoreText)
  );
}

export default App;

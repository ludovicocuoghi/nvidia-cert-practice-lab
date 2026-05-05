import React, { useEffect, useMemo, useRef, useState } from "react";
import { nvidiaAcronymExpansions, nvidiaServices, serviceFilters, studySections } from "../data/study-services.js";

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
  "Evaluation and Safety": "Trajectory evaluation, groundedness, LLM-as-judge calibration, guardrails, red-team suites.",
  "Observability, Operations, and Cost": "Traces, task success, p95/p99 latency, route drift, token cost, incident replay.",
  "Human Oversight and Governance": "Risk-tiered approvals, escalation, audit artifacts, review feedback loops."
};

const ADAPTIVE_PRACTICE_TARGET = 20;
const QUICK_PRACTICE_TARGET = 20;
const SECTION_QUIZ_TARGET = 10;
const DRILL_COUNTS = [10, 20, 30, 50];
const DRILL_DIFFICULTIES = ["any", "easier", "medium", "hard", "advanced", "expert"];

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

function scrollToTop() {
  window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" }));
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
  return shuffledQuestions(questions, limit).map(shuffleQuestionChoices);
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
  return target === "easier" ? actual === "easier" || actual === "easy" : actual === target;
}

function questionsForDifficulty(questions, difficulty) {
  return questions.filter((question) => questionMatchesDifficulty(question, difficulty));
}

function domainPercent(score) {
  if (!score || !score.total) return null;
  return Math.round((score.correct / score.total) * 100);
}

function buildFeedbackByDomain(exam, ratings) {
  const byDomain = Object.fromEntries(exam.domains.map((domain) => [domain.name, {
    easy: 0,
    hard: 0,
    good: 0,
    bad: 0,
    total: 0
  }]));
  for (const question of exam.questions) {
    const rating = ratings[question.id];
    if (!rating || !byDomain[question.domain]) continue;
    const bucket = byDomain[question.domain];
    if (rating.difficulty === "easy") bucket.easy += 1;
    if (rating.difficulty === "hard") bucket.hard += 1;
    if (rating.quality === "good") bucket.good += 1;
    if (rating.quality === "bad") bucket.bad += 1;
    if (rating.difficulty || rating.quality) bucket.total += 1;
  }
  return byDomain;
}

function buildDashboard(exam, history, confidence, currentGrade, questionRatings = {}, learnerProfile = null) {
  const latest = currentGrade || history[0]?.grade || null;
  const feedbackByDomain = buildFeedbackByDomain(exam, questionRatings);
  const domains = exam.domains.map((domain) => {
    const score = latest?.byDomain?.[domain.name] || null;
    const percent = domainPercent(score);
    const sampleSize = score?.total || 0;
    const measured = learnerProfile?.domains?.[domain.name] || null;
    const profileAttempts = measured?.attempts || 0;
    const self = confidence[domain.name] ?? 2;
    const feedback = feedbackByDomain[domain.name] || { easy: 0, hard: 0, good: 0, bad: 0, total: 0 };
    const reliablePercent = sampleSize >= 5 ? percent : measured?.attempts >= 5 ? Math.round((measured.accuracy || 0) * 100) : null;
    const samplePenalty = sampleSize && sampleSize < 5 ? (5 - sampleSize) * 9 : profileAttempts && profileAttempts < 5 ? (5 - profileAttempts) * 5 : 0;
    const weakness = (reliablePercent === null ? 55 : 100 - reliablePercent) + samplePenalty + (4 - self) * 12 + domain.weight / 2 + feedback.hard * 14 - feedback.easy * 4;
    return {
      ...domain,
      score,
      percent,
      sampleSize,
      reliablePercent,
      measured,
      confidence: self,
      feedback,
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
      if (domain.feedback.hard) signals.push(`${domain.feedback.hard} marked hard`);
      if (domain.feedback.easy) signals.push(`${domain.feedback.easy} marked easy`);
      if (domain.feedback.bad) signals.push(`${domain.feedback.bad} bad question flag${domain.feedback.bad === 1 ? "" : "s"}`);
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

function questionRatingPenalty(question, ratings) {
  const rating = ratings[question.id] || {};
  let penalty = 0;
  if (rating.difficulty === "easy") penalty += 40;
  if (rating.quality === "bad") penalty += 60;
  return penalty;
}

function questionRatingBoost(question, ratings) {
  const rating = ratings[question.id] || {};
  let boost = 0;
  if (rating.difficulty === "hard") boost += 28;
  if (rating.quality === "good") boost += 6;
  return boost;
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

function buildAdaptiveSet(exam, dashboard, ratings, limit = 24, recentMockSeen = {}) {
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
    const score = weakBoost + domainWeakness + difficultyBoost + recentMockDeboost + questionRatingBoost(question, ratings) - questionRatingPenalty(question, ratings) - index / 1000;
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
  if (theme === "blue") {
    return {
      brand: "GENERAL",
      chooserLabel: "Study track",
      resourceLabel: "Reference page",
      suiteLabel: "Lifecycle map",
      serviceLabel: "Study Playbooks",
      studyDescription: "Study the vendor-neutral AI lifecycle by real build paths, then open playbooks that explain what to build, which concepts matter, and where products fit as examples.",
      studyCardCopy: {
        study: "Study the agentic AI lifecycle map and vendor-neutral playbooks as an architecture reference.",
        lifecycle: "Lifecycle map",
        services: "Study Playbooks",
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
  return {
    brand: "NVIDIA",
    chooserLabel: "Certification",
    resourceLabel: "Official NVIDIA page",
    suiteLabel: "NVIDIA suite",
    serviceLabel: "NVIDIA service",
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
  const [studyStatus, setStudyStatus] = useState("");
  const [grade, setGrade] = useState(null);
  const [history, setHistory] = useState(() => loadJson("ncp-genl-history", []));
  const [confidence, setConfidence] = useState(() => loadJson("ncp-genl-confidence", {}));
  const [questionRatings, setQuestionRatings] = useState(() => loadJson("ncp-genl-question-ratings", {}));
  const [learnerNotes, setLearnerNotes] = useState(() => loadJson("ncp-genl-learner-notes", {}));
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
      setQuestionRatings(loadJson(`${selectedCertSlug}-question-ratings`, {}));
      setLearnerNotes(loadJson(`${selectedCertSlug}-learner-notes`, {}));
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

  const dashboard = useMemo(() => {
    if (!exam) return { domains: [], weak: [], strong: [], attempts: 0 };
    return buildDashboard(exam, history, confidence, grade, questionRatings, learnerProfile);
  }, [exam, history, confidence, grade, questionRatings, learnerProfile]);

  // Practice mode draws from mocks/*_bank.md ∪ generated-questions.md only — never legacy questions.md.
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

  function updateConfidence(domain, value) {
    const next = { ...confidence, [domain]: value };
    setConfidence(next);
    saveJson(`${selectedCertSlug}-confidence`, next);
  }

  function updateLearnerNote(questionId, note) {
    const next = { ...learnerNotes };
    if (note && note.trim()) {
      next[questionId] = { note: note.trim(), updatedAt: new Date().toISOString() };
    } else {
      delete next[questionId];
    }
    setLearnerNotes(next);
    saveJson(`${selectedCertSlug}-learner-notes`, next);
    const questionForFeedback = exam?.questions.find((item) => item.id === questionId);
    postQuestionFeedback({
      questionId,
      domain: questionForFeedback?.domain,
      note: note?.trim(),
      ...(questionRatings[questionId] || {})
    });
  }

  async function postQuestionFeedback(payload) {
    if (!payload?.questionId) return;
    if (!payload.note && !payload.difficulty && !payload.quality) return;
    try {
      await api(certPath("/api/question-feedback", selectedCertSlug), {
        method: "POST",
        body: JSON.stringify({ ...payload, flow: flow || mode })
      });
    } catch (err) {
      console.warn("question feedback write failed", err);
    }
  }

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
      const note = learnerNotes[q.id]?.note || "";
      const coach = coachNotes[q.id]?.note || "";
      return {
        id: q.id,
        domain: q.domain,
        feedback: feedbackForQuestion(q.id),
        question: q.question,
        choices: q.choices,
        correctIndex: q.answer,
        selectedIndex,
        correct: selectedIndex === q.answer,
        explanation: q.explanation,
        coachNote: coach,
        learnerNote: note
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

  function updateQuestionRating(questionId, patch) {
    const merged = {
      ...(questionRatings[questionId] || {}),
      ...patch,
      updatedAt: new Date().toISOString()
    };
    const next = {
      ...questionRatings,
      [questionId]: merged
    };
    setQuestionRatings(next);
    saveJson(`${selectedCertSlug}-question-ratings`, next);
    const questionForFeedback = exam?.questions.find((item) => item.id === questionId);
    postQuestionFeedback({
      questionId,
      domain: questionForFeedback?.domain,
      difficulty: merged.difficulty,
      quality: merged.quality,
      note: learnerNotes[questionId]?.note || ""
    });
  }

  function feedbackForQuestion(questionId) {
    const rating = questionRatings[questionId] || {};
    return {
      difficulty: rating.difficulty,
      quality: rating.quality
    };
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
      const questions = refreshed.questions.filter((q) => ids.has(q.id)).map(shuffleQuestionChoices);
      if (!questions.length) {
        setGenerationStatus({ state: 'warn', message: 'Questions generated but not found in bank. Try Practice → Generated Practice.' });
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

  async function drillRecentMistakes(count = 5) {
    if (genAbortRef.current) { genAbortRef.current.abort(); genAbortRef.current = null; }
    const controller = new AbortController();
    genAbortRef.current = controller;
    const aborted = () => controller.signal.aborted;
    const timeoutId = setTimeout(() => controller.abort(), 120000);

    setGenerationStatus({ state: 'running', message: 'Generating ' + count + ' question' + (count === 1 ? '' : 's') + ' targeting your recent mistakes…' });
    try {
      const result = await api(certPath('/api/generate-questions', selectedCertSlug), {
        method: 'POST',
        signal: controller.signal,
        body: JSON.stringify({ mode: 'mistakes', count, difficulty: 'hard' })
      });
      if (aborted()) return;
      if (!result.accepted) {
        setGenerationStatus({ state: 'warn', message: 'No questions generated. Try logging more mistakes or use the targeted generator.' });
        return;
      }
      const refreshed = await api(certPath('/api/exam', selectedCertSlug));
      if (aborted()) return;
      setExam(refreshed);
      const drillIds = new Set(result.autoApprovedIds || []);
      const drillSet = refreshed.questions.filter((q) => drillIds.has(q.id)).map(shuffleQuestionChoices);
      if (!drillSet.length) {
        setGenerationStatus({ state: 'warn', message: "Generated questions weren't found in the bank. Refresh and try Practice Generated." });
        return;
      }
      resetSessionState({ keepGeneration: true });
      setFlow('practice-generated');
      setSessionKind('practice');
      setSessionQuestions(drillSet);
      setSecondsLeft(0);
      setMode('exam');
      setGenerationStatus({ state: 'idle', message: 'Drilling ' + drillSet.length + ' mistake-targeted questions.' });
      scrollToTop();
    } catch (err) {
      if (aborted()) return;
      setGenerationStatus({ state: 'error', message: (err.message || String(err)).slice(0, 200) });
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
      const questions = refreshed.questions.filter((q) => ids.has(q.id)).map(shuffleQuestionChoices);
      if (!questions.length) {
        setGenerationStatus({ state: 'warn', message: 'Questions generated but not found in bank. Try Practice → Generated Practice.' });
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

    if (["practice-adaptive", "practice-coach-bank", "practice-coach-generated"].includes(nextFlow)) {
      setSessionKind("practice");
      const recentMockSeen = loadRecentMockSeen(selectedCertSlug);
      const approved = new Set(exam.approvedGeneratedIds || []);
      let pool = practiceQuestions;
      if (nextFlow === "practice-coach-generated") {
        pool = exam.questions.filter((q) => approved.has(q.id));
      } else if (nextFlow === "practice-coach-bank") {
        pool = practiceQuestions.filter((q) => !approved.has(q.id));
      }
      const adaptiveExam = { ...exam, questions: pool };
      const seed = buildAdaptiveSet(adaptiveExam, dashboard, questionRatings, 1, recentMockSeen);
      const first = seed.length ? seed[0] : pool[0];
      if (!first) {
        setError(nextFlow === "practice-coach-generated"
          ? "No approved generated questions yet. Generate and approve some first."
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
      const approved = new Set(exam.approvedGeneratedIds || []);
      const pool = exam.questions.filter((q) => approved.has(q.id));
      if (!pool.length) {
        setError("No approved generated questions yet. Generate and approve some in the Review Queue first.");
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

  function startTargetedGuidedPractice({ questions, label = "selected focus" } = {}) {
    if (!exam) return;
    const pool = Array.isArray(questions) ? questions : [];
    if (!pool.length) {
      setError(`No banked questions found for ${label}. Generate new questions for this focus first.`);
      return;
    }
    resetSessionState();
    guidedCandidateIdsRef.current = pool.map((q) => q.id);
    setFlow("practice-coach-bank");
    setSessionKind("practice");
    setExamStartedAt(Date.now());
    const adaptiveExam = { ...exam, questions: pool };
    const seed = buildAdaptiveSet(adaptiveExam, dashboard, questionRatings, 1, loadRecentMockSeen(selectedCertSlug));
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
    const isCoachPractice = ["practice-adaptive", "practice-coach-bank", "practice-coach-generated"].includes(flow);
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
    if (["practice-adaptive", "practice-coach-bank", "practice-coach-generated"].includes(flow)) {
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

  const isAdaptivePractice = ["practice-adaptive", "practice-coach-bank", "practice-coach-generated"].includes(flow);
  const adaptivePosition = isAdaptivePractice ? `${sessionQuestions.length}/${ADAPTIVE_PRACTICE_TARGET}` : null;
  const showHeaderStatus = !(mode === "exam" && sessionKind === "practice");
  const branding = brandingForExam(exam);

  return h(
    "main",
    { className: `exam-shell theme-${themeForCertification(exam)}` },
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
      exam, domainStats, dashboard, confidence, questionRatings, learnerProfile, mockSummary, mockResultsMd,
      track, setTrack, busy, certifications, studyView, setStudyView,
      branding,
      availableMocks, selectedMockId, setSelectedMockId, selectedMockSource, setSelectedMockSource,
      selectedCertSlug, setSelectedCertSlug,
      activeServiceFilter, setActiveServiceFilter, selectedServiceName, setSelectedServiceName,
      selectedSuiteTopicId, setSelectedSuiteTopicId,
      activeSectionExam, setActiveSectionExam, selectedSectionName, setSelectedSectionName,
      studyStatus, setStudyStatus,
      drillRecentMistakes, setExam,
      updateConfidence, startFlow, startTargetedGuidedPractice, startQuestionDrill, startSectionPractice, startKeywordPractice, generateQuestions, generateStudyQuiz, generationStatus, cancelGeneration
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
          questionRatings,
          answerQuestion,
          toggleFlag,
          updateQuestionRating,
          learnerNotes,
          updateLearnerNote,
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
          questionRatings,
          updateQuestionRating,
          learnerNotes,
          updateLearnerNote,
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
    case "practice-section": return "Section Practice";
    case "practice-adaptive": return "Guided Practice";
    case "practice-coach-bank": return "Guided Practice (Mock Bank)";
    case "practice-coach-generated": return "Guided Practice (Generated)";
    case "practice-generated": return "Generated Practice";
    case "practice-mock": return mockDef ? `Practice — ${mockDef.name}` : "Practice Mock";
    case "test-mock-1": return mockDef?.name || "Mock Test";
    default: return "—";
  }
}

function StartScreen(props) {
  const { exam, domainStats, dashboard, confidence, questionRatings, learnerProfile, mockSummary, mockResultsMd,
    track, setTrack, busy, certifications, studyView, setStudyView,
    branding,
    availableMocks, selectedMockId, setSelectedMockId, selectedMockSource, setSelectedMockSource,
    selectedCertSlug, setSelectedCertSlug,
    activeServiceFilter, setActiveServiceFilter, selectedServiceName, setSelectedServiceName,
    selectedSuiteTopicId, setSelectedSuiteTopicId,
    activeSectionExam, setActiveSectionExam, selectedSectionName, setSelectedSectionName,
    studyStatus, setStudyStatus,
    drillRecentMistakes, setExam,
    updateConfidence, startFlow, startTargetedGuidedPractice, startQuestionDrill, startSectionPractice, startKeywordPractice, generateQuestions, generateStudyQuiz, generationStatus, cancelGeneration } = props;
  const isGenericStudy = exam.certification.code === "AAI-GEN";

  return h(
    "section",
    { className: `start-grid ${track ? `track-${track}` : ""}` },
    h(CertificationChooser, { exam, certifications, selectedCertSlug, setSelectedCertSlug, setTrack, branding }),
    h(TrackChooser, { track, setTrack, mockSummary, exam, branding }),
    track === "practice"
      ? h(PracticePanel, {
          exam, domainStats, dashboard, confidence, questionRatings, learnerProfile,
          updateConfidence, startFlow, startTargetedGuidedPractice, startQuestionDrill, generateQuestions, generationStatus, cancelGeneration,
          availableMocks, selectedMockId, setSelectedMockId, selectedMockSource, setSelectedMockSource,
          selectedCertSlug, drillRecentMistakes,
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
  return h(
    "div",
    { className: "track-chooser" },
    h("h2", null, "Choose your session"),
    h("p", { className: "muted" }, isGenericStudy
      ? "Use Study for the lifecycle map and Practice for short feedback-driven drills."
      : "Practice = short shuffled study sets with feedback. Test = exam-style under time."),
    h(
      "div",
      { className: `track-cards ${isGenericStudy ? "track-cards-two" : ""}` },
      h(
        "button",
        { className: `track-card ${track === "study" ? "active" : ""}`, onClick: () => setTrack("study") },
        h("strong", null, "Study"),
        h("p", null, branding.studyCardCopy.study),
        h("ul", null,
          h("li", null, isGenericStudy ? "Lifecycle map for agentic AI systems" : "Blueprint sections for the selected certification"),
          h("li", null, branding.studyCardCopy.services),
          h("li", null, isGenericStudy ? "Curate data, select models, build agents, serve, evaluate" : branding.studyCardCopy.suite),
          h("li", null, branding.studyCardCopy.quiz)
        )
      ),
      h(
        "button",
        { className: `track-card ${track === "practice" ? "active" : ""}`, onClick: () => setTrack("practice") },
        h("strong", null, "Practice"),
        h("p", null, "Shuffled question sets with immediate feedback, notes, and an end-of-session review."),
        h("ul", null,
          h("li", null, "No timer"),
          h("li", null, hasQuestionBank ? "Coach chat available inside each question" : "Question bank not built yet"),
          h("li", null, "Learning notes saved to markdown")
        )
      ),
      isGenericStudy ? null : h(
        "button",
        { className: `track-card ${track === "test" ? "active" : ""}`, onClick: () => setTrack("test") },
        h("strong", null, "Actual Exam"),
        h("p", null, "Timed, deferred grading like the real Certiverse-proctored exam."),
        h("ul", null,
          h("li", null, `${exam.certification.durationMinutes} min real exam`),
          h("li", null, hasQuestionBank ? `Mock Test 1 (${exam.questions.length}Q) for repeatable progress` : "Practice tests unlock after questions exist"),
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
      "Secondary: Fine-tune existing model": "Use when durable behavior, style, rubric-following, or preference alignment must change. Tune only after data and evals are ready.",
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
    title: "NVIDIA Agentic AI lifecycle paths",
    lanes: {
      "Core: Build agent application": "Main NCP-AAI path: process runtime knowledge, choose a model, build the agent, evaluate trajectories, then deploy and operate.",
      "Core: Use existing model for inference": "Common support path: choose an approved model and expose it as an inference endpoint. No training data or weight update.",
      "Secondary: Fine-tune existing model": "Use when durable behavior must change. Process examples, tune, evaluate, then deploy the tuned artifact.",
      "Reference: Train model from zero": "Background lifecycle only for this cert. Useful anchor, but full pretraining is not the main Agentic AI path."
    },
    stages: [
      { id: "aai-agent-data", lane: "Core: Build agent application", context: "Process data", name: "Process agent knowledge", tools: ["NeMo Retriever"], optionalTools: ["NeMo Curator", "RAPIDS"], note: "RAG/private docs, extraction, indexing, rerank, citations, permissions; data cleanup is optional support" },
      { id: "aai-agent-model", lane: "Core: Build agent application", context: "Choose model", name: "Choose agent model", tools: ["Nemotron models"], optionalTools: ["NGC"], note: "Select the reasoning/tool-use model before wiring the application around it" },
      { id: "aai-agent-build", lane: "Core: Build agent application", context: "Build agent", name: "Build agent workflow", tools: ["NeMo Agent Toolkit", "NeMo Retriever", "NeMo Guardrails"], note: "Compose workflow, tools, memory, retrieval, tool policy, and runtime guardrails" },
      { id: "aai-agent-eval", lane: "Core: Build agent application", context: "Evaluation", name: "Evaluate agent", tools: ["NeMo Evaluator", "NeMo Agent Toolkit"], note: "Score trajectories, tool correctness, groundedness, safety, latency, and regressions" },
      { id: "aai-agent-deploy", lane: "Core: Build agent application", context: "Deploy", name: "Deploy and operate agent", tools: ["NIM"], optionalTools: ["NIM Operator", "Dynamo (Triton Dynamo)", "Nsight Systems"], note: "Run model endpoints and agent services; add K8s, distributed serving, or profiling when scale demands it" },

      { id: "aai-infer-choose", lane: "Core: Use existing model for inference", context: "Choose model", name: "Choose existing model", tools: ["Nemotron models"], optionalTools: ["NGC"], note: "Pick an approved model family, checkpoint, or catalog artifact for the task" },
      { id: "aai-infer-deploy", lane: "Core: Use existing model for inference", context: "Deploy", name: "Deploy inference endpoint", tools: ["NIM"], optionalTools: ["NIM Operator", "Dynamo (Triton Dynamo)"], note: "Expose the selected model as an API; no model training or tuning happens here" },

      { id: "aai-tune-data", lane: "Secondary: Fine-tune existing model", context: "Data processing", name: "Process tuning data", tools: ["NeMo Curator"], optionalTools: ["RAPIDS"], note: "Prepare examples, labels, preference data, PII cleanup, and validation holdouts" },
      { id: "aai-tune-model", lane: "Secondary: Fine-tune existing model", context: "Fine-tune", name: "Fine-tune behavior", tools: ["NeMo Customizer"], optionalTools: ["NeMo Framework", "NGC"], note: "Use PEFT/LoRA first; heavier SFT/alignment is more scenario-specific" },
      { id: "aai-tune-eval", lane: "Secondary: Fine-tune existing model", context: "Evaluation", name: "Evaluate tuned model", tools: ["NeMo Evaluator"], note: "Compare against baseline for task quality, safety, and regressions" },
      { id: "aai-tune-deploy", lane: "Secondary: Fine-tune existing model", context: "Deploy", name: "Deploy tuned model API", tools: ["NIM"], optionalTools: ["NIM Operator"], note: "Serve the tuned artifact or adapter-backed endpoint in production" },

      { id: "aai-train-data", lane: "Reference: Train model from zero", context: "Data processing", name: "Process training data", tools: [], optionalTools: ["NeMo Curator", "RAPIDS"], note: "Reference-only for NCP-AAI: clean, dedupe, filter, redact PII, check licenses, split data" },
      { id: "aai-train-model", lane: "Reference: Train model from zero", context: "Training", name: "Train model", tools: [], optionalTools: ["NeMo Framework", "NCCL", "NGC"], note: "Reference-only: full training recipes, distributed jobs, checkpoints, and artifact tracking" },
      { id: "aai-train-eval", lane: "Reference: Train model from zero", context: "Evaluation", name: "Evaluate model", tools: [], optionalTools: ["NeMo Evaluator"], note: "Reference-only: check quality, safety, regressions, and readiness before serving" },
      { id: "aai-train-deploy", lane: "Reference: Train model from zero", context: "Deploy", name: "Deploy model API", tools: [], optionalTools: ["NIM", "NIM Operator"], note: "Reference-only: package the approved model as an inference service and roll it out" }
    ]
  },
  "Agentic AI General": {
    title: "Agentic AI general study paths",
    lanes: {
      "Train model from zero": "Rare but useful anchor path: prepare corpora, run distributed training, evaluate the new artifact, then publish it for serving.",
      "Fine-tune existing model": "Use when an existing model is close, but durable behavior, style, rubric-following, or preference alignment must change.",
      "Use existing model or API": "Default path for many products: choose a model/API, adapt with prompts/context, wrap it in a serving layer, then measure it.",
      "Build agent/RAG application": "Keep runtime knowledge, tools, memory, policy, and trajectories separate from model training.",
      "Operate, govern, and improve": "After release, observe behavior, evaluate regressions, optimize cost/latency, and turn feedback into fixes."
    },
    stages: [
      { id: "gen-train-data", lane: "Train model from zero", context: "Training data", name: "Curate model corpus", tools: ["Training Data Curation Pipeline"], note: "Dedupe, filter, license-check, redact PII, control contamination, split holdouts" },
      { id: "gen-train-run", lane: "Train model from zero", context: "Training", name: "Run foundation training", tools: ["Foundation Model Training Stack"], note: "Training recipe, distributed jobs, checkpoints, experiment tracking, model card inputs" },
      { id: "gen-train-eval", lane: "Train model from zero", context: "Evaluation", name: "Evaluate trained model", tools: ["Evaluation and Regression Harness"], note: "Quality, safety, regression, bias, capability, and readiness evidence" },
      { id: "gen-train-serve", lane: "Train model from zero", context: "Publish trained checkpoint", name: "Register and serve trained artifact", tools: ["Model Inference Endpoint", "Model Serving Gateway"], note: "Register the newly trained checkpoint, package it as an endpoint, route traffic, and keep rollback path" },

      { id: "gen-tune-select", lane: "Fine-tune existing model", context: "Base model", name: "Select base model", tools: ["Model Selection and Registry"], note: "Choose the base model/API or checkpoint; record lineage and constraints" },
      { id: "gen-tune-data", lane: "Fine-tune existing model", context: "Tuning data", name: "Curate examples", tools: ["Training Data Curation Pipeline"], note: "Prepare SFT examples, preference pairs, tool traces, PII cleanup, validation holdouts" },
      { id: "gen-tune-adapt", lane: "Fine-tune existing model", context: "Adaptation", name: "Tune durable behavior", tools: ["Model Customization Toolkit"], note: "PEFT/LoRA, SFT, preference tuning, or alignment when prompts/RAG are not enough" },
      { id: "gen-tune-eval", lane: "Fine-tune existing model", context: "Release gate", name: "Compare against baseline", tools: ["Evaluation and Regression Harness", "Model Selection and Registry"], note: "Measure gains, regressions, safety, overfitting, and adapter/version approval" },
      { id: "gen-tune-serve", lane: "Fine-tune existing model", context: "Deploy", name: "Deploy tuned endpoint", tools: ["Model Inference Endpoint", "Model Serving Gateway"], note: "Serve the tuned model or adapter-backed endpoint with rollout controls" },

      { id: "gen-api-select", lane: "Use existing model or API", context: "Model/API", name: "Choose existing model", tools: ["Model Selection and Registry"], note: "Pick hosted API, open model, catalog artifact, or approved internal model for the job" },
      { id: "gen-api-prompt", lane: "Use existing model or API", context: "No weight change", name: "Design prompt and context", tools: ["Prompt and Context Design"], note: "Instructions, examples, output schema, context packing, prompt versions, rollback" },
      { id: "gen-api-serve", lane: "Use existing model or API", context: "Runtime", name: "Expose and route calls", tools: ["Model Inference Endpoint", "Model Serving Gateway"], note: "Endpoint/API, auth, rate limits, fallback, canary, batching, traffic policy" },
      { id: "gen-api-measure", lane: "Use existing model or API", context: "Check", name: "Measure quality and cost", tools: ["Evaluation and Regression Harness", "Cost/Latency Optimizer"], note: "Prompt evals, latency, token cost, model routing, cache/context discipline" },

      { id: "gen-agent-ingest", lane: "Build agent/RAG application", context: "Knowledge prep", name: "Ingest private knowledge", tools: ["Knowledge Ingestion and Permission Pipeline"], note: "Extract, chunk, enrich metadata, preserve ACLs, source lineage, retention rules" },
      { id: "gen-agent-rag", lane: "Build agent/RAG application", context: "Grounding", name: "Build retrieval path", tools: ["Knowledge and RAG Pipeline"], note: "Search, filter, rerank, assemble context, cite sources, evaluate groundedness" },
      { id: "gen-agent-workflow", lane: "Build agent/RAG application", context: "Workflow", name: "Orchestrate tools and memory", tools: ["Agent Orchestration Runtime", "Tool Gateway and Function Runtime", "Memory Store"], note: "State, routing, tool schemas, permissions, idempotency, memory scopes" },
      { id: "gen-agent-policy", lane: "Build agent/RAG application", context: "Runtime safety", name: "Apply policy controls", tools: ["Policy and Guardrails Layer"], note: "Input, retrieved content, tool proposal, tool result, and output checks" },
      { id: "gen-agent-eval", lane: "Build agent/RAG application", context: "Trajectory eval", name: "Evaluate agent behavior", tools: ["Evaluation and Regression Harness"], note: "Final answer, groundedness, tool correctness, safety, latency, and cost" },

      { id: "gen-ops-observe", lane: "Operate, govern, and improve", context: "Live traces", name: "Observe production runs", tools: ["Observability and Trace Monitor"], note: "Trace model, retrieval, tool, guardrail, route, cost, failure, and task success" },
      { id: "gen-ops-optimize", lane: "Operate, govern, and improve", context: "Efficiency", name: "Optimize serving path", tools: ["Cost/Latency Optimizer", "Model Serving Gateway"], note: "Batching, caching, routing, context discipline, model size, queueing, prefill/decode" },
      { id: "gen-ops-review", lane: "Operate, govern, and improve", context: "Oversight", name: "Review and govern risk", tools: ["Human Review and Governance Console", "Policy and Guardrails Layer"], note: "Approval gates, sampled review, escalation, audit evidence, policy updates" },
      { id: "gen-ops-feedback", lane: "Operate, govern, and improve", context: "Improvement loop", name: "Feed fixes back", tools: ["Evaluation and Regression Harness", "Training Data Curation Pipeline", "Prompt and Context Design"], note: "Turn incidents and review labels into evals, prompts, data fixes, or tuning work" }
    ]
  }
};

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
    focus: "This adapts behavior without changing weights. It is the right lane for instructions, examples, schemas, and context packing.",
    checks: ["Instruction hierarchy clear", "Retrieved/tool content isolated as data", "Schema validation and repair policy defined", "Prompt version tied to model and evals"],
    metrics: ["schema valid rate", "exact/task score", "refusal correctness", "citation support", "prompt-regression pass rate"],
    code: [
      "messages = [system_policy, developer_schema, user_task, evidence_block]",
      "raw = model.generate(messages)",
      "parsed = validate_or_retry_json(raw, schema)",
      "score = eval_prompt_output(parsed, gold, citations)"
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
    focus: "This is the query-time evidence path: retrieve, rerank, pack context, answer with citations, and evaluate grounding.",
    checks: ["Dense+sparse retrieval when exact terms matter", "ACL filters before retrieval/context", "Reranker top-N tuned", "Citation support checked per claim"],
    metrics: ["recall@k", "MRR/nDCG", "answer-bearing chunk rank", "groundedness", "unsupported citation rate"],
    code: [
      "dense = vector_search(embed(query), filters=acl)",
      "sparse = bm25_search(query, filters=acl)",
      "candidates = rrf([dense, sparse])",
      "context = pack(cross_encoder_rerank(query, candidates)[:8])"
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
    { label: "Build agent application", lane: "Core: Build agent application", short: "Agent build" },
    { label: "Use existing model for inference", lane: "Core: Use existing model for inference", short: "Inference" },
    { label: "Fine-tune existing model", lane: "Secondary: Fine-tune existing model", short: "Fine-tune" },
    { label: "Train model from zero reference", lane: "Reference: Train model from zero", short: "Train zero" }
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

function LifecycleStagePlaybook({ stage, examLabel, onSelectService }) {
  const stageKey = lifecycleStageKey(stage);
  const detail = examLabel === "Agentic AI General" ? GENERAL_LIFECYCLE_STAGE_DETAILS[stageKey] : null;
  if (!stage || !detail) return null;
  const playbooks = [...(stage.tools || []), ...(stage.optionalTools || [])];
  return h("section", { className: `lifecycle-stage-playbook ${serviceGroupClass(stage.tools?.[0] || "")}` },
    h("div", { className: "lifecycle-stage-playbook-title" },
      h("span", null, `${stage.lane} / ${stage.context}`),
      h("h4", null, stage.name),
      h("p", null, detail.focus)
    ),
    h("div", { className: "lifecycle-stage-playbook-grid" },
      h("article", null,
        h("strong", null, "Checks in this lane"),
        h("ul", null, detail.checks.map((item) => h("li", { key: item }, item)))
      ),
      h("article", null,
        h("strong", null, "Scores, losses, or signals"),
        h("ul", null, detail.metrics.map((item) => h("li", { key: item }, item)))
      ),
      h("article", { className: "lifecycle-stage-code" },
        h("strong", null, "Typical code shape"),
        h("pre", null, h("code", null, detail.code))
      ),
      h("article", null,
        h("strong", null, "Open playbooks"),
        playbooks.length
          ? h("div", { className: "selected-service-chips" },
              playbooks.map((tool) => h("button", {
                key: tool,
                type: "button",
                className: `selected-service-chip ${serviceGroupClass(tool)}`,
                onClick: () => onSelectService?.(tool, stage)
              }, tool))
            )
          : h("p", null, "This reference step is explained by the lane-specific checks above.")
      )
    )
  );
}

function LifecycleFlow({ examLabel: label, selectedStageId, onSelectStage, onSelectService, branding }) {
  const flow = LIFECYCLE_FLOWS[label];
  if (!flow) return null;
  const services = nvidiaServices.filter((service) => service.exams.includes(label));
  const visibleGroups = SERVICE_GROUPS.filter((group) => services.some((service) => serviceGroupName(service) === group.name));
  const cardLabel = branding.serviceLabel === "Study Playbooks" ? "study playbook" : (branding.serviceLabel || "service").toLowerCase();
  const hasLanes = flow.stages.some((stage) => stage.lane);
  const laneGroups = hasLanes
    ? [...new Set(flow.stages.map((stage) => stage.lane || "Shared"))].map((lane) => ({
        lane,
        stages: flow.stages.filter((stage) => (stage.lane || "Shared") === lane)
      }))
    : [];
  const selectedStage = flow.stages.find((stage) => lifecycleStageKey(stage) === selectedStageId) || flow.stages[0];

  function renderStage(stage) {
    const stageNumber = flow.stages.indexOf(stage) + 1;
    const stageKey = lifecycleStageKey(stage);
    function renderTool(tool, role = "core") {
      const expandedTool = expandNvidiaAcronyms(tool);
      return h("button", {
        key: `${role}-${tool}`,
        type: "button",
        className: `lifecycle-tool ${role === "optional" ? "optional" : ""} ${serviceGroupClass(tool)}`,
        onClick: (event) => {
          event.stopPropagation();
          onSelectStage?.(stageKey);
          onSelectService?.(tool, stage);
        },
        title: `Open ${expandedTool}`,
        "aria-label": `Open ${expandedTool}`
      }, tool);
    }

    return h("article", {
      key: stageKey,
      className: `lifecycle-stage ${hasLanes ? "lifecycle-path-stage" : ""} ${selectedStageId === stageKey ? "active" : ""} ${serviceGroupClass(stage.tools[0] || "")}`
    },
      h("button", {
        type: "button",
        className: "lifecycle-stage-main",
        onClick: () => onSelectStage?.(stageKey)
      },
        hasLanes ? null : h("div", { className: "lifecycle-num" }, stageNumber),
        hasLanes && stage.context ? h("span", { className: "lifecycle-stage-context" }, stage.context) : null,
        h("strong", null, stage.name),
        h("p", { className: "lifecycle-note" }, stage.note)
      ),
      stage.tools.length
        ? h("div", { className: "lifecycle-tools" },
            stage.tools.map((tool) => renderTool(tool, "core")))
        : null
      ,
      stage.optionalTools?.length
        ? h("div", { className: "lifecycle-tools lifecycle-tools-optional" },
            stage.optionalTools.map((tool) => renderTool(tool, "optional")))
        : null
    );
  }

  return h(
    "div",
    { className: "lifecycle-flow" },
    h("div", { className: "lifecycle-head" },
      h("span", null, "Lifecycle map"),
      h("h3", null, flow.title),
      h("p", { className: "muted" }, `Click a stage for context, or click a ${cardLabel} pill to open it directly.`)
    ),
    lifecycleContextFiltersForExam(label)
      ? h("div", { className: "lifecycle-pill-note" },
          h("span", { className: "lifecycle-tool note-example data" }, "Solid = core"),
          h("span", { className: "lifecycle-tool note-example optional data" }, "Dotted = support/reference")
        )
      : null,
    h("div", { className: "lifecycle-legend" },
      visibleGroups.map((group) => h("span", { key: group.name, className: `legend-chip ${group.className}` }, group.name))
    ),
    hasLanes
      ? h("div", { className: "lifecycle-lanes" },
          laneGroups.map((group) => h("section", { key: group.lane, className: `lifecycle-lane lifecycle-lane-${topicSlug(group.lane)}` },
            h("div", { className: "lifecycle-lane-title" },
              h("span", null, group.lane),
              h("p", null, flow.lanes?.[group.lane] || "Apply quality, safety, governance, and operations across every path.")
            ),
            h("div", { className: "lifecycle-grid lifecycle-grid-lane" }, group.stages.map(renderStage))
          ))
        )
      : h("div", { className: "lifecycle-grid" }, flow.stages.map(renderStage)),
    h(LifecycleStagePlaybook, {
      stage: selectedStage,
      examLabel: label,
      onSelectService
    })
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
  const currentExamLabel = examLabel(exam);
  const isGenericStudy = exam.certification.code === "AAI-GEN";
  const isLifecycleAwareNvidia = Boolean(lifecycleContextFiltersForExam(currentExamLabel));
  const effectiveStudyView = isGenericStudy && !["lifecycle", "services"].includes(studyView) ? "lifecycle" : studyView;
  useEffect(() => {
    if (isGenericStudy && !["lifecycle", "services"].includes(studyView)) setStudyView("lifecycle");
  }, [isGenericStudy, studyView, setStudyView]);
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
  const selectedSection = studySections.find((section) => section.name === selectedSectionName) || filteredSections[0] || studySections[0];
  const lifecycleFlow = LIFECYCLE_FLOWS[currentExamLabel];
  const activeLifecycleStage = lifecycleFlow?.stages.find((stage) => lifecycleStageKey(stage) === selectedLifecycleStage) || lifecycleFlow?.stages[0] || null;
  const studyChatTopic = effectiveStudyView === "sections"
    ? selectedSection.name
    : effectiveStudyView === "services"
      ? selectedService.name
      : effectiveStudyView === "suite"
        ? selectedSuiteTopic.title
        : activeLifecycleStage?.name || currentExamLabel;
  const groupedServices = SERVICE_GROUPS
    .map((group) => ({ ...group, services: sortServicesForStudyContext(filteredServices.filter((service) => serviceGroupName(service) === group.name), activeServiceFilter, currentExamLabel) }))
    .filter((group) => group.services.length);
  const lifecyclePlaybookLaneGroups = isGenericStudy ? lifecyclePlaybookGroups(examServices, activeServiceFilter, currentExamLabel) : [];
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

  function selectServiceGroup(groupName) {
    setActiveServiceGroup(groupName);
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
    setActiveServiceGroup("All");
    const nextFilter = lifecycleStageToServiceFilter(stage, currentExamLabel);
    if (nextFilter) setActiveServiceFilter(nextFilter);
    setStudyView("services");
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

  const lifecycleContextFilterGroup = h("div", { key: "context", className: "filter-group filter-group-context" },
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
          if (event.target.value) setSelectedServiceName(event.target.value);
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

  return h(
    "div",
    { className: "study-panel" },
    h(
      "div",
      { className: "study-head" },
      h("div", null,
        h("h2", null, "Study Mode"),
        h("p", null, branding.studyDescription)
      )
    ),
    h(
      "div",
      { className: `study-tabs ${isGenericStudy ? "study-tabs-compact" : ""}` },
      isGenericStudy
        ? [
            h("button", { key: "lifecycle", className: effectiveStudyView === "lifecycle" ? "active" : "", onClick: () => setStudyView("lifecycle") }, "Lifecycle map"),
            h("button", { key: "services", className: effectiveStudyView === "services" ? "active" : "", onClick: () => setStudyView("services") }, "Study Playbooks")
          ]
        : [
            h("button", { key: "suite", className: effectiveStudyView === "suite" ? "active" : "", onClick: () => setStudyView("suite") }, branding.suiteLabel),
            h("button", { key: "lifecycle", className: effectiveStudyView === "lifecycle" ? "active" : "", onClick: () => setStudyView("lifecycle") }, "By Lifecycle"),
            h("button", { key: "services", className: effectiveStudyView === "services" ? "active" : "", onClick: () => setStudyView("services") }, branding.serviceLabel),
            h("button", { key: "sections", className: effectiveStudyView === "sections" ? "active" : "", onClick: () => setStudyView("sections") }, "Exam Sections")
          ]
    ),
    h(StudyChatPanel, {
      certSlug: exam.slug || "genai_llms_professional",
      topic: studyChatTopic,
      inline: true
    }),
    effectiveStudyView === "lifecycle"
      ? h(React.Fragment, null,
          h(LifecycleFlow, {
            examLabel: currentExamLabel,
            selectedStageId: activeLifecycleStage ? lifecycleStageKey(activeLifecycleStage) : "",
            onSelectStage: setSelectedLifecycleStage,
            onSelectService: openServiceFromLifecycle,
            branding
          })
        )
      : effectiveStudyView === "services"
      ? h(React.Fragment, null,
          h("div", { className: "service-filter-panel" },
            isGenericStudy
              ? [lifecycleContextFilterGroup, serviceSelectorGroup]
              : isLifecycleAwareNvidia ? [lifecycleContextFilterGroup, familyFilterGroup, serviceSelectorGroup] : [familyFilterGroup, lifecycleContextFilterGroup, serviceSelectorGroup]
          ),
          h(
            "div",
            { className: "service-layout" },
            h(
              "div",
              { className: "service-cards" },
              isGenericStudy
                ? lifecyclePlaybookLaneGroups.map((group) => h("section", {
                    key: group.lane,
                    className: `service-group lifecycle-playbook-group lifecycle-lane-${topicSlug(group.lane)}`
                  },
                    h("h3", null, group.lane),
                    group.description ? h("p", { className: "service-group-note" }, group.description) : null,
                    group.entries.map(({ service, stage }) => h(LifecyclePlaybookCard, {
                      key: `${stage.id}-${service.name}`,
                      service,
                      stage,
                      selected: service.name === selectedService.name,
                      onClick: () => {
                        setSelectedLifecycleStage(lifecycleStageKey(stage));
                        setSelectedServiceName(service.name);
                      }
                    }))
                  ))
                : [
                    ...groupedServices.map((group) => h("section", { key: group.name, className: `service-group ${group.className}` },
                      h("h3", null, group.name),
                      group.services.map((service) => h(ServiceCard, {
                        key: service.name,
                        service,
                        selected: service.name === selectedService.name,
                        showLifecyclePriority: isLifecycleAwareNvidia,
                        activeServiceFilter,
                        currentExamLabel,
                        onClick: () => setSelectedServiceName(service.name)
                      }))
                    )),
                    otherServices.length
                      ? h("section", { key: "other", className: "service-group" },
                          h("h3", null, "Other capabilities"),
                          otherServices.map((service) => h(ServiceCard, {
                            key: service.name,
                            service,
                            selected: service.name === selectedService.name,
                            showLifecyclePriority: isLifecycleAwareNvidia,
                            activeServiceFilter,
                            currentExamLabel,
                            onClick: () => setSelectedServiceName(service.name)
                          }))
                        )
                      : null
                  ]
            ),
            h(ServiceDetail, { service: selectedService, certSlug: exam.slug || "genai_llms_professional", quickQuiz: quickServiceQuiz, generateStudyQuiz, quizDifficulty, setQuizDifficulty, studyStatus, generationStatus, cancelGeneration, branding, showLifecyclePriority: isLifecycleAwareNvidia, activeServiceFilter, currentExamLabel })
          )
        )
      : effectiveStudyView === "suite"
      ? h(SuiteStudyView, {
          topics: suiteTopics,
          selectedTopic: selectedSuiteTopic,
          setSelectedTopicId: setSelectedSuiteTopicId,
          studyStatus,
          suiteLabel: branding.suiteLabel
        })
      : h(React.Fragment, null,
          h("p", { className: "study-scope" }, `${currentExamLabel} blueprint sections only. Change the certification selector above to switch exams.`),
          h(
            "div",
            { className: "service-layout" },
            h(
              "div",
              { className: "service-cards" },
              filteredSections.map((section) => h(SectionCard, {
                key: `${section.exam}-${section.name}`,
                section,
                selected: section.name === selectedSection.name,
                onClick: () => setSelectedSectionName(section.name)
              }))
            ),
            h(SectionDetail, { section: selectedSection, certSlug: exam.slug || "genai_llms_professional", quickQuiz: quickSectionQuiz, generateStudyQuiz, quizDifficulty, setQuizDifficulty, studyStatus, generationStatus, cancelGeneration })
          )
        )
  );
}

function ServiceCard({ service, selected, onClick, priorityRole = "", showLifecyclePriority = false, activeServiceFilter = "All", currentExamLabel = "Agentic AI" }) {
  const usageSummary = showLifecyclePriority ? allLifecycleUsageBadges(service, activeServiceFilter, currentExamLabel) : [];
  const activeUsage = showLifecyclePriority ? bestLifecycleUsage(service, activeServiceFilter, currentExamLabel) || usageSummary[0] : null;
  const priorityLabel = priorityRole === "core"
    ? "Core"
    : priorityRole === "optional"
      ? "Support"
      : "";
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

function SectionCard({ section, selected, onClick }) {
  return h(
    "button",
    { className: `service-card section-card ${selected ? "active" : ""}`, onClick },
    h("span", null, `${section.exam} · ${section.weight}%`),
    h("strong", null, section.name),
    h("p", null, section.description),
    h("em", null, section.keyIdeas.slice(0, 3).join(" · "))
  );
}

function SuiteStudyView({ topics, selectedTopic, setSelectedTopicId, studyStatus, suiteLabel }) {
  const grouped = [...new Set(topics.map((topic) => topic.category))].map((category) => ({
    category,
    topics: topics.filter((topic) => topic.category === category)
  }));

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

function SuiteTopicDetail({ topic, studyStatus, suiteLabel }) {
  return h(
    "article",
    { className: "service-detail suite-detail" },
    h("div", { className: "service-detail-title" },
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
      h("span", null, "Decision guide"),
      h("h4", null, "Choose by adjacent-service clues")
    ),
    h("div", { className: "study-map" },
      h("section", { className: "identity" },
        h("span", null, "Where it fits"),
        h("strong", null, renderInline(study.lifecycle)),
        h("p", null, renderInline(study.where))
      ),
      h("section", { className: "use" },
        h("span", null, "Choose this when"),
        h("p", null, renderInline(study.use))
      ),
      h("section", { className: "avoid" },
        h("span", null, "Choose another service when"),
        h("p", null, renderInline(study.avoid))
      ),
      h("section", { className: "trap" },
        h("span", null, "Real trap"),
        h("p", null, renderInline(study.traps))
      ),
      h("section", { className: "scenario" },
        h("span", null, "Recognition clues"),
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
    || valueFromCardData(generatedBlock(markdown), "Recognition clues")
    || "Correct service choice, architecture boundary, or study decision.";
  if (!summary && !input && !output && !codeChips.length) return null;
  return {
    inputTitle: kind === "Topic" ? "What enters the question" : "What you provide",
    input,
    middleLabel: kind,
    title,
    serviceText: impl?.whatItIs || summary,
    codeChips,
    note: impl?.handoff || "",
    outputTitle: kind === "Topic" ? "What you should choose" : "What you get back",
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
      h("span", null, "Input"),
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
      h("span", null, "Output"),
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
  const activeUsages = activeServiceFilter === "All" ? [] : lifecycleUsageSummary(service, activeServiceFilter, currentExamLabel);
  const activeKeys = new Set(activeUsages.map((usage) => `${usage.lane}-${usage.stageId}-${usage.roleId}`));
  const orderedUsages = [
    ...activeUsages,
    ...allUsages.filter((usage) => !activeKeys.has(`${usage.lane}-${usage.stageId}-${usage.roleId}`))
  ];

  return h("div", { className: "agentic-usage-panel service-section" },
    h("div", { className: "service-section-heading" },
      h("span", null, "Lifecycle usage"),
      h("h4", null, "Where this service appears in the lifecycle")
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

function ServiceDetail({ service, certSlug, quickQuiz, generateStudyQuiz, quizDifficulty, setQuizDifficulty, studyStatus, generationStatus, cancelGeneration, branding = { serviceLabel: "Service" }, showLifecyclePriority = false, activeServiceFilter = "All", currentExamLabel = "Agentic AI" }) {
  const isGenericStudy = service.exams?.includes("Agentic AI General");
  const markdownState = useServiceMarkdown(service.name, !isGenericStudy);
  const capabilityState = useCapabilityMarkdown(service.name, isGenericStudy);
  const study = parseStudyContent(markdownState.markdown, service, "service");
  const implementation = extractImplementationDetails(markdownState.markdown);
  const titleSummary = service.fullName || (!implementation ? study.description : "");
  const serviceSlug = topicSlug(service.name);

  if (isGenericStudy) {
    return h(
      "article",
      { className: "service-detail generic-capability-detail" },
      h("div", { className: "service-detail-title" },
        h("span", null, "Study playbook"),
        h("h3", null, service.name),
        h("p", null, renderInline(serviceSummaryText(service, study.description)))
      ),
      h(ServiceDecisionSnapshot, { markdown: capabilityState.markdown, mode: "summary", serviceSlug: topicSlug(service.name), fallback: { ...study, name: service.name, kind: "Capability" } }),
      h(MarkdownCodePreview, { markdown: capabilityState.markdown }),
      h(LifecycleUsagePanel, { service, activeServiceFilter, currentExamLabel }),
      h(CapabilityPlaybook, {
        state: capabilityState,
        title: service.name,
        missingPath: `certifications/agentic_ai_general_study/capabilities/${topicSlug(service.name)}.md`,
        afterSectionTitle: "Pipeline",
        afterSection: h(RelatedVendorServiceCards, { service, compact: true })
      })
    );
  }

  return h(
    "article",
    { className: "service-detail" },
    h("div", { className: "service-detail-title" },
      h("span", null, branding.serviceLabel),
      h("h3", null, service.name),
      titleSummary ? h("p", null, renderInline(titleSummary)) : null
    ),
    h(ServiceDecisionSnapshot, { markdown: markdownState.markdown, mode: "summary", serviceSlug, fallback: { ...study, impl: implementation, kind: "Service" } }),
    h(ImplementationCards, { impl: implementation }),
    h(ServiceDecisionSnapshot, { markdown: markdownState.markdown, mode: "details", serviceSlug, fallback: { ...study, impl: implementation, kind: "Service" } }),
    h(StudyFirstPanel, { markdown: markdownState.markdown }),
    showLifecyclePriority ? h(LifecycleUsagePanel, { service, activeServiceFilter, currentExamLabel }) : null,
    h(ExamDecisionCards, { study }),
    h(RelatedVendorServiceCards, { service }),
    h(StudyDeepDive, { item: study }),
    isGenericStudy && markdownState.status === "missing" ? null : h(StudyMarkdown, {
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
  return h(
    "section",
    { className: "section-block section-service-guide" },
    h("div", { className: "section-service-guide-head" },
      h("span", null, "NVIDIA service map"),
      h("h4", null, "Services to use in this section"),
      h("p", null, "Use this as the quick answer map before reading the longer section notes.")
    ),
    h("div", { className: "section-service-guide-grid" },
      items.map(({ service, purpose }) => h("article", {
        key: service.name,
        className: `section-service-guide-card ${serviceGroupClass(service)}`
      },
        h("div", { className: "section-service-guide-card-title" },
          h("strong", null, service.name),
          h("span", null, service.lifecycle || serviceGroupName(service))
        ),
        h("p", null, renderInline(purpose))
      ))
    )
  );
}

function SectionDetail({ section, certSlug, quickQuiz, generateStudyQuiz, quizDifficulty, setQuizDifficulty, studyStatus, generationStatus, cancelGeneration }) {
  const markdownState = useTopicMarkdown(certSlug, section.name);
  const study = parseStudyContent(markdownState.markdown, section, "section");
  const isGenericStudy = certSlug === "agentic_ai_general_study";

  return h(
    "article",
    { className: "service-detail" },
    h("div", { className: "service-detail-title" },
      h("span", null, `Exam section · ${study.weight}%`),
      h("h3", null, study.name || section.name),
      h("p", null, renderInline(study.description))
    ),
    h(ServiceDecisionSnapshot, { markdown: markdownState.markdown, mode: "summary", serviceSlug: topicSlug(section.name), fallback: { ...study, name: study.name || section.name, kind: "Topic" } }),
    h(SectionNvidiaServiceGuide, { section, certSlug }),
    h(MarkdownCodePreview, { markdown: markdownState.markdown }),
    h(ServiceDecisionSnapshot, { markdown: markdownState.markdown, mode: "details", serviceSlug: topicSlug(section.name), fallback: { ...study, name: study.name || section.name, kind: "Topic" } }),
    h(StudyFirstPanel, { markdown: markdownState.markdown }),
    h("div", { className: "study-map section-map" },
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
    study.studyNotes.length ? h("details", { className: "section-block section-study-notes" },
      h("summary", null, "Study notes"),
      h("ul", null, study.studyNotes.map((item) =>
        h("li", { key: item }, renderInline(item))
      ))
    ) : null,
    study.mustKnow.length ? h("section", { className: "section-block section-must-know" },
      h("h4", null, "Must know"),
      h("div", { className: "must-know-grid" }, study.mustKnow.map((item) =>
        h("div", { className: "must-know-card", key: item }, renderDefinitionItem(item))
      ))
    ) : null,
    study.decisionGuide ? h("section", { className: "section-block section-table-block" },
      h("h4", null, "Decision guide"),
      h("div", { className: "section-table-wrap" },
        h("table", null,
          h("thead", null, h("tr", null, study.decisionGuide.header.map((cell, j) => h("th", { key: j }, renderInline(cell))))),
          h("tbody", null, study.decisionGuide.rows.map((row, j) =>
            h("tr", { key: j }, row.map((cell, k) => h("td", { key: k }, renderInline(cell))))
          ))
        )
      )
    ) : null,
    study.commonConfusions ? h("section", { className: "section-block section-table-block section-confusions" },
      h("h4", null, "Common confusions"),
      h("div", { className: "section-table-wrap" },
        h("table", null,
          h("thead", null, h("tr", null, study.commonConfusions.header.map((cell, j) => h("th", { key: j }, renderInline(cell))))),
          h("tbody", null, study.commonConfusions.rows.map((row, j) =>
            h("tr", { key: j }, row.map((cell, k) => h("td", { key: k }, renderInline(cell))))
          ))
        )
      )
    ) : null,
    study.miniScenarios.length ? h("section", { className: "section-block section-scenarios" },
      h("h4", null, "Mini scenario drill"),
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
    study.examSignals.length ? h("section", { className: "section-block section-signals" },
      h("h4", null, "What to recognize"),
      h("div", { className: "signal-tags" }, study.examSignals.map((sig) =>
        h("span", { className: "signal-tag", key: sig }, renderInline(sig))
      ))
    ) : null,
    study.handsOn.length ? h("section", { className: "section-block section-hands-on" },
      h("h4", null, "Hands-on checks"),
      h("ol", { className: "checklist" }, study.handsOn.map((item) =>
        h("li", { className: "checklist-item", key: item }, renderInline(item))
      ))
    ) : null,
    isGenericStudy && markdownState.status === "missing" ? null : h(StudyMarkdown, {
      state: markdownState,
      title: section.name,
      missingPath: `certifications/${certSlug}/topics/${topicSlug(section.name)}.md`,
      templatePath: "certifications/_TOPIC_TEMPLATE.md",
      summary: "Deep-dive notes"
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
  "Hands-on checks"
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
    scenario: valueFromCardData(block, "Recognition clues") || fallback.scenario || "",
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

function StudyMarkdown({ state, title, missingPath, templatePath, summary, removeStructured = true }) {
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
  const defaultOpen = body.length < 1800;
  return h("details", { className: "topic-md", open: defaultOpen },
    h("summary", null, summary),
    h(MarkdownOutline, { markdown: body }),
    h("div", { className: "topic-md-body" }, renderMarkdown(body))
  );
}

const CAPABILITY_PLAYBOOK_SECTIONS = [
  "What to study first",
  "What You Are Building",
  "Lifecycle Lane Playbooks",
  "Pipeline",
  "Platform Examples",
  "Core Concepts",
  "Decision Guide",
  "Common Traps",
  "Deep Dive",
  "Exam Signals",
  "Hands-on Checks"
];

function CapabilityPlaybook({ state, title, missingPath, afterSectionTitle, afterSection }) {
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
  const sections = markdownSections(state.markdown);
  const renderedSections = CAPABILITY_PLAYBOOK_SECTIONS.flatMap((sectionTitle) => {
    const section = sections[normalizeHeadingName(sectionTitle)];
    if (!section?.content) return [];
    const rendered = h("section", {
      key: sectionTitle,
      className: `playbook-section playbook-${topicSlug(sectionTitle)}`
    },
      h("h4", null, sectionTitle),
      h("div", { className: "playbook-section-body" }, renderMarkdown(section.content, { autoHighlight: true }))
    );
    if (afterSection && normalizeHeadingName(sectionTitle) === normalizeHeadingName(afterSectionTitle)) {
      return [rendered, h("div", { key: `${sectionTitle}-insert`, className: "playbook-inline-map" }, afterSection)];
    }
    return [rendered];
  }).filter(Boolean);
  if (!renderedSections.length) {
    return h("div", { className: "capability-playbook" },
      h("div", { className: "playbook-section-body" }, renderMarkdown(body, { autoHighlight: true }))
    );
  }
  return h("div", { className: "capability-playbook" }, renderedSections);
}

function MarkdownOutline({ markdown }) {
  const headings = String(markdown || "")
    .split("\n")
    .map((line) => line.match(/^(##|###)\s+(.+)$/))
    .filter(Boolean)
    .map((match) => ({ level: match[1].length, text: match[2].trim() }))
    .filter((heading) => !/^deep dive contents$/i.test(heading.text))
    .slice(0, 12);
  if (headings.length < 3) return null;
  return h("div", { className: "md-outline" },
    h("span", null, "Reference map"),
    h("ul", null, headings.map((heading) =>
      h("li", { key: `${heading.level}-${heading.text}`, className: heading.level === 3 ? "sub" : "" }, renderInline(heading.text))
    ))
  );
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
      const items = [];
      while (i < lines.length && (
        (ordered && /^\s*\d+\.\s+/.test(lines[i])) ||
        (!ordered && /^\s*[-*]\s+/.test(lines[i]))
      )) {
        items.push(lines[i].replace(/^\s*(?:\d+\.|[-*])\s+/, ""));
        i += 1;
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
      case "ul": return h("ul", { key, className: "md-ul" }, b.items.map((it, j) => h("li", { key: j }, renderListItemInline(it, renderOptions))));
      case "ol": return h("ol", { key, className: "md-ol" }, b.items.map((it, j) => h("li", { key: j }, renderListItemInline(it, renderOptions))));
      case "table":
        return h("table", { key, className: "md-table" },
          h("thead", null, h("tr", null, b.header.map((cell, j) => h("th", { key: j }, renderInline(cell, renderOptions))))),
          h("tbody", null, b.rows.map((row, j) => h("tr", { key: j }, row.map((cell, k) => h("td", { key: k }, renderInline(cell, renderOptions))))))
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
  "p95", "p99", "guardrails", "policy", "observability", "tool calls",
  "hosted API", "open-weight model", "open-weight", "self-hosted endpoint",
  "NeMo Customizer", "NeMo microservice", "API-driven model customization",
  "base Model Entity", "Dataset FileSet", "customization job", "LoRA adapter",
  "fine-tuned Model Entity", "managed fine-tuning",
  "base checkpoint", "tuned adapter", "tuned adapters", "embedding model",
  "reasoning model", "multimodal model", "model artifact", "model artifacts",
  "base model", "base models", "data residency", "deployment environment",
  "auditability", "failure modes", "eval report", "eval reports",
  "evals", "risk approval", "FP16", "BF16",
  "FP8", "INT8", "INT4", "quantized", "distilled", "adapter-backed",
  "tool-specialized", "MoE", "rollback-ready"
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

function ServiceMarkdown({ serviceName }) {
  const [state, setState] = useState({ status: "idle", markdown: "" });
  const slug = topicSlug(serviceName);
  useEffect(() => {
    let cancelled = false;
    setState({ status: "loading", markdown: "" });
    fetch(`/api/service?slug=${encodeURIComponent(slug)}`)
      .then((r) => r.ok ? r.json() : Promise.reject(r.status))
      .then((data) => { if (!cancelled) setState({ status: "ok", markdown: data.markdown || "" }); })
      .catch(() => { if (!cancelled) setState({ status: "missing", markdown: "" }); });
    return () => { cancelled = true; };
  }, [slug]);
  if (state.status === "loading") return null;
  if (state.status === "missing") {
    return h("div", { className: "topic-md missing" },
      h("p", { className: "muted" },
        `No deep-dive markdown yet for "${serviceName}". Create `,
        h("code", null, `certifications/_shared/services/${slug}.md`),
        ` from `,
        h("code", null, "certifications/_SERVICE_TEMPLATE.md"),
        ".")
    );
  }
  const isStub = /status:\s*stub/i.test(state.markdown) || /Stub — populate/i.test(state.markdown);
  if (isStub) {
    return h("details", { className: "topic-md missing" },
      h("summary", null, "Markdown source is ready to edit"),
      h("p", { className: "muted" },
        "Deep-dive content will render here after you replace the TODOs in ",
        h("code", null, `certifications/_shared/services/${slug}.md`),
        ".")
    );
  }
  const body = state.markdown.replace(/^---[\s\S]*?---\s*/, "");
  return h("details", { className: "topic-md", open: true },
    h("summary", null, "Deep-dive notes (shared across certs)"),
    h("div", { className: "topic-md-body" }, renderMarkdown(body))
  );
}

function TopicMarkdown({ certSlug, sectionName }) {
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
  if (state.status === "loading") return null;
  if (state.status === "missing") {
    return h("div", { className: "topic-md missing" },
      h("p", { className: "muted" },
        `No deep-dive markdown yet for "${sectionName}". Create `,
        h("code", null, `certifications/${certSlug}/topics/${topicSlug(sectionName)}.md`),
        ` from the template at `,
        h("code", null, "certifications/_TOPIC_TEMPLATE.md"),
        ".")
    );
  }
  const isStub = /status:\s*stub/i.test(state.markdown) || /Stub — populate/i.test(state.markdown);
  if (isStub) {
    return h("details", { className: "topic-md missing" },
      h("summary", null, "Markdown source is ready to edit"),
      h("p", { className: "muted" },
        "Deep-dive content will render here after you replace the TODOs in ",
        h("code", null, `certifications/${certSlug}/topics/${topicSlug(sectionName)}.md`),
        ".")
    );
  }
  // Strip frontmatter for display.
  const body = state.markdown.replace(/^---[\s\S]*?---\s*/, "");
  return h("details", { className: "topic-md", open: true },
    h("summary", null, "Deep-dive notes"),
    h("div", { className: "topic-md-body" }, renderMarkdown(body))
  );
}

function StudyDeepDive({ item, generic = false }) {
  const groups = [
      [generic ? "Mental model notes" : "How to think about it", item.studyNotes],
      ["Must know", item.mustKnow],
      ["Recognition cues", item.examSignals],
      [generic ? "Practice checks" : "Hands-on checks", item.handsOn],
      [generic ? "Related capabilities" : "Adjacent services", item.relatedServices]
  ].filter(([, values]) => Array.isArray(values) && values.length);

  if (!groups.length) return null;
  return h(
    "div",
    { className: "study-deep-dive service-section" },
    h("div", { className: "service-section-heading" },
      h("span", null, generic ? "Deep knowledge" : "Service memory"),
      h("h4", null, generic ? "What to internalize" : "What to remember")
    ),
    h("div", { className: "study-deep-dive-grid" },
      groups.map(([label, values]) => h(
        "section",
        { key: label, className: `study-group ${topicSlug(label)}` },
        h("h4", null, label),
        h("ul", null, values.map((value) => h("li", { key: value }, renderInline(label === "Related capabilities" || label === "Adjacent services" ? expandNvidiaAcronyms(value) : value))))
      ))
    )
  );
}

const GENERATE_COUNTS = [1, 5, 10];
const GENERATE_DIFFICULTIES = ["easier", "medium", "hard", "advanced", "expert"];
function practiceStudyByOptions(isGenericStudy, currentExamLabel = "Agentic AI") {
  return [
    { value: "recommended", label: "Recommended" },
    { value: "service", label: isGenericStudy ? "Study playbook" : "NVIDIA service" },
    { value: "lifecycle", label: currentExamLabel === "GenAI LLMs" ? "GenAI LLM lifecycle" : "Agentic AI lifecycle" },
    { value: "keyword", label: "Keyword" }
  ];
}

function cleanLifecycleLabel(label) {
  return String(label || "").replace(/^(Core|Secondary|Reference):\s*/, "");
}

function agenticLifecycleOptions(label = "Agentic AI") {
  const flow = LIFECYCLE_FLOWS[label] || LIFECYCLE_FLOWS["Agentic AI"];
  const stages = flow?.stages || [];
  return [
    { lane: "__all__", label: "All lifecycles", stages },
    ...Object.keys(flow?.lanes || {}).map((lane) => ({
    lane,
    label: cleanLifecycleLabel(lane),
    stages: stages.filter((stage) => stage.lane === lane)
    }))
  ];
}

function buildPracticeTarget({ studyBy, serviceName, lifecycleLane, keyword, lifecycleLabel = "Agentic AI" }) {
  if (studyBy === "service") {
    if (serviceName === "__all__") {
      return {
        label: lifecycleLabel === "Agentic AI General" ? "All study playbooks" : "All NVIDIA services",
        keywords: [],
        all: true,
        topic: lifecycleLabel === "Agentic AI General"
          ? "All general study playbooks and capability questions."
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
    if (option?.lane === "__all__") {
      return {
        label: "All lifecycles",
        keywords: [],
        all: true,
        topic: `All ${lifecycleLabel} lifecycle paths.`,
        service: null
      };
    }
    const tools = stages.flatMap((stage) => [...(stage.tools || []), ...(stage.optionalTools || [])]);
    const stageNames = stages.flatMap((stage) => [stage.name, stage.context, stage.note]);
    const label = option?.label || `${lifecycleLabel} lifecycle`;
    return {
      label,
      keywords: [label, lifecycleLane, ...stageNames, ...tools],
      topic: `${lifecycleLabel} lifecycle: ${label}. Stages: ${stages.map((stage) => `${stage.name} (${stage.context})`).join("; ")}. Tools: ${[...new Set(tools)].join(", ")}.`,
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
  if (!target?.keywords?.length) return [];
  return questions.filter((question) => questionMatchesAnyKeyword(question, target.keywords));
}

function mergePracticeTopic(target, extraTopic) {
  const extra = String(extraTopic || "").trim();
  return [target?.topic, extra].filter(Boolean).join(" | ");
}

function ContextualDrillBar({ topic, certSlug, quickQuiz, onGenerate, quizDifficulty, setQuizDifficulty, generationStatus, cancelGeneration, studyStatus }) {
  const [count, setCount] = useState(1);
  const running = generationStatus?.state === "running";

  return h("div", { className: "ctx-drill-bar" },
    h("div", { className: "ctx-drill-cols" },
      h("div", { className: "ctx-drill-col ctx-drill-generate" },
        h("div", { className: "ctx-drill-head" },
          h("span", { className: "eyebrow" }, "Drill this topic"),
          h("strong", null, topic)
        ),
        h("div", { className: "ctx-drill-row" },
          h("span", { className: "ctx-drill-label" }, "Quantity"),
          h("div", { className: "ctx-drill-pills" },
            GENERATE_COUNTS.map((n) => h("button", {
              key: n, type: "button",
              className: `ctx-pill ${count === n ? "active" : ""}`,
              onClick: () => setCount(n), disabled: running
            }, `${n}Q`))
          )
        ),
        h("div", { className: "ctx-drill-row" },
          h("span", { className: "ctx-drill-label" }, "Difficulty"),
          h("div", { className: "ctx-drill-pills" },
            GENERATE_DIFFICULTIES.map((d) => h("button", {
              key: d, type: "button",
              className: `ctx-pill ctx-diff ctx-diff-${d} ${quizDifficulty === d ? "active" : ""}`,
              onClick: () => setQuizDifficulty(d), disabled: running
            }, d))
          )
        ),
        h("div", { className: "ctx-drill-actions" },
          h("button", {
            type: "button", className: "ctx-generate-btn",
            onClick: () => onGenerate({ difficulty: quizDifficulty, count }),
            disabled: running
          }, running ? "Generating…" : `Generate ${count} ${quizDifficulty}`),
          h("button", {
            type: "button", className: "ctx-bank-btn",
            onClick: quickQuiz, disabled: running
          }, "Bank quiz"),
          running ? h("button", { type: "button", className: "ghost small", onClick: cancelGeneration }, "Cancel") : null
        ),
        studyStatus ? h("p", { className: "study-status" }, studyStatus) : null,
        generationStatus?.message ? h("p", { className: `generation-status ${generationStatus.state}` }, generationStatus.message) : null
      ),
      h("div", { className: "ctx-drill-col ctx-drill-coach" },
        h(StudyChatPanel, { certSlug, topic, alwaysOpen: true })
      )
    )
  );
}

function PracticeDrillSetup({
  count,
  setCount,
  difficulty,
  setDifficulty,
  bankCount,
  generatedCount,
  target,
  running = false,
  generationStatus = null,
  onGenerateNew,
  onCancelGenerate,
  onStartBank,
  onStartGenerated
}) {
  const bankStartCount = Math.min(count, bankCount);
  const generatedStartCount = Math.min(count, generatedCount);
  const generateCount = Math.min(count, 10);
  const targetLabel = target?.label || "selected focus";
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
          DRILL_DIFFICULTIES.map((d) =>
            h("button", { key: d, type: "button", className: `drill-chip drill-chip-difficulty diff-${d} ${difficulty === d ? "active" : ""}`, onClick: () => setDifficulty(d) }, d)
          )
        )
      )
    ),
    h("div", { className: "practice-drill-summary" },
      h("strong", null, targetLabel),
      h("span", null, `${bankCount} matching bank question${bankCount === 1 ? "" : "s"} · ${generatedCount} matching generated question${generatedCount === 1 ? "" : "s"} for this focus and difficulty`)
    ),
    h("div", { className: "practice-drill-actions" },
      h("button", { type: "button", className: "pp-btn pp-btn-primary", disabled: !bankCount, onClick: onStartBank },
        bankStartCount ? `Start ${bankStartCount} from bank` : "No bank match"
      ),
      h("button", { type: "button", className: "pp-btn", disabled: !generatedCount, onClick: onStartGenerated },
        generatedStartCount ? `Start ${generatedStartCount} generated` : "No generated match"
      ),
      onGenerateNew
        ? h("button", { type: "button", className: "pp-btn pp-btn-generate", disabled: running, onClick: onGenerateNew },
            running ? "Generating..." : `Generate ${generateCount} new`
          )
        : null
    ),
    generationStatus?.message ? h("p", { className: `generation-status ${generationStatus.state}` }, generationStatus.message) : null,
    running && onCancelGenerate ? h("button", { type: "button", className: "ghost small", onClick: onCancelGenerate }, "Cancel generation") : null
  );
}

function DrillInlineForm({
  exam,
  generateQuestions,
  generationStatus,
  cancelGeneration,
  drillRecentMistakes,
  approvedGenerated,
  startFlow,
  target,
  studyBy,
  allowBank,
  allowGenerate,
  bankMatches,
  startTargetedGuidedPractice
}) {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("hard");
  const [count, setCount] = useState(1);
  const running = generationStatus.state === "running";
  const targetLabel = target?.label || "recommended weak domains";
  const bankCount = bankMatches?.length || 0;

  function doGenerate(e) {
    e.preventDefault();
    if (!allowGenerate) return;
    generateQuestions({
      count,
      difficulty,
      topic: mergePracticeTopic(target, topic),
      weakOnly: studyBy === "recommended" && !topic.trim(),
      service: target?.service || null
    });
  }

  function startBankDrill() {
    if (!allowBank) return;
    if (studyBy === "recommended") {
      startFlow("practice-coach-bank");
      return;
    }
    startTargetedGuidedPractice({ questions: bankMatches, label: targetLabel });
  }

  return h("div", { className: "pp-card-foot drill-inline" },
    h("form", { onSubmit: doGenerate },
      h("div", { className: "drill-selectors" },
        h("div", { className: "drill-group" },
          h("span", { className: "drill-label" }, "Count"),
          h("div", { className: "drill-chip-group" },
            GENERATE_COUNTS.map((n) =>
              h("button", { key: n, type: "button", className: `drill-chip ${count === n ? "active" : ""}`, onClick: () => setCount(n), disabled: running }, `${n}Q`)
            )
          )
        ),
        h("div", { className: "drill-group drill-group-diff" },
          h("span", { className: "drill-label" }, "Difficulty"),
          h("div", { className: "drill-chip-group" },
            GENERATE_DIFFICULTIES.map((d) =>
              h("button", { key: d, type: "button", className: `drill-chip drill-chip-difficulty diff-${d} ${difficulty === d ? "active" : ""}`, onClick: () => setDifficulty(d), disabled: running }, d)
            )
          )
        )
      ),
      h("div", { className: "drill-generate-row" },
        h("input", { type: "text", className: "drill-topic", placeholder: "Extra keyword or topic (optional)", value: topic, onChange: (e) => setTopic(e.target.value), disabled: running, maxLength: 200 }),
        h("button", { type: "submit", className: "pp-btn pp-btn-generate", disabled: running || !allowGenerate },
          running ? "Generating…" : `Generate ${count}`
        ),
        running ? h("button", { type: "button", className: "ghost small", onClick: cancelGeneration }, "Cancel") : null
      )
    ),
    generationStatus?.message ? h("p", { className: `generation-status ${generationStatus.state}` }, generationStatus.message) : null,
    h("div", { className: "drill-shortcuts" },
      h("button", { type: "button", className: "drill-shortcut-btn", disabled: running || !allowBank || !bankCount, onClick: startBankDrill },
        studyBy === "recommended" ? "Start bank guided" : `Start bank (${bankCount}Q)`
      ),
      h("button", { type: "button", className: "drill-shortcut-btn", disabled: running, onClick: () => drillRecentMistakes(5) }, "Drill 5 recent mistakes"),
      approvedGenerated
        ? h("button", { type: "button", className: "drill-shortcut-btn", onClick: () => startFlow("practice-generated") }, `Drill pool (${approvedGenerated}Q)`)
        : null
    )
  );
}

function StudyChatPanel({ certSlug, topic, alwaysOpen = false, compact = false, inline = false }) {
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
  const examples = isGenericStudy
    ? ['Where does MinHash fit?', 'RAG or fine-tuning?', 'What is a tool gateway?']
    : ['What is KV cache?', 'Difference between NIM and Triton?', 'When to use LoRA vs SFT?'];

  if (inline) {
    return h('div', { className: 'study-assistant-panel' },
      h('div', { className: 'study-assistant-head' },
        h('div', null,
          h('strong', null, 'Ask tutor'),
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
        h('span', { className: 'helper-chat-desc' }, isGenericStudy ? 'Ask anything about agentic AI lifecycle concepts' : 'Ask anything about NVIDIA tools or certification topics')
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
          compact ? null : h('p', null, topic ? 'Ask anything about ' + topic + (isGenericStudy ? ' or related lifecycle topics.' : ' or related NVIDIA topics.') : isGenericStudy ? 'Ask anything about agentic AI lifecycle, tools, RAG, serving, or governance.' : 'Ask anything about NVIDIA tools, LLMs, or certification concepts.'),
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

function sourceLabel(source, variant = "mock") {
  if (variant === "drill") return source === "generated" ? "Generated drills" : "Saved drills";
  return source === "generated" ? "Generated mocks" : "Original mocks";
}

function mockSetSummary(mocks, variant = "mock") {
  const totalQuestions = mocks.reduce((sum, mock) => sum + (mock.questionCount || 0), 0);
  if (variant === "drill") return `${mocks.length} set${mocks.length === 1 ? "" : "s"} · ${totalQuestions} total questions`;
  return `${mocks.length} test${mocks.length === 1 ? "" : "s"} · ${totalQuestions} total questions`;
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
    h("span", { className: "mock-control-label" }, variant === "drill" ? "Drill source" : "Mock source"),
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

function MockInventory({ availableMocks = [], selectedMockSource = "original", selectedMockId = "" }) {
  const groups = groupMocksBySource(availableMocks);
  const sources = ["original", "generated"].filter((source) => groups[source].length);
  if (!sources.length) return null;
  return h("div", { className: "mock-inventory" },
    h("div", { className: "mock-inventory-head" },
      h("strong", null, "Available mock tests"),
      h("span", null, `${availableMocks.length} total`)
    ),
    h("div", { className: "mock-inventory-grid" },
      sources.map((source) => h("section", { key: source, className: `mock-inventory-set ${source === selectedMockSource ? "active" : ""}` },
        h("div", { className: "mock-set-title" },
          h("span", null, sourceLabel(source)),
          h("em", null, mockSetSummary(groups[source]))
        ),
        h("ul", null,
          groups[source].map((mock) => h("li", {
            key: `${source}-${mock.id}`,
            className: mock.id === selectedMockId && source === selectedMockSource ? "selected" : ""
          },
            h("span", null, mock.name),
            h("strong", null, `${mock.questionCount}Q`)
          ))
        )
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
        sourceMocks.map((m) => h("option", { key: `${m.source}-${m.id}`, value: m.id }, `${m.name} · ${m.questionCount} questions · ${m.durationMinutes} min`))
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
  const approvedGenerated = exam.approvedGeneratedIds?.length || 0;
  const pendingCount = exam.pendingGeneratedIds?.length || 0;
  const mockGroups = groupMocksBySource(availableMocks);
  const bankCount = Array.isArray(exam.practicePoolIds) && exam.practicePoolIds.length ? exam.practicePoolIds.length : exam.questions.length;
  const isGenericStudy = exam.certification.code === "AAI-GEN";
  const currentExamLabel = examLabel(exam);
  const practiceServices = sortServices(nvidiaServices.filter((service) => service.exams.includes(currentExamLabel)));
  const lifecycleOptions = agenticLifecycleOptions(currentExamLabel);
  const studyByOptions = practiceStudyByOptions(isGenericStudy, currentExamLabel).filter((option) => option.value !== "recommended");
  const defaultStudyBy = studyByOptions[0]?.value || "keyword";
  const [studyBy, setStudyBy] = useState(defaultStudyBy);
  const [serviceName, setServiceName] = useState("__all__");
  const [lifecycleLane, setLifecycleLane] = useState(lifecycleOptions[0]?.lane || "");
  const [keyword, setKeyword] = useState("");
  const [drillCount, setDrillCount] = useState(20);
  const [drillDifficulty, setDrillDifficulty] = useState("hard");
  useEffect(() => {
    if (!studyByOptions.some((option) => option.value === studyBy)) {
      setStudyBy(defaultStudyBy);
    }
    if (serviceName !== "__all__" && practiceServices.length && !practiceServices.some((service) => service.name === serviceName)) {
      setServiceName("__all__");
    }
    if (lifecycleOptions.length && !lifecycleOptions.some((option) => option.lane === lifecycleLane)) {
      setLifecycleLane(lifecycleOptions[0].lane);
    }
  }, [studyByOptions, studyBy, defaultStudyBy, practiceServices, serviceName, lifecycleOptions, lifecycleLane]);
  const practiceIdSet = new Set(Array.isArray(exam.practicePoolIds) && exam.practicePoolIds.length ? exam.practicePoolIds : exam.questions.map((q) => q.id));
  const practicePool = exam.questions.filter((q) => practiceIdSet.has(q.id));
  const approvedSet = new Set(exam.approvedGeneratedIds || []);
  const bankOnlyPool = practicePool.filter((q) => !approvedSet.has(q.id));
  const generatedPool = exam.questions.filter((q) => approvedSet.has(q.id));
  const target = buildPracticeTarget({ studyBy, serviceName, lifecycleLane, keyword, lifecycleLabel: currentExamLabel });
  const bankMatches = filteredPracticeQuestions(bankOnlyPool, target, studyBy);
  const generatedMatches = filteredPracticeQuestions(generatedPool, target, studyBy);
  const canUseStudyFilters = ["Agentic AI", "Agentic AI General", "GenAI LLMs"].includes(currentExamLabel);
  const bankDifficultyMatches = questionsForDifficulty(bankMatches, drillDifficulty);
  const generatedDifficultyMatches = questionsForDifficulty(generatedMatches, drillDifficulty);
  const profileRecommendations = h(ProfileRecommendations, { dashboard, learnerProfile, isGenericStudy });

  const recommendedReviewGrid = h("div", { className: `practice-overview-grid ${canUseStudyFilters ? "practice-overview-secondary" : ""}` },
    h("div", { className: "pp-card pp-card-guided pp-card-feature" },
      h("div", { className: "pp-card-body" },
        h("span", { className: "pp-badge pp-badge-guided" }, "Recommended"),
        h("h3", null, "Weak-domain guided practice"),
        h("p", null, `${ADAPTIVE_PRACTICE_TARGET} untimed questions selected from your weakest blueprint domains. Separate from the Study By filter below.`)
      ),
      h("div", { className: "pp-card-foot pp-card-actions" },
        h("button", {
          className: "pp-btn pp-btn-primary pp-btn-full",
          disabled: !hasBank || !bankOnlyPool.length,
          onClick: () => startFlow("practice-coach-bank")
        }, `Start weak-domain bank (${Math.min(ADAPTIVE_PRACTICE_TARGET, bankOnlyPool.length)}Q)`),
        approvedGenerated
          ? h("button", {
              className: "pp-btn pp-btn-full",
              onClick: () => startFlow("practice-coach-generated")
            }, `Start weak-domain generated (${Math.min(ADAPTIVE_PRACTICE_TARGET, approvedGenerated)}Q)`)
          : h("span", { className: "pp-card-hint" }, "No approved generated drafts yet")
      )
    ),
    h("div", { className: "pp-side-panel practice-review-panel" },
      h("div", { className: "pp-side-head" },
        h("span", { className: "pp-badge pp-badge-review" }, "Review"),
        h("h3", null, isGenericStudy ? "Generated drill review" : "Mock test review")
      ),
      h("p", { className: "muted" }, isGenericStudy
        ? "Review fixed generated study sets. Separate from the Study By filter below."
        : "Review fixed mock tests. Separate from the Study By filter below."),
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
        h("span", { className: "pp-badge pp-badge-drill" }, "Study by"),
        h("h3", null, `Practice ${target.label}`),
        h("p", null, "Choose a focus, then start from the bank, approved generated questions, or create new questions for this topic."),
        h(PracticeScopePanel, {
          studyBy,
          setStudyBy,
          studyByOptions,
          serviceLabel: isGenericStudy ? "Study playbook" : "NVIDIA service",
          keywordPlaceholder: isGenericStudy
            ? "RAG, policy controls, model routing..."
            : currentExamLabel === "GenAI LLMs"
              ? "TensorRT-LLM, NIM, Retriever, LoRA..."
              : "NeMo Curator, fine-tune, Retriever...",
          agenticServices: practiceServices,
          serviceName,
          setServiceName,
          lifecycleOptions,
          lifecycleLane,
          setLifecycleLane,
          keyword,
          setKeyword,
          bankMatches,
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
          bankCount: bankDifficultyMatches.length,
          generatedCount: generatedDifficultyMatches.length,
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
            label: `${target.label} generated pool`,
            count: drillCount,
            difficulty: drillDifficulty,
            flowName: "practice-generated"
          })
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
          approvedGenerated
            ? h("button", {
                className: "pp-btn pp-btn-full",
                disabled: !generatedMatches.length,
                onClick: () => studyBy === "recommended"
                  ? startFlow("practice-coach-generated")
                  : startTargetedGuidedPractice({ questions: generatedMatches, label: `${target.label} generated pool` })
              }, generatedMatches.length ? `Guided generated (${Math.min(ADAPTIVE_PRACTICE_TARGET, generatedMatches.length)}Q)` : "No generated match")
            : h("span", { className: "pp-card-hint" }, "No approved generated drafts yet")
        )
      ),

      h("div", { className: "pp-card pp-card-drill pp-card-feature" },
        h("div", { className: "pp-card-body" },
          h("span", { className: "pp-badge pp-badge-drill" }, "Drill"),
          h("h3", null, "Question drill setup"),
          h("p", null, "Choose count and difficulty, then start from the selected bank scope or approved generated drafts.")
        ),
        h("div", { className: "pp-card-foot" },
          h(PracticeDrillSetup, {
            count: drillCount,
            setCount: setDrillCount,
            difficulty: drillDifficulty,
            setDifficulty: setDrillDifficulty,
            bankCount: bankDifficultyMatches.length,
            generatedCount: generatedDifficultyMatches.length,
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
              label: `${target.label} generated pool`,
              count: drillCount,
              difficulty: drillDifficulty,
              flowName: "practice-generated"
            })
          })
        )
      )
    )
  );

  return h("div", { className: `practice-panel practice-workspace ${isGenericStudy ? "generic-practice" : ""}` },
    h("div", { className: "pp-head" },
      h("div", null,
        h("h2", null, "Practice"),
        h("p", { className: "muted" }, isGenericStudy
          ? "Pick the next best drill or generate new scenario questions."
          : "Pick the next best drill, review fixed mocks, or generate new scenario questions.")
      ),
      h("span", { className: "pp-bank-count" }, `${bankCount}/${exam.questions.length} active questions`)
    ),

    !hasBank
      ? h("p", { className: "empty-bank-note" }, `No ${exam.certification.code} questions yet - generate some below.`)
      : null,

    h("div", { className: "practice-dashboard" },
      h("div", { className: "practice-stat" },
        h("span", null, "Question bank"),
        h("strong", null, `${bankCount}/${exam.questions.length}`),
        h("em", null, "active / total")
      ),
      isGenericStudy ? null : h("div", { className: "practice-stat" },
        h("span", null, "Approved drafts"),
        h("strong", null, `${approvedGenerated}Q`),
        h("em", null, pendingCount ? `${pendingCount} pending review` : "all reviewed")
      ),
      isGenericStudy ? null : h("div", { className: "practice-stat" },
        h("span", null, "Original mocks"),
        h("strong", null, `${mockGroups.original.length}`),
        h("em", null, mockGroups.original.map((m) => `${m.questionCount}Q`).join(" · ") || "none")
      ),
      isGenericStudy ? null : h("div", { className: "practice-stat" },
        h("span", null, "Generated mocks"),
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

    pendingCount ? h(ReviewQueueCompact, { pendingCount, selectedCertSlug, onChange: refreshExam }) : null,

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
  target,
  embedded = false
}) {
  return h("div", { className: `practice-scope-panel ${embedded ? "practice-scope-embedded" : ""}` },
    h("div", { className: "practice-scope-head" },
      h("div", null,
        h("span", { className: "pp-profile-label" }, "Study by"),
        h("strong", null, target?.label || "recommended weak domains")
      ),
      h("span", { className: `scope-bank-count ${bankMatches.length ? "" : "empty"}` },
        studyBy === "recommended" ? "Adaptive weak-domain bank" : `${bankMatches.length} bank match${bankMatches.length === 1 ? "" : "es"}`
      )
    ),
    h("div", { className: "practice-scope-grid" },
      h("div", { className: "practice-scope-field practice-filter-buttons" },
        h("span", null, "Focus"),
        h("div", { className: "scope-button-row" },
          studyByOptions.map((option) => h("button", {
            key: option.value,
            type: "button",
            className: studyBy === option.value ? "active" : "",
            onClick: () => setStudyBy(option.value)
          }, option.label))
        )
      ),
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
            h("span", null, "Lifecycle"),
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
    .filter((d) => d.feedback?.easy || d.reliablePercent !== null || (d.measured?.attempts || d.sampleSize || 0) >= 5)
    .sort((a, b) => {
      const score = (d) => (d.reliablePercent ?? 50) + Math.min(d.measured?.attempts || 0, 10) + (d.feedback?.easy || 0) * 8 - (d.feedback?.hard || 0) * 8;
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

function ReviewQueueCompact({ pendingCount, selectedCertSlug, onChange }) {
  if (!pendingCount) return null;
  return h("details", { className: "card-details" },
    h("summary", null, `Review Queue (${pendingCount} pending)`),
    h("p", { className: "muted" }, "Approve or reject generated questions before they enter the practice pool."),
    h("button", {
      className: "primary small",
      onClick: (e) => { e.preventDefault(); document.querySelector(".review-queue-full")?.scrollIntoView({ behavior: "smooth" }); }
    }, "Open full review queue")
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


function GeneratePanel({ exam, generateQuestions, generationStatus }) {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("hard");
  const [count, setCount] = useState(1);
  const [domain, setDomain] = useState("");
  const running = generationStatus.state === "running";
  const verdicts = generationStatus.qcVerdicts || [];
  const topics = [...new Set(exam.questions
    .filter((q) => !domain || q.domain === domain)
    .map((q) => q.topic)
    .filter(Boolean))]
    .sort((a, b) => a.localeCompare(b));

  useEffect(() => {
    if (topic && !topics.includes(topic)) setTopic("");
  }, [domain, topic, topics.join("|")]);

  function submit() {
    generateQuestions({
      count,
      difficulty,
      topic: topic.trim(),
      focusDomains: domain ? [domain] : [],
      weakOnly: !domain && !topic.trim()
    });
  }

  return h(
    "details",
    { className: "generate-panel-collapsible", open: false },
    h("summary", null, "Generate practice questions (LLM, with QC)"),
    h("p", { className: "muted" }, "Drafts pass through a quality-check pass before appending to generated-questions.md. Accepted questions appear immediately in your practice pool."),
    h("div", { className: "filter-block" },
      h("div", { className: "filter-block-head" }, h("span", { className: "filter-label" }, "Domain (optional)")),
      h("select", {
        value: domain,
        onChange: (e) => setDomain(e.target.value),
        disabled: running
      },
        h("option", { value: "" }, "Any (weak-domain weighted)"),
        exam.domains.map((d) => h("option", { key: d.name, value: d.name }, d.name))
      )
    ),
    h("div", { className: "filter-block" },
      h("div", { className: "filter-block-head" }, h("span", { className: "filter-label" }, "Topic (optional)")),
      h("select", {
        value: topic,
        onChange: (e) => setTopic(e.target.value),
        disabled: running,
        style: { width: "100%", padding: "0.4rem 0.6rem" }
      },
        h("option", { value: "" }, domain ? "Any topic in this domain" : "Any topic"),
        topics.map((t) => h("option", { key: t, value: t }, t))
      )
    ),
    h("div", { className: "filter-block" },
      h("div", { className: "filter-block-head" }, h("span", { className: "filter-label" }, "Difficulty")),
      h("div", { className: "chip-list" },
        ["easier", "medium", "hard", "advanced", "expert"].map((d) => h("label", {
          key: d,
          className: `chip radio ${difficulty === d ? "checked" : ""} diff-${d}`
        },
          h("input", {
            type: "radio",
            name: "gen-difficulty",
            checked: difficulty === d,
            onChange: () => setDifficulty(d),
            disabled: running
          }),
          h("span", null, d.charAt(0).toUpperCase() + d.slice(1))
        ))
      )
    ),
    h("div", { className: "filter-block" },
      h("div", { className: "filter-block-head" }, h("span", { className: "filter-label" }, "How many")),
      h("div", { className: "chip-list" },
        [1, 5, 10].map((n) => h("label", {
          key: n,
          className: `chip radio ${count === n ? "checked" : ""}`
        },
          h("input", {
            type: "radio",
            name: "gen-count",
            checked: count === n,
            onChange: () => setCount(n),
            disabled: running
          }),
          h("span", null, `${n}`)
        ))
      )
    ),
    h("div", { className: "mode-buttons primary-actions" },
      h("button", {
        className: "primary big",
        disabled: running,
        onClick: submit
      }, running ? "Generating + QC…" : `Generate ${count} ${difficulty} question${count === 1 ? "" : "s"}`)
    ),
    generationStatus.message
      ? h("p", { className: `generation-status ${generationStatus.state}` }, generationStatus.message)
      : null,
    verdicts.length
      ? h("details", { className: "filter-block", open: false },
          h("summary", null, `QC verdicts (${verdicts.length})`),
          h("ul", { style: { fontSize: "0.85rem", paddingLeft: "1rem" } },
            verdicts.map((v, i) => h("li", { key: i },
              h("strong", null, v.verdict),
              v.id ? ` ${v.id}` : ` draft ${i + 1}`,
              (v.issues && v.issues.length) ? h("ul", null, v.issues.map((iss, j) => h("li", { key: j }, iss))) : null
            ))
          )
        )
      : null
  );
}

function TestPanel({ exam, mockSummary, mockResultsMd, busy, startFlow, availableMocks = [], selectedMockId = "mock_1", setSelectedMockId = () => {}, selectedMockSource = "original", setSelectedMockSource = () => {} }) {
  const hasQuestionBank = exam.questions.length > 0;
  const sourceMocks = availableMocks.filter((m) => (m.source || "original") === selectedMockSource);
  const selectedMock = sourceMocks.find((m) => m.id === selectedMockId) || sourceMocks[0] || { name: "Mock Test", durationMinutes: 90, questionCount: 50 };
  return h(
    "div",
    { className: "launch-panel" },
    h("h2", null, "Test"),
    !hasQuestionBank
      ? h("p", { className: "empty-bank-note" }, `No ${exam.certification.code} test bank yet. Study Mode works now; timed tests unlock after questions are added.`)
      : null,
    h("p", null, "Timed, deferred grading. No feedback until you submit. Mirrors the real Certiverse-proctored exam."),
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
            h("h3", null, "Select actual exam mock"),
            h("p", { className: "muted" }, "Choose original downloaded mocks or improved generated mocks before starting the timed exam.")
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

function ConfidenceRow({ domain, value, onChange }) {
  const labels = ["Weak", "Shaky", "OK", "Strong", "Expert"];
  const measuredText = domain.measured && domain.measured.attempts
    ? `measured ${Math.round(domain.measured.accuracy * 100)}% (${domain.measured.correct}/${domain.measured.attempts}, ${domain.measured.bucket})`
    : domain.percent === null
      ? "no score yet"
      : domain.sampleSize < 5
        ? `last sample ${domain.percent}% (${domain.sampleSize}Q, not enough evidence)`
        : `last session ${domain.percent}%`;
  return h(
    "div",
    { className: "confidence-row" },
    h("div", null, h("strong", null, domain.name), h("span", null, `${domain.weight}% exam weight · ${measuredText}`)),
    h(
      "div",
      { className: "confidence-buttons" },
      labels.map((label, index) => h("button", { key: label, className: value === index ? "active" : "", onClick: () => onChange(domain.name, index) }, label))
    )
  );
}

function ExamScreen(props) {
  const {
    questions, question, current, setCurrent, answers, answeredCount, flagged, flaggedCount,
    secondsLeft, questionRatings, answerQuestion, toggleFlag, updateQuestionRating,
    learnerNotes, updateLearnerNote, submitExam,
    busy, sessionKind, revealed, flow, generationStatus, coachNotes, coachStatus, adaptivePosition, adaptiveTarget,
    fetchCoachingAndAdvance, rememberCoachReply, revealAnswer, onExit, selectedCertSlug
  } = props;

  const isPractice = sessionKind === "practice";
  const isAdaptive = ["practice-adaptive", "practice-coach-bank", "practice-coach-generated"].includes(flow);
  const selected = answers[question.id];
  const isRevealed = isPractice && revealed[question.id];
  const correct = isRevealed && selected === question.answer;
  const submitLabel = isAdaptive ? "Finish Guided Practice" : isPractice ? "Finish Practice" : "End Exam";
  const coachEntry = coachNotes[question.id];
  const progressLabel = isAdaptive ? adaptivePosition : `${answeredCount}/${questions.length}`;

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
          ? h("button", { className: "next-btn", onClick: () => setCurrent(Math.min(questions.length - 1, current + 1)), disabled: current === questions.length - 1 }, "Next →")
          : null
      ),
      h(QuestionRatingPanel, {
        question,
        rating: questionRatings[question.id] || {},
        onRate: updateQuestionRating,
        learnerNote: learnerNotes[question.id]?.note || "",
        onNoteChange: (value) => updateLearnerNote(question.id, value)
      })
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
    questionRatings, updateQuestionRating, learnerNotes, updateLearnerNote,
    flow, coachNotes, mockResultsMd, mockDef, startFlow, onExit, onBackToPractice } = props;
  const question = questions[current];
  const selected = answers[question.id];
  const correct = selected === question.answer;
  const isMock = flow === "test-mock-1";
  const isAdaptive = ["practice-adaptive", "practice-coach-bank", "practice-coach-generated"].includes(flow);
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
      h(QuestionRatingPanel, {
        question,
        rating: questionRatings[question.id] || {},
        onRate: updateQuestionRating,
        learnerNote: learnerNotes[question.id]?.note || "",
        onNoteChange: (value) => updateLearnerNote(question.id, value)
      }),
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

function QuestionRatingPanel({ question, rating, onRate, learnerNote, onNoteChange }) {
  return h(
    "div",
    { className: "rating-panel" },
    h(
      "div",
      null,
      h("strong", null, "Learning note"),
      h("span", null, "Mark mastery and question quality. Every click is logged for your dashboard and saved to sessions.md on finish.")
    ),
    h(
      "div",
      { className: "rating-groups" },
      h(
        "div",
        { className: "rating-group horizontal" },
        h("span", null, "Mastery"),
        h("div", { className: "rating-pills" },
          ["easy", "hard"].map((value) => h("button", {
            key: value,
            "data-rating": value,
            className: `pill-btn ${rating.difficulty === value ? "active" : ""}`,
            onClick: () => onRate(question.id, { difficulty: value })
          }, value))
        )
      ),
      h(
        "div",
        { className: "rating-group horizontal" },
        h("span", null, "Question"),
        h("div", { className: "rating-pills" },
          ["good", "bad"].map((value) => h("button", {
            key: value,
            "data-rating": value,
            className: `pill-btn ${rating.quality === value ? "active" : ""}`,
            onClick: () => onRate(question.id, { quality: value })
          }, value))
        )
      )
    ),
    h(LearnerNoteField, { question, value: learnerNote, onChange: onNoteChange })
  );
}

function LearnerNoteField({ question, value, onChange }) {
  const [draft, setDraft] = useState(value || "");
  useEffect(() => { setDraft(value || ""); }, [question.id, value]);
  useEffect(() => {
    if (draft === value) return undefined;
    const timer = setTimeout(() => onChange(draft), 700);
    return () => clearTimeout(timer);
  }, [draft, value, question.id]);
  return h(
    "div",
    { className: "learner-note" },
    h("label", { htmlFor: `note-${question.id}` }, "Your note (e.g. \"I don't know this topic\", \"confused LoRA vs QLoRA\")"),
    h("textarea", {
      id: `note-${question.id}`,
      value: draft,
      placeholder: "Type a note about this question — saved as you type, persisted to sessions.md on finish.",
      onChange: (e) => setDraft(e.target.value),
      onBlur: () => { if (draft !== value) onChange(draft); },
      rows: 2
    })
  );
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

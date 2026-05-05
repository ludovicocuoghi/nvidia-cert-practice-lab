import React, { useEffect, useMemo, useRef, useState } from "/vendor/react.mjs";
import { createRoot } from "/vendor/react-dom-client.mjs";
import { nvidiaServices, serviceFilters, studySections } from "/study-services.js";

const h = React.createElement;

async function api(path, options = {}) {
  const response = await fetch(path, {
    headers: { "content-type": "application/json" },
    ...options
  });
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json();
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
  "Safety, Ethics, and Compliance": "Guardrails, bias/fairness audits, policy monitoring, responsible deployment."
};

const ADAPTIVE_PRACTICE_TARGET = 20;
const QUICK_PRACTICE_TARGET = 20;
const SECTION_QUIZ_TARGET = 10;

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

function shuffleSet(questions) {
  return shuffledQuestions(questions).map(shuffleQuestionChoices);
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
  const [learnerProfile, setLearnerProfile] = useState(null);
  const [generationStatus, setGenerationStatus] = useState({ state: "idle", message: "" });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [coachNotes, setCoachNotes] = useState({});
  const [coachStatus, setCoachStatus] = useState({ state: "idle", message: "" });
  const [mockDef, setMockDef] = useState(null);
  const [mockResultsMd, setMockResultsMd] = useState("");
  const [selectedMockId, setSelectedMockId] = useState("mock_1");
  const [availableMocks, setAvailableMocks] = useState([]);
  const [examStartedAt, setExamStartedAt] = useState(null);
  const genAbortRef = useRef(null);
  const coachAbortRef = useRef(null);
  const finalizingRef = useRef(false);

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
      setAvailableMocks(mocksListData.mocks || []);
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
    return buildDashboard(exam, history, confidence, grade, learnerProfile);
  }, [exam, history, confidence, grade, learnerProfile]);

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
      const seed = buildAdaptiveSet(adaptiveExam, dashboard, 1, recentMockSeen);
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
      setSessionQuestions(shuffleSet(shuffledQuestions(pool, QUICK_PRACTICE_TARGET)).map(shuffleQuestionChoices));
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
        const data = await api(certPath(`/api/mock?id=${mockId}`, selectedCertSlug));
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
    setSessionQuestions(shuffleSet(shuffledQuestions(pool, SECTION_QUIZ_TARGET)));
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
    setSessionQuestions(shuffleSet(shuffledQuestions(dedup, SECTION_QUIZ_TARGET)));
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
          candidateSource: flow === "practice-coach-generated" ? "generated" : flow === "practice-coach-bank" ? "bank" : "all"
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
      setCoachStatus({ state: "error", message: "Practice selector is unreachable. Tap again to retry." });
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

  return h(
    "main",
    { className: "exam-shell" },
    h(
      "header",
      { className: "exam-header" },
      h(
        "div",
        { className: "exam-title" },
        h("span", { className: "brand-mark" }, "NVIDIA"),
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
    ),
    error
      ? h("div", { className: "error" },
          h("span", null, error),
          h("button", { onClick: () => setError("") }, "Dismiss"))
      : null,
    mode === "start" ? h(StartScreen, {
      exam, domainStats, dashboard, confidence, learnerProfile, mockSummary, mockResultsMd,
      track, setTrack, busy, certifications, studyView, setStudyView,
      availableMocks, selectedMockId, setSelectedMockId,
      selectedCertSlug, setSelectedCertSlug,
      activeServiceFilter, setActiveServiceFilter, selectedServiceName, setSelectedServiceName,
      selectedSuiteTopicId, setSelectedSuiteTopicId,
      activeSectionExam, setActiveSectionExam, selectedSectionName, setSelectedSectionName,
      studyStatus, setStudyStatus,
      drillRecentMistakes, setExam,
      updateConfidence, startFlow, startSectionPractice, startKeywordPractice, generateQuestions, generateStudyQuiz, generationStatus, cancelGeneration
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

function examLabel(exam) {
  return exam?.certification?.code === "NCP-AAI" ? "Agentic AI" : "GenAI LLMs";
}

function StartScreen(props) {
  const { exam, domainStats, dashboard, confidence, learnerProfile, mockSummary, mockResultsMd,
    track, setTrack, busy, certifications, studyView, setStudyView,
    availableMocks, selectedMockId, setSelectedMockId,
    selectedCertSlug, setSelectedCertSlug,
    activeServiceFilter, setActiveServiceFilter, selectedServiceName, setSelectedServiceName,
    selectedSuiteTopicId, setSelectedSuiteTopicId,
    activeSectionExam, setActiveSectionExam, selectedSectionName, setSelectedSectionName,
    studyStatus, setStudyStatus,
    drillRecentMistakes, setExam,
    updateConfidence, startFlow, startSectionPractice, startKeywordPractice, generateQuestions, generateStudyQuiz, generationStatus, cancelGeneration } = props;

  return h(
    "section",
    { className: `start-grid ${track ? `track-${track}` : ""}` },
    h(CertificationChooser, { exam, certifications, selectedCertSlug, setSelectedCertSlug, setTrack }),
    h(TrackChooser, { track, setTrack, mockSummary, exam }),
    track === "practice"
      ? h(PracticePanel, {
          exam, domainStats, dashboard, confidence, learnerProfile,
          updateConfidence, startFlow, generateQuestions, generationStatus, cancelGeneration,
          availableMocks, selectedMockId, setSelectedMockId,
          selectedCertSlug, drillRecentMistakes,
          refreshExam: () => api(certPath("/api/exam", selectedCertSlug)).then(setExam)
        })
      : null,
    track === "test"
      ? h(TestPanel, {
          exam, mockSummary, mockResultsMd, busy, startFlow, availableMocks, selectedMockId, setSelectedMockId
        })
      : null,
    track === "study"
      ? h(StudyModePanel, {
          exam,
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
    track === "test"
      ? h(BlueprintPanel, { exam, domainStats, selectedCertSlug, compact: true })
      : null
  );
}

function CertificationChooser({ exam, certifications, selectedCertSlug, setSelectedCertSlug, setTrack }) {
  const certOptions = certifications.length
    ? certifications
    : [{ slug: exam.slug || "genai_llms_professional", name: exam.certification.name }];
  return h(
    "div",
    { className: "cert-chooser" },
    h(
      "div",
      null,
      h("span", null, "Certification"),
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

function BlueprintPanel({ exam, domainStats, selectedCertSlug, compact = false }) {
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
      h("a", { href: exam.certification.source, target: "_blank", rel: "noreferrer" }, "Official NVIDIA page")
    )
  );
}

function TrackChooser({ track, setTrack, mockSummary, exam }) {
  const hasQuestionBank = exam.questions.length > 0;
  return h(
    "div",
    { className: "track-chooser" },
    h("h2", null, "Choose your session"),
    h("p", { className: "muted" }, "Practice = short shuffled study sets with feedback. Test = exam-style under time."),
    h(
      "div",
      { className: "track-cards" },
      h(
        "button",
        { className: `track-card ${track === "study" ? "active" : ""}`, onClick: () => setTrack("study") },
        h("strong", null, "Study"),
        h("p", null, "Study exam sections and NVIDIA services before taking questions."),
        h("ul", null,
          h("li", null, "Blueprint sections for the selected certification"),
          h("li", null, "NVIDIA services by lifecycle topic"),
          h("li", null, "NVIDIA suite basics: GPUs, NeMo, NIM, Nsight, TensorRT, Nemotron"),
          h("li", null, "Banked quick quizzes from section questions")
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
      h(
        "button",
        { className: `track-card ${track === "test" ? "active" : ""}`, onClick: () => setTrack("test") },
        h("strong", null, "Actual Exam"),
        h("p", null, "Timed, deferred grading like the real Certiverse-proctored exam."),
        h("ul", null,
          h("li", null, `${exam.certification.durationMinutes} min real exam`),
          h("li", null, hasQuestionBank ? "Mock Test 1 (fixed 50Q) for repeatable progress" : "Practice tests unlock after questions exist"),
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
    title: "GenAI LLMs lifecycle",
    stages: [
      { name: "Curate Data", tools: ["NeMo Curator", "RAPIDS"], note: "Clean, dedupe, filter" },
      { name: "Train", tools: ["NeMo Framework", "NCCL", "NGC"], note: "Distributed recipes" },
      { name: "Customize", tools: ["NeMo Customizer", "NeMo Framework", "Nemotron models"], note: "SFT, LoRA, alignment" },
      { name: "Optimize", tools: ["TensorRT-LLM"], note: "Engines, KV cache" },
      { name: "Serve", tools: ["NIM", "Triton Inference Server", "Dynamo (Triton Dynamo)", "NIM Operator"], note: "APIs and rollout" },
      { name: "Retrieve", tools: ["NeMo Retriever"], note: "RAG, rerank" },
      { name: "Guard & Evaluate", tools: ["NeMo Guardrails", "NeMo Evaluator", "Nsight Systems", "Nsight Compute"], note: "Safety, quality, profiling" }
    ]
  },
  "Agentic AI": {
    title: "Agentic AI lifecycle",
    stages: [
      { name: "Prepare data", tools: ["NeMo Curator", "RAPIDS"], note: "Domain corpus" },
      { name: "Train / customize", tools: ["NeMo Framework", "NeMo Customizer", "NGC"], note: "Tune agent models" },
      { name: "Select model", tools: ["Nemotron models"], note: "Reasoning model choice" },
      { name: "Build agent", tools: ["NeMo Agent Toolkit"], note: "Plan, tools, memory" },
      { name: "Connect RAG", tools: ["NeMo Retriever"], note: "Enterprise knowledge" },
      { name: "Guardrail", tools: ["NeMo Guardrails"], note: "Tool/dialog policy" },
      { name: "Deploy", tools: ["NIM", "NIM Operator", "Dynamo (Triton Dynamo)"], note: "Endpoints, K8s" },
      { name: "Evaluate / Monitor", tools: ["NeMo Evaluator", "NeMo Agent Toolkit", "Nsight Systems"], note: "Quality, traces, latency" }
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

const SERVICE_GROUPS = [
  { name: "NeMo family", className: "nemo", match: (service) => service.name.startsWith("NeMo") },
  { name: "NIM and serving", className: "serving", match: (service) => ["NIM", "NIM Operator", "Triton Inference Server", "Dynamo (Triton Dynamo)"].includes(service.name) },
  { name: "Optimization and profiling", className: "optimize", match: (service) => ["TensorRT-LLM", "Nsight Systems", "Nsight Compute", "NCCL"].includes(service.name) },
  { name: "Data, RAG, and models", className: "data", match: (service) => ["RAPIDS", "Nemotron models", "NGC"].includes(service.name) }
];

const SERVICE_ORDER = [
  "NeMo Curator", "RAPIDS", "NGC",
  "NeMo Framework", "NCCL", "NeMo Customizer",
  "Nemotron models", "NeMo Agent Toolkit", "NeMo Retriever", "NeMo Guardrails",
  "TensorRT-LLM", "NIM", "Triton Inference Server", "Dynamo (Triton Dynamo)", "NIM Operator",
  "NeMo Evaluator", "Nsight Systems", "Nsight Compute"
];

const NVIDIA_SUITE_TOPICS = [
  {
    id: "platform-map",
    category: "Foundation",
    title: "NVIDIA AI Platform Map",
    summary: "The big picture: NVIDIA is not one product. It is hardware, systems software, model/tooling layers, optimized inference, deployment services, safety/evaluation, and profiling.",
    examSignal: "When a question names many NVIDIA tools, first identify the lifecycle phase: data, train/customize, optimize, serve, retrieve, guard/evaluate, or profile.",
    keyIdeas: [
      "**GPU hardware** provides accelerated math and memory bandwidth.",
      "**CUDA, NCCL, and libraries** expose the GPU and scale work across devices.",
      "**NeMo family** covers data curation, training/customization, retrieval, guardrails, agents, and evaluation.",
      "**TensorRT-LLM, Triton, NIM, and Dynamo** are serving/inference-side tools, but at different abstraction levels.",
      "**Nsight Systems and Nsight Compute** diagnose performance; they do not train, serve, or guardrail models."
    ],
    mustKnow: [
      "NeMo Framework builds/customizes models; NIM packages optimized model inference behind production APIs.",
      "TensorRT-LLM optimizes LLM inference engines and runtime behavior; Triton serves models from multiple frameworks.",
      "NIM Operator manages NIM lifecycle on Kubernetes; it is not an inference engine by itself.",
      "NeMo Retriever is RAG/retrieval; NeMo Guardrails is policy/safety; NeMo Evaluator is quality evaluation.",
      "Nsight Systems is timeline/system-level; Nsight Compute is CUDA kernel-level."
    ],
    traps: [
      "Do not answer with a deployment tool when the bottleneck is training, curation, or model customization.",
      "Do not answer with NeMo Framework when the question asks for a packaged inference microservice.",
      "Do not answer with Nsight Compute for an end-to-end latency timeline unless the issue has already been narrowed to one CUDA kernel."
    ],
    related: ["NeMo Framework", "NIM", "TensorRT-LLM", "Triton Inference Server", "Nsight Systems", "Nsight Compute"]
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
      "**NeMo Guardrails** constrains dialog, tool use, and safety behavior.",
      "**NeMo Evaluator** measures model or agent quality with benchmarks and judge workflows."
    ],
    mustKnow: [
      "Training/customization questions usually contrast NeMo Framework or NeMo Customizer with NIM.",
      "RAG questions usually point to NeMo Retriever, not NeMo Framework.",
      "Policy/tool-control questions point to NeMo Guardrails.",
      "Quality or LLM-as-judge questions point to NeMo Evaluator."
    ],
    traps: [
      "NeMo is not a single runtime. The family has several products with different lifecycle jobs.",
      "NeMo Framework can support deployment workflows, but exam questions usually separate it from NIM/Triton serving.",
      "Retriever does not create safety policy; Guardrails does not build vector indexes."
    ],
    related: ["NeMo Curator", "NeMo Framework", "NeMo Customizer", "NeMo Retriever", "NeMo Guardrails", "NeMo Evaluator"]
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
    examSignal: "If the scenario mentions H100, A100, memory, batch size, KV cache, FP8/FP16/BF16/TF32/INT8, MIG, NVLink, or GPU utilization, think hardware-aware optimization.",
    keyIdeas: [
      "**H100** is based on the Hopper architecture and includes fourth-generation Tensor Cores plus a Transformer Engine for FP8-oriented LLM acceleration.",
      "**H100 SXM** is commonly shown with 80GB GPU memory, 3.35TB/s memory bandwidth, NVLink up to 900GB/s, and up to 700W configurable TDP.",
      "**H100 NVL** is shown with 94GB memory, 3.9TB/s memory bandwidth, NVLink up to 600GB/s, and 350-400W configurable TDP.",
      "**MIG** partitions a GPU into isolated instances; useful for utilization/isolation, not for making one huge model fit across partitions.",
      "**NVLink/NCCL** matter when scaling training or inference across GPUs; PCIe-only setups have different communication limits."
    ],
    mustKnow: [
      "Memory capacity determines whether weights, activations, and KV cache fit.",
      "Memory bandwidth and KV cache behavior affect token throughput and latency.",
      "FP8/FP16/BF16/INT8 are precision choices; lower precision can improve throughput/memory use if accuracy is acceptable.",
      "Batching improves throughput but can hurt latency if not controlled.",
      "Adding GPUs is not always first: profile whether bottleneck is data, retrieval, CPU, network, memory, or kernels."
    ],
    traps: [
      "Do not blindly add GPUs before identifying the bottleneck.",
      "Do not use MIG as a substitute for model parallelism.",
      "Do not confuse training memory problems with serving latency problems."
    ],
    related: ["H100", "A100", "CUDA", "NCCL", "NVLink", "MIG", "Tensor Cores"]
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
      "Use Systems first when you do not know where time goes; use Compute once a specific CUDA kernel is suspicious.",
      "Profiling should precede optimization: measure bottleneck, change one variable, measure again.",
      "Common LLM serving bottlenecks include token generation, prefill, KV cache memory pressure, embedding model calls, retrieval latency, and batching policy."
    ],
    mustKnow: [
      "Systems = broad timeline. Compute = deep kernel metrics.",
      "Profiling is diagnosis; TensorRT-LLM/Triton/NIM are optimization/serving choices.",
      "Low GPU utilization may be caused by CPU preprocessing, network waits, retrieval, data loading, small batches, or synchronization."
    ],
    traps: [
      "Do not use Nsight Compute first when the issue may be CPU, network, I/O, or scheduling.",
      "Do not answer with a profiler when the question asks for the production serving component.",
      "Do not optimize kernels before confirming the kernel is the bottleneck."
    ],
    related: ["Nsight Systems", "Nsight Compute", "TensorRT-LLM", "Triton Inference Server"]
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

function serviceGroupName(service) {
  return SERVICE_GROUPS.find((group) => group.match(service))?.name || "Other NVIDIA services";
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

function servicesForStage(stage, services) {
  const names = new Set(stage.tools);
  return services.filter((service) => names.has(service.name));
}

function LifecycleFlow({ examLabel: label, selectedStageName, onSelectStage }) {
  const flow = LIFECYCLE_FLOWS[label];
  if (!flow) return null;
  return h(
    "div",
    { className: "lifecycle-flow" },
    h("div", { className: "lifecycle-head" },
      h("span", null, "Lifecycle map"),
      h("h3", null, flow.title),
      h("p", { className: "muted" }, "Click a stage to see which NVIDIA components belong there.")
    ),
    h("div", { className: "lifecycle-legend" },
      SERVICE_GROUPS.map((group) => h("span", { key: group.name, className: `legend-chip ${group.className}` }, group.name))
    ),
    h("div", { className: "lifecycle-grid" },
      flow.stages.map((s, i) => h("button", {
        key: s.name,
        className: `lifecycle-stage ${selectedStageName === s.name ? "active" : ""} ${serviceGroupClass(s.tools[0] || "")}`,
        onClick: () => onSelectStage?.(s.name)
      },
        h("div", { className: "lifecycle-num" }, i + 1),
        h("strong", null, s.name),
        h("p", { className: "lifecycle-note" }, s.note),
        s.tools.length
          ? h("div", { className: "lifecycle-tools" },
              s.tools.map((t) => h("span", { key: t, className: `lifecycle-tool ${serviceGroupClass(t)}` }, t)))
          : null
      ))
    )
  );
}

function StudyModePanel({
  exam,
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
  const topicFilters = serviceFilters.filter((filter) => !["Agentic AI", "GenAI LLMs"].includes(filter));
  const examServices = sortServices(nvidiaServices.filter((service) => service.exams.includes(currentExamLabel)));
  const filteredServices = sortServices(examServices.filter((service) => {
    if (activeServiceFilter !== "All" && !service.filters.includes(activeServiceFilter)) return false;
    if (activeServiceGroup !== "All" && serviceGroupName(service) !== activeServiceGroup) return false;
    return true;
  }));
  const selectedService = nvidiaServices.find((service) => service.name === selectedServiceName) || filteredServices[0] || nvidiaServices[0];
  const selectedSuiteTopic = NVIDIA_SUITE_TOPICS.find((topic) => topic.id === selectedSuiteTopicId) || NVIDIA_SUITE_TOPICS[0];
  const filteredSections = studySections.filter((section) => section.exam === currentExamLabel);
  const selectedSection = studySections.find((section) => section.name === selectedSectionName) || filteredSections[0] || studySections[0];
  const lifecycleFlow = LIFECYCLE_FLOWS[currentExamLabel];
  const activeLifecycleStage = lifecycleFlow?.stages.find((stage) => stage.name === selectedLifecycleStage) || lifecycleFlow?.stages[0] || null;
  const activeStageServices = activeLifecycleStage ? servicesForStage(activeLifecycleStage, examServices) : [];
  const studyChatTopic = studyView === "sections"
    ? selectedSection.name
    : studyView === "services"
      ? selectedService.name
      : studyView === "suite"
        ? selectedSuiteTopic.title
        : activeLifecycleStage?.name || currentExamLabel;
  const groupedServices = SERVICE_GROUPS
    .map((group) => ({ ...group, services: sortServices(filteredServices.filter((service) => serviceGroupName(service) === group.name)) }))
    .filter((group) => group.services.length);
  const otherServices = filteredServices.filter((service) => !SERVICE_GROUPS.some((group) => group.name === serviceGroupName(service)));
  const serviceSelectValue = filteredServices.some((service) => service.name === selectedService.name) ? selectedService.name : "";

  function quickServiceQuiz() {
    // Search bank by service name and any related framework keywords (e.g. "NeMo", "TensorRT").
    const keywords = [selectedService.name, ...(selectedService.keywords || [])].filter(Boolean);
    startKeywordPractice(selectedService.name, keywords);
  }

  function quickSectionQuiz() {
    startSectionPractice(selectedSection.name);
  }

  return h(
    "div",
    { className: "study-panel" },
    h(
      "div",
      { className: "study-head" },
      h("div", null,
        h("h2", null, "Study Mode"),
        h("p", null, `Study by lifecycle order, grouped NVIDIA services, or blueprint section. Quick quiz pulls from the local bank.`)
      )
    ),
    h(
      "div",
      { className: "study-tabs" },
      h("button", { className: studyView === "suite" ? "active" : "", onClick: () => setStudyView("suite") }, "NVIDIA Suite"),
      h("button", { className: studyView === "lifecycle" ? "active" : "", onClick: () => setStudyView("lifecycle") }, "By Lifecycle"),
      h("button", { className: studyView === "services" ? "active" : "", onClick: () => setStudyView("services") }, "NVIDIA Services"),
      h("button", { className: studyView === "sections" ? "active" : "", onClick: () => setStudyView("sections") }, "Exam Sections")
    ),
    h(StudyChatPanel, {
      certSlug: exam.slug || "genai_llms_professional",
      topic: studyChatTopic,
      inline: true
    }),
    studyView === "lifecycle"
      ? h(React.Fragment, null,
          h(LifecycleFlow, {
            examLabel: currentExamLabel,
            selectedStageName: activeLifecycleStage?.name,
            onSelectStage: setSelectedLifecycleStage
          }),
          activeLifecycleStage
            ? h("div", { className: "lifecycle-detail" },
                h("div", { className: "service-detail-title" },
                  h("span", null, "Selected lifecycle stage"),
                  h("h3", null, activeLifecycleStage.name),
                  h("p", null, activeLifecycleStage.note)
                ),
                h("div", { className: "lifecycle-stage-services" },
                  activeStageServices.length
                    ? activeStageServices.map((service) => h(ServiceCard, {
                        key: service.name,
                        service,
                        selected: service.name === selectedService.name,
                        onClick: () => {
                          setSelectedServiceName(service.name);
                          setStudyView("services");
                        }
                      }))
                    : h("p", { className: "muted" }, "This stage is mostly conceptual for the exam; no specific service card is mapped here yet.")
                )
              )
            : null
        )
      : studyView === "services"
      ? h(React.Fragment, null,
          h("div", { className: "service-filter-panel" },
            h("div", { className: "filter-group" },
              h("span", null, "Filter by service family"),
              h(
                "div",
                { className: "filter-pills" },
                ["All", ...SERVICE_GROUPS.map((group) => group.name)].map((groupName) => h("button", {
                  key: groupName,
                  className: activeServiceGroup === groupName ? "active" : "",
                  onClick: () => {
                    setActiveServiceGroup(groupName);
                    setActiveServiceFilter("All");
                    const first = examServices.find((service) =>
                      groupName === "All" || serviceGroupName(service) === groupName
                    );
                    if (first) setSelectedServiceName(first.name);
                  }
                }, groupName))
              )
            ),
            h("div", { className: "filter-group" },
              h("span", null, "Filter by lifecycle topic"),
              h(
                "div",
                { className: "filter-pills" },
                ["All", ...topicFilters].map((filter) => h("button", {
                  key: filter,
                  className: activeServiceFilter === filter ? "active" : "",
                  onClick: () => {
                    setActiveServiceFilter(filter);
                    const first = examServices.find((service) =>
                      (filter === "All" || service.filters.includes(filter)) &&
                      (activeServiceGroup === "All" || serviceGroupName(service) === activeServiceGroup)
                    );
                    if (first) setSelectedServiceName(first.name);
                  }
                }, filter))
              )
            ),
            h("div", { className: "filter-group service-selector-group" },
              h("label", { htmlFor: "service-jump-select" }, "Select service"),
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
                h("span", { className: "service-jump-meta" }, `${filteredServices.length} services visible`)
              )
            )
          ),
          h(
            "div",
            { className: "service-layout" },
            h(
              "div",
              { className: "service-cards" },
              groupedServices.map((group) => h("section", { key: group.name, className: `service-group ${group.className}` },
                h("h3", null, group.name),
                group.services.map((service) => h(ServiceCard, {
                  key: service.name,
                  service,
                  selected: service.name === selectedService.name,
                  onClick: () => setSelectedServiceName(service.name)
                }))
              )),
              otherServices.length
                ? h("section", { className: "service-group" },
                    h("h3", null, "Other NVIDIA services"),
                    otherServices.map((service) => h(ServiceCard, {
                      key: service.name,
                      service,
                      selected: service.name === selectedService.name,
                      onClick: () => setSelectedServiceName(service.name)
                    }))
                  )
                : null
            ),
            h(ServiceDetail, { service: selectedService, certSlug: exam.slug || "genai_llms_professional", quickQuiz: quickServiceQuiz, generateStudyQuiz, quizDifficulty, setQuizDifficulty, studyStatus, generationStatus, cancelGeneration })
          )
        )
      : studyView === "suite"
      ? h(SuiteStudyView, {
          topics: NVIDIA_SUITE_TOPICS,
          selectedTopic: selectedSuiteTopic,
          setSelectedTopicId: setSelectedSuiteTopicId,
          studyStatus
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

function ServiceCard({ service, selected, onClick }) {
  return h(
    "button",
    { className: `service-card ${serviceGroupClass(service)} ${selected ? "active" : ""}`, onClick },
    h("span", null, service.lifecycle),
    h("strong", null, service.name),
    h("p", null, service.description),
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

function SuiteStudyView({ topics, selectedTopic, setSelectedTopicId, studyStatus }) {
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
    h(SuiteTopicDetail, { topic: selectedTopic, studyStatus })
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

function SuiteTopicDetail({ topic, studyStatus }) {
  return h(
    "article",
    { className: "service-detail suite-detail" },
    h("div", { className: "service-detail-title" },
      h("span", null, "NVIDIA suite"),
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
      h(SuiteKnowledgeCard, { title: "Related NVIDIA terms", items: topic.related })
    ),
    h("details", { className: "suite-reference" },
      h("summary", null, "Study notes"),
      h("p", null, "Use this page as the quick NVIDIA glossary before drilling specific services. For exam questions, classify the phase first, then choose the NVIDIA product that owns that phase.")
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
  return nodes.length ? nodes : renderMarkdown(content, renderOptions);
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
      h("p", { className: "flow-kicker" }, renderInline(flow.input))
    ),
    h("div", { className: "flow-arrow", "aria-hidden": "true" }, "->"),
    h("section", { className: "flow-node flow-service" },
      h("span", null, flow.middleLabel),
      h("strong", null, flow.title),
      flow.serviceText ? h("p", { className: "flow-kicker" }, renderInline(flow.serviceText)) : null,
      flow.codeChips.length ? h("div", { className: "flow-code-stack" },
        flow.codeChips.map((chip) => h("code", { key: chip }, chip))
      ) : null,
      flow.note ? h("p", { className: "flow-note" }, renderInline(flow.note)) : null
    ),
    h("div", { className: "flow-arrow", "aria-hidden": "true" }, "->"),
    h("section", { className: "flow-node flow-output" },
      h("span", null, "Output"),
      h("strong", null, flow.outputTitle),
      h("p", { className: "flow-kicker" }, renderInline(flow.output)),
      flow.nextStep ? h("p", { className: "flow-note" }, renderInline(flow.nextStep)) : null
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

function ServiceDetail({ service, certSlug, quickQuiz, generateStudyQuiz, quizDifficulty, setQuizDifficulty, studyStatus, generationStatus, cancelGeneration }) {
  const markdownState = useServiceMarkdown(service.name);
  const study = parseStudyContent(markdownState.markdown, service, "service");
  const implementation = extractImplementationDetails(markdownState.markdown);
  const serviceSlug = topicSlug(service.name);

  return h(
    "article",
    { className: "service-detail" },
    h("div", { className: "service-detail-title" },
      h("span", null, "NVIDIA service"),
      h("h3", null, service.name),
      h("p", null, renderInline(implementation?.whatItIs || study.description)),
      implementation?.mentalModel ? h("p", { className: "service-mental-model" }, renderInline(implementation.mentalModel)) : null
    ),
    h(ServiceDecisionSnapshot, { markdown: markdownState.markdown, mode: "summary", serviceSlug, fallback: { ...study, impl: implementation, kind: "Service" } }),
    h(ImplementationCards, { impl: implementation }),
    h(ServiceDecisionSnapshot, { markdown: markdownState.markdown, mode: "details", serviceSlug, fallback: { ...study, impl: implementation, kind: "Service" } }),
    h(StudyFirstPanel, { markdown: markdownState.markdown }),
    h(ExamDecisionCards, { study }),
    h(StudyDeepDive, { item: study }),
    h(StudyMarkdown, {
      state: markdownState,
      title: service.name,
      missingPath: `certifications/_shared/services/${topicSlug(service.name)}.md`,
      templatePath: "certifications/_SERVICE_TEMPLATE.md",
      summary: "Deep-dive notes (shared across certs)"
    })
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
    h("div", {
      className: `section-service-guide-flow${items.length > 5 ? " is-multirow" : ""}`,
      "aria-label": "NVIDIA service flow, read left to right"
    },
      items.flatMap(({ service, purpose }, index) => {
        const card = h("article", {
          key: service.name,
          className: `section-service-guide-card ${serviceGroupClass(service)}`
        },
          h("span", { className: "section-service-guide-step" }, `Step ${index + 1}`),
          h("div", { className: "section-service-guide-card-title" },
            h("strong", null, service.name),
            h("span", null, service.lifecycle || serviceGroupName(service))
          ),
          h("p", null, renderInline(purpose))
        );
        if (index === items.length - 1) return [card];
        return [
          card,
          h("div", { key: `${service.name}-arrow`, className: "section-service-guide-arrow", "aria-hidden": "true" }, "→")
        ];
      })
    )
  );
}

function SectionDetail({ section, certSlug, quickQuiz, generateStudyQuiz, quizDifficulty, setQuizDifficulty, studyStatus, generationStatus, cancelGeneration }) {
  const markdownState = useTopicMarkdown(certSlug, section.name);
  const study = parseStudyContent(markdownState.markdown, section, "section");

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
    h(StudyMarkdown, {
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

function useServiceMarkdown(serviceName) {
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

function renderMarkdown(text) {
  const lines = String(text || "").replace(/\r\n/g, "\n").split("\n");
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
      case "h": return h(`h${Math.min(6, b.level + 2)}`, { key, className: "md-h" }, renderInline(b.text));
      case "p": return h("p", { key, className: "md-p" }, renderInline(b.text));
      case "quote": return h("blockquote", { key, className: "md-quote" }, renderInline(b.text));
      case "code": return h("pre", { key, className: "md-code" }, b.text);
      case "details": return h("details", { key, className: "md-details" }, h("summary", null, renderInline(b.summary)), h("div", { className: "md-details-body" }, renderMarkdown(b.text)));
      case "ul": return h("ul", { key, className: "md-ul" }, b.items.map((it, j) => h("li", { key: j }, renderInline(it))));
      case "ol": return h("ol", { key, className: "md-ol" }, b.items.map((it, j) => h("li", { key: j }, renderInline(it))));
      case "table":
        return h("table", { key, className: "md-table" },
          h("thead", null, h("tr", null, b.header.map((cell, j) => h("th", { key: j }, renderInline(cell))))),
          h("tbody", null, b.rows.map((row, j) => h("tr", { key: j }, row.map((cell, k) => h("td", { key: k }, renderInline(cell))))))
        );
      default: return null;
    }
  });
}

function renderInline(text) {
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
    if (m.index > lastIdx) out.push(source.slice(lastIdx, m.index));
    const tok = m[0];
    if (tok.startsWith("**")) out.push(h("strong", { key: `i${key++}` }, tok.slice(2, -2)));
    else if (tok.startsWith("`")) out.push(h("code", { key: `i${key++}` }, tok.slice(1, -1)));
    else if (tok.startsWith("[")) {
      const linkMatch = tok.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      out.push(h("a", { key: `i${key++}`, href: linkMatch[2], target: "_blank", rel: "noreferrer" }, linkMatch[1]));
    }
    else if (tok.startsWith("*")) out.push(h("em", { key: `i${key++}` }, tok.slice(1, -1)));
    lastIdx = m.index + tok.length;
  }
  if (lastIdx < source.length) out.push(source.slice(lastIdx));
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

function StudyDeepDive({ item }) {
  const groups = [
      ["How to think about it", item.studyNotes],
      ["Must know", item.mustKnow],
      ["Recognition cues", item.examSignals],
      ["Hands-on checks", item.handsOn],
      ["Adjacent services", item.relatedServices]
  ].filter(([, values]) => Array.isArray(values) && values.length);

  if (!groups.length) return null;
  return h(
    "div",
    { className: "study-deep-dive service-section" },
    h("div", { className: "service-section-heading" },
      h("span", null, "Service memory"),
      h("h4", null, "What to remember")
    ),
    h("div", { className: "study-deep-dive-grid" },
      groups.map(([label, values]) => h(
        "section",
        { key: label, className: `study-group ${topicSlug(label)}` },
        h("h4", null, label),
        h("ul", null, values.map((value) => h("li", { key: value }, renderInline(value))))
      ))
    )
  );
}

const GENERATE_COUNTS = [1, 5, 10];
const GENERATE_DIFFICULTIES = ["easier", "medium", "hard", "advanced", "expert"];

function SegmentedChoice({ label, value, options, onChange, disabled, formatLabel = (v) => v }) {
  return h("div", { className: "generator-control" },
    h("span", { className: "generator-label" }, label),
    h("div", { className: "segmented-choice", role: "group", "aria-label": label },
      options.map((option) =>
        h("button", {
          key: option,
          type: "button",
          className: value === option ? "active" : "",
          onClick: () => onChange(option),
          disabled
        }, formatLabel(option))
      )
    )
  );
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

function QuickGenerateBar({ exam, generateQuestions, generationStatus, cancelGeneration, certSlug }) {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("hard");
  const [count, setCount] = useState(1);
  const running = generationStatus.state === "running";

  function doGenerate(e) {
    e.preventDefault();
    generateQuestions({ count, difficulty, topic: topic.trim(), weakOnly: !topic.trim() });
  }

  return h("div", { className: "quick-generate-bar" },
    h("div", { className: "quick-generate-head" },
      h("div", null,
        h("span", { className: "eyebrow" }, "AI drill builder"),
        h("strong", null, "Generate a focused practice set")
      ),
      h("p", null, "Leave focus empty to target weak areas, or name a service/topic for a narrow drill.")
    ),
    h("form", { className: "quick-generate-form", onSubmit: doGenerate },
      h(SegmentedChoice, {
        label: "Quantity",
        value: count,
        options: GENERATE_COUNTS,
        onChange: setCount,
        disabled: running,
        formatLabel: (n) => `${n} question${n === 1 ? "" : "s"}`
      }),
      h(SegmentedChoice, {
        label: "Difficulty",
        value: difficulty,
        options: GENERATE_DIFFICULTIES,
        onChange: setDifficulty,
        disabled: running
      }),
      h("label", { className: "generator-control generator-focus" },
        h("span", { className: "generator-label" }, "Focus"),
        h("input", {
          type: "text",
          placeholder: "Optional: NeMo Retriever, RAG, LoRA, deployment...",
          value: topic,
          onChange: (e) => setTopic(e.target.value),
          disabled: running,
          maxLength: 200
        })
      ),
      h("div", { className: "generator-actions" },
        h("button", { type: "submit", className: "qg-btn", disabled: running },
          running ? "Generating…" : `Generate ${count} ${difficulty}`
        ),
        running ? h("button", { type: "button", className: "ghost", onClick: cancelGeneration }, "Cancel") : null
      )
    ),
    generationStatus?.message ? h("p", { className: `generation-status ${generationStatus.state}` }, generationStatus.message) : null
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
        setError(err.message || 'Chat failed');
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

  const examples = ['What is KV cache?', 'Difference between NIM and Triton?', 'When to use LoRA vs SFT?'];

  if (inline) {
    return h('div', { className: 'study-assistant-panel' },
      h('div', { className: 'study-assistant-head' },
        h('div', null,
          h('strong', null, 'Ask tutor'),
          h('span', null, topic ? `Context: ${topic}` : 'NVIDIA certification concepts')
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
        h('span', { className: 'helper-chat-desc' }, 'Ask anything about NVIDIA tools or certification topics')
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
          compact ? null : h('p', null, topic ? 'Ask anything about ' + topic + ' or related NVIDIA topics.' : 'Ask anything about NVIDIA tools, LLMs, or certification concepts.'),
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

function PracticePanel(props) {
  const { exam, dashboard, learnerProfile, startFlow, generateQuestions, generationStatus, cancelGeneration,
    availableMocks = [], selectedMockId, setSelectedMockId,
    selectedCertSlug, drillRecentMistakes, refreshExam } = props;
  const hasQuestionBank = exam.questions.length > 0;
  const approvedGenerated = exam.approvedGeneratedIds?.length || 0;
  const pendingCount = exam.pendingGeneratedIds?.length || 0;
  const selectedMock = availableMocks.find((m) => m.id === selectedMockId) || availableMocks[0];
  const running = generationStatus.state === "running";

  return h(
    "div",
    { className: "practice-panel" },
    h("div", { className: "practice-panel-head" },
      h("h2", null, "Practice"),
      h("p", { className: "muted" }, "Untimed sessions with immediate explanations and the topic tutor.")
    ),
    !hasQuestionBank
      ? h("p", { className: "empty-bank-note" }, `No ${exam.certification.code} question bank yet. Use the AI drill builder below to create questions.`)
      : null,

    h(QuickGenerateBar, { exam, generateQuestions, generationStatus, cancelGeneration, certSlug: exam.slug || 'genai_llms_professional' }),

    h("div", { className: "practice-grid" },

      h("div", { className: "practice-card card-coach card-recommended" },
        h("div", { className: "card-badge" }, "Guided"),
        h("h3", null, "Recommended practice"),
        h("p", null, `Best default path: ${ADAPTIVE_PRACTICE_TARGET} untimed questions chosen from weak blueprint domains, with feedback after every answer.`),
        h("button", {
          className: "primary",
          disabled: !hasQuestionBank,
          onClick: () => startFlow("practice-coach-bank")
        }, `Start guided set (${ADAPTIVE_PRACTICE_TARGET}Q)`),
        h("button", {
          disabled: !approvedGenerated,
          onClick: () => startFlow("practice-coach-generated")
        }, approvedGenerated ? `Use approved generated pool (${approvedGenerated}Q)` : "No approved generated questions")
      ),

      h("div", { className: "practice-card card-generated" },
        h("div", { className: "card-badge" }, "AI generated"),
        h("h3", null, "Targeted drills"),
        h("p", null, "Generate new questions for mistakes, weak domains, or a named topic. Use this when the bank is too familiar."),
        h("button", {
          disabled: running,
          onClick: () => drillRecentMistakes(5)
        }, running ? "Generating…" : "Drill 5 from recent mistakes"),
        h("button", {
          disabled: !approvedGenerated,
          onClick: () => startFlow("practice-generated")
        }, approvedGenerated ? `Drill approved pool (${approvedGenerated}Q)` : "No approved yet"),
        h(ReviewQueueCompact, { pendingCount, selectedCertSlug, onChange: refreshExam }),
        h(GeneratePanelCompact, { exam, generateQuestions, generationStatus, refreshExam })
      ),

      h("div", { className: "practice-card card-bank" },
        h("div", { className: "card-badge" }, "Review"),
        h("h3", null, "Untimed mock review"),
        h("p", null, "Use a fixed mock set when you want exam-style coverage without the timer. Timed scoring belongs in Actual Exam."),
        availableMocks.length
          ? h("div", null,
              h("select", {
                className: "card-select",
                value: selectedMockId,
                onChange: (e) => setSelectedMockId(e.target.value)
              }, availableMocks.map((m) => h("option", { key: m.id, value: m.id }, `${m.name} (${m.questionCount} Q)`))),
              h("button", {
                disabled: !hasQuestionBank || !selectedMock,
                onClick: () => startFlow("practice-mock")
              }, selectedMock ? `Review ${selectedMock.name}` : "No mock available")
            )
          : h("p", { className: "muted" }, "No mocks loaded.")
      )
    ),

    h(ProfileRecommendations, { dashboard, learnerProfile }),

    dashboard.attempts || (learnerProfile && learnerProfile.sessions)
      ? h("p", { className: "profile-summary" },
          `${dashboard.attempts || 0} saved attempt${dashboard.attempts === 1 ? "" : "s"}`,
          learnerProfile?.sessions
            ? ` · learner profile: ${learnerProfile.sessions} session${learnerProfile.sessions === 1 ? "" : "s"} (updated ${learnerProfile.lastUpdated?.slice(0, 10) || "—"})`
            : ""
        )
      : null
  );
}

function ProfileRecommendations({ dashboard, learnerProfile }) {
  const recommendations = dashboard.recommendations || [];
  if (!recommendations.length) return null;
  const strongest = [...(dashboard.domains || [])]
    .filter((domain) => domain.reliablePercent !== null || (domain.measured?.attempts || 0) >= 5)
    .sort((a, b) => {
      const aScore = (a.reliablePercent ?? 50) + Math.min(a.measured?.attempts || 0, 10);
      const bScore = (b.reliablePercent ?? 50) + Math.min(b.measured?.attempts || 0, 10);
      return bScore - aScore;
    })
    .slice(0, 2);
  return h(
    "div",
    { className: "profile-recommendations" },
    h("div", { className: "panel-title-row" },
      h("h3", null, "Profile dashboard"),
      h("span", null, learnerProfile?.sessions ? `${learnerProfile.sessions} logged session${learnerProfile.sessions === 1 ? "" : "s"}` : "live feedback")
    ),
    h("div", { className: "recommendation-grid" },
      h("section", null,
        h("strong", null, "Study next"),
        h("ul", null, recommendations.map((domain) => h("li", { key: domain.name },
          h("span", null, domain.name),
          h("em", null, domain.reason),
          h("small", null, domain.focus)
        )))
      ),
      h("section", null,
        h("strong", null, "Looking good"),
        strongest.length
          ? h("ul", null, strongest.map((domain) => h("li", { key: domain.name },
              h("span", null, domain.name),
              h("em", null, [
                domain.reliablePercent !== null ? `${domain.reliablePercent}% reliable score` : "",
                domain.percent !== null && domain.sampleSize < 5 ? `${domain.percent}% last ${domain.sampleSize}Q sample` : "",
                domain.measured?.attempts ? `${domain.measured.correct}/${domain.measured.attempts} all-time` : ""
              ].filter(Boolean).join(" · "))
            )))
          : h("p", { className: "muted" }, "Answer a few practice questions to build a cleaner profile.")
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

function GeneratePanelCompact({ exam, generateQuestions, generationStatus }) {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("hard");
  const [count, setCount] = useState(1);
  const [domain, setDomain] = useState("");
  const running = generationStatus.state === "running";

  function submit(e) {
    e.preventDefault();
    generateQuestions({
      count,
      difficulty,
      topic: topic.trim(),
      focusDomains: domain ? [domain] : [],
      weakOnly: !domain && !topic.trim()
    });
  }

  return h("details", { className: "card-details" },
    h("summary", null, "Generate new questions"),
    h("form", { onSubmit: submit, className: "card-gen-form" },
      h("label", { className: "generator-control" },
        h("span", { className: "generator-label" }, "Domain"),
        h("select", {
          value: domain || "",
          onChange: (e) => setDomain(e.target.value),
          disabled: running,
          className: "card-select"
        },
          h("option", { value: "" }, "Any domain, weighted by weak areas"),
          exam.domains.map((d) => h("option", { key: d.name, value: d.name }, d.name))
        )
      ),
      h(SegmentedChoice, {
        label: "Quantity",
        value: count,
        options: GENERATE_COUNTS,
        onChange: setCount,
        disabled: running,
        formatLabel: (n) => `${n}Q`
      }),
      h(SegmentedChoice, {
        label: "Difficulty",
        value: difficulty,
        options: GENERATE_DIFFICULTIES,
        onChange: setDifficulty,
        disabled: running
      }),
      h("label", { className: "generator-control" },
        h("span", { className: "generator-label" }, "Topic focus"),
        h("input", {
          type: "text",
          placeholder: "Optional service or concept",
          value: topic,
          onChange: (e) => setTopic(e.target.value),
          disabled: running,
          maxLength: 200
        })
      ),
      h("button", { type: "submit", className: "primary", disabled: running },
        running ? "Generating…" : `Generate ${count} ${difficulty}`
      )
    ),
    generationStatus?.message
      ? h("p", { className: `generation-status ${generationStatus.state}` }, generationStatus.message)
      : null
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

function TestPanel({ exam, mockSummary, mockResultsMd, busy, startFlow, availableMocks = [], selectedMockId = "mock_1", setSelectedMockId = () => {} }) {
  const hasQuestionBank = exam.questions.length > 0;
  const selectedMock = availableMocks.find((m) => m.id === selectedMockId) || { name: "Mock Test", durationMinutes: 90, questionCount: 50 };
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
      ? h("div", { className: "mock-selector" },
          h("label", null, "Choose mock:", h("br"),
            h("select", {
              value: selectedMockId,
              onChange: (event) => setSelectedMockId(event.target.value)
            }, availableMocks.map((m) => h("option", { key: m.id, value: m.id }, `${m.name} (${m.questionCount} Q · ${m.durationMinutes} min)`)))
          ),
          h("p", { className: "muted" }, selectedMock.description)
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
    secondsLeft, answerQuestion, toggleFlag, submitExam,
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
            h("strong", null, correct ? "Correct" : "Missed"),
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
        setError(err.message || "Helper request failed");
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
      h("div", { className: correct ? "explanation correct" : "explanation wrong" }, h("strong", null, correct ? "Correct" : "Missed"), h("p", null, question.explanation)),
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

function DomainRow({ domain, showScore = false }) {
  const scoreText = showScore && domain.score ? `${domain.score.correct}/${domain.score.total}` : `${domain.answered}/${domain.total} practiced`;
  return h(
    "div",
    { className: "domain-row" },
    h("div", null, h("strong", null, domain.name), h("span", null, `${domain.weight}% of exam`)),
    h("em", null, scoreText)
  );
}

createRoot(document.getElementById("root")).render(h(App));

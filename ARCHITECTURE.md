# Architecture

Local React simulator for NVIDIA certification practice. Multi-cert capable. The revamp separates the Vite frontend from the TypeScript backend while keeping the markdown/JSON certification data as the source of truth.

## How It Works

1. `npm run dev` runs the TypeScript API on `4273` and the Vite client on `5173`.
2. `npm start` builds the Vite client into `client/dist`, then `server/src/index.ts` serves the built UI and API from `4273`.
3. Question sources: `certifications/<slug>/mocks/original/*.questions.md`, `certifications/<slug>/generated/high_fidelity_###.md`, and `certifications/<slug>/generated/drafts.md`. These feed `/api/exam` so mock IDs and adaptive coach lookups resolve against every question. **Practice mode pool** = original mock IDs ∪ high-fidelity generated IDs ∪ approved draft IDs (per `generated/approvals.json`); pending and rejected drafts are excluded.
4. `server/src/domain/simulator.ts` parses each markdown source into exam JSON.
5. UI calls `/api/exam` to load the bank, `/api/exam/grade` to score.
6. Wrong answers are appended to `certifications/<slug>/mistakes.md`.
7. After every session the UI POSTs the grade to `/api/learner-profile/session`, which merges per-domain accuracy + confidence into `certifications/<slug>/learner_profile.md`.
8. `POST /api/generate-questions` calls the question generator with topic/difficulty targeting and a near-duplicate-avoidance hint, then runs a second-pass quality-check (QC) reviewer that accepts, fixes, or rejects each draft. Accepted blocks land in `generated/drafts.md` and sit pending until approved via the Review Queue. With `mode: "mistakes"`, the server pulls trap topics from `mistakes.md` and **auto-approves** the result so it enters the practice pool immediately.
9. `GET /api/approvals` returns `{ approved, rejected, pending: [{id, summary, domain, difficulty}] }`. `POST /api/approvals` with `{ id, action: "approve"|"reject"|"reset" }` mutates `generated/approvals.json`.
10. Adaptive practice mode calls `POST /api/adaptive/coach` after every question to log a coaching note and pick the next question. Practice-adaptive sessions pass `practiceOnly: true` so the coach picks only from the practice pool. The frontend additionally deboosts any question seen in a mock attempt (timed or untimed) within the last 48h.
11. `POST /api/question-helper` powers a per-question study-tutor chatbot in practice mode. The system prompt is built from the question + correct answer + explanation; the learner can ask follow-ups about the underlying concept.
12. Mock tests are fixed question sets (`certifications/<slug>/mocks/original/mock_<n>.json` or `mocks/generated/*.json`); attempt history is appended to `certifications/<slug>/mock_results.md`. Each mock can be played in **Exam mode** (timed, no help) or **Practice mode** (untimed, with helper chatbot) — same questions, different framing.

## Directory Layout

```
.
├── server/src/index.ts             # TypeScript API server + built-client static server
├── package.json
├── .env.example                    # LLM_API_KEY etc.
├── client/
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.cjs
│   └── src/
│       ├── main.jsx                # Vite/React entrypoint
│       ├── app/App.jsx             # UI preserved from the previous app
│       ├── data/study-services.js  # study/service metadata
│       └── styles/app.css          # visual baseline
├── server/src/domain/
│   ├── simulator.ts                # Markdown parser, grader, mistake helper
│   ├── learnerProfile.ts           # Profile parse / merge / serialize
│   └── questionGenerator.ts        # LLM generation + adaptive coaching
├── shared/src/types.ts             # shared domain/API payload types
├── certifications/
│   └── genai_llms_professional/    # default cert slug
│       ├── blueprint.json          # domain weights, exam metadata
│       ├── mocks/
│       │   ├── original/           # original mock playlists + normalized question text
│       │   └── generated/          # generated mock playlists
│       ├── generated/
│       │   ├── high_fidelity_001.md
│       │   ├── high_fidelity_002.md
│       │   ├── drafts.md           # output of /api/generate-questions
│       │   └── approvals.json      # {approved, rejected} for draft review queue
│       ├── mistakes.md             # auto-appended on wrong answers
│       ├── learner_profile.md      # auto-updated per session
│       ├── mock_results.md         # auto-appended results per mock attempt
│       ├── sessions.md             # auto-appended session journal: Q, my answer, correct, my note, coach note
│       ├── reference/              # NVIDIA PDF, deep-research report, notes
│       └── archive/                # superseded question banks
├── scripts/
│   └── normalize_question_bank.py  # legacy importer
└── test/
    └── simulator.test.js
```

## API

All endpoints accept an optional `?cert=<slug>` query param (defaults to `CERT_SLUG` env or `genai_llms_professional`). Slug is validated against `^[a-z0-9_-]+$`.

| Method | Path                              | Purpose                                       |
| ------ | --------------------------------- | --------------------------------------------- |
| GET    | `/api/certifications`             | List available cert slugs                     |
| GET    | `/api/exam`                       | Parse folder-based question bank + blueprint into exam JSON |
| GET    | `/api/questions.md`               | Virtual combined markdown question bank       |
| POST   | `/api/exam/grade`                 | Grade submitted answers                       |
| GET    | `/api/mistakes`                   | Read mistakes.md                              |
| POST   | `/api/mistakes`                   | Append a mistake entry                        |
| GET    | `/api/learner-profile`            | Read learner_profile.md (parsed + raw)        |
| POST   | `/api/learner-profile/session`    | Merge a grade into the profile                |
| POST   | `/api/learner-profile/note`       | Append a qualitative note for a domain        |
| POST   | `/api/generate-questions`         | Generate + QC → generated/drafts.md (pending until approved; `mode: "mistakes"` auto-approves) |
| GET    | `/api/approvals`                  | List approved/rejected/pending generated IDs  |
| POST   | `/api/approvals`                  | Approve / reject / reset a generated ID       |
| POST   | `/api/question-helper`            | Per-question study tutor chatbot              |
| GET    | `/api/mock?id=mock_1`             | Load fixed mock test definition + questions   |
| POST   | `/api/mock?id=mock_1`             | Append a mock attempt result                  |
| GET    | `/api/mock-results`               | Read mock_results.md                          |
| POST   | `/api/adaptive/coach`             | Coaching note + next-question pick            |
| POST   | `/api/session-log`                | Append a finished session to sessions.md      |
| GET    | `/api/session-log`                | Read sessions.md                              |

## Three modes

- **Study** — read topic/service markdown; section drill (per-domain quiz with helper chatbot + immediate feedback).
- **Practice** — untimed, helper chatbot per question, immediate explanations. Entry points:
  - **Practice a Mock** — pick mock_N, get the same 50 questions as the timed exam but untimed and with the tutor.
  - **Adaptive Practice** — weak-domain biased, with 48h deboost on mock IDs you've recently seen.
  - **Generated Practice** — drill the high-fidelity generated bank plus approved draft questions.
  - **Drill recent mistakes** — auto-generates 5 questions targeting your recent traps and runs them.
  - **Review Queue** — approve/reject pending generated questions before they enter the practice pool.
- **Exam (Mock)** — timed, deferred grading, no helper. Mock 1–5 from `mocks/original/mock_N.json`.

## Adaptive logic

Combines:
- official domain weights (`blueprint.json`)
- per-session domain accuracy
- self-rated confidence (localStorage)
- measured confidence from `learner_profile.md`
- per-question ratings (too easy / low quality → deprioritized)

## Environment

`.env` (gitignored). See `.env.example`:

- `LLM_API_KEY` — required for `/api/generate-questions` and tutor chat
- `LLM_API_URL`, `LLM_MODEL` — optional OpenAI-style chat-completions provider overrides
- `CERT_SLUG` — override default cert
- `PORT`, `HOST` — override server bind

## Claude Code skill

`~/.claude/skills/nvidia-cert-questions/SKILL.md` — invokable when you tell Claude to "generate questions" or "drill domain X". Reads the same blueprint + learner profile + recent mistakes, writes to `generated/drafts.md`. Same quality bar as the API endpoint.

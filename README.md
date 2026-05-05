# NVIDIA Certification Practice

Local, research-backed React practice/test simulator for NVIDIA certifications. This revamp uses a separated Vite frontend and TypeScript backend while preserving the original local markdown/JSON data model.

This is a simulator, not an NVIDIA product. It uses original scenario-based practice questions calibrated to the public exam blueprint — no real exam content.

## Quick Start

```bash
cp .env.example .env       # then paste your LLM_API_KEY
npm install
npm run dev
```

Open http://localhost:5173 for Vite dev. The API runs at http://localhost:4273.

The practice bank and generated mock questions load without an LLM key. Coach chat, per-question hints, adaptive coach selection, and AI question generation show a setup message until `LLM_API_KEY` is configured in `.env` and the dev server is restarted.

## Modes

- **Practice** — no timer, immediate feedback after each answer (right/wrong + explanation + why-wrong notes).
- **Test** — timed, deferred grading like the real Certiverse-proctored exam.

Both modes have **Adaptive** (weak-domain biased) and **Full-Bank** variants.

## Question Bank

Edit `certifications/<cert_slug>/questions.md`. Each question:

```markdown
### Q21: A 70B chat model must serve ≥3,000 concurrent requests on H100s while staying within 1 ROUGE-L point of FP16. Best quantization recipe?
- ID: opt-021
- Domain: Model Optimization
- A. ...
- B. ...
- C. ...
- D. ...
- Answer: B
- Explanation: ...
- Why A is wrong: ...
```

Parsed at runtime by `server/src/domain/simulator.ts`.

To reshuffle a bank file safely, including question order, answer-choice order, `Answer:` labels, and `Why X is wrong` labels:

```bash
npm run shuffle:bank -- certifications/<cert_slug>/questions.md --in-place
```

The same script can shuffle mock JSON `questionIds`:

```bash
npm run shuffle:bank -- certifications/<cert_slug>/mocks/mock_1.json --in-place
```

Runtime practice/test sessions also shuffle loaded questions and choices in the UI while preserving the original answer mapping for grading.

## Generate New Questions

After adding `LLM_API_KEY` to `.env` and restarting:
- Click **Generate 10 (weak domains)** on the dashboard, or
- `POST /api/generate-questions` with `{count, weakOnly, focusDomains}`

Output is appended to `certifications/<slug>/generated-questions.md` for manual review — never auto-merged into `questions.md`.

By default, the server sends an OpenAI-style chat-completions request to the Kimi endpoint configured in `.env.example`. Override `LLM_API_URL` and `LLM_MODEL` for another compatible provider.

## Layout

```
certifications/<slug>/
├── blueprint.json          # official weights + format
├── questions.md            # editable bank (source of truth)
├── mistakes.md             # auto-appended on wrong answers
├── learner_profile.md      # auto-updated per session
├── generated-questions.md  # AI-generated review queue
├── reference/              # PDF, research report, notes
└── archive/                # superseded banks
```

## Run

```bash
npm run dev        # Vite client + API server
npm run build      # build client into client/dist
npm start          # build + serve built app from http://localhost:4273
npm test           # Vitest domain tests against the active TypeScript backend
npm run typecheck  # TypeScript verification
```

## Multi-Cert

Add a new cert by creating `certifications/<new-slug>/` with a `blueprint.json` and `questions.md`. Set `CERT_SLUG` in `.env` or pass `?cert=<slug>` to API endpoints.

## Files of Note

- `client/src/app/App.jsx` — React UI migrated to Vite
- `client/src/styles/app.css` — preserved visual baseline
- `server/src/index.ts` — API server and static built-client server
- `server/src/domain/simulator.ts` — markdown parsing + grading
- `server/src/domain/learnerProfile.ts` — profile merge logic
- `server/src/domain/questionGenerator.ts` — LLM question generation and tutor flows
- `shared/src/types.ts` — shared payload/domain types
- `ARCHITECTURE.md` — full system reference

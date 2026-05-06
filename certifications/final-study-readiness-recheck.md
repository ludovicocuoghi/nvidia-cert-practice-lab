# Final Study Readiness Recheck

Date: 2026-05-06

## Verdict

The current study path is now coherent enough to use as the main preparation flow for NCP-AAI, with GENL also brought back into the same taxonomy and practice pattern. A learner should study in this order:

1. General Study for reusable engineering concepts.
2. Agentic AI certificate pages for official-domain routing and exam wording.
3. NVIDIA service pages only when the question names product/platform choices.
4. Generated readiness mocks for timing and domain-balanced practice.
5. Original/downloaded mocks as warmup and comparison, not as the only readiness signal.

This does not guarantee passing the real exam, but it is now grounded in the local NVIDIA OCR guides, the report pack, the certificate blueprints, and the audited question bank rather than in product-page memorization alone.

## Sources Rechecked

- `nvidia_certification_report_pack/nvidia_certification_full_report.md`
- `nvidia_certification_report_pack/ncp-aai-agentic-ai-deep-research-report(2).md`
- `nvidia_certification_report_pack/ncp-genl-refined-study-guide(2).md`
- `nvidia_certification_report_pack/Knowledge from Mock Tests.md`
- `certifications/agentic_ai_professional/reference/study-guide-ocr.md`
- `certifications/genai_llms_professional/reference/study-guide-ocr.md`
- `certifications/nvidia-exam-coverage-and-question-generation-guide.md`
- `certifications/question-topic-coverage-report.md`

## Learner Path Check

General Study now owns the reusable concepts: agent/workflow boundaries, routing, ReAct, tool contracts, memory, RAG, evaluation, guardrails, HITL/HOTL, deployment, monitoring, and production traffic controls. The missing production terms are now explicit, especially p50/p95/p99, tail latency, TTFT, throughput, concurrency, queue delay, batching, streaming, autoscaling lag, backpressure, circuit breakers, bulkheads, canary, blue-green, rollback, and user-count-to-load reasoning.

Agentic AI certificate pages now act as exam overlays. They explain what each official domain tests, which General Study pages to read first, what wording signals the domain, and which NVIDIA products matter only when the exam names a platform/tool choice.

The Agentic AI study map is now an Exam Concept Map in official domain order, not a service-first lifecycle. It is useful because each lane exposes the concepts to know for that domain, while NVIDIA pills appear as implementation examples only where they help.

GENL keeps the model/infrastructure lifecycle because that shape fits the exam better. It now cross-references the same production concepts and has updated coverage for deployment, monitoring/reliability, fine-tuning, optimization, GPU acceleration, and NVIDIA serving/tool distinctions.

## Practice And Mock Verdict

Source and scope are separate:

- Source: original/downloaded vs generated.
- Scope: general certificate concept vs NVIDIA-specific.

The original/downloaded mocks are preserved, but they are not strong enough as the only readiness source. They are shorter, easier, and more general than the generated readiness mocks. Use them as warmup/reference.

The generated mocks are the best readiness proxy in this repo because they are 60 questions, balanced to official domain weights, harder, and use the target general/NVIDIA mix.

## Current Counts

### NCP-AAI

- Question bank: 425 unique questions.
- Scope mix: 312 general concept / 113 NVIDIA-specific, about 73% / 27%.
- Target mix: about 72% / 28%.
- Original mocks: 5 sets, 50/54/65/56/54 questions, mostly 87-89% general concept.
- Generated mocks: 4 sets, 60 questions each, exactly 43 general / 17 NVIDIA-specific each.
- Generated mock difficulty: 77-83% hard/expert, 0% easy.

### NCP-GENL

- Question bank: 520 unique questions.
- Scope mix: 287 general concept / 233 NVIDIA-specific, 55% / 45%.
- Target mix: about 55% / 45%.
- Original mocks: 5 sets, 50 questions each, shorter stems and easier mix.
- Generated mocks: 4 sets, 60 questions each, exactly 33 general / 27 NVIDIA-specific each.
- Generated mock difficulty: 73-77% hard/expert, 0-2% easy.

### General Study

- Question bank: 370 unique questions.
- Generated drill: 24 questions, balanced across General Study domains.
- Generated drill difficulty: 75% hard/expert, 0% easy.

## Question Quality Recheck

I found and fixed a remaining generated-question smell: repeated service-component stems that made NVIDIA-specific questions feel templated. The generator now varies service/product stems and bans the old template wording. It also fixes awkward bridge grammar and validates NVIDIA-service questions for concrete operational signals.

The generated questions are still synthetic, so they should be treated as readiness drills rather than official practice questions. The current quality is acceptable for repeated study because stems are scenario-first, domain-specific, and explanations point to the wrong layer when a distractor is plausible but misplaced.

The topic coverage report now preserves exact `Topic` metadata where present and uses conservative inferred topic labels for downloaded GENL questions that only had domain metadata. That keeps the downloaded mocks visible in the topic distribution without pretending they were originally tagged at the same fidelity as the generated bank.

## Remaining Risk

- The original/downloaded mocks are useful but likely too easy as the sole pass/fail signal.
- Generated service-selection questions are better now, but product-choice questions will always be less realistic than real exam questions unless reviewed by a human with exam experience.
- The bank is now balanced at mock level. The total AAI bank is still 6 NVIDIA-specific questions below the exact 72/28 all-bank target because original mocks are heavily general, but each generated AAI readiness mock hits the intended 72/28 mix.

## Verification Commands

Latest audit pass:

- `node scripts/audit_question_bank.mjs`
- `node scripts/audit_question_scope_mix.mjs --json`
- `node scripts/evaluate_mock_tests.js --json`
- `node scripts/report_question_topic_coverage.mjs`

Final code/build checks should remain:

- `git diff --check`
- `npm run typecheck`
- `npm run build`
- `npm run test`

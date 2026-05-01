---
name: high-fidelity-question-bank
description: Build and audit high-volume NVIDIA certification practice banks from original mocks, topic notes, shared NVIDIA service notes, and general study capability summaries. Use when generating or refreshing Agentic AI, GenAI LLMs, or General Study practice questions.
---

# High-Fidelity Question Bank

Use this skill when creating or repairing practice questions for this project. The goal is exam-style scenario reasoning, not generic quiz filler.

## Source Order

1. Original mock banks and full mock review files.
2. `knowledge extracted from mock exams/Knowledge from Mock Tests.md` for repeated Agentic AI mock patterns and priority signals.
3. Topic summaries under `certifications/*/topics/`.
4. Shared NVIDIA service pages under `certifications/_shared/services/`.
5. General Study capability pages under `certifications/agentic_ai_general_study/capabilities/`.
6. Existing active `questions.md` files for format and parser compatibility.

## Quality Rules

- Never use app/meta stems such as "a study session asks", "during a mock review", "remember for the exam", or "lifecycle drill".
- A good stem describes a real production situation: architecture review, rollout, profiling trace, RAG failure, training-data issue, safety incident, or governance requirement.
- The correct answer must identify the right lifecycle layer, NVIDIA service, bottleneck, or safety boundary.
- Distractors must be plausible neighboring-layer mistakes, not silly answers.
- Difficulty should skew medium/hard, with easy for fundamentals and a small expert tail.
- Every generated question must have a stable ID, domain, topic, difficulty, four choices, answer, explanation, and wrong-answer reasons.

## Workflow

1. Build or refresh the generated high-fidelity bank:

   ```bash
   node scripts/build_high_fidelity_question_bank.mjs
   ```

2. Audit the complete bank and generated mocks:

   ```bash
   node scripts/audit_question_bank.mjs
   ```

3. Spot-check generated questions in all three banks:
   - `certifications/agentic_ai_professional/questions.md`
   - `certifications/genai_llms_professional/questions.md`
   - `certifications/agentic_ai_general_study/questions.md`

4. Run app verification:

   ```bash
   npm test
   npm run build
   ```

## Coverage Targets

- At least 50 active questions per blueprint/general-study section.
- At least 30 active matching questions per NVIDIA service or General Study capability used by the practice filters.
- Generated mock JSON files must reference only existing question IDs.

## Failure Policy

If the audit catches banned phrases, duplicate IDs, unresolved mock IDs, weak service coverage, or invalid difficulty labels, fix the generator or source data first. Do not hand-edit hundreds of generated questions unless the generator cannot represent the needed pattern.

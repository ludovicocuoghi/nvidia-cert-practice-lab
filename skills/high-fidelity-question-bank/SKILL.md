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
6. Existing active generated shards under `certifications/*/generated/high_fidelity_###.md` for format and parser compatibility.

## Quality Rules

- Never use app/meta stems such as "a study session asks", "during a mock review", "remember for the exam", or "lifecycle drill".
- A good stem describes a real production situation: architecture review, rollout, profiling trace, RAG failure, training-data issue, safety incident, or governance requirement.
- Service questions must be scenario-first. Do not write product flashcards such as "The requirement is X", "Which service fits best?" without a concrete workload, or "The design must avoid the common trap". The learner should know what problem is being solved before seeing the answer choices.
- Do not write fake procurement stories such as "the team initially selected X" followed by "which component should replace it" unless the actual scenario is a procurement/design review. Prefer observed signals: traces, rollout blockers, missing labels, retrieval failures, policy incidents, or release-gate evidence.
- If a question compares two NVIDIA services, the stem must state the operational signal that separates them: Kubernetes lifecycle, inference endpoint packaging, data curation, retrieval, guardrails, profiling, evaluation, training communication, or model customization.
- Do not leak source notes into stems or choices. Banned wording includes "common trap", "not the layer described here", "actual requirement is", "critical design question", "without hiding the root cause in prompts or model size", and generic "supported NVIDIA path" language.
- Domain must match the lifecycle being tested. RAPIDS/NeMo Curator belong in data preparation, NIM/NIM Operator in serving/deployment, Nsight in monitoring/profiling, NeMo Guardrails in safety, and service-comparison questions for NCP-AAI should generally sit under NVIDIA Platform Implementation.
- The correct answer must identify the right lifecycle layer, NVIDIA service, bottleneck, or safety boundary.
- Distractors must be plausible neighboring-layer mistakes, not silly answers.
- Distractors should all answer the same question. For service-selection stems, all four options should be service/tool choices. For evaluation stems, all four options should be eval/release-gate choices. Avoid mixing one product choice with unrelated prompt/context/logging mistakes unless the stem is explicitly about that operational trade-off.
- Example repair: instead of "A retailer initially selected NeMo Customizer...which component should replace it?", write "A retailer's inference service shows low GPU occupancy and long idle gaps between CUDA launches...which NVIDIA tool should they use first?" with Nsight Systems, Nsight Compute, NIM, and NeMo Customizer as same-axis tool choices.
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

   This audit is the deterministic gate for generated-bank quality. It catches thin service stems, leaked trap notes, domain/service coverage gaps, duplicate IDs, missing mock IDs, and grammar artifacts.

3. Run the local evaluator on draft generated-question files when working outside the high-fidelity generated shards:

   ```bash
   node scripts/evaluate_questions.js certifications/genai_llms_professional/generated/drafts.md --local-only
   node scripts/evaluate_questions.js certifications/agentic_ai_professional/generated/drafts.md --local-only
   ```

   Use the LLM-backed mode only when an API key is available and a smaller draft batch needs subjective review.

4. Spot-check generated questions in all three banks:
   - `certifications/agentic_ai_professional/generated/high_fidelity_###.md`
   - `certifications/genai_llms_professional/generated/high_fidelity_###.md`
   - `certifications/agentic_ai_general_study/generated/high_fidelity_###.md`

   Spot-check at least:
   - one service-comparison item for RAPIDS vs NIM,
   - one NIM vs NIM Operator item,
   - one NeMo Curator vs NeMo Retriever or RAG item,
   - one Nsight Systems vs Nsight Compute item,
   - one General Study vendor-neutral capability item.

5. Run app verification:

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

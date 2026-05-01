---
name: mock-test-evaluator
description: Evaluate NVIDIA certification mock tests in this revamp project for schema validity, missing question IDs, duplicate IDs, difficulty mix, recall-style stems, and blueprint domain balance. Use when reviewing, creating, or improving Agentic AI or GenAI LLM mock exams.
---

# Mock Test Evaluator

Use this skill when working on mock exam quality for the NVIDIA certification practice revamp.

## Workflow

1. Run the deterministic evaluator from the project root:

   ```bash
   node scripts/evaluate_mock_tests.js
   ```

2. Review every `REVIEW` line before changing mocks. Treat these as quality gates:
   - No missing or duplicate question IDs.
   - 50-70 questions per mock.
   - At least 70% hard, advanced, or expert questions for improved mocks.
   - No more than 10% easy questions.
   - Blueprint domain deviation should stay within 3 questions unless the bank lacks enough questions.
   - Avoid many short or recall-style stems.

3. Keep improved mocks separate from originals:
   - Original mocks live in `certifications/<cert>/mocks/*.json`.
   - Improved generated mocks live in `certifications/<cert>/mocks/generated/*.json`.
   - Do not overwrite original mocks unless the user explicitly asks.

4. After adding or editing mocks, run:

   ```bash
   node scripts/evaluate_mock_tests.js --json
   npm test
   npm run build
   ```

5. In the final report, call out which mocks still need human review and why.

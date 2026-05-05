---
name: capability-card-authoring
description: Write, audit, or revise certification study capability cards, NVIDIA service pages, and new certificate study sections in this repo. Use when adding a new service/capability/topic markdown, improving decision-guide cards, adding actual APIs/code/model names, or checking that Agentic AI, GenAI LLM, and General Study docs follow the project card standard.
---

# Capability Card Authoring

## Overview

Use this skill to make future cards feel like useful engineering study notes rather than colorful flashcards. A complete card should answer: what is this, what do I actually call/use, when is it the right answer, and which nearby service would be the real confusion.

The first learner-visible block for a service should be code/config first. A reader should immediately see the CLI command, REST endpoint, Python import, YAML `_type`, model name, registry field, or pseudo-interface that makes the capability concrete.

## Read First

Before adding a new pattern, read the closest existing examples:

- NVIDIA service pages: `certifications/_shared/services/nemo-curator.md`, `nemo-retriever.md`, `nemo-agent-toolkit.md`, `nim.md`, and `ngc.md`.
- General capability pages: `certifications/agentic_ai_general_study/capabilities/agent-orchestration-runtime.md`, `model-inference-endpoint.md`, `knowledge-and-rag-pipeline.md`, and `training-data-curation-pipeline.md`.
- Certification topics: `certifications/agentic_ai_professional/topics/nvidia-platform-implementation.md` and the matching topic under `certifications/genai_llms_professional/topics/`.

Match those structures unless the user explicitly wants a new format.

## Workflow

1. Identify the artifact type: NVIDIA service page, vendor-neutral capability page, or certification topic.
2. Name the lifecycle layer first: data prep, model selection, training/customization, RAG/retrieval, agent orchestration, guardrails, serving, optimization, evaluation, monitoring, or governance.
3. Write the first-view content so a learner can decide in 30 seconds:
   - Actual code, CLI, YAML, REST endpoint, import, or model name to recognize.
   - What it is technically.
   - How you access it.
   - Input -> output.
   - What to study first, split into labeled rows rather than one long semicolon paragraph.
4. Write the decision guide around adjacent-service confusion, not silly negatives.
5. Add service memory/study notes only when they contain durable engineering distinctions.
6. Verify rendered UI labels and spacing in the local app for at least one representative page.

## Full Card Standard

For NVIDIA service pages, include:

- `## Actual implementation / How you use it` with the code block first, then a compact table.
- A code block showing real call surfaces: `docker`, `curl`, Python import, OpenAI SDK `base_url`, Kubernetes YAML, CLI command, workflow YAML, or concrete model names.
- If the page uses `## At a glance` instead of `## Actual implementation / How you use it`, still include at least one code/config block in that section so the UI can promote it to the top card.
- `## What to study first` after the implementation block. Keep labels in the `- **Label:** value` form and make each value short enough to render as a row or short internal list.
- `## What it is, in one paragraph` in plain English.
- `## Where it sits in the lifecycle`.
- `## When it is the right answer`.
- `## Adjacent-service decision boundary`.
- `## How it relates to neighboring services`.
- `## Numbers, defaults, knobs you should recognize` when relevant.
- `## Study card data` with Lifecycle, What it is, Use it when, Do not use it when, Common trap, and Scenario signal.
- Study notes, must-know items, recognition signals, and hands-on checks.

For General Study capability pages, include:

- What you are building.
- Pipeline or operating model.
- Decision guide.
- Common traps that change the design.
- Platform examples, including NVIDIA examples when useful.
- Hands-on checks or scenario drills.

For certification topic pages, include:

- Study card data.
- Decision traps worth remembering.
- Practical distinctions and scenario signals.
- Topic-specific drill prompts.

## Writing Rules

- Prefer concrete names over generic descriptions: `Pipeline`, `JsonlReader`, `ScoreFilter`, `/v1/embeddings`, `/v1/rerank`, `react_agent`, `router_agent`, `parallel_executor`, `NIM Operator`, `Nsight Systems`, `Nsight Compute`.
- For Agent Toolkit-style pages, show exactly where the learner specifies the pattern, for example `workflow._type: react_agent`, `workflow._type: router_agent`, `functions:`, `function_groups:`, `llms:`, `retrievers:`, and `memory:`.
- Prefer "Choose X when..." over "Do not use it for..." unless the negative is the clearest boundary.
- A real trap must be a plausible adjacent-service mistake:
  - Curator vs Retriever: training/tuning/eval datasets vs query-time chunks/vectors/ranked passages/citations.
  - NGC vs NIM: catalog/registry vs deployable callable service.
  - NIM vs Nemotron: serving package vs model family.
  - Agent Toolkit vs tool gateway/MCP: workflow wiring vs auth/schema/tool ownership.
  - Guardrails vs IAM/Retriever: runtime policy checks vs pre-retrieval permissions.
  - Nsight Systems vs Nsight Compute: system timeline first, kernel deep dive second.
  - TensorRT vs TensorRT-LLM: non-LLM engine optimization vs LLM decode/KV-cache optimization.
- Avoid "obviously wrong" traps such as confusing orchestration with GPU kernels unless the exam/source material actually tests that boundary.
- Do not repeat the same idea across five cards. Merge or delete low-value cards.
- Keep card prose short; put deeper conceptual explanation in deep-dive sections.

## Verification

After edits, run:

```bash
git diff --check
npm run build
npm run typecheck
```

Then inspect the local app at the active Vite URL, usually `http://127.0.0.1:5173/` or `http://127.0.0.1:5174/`:

- The first screen should show code/config before dense notes.
- "Code and calls to recognize" should show actual call surfaces.
- "What to study first" should render as labeled rows, not as one broken bullet paragraph.
- "Choose another service when" should name nearby services.
- "Real trap" should be non-obvious and useful.
- General Study pages should still render their playbook format correctly.

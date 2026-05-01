---
capability: Prompt and Context Design
status: populated
source_lens: general-study
---

# Prompt and Context Design

## What You Are Building

You are building the no-weight-change control layer: system/developer instructions, few-shot examples, output schemas, context packing, prompt versions, and prompt evaluation. This is usually the first adaptation path because it is cheap, reversible, and easy to test.

## Pipeline

1. Define the task, audience, refusal rules, output schema, and success metrics.
2. Choose the model and context budget.
3. Write instruction hierarchy: system/developer/task/user constraints.
4. Add examples only when they improve behavior.
5. Assemble retrieved/tool/context data separately from instructions.
6. Validate structured output, citations, safety, and edge cases.
7. Version prompt, model, retrieval index, tools, and guardrails together.
8. Run regression evals before release and keep rollback.

## Core Concepts

- Prompting changes behavior at inference time, not model weights.
- Instruction hierarchy matters: system/developer instructions outrank user input; retrieved content and tool results are data, not instructions.
- Few-shot examples teach format and task pattern but can overfit style.
- Prompt patterns include zero-shot, few-shot, chain-of-thought-style reasoning cues, role/task framing, and structured-output schemas; use only what can be evaluated.
- Context packing decides which facts fit into limited tokens.
- Structured outputs need schemas, validation, and repair/retry logic.
- Retrieved text is evidence, not instruction.
- Prompt versions are release artifacts.
- Context length has cost: more tokens raise prefill latency and can introduce conflicting evidence.

## Decision Guide

| If the scenario says... | Think... | Avoid... |
|---|---|---|
| "format as JSON" | schema and validation | full fine-tuning first |
| "fresh private facts" | RAG plus prompt context | stuffing stale facts in prompt |
| "durable rubric behavior" | maybe tuning after prompt baseline | endless prompt tweaks |
| "tool use instructions" | explicit tool policy and examples | giving credentials to model |
| "regression after prompt edit" | prompt evals and version rollback | untracked prompt changes |
| "model ignores evidence" | evidence rules, citation requirements, groundedness eval | adding more unrelated context |
| "prompt injection in docs" | isolate retrieved content and enforce policy outside prompt | telling model to ignore bad docs only |
| "same prompt fails after model change" | model+prompt versioned eval | assuming prompt transfers unchanged |

## Common Traps

| Trap | Correct mental model |
|---|---|
| Prompting replaces permissions | Access control belongs in tools/retrieval. |
| Longer prompt is always better | Long prompts can add cost, latency, and conflicting instructions. |
| Examples are harmless | Examples can leak policy, bias style, or confuse edge cases. |
| Prompt version alone is enough | Model, retrieval, tools, and guardrails also need versions. |
| Chain-of-thought text is required | Often use concise reasoning instructions or hidden/tool-side reasoning; expose only needed final rationale. |
| Prompting enforces schema | Schemas need validation and repair/retry outside the model. |

## Platform Examples

| Platform | Example | What it illustrates |
|---|---|---|
| Hosted APIs | system/developer messages, structured outputs | Prompt hierarchy and schema control. |
| Open source | prompt templates, output parsers | Versioned prompt artifacts. |
| Agent frameworks | tool instructions and state prompts | Context assembly for workflows. |
| Eval harness | prompt regression suite | Evidence that prompt changes improved the actual task. |

## Deep Dive

### Where it sits in the lifecycle

Prompt/context design is the **no-weight-change adaptation layer**. It is usually the fastest fix when the model already has the underlying capability.

```text
[Task + policy] -> [Prompt template] -> [Context assembly] -> [Model call]
        -> [Schema validation/guardrail] -> [Prompt regression eval]
```

### Instruction hierarchy

| Input type | Role | Trust level |
|---|---|---|
| System/developer instructions | Define task, policy, output contract | Highest instruction authority |
| Tool schema | Declares callable interface | Enforced by runtime, not prompt alone |
| Retrieved content | Evidence for the answer | Untrusted data |
| Tool result | Evidence from external system | Untrusted data |
| User request | Task request | Must obey higher policy |

Retrieved text that says "ignore instructions" is still data. It must not become an instruction.

### Prompt release checklist

Good prompt releases behave like software releases:

- Model family/version, prompt version, retrieval index, memory policy, and tool schemas.
- Output schema, validator behavior, guardrail policy, and refusal/escalation rules.
- Eval set, regression suite, known limitations, and rollback prompt.

A prompt that works on one model may fail on another because instruction following, context handling, JSON reliability, and refusal behavior differ.

### Context packing decisions

| Context element | Include when... | Watch out |
|---|---|---|
| Retrieved chunks | They directly support the answer | Long irrelevant context adds cost/noise |
| Tool results | They are fresh and validated | Tool output is not authority |
| Memory | It is scoped, consented, and relevant | Privacy and stale facts |
| Policy snippets | They affect the current decision | Too much policy can drown task context |
| Few-shot examples | Format/behavior needs demonstration | Examples can conflict with policy |

### Structured output boundary

Structured output is not just "ask for JSON." Define the schema, validate it server-side, repair or retry only when safe, and fail closed for high-risk actions. Prompt wording guides behavior; validators, tool gateways, and guardrails enforce boundaries.

## Exam Signals

- "no weight change" -> prompt/context design.
- "JSON output" -> schema + validation.
- "few examples" -> few-shot prompting.
- "prompt regression" -> versioned prompt eval.
- "context too long" -> context packing and retrieval discipline.
- "system/developer/user conflict" -> instruction hierarchy.
- "structured output" -> schema, validation, repair/retry.
- "retrieved instruction" -> untrusted data, not prompt authority.

## Hands-on Checks

1. Write a prompt release checklist with model, prompt, retrieval, tools, evals, and rollback.
2. Convert a vague instruction into task, evidence, output schema, and refusal rules.
3. Mark which controls belong in prompt versus retrieval, tools, and guardrails.

---
domain: Agent Development
weight: 15
status: populated
---

# Agent Development

## What to study first

- **Core idea:** Build agents that use prompts, APIs, tools, structured outputs, **orchestration** frameworks, and error handling.
- **Use it when:** Study this when questions involve implementing reliable tool use or controlling agent behavior through code and schemas.
- **Study first:** Schema-constrained tool calling: typed JSON schemas define tool name, description, parameters, and required fields — runtime rejects calls outside the declared schema before execution
- Structured output: model responses must fit predefined fields (JSON or typed objects) so downstream code can parse, validate, and route them reliably
- Runtime validation: pre-execution checks on tool parameters, permissions, and schema compliance — separate from prompt-level instructions
- Permission validation: tool-level access control before execution — **least privilege** per agent, role, user, and workflow state
- Schema validation: parameter type checks, required-field verification, enum/value-range enforcement, and safe defaults
- **Real trap:** Prompting alone is not enough for tool safety; validate tool names, parameters, permissions, and outputs.

## Certification boundary

This page is the NCP-AAI exam lens for building agents. Keep tool-wrapper, workflow, reliability, and integration knowledge when it is needed for the NVIDIA Agentic AI blueprint. Put the reusable vendor-neutral version in `Agentic AI General Study -> Tooling, Orchestration, and Memory`; keep NVIDIA service cues here.

## General Study first

Read `Agentic AI General Study -> Tooling, Orchestration, and Memory`, then skim `Agentic AI General Study -> Agent Lifecycle and Architecture`. Use this overlay to recognize official-domain wording about prompts, APIs, tools, structured outputs, orchestration frameworks, retries, graceful failure, and NVIDIA Agent Toolkit/Guardrails choices.

## Core ideas you must hold in your head

- **Tool safety** happens in wrappers, not prompts. Query validation layers, **idempotency keys**, sandboxed execution, **tool preconditions** gated on workflow state — these are deterministic controls. Prompt instructions are not.
- **Schema-constrained tool calling** beats prompt guidance. Function names and arguments must match declared schemas so invalid calls are impossible or rejectable.
- **Tool output shaping** is a development responsibility. Return validated, task-specific summaries with audit references — not raw JSON dumps that bloat context.
- **Parallel independent reads** — sequence dependent writes. Calling three read-only APIs sequentially is a **latency** antipattern tested directly on the exam.

## Mental model

Agent Development sits between architecture (design) and deployment (ops). It covers:
1. **How** tools are built, wrapped, and constrained
2. **How** prompts, configs, and workflows are structured
3. **How** agents integrate with external systems safely
4. **How** reliability patterns (retry, fallback, idempotency) are implemented

## Tool execution safety: the most tested development topic

### Tool wrapper responsibilities

- **Pre-execution validation**: Schema checks, parameter validation, permission gates
- **State-gated availability**: Tools become available only after workflow preconditions are met (e.g., refund tool only after auth + policy check)
- **Output shaping**: Return task-specific summaries + key fields + link to full payload for audit. Never dump raw JSON into the prompt.
- **Idempotency for mutations**: **Idempotency keys** + **transaction-state checks** before retrying payment/refund/write APIs
- **Retry policy**: Distinguish unknown outcomes (retry safe with idempotency) from known failures (don't retry). **Exponential backoff** with max retry limit.
- **Graceful degradation**: Log error, inform user politely, route to fallback behavior — never expose raw API errors to users

### Code execution safety

- **Sandbox**: Ephemeral, **network-isolated**, **restricted filesystem**, **CPU/memory limits**, no **production credentials**
- **Not**: Keyword filters ("block os, subprocess"), model self-certification, running as non-root on production host
- The model cannot be the security boundary for code execution

### Tool output context management

- Raw JSON dumps → context bloat → worse decisions
- Shaped outputs (summary + key fields + audit reference) preserve decision quality
- **Structured observations** as first-class state, require final answers to cite observation IDs

## Prompt and configuration engineering

### Prompt chaining

- **Dynamic prompt chaining with intermediate validations**: Break complex tasks into subtasks, validate each intermediate output, feed outputs as inputs to next prompt
- **When right**: Multi-step reasoning, document review (extract → validate → reason), legal workflows
- **Contrast with**: Single monolithic prompt (brittle for complex tasks), stateless chains (lose context between steps)

### Configuration-driven workflows (YAML-defined tools, prompts, models, workflow nodes)

- **Production advantage**: Auditable, versionable, reproducible, reviewable separately from application code
- **Does NOT**: Remove need for **evaluation**, eliminate hallucination, make GPU inference unnecessary
- This is a distinct exam answer — "YAML config for governance" appears as a correct choice

### Few-shot prompting for consistency

- Carefully curated examples give the model concrete guidance on structure, tone, expected behavior
- More reliable for output consistency than: "be more efficient" instructions, temperature changes alone, random prompt shuffling

### Output format control

- Embed clear, constrained formatting examples to enforce output style and focus
- Structured extraction (schema-validated) before reasoning — reduces ambiguity and enables validation

### Tool contract hardening

When wrong tool arguments appear, treat it as a contract failure first. Two controls stack well:

- **Strict JSON schema / guided decoding**: constrain names, types, enums, ranges, required fields, and regex patterns so the runtime can reject or prevent malformed calls.
- **Few-shot valid tool calls**: show concrete examples of correct arguments and returned observations so the model has in-context evidence for the desired shape.

Do not raise temperature to "explore" valid tool calls. Higher temperature increases output variance and usually makes schema violations worse. Do not swallow tool errors with a broad `try/except`; map them into structured observations so the agent can retry, fallback, or escalate.

### MCP and shared tool servers

MCP-style tool servers solve a duplication problem: one tool team exposes a tool once, and multiple agents consume the same contract. They do not choose the best LLM, replace the agent runtime, or bypass authentication. The tool gateway/server still owns schema, auth, rate limits, retries, and audit.

## API and external system integration

- **Custom tool wrapping REST APIs**: Encapsulates authentication (OAuth token refresh), error handling, JSON transformation into usable objects
- **Secure API wrapper pattern**: Authenticated, well-defined API with custom agent tool — not direct SQL generation, not embedding CSVs in prompts
- **HTTP GET via function-calling framework**: Standard pattern for real-time data (weather, stock, CRM)

## Multimodal integration

- **Model as a workflow node**: Treat vision, speech, embedding, reranking, and generation models as typed nodes in the agent workflow, not as one giant prompt.
- **Modality-specific tools**: Use OCR/document parsers for PDFs and scans, vision models for images, ASR for audio, and text LLMs for reasoning/generation after the modality has been converted into structured observations.
- **Structured observations**: Return extracted fields, bounding boxes/page numbers/timestamps, confidence, and source IDs so downstream agents can cite evidence and avoid reinterpreting raw media repeatedly.
- **Serving boundary**: Triton is the NVIDIA cue for multi-framework or multimodal serving; NIM is the cue for supported model APIs; Agent Toolkit wires the model/tool nodes into an agent workflow.
- **Trap**: Do not dump raw images, audio transcripts, OCR text, and tables into one context window without parsing, metadata, or evidence boundaries.

## Reliability patterns

### Graceful failure recovery

- Retry with **exponential backoff** + max limit + fallback response indicating temporary unavailability
- Log the error, communicate transparently, offer alternate path
- Never: expose raw errors to users, retry infinitely, proceed with stale/dummy data silently

### Loop detection

- Short-term state buffer to detect repeated actions/states
- **Reflection** or **critic** step that forces query reformulation, alternative tools, or termination
- "Increase max iterations" makes it worse

### Parallel vs. sequential tool calls

- **Parallelize**: Independent read-only calls (order status + shipment ETA + refund eligibility)
- **Sequence**: When tool B depends on tool A's output, or when writes must be ordered
- **Latency** improvement without correctness change — a direct exam answer

## Workflow and state management

### Stateless vs. stateful orchestration

| Pattern | Use it when | If something breaks | Exam trap |
| ------- | ----------- | ------------------- | --------- |
| **Stateless** | Single-turn or short read-only work where every call can be recomputed from the request | Retry the whole request or return a clean fallback; no checkpoint needed because no durable step happened | Using stateless prompt chains for multi-step work and losing intermediate results |
| **Stateful** | Multi-step workflows, approval gates, tool dependencies, long-running jobs, memory writes, or mutating actions | Resume from the last successful checkpoint, reconcile external state, then continue or escalate | Re-executing the whole workflow and duplicating side effects |

Stateless does not mean "no context in the prompt." It means the system has no durable workflow state to resume from. Stateful orchestration keeps a task graph with step status, observations, tool outputs, approvals, retries, and checkpoints.

### Stateful orchestration

- Context memory across prompt chain steps, checkpointed transitions
- Maintains task graph to track progress and dependencies
- Supports resumption from checkpoints, retries, dynamic context updates
- Contrast with: stateless prompt chaining (loses context), monolithic single prompt (brittle)

### Recovery when a workflow breaks

| Failure signal | Best response | Avoid |
| -------------- | ------------- | ----- |
| Read-only API timeout or transient 5xx | Bounded retry with exponential backoff and jitter, then fallback/escalation | Infinite retries or exposing raw error |
| Rate limit / 429 | Respect rate limits, back off, queue, or use cached safe read data | Immediate aggressive retry |
| Dependency repeatedly failing | Circuit breaker + fail-fast + periodic probe + graceful degradation | Let all workers block on the dependency |
| Mutating tool result unknown | Idempotency key + transaction-state check before retry | Re-running the mutation blindly |
| Agent repeats same tool call | Loop detector + state buffer + critic step; reformulate, switch tool, terminate, or escalate | Increasing max iterations |
| Step succeeds, then later step fails | Resume from last checkpoint and keep completed step outputs | Re-execute the entire workflow from scratch |
| High-risk action needs approval | Pause at approval gate with proposed action, evidence, risk, and audit trail | Email notification plus manual restart after the fact |

### Tool availability gated by workflow state

- Refund tool unavailable until authentication + policy-check nodes succeed
- **Tool preconditions** enforced by **workflow engine**, not model discretion
- **Not**: hiding tool name with vague description, putting all tools in prompt and hoping

## NVIDIA tools that map to this domain

| Tool | When it is the right answer | When it is a trap |
| ---- | --------------------------- | ----------------- |
| **NeMo Agent Toolkit** | Connecting tools, data sources, multiple agents; skill chaining with async execution and caching; tool use and dialogue **orchestration** | When the question asks about model training, **inference optimization**, or safety filtering |
| **NeMo Guardrails** | Enforcing topical restrictions, blocking jailbreaks, validating grounded **RAG** answers | When the question is about tool **orchestration** or API integration (that's **NeMo Agent Toolkit**) |

## Decision traps worth remembering

1. **"Tell the model not to do X"** as a development control. Prompt-only tool restrictions are bypassable. The exam expects schema constraints, execution gates, and sandboxing.

2. **"Disable retries entirely" or "retry infinitely"** — both are wrong. The right answer is **bounded retries** with backoff + idempotency for mutations + state-aware outcome distinction.

3. **"Remove the tool"** instead of adding controls. The fix is query validation, **row limits**, read-only access, **timeout policies** — not removing database access.

4. **"Increase temperature for better tool selection"** — higher temperature worsens hallucination. **Schema-constrained tool calling** is the fix.

5. **"More context fixes everything"** — full JSON dumps, longer prompts, larger context windows — these create context bloat and worse decisions, not better ones.

6. **"Let the model self-certify safety"** — the model is not a security boundary. Sandboxing and execution gates are.

## Must-know exam bullets

- **Schema-constrained tool calling** > prompt-based tool guidance for preventing hallucinated function names
- **Idempotency keys + transaction-state checks** for mutation tools that may be retried
- **Tool preconditions** — enforced by workflow state, not model discretion
- **Stateless vs stateful** — stateless can retry from start; stateful resumes from checkpoints and protects against duplicate side effects
- **Shaped tool outputs** (summary + key fields + audit ref) — not raw JSON dumps
- **Sandbox code execution** (ephemeral, **network-isolated**, resource-limited) — not keyword filters
- **Parallelize independent reads** — sequential calls for independent data is a **latency** antipattern
- **YAML/config-driven workflows** — for **auditability**, versionability, reproducibility
- **Multimodal integration** — convert images/audio/PDFs into structured observations with source metadata before downstream reasoning
- **Exponential backoff + max retries + fallback** — for external API resilience
- **Structured observations** — as first-class state, cite observation IDs in final answers

## Hands-on checks / study prompts

1. Write a tool wrapper pseudocode that handles: pre-execution validation, idempotency, **output shaping**, and graceful failure.
2. What's the difference between a tool being "hidden by vague description" vs. "unavailable due to workflow precondition"?
3. Given three independent read-only tool calls, draw the sequential vs. parallel call graph and compute **latency** difference.
4. What three things must a code execution sandbox restrict?

## Mock signals

Across the mock exams, development questions repeatedly test these durable ideas:

- **Deterministic tool controls**: schema validation, permission gates, workflow preconditions, idempotency, and sandboxing.
- **Tool output shaping**: summarize and validate tool responses with audit references rather than dumping raw JSON into context.
- **Reliability patterns**: **bounded retries**, **exponential backoff**, fallback responses, state-aware retry decisions, and **loop detection**.
- **Workflow structure**: dynamic prompt chains, **YAML/config-driven workflows**, checkpointed state, and typed observations.
- **Latency-aware execution**: parallelize independent read-only tool calls; sequence dependent writes.
- **NVIDIA mapping**: **NeMo Agent Toolkit** is the **orchestration**/development answer; **NeMo Guardrails** is the safety/policy answer.

Evidence source: `mock_1` through `mock_5`, especially tool safety, prompt chaining, stateful **orchestration**, retries, sandboxing, and **NeMo Agent Toolkit** questions.

<!-- STUDY_ENRICHMENT_START -->

## Study card data

- **Exam:** Agentic AI
- **Weight:** 15%
- **What it covers:** Build agents that use prompts, APIs, tools, structured outputs, **orchestration** frameworks, and error handling.
- **Use this section when:** Study this when questions involve implementing reliable tool use or controlling agent behavior through code and schemas.
- **Common trap:** Prompting alone is not enough for tool safety; validate tool names, parameters, permissions, and outputs.
- **Recognition clues:** The agent can choose or execute tools, but reliability fails because schemas, **state gates**, retries, or **output validation** are missing.

### Study notes

- Reliable agents are built with explicit tool contracts, structured outputs, validation, retries, and error handling. Prompt wording can guide behavior, but it is not the control plane.
- Tool descriptions help the model choose the right function, but runtime code still owns parameter validation, **permission checks**, **workflow-state gates**, and returned-data validation.
- Parallel **tool calls** help only when calls are independent read operations; dependent steps and mutation tools still require sequencing, state updates, and idempotency protection.
- **Tool integration patterns**: (a) Function calling schema — define each tool as a typed JSON schema with name, description, parameters, and required fields; the runtime validates the model's proposed call before execution. (b) **Tool selection** — use specific, non-overlapping names and descriptions so similar tools are distinguishable. Avoid vague descriptions like "processes data" because they cause **wrong-tool selection**. (c) Retry on transient failure — distinguish unknown outcome (safe to retry only with idempotency) from known failure (do NOT retry). (d) Fallback — when **bounded retries** are exhausted, route to a fallback handler or **human escalation**. (e) Escalate on persistent failure — repeated failures across requests indicate an engineering issue, not a prompt-tuning issue.
- **State management in agents has three layers**: (1) Conversation state — current context-window content and recent turns. (2) Task state — completed steps, pending steps, and intermediate results, tracked through a task graph with checkpointed transitions. (3) Workflow state — preconditions met and **approval gates** passed; this determines which tools are currently callable. All three layers must survive failures, retries, and resumptions.
- **Tool precondition enforcement pattern**: Define each tool's preconditions declaratively, for example `requires: [authenticated, policy_retrieved, amount_under_limit]`. The **workflow engine** checks those preconditions before exposing or executing the tool. If an agent attempts a tool whose preconditions are not met, the engine rejects the call with a clear reason. This is NOT hiding the tool name or making the description vague — the tool is known, but gated by state.
- **Testing strategies for agents**: (1) Unit test individual tools — validate wrapper input validation, error handling, **output shaping**, and precondition checks in isolation. (2) Integration test tool chains — use mock responses to verify state transitions and ensure later tools receive the right context from earlier tools. (3) Scenario test end-to-end — run realistic workflows and measure task completion, **tool selection** accuracy, trajectory quality, and safety compliance. (4) **Regression test** after any prompt, tool, or model change — rerun fixed scenarios and compare both trajectory and final outcome against the baseline.

### Must know

- **Schema-constrained tool calling**: typed JSON schemas define tool name, description, parameters, and required fields — runtime rejects calls outside the declared schema before execution
- **Structured output**: model responses must fit predefined fields (JSON or typed objects) so downstream code can parse, validate, and route them reliably
- **Runtime validation**: pre-execution checks on tool parameters, permissions, and schema compliance — separate from prompt-level instructions
- **Permission validation**: tool-level access control before execution — **least privilege** per agent, role, user, and workflow state
- **Schema validation**: parameter type checks, required-field verification, enum/value-range enforcement, and safe defaults
- **Idempotency keys**: deduplication **tokens** for mutation tools such as payments or refunds — server-side dedup prevents double writes after retry
- **Transaction-state checks**: verify whether the operation already succeeded before retrying — protects against duplicate charges, refunds, or ticket creation
- **Retry policy**: **bounded retries** + **exponential backoff** + max limit + **error classification**; unknown outcomes require idempotency, known failures should not be retried
- **Output shaping**: return validated task-specific summary + key fields + audit reference — NOT raw JSON dumps that bloat context and distract reasoning
- **Sandbox code execution**: ephemeral, **network-isolated**, **restricted filesystem** + **CPU/memory limits** + no **production credentials** — NOT keyword filters or model self-certification
- **Tool preconditions**: declare required state (for example `requires: [authenticated, policy_retrieved]`) — enforced by **workflow engine**, not model discretion
- **Stateful orchestration**: context memory across prompt-chain steps, checkpointed transitions, and resumption from checkpoints — vs. stateless chaining that loses progress
- **Parallelize independent reads**: call read-only APIs in parallel when A does not depend on B — sequential independent calls are a **latency** antipattern
- **YAML/config-driven workflows**: auditable, versionable, reproducible tool/prompt/model configurations — reviewed separately from application code, but still evaluated
- **Graceful degradation**: log error, inform user, route to fallback or **human escalation** — never expose raw API errors or silently continue with fake data
- **Loop detection**: short-term state buffer detects repeated actions or states → force query reformulation, alternate tool choice, escalation, or termination

### Decision guide

| If the question mentions... | Prefer this answer | Avoid this trap |
|---|---|---|
| hallucinated tool names or invalid arguments | **schema-constrained tool calling** + **runtime validation** before execution | better prompt wording, higher temperature, or "be careful" instructions |
| wrong argument types in tool calls | strict JSON schema / guided decoding plus few-shot valid examples | increasing temperature or swallowing the error |
| same 14 tools reimplemented by several agents | shared MCP/API tool servers consumed by each agent | treating MCP as model routing or auth bypass |
| retrying payment/refund/write tools | **idempotency keys** + **transaction-state checks** + **bounded retries** with **error classification** | infinite retries or disabling all retries |
| long-running workflow fails at step 4 of 8 | resume from last successful checkpoint after reconciling external state | re-execute all prior mutation steps from scratch |
| simple read-only request fails before any side effect | stateless retry from the beginning or clean fallback | building checkpoint infrastructure for a one-shot call |
| slow independent API reads (order status, shipment, refund eligibility) | parallelize read-only calls, then merge **structured observations** before reasoning | sequential calls when there is no data dependency |
| unsafe code execution (generated Python, shell, SQL helpers) | **ephemeral sandbox** with resource, network, credential, and filesystem limits | keyword filtering ("block os, subprocess") or model self-certification |
| raw JSON tool output bloating context | shaped output with key fields + audit reference — not the full payload | dumping full API responses into the prompt |
| agent must reason across PDFs, images, audio, or tables | modality-specific parsers/models produce structured observations, then the workflow routes to reasoning/generation | one giant prompt containing raw OCR/media dumps |
| agent ignores tool result, answers from prior assumptions | **structured observations** as first-class state; final answers must cite observation IDs | trusting parametric memory for current external facts |
| tool available at wrong workflow step | **tool preconditions** gated by workflow state; engine rejects unready calls | hiding tool names or relying on vague tool descriptions |
| SQL agent generating expensive full-table scans | **query validation layer**: read-only access, allowed tables, **row limits**, **cost estimates**, **timeout policies** | admin access or unrestricted SQL generation |
| tool returns unparsable/malformed data, crashes agent | **output validation** layer inspects and normalizes tool response before reasoning | assuming every tool response is valid and safe |
| YAML-defined tools/prompts/workflow nodes | auditable, versionable, reproducible governance — still paired with **evaluation** | thinking config removes the need for tests or **evaluation** |

### Common confusions

| Confusion | Correct distinction |
|---|---|
| **Schema-constrained tool calling** vs Prompt-based tool guidance | Schema constraints are runtime-enforced: invalid tool names or arguments are rejected before execution. Prompt guidance is model-requested and bypassable. For hallucinated function names, schema constraints are the exam-correct answer. |
| **Idempotency keys** vs Retry policies | Idempotency key = server-side dedup token that prevents duplicate mutation effects. Retry policy = client-side logic for when and how often to retry. Mutation tools need both because they solve different failure modes. |
| Tool precondition (state gate) vs Hidden tool name | Precondition = tool is known but gated by workflow state and enforced by the engine. Hidden name = tool omitted or described vaguely so the model cannot select it reliably. Preconditions are stronger because availability follows state. |
| Sandbox vs Keyword filter | Sandbox = deterministic isolation across network, filesystem, credentials, and resources. Keyword filter = pattern matching on code text and is easily bypassed. Sandbox is the safety boundary; the model is not. |
| **Output shaping** vs **Output validation** | Shaping reformats tool responses for context efficiency: summary, key fields, audit reference. Validation checks correctness, schema, and safety before use. Both live in the wrapper and serve different purposes. |
| Stateful **orchestration** vs Stateless prompt chaining | Stateful **orchestration** preserves context, checkpoints transitions, tracks progress, and resumes after failures. Stateless chaining treats each call independently and loses task state between steps. |
| **NeMo Agent Toolkit** vs **NeMo Guardrails** (NVIDIA mapping) | Agent Toolkit = **orchestration** and integration of tools, agents, workflows, memory, and observability. **Guardrails** = policy/safety controls for inputs, outputs, jailbreaks, and grounded behavior. Pick by bottleneck: **orchestration** → Toolkit; safety policy → **Guardrails**. |
| Conversation state vs Task state vs Workflow state | Conversation = current context window. Task = completed/pending steps and intermediate results. Workflow = preconditions met and **approval gates** passed. Distinguish them because retries and tool availability depend on different layers. |

### Mini scenario drill

1. Scenario: An agent repeatedly calls a payment API after timeouts and sometimes charges users twice.
   Best answer pattern: **Idempotency keys** + **transaction-state checks** in the tool wrapper, plus **bounded retries** with **exponential backoff** that distinguish unknown outcomes from known failures.
   Trap: Disabling all retries (reliability loss) or retrying infinitely (amplifies damage).

2. Scenario: A coding agent can run generated Python for data analysis. The team adds a filter that blocks "os" and "subprocess" in the code string.
   Best answer pattern: Execute code in an ephemeral, **network-isolated** sandbox with **restricted filesystem**, **CPU/memory limits**, and no **production credentials**.
   Trap: Keyword filters are trivially bypassed (variations, encodings). The model cannot be the security boundary.

3. Scenario: A customer-support agent fetches order status, shipment ETA, and refund eligibility — three independent read-only API calls. **Latency** is too high.
   Best answer pattern: Parallelize all three read-only calls, then merge results into **structured observations** before the reasoning step.
   Trap: Sequential calls for independent data — each waiting for the previous to complete when no dependency exists.

### What to recognize

- **Wrong tool call**: agent calls the refund API during authentication because tool descriptions are ambiguous and no workflow-state gate exists
- **Ambiguous API**: two tools have overlapping names or descriptions, causing consistent **wrong-tool selection** and possible permission-boundary mistakes
- **Malformed JSON**: tool returns unparsable data and crashes the reasoning step because no **output validation** or normalization layer exists
- **Retry loop**: tool fails with a 4xx client error, but the agent retries infinitely because it cannot classify client errors vs transient failures
- **Tool timeout**: external API blocks for 30 seconds because no timeout, circuit breaker, or fallback path is configured
- **tool precondition not met (state gate violation before execution)**
- **state lost across retries (task graph not checkpointed or resumable)**
- **missing integration test for tool chain (tools pass unit tests but fail together)**
- **ambiguous tool descriptions causing wrong-tool selection or unsafe routing**

### Hands-on checks

- Write a tool schema and list validation checks before execution.
- Define preconditions for a refund tool: what state must be true before it is callable? Write the precondition declarations.
- Design a three-layer state model (conversation, task, workflow) for a multi-step customer support agent. Mark which tools are available at each workflow state.
- Write a test plan for an agent with 3 tools: unit tests for each tool wrapper, **integration tests** for the **tool chain**, and **scenario tests** for end-to-end workflows.

## Exam tips from mocks

- Mock-style questions in this section usually ask you to identify the correct engineering control, not just define a term.
- The section signal is: Study this when questions involve implementing reliable tool use or controlling agent behavior through code and schemas.
- The major trap pattern is: Prompting alone is not enough for tool safety; validate tool names, parameters, permissions, and outputs.
- Recurring local question themes include: tool execution safety, Agent Development, parallel **tool calls** and **latency**, workflow/state-machine design, human oversight and UX.
- When answering, name the bottleneck or risk first, then choose the technique/service that acts at that layer.
- Treat the mocks as samples, not the universe: know the surrounding trade-offs even when a specific mock did not ask them.

<details>
<summary>Mock question links (click to expand)</summary>

- **mock_1 Q8, mock_3 Q11, mock_4 Q9, mock_5 Q8** / `dev-001`: A SQL agent sometimes generates expensive full-table scans against a production warehouse. Which development control best prevents this? Correct idea: A **query validation layer** that enforces read-only access, **row limits**, **cost estimates**, allowed tables, and **timeout policies** befor.... Trap: Admin access increases risk.
- **mock_1 Q9, mock_3 Q12, mock_4 Q10, mock_5 Q9** / `dev-002`: An agent calls a payment API twice when the first response times out, sometimes charging users twice. What should be added? Correct idea: **Idempotency keys** and **transaction-state checks** in the tool wrapper, plus retry policies that distinguish unknown from failed out.... Trap: Disabling all retries hurts reliability and does not handle unknown outcomes.
- **mock_1 Q10, mock_2 Q9, mock_3 Q13, mock_4 Q11** / `dev-003`: A coding agent can run generated Python for data analysis. Which design is strongest against host compromise? Correct idea: Execute code in an ephemeral, **network-isolated** sandbox with **restricted filesystem**, **CPU/memory limits**, and no production credent.... Trap: Keyword filters are easy to bypass.
- **mock_1 Q11, mock_2 Q10, mock_3 Q14, mock_4 Q12, mock_5 Q10** / `dev-004`: A tool-using agent hallucinates function names that are not in the tool registry. What is the most robust fix? Correct idea: Use **schema-constrained tool calling** where function names and arguments must match the declared tool schema.. Trap: Higher temperature worsens hallucination.
- **mock_1 Q12, mock_2 Q11, mock_3 Q15, mock_4 Q13, mock_5 Q11** / `dev-005`: A customer-support agent has to fetch order status, shipment ETA, and refund eligibility. These three reads are independent. **Latency** is too high. What should be changed? Correct idea: Call independent read-only tools in parallel, then merge results before the reasoning step.. Trap: Sequential calls waste time when there is no dependency.
- **mock_1 Q13, mock_2 Q12, mock_3 Q16, mock_4 Q14, mock_5 Q12** / `dev-006`: An agent ignores a tool result and answers from prior assumptions. Which design improves reliability? Correct idea: Force the agent state to include **structured observations** from tool results and require final answers to cite or reference the l.... Trap: Parametric memory cannot know current tool results.
- **mock_1 Q14, mock_2 Q13, mock_3 Q17, mock_4 Q15** / `dev-007`: An agent framework uses YAML configuration for tools, prompts, models, and workflow nodes. What is the main production advantage of this pattern? Correct idea: It makes agent behavior auditable, versionable, reproducible, and easier to review separately from application code.. Trap: **Evaluation** is still required.
- **mock_2 Q14, mock_3 Q18, mock_4 Q16, mock_5 Q13** / `dev-008`: A support agent should only call the refund tool after the user has authenticated and refund policy **retrieval** succeeded. Which implementation is best? Correct idea: Use workflow state and **tool preconditions** so the refund tool is unavailable until authentication and policy-check nodes have su.... Trap: Direct user access bypasses policy.
- **mock_2 Q15, mock_3 Q19, mock_5 Q14** / `dev-009`: A tool wrapper returns large JSON payloads, causing context bloat and worse decisions. What should the wrapper do? Correct idea: Return a validated, task-specific summary plus key fields and a link/reference to the full payload for audit.. Trap: Full dumps waste context and distract attention.
- **mock_2 Q16, mock_3 Q20, mock_5 Q15** / `dev-010`: A document-review agent must extract clauses and then decide risk. Which development pattern is preferable? Correct idea: Separate extraction into a structured step with schema validation, then run risk reasoning over the extracted fields and source.... Trap: Random pages can miss critical clauses.

</details>

<!-- STUDY_ENRICHMENT_END -->

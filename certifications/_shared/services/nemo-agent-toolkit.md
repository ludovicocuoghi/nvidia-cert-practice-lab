---
service: NeMo Agent Toolkit
relevant_to: [NCP-AAI]
status: populated
---

# NeMo Agent Toolkit

## What to study first

- **Core idea:** NeMo Agent Toolkit is the `nat` workflow layer. You configure model providers in `llms:`, callable work in `functions:` / `function_groups:`, optional `retrievers:` and `memory:`, then choose the control-flow pattern with `workflow._type`.
- **Study first:** read the input/output flow first, then use the code block below for exact `nat` CLI, YAML section, and `workflow._type` names.
- `_type: tool_calling_agent` is for clean structured tool calls
- `_type: react_agent` is for observation-dependent loops
- `_type: reasoning_agent` and `_type: rewoo_agent` plan first
- `_type: router_agent` chooses one branch
- `_type: parallel_executor` fans out independent branches
- `_type: sequential_executor` chains known steps
- `_type: auto_memory_agent` wraps another agent with memory capture/retrieval.
- **When to use which:** use tool-calling for one or a few schema-based calls; ReAct when each next action depends on the previous observation; ReWOO/plan-and-execute when the plan is knowable upfront; router when exactly one specialist should handle the request; parallel when branches are independent; sequential when every step feeds the next one; memory wrapper when user/session facts should be recalled without explicit memory tool calls.
- **MCP boundary:** MCP is not the agent. Toolkit can consume MCP tools as functions or publish a workflow/tool through MCP, while a separate tool gateway may still own auth, schema policy, retries, and audit.
- **Reasoning shorthand:** CoT decomposes a problem step by step; ToT explores multiple candidate plans; ReAct reasons between actions; ReWOO plans first, executes evidence-gathering steps, then synthesizes. Keep raw hidden reasoning internal and expose concise evidence-based explanations.

## Actual implementation / How you use it

| | |
|---|---|
| **What it is technically** | A config-driven Python workflow runtime for enterprise agents. You wire `functions`, `llms`, `embedders`, `retrievers`, `memory`, and a `workflow` in YAML, then run it with the `nat` CLI or serve it as an API/MCP/A2A endpoint. |
| **How you access it** | Install `nvidia-nat` plus optional extras such as `nvidia-nat[langchain]`, `nvidia-nat[mcp]`, or `nvidia-nat[eval]`; use the `nat` CLI (`nat run`, `nat serve`, `nat workflow create`, `nat info components`). |
| **Input** | Workflow YAML + tool/function definitions + model provider config + user input. Tools can be native functions, MCP tools, LangChain/LlamaIndex/CrewAI-style integrations, retrievers, memory, or custom Python components. |
| **Output** | Executed agent workflow: tool calls, routed branches, sequential/parallel branch outputs, traces/eval results, API responses, or published MCP/A2A tools. |
| **Inside** | `workflow`, `functions`, `function_groups`, `llms`, `embedders`, `retrievers`, `memory`; components such as `tool_calling_agent`, `react_agent`, `reasoning_agent`, `rewoo_agent`, `router_agent`, `parallel_executor`, `sequential_executor`, `auto_memory_agent`; MCP client/server, A2A, tracing, eval, profiling. |

```bash
pip install "nvidia-nat[langchain]"
pip install "nvidia-nat[mcp]"
pip install "nvidia-nat[eval]"

nat workflow create --workflow-dir examples support_agent
nat run --config_file configs/support_agent.yml --input "Summarize this customer risk."
nat serve --config_file configs/support_agent.yml --host 0.0.0.0 --port 8000
```

```yaml
# Pattern map: change workflow._type to change the agent behavior.
llms:
  nim_llm:
    _type: nim
    model_name: meta/llama-3.1-70b-instruct

functions:
  lookup_ticket:
    _type: chat_completion
    llm_name: nim_llm
  summarize_policy:
    _type: chat_completion
    llm_name: nim_llm

workflow:
  # 1) Tool-calling: one/few structured tool calls.
  _type: tool_calling_agent
  tool_names: [lookup_ticket, summarize_policy]
  llm_name: nim_llm

  # 2) ReAct: reason -> act -> observe loop.
  # _type: react_agent
  # tool_names: [lookup_ticket, summarize_policy]
  # llm_name: nim_llm
  # max_tool_calls: 6

  # 3) Router: choose exactly one specialist branch.
  # _type: router_agent
  # branches: [lookup_ticket, summarize_policy]
  # llm_name: nim_llm

  # 4) Sequential / parallel executors: deterministic chain or fan-out.
  # _type: sequential_executor
  # tool_list: [lookup_ticket, summarize_policy]
  # _type: parallel_executor
  # tool_list: [lookup_ticket, summarize_policy]

  # 5) ReWOO / reasoning wrapper: plan first, then execute.
  # _type: rewoo_agent
  # tool_names: [lookup_ticket, summarize_policy]
  # llm_name: nim_llm
  # _type: reasoning_agent
  # augmented_fn: summarize_policy
  # llm_name: nim_llm

  # 6) Automatic memory wrapper: add memory around another agent.
  # _type: auto_memory_agent
  # inner_agent_name: support_agent
  # memory_name: user_memory
```

```yaml
# Composition example: router picks a specialist ReAct workflow.
functions:
  support_react_agent:
    _type: react_agent
    tool_names: [ticket_lookup, policy_search]
    llm_name: nim_llm
    max_tool_calls: 6

workflow:
  _type: router_agent
  branches: [support_react_agent, billing_workflow, fallback_workflow]
  llm_name: nim_llm
  detailed_logs: true
```

**Mental model**: NeMo Agent Toolkit is the NVIDIA workflow harness around agents. It does not serve the model, build the retriever index, or enforce every safety rule by itself; it decides which configured function/tool/agent runs, how steps are chained or parallelized, and how the workflow is observed and evaluated.

---

## What it is, in one paragraph

NVIDIA's framework for building, orchestrating, evaluating, and deploying agentic AI workflows. The practical surface is not a single `Agent(...)` class; it is a `nat` workflow made from YAML sections such as `llms`, `functions`, `retrievers`, `memory`, and `workflow`. Choose it when the problem is control flow around tools and agents: ReAct loops, tool-calling agents, router agents, sequential or parallel execution, existing framework integration, MCP/A2A publishing, tracing, evals, and workflow profiling.

## Actual workflow and API surface

| Need | What you call/configure | Recognition cue |
|---|---|---|
| Install core toolkit | `pip install nvidia-nat` | Base package and `nat` CLI |
| Add framework plugins | `nvidia-nat[langchain]` or first-party plugin packages such as `nvidia-nat-llama-index` / `nvidia-nat-crewai` | Existing framework integration without replatforming |
| Add MCP tools | `nvidia-nat[mcp]`, `mcp_client`, `nat mcp ...` | Use remote MCP server tools as Toolkit functions, or publish a workflow/tool as MCP |
| Define model provider | `llms: nim_llm: _type: nim` | NIM/OpenAI/AWS Bedrock/Azure OpenAI/LiteLLM/Hugging Face provider config |
| Define callable work | `functions:` and `function_groups:` | Tools, agents, retrievers, and wrappers the workflow can call |
| ReAct agent | `workflow: _type: react_agent`, `tool_names`, `llm_name`, `max_tool_calls` | Reason/action/observation loop; good when each step depends on previous tool output |
| Reasoning agent | `_type: reasoning_agent`, `augmented_fn`, `llm_name` | Plan ahead for a configured function/agent; useful when task-specific planning improves execution |
| ReWOO agent | `_type: rewoo_agent`, `tool_names`, `llm_name` | Plan once, execute evidence-gathering steps, then synthesize; efficient when plan is knowable upfront |
| Tool-calling agent | `_type: tool_calling_agent` | Structured tool/function definitions; requires a tool-calling-capable LLM |
| Router agent | `_type: router_agent`, `branches`, `llm_name` | Classify a request and select one specialist branch |
| Parallel executor | `_type: parallel_executor`, `tool_list` | Fan out the same input to independent tools, then append branch outputs |
| Sequential executor | `_type: sequential_executor`, `tool_list` | Chain tool output into the next tool without using an LLM for every step |
| Memory wrapper | `_type: auto_memory_agent`, `inner_agent_name`, `memory_name` | Add automatic memory capture/retrieval to ReAct, ReWOO, tool-calling, or custom agents |
| Run locally | `nat run --config_file ... --input ...` | Console/debug execution of a workflow |
| Serve workflow | `nat serve --config_file ... --host ... --port ...` | Expose workflow as a FastAPI microservice |
| Evaluate workflow | `nat eval --config_file ... --dataset ...` | Dataset-based workflow evaluation and performance instrumentation |
| Discover components | `nat info components` | Find registered `_type` values and config fields |

## Where it sits in the lifecycle

**Agent orchestration and development** — between model serving (NIM/Triton) and the application layer. It connects tools, data sources, and multiple agents into coordinated workflows while remaining framework-flexible.

```
[Models via NIM] → [NeMo Agent Toolkit: orchestration, tool use, skill chaining] → [Application]
                         ↑
          [NeMo Guardrails: safety/policy layer around inputs/outputs]
```

## When it is the right answer

- "Enterprise wants an agent workflow that connects tools, data sources, and multiple agents while remaining framework-flexible" (mock_1 platform-001)
- "Task orchestration and coordination across multiple agents" (mock_2 Q20)
- "Reduce response latency while maintaining modular reasoning across skills" — use modular agent runtime to parallelize components, skill chaining with async execution and caching (mock_3 Q5, mock_2 Q58, mock_3 Q59)
- "Stateful orchestration across multi-step workflows" — toolkit supports managing state across steps (mock_3 Q52)
- "Tool use and dialogue orchestration" — built-in support for these (mock_2 Q20)
- Parallelizing independent skills: retrieval, memory, tools can operate concurrently through modular runtime

## Adjacent-service decision boundary

- **The missing capability is only retrieval**: use NeMo Retriever for extraction, embedding, vector/hybrid search, and reranking; use Agent Toolkit when an agent must call that retriever as one tool among others.
- **The missing capability is only runtime policy**: use NeMo Guardrails for refusal flows, tool restrictions, jailbreak checks, and grounded-output validation; use Agent Toolkit when the workflow must decide when those checks run.
- **The missing capability is only an endpoint**: use NIM/Triton to expose a model behind APIs; use Agent Toolkit when the endpoint is just one model provider inside a broader workflow.
- **The missing capability is a tool boundary**: a generic tool gateway/MCP server may own authentication, schemas, retries, and audit; Agent Toolkit consumes or publishes those tools but should not hide authorization in prompt text.
- **The missing capability is one deterministic process**: a simple state machine or sequential executor is better than adding multiple agents when every step is known and no reasoning/routing is needed.

## How it relates to neighboring services

- vs **NeMo Retriever**: Retriever owns the RAG capability: extraction, embeddings, search, reranking, and citations. Agent Toolkit decides when and how an agent calls the retriever.
- vs **NeMo Guardrails**: Guardrails owns policy enforcement. Agent Toolkit owns workflow routing, tool execution, memory wiring, traces, and evals. They usually sit together.
- vs **NIM**: NIM serves optimized model APIs; Agent Toolkit configures those model providers in `llms:` and coordinates them with tools.
- vs **MCP**: MCP is a protocol for exposing tools/context. Agent Toolkit can act as an MCP client/host or server runtime, but MCP itself is not an agent orchestration policy.
- vs **LangChain/LlamaIndex/CrewAI**: Similar neighboring frameworks. Agent Toolkit can wrap or integrate existing framework components instead of forcing a rewrite.
- vs **NeMo Framework/Customizer**: Those change model weights or adapters. Agent Toolkit changes the runtime workflow around the model.

## Numbers, defaults, knobs you should recognize

- Modular runtime supports parallel execution of components (retrieval, memory, tools)
- Skill chaining with asynchronous execution reduces serial latency
- Result caching avoids redundant computation across repeated skill invocations
- Orchestrator module coordinates skill execution order and dependencies

## Example exam-style scenario

> A team is building a multi-agent customer support workflow with retrieval, tool calling, and memory. They want to reduce latency and maintain modularity using NVIDIA tools. Which component manages the orchestration?
>
> **Answer**: NeMo Agent Toolkit — it provides the orchestrator for parallel skill execution, caching, and multi-agent coordination.

## Mock signals

| Mock | Questions | Signal |
| ---- | --------- | ------ |
| mock_1 | platform-001 | "Connects tools, data sources, and multiple agents while remaining framework-flexible" |
| mock_2 | Q20, Q58 | Tool use + dialogue orchestration, skill chaining with async execution and caching |
| mock_3 | Q5, Q52, Q59 | Modular agent runtime for parallelization, workflow orchestration for state management, orchestrator for concurrent skill execution + caching |

## Deep dives

## Deep Dive Contents

This deep dive covers the key concepts behind NeMo Agent Toolkit that the exam tests:

- **[Agent Architecture Patterns]**: tool-calling, ReAct, reasoning wrapper, ReWOO/plan-and-execute, router, sequential/parallel executors, memory wrapper, and multi-agent coordination — when each pattern fits
- **[Tool Integration]**: function calling schema, tool selection mechanism, and error handling (retry, fallback chain, escalate)
- **[Planning and Reasoning]**: Chain-of-Thought, Tree-of-Thought, ReWOO, reasoning wrappers, and budgeted execution with max steps/tokens/critic nodes
- **[Memory in Agents]**: short-term (conversation context), working (scratchpad/task state), and long-term (persistent vector store) — with write policies and retrieval strategies
- **[Multi-Agent Coordination]**: orchestrator, peer-to-peer, and hierarchical patterns — when multi-agent adds value vs a single agent with tools

### DEEP DIVE: Agent Architecture Patterns

The NeMo Agent Toolkit supports multiple agent architectures, each suited to different types of tasks:

**ReAct (Reasoning + Acting):**
The most common pattern for LLM agents. The model interleaves reasoning traces with actions in a loop:
```
Thought: I need to find the user's account.
Action: call_tool(search_customer, query="John Doe")
Observation: Found account #12345
Thought: Now I need to check the account balance.
Action: call_tool(get_balance, account_id=12345)
Observation: Balance is $500
Thought: I have the answer. Respond to user.
Final Answer: Your balance is $500.
```
ReAct works best when each step depends on the previous observation — the agent cannot plan ahead because it does not know what it will find. It is ideal for interactive troubleshooting, data lookup, and research tasks where intermediate results inform next steps. The downside: each step requires an LLM call, so latency grows linearly with steps.

**Reasoning wrapper / Plan-and-Execute:**
The agent first creates a plan, then executes steps:
```
Plan:
1. Search for recent NVIDIA GPU benchmarks.
2. Extract key performance numbers.
3. Summarize findings.
Execution:
→ Step 1: search(query="NVIDIA GPU benchmarks 2025")
→ Step 2: extract(columns=["model", "FLOPS", "memory"])
→ Step 3: generate_summary(data)
```
This pattern works better for well-defined multi-step tasks where the full plan is knowable upfront. In NeMo Agent Toolkit, recognize `reasoning_agent` when a configured function/agent is augmented with plan generation, and recognize `rewoo_agent` when the workflow explicitly separates planning, evidence execution, and final solution. It reduces repeated reasoning calls but cannot adapt to unexpected results as well as ReAct.

**Router-based:**
A lightweight classifier or LLM call classifies the user intent and routes to a specialized handler:
```
User: "What's the weather in Tokyo?"
→ Intent: weather_query
→ Router → weather_agent(tool=weather_API, location="Tokyo")

User: "Book a flight to London."
→ Intent: booking
→ Router → booking_agent(tool=flight_API, destination="London")
```
Router patterns scale well because only one LLM call is needed for routing, and handlers can be simple deterministic logic or small models. They degrade gracefully — unrecognized intents route to a fallback handler ("I cannot help with that"). The tradeoff is that the router must be accurate: misclassification sends the user down the wrong path.

**Multi-agent:**
Multiple specialized agents coordinated by an orchestrator:
```
Orchestrator Agent
    ├── Research Agent (web search, summarization)
    ├── Code Agent (code generation, execution)
    ├── Data Agent (SQL queries, data analysis)
    └── Review Agent (quality check, validation)
```
Each specialist has its own tools, instructions, and model configuration. The orchestrator delegates sub-tasks and synthesizes results. This pattern excels when tasks span multiple domains (e.g., "Find the latest research, implement the algorithm, and benchmark it"). The cost: more LLM calls, more latency, and coordination overhead.

**When each pattern fits:**
- **Tool-calling:** Structured one-step or few-step API calls where the model can select from clean function schemas.
- **ReAct:** Single-agent, interactive, observation-dependent tasks such as support triage, troubleshooting, or research.
- **Reasoning / ReWOO / Plan-and-Execute:** Repetitive multi-step workflows where the full plan is knowable upfront; use ReWOO when evidence placeholders make the data flow clear and token-efficient.
- **Router:** High-volume, distinct-intent scenarios with clear skill boundaries.
- **Sequential executor:** Deterministic known pipeline where each output feeds the next step.
- **Parallel executor:** Independent branches that share the same input and can be merged later.
- **Automatic memory wrapper:** Any agent type needs consistent user/session memory without relying on explicit memory tool calls.
- **Multi-agent:** Cross-domain tasks requiring multiple specializations, different tool scopes, or model/access boundaries.

The NeMo Agent Toolkit can implement these patterns as YAML-configured agents/functions. The exam-relevant skill is identifying which pattern matches the scenario's constraints: latency, determinism, adaptability, branch independence, memory needs, and tool-boundary ownership.

### DEEP DIVE: Tool Integration

Agents are only as useful as their tools. The NeMo Agent Toolkit provides a structured framework for tool integration:

**Function calling schema:**
Tools are defined with a JSON schema that the LLM uses to decide what to call. A typical tool definition includes:
- **Tool name:** Short, descriptive (e.g., `search_web`, `calculate`).
- **Description:** Natural language explanation of what the tool does and when to use it. The LLM reads this to decide relevance. Example: "Search the web for current information. Use when the user asks about recent events, news, or facts not in your training data."
- **Parameters:** JSON Schema defining inputs (type, description, required vs optional, enum values). E.g., `{"query": {"type": "string", "description": "Search query"}}`.
- **Output schema:** What the tool returns (string, JSON object, structured data).

The quality of tool descriptions directly impacts agent accuracy. A vague description ("search for info") causes the LLM to call the wrong tool. A precise description ("use when the user asks about current stock prices; returns price, change, and volume") improves routing.

**Tool selection mechanism:**
The LLM sees all tool schemas in its system prompt (as function definitions). When processing user input, it:
1. Determines whether any tool could help fulfill the request.
2. Selects the best-matching tool based on the descriptions.
3. Generates a function call with parameters matching the schema.
4. The runtime validates the parameters against the schema before execution.

If the LLM is unsure, it may ask the user for clarification rather than guessing parameters. This is controlled by the "strict mode" setting — strict mode forces the LLM to ask rather than hallucinate parameters.

**Error handling:**
Tool calls can fail in several ways, and the toolkit provides structured error handling:

- **Tool not found:** The LLM requested a tool that does not exist. Runtime returns an error observation: "Tool 'search_databse' not found. Available tools: search_web, calculate, get_weather." The LLM then retries with a valid tool name.
- **Invalid parameters:** The LLM generated parameters that do not match the schema. Runtime returns a validation error with details about which parameter is invalid. The LLM can correct and retry.
- **Execution error:** The tool itself fails (API timeout, network error, invalid input). Runtime returns the error message. The agent can retry (with backoff), fall back to a different tool, or escalate to the user.
- **Timeout:** Tool takes too long. Configurable timeout per tool. On timeout, the agent can retry or skip.

The error handling policy is configurable:
- **Retry with backoff:** Retry failed calls up to N times with exponential backoff.
- **Fallback chain:** Try tool A, if it fails try tool B, if that fails try tool C.
- **Escalate:** Return a message to the user: "I cannot complete this request because the database is unavailable."

### DEEP DIVE: Planning and Reasoning

The NeMo Agent Toolkit supports multiple reasoning strategies that control how an agent plans its actions:

**Chain-of-Thought (CoT):**
The most basic reasoning pattern. The agent generates step-by-step reasoning before each action:
```
Step 1: The user wants a comparison of H100 and B200 GPUs.
Step 2: I need to find specifications for both.
Step 3: Then I need to compute the performance ratio.
```
CoT can improve accuracy by making the model decompose problems, but raw hidden reasoning should not be exposed to users or stored in logs by default. For study purposes, know CoT as a planning/decomposition technique; production systems usually expose concise evidence-based explanations instead.

**Tree-of-Thought (ToT):**
The agent explores multiple reasoning paths, evaluates them, and chooses the best:
```
Branch A: Search for H100 specs → Compute FLOPS → Search for B200 specs → Compare
Branch B: Search for both specs in one query → Compare
Branch C: Use a comparison tool if available → Output
```
Each branch is evaluated (e.g., "does this approach make sense?"). The agent prunes low-value branches and continues with the best ones. ToT is more robust than CoT for problems with multiple valid approaches (debugging, optimization, design review), but it is significantly more expensive because each branch costs model calls and trace complexity.

**ReWOO (Reason Without Observation):**
A planning strategy where the agent creates a complete tool call plan upfront, then executes all calls, then synthesizes the results:
```
Plan:
1. web_search("H100 tensor cores") → Variable: h100_info
2. web_search("B200 tensor cores") → Variable: b200_info
3. compare(h100_info, b200_info) → Variable: comparison
4. generate_response(comparison)
```
ReWOO is faster than ReAct because there is no interleaved LLM reasoning between tool calls — the plan is generated once, then executed. However, it fails if an intermediate result changes the optimal path (e.g., if the H100 search finds nothing, the comparison tool cannot proceed). ReWOO is best for well-understood, self-contained tasks.

**Budgeted execution:**
All reasoning patterns can be constrained with budgets:
- **Max steps:** Hard limit on reasoning/action loops. Prevents infinite loops and runaway cost. Default is typically 10-20 steps.
- **Max tokens per step:** Limits the length of reasoning traces per step. Prevents the agent from generating overly long chain-of-thought before acting.
- **Stopping criteria:** Conditions that cause early termination. When a critic node (a separate LLM call or heuristic) determines the answer is good enough, execution stops even if steps remain.
- **Critic nodes:** An optional evaluation step at each stage. Before proceeding, a critic checks if the current state is on track. If the critic detects the agent going in circles, it can trigger a replan or escalation.

### DEEP DIVE: Memory in Agents

Memory in the NeMo Agent Toolkit operates at multiple levels, each with distinct characteristics:

**Short-term memory (conversation context):**
The immediate conversation history within the current session. This is the LLM context window — all messages in the current interaction (user turns, agent responses, tool calls, observations). Short-term memory is limited by the model's context length (e.g., 128k tokens for Nemotron-4-340B). The toolkit manages context window pressure by:
- **Sliding window:** Dropping oldest messages when context exceeds the limit.
- **Summarization:** Compressing old conversation turns into a summary, keeping the full recent history but a condensed version of older interactions.
- **Key message retention:** Preserving important messages (e.g., user preferences established early) while dropping chit-chat.

**Working memory (scratchpad / task state):**
The current state of ongoing tasks. Working memory persists across reasoning steps within a single task but is cleared when the task completes. Examples:
- "I have gathered 3 documents and need to process 2 more."
- "The user's account ID is 12345, established in step 2."
- "Current search results: [list of URLs] — needs filtering."

Working memory is distinct from conversation history. It is task-specific structured data that the agent writes to and reads from during execution. The toolkit provides:
- **Scratchpad:** A dedicated space for the agent to write intermediate reasoning, partial results, and state notes.
- **State variables:** Typed key-value stores that tools can read/write. E.g., a search tool might write to `search.results`, and a summarization tool reads from it.
- **Task context:** Metadata about the current task (task ID, creation time, assigned tools, deadline).

**Long-term memory (persistent across sessions):**
Information that persists beyond the current conversation. In NeMo Agent Toolkit, recognize the `memory:` YAML section, memory backends such as Redis, Zep, Mem0, or another `MemoryEditor`, and the `auto_memory_agent` wrapper that automatically retrieves and stores memory around another agent:
- **Storage:** What gets written to long-term memory is determined by a memory write policy: user preferences, resolved issues, durable facts, or explicit "remember this" requests.
- **Retrieval:** Relevant memories are searched and injected before the inner agent runs. Only the top relevant memories should enter context.
- **Isolation:** User identity is runtime context, not a prompt string. Multi-tenant memory must not leak another user's facts.
- **Expiry:** Memories have timestamps and retention/TTL policy. Stale memories should be deprioritized or deleted.

**Memory write policies:**
The toolkit allows configuring what triggers a memory write:
- **Implicit:** All facts mentioned by the user are automatically stored ("My name is Alice" → store `name=Alice`).
- **Explicit:** Only facts the user explicitly asks the agent to remember are stored ("Remember that my preferred language is Python").
- **Curated:** A separate model call evaluates each potential memory before storage ("is this fact useful to remember? Is it specific? Is it likely to change?").

**Retrieval strategies:**
- **Always retrieve:** Inject top-k memories into every turn. High recall but uses context window space.
- **Trigger-based retrieve:** Only retrieve when the user's query seems to reference past context (detected by a classifier or embedding similarity).
- **Hybrid:** Retrieve on trigger AND inject a condensed memory summary in every turn.

### DEEP DIVE: Multi-Agent Coordination

When a single agent is not enough, the NeMo Agent Toolkit enables multi-agent systems with several coordination patterns:

**Orchestrator pattern (central controller):**
A central orchestrator agent receives the user request, decomposes it, and delegates sub-tasks to specialist agents:
```
User: "Research and build a dashboard for Q4 sales."
→ Orchestrator:
   1. Assign Research Agent: "Find Q4 sales data sources."
   2. Assign Data Agent: "Process and aggregate Q4 sales data."
   3. Assign Code Agent: "Build a dashboard with aggregated data."
   4. Collect results and synthesize final response.
```
Pros: Clear control flow, single point of governance, easy to add/remove specialists.
Cons: Orchestrator is a single point of failure and a bottleneck. If the orchestrator misunderstands, the entire system goes wrong. The orchestrator's context window must hold the full picture.

**Peer-to-peer (direct communication):**
Agents communicate directly without a central controller:
```
Research Agent: "Data Agent, I found Q4 sales CSV at path X."
Data Agent: "Thanks, aggregating now. Code Agent, I have the aggregated data in format Y."
Code Agent: "Dashboard built at URL Z. Research Agent, what title should I use?"
```
Pros: More flexible, no single bottleneck, agents can form ad-hoc workflows.
Cons: Hard to debug ("who said what to whom?"), risk of agents talking in circles, no global progress tracking. Requires careful agent design to avoid infinite communication loops (the toolkit provides a max-turn limit for agent-to-agent messages).

**Hierarchical (manager-worker):**
A tree structure where manager agents delegate to worker agents, who may themselves delegate further:
```
CEO Agent
  ├── VP Research
  │     ├── Researcher A (web search)
  │     └── Researcher B (document analysis)
  ├── VP Engineering
  │     ├── Engineer A (frontend)
  │     └── Engineer B (backend)
  └── VP Operations
        ├── Ops A (deployment)
        └── Ops B (monitoring)
```
Each manager manages a small number of direct reports (span of control ~3-5). Information flows up and down the hierarchy. This pattern scales to very large agent systems (10+ agents) by keeping each manager's context manageable.

Pros: Scalable, natural decomposition, bounded context windows per agent.
Cons: Slow (information must travel up and down the hierarchy), redundant communication, overhead of managing the hierarchy itself.

**When multi-agent adds value vs single-agent with tools:**

| Scenario | Better Approach | Why |
|----------|----------------|-----|
| Single domain, well-defined tools | Single-agent + tools | No coordination overhead |
| Cross-domain tasks (code + data + research) | Multi-agent orchestration | Each specialist focuses on its domain |
| Need for diverse model capabilities (fast small model for routing, large model for reasoning) | Multi-agent with model routing | Cost optimization |
| Strict role-based access (one agent cannot see financial data) | Multi-agent with isolation | Security boundary |
| High-throughput, simple requests | Single-agent router pattern | Lower latency |

The exam-relevant insight: multi-agent is not always better. If a single agent with tools can solve the problem, adding more agents adds latency, cost, and failure modes without benefit. Multi-agent coordination is a tool, not a goal.

<!-- STUDY_ENRICHMENT_START -->
## Study card data
- **Lifecycle:** Agent orchestration and development
- **Relevant exams:** Agentic AI
- **What it is:** Config-driven `nat` workflow runtime for agent control flow: functions/tools, model providers, retrievers, memory, tool-calling/ReAct/reasoning/ReWOO/router agents, sequential/parallel executors, MCP/A2A, tracing, eval, and serving.
- **Use it when:** Choose it when the scenario is about wiring agent workflow control: route a request, call tools/retrievers/memory, run independent branches in parallel, chain steps, expose the workflow as an API/MCP server, or evaluate/profile agent traces.
- **Do not use it when:** Choose the neighboring service when the scenario only needs one capability: Retriever for RAG retrieval, Guardrails for runtime policy, NIM/Triton for model endpoints, NeMo Framework/Customizer for changing weights, or a tool gateway/MCP server for tool auth/schema ownership.
- **Common trap:** Adding an "agent toolkit" when the real failure is the boundary between tools: missing schema validation, missing access control, bad retriever quality, or no deterministic state owner. Agent Toolkit helps wire the workflow, but it does not magically repair those adjacent layers.
- **Recognition clues:** `workflow:` YAML with `functions`, `llms`, `retrievers`, `memory`, and a `_type` such as `tool_calling_agent`, `react_agent`, `reasoning_agent`, `rewoo_agent`, `router_agent`, `parallel_executor`, `sequential_executor`, or `auto_memory_agent`.
### Study notes
- Start from the YAML surface: `llms` chooses providers such as NIM/OpenAI; `functions` and `function_groups` define callable work; `workflow` chooses the agent/executor pattern.
- Pattern choice is the core study target: tool-calling is for clean structured calls; ReAct is for observation-dependent loops; `reasoning_agent`/`rewoo_agent` plan first; router agents pick one branch; sequential executors chain known steps; parallel executors fan out independent work; `auto_memory_agent` wraps another agent with memory capture/retrieval.
- MCP is not "the agent." It is a tool/context protocol. Agent Toolkit can consume MCP tools as functions or publish workflows/tools through MCP server runtimes.
- Use Agent Toolkit beside existing LangChain, LlamaIndex, CrewAI, Semantic Kernel, Google ADK, or custom Python agents when the value is instrumentation, workflow configuration, evaluation, and deployment around them.
- Pair with **NeMo Retriever** when the workflow needs RAG; pair with **NeMo Guardrails** when tool use or user-facing responses need policy checks; pair with **NIM** when the model provider should be a supported NVIDIA endpoint.
### Must know
- **Install/CLI**: `pip install nvidia-nat`; optional extras include `nvidia-nat[langchain]`, `nvidia-nat[mcp]`, and `nvidia-nat[eval]`; run with `nat run`, serve with `nat serve`, inspect with `nat info components`.
- **YAML sections**: `functions`, `function_groups`, `llms`, `embedders`, `retrievers`, `memory`, `workflow`.
- **Agent/executor `_type` values**: `tool_calling_agent`, `react_agent`, `reasoning_agent`, `rewoo_agent`, `router_agent`, `parallel_executor`, `sequential_executor`, `auto_memory_agent`.
- **LLM provider config**: `llms: nim_llm: _type: nim, model_name: meta/llama-3.1-70b-instruct`.
- **MCP boundary**: `nvidia-nat[mcp]` lets Toolkit discover remote MCP tools as functions or publish Toolkit workflows/tools as MCP.
- **Evaluation boundary**: `nat eval` tests workflows against datasets and instruments quality/performance; it is not the same as live monitoring alone.
### What to recognize
- "router agent" / `branches` / "choose one specialist" -> NeMo Agent Toolkit router agent.
- "`parallel_executor`" / fan-out/fan-in / independent branch analysis -> NeMo Agent Toolkit parallel executor.
- "`sequential_executor`" / deterministic chain where output feeds the next function -> NeMo Agent Toolkit sequential executor.
- "`react_agent`" / reason-action-observation loop with tool calls -> NeMo Agent Toolkit ReAct agent.
- "`tool_calling_agent`" / structured function schema / one or few tool calls -> NeMo Agent Toolkit tool-calling agent.
- "`reasoning_agent`" / `augmented_fn` / plan before executing a configured function -> NeMo Agent Toolkit reasoning wrapper.
- "`rewoo_agent`" / plan -> evidence slots such as `#E1` -> final answer -> NeMo Agent Toolkit ReWOO pattern.
- "`auto_memory_agent`" / `inner_agent_name` + `memory_name` -> NeMo Agent Toolkit memory wrapper around another agent.
- "`mcp_client`" / "use MCP tools as functions" / publish workflow as MCP -> NeMo Agent Toolkit plus MCP plugin.
- "existing LangChain/LlamaIndex/CrewAI stack needs traces/evals/deployment" -> NeMo Agent Toolkit around the existing stack.
### Related services

- **NeMo Guardrails**
- **NeMo Retriever**
- **NIM**
- **MCP / tool gateway**
- **LangChain, LlamaIndex, CrewAI, Semantic Kernel**
- **Nemotron** models

### Hands-on checks
- Draw a `router_agent` -> specialist `react_agent` -> Retriever function -> Guardrails check -> final response workflow and mark which pieces are Toolkit-owned versus neighboring services.
- Write a YAML sketch with `llms`, two `functions`, and a `parallel_executor`; explain why parallel is correct only when branches do not depend on each other.
## Exam tips from mocks
- Mock-style questions test whether **NeMo Agent Toolkit** matches **Agent orchestration and development**, not whether the product name sounds familiar.
- Choose it when the scenario includes `workflow:` YAML, `functions`, `llms`, branch routing, tool calls, MCP tool discovery, sequential/parallel executors, traces, or agent workflow evaluation.
- Choose another service when the problem is really one adjacent capability: Retriever quality, Guardrails policy, NIM/Triton serving, NeMo Framework/Customizer training, or tool-gateway authorization.
- The common trap pattern is: adding "more agent" language when the real failure is an unowned tool boundary, missing schema, bad retrieval, or absent deterministic state machine.
- Expect distractors around nearby services such as **NeMo Retriever**, **NeMo Guardrails**, **NIM**, **MCP**, and **LangChain/LlamaIndex**. Decide by workflow boundary first.
- Do not memorize question wording. Memorize the role boundary, the failure mode it solves, and the cases where it is the wrong tool.
<details>
<summary>Mock question links (click to expand)</summary>

- **mock_1 Q39, mock_2 Q41, mock_3 Q51, mock_4 Q45, mock_5 Q41** / `platform-001` (NVIDIA Platform Implementation): An enterprise wants an agent workflow that connects tools, data sources, and multiple agents while remaining framework-flexible. Which NVIDIA component is most relevant? Correct idea: NeMo Agent Toolkit. Trap: CUDA Graphs reduce launch overhead.
- **mock_1 Q28, mock_2 Q29, mock_3 Q35, mock_4 Q31, mock_5 Q27** / `deploy-007` (Deployment and Scaling): An agent must support 100k daily users, but only 5% ask complex multi-step questions. What routing strategy is best? Correct idea: Use intent/complexity routing: simple requests go to cheap deterministic or small-model paths; complex tasks go to the full age.. Trap: Random routing is not production control.
- **mock_3 Q9** / `m2-009` (Model Deployment): When integrating an LLM into a Python application using NVIDIA's tools, which approach provides the fastest time-to-deployment? Correct idea: Using NVIDIA NIM with pre-built containers and OpenAI-compatible API endpoints. Trap: This describes building a custom CUDA inference server from scratch, which would be the slowest path to deployment, n..

</details>

## Concept boundary

This page should stay product-specific: what the NVIDIA component is, where it sits in the NVIDIA stack, how to choose it on an NVIDIA exam, and which neighboring NVIDIA services are common distractors. Portable algorithms, lifecycle patterns, and vendor-neutral architecture belong in the Agentic AI General Study pages, with this NVIDIA service referenced as one implementation example.

<!-- STUDY_ENRICHMENT_END -->

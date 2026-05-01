---
service: NeMo Agent Toolkit
relevant_to: [NCP-AAI]
status: populated
---

# NeMo Agent Toolkit

## At a glance

| | |
|---|---|
| **What it is** | Python SDK/framework — build and orchestrate AI agents with tools, memory, and multi-agent coordination |
| **How you access it** | `pip install nvidia-agent-toolkit` or NGC container |
| **Input** | Tool definitions (JSON schemas) + agent config + user query |
| **Output** | Orchestrated agent actions (tool calls, final answers), multi-agent workflows |
| **Inside** | ReAct/Plan-and-Execute loops, tool schemas, memory wrappers, tracing/evaluation |

```python
from nvidia_agent_toolkit import Agent, Tool
tool = Tool(name="web_search", description="Search the web", parameters={"query": "string"})
agent = Agent(tools=[tool], model="nim://nemotron-4-15b")
response = agent.run("What's the latest NVIDIA GPU?")
```

**Mental model**: the Python framework that gives your LLM tools, memory, and multi-step reasoning — LangChain-like but NVIDIA-native.

---

## What it is, in one paragraph

NVIDIA's framework for building, orchestrating, and deploying agentic AI workflows. Provides built-in support for tool integration, dialogue orchestration, skill chaining, memory management, and multi-agent coordination. It is the **agent workflow/tool orchestration layer** — not a model training tool, not an inference optimizer, not a safety filter.

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

## When it is the wrong answer (common trap)

- **Model inference optimization**: That's TensorRT-LLM or Triton. NeMo Agent Toolkit orchestrates workflows, not GPU kernels.
- **Model training/customization**: That's NeMo Framework or NeMo Customizer.
- **Safety filtering and jailbreak prevention**: That's NeMo Guardrails.
- **Data curation/deduplication**: That's NeMo Curator.
- **Kernel profiling**: That's Nsight Systems / Nsight Compute.
- **"Compile all skills into a single monolithic model"**: The toolkit supports modular orchestration, not monolithic compilation (mock_2 Q58).
- **GPU-accelerated training of LLMs**: That's NeMo Framework, not the Agent Toolkit (mock_2 Q20).

## How it relates to neighboring services

- vs **NeMo Framework**: Framework trains and customizes models; Agent Toolkit orchestrates agent workflows around those models.
- vs **NeMo Guardrails**: Guardrails enforces safety policies at the input/output boundary; Agent Toolkit manages tool orchestration and workflow state. They're complementary layers.
- vs **NIM**: NIM serves optimized model APIs; Agent Toolkit connects those APIs with tools and workflow logic.
- vs **LangChain/LlamaIndex**: Similar orchestration domain, but NeMo Agent Toolkit is NVIDIA-native with GPU-optimized runtime, async execution, and caching.

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

- **[Agent Architecture Patterns]**: ReAct, Plan-and-Execute, Router-based, and Multi-agent coordination — when each pattern fits
- **[Tool Integration]**: function calling schema, tool selection mechanism, and error handling (retry, fallback chain, escalate)
- **[Planning and Reasoning]**: Chain-of-Thought, Tree-of-Thought, ReWOO, and budgeted execution with max steps/tokens/critic nodes
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

**Plan-and-Execute:**
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
This pattern works better for well-defined multi-step tasks where the full plan is knowable upfront. It reduces LLM calls (one for planning, then tool calls without LLM in the middle) but cannot adapt to unexpected results as well as ReAct.

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
- **ReAct:** Single-agent, interactive, observation-dependent tasks (customer support, research)
- **Plan-and-Execute:** Repetitive multi-step workflows with known structure (report generation, data pipelines)
- **Router:** High-volume, distinct-intent scenarios (chatbots with clear skill boundaries)
- **Multi-agent:** Cross-domain tasks requiring multiple specializations (research + code + analysis)

The NeMo Agent Toolkit can implement all four patterns. The exam-relevant skill is identifying which pattern matches the scenario's constraints (latency, determinism, adaptability).

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
CoT improves accuracy over direct answering by forcing the model to decompose problems. It is the default reasoning strategy for most agent implementations because it requires no special infrastructure — just prompting.

**Tree-of-Thought (ToT):**
The agent explores multiple reasoning paths simultaneously, evaluates them, and chooses the best:
```
Branch A: Search for H100 specs → Compute FLOPS → Search for B200 specs → Compare
Branch B: Search for both specs in one query → Compare
Branch C: Use a comparison tool if available → Output
```
Each branch is evaluated (e.g., "does this approach make sense?"). The agent prunes low-value branches and continues with the best ones. ToT is more robust than CoT for problems with multiple valid approaches (e.g., debugging, optimization, creative tasks), but it is significantly more expensive — each branch is an LLM call.

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
Information that persists beyond the current conversation. This is typically implemented via a vector store (e.g., Milvus, FAISS, or NVIDIA's vector database offerings):
- **Storage:** What gets written to long-term memory is determined by a **memory write policy**: "store user preferences," "store resolved issues," "store learned facts."
- **Retrieval:** When the agent needs previous context, it queries the vector store with relevance scoring (cosine similarity, embedding distance). Only the top-k most relevant memories are injected into context.
- **Expiry:** Memories have timestamps and TTLs. Stale memories are deprioritized or deleted. A preference set 6 months ago may be less relevant than one set yesterday.

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
- **What it is:** Python SDK/framework — build and orchestrate AI agents with tools, memory, and multi-agent coordination
- **Use it when:** Use when an enterprise agent workflow needs tools, memory, retrievers, multi-agent coordination, observability, or framework-flexible orchestration.
- **Do not use it when:** Do not use it for model serving, low-level inference optimization, data curation, or safety policy enforcement by itself.
- **Common trap:** Confusing the agent workflow orchestrator with the model server, retriever, or guardrail layer it calls.
- **Scenario signal:** An enterprise agent must coordinate tools, memory, retrievers, and multi-step workflows across an existing stack.
### Study notes
- Treat this as the agent workflow layer: composing agents, tools, retrievers, memory, evaluators, and observability without forcing a single agent framework.
- It is useful when an enterprise already has LangChain, LlamaIndex, CrewAI, Semantic Kernel, MCP tools, or custom Python agents and wants instrumentation, workflow configuration, tests, and evaluation.
- Do not confuse agent orchestration with safety enforcement. Pair it with **NeMo Guardrails** when tool use or user-facing responses need policy checks.
### Must know
- **ReAct vs routing vs sequential/parallel**: ReAct interleaves reasoning + action + observation in a loop; routing classifies intent and dispatches to a specialized handler; sequential chains tools output→input; parallel runs independent tools concurrently
- **tool schemas and validation**: each tool is declared with a JSON schema (name, description, parameters, types); the LLM selects tools by matching intent to schema descriptions; responses are validated before passing to the next step
- **memory wrappers**: Toolkit provides wrappers for short-term (conversation in context), working (scratchpad/task state), and long-term memory (vector DB retrieval) — each with write policies, relevance scoring, and expiry rules
- **workflow tracing and evaluation**: every agent step (tool call, LLM inference, memory access) is traced as a span; distributed tracing with correlation IDs enables latency breakdown and quality debugging across the pipeline
### High-yield exam signals
- multi-agent workflow → NeMo Agent Toolkit orchestrates multiple specialized agents with tool routing and skill chaining
- tool orchestration → structured tool schemas with JSON validation, retry/fallback/escalate error handling
- observability → workflow tracing and evaluation across agent steps for debugging latency and quality
- existing agent framework → Toolkit wraps LangChain, LlamaIndex, CrewAI, or custom Python agents without forcing a rewrite
- MCP → Model Context Protocol support for connecting external tools and data sources
### Related services

- **NeMo Guardrails**
- **NeMo Retriever**
- **NIM**
- **Nemotron** models

### Hands-on checks
- Draw a router -> specialist tool agent -> retriever -> final response workflow and mark where tracing/evaluation happens.
## Exam tips from mocks
- Mock-style questions test whether **NeMo Agent Toolkit** matches **Agent orchestration and development**, not whether the product name sounds familiar.
- Choose it when the scenario signal matches this boundary: Use when an enterprise agent workflow needs tools, memory, retrievers, multi-agent coordination, observability, or framework-flexible orchestration.
- Reject it when the problem is actually about another layer: Do not use it for model serving, low-level inference optimization, data curation, or safety policy enforcement by itself.
- The common trap pattern is: Confusing the agent workflow orchestrator with the model server, retriever, or guardrail layer it calls.
- Expect distractors around nearby services such as **Nsight Compute**, **NCCL**, **NIM**. Decide by lifecycle first, product name second.
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
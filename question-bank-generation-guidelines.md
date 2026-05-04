# NVIDIA Certification Question Bank Generation Guidelines

## Purpose

Use this document as the standard for generating, parsing, filtering, and practicing with question banks for:

- NVIDIA-Certified Professional Generative AI LLMs, NCP-GENL
- NVIDIA-Certified Professional Agentic AI, NCP-AAI

The goal is to avoid weak practice banks where the correct option is obvious, where answer A is usually correct, or where wrong options are silly. Questions should train exam-style reasoning: identify the lifecycle phase, the bottleneck, the NVIDIA tool or concept, and the safest production decision.

## Required question metadata

Every question must contain these fields:

```text
### Q<number>: <question stem>
- ID: <stable unique id>
- Domain: <official blueprint domain>
- Section: <UI section, usually same as Domain>
- Topic: <specific subtopic for filtering>
- Exam: <NCP-GENL or NCP-AAI>
- Difficulty: <medium | hard | advanced | expert>
- A. <option>
- B. <option>
- C. <option>
- D. <option>
- Answer: <A/B/C/D>
- Explanation: <why the correct answer solves the real bottleneck>
- Why A is wrong: <only if A is wrong>
- Why B is wrong: <only if B is wrong>
- Why C is wrong: <only if C is wrong>
- Why D is wrong: <only if D is wrong>
```

## Field definitions

### Domain

The official exam blueprint domain. Use this for exam-weighted dashboards and broad progress tracking.

Examples for NCP-GENL:

- Model Optimization
- GPU Acceleration and Optimization
- Prompt Engineering
- Fine-Tuning
- Data Preparation
- Model Deployment
- Evaluation
- Production Monitoring and Reliability
- LLM Architecture
- Safety, Ethics, and Compliance

Examples for NCP-AAI:

- Agent Architecture and Design
- Agent Development
- Evaluation and Tuning
- Deployment and Scaling
- Cognition, Planning, and Memory
- Knowledge Integration and Data Handling
- NVIDIA Platform Implementation
- Run, Monitor, and Maintain
- Safety, Ethics, and Compliance
- Human-AI Interaction and Oversight

### Section

The UI section. Usually the same as `Domain`. Keep it separate in case the app later groups domains differently.

### Topic

The specific subtopic used for fine filtering and adaptive practice.

Examples for NCP-GENL:

- quantization
- TensorRT-LLM inference optimization
- KV cache and long context
- Triton serving and batching
- distributed training parallelism
- NCCL and multi-node communication
- profiling and CUDA execution
- prompt grounding and RAG prompting
- structured output and function calling
- fine-tuning strategy
- preference optimization and RLHF
- data preparation and tokenization
- deployment architecture
- evaluation metrics
- production monitoring
- LLM architecture
- safety and guardrails

Examples for NCP-AAI:

- planning gates and evidence collection
- multi-agent coordination
- workflow/state-machine design
- tool execution safety
- parallel tool calls and latency
- trajectory evaluation
- RAG evaluation and groundedness
- agent deployment and scaling
- memory and state management
- reasoning patterns
- knowledge integration
- NVIDIA NIM and model serving
- NeMo Agent Toolkit
- NeMo Guardrails
- TensorRT-LLM and inference performance
- Nsight and observability
- safety and compliance
- human oversight and UX

### Difficulty

Use difficulty to adapt the question selection.

- medium: clear scenario, one main concept, plausible but not highly tricky distractors
- hard: scenario has a real bottleneck and multiple plausible choices
- advanced: requires choosing the right lifecycle layer or trade-off under constraints
- expert: combines multiple systems, safety, scaling, or evaluation concerns

## Adaptive practice rules

The app should combine `Domain`, `Topic`, and `Difficulty` with the learner profile.

Suggested behavior:

- If the learner marks a domain as Weak or scores below 60%, select mostly medium and hard questions from that domain.
- If the learner marks a domain as Shaky, select hard and advanced questions.
- If the learner marks a domain as OK, select advanced questions and a few hard review questions.
- If the learner marks a domain as Strong, reduce frequency and select mostly advanced or expert questions.
- If the learner marks a domain as Expert, show fewer questions from that domain, but when selected, use expert difficulty.

Suggested weighting:

```text
Weak:    50% medium, 35% hard, 15% advanced, 0% expert
Shaky:   20% medium, 45% hard, 30% advanced, 5% expert
OK:      10% medium, 30% hard, 45% advanced, 15% expert
Strong:  0% medium, 15% hard, 50% advanced, 35% expert
Expert:  0% medium, 5% hard, 35% advanced, 60% expert
```

Also account for exam weight. A weak high-weight domain should appear more often than a weak low-weight domain.

## Question quality rules

1. The correct answer must not be obvious from richness or length alone.
2. Do not make A correct by default.
3. Shuffle options after generation.
4. Distractors should be plausible near misses, not obviously reckless or unserious answers.
5. Wrong answers should usually solve the wrong layer, miss a safety boundary, optimize the wrong bottleneck, or ignore production constraints.
6. Avoid giveaway options like "hide logs", "retry forever", "disable evaluation", "prompt only", "use the biggest model for everything", or "do nothing" unless the question is intentionally basic.
7. Explanations should teach the decision rule, not just restate the answer.
8. Include the reason each wrong option is wrong whenever possible.

## Generated service-question rules

Generated service questions need a concrete workload, not just a product pair. A weak stem says:

```text
A team is deciding between NIM Operator and NeMo Curator. The requirement is to manage K8s-native NIM lifecycle. Which selection is correct?
```

A better stem gives the operational signal:

```text
A team is rolling out several NIM endpoints on Kubernetes and needs autoscaling, version pinning, and zero-downtime upgrades. NeMo Curator is on the shortlist, but the bottleneck is endpoint lifecycle management. Which selection is correct?
```

Rules:

- Do not leak generator notes such as "common trap", "actual requirement", "not the layer described here", or "supported NVIDIA path".
- State the lifecycle signal in scenario language: Kubernetes rollout, endpoint packaging, dataframe preprocessing, training-data dedupe, inference-time retrieval, runtime policy, eval regression, timeline profiling, kernel profiling, or distributed training communication.
- Keep the domain aligned with the tested lifecycle. Do not place service-selection questions in unrelated domains just to satisfy balance.
- Make every choice answer the same decision. Avoid one real product option plus unrelated generic failures unless the scenario explicitly compares those operational moves.
- Run `node scripts/audit_question_bank.mjs` after generation; the audit must fail if these weak patterns return.

## Shuffling rule

After generating a bank:

1. Generate each question with one correct answer and three plausible wrong answers.
2. Randomly shuffle A/B/C/D for every question.
3. Update the `Answer:` field.
4. Update `Why X is wrong:` labels.
5. Audit the answer distribution.

Target answer distribution for a 65-question bank:

- A: 12 to 20
- B: 12 to 20
- C: 12 to 20
- D: 12 to 20

For a 100-question bank:

- A: 20 to 30
- B: 20 to 30
- C: 20 to 30
- D: 20 to 30

## Practice mode selection logic

For each session:

1. Pick target exam: NCP-GENL or NCP-AAI.
2. Pick weak domains using learner score and confidence.
3. Adjust probability by official exam weight.
4. Within each domain, pick topics with fewer answered questions or lower accuracy.
5. Select difficulty based on learner level in that domain.
6. Avoid repeating questions answered correctly with high confidence recently.
7. Reintroduce missed questions after a delay.

## Flashcard generation logic

Flashcards should use the same metadata:

- Exam
- Domain
- Section
- Topic
- Difficulty

Flashcards should be generated more often for weak domains and less often for expert domains. For expert domains, flashcards should be shorter, more trap-focused, and more advanced.

Example expert flashcard:

```text
Front: Long-context OOM under 32K summarization. Weight quantization helps, but what is usually the direct bottleneck?
Back: KV cache memory. Use paged KV cache, KV-cache quantization, MQA/GQA, context compression, or lower batch/context length.
Tags: NCP-GENL, Model Optimization, KV cache and long context, expert
```

## Bank separation

Keep separate question banks:

- `ncp-genl-questions-enriched.md`
- `ncp-aai-agentic-ai-questions-enriched.md`

Do not mix exams in the same bank. The UI may show common NVIDIA services in Study Mode, but Practice Mode should load from the selected certification bank.

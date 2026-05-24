# Question Topic Coverage Report

Generated: 2026-05-20

This report counts active unique practice-bank questions, not fixed mock-test slots. The app de-duplicates question IDs in this order: downloaded/original question markdown, generated high-fidelity shards, then drafts.

Counting terms:

- Original/downloaded bank: unique questions parsed from `mocks/original/*.questions.md`.
- Generated bank: unique questions parsed from `generated/high_fidelity_*.md`.
- Mock slots: the fixed timed mock JSON references. These can reuse the same original question IDs across multiple mock sets.
- Exam section: exact `Domain` metadata on each question.
- Topic: exact `Topic` metadata on each question; when downloaded mocks lack topic metadata, this report labels a conservative inferred topic from the question stem/explanation.
- NVIDIA-specific: explicit `Scope` if present, otherwise inferred by NVIDIA platform keywords.

## NCP-AAI (agentic_ai_professional)

Active unique bank: 425
Downloaded/original unique: 65; downloaded fixed mock slots: 279
Generated unique: 360; generated fixed mock slots: 240

### Screenshot Finding

For **NVIDIA Platform Implementation**, the active unique bank has 41 questions: 5 downloaded/original and 36 generated.
With difficulty set to **Hard**, downloaded/original has 0 matches, while generated has 15 matches.
That is why the UI can show `Downloaded bank 0` for this section when Hard is selected even though downloaded mocks contain some platform questions overall.
Downloaded/original platform difficulty split: easy 3, medium 1, hard 0, expert 1.

### Domain Summary

| Exam section |Total |Original |Generated |Concept |NVIDIA |Difficulty |
| --- | --- | --- | --- | --- | --- | --- |
| Deployment and Scaling | 57 | 8 | 49 | 33 | 24 | E 5 / M 17 / H 20 / X 15 / A 0 |
| Knowledge Integration and Data Handling | 50 | 7 | 43 | 35 | 15 | E 3 / M 16 / H 20 / X 11 / A 0 |
| Evaluation and Tuning | 49 | 8 | 41 | 35 | 14 | E 5 / M 14 / H 19 / X 11 / A 0 |
| Agent Architecture and Design | 43 | 10 | 33 | 35 | 8 | E 5 / M 12 / H 17 / X 9 / A 0 |
| NVIDIA Platform Implementation | 41 | 5 | 36 | 0 | 41 | E 5 / M 11 / H 15 / X 10 / A 0 |
| Safety, Ethics, and Compliance | 40 | 3 | 37 | 35 | 5 | E 2 / M 10 / H 18 / X 10 / A 0 |
| Run, Monitor, and Maintain | 38 | 3 | 35 | 34 | 4 | E 2 / M 11 / H 17 / X 8 / A 0 |
| Agent Development | 37 | 10 | 27 | 35 | 2 | E 5 / M 10 / H 15 / X 7 / A 0 |
| Cognition, Planning, and Memory | 35 | 7 | 28 | 35 | 0 | E 4 / M 8 / H 17 / X 6 / A 0 |
| Human-AI Interaction and Oversight | 35 | 4 | 31 | 35 | 0 | E 5 / M 9 / H 15 / X 6 / A 0 |

### Topic Summary

| Exam section |Topic |Total |Original |Generated |Concept |NVIDIA |Difficulty |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Agent Architecture and Design | NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack? | 5 | 0 | 5 | 0 | 5 | E 0 / M 2 / H 1 / X 2 / A 0 |
| Agent Architecture and Design | Agent Architecture and Design | 3 | 3 | 0 | 3 | 0 | E 1 / M 2 / H 0 / X 0 / A 0 |
| Agent Architecture and Design | agent vs workflow; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 1 / M 0 / H 2 / X 0 / A 0 |
| Agent Architecture and Design | NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability? | 3 | 0 | 3 | 0 | 3 | E 0 / M 1 / H 1 / X 1 / A 0 |
| Agent Architecture and Design | evidence gate; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 0 / H 2 / X 0 / A 0 |
| Agent Architecture and Design | human oversight and UX | 2 | 2 | 0 | 2 | 0 | E 1 / M 0 / H 1 / X 0 / A 0 |
| Agent Architecture and Design | multi-agent coordination | 2 | 2 | 0 | 2 | 0 | E 1 / M 0 / H 1 / X 0 / A 0 |
| Agent Architecture and Design | multi-agent roles; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 0 / H 1 / X 1 / A 0 |
| Agent Architecture and Design | observe-reason-act loop; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 1 / M 0 / H 1 / X 0 / A 0 |
| Agent Architecture and Design | plan-and-execute; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 0 / H 1 / X 1 / A 0 |
| Agent Architecture and Design | ReAct loop; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 1 / H 1 / X 0 / A 0 |
| Agent Architecture and Design | risk router; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 1 / H 0 / X 1 / A 0 |
| Agent Architecture and Design | router; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 1 / H 0 / X 1 / A 0 |
| Agent Architecture and Design | state owner; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 1 / H 1 / X 0 / A 0 |
| Agent Architecture and Design | supervisor orchestration; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 1 / H 1 / X 0 / A 0 |
| Agent Architecture and Design | tool boundary; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 1 / H 1 / X 0 / A 0 |
| Agent Architecture and Design | workflow graph; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 0 / H 1 / X 1 / A 0 |
| Agent Architecture and Design | knowledge integration | 1 | 1 | 0 | 1 | 0 | E 0 / M 0 / H 0 / X 1 / A 0 |
| Agent Architecture and Design | memory and state management | 1 | 1 | 0 | 1 | 0 | E 0 / M 0 / H 1 / X 0 / A 0 |
| Agent Architecture and Design | tool execution safety | 1 | 1 | 0 | 1 | 0 | E 0 / M 1 / H 0 / X 0 / A 0 |
| Agent Development | tool execution safety | 6 | 6 | 0 | 6 | 0 | E 2 / M 1 / H 2 / X 1 / A 0 |
| Agent Development | schema validation; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 1 / M 0 / H 2 / X 0 / A 0 |
| Agent Development | bounded retries; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 1 / M 0 / H 1 / X 0 / A 0 |
| Agent Development | function calling; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 1 / H 0 / X 1 / A 0 |
| Agent Development | graceful failure; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 0 / H 2 / X 0 / A 0 |
| Agent Development | idempotency; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 0 / H 1 / X 1 / A 0 |
| Agent Development | NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability? | 2 | 0 | 2 | 0 | 2 | E 0 / M 1 / H 0 / X 1 / A 0 |
| Agent Development | parallel tool calls; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 1 / H 1 / X 0 / A 0 |
| Agent Development | prompt chain; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 1 / H 0 / X 1 / A 0 |
| Agent Development | regression tests; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 1 / H 1 / X 0 / A 0 |
| Agent Development | sandboxing; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 1 / H 1 / X 0 / A 0 |
| Agent Development | structured output; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 1 / H 1 / X 0 / A 0 |
| Agent Development | tool contracts; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 0 / H 1 / X 1 / A 0 |
| Agent Development | tool selection; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 0 / H 1 / X 1 / A 0 |
| Agent Development | Agent Development | 1 | 1 | 0 | 1 | 0 | E 1 / M 0 / H 0 / X 0 / A 0 |
| Agent Development | human oversight and UX | 1 | 1 | 0 | 1 | 0 | E 0 / M 0 / H 1 / X 0 / A 0 |
| Agent Development | parallel tool calls and latency | 1 | 1 | 0 | 1 | 0 | E 0 / M 1 / H 0 / X 0 / A 0 |
| Agent Development | workflow/state-machine design | 1 | 1 | 0 | 1 | 0 | E 0 / M 1 / H 0 / X 0 / A 0 |
| Cognition, Planning, and Memory | memory and state management | 4 | 4 | 0 | 4 | 0 | E 1 / M 1 / H 1 / X 1 / A 0 |
| Cognition, Planning, and Memory | episodic memory; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 0 / H 1 / X 2 / A 0 |
| Cognition, Planning, and Memory | planning budget; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 1 / M 0 / H 2 / X 0 / A 0 |
| Cognition, Planning, and Memory | reflection; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 1 / H 2 / X 0 / A 0 |
| Cognition, Planning, and Memory | session memory; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 1 / H 2 / X 0 / A 0 |
| Cognition, Planning, and Memory | task decomposition; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 1 / H 2 / X 0 / A 0 |
| Cognition, Planning, and Memory | working memory; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 1 / M 0 / H 1 / X 1 / A 0 |
| Cognition, Planning, and Memory | long-term memory; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 0 / H 2 / X 0 / A 0 |
| Cognition, Planning, and Memory | memory vs RAG; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 1 / H 0 / X 1 / A 0 |
| Cognition, Planning, and Memory | memory write policy; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 0 / H 1 / X 1 / A 0 |
| Cognition, Planning, and Memory | semantic memory; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 2 / H 0 / X 0 / A 0 |
| Cognition, Planning, and Memory | state ownership; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 1 / H 1 / X 0 / A 0 |
| Cognition, Planning, and Memory | planning gates and evidence collection | 1 | 1 | 0 | 1 | 0 | E 0 / M 0 / H 1 / X 0 / A 0 |
| Cognition, Planning, and Memory | tool execution safety | 1 | 1 | 0 | 1 | 0 | E 1 / M 0 / H 0 / X 0 / A 0 |
| Cognition, Planning, and Memory | workflow/state-machine design | 1 | 1 | 0 | 1 | 0 | E 0 / M 0 / H 1 / X 0 / A 0 |
| Deployment and Scaling | NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference? | 5 | 0 | 5 | 0 | 5 | E 0 / M 2 / H 1 / X 2 / A 0 |
| Deployment and Scaling | NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets? | 5 | 0 | 5 | 0 | 5 | E 0 / M 2 / H 1 / X 2 / A 0 |
| Deployment and Scaling | NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes? | 5 | 0 | 5 | 0 | 5 | E 0 / M 2 / H 1 / X 2 / A 0 |
| Deployment and Scaling | NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference? | 5 | 0 | 5 | 0 | 5 | E 0 / M 2 / H 1 / X 2 / A 0 |
| Deployment and Scaling | tool execution safety | 4 | 4 | 0 | 3 | 1 | E 2 / M 0 / H 1 / X 1 / A 0 |
| Deployment and Scaling | agent deployment and scaling | 3 | 3 | 0 | 2 | 1 | E 0 / M 2 / H 1 / X 0 / A 0 |
| Deployment and Scaling | stateless services; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 0 / H 3 / X 0 / A 0 |
| Deployment and Scaling | autoscaling; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 0 / H 1 / X 1 / A 0 |
| Deployment and Scaling | backpressure; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 1 / M 1 / H 0 / X 0 / A 0 |
| Deployment and Scaling | blue-green rollback; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 0 / H 2 / X 0 / A 0 |
| Deployment and Scaling | bulkhead; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 0 / H 1 / X 1 / A 0 |
| Deployment and Scaling | canary rollout; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 1 / H 1 / X 0 / A 0 |
| Deployment and Scaling | circuit breaker; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 0 / H 2 / X 0 / A 0 |
| Deployment and Scaling | fallback; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 2 / H 0 / X 0 / A 0 |
| Deployment and Scaling | NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead? | 2 | 0 | 2 | 0 | 2 | E 0 / M 1 / H 0 / X 1 / A 0 |
| Deployment and Scaling | p95/p99 latency; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 1 / M 0 / H 0 / X 1 / A 0 |
| Deployment and Scaling | queue depth; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 0 / H 2 / X 0 / A 0 |
| Deployment and Scaling | traffic shaping; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 1 / H 0 / X 1 / A 0 |
| Deployment and Scaling | TTFT; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 1 / H 1 / X 0 / A 0 |
| Deployment and Scaling | workload isolation; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 0 / H 1 / X 1 / A 0 |
| Deployment and Scaling | multi-agent coordination | 1 | 1 | 0 | 1 | 0 | E 1 / M 0 / H 0 / X 0 / A 0 |
| Evaluation and Tuning | NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models? | 5 | 0 | 5 | 0 | 5 | E 0 / M 2 / H 1 / X 2 / A 0 |
| Evaluation and Tuning | ablation; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 0 / H 2 / X 1 / A 0 |
| Evaluation and Tuning | bootstrap evals; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 1 / H 2 / X 0 / A 0 |
| Evaluation and Tuning | groundedness; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 1 / M 0 / H 2 / X 0 / A 0 |
| Evaluation and Tuning | latency and cost eval; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 1 / M 0 / H 1 / X 1 / A 0 |
| Evaluation and Tuning | LLM-as-judge calibration; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 0 / H 1 / X 2 / A 0 |
| Evaluation and Tuning | NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication? | 3 | 0 | 3 | 0 | 3 | E 0 / M 1 / H 1 / X 1 / A 0 |
| Evaluation and Tuning | NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization? | 3 | 0 | 3 | 0 | 3 | E 0 / M 1 / H 1 / X 1 / A 0 |
| Evaluation and Tuning | NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment? | 3 | 0 | 3 | 0 | 3 | E 0 / M 1 / H 1 / X 1 / A 0 |
| Evaluation and Tuning | regression suite; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 2 / H 1 / X 0 / A 0 |
| Evaluation and Tuning | task success; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 1 / H 2 / X 0 / A 0 |
| Evaluation and Tuning | tool-call success; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 1 / H 2 / X 0 / A 0 |
| Evaluation and Tuning | trajectory evaluation; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 1 / H 1 / X 1 / A 0 |
| Evaluation and Tuning | Evaluation and Tuning | 2 | 2 | 0 | 2 | 0 | E 1 / M 0 / H 0 / X 1 / A 0 |
| Evaluation and Tuning | RAG evaluation and groundedness | 2 | 2 | 0 | 2 | 0 | E 2 / M 0 / H 0 / X 0 / A 0 |
| Evaluation and Tuning | human oversight and UX | 1 | 1 | 0 | 1 | 0 | E 0 / M 1 / H 0 / X 0 / A 0 |
| Evaluation and Tuning | memory and state management | 1 | 1 | 0 | 1 | 0 | E 0 / M 1 / H 0 / X 0 / A 0 |
| Evaluation and Tuning | tool execution safety | 1 | 1 | 0 | 1 | 0 | E 0 / M 1 / H 0 / X 0 / A 0 |
| Evaluation and Tuning | workflow/state-machine design | 1 | 1 | 0 | 1 | 0 | E 0 / M 0 / H 1 / X 0 / A 0 |
| Human-AI Interaction and Oversight | feedback loop; agentic_ai_professional | 4 | 0 | 4 | 4 | 0 | E 0 / M 1 / H 2 / X 1 / A 0 |
| Human-AI Interaction and Oversight | human-in-the-loop; agentic_ai_professional | 4 | 0 | 4 | 4 | 0 | E 0 / M 2 / H 2 / X 0 / A 0 |
| Human-AI Interaction and Oversight | human-on-the-loop; agentic_ai_professional | 4 | 0 | 4 | 4 | 0 | E 0 / M 0 / H 2 / X 2 / A 0 |
| Human-AI Interaction and Oversight | review queues; agentic_ai_professional | 4 | 0 | 4 | 4 | 0 | E 0 / M 2 / H 1 / X 1 / A 0 |
| Human-AI Interaction and Oversight | decision traceability; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 1 / M 0 / H 1 / X 1 / A 0 |
| Human-AI Interaction and Oversight | escalation threshold; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 1 / H 2 / X 0 / A 0 |
| Human-AI Interaction and Oversight | human oversight and UX | 3 | 3 | 0 | 3 | 0 | E 2 / M 1 / H 0 / X 0 / A 0 |
| Human-AI Interaction and Oversight | override path; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 1 / H 2 / X 0 / A 0 |
| Human-AI Interaction and Oversight | transparent handoff; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 1 / H 1 / X 1 / A 0 |
| Human-AI Interaction and Oversight | user consent; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 1 / M 0 / H 2 / X 0 / A 0 |
| Human-AI Interaction and Oversight | workflow/state-machine design | 1 | 1 | 0 | 1 | 0 | E 1 / M 0 / H 0 / X 0 / A 0 |
| Knowledge Integration and Data Handling | NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation? | 5 | 0 | 5 | 0 | 5 | E 0 / M 2 / H 1 / X 2 / A 0 |
| Knowledge Integration and Data Handling | NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG? | 5 | 0 | 5 | 0 | 5 | E 0 / M 2 / H 1 / X 2 / A 0 |
| Knowledge Integration and Data Handling | NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs? | 5 | 0 | 5 | 0 | 5 | E 0 / M 2 / H 1 / X 2 / A 0 |
| Knowledge Integration and Data Handling | knowledge integration | 4 | 4 | 0 | 4 | 0 | E 0 / M 2 / H 2 / X 0 / A 0 |
| Knowledge Integration and Data Handling | chunking and metadata; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 1 / H 2 / X 0 / A 0 |
| Knowledge Integration and Data Handling | document ETL; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 1 / M 0 / H 2 / X 0 / A 0 |
| Knowledge Integration and Data Handling | embeddings; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 1 / M 0 / H 1 / X 1 / A 0 |
| Knowledge Integration and Data Handling | hybrid search; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 0 / H 1 / X 2 / A 0 |
| Knowledge Integration and Data Handling | permissioned RAG; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 1 / H 2 / X 0 / A 0 |
| Knowledge Integration and Data Handling | vector database; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 1 / H 2 / X 0 / A 0 |
| Knowledge Integration and Data Handling | corpus governance; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 1 / H 1 / X 0 / A 0 |
| Knowledge Integration and Data Handling | data freshness; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 0 / H 2 / X 0 / A 0 |
| Knowledge Integration and Data Handling | grounded citations; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 0 / H 1 / X 1 / A 0 |
| Knowledge Integration and Data Handling | knowledge graph; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 1 / H 0 / X 1 / A 0 |
| Knowledge Integration and Data Handling | RAG evaluation and groundedness | 2 | 2 | 0 | 2 | 0 | E 1 / M 0 / H 1 / X 0 / A 0 |
| Knowledge Integration and Data Handling | reranking; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 2 / H 0 / X 0 / A 0 |
| Knowledge Integration and Data Handling | Knowledge Integration and Data Handling | 1 | 1 | 0 | 1 | 0 | E 0 / M 1 / H 0 / X 0 / A 0 |
| NVIDIA Platform Implementation | NeMo Agent Toolkit; agentic_ai_professional | 3 | 0 | 3 | 0 | 3 | E 0 / M 0 / H 3 / X 0 / A 0 |
| NVIDIA Platform Implementation | NeMo Guardrails; agentic_ai_professional | 3 | 0 | 3 | 0 | 3 | E 0 / M 0 / H 1 / X 2 / A 0 |
| NVIDIA Platform Implementation | NeMo Retriever; agentic_ai_professional | 3 | 0 | 3 | 0 | 3 | E 0 / M 0 / H 3 / X 0 / A 0 |
| NVIDIA Platform Implementation | NIM; agentic_ai_professional | 3 | 0 | 3 | 0 | 3 | E 0 / M 3 / H 0 / X 0 / A 0 |
| NVIDIA Platform Implementation | NeMo Curator; agentic_ai_professional | 2 | 0 | 2 | 0 | 2 | E 1 / M 0 / H 0 / X 1 / A 0 |
| NVIDIA Platform Implementation | NeMo Evaluator; agentic_ai_professional | 2 | 0 | 2 | 0 | 2 | E 0 / M 0 / H 2 / X 0 / A 0 |
| NVIDIA Platform Implementation | Nemotron models; agentic_ai_professional | 2 | 0 | 2 | 0 | 2 | E 1 / M 1 / H 0 / X 0 / A 0 |
| NVIDIA Platform Implementation | NGC; agentic_ai_professional | 2 | 0 | 2 | 0 | 2 | E 0 / M 0 / H 1 / X 1 / A 0 |
| NVIDIA Platform Implementation | NIM Operator; agentic_ai_professional | 2 | 0 | 2 | 0 | 2 | E 0 / M 1 / H 1 / X 0 / A 0 |
| NVIDIA Platform Implementation | Nsight Compute; agentic_ai_professional | 2 | 0 | 2 | 0 | 2 | E 0 / M 0 / H 2 / X 0 / A 0 |
| NVIDIA Platform Implementation | Nsight Systems; agentic_ai_professional | 2 | 0 | 2 | 0 | 2 | E 0 / M 1 / H 1 / X 0 / A 0 |
| NVIDIA Platform Implementation | NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication? | 2 | 0 | 2 | 0 | 2 | E 0 / M 1 / H 0 / X 1 / A 0 |
| NVIDIA Platform Implementation | NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization? | 2 | 0 | 2 | 0 | 2 | E 0 / M 1 / H 0 / X 1 / A 0 |
| NVIDIA Platform Implementation | NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment? | 2 | 0 | 2 | 0 | 2 | E 0 / M 1 / H 0 / X 1 / A 0 |
| NVIDIA Platform Implementation | TensorRT-LLM; agentic_ai_professional | 2 | 0 | 2 | 0 | 2 | E 0 / M 0 / H 1 / X 1 / A 0 |
| NVIDIA Platform Implementation | tool execution safety | 2 | 2 | 0 | 0 | 2 | E 1 / M 1 / H 0 / X 0 / A 0 |
| NVIDIA Platform Implementation | Triton Inference Server; agentic_ai_professional | 2 | 0 | 2 | 0 | 2 | E 0 / M 1 / H 0 / X 1 / A 0 |
| NVIDIA Platform Implementation | NVIDIA NIM and model serving | 1 | 1 | 0 | 0 | 1 | E 1 / M 0 / H 0 / X 0 / A 0 |
| NVIDIA Platform Implementation | RAG evaluation and groundedness | 1 | 1 | 0 | 0 | 1 | E 1 / M 0 / H 0 / X 0 / A 0 |
| NVIDIA Platform Implementation | workflow/state-machine design | 1 | 1 | 0 | 0 | 1 | E 0 / M 0 / H 0 / X 1 / A 0 |
| Run, Monitor, and Maintain | audit trail; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 1 / H 1 / X 1 / A 0 |
| Run, Monitor, and Maintain | cost monitoring; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 1 / H 2 / X 0 / A 0 |
| Run, Monitor, and Maintain | drift monitoring; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 1 / M 0 / H 2 / X 0 / A 0 |
| Run, Monitor, and Maintain | incident response; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 1 / H 2 / X 0 / A 0 |
| Run, Monitor, and Maintain | NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead? | 3 | 0 | 3 | 0 | 3 | E 0 / M 1 / H 1 / X 1 / A 0 |
| Run, Monitor, and Maintain | observability; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 1 / H 2 / X 0 / A 0 |
| Run, Monitor, and Maintain | p95/p99 SLOs; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 1 / H 1 / X 1 / A 0 |
| Run, Monitor, and Maintain | rollback evidence; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 0 / H 1 / X 2 / A 0 |
| Run, Monitor, and Maintain | SLOs; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 1 / M 0 / H 1 / X 1 / A 0 |
| Run, Monitor, and Maintain | trace replay; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 0 / H 2 / X 1 / A 0 |
| Run, Monitor, and Maintain | TTFT monitoring; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 1 / H 1 / X 1 / A 0 |
| Run, Monitor, and Maintain | human-on-the-loop sampling; agentic_ai_professional | 2 | 0 | 2 | 2 | 0 | E 0 / M 2 / H 0 / X 0 / A 0 |
| Run, Monitor, and Maintain | human oversight and UX | 1 | 1 | 0 | 1 | 0 | E 0 / M 1 / H 0 / X 0 / A 0 |
| Run, Monitor, and Maintain | Nsight and observability | 1 | 1 | 0 | 0 | 1 | E 0 / M 0 / H 1 / X 0 / A 0 |
| Run, Monitor, and Maintain | Run, Monitor, and Maintain | 1 | 1 | 0 | 1 | 0 | E 0 / M 1 / H 0 / X 0 / A 0 |
| Safety, Ethics, and Compliance | NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant? | 5 | 0 | 5 | 0 | 5 | E 0 / M 2 / H 1 / X 2 / A 0 |
| Safety, Ethics, and Compliance | layered controls; agentic_ai_professional | 4 | 0 | 4 | 4 | 0 | E 0 / M 2 / H 0 / X 2 / A 0 |
| Safety, Ethics, and Compliance | prompt injection; agentic_ai_professional | 4 | 0 | 4 | 4 | 0 | E 0 / M 2 / H 2 / X 0 / A 0 |
| Safety, Ethics, and Compliance | approval gates; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 0 / H 0 / X 3 / A 0 |
| Safety, Ethics, and Compliance | bias and fairness; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 0 / H 3 / X 0 / A 0 |
| Safety, Ethics, and Compliance | data retention; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 2 / M 1 / H 0 / X 0 / A 0 |
| Safety, Ethics, and Compliance | decision traceability; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 0 / H 1 / X 2 / A 0 |
| Safety, Ethics, and Compliance | least privilege; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 0 / H 3 / X 0 / A 0 |
| Safety, Ethics, and Compliance | PII controls; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 0 / H 3 / X 0 / A 0 |
| Safety, Ethics, and Compliance | policy testing; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 3 / H 0 / X 0 / A 0 |
| Safety, Ethics, and Compliance | tool allowlist; agentic_ai_professional | 3 | 0 | 3 | 3 | 0 | E 0 / M 0 / H 3 / X 0 / A 0 |
| Safety, Ethics, and Compliance | memory and state management | 1 | 1 | 0 | 1 | 0 | E 0 / M 0 / H 1 / X 0 / A 0 |
| Safety, Ethics, and Compliance | safety and compliance | 1 | 1 | 0 | 1 | 0 | E 0 / M 0 / H 0 / X 1 / A 0 |
| Safety, Ethics, and Compliance | Safety, Ethics, and Compliance | 1 | 1 | 0 | 1 | 0 | E 0 / M 0 / H 1 / X 0 / A 0 |

## NCP-GENL (genai_llms_professional)

Active unique bank: 520
Downloaded/original unique: 100; downloaded fixed mock slots: 250
Generated unique: 420; generated fixed mock slots: 240

### Domain Summary

| Exam section |Total |Original |Generated |Concept |NVIDIA |Difficulty |
| --- | --- | --- | --- | --- | --- | --- |
| Model Deployment | 85 | 9 | 76 | 12 | 73 | E 9 / M 18 / H 36 / X 22 / A 0 |
| Data Preparation | 65 | 9 | 56 | 35 | 30 | E 7 / M 14 / H 28 / X 16 / A 0 |
| Fine-Tuning | 65 | 13 | 52 | 34 | 31 | E 6 / M 18 / H 26 / X 15 / A 0 |
| Production Monitoring and Reliability | 55 | 7 | 48 | 35 | 20 | E 6 / M 14 / H 24 / X 11 / A 0 |
| Evaluation | 45 | 7 | 38 | 34 | 11 | E 3 / M 11 / H 21 / X 10 / A 0 |
| LLM Architecture | 45 | 6 | 39 | 35 | 10 | E 5 / M 10 / H 19 / X 11 / A 0 |
| Model Optimization | 45 | 17 | 28 | 23 | 22 | E 6 / M 13 / H 16 / X 10 / A 0 |
| Safety, Ethics, and Compliance | 45 | 5 | 40 | 33 | 12 | E 3 / M 11 / H 22 / X 9 / A 0 |
| GPU Acceleration and Optimization | 35 | 14 | 21 | 13 | 22 | E 3 / M 8 / H 17 / X 7 / A 0 |
| Prompt Engineering | 35 | 13 | 22 | 33 | 2 | E 5 / M 9 / H 14 / X 7 / A 0 |

### Topic Summary

| Exam section |Topic |Total |Original |Generated |Concept |NVIDIA |Difficulty |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Data Preparation | NVIDIA service: NeMo Curator; lifecycle: Data preparation; Which NVIDIA toolkit provides Pipeline stages, classifiers, and dedup workflows for training-data curation? | 10 | 0 | 10 | 0 | 10 | E 1 / M 2 / H 4 / X 3 / A 0 |
| Data Preparation | NVIDIA service: NeMo Retriever; lifecycle: RAG and retrieval; Which NVIDIA Retriever layer handles extraction, embedding, indexing/search, and reranking for enterprise RAG? | 10 | 0 | 10 | 0 | 10 | E 1 / M 2 / H 4 / X 3 / A 0 |
| Data Preparation | NVIDIA service: RAPIDS; lifecycle: Data preparation; Which NVIDIA stack accelerates dataframe-style preprocessing on GPUs? | 10 | 0 | 10 | 0 | 10 | E 1 / M 2 / H 4 / X 3 / A 0 |
| Data Preparation | MinHash/LSH; genai_llms_professional | 6 | 0 | 6 | 6 | 0 | E 0 / M 1 / H 5 / X 0 / A 0 |
| Data Preparation | contamination checks; genai_llms_professional | 5 | 0 | 5 | 5 | 0 | E 0 / M 0 / H 3 / X 2 / A 0 |
| Data Preparation | PII redaction; genai_llms_professional | 5 | 0 | 5 | 5 | 0 | E 2 / M 1 / H 2 / X 0 / A 0 |
| Data Preparation | quality filtering; genai_llms_professional | 5 | 0 | 5 | 5 | 0 | E 0 / M 2 / H 1 / X 2 / A 0 |
| Data Preparation | tokenizer coverage; genai_llms_professional | 5 | 0 | 5 | 5 | 0 | E 0 / M 2 / H 2 / X 1 / A 0 |
| Data Preparation | (inferred) data curation and tokenization | 3 | 3 | 0 | 3 | 0 | E 0 / M 1 / H 1 / X 1 / A 0 |
| Data Preparation | (inferred) fine-tuning and alignment | 2 | 2 | 0 | 2 | 0 | E 1 / M 0 / H 0 / X 1 / A 0 |
| Data Preparation | (inferred) Data Preparation | 1 | 1 | 0 | 1 | 0 | E 0 / M 1 / H 0 / X 0 / A 0 |
| Data Preparation | (inferred) evaluation metrics and test sets | 1 | 1 | 0 | 1 | 0 | E 0 / M 0 / H 1 / X 0 / A 0 |
| Data Preparation | (inferred) LLM architecture and pretraining | 1 | 1 | 0 | 1 | 0 | E 1 / M 0 / H 0 / X 0 / A 0 |
| Data Preparation | (inferred) prompting and decoding controls | 1 | 1 | 0 | 1 | 0 | E 0 / M 0 / H 1 / X 0 / A 0 |
| Evaluation | NVIDIA service: NeMo Evaluator; lifecycle: Evaluation; Which NVIDIA microservice runs LLM evaluation pipelines and judge models? | 10 | 0 | 10 | 0 | 10 | E 1 / M 2 / H 4 / X 3 / A 0 |
| Evaluation | bootstrap confidence; genai_llms_professional | 6 | 0 | 6 | 6 | 0 | E 0 / M 2 / H 3 / X 1 / A 0 |
| Evaluation | perplexity; genai_llms_professional | 6 | 0 | 6 | 6 | 0 | E 0 / M 3 / H 1 / X 2 / A 0 |
| Evaluation | task metrics; genai_llms_professional | 6 | 0 | 6 | 6 | 0 | E 0 / M 1 / H 5 / X 0 / A 0 |
| Evaluation | data contamination; genai_llms_professional | 5 | 0 | 5 | 5 | 0 | E 2 / M 1 / H 2 / X 0 / A 0 |
| Evaluation | human evaluation; genai_llms_professional | 5 | 0 | 5 | 5 | 0 | E 0 / M 0 / H 3 / X 2 / A 0 |
| Evaluation | (inferred) evaluation metrics and test sets | 4 | 4 | 0 | 3 | 1 | E 0 / M 1 / H 1 / X 2 / A 0 |
| Evaluation | (inferred) prompting and decoding controls | 2 | 2 | 0 | 2 | 0 | E 0 / M 0 / H 2 / X 0 / A 0 |
| Evaluation | (inferred) data curation and tokenization | 1 | 1 | 0 | 1 | 0 | E 0 / M 1 / H 0 / X 0 / A 0 |
| Fine-Tuning | (inferred) fine-tuning and alignment | 10 | 10 | 0 | 9 | 1 | E 2 / M 5 / H 2 / X 1 / A 0 |
| Fine-Tuning | NVIDIA service: NCCL; lifecycle: Training and customization; Which library is central to multi-GPU collective communication? | 10 | 0 | 10 | 0 | 10 | E 1 / M 2 / H 4 / X 3 / A 0 |
| Fine-Tuning | NVIDIA service: NeMo Customizer; lifecycle: Training and customization; Which NVIDIA microservice provides API-driven PEFT customization? | 10 | 0 | 10 | 0 | 10 | E 1 / M 2 / H 4 / X 3 / A 0 |
| Fine-Tuning | NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment? | 10 | 0 | 10 | 0 | 10 | E 1 / M 2 / H 4 / X 3 / A 0 |
| Fine-Tuning | LoRA/QLoRA; genai_llms_professional | 5 | 0 | 5 | 5 | 0 | E 0 / M 2 / H 2 / X 1 / A 0 |
| Fine-Tuning | SFT; genai_llms_professional | 5 | 0 | 5 | 5 | 0 | E 0 / M 1 / H 4 / X 0 / A 0 |
| Fine-Tuning | catastrophic forgetting; genai_llms_professional | 4 | 0 | 4 | 4 | 0 | E 0 / M 0 / H 2 / X 2 / A 0 |
| Fine-Tuning | continued pretraining; genai_llms_professional | 4 | 0 | 4 | 4 | 0 | E 0 / M 2 / H 1 / X 1 / A 0 |
| Fine-Tuning | DPO; genai_llms_professional | 4 | 0 | 4 | 4 | 0 | E 1 / M 1 / H 2 / X 0 / A 0 |
| Fine-Tuning | (inferred) prompting and decoding controls | 2 | 2 | 0 | 2 | 0 | E 0 / M 0 / H 1 / X 1 / A 0 |
| Fine-Tuning | (inferred) parallelism and GPU training | 1 | 1 | 0 | 1 | 0 | E 0 / M 1 / H 0 / X 0 / A 0 |
| GPU Acceleration and Optimization | (inferred) parallelism and GPU training | 8 | 8 | 0 | 1 | 7 | E 1 / M 0 / H 4 / X 3 / A 0 |
| GPU Acceleration and Optimization | Nsight Systems; genai_llms_professional | 5 | 0 | 5 | 0 | 5 | E 0 / M 1 / H 4 / X 0 / A 0 |
| GPU Acceleration and Optimization | NCCL collectives; genai_llms_professional | 4 | 0 | 4 | 0 | 4 | E 0 / M 0 / H 2 / X 2 / A 0 |
| GPU Acceleration and Optimization | Nsight Compute; genai_llms_professional | 4 | 0 | 4 | 0 | 4 | E 1 / M 1 / H 2 / X 0 / A 0 |
| GPU Acceleration and Optimization | NVLink/NVSwitch; genai_llms_professional | 4 | 0 | 4 | 4 | 0 | E 0 / M 1 / H 2 / X 1 / A 0 |
| GPU Acceleration and Optimization | tensor parallelism; genai_llms_professional | 4 | 0 | 4 | 4 | 0 | E 0 / M 2 / H 1 / X 1 / A 0 |
| GPU Acceleration and Optimization | (inferred) GPU Acceleration and Optimization | 3 | 3 | 0 | 2 | 1 | E 1 / M 2 / H 0 / X 0 / A 0 |
| GPU Acceleration and Optimization | (inferred) quantization and runtime optimization | 2 | 2 | 0 | 1 | 1 | E 0 / M 1 / H 1 / X 0 / A 0 |
| GPU Acceleration and Optimization | (inferred) production reliability and monitoring | 1 | 1 | 0 | 1 | 0 | E 0 / M 0 / H 1 / X 0 / A 0 |
| LLM Architecture | NVIDIA service: Nemotron models; lifecycle: Model selection; When is Nemotron the model choice rather than the serving stack? | 10 | 0 | 10 | 0 | 10 | E 1 / M 2 / H 4 / X 3 / A 0 |
| LLM Architecture | causal masking; genai_llms_professional | 6 | 0 | 6 | 6 | 0 | E 0 / M 3 / H 1 / X 2 / A 0 |
| LLM Architecture | embedding models; genai_llms_professional | 6 | 0 | 6 | 6 | 0 | E 0 / M 1 / H 5 / X 0 / A 0 |
| LLM Architecture | MoE routing; genai_llms_professional | 6 | 0 | 6 | 6 | 0 | E 0 / M 2 / H 3 / X 1 / A 0 |
| LLM Architecture | self-attention; genai_llms_professional | 6 | 0 | 6 | 6 | 0 | E 0 / M 0 / H 3 / X 3 / A 0 |
| LLM Architecture | rerankers; genai_llms_professional | 5 | 0 | 5 | 5 | 0 | E 2 / M 1 / H 2 / X 0 / A 0 |
| LLM Architecture | (inferred) LLM architecture and pretraining | 3 | 3 | 0 | 3 | 0 | E 2 / M 0 / H 0 / X 1 / A 0 |
| LLM Architecture | (inferred) LLM Architecture | 2 | 2 | 0 | 2 | 0 | E 0 / M 1 / H 0 / X 1 / A 0 |
| LLM Architecture | (inferred) quantization and runtime optimization | 1 | 1 | 0 | 1 | 0 | E 0 / M 0 / H 1 / X 0 / A 0 |
| Model Deployment | NVIDIA service: Dynamo (Triton Dynamo); lifecycle: Serving and deployment; Which NVIDIA stack handles disaggregated multi-node LLM inference? | 10 | 0 | 10 | 0 | 10 | E 1 / M 2 / H 4 / X 3 / A 0 |
| Model Deployment | NVIDIA service: NGC; lifecycle: Serving and deployment; What NVIDIA service is the catalog/registry for containers and model assets? | 10 | 0 | 10 | 0 | 10 | E 1 / M 2 / H 4 / X 3 / A 0 |
| Model Deployment | NVIDIA service: NIM Operator; lifecycle: Serving and deployment; Which NVIDIA component owns NIM lifecycle on Kubernetes? | 10 | 0 | 10 | 0 | 10 | E 1 / M 2 / H 4 / X 3 / A 0 |
| Model Deployment | NVIDIA service: NIM; lifecycle: Serving and deployment; Which NVIDIA layer gives a production microservice API for optimized model inference? | 10 | 0 | 10 | 0 | 10 | E 1 / M 2 / H 4 / X 3 / A 0 |
| Model Deployment | NVIDIA service: Triton Inference Server; lifecycle: Serving and deployment; Which service composes preprocessing, inference, and postprocessing as an ensemble? | 10 | 0 | 10 | 0 | 10 | E 1 / M 2 / H 4 / X 3 / A 0 |
| Model Deployment | (inferred) serving and deployment | 8 | 8 | 0 | 1 | 7 | E 2 / M 2 / H 3 / X 1 / A 0 |
| Model Deployment | NIM; genai_llms_professional | 6 | 0 | 6 | 0 | 6 | E 0 / M 1 / H 5 / X 0 / A 0 |
| Model Deployment | blue-green deployment; genai_llms_professional | 5 | 0 | 5 | 5 | 0 | E 0 / M 2 / H 1 / X 2 / A 0 |
| Model Deployment | model registry; genai_llms_professional | 5 | 0 | 5 | 5 | 0 | E 0 / M 2 / H 2 / X 1 / A 0 |
| Model Deployment | NIM Operator; genai_llms_professional | 5 | 0 | 5 | 0 | 5 | E 0 / M 0 / H 3 / X 2 / A 0 |
| Model Deployment | Triton ensembles; genai_llms_professional | 5 | 0 | 5 | 0 | 5 | E 2 / M 1 / H 2 / X 0 / A 0 |
| Model Deployment | (inferred) data curation and tokenization | 1 | 1 | 0 | 1 | 0 | E 0 / M 0 / H 0 / X 1 / A 0 |
| Model Optimization | (inferred) quantization and runtime optimization | 12 | 12 | 0 | 5 | 7 | E 2 / M 4 / H 3 / X 3 / A 0 |
| Model Optimization | NVIDIA service: TensorRT-LLM; lifecycle: Inference optimization; What NVIDIA stack optimizes LLM generation with paged KV cache and continuous batching? | 10 | 0 | 10 | 0 | 10 | E 1 / M 2 / H 4 / X 3 / A 0 |
| Model Optimization | AWQ; genai_llms_professional | 4 | 0 | 4 | 4 | 0 | E 0 / M 1 / H 3 / X 0 / A 0 |
| Model Optimization | continuous batching; genai_llms_professional | 4 | 0 | 4 | 4 | 0 | E 0 / M 1 / H 2 / X 1 / A 0 |
| Model Optimization | paged KV cache; genai_llms_professional | 4 | 0 | 4 | 4 | 0 | E 0 / M 2 / H 1 / X 1 / A 0 |
| Model Optimization | CUDA graphs; genai_llms_professional | 3 | 0 | 3 | 0 | 3 | E 0 / M 0 / H 2 / X 1 / A 0 |
| Model Optimization | speculative decoding; genai_llms_professional | 3 | 0 | 3 | 3 | 0 | E 1 / M 1 / H 1 / X 0 / A 0 |
| Model Optimization | (inferred) evaluation metrics and test sets | 2 | 2 | 0 | 2 | 0 | E 2 / M 0 / H 0 / X 0 / A 0 |
| Model Optimization | (inferred) fine-tuning and alignment | 1 | 1 | 0 | 1 | 0 | E 0 / M 1 / H 0 / X 0 / A 0 |
| Model Optimization | (inferred) parallelism and GPU training | 1 | 1 | 0 | 0 | 1 | E 0 / M 1 / H 0 / X 0 / A 0 |
| Model Optimization | (inferred) serving and deployment | 1 | 1 | 0 | 0 | 1 | E 0 / M 0 / H 0 / X 1 / A 0 |
| Production Monitoring and Reliability | NVIDIA service: Nsight Compute; lifecycle: Monitoring and profiling; Which profiler diagnoses detailed CUDA kernel bottlenecks? | 10 | 0 | 10 | 0 | 10 | E 1 / M 2 / H 4 / X 3 / A 0 |
| Production Monitoring and Reliability | NVIDIA service: Nsight Systems; lifecycle: Monitoring and profiling; Which profiler shows CPU/GPU timeline gaps and CUDA launch overhead? | 10 | 0 | 10 | 0 | 10 | E 1 / M 2 / H 4 / X 3 / A 0 |
| Production Monitoring and Reliability | canary monitoring; genai_llms_professional | 6 | 0 | 6 | 6 | 0 | E 0 / M 2 / H 3 / X 1 / A 0 |
| Production Monitoring and Reliability | fallback policy; genai_llms_professional | 6 | 0 | 6 | 6 | 0 | E 0 / M 1 / H 5 / X 0 / A 0 |
| Production Monitoring and Reliability | p95/p99 latency; genai_llms_professional | 6 | 0 | 6 | 6 | 0 | E 0 / M 3 / H 1 / X 2 / A 0 |
| Production Monitoring and Reliability | (inferred) prompting and decoding controls | 5 | 5 | 0 | 5 | 0 | E 2 / M 2 / H 1 / X 0 / A 0 |
| Production Monitoring and Reliability | drift detection; genai_llms_professional | 5 | 0 | 5 | 5 | 0 | E 2 / M 1 / H 2 / X 0 / A 0 |
| Production Monitoring and Reliability | load shedding; genai_llms_professional | 5 | 0 | 5 | 5 | 0 | E 0 / M 0 / H 3 / X 2 / A 0 |
| Production Monitoring and Reliability | (inferred) Production Monitoring and Reliability | 1 | 1 | 0 | 1 | 0 | E 0 / M 1 / H 0 / X 0 / A 0 |
| Production Monitoring and Reliability | (inferred) serving and deployment | 1 | 1 | 0 | 1 | 0 | E 0 / M 0 / H 1 / X 0 / A 0 |
| Prompt Engineering | (inferred) prompting and decoding controls | 13 | 13 | 0 | 11 | 2 | E 4 / M 3 / H 3 / X 3 / A 0 |
| Prompt Engineering | few-shot examples; genai_llms_professional | 5 | 0 | 5 | 5 | 0 | E 0 / M 1 / H 4 / X 0 / A 0 |
| Prompt Engineering | instruction hierarchy; genai_llms_professional | 5 | 0 | 5 | 5 | 0 | E 0 / M 2 / H 2 / X 1 / A 0 |
| Prompt Engineering | context packing; genai_llms_professional | 4 | 0 | 4 | 4 | 0 | E 0 / M 0 / H 2 / X 2 / A 0 |
| Prompt Engineering | prompt regression; genai_llms_professional | 4 | 0 | 4 | 4 | 0 | E 0 / M 2 / H 1 / X 1 / A 0 |
| Prompt Engineering | structured output; genai_llms_professional | 4 | 0 | 4 | 4 | 0 | E 1 / M 1 / H 2 / X 0 / A 0 |
| Safety, Ethics, and Compliance | NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant? | 10 | 0 | 10 | 0 | 10 | E 1 / M 2 / H 4 / X 3 / A 0 |
| Safety, Ethics, and Compliance | auditability; genai_llms_professional | 6 | 0 | 6 | 6 | 0 | E 0 / M 1 / H 5 / X 0 / A 0 |
| Safety, Ethics, and Compliance | bias evaluation; genai_llms_professional | 6 | 0 | 6 | 6 | 0 | E 0 / M 3 / H 1 / X 2 / A 0 |
| Safety, Ethics, and Compliance | guardrails; genai_llms_professional | 6 | 0 | 6 | 6 | 0 | E 0 / M 2 / H 3 / X 1 / A 0 |
| Safety, Ethics, and Compliance | license constraints; genai_llms_professional | 6 | 0 | 6 | 6 | 0 | E 2 / M 1 / H 3 / X 0 / A 0 |
| Safety, Ethics, and Compliance | privacy controls; genai_llms_professional | 6 | 0 | 6 | 6 | 0 | E 0 / M 0 / H 3 / X 3 / A 0 |
| Safety, Ethics, and Compliance | (inferred) prompting and decoding controls | 3 | 3 | 0 | 2 | 1 | E 0 / M 2 / H 1 / X 0 / A 0 |
| Safety, Ethics, and Compliance | (inferred) quantization and runtime optimization | 1 | 1 | 0 | 1 | 0 | E 0 / M 0 / H 1 / X 0 / A 0 |
| Safety, Ethics, and Compliance | (inferred) safety, privacy, and guardrails | 1 | 1 | 0 | 0 | 1 | E 0 / M 0 / H 1 / X 0 / A 0 |


# Reference Links and Link Knowledge for the NVIDIA Certification Study Materials

This file consolidates the main external references implied by the uploaded PDFs and the uploaded markdown files. The PDFs appear to contain linked titles but not extractable URL annotations, so many entries are listed as titles. URLs are included where they were available from the uploaded markdowns or verified official pages.

## Official NVIDIA certification pages

| Reference | URL | Use |
|---|---|---|
| NVIDIA NCP-GENL certification page | https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-professional/ | Official Gen AI LLMs logistics, prerequisites, learning path, blueprint |
| NVIDIA NCP-AAI certification page | https://www.nvidia.com/en-us/learn/certification/agentic-ai-professional/ | Official Agentic AI logistics, prerequisites, learning path, blueprint |
| NVIDIA certification programs | https://www.nvidia.com/en-us/learn/certification/ | List of NVIDIA certifications |

## Core official documentation links

| Reference | URL | Main knowledge to extract |
|---|---|---|
| TensorRT-LLM documentation | https://nvidia.github.io/TensorRT-LLM/ | LLM inference optimization, paged attention, in-flight batching, KV cache, quantization, parallelism |
| TensorRT-LLM GPT attention, in-flight batching, and KV cache | https://nvidia.github.io/TensorRT-LLM/advanced/gpt-attention.html | Request scheduling, IFB, attention, KV cache behavior |
| TensorRT-LLM KV cache system | https://nvidia.github.io/TensorRT-LLM/features/kvcache.html | KV cache memory bottlenecks and long context support |
| NVIDIA NIM for LLMs | https://docs.nvidia.com/nim/large-language-models/latest/index.html | Packaged model inference microservices and OpenAI compatible API patterns |
| Triton Inference Server user guide | https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/ | Serving, model repository, dynamic batching, metrics, ensembles |
| Triton model configuration | https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/user_guide/model_configuration.html | Configuring models, batch sizes, instances, deployment behavior |
| NeMo documentation | https://docs.nvidia.com/nemo/index.html | Agent lifecycle, NeMo services, Agent Toolkit, Retriever, Guardrails, Evaluator |
| NeMo Framework user guide | https://docs.nvidia.com/nemo-framework/user-guide/latest/ | Training, fine tuning, distributed recipes, model customization |
| NeMo Guardrails documentation | https://docs.nvidia.com/nemo/guardrails/latest/ | Programmable safety, dialog control, RAG grounding, tool governance |
| NeMo Guardrails developer page | https://developer.nvidia.com/nemo-guardrails | Guardrails overview, use cases, performance, integration |
| NCCL documentation | https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/ | Multi GPU collectives, communication, distributed training and inference |
| Nsight Systems documentation | https://docs.nvidia.com/nsight-systems/ | Timeline level profiling across CPU, GPU, CUDA calls, memory copies |
| Nsight Compute documentation | https://docs.nvidia.com/nsight-compute/ | Kernel level profiling and GPU efficiency diagnosis |
| RAPIDS documentation | https://docs.rapids.ai/ | GPU accelerated dataframes, preprocessing, classical ML acceleration |

## High value link titles extracted from the Gen AI LLMs PDF

| PDF domain | Link or reading title | Main knowledge to extract |
|---|---|---|
| LLM Architecture | Attention Is All You Need | Transformer self attention, encoder decoder architecture |
| LLM Architecture | Mastering LLM Techniques: Training | Training lifecycle and NVIDIA framing |
| Prompt Engineering | Mastering LLM Techniques: Inference Optimization | Inference bottlenecks and optimization concepts |
| Prompt Engineering | An Easy Introduction to LLM Reasoning, AI Agents, and Test Time Scaling | Reasoning, CoT, agents, inference time compute |
| Prompt Engineering | Train a Reasoning Capable LLM in One Weekend With NVIDIA NeMo | NeMo based training or adaptation workflow |
| Data Preparation | Tokenizers, NVIDIA NeMo Framework User Guide | BPE, WordPiece, tokenizer strategy |
| Data Preparation | NeMo Curator | Data cleaning, deduplication, filtering, curation |
| Data Preparation | RAPIDS cuDF and RAPIDS cuML technical blogs | GPU accelerated data exploration, preprocessing, classical ML |
| Model Optimization | TensorRT performance best practices | Inference optimization fundamentals |
| Model Optimization | Quantization and calibration, TensorRT documentation | Precision reduction and calibration strategy |
| Model Optimization | LoRA and GPTQ papers | PEFT and post training quantization |
| Fine Tuning | Selecting Large Language Model Customization Techniques | Prompting vs RAG vs fine tuning vs PEFT |
| Fine Tuning | Parameter Efficient Fine Tuning for LLMs With NVIDIA NeMo | LoRA, adapters, PEFT in NeMo |
| Fine Tuning | Cleanlab Trustworthy Language Model with NeMo Guardrails | Hallucination mitigation and trust scoring |
| Evaluation | Ragas and Evaluating Medical RAG with NVIDIA AI Endpoints and Ragas | RAG metrics, faithfulness, answer relevance, context relevance |
| Evaluation | NeMo Evaluator | Model and agent benchmarking, judge workflows, regression checks |
| Evaluation | Performance Analysis Tools, NVIDIA Developer | Profiling and production analysis |
| GPU Optimization | Distributed Data Parallel in PyTorch | DDP and distributed training basics |
| GPU Optimization | CUDA C++ Best Practices Guide 13.0 | CUDA performance basics |
| GPU Optimization | Parallelisms, NVIDIA NeMo User Guide | Data, tensor, pipeline, sequence, expert parallelism |
| GPU Optimization | Gradient accumulation references | Memory constrained training strategy |
| Model Deployment | NIM microservices and NIM for LLMs | Enterprise inference microservices |
| Model Deployment | Triton configuration, schedulers, batchers | Serving, dynamic batching, scheduler behavior |
| Monitoring | Masked language modeling and causal language modeling guides | Monitoring and benchmarking references are mixed with foundational training docs in the PDF |
| Safety | NeMo Guardrails, RAG blueprint, observability, guardrail evaluation | Safety, groundedness, monitoring, compliance |

## High value link titles extracted from the Agentic AI PDF

| PDF domain | Link or reading title | Main knowledge to extract |
|---|---|---|
| Agent Architecture | Agentic AI in the Factory | Industrial agent patterns and autonomy |
| Agent Architecture | Building Autonomous AI with NVIDIA Agentic NeMo | NVIDIA agentic stack and orchestration framing |
| Agent Architecture | Multi agent systems references | Agent roles, coordination, communication |
| Agent Development | NVIDIA Agent Intelligence Toolkit overview and tutorials | Tool use, workflows, APIs, agent implementation |
| Agent Development | Azure retry, circuit breaker, transient fault handling | Production reliability and failure recovery |
| Evaluation and Tuning | NeMo Agent Toolkit, GitHub | Evaluation based development and workflow profiling |
| Evaluation and Tuning | AI Agents for Beginners, Production Patterns, Microsoft | Production agent design patterns |
| Deployment and Scaling | TensorRT LLM, Kubernetes, Nsight Systems, GPU telemetry | Production scaling, profiling, and deployment |
| Cognition, Planning, and Memory | ReAct, CoT, planning surveys, IBM agent memory | Planning, memory, state retention, reasoning loops |
| Knowledge Integration | RAG and fine tuning references | Retrieval pipelines, vector DBs, data quality, structured and unstructured knowledge |
| NVIDIA Platform | NIM, NeMo Guardrails, TensorRT LLM, Triton, NeMo Agent Toolkit, AIQ Toolkit | NVIDIA tool boundaries and deployment choices |
| Run and Maintain | Log, Trace, Monitor, Time Weighted Retriever, LangChain tracing | Monitoring and troubleshooting agent trajectories |
| Safety | NeMo Guardrails, EU AI Act, medical AI software, responsible AI | Guardrails, audit trails, regulation, human risk controls |
| Human Oversight | Human in the loop references, Agent Intelligence Toolkit, Data Flywheel glossary | Feedback loops, user in the loop UI, traceability, oversight |

## Recommended reference markdowns from the upload

| File | Best use |
|---|---|
| `ncp-genl-refined-study-guide(2).md` | Main reference for NCP-GENL study. Use it for the NVIDIA tool map, bottleneck reasoning, decision matrices, and exam traps. |
| `ncp-aai-agentic-ai-deep-research-report(2).md` | Main reference for NCP-AAI study. Use it for domain by domain agent architecture, development, evaluation, deployment, safety, and human oversight. |
| `Knowledge from Mock Tests.md` | Use it to calibrate practice questions. It shows which concepts appear repeatedly in mock exams and which tools are core, supporting, secondary, optional, or reference only. |

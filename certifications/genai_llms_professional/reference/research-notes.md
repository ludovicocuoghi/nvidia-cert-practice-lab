# NVIDIA GenAI LLM Certification Research Notes

Updated: 2026-04-29

## Scope

These notes summarize public information found online for improving the practice-test simulator. The app must not contain leaked, copied, or real exam items. All practice questions should be original and derived from public blueprint topics, NVIDIA documentation, and legitimate study guidance.

## Official NVIDIA Exam Facts

- Certification: NVIDIA-Certified Professional Generative AI LLMs.
- Code: NCP-GENL.
- Delivery: online, remotely proctored.
- Platform access: NVIDIA says candidates need a Certiverse account.
- Duration: 120 minutes.
- Price: 200 USD.
- Number of questions: 60-70.
- Level: Professional.
- Validity: 2 years.
- Expected background: 2-3 years practical AI/ML work with LLMs; transformer architectures, prompting, distributed parallelism, PEFT, sampling, hallucination mitigation, RAG, evaluation metrics, profiling, Python, plus C++/containers/orchestration as useful extras.

Source: https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-professional/

## Blueprint Weights

- LLM Architecture: 6%
- Prompt Engineering: 13%
- Data Preparation: 9%
- Model Optimization: 17%
- Fine-Tuning: 13%
- Evaluation: 7%
- GPU Acceleration and Optimization: 14%
- Model Deployment: 9%
- Production Monitoring and Reliability: 7%
- Safety, Ethics, and Compliance: 5%

Source: https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-professional/

## Likely Question Style

Public and community sources point toward scenario-based multiple-choice questions rather than trivia-only recall. The simulator should emphasize:

- choosing the best optimization/deployment strategy from symptoms;
- identifying why a RAG or fine-tuning pipeline is failing;
- comparing NVIDIA platform components such as NeMo, NIM, Triton, TensorRT-LLM, Nsight, and guardrails;
- practical tradeoffs: latency vs throughput, memory vs quality, SFT vs PEFT, retrieval vs fine-tuning, monitoring vs one-time evaluation;
- interpreting production incidents such as drift, hallucinations, policy refusals, GPU underutilization, and latency spikes.

Sources:
- https://www.reddit.com/r/mlops/comments/1pkmhd2/nvidiacertified_professional_generative_ai_llms/
- https://www.reddit.com/r/mlops/comments/1pvno1a/complete_ncpgenl_study_guide_nvidia_certified/
- https://preporato.com/certifications/nvidia/generative-ai-llm-professional/articles/nvidia-ncp-genl-certification-complete-guide-2025

## Exam UI / Delivery Clues

NVIDIA names Certiverse as the account platform for exam access, but public NVIDIA pages do not expose exact screenshots of the NCP-GENL exam driver. Public Certiverse candidate docs emphasize rules and proctoring constraints rather than exact test-driver screenshots.

Simulator UI should therefore approximate a remote exam driver using public clues:

- candidate agreement / rules page before exam start;
- top status bar with time remaining;
- numbered question navigation;
- answered/unanswered state;
- flag for review;
- end-exam / submit control;
- no references, notes, extra tabs, second display, headphones, or devices during serious practice;
- automatic end when timer reaches zero.

Sources:
- https://help.certiverse.com/portal/en/kb/articles/certiverse-testing-rules
- https://help.certiverse.com/portal/en/kb/articles/certiverse-prohibited-items
- https://help.certiverse.com/portal/en/kb/articles/hardware-requirements
- https://help.certiverse.com/portal/en/kb/articles/item-writing-guide

## NVIDIA Technical Topics To Generate More Questions From

### NeMo SFT / PEFT

- SFT updates all or most model parameters and is higher compute.
- PEFT trains smaller inserted/adapted parameter sets.
- LoRA freezes base weights and trains low-rank decomposition matrices, reducing trainable parameters and often avoiding extra inference-time architectural latency once merged.

Sources:
- https://docs.nvidia.com/nemo-framework/user-guide/24.09/sft_peft/index.html
- https://docs.nvidia.com/nemo-framework/user-guide/24.09/sft_peft/supported_methods.html

### Triton Inference Server

- Triton serves models through HTTP/gRPC and supports multiple frameworks/backends.
- Model repository and per-model config are central concepts.
- Dynamic batching combines individual requests into batches to improve throughput and GPU utilization.
- Instance groups can run multiple model instances per GPU.
- Queue policy, preferred batch size, and max queue delay are important tuning ideas.

Sources:
- https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/
- https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/tutorials/Conceptual_Guide/Part_2-improving_resource_utilization/README.html
- https://docs.nvidia.com/deeplearning/triton-inference-server/archives/triton-inference-server-2610/user-guide/docs/introduction/index.html

### NeMo Guardrails

- Guardrails sit between application code and LLM behavior.
- Use cases include safe/topic-bounded conversations, secure tool connection, controllable dialog flows, and policy enforcement.
- Guardrails complement, not replace, evaluation, least-privilege tool design, logging, and access control.

Source: https://docs.nvidia.com/nemo/guardrails/0.19.0/index.html

## Simulator Improvements Made From Research

- UI shifted away from a marketing-style landing page and toward an exam-driver shell.
- Added candidate agreement/rules copy.
- Added top exam status bar with time, delivery mode, and item progress.
- Kept numbered navigation, orange flagging, and end-exam flow.
- Question banks remain editable under `certifications/<cert_slug>/mocks/original/` and `certifications/<cert_slug>/generated/`.

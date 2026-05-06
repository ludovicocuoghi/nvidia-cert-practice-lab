# Structured Extraction from the Uploaded NVIDIA Certification PDFs

Source PDFs:

1. `nvt-certification-study-guide-gen-ai-llm-professional-certification-r1.pdf`
2. `nvt-study-guide-new-agentic-ai-cert-exam-4230000.pdf`

Note: the uploaded PDFs are image based. The following extraction is structured from the rendered PDF pages, OCR text, and visible page content.

## 1. NVIDIA Certified Professional: Gen AI LLMs

Source URL printed in PDF: `https://nvdam.widen.net/s/tcrdnfvgqv/nvt-certification-study-guide-gen-ai-llm-professional-certification`

### 1.1 Table of contents and weights

| Domain | Exam weight |
|---|---:|
| LLM Architecture | 6% |
| Prompt Engineering | 13% |
| Data Preparation | 9% |
| Model Optimization | 17% |
| Fine Tuning | 13% |
| Evaluation | 7% |
| GPU Acceleration and Optimization | 14% |
| Model Deployment | 9% |
| Production Monitoring and Reliability | 7% |
| Safety, Ethics, and Compliance | 5% |

### 1.2 Job description

The certification targets generative AI practitioners with hands on experience in large language models and a solid understanding of model development, optimization, and deployment at scale. The role involves designing, training, and fine tuning LLMs, applying distributed training techniques, using optimization strategies, collaborating across research and production teams, and ensuring models are robust, efficient, and scalable.

### 1.3 Key responsibilities

#### Model development and training

| Responsibility |
|---|
| Pretrain and fine tune foundation models for research and production use cases. |
| Apply parameter efficient fine tuning and low rank adaptation techniques such as LoRA, as well as optimization techniques such as knowledge distillation, pruning, quantization, and artifact simplification. |
| Architect and implement distributed training strategies such as data parallelism, model parallelism, tensor parallelism, and expert parallelism. |

#### Evaluation and optimization

| Responsibility |
|---|
| Develop and apply rigorous evaluation methods combining quantitative metrics such as BLEU, ROUGE, perplexity, and LLM as judge with qualitative assessments such as human in the loop reviews and error analysis. |
| Profile and optimize model and CUDA kernel performance, diagnose GPU bottlenecks, and improve efficiency for inference and training. |
| Benchmark and troubleshoot large scale deployments across multi GPU, cloud, and on premises systems. |

#### Deployment and scaling

| Responsibility |
|---|
| Deploy models in production using containerization such as Docker and orchestration such as Kubernetes. |
| Optimize inference for low latency, high throughput, and edge compatibility. |
| Extend and maintain Python based machine learning workflows, with targeted low level optimizations in C++ when required. |

#### Innovation and research

| Responsibility |
|---|
| Design experiments to validate fine tuning, evaluation, and optimization methods. |
| Address CUDA memory allocation, kernel utilization, and distributed training scalability. |
| Stay aware of advances in generative AI, transformer architectures, and NVIDIA technologies. |

### 1.4 Recommended qualifications and experience

| Qualification |
|---|
| 2 to 3 years of applied experience in AI and ML, with a focus on LLMs. |
| Strong understanding of transformer based architectures such as self attention, encoder decoder, and positional encoding. |
| Familiarity with RAG, hallucination mitigation, and advanced sampling techniques. |
| Experience with distributed parallelism and parameter efficient fine tuning workflows. |
| Proficiency in model evaluation metrics, performance profiling, and optimization. |
| Strong Python coding skills, with the ability to implement performance critical components in C++ as a plus. |
| Experience with Docker and Kubernetes for scalable deployment. |
| Familiarity with NVIDIA ecosystem components such as NGC catalog, Base Command Platform, DGX systems, and AI Enterprise suite is advantageous. |

## 1.5 Gen AI LLMs domain extraction

### Domain 1: LLM Architecture, 6%

Scope: understanding and applying foundational LLM structures and mechanisms.

| Objective | Extracted topic |
|---:|---|
| 1.1 | Analyze encoder decoder structures and their applications. |
| 1.2 | Describe transformer architectures including self attention mechanisms. |
| 1.3 | Develop code to extract embeddings from encoder and decoder models. |
| 1.4 | Implement advanced sampling techniques for text generation. |
| 1.5 | Understand output sampling techniques used in decoder based language models. |
| 1.6 | Understand the concept of embeddings. |

Recommended NVIDIA courses:

| Course |
|---|
| Rapid Application Development With LLMs |
| Building Transformer Based NLP Applications |

Suggested readings:

| Reading title |
|---|
| Mastering LLM Techniques: Training, NVIDIA Blog |
| Attention Is All You Need, arXiv |

### Domain 2: Prompt Engineering, 13%

Scope: adapting LLMs to new domains, tasks, or data distributions through prompt engineering, chain of thought, domain adaptation, zero shot, one shot, few shot learning, and output control.

| Objective | Extracted topic |
|---:|---|
| 2.1 | Engineer effective prompts and templates, including chain of thought and prompt learning for small datasets or specialized domains. |
| 2.2 | Employ zero shot, one shot, and few shot techniques to expand model adaptability. |
| 2.3 | Train decoder based LLMs with causal language modeling as needed. |
| 2.4 | Design specialized LLM wrapping modules with built in validation and constrained decoding for improved consistency, reduced hallucinations, and better user experience. |

Recommended NVIDIA courses:

| Course |
|---|
| Building LLM Applications With Prompt Engineering |
| Building RAG Agents With LLMs |

Suggested readings:

| Reading title |
|---|
| Mastering LLM Techniques: Inference Optimization, NVIDIA Technical Blog |
| An Easy Introduction to LLM Reasoning, AI Agents, and Test Time Scaling, NVIDIA Technical Blog |
| Train a Reasoning Capable LLM in One Weekend With NVIDIA NeMo, NVIDIA Technical Blog |
| Multi Turn Conversational Chat Bot, NVIDIA Generative AI Examples 0.5.0 Documentation |

### Domain 3: Data Preparation, 9%

Scope: preparing data for pretraining, fine tuning, or inference by cleaning, curating, analyzing, and organizing datasets, tokenization, and vocabulary management.

| Objective | Extracted topic |
|---:|---|
| 3.1 | Clean and curate data, handle missing values, normalize, scale, and analyze class imbalance and feature distributions. |
| 3.2 | Organize datasets, ensure correct formats, and prepare data for modeling. |
| 3.3 | Select and train tokenizers and optimize tokenization strategies and vocabulary size, including BPE and WordPiece, to fit tasks and resources. |

Recommended NVIDIA courses:

| Course |
|---|
| Adding New Knowledge to LLMs |
| Building Transformer Based NLP Applications |

Suggested readings:

| Reading title |
|---|
| NVIDIA GenerativeAIExamples, GitHub |
| NVIDIA AI Workbench Example Projects |
| Tokenizers, NVIDIA NeMo Framework User Guide |
| NVIDIA NeMo, GitHub |
| Train Models Using a Distributed Training Workload |
| Speed Up Data Exploration With NVIDIA RAPIDS cuDF, NVIDIA Technical Blog |
| Accelerating Time Series Forecasting With RAPIDS cuML, NVIDIA Technical Blog |
| Model Fine Tuning, NVIDIA NeMo Framework User Guide 24.07 |
| NeMo Curator, NVIDIA Developer |
| Faster Causal Inference on Large Datasets With NVIDIA RAPIDS, NVIDIA Technical Blog |
| Fine Tuning, NVIDIA NeMo Framework User Guide |

### Domain 4: Model Optimization, 17%

Scope: using optimization strategies for large language models such as pruning, quantization, and knowledge distillation to reduce memory, accelerate inference, make models compatible with GPU acceleration, and deploy efficiently.

| Objective | Extracted topic |
|---:|---|
| 4.1 | Apply pruning, sparsity, and weight or activation quantization to reduce memory footprint and optimize model inference for hardware acceleration. |
| 4.2 | Choose and implement quantization strategies such as post training quantization and quantization aware training tailored for hardware and tasks such as NVIDIA A100 and H100 Tensor Core GPUs, FP16, INT8, and measure accuracy tradeoffs. |
| 4.3 | Implement knowledge distillation to create smaller, efficient models based on larger pretrained ones. |
| 4.4 | Conduct systematic hyperparameter tuning and distributed parameter search, including learning rate schedules and batch size adjustments. |
| 4.5 | Use advanced sampling such as beam search, temperature scaling, and systematic ablation studies to evaluate model optimization impact. |
| 4.6 | Select and apply optimization methods such as TensorRT, sliding window or streaming attention, and key value caching based on architecture, task, and available resources. |
| 4.7 | Train encoder based foundation LLMs with masked language modeling or next sentence prediction, and understand quantization, distillation, and model pruning concepts. |

Recommended NVIDIA courses:

| Course |
|---|
| Building Transformer Based NLP Applications |
| Adding New Knowledge to LLMs |
| Deploying RAG Pipelines for Production at Scale |
| Model Parallelism: Building and Deploying Large Neural Networks |

Suggested readings:

| Reading title |
|---|
| Best Practices for TensorRT Performance, NVIDIA Documentation |
| Quantization, NVIDIA NeMo User Guide |
| DistilBERT, a Distilled Version of BERT, Smaller, Faster, Cheaper and Lighter, arXiv |
| What Is Knowledge Distillation, IBM |
| Sparsity in INT8: Training Workflow and Best Practices for NVIDIA TensorRT Acceleration, NVIDIA Technical Blog |
| Quantization and Calibration, NVIDIA TensorRT Documentation |
| Post Training Quantization vs Quantization Aware Training, FiDeltable |
| Quantization Aware Training QAT vs Post Training Quantization PTQ, Medium |
| The Illustrated Transformer, Jay Alammar |
| Understanding Data Types in AI and HPC: INT8, FP8, FP16, BF16, FP32, TF32, FP64, and Hardware Accelerators, It’s About AI |
| Quantization: What You Should Understand If You Want to Run LLMs, Pavan Mantha, LinkedIn |
| Capabilities, NVIDIA TensorRT Documentation |
| LoRA: Low Rank Adaptation of Large Language Models, OpenReview |
| GPTQ: Accurate Post Training Quantization for Generative Pretrained Transformers, arXiv |

### Domain 5: Fine Tuning, 13%

Scope: customizing pretrained LLMs for downstream tasks or domains using parameter efficient methods, human feedback, contrastive learning, and robust evaluation.

| Objective | Extracted topic |
|---:|---|
| 5.1 | Align models with intent via supervised fine tuning or reinforcement learning from human feedback, including direct preference optimization or group relative policy optimization. |
| 5.2 | Apply contrastive loss for embeddings and use parameter efficient techniques such as LoRA, adapter, and P tuning. |
| 5.3 | Implement early stopping to prevent overfitting and select performance metrics for all phases. |
| 5.4 | Mitigate hallucinations, assess fine tuning impact, and perform parameter efficient updates for LLMs. |

Recommended NVIDIA course:

| Course |
|---|
| Adding New Knowledge to LLMs |

Suggested readings:

| Reading title |
|---|
| Deploy Diverse AI Apps With Multi LoRA Support on NVIDIA RTX AI PCs and Workstations, NVIDIA Blog |
| Selecting Large Language Model Customization Techniques, NVIDIA Technical Blog |
| LoRA: Low Rank Adaptation of Large Language Models, arXiv |
| Parameter Efficient Fine Tuning for LLMs With NVIDIA NeMo, NVIDIA Technical Blog |
| Prevent LLM Hallucinations With the Cleanlab Trustworthy Language Model in NVIDIA NeMo Guardrails, NVIDIA Technical Blog |
| Chapter 7: Regularization for Deep Learning, Deep Learning, Ian Goodfellow, Yoshua Bengio, Aaron Courville |
| LLM Evaluation Metrics: BLEU, ROUGE, and METEOR Explained, Medium |

### Domain 6: Evaluation, 7%

Scope: assessing LLMs via quantitative and qualitative metrics, framework design, benchmarking, error analysis, and scalable evaluation.

| Objective | Extracted topic |
|---:|---|
| 6.1 | Analyze benchmark results, conduct human in the loop and LLM as judge evaluations, and assess model quality using metrics such as BLEU, ROUGE, and perplexity. |
| 6.2 | Diagnose LLM failure modes and perform systematic error analysis to identify common behavior and output patterns. |
| 6.3 | Benchmark and compare LLM deployments across platforms such as on premises DGX, cloud GPU, and standardized evaluation metrics. |
| 6.4 | Design and implement comprehensive evaluation frameworks integrating the above practices for robust and scalable model assessment. |

Recommended NVIDIA course:

| Course |
|---|
| Deploying RAG Pipelines in Production at Scale |

Suggested readings:

| Reading title |
|---|
| NVIDIA Metrics, Ragas |
| Retrieval Augmented Generation RAG Pipeline, NVIDIA Docs |
| Evaluating Medical RAG With NVIDIA AI Endpoints and Ragas, NVIDIA Technical Blog |
| Integrations, Ragas |
| NVIDIA AI Blueprints and RAG, GitHub |
| NeMo Evaluator, NVIDIA Developer |
| Introduction, NVIDIA Autonomous Vehicles Safety Report |
| Performance Analysis Tools, NVIDIA Developer |
| Deployment Best Practices, NVIDIA RTX vWS Sizing and GPU Selection Guide for Virtualized Workloads |
| Troubleshoot, NVIDIA NIM for LLMs |
| How the DGX H100 Accelerates AI Workloads, CUDO Compute |
| Masked Language Model Scoring, arXiv |
| Perplexity of Fixed Length Models, Hugging Face |
| The Importance of Starting With Error Analysis in LLM Applications, Shekhar Gulati |

### Domain 7: GPU Acceleration and Optimization, 14%

Scope: scaling and optimizing LLM training and inference on GPU hardware, including multi GPU and distributed setups, parallelism, troubleshooting, memory and batch optimization, and performance profiling.

| Objective | Extracted topic |
|---:|---|
| 7.1 | Configure multi GPU and distributed training setups such as DDP, FSDP, model, pipeline, tensor, data, sequence, and expert parallelism. |
| 7.2 | Apply Tensor Core and mixed precision optimizations and batch or memory management for efficient throughput. |
| 7.3 | Distribute and optimize self attention head general matrix multiplication operations and implement gradient accumulation for large models or limited GPU memory. |
| 7.4 | Identify and address bottlenecks using CUDA profiling and troubleshoot memory and kernel efficiency issues. |

Recommended NVIDIA courses:

| Course |
|---|
| Optimizing CUDA Machine Learning Codes With NVIDIA Nsight Profiling Tools |
| Model Parallelism: Building and Deploying Large Neural Networks |

Suggested readings:

| Reading title |
|---|
| Distributed Data Parallel in PyTorch |
| CUDA C++ Best Practices Guide 13.0 |
| Assess, Parallelize, Optimize, Deploy, NVIDIA Blog |
| Parallelisms, NVIDIA NeMo User Guide |
| Batching, NVIDIA NeMo Developer Docs |
| PyTorch Lightning: Gradient Accumulation, GitHub |
| Accelerate Usage Guides: Gradient Accumulation, Hugging Face |

### Domain 8: Model Deployment, 9%

Scope: deploying LLMs in production via containerized pipelines, scalable orchestration, efficient batch and model serving, and real time monitoring.

| Objective | Extracted topic |
|---:|---|
| 8.1 | Analyze computational tradeoffs for model types such as encoder, decoder, and encoder decoder, and optimize for memory and latency. |
| 8.2 | Build containerized inference pipelines, use dynamic batching, and deploy with NVIDIA Dynamo Triton. |
| 8.3 | Configure and manage serving such as Kubernetes and ensemble workflows, implement live monitoring, and run models in Docker. |

Recommended NVIDIA courses:

| Course |
|---|
| Deploying RAG Pipelines in Production at Scale |
| Building RAG Agents With LLMs |

Suggested readings:

| Reading title |
|---|
| NVIDIA NIM Microservices for Accelerated AI Inference |
| Overview of NVIDIA NIM for Large Language Models |
| Power Your AI Projects With New NVIDIA NIMs for Mistral and Mixtral Models, NVIDIA Blog |
| Concurrent Model Execution, Dynamo Triton, previously NVIDIA Triton Inference Server User Guide |
| Model Configuration, Dynamo Triton, previously Triton Inference Server User Guide |
| Schedulers, Dynamo Triton, previously Triton Inference Server User Guide |
| Batchers, Dynamo Triton, previously Triton Inference Server User Guide |

### Domain 9: Production Monitoring and Reliability, 7%

Scope: establishing monitoring dashboards and reliability metrics, tracking logs and anomalies for root cause analysis, evaluating benchmarking agents against prior versions, and implementing automated tuning, retraining, and versioning to ensure uptime, transparency, and trust.

| Objective | Extracted topic |
|---:|---|
| 9.1 | Define monitoring dashboards and reliability metrics. |
| 9.2 | Track logs, errors, and anomalies for root cause diagnosis. |
| 9.3 | Continuously benchmark deployed agents against prior versions. |
| 9.4 | Implement automated tuning, retraining, and versioning in production. |
| 9.5 | Ensure continuous uptime, transparency, and trust in live deployments. |

Recommended NVIDIA course:

| Course |
|---|
| Deploying RAG Pipelines in Production at Scale |

Suggested readings:

| Reading title |
|---|
| Attention Is All You Need, arXiv |
| BERT: Pretraining of Deep Bidirectional Transformers for Language Understanding, arXiv |
| Improving Language Understanding by Generative Pretraining, Radford, Narasimhan, Salimans, Sutskever, OpenAI |
| Masked Language Modeling Guide, Hugging Face |
| Causal Language Modeling Guide, Hugging Face |

### Domain 10: Safety, Ethics, and Compliance, 5%

Scope: responsible AI practices throughout the LLM lifecycle, including bias and fairness audits, guardrails, monitoring for ethical compliance, and bias detection and mitigation.

| Objective | Extracted topic |
|---:|---|
| 10.1 | Apply responsible AI practices to model deployment. |
| 10.2 | Audit LLMs for bias and fairness. |
| 10.3 | Configure monitoring systems for production LLMs. |
| 10.4 | Implement bias detection and mitigation strategies. |
| 10.5 | Implement guardrails to restrict undesired LLM responses. |

Recommended NVIDIA courses:

| Course |
|---|
| Building RAG Agents With LLMs |
| Building LLM Applications With Prompt Engineering |
| Deploying RAG Pipelines in Production at Scale |

Suggested readings:

| Reading title |
|---|
| Build an Enterprise RAG Pipeline Blueprint, build.nvidia.com |
| RAG 101: Demystifying Retrieval Augmented Generation Pipelines, NVIDIA Technical Blog |
| Full Stack Observability for NVIDIA Blackwell and NIM Based AI, Dynatrace |
| Large Scale Production Deployment of RAG Pipelines, NVIDIA Deep Learning Institute |
| Observability Tool, NVIDIA Generative AI Examples 0.5.0, GitHub |
| NVIDIA AI Blueprints RAG, GitHub |
| Measuring the Effectiveness and Performance of AI Guardrails in Generative AI Applications, NVIDIA Technical Blog |

## 2. NVIDIA Certified Professional: Agentic AI Exam Study Guide

Source URL printed in PDF: `https://nvdam.widen.net/s/zvkhwfqllc/nvt-study-guide-new-agentic-ai-cert-exam-4230000`

### 2.1 Table of contents and weights

| Domain | Exam weight |
|---|---:|
| Agent Architecture and Design | 15% |
| Agent Development | 15% |
| Evaluation and Tuning | 13% |
| Deployment and Scaling | 5% |
| Cognition, Planning, and Memory | 10% |
| Knowledge Integration and Data Handling | 10% |
| NVIDIA Platform Implementation | 7% |
| Run, Monitor, and Maintain | 7% |
| Safety, Ethics, and Compliance | 5% |
| Human AI Interaction and Oversight | 5% |

Note: the official NVIDIA website currently lists Deployment and Scaling as 13% and Run, Monitor, and Maintain as 5%. The uploaded PDF page shows Deployment and Scaling at 5% and Run, Monitor, and Maintain at 7%. Treat the official certification page as the source of truth for scheduling and blueprint changes.

### 2.2 Job description

The Agentic AI professional is an intermediate practitioner adept at designing, evaluating, and deploying autonomous AI systems. Responsibilities include building secure and trustworthy agentic solutions that automate enterprise assistants, autonomous meeting companions, and productivity tools. Candidates must master agentic AI architecture foundations including reactive, deliberative, and hybrid systems and orchestrate multi agent coordination with robust error handling.

### 2.3 Key responsibilities

| Responsibility |
|---|
| End to end agent development exposure. |
| Model and framework selection and integration. |
| Agent structure and tool creation. |
| Orchestration of agent workflows. |
| Assessment, evaluation, and iterative improvement. |

### 2.4 Recommended qualifications and experience

| Qualification |
|---|
| 2 to 3 years in AI and machine learning roles. |
| Experience with production level agentic AI projects such as chatbots and workflow automation. |

## 2.5 Agentic AI domain extraction

### Domain 1: Agent Architecture and Design, 15%

Scope: foundational structuring and design of agentic AI systems, focusing on how agents interact, reason, and communicate within environments.

| Objective | Extracted topic |
|---:|---|
| 1.1 | Design user interfaces for intuitive human agent interaction. |
| 1.2 | Implement reasoning and action frameworks such as ReAct. |
| 1.3 | Configure agent to agent communication protocols for collaboration. |
| 1.4 | Manage short term and long term memory for context retention. |
| 1.5 | Orchestrate multi agent workflows and coordination. |
| 1.6 | Apply logic trees, prompt chains, and stateful orchestration for multi step reasoning. |
| 1.7 | Integrate knowledge graphs to enable relational reasoning. |
| 1.8 | Ensure adaptability and scalability of the agent architecture. |

Recommended NVIDIA course:

| Course |
|---|
| Building Agentic AI Applications with LLMs |

Suggested readings:

| Reading title |
|---|
| Agentic AI in the Factory |
| Building Autonomous AI with NVIDIA Agentic NeMo |
| Three Building Blocks for Creating AI Virtual Assistants for Customer Service with an NVIDIA NIM Agent Blueprint |
| Agentic AI: Towards Autonomous Artificial Intelligence Agents |
| Catch Me If You Can: A Multi Agent Framework for Financial Fraud Detection |
| What Are Multi Agent Systems? |

### Domain 2: Agent Development, 15%

Scope: practical building, integration, and enhancement of agents.

| Objective | Extracted topic |
|---:|---|
| 2.1 | Engineer prompts and dynamic prompt chains for reliable performance. |
| 2.2 | Integrate generative and multimodal models such as text, vision, and audio. |
| 2.3 | Build and connect custom tools, APIs, and functions for external system interaction. |
| 2.4 | Implement error handling such as retry logic and graceful failure recovery. |
| 2.5 | Develop dynamic conversation flows with real time streaming and feedback mechanisms. |
| 2.6 | Evaluate and refine agent decision making strategies. |

Recommended NVIDIA courses:

| Course |
|---|
| Building RAG Agents With LLMs |
| Building Agentic AI Applications with LLMs |

Suggested readings:

| Reading title |
|---|
| Optimization, NVIDIA Triton Inference Server |
| NVIDIA Agent Intelligence Toolkit Overview, NVIDIA Agent Intelligence Toolkit 1.1.0 |
| An Introduction to Large Language Models: Prompt Engineering and P Tuning, NVIDIA Technical Blog |
| Building Multimodal AI RAG With LlamaIndex, NVIDIA NIM, and Milvus |
| Design Considerations of Advanced Agentic AI for Real World Applications |
| Transient Fault Handling, Azure Architecture Center, Microsoft Learn |
| Circuit Breaker Pattern, Azure Architecture Center, Microsoft Learn |
| Retry Pattern, Azure Architecture Center, Microsoft Learn |

### Domain 3: Evaluation and Tuning, 13%

Scope: measuring, comparing, and optimizing agent performance.

| Objective | Extracted topic |
|---:|---|
| 3.1 | Implement evaluation pipelines and test benchmarks to measure performance. |
| 3.2 | Compare agent performance across tasks and datasets. |
| 3.3 | Collect and integrate structured user feedback for iterative improvements. |
| 3.4 | Tune model parameters such as accuracy and latency efficiency tradeoffs. |
| 3.5 | Analyze evaluation results to guide targeted optimization. |

Recommended NVIDIA courses:

| Course |
|---|
| Building Agentic AI Applications With LLMs |
| Evaluating RAG and Semantic Search Systems |

Suggested readings:

| Reading title |
|---|
| Powering the Next Generation of AI Agents |
| NVIDIA Agent Intelligence Toolkit Overview |
| NVIDIA Agent Intelligence Toolkit Tutorials |
| NVIDIA Agent Intelligence Toolkit FAQ |
| Launching the NVIDIA Agent Intelligence Toolkit API Server and User Interface |
| NVIDIA NeMo Agent Toolkit, GitHub |
| Agent AI: The Next Big Thing in Artificial Intelligence |
| Agent AI: The Top 5 Challenges and How to Overcome Them |
| AI Agents for Beginners, Production Patterns, Microsoft |
| Navigating the Challenges: 5 Common Pitfalls in Agentic AI Adoption |

### Domain 4: Deployment and Scaling, 5% in PDF

Scope: operationalizing and scaling agentic systems.

| Objective | Extracted topic |
|---:|---|
| 4.1 | Deploy and orchestrate multi agent systems at production scale. |
| 4.2 | Apply MLOps practices for continuous integration and continuous delivery workflows, monitoring, and governance. |
| 4.3 | Profile performance and reliability under distributed system loads. |
| 4.4 | Scale deployments using containerization such as Docker and Kubernetes with load balancing. |
| 4.5 | Optimize deployment costs while ensuring high availability. |

Recommended NVIDIA courses:

| Course |
|---|
| Deploying RAG Pipelines for Production at Scale |
| Building Agentic AI Applications With LLMs |
| Building RAG Agents With LLMs |

Suggested readings:

| Reading title |
|---|
| Agentic AI in the Factory, NVIDIA Whitepaper |
| NVIDIA TensorRT LLM, GitHub |
| Measure and Improve AI Workload Performance With NVIDIA DGX Cloud Benchmarking |
| Kubernetes Glossary, NVIDIA |
| NVIDIA Nsight Systems |
| Kube Prometheus for GPU Telemetry, NVIDIA Docs |
| Scaling LLMs With NVIDIA Triton and TensorRT LLM Using Kubernetes |
| TensorRT LLM Performance Analysis Documentation |

### Domain 5: Cognition, Planning, and Memory, 10%

Scope: core cognitive processes underlying intelligent agent behavior, including reasoning strategies, decision making, and memory management.

| Objective | Extracted topic |
|---:|---|
| 5.1 | Implement memory mechanisms for short term and long term context retention. |
| 5.2 | Apply reasoning frameworks such as chain of thought and task decomposition. |
| 5.3 | Engineer planning strategies for sequential and multi step decision making. |
| 5.4 | Manage stateful orchestration to coordinate complex tasks and knowledge retention. |
| 5.5 | Adapt reasoning strategies based on prior experiences and feedback. |

Recommended NVIDIA courses:

| Course |
|---|
| Building Agentic AI Applications With LLMs |
| Building RAG Agents With LLMs |

Suggested readings:

| Reading title |
|---|
| NVIDIA NeMo |
| Large Language Models Are In Context Learners, arXiv:2301.10851 |
| NeMo RL Documentation |
| Jamba 1.5: LLMs Leveraging Hybrid Architecture |
| Understanding the Planning of LLM Agents: A Survey, HTML Version |
| AI Agent Memory, IBM |
| MCP Agent Memory Types, Management, Implementation |
| Understanding the Planning of LLM Agents: A Survey, arXiv:2402.02716 |

### Domain 6: Knowledge Integration and Data Handling, 10%

Scope: integration of external knowledge and management of diverse data types.

| Objective | Extracted topic |
|---:|---|
| 6.1 | Implement retrieval pipelines such as RAG, embedded search, and hybrid approaches. |
| 6.2 | Configure and optimize vector databases for fast retrieval. |
| 6.3 | Build extract, transform, and load pipelines to integrate enterprise or client data sources. |
| 6.4 | Conduct data quality checks, augmentation, and preprocessing. |
| 6.5 | Enable real time access and reasoning over structured and unstructured knowledge. |

Recommended NVIDIA courses:

| Course |
|---|
| Building RAG Agents With LLMs |
| Adding New Knowledge to LLMs |

Suggested readings:

| Reading title |
|---|
| How to Make Your LLM More Accurate with RAG and Fine Tuning, Towards Data Science |

### Domain 7: NVIDIA Platform Implementation, 7%

Scope: leveraging NVIDIA AI hardware and software platforms for agentic AI systems.

| Objective | Extracted topic |
|---:|---|
| 7.1 | Integrate NVIDIA NeMo Guardrails for compliance and safety enforcement. |
| 7.2 | Deploy NVIDIA NIM microservices for high performance inference. |
| 7.3 | Optimize workflows with the NVIDIA NeMo Agent Toolkit. |
| 7.4 | Use NVIDIA TensorRT LLM and Triton Inference Server for latency reduction. |
| 7.5 | Manage and optimize multimodal input pipelines on NVIDIA hardware. |

Recommended NVIDIA course:

| Course |
|---|
| Building RAG Agents With LLMs |

Suggested readings:

| Reading title |
|---|
| Best Practices, NVIDIA TensorRT Documentation |
| Batchers, NVIDIA Triton Inference Server |
| Triton Inference Server Backend, NVIDIA Documentation |
| NeMo Guardrails, NVIDIA Developer |
| NVIDIA NeMo Guardrails, GitHub |
| Performance Tuning Guide, NVIDIA NeMo Framework User Guide |
| Best Practices, NVIDIA NeMo Framework User Guide |
| Optimization, NVIDIA Triton Inference Server |
| NVIDIA NeMo Agent Toolkit |
| NVIDIA Agent Intelligence Toolkit |
| NVIDIA AIQ Toolkit |
| Mastering LLM Techniques: Inference Optimization |
| Deploy Inference Workloads With NVIDIA NIM |
| How to Use the NVIDIA Llama Nemotron API for Advanced AI Agents |
| How to Deploy Llama 3.1 Nemotron 70B Instruct on a Virtual Machine in the Cloud |
| AI Agents Blueprint: Designing Foundation Models and Agents for the Next Wave of AI |
| Improve AI Code Generation Using NVIDIA Agent Intelligence Toolkit |
| NVIDIA NeMo: A Scalable Generative AI Framework, GitHub |

### Domain 8: Run, Monitor, and Maintain, 7% in PDF

Scope: ongoing operation, monitoring, and maintenance of agentic systems after deployment.

| Objective | Extracted topic |
|---:|---|
| 8.1 | Define monitoring dashboards and reliability metrics. |
| 8.2 | Track logs, errors, and anomalies for root cause diagnosis. |
| 8.3 | Continuously benchmark deployed agents against prior versions. |
| 8.4 | Implement automated tuning, retraining, and versioning in production. |
| 8.5 | Ensure continuous uptime, transparency, and trust in live deployments. |

Recommended NVIDIA course:

| Course |
|---|
| Deploying RAG Pipelines in Production at Scale |

Suggested readings:

| Reading title |
|---|
| What Is AI Agent Evaluation? |
| Log, Trace, and Monitor |
| Time Weighted Retriever |
| Troubleshooting |
| LangChain Tracing Concepts |
| LangChain Structured Outputs Concepts |
| Smith LangChain Model Evaluation: Rate Limiting |
| A Guide to Monitoring Machine Learning Models in Production |
| Monitoring Machine Learning Models in Production: How to Track Data Quality and Integrity |

### Domain 9: Safety, Ethics, and Compliance, 5%

Scope: principles and practices ensuring agentic AI systems operate responsibly, uphold ethical standards, and comply with legal and regulatory frameworks.

| Objective | Extracted topic |
|---:|---|
| 9.1 | Design and enforce system security and audit trails. |
| 9.2 | Integrate compliance guardrails such as privacy and enterprise policy. |
| 9.3 | Mitigate bias and toxicity in outputs. |
| 9.4 | Deploy layered safety frameworks such as filters and escalation protocols. |
| 9.5 | Ensure compliance with licensing and regulatory standards. |

Recommended NVIDIA course:

| Course |
|---|
| Building RAG Agents with LLMs |

Suggested readings:

| Reading title |
|---|
| Building Safer LLM Apps With LangChain Templates and NVIDIA NeMo Guardrails |
| NVIDIA NeMo Guardrails |
| Artificial Intelligence and Machine Learning in Software as a Medical Device |
| Proposal for a Regulation Laying Down Harmonised Rules on Artificial Intelligence, Artificial Intelligence Act |
| Ethically Aligned Design: A Vision for Prioritizing Human Well Being With Autonomous and Intelligent Systems |
| NVIDIA NeMo Guardrails, GitHub |
| Securing Generative AI Deployments With NVIDIA NIM and NVIDIA NeMo Guardrails |
| Metrics for Agentic AI |
| AI for Regulatory Compliance |
| Responsible AI Revisited |

### Domain 10: Human AI Interaction and Oversight, 5%

Scope: design and implementation of systems that facilitate effective human oversight and interaction with agents.

| Objective | Extracted topic |
|---:|---|
| 10.1 | Build intuitive UIs with user in the loop interaction. |
| 10.2 | Design structured feedback loops that guide iterative agent improvements. |
| 10.3 | Implement transparency mechanisms such as explainable reasoning and decision traceability. |
| 10.4 | Enable human oversight and intervention for accountability and trust. |

Recommended NVIDIA course:

| Course |
|---|
| Building Agentic AI Applications with LLMs |

Suggested readings:

| Reading title |
|---|
| NVIDIA Agent Intelligence Toolkit |
| NVIDIA Data Flywheel Glossary |
| AI Agents With Human in the Loop, Medium |
| Human in the Loop AI, HolisticAI |
| Human in the Loop Agentic AI Systems, OneReach.ai |
| Aporia: AI Guardrails |
| Improve AI Code Generation Using NVIDIA Agent Intelligence Toolkit |
| Chain of Thought Prompting, Codecademy |

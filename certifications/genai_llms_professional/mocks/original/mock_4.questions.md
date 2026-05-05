# Mock Test 4 Questions

## Questions

### Q1: A pre-training corpus contains PII (emails, phone numbers, names). Which approach is most appropriate before training?
- ID: data-005
- Domain: Data Preparation
- Difficulty: expert
- A. PII detection + redaction pipeline (regex + NER ensemble), with audited samples and tracking of false-positive/false-negative rates
- B. Train and hope no PII is memorized
- C. Manually review every document
- D. Encrypt every document
- Answer: A
- Explanation: Automated PII detection pipelines combining patterns and ML-based NER are the standard. Auditing FP/FN rates and documenting the pipeline is also necessary for compliance evidence.

### Q2: Cold-start latency is killing your autoscaled LLM endpoint. Which mitigation is most effective?
- ID: deploy-005
- Domain: Model Deployment
- Difficulty: expert
- A. Maintain a small minimum-replica pool (warm pool) and pre-load model weights/engine at container start (model_warmup), with predictive scaling on traffic patterns
- B. Eliminate autoscaling
- C. Disable warmup
- D. Reduce model size by 90%
- Answer: A
- Explanation: A warm minimum, model_warmup priming KV/CUDA contexts, and predictive scaling together attack the cold-start problem without surrendering the cost benefits of autoscaling.

### Q3: Deduplication on a trillion-token web corpus — which approach is appropriate at this scale?
- ID: data-002
- Domain: Data Preparation
- Difficulty: hard
- A. MinHash + LSH (or equivalent) for near-duplicate detection at sub-document level, with a similarity threshold tuned to hold-out leakage
- B. Exact MD5 hashing of full documents only
- C. Manual review
- D. No deduplication
- Answer: A
- Explanation: Exact-hash dedup misses near-duplicates (templated pages, paraphrased content). MinHash+LSH at the chunk level scales to trillions of tokens and catches the near-dup leakage that hurts downstream eval.

### Q4: A 70B model is deployed on H100s with Triton. Profiling shows GPU utilization at 35% under load. What is the most useful first investigation?
- ID: deploy-008
- Domain: Model Deployment
- Difficulty: easy
- A. Inspect Triton metrics (queue time, batch size distribution, instance group occupancy) and the engine's preferred batch sizes; this often points to a batching mismatch starving the GPU
- B. Replace the GPU
- C. Convert to CPU inference
- D. Disable monitoring
- Answer: A
- Explanation: 35% GPU utilization with traffic usually means the scheduler isn't forming batches at the engine's sweet spots. Triton metrics reveal whether queue delay, dispatch policy, or instance count is the cause.

### Q5: Statistical significance for a chat-quality A/B test: what minimum design step prevents false positives from peeking at metrics?
- ID: eval-007
- Domain: Evaluation
- Difficulty: expert
- A. Pre-register sample size and stopping rule (or use a sequential test like AGILE/SPRT) before starting
- B. Stop the test as soon as a difference appears
- C. Use a p-value of 0.5
- D. Always run for exactly 24 hours
- Answer: A
- Explanation: Peeking inflates false-positive rates. Pre-registered sample sizes or formal sequential tests are how you actually keep type-I error under control.

### Q6: An ONNX model exported from PyTorch fails with a `gather` opset mismatch when building a TensorRT engine. What is the appropriate fix?
- ID: deploy-007
- Domain: Model Deployment
- Difficulty: easy
- A. Re-export with a TensorRT-compatible opset version, or apply a graph transformation to replace the unsupported op
- B. Switch to TensorFlow
- C. Disable ONNX
- D. Re-train the model
- Answer: A
- Explanation: Opset mismatches are common; the fix is exporting to an opset TRT supports or rewriting the offending subgraph. Re-training is unnecessary.

### Q7: A service needs sub-50 ms TTFT with ≤2% INT4 vs FP16 accuracy gap on a 13B model. Profile shows attention is the hot kernel. Which TensorRT-LLM feature gives the largest TTFT win without further accuracy loss?
- ID: opt-011
- Domain: Model Optimization
- Difficulty: expert
- A. CUDA graphs for the decoder loop combined with FlashAttention-2 fused kernel
- B. Disabling the KV cache
- C. Doubling beam width
- D. Switching to a 70B model
- Answer: A
- Explanation: CUDA graphs eliminate per-step launch overhead in the autoregressive decode loop, and FlashAttention-2 fuses softmax, masking, and matmuls — both directly attack the attention hot path without changing precision.
- Why C is wrong: Larger beam width increases compute and latency.

### Q8: Which scenario most strongly justifies continued pre-training over SFT?
- ID: ft-010
- Domain: Fine-Tuning
- Difficulty: easy
- A. Adapting the model to a domain with different vocabulary and writing distribution (e.g., legal contracts, biomedical literature) before any task-specific tuning
- B. Teaching the model to follow user instructions in a chat format
- C. Aligning to human preferences
- D. Adding tool-calling
- Answer: A
- Explanation: Continued pre-training reshapes the base distribution and benefits from large unlabeled domain corpora. Once the base reflects the domain, SFT/instruction tuning can build on top of it more effectively.

### Q9: NCCL `NCCL_P2P_DISABLE=1` fixes a hang on a specific multi-GPU node. What is the trade-off?
- ID: gpu-014
- Domain: GPU Acceleration and Optimization
- Difficulty: expert
- A. Loses NVLink P2P bandwidth — collectives now route through host or PCIe, lowering throughput. The fix is a workaround, not a target state.
- B. No trade-off; it is always faster
- C. Disables the GPU entirely
- D. Forces FP32
- Answer: A
- Explanation: P2P disabled removes the fast direct GPU-to-GPU path. It is a temporary workaround when topology bugs cause hangs; the proper fix is restoring P2P with a corrected topology or driver.

### Q10: An ONNX-exported model produces correct outputs in ONNX Runtime but slightly different outputs after TensorRT engine build. Which is the likeliest cause?
- ID: opt-017
- Domain: Model Optimization
- Difficulty: medium
- A. TensorRT applied layer fusion and FP16 precision flags that change numerical ordering — small numerical drift is expected and often acceptable if validated
- B. ONNX is corrupt
- C. The model architecture changed
- D. CUDA is not installed
- Answer: A
- Explanation: TRT routinely fuses layers and may run kernels in lower precision (FP16/INT8), which changes the order and precision of FP operations. Small numerical drift is normal; what matters is whether downstream metrics stay within tolerance.

### Q11: A team wants the model to refuse out-of-scope requests. Which prompt construction is least brittle to user manipulation?
- ID: prompt-013
- Domain: Prompt Engineering
- Difficulty: easy
- A. A separate, model-side policy enforcement layer (e.g., NeMo Guardrails or a classifier) plus a refusal section in the system prompt
- B. A single sentence in the user prompt: "do not answer off-topic"
- C. Higher temperature to add randomness
- D. Hide the system prompt with whitespace
- Answer: A
- Explanation: Prompt-only refusal logic is regularly bypassed by injection. A defense-in-depth design — system-prompt policy plus an external policy/guardrail layer — survives much more adversarial pressure.

### Q12: When training a multilingual tokenizer for a model expected to handle 50 languages, which design choice usually pays off most?
- ID: data-001
- Domain: Data Preparation
- Difficulty: hard
- A. Use byte-level BPE with a vocabulary size scaled to language coverage (often 100k–256k) and balanced sampling across languages during tokenizer training
- B. Train one tokenizer per language and concatenate
- C. Use the English BPE tokenizer as-is
- D. Word-level tokenization
- Answer: A
- Explanation: Byte-level BPE handles arbitrary scripts without OOV; balanced sampling prevents the tokenizer from being dominated by high-resource languages. Adequate vocabulary size keeps token efficiency reasonable across languages.

### Q13: Which deployment scenario most justifies running on Jetson/edge instead of cloud?
- ID: deploy-009
- Domain: Model Deployment
- Difficulty: medium
- A. Strict offline operation, sub-30 ms response budget under unreliable connectivity, or hard data-locality constraints
- B. Maximum model size
- C. Minimum cost per token at scale
- D. Massive concurrency
- Answer: A
- Explanation: Edge wins when connectivity, latency, or data-locality constraints disqualify cloud. Cost-per-token at high concurrency favors centralized deployment.

### Q14: For evaluating open-ended writing quality, BLEU and ROUGE alone are insufficient because:
- ID: eval-004
- Domain: Evaluation
- Difficulty: hard
- A. They reward n-gram overlap with references, which penalizes valid paraphrases and stylistic variation
- B. They are too slow
- C. They only work on classification
- D. They require GPUs
- Answer: A
- Explanation: BLEU/ROUGE conflate "matched a reference" with "is good." Open-ended tasks have many valid outputs, so overlap-based metrics miss valid paraphrases. BERTScore, COMET, or human/LLM-as-judge supplement them.

### Q15: Evaluating a RAG system, which metric distinguishes "answer is grounded in retrieved documents" from "answer is on-topic"?
- ID: eval-001
- Domain: Evaluation
- Difficulty: medium
- A. Faithfulness (the answer's claims are entailed by retrieved context) — separate from answer relevance to the question
- B. BLEU
- C. Perplexity
- D. Latency
- Answer: A
- Explanation: Faithfulness specifically asks "is this claim supported by the retrieved evidence?" — a different question from "did the model address the user's intent." Faithfulness is the canonical anti-hallucination metric for RAG.

### Q16: A mixture-of-experts model has 8 experts and routes top-2 per token. Effective compute per token is approximately:
- ID: arch-003
- Domain: LLM Architecture
- Difficulty: expert
- A. 2/8 of the compute of a dense model with the same total parameter count — training cost is sub-linear in total parameters
- B. The same as a dense model
- C. 8x the dense model
- D. Zero
- Answer: A
- Explanation: Sparse MoE activates only the routed experts per token. With top-2-of-8, compute is roughly 2/8 of the equivalent dense model at the same total parameter count, which is the central efficiency argument for MoE.

### Q17: To detect instruction-following regressions, the most useful eval is:
- ID: eval-005
- Domain: Evaluation
- Difficulty: hard
- A. A targeted instruction-following benchmark (e.g., IFEval-style verifiable constraints — output length, JSON schema, refusal triggers) with automatic checks
- B. Perplexity
- C. ROUGE on news data
- D. Latency
- Answer: A
- Explanation: Verifiable constraints (does the output have N words? Is it valid JSON? Did it refuse the harmful prompt?) directly measure instruction adherence; freeform overlap metrics can't.

### Q18: Detecting bias in generated outputs across demographic groups is best done with:
- ID: safe-002
- Domain: Safety, Ethics, and Compliance
- Difficulty: medium
- A. Templated prompt sets that vary protected attributes while holding context constant, scored on consistency of helpful/harmful behaviors and stereotype invocation
- B. Counting word frequencies
- C. BLEU on news articles
- D. GPU monitoring
- Answer: A
- Explanation: Templated counterfactual prompting (e.g., swap names, occupations, demographics) and measuring response divergence is the methodology for bias auditing in generation tasks.

### Q19: When does enabling `torch.compile` (or equivalent graph compile) hurt rather than help inference latency?
- ID: gpu-013
- Domain: GPU Acceleration and Optimization
- Difficulty: hard
- A. When input shapes vary on every call, causing repeated recompilation
- B. When the GPU is idle
- C. When the model is small
- D. Compile always helps
- Answer: A
- Explanation: Shape-dynamic workloads trigger graph recompilations; if every batch has a new shape, compile cost dominates. Static shapes (or dynamic-shape compilation modes) are required for the speedup to materialize.

### Q20: LLM-as-judge has a known bias. Which one is most often controlled for?
- ID: eval-003
- Domain: Evaluation
- Difficulty: hard
- A. Position bias — judges prefer the first option presented; mitigated by randomizing order and averaging across positions
- B. Color bias
- C. Tokenization bias
- D. GPU-temperature bias
- Answer: A
- Explanation: Position bias is well-documented in pairwise LLM-as-judge evaluations. Symmetric ordering (run both A-vs-B and B-vs-A and average) is the standard correction.

### Q21: Canary deployment for a new LLM version — which signal is most LLM-specific (vs. generic web service signals)?
- ID: deploy-003
- Domain: Model Deployment
- Difficulty: hard
- A. Quality regressions on a canary-traffic eval (LLM-as-judge, automatic checks) compared to baseline output distributions, on top of latency/error metrics
- B. CPU usage
- C. Disk I/O
- D. DNS latency
- Answer: A
- Explanation: LLM canaries must catch *quality* regressions, not just up/down. Comparing outputs on identical canary prompts against the baseline catches subtle behavior changes that infrastructure metrics miss.

### Q22: Hallucination spike detected in production logs. Highest-priority diagnostic step?
- ID: mon-007
- Domain: Production Monitoring and Reliability
- Difficulty: hard
- A. Check whether the retriever is returning empty/low-relevance results (RAG breakdown) and whether any deployment changed (model, prompt, retriever index, doc store)
- B. Restart all servers
- C. Increase temperature
- D. Disable monitoring
- Answer: A
- Explanation: Sudden hallucination spikes are usually triggered by a retrieval failure or a deployment change. Correlating the spike's start time with deploy events and retrieval-quality metrics localizes the root cause.

### Q23: You need to enforce strict JSON output with required fields. The model occasionally returns trailing prose. Which technique is most reliable?
- ID: prompt-004
- Domain: Prompt Engineering
- Difficulty: medium
- A. Use constrained decoding / grammar-restricted generation (e.g., GBNF, JSON-schema-constrained sampler)
- B. Add "please return only JSON" in the system prompt
- C. Set temperature to 0
- D. Switch to a smaller model
- Answer: A
- Explanation: Soft instructions in the prompt are best-effort; only constrained decoding (a grammar/schema enforced at the sampler level) guarantees structurally valid JSON. NIM and several inference engines expose this directly.

### Q24: For a summarization task on long documents, which architectural family typically performs best given equal training compute?
- ID: arch-005
- Domain: LLM Architecture
- Difficulty: easy
- A. Decoder-only LLMs scaled up — they have outperformed dedicated encoder-decoder models for most generation tasks at scale
- B. Encoder-only models
- C. CNNs
- D. RNN encoders
- Answer: A
- Explanation: Modern LLM scaling has shown decoder-only models match or exceed dedicated encoder-decoder models on summarization, given equal compute and instruction tuning.

### Q25: A RAG chatbot for a regulated domain must include source citations. Which prompt structure most reliably produces citation-grounded answers?
- ID: prompt-007
- Domain: Prompt Engineering
- Difficulty: hard
- A. Number each retrieved passage, instruct the model to cite [n] inline for every factual claim, and add a refusal clause for unsupported claims
- B. Include passages without numbering and ask for a paragraph answer
- C. Provide only the question without context
- D. Ask for citations only after the answer in a postscript
- Answer: A
- Explanation: Numbered passages + inline-citation instruction + explicit refusal clause is the reproducible recipe. It both anchors claims to specific evidence and gives the model a permitted exit when evidence is missing.

### Q26: A 70B-parameter chat model must serve ≥3,000 concurrent requests on H100s while keeping ROUGE-L within 1 point of the FP16 baseline. Which quantization recipe is the best starting point?
- ID: opt-001
- Domain: Model Optimization
- Difficulty: expert
- A. Per-tensor INT8 weight + activation quantization with no calibration
- B. AWQ 4-bit weight quantization with FP16 activations and a 512-prompt calibration set drawn from production traffic
- C. INT4 weight + INT4 activation quantization with synthetic Gaussian calibration data
- D. FP32 weights with TensorRT graph fusion only
- Answer: B
- Explanation: AWQ preserves outlier-sensitive channels by quantizing only weights to 4-bit while keeping activations in FP16, which maintains accuracy on H100 and recovers most of the throughput benefit. A representative production-distribution calibration set is what protects ROUGE-L.
- Why A is wrong: Per-tensor INT8 without calibration almost always loses several ROUGE points on instruction-tuned chat models because activation outliers are not handled.
- Why C is wrong: Quantizing activations to INT4 is unstable for LLMs even with calibration; synthetic Gaussian calibration is the wrong distribution for instruction data.
- Why D is wrong: FP32 with fusion alone will not hit 3,000 concurrent requests on a 70B model — the memory and compute budget forces a precision reduction.

### Q27: Defining SLAs for an LLM endpoint — which latency metric is most informative for chat UX?
- ID: mon-002
- Domain: Production Monitoring and Reliability
- Difficulty: easy
- A. p95/p99 time-to-first-token (TTFT) and inter-token latency, not just average end-to-end
- B. Mean total response time only
- C. Maximum throughput only
- D. CPU temperature
- Answer: A
- Explanation: Streaming chat UX is dominated by tail TTFT (waiting for the first token) and token cadence. Tail percentiles capture user experience that averages hide.

### Q28: NCCL all-reduce throughput drops sharply when scaling beyond a single node. Which configuration most commonly addresses this?
- ID: gpu-005
- Domain: GPU Acceleration and Optimization
- Difficulty: expert
- A. Enable NCCL hierarchical algorithms (e.g., tree, NVLS, SHARP) and verify InfiniBand transport, GPU Direct RDMA, and NCCL_TOPO settings
- B. Switch to single-precision floats
- C. Disable NCCL entirely
- D. Use TCP loopback
- Answer: A
- Explanation: Cross-node NCCL collectives benefit from hierarchical algorithms that exploit NVLink intra-node + IB inter-node, GPUDirect RDMA, and SHARP for in-network reduction. Misconfiguration here is the most common cause of cross-node collapse.

### Q29: A multi-region LLM deployment needs failover. Which mechanism is most appropriate at the model layer?
- ID: mon-006
- Domain: Production Monitoring and Reliability
- Difficulty: hard
- A. Health-checked replicas behind a load balancer with automatic regional failover, plus identical model versions/configs to avoid silent quality differences during failover
- B. Manual DNS swap on incident
- C. Active-passive cold standby with no warmup
- D. Single-region only
- Answer: A
- Explanation: Automated failover with version parity means a regional incident doesn't simultaneously change behavior. Version drift between regions is a common cause of post-failover incidents.

### Q30: In TensorRT-LLM, what is the most appropriate use of `gpt_attention_plugin` with paged KV cache?
- ID: opt-009
- Domain: Model Optimization
- Difficulty: hard
- A. To force FP32 attention everywhere
- B. To enable variable-length sequences in a batch with non-contiguous KV cache pages, supporting in-flight batching
- C. To replace the tokenizer
- D. To disable KV cache entirely
- Answer: B
- Explanation: The fused attention plugin combined with paged KV cache is what enables efficient handling of variable-length sequences within a batch, which is the foundation for in-flight batching in TRT-LLM.

### Q31: Multi-query attention (MQA) reduces KV cache size compared to multi-head attention (MHA) by:
- ID: arch-001
- Domain: LLM Architecture
- Difficulty: hard
- A. Sharing K and V projections across all heads (one K/V pair, many Q heads), shrinking the KV cache by a factor equal to the head count
- B. Removing attention entirely
- C. Reducing hidden size
- D. Skipping every other layer
- Answer: A
- Explanation: MQA collapses K and V to a single set shared across heads while keeping Q heads independent. KV cache shrinks by a factor of the head count (often 8–32x). Grouped-query attention (GQA) is a middle ground.

### Q32: A team enables continuous batching but throughput barely changes. Profiling shows GPU SMs idle ~30% of the time waiting on prefill. What should they enable next?
- ID: opt-015
- Domain: Model Optimization
- Difficulty: medium
- A. Chunked prefill so long prompts are split and interleaved with decode iterations
- B. Static batching
- C. Disable continuous batching
- D. Lower the GPU clock
- Answer: A
- Explanation: Long prefills block decode iterations and cause SM idle time. Chunked prefill (splitting a long prompt into chunks that share scheduler slots with decode steps) keeps the GPU saturated.

### Q33: You see a CUDA OOM only during the optimizer step, not during forward/backward. Which memory category is the culprit?
- ID: gpu-012
- Domain: GPU Acceleration and Optimization
- Difficulty: hard
- A. Optimizer state (e.g., Adam's m and v moments — 2× weight memory in FP32)
- B. KV cache
- C. Activation memory only
- D. Tokenizer memory
- Answer: A
- Explanation: Adam keeps two FP32 moments per parameter; with FP32 master weights, optimizer state is the largest non-activation memory pool and only materializes during step(). ZeRO-1 / 8-bit optimizers / sharding are the typical fixes.

### Q34: A team wants speculative decoding to accelerate a 70B target model. Which draft-model choice gives the best acceptance rate / cost ratio?
- ID: opt-008
- Domain: Model Optimization
- Difficulty: hard
- A. A 7B model from a different family, never trained on the target's data
- B. A 1B–3B distilled or pruned model from the same family, fine-tuned on the same instruction data as the target
- C. The 70B target itself with temperature 0
- D. A 175B teacher model
- Answer: B
- Explanation: Speculative decoding wins when the draft is small enough to be much cheaper than the target yet aligned enough for high token-acceptance rates. A small same-family, same-instruction-tuned model is the standard choice.
- Why A is wrong: A different-family draft has low acceptance, which collapses the speedup.
- Why D is wrong: A draft larger than the target defeats the purpose.

### Q35: When merging multiple LoRA adapters into a single model for serving, what is a known failure mode?
- ID: ft-009
- Domain: Fine-Tuning
- Difficulty: easy
- A. Cross-task interference — naive averaging of adapters can degrade each task's performance unless merging method (TIES, DARE, weighted) is chosen carefully
- B. The base model breaks
- C. LoRA adapters cannot be merged
- D. Merging always helps
- Answer: A
- Explanation: Adapters trained on different tasks point in different parameter directions; naive sum or mean averages out useful updates. Methods like TIES-merging or DARE reduce interference by zeroing low-magnitude or sign-disagreeing components.

### Q36: Scaling laws (e.g., Chinchilla) imply that for a fixed compute budget, you should:
- ID: arch-006
- Domain: LLM Architecture
- Difficulty: medium
- A. Balance parameter count and tokens trained — many earlier large models were under-trained relative to their parameter count
- B. Always maximize parameter count
- C. Always maximize training tokens
- D. Compute budget doesn't matter
- Answer: A
- Explanation: Chinchilla showed that for a fixed FLOP budget, optimal performance comes from balancing N (parameters) and D (tokens). Many models pre-Chinchilla were too large for the tokens they saw.

### Q37: For a 7B chat model, what is the most realistic domain/general data ratio during instruction-tuning when the goal is to specialize for legal Q&A without losing chat ability?
- ID: data-004
- Domain: Data Preparation
- Difficulty: expert
- A. ~30–50% domain instructions blended with general instruction data; pure-domain quickly degrades general behavior
- B. 100% domain instructions
- C. 1% domain instructions
- D. Domain data only at the end
- Answer: A
- Explanation: A moderate domain mix is the standard practice. Pure-domain SFT collapses general capability quickly on a 7B; general-only ignores the specialization goal. Tune the ratio empirically with held-out general+domain evals.

### Q38: For a 70B model on 8× H100 80GB with NVLink, what tensor-parallel degree usually optimizes per-token throughput for short generations (≤128 output tokens)?
- ID: opt-016
- Domain: Model Optimization
- Difficulty: medium
- A. TP=1
- B. TP=4 with PP=2 — balancing memory and reducing all-reduce volume
- C. TP=8 always
- D. TP=16
- Answer: B
- Explanation: TP=8 maximizes intra-node bandwidth use but its all-reduce traffic per layer can dominate short generations. TP=4 + PP=2 typically halves all-reduce volume per step while still fitting the model, giving better short-generation throughput on 8 H100s.
- Why D is wrong: TP=16 is impossible on 8 GPUs.

### Q39: Catastrophic forgetting after multi-stage training (pre-train → SFT → RLHF) is best mitigated by:
- ID: ft-013
- Domain: Fine-Tuning
- Difficulty: medium
- A. Mixing small fractions of earlier-stage data into later stages, plus monitoring earlier-stage benchmarks during training
- B. Larger learning rates in later stages
- C. Removing all evaluation
- D. Skipping SFT
- Answer: A
- Explanation: Replay (a small mixture of earlier-stage data) and continuous evaluation against earlier-stage benchmarks keep the model from drifting away from the capabilities it had previously acquired.

### Q40: For a code-generation system, you observe that prompts containing irrelevant Stack Overflow excerpts hurt accuracy. Which prompt-engineering principle does this confirm?
- ID: prompt-009
- Domain: Prompt Engineering
- Difficulty: hard
- A. Selective context inclusion — adding low-relevance content distracts attention even when context length permits it
- B. Always include more context
- C. Models ignore irrelevant context
- D. Stack Overflow excerpts always help
- Answer: A
- Explanation: Irrelevant tokens compete for attention bandwidth. Curating context to high-relevance excerpts (via reranking and chunk filtering) is a well-documented win, especially on technical tasks.

### Q41: A team quantizes a 13B model to INT8 using SmoothQuant and observes that perplexity on a held-out set jumps from 6.4 to 9.1. What is the most likely root cause?
- ID: opt-003
- Domain: Model Optimization
- Difficulty: easy
- A. The smoothing α was set too low, leaving large activation outliers in the quantized path
- B. The model is too large for INT8
- C. SmoothQuant cannot be used with decoder-only architectures
- D. INT8 always degrades by at least 40% in perplexity
- Answer: A
- Explanation: SmoothQuant migrates activation magnitude into weights by α; if α is too low, outlier activations remain and dominate quantization error. Sweeping α (commonly 0.5–0.85) typically recovers most of the perplexity gap.
- Why C is wrong: SmoothQuant was designed for decoder-only LLMs; it works on Llama, GPT-class models routinely.

### Q42: Why is comparing perplexity across models with different tokenizers misleading?
- ID: eval-002
- Domain: Evaluation
- Difficulty: medium
- A. Perplexity is per-token; different tokenizers split text into different token counts, so the same text yields different perplexity values that aren't directly comparable
- B. Perplexity always increases with model size
- C. Perplexity ignores word order
- D. Perplexity is bounded between 0 and 1
- Answer: A
- Explanation: Perplexity is an exponential of average per-token NLL. Different tokenizations change "tokens" in the average; bits-per-byte or bits-per-character is the tokenizer-invariant alternative.

### Q43: Triton Inference Server is serving a TensorRT-LLM engine. p99 latency spikes when concurrent users jump from 50 to 200. Which Triton parameter most directly addresses tail latency under burst?
- ID: opt-007
- Domain: Model Optimization
- Difficulty: medium
- A. `dynamic_batching.max_queue_delay_microseconds` lowered, with `preferred_batch_size` aligned to engine sweet spots
- B. `instance_group.count` raised to 16 on a single GPU
- C. `model_warmup` removed
- D. Increase max sequence length in the engine
- Answer: A
- Explanation: Tightening max_queue_delay caps how long requests wait for batch formation, and aligning preferred_batch_size with the TRT-LLM engine's profiled sweet spots keeps batches efficient. Together these reduce p99 tail under burst.
- Why B is wrong: Many instance groups on a single GPU contend for the same SMs and KV cache memory, often making p99 worse, not better.

### Q44: You are deploying Llama-3.1-70B with TensorRT-LLM and want maximum throughput for variable-length chat prompts (200–4,000 tokens) under a 200 ms TTFT SLA. Which combination is most appropriate?
- ID: opt-002
- Domain: Model Optimization
- Difficulty: expert
- A. Static batching with max batch size 32 and padding to longest sequence
- B. In-flight (continuous) batching with paged KV cache and chunked prefill
- C. Static batching with max batch size 1 to guarantee TTFT
- D. Disable batching and rely on tensor parallelism alone
- Answer: B
- Explanation: In-flight batching lets new requests join the running batch as soon as a slot frees, paged KV cache prevents fragmentation across mixed-length sequences, and chunked prefill bounds the worst-case prefill latency so the 200 ms TTFT SLA is enforceable.
- Why A is wrong: Padding to the longest sequence wastes GPU compute on shorter prompts and causes head-of-line blocking, which violates TTFT under load.
- Why C is wrong: Batch size 1 destroys throughput; you cannot serve high concurrency this way.

### Q45: Data lineage tracking matters most for which production scenario?
- ID: data-009
- Domain: Data Preparation
- Difficulty: medium
- A. A regulator (or internal audit) asks which sources contributed to the model's training and how each was processed and licensed
- B. Choosing the GPU type
- C. Setting batch size
- D. Tokenizer vocabulary
- Answer: A
- Explanation: Lineage answers "what data, from where, transformed how" — the questions auditors and licensors ask. Without lineage, regulated and licensed-data deployments are hard to defend.

### Q46: Choosing LoRA rank: which observation justifies increasing rank from 8 to 32?
- ID: ft-003
- Domain: Fine-Tuning
- Difficulty: medium
- A. Training loss plateaus well above the loss reached by full FT and validation accuracy is also stuck
- B. Training loss is already at zero
- C. The model overfits at rank 8
- D. GPU memory is unused
- Answer: A
- Explanation: A plateaued training loss with no overfit suggests the rank-8 update lacks capacity. Increasing rank (and α proportionally) gives the adapter more degrees of freedom.

### Q47: Subtle quality regression in production — output is fluent but slowly becoming less helpful. Which monitoring approach catches this earliest?
- ID: mon-001
- Domain: Production Monitoring and Reliability
- Difficulty: easy
- A. Continuous evaluation on a fixed canary prompt set with rolling LLM-as-judge or rule-based scoring, alerting on distributional drift in scores
- B. CPU usage alarms
- C. Monitoring tokenizer load time
- D. Disk free space
- Answer: A
- Explanation: Quality regressions don't trigger infra alarms. A canary-prompt eval running continuously, scored automatically, with drift alerting is the standard mechanism.

### Q48: A/B testing two LLM variants on production traffic — what is the most robust evaluation approach?
- ID: deploy-006
- Domain: Model Deployment
- Difficulty: expert
- A. Stratified traffic split with both online business metrics (e.g., task completion, retention, deflection) and offline quality eval on shared canary prompts
- B. Compare BLEU on a static dataset only
- C. Measure latency only
- D. Pick whichever costs less
- Answer: A
- Explanation: Online business metrics capture user impact; canary eval prevents regressions invisible to business KPIs. Stratification controls for traffic-mix bias.

### Q49: For an inference workload dominated by long-context (32K) summarization, what is the most cost-effective optimization to reduce KV-cache memory pressure without retraining?
- ID: opt-004
- Domain: Model Optimization
- Difficulty: easy
- A. Switch from FP16 KV cache to INT8 KV cache with per-head scaling
- B. Reduce batch size to 1
- C. Disable rotary positional embeddings
- D. Use INT4 weight quantization only
- Answer: A
- Explanation: KV cache scales linearly with sequence length and dominates memory at 32K context. Quantizing the KV cache to INT8 with per-head scales typically halves memory with negligible quality loss and requires no retraining.
- Why C is wrong: Disabling RoPE breaks the model entirely.
- Why D is wrong: Weight quantization addresses parameter memory, not KV cache memory, which is the actual bottleneck at long context.

### Q50: A medical-summarization service must keep top-1 accuracy on a domain benchmark within 0.5% of FP16. The team currently serves at FP16 on A100s and wants to move to FP8 on H100. Which step is most critical to retaining accuracy?
- ID: opt-005
- Domain: Model Optimization
- Difficulty: medium
- A. Calibrate FP8 scaling factors using a domain-representative subset of medical text
- B. Use a single global scale across all layers
- C. Re-train the model from scratch in FP8
- D. Switch to E5M2 for both weights and activations everywhere
- Answer: A
- Explanation: FP8 needs per-tensor (or per-block) scaling factors. Calibrating those scales on data that matches the production distribution is what preserves accuracy in domain-shifted settings like medical text.
- Why B is wrong: A single global scale loses precision on layers with very different magnitude ranges; per-tensor or per-channel scales are standard.
- Why D is wrong: E5M2 is typically reserved for gradients in training; E4M3 is preferred for weights/activations in inference because it has more mantissa bits.

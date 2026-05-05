---
service: Riva
relevant_to: [NCP-GENL]
status: populated
---

# Riva

## What to study first

- **Core idea:** Containerized microservice + gRPC SDK — GPU-accelerated speech AI (ASR, TTS, translation)
- **Use it when:** Use when the scenario involves speech recognition, text-to-speech, translation, voice assistants, or streaming call-center audio.
- **Choose another path when:** Choose the neighboring service for text-only LLM serving, LLM fine-tuning, or RAG retrieval.
- **Concrete surface:** Access: NGC container: `nvcr.io/nvidia/riva/riva-speech`, Python: `pip install nvidia-riva-client` Inside: Conformer ASR encoder, FastPitch + HiFi-GAN TTS, encoder-decoder NMT, streaming VAD I/O: Audio stream (PCM, FLAC, WAV) / text + voice parameters -> Text transcript with word timestamps (ASR) / audio waveform (TTS) / translated text (NMT)
- **Study first:** ASR architectures (CTC vs RNN-T): CTC-based (Citrinet, QuartzNet) with simpler decoder for faster streaming
- RNN-T with prediction+joint network for higher accuracy on noisy audio
- both use Conformer encoder (convolution + self-attention)
- TTS pipeline (FastPitch + HiFi-GAN): text-to-spectrogram via FastPitch with explicit pitch/duration control
- vocoder via HiFi-GAN converts spectrogram to raw audio
- can generate 100+ seconds of audio per second of GPU time on A100
- Streaming ASR and VAD: outputs partial transcripts incrementally as audio arrives
- GPU-accelerated voice activity detection reduces processing on non-speech segments
- Real-time voice agent pipeline: Riva ASR → LLM/Agent → Riva TTS
- combined latency must stay under ~300ms for natural conversation
- Riva vs cloud speech APIs: self-hosted on NVIDIA GPUs with predictable latency and no per-call costs
- supports domain adaptation (fine-tuning ASR on domain audio) and custom vocabulary injection for rare terms
- **Real trap:** Choosing Riva for generic text generation because it is a model-serving product; Riva owns speech/audio workflows.

## At a glance

| | |
|---|---|
| **What it is** | Containerized microservice + gRPC SDK — GPU-accelerated speech AI (ASR, TTS, translation) |
| **How you access it** | NGC container: `nvcr.io/nvidia/riva/riva-speech`, Python: `pip install nvidia-riva-client` |
| **Input** | Audio stream (PCM, FLAC, WAV) / text + voice parameters |
| **Output** | Text transcript with word timestamps (ASR) / audio waveform (TTS) / translated text (NMT) |
| **Inside** | Conformer ASR encoder, FastPitch + HiFi-GAN TTS, encoder-decoder NMT, streaming VAD |

```python
import riva.client
asr_service = riva.client.ASRService(riva.client.Auth(uri="localhost:50051"))
responses = asr_service.streaming_response_generator(
    audio_chunks=my_audio_stream,
    streaming_config=riva.client.StreamingRecognitionConfig(
        config=riva.client.RecognitionConfig(language_code="en-US")))
for r in responses:
    print(r.results[0].alternatives[0].transcript)
```

**Mental model**: deploy a speech AI Docker container, call gRPC methods to transcribe audio or generate speech — the audio equivalent of NIM for text.

---

## What it is, in one paragraph

NVIDIA Riva is NVIDIA's speech and audio AI application framework/service family. It is used for speech recognition, text-to-speech, and audio-related conversational AI workloads. In this study app, treat Riva as the **speech AI layer**, not the general LLM training, retrieval, or serving answer.

## Where it sits in the lifecycle

**Multimodal/speech application layer** — usually around inference and application integration.

```
[Audio input] -> [Riva: ASR / speech processing] -> [LLM or application] -> [Riva: TTS]
```

## When it is the right answer

- The scenario is about speech recognition, text-to-speech, voice assistants, call-center audio, or streaming speech interaction.
- The question asks for NVIDIA speech AI rather than generic text LLM serving.
- The workflow needs audio I/O around an LLM or agent.

## Adjacent-service decision boundary

- **Text LLM serving**: use NIM or Triton Inference Server.
- **LLM customization**: use NeMo Framework or NeMo Customizer.
- **RAG over documents**: use NeMo Retriever.
- **GPU kernel/inference optimization**: use TensorRT-LLM, TensorRT, or Nsight.

## How it relates to neighboring services

- vs **NIM**: NIM packages model APIs broadly; Riva is specifically speech/audio application AI.
- vs **NeMo Framework**: NeMo can train/customize models; Riva is the application/runtime layer for speech workloads.
- vs **Triton Inference Server**: Triton is a general model server; Riva is speech-focused.

## Deep Dive Contents

This deep dive covers the key concepts behind Riva that the exam tests:

- **[What Riva Is, Architecturally]**: GPU-accelerated speech AI framework with ASR, TTS, and NMT pipeline stages
- **[ASR Pipeline (Speech-to-Text)]**: CTC-based (Citrinet, QuartzNet) vs RNN-T architectures; Conformer encoder with convolution + self-attention
- **[TTS Pipeline (Text-to-Speech)]**: two-stage — text-to-spectrogram (FastPitch with pitch/duration control) + vocoder (HiFi-GAN for high-quality audio)
- **[Riva in Multimodal Agent Pipelines]**: voice-enabled agent with streaming ASR, low-latency TTS, and GPU-accelerated VAD; target <300ms for natural conversation
- **[Riva vs Generic Speech APIs]**: self-hosted on NVIDIA GPUs with predictable latency; domain adaptation and custom vocabulary injection

## Deep dive: Riva speech AI architecture and multimodal pipelines

### What Riva is, architecturally

NVIDIA Riva is a GPU-accelerated speech AI framework that provides production-ready services for automatic speech recognition (ASR), text-to-speech (TTS), and neural machine translation (NMT). It is built on a pipeline of deep learning models optimized for real-time inference on NVIDIA GPUs.

Riva breaks speech processing into discrete model stages, each optimized independently.

### ASR pipeline (speech-to-text)

Riva's ASR uses a **CTC (Connectionist Temporal Classification)** or **RNN-T (RNN Transducer)** architecture, depending on the latency/accuracy tradeoff:

- **CTC-based models** (Citrinet, QuartzNet): Simpler decoder. Faster, lower latency. Suitable for real-time streaming. Assumes conditional independence between output timesteps.
- **RNN-T-based models**: More complex decoder with a prediction network and joint network. Higher accuracy, especially on noisy audio. Better at modeling output dependencies.

Both use a **Conformer encoder** as the acoustic backbone — a hybrid of convolution and self-attention that captures both local acoustic patterns (via convolution) and long-range dependencies (via self-attention).

Preprocessing uses **GPU-accelerated feature extraction** (Fbank/Mel-spectrogram computation via cuFFT) rather than CPU-based extraction, reducing end-to-end latency.

### TTS pipeline (text-to-speech)

Riva TTS uses a two-stage architecture:

1. **Text-to-spectrogram** (Tacotron 2 or FastPitch): Converts input text to a Mel-spectrogram. FastPitch uses a transformer with explicit pitch and duration prediction, enabling prosody control (speed, pitch range, emphasis).
2. **Vocoder** (WaveGlow or HiFi-GAN): Converts the Mel-spectrogram to raw audio waveforms. HiFi-GAN is the preferred vocoder for production due to higher audio quality and faster generation.

Both stages run on GPU. FastPitch + HiFi-GAN can generate 100+ seconds of audio per second of GPU time on a single A100.

### Translation (NMT)

Riva NMT uses encoder-decoder transformers trained on parallel corpora. Unlike general-purpose NMT (which runs on CPU or generic GPU models), Riva's NMT models are optimized for the speech domain — they handle punctuation restoration, cAPItalization, and domain-specific terminology (medical, legal, technical) better than generic models.

### How Riva fits in multimodal agent pipelines

A typical voice-enabled agent architecture using Riva:

```
[User speaks]
    ↓
Riva ASR (speech to text)
    ↓
LLM / Agent (text to response text)
    ↓
Riva TTS (text to speech)
    ↓
[User hears response]
```

Riva's key role is that it makes this pipeline **real-time**. The combined ASR plus LLM plus TTS latency must stay under approximately 300ms for natural conversation. Riva achieves this through:

- **Streaming ASR**: Outputs partial transcripts incrementally (word-by-word or phrase-by-phrase) as audio arrives, rather than waiting for the utterance to end. The agent can start processing before the user finishes speaking.
- **Low-latency TTS**: Generates audio incrementally from partial text, enabling response streaming.
- **Voice activity detection (VAD)**: GPU-accelerated VAD to detect speech segments and silence, reducing audio processing where no speech is present.

### Riva vs generic speech APIs

- Generic cloud speech APIs (e.g., Google Speech-to-Text, Azure Speech) run on unspecified hardware with per-second pricing. Riva runs on your own NVIDIA GPUs, offering predictable latency and no per-call costs after hardware purchase.
- Riva supports domain adaptation (fine-tuning ASR acoustic models on domain-specific audio) and custom vocabulary injection (for rare words, brand names, technical terms) — features that are often restricted or expensive with cloud APIs.

### Exam distinction

Riva is the correct answer when the scenario involves audio/speech I/O, voice assistants, call center transcription, or any multimodal workflow where speech is an input or output modality. It is a distractor when the scenario is purely text-based LLM serving — that would be NIM or Triton.

## Numbers, defaults, knobs you should recognize

- ASR: automatic speech recognition
- TTS: text-to-speech
- Streaming audio latency
- Language/accent/domain vocabulary adaptation

## Example exam-style scenario

> A support center wants a low-latency voice assistant that transcribes calls and speaks responses. Which NVIDIA service family is most directly relevant?
>
> **Answer**: Riva — NVIDIA's speech AI stack for ASR/TTS style workloads.

## Mock signals

- Riva is an **audio/speech specialization**. If the scenario is plain text LLM serving, Riva is a distractor.

<!-- STUDY_ENRICHMENT_START -->
## Study card data
- **Lifecycle:** Multimodal / speech application layer
- **Relevant exams:** GenAI LLMs, Agentic AI
- **What it is:** Containerized microservice + gRPC SDK — GPU-accelerated speech AI (ASR, TTS, translation)
- **Use it when:** Use when the scenario involves speech recognition, text-to-speech, translation, voice assistants, or streaming call-center audio.
- **Do not use it when:** Choose the neighboring service for text-only LLM serving, LLM fine-tuning, or RAG retrieval.
- **Common trap:** Choosing Riva for generic text generation because it is a model-serving product; Riva owns speech/audio workflows.
- **Recognition clues:** A voice assistant or call-center workflow needs streaming ASR, TTS, translation, or speech processing on NVIDIA GPUs.
### Study notes
- Place **Riva** at **Multimodal / speech application layer**: deploy a speech AI Docker container, call gRPC methods to transcribe audio or generate speech — the audio equivalent of NIM for text.
- Boundary cue: choose it when the scenario involves speech recognition, text-to-speech, translation, voice assistants, or streaming call-center audio. Adjacent-service cue: not for text-only LLM serving, LLM fine-tuning, or RAG retrieval.
### Must know
- **ASR architectures (CTC vs RNN-T)**: CTC-based (Citrinet, QuartzNet) with simpler decoder for faster streaming; RNN-T with prediction+joint network for higher accuracy on noisy audio; both use Conformer encoder (convolution + self-attention)
- **TTS pipeline (FastPitch + HiFi-GAN)**: text-to-spectrogram via FastPitch with explicit pitch/duration control; vocoder via HiFi-GAN converts spectrogram to raw audio; can generate 100+ seconds of audio per second of GPU time on A100
- **Streaming ASR and VAD**: outputs partial transcripts incrementally as audio arrives; GPU-accelerated voice activity detection reduces processing on non-speech segments
- **Real-time voice agent pipeline**: Riva ASR → LLM/Agent → Riva TTS; combined latency must stay under ~300ms for natural conversation
- **Riva vs cloud speech APIs**: self-hosted on NVIDIA GPUs with predictable latency and no per-call costs; supports domain adaptation (fine-tuning ASR on domain audio) and custom vocabulary injection for rare terms
### What to recognize
- **Speech-to-text or text-to-speech scenario** → scenario involves transcribing audio, generating speech, or building a voice assistant; Riva is NVIDIA's speech AI framework for ASR and TTS
- **Real-time voice agent pipeline** → scenario describes a voice-enabled agent where a user speaks, the system processes the audio through an LLM, and speaks back; Riva provides the ASR and TTS stages with streaming capability for <300ms latency
- **CTC vs RNN-T for streaming** → scenario about ASR latency/accuracy tradeoff: CTC (Citrinet/QuartzNet) for lower-latency streaming, RNN-T for better accuracy on noisy audio
- **Riva vs text LLM serving trap** → scenario about purely text-based LLM serving with Riva as a distractor; Riva handles speech/audio modality, NIM or Triton handles text LLM serving
- **Self-hosted speech AI for privacy** → scenario requiring on-premises speech processing for data privacy or predictable latency; Riva runs on own NVIDIA GPUs unlike cloud speech APIs with per-second pricing
### Hands-on checks
- Write one scenario where **Riva** is correct and one scenario where it is a tempting but wrong distractor.
## Exam tips from mocks
- Mock-style questions test whether **Riva** matches **Multimodal / speech application layer**, not whether the product name sounds familiar.
- Boundary cue: choose it when the scenario involves speech recognition, text-to-speech, translation, voice assistants, or streaming call-center audio.
- Adjacent-service cue: not for text-only LLM serving, LLM fine-tuning, or RAG retrieval.
- The common trap pattern is: Choosing Riva for generic text generation because it is a model-serving product; Riva owns speech/audio workflows.
- If it appears only as a distractor, decide by the required lifecycle phase before choosing a product name.
- Do not memorize question wording. Memorize the role boundary, the failure mode it solves, and the cases where it is the wrong tool.
<details>
<summary>Mock question links (click to expand)</summary>

- No direct mock references found for this file yet.

</details>

## Concept boundary

This page should stay product-specific: what the NVIDIA component is, where it sits in the NVIDIA stack, how to choose it on an NVIDIA exam, and which neighboring NVIDIA services are common distractors. Portable algorithms, lifecycle patterns, and vendor-neutral architecture belong in the Agentic AI General Study pages, with this NVIDIA service referenced as one implementation example.

<!-- STUDY_ENRICHMENT_END -->
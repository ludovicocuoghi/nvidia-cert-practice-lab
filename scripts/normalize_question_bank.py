#!/usr/bin/env python3
"""Normalize imported NVIDIA question markdown for the React exam loader.

The app loader expects:

### Q1: Question text
- ID: some-id
- Domain: Official NCP-GENL domain
- A. Choice
- B. Choice
- Answer: A
- Explanation: Explanation text

This script converts the user-provided `genai_llms_nvidia_questions_1.md`
format into that loader format.
"""

from __future__ import annotations

import argparse
import re
import shutil
from dataclasses import dataclass
from pathlib import Path


BLUEPRINT = [
    ("LLM Architecture", 6),
    ("Prompt Engineering", 13),
    ("Data Preparation", 9),
    ("Model Optimization", 17),
    ("Fine-Tuning", 13),
    ("Evaluation", 7),
    ("GPU Acceleration and Optimization", 14),
    ("Model Deployment", 9),
    ("Production Monitoring and Reliability", 7),
    ("Safety, Ethics, and Compliance", 5),
]

DOMAIN_MAP = {
    "AI, ML, Deep Learning, and Infrastructure": "GPU Acceleration and Optimization",
    "Generative AI and Foundation Models": "LLM Architecture",
    "Transformers, Tokenization, and Attention": "LLM Architecture",
    "Model Selection and Evaluation": "Evaluation",
    "Prompt Engineering, RAG, and Customization": "Prompt Engineering",
    "Data Preparation, Training, Deployment, ONNX, and Quantization": "Data Preparation",
    "NVIDIA Ecosystem": "Model Deployment",
    "Responsible AI, Security, and Trustworthy AI": "Safety, Ethics, and Compliance",
    "Neural Networks and Training Concepts": "Fine-Tuning",
    "NLP, Diffusion, Hugging Face, and Application Development": "LLM Architecture",
}

KEYWORD_DOMAIN_RULES = [
    ("Safety, Ethics, and Compliance", re.compile(r"\b(bias|fairness|guardrail|security|privacy|responsible|trustworthy|prompt injection)\b", re.I)),
    ("Production Monitoring and Reliability", re.compile(r"\b(monitor|logging|logs|anomal|drift|uptime|retrain|version)\b", re.I)),
    ("Model Deployment", re.compile(r"\b(deploy|deployment|triton|nim|ngc|docker|kubernetes|onnx|inference server|serving)\b", re.I)),
    ("GPU Acceleration and Optimization", re.compile(r"\b(gpu|cuda|parallel|tensor core|distributed|memory pooling|networking|nsight)\b", re.I)),
    ("Model Optimization", re.compile(r"\b(quantization|quantize|pruning|distillation|tensorrt|latency|throughput|batching|optimization|optimize)\b", re.I)),
    ("Fine-Tuning", re.compile(r"\b(fine-tun|lora|adapter|training|epoch|gradient|overfit|backpropagation|loss)\b", re.I)),
    ("Evaluation", re.compile(r"\b(metric|accuracy|precision|recall|f1|evaluate|evaluation|perplexity|rouge|bleu|a/b)\b", re.I)),
    ("Prompt Engineering", re.compile(r"\b(prompt|rag|retrieval|few-shot|zero-shot|chain-of-thought|temperature|hallucination)\b", re.I)),
    ("Data Preparation", re.compile(r"\b(data|dataset|tokeniz|vocabulary|clean|eda|feature|imbalance|missing)\b", re.I)),
]


@dataclass
class Question:
    original_id: str
    source_domain: str
    question: str
    choices: list[str]
    answer: str
    explanation: str


def clean_inline(text: str) -> str:
    return re.sub(r"\s+", " ", text.replace("**", "").strip().rstrip()).strip()


def parse_source(markdown: str) -> list[Question]:
    current_domain = "Uncategorized"
    questions: list[Question] = []
    current: dict[str, object] | None = None
    explanation_parts: list[str] = []

    def finish_current() -> None:
        nonlocal current, explanation_parts
        if not current:
            return
        current["explanation"] = clean_inline(" ".join(explanation_parts))
        required = ["original_id", "source_domain", "question", "choices", "answer", "explanation"]
        missing = [field for field in required if not current.get(field)]
        if missing:
            raise ValueError(f"Question {current.get('original_id', '?')} missing: {', '.join(missing)}")
        questions.append(Question(**current))  # type: ignore[arg-type]
        current = None
        explanation_parts = []

    for raw_line in markdown.splitlines():
        line = raw_line.strip()
        if not line or line == "---":
            continue

        domain_match = re.match(r"^## Domain \d+:\s*(.+)$", line)
        if domain_match:
            finish_current()
            current_domain = clean_inline(domain_match.group(1))
            continue

        q_match = re.match(r"^### Q(\d+)[\.:]\s*(.+)$", line)
        if q_match:
            finish_current()
            current = {
                "original_id": q_match.group(1),
                "source_domain": current_domain,
                "question": clean_inline(q_match.group(2)),
                "choices": [],
                "answer": "",
                "explanation": "",
            }
            continue

        if not current:
            continue

        choice_match = re.match(r"^([A-F])[\.)]\s*(.+?)\s*$", line)
        if choice_match:
            current["choices"].append(clean_inline(choice_match.group(2)))  # type: ignore[index, union-attr]
            continue

        answer_match = re.match(r"^\*\*Answer:\*\*\s*([A-F])", line, re.I)
        if answer_match:
            current["answer"] = answer_match.group(1).upper()
            continue

        explanation_match = re.match(r"^\*\*Explanation:\*\*\s*(.*)$", line, re.I)
        if explanation_match:
            explanation_parts.append(clean_inline(explanation_match.group(1)))
            continue

        if explanation_parts:
            explanation_parts.append(clean_inline(line))

    finish_current()
    return questions


def infer_domain(question: Question) -> str:
    default = DOMAIN_MAP.get(question.source_domain, "LLM Architecture")
    text = f"{question.question} {question.explanation}"
    for domain, pattern in KEYWORD_DOMAIN_RULES:
        if pattern.search(text):
            return domain
    return default


def emit_loader_markdown(questions: list[Question], title: str) -> str:
    lines = [
        "# NVIDIA-Certified Professional Generative AI LLMs Practice Questions",
        "",
        f"> Normalized from `{title}`. Original practice material, not real exam questions or exam dumps.",
        "",
        "## Exam Metadata",
        "",
        "- Name: NVIDIA-Certified Professional Generative AI LLMs",
        "- Code: NCP-GENL",
        "- Duration Minutes: 120",
        "- Question Range: 60-70",
        "- Level: Professional",
        "- Source: https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-professional/",
        "",
        "## Blueprint Domains",
        "",
    ]

    for domain, weight in BLUEPRINT:
        lines.append(f"- {domain}: {weight}%")

    lines.extend(["", "## Questions", ""])

    for index, question in enumerate(questions, start=1):
        domain = infer_domain(question)
        lines.append(f"### Q{index}: {question.question}")
        lines.append(f"- ID: imported-{int(question.original_id):03d}")
        lines.append(f"- Domain: {domain}")
        for choice_index, choice in enumerate(question.choices):
            letter = chr(65 + choice_index)
            lines.append(f"- {letter}. {choice}")
        lines.append(f"- Answer: {question.answer}")
        lines.append(f"- Explanation: {question.explanation}")
        lines.append(f"- Source Domain: {question.source_domain}")
        lines.append("")

    return "\n".join(lines)


def main() -> None:
    parser = argparse.ArgumentParser(description="Normalize a markdown question bank for the React exam loader.")
    parser.add_argument("source", nargs="?", default="genai_llms_nvidia_questions_1.md")
    parser.add_argument("-o", "--output", default="data/questions.md")
    parser.add_argument("--backup", default="data/questions.before-import.md")
    args = parser.parse_args()

    source_path = Path(args.source)
    output_path = Path(args.output)
    backup_path = Path(args.backup)

    markdown = source_path.read_text(encoding="utf-8")
    questions = parse_source(markdown)
    if not questions:
        raise SystemExit("No questions found.")

    if output_path.exists() and backup_path:
        final_backup_path = backup_path
        if final_backup_path.exists():
            index = 1
            while backup_path.with_suffix(f"{backup_path.suffix}.{index}").exists():
                index += 1
            final_backup_path = backup_path.with_suffix(f"{backup_path.suffix}.{index}")
        shutil.copyfile(output_path, final_backup_path)
    else:
        final_backup_path = None

    normalized = emit_loader_markdown(questions, source_path.name)
    output_path.write_text(normalized, encoding="utf-8")
    print(f"Converted {len(questions)} questions -> {output_path}")
    if final_backup_path:
        print(f"Previous output backed up -> {final_backup_path}")


if __name__ == "__main__":
    main()

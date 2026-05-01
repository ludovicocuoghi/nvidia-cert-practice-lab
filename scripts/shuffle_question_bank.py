#!/usr/bin/env python3
"""Shuffle question-bank markdown and mock question-id JSON safely.

For markdown banks, this script shuffles:
- question block order
- answer choice order inside every question

It also updates:
- Q numbering
- Answer: <letter>
- Why <letter> is wrong labels

For mock JSON files, it shuffles only `questionIds`.
"""

from __future__ import annotations

import argparse
import json
import random
import re
import shutil
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable


CHOICE_RE = re.compile(r"^- ([A-F])\.\s*(.+)$")
ANSWER_RE = re.compile(r"^- Answer:\s*([A-F])\s*$", re.I)
WHY_RE = re.compile(r"^- Why ([A-F]) is wrong:\s*(.+)$", re.I)
QUESTION_RE = re.compile(r"^### Q\d+:\s*(.+)$")


@dataclass
class QuestionBlock:
    stem: str
    lines: list[str]
    choices: list[tuple[str, str]]
    answer: str
    why_wrong: dict[str, str]


def next_backup_path(path: Path) -> Path:
    candidate = path.with_suffix(f"{path.suffix}.bak")
    index = 1
    while candidate.exists():
        candidate = path.with_suffix(f"{path.suffix}.bak.{index}")
        index += 1
    return candidate


def split_markdown(markdown: str) -> tuple[str, list[str]]:
    marker = re.search(r"^## Questions\s*$", markdown, re.M)
    if not marker:
        raise ValueError("Missing '## Questions' section")
    header = markdown[: marker.end()].rstrip() + "\n\n"
    body = markdown[marker.end() :].strip()
    blocks = [block.strip() for block in re.split(r"\n(?=###\s*Q\d+:)", body) if block.strip()]
    return header, blocks


def parse_block(block: str) -> QuestionBlock:
    raw_lines = block.splitlines()
    if not raw_lines:
        raise ValueError("Empty question block")
    title_match = QUESTION_RE.match(raw_lines[0].strip())
    if not title_match:
        raise ValueError(f"Invalid question title: {raw_lines[0]}")

    choices: list[tuple[str, str]] = []
    answer = ""
    why_wrong: dict[str, str] = {}
    passthrough: list[str] = []

    for line in raw_lines[1:]:
      stripped = line.strip()
      choice_match = CHOICE_RE.match(stripped)
      answer_match = ANSWER_RE.match(stripped)
      why_match = WHY_RE.match(stripped)

      if choice_match:
          choices.append((choice_match.group(1).upper(), choice_match.group(2).strip()))
      elif answer_match:
          answer = answer_match.group(1).upper()
      elif why_match:
          why_wrong[why_match.group(1).upper()] = why_match.group(2).strip()
      else:
          passthrough.append(line.rstrip())

    if not choices:
        raise ValueError(f"Question has no choices: {raw_lines[0]}")
    if answer not in {letter for letter, _ in choices}:
        raise ValueError(f"Answer {answer or '?'} does not match choices in: {raw_lines[0]}")

    return QuestionBlock(
        stem=title_match.group(1).strip(),
        lines=passthrough,
        choices=choices,
        answer=answer,
        why_wrong=why_wrong,
    )


def emit_block(block: QuestionBlock, number: int, rng: random.Random) -> str:
    order = list(range(len(block.choices)))
    rng.shuffle(order)
    old_letters = [letter for letter, _ in block.choices]
    new_letter_for_old = {
        old_letters[old_index]: chr(65 + new_index)
        for new_index, old_index in enumerate(order)
    }
    answer = new_letter_for_old[block.answer]

    lines = [f"### Q{number}: {block.stem}", *block.lines]
    for new_index, old_index in enumerate(order):
        lines.append(f"- {chr(65 + new_index)}. {block.choices[old_index][1]}")
    lines.append(f"- Answer: {answer}")

    for old_letter in old_letters:
        if old_letter == block.answer:
            continue
        reason = block.why_wrong.get(old_letter)
        if reason:
            lines.append(f"- Why {new_letter_for_old[old_letter]} is wrong: {reason}")

    return "\n".join(lines)


def shuffled_markdown(markdown: str, rng: random.Random) -> str:
    header, raw_blocks = split_markdown(markdown)
    blocks = [parse_block(block) for block in raw_blocks]
    rng.shuffle(blocks)
    rendered = [emit_block(block, index, rng) for index, block in enumerate(blocks, start=1)]
    return header + "\n\n".join(rendered) + "\n"


def shuffled_json(raw: str, rng: random.Random) -> str:
    data = json.loads(raw)
    if not isinstance(data.get("questionIds"), list):
        raise ValueError("JSON file does not contain a questionIds array")
    rng.shuffle(data["questionIds"])
    return json.dumps(data, indent=2) + "\n"


def shuffle_path(path: Path, *, rng: random.Random, output: Path | None, in_place: bool, backup: bool) -> Path:
    raw = path.read_text(encoding="utf-8")
    if path.suffix.lower() == ".md":
        shuffled = shuffled_markdown(raw, rng)
    elif path.suffix.lower() == ".json":
        shuffled = shuffled_json(raw, rng)
    else:
        raise ValueError(f"Unsupported file type: {path}")

    target = output or path
    if target == path and not in_place:
        raise ValueError(f"Refusing to overwrite {path}; pass --in-place or --output")
    if target == path and backup:
        shutil.copyfile(path, next_backup_path(path))
    target.write_text(shuffled, encoding="utf-8")
    return target


def expand_inputs(paths: Iterable[str]) -> list[Path]:
    expanded: list[Path] = []
    for raw in paths:
        path = Path(raw)
        if path.is_dir():
            expanded.extend(sorted(path.glob("*.md")))
            expanded.extend(sorted(path.glob("*.json")))
        else:
            expanded.append(path)
    return expanded


def main() -> None:
    parser = argparse.ArgumentParser(description="Shuffle question order and answer choices safely.")
    parser.add_argument("paths", nargs="+", help="Question-bank .md files, mock .json files, or folders containing them")
    parser.add_argument("-o", "--output", help="Output path; only valid with one input file")
    parser.add_argument("--in-place", action="store_true", help="Overwrite input files")
    parser.add_argument("--no-backup", action="store_true", help="Do not create .bak files when using --in-place")
    parser.add_argument("--seed", type=int, help="Optional deterministic seed for reproducible shuffles")
    args = parser.parse_args()

    paths = expand_inputs(args.paths)
    if not paths:
        raise SystemExit("No input files found.")
    if args.output and len(paths) != 1:
        raise SystemExit("--output can only be used with one input file.")

    rng = random.Random(args.seed)
    for path in paths:
        target = Path(args.output) if args.output else None
        written = shuffle_path(path, rng=rng, output=target, in_place=args.in_place, backup=not args.no_backup)
        print(f"Shuffled {path} -> {written}")


if __name__ == "__main__":
    main()

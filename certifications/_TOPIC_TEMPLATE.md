---
domain: <Blueprint domain name from blueprint.json>
weight: <0-100, exam %>
status: stub
---

# <Topic name>

> One-paragraph plain-English summary of the topic and why the exam tests it. Pretend you are explaining it to a senior engineer who has never opened the NVIDIA stack.

## Core ideas you must hold in your head

- <Idea 1 — short, falsifiable, the kind of thing the exam will twist a wrong-answer around>
- <Idea 2>
- <Idea 3>

## Mental model

<2-4 sentences. Where does this topic sit in the LLM lifecycle / agent loop / inference path? What problem does it solve and what problem does it NOT solve? Use this to disqualify wrong answers fast.>

## NVIDIA tools that map to this topic

| Tool | When it is the right answer | When it is a trap |
| ---- | --------------------------- | ----------------- |
| <e.g. NeMo Framework> | <SFT / PEFT / continued pretraining> | <NIM-style serving> |
| <…> | <…> | <…> |

## Common exam traps

1. <Trap — and why the obvious answer is wrong>
2. <Trap>
3. <Trap>

## Numbers / thresholds worth knowing

- <e.g. AWQ 4-bit weight + FP16 activations recovers most throughput>
- <e.g. KV-cache memory ≈ 2 · n_layers · n_heads · head_dim · seq · batch · bytes>
- <e.g. SmoothQuant α typically 0.5–0.85>

## Hands-on checks

- <Command, config snippet, or repo to clone>
- <Question to be able to answer in your own words>

## Related topics in this cert

- [<other-topic.md>](other-topic.md)

## Source pointers

- <NVIDIA doc URL or "see ../reference/...">
- <Paper / blog>

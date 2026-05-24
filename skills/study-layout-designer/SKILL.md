---
name: study-layout-designer
description: Compact study UI and knowledge-page design guidance for this NVIDIA certification app. Use when Codex edits React/CSS study pages, certification chapters, service pages, platform maps, dashboards, study cards, or layouts that need to be scannable at a glance, memorable, dense without feeling cramped, visually patterned, golden-ratio balanced, and restrained with color.
---

# Study Layout Designer

## Purpose

Use this skill before changing study-page layout, visual hierarchy, or knowledge presentation in the NVIDIA certification app. The goal is a page that reads like a useful book but scans like a cockpit: **you should understand the map at a glance, then drill into text only where depth matters.**

## Core Principle

Design for fast memory formation:

- **Shape first:** repeated layout patterns teach the eye where to look.
- **Text second:** long explanations belong in detail panes, accordions, or deep sections, not in wide shallow rows.
- **Color last:** color should mark state, importance, danger, or navigation. If everything is colored, nothing is memorable.

## Layout Rules

Use golden-ratio proportions when the screen has room:

- Main two-column learning view: **62% detail / 38% navigation or support**.
- Dense navigator beside content: **38% rail / 62% reading pane** when the rail contains many links.
- Card grids: prefer **2 columns** with balanced content, or **1 large + 2 small** only when the large item truly has more substance.
- Avoid full-width rows for shallow text. If a row has only a title, short summary, badge, or one sentence, make it a rail item, compact card, table row, chip group, or side note.

Use full width only for:

- Dense tables with many columns.
- Diagrams, plots, timelines, flow maps, or comparison matrices.
- Long prose sections that have real paragraph depth.
- Hero/title areas when they establish context.

## Density Rules

Keep pages compact without turning them into noise:

- Remove large empty card areas. Do not let one card span multiple rows unless its content justifies the height.
- Prefer side-by-side map/detail layouts over "long list first, information below."
- Keep navigation rows tight: number, title, one category/status badge. Hide summaries and chips when they make the rail bulky.
- Keep bullets close to their heading. Do not create big vertical gaps between shallow sections.
- Put related facts together: recognition clue, mental model, decision trap; key ideas, must know, traps, related terms.

## Reading Width

Prevent shallow text from stretching across the page:

- Short labels and one-sentence facts should live in narrow columns, chips, compact cards, or definition rows.
- Paragraphs should target roughly **55-75 characters per line**.
- If a sentence becomes a lonely full-width band, pair it with a label column, icon, formula/code snippet, or adjacent "why it matters" fact.
- Deep explanations can be wider, but split them with headings, callouts, code, formulas, diagrams, or examples.

## Visual Patterns

Reuse a small set of recognizable patterns so the user remembers the page:

- **Number pills** for sequence and exam order.
- **Left accent rail** for selected state or category identity.
- **Chips** for terms, products, models, and short taxonomies.
- **Two-column cards** for "know this / avoid this" or "concept / boundary."
- **Definition rows** for clue, mental model, trap, formula, code, or command.
- **Flow strips** for lifecycle: input -> tool -> output -> exam clue.
- **Small plots or diagrams** when relationships matter more than prose.

Do not invent a new visual pattern for every section. Memory comes from repetition.

## Color Rules

Use color sparingly and deliberately:

- Start with neutral surfaces, borders, and typography.
- Use one dominant accent per region.
- Reserve strong color for active state, warning/trap, important category, or selected path.
- Do not tint every card. One accented card among neutral cards is impact; all accented cards are noise.
- Prefer border, left rail, badge, or small fill over large colored backgrounds.

## Typography Rules

Make hierarchy obvious:

- Big type is for page titles, not compact cards or side rails.
- Use bold for **exam-critical terms**, product names, formulas, commands, and decision boundaries.
- Keep badge text short. If a badge wraps, it is probably not a badge.
- Use monospace for commands, APIs, formulas, paths, model names when precision matters.

## Study Content Pattern

For NVIDIA study pages, prefer this order:

1. **Map or chapter rail** on the side.
2. **Selected title + one clear summary** in the detail pane.
3. **Recognition clue / key mental model / decision trap** near the top.
4. **Key ideas / must know / traps / related terms** as balanced cards.
5. **Deep notes, code, formulas, plots, or diagrams** below or inside expandable sections.

The first viewport should answer:

- What am I studying?
- Where am I in the map?
- What is the exam clue?
- What trap should I avoid?

## Implementation Checklist

Before editing:

- Identify which content is navigation, which is summary, and which is deep study text.
- Choose a repeatable pattern instead of adding one-off cards.
- Decide where the golden-ratio split belongs: nav/detail, map/detail, or concept/evidence.

After editing:

- Verify no horizontal overflow.
- Verify shallow text does not span a long full-width container.
- Verify selected state is visible without coloring the whole page.
- Verify the first viewport communicates the page structure.
- Verify no card has obvious blank space caused by forced spanning or fixed height.
- Verify desktop and mobile layouts both remain understandable.

## Browser Verification

For local frontend changes, open the affected page and inspect the rendered layout:

- Check `document.documentElement.scrollWidth <= window.innerWidth + 2`.
- Check major grid columns have sane proportions, roughly 38/62 or 62/38 when applicable.
- Check compact rows stay compact; if nav rows exceed about 90px, remove summaries/chips or reduce content.
- Take a screenshot when the change is visual enough that code review alone cannot prove it.

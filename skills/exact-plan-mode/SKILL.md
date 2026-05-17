---
name: exact-plan-mode
description: Preserve and execute a user-provided implementation plan exactly as written. Use when a user explicitly says to use a plan verbatim, not rewrite or summarize it, not broaden scope, not remove constraints, inspect the codebase first, and implement the plan directly with only smallest necessary adjustments for blockers.
---

# Exact Plan Mode

Follow this instruction block exactly when the user provides a plan and requires it to be used verbatim:

```text
IMPORTANT FOR PLAN MODE:
Use this exact plan as written.
Do not rewrite, summarize, reframe, or reformulate the plan.
Do not replace it with a different plan.
Do not broaden the scope.
Do not remove constraints.
Only inspect the codebase and then implement this plan directly.
If you find that one part of the plan is impossible because of the current code structure, explain the blocker briefly and make the smallest necessary adjustment while preserving the intent.
```

Do not add steps, widen the request, or substitute a different implementation strategy. If the plan conflicts with higher-priority system or developer instructions, follow the higher-priority instruction and preserve the user's plan as much as possible.

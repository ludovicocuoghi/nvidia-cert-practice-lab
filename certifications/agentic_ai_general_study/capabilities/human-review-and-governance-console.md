---
capability: Human Review and Governance Console
status: populated
source_lens: general-study
---

# Human Review and Governance Console

## Actual implementation / How you use it

```yaml
review_item:
  risk_tier: approval_required
  evidence: [user_intent, retrieved_sources, tool_plan, proposed_answer]
  versions: [model, prompt, policy, retrieval_index, tool_schema]
  reviewer_actions: [approve, edit, reject, escalate, create_eval_case]
```

| Input | Console owns | Output |
|---|---|---|
| Risky action or sampled production case | Review context, decision, reason, SLA, audit trail | Approval/rejection and feedback for evals, policy, prompts, or data |

## What to study first

- **Core idea:** You are building the oversight workspace where humans approve, review, sample, escalate, label, audit, and feed back into improvement loops.
- **Study first:** Classify actions by risk: auto-allow, sample review, approval required, block.
- Define reviewer queue, SLA, rubric, evidence, and escalation path.
- Capture model output, retrieval evidence, tool proposal, policy version, and trace.
- Record human decision and reason.
- Feed labels and incidents into evaluation, tuning, prompt changes, or policy updates.

## What You Are Building

You are building the oversight workspace where humans approve, review, sample, escalate, label, audit, and feed back into improvement loops.

## Lifecycle Lane Playbooks

| Lane | What this page means there | Output |
|---|---|---|
| Train model from zero | Review release evidence for the trained checkpoint and approve publication if risk thresholds pass. | Governance approval for new model |
| Fine-tune existing model | Approve adapter/tuned model release and review risky tuning data or regressions. | Adapter release decision |
| Use existing model/API | Review high-risk outputs/actions and approve model/API rollout where required. | Human approval or sampled QA |
| Build agent/RAG application | Main lane for risky tool actions, ambiguous answers, regulated cases, and review queues. | Review decisions with evidence |
| Operate, govern, and improve | Main lane: sample production, resolve escalations, curate feedback, and audit decisions. | Feedback and audit loop |

## Pipeline

1. Classify actions by risk: auto-allow, sample review, approval required, block.
2. Define reviewer queue, SLA, rubric, evidence, and escalation path.
3. Capture model output, retrieval evidence, tool proposal, policy version, and trace.
4. Record human decision and reason.
5. Feed labels and incidents into evaluation, tuning, prompt changes, or policy updates.
6. Audit reviewer load, consistency, and coverage.

## Core Concepts

- Human-in-the-loop means approval before selected actions.
- Human-on-the-loop means monitoring and intervention while automation runs.
- Review should be risk-based, not universal.
- Reviewer feedback is training/eval data only after curation.
- Audit evidence needs versions and trace context.
- Governance connects policy, evals, registry approvals, rollout gates, reviewer decisions, and incident response.
- Human review should show evidence, model/tool proposal, policy version, risk tier, and trace, not just the final answer.
- Reviewer labels can improve prompts, retrieval, guardrails, evals, or tuning, but only after dedupe, privacy review, and holdout protection.

## Decision Guide

| If the scenario says... | Think... | Avoid... |
|---|---|---|
| "high-risk action" | approval gate | auto-execute |
| "review overload" | risk sampling and prioritization | review everything |
| "policy dispute" | audit trail and human decision reason | chat logs only |
| "improve from feedback" | curated labels/evals | raw free text |
| "escalate uncertain answer" | human review queue | forced answer |
| "sample low-risk outputs" | human-on-the-loop QA | approval for every answer |
| "high-impact tool action" | approval-required workflow | model self-approval |
| "release model to production" | governance gate with eval/report/rollback | endpoint deploy only |

## Common Traps

| Trap | Correct mental model |
|---|---|
| Human review solves bad design | It should gate risk, not compensate for broken retrieval/tools. |
| Review everything | This overloads humans and hides high-risk work. |
| Feedback is immediately training data | It needs curation, consent, and eval design. |
| Human approval replaces guardrails | Approval is one outcome in a layered safety/governance design. |
| Audit means saving chat text | Audit needs versions, evidence, policy, actor, decision, and trace context. |

## Platform Examples

| Platform | Example | What it illustrates |
|---|---|---|
| Labeling tools | Label Studio, Argilla | Human labels and review workflows. |
| Eval platforms | human evaluation queues | Rubric-based scoring. |
| Internal console | approval and escalation UI | Governance, audit, and risk routing. |
| NVIDIA-adjacent | NeMo Evaluator / Guardrails outputs | Evidence and policy signals surfaced for review and regression. |

## Deep Dive

### Where it sits in the lifecycle

Human review is the **risk governance and escalation layer**. It routes human attention to decisions where judgment changes risk.

```text
[Agent decision/tool/output] -> [Risk tier] -> [Auto-allow | sample | approve | block]
        -> [Reviewer decision] -> [Audit + eval/training feedback candidate]
```

### HITL vs HOTL

| Pattern | Meaning | Best fit |
|---|---|---|
| Human-in-the-loop | Blocks selected actions until approval | High-impact, irreversible, regulated actions |
| Human-on-the-loop | Monitors automation through sampling/alerts | Lower-risk flows and quality surveillance |
| Escalation | Routes uncertain or policy-conflicted cases | Insufficient evidence or ambiguous risk |
| Sampling | Reviews a slice of traffic | Drift and label-quality monitoring |

### Reviewer card contents

A useful console should show:

- User request, model output, retrieved sources, citations, and tool proposal.
- Tool risk tier, policy/guardrail decision, and approval reason.
- Model, prompt, retrieval index, route, and guardrail versions.
- Prior trace, similar incidents, reviewer rubric, and audit metadata.

Without that context, review becomes subjective and hard to reproduce.

### Feedback loop

Reviewer labels can become eval cases, prompt improvements, retrieval fixes, tool-policy changes, or tuning examples. They should not automatically enter training data because they may contain PII, policy disputes, inconsistent labels, or protected holdout cases.

### Risk-tier design

| Tier | Typical action | Example |
|---|---|---|
| Auto-allow | Execute or answer without review | Low-risk FAQ answer with cited policy |
| Sample review | Allow, then review a slice | Routine support summaries for drift monitoring |
| Approval-required | Block until human decision | Refund, loan decision, medical escalation, account deletion |
| Escalate | Route to specialist or policy owner | Conflicting evidence or ambiguous regulated case |
| Block | Do not execute or answer as requested | Forbidden action or missing authorization |

The review card should show the evidence needed to decide, not just the model's prose. Include the proposed action, risk reason, retrieved sources, tool arguments, prior trace, policy version, model/prompt version, and reviewer decision options.

### Implementation card: risk routing

```python
def risk_tier(event):
    if not event.authorized:
        return "block"
    if event.action in {"delete_account", "large_refund", "medical_advice"}:
        return "approval_required"
    if event.confidence < 0.70 or event.policy_conflict:
        return "escalate"
    if event.action in {"routine_summary", "low_risk_answer"}:
        return "sample_review"
    return "auto_allow"

def route_for_review(event):
    tier = risk_tier(event)
    audit_log.write(event=event, tier=tier, versions=event.versions)
    if tier == "approval_required":
        return review_queue.create(event)
    if tier == "sample_review" and random_sample(rate=0.05):
        return qa_queue.create(event)
    return tier
```

Governance metrics include approval rate, reviewer agreement, escalation rate, SLA breach rate, false block/allow rate, label quality, and how often reviewer feedback becomes eval cases or curated tuning data.

## Exam Signals

- "approval before action" -> human-in-the-loop.
- "monitoring automation" -> human-on-the-loop.
- "review overload" -> risk-based sampling.
- "audit decision" -> trace plus policy/model versions.
- "feedback loop" -> curated eval/training data.
- "human-in-the-loop" -> pre-action approval.
- "human-on-the-loop" -> monitoring/sampling/intervention.
- "reviewer labels" -> curation before eval or tuning.

## Hands-on Checks

1. Classify actions into auto-allow, sample-review, approval-required, and block.
2. Design a reviewer card with prompt, evidence, tool proposal, policy, and trace.
3. Explain how feedback becomes eval data without contaminating holdouts.

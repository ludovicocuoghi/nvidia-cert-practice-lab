---
domain: Human Oversight and Governance
weight: 8
status: populated
---

# Human Oversight and Governance

## Actual implementation / Pattern you use

```yaml
risk_tiers:
  auto_allow:
    when: low_risk_and_high_confidence
  sample_review:
    when: low_risk_but_needs_quality_monitoring
  approval_required:
    when: high_impact_action_or_low_confidence
  block:
    when: unauthorized_or_policy_forbidden

review_card:
  evidence: [user_intent, retrieved_sources, tool_plan, model_output]
  versions: [model, prompt, policy, tool_schema, retrieval_index]
  actions: [approve, edit, reject, escalate, create_eval_case]
```

| Governance object | Contains | Exam signal |
|---|---|---|
| Risk route | Auto, sampled review, approval, block | Reviewing everything is too slow; approving nothing is unsafe |
| Review queue | Evidence, trace, policy, action buttons | Humans need enough context to decide, not raw chat only |
| Audit record | Versions, reviewer, timestamp, decision reason | Regulated workflows need replayable evidence |
| Feedback loop | Labels, incidents, eval cases, policy updates | Feedback must improve prompts, tools, evals, or data |

## Exam coverage map

Use this page first for these NCP-AAI sections:

| NCP-AAI section | Why this page matters |
|---|---|
| Human-AI Interaction and Oversight | Covers HITL, human-on-the-loop, escalation, review queues, and approval gates. |
| Safety, Ethics, and Compliance | Explains why high-risk actions need pre-execution controls and audit trails. |
| Run, Monitor, and Maintain | Connects production review, incidents, and feedback to policy/eval updates. |
| Agent Architecture and Design | Shows when architecture should route to deterministic review instead of open autonomy. |

## What to study first

- **Core idea:** Risk-tiered approval, escalation, review queues, feedback loops, audit evidence, and governance operations.
- **Use it when:** The scenario mentions human-in-the-loop, human-on-the-loop, regulated actions, review overload, auditability, or reviewer feedback.
- **Study first:** Human-in-the-loop: blocks selected actions until a reviewer approves, rejects, edits, or escalates.
- Human-on-the-loop: lets automation proceed but samples, monitors, or interrupts when risk or drift appears.
- Risk tiers: usually map to auto-allow, sample-review, approval-required, and block. Reviewing every case is usually a design failure.
- Audit evidence: is more than chat text: it includes model, prompt, tool, retrieval index, policy, route, reviewer, timestamp, and decision reason.
- Reviewer feedback: becomes training or evaluation data only after privacy review, dedupe, label-quality checks, and holdout protection.
- **Real trap:** Reviewing everything manually or collecting feedback that never improves the system.

## Concept ownership

This is the vendor-neutral home for human approval, review queues, escalation, audit evidence, risk tiers, and feedback loops. Vendor pages should mention the workflow or service that implements review, but the reusable governance pattern belongs here.

## Study card data

- **What it covers:** Risk-tiered approval, escalation, review queues, feedback loops, audit evidence, and governance operations.
- **Lifecycle:** Governance
- **Use this section when:** The scenario mentions human-in-the-loop, human-on-the-loop, regulated actions, review overload, auditability, or reviewer feedback.
- **Common trap:** Reviewing everything manually or collecting feedback that never improves the system.
- **Recognition clues:** High-risk actions require approval; low-risk outputs are sampled for review.

### Key ideas

- **Human-in-the-loop**: approval before selected actions.
- **Human-on-the-loop**: monitoring and intervention while automation usually proceeds.
- **Risk tiers** decide auto-allow, sample-review, approval-required, or block.
- **Audit evidence** includes prompt/model/tool/retrieval/policy versions and human decisions.
- **Feedback loops** turn reviewer labels into eval cases, policy updates, and training data.

### Must know

- **Human-in-the-loop** blocks selected actions until a reviewer approves, rejects, edits, or escalates.
- **Human-on-the-loop** lets automation proceed but samples, monitors, or interrupts when risk or drift appears.
- **Risk tiers** usually map to auto-allow, sample-review, approval-required, and block. Reviewing every case is usually a design failure.
- **Audit evidence** is more than chat text: it includes model, prompt, tool, retrieval index, policy, route, reviewer, timestamp, and decision reason.
- **Reviewer feedback** becomes training or evaluation data only after privacy review, dedupe, label-quality checks, and holdout protection.

### Code anchor

```python
def oversight_action(risk, confidence, authorized):
    if not authorized:
        return "block"
    if risk == "high":
        return "approval_required"
    if confidence < 0.70:
        return "escalate"
    if risk == "low":
        return "sample_review"
    return "auto_allow"
```

Governance scorecards track approval precision, reviewer agreement, escalation rate, SLA, false allow/block, audit completeness, and feedback-to-eval conversion.

### Related services

| Capability | NVIDIA | AWS | Open source |
|---|---|---|---|
| Human eval | NeMo Evaluator patterns | Bedrock Evaluations with human workers | Label Studio, Argilla |
| Approval | Enterprise workflow apps | Lambda/Step Functions/user confirmation | Custom case queues |
| Audit | Trace + registry + review evidence | Cloud logs + registry + review records | OTEL + databases |

### Decision guide

| Scenario | Oversight pattern | Trap |
|---|---|---|
| High-risk mutation | Approval before action | Approval after success |
| Routine answer | Sample review | Review all |
| Ambiguous case | Escalation | Autonomous final decision |
| Review overload | Risk tiers | One queue for all |
| Governance proof | Audit trail | Final answer only |

### Deep dive: human oversight placement

| Situation | Oversight pattern | Why |
|---|---|---|
| Payment, legal, medical, hiring, deletion, or external write | Human-in-the-loop before action | Approval after execution cannot undo all harm |
| Routine answer quality monitoring | Human-on-the-loop sampled review | Keeps quality signal without blocking every user |
| Low confidence or missing evidence | Escalation | The right behavior is to ask for help, not guess |
| Repeated reviewer correction | Feedback-to-eval loop | Convert the pattern into regression cases before tuning |
| Audit request | Decision trace with versions | Final answer text is not enough evidence |

### Feedback data boundary

Reviewer notes are not automatically training data. Before using them for prompts, tuning, or evals, check privacy, consent, duplicates, label quality, holdout contamination, and whether the feedback belongs in a policy update instead of a model update.

### Hands-on checks

1. Classify actions into auto-allow, sample-review, approval-required, and block.
2. Design one review card with evidence, trace, policy, and action buttons.

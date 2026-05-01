---
service: Human Review Console
relevant_to: [AAI-GEN]
status: populated
---

# Human Review Console

## At a glance

| | |
|---|---|
| **What it is technically** | Reviewer workflow for approvals, escalations, sampled QA, feedback labels, issue triage, and audit evidence |
| **How you access it** | Case queues, moderation/review UIs, labeling tools, approval workflows, governance systems |
| **Input** | Risk score, proposed action, trace, retrieved evidence, model output, policy result, reviewer rubric |
| **Output** | Approved action, rejected action, escalation, label, correction, policy update, eval case |
| **Inside** | Risk tiers, assignment, SLA, reviewer rubric, audit log, feedback export, sampling strategy |

**Mental model**: humans review the right work at the right risk level, and their feedback improves the system.

## Study card data

- **What it is:** The governance layer for human judgment and feedback.
- **Lifecycle:** Human oversight
- **Relevant exams:** Agentic AI General Study
- **Use it when:** The scenario mentions approval, escalation, reviewer load, regulated actions, sampled QA, or audit evidence.
- **Do not use it when:** Every low-risk action can safely run automatically.
- **Common trap:** Collecting review comments that never become evals, policy fixes, or training data.
- **Scenario signal:** "Only high-risk refund decisions need approval; low-risk answers are sampled for QA."

## Related service map

| Vendor / stack | Related service | How it maps |
|---|---|---|
| NVIDIA | NeMo Evaluator human review patterns + enterprise review apps | Human scoring connected to evaluation/governance workflows. |
| AWS | Bedrock Evaluations with human workers / Augmented AI patterns | Human feedback and evaluation workflows. |
| Open source | Label Studio, Argilla, custom case queues | Reviewer workflows, labels, escalation, and audit evidence. |

## Portable concepts

Oversight is risk-tiered:

- Auto-allow low-risk work.
- Sample-review routine work.
- Approval-required for high-impact or sensitive actions.
- Escalate ambiguous cases.
- Block prohibited actions.

The review console must show enough context: user request, evidence, tool proposal, policy state, model output, and trace. It should also capture structured feedback, not only free text.

## Decision guide

| Requirement | Oversight pattern | Trap |
|---|---|---|
| High-risk mutation | Approval before action | Approval after mutation |
| Routine support answer | Sample review | Review everything |
| Ambiguous legal/medical issue | Escalation | Autonomous final decision |
| Drift detection | QA sampling | No labels |
| Governance evidence | Audit trail | Screenshot only |

## High-yield signals

- "Human-in-the-loop" -> approval before selected actions.
- "Human-on-the-loop" -> monitoring and intervention.
- "Review overload" -> risk-tiering.
- "Feedback loop" -> labels become evals/fixes.
- "Audit" -> trace plus reviewer decision.

## Hands-on checks

1. Classify actions into auto-allow, sample-review, approval-required, and block.
2. Design a review card with trace, evidence, policy, and action buttons.

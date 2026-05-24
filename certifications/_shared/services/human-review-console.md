---
service: Human Review Console
relevant_to: [AAI-GEN]
status: populated
---

# Human Review Console

## What to study first

- **Core idea:** The governance layer for human judgment and feedback.
- **Use it when:** The scenario mentions approval, escalation, reviewer load, regulated actions, sampled QA, or audit evidence.
- **Choose another path when:** Let low-risk actions run automatically or use sampled review when full approval would overload reviewers.
- **Concrete surface:** Access: Case queues, moderation/review UIs, labeling tools, approval workflows, governance systems Inside: Risk tiers, assignment, SLA, reviewer criteria, audit log, feedback export, sampling strategy I/O: Risk score, proposed action, trace, retrieved evidence, model output, policy result, reviewer criteria -> Approved action, rejected action, escalation, label, correction, policy update, eval case
- **Real trap:** Collecting review comments that never become evals, policy fixes, or training data.

## At a glance

| | |
|---|---|
| **What it is technically** | Reviewer workflow for approvals, escalations, sampled QA, feedback labels, issue triage, and audit evidence |
| **How you access it** | Case queues, moderation/review UIs, labeling tools, approval workflows, governance systems |
| **Input** | Risk score, proposed action, trace, retrieved evidence, model output, policy result, reviewer criteria |
| **Output** | Approved action, rejected action, escalation, label, correction, policy update, eval case |
| **Inside** | Risk tiers, assignment, SLA, reviewer criteria, audit log, feedback export, sampling strategy |

```yaml
review_case:
  risk: high
  proposed_action: issue_refund
  evidence: [trace_id, policy_result, retrieved_sources]
  required_decision: [approve, reject, escalate]
  exports_to: [eval_queue, policy_backlog]
```

**Mental model**: humans review the right work at the right risk level, and their feedback improves the system.

## Study card data

- **What it is:** The governance layer for human judgment and feedback.
- **Lifecycle:** Human oversight
- **Relevant exams:** Agentic AI General Study
- **Use it when:** The scenario mentions approval, escalation, reviewer load, regulated actions, sampled QA, or audit evidence.
- **Do not use it when:** Let low-risk actions run automatically or use sampled review when full approval would overload reviewers.
- **Common trap:** Collecting review comments that never become evals, policy fixes, or training data.
- **Recognition clues:** "Only high-risk refund decisions need approval; low-risk answers are sampled for QA."

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

## Chapter notes

The human review console is the **governance chapter**. It decides which work can run automatically, which work is sampled, which work requires approval, and which work must be blocked or escalated. Human oversight is not "add a person somewhere." It is a designed control with risk tiers, reviewer criteria, SLA, audit trail, and feedback routing.

```text
agent output/proposed action
  -> risk score
  -> auto allow | sample review | approval required | block
  -> reviewer decision
  -> audit record
  -> eval case / policy fix / training label
```

### Risk tier matrix

| Risk tier | Example | Review mode |
|---|---|---|
| Low | summarize public help article | auto allow with sampling |
| Medium | answer account question from allowed docs | sample review plus drift monitoring |
| High | refund, medical/legal/financial recommendation | approval before action |
| Prohibited | exfiltrate secrets, bypass controls | block and log |

### Reviewer-load formula

```text
review_load_per_hour =
  total_requests_per_hour * review_rate * average_review_minutes / 60
```

If 10,000 requests/hour have a 10% review rate and each review takes 3 minutes, the team needs about 50 reviewer-hours per hour. That is impossible without risk-tiering, better automation, or narrower review criteria. **Review everything** is usually not a serious production design.

### Scenario drill

A bank wants every agent action reviewed. The safer design is usually not full review; it is risk-tiered review: automatic read-only answers with sampling, approval-required money movement, escalation for ambiguous cases, and a feedback pipeline that turns reviewer decisions into eval cases and policy updates.

## Hands-on checks

1. Classify actions into auto-allow, sample-review, approval-required, and block.
2. Design a review card with trace, evidence, policy, and action buttons.

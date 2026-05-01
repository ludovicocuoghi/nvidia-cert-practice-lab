---
domain: Human Oversight and Governance
weight: 8
status: populated
---

# Human Oversight and Governance

## Concept ownership

This is the vendor-neutral home for human approval, review queues, escalation, audit evidence, risk tiers, and feedback loops. Vendor pages should mention the workflow or service that implements review, but the reusable governance pattern belongs here.

## Study card data

- **What it covers:** Risk-tiered approval, escalation, review queues, feedback loops, audit evidence, and governance operations.
- **Lifecycle:** Governance
- **Use this section when:** The scenario mentions human-in-the-loop, human-on-the-loop, regulated actions, review overload, auditability, or reviewer feedback.
- **Common trap:** Reviewing everything manually or collecting feedback that never improves the system.
- **Scenario signal:** High-risk actions require approval; low-risk outputs are sampled for review.

### Key ideas

- **Human-in-the-loop**: approval before selected actions.
- **Human-on-the-loop**: monitoring and intervention while automation usually proceeds.
- **Risk tiers** decide auto-allow, sample-review, approval-required, or block.
- **Audit evidence** includes prompt/model/tool/retrieval/policy versions and human decisions.
- **Feedback loops** turn reviewer labels into eval cases, policy updates, and training data.

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

### Hands-on checks

1. Classify actions into auto-allow, sample-review, approval-required, and block.
2. Design one review card with evidence, trace, policy, and action buttons.

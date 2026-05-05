# High Fidelity Generated Questions 005

## Questions

### Q1: A pharmaceutical research team is reviewing a reviewer-facing agent workflow before rollout. The main risk is human-on-the-loop: the system must sample low-risk decisions and monitor drift. Which option keeps the decision at the right layer?
- ID: aai-hf-human-ai-interaction-and-oversight-012
- Domain: Human-AI Interaction and Oversight
- Topic: human-on-the-loop; agentic_ai_professional
- Difficulty: hard
- A. Prioritize review queues before validating the failure signal around human-on-the-loop.
- B. Bundle human-on-the-loop, human-in-the-loop, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated human-on-the-loop check.
- D. Change the design around human-on-the-loop so the system can sample low-risk decisions and monitor drift.
- Answer: D
- Explanation: The scenario is about human-on-the-loop. The strongest answer fixes the failing layer directly: sample low-risk decisions and monitor drift.
- Why A is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether human-on-the-loop fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the human-on-the-loop gate until after users are exposed.

### Q2: A bank fraud team sees reviewers lacking the review queues evidence needed for decisions. The team has been using first-in-first-out for all cases; the next change needs to make review queues explicit. Which action best addresses the problem?
- ID: aai-hf-human-ai-interaction-and-oversight-013
- Domain: Human-AI Interaction and Oversight
- Topic: review queues; agentic_ai_professional
- Difficulty: expert
- A. Wait for production incidents before adding a dedicated review queues check.
- B. Use transparent handoff as the main gate even though reviewers are asking for review queues evidence.
- C. Make review queues explicit in the workflow: prioritize by risk, uncertainty, and impact.
- D. Bundle review queues, transparent handoff, and prompt changes into one release with one aggregate score.
- Answer: C
- Explanation: The scenario is about review queues. The strongest answer fixes the failing layer directly: prioritize by risk, uncertainty, and impact.
- Why A is wrong: Waiting for incidents postpones the review queues gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether review queues fixed or caused the failure.

### Q3: A manufacturing quality team is preparing a reviewer-facing agent workflow for release. The current design relies on collecting comments with no downstream owner, but the release gate needs to turn review labels into evals, prompt fixes, or training data. Which implementation path is most appropriate?
- ID: aai-hf-human-ai-interaction-and-oversight-014
- Domain: Human-AI Interaction and Oversight
- Topic: feedback loop; agentic_ai_professional
- Difficulty: medium
- A. Keep collecting comments with no downstream owner as the primary release control and record only final outputs.
- B. Use feedback loop as the control boundary and require the system to turn review labels into evals, prompt fixes, or training data.
- C. Wait for production incidents before adding a dedicated feedback loop check.
- D. Use human-on-the-loop as the main gate even though reviewers are asking for feedback loop evidence.
- Answer: B
- Explanation: The scenario is about feedback loop. The strongest answer fixes the failing layer directly: turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.
- Why C is wrong: Waiting for incidents postpones the feedback loop gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.

### Q4: A logistics planning team is comparing two release designs for a reviewer-facing agent workflow. One design centers on asking reviewers to judge opaque outputs; the other adds a measurable transparent handoff step. Which design is more appropriate for production?
- ID: aai-hf-human-ai-interaction-and-oversight-015
- Domain: Human-AI Interaction and Oversight
- Topic: transparent handoff; agentic_ai_professional
- Difficulty: hard
- A. Add a release gate for transparent handoff: show evidence, confidence, and pending tool actions to reviewers.
- B. Use human-on-the-loop as the main gate even though reviewers are asking for transparent handoff evidence.
- C. Keep asking reviewers to judge opaque outputs as the primary release control and record only final outputs.
- D. Prioritize human-in-the-loop before validating the failure signal around transparent handoff.
- Answer: A
- Explanation: The scenario is about transparent handoff. The strongest answer fixes the failing layer directly: show evidence, confidence, and pending tool actions to reviewers.
- Why B is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why C is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.

### Q5: A pharmaceutical research team is reviewing a reviewer-facing agent workflow before rollout. The main risk is human-in-the-loop: the system must require approval before high-risk actions. Which option keeps the decision at the right layer?
- ID: aai-hf-human-ai-interaction-and-oversight-016
- Domain: Human-AI Interaction and Oversight
- Topic: human-in-the-loop; agentic_ai_professional
- Difficulty: hard
- A. Keep review after irreversible mutations as the primary release control and record only final outputs.
- B. Prioritize transparent handoff before validating the failure signal around human-in-the-loop.
- C. Bundle human-in-the-loop, feedback loop, and prompt changes into one release with one aggregate score.
- D. Change the design around human-in-the-loop so the system can require approval before high-risk actions.
- Answer: D
- Explanation: The scenario is about human-in-the-loop. The strongest answer fixes the failing layer directly: require approval before high-risk actions.
- Why A is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether human-in-the-loop fixed or caused the failure.

### Q6: A cybersecurity response team has a production-readiness review for a reviewer-facing agent workflow. The review is focused on human-on-the-loop, because the system must sample low-risk decisions and monitor drift. Which action best fits the requirement?
- ID: aai-hf-human-ai-interaction-and-oversight-017
- Domain: Human-AI Interaction and Oversight
- Topic: human-on-the-loop; agentic_ai_professional
- Difficulty: medium
- A. Bundle human-on-the-loop, transparent handoff, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated human-on-the-loop check.
- C. Make human-on-the-loop explicit in the workflow: sample low-risk decisions and monitor drift.
- D. Prioritize feedback loop before validating the failure signal around human-on-the-loop.
- Answer: C
- Explanation: The scenario is about human-on-the-loop. The strongest answer fixes the failing layer directly: sample low-risk decisions and monitor drift.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether human-on-the-loop fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the human-on-the-loop gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.

### Q7: A public-sector casework team is comparing two release designs for a reviewer-facing agent workflow. One design centers on first-in-first-out for all cases; the other adds a measurable review queues step. Which design is more appropriate for production?
- ID: aai-hf-human-ai-interaction-and-oversight-018
- Domain: Human-AI Interaction and Oversight
- Topic: review queues; agentic_ai_professional
- Difficulty: hard
- A. Use feedback loop as the main gate even though reviewers are asking for review queues evidence.
- B. Use review queues as the control boundary and require the system to prioritize by risk, uncertainty, and impact.
- C. Bundle review queues, feedback loop, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated review queues check.
- Answer: B
- Explanation: The scenario is about review queues. The strongest answer fixes the failing layer directly: prioritize by risk, uncertainty, and impact.
- Why A is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether review queues fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the review queues gate until after users are exposed.

### Q8: A logistics planning team is preparing a reviewer-facing agent workflow for release. The current design relies on collecting comments with no downstream owner, but the release gate needs to turn review labels into evals, prompt fixes, or training data. Which architecture keeps the boundary cleanest?
- ID: aai-hf-human-ai-interaction-and-oversight-019
- Domain: Human-AI Interaction and Oversight
- Topic: feedback loop; agentic_ai_professional
- Difficulty: hard
- A. Add a release gate for feedback loop: turn review labels into evals, prompt fixes, or training data.
- B. Wait for production incidents before adding a dedicated feedback loop check.
- C. Use review queues as the main gate even though reviewers are asking for feedback loop evidence.
- D. Keep collecting comments with no downstream owner as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about feedback loop. The strongest answer fixes the failing layer directly: turn review labels into evals, prompt fixes, or training data.
- Why B is wrong: Waiting for incidents postpones the feedback loop gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why D is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.

### Q9: A pharmaceutical research team is preparing a reviewer-facing agent workflow for release. The current design relies on asking reviewers to judge opaque outputs, but the release gate needs to show evidence, confidence, and pending tool actions to reviewers. Which design is the best first change?
- ID: aai-hf-human-ai-interaction-and-oversight-020
- Domain: Human-AI Interaction and Oversight
- Topic: transparent handoff; agentic_ai_professional
- Difficulty: expert
- A. Change the design around transparent handoff so the system can show evidence, confidence, and pending tool actions to reviewers.
- B. Use human-in-the-loop as the main gate even though reviewers are asking for transparent handoff evidence.
- C. Keep asking reviewers to judge opaque outputs as the primary release control and record only final outputs.
- D. Prioritize human-on-the-loop before validating the failure signal around transparent handoff.
- Answer: A
- Explanation: The scenario is about transparent handoff. The strongest answer fixes the failing layer directly: show evidence, confidence, and pending tool actions to reviewers.
- Why B is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why C is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.

### Q10: An automotive support team has a production-readiness review for a reviewer-facing agent workflow. The review is focused on human-in-the-loop, because the system must require approval before high-risk actions. Which design is the best first change?
- ID: aai-hf-human-ai-interaction-and-oversight-021
- Domain: Human-AI Interaction and Oversight
- Topic: human-in-the-loop; agentic_ai_professional
- Difficulty: medium
- A. Bundle human-in-the-loop, feedback loop, and prompt changes into one release with one aggregate score.
- B. Make human-in-the-loop explicit in the workflow: require approval before high-risk actions.
- C. Keep review after irreversible mutations as the primary release control and record only final outputs.
- D. Prioritize transparent handoff before validating the failure signal around human-in-the-loop.
- Answer: B
- Explanation: The scenario is about human-in-the-loop. The strongest answer fixes the failing layer directly: require approval before high-risk actions.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether human-in-the-loop fixed or caused the failure.
- Why C is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.

### Q11: A logistics planning team is preparing a reviewer-facing agent workflow for release. The current design relies on manual approval for every low-risk step, but the release gate needs to sample low-risk decisions and monitor drift. Which architecture keeps the boundary cleanest?
- ID: aai-hf-human-ai-interaction-and-oversight-022
- Domain: Human-AI Interaction and Oversight
- Topic: human-on-the-loop; agentic_ai_professional
- Difficulty: hard
- A. Bundle human-on-the-loop, review queues, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated human-on-the-loop check.
- C. Use human-on-the-loop as the control boundary and require the system to sample low-risk decisions and monitor drift.
- D. Prioritize human-in-the-loop before validating the failure signal around human-on-the-loop.
- Answer: C
- Explanation: The scenario is about human-on-the-loop. The strongest answer fixes the failing layer directly: sample low-risk decisions and monitor drift.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether human-on-the-loop fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the human-on-the-loop gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.

### Q12: A public-sector casework team has a production-readiness review for a reviewer-facing agent workflow. The review is focused on review queues, because the system must prioritize by risk, uncertainty, and impact. Which implementation path is most appropriate?
- ID: aai-hf-human-ai-interaction-and-oversight-023
- Domain: Human-AI Interaction and Oversight
- Topic: review queues; agentic_ai_professional
- Difficulty: expert
- A. Bundle review queues, feedback loop, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated review queues check.
- C. Use feedback loop as the main gate even though reviewers are asking for review queues evidence.
- D. Add a release gate for review queues: prioritize by risk, uncertainty, and impact.
- Answer: D
- Explanation: The scenario is about review queues. The strongest answer fixes the failing layer directly: prioritize by risk, uncertainty, and impact.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether review queues fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the review queues gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.

### Q13: A semiconductor design group is reviewing a reviewer-facing agent workflow before rollout. The main risk is feedback loop: the system must turn review labels into evals, prompt fixes, or training data. Which option keeps the decision at the right layer?
- ID: aai-hf-human-ai-interaction-and-oversight-024
- Domain: Human-AI Interaction and Oversight
- Topic: feedback loop; agentic_ai_professional
- Difficulty: medium
- A. Change the design around feedback loop so the system can turn review labels into evals, prompt fixes, or training data.
- B. Wait for production incidents before adding a dedicated feedback loop check.
- C. Use human-in-the-loop as the main gate even though reviewers are asking for feedback loop evidence.
- D. Keep collecting comments with no downstream owner as the primary release control and record only final outputs.
- Answer: A
- Explanation: The scenario is about feedback loop. The strongest answer fixes the failing layer directly: turn review labels into evals, prompt fixes, or training data.
- Why B is wrong: Waiting for incidents postpones the feedback loop gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why D is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.

### Q14: An insurance claims group sees reviewers lacking the transparent handoff evidence needed for decisions. The team has been using asking reviewers to judge opaque outputs; the next change needs to make transparent handoff explicit. Which action best addresses the problem?
- ID: aai-hf-human-ai-interaction-and-oversight-025
- Domain: Human-AI Interaction and Oversight
- Topic: transparent handoff; agentic_ai_professional
- Difficulty: hard
- A. Prioritize human-on-the-loop before validating the failure signal around transparent handoff.
- B. Make transparent handoff explicit in the workflow: show evidence, confidence, and pending tool actions to reviewers.
- C. Use human-in-the-loop as the main gate even though reviewers are asking for transparent handoff evidence.
- D. Keep asking reviewers to judge opaque outputs as the primary release control and record only final outputs.
- Answer: B
- Explanation: The scenario is about transparent handoff. The strongest answer fixes the failing layer directly: show evidence, confidence, and pending tool actions to reviewers.
- Why A is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why C is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why D is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.

### Q15: A telecom network operations team is reviewing a reviewer-facing agent workflow before rollout. The main risk is human-in-the-loop: the system must require approval before high-risk actions. Which option keeps the decision at the right layer?
- ID: aai-hf-human-ai-interaction-and-oversight-026
- Domain: Human-AI Interaction and Oversight
- Topic: human-in-the-loop; agentic_ai_professional
- Difficulty: hard
- A. Prioritize feedback loop before validating the failure signal around human-in-the-loop.
- B. Bundle human-in-the-loop, transparent handoff, and prompt changes into one release with one aggregate score.
- C. Use human-in-the-loop as the control boundary and require the system to require approval before high-risk actions.
- D. Keep review after irreversible mutations as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about human-in-the-loop. The strongest answer fixes the failing layer directly: require approval before high-risk actions.
- Why A is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether human-in-the-loop fixed or caused the failure.
- Why D is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.

### Q16: A manufacturing quality team is comparing two release designs for a reviewer-facing agent workflow. One design centers on manual approval for every low-risk step; the other adds a measurable human-on-the-loop step. Which design is more appropriate for production?
- ID: aai-hf-human-ai-interaction-and-oversight-027
- Domain: Human-AI Interaction and Oversight
- Topic: human-on-the-loop; agentic_ai_professional
- Difficulty: easy
- A. Prioritize transparent handoff before validating the failure signal around human-on-the-loop.
- B. Bundle human-on-the-loop, feedback loop, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated human-on-the-loop check.
- D. Add a release gate for human-on-the-loop: sample low-risk decisions and monitor drift.
- Answer: D
- Explanation: The scenario is about human-on-the-loop. The strongest answer fixes the failing layer directly: sample low-risk decisions and monitor drift.
- Why A is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether human-on-the-loop fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the human-on-the-loop gate until after users are exposed.

### Q17: A bank fraud team has a production-readiness review for a reviewer-facing agent workflow. The review is focused on review queues, because the system must prioritize by risk, uncertainty, and impact. Which control should be added before rollout?
- ID: aai-hf-human-ai-interaction-and-oversight-028
- Domain: Human-AI Interaction and Oversight
- Topic: review queues; agentic_ai_professional
- Difficulty: hard
- A. Change the design around review queues so the system can prioritize by risk, uncertainty, and impact.
- B. Bundle review queues, transparent handoff, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated review queues check.
- D. Use transparent handoff as the main gate even though reviewers are asking for review queues evidence.
- Answer: A
- Explanation: The scenario is about review queues. The strongest answer fixes the failing layer directly: prioritize by risk, uncertainty, and impact.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether review queues fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the review queues gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.

### Q18: An insurance claims group sees reviewers lacking the feedback loop evidence needed for decisions. The team has been using collecting comments with no downstream owner; the next change needs to make feedback loop explicit. Which action best addresses the problem?
- ID: aai-hf-human-ai-interaction-and-oversight-029
- Domain: Human-AI Interaction and Oversight
- Topic: feedback loop; agentic_ai_professional
- Difficulty: expert
- A. Keep collecting comments with no downstream owner as the primary release control and record only final outputs.
- B. Make feedback loop explicit in the workflow: turn review labels into evals, prompt fixes, or training data.
- C. Wait for production incidents before adding a dedicated feedback loop check.
- D. Use transparent handoff as the main gate even though reviewers are asking for feedback loop evidence.
- Answer: B
- Explanation: The scenario is about feedback loop. The strongest answer fixes the failing layer directly: turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.
- Why C is wrong: Waiting for incidents postpones the feedback loop gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.

### Q19: A global retailer is preparing a reviewer-facing agent workflow for release. The current design relies on asking reviewers to judge opaque outputs, but the release gate needs to show evidence, confidence, and pending tool actions to reviewers. Which control should be added before rollout?
- ID: aai-hf-human-ai-interaction-and-oversight-030
- Domain: Human-AI Interaction and Oversight
- Topic: transparent handoff; agentic_ai_professional
- Difficulty: medium
- A. Use human-on-the-loop as the main gate even though reviewers are asking for transparent handoff evidence.
- B. Keep asking reviewers to judge opaque outputs as the primary release control and record only final outputs.
- C. Prioritize human-in-the-loop before validating the failure signal around transparent handoff.
- D. Use transparent handoff as the control boundary and require the system to show evidence, confidence, and pending tool actions to reviewers.
- Answer: D
- Explanation: The scenario is about transparent handoff. The strongest answer fixes the failing layer directly: show evidence, confidence, and pending tool actions to reviewers.
- Why A is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why B is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.

### Q20: A cybersecurity response team is preparing a reviewer-facing agent workflow for release. The current design relies on review after irreversible mutations, but the release gate needs to require approval before high-risk actions. Which architecture keeps the boundary cleanest?
- ID: aai-hf-human-ai-interaction-and-oversight-031
- Domain: Human-AI Interaction and Oversight
- Topic: human-in-the-loop; agentic_ai_professional
- Difficulty: hard
- A. Prioritize human-on-the-loop before validating the failure signal around human-in-the-loop.
- B. Bundle human-in-the-loop, review queues, and prompt changes into one release with one aggregate score.
- C. Add a release gate for human-in-the-loop: require approval before high-risk actions.
- D. Keep review after irreversible mutations as the primary release control and record only final outputs.
- Answer: C
- Explanation: The scenario is about human-in-the-loop. The strongest answer fixes the failing layer directly: require approval before high-risk actions.
- Why A is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether human-in-the-loop fixed or caused the failure.
- Why D is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.

### Q21: A manufacturing quality team is comparing two release designs for a reviewer-facing agent workflow. One design centers on manual approval for every low-risk step; the other adds a measurable human-on-the-loop step. Which design is more appropriate for production?
- ID: aai-hf-human-ai-interaction-and-oversight-032
- Domain: Human-AI Interaction and Oversight
- Topic: human-on-the-loop; agentic_ai_professional
- Difficulty: hard
- A. Wait for production incidents before adding a dedicated human-on-the-loop check.
- B. Change the design around human-on-the-loop so the system can sample low-risk decisions and monitor drift.
- C. Prioritize transparent handoff before validating the failure signal around human-on-the-loop.
- D. Bundle human-on-the-loop, feedback loop, and prompt changes into one release with one aggregate score.
- Answer: B
- Explanation: The scenario is about human-on-the-loop. The strongest answer fixes the failing layer directly: sample low-risk decisions and monitor drift.
- Why A is wrong: Waiting for incidents postpones the human-on-the-loop gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether human-on-the-loop fixed or caused the failure.

### Q22: A global retailer is comparing two release designs for a reviewer-facing agent workflow. One design centers on first-in-first-out for all cases; the other adds a measurable review queues step. Which design is more appropriate for production?
- ID: aai-hf-human-ai-interaction-and-oversight-033
- Domain: Human-AI Interaction and Oversight
- Topic: review queues; agentic_ai_professional
- Difficulty: expert
- A. Make review queues explicit in the workflow: prioritize by risk, uncertainty, and impact.
- B. Bundle review queues, human-on-the-loop, and prompt changes into one release with one aggregate score.
- C. Wait for production incidents before adding a dedicated review queues check.
- D. Use human-on-the-loop as the main gate even though reviewers are asking for review queues evidence.
- Answer: A
- Explanation: The scenario is about review queues. The strongest answer fixes the failing layer directly: prioritize by risk, uncertainty, and impact.
- Why B is wrong: Bundling multiple changes makes it harder to tell whether review queues fixed or caused the failure.
- Why C is wrong: Waiting for incidents postpones the review queues gate until after users are exposed.
- Why D is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.

### Q23: An insurance claims group sees reviewers lacking the feedback loop evidence needed for decisions. The team has been using collecting comments with no downstream owner; the next change needs to make feedback loop explicit. Which action best addresses the problem?
- ID: aai-hf-human-ai-interaction-and-oversight-034
- Domain: Human-AI Interaction and Oversight
- Topic: feedback loop; agentic_ai_professional
- Difficulty: medium
- A. Wait for production incidents before adding a dedicated feedback loop check.
- B. Use transparent handoff as the main gate even though reviewers are asking for feedback loop evidence.
- C. Keep collecting comments with no downstream owner as the primary release control and record only final outputs.
- D. Use feedback loop as the control boundary and require the system to turn review labels into evals, prompt fixes, or training data.
- Answer: D
- Explanation: The scenario is about feedback loop. The strongest answer fixes the failing layer directly: turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: Waiting for incidents postpones the feedback loop gate until after users are exposed.
- Why B is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why C is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.

### Q24: A semiconductor design group is comparing two release designs for a reviewer-facing agent workflow. One design centers on asking reviewers to judge opaque outputs; the other adds a measurable transparent handoff step. Which design is more appropriate for production?
- ID: aai-hf-human-ai-interaction-and-oversight-035
- Domain: Human-AI Interaction and Oversight
- Topic: transparent handoff; agentic_ai_professional
- Difficulty: hard
- A. Keep asking reviewers to judge opaque outputs as the primary release control and record only final outputs.
- B. Prioritize review queues before validating the failure signal around transparent handoff.
- C. Add a release gate for transparent handoff: show evidence, confidence, and pending tool actions to reviewers.
- D. Use feedback loop as the main gate even though reviewers are asking for transparent handoff evidence.
- Answer: C
- Explanation: The scenario is about transparent handoff. The strongest answer fixes the failing layer directly: show evidence, confidence, and pending tool actions to reviewers.
- Why A is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.

### Q25: A hospital operations team is reviewing a reviewer-facing agent workflow before rollout. The main risk is human-in-the-loop: the system must require approval before high-risk actions. Which option keeps the decision at the right layer?
- ID: aai-hf-human-ai-interaction-and-oversight-036
- Domain: Human-AI Interaction and Oversight
- Topic: human-in-the-loop; agentic_ai_professional
- Difficulty: hard
- A. Bundle human-in-the-loop, human-on-the-loop, and prompt changes into one release with one aggregate score.
- B. Change the design around human-in-the-loop so the system can require approval before high-risk actions.
- C. Keep review after irreversible mutations as the primary release control and record only final outputs.
- D. Prioritize review queues before validating the failure signal around human-in-the-loop.
- Answer: B
- Explanation: The scenario is about human-in-the-loop. The strongest answer fixes the failing layer directly: require approval before high-risk actions.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether human-in-the-loop fixed or caused the failure.
- Why C is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.
- Why D is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.

### Q26: A global retailer sees reviewers lacking the human-on-the-loop evidence needed for decisions. The team has been using manual approval for every low-risk step; the next change needs to make human-on-the-loop explicit. Which action best addresses the problem?
- ID: aai-hf-human-ai-interaction-and-oversight-037
- Domain: Human-AI Interaction and Oversight
- Topic: human-on-the-loop; agentic_ai_professional
- Difficulty: medium
- A. Make human-on-the-loop explicit in the workflow: sample low-risk decisions and monitor drift.
- B. Prioritize human-in-the-loop before validating the failure signal around human-on-the-loop.
- C. Bundle human-on-the-loop, review queues, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated human-on-the-loop check.
- Answer: A
- Explanation: The scenario is about human-on-the-loop. The strongest answer fixes the failing layer directly: sample low-risk decisions and monitor drift.
- Why B is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether human-on-the-loop fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the human-on-the-loop gate until after users are exposed.

### Q27: A pharmaceutical research team is reviewing a reviewer-facing agent workflow before rollout. The main risk is review queues: the system must prioritize by risk, uncertainty, and impact. Which option keeps the decision at the right layer?
- ID: aai-hf-human-ai-interaction-and-oversight-038
- Domain: Human-AI Interaction and Oversight
- Topic: review queues; agentic_ai_professional
- Difficulty: hard
- A. Bundle review queues, human-in-the-loop, and prompt changes into one release with one aggregate score.
- B. Wait for production incidents before adding a dedicated review queues check.
- C. Use human-in-the-loop as the main gate even though reviewers are asking for review queues evidence.
- D. Use review queues as the control boundary and require the system to prioritize by risk, uncertainty, and impact.
- Answer: D
- Explanation: The scenario is about review queues. The strongest answer fixes the failing layer directly: prioritize by risk, uncertainty, and impact.
- Why A is wrong: Bundling multiple changes makes it harder to tell whether review queues fixed or caused the failure.
- Why B is wrong: Waiting for incidents postpones the review queues gate until after users are exposed.
- Why C is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.

### Q28: A cybersecurity response team is preparing a reviewer-facing agent workflow for release. The current design relies on collecting comments with no downstream owner, but the release gate needs to turn review labels into evals, prompt fixes, or training data. Which architecture keeps the boundary cleanest?
- ID: aai-hf-human-ai-interaction-and-oversight-039
- Domain: Human-AI Interaction and Oversight
- Topic: feedback loop; agentic_ai_professional
- Difficulty: hard
- A. Use human-in-the-loop as the main gate even though reviewers are asking for feedback loop evidence.
- B. Keep collecting comments with no downstream owner as the primary release control and record only final outputs.
- C. Add a release gate for feedback loop: turn review labels into evals, prompt fixes, or training data.
- D. Wait for production incidents before adding a dedicated feedback loop check.
- Answer: C
- Explanation: The scenario is about feedback loop. The strongest answer fixes the failing layer directly: turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why B is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.
- Why D is wrong: Waiting for incidents postpones the feedback loop gate until after users are exposed.

### Q29: A manufacturing quality team is comparing two release designs for a reviewer-facing agent workflow. One design centers on asking reviewers to judge opaque outputs; the other adds a measurable transparent handoff step. Which design is more appropriate for production?
- ID: aai-hf-human-ai-interaction-and-oversight-040
- Domain: Human-AI Interaction and Oversight
- Topic: transparent handoff; agentic_ai_professional
- Difficulty: expert
- A. Keep asking reviewers to judge opaque outputs as the primary release control and record only final outputs.
- B. Prioritize feedback loop before validating the failure signal around transparent handoff.
- C. Change the design around transparent handoff so the system can show evidence, confidence, and pending tool actions to reviewers.
- D. Use review queues as the main gate even though reviewers are asking for transparent handoff evidence.
- Answer: C
- Explanation: The scenario is about transparent handoff. The strongest answer fixes the failing layer directly: show evidence, confidence, and pending tool actions to reviewers.
- Why A is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why D is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.

### Q30: A hospital operations team is reviewing a reviewer-facing agent workflow before rollout. The main risk is human-in-the-loop: the system must require approval before high-risk actions. Which option keeps the decision at the right layer?
- ID: aai-hf-human-ai-interaction-and-oversight-041
- Domain: Human-AI Interaction and Oversight
- Topic: human-in-the-loop; agentic_ai_professional
- Difficulty: medium
- A. Keep review after irreversible mutations as the primary release control and record only final outputs.
- B. Prioritize review queues before validating the failure signal around human-in-the-loop.
- C. Bundle human-in-the-loop, human-on-the-loop, and prompt changes into one release with one aggregate score.
- D. Make human-in-the-loop explicit in the workflow: require approval before high-risk actions.
- Answer: D
- Explanation: The scenario is about human-in-the-loop. The strongest answer fixes the failing layer directly: require approval before high-risk actions.
- Why A is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.
- Why B is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether human-in-the-loop fixed or caused the failure.

### Q31: A cybersecurity response team sees reviewers lacking the human-on-the-loop evidence needed for decisions. The team has been using manual approval for every low-risk step; the next change needs to make human-on-the-loop explicit. Which action best addresses the problem?
- ID: aai-hf-human-ai-interaction-and-oversight-042
- Domain: Human-AI Interaction and Oversight
- Topic: human-on-the-loop; agentic_ai_professional
- Difficulty: hard
- A. Use human-on-the-loop as the control boundary and require the system to sample low-risk decisions and monitor drift.
- B. Prioritize feedback loop before validating the failure signal around human-on-the-loop.
- C. Bundle human-on-the-loop, transparent handoff, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated human-on-the-loop check.
- Answer: A
- Explanation: The scenario is about human-on-the-loop. The strongest answer fixes the failing layer directly: sample low-risk decisions and monitor drift.
- Why B is wrong: It moves attention to a neighboring control instead of making human-on-the-loop testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether human-on-the-loop fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the human-on-the-loop gate until after users are exposed.

### Q32: An insurance claims group sees reviewers lacking the review queues evidence needed for decisions. The team has been using first-in-first-out for all cases; the next change needs to make review queues explicit. Which action best addresses the problem?
- ID: aai-hf-human-ai-interaction-and-oversight-043
- Domain: Human-AI Interaction and Oversight
- Topic: review queues; agentic_ai_professional
- Difficulty: expert
- A. Use human-in-the-loop as the main gate even though reviewers are asking for review queues evidence.
- B. Add a release gate for review queues: prioritize by risk, uncertainty, and impact.
- C. Bundle review queues, human-in-the-loop, and prompt changes into one release with one aggregate score.
- D. Wait for production incidents before adding a dedicated review queues check.
- Answer: B
- Explanation: The scenario is about review queues. The strongest answer fixes the failing layer directly: prioritize by risk, uncertainty, and impact.
- Why A is wrong: It moves attention to a neighboring control instead of making review queues testable in the scenario.
- Why C is wrong: Bundling multiple changes makes it harder to tell whether review queues fixed or caused the failure.
- Why D is wrong: Waiting for incidents postpones the review queues gate until after users are exposed.

### Q33: A telecom network operations team is preparing a reviewer-facing agent workflow for release. The current design relies on collecting comments with no downstream owner, but the release gate needs to turn review labels into evals, prompt fixes, or training data. Which control should be added before rollout?
- ID: aai-hf-human-ai-interaction-and-oversight-044
- Domain: Human-AI Interaction and Oversight
- Topic: feedback loop; agentic_ai_professional
- Difficulty: medium
- A. Use review queues as the main gate even though reviewers are asking for feedback loop evidence.
- B. Keep collecting comments with no downstream owner as the primary release control and record only final outputs.
- C. Change the design around feedback loop so the system can turn review labels into evals, prompt fixes, or training data.
- D. Wait for production incidents before adding a dedicated feedback loop check.
- Answer: C
- Explanation: The scenario is about feedback loop. The strongest answer fixes the failing layer directly: turn review labels into evals, prompt fixes, or training data.
- Why A is wrong: It moves attention to a neighboring control instead of making feedback loop testable in the scenario.
- Why B is wrong: It keeps collecting comments with no downstream owner in control instead of adding a measurable feedback loop decision point.
- Why D is wrong: Waiting for incidents postpones the feedback loop gate until after users are exposed.

### Q34: A manufacturing quality team sees reviewers lacking the transparent handoff evidence needed for decisions. The team has been using asking reviewers to judge opaque outputs; the next change needs to make transparent handoff explicit. Which action best addresses the problem?
- ID: aai-hf-human-ai-interaction-and-oversight-045
- Domain: Human-AI Interaction and Oversight
- Topic: transparent handoff; agentic_ai_professional
- Difficulty: hard
- A. Use review queues as the main gate even though reviewers are asking for transparent handoff evidence.
- B. Keep asking reviewers to judge opaque outputs as the primary release control and record only final outputs.
- C. Prioritize feedback loop before validating the failure signal around transparent handoff.
- D. Make transparent handoff explicit in the workflow: show evidence, confidence, and pending tool actions to reviewers.
- Answer: D
- Explanation: The scenario is about transparent handoff. The strongest answer fixes the failing layer directly: show evidence, confidence, and pending tool actions to reviewers.
- Why A is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.
- Why B is wrong: It keeps asking reviewers to judge opaque outputs in control instead of adding a measurable transparent handoff decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making transparent handoff testable in the scenario.

### Q35: A bank fraud team is comparing two release designs for a reviewer-facing agent workflow. One design centers on review after irreversible mutations; the other adds a measurable human-in-the-loop step. Which design is more appropriate for production?
- ID: aai-hf-human-ai-interaction-and-oversight-046
- Domain: Human-AI Interaction and Oversight
- Topic: human-in-the-loop; agentic_ai_professional
- Difficulty: hard
- A. Use human-in-the-loop as the control boundary and require the system to require approval before high-risk actions.
- B. Keep review after irreversible mutations as the primary release control and record only final outputs.
- C. Prioritize human-on-the-loop before validating the failure signal around human-in-the-loop.
- D. Bundle human-in-the-loop, review queues, and prompt changes into one release with one aggregate score.
- Answer: A
- Explanation: The scenario is about human-in-the-loop. The strongest answer fixes the failing layer directly: require approval before high-risk actions.
- Why B is wrong: It keeps review after irreversible mutations in control instead of adding a measurable human-in-the-loop decision point.
- Why C is wrong: It moves attention to a neighboring control instead of making human-in-the-loop testable in the scenario.
- Why D is wrong: Bundling multiple changes makes it harder to tell whether human-in-the-loop fixed or caused the failure.

### Q36: A bank fraud team is preparing a release decision. The project team has domain instructions and needs LoRA tuning while preserving base-model behavior. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-framework-001
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: expert
- A. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- C. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- D. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: D
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q37: A manufacturing quality team has narrowed the next implementation step. The rollout is blocked because the team needs to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-framework-002
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: medium
- A. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- B. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- C. Nsight Compute is the best fit; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- D. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: A
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.

### Q38: A global retailer is reviewing the production design. Changing durable model behavior from curated examples rather than prompt wording is the next release blocker. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-framework-003
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: hard
- A. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- B. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- C. TensorRT-LLM is the best fit; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- D. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: B
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q39: An automotive support team is preparing a production rollout. Running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes is the work to finish before release. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-framework-004
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: expert
- A. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- C. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: C
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q40: A bank fraud team is preparing a release decision. The project team has domain instructions and needs LoRA tuning while preserving base-model behavior. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-framework-005
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: medium
- A. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- B. Select NeMo Curator; it owns data preparation work such as preparing raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- C. TensorRT-LLM is the best fit; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- D. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: D
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.

### Q41: A public-sector casework team has narrowed the next implementation step. The rollout is blocked because the team needs to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-framework-006
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: hard
- A. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- B. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- C. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- D. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Answer: A
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why B is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.

### Q42: A global retailer is reviewing the production design. Changing durable model behavior from curated examples rather than prompt wording is the next release blocker. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-framework-007
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: hard
- A. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- C. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- D. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- Answer: B
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Customizer is a neighboring training and customization component, but this signal asks specifically for NeMo Framework: to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.

### Q43: A pharmaceutical research team is preparing a production rollout. Running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes is the work to finish before release. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-framework-008
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: easy
- A. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- B. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- C. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: C
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q44: A bank fraud team is preparing a release decision. The project team has domain instructions and needs LoRA tuning while preserving base-model behavior. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-framework-009
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: hard
- A. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- B. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- D. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: D
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.
- Why C is wrong: NCCL is a neighboring training and customization component, but this signal asks specifically for NeMo Framework: to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.

### Q45: A public-sector casework team has narrowed the next implementation step. The rollout is blocked because the team needs to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-framework-010
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: expert
- A. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- B. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- C. Select Nsight Systems; it owns monitoring and profiling work such as identifying where time is going across CPU, GPU, launches, waits, and communication.
- D. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Answer: B
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.

### Q46: A pharmaceutical research team is preparing a production rollout. Running distributed training or customization before an artifact is approved for serving is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-framework-011
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: medium
- A. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- B. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- D. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: A
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q47: A telecom network operations team is reviewing the production design. Running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-framework-012
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: hard
- A. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- B. Use Triton Inference Server; it is used to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- C. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: D
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.
- Why B is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.

### Q48: A hospital operations team has narrowed the next implementation step. The project team has domain instructions and needs LoRA tuning while preserving base-model behavior. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-framework-013
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: hard
- A. Select NIM Operator; it owns serving and deployment work such as managing K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- C. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: C
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NCCL is a neighboring training and customization component, but this signal asks specifically for NeMo Framework: to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- Why D is wrong: NeMo Customizer is a neighboring training and customization component, but this signal asks specifically for NeMo Framework: to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.

### Q49: A bank fraud team is preparing a release decision. The rollout is blocked because the team needs to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-framework-014
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: expert
- A. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- C. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- D. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: B
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.

### Q50: An automotive support team is preparing a production rollout. Adapting an existing model with SFT, PEFT, LoRA, or continued pretraining is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-framework-015
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: medium
- A. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- B. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- D. Use Triton Inference Server; it is used to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Answer: A
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why D is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q51: A logistics planning team is reviewing the production design. Running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-framework-016
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: hard
- A. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- C. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- D. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: D
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.
- Why C is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q52: A manufacturing quality team has narrowed the next implementation step. The project team has domain instructions and needs LoRA tuning while preserving base-model behavior. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-framework-017
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: hard
- A. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- C. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- D. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Answer: C
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.
- Why D is wrong: NCCL is a neighboring training and customization component, but this signal asks specifically for NeMo Framework: to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.

### Q53: A bank fraud team is preparing a release decision. The rollout is blocked because the team needs to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-framework-018
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: medium
- A. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- C. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- D. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- Answer: B
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Training and customization.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.
- Why D is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q54: An insurance claims group is preparing a production rollout. Adapting an existing model with SFT, PEFT, LoRA, or continued pretraining is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-framework-019
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: hard
- A. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- B. TensorRT-LLM is the best fit; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- C. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: A
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.

### Q55: A logistics planning team is reviewing the production design. Running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-framework-020
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: hard
- A. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- C. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. Select NCCL; it owns training and customization work such as handling distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- Answer: A
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why D is wrong: NCCL is a neighboring training and customization component, but this signal asks specifically for NeMo Framework: to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.

### Q56: A telecom network operations team is reviewing the production design. The project team has domain instructions and needs LoRA tuning while preserving base-model behavior. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-framework-021
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: expert
- A. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- D. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: B
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: NeMo Customizer is a neighboring training and customization component, but this signal asks specifically for NeMo Framework: to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.

### Q57: A pharmaceutical research team is preparing a production rollout. The rollout is blocked because the team needs to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-framework-022
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: medium
- A. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- B. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Answer: C
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Customizer is a neighboring training and customization component, but this signal asks specifically for NeMo Framework: to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- Why D is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q58: A bank fraud team is preparing a release decision. Adapting an existing model with SFT, PEFT, LoRA, or continued pretraining is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-framework-023
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: hard
- A. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- D. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- Answer: D
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.

### Q59: A hospital operations team has narrowed the next implementation step. Running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-framework-024
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: expert
- A. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- C. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- D. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: A
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why B is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why C is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Customizer is a neighboring training and customization component, but this signal asks specifically for NeMo Framework: to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.

### Q60: A telecom network operations team is reviewing the production design. The project team has domain instructions and needs LoRA tuning while preserving base-model behavior. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-framework-025
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: medium
- A. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- B. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- D. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- Answer: B
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Training and customization.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Training and customization.
- Why D is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.

### Q61: An automotive support team is preparing a production rollout. The rollout is blocked because the team needs to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-framework-026
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: hard
- A. NeMo Curator is the best fit; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- C. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- D. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: C
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.
- Why B is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.

### Q62: A cybersecurity response team is preparing a release decision. Adapting an existing model with SFT, PEFT, LoRA, or continued pretraining is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-framework-027
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: hard
- A. NeMo Customizer is the best fit; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- B. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. Select NeMo Framework; it owns training and customization work such as running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- Answer: D
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: NeMo Customizer is a neighboring training and customization component, but this signal asks specifically for NeMo Framework: to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Training and customization.

### Q63: A public-sector casework team has narrowed the next implementation step. Running SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-framework-028
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: easy
- A. NeMo Framework is the best fit; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- B. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- C. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- D. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- Answer: A
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Training and customization.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Training and customization.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Training and customization.

### Q64: A logistics planning team is reviewing the production design. The project team has domain instructions and needs LoRA tuning while preserving base-model behavior. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-framework-029
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: hard
- A. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- C. Use Dynamo (Triton Dynamo); it is used to support disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- D. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- Answer: B
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Training and customization.
- Why C is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Training and customization.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Training and customization.

### Q65: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-framework-030
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Framework; lifecycle: Training and customization; Which NVIDIA component is most appropriate for PEFT customization before deployment?
- Difficulty: expert
- A. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- B. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- C. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- D. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- Answer: D
- Explanation: NeMo Framework is the best fit because it sits in Training and customization: Framework for training, customizing, aligning, and evaluating generative AI models.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Training and customization.
- Why B is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Training and customization.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Training and customization.

### Q66: A hospital operations team has narrowed the next implementation step. A workflow YAML uses functions, llms, retrievers, memory, and a _type such as tool_calling_agent, react_agent, reasoning_agent, rewoo_agent, router_agent, parallel_executor, sequential_executor, or auto_memory_agent. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-agent-toolkit-001
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: medium
- A. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- B. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- D. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: B
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Agent orchestration.
- Why C is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Agent orchestration.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Agent orchestration.

### Q67: A semiconductor design group is preparing a release decision. The rollout is blocked because the team needs to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-agent-toolkit-002
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: hard
- A. TensorRT-LLM is the best fit; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- B. Choose NGC; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- C. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. Select NeMo Customizer; it owns training and customization work such as running API-driven LoRA/PEFT customization without standing up a full training stack.
- Answer: C
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Agent orchestration.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Agent orchestration.
- Why D is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Agent orchestration.

### Q68: An insurance claims group is preparing a production rollout. Profile and observe an agent workflow across tools and retrieval calls is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-agent-toolkit-003
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: hard
- A. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- B. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- C. Use NeMo Curator; it is used to prepare raw data as training/tuning/eval data: Pipeline stages, quality filters, classifier scores, PII/safety/poisoning checks, exact/fuzzy dedup, or multimodal curation.
- D. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: D
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Agent orchestration.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Agent orchestration.
- Why C is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Agent orchestration.

### Q69: A logistics planning team is reviewing the production design. A workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-agent-toolkit-004
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: expert
- A. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- B. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Use Nsight Systems; it is used to identify where time is going across CPU, GPU, launches, waits, and communication.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: A
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Agent orchestration.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Agent orchestration.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Agent orchestration.

### Q70: A manufacturing quality team has narrowed the next implementation step. A workflow YAML uses functions, llms, retrievers, memory, and a _type such as tool_calling_agent, react_agent, reasoning_agent, rewoo_agent, router_agent, parallel_executor, sequential_executor, or auto_memory_agent. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-agent-toolkit-005
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: medium
- A. Nemotron models is the best fit; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Use Triton Inference Server; it is used to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- D. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: B
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Agent orchestration.
- Why C is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Agent orchestration.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Agent orchestration.

### Q71: A bank fraud team is preparing a release decision. The rollout is blocked because the team needs to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-agent-toolkit-006
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: hard
- A. Nsight Systems is the best fit; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- B. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- C. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- Answer: C
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why A is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Agent orchestration.
- Why B is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Agent orchestration.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Agent orchestration.

### Q72: A pharmaceutical research team is preparing a production rollout. Composing agent workflows, tools, retrievers, memory, and traceable handoffs is the next release blocker. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-agent-toolkit-007
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: hard
- A. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- B. Choose NeMo Customizer; it provides a microservice for parameter-efficient model customization (LoRA, PEFT) with managed lifecycle and APIs.
- C. Use NGC; it is used to pull NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- D. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: D
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Agent orchestration.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Agent orchestration.
- Why C is wrong: NGC belongs to Serving and deployment, while this scenario asks for Agent orchestration.

### Q73: A logistics planning team is reviewing the production design. A workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces is the work to finish before release. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-agent-toolkit-008
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: medium
- A. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- B. Choose NeMo Retriever; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- C. Use NeMo Evaluator; it is used to run standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- Answer: A
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Agent orchestration.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Agent orchestration.
- Why D is wrong: Nemotron models belongs to Model selection, while this scenario asks for Agent orchestration.

### Q74: A hospital operations team has narrowed the next implementation step. A workflow YAML uses functions, llms, retrievers, memory, and a _type such as tool_calling_agent, react_agent, reasoning_agent, rewoo_agent, router_agent, parallel_executor, sequential_executor, or auto_memory_agent. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-agent-toolkit-009
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: hard
- A. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- B. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Use Triton Inference Server; it is used to run multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- D. Select RAPIDS; it owns data preparation work such as accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: B
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why A is wrong: NCCL belongs to Training and customization, while this scenario asks for Agent orchestration.
- Why C is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Agent orchestration.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Agent orchestration.

### Q75: A cybersecurity response team is preparing a release decision. The rollout is blocked because the team needs to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-agent-toolkit-010
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: hard
- A. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- B. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- C. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- D. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: D
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why A is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Agent orchestration.
- Why B is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Agent orchestration.
- Why C is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Agent orchestration.

### Q76: A semiconductor design group is preparing a release decision. Profile and observe an agent workflow across tools and retrieval calls is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-agent-toolkit-011
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: expert
- A. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- B. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: C
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Agent orchestration.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Agent orchestration.
- Why D is wrong: NeMo Guardrails belongs to Safety and guardrails, while this scenario asks for Agent orchestration.

### Q77: A hospital operations team has narrowed the next implementation step. A workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-agent-toolkit-012
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: medium
- A. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- B. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- D. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- Answer: B
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why A is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Agent orchestration.
- Why C is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Agent orchestration.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Agent orchestration.

### Q78: A global retailer is reviewing the production design. A workflow YAML uses functions, llms, retrievers, memory, and a _type such as tool_calling_agent, react_agent, reasoning_agent, rewoo_agent, router_agent, parallel_executor, sequential_executor, or auto_memory_agent. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-agent-toolkit-013
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: hard
- A. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- B. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- C. Select NeMo Evaluator; it owns evaluation work such as running standardized LLM/agent eval pipelines, regression suites, or LLM-as-judge.
- D. TensorRT-LLM is the best fit; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- Answer: A
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why B is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Agent orchestration.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Agent orchestration.
- Why D is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Agent orchestration.

### Q79: An automotive support team is preparing a production rollout. The rollout is blocked because the team needs to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-agent-toolkit-014
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: expert
- A. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- B. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- C. Choose Nsight Systems; it provides a system-wide profiler for CPU/GPU timelines, CUDA API calls, kernel gaps, data movement, and synchronization.
- D. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: D
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why A is wrong: NIM belongs to Serving and deployment, while this scenario asks for Agent orchestration.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Agent orchestration.
- Why C is wrong: Nsight Systems belongs to Monitoring and profiling, while this scenario asks for Agent orchestration.

### Q80: A bank fraud team is preparing a release decision. Composing agent workflows, tools, retrievers, memory, and traceable handoffs is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-agent-toolkit-015
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: medium
- A. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- B. Use NeMo Customizer; it is used to run API-driven LoRA/PEFT customization without standing up a full training stack.
- C. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- Answer: C
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Agent orchestration.
- Why B is wrong: NeMo Customizer belongs to Training and customization, while this scenario asks for Agent orchestration.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Agent orchestration.

### Q81: A manufacturing quality team has narrowed the next implementation step. A workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-agent-toolkit-016
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: hard
- A. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- B. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- C. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- D. Use NeMo Framework; it is used to run SFT, PEFT, LoRA/QLoRA, continued pretraining, model customization, or large-scale model recipes.
- Answer: B
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Agent orchestration.
- Why C is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Agent orchestration.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Agent orchestration.

### Q82: A telecom network operations team is reviewing the production design. A workflow YAML uses functions, llms, retrievers, memory, and a _type such as tool_calling_agent, react_agent, reasoning_agent, rewoo_agent, router_agent, parallel_executor, sequential_executor, or auto_memory_agent. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-agent-toolkit-017
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: hard
- A. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- B. Use TensorRT-LLM; it is used to build optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- C. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- D. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- Answer: A
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Agent orchestration.
- Why C is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Agent orchestration.
- Why D is wrong: NCCL belongs to Training and customization, while this scenario asks for Agent orchestration.

### Q83: An automotive support team is preparing a production rollout. The rollout is blocked because the team needs to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-agent-toolkit-018
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: easy
- A. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- B. TensorRT-LLM is the best fit; it provides an optimized inference stack for LLM engines, attention kernels, quantization, paged KV cache, and high-throughput generation.
- C. Choose NIM; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- D. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: D
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why A is wrong: NGC belongs to Serving and deployment, while this scenario asks for Agent orchestration.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Agent orchestration.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Agent orchestration.

### Q84: A bank fraud team is preparing a release decision. Coordinating multiple agent roles without forcing a rewrite of the existing framework is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-agent-toolkit-019
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: hard
- A. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- C. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Answer: C
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Agent orchestration.
- Why B is wrong: NCCL belongs to Training and customization, while this scenario asks for Agent orchestration.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Agent orchestration.

### Q85: A public-sector casework team has narrowed the next implementation step. A workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-agent-toolkit-020
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Agent Toolkit; lifecycle: Agent orchestration; What tool fits a framework-agnostic agent workflow with tool execution and observability?
- Difficulty: expert
- A. Use NCCL; it is used to handle distributed training communication, tensor/data/expert parallel collectives, scaling failures, or all-reduce hangs.
- B. Select TensorRT-LLM; it owns inference optimization work such as building optimized LLM engines, in-flight batching, paged KV cache, fused attention, quantization, or low TTFT.
- C. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- D. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: C
- Explanation: NeMo Agent Toolkit is the best fit because it sits in Agent orchestration: Config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Why A is wrong: NCCL belongs to Training and customization, while this scenario asks for Agent orchestration.
- Why B is wrong: TensorRT-LLM belongs to Inference optimization, while this scenario asks for Agent orchestration.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Agent orchestration.

### Q86: A logistics planning team is reviewing the production design. The customer assistant must refuse out-of-policy requests and prevent unsafe tool calls. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-guardrails-001
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: expert
- A. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- B. Select Dynamo (Triton Dynamo); it owns serving and deployment work such as supporting disaggregated prefill/decode, KV-cache-aware routing, or multi-node LLM serving at scale.
- C. NCCL is the best fit; it provides a collective communication library for multi-GPU and multi-node all-reduce, all-gather, reduce-scatter, and all-to-all.
- D. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: D
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Safety and guardrails.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why C is wrong: NCCL belongs to Training and customization, while this scenario asks for Safety and guardrails.

### Q87: An automotive support team is preparing a production rollout. The rollout is blocked because the team needs to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-guardrails-002
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: medium
- A. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- B. Select Nemotron models; it owns model selection work such as choosing a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- C. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- D. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Answer: A
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why B is wrong: Nemotron models belongs to Model selection, while this scenario asks for Safety and guardrails.
- Why C is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.

### Q88: A cybersecurity response team is preparing a release decision. Adding programmable runtime policy without replacing IAM or document permissions is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-guardrails-003
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: hard
- A. Use NIM Operator; it is used to manage K8s-native NIM lifecycle, autoscaling, or rolling model upgrades.
- B. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. NeMo Agent Toolkit is the best fit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- D. Choose Nsight Compute; it provides a CUDA kernel profiler for detailed metrics, occupancy, memory throughput, warp behavior, and kernel bottlenecks.
- Answer: B
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Safety and guardrails.
- Why D is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.

### Q89: A hospital operations team has narrowed the next implementation step. Enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-guardrails-004
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: hard
- A. Use Nemotron models; it is used to choose a model family for NVIDIA-aligned reasoning, reward, instruction, or agentic workflows.
- B. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- C. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- D. Choose RAPIDS; it provides GPU-accelerated data science libraries for dataframe, graph, ML, and vector-search-adjacent preprocessing workflows.
- Answer: C
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Safety and guardrails.
- Why B is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.
- Why D is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Safety and guardrails.

### Q90: A telecom network operations team is reviewing the production design. The customer assistant must refuse out-of-policy requests and prevent unsafe tool calls. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-guardrails-005
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: expert
- A. Use Nsight Compute; it is used to diagnose why a known kernel is memory-bound, compute-bound, or inefficient.
- B. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. Triton Inference Server is the best fit; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- D. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: D
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why C is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q91: An insurance claims group is preparing a production rollout. The rollout is blocked because the team needs to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-guardrails-006
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: medium
- A. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- B. Select NIM; it owns serving and deployment work such as for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- C. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- D. Choose NeMo Agent Toolkit; it provides a config-driven NAT workflow runtime for agent control flow across tools, retrievers, memory, MCP, tracing, eval, and serving.
- Answer: A
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why B is wrong: NIM belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why C is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Safety and guardrails.

### Q92: A semiconductor design group is preparing a release decision. Adding programmable runtime policy without replacing IAM or document permissions is the next release blocker. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-guardrails-007
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: hard
- A. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- B. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. NeMo Evaluator is the best fit; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Choose NeMo Framework; it provides a framework for training, customizing, aligning, and evaluating generative AI models.
- Answer: B
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Safety and guardrails.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Safety and guardrails.
- Why D is wrong: NeMo Framework belongs to Training and customization, while this scenario asks for Safety and guardrails.

### Q93: A public-sector casework team has narrowed the next implementation step. Enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks is the work to finish before release. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-guardrails-008
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: hard
- A. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- B. Select NGC; it owns serving and deployment work such as pulling NVIDIA containers, model artifacts, Helm charts, registry access, or reproducible deployment assets.
- C. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- D. Choose Triton Inference Server; it provides a production inference server for multiple frameworks, model repositories, dynamic batching, ensembles, and HTTP/gRPC APIs.
- Answer: C
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Safety and guardrails.
- Why B is wrong: NGC belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why D is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q94: A telecom network operations team is reviewing the production design. The customer assistant must refuse out-of-policy requests and prevent unsafe tool calls. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-guardrails-009
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: medium
- A. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- B. Select NeMo Retriever; it owns rAG and retrieval work such as connecting proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- C. NIM is the best fit; it provides inference microservices for deploying optimized models with production APIs and model profiles.
- D. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: D
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Safety and guardrails.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Safety and guardrails.
- Why C is wrong: NIM belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q95: An automotive support team is preparing a production rollout. The rollout is blocked because the team needs to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-guardrails-010
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: hard
- A. Choose NIM Operator; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- B. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- D. NGC is the best fit; it provides a catalog and registry for containers, models, Helm charts, resources, and deployment artifacts.
- Answer: B
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why C is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.
- Why D is wrong: NGC belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q96: A manufacturing quality team has narrowed the next implementation step. Adding programmable runtime policy without replacing IAM or document permissions is the next release blocker. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-guardrails-011
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: hard
- A. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- B. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- C. Choose NeMo Evaluator; it provides a microservice for LLM and agent evaluation: benchmarks, LLM-as-judge, human review, regression scoring.
- D. Use NIM; it is used for packaged, supported, optimized model serving with APIs, profiles, observability, and Kubernetes/container deployment.
- Answer: A
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why B is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why C is wrong: NeMo Evaluator belongs to Evaluation, while this scenario asks for Safety and guardrails.
- Why D is wrong: NIM belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q97: A bank fraud team is preparing a release decision. Enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks is the work to finish before release. Which NVIDIA component should own this step?
- ID: aai-hf-svc-nemo-guardrails-012
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: expert
- A. Choose NeMo Curator; it provides a pipeline/stage toolkit for curating text, image, video, and audio datasets before training: filters, classifiers, exact/fuzzy dedup, and multimodal processors.
- B. Use RAPIDS; it is used to accelerate pandas-like preprocessing, feature engineering, graph analytics, or large data prep on GPUs.
- C. Select Triton Inference Server; it owns serving and deployment work such as running multi-framework serving, dynamic batching, model ensembles, instance groups, and production inference APIs.
- D. NeMo Guardrails is the best fit; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Answer: D
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: NeMo Curator belongs to Data preparation, while this scenario asks for Safety and guardrails.
- Why B is wrong: RAPIDS belongs to Data preparation, while this scenario asks for Safety and guardrails.
- Why C is wrong: Triton Inference Server belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q98: An insurance claims group is preparing a production rollout. The customer assistant must refuse out-of-policy requests and prevent unsafe tool calls. Which NVIDIA component should the team use?
- ID: aai-hf-svc-nemo-guardrails-013
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: medium
- A. Select Nsight Compute; it owns monitoring and profiling work such as diagnosing why a known kernel is memory-bound, compute-bound, or inefficient.
- B. NIM Operator is the best fit; it provides a Kubernetes operator for managing NIM deployments: lifecycle, autoscaling, model profiles, rolling updates.
- C. Choose NeMo Guardrails; it provides programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- D. Use NeMo Retriever; it is used to connect proprietary data to RAG: parse documents, embed chunks/queries, index/search, apply permissions, or rerank candidate passages.
- Answer: C
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: Nsight Compute belongs to Monitoring and profiling, while this scenario asks for Safety and guardrails.
- Why B is wrong: NIM Operator belongs to Serving and deployment, while this scenario asks for Safety and guardrails.
- Why D is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Safety and guardrails.

### Q99: A logistics planning team is reviewing the production design. The rollout is blocked because the team needs to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks. Which NVIDIA service matches this workload?
- ID: aai-hf-svc-nemo-guardrails-014
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: hard
- A. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- B. Use NeMo Guardrails; it is used to enforce policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- C. Select NeMo Agent Toolkit; it owns agent orchestration work such as a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- D. Dynamo (Triton Dynamo) is the best fit; it provides a distributed inference serving stack for LLMs: disaggregated prefill/decode, KV-cache routing, multi-node scaling.
- Answer: B
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why A is wrong: Nemotron models belongs to Model selection, while this scenario asks for Safety and guardrails.
- Why C is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Safety and guardrails.
- Why D is wrong: Dynamo (Triton Dynamo) belongs to Serving and deployment, while this scenario asks for Safety and guardrails.

### Q100: A hospital operations team has narrowed the next implementation step. Adding programmable runtime policy without replacing IAM or document permissions is the next release blocker. Which NVIDIA component is most appropriate?
- ID: aai-hf-svc-nemo-guardrails-015
- Domain: NVIDIA Platform Implementation
- Topic: NVIDIA service: NeMo Guardrails; lifecycle: Safety and guardrails; Where do guardrails fit in a tool-using customer support assistant?
- Difficulty: expert
- A. Select NeMo Guardrails; it owns safety and guardrails work such as enforcing policy flows, safe dialog behavior, prompt-injection defenses, tool restrictions, or output checks.
- B. NeMo Retriever is the best fit; it provides the NVIDIA Retriever microservice family for document extraction, embeddings, indexing/search, and reranking in enterprise RAG.
- C. Choose Nemotron models; it provides NVIDIA model families used for reasoning, instruction following, reward modeling, and enterprise AI workflows.
- D. Use NeMo Agent Toolkit; it is used to a workflow must route requests, call tools/retrievers/memory, run sequential or parallel branches, expose an API/MCP server, or evaluate/profile agent traces.
- Answer: A
- Explanation: NeMo Guardrails is the best fit because it sits in Safety and guardrails: Programmable rails for controlling LLM and agent behavior across input, dialog, tool execution, retrieval, and output.
- Why B is wrong: NeMo Retriever belongs to RAG and retrieval, while this scenario asks for Safety and guardrails.
- Why C is wrong: Nemotron models belongs to Model selection, while this scenario asks for Safety and guardrails.
- Why D is wrong: NeMo Agent Toolkit belongs to Agent orchestration, while this scenario asks for Safety and guardrails.

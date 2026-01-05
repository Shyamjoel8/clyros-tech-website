# Clyros Tech Private Limited
## Post-Incident Review Framework

**Document Classification:** Internal Only – Crisis Management  
**Audience:** Executive Leadership, Delivery Managers, Incident Response Team  
**Purpose:** Define post-incident review process, root cause analysis, and learning capture  
**Last Updated:** January 2026

---

## Document Purpose

This document defines how Clyros Tech conducts post-incident reviews to learn from incidents and prevent recurrence. It provides:
- Review purpose and objectives
- Timeline and participants
- Root cause analysis methodology
- Corrective action identification and tracking
- Documentation and learning capture

**This document is NOT:**
- A blame or punishment framework (focus on learning)
- A substitute for immediate incident response (review happens after resolution)
- External-facing or client-visible
- A guarantee against future incidents (continuous improvement, not perfection)

---

## Review Purpose & Objectives

### Purpose

**Primary:**  
Learn from incidents to prevent recurrence and improve systems, processes, and practices.

**Secondary:**
- Identify root causes and contributing factors
- Develop corrective actions (immediate and long-term)
- Capture lessons learned and share knowledge
- Demonstrate accountability and commitment to improvement
- Fulfill client and regulatory expectations for incident analysis

---

### Objectives

**1. Understand What Happened**
- Establish factual timeline of events
- Identify all contributing factors (technical, process, human)
- Determine scope and impact (systems, clients, duration)

**2. Identify Root Causes**
- Determine underlying causes (not just symptoms)
- Identify systemic issues (not just individual errors)
- Understand why incident was possible (gaps in controls, processes, or practices)

**3. Develop Corrective Actions**
- Immediate fixes (prevent immediate recurrence)
- Short-term mitigations (reduce risk while long-term solutions developed)
- Long-term improvements (systemic changes to prevent similar incidents)

**4. Capture and Share Learnings**
- Document findings and corrective actions
- Share lessons learned with team
- Update processes and documentation
- Train team on improvements

**5. Demonstrate Accountability**
- Show clients and stakeholders we take incidents seriously
- Commit to improvement and prevention
- Build trust through transparency and action

---

## Review Timeline

### When to Conduct Post-Incident Review

**Mandatory:**
- All Level 3 and Level 4 incidents (high severity and crises)
- All security incidents (regardless of severity)
- All incidents with client impact or escalation
- All incidents with regulatory or legal implications

**Optional (at Executive Leadership discretion):**
- Level 2 incidents (if learning opportunity or pattern)
- Level 1 incidents (if systemic issue identified)

---

### Timeline for Review

**Timing:**  
Within 24-48 hours of incident resolution (while details are fresh)

**Duration:**  
60-90 minutes (depending on incident complexity)

**Preparation Time:**  
Incident Commander prepares materials 24 hours before review (timeline, impact assessment, preliminary root cause)

---

## Review Participants

### Required Participants

**Incident Commander:**
- Delivery Lead (for Level 1-2)
- Executive Leadership (for Level 3-4)

**Response Team:**
- Engineers who responded to incident
- Delivery Leads involved in response
- Technical experts (if specialized knowledge needed)

**Executive Leadership:**
- Required for Level 3-4 incidents
- Optional for Level 2 incidents (at discretion)

---

### Optional Participants

**Client Stakeholders:**
- If client requests participation or if value-add
- Demonstrates transparency and commitment to improvement
- Requires Executive Leadership approval

**Legal Counsel:**
- If legal or regulatory implications
- If incident involved data privacy or compliance

**External Advisors:**
- If specialized expertise needed (security, forensics, technical)
- If independent review requested by client or Board

---

### Facilitator

**Who:**  
Incident Commander (or neutral third party for Level 4 crises)

**Responsibilities:**
- Facilitate discussion (keep on track and productive)
- Ensure blameless approach (focus on systems, not individuals)
- Document findings and action items
- Follow up on action items and track completion

---

## Review Agenda & Process

### Pre-Review Preparation (24 Hours Before)

**Incident Commander prepares:**

1. **Incident Timeline**
   - Detailed sequence of events (what happened, when, who was involved)
   - Detection time (when incident was discovered)
   - Response actions (containment, investigation, communication)
   - Resolution time (when incident was resolved)

2. **Impact Assessment**
   - Systems affected (applications, infrastructure, data)
   - Clients affected (number, names, severity of impact)
   - Duration (how long incident lasted)
   - Business impact (revenue, reputation, client relationships)

3. **Preliminary Root Cause Analysis**
   - Initial assessment of root cause (technical, process, human)
   - Contributing factors identified
   - Evidence and data supporting analysis

4. **Response Effectiveness Assessment**
   - What went well (detection, response, communication)
   - What could be improved (gaps, delays, confusion)

---

### Review Meeting Agenda (60-90 Minutes)

**1. Incident Overview (10 Minutes)**

**Facilitator presents:**
- Incident summary (what happened, severity, impact)
- Timeline overview (detection to resolution)
- Participants introduced

**Purpose:**  
Ensure everyone has shared understanding of incident

---

**2. Timeline Review (15-20 Minutes)**

**Team walks through timeline:**
- What happened at each stage
- Who was involved and what actions were taken
- Decisions made and rationale
- Communication and coordination

**Purpose:**  
Establish factual record and identify gaps or delays

**Questions to explore:**
- When was incident first detected? How?
- How long until incident was escalated?
- What containment actions were taken? When?
- How was client notified? When?
- What information was available at each stage?
- What decisions were made? By whom?

---

**3. Root Cause Analysis (20-30 Minutes)**

**Team identifies root causes using 5 Whys or similar methodology:**

**5 Whys Example:**
1. **What happened?** Production outage (service unavailable)
2. **Why?** Database server crashed
3. **Why?** Memory exhaustion (out of memory error)
4. **Why?** Memory leak in application code
5. **Why?** Code review did not catch memory leak
6. **Why?** Code review checklist did not include memory leak checks

**Root Cause:** Code review process gap (no memory leak checks)

**Purpose:**  
Identify underlying causes (not just symptoms)

**Questions to explore:**
- What was the immediate cause (proximate cause)?
- What allowed this to happen (enabling conditions)?
- Why did our controls not prevent or detect this (control gaps)?
- Have we seen similar issues before (pattern)?
- Is this isolated or systemic (scope)?

---

**4. Contributing Factors (10-15 Minutes)**

**Team identifies all contributing factors:**

**Categories:**
- **Technical:** System design, code quality, infrastructure, dependencies
- **Process:** Procedures, controls, quality gates, documentation
- **Human:** Knowledge gaps, communication, decision-making, workload
- **Organizational:** Culture, priorities, resources, training

**Purpose:**  
Understand full context (not just single root cause)

**Questions to explore:**
- What other factors contributed to incident?
- What made incident worse or harder to resolve?
- What gaps in our systems, processes, or practices allowed this?

---

**5. Response Effectiveness (10-15 Minutes)**

**Team assesses response effectiveness:**

**What Went Well:**
- Detection and alerting (how incident was discovered)
- Containment and mitigation (actions taken to limit impact)
- Communication (internal and external)
- Coordination and collaboration (teamwork)
- Documentation (timeline, decisions, evidence)

**What Could Be Improved:**
- Delays or gaps in response
- Communication breakdowns or confusion
- Resource constraints or skill gaps
- Process or tool limitations
- Documentation or knowledge gaps

**Purpose:**  
Learn from response (not just incident itself)

---

**6. Corrective Actions (15-20 Minutes)**

**Team develops corrective actions:**

**Categories:**

**A. Immediate Actions (Already Taken):**
- Actions taken during incident response to resolve issue
- Example: Restarted server, disabled compromised account, deployed hotfix

**B. Short-Term Mitigations (Within 1 Week):**
- Actions to prevent immediate recurrence while long-term solutions developed
- Example: Increased monitoring, added manual checks, temporary workaround

**C. Long-Term Improvements (Within 1-3 Months):**
- Systemic changes to prevent similar incidents
- Example: Code review checklist update, automated testing, architecture redesign

**Purpose:**  
Develop actionable improvements (not just analysis)

**Requirements for each corrective action:**
- **Specific:** Clear description of action (what will be done)
- **Measurable:** How we will know it is complete
- **Assigned:** Owner responsible for implementation
- **Time-bound:** Deadline for completion
- **Tracked:** Documented and monitored until complete

---

**7. Lessons Learned (10 Minutes)**

**Team identifies key takeaways:**

**Questions:**
- What did we learn from this incident?
- What will we do differently next time?
- What should we continue or amplify?
- What should we share with broader team?

**Purpose:**  
Capture learning for future reference and training

---

**8. Action Items & Next Steps (5 Minutes)**

**Facilitator summarizes:**
- Corrective actions with owners and deadlines
- Documentation and communication plan
- Follow-up review date (if needed)

**Purpose:**  
Ensure accountability and follow-through

---

## Root Cause Analysis Methodology

### 5 Whys Technique

**Process:**
1. State the problem (what happened)
2. Ask "Why did this happen?" (first why)
3. Ask "Why did that happen?" (second why)
4. Continue asking "Why?" until root cause identified (typically 5 whys)
5. Verify root cause (if we fix this, will problem be prevented?)

**Example:**

**Problem:** Client reported critical bug in production

**Why 1:** Why did client discover bug (not us)?  
**Answer:** Bug was not caught in testing

**Why 2:** Why was bug not caught in testing?  
**Answer:** Test coverage did not include this scenario

**Why 3:** Why was this scenario not included in test coverage?  
**Answer:** Test plan did not consider this edge case

**Why 4:** Why did test plan not consider this edge case?  
**Answer:** Requirements did not specify this scenario

**Why 5:** Why did requirements not specify this scenario?  
**Answer:** Discovery process did not identify this use case

**Root Cause:** Discovery process gap (incomplete requirements gathering)

**Corrective Action:** Improve discovery process with additional use case analysis and client validation

---

### Fishbone Diagram (Ishikawa)

**Purpose:**  
Identify all contributing factors across multiple categories

**Categories:**
- **People:** Knowledge, skills, training, communication
- **Process:** Procedures, controls, quality gates, documentation
- **Technology:** Systems, tools, infrastructure, dependencies
- **Environment:** Workload, time pressure, resources, culture

**Process:**
1. Draw fishbone diagram with problem at head
2. Identify contributing factors in each category
3. Group related factors
4. Prioritize factors for corrective action

---

### Blameless Post-Mortem Approach

**Principles:**

**1. Focus on Systems, Not Individuals**
- Incidents are typically systemic (multiple contributing factors)
- Blaming individuals prevents learning and improvement
- Individuals did their best with information and resources available

**2. Assume Good Intent**
- No one intentionally causes incidents
- Errors are learning opportunities (not character flaws)
- Focus on how to prevent errors (not who made them)

**3. Psychological Safety**
- Team members must feel safe to share honestly
- No punishment or retaliation for honest mistakes
- Encourage transparency and learning

**4. Accountability Without Blame**
- Accountability is about ownership and improvement (not punishment)
- Individuals own corrective actions (not blame for incident)
- Team collectively owns learning and improvement

---

## Corrective Action Development

### Corrective Action Criteria

**Effective corrective actions are:**

**1. Specific**
- Clear description of what will be done
- Not vague or ambiguous ("improve monitoring" vs. "add alert for X metric")

**2. Measurable**
- How we will know it is complete
- Observable outcome or deliverable

**3. Assigned**
- Single owner responsible for implementation
- Owner has authority and resources to complete

**4. Time-Bound**
- Specific deadline for completion
- Realistic timeline based on complexity and resources

**5. Tracked**
- Documented in action item tracking system
- Monitored until complete
- Verified upon completion

---

### Corrective Action Categories

**A. Technical Improvements**
- Code fixes or refactoring
- Architecture or design changes
- Infrastructure or configuration improvements
- Monitoring or alerting enhancements
- Automated testing or quality gates

**B. Process Improvements**
- Procedure updates or documentation
- Quality gate or control enhancements
- Communication or escalation process changes
- Review or approval process improvements

**C. Training and Knowledge**
- Team training or skill development
- Documentation or knowledge base updates
- Onboarding or orientation improvements
- Cross-training or knowledge sharing

**D. Organizational Changes**
- Resource allocation or capacity planning
- Role or responsibility clarification
- Culture or behavior changes
- Priority or focus adjustments

---

### Corrective Action Prioritization

**Priority 1 (Immediate):**
- Prevents immediate recurrence of same incident
- Addresses critical risk or vulnerability
- Required by client or regulator
- Timeline: Within 1 week

**Priority 2 (Short-Term):**
- Reduces risk of similar incidents
- Improves detection or response capability
- Enhances quality or reliability
- Timeline: Within 1 month

**Priority 3 (Long-Term):**
- Systemic improvements or strategic changes
- Requires significant effort or resources
- Addresses broader issues beyond specific incident
- Timeline: Within 3 months

---

## Documentation & Communication

### Post-Incident Review Report

**Required Sections:**

**1. Executive Summary**
- Incident overview (what, when, severity, impact)
- Root cause summary (high-level)
- Key corrective actions
- Lessons learned

**2. Incident Timeline**
- Detailed sequence of events
- Detection, response, and resolution actions
- Communication and escalation

**3. Impact Assessment**
- Systems affected
- Clients affected
- Duration and business impact

**4. Root Cause Analysis**
- Root causes identified
- Contributing factors
- Evidence and data supporting analysis

**5. Response Effectiveness**
- What went well
- What could be improved

**6. Corrective Actions**
- Immediate, short-term, and long-term actions
- Owners and deadlines
- Tracking and verification plan

**7. Lessons Learned**
- Key takeaways
- Process or practice improvements
- Training or knowledge sharing needs

---

### Report Distribution

**Internal:**
- Incident response team (full report)
- Executive Leadership (full report)
- Broader team (summary or relevant sections)
- Board of Directors (for Level 4 crises)

**External:**
- Clients (summary with relevant findings and corrective actions)
- Regulators (if required by law or regulation)
- Legal counsel (for legal or compliance review)

**Confidentiality:**
- Internal reports are confidential (do not share externally without approval)
- External reports are reviewed by legal counsel before distribution

---

### Client Communication

**Timeline:**  
Within 1 week of incident resolution (or as committed during incident)

**Content:**
- Incident summary (what happened, impact, duration)
- Root cause summary (high-level, not technical details)
- Corrective actions (what we are doing to prevent recurrence)
- Commitment to improvement and partnership

**Tone:**
- Factual, transparent, professional
- Acknowledge impact and apologize appropriately
- Focus on actions and improvement (not excuses)

**Approval:**
- Executive Leadership approval required
- Legal counsel review (if legal or compliance implications)

---

### Team Communication

**Purpose:**  
Share lessons learned and improvements with broader team

**Format:**
- Team meeting or all-hands presentation
- Written summary or documentation
- Training or workshop (if significant learning)

**Content:**
- Incident summary (what happened, impact)
- Root cause and contributing factors
- Corrective actions and improvements
- Lessons learned and takeaways
- Process or practice changes

**Tone:**
- Blameless and learning-focused
- Encourage questions and discussion
- Reinforce culture of transparency and improvement

---

## Action Item Tracking

### Tracking System

**Requirements:**
- Centralized system (visible to relevant stakeholders)
- Action item details (description, owner, deadline, status)
- Status tracking (not started, in progress, completed, blocked)
- Verification and sign-off (confirm completion)

**Options:**
- Project management system (Jira, Asana, etc.)
- Spreadsheet or document (simple tracking)
- Dedicated incident management system (if available)

---

### Tracking Process

**1. Document Action Items**
- Capture all corrective actions from post-incident review
- Assign owner and deadline
- Set initial status (not started)

**2. Monitor Progress**
- Weekly review of action items (in operational review)
- Owner provides status updates
- Escalate if blocked or delayed

**3. Verify Completion**
- Owner confirms completion
- Facilitator or Executive Leadership verifies
- Mark as complete and close action item

**4. Report Status**
- Include action item status in weekly/monthly reviews
- Communicate completion to clients (if committed)
- Document in incident record (for reference)

---

## Continuous Improvement

### Learning from Patterns

**Monitor for patterns:**
- Similar incidents recurring (same root cause)
- Common contributing factors (systemic issues)
- Repeated response gaps (process or training needs)

**Action:**
- If pattern identified, conduct deeper analysis
- Develop systemic improvements (not just incident-specific fixes)
- Prioritize high-impact improvements

---

### Process Improvement

**Periodically review:**
- Post-incident review process effectiveness
- Root cause analysis methodology
- Corrective action completion rates
- Learning capture and sharing

**Adjust:**
- Update review process based on feedback
- Improve root cause analysis techniques
- Enhance action item tracking and follow-up
- Strengthen learning culture

---

### Training and Knowledge Sharing

**Incorporate learnings into:**
- Team onboarding and orientation
- Ongoing training and skill development
- Process and procedure documentation
- Knowledge base and runbooks

**Purpose:**
- Prevent new team members from repeating mistakes
- Build institutional knowledge and resilience
- Strengthen culture of learning and improvement

---

## Document Maintenance

**Owner:** Executive Leadership  
**Review Frequency:** Annually (or after major incident)  
**Distribution:** Internal only (Executive Leadership, Delivery Leads, Response Team)  
**Version Control:** Maintained in company documentation repository

**Change Process:**
1. Propose change (based on post-incident review learnings)
2. Review and approve (Executive Leadership)
3. Update documentation
4. Communicate to team
5. Train on updated framework

---

## Conclusion

Clyros Tech's post-incident review framework is built on:
1. **Learning over blame** (blameless, systems-focused approach)
2. **Root cause analysis** (5 Whys, Fishbone, systemic thinking)
3. **Corrective actions** (specific, measurable, assigned, time-bound, tracked)
4. **Documentation and communication** (internal and external transparency)
5. **Continuous improvement** (patterns, process improvement, training)

**Key Principles:**
- Every incident is learning opportunity (mandatory review for Level 3+)
- Focus on systems and processes (not individuals)
- Develop actionable corrective actions (not just analysis)
- Document and share learnings (team and clients)
- Track and verify completion (accountability)

**Success Metrics:**
- Corrective actions completed on time (> 90%)
- Incident recurrence rate declining (continuous improvement)
- Team engagement in reviews (psychological safety)
- Client satisfaction with transparency and improvement

**Next Steps:**
1. Review and approve this Post-Incident Review Framework
2. Train team on blameless post-mortem approach
3. Conduct post-incident reviews for all Level 3+ incidents
4. Track corrective actions and verify completion
5. Share learnings and improve continuously

---

**Document Version:** 1.0  
**Document Owner:** Executive Leadership  
**Review Frequency:** Annually (or after major incident)  
**Distribution:** Internal only (Executive Leadership, Delivery Leads, Response Team)

**INTERNAL ONLY – NOT FOR EXTERNAL DISTRIBUTION**

**Clyros Tech Private Limited | Engineering Excellence. Delivered with Precision.**

# Clyros Tech Private Limited
## Incident Communication Playbooks

**Document Classification:** Internal Only – Crisis Management  
**Audience:** Executive Leadership, Delivery Managers, Incident Response Team  
**Purpose:** Define communication approach for specific incident types  
**Last Updated:** January 2026

---

## Document Purpose

This document provides communication playbooks for specific incident types. For each incident category, it defines:
- Who communicates (internal and external)
- What is communicated (and what is NOT)
- Communication timing and cadence
- Escalation and approval requirements

**This document is NOT:**
- A script to be read verbatim (adapt to situation)
- A substitute for legal counsel review (engage counsel for legal matters)
- External-facing or client-visible
- A guarantee of specific outcomes or timelines

---

## Communication Principles

### 1. Transparency Over Concealment

**Principle:**  
Communicate incidents to affected stakeholders early and honestly. Do not hide or minimize incidents.

**Rationale:**
- Clients will discover incidents eventually (better they hear from us)
- Transparency builds trust; concealment destroys it
- Early communication allows clients to take protective actions

**Application:**
- Notify clients within 1 hour for Level 3+ incidents
- Provide regular updates even if "no new information"
- Admit unknowns rather than speculate

---

### 2. Facts Over Speculation

**Principle:**  
Communicate only confirmed facts. Do not speculate about root cause, timeline, or outcomes.

**Rationale:**
- Speculation creates false expectations and liability
- Root cause analysis takes time; premature conclusions are often wrong
- Clients prefer honesty about unknowns over false certainty

**Application:**
- State what is known and what is unknown
- Avoid phrases like "we believe" or "it appears" (use "we are investigating")
- Update as facts emerge (do not wait for complete picture)

---

### 3. Calm Over Drama

**Principle:**  
Use calm, factual language. Do not dramatize or minimize incidents.

**Rationale:**
- Calm language reduces panic and enables rational response
- Dramatization creates unnecessary alarm
- Minimization damages credibility when severity becomes clear

**Application:**
- Use neutral language ("incident" not "disaster")
- State impact factually (systems affected, duration, workarounds)
- Avoid superlatives ("worst ever", "catastrophic", "unprecedented")

---

### 4. Action Over Apology

**Principle:**  
Focus on what we are doing to resolve incident. Apologies are appropriate but secondary to action.

**Rationale:**
- Clients care more about resolution than apologies
- Excessive apologies can imply liability (legal risk)
- Action demonstrates accountability and competence

**Application:**
- Lead with actions taken and next steps
- Acknowledge impact and apologize appropriately
- Commit to post-incident review and improvement

---

### 5. Written Over Verbal (For External Communication)

**Principle:**  
Use written communication (email) for external stakeholders. Verbal communication (phone, video) for urgent or sensitive matters only.

**Rationale:**
- Written communication creates record and reduces misunderstanding
- Verbal communication can be misquoted or misremembered
- Written communication allows legal review before sending

**Application:**
- Initial client notification: Email (with phone follow-up if urgent)
- Status updates: Email (unless client requests phone call)
- Post-incident summary: Written report

**Exception:**
- Level 4 crisis: Executive-to-executive phone call (followed by written confirmation)
- Client requests verbal update: Accommodate, but follow with written summary

---

## Playbook 1: Security Incidents

### Incident Types

- Phishing or social engineering attempts
- Unauthorized access or credential compromise
- Malware or ransomware
- Data breach or exfiltration
- Vulnerability exploitation
- Denial of service (DoS) attacks

---

### Who Communicates

**Internal:**
- Incident Commander (Executive Leadership for Level 3+)
- Response Team (engineers, delivery leads)

**External:**
- Executive Leadership (client notification)
- Legal Counsel (regulatory notification, if required)

**Approval Required:**
- Legal counsel review (for all external communication)
- Executive Leadership approval (for all client communication)

---

### What to Communicate

**Initial Notification (Within 1 Hour for Level 3+):**

**To Client:**
- Incident type (security incident, no specifics yet)
- Systems or data potentially affected
- Actions taken immediately (containment, investigation)
- Communication cadence (hourly updates for Level 3+)
- Point of contact (Executive Leadership)

**Example:**
> Subject: Security Incident Notification – [Client Name]
>
> We are writing to inform you of a security incident that may affect [specific systems or data]. We detected [brief description of incident] on [date/time].
>
> We have immediately taken the following actions:
> - [Containment action 1]
> - [Containment action 2]
> - Engaged our security response team and legal counsel
>
> We are conducting a thorough investigation to determine the scope and impact. We will provide hourly updates until the situation is stabilized.
>
> Our next update will be provided by [specific time]. If you have immediate questions, please contact [Executive Leadership name] at [phone/email].
>
> We take this matter very seriously and are committed to transparency and resolution.
>
> [Executive Leadership Name]  
> [Title]  
> Clyros Tech Private Limited

---

**Status Updates (Hourly for Level 3+, Daily for Level 2):**

**To Client:**
- Investigation progress (what we have learned)
- Impact assessment (confirmed scope, data affected)
- Actions taken (containment, remediation, monitoring)
- Next steps and timeline
- Next update timing

**Example:**
> Subject: Security Incident Update #2 – [Client Name]
>
> Update as of [date/time]:
>
> **Investigation Progress:**
> - We have determined that [specific finding]
> - We are continuing to investigate [specific area]
>
> **Impact Assessment:**
> - [Confirmed impact or "No evidence of data exposure at this time"]
> - [Systems affected]
>
> **Actions Taken:**
> - [Remediation action 1]
> - [Remediation action 2]
>
> **Next Steps:**
> - [Planned action 1]
> - [Planned action 2]
>
> Our next update will be provided by [specific time].
>
> [Executive Leadership Name]

---

**Final Notification (After Resolution):**

**To Client:**
- Root cause summary (high-level, not technical details)
- Confirmed impact (data affected, duration, scope)
- Corrective actions taken (immediate and long-term)
- Post-incident review summary (when available)
- Commitment to improvement

**Example:**
> Subject: Security Incident Resolution – [Client Name]
>
> We are writing to inform you that the security incident reported on [date] has been resolved.
>
> **Root Cause:**
> [High-level summary without technical details]
>
> **Confirmed Impact:**
> - [Data affected or "No data exposure confirmed"]
> - [Duration and scope]
>
> **Corrective Actions:**
> - [Immediate action 1]
> - [Immediate action 2]
> - [Long-term improvement 1]
> - [Long-term improvement 2]
>
> We are conducting a comprehensive post-incident review and will share findings within [timeframe]. We are committed to learning from this incident and strengthening our security practices.
>
> Thank you for your patience and partnership during this incident.
>
> [Executive Leadership Name]

---

### What NOT to Communicate

**Do NOT:**
- Speculate about root cause before investigation complete
- Disclose technical details that could aid attackers
- Blame individuals or vendors (focus on systemic issues)
- Promise specific timelines or outcomes (may not be achievable)
- Minimize incident severity (damages credibility)
- Discuss legal liability or insurance (legal counsel only)

**Do NOT Say:**
- "We believe the attacker..." (wait for confirmation)
- "This was caused by [vendor/employee]..." (no blame)
- "We will have this resolved by..." (no promises)
- "This is not a big deal..." (minimization)
- "We are covered by insurance..." (legal matter)

---

### Communication Cadence

**Level 2 (Medium Severity):**
- Initial notification: Within 4 hours (if client-impacting)
- Status updates: Daily until resolved
- Final notification: Within 24 hours of resolution

**Level 3 (High Severity):**
- Initial notification: Within 1 hour
- Status updates: Hourly until stabilized, then every 4 hours
- Final notification: Within 24 hours of resolution

**Level 4 (Critical Severity / Crisis):**
- Initial notification: Within 30 minutes (executive-to-executive phone call + email)
- Status updates: Every 1-2 hours until stabilized, then every 4 hours
- Final notification: Within 48 hours of resolution (comprehensive report)

---

### Regulatory Notification

**When Required:**
- Data breach with personal information exposure (GDPR, HIPAA, state laws)
- Consult legal counsel immediately to determine notification requirements

**Who Notifies:**
- Legal counsel (with Executive Leadership)

**Timeline:**
- Per legal requirements (typically 72 hours for GDPR, varies by jurisdiction)

---

## Playbook 2: Service Outages

### Incident Types

- Application unavailability or errors
- Database or infrastructure failures
- Network or connectivity issues
- Third-party service dependencies
- Deployment or configuration errors

---

### Who Communicates

**Internal:**
- Incident Commander (Delivery Lead or Executive Leadership)
- Response Team (engineers)

**External:**
- Delivery Lead (client notification for Level 2)
- Executive Leadership (client notification for Level 3+)

**Approval Required:**
- Executive Leadership approval (for Level 3+ client communication)

---

### What to Communicate

**Initial Notification (Within 1 Hour for Level 3, Within 4 Hours for Level 2):**

**To Client:**
- Outage description (what is unavailable or degraded)
- Impact (users affected, functionality unavailable)
- Workarounds (if available)
- Actions taken (investigation, restoration efforts)
- Estimated restoration time (if known, otherwise "investigating")
- Communication cadence

**Example:**
> Subject: Service Outage Notification – [Client Name]
>
> We are writing to inform you of a service outage affecting [specific system or functionality]. The issue was detected at [time] and we are actively working to restore service.
>
> **Impact:**
> - [Specific functionality unavailable]
> - [Users or operations affected]
>
> **Workaround:**
> - [Workaround if available, or "No workaround available at this time"]
>
> **Actions Taken:**
> - Our engineering team is investigating the root cause
> - [Specific action taken]
>
> **Estimated Restoration:**
> - [Time if known, or "We are working to restore service as quickly as possible and will provide updates every [frequency]"]
>
> Our next update will be provided by [specific time].
>
> [Delivery Lead or Executive Leadership Name]

---

**Status Updates (Hourly for Level 3, Every 4 Hours for Level 2):**

**To Client:**
- Investigation progress
- Restoration progress (percentage, milestones)
- Updated estimated restoration time (if known)
- Next steps

**Example:**
> Subject: Service Outage Update #2 – [Client Name]
>
> Update as of [time]:
>
> **Progress:**
> - We have identified the root cause as [brief description]
> - We are implementing a fix and expect service restoration by [time or "within the next [duration]"]
>
> **Status:**
> - [Percentage restored or milestone achieved]
>
> Our next update will be provided by [specific time].
>
> [Name]

---

**Final Notification (After Resolution):**

**To Client:**
- Confirmation of service restoration
- Root cause summary
- Duration and impact
- Corrective actions (to prevent recurrence)
- Post-incident review timeline

**Example:**
> Subject: Service Restored – [Client Name]
>
> We are pleased to inform you that service has been fully restored as of [time].
>
> **Root Cause:**
> [Brief summary]
>
> **Duration and Impact:**
> - Outage duration: [X hours/minutes]
> - [Impact summary]
>
> **Corrective Actions:**
> - [Immediate fix]
> - [Long-term improvement]
>
> We will conduct a post-incident review and share findings within [timeframe]. We apologize for the disruption and appreciate your patience.
>
> [Name]

---

### What NOT to Communicate

**Do NOT:**
- Blame vendors or third parties publicly (internal matter)
- Provide overly technical root cause (keep high-level)
- Promise specific restoration time unless confident (under-promise, over-deliver)
- Minimize impact (acknowledge disruption honestly)

---

### Communication Cadence

**Level 2 (Service Degradation):**
- Initial notification: Within 4 hours
- Status updates: Every 4 hours until resolved
- Final notification: Within 24 hours of resolution

**Level 3 (Service Outage):**
- Initial notification: Within 1 hour
- Status updates: Hourly until restored
- Final notification: Within 24 hours of resolution

**Level 4 (Multi-Client Outage):**
- Initial notification: Within 30 minutes
- Status updates: Every 30-60 minutes until restored
- Final notification: Within 48 hours of resolution

---

## Playbook 3: Data Privacy Concerns

### Incident Types

- Unauthorized data access or disclosure
- Data loss or corruption
- Privacy policy violation
- Data retention or deletion issues
- Third-party data sharing concerns

---

### Who Communicates

**Internal:**
- Executive Leadership (incident commander)
- Legal Counsel (mandatory involvement)

**External:**
- Executive Leadership (client notification)
- Legal Counsel (regulatory notification, if required)

**Approval Required:**
- Legal counsel review and approval (mandatory for all external communication)

---

### What to Communicate

**Initial Notification (Within 1 Hour for Level 3+):**

**To Client:**
- Incident type (data privacy concern, no specifics yet)
- Data potentially affected (type, not specifics)
- Actions taken (containment, investigation)
- Legal counsel involvement
- Communication cadence

**Example:**
> Subject: Data Privacy Incident Notification – [Client Name]
>
> We are writing to inform you of a data privacy incident that may affect [type of data]. We detected [brief description] on [date/time].
>
> We have immediately taken the following actions:
> - [Containment action]
> - Engaged our legal counsel and data privacy team
> - Initiated a comprehensive investigation
>
> We are working to determine the scope and impact. We will provide updates every [frequency] until the situation is resolved.
>
> Our legal counsel is assessing regulatory notification requirements. We will keep you informed of all developments.
>
> [Executive Leadership Name]

---

**Status Updates (Per Legal Counsel Guidance):**

**To Client:**
- Investigation progress (per legal counsel approval)
- Impact assessment (confirmed data affected)
- Actions taken (remediation, monitoring)
- Regulatory notification status (if applicable)

**Note:** All status updates must be reviewed and approved by legal counsel before sending.

---

**Final Notification (After Resolution):**

**To Client:**
- Root cause summary (per legal counsel approval)
- Confirmed data affected (type, scope, individuals)
- Corrective actions taken
- Regulatory notification status (if applicable)
- Resources for affected individuals (if applicable)

**Note:** Final notification must be reviewed and approved by legal counsel before sending.

---

### What NOT to Communicate

**Do NOT:**
- Disclose specific data or individuals affected (legal counsel guidance required)
- Speculate about legal liability or regulatory consequences
- Promise outcomes or timelines (legal counsel decides)
- Minimize incident (legal and reputational risk)
- Discuss insurance or legal strategy

**ALWAYS:**
- Engage legal counsel immediately (mandatory)
- Follow legal counsel guidance on all communication
- Document all communication and decisions

---

### Communication Cadence

**All Levels:**
- Legal counsel determines communication cadence and content
- Follow legal counsel guidance strictly
- Do not communicate without legal counsel approval

---

## Playbook 4: Client Escalations

### Incident Types

- Client dissatisfaction or complaints
- Delivery issues or missed commitments
- Quality concerns or defects
- Communication breakdowns
- Contract disputes

---

### Who Communicates

**Internal:**
- Delivery Lead (initial response)
- Executive Leadership (escalation)

**External:**
- Delivery Lead (client operational contact)
- Executive Leadership (client executive contact)

**Approval Required:**
- Executive Leadership awareness (for all escalations)
- Executive Leadership approval (for commercial or contract matters)

---

### What to Communicate

**Initial Response (Within 2 Hours):**

**To Client:**
- Acknowledgment of concern
- Commitment to investigate and resolve
- Timeline for follow-up
- Point of contact

**Example:**
> Subject: Re: [Client's Subject Line]
>
> Thank you for bringing this to our attention. We take your concerns very seriously and are committed to resolving this matter promptly.
>
> I have immediately escalated this to our Executive Leadership and we are investigating [specific issue]. We will provide a detailed response by [specific time/date].
>
> In the meantime, if you have any immediate questions or concerns, please contact me directly at [phone/email].
>
> [Delivery Lead Name]

---

**Follow-Up Response (Within 24 Hours):**

**To Client:**
- Acknowledgment of issue and impact
- Root cause (if known)
- Actions taken to resolve
- Corrective actions to prevent recurrence
- Commitment to improvement
- Request for discussion (if appropriate)

**Example:**
> Subject: Response to [Issue] – [Client Name]
>
> Thank you for your patience as we investigated [issue]. We have completed our review and want to share our findings and corrective actions.
>
> **What Happened:**
> [Factual summary without blame]
>
> **Impact:**
> [Acknowledge impact on client]
>
> **Actions Taken:**
> - [Immediate action 1]
> - [Immediate action 2]
>
> **Corrective Actions:**
> - [Long-term improvement 1]
> - [Long-term improvement 2]
>
> We sincerely apologize for [specific impact] and are committed to ensuring this does not happen again. We value our partnership and would welcome the opportunity to discuss this further.
>
> Would you be available for a call on [proposed time]?
>
> [Executive Leadership Name]

---

### What NOT to Communicate

**Do NOT:**
- Become defensive or argumentative (acknowledge concern)
- Blame client or external factors (own the issue)
- Make excuses (focus on resolution)
- Promise outcomes you cannot guarantee
- Discuss legal liability or contract terms (escalate to legal counsel)

---

### Communication Cadence

**Level 2 (Client Dissatisfaction):**
- Initial response: Within 2 hours
- Follow-up: Within 24 hours
- Resolution: Within 1 week

**Level 3 (Client Escalation):**
- Initial response: Within 1 hour
- Follow-up: Within 4 hours
- Executive-to-executive call: Within 24 hours
- Resolution: Continuous effort until resolved

**Level 4 (Contract at Risk):**
- Initial response: Immediate (executive-to-executive phone call)
- Follow-up: Within 2 hours (written)
- Executive engagement: Continuous until resolved

---

## Internal Communication

### Team Communication

**Purpose:**  
Keep team informed of incidents and response efforts. Maintain transparency and morale.

**Who Communicates:**
- Incident Commander (to response team and broader team)

**What to Communicate:**
- Incident summary (what happened, impact, severity)
- Response actions (what we are doing)
- Roles and responsibilities (who is doing what)
- Communication expectations (status updates, availability)
- Support available (resources, escalation paths)

**What NOT to Communicate:**
- Blame or criticism of individuals (focus on systemic issues)
- Panic or drama (maintain calm, professional tone)
- Speculation or rumors (facts only)

**Cadence:**
- Initial briefing: As soon as incident declared
- Status updates: Daily (or more frequently for Level 3+)
- Post-incident debrief: Within 24-48 hours of resolution

---

### Executive Leadership Communication

**Purpose:**  
Keep Executive Leadership informed of incidents requiring their awareness or decision-making.

**Who Communicates:**
- Delivery Lead (to Executive Leadership)
- Incident Commander (status updates)

**What to Communicate:**
- Incident summary (severity, impact, scope)
- Actions taken (containment, investigation, communication)
- Decisions needed (resource allocation, client communication, escalation)
- Risks and implications (client relationship, legal, reputational)

**Cadence:**
- Initial notification: Immediate (for Level 2+)
- Status updates: Hourly (for Level 3+), Daily (for Level 2)
- Final summary: Within 24 hours of resolution

---

## Communication Templates

### Template: Initial Client Notification (Security Incident)

```
Subject: Security Incident Notification – [Client Name]

Dear [Client Contact Name],

We are writing to inform you of a security incident that may affect [specific systems or data]. We detected [brief description of incident] on [date/time].

We have immediately taken the following actions:
- [Containment action 1]
- [Containment action 2]
- Engaged our security response team and legal counsel

We are conducting a thorough investigation to determine the scope and impact. We will provide [frequency] updates until the situation is stabilized.

Our next update will be provided by [specific time]. If you have immediate questions, please contact [Executive Leadership name] at [phone/email].

We take this matter very seriously and are committed to transparency and resolution.

Sincerely,
[Executive Leadership Name]
[Title]
Clyros Tech Private Limited
```

---

### Template: Service Outage Notification

```
Subject: Service Outage Notification – [Client Name]

Dear [Client Contact Name],

We are writing to inform you of a service outage affecting [specific system or functionality]. The issue was detected at [time] and we are actively working to restore service.

**Impact:**
- [Specific functionality unavailable]
- [Users or operations affected]

**Workaround:**
- [Workaround if available, or "No workaround available at this time"]

**Actions Taken:**
- Our engineering team is investigating the root cause
- [Specific action taken]

**Estimated Restoration:**
- [Time if known, or "We are working to restore service as quickly as possible and will provide updates every [frequency]"]

Our next update will be provided by [specific time].

Sincerely,
[Delivery Lead or Executive Leadership Name]
[Title]
Clyros Tech Private Limited
```

---

### Template: Client Escalation Response

```
Subject: Response to [Issue] – [Client Name]

Dear [Client Contact Name],

Thank you for bringing [issue] to our attention and for your patience as we investigated. We have completed our review and want to share our findings and corrective actions.

**What Happened:**
[Factual summary without blame]

**Impact:**
[Acknowledge impact on client]

**Actions Taken:**
- [Immediate action 1]
- [Immediate action 2]

**Corrective Actions:**
- [Long-term improvement 1]
- [Long-term improvement 2]

We sincerely apologize for [specific impact] and are committed to ensuring this does not happen again. We value our partnership and would welcome the opportunity to discuss this further.

Would you be available for a call on [proposed time]?

Sincerely,
[Executive Leadership Name]
[Title]
Clyros Tech Private Limited
```

---

## Document Maintenance

**Owner:** Executive Leadership  
**Review Frequency:** Annually (or after major incident)  
**Distribution:** Internal only (Executive Leadership, Delivery Leads, Response Team)  
**Version Control:** Maintained in company documentation repository

**Change Process:**
1. Propose change (based on incident learnings)
2. Review and approve (Executive Leadership with legal counsel input)
3. Update documentation
4. Communicate to team
5. Train on updated playbooks

---

## Conclusion

Clyros Tech's incident communication playbooks are built on:
1. **Transparency over concealment** (communicate early and honestly)
2. **Facts over speculation** (confirmed information only)
3. **Calm over drama** (neutral, factual language)
4. **Action over apology** (focus on resolution)
5. **Written over verbal** (for external communication)

**Key Playbooks:**
- **Security Incidents:** Legal counsel involvement mandatory; factual communication; regulatory awareness
- **Service Outages:** Timely notification; regular updates; workarounds if available
- **Data Privacy Concerns:** Legal counsel approval required for all communication
- **Client Escalations:** Acknowledge concern; investigate promptly; commit to improvement

**Next Steps:**
1. Review and approve these Incident Communication Playbooks
2. Train team on communication expectations and templates
3. Conduct communication drills (tabletop exercises)
4. Update playbooks based on incident learnings

---

**Document Version:** 1.0  
**Document Owner:** Executive Leadership  
**Review Frequency:** Annually (or after major incident)  
**Distribution:** Internal only (Executive Leadership, Delivery Leads, Response Team)

**INTERNAL ONLY – NOT FOR EXTERNAL DISTRIBUTION**

**Clyros Tech Private Limited | Engineering Excellence. Delivered with Precision.**

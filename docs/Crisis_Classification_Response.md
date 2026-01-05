# Clyros Tech Private Limited
## Crisis Classification & Response Framework

**Document Classification:** Internal Only – Crisis Management  
**Audience:** Executive Leadership, Delivery Managers, Incident Response Team  
**Purpose:** Define incident classification, response expectations, and escalation  
**Last Updated:** January 2026

---

## Document Purpose

This document defines how Clyros Tech classifies and responds to incidents and crises. It provides:
- Clear distinction between incidents and crises
- Severity classification framework
- Initial response expectations
- Roles and responsibilities during incidents
- Escalation triggers and timelines

**This document is NOT:**
- A substitute for judgment and situational awareness
- A guarantee of specific response times or outcomes
- External-facing or client-visible
- A legal liability shield (legal counsel required for legal matters)

---

## Definitions

### Incident

**Definition:**  
An unplanned event that disrupts normal operations, impacts service delivery, or creates risk to clients, team, or company.

**Characteristics:**
- Contained scope (single engagement, system, or client)
- Manageable with existing resources and processes
- Does not threaten company reputation or viability
- Can be resolved through standard escalation and response

**Examples:**
- Production bug or defect affecting single client
- Service degradation or performance issue
- Minor security vulnerability (low/medium severity)
- Client dissatisfaction or complaint
- Team member absence or departure (non-critical)
- Vendor or dependency issue (temporary)

---

### Crisis

**Definition:**  
A severe incident that threatens company reputation, client relationships, legal standing, or business continuity. Requires immediate executive attention and coordinated response.

**Characteristics:**
- Broad scope (multiple clients, systems, or stakeholders)
- Exceeds normal response capacity or authority
- Threatens company reputation, viability, or legal standing
- Requires executive decision-making and external communication
- May require legal counsel, PR support, or regulatory notification

**Examples:**
- Security breach with data exposure or exfiltration
- Multi-client service outage or system failure
- Regulatory violation or legal action
- Major client escalation threatening relationship or contract
- Key person departure (founder, critical delivery lead)
- Reputational damage (public criticism, negative press)
- Financial crisis (cash flow, major contract loss)

---

## Severity Classification

### Level 1: Low Severity (Routine Incident)

**Definition:**  
Minor issue with minimal impact. Resolved through normal processes.

**Impact:**
- No client impact or minimal inconvenience
- No service disruption
- No security or compliance risk
- No reputational risk

**Response Time:**
- Acknowledge: Within 4 business hours
- Initial assessment: Within 1 business day
- Resolution target: Within 1 week

**Response Team:**
- Delivery Lead (primary)
- Engineer (as needed)

**Escalation:**
- To Executive Leadership if unresolved after 1 week

**Communication:**
- Internal only (no client communication unless requested)
- Status update in weekly operational review

**Examples:**
- Minor bug or cosmetic issue
- Documentation gap or outdated content
- Non-critical performance optimization
- Process improvement suggestion

---

### Level 2: Medium Severity (Significant Incident)

**Definition:**  
Issue with noticeable impact but workarounds available. Requires prompt attention.

**Impact:**
- Client impact with workaround available
- Service degradation but not outage
- Low/medium security vulnerability (no active exploitation)
- Minor reputational risk (contained to single client)

**Response Time:**
- Acknowledge: Within 2 business hours
- Initial assessment: Within 4 business hours
- Resolution target: Within 3 business days

**Response Team:**
- Delivery Lead (primary)
- Engineer (assigned)
- Executive Leadership (informed)

**Escalation:**
- To Executive Leadership if client-impacting or unresolved after 24 hours

**Communication:**
- Client notification (if impacting their operations)
- Internal status updates (daily until resolved)
- Executive Leadership briefing (within 24 hours)

**Examples:**
- Functional bug affecting client workflow (workaround available)
- Service degradation (slow performance, intermittent errors)
- Medium security vulnerability (requires remediation)
- Client complaint or dissatisfaction (resolvable)
- Vendor or dependency issue (impacting delivery)

---

### Level 3: High Severity (Major Incident)

**Definition:**  
Critical issue with significant impact and no workaround. Requires immediate response and executive involvement.

**Impact:**
- Significant client impact with no workaround
- Service outage or major degradation
- High security vulnerability (potential for exploitation)
- Moderate reputational risk (multiple clients or public visibility)

**Response Time:**
- Acknowledge: Within 30 minutes
- Initial assessment: Within 2 hours
- Resolution target: Within 24 hours (or continuous effort until resolved)

**Response Team:**
- Executive Leadership (incident commander)
- Delivery Lead (coordination)
- Engineers (response team)
- Legal counsel (if legal or compliance implications)

**Escalation:**
- Immediate escalation to Executive Leadership
- Client executive notification (within 2 hours)
- Board notification (if applicable, within 24 hours)

**Communication:**
- Client notification (immediate)
- Hourly status updates (until resolved or stabilized)
- Executive Leadership continuous involvement
- Post-incident review (mandatory)

**Examples:**
- Production outage (service unavailable)
- Critical bug with no workaround (blocks client operations)
- High security vulnerability (active exploitation risk)
- Data loss or corruption
- Major client escalation (contract at risk)
- Regulatory inquiry or audit finding

---

### Level 4: Critical Severity (Crisis)

**Definition:**  
Catastrophic event threatening company viability, legal standing, or multiple client relationships. Requires full crisis response.

**Impact:**
- Multiple clients impacted or entire service unavailable
- Security breach with data exposure or exfiltration
- Legal action, regulatory violation, or compliance breach
- Severe reputational damage (public, media, or industry-wide)
- Financial crisis or business continuity threat

**Response Time:**
- Acknowledge: Immediate (within 15 minutes)
- Initial assessment: Within 1 hour
- Resolution target: Continuous effort until resolved

**Response Team:**
- Executive Leadership (crisis commander)
- All relevant delivery and technical staff
- Legal counsel (mandatory)
- PR/communications advisor (if reputational)
- Board of Directors (if applicable)

**Escalation:**
- Immediate escalation to Executive Leadership and Board
- Client executive notification (within 1 hour)
- Regulatory notification (if required by law)
- Legal counsel engagement (immediate)

**Communication:**
- Client notification (immediate, executive-to-executive)
- Continuous status updates (every 1-2 hours until stabilized)
- External communication (only through approved spokesperson with legal review)
- Media response (if applicable, through legal counsel)
- Post-crisis review (mandatory, comprehensive)

**Examples:**
- Security breach with confirmed data exfiltration
- Multi-client service outage (entire platform down)
- Regulatory enforcement action or legal lawsuit
- Major client contract termination (significant revenue impact)
- Key person departure with client relationship risk (founder, multiple delivery leads)
- Public reputational crisis (negative media coverage, social media backlash)
- Financial crisis (inability to meet payroll, major contract loss)

---

## Initial Response Expectations

### Immediate Actions (First 15-30 Minutes)

**1. Acknowledge and Assess**
- Confirm incident is real (not false alarm)
- Assess severity using classification framework
- Identify immediate risks (client impact, data exposure, service availability)

**2. Notify Appropriate Stakeholders**
- Delivery Lead notifies Executive Leadership (for Level 2+)
- Executive Leadership notifies client (for Level 3+)
- Executive Leadership notifies legal counsel (for Level 4 or legal implications)

**3. Establish Incident Command**
- Assign incident commander (Delivery Lead for Level 1-2, Executive Leadership for Level 3-4)
- Assemble response team (engineers, delivery leads, advisors)
- Establish communication channel (Slack, phone bridge, war room)

**4. Contain and Stabilize**
- Implement immediate containment (stop data loss, isolate affected systems, disable compromised accounts)
- Prevent escalation (do not make situation worse)
- Preserve evidence (logs, screenshots, forensic data)

---

### First Hour Actions

**1. Initial Assessment**
- Determine scope and impact (how many clients, systems, users affected)
- Identify root cause (preliminary, not definitive)
- Assess risks (security, compliance, reputational, financial)

**2. Client Notification (If Applicable)**
- Notify affected clients (within 1 hour for Level 3+)
- Provide initial assessment (what happened, what is impacted, what we are doing)
- Establish communication cadence (hourly updates for Level 3+)

**3. Mobilize Resources**
- Assign engineers to response team
- Engage vendors or partners (if needed)
- Engage legal counsel (if legal or compliance implications)

**4. Document Everything**
- Timeline of events (what happened, when, who was involved)
- Actions taken (containment, investigation, communication)
- Decisions made (rationale, authority, outcomes)

---

### First 24 Hours Actions

**1. Root Cause Analysis**
- Investigate root cause (technical, process, human error)
- Identify contributing factors (what allowed this to happen)
- Assess systemic issues (is this isolated or indicative of broader problem)

**2. Implement Corrective Actions**
- Immediate fixes (resolve incident, restore service)
- Short-term mitigations (prevent immediate recurrence)
- Long-term improvements (systemic fixes, process changes)

**3. Client Communication**
- Regular status updates (hourly for Level 3+, daily for Level 2)
- Transparency about root cause and corrective actions
- Commitment to post-incident review and improvement

**4. Internal Communication**
- Brief team on incident and response (transparency, no blame)
- Assign action items and owners
- Schedule post-incident review (within 24-48 hours of resolution)

---

## Roles & Responsibilities

### Incident Commander

**Who:**  
- Level 1-2: Delivery Lead
- Level 3-4: Executive Leadership

**Responsibilities:**
- Overall incident response coordination
- Decision-making authority (containment, communication, resource allocation)
- Client communication (executive-to-executive for Level 3+)
- Escalation to Board or legal counsel (if needed)
- Post-incident review facilitation

**Authority:**
- Allocate resources (engineers, budget, vendors)
- Make technical and business decisions
- Communicate with clients and external stakeholders
- Engage legal counsel or advisors

---

### Response Team

**Who:**  
- Engineers (technical response and resolution)
- Delivery Leads (coordination and client communication)
- Legal counsel (legal and compliance guidance)
- PR/communications advisor (external communication, if needed)

**Responsibilities:**
- Technical investigation and resolution
- Containment and mitigation
- Documentation and evidence preservation
- Client communication support
- Post-incident review participation

**Authority:**
- Implement technical fixes and mitigations
- Access systems and data (for investigation)
- Communicate with clients (under incident commander guidance)

---

### Executive Leadership

**Responsibilities:**
- Incident commander for Level 3-4 incidents
- Client executive communication
- Board and legal counsel notification
- Resource allocation and decision-making
- Post-incident review and accountability

**Authority:**
- Final decision authority on all incident response actions
- Client contract and commercial decisions
- Legal and regulatory decisions (with counsel)
- Public communication approval

---

### Legal Counsel

**Responsibilities:**
- Legal and compliance guidance
- Regulatory notification assessment
- External communication review and approval
- Liability and risk assessment
- Post-incident legal review

**Authority:**
- Veto external communication (if legal risk)
- Require regulatory notification (if legally required)
- Engage outside counsel or specialists

---

## Escalation Triggers & Timelines

### When to Escalate to Executive Leadership

**Immediate Escalation (Same Day):**
- Level 3 or Level 4 incident (by definition)
- Security incident with potential data exposure
- Client escalation to executive level
- Legal or regulatory inquiry
- Media inquiry or public criticism
- Any incident that may require external communication

**Urgent Escalation (Within 24 Hours):**
- Level 2 incident unresolved after 24 hours
- Level 2 incident with client dissatisfaction
- Multiple related incidents (pattern or systemic issue)
- Vendor or dependency failure impacting multiple clients

**Routine Escalation (Weekly Review):**
- Level 1 incidents (status update only)
- Emerging risks or patterns

---

### When to Escalate to Legal Counsel

**Immediate Escalation:**
- Security breach with potential data exposure
- Regulatory inquiry or audit
- Legal action or threat of legal action
- Contract dispute or termination
- Any incident with potential legal liability

**Urgent Escalation (Within 24 Hours):**
- Compliance violation or audit finding
- Client contract breach or dispute
- Employee or contractor legal issue

---

### When to Escalate to Board of Directors

**Immediate Escalation:**
- Level 4 crisis (by definition)
- Security breach with confirmed data exfiltration
- Legal action or regulatory enforcement
- Major client contract termination (> 20% revenue)
- Reputational crisis with media coverage
- Financial crisis threatening business continuity

**Urgent Escalation (Within 24 Hours):**
- Level 3 incident with potential for escalation to Level 4
- Multiple Level 3 incidents (pattern or systemic issue)

---

### When to Notify Clients

**Immediate Notification (Within 1 Hour):**
- Level 3 or Level 4 incident impacting their operations
- Security incident affecting their data or systems
- Service outage or unavailability

**Urgent Notification (Within 4 Hours):**
- Level 2 incident impacting their operations (with workaround)
- Planned maintenance or changes affecting their systems

**Routine Notification (Next Business Day):**
- Level 1 incident (if client-visible)
- Post-incident review summary and corrective actions

---

## Incident Response Principles

### 1. Safety First

**Priority Order:**
1. People safety (if physical incident)
2. Data protection (prevent data loss or exposure)
3. Service availability (restore operations)
4. Reputation protection (manage communication)

**Do NOT:**
- Sacrifice data protection for speed
- Make situation worse in attempt to fix quickly
- Hide or minimize incident to avoid embarrassment

---

### 2. Contain Before Investigate

**Immediate Actions:**
- Stop data loss or exposure (disable access, isolate systems)
- Prevent escalation (do not allow incident to spread)
- Preserve evidence (logs, backups, forensic data)

**Do NOT:**
- Spend hours investigating while incident is ongoing
- Delay containment to understand root cause
- Destroy evidence in attempt to fix quickly

---

### 3. Communicate Transparently

**Communication Principles:**
- Notify clients early (even if full details unknown)
- Provide regular updates (even if "no new information")
- Be honest about unknowns (do not speculate or minimize)
- Commit to post-incident review and improvement

**Do NOT:**
- Hide incidents from clients (they will find out)
- Speculate about root cause (wait for investigation)
- Promise specific timelines or outcomes (may not be achievable)
- Blame individuals or vendors (focus on systemic issues)

---

### 4. Document Everything

**Documentation Requirements:**
- Timeline of events (what, when, who)
- Actions taken (containment, investigation, communication)
- Decisions made (rationale, authority, outcomes)
- Evidence preserved (logs, screenshots, forensic data)

**Purpose:**
- Post-incident review and learning
- Legal and compliance requirements
- Client communication and transparency
- Continuous improvement

---

### 5. Learn and Improve

**Post-Incident Actions:**
- Conduct post-incident review (within 24-48 hours)
- Identify root cause and contributing factors
- Implement corrective actions (immediate and long-term)
- Update processes and documentation
- Train team on lessons learned

**Do NOT:**
- Skip post-incident review (every incident is learning opportunity)
- Blame individuals (focus on systemic issues)
- Defer corrective actions (implement promptly)
- Repeat same mistakes (learn and improve)

---

## Incident Response Checklist

### Immediate (0-30 Minutes)

- [ ] Acknowledge incident and assess severity
- [ ] Notify incident commander (Delivery Lead or Executive Leadership)
- [ ] Establish communication channel (Slack, phone bridge)
- [ ] Implement immediate containment (stop data loss, isolate systems)
- [ ] Preserve evidence (logs, backups, forensic data)
- [ ] Notify Executive Leadership (for Level 2+)
- [ ] Notify legal counsel (for Level 3+ or legal implications)

---

### First Hour (30-60 Minutes)

- [ ] Assemble response team (engineers, delivery leads, advisors)
- [ ] Conduct initial assessment (scope, impact, root cause)
- [ ] Notify affected clients (for Level 3+)
- [ ] Establish communication cadence (hourly for Level 3+)
- [ ] Assign action items and owners
- [ ] Document timeline and actions taken

---

### First 24 Hours

- [ ] Investigate root cause (technical, process, human error)
- [ ] Implement corrective actions (immediate and short-term)
- [ ] Provide regular client updates (per communication cadence)
- [ ] Brief team on incident and response (transparency)
- [ ] Notify Board (for Level 4 or as required)
- [ ] Engage external advisors (legal, PR, technical)
- [ ] Schedule post-incident review (within 24-48 hours of resolution)

---

### Post-Resolution

- [ ] Conduct post-incident review (within 24-48 hours)
- [ ] Document lessons learned and corrective actions
- [ ] Communicate findings to clients (transparency)
- [ ] Implement long-term improvements (systemic fixes)
- [ ] Update processes and documentation
- [ ] Train team on lessons learned

---

## Incident Classification Examples

### Security Incidents

| Scenario | Severity | Rationale |
|----------|----------|-----------|
| Phishing email received by employee (not clicked) | Level 1 | No impact; routine security awareness |
| Employee clicked phishing link (no data entered) | Level 2 | Potential compromise; requires investigation |
| Employee credentials compromised (no data accessed) | Level 3 | High risk; immediate password reset and monitoring |
| Data exfiltration confirmed (client data exposed) | Level 4 | Crisis; regulatory notification, client notification, legal counsel |

---

### Service Outages

| Scenario | Severity | Rationale |
|----------|----------|-----------|
| Single client service degradation (slow performance) | Level 2 | Client impact with workaround (refresh, retry) |
| Single client service outage (unavailable) | Level 3 | Significant client impact; no workaround |
| Multi-client service outage (platform down) | Level 4 | Crisis; multiple clients impacted |

---

### Client Escalations

| Scenario | Severity | Rationale |
|----------|----------|-----------|
| Client complaint (resolvable through normal process) | Level 1 | Routine; no relationship risk |
| Client dissatisfaction (requires executive attention) | Level 2 | Moderate risk; executive involvement needed |
| Client escalation to executive (contract at risk) | Level 3 | High risk; relationship and revenue at risk |
| Client contract termination (major revenue impact) | Level 4 | Crisis; significant financial and reputational impact |

---

## Document Maintenance

**Owner:** Executive Leadership  
**Review Frequency:** Annually (or after major incident)  
**Distribution:** Internal only (Executive Leadership, Delivery Leads, Response Team)  
**Version Control:** Maintained in company documentation repository

**Change Process:**
1. Propose change (based on incident learnings or best practices)
2. Review and approve (Executive Leadership)
3. Update documentation
4. Communicate to team
5. Train on updated framework

---

## Conclusion

Clyros Tech's crisis classification and response framework is built on:
1. **Clear severity classification** (Level 1-4 based on impact and scope)
2. **Defined response expectations** (timelines, roles, actions)
3. **Escalation triggers** (when to involve Executive Leadership, legal counsel, Board)
4. **Response principles** (safety first, contain before investigate, communicate transparently, document everything, learn and improve)

**Key Principles:**
- Incidents are classified by impact and scope (not by cause)
- Response is proportional to severity (Level 1 vs Level 4)
- Escalation is expected and encouraged (not failure)
- Communication is transparent and timely (even if details unknown)
- Every incident is learning opportunity (post-incident review mandatory)

**Next Steps:**
1. Review and approve this Crisis Classification & Response Framework
2. Train team on incident classification and response expectations
3. Conduct incident response drills (tabletop exercises)
4. Update framework based on incident learnings

---

**Document Version:** 1.0  
**Document Owner:** Executive Leadership  
**Review Frequency:** Annually (or after major incident)  
**Distribution:** Internal only (Executive Leadership, Delivery Leads, Response Team)

**INTERNAL ONLY – NOT FOR EXTERNAL DISTRIBUTION**

**Clyros Tech Private Limited | Engineering Excellence. Delivered with Precision.**

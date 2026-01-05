# Clyros Tech Private Limited
## KPI Framework (Key Performance Indicators)

**Document Classification:** Internal Only – Operational  
**Audience:** Executive Leadership, Delivery Managers  
**Purpose:** Define what is monitored, why it matters, and who owns it  
**Last Updated:** January 2026

---

## Document Purpose

This document defines Clyros Tech's KPI framework: what performance indicators are monitored, why they matter, and how they are reviewed. It provides:
- KPI categories and definitions
- Monitoring approach and frequency
- Ownership and accountability
- Review and action protocols

**This document does NOT:**
- Set specific numerical targets (context-dependent)
- Promise performance outcomes
- Replace judgment with metrics
- Create metric-driven behavior at expense of outcomes

---

## KPI Philosophy

### Principles

**1. Outcomes Over Activity**
- Measure results (client satisfaction, quality, delivery) not activity (hours, lines of code)
- Leading indicators (risks, capacity) are more valuable than lagging indicators (revenue, defects)
- Metrics inform decisions; they do not replace judgment

**2. Few, Meaningful Metrics Over Metric Overload**
- Focus on metrics that drive decisions and actions
- Avoid vanity metrics (look good but do not inform action)
- Review and prune metrics that are not used

**3. Context Matters**
- Metrics are interpreted in context (engagement complexity, client maturity, team experience)
- No single metric tells the full story
- Trends matter more than point-in-time values

**4. Metrics Should Not Drive Perverse Behavior**
- Avoid metrics that incentivize gaming or shortcuts
- Example: Utilization targets can drive overbooking and burnout
- Example: Velocity targets can drive corner-cutting on quality
- Monitor for unintended consequences and adjust

**5. Transparency and Accountability**
- Metrics are visible to relevant stakeholders (not hidden)
- Ownership is clear (who monitors, who acts)
- Poor performance triggers action (not blame)

---

## KPI Categories

### 1. Delivery KPIs (Predictability & Timeliness)

**Purpose:**  
Monitor whether engagements are delivered on time, on budget, and on scope. Identify delivery risks early.

---

**KPI 1.1: Milestone Completion Rate**

**Definition:**  
Percentage of planned milestones completed on time (within agreed timeline).

**Why It Matters:**
- Indicates delivery predictability and planning accuracy
- Early warning of timeline risk or scope creep
- Client expectation management depends on meeting milestones

**Measurement:**
- Track planned vs. actual milestone completion dates
- Calculate percentage of milestones completed on time (per engagement and aggregate)

**Review Frequency:**  
Weekly (per engagement), Monthly (aggregate)

**Ownership:**  
Delivery Lead (per engagement), Executive Leadership (aggregate)

**Action Triggers:**
- < 80% on-time completion: Investigate root cause (scope creep, resource constraint, technical blocker)
- Persistent delays: Escalate to client, adjust plan, or add resources

---

**KPI 1.2: Budget Variance**

**Definition:**  
Actual effort (hours or cost) vs. planned effort for fixed-price or estimated engagements.

**Why It Matters:**
- Indicates estimation accuracy and scope control
- Overruns impact profitability and client satisfaction
- Underruns may indicate over-scoping or inefficiency

**Measurement:**
- Track planned vs. actual effort (hours or cost)
- Calculate variance percentage (per engagement and aggregate)

**Review Frequency:**  
Weekly (per engagement), Monthly (aggregate)

**Ownership:**  
Delivery Lead (per engagement), Executive Leadership (aggregate)

**Action Triggers:**
- > 10% overrun: Investigate root cause (scope creep, underestimation, inefficiency)
- Persistent overruns: Improve estimation process, adjust pricing, or decline similar work

---

**KPI 1.3: Scope Change Frequency**

**Definition:**  
Number of formal scope changes or change requests per engagement.

**Why It Matters:**
- Indicates requirements clarity and scope control
- Frequent changes disrupt delivery and impact timeline
- May indicate client readiness issues or poor scoping

**Measurement:**
- Track number of formal scope changes per engagement
- Categorize by source (client request, missed requirement, technical discovery)

**Review Frequency:**  
Monthly (per engagement and aggregate)

**Ownership:**  
Delivery Lead (per engagement), Executive Leadership (aggregate)

**Action Triggers:**
- > 3 scope changes in single engagement: Review scoping process and client readiness
- Persistent scope creep: Improve discovery process or decline similar work

---

**KPI 1.4: Delivery Cycle Time**

**Definition:**  
Time from engagement start to completion (or from feature request to deployment).

**Why It Matters:**
- Indicates delivery efficiency and process effectiveness
- Long cycle times may indicate bottlenecks or inefficiency
- Baseline for continuous improvement

**Measurement:**
- Track start and end dates for engagements or features
- Calculate average cycle time (per engagement type or aggregate)

**Review Frequency:**  
Monthly (aggregate), Quarterly (trends)

**Ownership:**  
Executive Leadership

**Action Triggers:**
- Increasing cycle time: Investigate bottlenecks (approvals, testing, deployment)
- Process improvement opportunities

---

### 2. Quality KPIs (Defects & Rework Signals)

**Purpose:**  
Monitor quality of deliverables and identify quality risks early. Minimize rework and client-reported defects.

---

**KPI 2.1: Defect Density**

**Definition:**  
Number of defects (bugs, issues) identified per unit of work (per feature, per sprint, per engagement).

**Why It Matters:**
- Indicates code quality and testing effectiveness
- High defect density increases rework and delays
- Client-reported defects damage satisfaction and reputation

**Measurement:**
- Track defects by source (internal testing, client testing, production)
- Track defects by severity (critical, major, minor)
- Calculate defect density (defects per feature or engagement)

**Review Frequency:**  
Weekly (per engagement), Monthly (aggregate)

**Ownership:**  
Delivery Lead (per engagement), Executive Leadership (aggregate)

**Action Triggers:**
- High defect density: Review code quality practices (code review, testing, automation)
- Client-reported defects: Immediate triage and resolution; root cause analysis

---

**KPI 2.2: Rework Rate**

**Definition:**  
Percentage of work that requires rework (re-implementation, significant refactoring, or bug fixes).

**Why It Matters:**
- Indicates quality of initial implementation and requirements clarity
- Rework is waste (time, cost, morale)
- High rework rate indicates process or skill gaps

**Measurement:**
- Track time spent on rework vs. new development
- Calculate rework percentage (per engagement and aggregate)

**Review Frequency:**  
Monthly (per engagement and aggregate)

**Ownership:**  
Delivery Lead (per engagement), Executive Leadership (aggregate)

**Action Triggers:**
- > 20% rework rate: Investigate root cause (unclear requirements, poor design, skill gaps)
- Process improvement or training needed

---

**KPI 2.3: Code Review Coverage**

**Definition:**  
Percentage of code changes that receive peer review before merge.

**Why It Matters:**
- Code review is primary quality gate
- Unreviewed code increases defect risk
- Review coverage indicates process adherence

**Measurement:**
- Track code changes (pull requests or commits)
- Track reviewed vs. unreviewed changes
- Calculate review coverage percentage

**Review Frequency:**  
Weekly (per engagement), Monthly (aggregate)

**Ownership:**  
Delivery Lead (per engagement), Executive Leadership (aggregate)

**Action Triggers:**
- < 95% review coverage: Investigate why reviews are skipped (time pressure, process gaps)
- Enforce review requirement

---

**KPI 2.4: Security Findings (Critical/High)**

**Definition:**  
Number of critical or high-severity security vulnerabilities identified by automated scanning or manual review.

**Why It Matters:**
- Security vulnerabilities create client risk and reputational risk
- Critical findings must be remediated before deployment
- Trend indicates security practice effectiveness

**Measurement:**
- Track security findings by severity (critical, high, medium, low)
- Track findings by source (SAST, DAST, SCA, manual review)
- Track time to remediation

**Review Frequency:**  
Weekly (per engagement), Monthly (aggregate)

**Ownership:**  
Delivery Lead (per engagement), Executive Leadership (aggregate)

**Action Triggers:**
- Critical findings: Immediate remediation (block deployment if needed)
- Persistent high findings: Review security practices and training

---

### 3. Client KPIs (Satisfaction Signals)

**Purpose:**  
Monitor client satisfaction and relationship health. Identify dissatisfaction early and address proactively.

---

**KPI 3.1: Client Satisfaction Score**

**Definition:**  
Client-reported satisfaction with delivery, communication, and outcomes (formal survey or informal feedback).

**Why It Matters:**
- Client satisfaction drives repeat business and referrals
- Dissatisfaction is early warning of churn or escalation
- Feedback informs improvement

**Measurement:**
- Formal survey (post-engagement or periodic): 1-5 scale or NPS
- Informal feedback (regular check-ins, retrospectives)
- Track satisfaction by engagement and aggregate

**Review Frequency:**  
Post-engagement (formal), Monthly (informal aggregate)

**Ownership:**  
Executive Leadership (with Delivery Lead input)

**Action Triggers:**
- Low satisfaction (< 3/5 or detractor NPS): Immediate follow-up and action plan
- Declining satisfaction: Investigate root cause and address

---

**KPI 3.2: Client Escalations**

**Definition:**  
Number of formal client escalations (complaints, dissatisfaction, requests for leadership intervention).

**Why It Matters:**
- Escalations indicate delivery or communication issues
- Frequent escalations damage relationship and reputation
- Escalation trends indicate systemic issues

**Measurement:**
- Track escalations by engagement and aggregate
- Categorize by type (delivery, quality, communication, commercial)
- Track resolution time

**Review Frequency:**  
Weekly (per engagement), Monthly (aggregate)

**Ownership:**  
Executive Leadership

**Action Triggers:**
- Any escalation: Immediate response and resolution
- Persistent escalations: Root cause analysis and process improvement

---

**KPI 3.3: Repeat Business Rate**

**Definition:**  
Percentage of clients who engage for follow-on work or ongoing support.

**Why It Matters:**
- Repeat business indicates client satisfaction and relationship strength
- More profitable than new client acquisition
- Baseline for growth and referrals

**Measurement:**
- Track clients with multiple engagements
- Calculate repeat business percentage (clients and revenue)

**Review Frequency:**  
Quarterly

**Ownership:**  
Executive Leadership

**Action Triggers:**
- Low repeat rate: Investigate client satisfaction and relationship management
- Opportunity for improvement in delivery or communication

---

**KPI 3.4: Referral Rate**

**Definition:**  
Number of new clients acquired through referrals from existing clients.

**Why It Matters:**
- Referrals indicate strong client satisfaction and trust
- Most credible form of business development
- Low-cost client acquisition

**Measurement:**
- Track new clients by source (referral, direct, other)
- Calculate referral percentage

**Review Frequency:**  
Quarterly

**Ownership:**  
Executive Leadership

**Action Triggers:**
- Low referral rate: Investigate client satisfaction and relationship strength
- Opportunity to formalize referral program or ask for referrals

---

### 4. People KPIs (Capacity & Stability)

**Purpose:**  
Monitor team capacity, utilization, and stability. Ensure sustainable workload and minimize attrition.

---

**KPI 4.1: Team Utilization**

**Definition:**  
Percentage of available capacity (hours) allocated to billable client work.

**Why It Matters:**
- Utilization impacts profitability and revenue
- Over-utilization leads to burnout and attrition
- Under-utilization indicates capacity or sales issues

**Measurement:**
- Track billable hours vs. available hours (per person and aggregate)
- Calculate utilization percentage
- Target range: 60-75% (allows for non-billable work, learning, admin)

**Review Frequency:**  
Weekly (per person), Monthly (aggregate)

**Ownership:**  
Executive Leadership

**Action Triggers:**
- > 80% utilization: Risk of burnout; reduce allocation or hire
- < 50% utilization: Capacity issue; increase sales or adjust team size

**Important Note:**  
Utilization is a constraint, not a target. Do not drive utilization at expense of quality, morale, or long-term sustainability.

---

**KPI 4.2: Attrition Rate**

**Definition:**  
Percentage of team members who leave (voluntary or involuntary) in a given period.

**Why It Matters:**
- Attrition disrupts delivery and client relationships
- High attrition indicates morale, compensation, or culture issues
- Replacement cost is high (recruiting, onboarding, ramp-up)

**Measurement:**
- Track departures (voluntary and involuntary)
- Calculate attrition rate (annual or rolling 12-month)
- Industry benchmark: 10-15% annual attrition (services firms)

**Review Frequency:**  
Monthly (departures), Quarterly (rate and trends)

**Ownership:**  
Executive Leadership

**Action Triggers:**
- > 15% annual attrition: Investigate root cause (compensation, culture, workload, management)
- Key person departure: Immediate action to retain knowledge and client relationships

---

**KPI 4.3: Hiring Pipeline & Time-to-Hire**

**Definition:**  
Number of candidates in hiring pipeline and average time from job posting to offer acceptance.

**Why It Matters:**
- Hiring pipeline indicates ability to scale and replace attrition
- Long time-to-hire delays growth and increases delivery risk
- Hiring bar must be maintained (no compromise for speed)

**Measurement:**
- Track candidates by stage (sourcing, screening, interview, offer)
- Track time-to-hire (days from posting to acceptance)
- Track offer acceptance rate

**Review Frequency:**  
Monthly

**Ownership:**  
Executive Leadership

**Action Triggers:**
- Thin pipeline: Increase sourcing efforts
- Long time-to-hire: Review hiring process for bottlenecks
- Low offer acceptance: Review compensation or candidate experience

---

**KPI 4.4: Team Skill Coverage**

**Definition:**  
Coverage of critical skills across team (no single-person dependencies).

**Why It Matters:**
- Single-person dependencies create delivery risk (attrition, vacation, illness)
- Skill gaps limit engagement opportunities
- Redundancy enables growth and resilience

**Measurement:**
- Identify critical skills (technologies, domains, client relationships)
- Track number of team members with each skill
- Identify single-person dependencies

**Review Frequency:**  
Quarterly

**Ownership:**  
Executive Leadership

**Action Triggers:**
- Single-person dependency: Cross-train or hire to build redundancy
- Skill gap: Training or hiring to address

---

### 5. Risk KPIs (Security, Compliance, Dependency)

**Purpose:**  
Monitor risk indicators and identify emerging risks early. Ensure proactive risk management.

---

**KPI 5.1: High-Priority Risk Count**

**Definition:**  
Number of high-priority risks (high likelihood + high impact) in risk register.

**Why It Matters:**
- High-priority risks threaten delivery, quality, or client satisfaction
- Risk count indicates delivery complexity and uncertainty
- Trend indicates risk management effectiveness

**Measurement:**
- Track risks by priority (high, medium, low)
- Track risk count over time (per engagement and aggregate)
- Track risk resolution time

**Review Frequency:**  
Weekly (per engagement), Monthly (aggregate)

**Ownership:**  
Delivery Lead (per engagement), Executive Leadership (aggregate)

**Action Triggers:**
- > 5 high-priority risks: Escalate to Executive Leadership; consider scope or timeline adjustment
- Increasing risk count: Investigate root cause (complexity, client readiness, resource constraint)

---

**KPI 5.2: Incident Frequency & Severity**

**Definition:**  
Number and severity of production incidents (outages, security breaches, data loss).

**Why It Matters:**
- Incidents damage client satisfaction and reputation
- Incident frequency indicates quality and operational maturity
- Incident response effectiveness is critical

**Measurement:**
- Track incidents by severity (critical, major, minor)
- Track time to detection and time to resolution
- Track root cause and corrective actions

**Review Frequency:**  
Immediate (per incident), Monthly (aggregate and trends)

**Ownership:**  
Delivery Lead (per incident), Executive Leadership (aggregate)

**Action Triggers:**
- Critical incident: Immediate response, client communication, post-mortem
- Frequent incidents: Root cause analysis and process improvement

---

**KPI 5.3: Compliance Audit Findings**

**Definition:**  
Number of compliance or security audit findings (internal or client-initiated).

**Why It Matters:**
- Compliance findings indicate process gaps or control weaknesses
- Findings can delay engagements or damage client trust
- Trend indicates compliance maturity

**Measurement:**
- Track audit findings by severity (critical, high, medium, low)
- Track findings by category (security, data privacy, process, documentation)
- Track time to remediation

**Review Frequency:**  
Per audit, Quarterly (aggregate)

**Ownership:**  
Executive Leadership

**Action Triggers:**
- Critical findings: Immediate remediation
- Persistent findings: Process improvement or training

---

**KPI 5.4: Dependency Health**

**Definition:**  
Health status of critical dependencies (third-party vendors, client teams, external systems).

**Why It Matters:**
- Dependency failures block delivery and create risk
- Proactive monitoring enables mitigation
- Dependency health is often outside our control but impacts delivery

**Measurement:**
- Identify critical dependencies per engagement
- Track dependency status (healthy, at-risk, blocked)
- Track dependency-related delays

**Review Frequency:**  
Weekly (per engagement), Monthly (aggregate)

**Ownership:**  
Delivery Lead (per engagement), Executive Leadership (aggregate)

**Action Triggers:**
- Dependency at-risk: Escalate to client or vendor; develop contingency plan
- Dependency blocked: Immediate escalation and mitigation

---

## KPI Review Cadence

### Weekly Operational Review

**Participants:** Delivery Leads, Executive Leadership

**Focus:** Active engagements, immediate risks, resource allocation

**KPIs Reviewed:**
- Milestone completion (per engagement)
- Budget variance (per engagement)
- Defect density (per engagement)
- High-priority risks (per engagement)
- Team utilization

**Outputs:**
- Action items for risk mitigation
- Resource reallocation if needed
- Escalation decisions

**Duration:** 30-60 minutes

---

### Monthly Delivery & Risk Review

**Participants:** Executive Leadership, Delivery Leads

**Focus:** Aggregate performance, trends, process improvements

**KPIs Reviewed:**
- All Delivery KPIs (aggregate)
- All Quality KPIs (aggregate)
- Client satisfaction and escalations
- Attrition and hiring pipeline
- Risk trends and incidents

**Outputs:**
- Process improvement initiatives
- Training or hiring needs
- Client relationship actions

**Duration:** 60-90 minutes

---

### Quarterly Strategic Review

**Participants:** Executive Leadership, Board (if applicable)

**Focus:** Strategic performance, growth, long-term trends

**KPIs Reviewed:**
- Repeat business and referral rates
- Attrition and team stability
- Financial performance (revenue, profitability)
- Market positioning and competitive landscape
- Operating model effectiveness

**Outputs:**
- Strategic adjustments
- Investment priorities
- Operating model changes

**Duration:** 2-3 hours

---

## KPI Ownership & Accountability

### Executive Leadership

**Owns:**
- All aggregate KPIs
- Strategic KPIs (repeat business, referrals, attrition)
- Risk KPIs (incidents, compliance, dependencies)

**Accountable For:**
- Business performance and client satisfaction
- Team stability and capacity
- Risk management and escalation

---

### Delivery Lead

**Owns:**
- Engagement-specific KPIs (milestones, budget, defects, risks)
- Quality KPIs (code review, security findings)

**Accountable For:**
- On-time, on-budget, on-quality delivery
- Risk identification and mitigation
- Client satisfaction (day-to-day)

---

### Engineers

**Owns:**
- Individual work quality (code, documentation, testing)
- Proactive communication (progress, blockers, risks)

**Accountable For:**
- Meeting commitments and quality standards
- Collaboration and knowledge sharing

---

## KPI Limitations & Cautions

### What KPIs Cannot Do

**1. Replace Judgment**
- Metrics inform decisions; they do not make decisions
- Context and qualitative factors matter
- Over-reliance on metrics leads to gaming and perverse behavior

**2. Guarantee Outcomes**
- Good metrics do not guarantee success
- Poor metrics indicate problems but do not solve them
- Action is required; monitoring alone is insufficient

**3. Capture Everything**
- Some important factors are not measurable (culture, trust, creativity)
- Qualitative feedback and observation are essential
- Metrics are one input, not the only input

### Avoiding Metric-Driven Dysfunction

**1. Do Not Tie Metrics to Individual Compensation**
- Metrics are for learning and improvement, not punishment
- Individual performance is multifaceted; metrics are incomplete
- Compensation tied to metrics drives gaming

**2. Monitor for Unintended Consequences**
- Example: Utilization targets drive overbooking and burnout
- Example: Velocity targets drive corner-cutting on quality
- Adjust or retire metrics that drive bad behavior

**3. Metrics Are Means, Not Ends**
- Goal is client satisfaction, quality delivery, and team sustainability
- Metrics are tools to achieve goals, not goals themselves
- If metrics conflict with goals, goals win

---

## Document Maintenance

**Owner:** Executive Leadership  
**Review Frequency:** Quarterly (or upon significant change)  
**Distribution:** Internal only (Executive Leadership, Delivery Leads)  
**Version Control:** Maintained in company documentation repository

**Change Process:**
1. Propose KPI change (add, remove, modify)
2. Review and approve (Executive Leadership)
3. Update documentation and dashboards
4. Communicate to team
5. Monitor effectiveness and adjust

---

## Conclusion

Clyros Tech's KPI framework focuses on:
1. **Outcomes over activity** (results, not hours)
2. **Leading indicators** (risks, capacity) over lagging indicators
3. **Few, meaningful metrics** over metric overload
4. **Context and judgment** over mechanical application
5. **Transparency and accountability** over blame

**Key Principles:**
- Metrics inform decisions; they do not replace judgment
- Metrics should not drive perverse behavior
- Action is required; monitoring alone is insufficient
- Continuous improvement based on learning and feedback

**Next Steps:**
1. Review and approve this KPI Framework
2. Implement dashboards and reporting (simple, accessible)
3. Train team on KPIs and expectations
4. Monitor effectiveness and adjust as needed

---

**Document Version:** 1.0  
**Document Owner:** Executive Leadership  
**Review Frequency:** Quarterly  
**Distribution:** Internal only (Executive Leadership, Delivery Leads)

**INTERNAL ONLY – NOT FOR EXTERNAL DISTRIBUTION**

**Clyros Tech Private Limited | Engineering Excellence. Delivered with Precision.**

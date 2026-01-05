# Clyros Tech Private Limited
## IP & Technology Ownership Register

**Document Classification:** Internal Only – Confidential  
**Audience:** Executive Leadership, Legal Counsel, M&A Advisors  
**Purpose:** IP ownership clarity for M&A readiness and operational governance  
**Last Updated:** January 2026

---

## Document Purpose

This register provides clarity on intellectual property (IP) ownership, technology assets, and licensing for Clyros Tech Private Limited. It supports:
- M&A due diligence readiness
- IP ownership verification and assignment
- Open-source compliance and risk management
- Client contract IP clarity

**This document does NOT:**
- Provide legal advice or replace legal counsel review
- Guarantee completeness (ongoing verification required)
- Disclose client-specific proprietary information
- Replace formal IP registration or legal documentation

---

## 1. IP Ownership Principles

### Company-Owned IP

**Definition:**  
Intellectual property created by Clyros Tech employees or contractors in the course of their work for the company, where ownership is assigned to the company.

**Categories:**
1. **Internal Tools & Frameworks:** Reusable code, automation scripts, deployment templates developed for internal use
2. **Methodology & Documentation:** Delivery processes, architecture patterns, operational runbooks
3. **Brand & Marketing Assets:** Company name, tagline, website, marketing materials
4. **Business Information:** Client lists, pricing models, proposals (non-client-specific)

**Ownership Requirements:**
- All employees must sign IP assignment agreements assigning work product to company
- All contractors must sign IP assignment agreements assigning work product to company
- IP created outside scope of employment/contract (personal projects) is not company-owned

**Verification Status:**
- [ACTION REQUIRED: Verify all current employees have signed IP assignment agreements]
- [ACTION REQUIRED: Verify all current and past contractors have signed IP assignment agreements]
- [ACTION REQUIRED: Identify any gaps and obtain retroactive assignments if possible]

### Client-Owned IP

**Definition:**  
Intellectual property created by Clyros Tech for clients under contract, where ownership is assigned to the client per contract terms.

**Typical Scope:**
- Custom software applications developed for client
- Client-specific integrations and APIs
- Data models and schemas specific to client business
- Documentation and training materials for client systems

**Contract Terms:**
- Most client contracts assign IP ownership to client for custom development work
- Company retains right to use general knowledge, skills, and experience gained
- Company may retain ownership of reusable tools and frameworks (if specified in contract)

**Implications:**
- Client-owned IP has no asset value to company or acquirer
- Demonstrates delivery capability and client relationships
- No ongoing obligations or liabilities (typically)

### Jointly-Owned IP

**Definition:**  
Intellectual property where ownership is shared between Clyros Tech and client or partner.

**Typical Scenarios:**
- Rare; most contracts assign full ownership to client or company
- May occur in research partnerships or co-development agreements
- Requires explicit contract language defining rights and obligations

**Current Status:**
- [To be documented: Any jointly-owned IP arrangements?]
- If none, state: "No jointly-owned IP arrangements as of [date]"

### Third-Party IP (Licensed)

**Definition:**  
Intellectual property owned by third parties and licensed to Clyros Tech for use.

**Categories:**
1. **Open-Source Software:** Used under open-source licenses (MIT, Apache, GPL, etc.)
2. **Commercial Software:** SaaS tools, development tools, cloud platforms (licensed under vendor terms)
3. **Fonts, Images, Design Assets:** Licensed from third-party providers (if any)

**Compliance Requirements:**
- Open-source licenses must be respected (attribution, copyleft obligations, etc.)
- Commercial licenses must be current and compliant with usage terms
- No unauthorized use of third-party IP

**Verification Status:**
- [ACTION REQUIRED: Document all open-source dependencies and licenses]
- [ACTION REQUIRED: Verify commercial software licenses are current and compliant]

---

## 2. Software IP Inventory

### 2.1 Company-Owned Software IP

**Category A: Internal Tools & Frameworks**

**Description:**  
Reusable code, scripts, templates, and frameworks developed by Clyros Tech for internal use or across multiple client engagements.

**Examples (Illustrative):**
- Infrastructure-as-Code (IaC) templates for AWS/Azure/GCP
- CI/CD pipeline templates and automation scripts
- Monitoring and observability configurations
- Security scanning and compliance automation
- Deployment and rollback scripts
- Development environment setup scripts

**Ownership:**
- Owned by Clyros Tech Private Limited
- Created by employees/contractors under IP assignment agreements
- May be used across multiple client engagements (with client permission if embedded in client deliverables)

**Documentation Requirements:**
- [ACTION REQUIRED: Inventory all internal tools and frameworks]
- [ACTION REQUIRED: Document author(s) and creation date]
- [ACTION REQUIRED: Verify IP assignment from author(s)]
- [ACTION REQUIRED: Document any client usage or licensing]

**Current Status:**
- Inventory incomplete; to be documented as part of M&A readiness

---

**Category B: Website & Marketing Assets**

**Description:**  
Company website, marketing materials, sales collateral, and brand assets.

**Specific Assets:**
- **Website:** www.clyrostech.com (Next.js application, hosted on Vercel)
  - Codebase owned by Clyros Tech
  - Content written by Clyros Tech or contractors (under IP assignment)
  - Design and layout owned by Clyros Tech
- **Marketing Materials:** Sales decks, one-pagers, case studies (anonymized)
- **Brand Assets:** Logo (if any), tagline, color scheme, typography

**Ownership:**
- Owned by Clyros Tech Private Limited
- No third-party claims or licenses (except open-source dependencies in website codebase)

**Documentation Requirements:**
- [ACTION REQUIRED: Document website codebase and dependencies]
- [ACTION REQUIRED: Verify content authorship and IP assignment]
- [ACTION REQUIRED: Document any third-party design assets or fonts (if used)]

**Current Status:**
- Website codebase documented in GitHub repository
- Content authorship: Internal (founder/team) or AI-assisted (no third-party claims)
- No third-party design assets requiring licensing

---

**Category C: Delivery Methodology & Documentation**

**Description:**  
Processes, templates, and documentation for client delivery, quality assurance, and project management.

**Specific Assets:**
- Delivery methodology documentation (phases, gates, deliverables)
- Architecture review templates and checklists
- Code review guidelines and standards
- Security and compliance checklists
- Project management templates (SOWs, status reports, risk registers)
- Knowledge base and internal documentation

**Ownership:**
- Owned by Clyros Tech Private Limited
- Created by employees/contractors under IP assignment agreements
- May be shared with clients as part of delivery (but ownership retained)

**Documentation Requirements:**
- [ACTION REQUIRED: Inventory all methodology and template documents]
- [ACTION REQUIRED: Verify authorship and IP assignment]
- [ACTION REQUIRED: Document any third-party content or references]

**Current Status:**
- Methodology documented in internal docs (see `docs/` folder)
- Authorship: Internal (founder/team)
- No third-party content requiring licensing

---

### 2.2 Client-Owned Software IP

**Description:**  
Software, code, and technical deliverables developed by Clyros Tech for clients under contract, where IP ownership is assigned to the client.

**Typical Deliverables:**
- Custom web applications and mobile apps
- APIs and integration code
- Data pipelines and ETL processes
- Infrastructure configurations (if client-specific)
- Documentation and operational runbooks (if client-specific)

**Ownership:**
- Owned by client per contract terms
- Clyros Tech retains no ownership rights (except as specified in contract)
- Clyros Tech retains right to use general knowledge and experience gained

**Contract Language (Typical):**
- "All work product and deliverables created under this agreement shall be the sole property of Client."
- "Contractor assigns all right, title, and interest in work product to Client."
- "Contractor retains right to use general skills, knowledge, and experience gained during engagement."

**Documentation Requirements:**
- [ACTION REQUIRED: Review all client contracts and document IP ownership terms]
- [ACTION REQUIRED: Identify any contracts with unusual IP terms (joint ownership, company ownership, etc.)]
- [ACTION REQUIRED: Confirm no client IP is commingled with company-owned IP]

**Current Status:**
- Client contracts to be reviewed and documented
- Assumption: Standard client-owned IP terms for custom development

---

### 2.3 Open-Source Software Usage

**Description:**  
Third-party open-source software used by Clyros Tech in internal tools, client deliverables, or website/infrastructure.

**Usage Scenarios:**
1. **Internal Tools:** Open-source libraries and frameworks used in company-owned tools
2. **Client Deliverables:** Open-source libraries and frameworks used in client projects (with client awareness)
3. **Website/Infrastructure:** Open-source software used in company website or infrastructure

**Common Open-Source Licenses:**
- **Permissive Licenses:** MIT, Apache 2.0, BSD (minimal restrictions; attribution required)
- **Copyleft Licenses:** GPL, AGPL, LGPL (require derivative works to be open-sourced under same license)
- **Weak Copyleft:** MPL, EPL (copyleft applies to modified files only, not entire codebase)

**Compliance Requirements:**
- **Attribution:** Provide credit to original authors (typically in LICENSE or NOTICE file)
- **License Inclusion:** Include copy of open-source license with distributed software
- **Copyleft Obligations:** If using GPL/AGPL, derivative works must be open-sourced (critical risk for proprietary software)
- **No Warranty Disclaimer:** Open-source software provided "as-is" with no warranty

**Risk Areas:**
- **GPL/AGPL Contamination:** Using GPL/AGPL code in proprietary software may require open-sourcing entire codebase
- **License Violations:** Failure to comply with attribution or license terms creates legal risk
- **Undocumented Dependencies:** Open-source libraries used without awareness or documentation

**Documentation Requirements:**
- [ACTION REQUIRED: Inventory all open-source dependencies in company-owned software]
- [ACTION REQUIRED: Document license for each dependency]
- [ACTION REQUIRED: Verify compliance with license terms (attribution, copyleft, etc.)]
- [ACTION REQUIRED: Identify any GPL/AGPL usage and assess risk]

**Current Status:**
- Website codebase uses open-source frameworks (Next.js, React, Tailwind CSS)
- Licenses: MIT, Apache 2.0 (permissive; low risk)
- No GPL/AGPL usage identified
- Full dependency audit to be completed

---

## 3. IP Assignment & Documentation

### 3.1 Employee IP Assignment

**Requirement:**  
All employees must sign IP assignment agreements assigning all work product created during employment to Clyros Tech Private Limited.

**Standard Language (Illustrative):**
> "Employee agrees that all inventions, discoveries, works of authorship, and other intellectual property created by Employee during employment, within the scope of employment or using Company resources, shall be the sole property of Company. Employee hereby assigns all right, title, and interest in such intellectual property to Company."

**Scope:**
- Covers all work product created during employment
- Covers work created using company resources (even if outside normal working hours)
- Does NOT cover personal projects created entirely outside scope of employment and without company resources

**Documentation Requirements:**
- [ACTION REQUIRED: Verify all current employees have signed IP assignment agreements]
- [ACTION REQUIRED: Obtain signed agreements from any employees who have not signed]
- [ACTION REQUIRED: Ensure all future employees sign IP assignment as part of onboarding]

**Current Status:**
- To be verified; assume standard employment agreements include IP assignment
- Gap analysis required

---

### 3.2 Contractor IP Assignment

**Requirement:**  
All contractors and consultants must sign IP assignment agreements assigning all work product created under the contract to Clyros Tech Private Limited.

**Standard Language (Illustrative):**
> "Contractor agrees that all work product and deliverables created under this agreement shall be the sole property of Company. Contractor hereby assigns all right, title, and interest in such work product to Company. Contractor represents and warrants that work product is original and does not infringe third-party rights."

**Scope:**
- Covers all work product created under the contract
- Contractor represents work is original and non-infringing
- Contractor waives moral rights (if applicable under jurisdiction)

**Documentation Requirements:**
- [ACTION REQUIRED: Verify all current contractors have signed IP assignment agreements]
- [ACTION REQUIRED: Verify all past contractors (who created IP still in use) have signed IP assignment agreements]
- [ACTION REQUIRED: Obtain retroactive assignments if any gaps identified]
- [ACTION REQUIRED: Ensure all future contractors sign IP assignment before starting work]

**Current Status:**
- To be verified; assume standard contractor agreements include IP assignment
- Gap analysis required; retroactive assignments may be needed

---

### 3.3 Client Contract IP Terms

**Requirement:**  
All client contracts must clearly define IP ownership for work product and deliverables.

**Typical Scenarios:**

**Scenario A: Client-Owned IP (Most Common)**
- All custom development work is owned by client
- Company retains no ownership rights
- Company retains right to use general knowledge and reusable tools (if specified)

**Scenario B: Company-Owned IP (Rare for Custom Development)**
- Company retains ownership of reusable tools and frameworks
- Client receives license to use deliverables
- Typically applies to SaaS or product-based engagements (not custom development)

**Scenario C: Joint Ownership (Rare)**
- Both parties own IP jointly
- Requires explicit contract language defining rights and obligations
- Complex and generally avoided

**Documentation Requirements:**
- [ACTION REQUIRED: Review all active client contracts and document IP ownership terms]
- [ACTION REQUIRED: Identify any contracts with unusual or ambiguous IP terms]
- [ACTION REQUIRED: Ensure future client contracts have clear IP ownership language]

**Current Status:**
- Client contracts to be reviewed and documented
- Assumption: Standard client-owned IP terms for custom development

---

## 4. Trademark & Brand Assets

### 4.1 Company Name & Tagline

**Company Name:** Clyros Tech Private Limited  
**Short Name:** Clyros Tech  
**Tagline:** "Engineering Excellence. Delivered with Precision."

**Trademark Status:**
- [To be documented: Is "Clyros Tech" registered as trademark in India or other jurisdictions?]
- [To be documented: Is tagline registered or claimed as trademark?]
- If not registered: Common law trademark rights may exist based on usage

**Ownership:**
- Owned by Clyros Tech Private Limited
- No third-party claims or licenses

**Documentation Requirements:**
- [ACTION REQUIRED: Verify trademark registration status]
- [ACTION REQUIRED: Document any trademark applications or registrations]
- [ACTION REQUIRED: Conduct trademark search to identify potential conflicts]

**Current Status:**
- Trademark registration status to be verified
- Assumption: No formal registration; common law rights based on usage

---

### 4.2 Logo & Visual Identity

**Logo:**
- [To be documented: Does company have formal logo design?]
- If yes: Document designer/creator and IP assignment
- If no: State "No formal logo design as of [date]"

**Visual Identity:**
- Color scheme: [To be documented if formalized]
- Typography: [To be documented if formalized]
- Design guidelines: [To be documented if formalized]

**Ownership:**
- Owned by Clyros Tech Private Limited (if created by employees/contractors under IP assignment)
- If created by third-party designer: Verify IP assignment or license

**Documentation Requirements:**
- [ACTION REQUIRED: Document logo and visual identity assets]
- [ACTION REQUIRED: Verify IP ownership and assignment]

**Current Status:**
- Visual identity to be documented

---

### 4.3 Domain Names

**Primary Domain:** www.clyrostech.com

**Registration Details:**
- Registrar: [To be documented]
- Registrant: [To be verified - should be Clyros Tech Private Limited]
- Expiration date: [To be documented]
- Auto-renewal: [To be verified - should be enabled]

**Other Domains:**
- [To be documented: Any other domains owned or registered?]

**Ownership:**
- Owned by Clyros Tech Private Limited
- No third-party claims or disputes

**Documentation Requirements:**
- [ACTION REQUIRED: Verify domain registration details]
- [ACTION REQUIRED: Ensure registrant is company (not individual)]
- [ACTION REQUIRED: Enable auto-renewal to prevent expiration]

**Current Status:**
- Domain registration details to be verified

---

## 5. Data & Confidential Information

### 5.1 Company Confidential Information

**Categories:**
1. **Client Information:** Client names, contacts, contract terms, pricing
2. **Financial Information:** Revenue, expenses, profitability, projections
3. **Employee Information:** Compensation, performance, personal data
4. **Business Strategy:** Product roadmap, M&A plans, partnership discussions
5. **Technical Information:** Architecture, security practices, proprietary tools

**Protection Measures:**
- Confidentiality obligations in employment and contractor agreements
- Access controls and data security measures
- NDA requirements for external parties (advisors, partners, vendors)

**Documentation Requirements:**
- [ACTION REQUIRED: Verify all employees and contractors have signed confidentiality agreements]
- [ACTION REQUIRED: Document data security and access control measures]
- [ACTION REQUIRED: Ensure NDAs are in place for external parties with access to confidential information]

**Current Status:**
- Confidentiality obligations assumed in employment/contractor agreements
- Data security measures to be documented

---

### 5.2 Client Confidential Information

**Definition:**  
Confidential information disclosed by clients to Clyros Tech during engagements.

**Obligations:**
- Protect client confidential information per contract terms
- Use only for purposes of engagement
- Do not disclose to third parties without client consent
- Return or destroy upon engagement completion (if required by contract)

**Documentation Requirements:**
- [ACTION REQUIRED: Review client contracts for confidentiality obligations]
- [ACTION REQUIRED: Document data handling and protection measures]
- [ACTION REQUIRED: Ensure employees and contractors are aware of confidentiality obligations]

**Current Status:**
- Client confidentiality obligations assumed in contracts
- Data handling measures to be documented

---

## 6. Open-Source Compliance

### 6.1 Open-Source Usage Policy

**Principles:**
1. **Permissive Licenses Preferred:** Use MIT, Apache 2.0, BSD licenses (minimal restrictions)
2. **Avoid Copyleft:** Avoid GPL, AGPL licenses in proprietary software (contamination risk)
3. **Document Dependencies:** Maintain inventory of all open-source dependencies and licenses
4. **Comply with Terms:** Respect attribution, license inclusion, and other requirements
5. **Client Awareness:** Inform clients of open-source usage in deliverables (if material)

**Approval Process:**
- [To be formalized: Require approval for new open-source dependencies?]
- [To be formalized: Automated scanning for license compliance?]

**Documentation Requirements:**
- [ACTION REQUIRED: Formalize open-source usage policy]
- [ACTION REQUIRED: Implement dependency scanning and license tracking]
- [ACTION REQUIRED: Train engineers on open-source compliance]

**Current Status:**
- Informal policy; engineers use judgment
- Formal policy and scanning to be implemented

---

### 6.2 Open-Source Dependency Inventory

**Website (www.clyrostech.com):**

| Dependency | License | Risk Level | Notes |
|------------|---------|------------|-------|
| Next.js | MIT | Low | Permissive license; attribution required |
| React | MIT | Low | Permissive license; attribution required |
| Tailwind CSS | MIT | Low | Permissive license; attribution required |
| TypeScript | Apache 2.0 | Low | Permissive license; attribution required |
| Node.js | MIT | Low | Permissive license; attribution required |
| [Other dependencies] | [To be documented] | [To be assessed] | [To be documented] |

**Risk Assessment:**
- **Low Risk:** Permissive licenses (MIT, Apache 2.0, BSD) with attribution only
- **Medium Risk:** Weak copyleft (MPL, EPL) requiring modified files to be open-sourced
- **High Risk:** Strong copyleft (GPL, AGPL) requiring entire codebase to be open-sourced

**Action Items:**
- [ACTION REQUIRED: Complete dependency inventory for website]
- [ACTION REQUIRED: Complete dependency inventory for internal tools]
- [ACTION REQUIRED: Identify any GPL/AGPL usage and assess risk]
- [ACTION REQUIRED: Ensure attribution and license inclusion compliance]

**Current Status:**
- Partial inventory completed (website)
- Full audit required for M&A readiness

---

## 7. IP Risks & Mitigation

### 7.1 IP Assignment Gaps

**Risk:**  
Employees or contractors who created IP have not signed assignment agreements. Company may not own IP created by these individuals.

**Impact:**
- M&A transaction may be delayed or derailed
- Acquirer may require retroactive assignments or indemnification
- Valuation may be discounted due to IP ownership uncertainty

**Mitigation:**
- Verify all current employees and contractors have signed IP assignment agreements
- Obtain retroactive assignments from past employees/contractors (if possible)
- Document any gaps and assess risk (e.g., is IP still in use? Is individual reachable?)
- Obtain representations and warranties insurance (if gaps cannot be closed)

**Current Status:**
- Verification in progress
- Gaps to be identified and closed

---

### 7.2 Open-Source License Violations

**Risk:**  
Company uses open-source software without complying with license terms (attribution, copyleft obligations, etc.).

**Impact:**
- Legal liability for license violations
- Requirement to open-source proprietary code (if GPL/AGPL contamination)
- Reputational damage
- M&A transaction may be delayed or derailed

**Mitigation:**
- Conduct comprehensive open-source dependency audit
- Verify compliance with all license terms
- Remediate any violations (remove dependencies, obtain alternative licenses, comply with terms)
- Implement automated license scanning for future dependencies

**Current Status:**
- Audit in progress
- No known violations; verification required

---

### 7.3 Client IP Disputes

**Risk:**  
Client claims ownership of IP that company believes is company-owned (or vice versa).

**Impact:**
- Legal dispute and potential litigation
- Damage to client relationship
- M&A transaction may be delayed or derailed

**Mitigation:**
- Ensure all client contracts have clear IP ownership terms
- Document any company-owned tools or frameworks used in client projects
- Obtain client acknowledgment of company IP ownership (if embedded in deliverables)
- Avoid commingling client-owned and company-owned IP

**Current Status:**
- Client contracts to be reviewed for IP clarity
- No known disputes

---

### 7.4 Third-Party IP Infringement

**Risk:**  
Company's IP (code, content, branding) infringes third-party IP rights (patents, copyrights, trademarks).

**Impact:**
- Legal liability for infringement
- Requirement to cease use of infringing IP
- Damages and legal fees
- M&A transaction may be delayed or derailed

**Mitigation:**
- Conduct trademark search to identify potential conflicts
- Ensure all content is original or properly licensed
- Avoid copying third-party code or designs
- Obtain representations and warranties from contractors that work is original and non-infringing

**Current Status:**
- No known infringement claims
- Trademark search to be conducted

---

## 8. Action Items Summary

### Critical (Must Complete Before M&A Transaction)

1. **Verify IP Assignment from All Employees**
   - Review employment agreements for IP assignment clauses
   - Obtain signed agreements from any employees without IP assignment
   - Document verification completion

2. **Verify IP Assignment from All Contractors**
   - Review contractor agreements for IP assignment clauses
   - Obtain retroactive assignments from past contractors (if gaps exist)
   - Document verification completion

3. **Review Client Contracts for IP Ownership Terms**
   - Document IP ownership terms for all active client contracts
   - Identify any unusual or ambiguous terms
   - Ensure future contracts have clear IP language

4. **Complete Open-Source Dependency Audit**
   - Inventory all open-source dependencies (website, internal tools)
   - Document licenses for each dependency
   - Verify compliance with license terms
   - Identify and remediate any GPL/AGPL contamination risk

5. **Verify Trademark and Domain Ownership**
   - Confirm trademark registration status (if any)
   - Verify domain registration is in company name
   - Enable auto-renewal for domain

### Important (Enhances M&A Readiness)

6. **Formalize Open-Source Usage Policy**
   - Document policy for open-source usage and approval
   - Implement automated license scanning
   - Train engineers on compliance

7. **Document Company-Owned IP Inventory**
   - Inventory all internal tools, frameworks, and reusable code
   - Document authorship and creation date
   - Verify IP assignment from authors

8. **Conduct Trademark Search**
   - Identify potential trademark conflicts
   - Consider trademark registration (if not already done)

9. **Implement IP Documentation Process**
   - Establish process for documenting new IP creation
   - Maintain current IP inventory on ongoing basis
   - Assign ownership for IP documentation and compliance

---

## Conclusion

IP ownership clarity is critical for M&A readiness. Key priorities:

1. **Close IP Assignment Gaps:** Verify all employees and contractors have assigned IP to company
2. **Client Contract Clarity:** Ensure all client contracts clearly define IP ownership
3. **Open-Source Compliance:** Audit dependencies and verify license compliance
4. **Trademark & Brand Protection:** Verify trademark and domain ownership

**Next Steps:**
1. Complete action items listed above
2. Engage legal counsel for IP diligence review
3. Maintain IP register on ongoing basis (quarterly updates)
4. Prepare IP documentation for M&A data room (if transaction pursued)

---

**Document Version:** 1.0  
**Document Owner:** Executive Leadership  
**Review Frequency:** Quarterly  
**Distribution:** Executive Leadership, Legal Counsel, M&A Advisors (under NDA)

**CONFIDENTIAL – NOT FOR EXTERNAL DISTRIBUTION**

**Clyros Tech Private Limited | Engineering Excellence. Delivered with Precision.**

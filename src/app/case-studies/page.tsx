import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Representative project outcomes and delivery examples from Clyros Tech enterprise engagements.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies | Clyros Tech",
    description:
      "Representative project outcomes and delivery examples from Clyros Tech enterprise engagements.",
    url: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="space-y-14 py-14 lg:space-y-20 lg:py-20">
      <header className="pb-2">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-900 lg:text-5xl">
            Case Studies
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 lg:text-xl">
            Representative examples of enterprise delivery—demonstrating our approach, technical
            depth, and ability to solve complex business-critical challenges.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600">
            Client confidentiality agreements prevent us from disclosing specific names or proprietary
            details. The following case studies have been anonymized while preserving technical
            accuracy and representative outcomes.
          </p>
        </div>
      </header>

      <section aria-label="Case Studies" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Case Study 1 */}
            <article className="rounded-lg border border-zinc-200 bg-white p-8 lg:p-12">
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                  Healthcare
                </span>
                <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                  Cloud Migration
                </span>
                <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                  Data Platform
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
                Multi-Facility Health System: Cloud Migration &amp; Clinical Data Platform
              </h2>

              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="text-base font-semibold text-zinc-900">Client Context</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    A regional health system operating 12 hospitals and 75+ outpatient facilities across
                    three states. The organization maintained a legacy on-premises data center hosting
                    multiple clinical applications, analytics systems, and patient data repositories.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    Aging infrastructure, increasing maintenance costs, limited disaster recovery
                    capabilities, and the need for real-time clinical analytics drove the decision to
                    pursue cloud migration.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-zinc-900">Business Challenge</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                    <li>
                      <strong>Legacy infrastructure nearing end-of-life</strong> with escalating
                      maintenance costs and limited scalability
                    </li>
                    <li>
                      <strong>Fragmented clinical data</strong> across multiple systems preventing
                      unified patient views and analytics
                    </li>
                    <li>
                      <strong>HIPAA compliance requirements</strong> necessitating rigorous security
                      controls, encryption, and audit trails
                    </li>
                    <li>
                      <strong>Zero tolerance for downtime</strong> during migration—clinical operations
                      could not be interrupted
                    </li>
                    <li>
                      <strong>Limited cloud expertise</strong> within internal IT requiring knowledge
                      transfer and training
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-zinc-900">Our Approach</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900">Phase 1: Assessment &amp; Strategy (8 weeks)</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                        <li>Comprehensive application portfolio assessment and dependency mapping</li>
                        <li>Cloud platform selection (AWS chosen based on HIPAA compliance, regional presence, and healthcare reference architecture)</li>
                        <li>Migration wave planning prioritizing low-risk applications first</li>
                        <li>HIPAA compliance architecture design with security controls matrix</li>
                        <li>Cost modeling and TCO analysis</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900">Phase 2: Foundation &amp; Pilot (12 weeks)</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                        <li>AWS landing zone implementation with multi-account structure</li>
                        <li>Network architecture (VPC design, Direct Connect, VPN failover)</li>
                        <li>Identity and access management (IAM, SSO integration with Active Directory)</li>
                        <li>Security baseline (encryption, logging, monitoring, GuardDuty, Security Hub)</li>
                        <li>Pilot migration of non-critical application to validate process</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900">Phase 3: Core Application Migration (24 weeks)</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                        <li>Phased migration of 37 applications across six migration waves</li>
                        <li>Rehost strategy for legacy applications (lift-and-shift to EC2)</li>
                        <li>Replatform strategy for modernization candidates (containerization, managed services)</li>
                        <li>Data migration with validation and reconciliation processes</li>
                        <li>Cutover planning with rollback procedures and business continuity</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900">Phase 4: Clinical Data Platform (16 weeks)</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                        <li>HL7 and FHIR integration layer connecting EHR, lab systems, imaging, and ancillary systems</li>
                        <li>Real-time data pipeline ingesting clinical events (Kinesis, Lambda, S3)</li>
                        <li>Data lake architecture for longitudinal patient records</li>
                        <li>Analytics platform (Redshift, QuickSight) for clinical intelligence and population health</li>
                        <li>API layer for third-party application integration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-zinc-900">Technical Solution</h3>
                  <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                      <h4 className="text-sm font-semibold text-zinc-900">Architecture Components</h4>
                      <ul className="mt-3 space-y-1 text-sm text-zinc-600">
                        <li>• AWS multi-account structure (12 accounts)</li>
                        <li>• Direct Connect (2x 10Gbps) + VPN failover</li>
                        <li>• EC2 instances (mix of on-demand and reserved)</li>
                        <li>• RDS for relational databases (SQL Server, PostgreSQL)</li>
                        <li>• S3 for object storage and data lake</li>
                        <li>• Kinesis for real-time data streaming</li>
                        <li>• Lambda for serverless data processing</li>
                        <li>• Redshift for analytics data warehouse</li>
                        <li>• ECS for containerized applications</li>
                        <li>• CloudWatch, CloudTrail, GuardDuty for monitoring</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                      <h4 className="text-sm font-semibold text-zinc-900">Security &amp; Compliance</h4>
                      <ul className="mt-3 space-y-1 text-sm text-zinc-600">
                        <li>• HIPAA Business Associate Agreement (BAA) with AWS</li>
                        <li>• Encryption at rest (EBS, S3, RDS with KMS)</li>
                        <li>• Encryption in transit (TLS 1.2+)</li>
                        <li>• Network segmentation and security groups</li>
                        <li>• Multi-factor authentication (MFA) enforced</li>
                        <li>• Centralized logging and audit trails</li>
                        <li>• Automated compliance scanning (AWS Config, Security Hub)</li>
                        <li>• Backup and disaster recovery (cross-region replication)</li>
                        <li>• Incident response procedures and runbooks</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-zinc-900">Outcomes</h3>
                  <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                      <div className="text-3xl font-semibold text-zinc-900">37</div>
                      <div className="mt-1 text-sm text-zinc-600">Applications migrated with zero unplanned downtime</div>
                    </div>
                    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                      <div className="text-3xl font-semibold text-zinc-900">42%</div>
                      <div className="mt-1 text-sm text-zinc-600">Infrastructure cost reduction in first year</div>
                    </div>
                    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                      <div className="text-3xl font-semibold text-zinc-900">15M+</div>
                      <div className="mt-1 text-sm text-zinc-600">Clinical events processed daily via data platform</div>
                    </div>
                  </div>
                  <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                    <li>
                      <strong>Zero security incidents or HIPAA violations</strong> during migration and first 18 months of operation
                    </li>
                    <li>
                      <strong>Unified clinical data platform</strong> enabling real-time analytics, population health insights, and regulatory reporting
                    </li>
                    <li>
                      <strong>Improved disaster recovery posture</strong> with RPO &lt; 15 minutes, RTO &lt; 4 hours
                    </li>
                    <li>
                      <strong>Enhanced scalability</strong> supporting 23% patient volume growth without infrastructure expansion
                    </li>
                    <li>
                      <strong>Knowledge transfer completed</strong> with internal IT team managing day-to-day operations
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-zinc-900">Technologies Used</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">AWS</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">EC2</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">RDS</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">S3</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">Kinesis</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">Lambda</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">Redshift</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">ECS</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">Terraform</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">Python</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">HL7</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">FHIR</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Case Study 2 */}
            <article className="rounded-lg border border-zinc-200 bg-white p-8 lg:p-12">
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                  Financial Services
                </span>
                <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                  Core Modernization
                </span>
                <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                  Microservices
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
                Regional Bank: Core Banking System Modernization
              </h2>

              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="text-base font-semibold text-zinc-900">Client Context</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    A regional bank with $8B in assets, serving commercial and retail customers across
                    150 branches. The institution operated a 20-year-old core banking system built on a
                    monolithic architecture, limiting product innovation and digital channel capabilities.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    Increasing competition from digital-first banks and fintech companies, coupled with
                    regulatory pressure to improve risk management and reporting, necessitated core
                    system modernization.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-zinc-900">Business Challenge</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                    <li>
                      <strong>Monolithic legacy system</strong> preventing rapid product launches and
                      feature updates
                    </li>
                    <li>
                      <strong>Limited API capabilities</strong> hindering digital channel development and
                      third-party integration
                    </li>
                    <li>
                      <strong>Batch-oriented processing</strong> unable to support real-time transaction
                      requirements
                    </li>
                    <li>
                      <strong>Regulatory compliance gaps</strong> in risk reporting, AML, and fraud
                      detection
                    </li>
                    <li>
                      <strong>Technical debt and vendor lock-in</strong> increasing operational risk and
                      maintenance costs
                    </li>
                    <li>
                      <strong>Impossible to replace core system atomically</strong>—required phased
                      strangler pattern approach
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-zinc-900">Our Approach</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900">Phase 1: Strategy &amp; Architecture (10 weeks)</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                        <li>Current-state assessment and capability mapping</li>
                        <li>Target architecture design (microservices, event-driven, API-first)</li>
                        <li>Strangler fig pattern strategy for incremental migration</li>
                        <li>Domain-driven design (DDD) to identify bounded contexts</li>
                        <li>Technology stack selection and proof-of-concept</li>
                        <li>Risk assessment and mitigation planning</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900">Phase 2: Platform Foundation (16 weeks)</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                        <li>Kubernetes platform deployment (Azure AKS with multi-zone HA)</li>
                        <li>Service mesh implementation (Istio for traffic management, observability)</li>
                        <li>API gateway and developer portal</li>
                        <li>Event streaming backbone (Kafka for event-driven architecture)</li>
                        <li>Observability stack (Prometheus, Grafana, Jaeger, ELK)</li>
                        <li>CI/CD pipelines (GitLab CI, ArgoCD for GitOps)</li>
                        <li>Security baseline (network policies, RBAC, secrets management)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900">Phase 3: First Bounded Context (12 weeks)</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                        <li>Account Management domain extracted from monolith</li>
                        <li>Microservices development (Java / Spring Boot)</li>
                        <li>Event sourcing and CQRS patterns for audit and consistency</li>
                        <li>Change data capture (CDC) from legacy system using Debezium</li>
                        <li>Dual-write mitigation and eventual consistency handling</li>
                        <li>Comprehensive testing (unit, integration, contract, E2E)</li>
                        <li>Production deployment with canary release</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900">Phase 4: Additional Domains (36 weeks, iterative)</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                        <li>Payments &amp; Transfers domain (real-time transaction processing)</li>
                        <li>Lending &amp; Credit domain (loan origination and servicing)</li>
                        <li>Customer Identity &amp; Access Management (IAM)</li>
                        <li>Fraud Detection &amp; AML (real-time transaction monitoring)</li>
                        <li>Regulatory Reporting (automated compliance data aggregation)</li>
                        <li>Iterative deployment with gradual traffic migration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-zinc-900">Technical Solution</h3>
                  <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                      <h4 className="text-sm font-semibold text-zinc-900">Architecture Patterns</h4>
                      <ul className="mt-3 space-y-1 text-sm text-zinc-600">
                        <li>• Strangler fig pattern for incremental migration</li>
                        <li>• Domain-driven design (DDD) bounded contexts</li>
                        <li>• Event sourcing and CQRS for auditability</li>
                        <li>• API-first design with OpenAPI specifications</li>
                        <li>• Event-driven architecture (Kafka event backbone)</li>
                        <li>• Saga pattern for distributed transactions</li>
                        <li>• Circuit breaker and retry patterns for resilience</li>
                        <li>• Change data capture (CDC) for legacy integration</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                      <h4 className="text-sm font-semibold text-zinc-900">Technology Stack</h4>
                      <ul className="mt-3 space-y-1 text-sm text-zinc-600">
                        <li>• Azure Kubernetes Service (AKS)</li>
                        <li>• Java 17, Spring Boot, Spring Cloud</li>
                        <li>• Apache Kafka for event streaming</li>
                        <li>• PostgreSQL (Azure Database for PostgreSQL)</li>
                        <li>• Redis for caching and session management</li>
                        <li>• Kong API Gateway</li>
                        <li>• Istio service mesh</li>
                        <li>• Prometheus, Grafana, Jaeger, ELK Stack</li>
                        <li>• GitLab CI/CD, ArgoCD, Terraform</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-zinc-900">Outcomes</h3>
                  <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                      <div className="text-3xl font-semibold text-zinc-900">85%</div>
                      <div className="mt-1 text-sm text-zinc-600">Reduction in time-to-market for new products</div>
                    </div>
                    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                      <div className="text-3xl font-semibold text-zinc-900">99.95%</div>
                      <div className="mt-1 text-sm text-zinc-600">System availability achieved (vs. 99.7% prior)</div>
                    </div>
                    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                      <div className="text-3xl font-semibold text-zinc-900">250M+</div>
                      <div className="mt-1 text-sm text-zinc-600">Annual transactions processed via new platform</div>
                    </div>
                  </div>
                  <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                    <li>
                      <strong>Real-time transaction capabilities</strong> enabling instant payments and fraud detection
                    </li>
                    <li>
                      <strong>API-first architecture</strong> accelerating digital channel development and partner integration
                    </li>
                    <li>
                      <strong>Improved regulatory compliance</strong> with automated AML screening and real-time reporting
                    </li>
                    <li>
                      <strong>Enhanced resilience</strong> with multi-zone deployment and automated failover
                    </li>
                    <li>
                      <strong>Developer productivity improvements</strong> via self-service platform and CI/CD automation
                    </li>
                    <li>
                      <strong>Successful production rollout</strong> with zero customer-facing incidents during migration
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-zinc-900">Technologies Used</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">Azure</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">Kubernetes</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">Java</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">Spring Boot</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">Kafka</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">PostgreSQL</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">Redis</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">Istio</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">Kong</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">Terraform</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">GitLab CI</span>
                    <span className="rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-700">ArgoCD</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

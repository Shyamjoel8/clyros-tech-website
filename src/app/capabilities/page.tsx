import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Technical capabilities, methodologies, and technology expertise that power Clyros Tech delivery excellence.",
  alternates: { canonical: "/capabilities" },
  openGraph: {
    title: "Capabilities | Clyros Tech",
    description:
      "Technical capabilities, methodologies, and technology expertise that power Clyros Tech delivery excellence.",
    url: "/capabilities",
  },
};

export default function CapabilitiesPage() {
  return (
    <div className="space-y-14 py-14 lg:space-y-20 lg:py-20">
      <header className="pb-2">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-900 lg:text-5xl">
            Technical Capabilities That Power Enterprise Delivery
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600 lg:text-xl">
            Clyros Tech combines deep technical expertise with rigorous engineering discipline
            and proven delivery methodology to solve complex enterprise technology challenges.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600 lg:text-xl">
            Our capabilities span the full technology stack—from architecture and strategy through
            implementation, operations, and continuous improvement.
          </p>
        </div>
      </header>

      <section aria-labelledby="core-capabilities" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="core-capabilities" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Core Technical Capabilities
          </h2>

          <div className="mt-10 space-y-8">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                Cloud Architecture &amp; Engineering
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Platform Expertise</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>AWS (Certified Solutions Architect, DevOps Engineer)</li>
                    <li>Microsoft Azure (Solutions Architect, DevOps Engineer)</li>
                    <li>Google Cloud Platform (Professional Cloud Architect)</li>
                    <li>Multi-cloud and hybrid cloud architectures</li>
                    <li>Cloud migration strategy and execution</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Key Services</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>Serverless architecture (Lambda, Azure Functions, Cloud Functions)</li>
                    <li>Container orchestration (ECS, AKS, GKE, Kubernetes)</li>
                    <li>Infrastructure as Code (Terraform, CloudFormation, ARM)</li>
                    <li>Cloud security and compliance architecture</li>
                    <li>Cost optimization and FinOps practices</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                Application Development
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Backend Technologies</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>Java / Spring Boot ecosystem</li>
                    <li>.NET Core / C# / ASP.NET</li>
                    <li>Node.js / TypeScript / NestJS</li>
                    <li>Python / Django / FastAPI</li>
                    <li>Go for high-performance services</li>
                    <li>Microservices and event-driven architectures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Frontend Technologies</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>React / Next.js / TypeScript</li>
                    <li>Angular for enterprise applications</li>
                    <li>Vue.js for complex interactive UIs</li>
                    <li>Progressive Web Apps (PWA)</li>
                    <li>Responsive and accessible design (WCAG 2.1)</li>
                    <li>Design systems and component libraries</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                Data Engineering &amp; Analytics
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Data Platforms</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>Relational databases (PostgreSQL, MySQL, Oracle, SQL Server)</li>
                    <li>NoSQL databases (MongoDB, DynamoDB, Cosmos DB, Cassandra)</li>
                    <li>Data warehousing (Snowflake, Redshift, BigQuery, Synapse)</li>
                    <li>Real-time streaming (Kafka, Kinesis, Event Hubs)</li>
                    <li>Data lake architectures (S3, ADLS, GCS)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Analytics &amp; BI</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>ETL/ELT pipeline development (Airflow, dbt, Glue, Data Factory)</li>
                    <li>Business intelligence platforms (Tableau, Power BI, Looker)</li>
                    <li>Advanced analytics and machine learning integration</li>
                    <li>Data governance and quality frameworks</li>
                    <li>Master data management (MDM)</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                DevOps &amp; Site Reliability Engineering
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">CI/CD &amp; Automation</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>Jenkins, GitLab CI/CD, GitHub Actions, Azure DevOps</li>
                    <li>Infrastructure as Code (Terraform, Ansible, Pulumi)</li>
                    <li>Configuration management (Ansible, Chef, Puppet)</li>
                    <li>Container orchestration (Kubernetes, Docker, Helm)</li>
                    <li>GitOps workflows (ArgoCD, Flux)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Observability &amp; Operations</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>Monitoring and alerting (Prometheus, Grafana, Datadog, New Relic)</li>
                    <li>Log aggregation (ELK Stack, Splunk, CloudWatch)</li>
                    <li>Distributed tracing (Jaeger, Zipkin, X-Ray)</li>
                    <li>Incident management and on-call processes</li>
                    <li>Capacity planning and performance optimization</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                Integration &amp; API Management
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Integration Patterns</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>RESTful API design and implementation</li>
                    <li>GraphQL for flexible data queries</li>
                    <li>gRPC for high-performance service communication</li>
                    <li>Event-driven integration (Kafka, RabbitMQ, SNS/SQS)</li>
                    <li>Enterprise service bus (ESB) and integration platforms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">API Management</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>API gateway implementation (Kong, Apigee, AWS API Gateway)</li>
                    <li>API security (OAuth 2.0, OpenID Connect, JWT)</li>
                    <li>Rate limiting, throttling, and quota management</li>
                    <li>API versioning and lifecycle management</li>
                    <li>Developer portal and documentation</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 lg:text-xl">
                Security &amp; Compliance
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Security Engineering</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>Application security testing (SAST, DAST, IAST)</li>
                    <li>Vulnerability management and remediation</li>
                    <li>Identity and access management (IAM)</li>
                    <li>Encryption (at rest, in transit, key management)</li>
                    <li>Security architecture review and threat modeling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">Compliance Frameworks</h4>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                    <li>HIPAA for healthcare applications</li>
                    <li>PCI-DSS for payment processing</li>
                    <li>SOC 2 Type II controls and audit readiness</li>
                    <li>GDPR and data privacy regulations</li>
                    <li>FedRAMP and government security standards</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="delivery-excellence" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="delivery-excellence" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
            Delivery Excellence
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Agile &amp; Iterative Delivery</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                We practice disciplined Agile methodologies adapted to enterprise constraints—balancing
                iterative delivery with governance, documentation, and change management requirements.
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                <li>Scrum and Kanban frameworks</li>
                <li>Sprint planning and retrospectives</li>
                <li>Continuous integration and deployment</li>
                <li>Product backlog management</li>
                <li>Stakeholder communication and transparency</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Quality Assurance</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Quality is embedded throughout our delivery process—not relegated to a final testing
                phase. We employ comprehensive automated testing, continuous validation, and proactive
                defect prevention.
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                <li>Test-driven development (TDD)</li>
                <li>Automated test suites (unit, integration, E2E)</li>
                <li>Performance and load testing</li>
                <li>Security testing and vulnerability scanning</li>
                <li>Accessibility testing (WCAG compliance)</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Documentation &amp; Knowledge Transfer</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Enterprise systems require comprehensive documentation for operations, compliance, and
                long-term sustainability. We deliver technical documentation, operational runbooks, and
                structured knowledge transfer.
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                <li>Architecture decision records (ADRs)</li>
                <li>API documentation and developer guides</li>
                <li>Operational runbooks and playbooks</li>
                <li>Training materials and workshops</li>
                <li>Code comments and inline documentation</li>
              </ul>
            </article>

            <article className="rounded-lg border border-zinc-200 bg-white p-8">
              <h3 className="text-base font-semibold text-zinc-900">Risk Management</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                We identify, assess, and mitigate technical and delivery risks throughout the project
                lifecycle—ensuring transparent communication and proactive problem-solving.
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
                <li>Risk identification and assessment</li>
                <li>Mitigation strategy development</li>
                <li>Dependency tracking and management</li>
                <li>Issue escalation and resolution</li>
                <li>Change impact analysis</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="certifications" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:p-12">
            <h2 id="certifications" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
              Professional Certifications
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600">
              Our team holds current certifications from leading technology vendors and professional
              organizations, demonstrating validated expertise and commitment to continuous learning.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="rounded-lg border border-zinc-200 bg-white p-6">
                <h3 className="text-sm font-semibold text-zinc-900">Cloud Platforms</h3>
                <ul className="mt-3 space-y-1 text-sm text-zinc-600">
                  <li>AWS Certified Solutions Architect</li>
                  <li>AWS Certified DevOps Engineer</li>
                  <li>Azure Solutions Architect Expert</li>
                  <li>Google Cloud Professional Architect</li>
                </ul>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-white p-6">
                <h3 className="text-sm font-semibold text-zinc-900">Security &amp; Compliance</h3>
                <ul className="mt-3 space-y-1 text-sm text-zinc-600">
                  <li>Certified Information Systems Security Professional (CISSP)</li>
                  <li>Certified Ethical Hacker (CEH)</li>
                  <li>AWS Certified Security – Specialty</li>
                </ul>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-white p-6">
                <h3 className="text-sm font-semibold text-zinc-900">Agile &amp; Project Management</h3>
                <ul className="mt-3 space-y-1 text-sm text-zinc-600">
                  <li>Certified Scrum Master (CSM)</li>
                  <li>Project Management Professional (PMP)</li>
                  <li>SAFe Agilist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="company-profile" className="border-t border-zinc-200/70 pt-14 lg:pt-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-zinc-200 bg-white p-8 lg:p-12">
            <h2 id="company-profile" className="text-2xl font-semibold tracking-tight text-zinc-900 lg:text-3xl">
              Company Profile
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600">
              For a comprehensive overview of Clyros Tech&apos;s capabilities, experience, and approach,
              request our company profile document.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-zinc-800"
              >
                Request Company Profile
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export type Whitepaper = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  /** Attention-grabbing opening paragraph */
  hook: string;
  /** Overview paragraphs */
  overview: string[];
  /** Key takeaways */
  highlights: string[];
  /** What's inside — chapter list */
  chapters: { title: string; desc: string }[];
  /** Who should read */
  audience: string[];
};

export const whitepapers: Whitepaper[] = [
  {
    id: "aiops-2025",
    tag: "AI & AIOps",
    title: "The State of AI-Native AIOps in 2025",
    desc: "Comprehensive research on how AI is transforming IT operations, incident management, and observability across enterprises.",
    hook: "IT teams are drowning in alerts while the business expects zero downtime. AI-native AIOps is no longer an experiment. It is fast becoming the operating model for modern IT. This whitepaper shows where enterprises really stand and what separates the leaders from everyone else.",
    overview: [
      "Over the last few years, AIOps has moved from a buzzword to a board-level priority. Hybrid infrastructure, cloud-native applications, and distributed teams have multiplied the volume of telemetry far beyond what humans can triage manually. The result is alert fatigue, slow incident response, and growing operational cost.",
      "This research looks at how organizations are applying machine learning across the IT operations lifecycle, from dynamic baselining and anomaly detection to event correlation, root-cause analysis, and automated remediation. It contrasts bolt-on AI features with AI-native platforms, where intelligence is built into the data layer from day one.",
      "You will also find a practical maturity model to benchmark your own team, along with the common obstacles enterprises face, such as data silos, trust in automated decisions, and skills gaps, and how leading teams are overcoming them.",
    ],
    highlights: [
      "Where enterprises sit on the AIOps maturity curve today",
      "The difference between bolt-on AI and AI-native operations",
      "High-impact use cases: noise reduction, RCA, and predictive alerts",
      "How to build trust in automated decisions and remediation",
      "A roadmap to move from reactive to autonomous operations",
    ],
    chapters: [
      { title: "The Operational Pressure Point", desc: "Why traditional, rule-based monitoring can't keep pace with modern IT." },
      { title: "Defining AI-Native AIOps", desc: "Core capabilities and how they differ from legacy approaches." },
      { title: "Use Cases That Deliver ROI", desc: "Where AI is producing measurable results in operations today." },
      { title: "The AIOps Maturity Model", desc: "Five stages to benchmark your team and plan the next step." },
      { title: "Getting Started", desc: "Data readiness, quick wins, and change management." },
    ],
    audience: ["CIOs & IT Leaders", "IT Operations Managers", "SRE & DevOps Teams", "Enterprise Architects"],
  },
  {
    id: "unified-observability",
    tag: "ObserveOps",
    title: "Unified Observability: A Complete Guide",
    desc: "Learn how to break down silos and achieve end-to-end visibility across infrastructure, applications, and services.",
    hook: "When an outage hits, how many tools does your team open before finding the root cause? For most enterprises the answer is too many. Unified observability brings every signal into one place, so teams stop hunting for data and start fixing problems.",
    overview: [
      "Modern IT environments span on-premises data centers, multiple clouds, containers, microservices, and SaaS applications. Each layer usually comes with its own monitoring tool, which creates blind spots between them. When something breaks, teams waste valuable time switching consoles, comparing timestamps, and arguing over whose problem it is.",
      "Unified observability takes a different approach. It collects metrics, logs, traces, network flows, and events into a single platform and correlates them with topology and service context. Instead of isolated dashboards, teams get one connected view of how infrastructure, applications, and end-user experience relate to each other.",
      "This guide explains the building blocks of unified observability, how AI and machine learning turn raw telemetry into actionable insight, and how to plan a phased move away from fragmented tooling without disrupting day-to-day operations. It also covers the KPIs that prove value to the business, including MTTD, MTTR, and service availability.",
    ],
    highlights: [
      "Why siloed monitoring tools slow down incident response and inflate costs",
      "The core pillars: metrics, logs, traces, network flows, and events",
      "How to correlate signals across infrastructure, applications, and services",
      "Where AIOps fits in: anomaly detection, root-cause analysis, and noise reduction",
      "A step-by-step roadmap to consolidate tools without disrupting operations",
      "How to measure success with MTTD, MTTR, and availability KPIs",
    ],
    chapters: [
      { title: "The Visibility Gap", desc: "How hybrid infrastructure and tool sprawl create blind spots." },
      { title: "What Unified Observability Means", desc: "Going beyond monitoring with a single data platform for all telemetry." },
      { title: "The Telemetry Pillars", desc: "What each signal tells you and how they work together." },
      { title: "Correlation & Context", desc: "Topology-aware context that gets you from symptom to root cause faster." },
      { title: "AIOps in Practice", desc: "Dynamic baselines, anomaly detection, and alert correlation." },
      { title: "Implementation Roadmap", desc: "A phased approach to consolidation, onboarding, and adoption." },
    ],
    audience: ["IT Operations & NOC Teams", "SRE & Platform Engineering", "CIOs, CTOs & IT Leaders", "Network & Infrastructure Architects"],
  },
  {
    id: "itsm-ai",
    tag: "ServiceOps",
    title: "ITSM Transformation with AI",
    desc: "How leading enterprises are leveraging AI to automate service desk operations and improve SLA compliance.",
    hook: "Service desks are expected to resolve more tickets, faster, with the same headcount. AI is changing what is possible, from auto-classifying requests to resolving common issues before an agent even sees them.",
    overview: [
      "Traditional ITSM relies heavily on manual triage, static routing rules, and agents searching knowledge bases under time pressure. As ticket volumes grow and employee expectations rise, this model leads to SLA breaches, long queues, and burned-out teams.",
      "This whitepaper explores how AI is reshaping each stage of the service lifecycle: intelligent ticket classification and routing, virtual agents for self-service, knowledge recommendations, sentiment analysis, and predictive insights for change and problem management.",
      "It also covers how to prepare your data and processes for AI, how to keep humans in the loop, and how to measure the impact on first-contact resolution, SLA compliance, and employee satisfaction.",
    ],
    highlights: [
      "Where AI adds the most value across the ITSM lifecycle",
      "Automating ticket classification, prioritization, and routing",
      "Virtual agents and self-service that employees actually use",
      "Improving SLA compliance with predictive insights",
      "KPIs to track the impact of AI on service delivery",
    ],
    chapters: [
      { title: "The Modern Service Desk Challenge", desc: "Rising volumes, rising expectations, flat budgets." },
      { title: "AI Across the Service Lifecycle", desc: "Incident, request, problem, and change, reimagined." },
      { title: "Self-Service & Virtual Agents", desc: "Deflecting tickets without frustrating users." },
      { title: "Data & Process Readiness", desc: "What you need in place before you automate." },
      { title: "Measuring Success", desc: "The metrics that matter to IT and the business." },
    ],
    audience: ["Service Desk Managers", "ITSM Process Owners", "IT Leaders", "Digital Workplace Teams"],
  },
  {
    id: "cloud-cost",
    tag: "Cloud",
    title: "Cloud Cost Optimization Strategies",
    desc: "Data-driven approaches to reducing cloud spend while maintaining performance and reliability.",
    hook: "Cloud bills have a habit of growing faster than the business. The good news is that much of that spend is avoidable. This whitepaper shows how to cut waste without putting performance or reliability at risk.",
    overview: [
      "Pay-as-you-go pricing makes the cloud flexible, but it also makes it easy to overspend. Idle resources, oversized instances, forgotten storage, and unclear ownership quietly inflate costs month after month.",
      "This guide outlines a data-driven approach to cloud cost optimization that links usage, performance, and cost data. It covers rightsizing, scheduling, commitment-based discounts, storage tiering, and building a cost-aware culture across engineering and finance.",
      "Most importantly, it explains how to use observability data to make optimization decisions safely, so you reduce spend while keeping a close eye on application performance and user experience.",
    ],
    highlights: [
      "The most common sources of cloud waste and how to find them",
      "Rightsizing and scheduling based on real utilization data",
      "Making smart use of reserved and committed-use discounts",
      "Linking cost with performance to avoid risky cuts",
      "Building FinOps practices across engineering and finance",
    ],
    chapters: [
      { title: "Understanding Cloud Spend", desc: "Where the money goes and why it's hard to see." },
      { title: "Quick Wins", desc: "Idle resources, orphaned storage, and scheduling." },
      { title: "Rightsizing with Confidence", desc: "Using performance data to guide decisions." },
      { title: "Pricing Models", desc: "Reserved, spot, and committed-use strategies." },
      { title: "Building a FinOps Culture", desc: "Ownership, accountability, and continuous optimization." },
    ],
    audience: ["Cloud & Platform Teams", "FinOps Practitioners", "IT & Finance Leaders", "DevOps Engineers"],
  },
  {
    id: "network-automation",
    tag: "Network",
    title: "Network Automation Best Practices",
    desc: "Practical strategies for automating network configuration, monitoring, and remediation at scale.",
    hook: "Manual network changes are slow, error-prone, and one of the leading causes of outages. Automation turns your network into a reliable, repeatable, and auditable system.",
    overview: [
      "Enterprise networks keep growing in size and complexity, spanning campuses, branches, data centers, and cloud. Yet many teams still configure devices one at a time over the CLI, which makes consistency and compliance difficult to maintain.",
      "This whitepaper shares practical best practices for network automation, including configuration backup and change management, compliance checks, automated discovery, and closed-loop remediation driven by monitoring data.",
      "It also covers how to start small, build confidence with low-risk tasks, and scale automation safely across multi-vendor environments.",
    ],
    highlights: [
      "Why manual configuration is a major source of network outages",
      "Automating config backup, change tracking, and rollback",
      "Continuous compliance against policies and golden configs",
      "Closed-loop remediation driven by monitoring alerts",
      "A phased path to scale automation across vendors",
    ],
    chapters: [
      { title: "The Case for Automation", desc: "Cost, risk, and speed of manual network operations." },
      { title: "Configuration Management", desc: "Backup, versioning, and controlled change." },
      { title: "Compliance & Auditing", desc: "Policy checks and drift detection." },
      { title: "Monitoring-Driven Remediation", desc: "Detect, diagnose, and fix automatically." },
      { title: "Scaling Safely", desc: "Governance, testing, and team enablement." },
    ],
    audience: ["Network Engineers", "NOC Teams", "Infrastructure Managers", "IT Security & Compliance"],
  },
  {
    id: "log-analytics",
    tag: "Logs",
    title: "Modern Log Analytics Architecture",
    desc: "Building scalable log management systems for petabyte-scale data with AI-powered insights.",
    hook: "Logs hold the answers to most operational and security questions, if you can search them fast enough. As volumes explode, legacy log tools become slow and expensive. Here's how to architect for scale.",
    overview: [
      "Every application, server, container, and network device generates logs, and the volume grows every year. Many organizations struggle with slow searches, ballooning storage costs, and log data that sits unused because it is too hard to analyze.",
      "This whitepaper describes a modern log analytics architecture covering collection, parsing and enrichment, tiered storage, fast indexing, and AI-powered pattern detection. It explains the trade-offs between cost, retention, and query performance.",
      "It also shows how to connect logs with metrics and traces for full context during troubleshooting, and how to turn logs into proactive insight rather than a reactive search tool.",
    ],
    highlights: [
      "Architectural patterns for petabyte-scale log management",
      "Parsing, enrichment, and normalization best practices",
      "Balancing retention, cost, and search performance",
      "AI-driven pattern detection and anomaly alerts",
      "Correlating logs with metrics and traces",
    ],
    chapters: [
      { title: "The Log Data Explosion", desc: "Why legacy approaches break at scale." },
      { title: "Collection & Processing", desc: "Agents, pipelines, parsing, and enrichment." },
      { title: "Storage & Indexing", desc: "Tiered storage and query performance." },
      { title: "AI-Powered Insights", desc: "Patterns, anomalies, and clustering." },
      { title: "Logs in Context", desc: "Unifying logs with the rest of your telemetry." },
    ],
    audience: ["Platform & SRE Teams", "Security Operations", "DevOps Engineers", "Data & Infrastructure Architects"],
  },
  {
    id: "sre-enterprise",
    tag: "SRE",
    title: "SRE Practices for Enterprise Scale",
    desc: "Implementing Site Reliability Engineering principles in large-scale distributed systems.",
    hook: "Site Reliability Engineering helped internet giants run massive systems reliably. But adopting SRE in a large enterprise, with legacy systems and established teams, takes a different playbook.",
    overview: [
      "SRE brings software engineering discipline to operations through service level objectives, error budgets, automation, and blameless learning. The principles are well known, but applying them across hundreds of services and many teams is far from simple.",
      "This whitepaper offers a pragmatic guide to scaling SRE in the enterprise. It covers defining meaningful SLIs and SLOs, using error budgets to balance speed and stability, reducing toil, improving incident response, and building the right team structures.",
      "It also explains the role of observability as the foundation of SRE, since you can't manage reliability you can't measure.",
    ],
    highlights: [
      "Defining SLIs and SLOs that reflect real user experience",
      "Using error budgets to balance innovation and stability",
      "Identifying and eliminating operational toil",
      "Incident response and blameless postmortems",
      "Team models for scaling SRE across the enterprise",
    ],
    chapters: [
      { title: "SRE Fundamentals", desc: "Core principles and why they matter." },
      { title: "SLIs, SLOs & Error Budgets", desc: "Measuring reliability the right way." },
      { title: "Reducing Toil", desc: "Automation priorities and quick wins." },
      { title: "Incident Management", desc: "On-call, response, and learning from failure." },
      { title: "Scaling the Practice", desc: "Organization, culture, and tooling." },
    ],
    audience: ["SRE & Platform Teams", "Engineering Managers", "IT Operations Leaders", "DevOps Practitioners"],
  },
  {
    id: "dem-guide",
    tag: "DEM",
    title: "Digital Experience Monitoring Guide",
    desc: "Best practices for monitoring end-user experience across web and mobile applications.",
    hook: "Your dashboards are green, but users are still complaining. Digital experience monitoring shows you what users actually see, so you can fix issues before they hurt the business.",
    overview: [
      "Infrastructure and application metrics only tell part of the story. Real user experience depends on networks, devices, browsers, third-party services, and geography, many of which sit outside your direct control.",
      "This guide explains how to combine real user monitoring (RUM) and synthetic monitoring to measure the end-user experience across web and mobile applications. It covers Core Web Vitals, transaction monitoring, and how to tie experience metrics to business outcomes.",
      "It also shows how to connect front-end experience data with back-end telemetry, so you can trace a slow page all the way to the root cause.",
    ],
    highlights: [
      "Why infrastructure metrics alone miss user-facing issues",
      "Real user monitoring vs. synthetic monitoring",
      "Core Web Vitals and experience KPIs that matter",
      "Linking user experience to business outcomes",
      "Tracing front-end issues to back-end root causes",
    ],
    chapters: [
      { title: "The Experience Gap", desc: "What traditional monitoring misses." },
      { title: "RUM & Synthetics", desc: "Two complementary ways to measure experience." },
      { title: "Metrics That Matter", desc: "Web Vitals, Apdex, and transaction health." },
      { title: "From Symptom to Cause", desc: "Connecting front-end and back-end data." },
      { title: "Building a DEM Program", desc: "Ownership, alerting, and continuous improvement." },
    ],
    audience: ["Digital & Product Teams", "Application Owners", "IT Operations", "Customer Experience Leaders"],
  },
  {
    id: "iac-scale",
    tag: "DevOps",
    title: "Infrastructure as Code at Scale",
    desc: "Automating infrastructure provisioning and configuration management for cloud-native environments.",
    hook: "Infrastructure as Code promises speed and consistency, but at scale it can also create sprawl, drift, and risk. This whitepaper shows how to keep IaC fast, safe, and manageable as you grow.",
    overview: [
      "Defining infrastructure as code has become standard practice for cloud-native teams. As adoption grows across many teams and environments, new challenges appear: inconsistent modules, configuration drift, secrets management, and limited visibility into what was changed and why.",
      "This guide covers best practices for scaling IaC, including reusable modules, environment strategies, policy-as-code guardrails, testing pipelines, and drift detection. It also covers the cultural and governance side of making IaC work across the organization.",
      "Finally, it explains how to tie IaC changes to observability data, so you can quickly link a deployment to its impact on performance and reliability.",
    ],
    highlights: [
      "Designing reusable, versioned infrastructure modules",
      "Policy-as-code guardrails for security and compliance",
      "Testing and CI/CD pipelines for infrastructure changes",
      "Detecting and resolving configuration drift",
      "Linking infrastructure changes to observability data",
    ],
    chapters: [
      { title: "IaC Beyond the Basics", desc: "What changes when you scale." },
      { title: "Modules & Standards", desc: "Reuse, versioning, and consistency." },
      { title: "Guardrails & Governance", desc: "Policy-as-code and access control." },
      { title: "Testing & Delivery", desc: "Pipelines for safe infrastructure change." },
      { title: "Drift & Observability", desc: "Keeping reality and code in sync." },
    ],
    audience: ["DevOps & Platform Engineers", "Cloud Architects", "Security & Compliance Teams", "Engineering Leaders"],
  },
];

export function getWhitepaper(id: string) {
  return whitepapers.find((w) => w.id === id);
}

export type Ebook = {
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

export const ebooks: Ebook[] = [
  {
    id: "ai-itops",
    tag: "AI & AIOps",
    title: "The Complete Guide to AI-Powered IT Operations",
    desc: "Transform your IT operations with artificial intelligence. Learn how leading organizations leverage AI for proactive monitoring and automated remediation.",
    hook: "Most IT teams still find out about problems when users start calling. AI-powered IT operations flips that around, spotting trouble early, pointing to the cause, and fixing routine issues on its own. This ebook is a practical, step-by-step guide to getting there.",
    overview: [
      "IT environments now span data centers, public clouds, containers, and SaaS, and each layer produces its own stream of metrics, logs, and events. No team can watch all of it by hand. The result is missed warning signs, alert storms during incidents, and engineers who spend more time firefighting than improving systems.",
      "This ebook walks through how AI changes each stage of IT operations. It covers dynamic baselines that learn what normal looks like, anomaly detection that catches issues before thresholds are breached, event correlation that turns thousands of alerts into a handful of incidents, and root-cause analysis that points straight to the failing component.",
      "It then moves from insight to action, showing how to automate remediation safely with runbooks, approvals, and guardrails. Along the way you will find checklists, example workflows, and the metrics to track so you can prove the value of AI to the business.",
    ],
    highlights: [
      "How AI moves IT operations from reactive to proactive",
      "Dynamic baselining and anomaly detection explained in plain terms",
      "Cutting alert noise with intelligent event correlation",
      "Faster root-cause analysis using topology and context",
      "Automating remediation safely with runbooks and guardrails",
      "The KPIs that show AI is paying off: MTTD, MTTR, and incident volume",
    ],
    chapters: [
      { title: "Why IT Operations Needs AI", desc: "The scale and complexity problem that manual monitoring can't solve." },
      { title: "Learning What Normal Looks Like", desc: "Dynamic baselines and anomaly detection in practice." },
      { title: "From Alert Storms to Incidents", desc: "Event correlation and noise reduction techniques." },
      { title: "Finding the Root Cause Faster", desc: "Using topology, dependencies, and change data." },
      { title: "Automated Remediation", desc: "Runbooks, approvals, and closed-loop fixes." },
      { title: "Your AI Ops Roadmap", desc: "Quick wins, data readiness, and measuring success." },
    ],
    audience: ["CIOs & IT Leaders", "IT Operations & NOC Teams", "SRE & DevOps Engineers", "IT Automation Teams"],
  },
  {
    id: "unified-observability",
    tag: "ObserveOps",
    title: "Unified Observability: From Silos to Synthesis",
    desc: "Break down monitoring silos and achieve comprehensive visibility across your entire technology stack with unified observability practices.",
    hook: "A network team, an app team, and a cloud team each stare at their own dashboard during an outage, and each says the problem isn't theirs. Unified observability ends that standoff by putting every signal in one connected view. This ebook shows you how to make the shift.",
    overview: [
      "Most organizations didn't plan their monitoring stack; it grew one tool at a time. Over the years that leaves a patchwork of point products for servers, networks, applications, logs, and cloud, each with its own data, alerts, and owners. The gaps between those tools are exactly where incidents hide.",
      "This ebook explains how to move from siloed monitoring to unified observability. It covers bringing metrics, logs, traces, flows, and events into a single platform, mapping them to services and topology, and giving every team the same source of truth during an incident.",
      "You will also learn how to plan the transition in stages, decide which tools to retire first, win support from different teams, and measure the improvements in visibility, response time, and tool spend.",
    ],
    highlights: [
      "The hidden cost of tool sprawl and siloed monitoring",
      "What unified observability means and what it does not",
      "Bringing metrics, logs, traces, flows, and events together",
      "Service and topology mapping for shared context",
      "A phased plan to consolidate tools without disruption",
      "How to measure gains in visibility, MTTR, and tool costs",
    ],
    chapters: [
      { title: "How Silos Form", desc: "Why monitoring stacks fragment and what it costs you." },
      { title: "Defining Unified Observability", desc: "One platform, one data model, one view of services." },
      { title: "Connecting the Signals", desc: "How each telemetry type adds context to the others." },
      { title: "Service-Centric Visibility", desc: "Mapping infrastructure to the business services it supports." },
      { title: "Planning the Transition", desc: "Consolidation priorities, stakeholders, and change management." },
      { title: "Proving the Value", desc: "Metrics and reporting that resonate with leadership." },
    ],
    audience: ["IT Operations Managers", "Network & Infrastructure Teams", "Application Owners", "CIOs & IT Directors"],
  },
  {
    id: "modern-itsm",
    tag: "ServiceOps",
    title: "Modern ITSM: Service Excellence Through Automation",
    desc: "Discover how modern service management platforms use automation and AI to deliver exceptional service experiences at scale.",
    hook: "Employees expect IT support to feel as easy as ordering online. Instead, many still wait days for simple requests. This ebook shows how automation and AI help service desks deliver fast, consistent service without adding headcount.",
    overview: [
      "Service desks are under pressure from every direction. Ticket volumes keep rising, environments keep getting more complex, and users expect instant answers. Teams that rely on manual triage, email-based requests, and tribal knowledge struggle to keep up, and SLAs suffer as a result.",
      "This ebook covers the building blocks of modern ITSM: a self-service portal people actually use, a service catalog with automated fulfillment, AI-driven ticket classification and routing, virtual agents for common questions, and workflows that connect incident, problem, change, and asset management.",
      "It also explains how to link service management with monitoring data, so incidents can be created, enriched, and even resolved automatically, and how to track the improvements in resolution time, SLA compliance, and user satisfaction.",
    ],
    highlights: [
      "Where manual service processes slow your team down",
      "Designing a self-service portal and service catalog that work",
      "AI-powered ticket classification, prioritization, and routing",
      "Virtual agents that resolve common requests instantly",
      "Connecting ITSM with monitoring for automatic incident handling",
      "Metrics to track: FCR, MTTR, SLA compliance, and CSAT",
    ],
    chapters: [
      { title: "The New Service Expectation", desc: "What employees expect from IT today and why it matters." },
      { title: "Self-Service Done Right", desc: "Portals, catalogs, and knowledge that reduce tickets." },
      { title: "Automating the Service Desk", desc: "Classification, routing, and fulfillment workflows." },
      { title: "AI and Virtual Agents", desc: "Conversational support and smart recommendations." },
      { title: "Connected Service Management", desc: "Linking incidents, changes, assets, and monitoring." },
      { title: "Measuring Service Excellence", desc: "KPIs, dashboards, and continuous improvement." },
    ],
    audience: ["Service Desk Managers", "ITSM Process Owners", "IT Support Teams", "Digital Workplace Leaders"],
  },
  {
    id: "network-cloud",
    tag: "Network",
    title: "Network Monitoring in the Cloud-Native Era",
    desc: "Essential strategies for monitoring hybrid and multi-cloud networks, from SDN to service mesh architectures.",
    hook: "Your network no longer ends at the data center wall. Traffic now flows across branches, SD-WAN links, cloud VPCs, and service meshes, and traditional network monitoring was never built for that. This ebook shows how to regain full visibility.",
    overview: [
      "Network teams used to monitor a relatively fixed set of routers, switches, and firewalls. Today the network includes virtual appliances, cloud networking, SD-WAN, containers, and service-to-service traffic that changes by the minute. Polling devices every few minutes no longer tells the whole story.",
      "This ebook covers the strategies needed to monitor modern hybrid networks, including automated discovery and topology mapping, flow analysis to understand who is talking to whom, cloud network visibility, SD-WAN and internet path monitoring, and observing east-west traffic inside Kubernetes and service meshes.",
      "It also explains how to correlate network data with application performance, so you can quickly answer the question every incident starts with: is it the network or the app?",
    ],
    highlights: [
      "Why traditional network monitoring falls short in hybrid environments",
      "Automated discovery and live topology mapping",
      "Flow analysis for traffic visibility and capacity planning",
      "Monitoring cloud networks, SD-WAN, and internet paths",
      "Visibility into containers and service mesh traffic",
      "Correlating network health with application performance",
    ],
    chapters: [
      { title: "The Changing Network Edge", desc: "How cloud, SD-WAN, and containers reshaped the network." },
      { title: "Discovery & Topology", desc: "Keeping an accurate, live map of a dynamic network." },
      { title: "Understanding Traffic", desc: "Flow data, bandwidth analysis, and capacity planning." },
      { title: "Cloud & SD-WAN Visibility", desc: "Monitoring paths you don't own." },
      { title: "Inside the Cluster", desc: "East-west traffic, Kubernetes, and service meshes." },
      { title: "Network Meets Application", desc: "Ending the 'is it the network?' debate with data." },
    ],
    audience: ["Network Engineers", "NOC Teams", "Cloud & Infrastructure Architects", "IT Operations Managers"],
  },
  {
    id: "apm-handbook",
    tag: "APM",
    title: "Application Performance Optimization Handbook",
    desc: "Practical techniques for optimizing application performance across microservices, containers, and serverless environments.",
    hook: "A one-second delay can cost conversions, productivity, and trust. Yet in a world of microservices and serverless functions, finding what made an application slow is harder than ever. This handbook gives you practical techniques to find and fix performance bottlenecks.",
    overview: [
      "Modern applications are built from dozens or hundreds of services, running in containers and serverless functions, calling databases, queues, and third-party APIs. A slow request might pass through ten components before reaching the user, and any one of them could be the bottleneck.",
      "This handbook covers the core techniques of application performance optimization: distributed tracing to follow requests end to end, code-level profiling to find slow methods and queries, service maps to understand dependencies, and the key metrics for latency, throughput, and errors.",
      "It also covers performance patterns specific to containers and serverless, such as resource limits, cold starts, and autoscaling, and shows how to build a habit of continuous performance testing so problems are caught before they reach production.",
    ],
    highlights: [
      "Why performance problems are harder to find in distributed systems",
      "Using distributed tracing to follow a request end to end",
      "Code-level profiling for slow methods and database queries",
      "Golden signals: latency, traffic, errors, and saturation",
      "Tuning containers and serverless: limits, cold starts, and scaling",
      "Building continuous performance testing into delivery",
    ],
    chapters: [
      { title: "Performance in a Distributed World", desc: "How microservices change the troubleshooting game." },
      { title: "Tracing Every Request", desc: "Spans, service maps, and finding the slow hop." },
      { title: "Down to the Code", desc: "Profiling, slow queries, and inefficient calls." },
      { title: "Metrics That Matter", desc: "Golden signals, Apdex, and SLOs." },
      { title: "Containers & Serverless", desc: "Platform-specific tuning techniques." },
      { title: "Shifting Performance Left", desc: "Testing and guardrails in the delivery pipeline." },
    ],
    audience: ["Application Developers", "SRE & Platform Teams", "DevOps Engineers", "Application Owners"],
  },
  {
    id: "log-scale",
    tag: "Logs",
    title: "Log Management at Scale: Best Practices",
    desc: "Architect robust log management systems that handle petabyte-scale data with intelligent analytics and cost optimization.",
    hook: "Log volumes double every couple of years, and so do the bills. Too often teams end up paying to store logs they can't search fast enough to use. This ebook shares best practices for managing logs at scale, keeping costs in check while getting real value from your data.",
    overview: [
      "Logs are one of the richest sources of operational and security insight, but at scale they become hard to handle. Searches slow down, storage costs climb, parsing breaks when formats change, and teams start dropping data just to stay within budget.",
      "This ebook lays out best practices for each stage of the log pipeline: collecting from diverse sources, parsing and enriching data at ingest, filtering noise, choosing hot, warm, and cold storage tiers, and setting retention policies that balance compliance with cost.",
      "It also shows how AI-powered analytics such as pattern clustering and anomaly detection can surface issues hidden in millions of lines, and how to connect logs with metrics and traces for faster troubleshooting.",
    ],
    highlights: [
      "Common log management pain points at scale and their causes",
      "Building a reliable pipeline for collection, parsing, and enrichment",
      "Filtering and sampling to cut noise without losing insight",
      "Tiered storage and retention policies that control costs",
      "AI-powered pattern clustering and anomaly detection",
      "Correlating logs with metrics and traces for faster RCA",
    ],
    chapters: [
      { title: "The Scale Problem", desc: "Why log volumes and costs keep climbing." },
      { title: "Building the Pipeline", desc: "Collection, parsing, normalization, and enrichment." },
      { title: "Keeping Only What Matters", desc: "Filtering, sampling, and routing strategies." },
      { title: "Storage & Retention", desc: "Tiering, compression, and compliance requirements." },
      { title: "Intelligent Log Analytics", desc: "Patterns, anomalies, and fast search at scale." },
      { title: "Logs in Context", desc: "Unifying logs with the rest of your telemetry." },
    ],
    audience: ["Platform & SRE Teams", "Security Operations", "DevOps Engineers", "Infrastructure Architects"],
  },
];

export function getEbook(id: string) {
  return ebooks.find((e) => e.id === id);
}

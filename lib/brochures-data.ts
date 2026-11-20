export type BrochureDetail = {
  /** Opening paragraph */
  hook: string;
  /** Overview paragraphs */
  overview: string[];
  /** Key capabilities */
  highlights: string[];
  /** What's inside — numbered sections */
  sections: { title: string; desc: string }[];
  /** Who it's for */
  audience: string[];
};

export type Brochure = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  /** When present, the brochure gets its own detail page at /resources/brochures/[id] */
  detail?: BrochureDetail;
};

export const brochures: Brochure[] = [
  { id: "aiops-platform", tag: "AIOps", title: "Motadata AIOps Platform Overview", desc: "Complete technical overview of the unified observability platform. Features, architecture, deployment models, and integration capabilities." },
  {
    id: "observeops-suite",
    tag: "ObserveOps",
    title: "ObserveOps Suite Brochure",
    desc: "Comprehensive monitoring across infrastructure, applications, networks, and logs. Real-time visibility and intelligent correlation.",
    detail: {
      hook: "Most IT teams don't lack data, they lack connected data. Metrics sit in one tool, logs in another, network flows in a third, and the full picture only appears after an outage has already hurt the business. ObserveOps brings every signal together on one AI-native platform, so teams can see problems early and fix them fast.",
      overview: [
        "Motadata ObserveOps is a unified observability suite that monitors your entire IT estate from a single console: servers, virtual machines, containers, cloud services, network devices, applications, databases, and logs. Each layer is discovered automatically and mapped into a live topology, so you always know how components depend on each other.",
        "Instead of treating every alert in isolation, ObserveOps correlates metrics, logs, traces, and flows in context. Built-in AIOps learns normal behaviour, flags anomalies before they become incidents, groups related alerts to cut noise, and points teams to the probable root cause.",
        "This brochure gives a clear tour of the suite: the core modules, how they work together, deployment options for on-premises, cloud, and hybrid environments, and the outcomes IT teams can expect when they replace fragmented tools with one platform.",
      ],
      highlights: [
        "Full-stack monitoring for infrastructure, network, cloud, applications, and logs in one console",
        "Automatic discovery and live topology maps that show service dependencies",
        "AI-driven anomaly detection, alert correlation, and root-cause analysis",
        "Network flow analytics and configuration management across multi-vendor devices",
        "Centralised log collection, parsing, and search at scale",
        "Flexible deployment on-premises, in the cloud, or hybrid, with role-based access",
      ],
      sections: [
        { title: "Platform Overview", desc: "How ObserveOps unifies metrics, logs, traces, and flows on a single data platform." },
        { title: "Infrastructure & Cloud Monitoring", desc: "Visibility across servers, virtualisation, containers, and public cloud services." },
        { title: "Network Observability", desc: "Device health, flow analysis, topology discovery, and configuration management." },
        { title: "Application & Log Analytics", desc: "Application performance, distributed traces, and centralised log intelligence." },
        { title: "AIOps & Automation", desc: "Dynamic baselines, noise reduction, root-cause insights, and automated runbooks." },
        { title: "Deployment & Integrations", desc: "Architecture options, scalability, and integrations with ITSM and collaboration tools." },
      ],
      audience: ["CIOs & IT Leaders", "IT Operations & NOC Teams", "Network Engineers", "SRE & DevOps Teams", "Infrastructure Architects"],
    },
  },
  { id: "serviceops-suite", tag: "ServiceOps", title: "ServiceOps Suite Brochure", desc: "Modern IT service management with AI-powered automation. Service desk, incident management, change control, and asset tracking." },
  { id: "apm", tag: "APM", title: "Application Performance Monitoring", desc: "Distributed tracing, code-level diagnostics, and real-time performance metrics. Monitor microservices and monolithic applications." },
  { id: "infrastructure", tag: "Infrastructure", title: "Infrastructure & Cloud Monitoring", desc: "Unified monitoring for on-premise, cloud, and hybrid environments. Support for AWS, Azure, GCP, and private data centers." },
  { id: "network", tag: "Network", title: "Network Observability Platform", desc: "Complete network monitoring with topology discovery, flow analysis, and configuration management. Multi-vendor support." },
  { id: "logs", tag: "Logs", title: "Log Management & Analytics", desc: "Centralized log aggregation, intelligent parsing, and AI-powered analytics. Real-time search and correlation at scale." },
  { id: "ai-agent", tag: "AI Agent", title: "AI Agent for IT Operations", desc: "Conversational AI for IT operations. Natural language queries, automated diagnostics, and intelligent recommendations." },
  { id: "deployment", tag: "Deployment", title: "Enterprise Deployment Guide", desc: "Architecture recommendations, sizing guidelines, and deployment best practices for enterprise environments." },
];

export function getBrochure(id: string) {
  return brochures.find((b) => b.id === id);
}

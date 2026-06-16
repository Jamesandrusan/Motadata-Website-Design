import {
  Network,
  Eye,
  Activity,
  Map,
  BrainCircuit,
  ShieldCheck,
  Database,
  Layers,
  Globe,
  Workflow,
  LayoutTemplate,
  Landmark,
  Radio,
  HeartPulse,
  Building2,
  Factory,
  ShoppingCart,
  ScrollText,
  Gauge,
  Users,
  Server,
} from "lucide-react";
import type { ProductPageData } from "@/components/product-page/types";

export const networkObservabilityData: ProductPageData = {
  meta: {
    title: "Network Observability | Motadata ObserveOps",
    description: "Motadata's Network Observability delivers real-time AI-driven visibility into your network — monitor, correlate, and resolve issues fast.",
  },

  hero: {
    badge: "Network Observability",
    headline: "Network Observability",
    description: "Gain complete command over your enterprise network with real-time intelligence powered by Motadata ObserveOps. Unify device health, flow data, and topology visibility into a single, AI-driven view — so your teams can see issues before they surface and deliver on every SLA with confidence.",
    subtext: "From uptime to latency, from packets to paths — assuring availability, reliability, and clarity.",
    ctaPrimary: { label: "Start Free Trial", href: "/free-trial" },
    ctaSecondary: { label: "Schedule Demo", href: "/schedule-demo" },
    dashboardImage: "/him-dashboard.png",
  },

  featuresGrid: {
    label: "Core Features",
    title: "Built for Visibility, Velocity, and Verifiability",
    subtitle: "Network observability that transforms flows, packets, and signals into actionable intelligence — giving you complete control over performance, availability, and reliability.",
    features: [
      {
        icon: Activity,
        title: "Real-Time Network Awareness",
        desc: "Monitor devices, links, and interfaces continuously with sub-second polling and instant alerting to ensure no disruption goes unnoticed.",
      },
      {
        icon: Eye,
        title: "Unified Network Visibility",
        desc: "Gain a single, consolidated view across WAN, LAN, SD-WAN, wireless, and hybrid environments — eliminating silos and simplifying operations.",
      },
      {
        icon: Network,
        title: "Flow & Traffic Intelligence",
        desc: "Analyze NetFlow, sFlow, jFlow, and IPFIX data to understand bandwidth consumption, detect anomalies, and optimize traffic behavior.",
      },
      {
        icon: Map,
        title: "Dynamic Topology Mapping",
        desc: "Visualize real-time Layer 2 and Layer 3 network topology with automated discovery and dependency-aware correlation.",
      },
      {
        icon: BrainCircuit,
        title: "AI-Driven Anomaly Detection",
        desc: "Leverage intelligent baselines and machine learning to identify unusual patterns, predict failures, and reduce alert noise.",
      },
      {
        icon: ShieldCheck,
        title: "SLA & Availability Assurance",
        desc: "Track uptime, latency, and performance against defined SLAs and SLOs with rich dashboards, reports, and policy-driven alerts.",
      },
    ],
    bottomTagline: (
      <>
        Every <span className="font-semibold text-foreground">Packet</span>. Every <span className="font-semibold text-foreground">Path</span>. Complete <span className="font-semibold text-foreground">Network Clarity</span>.
      </>
    ),
  },

  capabilities: {
    label: "Capabilities",
    title: "Network Observability Capabilities",
    subtitle: "Complete Network Intelligence",
    tabs: [
      {
        icon: ShieldCheck,
        label: "Uptime Assurance",
        title: "Uptime Assurance",
        desc: "Deliver uninterrupted network availability with the confidence of AI-backed monitoring and SLA governance. Whether you manage thousands of endpoints or distributed branches, ObserveOps ensures service reliability stays measurable and manageable.",
        visual: null,
      },
      {
        icon: Activity,
        label: "Performance Insight",
        title: "Performance Insight",
        desc: "Monitor every switch, router, firewall, and load balancer in real time — across wired, wireless, and SDN environments — to ensure performance never becomes an afterthought.",
        visual: null,
      },
      {
        icon: Map,
        label: "Topology Mapping",
        title: "Dynamic Topology Mapping",
        desc: "Gain continuous network awareness through automated discovery and topology correlation. Watch your network draw itself — every node, every connection, every dependency — in real time.",
        visual: null,
      },
      {
        icon: Network,
        label: "Traffic Analysis",
        title: "Intelligent Traffic Analysis",
        desc: "Understand how your network breathes — where data flows, what consumes bandwidth, and when patterns change. With deep flow analytics and intuitive visualization, ObserveOps turns raw traffic into actionable intelligence.",
        visual: null,
      },
      {
        icon: Globe,
        label: "Path Visibility",
        title: "End-to-End Path Visibility",
        desc: "Every packet tells a story — ObserveOps helps you read it. Visualize the entire journey of data across hybrid, cloud, and WAN environments to identify latency points, optimize routing, and guarantee user experience.",
        visual: null,
      },
    ],
  },

  impactStats: {
    label: "Measured Impact",
    title: "Real-world impact. Proven results.",
    subtitle: "See how network teams are transforming their operations with Motadata Network Observability.",
    stats: [
      {
        num: "45%",
        percent: 45,
        label: "Faster root-cause identification",
        desc: "through cross-domain correlation",
      },
      {
        num: "60%",
        percent: 60,
        label: "Fewer false positives",
        desc: "with AI-based alert suppression",
      },
      {
        num: "99.9%",
        percent: 99.9,
        label: "Sustained network uptime",
        desc: "across global enterprise environments",
      },
    ],
  },

  testimonial: {
    quote: "Before adopting Motadata, our monitoring tools were completely disconnected. With unified network observability, we can now detect problems early and fix them before users are ever impacted.",
    author: "Ravi Malik",
    role: "IT Team Lead, Bellosonica Auto Component India Pvt. Ltd.",
  },

  whyMotadata: {
    label: "Why Motadata",
    title: "Why Enterprises Choose Motadata",
    subtitle: "From Network to Intelligence — Motadata Powers Unified Observability.",
    ctaLabel: "Try It Today",
    ctaHref: "/free-trial",
    items: [
      {
        icon: Database,
        title: "Powered by Motastore",
        desc: "Purpose-built for high-speed ingestion and lightning-fast analytics.",
      },
      {
        icon: BrainCircuit,
        title: "AI-Native Observability",
        desc: "Proactive intelligence that predicts, not just detects.",
      },
      {
        icon: Layers,
        title: "Unified Data Fabric",
        desc: "Network, logs, and applications seamlessly connected for faster RCA.",
      },
      {
        icon: Workflow,
        title: "Deployment Freedom",
        desc: "On-prem, hybrid, or private cloud — designed for enterprise sovereignty.",
      },
      {
        icon: LayoutTemplate,
        title: "Proven ITOM Heritage",
        desc: "Trusted by global enterprises across BFSI, Telecom, and Government sectors.",
      },
    ],
  },

  enterpriseVisibility: {
    label: "Enterprise Ready",
    title: "Enterprise-Grade Visibility for Always-On Operations",
    subtitle: "Clarity that scales with your network, intelligence that sharpens your decisions, and reliability that protects every digital moment across your enterprise.",
    sections: [
      {
        icon: Layers,
        title: "End-to-End Awareness at Enterprise Scale",
        desc: "Large networks demand complete situational awareness. Motadata delivers unified visibility across WAN, SD-WAN, datacenter, cloud, and hybrid footprints so IT leaders see every device, link, flow, and dependency through one authoritative lens. This eliminates fragmentation and enables confident action across global, distributed environments.",
      },
      {
        icon: BrainCircuit,
        title: "AI-Driven Intelligence for Faster Decisions",
        desc: "Enterprises cannot afford reactive operations. Motadata applies AI-driven anomaly detection, predictive insights, and contextual correlation to surface what matters. NOC teams reduce noise, isolate causes faster, and prevent incidents impacting revenue, customer experience, or SLA commitments.",
      },
      {
        icon: Globe,
        title: "Vendor-Agnostic Freedom & Technology Neutrality",
        desc: "Your network evolves — your observability should not restrict it. Motadata integrates seamlessly with multi-vendor network devices, protocols, architectures, and topologies so enterprises maintain freedom of choice without sacrificing visibility.",
      },
      {
        icon: ShieldCheck,
        title: "Security, Compliance & Governance Built In",
        desc: "Modern enterprises require observability that is as secure as it is insightful. Motadata ensures encrypted data collection, strict RBAC controls, compliance-ready reporting, and operational governance across thousands of endpoints.",
      },
    ],
  },

  industrySolutions: {
    label: "Industry Solutions",
    title: "Industry-Proven Infrastructure Solutions",
    subtitle: "Tailored for Your Infrastructure Challenges",
    industries: [
      {
        icon: Landmark,
        name: "BFSI",
        desc: "Guarantee real-time visibility across trading, core banking, and digital payments — ensuring compliance, security, and always-on service.",
      },
      {
        icon: Radio,
        name: "Telecom",
        desc: "Monitor multi-gigabit networks, correlate NetFlow data with subscriber QoE, and prevent outages before they scale.",
      },
      {
        icon: HeartPulse,
        name: "Healthcare",
        desc: "Safeguard critical patient systems and comply with HIPAA through secure, low-latency observability.",
      },
      {
        icon: Building2,
        name: "Government & Public Sector",
        desc: "Achieve transparency, security, and control with on-premise observability supporting strict data sovereignty.",
      },
      {
        icon: Factory,
        name: "Manufacturing",
        desc: "Integrate IT and OT data to prevent production downtime and improve predictive maintenance accuracy.",
      },
      {
        icon: ShoppingCart,
        name: "Retail & eCommerce",
        desc: "Deliver frictionless digital experiences, monitor transactions in real time, and optimize site reliability at global scale.",
      },
    ],
  },

  journey: {
    label: "ObserveOps Platform",
    title: "Continue Your ObserveOps Journey",
    subtitle: "Unify every signal. Correlate every insight. Perform without compromise.",
    products: [
      {
        icon: Server,
        name: "Hybrid Infrastructure Monitoring",
        desc: "Unity on-prem & cloud for visibility, stability, scale.",
        href: "/products/observeops/hybrid-infrastructure-monitoring",
      },
      {
        icon: ShieldCheck,
        name: "Network Configuration & Compliance",
        desc: "Automated config backups, compliance checks, and drift detection across your network.",
        href: "/products/observeops/network-configuration-compliance",
      },
      {
        icon: ScrollText,
        name: "Log Monitoring",
        desc: "Cut through endless logs to reveal root cause with search, correlation, and analytics.",
        href: "/products/observeops/log-monitoring",
      },
      {
        icon: Gauge,
        name: "Application Performance Monitoring",
        desc: "Trace every transaction from frontend to backend with distributed tracing and service mapping.",
        href: "/products/observeops/application-performance-monitoring",
      },
      {
        icon: Users,
        name: "Real User Monitoring",
        desc: "Capture every click and page load with web vitals, experience scores, and session replay.",
        href: "/products/observeops/real-user-monitoring",
      },
    ],
  },

  faq: {
    label: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Find answers to common questions about Network Observability and our capabilities.",
    faqs: [
      {
        q: "What is Network Observability and how is it different from traditional network monitoring?",
        a: "Network Observability goes beyond traditional network monitoring by providing deep, contextual intelligence across every layer of your network — not just alerting when something breaks, but understanding why it broke, where it originated, and how it impacts connected systems and business services. Traditional monitoring tracks predefined metrics like uptime and bandwidth in isolation. Network Observability correlates device health, traffic flows, topology dependencies, application performance, and log data into a unified, AI-driven view.",
      },
      {
        q: "Which network devices and vendors does Motadata ObserveOps support?",
        a: "Motadata ObserveOps supports over 200 network device types from leading vendors including Cisco, Juniper, Arista, Palo Alto, Huawei, HPE, Fortinet, and many more. It monitors devices across wired, wireless, SDN, WAN, and SD-WAN environments using ICMP, SNMP, and SSH protocols. This vendor-agnostic approach ensures enterprises can maintain complete visibility across heterogeneous, multi-vendor network environments.",
      },
      {
        q: "How does Motadata ObserveOps analyze network traffic and flow data?",
        a: "Motadata ObserveOps captures and processes millions of flow records per second with support for NetFlow, sFlow, jFlow, and IPFIX protocols — providing end-to-end visibility into traffic behavior across the entire enterprise network. Traffic can be segmented by application, port, geography, cloud service, or user to uncover hidden inefficiencies and bandwidth hogs.",
      },
      {
        q: "How does Network Observability help with root cause analysis?",
        a: "Motadata ObserveOps uses AI-powered anomaly detection, dynamic topology mapping, and cross-domain correlation to dramatically accelerate root cause analysis. When an incident occurs, dependency-based topology maps eliminate redundant alerts and pinpoint the true origin of the problem — whether it is a degraded WAN link, a misconfigured device, a traffic spike, or a routing failure.",
      },
      {
        q: "How does Motadata ensure network security and compliance?",
        a: "Motadata ObserveOps is built with enterprise security and governance at its core. It features encrypted monitoring to protect data in transit, strict role-based access control (RBAC) to ensure only authorized personnel can view or modify network data, and compliance-ready reporting aligned with regulatory requirements across industries such as BFSI, telecom, healthcare, and government.",
      },
    ],
  },

  cta: {
    headline: "From Packets to Paths — Start Observing What Matters.",
    description: "Assure uptime, reliability, and clarity with unified network intelligence — visualize, analyze, and act before impact.",
    ctaPrimary: { label: "Get a Personalized Demo", href: "/schedule-demo" },
    ctaSecondary: { label: "Talk to a Solution Architect", href: "/contact" },
    footnote: "ObserveOps Network Observability — Where Performance Meets Precision.",
  },
};

import {
  Network,
  ShieldCheck,
  Server,
  ScrollText,
  Gauge,
  Users,
  TicketCheck,
  Package,
  BrainCircuit,
  RefreshCw,
  Activity,
  Headset,
  type LucideIcon,
} from "lucide-react";

export interface DemoModule {
  id: string;
  name: string;
  desc: string;
  icon: LucideIcon;
  dashboardKey: string;
}

export interface DemoProduct {
  id: "observeops" | "serviceops";
  label: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  modules: DemoModule[];
}

export const demoProducts: DemoProduct[] = [
  {
    id: "observeops",
    label: "ObserveOps",
    title: "Unified Observability Platform",
    desc: "Unified observability across metrics, logs, traces, and events at enterprise scale.",
    icon: Activity,
    modules: [
      { id: "network", name: "Network Observability", desc: "Real-time visibility into flows, packets, and infrastructure behavior.", icon: Network, dashboardKey: "network" },
      { id: "compliance", name: "Configuration & Compliance", desc: "Track drift, validate compliance, and maintain audit-ready network states.", icon: ShieldCheck, dashboardKey: "compliance" },
      { id: "infra", name: "Hybrid Infrastructure", desc: "Monitor performance and resource health across cloud and on-prem.", icon: Server, dashboardKey: "infra" },
      { id: "logs", name: "Log Monitoring", desc: "Structured insights with event correlation and root cause tracing.", icon: ScrollText, dashboardKey: "logs" },
      { id: "apm", name: "Application Performance", desc: "Identify latency, errors, and bottlenecks across services.", icon: Gauge, dashboardKey: "apm" },
      { id: "rum", name: "Real User Monitoring", desc: "Understand performance behavior and user experience signals.", icon: Users, dashboardKey: "rum" },
    ],
  },
  {
    id: "serviceops",
    label: "ServiceOps",
    title: "Unified IT Service Management",
    desc: "End-to-end IT service delivery with AI-driven automation and workflows.",
    icon: Headset,
    modules: [
      { id: "incidents", name: "Service Management", desc: "Manage incidents, problems, changes, and requests with AI workflows.", icon: TicketCheck, dashboardKey: "incidents" },
      { id: "assets", name: "IT Asset Management", desc: "Full lifecycle visibility for hardware, software, and consumables.", icon: Package, dashboardKey: "assets" },
      { id: "requests", name: "MSP Edition", desc: "Multi-tenant service operations with client isolation.", icon: Users, dashboardKey: "requests" },
      { id: "ai", name: "Agentic AI & Orchestration", desc: "AI classification and workflow automation for service processes.", icon: BrainCircuit, dashboardKey: "ai" },
      { id: "changes", name: "Patch & Deployment", desc: "Automated patch discovery and deployment across all systems.", icon: RefreshCw, dashboardKey: "changes" },
    ],
  },
];

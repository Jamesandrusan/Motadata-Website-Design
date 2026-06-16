import {
  Network,
  ShieldCheck,
  Server,
  ScrollText,
  Gauge,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface OdModule {
  id: string;
  name: string;
  desc: string;
  icon: LucideIcon;
  dashboardKey: string;
}

export const odModules: OdModule[] = [
  {
    id: "network",
    name: "Network Observability",
    desc: "Real-time visibility into flows, packets, and infrastructure behavior.",
    icon: Network,
    dashboardKey: "network",
  },
  {
    id: "compliance",
    name: "Configuration & Compliance",
    desc: "Track drift, validate compliance, and maintain audit-ready network states.",
    icon: ShieldCheck,
    dashboardKey: "compliance",
  },
  {
    id: "infra",
    name: "Hybrid Infrastructure",
    desc: "Monitor performance and resource health across cloud and on-prem.",
    icon: Server,
    dashboardKey: "infra",
  },
  {
    id: "logs",
    name: "Log Monitoring",
    desc: "Structured insights with event correlation and root cause tracing.",
    icon: ScrollText,
    dashboardKey: "logs",
  },
  {
    id: "apm",
    name: "Application Performance",
    desc: "Identify latency, errors, and bottlenecks across services.",
    icon: Gauge,
    dashboardKey: "apm",
  },
  {
    id: "rum",
    name: "Real User Monitoring",
    desc: "Understand performance behavior and user experience signals.",
    icon: Users,
    dashboardKey: "rum",
  },
];

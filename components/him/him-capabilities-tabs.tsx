"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Server,
  AppWindow,
  Cloud,
  TrendingUp,
  Bot,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

interface CapTab {
  icon: LucideIcon;
  label: string;
  title: string;
  subtitle?: string;
  desc: string;
  highlights?: string[];
  visual: React.ReactNode;
  ctaLink: string;
  ctaLabel?: string;
}

function renderHighlight(h: string) {
  const idx = h.indexOf(":");
  if (idx === -1) return h;
  return (
    <>
      <span className="font-semibold text-foreground">{h.slice(0, idx)}</span>
      {h.slice(idx)}
    </>
  );
}

/* ── Mini visuals for each tab ── */

function ComputeVisual() {
  const hosts = [
    { name: "prod-web-01", type: "Linux", cpu: 34, mem: 62, disk: 48, net: "1.2 Gbps", status: "Healthy" },
    { name: "prod-web-02", type: "Linux", cpu: 67, mem: 78, disk: 71, net: "890 Mbps", status: "Warning" },
    { name: "prod-db-01", type: "Windows", cpu: 22, mem: 45, disk: 55, net: "340 Mbps", status: "Healthy" },
    { name: "staging-app", type: "Linux", cpu: 12, mem: 31, disk: 22, net: "120 Mbps", status: "Healthy" },
    { name: "hci-node-03", type: "Nutanix", cpu: 51, mem: 66, disk: 60, net: "2.1 Gbps", status: "Healthy" },
  ];
  const summary = [
    { label: "Total Hosts", value: "48" },
    { label: "vCPUs", value: "384" },
    { label: "Uptime", value: "99.97%" },
    { label: "Alerts", value: "3" },
  ];
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-label-md text-foreground/70">Compute Resources</span>
        <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-semibold text-green-600">All Systems Operational</span>
      </div>
      {/* Summary row */}
      <div className="grid grid-cols-4 gap-2 mb-3">
        {summary.map((s) => (
          <div key={s.label} className="rounded-md bg-white border border-border/20 px-2.5 py-2 text-center">
            <div className="text-base font-bold text-foreground/80">{s.value}</div>
            <div className="text-[10px] text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
      {/* Host table */}
      <div className="flex-1 space-y-1.5 overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-[1fr_52px_52px_52px_70px_56px] gap-1 px-3 text-[10px] font-semibold uppercase tracking-wider text-foreground/40">
          <span>Host</span><span>CPU</span><span>MEM</span><span>Disk</span><span>Network</span><span>Status</span>
        </div>
        {hosts.map((h) => (
          <div key={h.name} className="grid grid-cols-[1fr_52px_52px_52px_70px_56px] gap-1 items-center rounded-md bg-white px-3 py-2 border border-border/15">
            <div>
              <div className="text-caption text-foreground/80 truncate">{h.name}</div>
              <div className="text-[10px] text-muted-foreground">{h.type}</div>
            </div>
            {/* CPU bar */}
            <div className="space-y-0.5">
              <span className="text-[10px] text-foreground/60">{h.cpu}%</span>
              <div className="h-1 rounded-full bg-foreground/8 overflow-hidden">
                <div className={`h-full rounded-full ${h.cpu > 60 ? "bg-primary" : "bg-green-500/60"}`} style={{ width: `${h.cpu}%` }} />
              </div>
            </div>
            {/* MEM bar */}
            <div className="space-y-0.5">
              <span className="text-[10px] text-foreground/60">{h.mem}%</span>
              <div className="h-1 rounded-full bg-foreground/8 overflow-hidden">
                <div className={`h-full rounded-full ${h.mem > 70 ? "bg-primary" : "bg-blue-500/60"}`} style={{ width: `${h.mem}%` }} />
              </div>
            </div>
            {/* Disk bar */}
            <div className="space-y-0.5">
              <span className="text-[10px] text-foreground/60">{h.disk}%</span>
              <div className="h-1 rounded-full bg-foreground/8 overflow-hidden">
                <div className={`h-full rounded-full ${h.disk > 65 ? "bg-amber-500/60" : "bg-foreground/20"}`} style={{ width: `${h.disk}%` }} />
              </div>
            </div>
            <span className="text-[10px] text-muted-foreground">{h.net}</span>
            <span className={`text-[10px] font-semibold ${h.status === "Warning" ? "text-primary" : "text-green-600/70"}`}>{h.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AppVisual() {
  const services = [
    { name: "payment-api", latency: 23, errors: 0.1, rpm: 1200, apdex: 0.98, trend: [18, 21, 25, 22, 23, 20, 23] },
    { name: "auth-service", latency: 8, errors: 0, rpm: 890, apdex: 0.99, trend: [6, 7, 9, 8, 7, 8, 8] },
    { name: "order-service", latency: 45, errors: 1.2, rpm: 340, apdex: 0.91, trend: [30, 35, 42, 50, 48, 44, 45] },
    { name: "notification-svc", latency: 15, errors: 0.3, rpm: 560, apdex: 0.96, trend: [12, 14, 13, 16, 15, 14, 15] },
  ];
  const dbHealth = [
    { name: "PostgreSQL Primary", qps: "2.4k", connections: 84, status: "Healthy" },
    { name: "MongoDB Replica", qps: "1.1k", connections: 42, status: "Healthy" },
    { name: "Redis Cache", qps: "8.7k", connections: 120, status: "Warning" },
  ];
  return (
    <div className="flex flex-col h-full">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-label-md text-foreground/70">Application & Data Insight</span>
        <span className="text-xs text-primary font-medium">Apdex 99.2%</span>
      </div>
      {/* Services */}
      <div className="space-y-1.5 mb-3">
        <div className="grid grid-cols-[1fr_60px_50px_50px_44px_56px] gap-1 px-3 text-[10px] font-semibold uppercase tracking-wider text-foreground/40">
          <span>Service</span><span>Latency</span><span>Errors</span><span>RPM</span><span>Apdex</span><span>Trend</span>
        </div>
        {services.map((s) => (
          <div key={s.name} className="grid grid-cols-[1fr_60px_50px_50px_44px_56px] gap-1 items-center rounded-md bg-white px-3 py-2 border border-border/15">
            <span className="text-caption text-foreground/80 truncate">{s.name}</span>
            <span className={`text-[11px] font-medium ${s.latency > 40 ? "text-primary" : "text-foreground/60"}`}>{s.latency}ms</span>
            <span className={`text-[11px] font-medium ${s.errors > 1 ? "text-red-500" : "text-foreground/60"}`}>{s.errors}%</span>
            <span className="text-[11px] text-foreground/60">{s.rpm}</span>
            <span className={`text-[11px] font-semibold ${s.apdex < 0.93 ? "text-primary" : "text-green-600/70"}`}>{s.apdex}</span>
            {/* Sparkline */}
            <svg viewBox="0 0 48 16" className="h-3 w-full">
              <polyline
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={s.trend.map((v, i) => `${i * 8},${16 - (v / 55) * 16}`).join(" ")}
              />
            </svg>
          </div>
        ))}
      </div>
      {/* Database row */}
      <div className="flex-1">
        <div className="text-overline-sm text-foreground/40 mb-1.5 px-1">Database Layer</div>
        <div className="grid grid-cols-3 gap-1.5">
          {dbHealth.map((d) => (
            <div key={d.name} className="rounded-md bg-white border border-border/15 px-2.5 py-2">
              <div className="text-[11px] font-medium text-foreground/80 truncate">{d.name}</div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[10px] text-muted-foreground">{d.qps} QPS</span>
                <span className={`h-1.5 w-1.5 rounded-full ${d.status === "Warning" ? "bg-primary" : "bg-green-500"}`} />
              </div>
              <div className="mt-1">
                <div className="h-1 rounded-full bg-foreground/8 overflow-hidden">
                  <div className={`h-full rounded-full ${d.connections > 100 ? "bg-primary/60" : "bg-blue-500/50"}`} style={{ width: `${(d.connections / 150) * 100}%` }} />
                </div>
                <span className="text-[9px] text-muted-foreground">{d.connections} connections</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CloudVisual() {
  const providers = [
    { name: "AWS", region: "us-east-1", instances: 12, healthy: 12, cost: "$4.2k/mo", color: "bg-amber-500" },
    { name: "Azure", region: "West EU", instances: 8, healthy: 7, cost: "$2.8k/mo", color: "bg-blue-500" },
    { name: "GCP", region: "asia-south1", instances: 5, healthy: 5, cost: "$1.4k/mo", color: "bg-red-500" },
  ];
  const k8s = [
    { name: "prod-cluster", pods: 124, running: 121, pending: 2, failed: 1, nodes: 8 },
    { name: "staging-cluster", pods: 42, running: 42, pending: 0, failed: 0, nodes: 3 },
  ];
  const services = [
    { name: "DNS", status: "up", latency: "4ms" },
    { name: "REST API", status: "up", latency: "12ms" },
    { name: "SMTP", status: "up", latency: "45ms" },
    { name: "SSL Cert", status: "warning", latency: "Exp 14d" },
    { name: "Ping", status: "up", latency: "2ms" },
    { name: "Port 443", status: "up", latency: "3ms" },
  ];
  return (
    <div className="flex flex-col h-full">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-label-md text-foreground/70">Cloud & Service Intelligence</span>
        <span className="text-caption text-muted-foreground">3 providers &middot; 25 instances</span>
      </div>
      {/* Cloud providers */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {providers.map((p) => (
          <div key={p.name} className="rounded-md bg-white border border-border/15 px-2.5 py-2">
            <div className="flex items-center gap-1.5 mb-1">
              <span className={`h-2 w-2 rounded-full ${p.color}`} />
              <span className="text-label-sm text-foreground/80">{p.name}</span>
            </div>
            <div className="text-[10px] text-muted-foreground mb-1.5">{p.region}</div>
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-medium ${p.healthy < p.instances ? "text-primary" : "text-green-600/70"}`}>{p.healthy}/{p.instances}</span>
              <span className="text-[10px] text-muted-foreground">{p.cost}</span>
            </div>
          </div>
        ))}
      </div>
      {/* K8s clusters */}
      <div className="text-overline-sm text-foreground/40 mb-1.5 px-1">Kubernetes</div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {k8s.map((c) => (
          <div key={c.name} className="rounded-md bg-white border border-border/15 px-2.5 py-2">
            <div className="text-[11px] font-medium text-foreground/80 mb-1">{c.name}</div>
            <div className="flex gap-2 text-[10px]">
              <span className="text-green-600">{c.running} running</span>
              {c.pending > 0 && <span className="text-amber-500">{c.pending} pending</span>}
              {c.failed > 0 && <span className="text-red-500">{c.failed} failed</span>}
            </div>
            <div className="mt-1.5 h-1.5 rounded-full bg-foreground/8 overflow-hidden flex">
              <div className="h-full bg-green-500/60" style={{ width: `${(c.running / c.pods) * 100}%` }} />
              <div className="h-full bg-amber-400/60" style={{ width: `${(c.pending / c.pods) * 100}%` }} />
              <div className="h-full bg-red-400/60" style={{ width: `${(c.failed / c.pods) * 100}%` }} />
            </div>
            <div className="text-[9px] text-muted-foreground mt-0.5">{c.pods} pods &middot; {c.nodes} nodes</div>
          </div>
        ))}
      </div>
      {/* Service checks */}
      <div className="text-overline-sm text-foreground/40 mb-1.5 px-1">Service Checks</div>
      <div className="grid grid-cols-3 gap-1.5 flex-1">
        {services.map((s) => (
          <div key={s.name} className="flex items-center gap-1.5 rounded bg-white border border-border/15 px-2 py-1.5">
            <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${s.status === "warning" ? "bg-primary" : "bg-green-500"}`} />
            <div className="min-w-0">
              <div className="text-[10px] font-medium text-foreground/70 truncate">{s.name}</div>
              <div className={`text-[9px] ${s.status === "warning" ? "text-primary" : "text-muted-foreground"}`}>{s.latency}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ForesightVisual() {
  const cpuBars = [42, 48, 53, 58, 62, 67, 72, 76, 80, 84, 87, 91];
  const memBars = [55, 57, 60, 62, 64, 67, 69, 72, 74, 76, 78, 80];
  const diskBars = [68, 69, 70, 71, 72, 73, 74, 75, 77, 79, 82, 85];
  const resources = [
    { name: "CPU Cores", used: 276, total: 384, unit: "vCPUs", threshold: 85 },
    { name: "Memory", used: 218, total: 512, unit: "GB", threshold: 80 },
    { name: "Storage", used: 14.2, total: 20, unit: "TB", threshold: 90 },
    { name: "Network", used: 6.8, total: 10, unit: "Gbps", threshold: 80 },
  ];
  return (
    <div className="flex flex-col h-full">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-label-md text-foreground/70">Capacity Forecast</span>
        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">Action in 18 days</span>
      </div>
      {/* Resource utilization cards */}
      <div className="grid grid-cols-4 gap-2 mb-3">
        {resources.map((r) => {
          const pct = Math.round((r.used / r.total) * 100);
          const isHigh = pct >= r.threshold * 0.9;
          return (
            <div key={r.name} className="rounded-md bg-white border border-border/15 px-2.5 py-2 text-center">
              {/* Circular progress */}
              <div className="relative mx-auto h-10 w-10 mb-1">
                <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                  <circle cx="18" cy="18" r="15" fill="none" strokeWidth="3" className="stroke-foreground/8" />
                  <circle cx="18" cy="18" r="15" fill="none" strokeWidth="3" strokeDasharray={`${pct * 0.942} 100`} strokeLinecap="round" className={isHigh ? "stroke-primary" : "stroke-blue-500/60"} />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-foreground/70">{pct}%</span>
              </div>
              <div className="text-[10px] font-medium text-foreground/70">{r.name}</div>
              <div className="text-[9px] text-muted-foreground">{r.used}/{r.total} {r.unit}</div>
            </div>
          );
        })}
      </div>
      {/* Forecast charts */}
      <div className="text-overline-sm text-foreground/40 mb-1.5 px-1">30-Day Projection</div>
      <div className="grid grid-cols-3 gap-2 flex-1">
        {[
          { label: "CPU Utilization", bars: cpuBars, color: "bg-primary" },
          { label: "Memory", bars: memBars, color: "bg-blue-500" },
          { label: "Storage", bars: diskBars, color: "bg-amber-500" },
        ].map((chart) => (
          <div key={chart.label} className="rounded-md bg-white border border-border/15 px-2 py-2">
            <div className="text-[10px] font-medium text-foreground/60 mb-1.5">{chart.label}</div>
            <div className="flex items-end gap-[2px] h-12">
              {chart.bars.map((h, i) => (
                <div key={i} className={`flex-1 rounded-t-sm ${h > 80 ? `${chart.color}/40` : `${chart.color}/20`}`} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="flex justify-between text-[8px] text-muted-foreground mt-1">
              <span>Now</span>
              <span className={chart.bars[chart.bars.length - 1] > 80 ? "text-primary font-medium" : ""}>
                {chart.bars[chart.bars.length - 1]}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AutoVisual() {
  const automations = [
    { name: "Auto-scale on CPU > 85%", triggers: 12, last: "2m ago", status: "Active" },
    { name: "Restart unhealthy pods", triggers: 8, last: "18m ago", status: "Active" },
    { name: "Disk cleanup on > 90%", triggers: 3, last: "1h ago", status: "Active" },
    { name: "SSL cert auto-renew", triggers: 1, last: "2d ago", status: "Active" },
  ];
  const alerts = [
    { severity: "Critical", count: 1, color: "bg-red-500" },
    { severity: "Warning", count: 5, color: "bg-primary" },
    { severity: "Info", count: 12, color: "bg-blue-500" },
    { severity: "Resolved", count: 34, color: "bg-green-500" },
  ];
  const protocols = [
    { name: "SNMP", active: true },
    { name: "SSH", active: true },
    { name: "REST API", active: true },
    { name: "WMI", active: true },
    { name: "JMX", active: false },
    { name: "IPMI", active: true },
  ];
  const timeline = [
    { time: "09:41", event: "CPU spike detected on prod-web-02", type: "detect" },
    { time: "09:41", event: "Root cause: memory leak in auth-svc", type: "diagnose" },
    { time: "09:42", event: "Runbook executed: restart auth-svc", type: "action" },
    { time: "09:43", event: "Service restored — CPU normalized", type: "resolved" },
  ];
  return (
    <div className="flex flex-col h-full">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-label-md text-foreground/70">Autonomous Operations</span>
        <span className="text-caption text-muted-foreground">23 triggered today</span>
      </div>
      {/* Alert summary */}
      <div className="grid grid-cols-4 gap-1.5 mb-3">
        {alerts.map((a) => (
          <div key={a.severity} className="rounded-md bg-white border border-border/15 px-2 py-1.5 text-center">
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <span className={`h-1.5 w-1.5 rounded-full ${a.color}`} />
              <span className="text-base font-bold text-foreground/80">{a.count}</span>
            </div>
            <div className="text-[9px] text-muted-foreground">{a.severity}</div>
          </div>
        ))}
      </div>
      {/* Incident timeline */}
      <div className="text-overline-sm text-foreground/40 mb-1.5 px-1">Latest Incident</div>
      <div className="rounded-md bg-white border border-border/15 px-3 py-2 mb-3">
        <div className="space-y-1.5">
          {timeline.map((t, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="flex flex-col items-center mt-0.5">
                <span className={`h-2 w-2 rounded-full shrink-0 ${
                  t.type === "detect" ? "bg-red-400" : t.type === "diagnose" ? "bg-amber-400" : t.type === "action" ? "bg-blue-400" : "bg-green-500"
                }`} />
                {i < timeline.length - 1 && <span className="w-px h-3 bg-foreground/10" />}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-medium text-foreground/40">{t.time}</span>
                  <span className="text-[10px] text-foreground/70 truncate">{t.event}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom row: automations + protocols */}
      <div className="grid grid-cols-[1fr_auto] gap-2 flex-1">
        <div className="space-y-1">
          {automations.slice(0, 3).map((a) => (
            <div key={a.name} className="flex items-center justify-between rounded bg-white border border-border/15 px-2 py-1.5">
              <span className="text-[10px] text-foreground/70 truncate">{a.name}</span>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[9px] text-muted-foreground">{a.last}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-md bg-white border border-border/15 px-2.5 py-2">
          <div className="text-[9px] font-semibold uppercase tracking-widest text-foreground/40 mb-1.5">Protocols</div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1">
            {protocols.map((p) => (
              <div key={p.name} className="flex items-center gap-1">
                <span className={`h-1 w-1 rounded-full ${p.active ? "bg-green-500" : "bg-foreground/20"}`} />
                <span className="text-[10px] text-foreground/60">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const tabs: CapTab[] = [
  {
    icon: Server,
    label: "Unified Compute",
    title: "Unified Compute Visibility",
    subtitle: "Every Core Counted. Every System Accounted.",
    desc: "Monitor physical servers, virtualized and hyper-converged systems with unified health, utilization, and performance intelligence.",
    highlights: [
      "Cross-OS Coverage: Real-time tracking of CPU, memory, processes, and services across Windows, Linux, and Unix.",
      "Virtualization Support: Native coverage for VMware, Hyper-V, Citrix, and HCI stacks like Nutanix.",
      "Unified Monitoring Templates: Per-technology templates, customizable for organizational standards.",
      "Discovery and SLA Dashboards: Auto-discovery, dependency correlation, and SLA-linked performance dashboards.",
    ],
    visual: <ComputeVisual />,
    ctaLink: "/products/observeops/hybrid-infrastructure-monitoring/unified-compute-visibility",
  },
  {
    icon: AppWindow,
    label: "Deep Application",
    title: "Deep Application & Data Insight",
    subtitle: "From Transactions to Queries — Performance That Runs Deep.",
    desc: "Application response, database behavior, and host metrics in one view to uncover root causes faster and maintain seamless business service continuity.",
    highlights: [
      "Application Monitoring: End-to-end coverage for enterprise applications and middleware with real-time KPIs.",
      "Database Health Insights: Oracle, MySQL, PostgreSQL, SQL Server, MongoDB, and more.",
      "Cross-Tier Correlation: Application latency, query performance, and infrastructure metrics linked.",
      "Custom Templates and Thresholds: Tailored per app or database stack.",
    ],
    visual: <AppVisual />,
    ctaLink: "/products/observeops/hybrid-infrastructure-monitoring/deep-application-insight",
  },
  {
    icon: Cloud,
    label: "Cloud-Native",
    title: "Cloud-Native & Service Intelligence",
    subtitle: "From Cloud to Cluster — One Unified Perspective.",
    desc: "Unified view across AWS, Azure, M365, and Kubernetes clusters while continuously monitoring essential services for always-on availability.",
    highlights: [
      "Cloud Integrations: AWS, Azure, and M365 for compute, network, and storage telemetry.",
      "Kubernetes Observability: Pods, nodes, namespaces, controllers, and services.",
      "Critical Service Monitoring: DNS, REST APIs, email, ports, SSL, and ping checks.",
      "Unified Dashboards: On-prem and cloud workloads combined with full service context.",
    ],
    visual: <CloudVisual />,
    ctaLink: "/products/observeops/hybrid-infrastructure-monitoring/cloud-native-intelligence",
  },
  {
    icon: TrendingUp,
    label: "Capacity Foresight",
    title: "Capacity Foresight & Resource Optimization",
    subtitle: "Know Your Limits Before You Reach Them.",
    desc: "Gain end-to-end visibility into infrastructure and storage performance with AI-powered forecasting and optimization. Predict growth, prevent bottlenecks, and align resources with business demands.",
    highlights: [
      "Multi-Vendor Storage Monitoring: Unified coverage across Dell EMC, HPE, Hitachi, Huawei, NetApp, and other leading storage systems.",
      "Comprehensive Storage Insight: Track IOPS, latency, throughput, and disk health across SAN, NAS, and RAID.",
      "AI-Driven Forecasting: Predict resource utilization and capacity saturation with precision modeling.",
      "Performance-to-Business Mapping: Correlate capacity metrics with service-level objectives and business KPIs.",
      "Cost Optimization: Identify over-provisioned or underutilized assets for financial and operational efficiency.",
    ],
    visual: <ForesightVisual />,
    ctaLink: "/products/observeops/hybrid-infrastructure-monitoring/capacity-foresight",
  },
  {
    icon: Bot,
    label: "Autonomous Ops",
    title: "Autonomous Operations & Predictive Analytics",
    subtitle: "Detect, Diagnose, and Act — Intelligently.",
    desc: "Automate detection, diagnosis, and remediation across your hybrid infrastructure with AI and workflow orchestration. ObserveOps ensures every alert has context — and every incident becomes a self-healing opportunity.",
    highlights: [
      "Policy-Based Alerting: Adaptive thresholds, root-cause suppression, and event correlation.",
      "Runbook Automation: Automated response for recurring incidents and service restarts.",
      "Cross-Protocol Data Ingestion: Support for SNMP, SSH, REST, WMI, JMX, and APIs unified via Motastore.",
      "Metric Explorer: Analyze performance trends with arithmetic operations, anomaly detection, and predictive forecasting.",
      "Dependency Mapping: Visualize service relationships to isolate impact instantly.",
    ],
    visual: <AutoVisual />,
    ctaLink: "/products/observeops/hybrid-infrastructure-monitoring/autonomous-operations",
  },
];

/* ── Scroll-trigger item for Option 2 ── */
function ScrollItem({ tab, index, onInView }: { tab: CapTab; index: number; onInView: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });
  const Icon = tab.icon;

  useEffect(() => {
    if (isInView) onInView(index);
  }, [isInView, index, onInView]);

  return (
    <div
      ref={ref}
      className={`py-10 transition-opacity duration-300 ${isInView ? "opacity-100" : "opacity-30"}`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 mb-4">
        <Icon className={`h-5 w-5 transition-colors ${isInView ? "text-primary" : "text-foreground/50"}`} />
      </div>
      <h3 className="text-heading-md mb-3">
        {tab.title}
      </h3>
      <p className="text-body-sm text-muted-foreground">
        {tab.desc}
      </p>
      <Link
        href={tab.ctaLink}
        className="mt-4 inline-flex items-center gap-1.5 text-label-md text-primary hover:text-primary/80 transition-colors group/cta"
      >
        {tab.ctaLabel || "Learn More"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
      </Link>
    </div>
  );
}

/* ── Accordion item for Option 1 ── */
function AccordionContentSection({
  tab,
  index,
  isActive,
  onInView,
  onClick,
  isLast,
}: {
  tab: CapTab;
  index: number;
  isActive: boolean;
  onInView: (i: number) => void;
  onClick: (i: number) => void;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  const Icon = tab.icon;
  const lastInView = useRef(false);

  useEffect(() => {
    if (isInView && !lastInView.current) {
      onInView(index);
    }
    lastInView.current = isInView;
  }, [isInView, index, onInView]);

  return (
    <div ref={ref} className="scroll-mt-32">
      {/* Clickable header row */}
      <button
        onClick={() => onClick(index)}
        className={`w-full flex items-center gap-4 py-5 text-left transition-colors group ${
          !isActive && !isLast ? "border-b border-border/30" : ""
        }`}
      >
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
            isActive ? "bg-primary/10" : "bg-foreground/5 group-hover:bg-foreground/8"
          }`}
        >
          <Icon
            className={`h-4.5 w-4.5 transition-colors ${
              isActive ? "text-primary" : "text-foreground/40"
            }`}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className={`text-heading-sm transition-colors ${
              isActive ? "text-foreground" : "text-foreground/60 group-hover:text-foreground/80"
            }`}
          >
            {tab.title}
          </h3>
        </div>
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-all duration-300 ${
            isActive ? "text-primary rotate-180" : "text-muted-foreground/40"
          }`}
        />
      </button>

      {/* Expanded content */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={`pl-[52px] pb-6 ${!isLast ? "border-b border-border/30" : ""}`}>
              <p className="text-body-sm text-muted-foreground mb-6">
                {tab.desc}
              </p>
              {tab.highlights && tab.highlights.length > 0 && (
                <div>
                  <p className="text-label-md uppercase tracking-widest text-foreground/70 mb-3">
                    Key Highlights
                  </p>
                  <ul className="space-y-2.5">
                    {tab.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary mt-2" />
                        <span className="text-body-sm text-muted-foreground">
                          {renderHighlight(h)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <Link
                href={tab.ctaLink}
                className="mt-6 inline-flex items-center gap-1.5 text-label-md text-primary hover:text-primary/80 transition-colors group/cta"
              >
                {tab.ctaLabel || "Learn More"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function HIMCapabilitiesTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [scrollActive, setScrollActive] = useState(0);
  const [accordionActive, setAccordionActive] = useState(0);
  const [option, setOption] = useState(4);
  const [opt4Active, setOpt4Active] = useState(0);
  const opt4Ref = useRef<HTMLDivElement>(null);
  const opt4Cooldown = useRef(false);
  const opt4Visible = useRef(false);
  const opt4ActiveRef = useRef(0);

  // keep ref in sync with state
  useEffect(() => {
    opt4ActiveRef.current = opt4Active;
  }, [opt4Active]);

  // IntersectionObserver to know when section is centered in viewport
  useEffect(() => {
    if (option !== 4 || !opt4Ref.current) return;
    const el = opt4Ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => { opt4Visible.current = entry.isIntersecting; },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [option]);

  // Wheel listener: hijack scroll to cycle tabs
  useEffect(() => {
    if (option !== 4) return;

    const onWheel = (e: WheelEvent) => {
      if (!opt4Visible.current || opt4Cooldown.current) return;
      if (e.deltaY === 0) return;

      const idx = opt4ActiveRef.current;
      const down = e.deltaY > 0;

      // At boundaries → let normal page scroll happen
      if (down && idx >= tabs.length - 1) return;
      if (!down && idx <= 0) return;

      // Hijack scroll
      e.preventDefault();
      opt4Cooldown.current = true;

      const next = Math.max(0, Math.min(tabs.length - 1, down ? idx + 1 : idx - 1));
      setOpt4Active(next);

      // Cooldown: smooth delay before next switch
      setTimeout(() => { opt4Cooldown.current = false; }, 600);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [option]);

  const handleOpt4Click = useCallback((i: number) => {
    setOpt4Active((prev) => (prev === i ? prev : i));
  }, []);

  useEffect(() => {
    if (option !== 3 || paused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, option]);

  const selectTab = (i: number) => {
    setActiveIndex(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 10000);
  };

  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleAccordionInView = useCallback((i: number) => {
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      setAccordionActive((prev) => {
        if (i > prev) return prev + 1;
        if (i < prev) return prev - 1;
        return prev;
      });
    }, 150);
  }, []);

  const handleAccordionClick = useCallback((i: number) => {
    setAccordionActive((prev) => (prev === i ? prev : i));
  }, []);

  const safeIndex = (i: number) => Math.max(0, Math.min(tabs.length - 1, i));
  const active = tabs[safeIndex(activeIndex)];
  const accordionTab = tabs[safeIndex(accordionActive)];
  const scrollTab = tabs[safeIndex(scrollActive)];
  const opt4Tab = tabs[safeIndex(opt4Active)];

  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {/* Option toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center rounded-full border border-border/40 p-0.5 bg-muted/20">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => setOption(num)}
                className={`flex items-center justify-center rounded-full h-5 w-5 text-[10px] font-medium transition-all ${
                  option === num
                    ? "bg-white text-foreground shadow-sm"
                    : "text-muted-foreground/60 hover:text-foreground"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-12"
        >
          <p className="text-overline text-primary">
            Capabilities
          </p>
          <h2 className="mt-3 text-display-md">
            Infrastructure Monitoring Capabilities
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Complete Hybrid Infrastructure Intelligence
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* ── Option 1: Accordion left tabs + scroll-driven with highlights ── */}
          {option === 1 ? (
            <motion.div
              key="option1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20">
                  {/* Left — Accordion tabs */}
                  <div>
                    {tabs.map((tab, i) => (
                      <AccordionContentSection
                        key={tab.label}
                        tab={tab}
                        index={i}
                        isActive={accordionActive === i}
                        isLast={i === tabs.length - 1}
                        onInView={handleAccordionInView}
                        onClick={handleAccordionClick}
                      />
                    ))}
                  </div>

                  {/* Right — Sticky visual */}
                  <div className="hidden lg:block">
                    <div className="sticky top-32">
                      <div className="relative">
                        <div className="absolute -left-6 -bottom-6 w-full h-full rounded-lg bg-primary/15 overflow-hidden">
                          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                            <defs>
                              <pattern id="diag-lines-1" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                                <line x1="0" y1="0" x2="0" y2="12" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.15" />
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#diag-lines-1)" />
                          </svg>
                        </div>
                        <div className="relative overflow-hidden rounded-lg border border-border bg-neutral-50 p-6 shadow-sm" style={{ aspectRatio: "4/3" }}>
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={accordionActive}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="flex flex-col justify-between h-full overflow-hidden"
                            >
                              {accordionTab.visual}
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      {/* Subtitle below the visual */}
                      {accordionTab.subtitle && (
                        <AnimatePresence mode="wait">
                          <motion.p
                            key={accordionActive}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.25 }}
                            className="mt-4 pr-12 text-right text-body-md text-foreground"
                          >
                            {accordionTab.subtitle}
                          </motion.p>
                        </AnimatePresence>
                      )}
                      </div>
                    </div>
                  </div>
                </div>
            </motion.div>

          /* ── Option 2: Scroll-driven left text, right sticky visual ── */
          ) : option === 2 ? (
            <motion.div
              key="option2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left — scrollable text items */}
                <div className="divide-y divide-border/40">
                  {tabs.map((tab, i) => (
                    <ScrollItem key={tab.label} tab={tab} index={i} onInView={setScrollActive} />
                  ))}
                </div>

                {/* Right — sticky visual */}
                <div className="hidden lg:block">
                  <div className="sticky top-32">
                    <div className="relative">
                      <div className="absolute -left-6 -bottom-6 w-full h-full rounded-lg bg-primary/15 overflow-hidden">
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                          <defs>
                            <pattern id="diag-lines" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                              <line x1="0" y1="0" x2="0" y2="12" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.15" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#diag-lines)" />
                        </svg>
                      </div>
                      <div className="relative overflow-hidden rounded-lg border border-border bg-neutral-50 p-6 shadow-sm" style={{ aspectRatio: "4/3" }}>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={scrollActive}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex flex-col justify-between h-full overflow-hidden"
                          >
                            {scrollTab.visual}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          /* ── Option 3: Tabs with auto-rotation ── */
          ) : option === 3 ? (
            <motion.div
              key="option3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {/* Tabs */}
              <div className="flex gap-2 justify-center flex-wrap mb-10">
                {tabs.map((tab, i) => {
                  const Icon = tab.icon;
                  const isActive = i === activeIndex;
                  return (
                    <button
                      key={tab.label}
                      onClick={() => selectTab(i)}
                      className={`group flex shrink-0 items-center gap-2 rounded-lg px-5 py-2.5 text-label-md transition-all duration-200 ${
                        isActive
                          ? "text-foreground bg-neutral-100 ring-1 ring-primary/40"
                          : "text-muted-foreground hover:text-foreground hover:bg-neutral-100 ring-1 ring-border/40"
                      }`}
                    >
                      <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`} />
                      <span className="whitespace-nowrap">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Content Card */}
              <div className="rounded-2xl border border-border/60 overflow-hidden">
                <div className="grid lg:grid-cols-2 min-h-[400px]">
                  {/* Text side */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
                          <active.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-heading-md mb-4">
                          {active.title}
                        </h3>
                        <p className="text-body-sm text-muted-foreground">
                          {active.desc}
                        </p>
                        <Link
                          href={active.ctaLink}
                          className="mt-6 inline-flex items-center gap-1.5 text-label-md text-primary hover:text-primary/80 transition-colors group/cta"
                        >
                          {active.ctaLabel || "Learn More"}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
                        </Link>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Visual side */}
                  <div className="relative bg-neutral-100 p-6 lg:p-8 flex items-center">
                    <div className="w-full overflow-hidden rounded-lg border border-border bg-neutral-50 p-6 shadow-sm" style={{ aspectRatio: "4/3" }}>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="flex flex-col justify-between h-full overflow-hidden"
                        >
                          {active.visual}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          /* ── Option 4: Same layout as Option 1, wheel-driven tab switching ── */
          ) : (
            <motion.div
              key="option4"
              ref={opt4Ref}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20">
                  {/* Left — Accordion tabs (click-only, no scroll detection) */}
                  <div>
                    {tabs.map((tab, i) => {
                      const Icon = tab.icon;
                      const isActive = opt4Active === i;
                      const isLast = i === tabs.length - 1;
                      return (
                        <div key={tab.label}>
                          <button
                            onClick={() => handleOpt4Click(i)}
                            className={`w-full flex items-center gap-4 py-5 text-left transition-colors group ${
                              !isActive && !isLast ? "border-b border-border/30" : ""
                            }`}
                          >
                            <div
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                                isActive ? "bg-primary/10" : "bg-foreground/5 group-hover:bg-foreground/8"
                              }`}
                            >
                              <Icon
                                className={`h-4.5 w-4.5 transition-colors ${
                                  isActive ? "text-primary" : "text-foreground/40"
                                }`}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3
                                className={`text-heading-sm transition-colors ${
                                  isActive ? "text-foreground" : "text-foreground/60 group-hover:text-foreground/80"
                                }`}
                              >
                                {tab.title}
                              </h3>
                            </div>
                            <ChevronDown
                              className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                                isActive ? "text-primary rotate-180" : "text-muted-foreground/40"
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className={`pl-[52px] pb-6 ${!isLast ? "border-b border-border/30" : ""}`}>
                                  <p className="text-body-sm text-muted-foreground mb-6">
                                    {tab.desc}
                                  </p>
                                  {tab.highlights && tab.highlights.length > 0 && (
                                    <div>
                                      <p className="text-label-md uppercase tracking-widest text-foreground/70 mb-3">
                                        Key Highlights
                                      </p>
                                      <ul className="space-y-2.5">
                                        {tab.highlights.map((h, hi) => (
                                          <li key={hi} className="flex items-start gap-2.5">
                                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary mt-2" />
                                            <span className="text-body-sm text-muted-foreground">
                                              {renderHighlight(h)}
                                            </span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                  <Link
                                    href={tab.ctaLink}
                                    className="mt-6 inline-flex items-center gap-1.5 text-label-md text-primary hover:text-primary/80 transition-colors group/cta"
                                  >
                                    {tab.ctaLabel || "Learn More"}
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>

                  {/* Right — Sticky visual (identical to Option 1) */}
                  <div className="hidden lg:block">
                    <div className="sticky top-32">
                      <div className="relative">
                        <div className="absolute -left-6 -bottom-6 w-full h-full rounded-lg bg-primary/15 overflow-hidden">
                          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                            <defs>
                              <pattern id="diag-lines-4" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                                <line x1="0" y1="0" x2="0" y2="12" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.15" />
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#diag-lines-4)" />
                          </svg>
                        </div>
                        <div
                          className="relative overflow-hidden rounded-lg border border-white/10 p-6 shadow-sm [&_.bg-white]:!bg-white/[0.04] [&_.bg-white]:!border-white/10"
                          style={{
                            aspectRatio: "1920/1200",
                            backgroundColor: "#161616",
                            // Re-map theme variables so text-foreground / text-muted-foreground / border-border
                            // inside the visuals automatically flip to light values on the dark canvas.
                            ["--foreground" as string]: "0 0% 96%",
                            ["--muted-foreground" as string]: "0 0% 65%",
                            ["--border" as string]: "0 0% 22%",
                          }}
                        >
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={opt4Active}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="flex flex-col justify-between h-full overflow-hidden"
                            >
                              {opt4Tab.visual}
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      {/* Subtitle below the visual */}
                      {opt4Tab.subtitle && (
                        <AnimatePresence mode="wait">
                          <motion.p
                            key={opt4Active}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.25 }}
                            className="mt-4 pr-12 text-right text-body-md text-foreground"
                          >
                            {opt4Tab.subtitle}
                          </motion.p>
                        </AnimatePresence>
                      )}
                      </div>
                    </div>
                  </div>
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

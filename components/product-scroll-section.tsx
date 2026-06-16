"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Activity,
  Headset,
  Network,
  ShieldCheck,
  Server,
  ScrollText,
  Gauge,
  Users,
  TicketCheck,
  RefreshCw,
  Package,
  ClipboardList,
  BrainCircuit,
  BookOpen,
  TrendingUp,
  ArrowRight,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BentoCell, bentoProdMeta, type BentoProduct } from "@/components/product-bento-grid";

/* ── Types ── */
interface ScrollModule {
  name: string;
  desc: string;
  icon: LucideIcon;
  visual: React.ReactNode;
  tags: string[];
  url?: string;
}

interface ProductGroup {
  id: string;
  label: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  modules: ScrollModule[];
}

/* ══════════════════════════════════════════════════════
   OBSERVE OPS VISUALS — right panel dashboards
   ══════════════════════════════════════════════════════ */

export function NetworkDashboard() {
  const devices = [
    { name: "Core Switch 01", ip: "10.0.1.1", status: "Up", load: "34%", color: "bg-primary/10 text-primary" },
    { name: "Firewall GW", ip: "10.0.0.1", status: "Up", load: "61%", color: "bg-primary/10 text-primary" },
    { name: "Edge Router 03", ip: "10.0.3.1", status: "Warning", load: "87%", color: "bg-primary/20 text-primary" },
    { name: "Access Point B2", ip: "10.0.5.22", status: "Up", load: "12%", color: "bg-primary/10 text-primary" },
  ];
  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground">Network Devices</span>
        <div className="flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-caption text-primary">
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          12 Monitored
        </div>
      </div>
      <div className="space-y-2">
        {devices.map((d) => (
          <div key={d.name} className="flex items-center justify-between rounded-lg bg-muted/30 px-4 py-3">
            <div>
              <div className="text-label-md">{d.name}</div>
              <div className="text-[11px] text-muted-foreground">{d.ip}</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-muted-foreground">{d.load}</span>
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${d.color}`}>{d.status}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-lg bg-muted/30 p-3 text-center">
          <div className="text-heading-sm">2.4ms</div>
          <div className="text-[11px] text-muted-foreground">Avg Latency</div>
        </div>
        <div className="rounded-lg bg-muted/30 p-3 text-center">
          <div className="text-heading-sm">99.8%</div>
          <div className="text-[11px] text-muted-foreground">Availability</div>
        </div>
        <div className="rounded-lg bg-muted/30 p-3 text-center">
          <div className="text-heading-sm">0</div>
          <div className="text-[11px] text-muted-foreground">Critical</div>
        </div>
      </div>
    </div>
  );
}

export function ComplianceDashboard() {
  const policies = [
    { name: "SSH Hardening", devices: 48, status: "Compliant", pct: 100, color: "text-primary bg-primary/10" },
    { name: "SNMP v3 Only", devices: 45, status: "3 Violations", pct: 94, color: "text-primary/80 bg-primary/10" },
    { name: "ACL Standards", devices: 48, status: "Compliant", pct: 100, color: "text-primary bg-primary/10" },
    { name: "Firmware Baseline", devices: 42, status: "6 Outdated", pct: 88, color: "text-primary/70 bg-primary/10" },
  ];
  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground">Compliance Status</span>
        <span className="text-caption text-primary">94% Overall</span>
      </div>
      <div className="space-y-2.5">
        {policies.map((p) => (
          <div key={p.name} className="rounded-lg bg-muted/30 px-4 py-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-label-md">{p.name}</span>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${p.color}`}>{p.status}</span>
            </div>
            <div className="h-1.5 rounded-full bg-muted/50">
              <div className="h-full rounded-full bg-primary/60 transition-all" style={{ width: `${p.pct}%` }} />
            </div>
            <div className="mt-1 text-[11px] text-muted-foreground">{p.devices} devices checked</div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg bg-muted/30 px-4 py-2.5">
        <div className="flex items-center justify-between">
          <span className="text-label-md">Last audit</span>
          <span className="text-caption text-muted-foreground">Today, 06:00 AM</span>
        </div>
      </div>
    </div>
  );
}

export function InfraDashboard() {
  const resources = [
    { name: "Web Servers", count: 12, status: "Healthy", icon: "🖥", color: "text-primary" },
    { name: "Database Cluster", count: 3, status: "Healthy", icon: "🗄", color: "text-primary" },
    { name: "K8s Pods", count: 48, status: "2 Pending", icon: "⚙", color: "text-primary/70" },
    { name: "AWS EC2", count: 8, status: "Healthy", icon: "☁", color: "text-primary" },
  ];
  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground">Infrastructure Overview</span>
        <span className="text-caption text-muted-foreground">71 resources</span>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {resources.map((r) => (
          <div key={r.name} className="rounded-lg bg-muted/30 p-3.5">
            <div className="text-lg mb-1">{r.icon}</div>
            <div className="text-label-md">{r.name}</div>
            <div className="text-heading-sm mt-0.5">{r.count}</div>
            <div className={`text-[11px] font-medium ${r.color}`}>{r.status}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-muted/30 p-3 text-center">
          <div className="text-heading-sm">32%</div>
          <div className="text-[11px] text-muted-foreground">Avg CPU</div>
        </div>
        <div className="rounded-lg bg-muted/30 p-3 text-center">
          <div className="text-heading-sm">58%</div>
          <div className="text-[11px] text-muted-foreground">Avg Memory</div>
        </div>
      </div>
    </div>
  );
}

export function LogDashboard() {
  const logs = [
    { time: "14:23:07", level: "ERROR", msg: "Connection refused on port 5432", src: "db-primary", lvlColor: "bg-primary/15 text-primary" },
    { time: "14:23:05", level: "WARN", msg: "High memory usage detected (89%)", src: "app-worker-3", lvlColor: "bg-primary/10 text-primary/80" },
    { time: "14:23:02", level: "INFO", msg: "Deployment v2.4.1 completed", src: "ci-runner", lvlColor: "bg-muted text-muted-foreground" },
    { time: "14:22:58", level: "ERROR", msg: "SSL handshake timeout", src: "lb-east-1", lvlColor: "bg-primary/15 text-primary" },
    { time: "14:22:55", level: "INFO", msg: "Health check passed", src: "api-gateway", lvlColor: "bg-muted text-muted-foreground" },
  ];
  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground">Live Log Stream</span>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">2 Errors</span>
          <span className="rounded-full bg-primary/8 px-2 py-0.5 text-[10px] font-medium text-primary/80">1 Warn</span>
        </div>
      </div>
      <div className="space-y-1.5">
        {logs.map((l, i) => (
          <div key={i} className="rounded-lg bg-muted/30 px-3 py-2">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="font-mono text-[10px] text-muted-foreground">{l.time}</span>
              <span className={`rounded px-1.5 py-0.5 text-[9px] font-bold ${l.lvlColor}`}>{l.level}</span>
              <span className="text-[10px] text-muted-foreground">{l.src}</span>
            </div>
            <p className="text-[13px] font-medium leading-snug truncate">{l.msg}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function APMDashboard() {
  const services = [
    { name: "API Gateway", latency: "23ms", rpm: "1.2k", errors: "0.1%", health: "Healthy", color: "text-primary" },
    { name: "Auth Service", latency: "45ms", rpm: "890", errors: "0%", health: "Healthy", color: "text-primary" },
    { name: "Payment API", latency: "120ms", rpm: "340", errors: "1.2%", health: "Degraded", color: "text-primary/70" },
    { name: "User Service", latency: "18ms", rpm: "2.1k", errors: "0%", health: "Healthy", color: "text-primary" },
  ];
  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground">Service Health</span>
        <span className="flex items-center gap-1 text-caption text-primary">
          <TrendingUp className="h-3.5 w-3.5" /> 99.2% Apdex
        </span>
      </div>
      <div className="space-y-2">
        {services.map((s) => (
          <div key={s.name} className="rounded-lg bg-muted/30 px-4 py-2.5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-label-md">{s.name}</span>
              <span className={`text-[11px] font-medium ${s.color}`}>{s.health}</span>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
              <span>Latency: <span className="font-medium text-foreground">{s.latency}</span></span>
              <span>RPM: <span className="font-medium text-foreground">{s.rpm}</span></span>
              <span>Errors: <span className="font-medium text-foreground">{s.errors}</span></span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg bg-muted/30 px-4 py-2.5">
        <div className="flex items-center justify-between">
          <span className="text-label-md">Active Traces</span>
          <span className="text-label-md-strong">1,847</span>
        </div>
      </div>
    </div>
  );
}

export function RUMDashboard() {
  const vitals = [
    { metric: "LCP", value: "1.8s", rating: "Good", color: "text-primary bg-primary/10" },
    { metric: "FID", value: "42ms", rating: "Good", color: "text-primary bg-primary/10" },
    { metric: "CLS", value: "0.08", rating: "Good", color: "text-primary bg-primary/10" },
    { metric: "TTFB", value: "320ms", rating: "Needs Work", color: "text-primary/70 bg-primary/8" },
  ];
  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground">Core Web Vitals</span>
        <span className="text-caption text-muted-foreground">Last 24h · 14.2k sessions</span>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {vitals.map((v) => (
          <div key={v.metric} className="rounded-lg bg-muted/30 p-3.5 text-center">
            <div className="text-[11px] font-medium text-muted-foreground mb-1">{v.metric}</div>
            <div className="text-heading-md">{v.value}</div>
            <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${v.color}`}>{v.rating}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-muted/30 p-3 text-center">
          <div className="text-heading-sm">92</div>
          <div className="text-[11px] text-muted-foreground">Experience Score</div>
        </div>
        <div className="rounded-lg bg-muted/30 p-3 text-center">
          <div className="text-heading-sm">3.2s</div>
          <div className="text-[11px] text-muted-foreground">Avg Load Time</div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   SERVICE OPS VISUALS — right panel dashboards
   ══════════════════════════════════════════════════════ */

export function IncidentDashboard() {
  const incidents = [
    { id: "INC-2847", priority: "P1", title: "Database connection timeout", status: "Resolving", time: "12m ago", prColor: "bg-primary/15 text-primary", stColor: "text-primary/80 bg-primary/8" },
    { id: "INC-2846", priority: "P3", title: "SSL certificate renewal needed", status: "Assigned", time: "1h ago", prColor: "bg-muted text-muted-foreground", stColor: "text-muted-foreground bg-muted" },
    { id: "INC-2845", priority: "P2", title: "API latency spike detected", status: "Resolved", time: "2h ago", prColor: "bg-primary/10 text-primary/80", stColor: "text-primary bg-primary/10" },
    { id: "INC-2844", priority: "P2", title: "Memory threshold exceeded on prod-db-03", status: "Monitoring", time: "3h ago", prColor: "bg-primary/10 text-primary/80", stColor: "text-muted-foreground bg-muted" },
  ];
  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground">Live Incidents</span>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-primary/10 px-2.5 py-1 text-label-sm-strong text-primary">1 P1</span>
          <span className="rounded-full bg-primary/8 px-2.5 py-1 text-caption text-primary/80">3 Open</span>
        </div>
      </div>
      <div className="space-y-2.5">
        {incidents.map((inc) => (
          <div key={inc.id} className="rounded-lg bg-muted/30 px-4 py-3">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="text-label-sm-strong text-primary">{inc.id}</span>
                <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${inc.prColor}`}>{inc.priority}</span>
              </div>
              <span className="text-[11px] text-muted-foreground">{inc.time}</span>
            </div>
            <p className="text-label-md leading-snug">{inc.title}</p>
            <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${inc.stColor}`}>{inc.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChangeDashboard() {
  const phases = [
    { phase: "Submitted", count: 5, pct: 42, opacity: 0.3 },
    { phase: "Review", count: 3, pct: 25, opacity: 0.5 },
    { phase: "Approved", count: 2, pct: 17, opacity: 0.7 },
    { phase: "Deployed", count: 12, pct: 100, opacity: 1 },
  ];
  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground">Change Pipeline</span>
        <span className="text-caption text-muted-foreground">3 pending approval</span>
      </div>
      <div className="space-y-4">
        {phases.map((p) => (
          <div key={p.phase}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-body-xs text-muted-foreground">{p.phase}</span>
              <span className="text-label-md-strong">{p.count}</span>
            </div>
            <div className="h-2.5 rounded-full bg-muted/40">
              <div className="h-full rounded-full bg-primary transition-all duration-700" style={{ width: `${p.pct}%`, opacity: p.opacity }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-muted/30 p-3 text-center">
          <div className="text-heading-sm">98%</div>
          <div className="text-[11px] text-muted-foreground">Success Rate</div>
        </div>
        <div className="rounded-lg bg-muted/30 p-3 text-center">
          <div className="text-heading-sm">2.1h</div>
          <div className="text-[11px] text-muted-foreground">Avg. Deploy Time</div>
        </div>
      </div>
    </div>
  );
}

export function AssetDashboard() {
  const assets = [
    { type: "Laptops", count: 342, opacity: 1 },
    { type: "Servers", count: 48, opacity: 0.8 },
    { type: "Network", count: 126, opacity: 0.9 },
    { type: "Software", count: 89, opacity: 0.7 },
    { type: "Mobile", count: 215, opacity: 0.85 },
    { type: "Printers", count: 34, opacity: 0.6 },
  ];
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-label-md text-foreground">Asset Inventory</span>
        <span className="text-heading-lg text-foreground">854</span>
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {assets.map((a) => (
          <div key={a.type} className="rounded-lg bg-muted/30 p-3 text-center">
            <div className="mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <div className="h-3 w-3 rounded-full bg-primary" style={{ opacity: a.opacity }} />
            </div>
            <div className="text-base font-bold leading-none">{a.count}</div>
            <div className="text-[11px] text-muted-foreground mt-0.5">{a.type}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg bg-primary/10 px-4 py-2.5 text-center">
        <span className="text-caption text-primary">All assets tracked &amp; compliant</span>
      </div>
    </div>
  );
}

export function RequestDashboard() {
  const requests = [
    { req: "New laptop request", requester: "J. Smith", dept: "Engineering", status: "In Progress", statusColor: "bg-primary/10 text-primary" },
    { req: "VPN access setup", requester: "A. Chen", dept: "Marketing", status: "Completed", statusColor: "bg-primary/10 text-primary" },
    { req: "Software license — Figma", requester: "M. Kumar", dept: "Design", status: "Pending", statusColor: "bg-muted text-muted-foreground" },
    { req: "Password reset", requester: "S. Lee", dept: "Sales", status: "Completed", statusColor: "bg-primary/10 text-primary" },
    { req: "Monitor replacement", requester: "D. Patel", dept: "Finance", status: "Approved", statusColor: "bg-primary/8 text-primary/80" },
  ];
  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground">Service Requests</span>
        <span className="flex items-center gap-1 text-caption text-primary">
          <TrendingUp className="h-3.5 w-3.5" /> 94% SLA
        </span>
      </div>
      <div className="space-y-2">
        {requests.map((r, i) => (
          <div key={i} className="flex items-center justify-between rounded-lg bg-muted/30 px-4 py-2.5">
            <div>
              <div className="text-label-md">{r.req}</div>
              <div className="text-[11px] text-muted-foreground">{r.requester} · {r.dept}</div>
            </div>
            <span className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium ${r.statusColor}`}>{r.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AIDashboard() {
  const insights = [
    { insight: "3 incidents predicted in next 4 hours based on pattern analysis", type: "Prediction", opacity: 0.8 },
    { insight: "12 tickets auto-resolved via AI bot — 45min saved", type: "Automation", opacity: 0.6 },
    { insight: "DB instance at 89% capacity — upgrade suggested", type: "Suggestion", opacity: 1 },
    { insight: "Similar incident pattern detected across 3 services", type: "Correlation", opacity: 0.5 },
  ];
  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground">AI Insights</span>
        <BrainCircuit className="h-4.5 w-4.5 text-primary/40" />
      </div>
      <div className="space-y-2.5">
        {insights.map((item, i) => (
          <div key={i} className="rounded-lg bg-muted/30 px-4 py-3 border-l-[3px] border-primary" style={{ borderLeftColor: `hsl(var(--default-orange) / ${item.opacity})` }}>
            <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">{item.type}</span>
            <p className="mt-1 text-sm leading-snug text-foreground/80">{item.insight}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-muted/30 p-3 text-center">
          <div className="text-heading-sm text-primary">87%</div>
          <div className="text-[11px] text-muted-foreground">Accuracy</div>
        </div>
        <div className="rounded-lg bg-muted/30 p-3 text-center">
          <div className="text-heading-sm text-primary">4.2h</div>
          <div className="text-[11px] text-muted-foreground">Time Saved/Day</div>
        </div>
      </div>
    </div>
  );
}

export function KnowledgeDashboard() {
  const articles = [
    { title: "VPN Setup Guide", views: "2.4k", category: "Network" },
    { title: "Password Policy FAQ", views: "1.8k", category: "Security" },
    { title: "New Employee Onboarding", views: "1.2k", category: "HR" },
    { title: "Troubleshooting Email Issues", views: "890", category: "Email" },
    { title: "Cloud Access Procedures", views: "756", category: "Cloud" },
  ];
  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground">Knowledge Base</span>
        <span className="text-caption text-muted-foreground">1,247 articles</span>
      </div>
      <div className="space-y-2">
        {articles.map((a, i) => (
          <div key={i} className="flex items-center justify-between rounded-lg bg-muted/30 px-4 py-2.5">
            <div className="flex items-center gap-2.5">
              <BookOpen className="h-3.5 w-3.5 shrink-0 text-primary/40" />
              <div>
                <span className="text-label-md">{a.title}</span>
                <span className="ml-2 rounded bg-muted px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground">{a.category}</span>
              </div>
            </div>
            <span className="shrink-0 text-[11px] text-muted-foreground">{a.views}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg bg-primary/5 px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-label-md">AI-powered search</span>
          <span className="text-xs text-primary font-medium">Enabled</span>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   PRODUCT DATA
   ══════════════════════════════════════════════════════ */

const products: ProductGroup[] = [
  {
    id: "observeops",
    label: "ObserveOps",
    title: "Unified Observability Platform",
    desc: "Unified observability across metrics, logs, traces, and events at enterprise scale.",
    icon: Activity,
    modules: [
      {
        name: "Network Observability",
        desc: "Eliminates blind spots across networks so you get real-time visibility into flows, packets, and infrastructure behavior across your environment.",
        icon: Network,
        visual: <NetworkDashboard />,
        tags: ["Real-time Metrics", "Custom Dashboards", "Intelligent Alerts"],
        url: "/products/network-observability",
      },
      {
        name: "Network Configuration & Compliance Management",
        desc: "Automates configuration control so you track drift, validate compliance, and maintain consistent, audit-ready network states across devices.",
        icon: ShieldCheck,
        visual: <ComplianceDashboard />,
        tags: ["Config Backup", "Drift Detection", "Compliance Audits"],
        url: "/products/network-configuration-compliance",
      },
      {
        name: "Hybrid Infrastructure Monitoring",
        desc: "Bring cloud and on-prem systems into one view, so you monitor performance, availability, and resource health across all environments together.",
        icon: Server,
        visual: <InfraDashboard />,
        tags: ["Application & Database", "Public Cloud", "Containers"],
        url: "/products/hybrid-infrastructure-monitoring",
      },
      {
        name: "Log Monitoring",
        desc: "Converts large-logs data into structured insights so you correlate events, filter noise, and trace root causes across distributed systems.",
        icon: ScrollText,
        visual: <LogDashboard />,
        tags: ["Log Aggregation", "Search & Analytics", "Correlation"],
        url: "/products/log-monitoring",
      },
      {
        name: "Application Performance Monitoring",
        desc: "Tracks every application transaction in real time so you identify latency, errors, and performance bottlenecks across services and dependencies.",
        icon: Gauge,
        visual: <APMDashboard />,
        tags: ["Distributed Tracing", "Service Mapping", "Code Profiling"],
        url: "/products/application-performance-monitoring",
      },
      {
        name: "Real User Monitoring",
        desc: "Captures real user sessions across browsers and devices so you understand performance behavior, user journeys, and experience signals.",
        icon: Users,
        visual: <RUMDashboard />,
        tags: ["Web Vitals", "Experience Scores", "Session Replay"],
        url: "/products/real-user-monitoring",
      },
    ],
  },
  {
    id: "serviceops",
    label: "ServiceOps",
    title: "Unified IT Service Management Platform",
    desc: "ServiceOps connects incidents, requests, and workflows into one system for end-to-end IT service delivery with AI-driven automation.",
    icon: Headset,
    modules: [
      {
        name: "Service Management",
        desc: "Handles end-to-end IT service delivery so you manage incidents, problems, changes, and requests with AI-driven workflows across IT operations.",
        icon: TicketCheck,
        visual: <IncidentDashboard />,
        tags: ["Auto-routing", "SLA Tracking", "Escalations"],
        url: "/products/incident-management",
      },
      {
        name: "IT Asset & Configuration Management",
        desc: "Tracks full lifecycle of IT assets so you maintain visibility into ownership, configuration state, and compliance across hardware and software.",
        icon: Package,
        visual: <AssetDashboard />,
        tags: ["Lifecycle Tracking", "CMDB", "Compliance"],
        url: "/products/asset-management",
      },
      {
        name: "MSP Edition",
        desc: "Supports multi-tenant service operations, so you manage multiple clients with isolation, branding control, and centralized service delivery.",
        icon: Users,
        visual: <RequestDashboard />,
        tags: ["Multi-tenant", "Branding Control", "Centralized Delivery"],
        url: "/products/msp-edition",
      },
      {
        name: "Agentic AI & Orchestration",
        desc: "Automates classification, routing, and workflow handling so ticket movement and service processes reduce manual intervention across operations.",
        icon: BrainCircuit,
        visual: <AIDashboard />,
        tags: ["Predictive", "Auto-resolve", "Optimization"],
        url: "/products/ai-powered-insights",
      },
      {
        name: "Patch & Deployment Management",
        desc: "Manages patch discovery, approval, and deployment so endpoints and servers stay updated with controlled rollout and compliance tracking.",
        icon: RefreshCw,
        visual: <ChangeDashboard />,
        tags: ["Patch Discovery", "Controlled Rollout", "Compliance"],
        url: "/products/patch-deployment-management",
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════
   SCROLL ITEM — for Option 2 scroll-driven layout
   ══════════════════════════════════════════════════════ */

function ProductScrollItem({
  mod,
  index,
  onInView,
}: {
  mod: ScrollModule;
  index: number;
  onInView: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });
  const Icon = mod.icon;

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
        {mod.name}
      </h3>
      <p className="text-body-sm text-muted-foreground">
        {mod.desc}
      </p>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   MAIN EXPORT — Tabs (Option 1) + Scroll-Driven (Option 2)
   ══════════════════════════════════════════════════════ */

type ProductId = "observeops" | "serviceops";

export function ProductScrollSection({ forceOption }: { forceOption?: number } = {}) {
  const [activeProduct, setActiveProduct] = useState<ProductId>("observeops");
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused2, setPaused2] = useState(false);
  const [option, setOption] = useState(forceOption ?? 1);
  const [scrollActive, setScrollActive] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  const product = products.find((p) => p.id === activeProduct)!;
  const activeModule = product.modules[activeIndex];

  // Auto-rotate tabs (options 2 & 4)
  useEffect(() => {
    if ((option !== 2 && option !== 4) || paused2) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1;
        if (next >= product.modules.length) {
          setActiveProduct((curr) => curr === "observeops" ? "serviceops" : "observeops");
          return 0;
        }
        return next;
      });
    }, AUTO_ROTATE_INTERVAL);
    return () => clearInterval(timer);
  }, [paused2, product.modules.length, option]);

  const switchProduct = (id: ProductId) => {
    if (id === activeProduct) return;
    setActiveProduct(id);
    setActiveIndex(0);
    setScrollActive(0);
    setPaused2(false);
  };

  const selectTab = (index: number) => {
    setActiveIndex(index);
    setPaused2(true);
    setTimeout(() => setPaused2(false), 10000);
  };

  const handleScrollInView = useCallback((i: number) => {
    setScrollActive(i);
  }, []);

  return (
    <section className="relative z-10 bg-white pt-[80px] pb-20 lg:pb-28">
      <div className="mx-auto w-full max-w-7xl px-6">

        {/* ── Option 1/2/3/4 switch — hidden when forceOption is set ── */}
        {forceOption === undefined && (
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
        )}

        {/* ── Toggle ── */}
        <div className="flex justify-center mb-6">
            <div className="inline-flex items-center rounded-lg border border-border/60 p-1 bg-white">
              {products.map((p) => {
                const isActive = activeProduct === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => switchProduct(p.id as ProductId)}
                    className={`flex items-center gap-2 rounded-md px-5 py-2.5 text-label-md transition-all ${
                      isActive
                        ? "bg-white text-foreground shadow-md ring-1 ring-primary/40"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <p.icon className={`h-4 w-4 transition-colors duration-300 ${isActive ? "text-primary" : ""}`} />
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>

        {/* ── Title & Desc (options 2–3) ── */}
        {(option === 2 || option === 3) && (
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-display-md">
              {product.title}
            </h2>
            <p className="mt-4 text-[16px] font-medium leading-[26px] text-[#6B7280]" style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}>
              {product.desc}
            </p>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-1.5 text-label-md text-foreground hover:text-primary transition-colors"
            >
              Explore {product.label} <ArrowRight className="h-3.5 w-3.5 text-primary" />
            </a>
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* ── Option 1: Bento Grid ── */}
          {option === 1 && (
            <motion.div
              key="option1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mx-auto max-w-2xl text-center mb-12">
                <h2 className="text-display-md">
                  {bentoProdMeta[activeProduct as BentoProduct]?.title}
                </h2>
                <p className="mt-4 text-[16px] font-medium leading-[26px] text-[#6B7280]" style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}>
                  {bentoProdMeta[activeProduct as BentoProduct]?.desc}
                </p>
              </div>
              {(() => {
                const current = bentoProdMeta[activeProduct as BentoProduct];
                if (!current) return null;
                return (
                  <>
                    <div className="overflow-hidden rounded-2xl border border-border/60 bg-border/60 shadow-sm">
                      <div className="grid gap-px lg:grid-cols-4">
                        <div className="lg:col-span-2">
                          <BentoCell card={current.cards[0]} isLarge={true} />
                        </div>
                        <div className="lg:col-span-1">
                          <BentoCell card={current.cards[1]} isLarge={false} />
                        </div>
                        <div className="lg:col-span-1">
                          <BentoCell card={current.cards[2]} isLarge={false} />
                        </div>
                      </div>
                      <div className="h-px bg-border/60" />
                      <div className="grid gap-px lg:grid-cols-4">
                        {current.cards.length === 5 ? (
                          <>
                            <div className="lg:col-span-2">
                              <BentoCell card={current.cards[3]} isLarge={true} />
                            </div>
                            <div className="lg:col-span-2">
                              <BentoCell card={current.cards[4]} isLarge={true} />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="lg:col-span-1">
                              <BentoCell card={current.cards[3]} isLarge={false} />
                            </div>
                            <div className="lg:col-span-1">
                              <BentoCell card={current.cards[4]} isLarge={false} />
                            </div>
                            <div className="lg:col-span-2">
                              <BentoCell card={current.cards[5]} isLarge={true} />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="mt-12 text-center">
                      <Button size="lg" className="h-12 px-8 text-[15px] bg-foreground text-white hover:bg-foreground/90">
                        Explore {current.label} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          )}

          {/* ── Option 2: Tabs with auto-rotation ── */}
          {option === 2 && (
            <motion.div
              key="option2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {/* Horizontal Module Tabs */}
              <div className="relative mb-10">
                <div
                  ref={tabsRef}
                  className="flex gap-2 justify-center flex-wrap"
                >
                  {product.modules.map((mod, i) => {
                    const isActive = i === activeIndex;
                    const Icon = mod.icon;
                    return (
                      <button
                        key={mod.name}
                        onClick={() => selectTab(i)}
                        className={`group flex shrink-0 items-center gap-2 rounded-lg px-5 py-2.5 text-label-md transition-all duration-200 ${
                          isActive
                            ? "text-foreground bg-neutral-100 ring-1 ring-primary/40"
                            : "text-muted-foreground hover:text-foreground hover:bg-neutral-100 ring-1 ring-border/40"
                        }`}
                      >
                        <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`} />
                        <span className="whitespace-nowrap">{mod.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Showcase Card */}
              <div className="rounded-2xl border border-border/60 bg-muted/10 overflow-hidden">
                <div className="grid lg:grid-cols-[1fr,1.2fr] min-h-[480px]">
                  {/* Info Side */}
                  <div className="flex flex-col justify-between px-8 pt-10 pb-0 lg:px-12 lg:pt-14 lg:pb-0">
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <activeModule.icon className="h-5 w-5 text-primary" />
                        <h3 className="text-heading-md">
                          {activeModule.name}
                        </h3>
                      </div>
                      <p className="text-body-sm text-muted-foreground mb-6">
                        {activeModule.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {activeModule.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-muted/50 px-3 py-1.5 text-caption text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="-mx-8 lg:-mx-12 mt-8">
                      <div className="h-px w-full bg-border/40" />
                      <a
                        href={activeModule.url || "#"}
                        className="flex w-full items-center justify-between px-8 lg:px-12 py-6 text-label-md text-foreground hover:text-primary hover:bg-neutral-50 transition-all"
                      >
                        Learn more <ArrowRight className="h-4 w-4 text-primary" />
                      </a>
                    </div>
                  </div>
                  {/* Visual Side */}
                  <div className="relative bg-neutral-100">
                    {product.modules.map((mod, i) => (
                      <div
                        key={mod.name}
                        className={`absolute inset-0 transition-all duration-500 ease-out ${
                          i === activeIndex
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4 pointer-events-none"
                        }`}
                      >
                        {mod.visual}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ── Option 3: Scroll-driven left text, right sticky visual ── */}
          {option === 3 && (
            <motion.div
              key="option3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left — scrollable text items */}
                <div className="divide-y divide-border/40">
                  {product.modules.map((mod, i) => (
                    <ProductScrollItem key={mod.name} mod={mod} index={i} onInView={handleScrollInView} />
                  ))}
                </div>
                {/* Right — sticky visual */}
                <div className="hidden lg:block">
                  <div className="sticky top-32">
                    <div className="relative">
                      <div className="absolute -left-6 -bottom-6 w-full h-full rounded-lg bg-primary/15 overflow-hidden">
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                          <defs>
                            <pattern id="hp-diag-lines" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                              <line x1="0" y1="0" x2="0" y2="12" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.15" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#hp-diag-lines)" />
                        </svg>
                      </div>
                      <div className="relative rounded-lg border border-border bg-white p-6 shadow-sm overflow-hidden" style={{ aspectRatio: "4/3" }}>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={`${activeProduct}-${scrollActive}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="h-full"
                          >
                            {product.modules[scrollActive]?.visual}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ── Option 4: Accordion + Visual ── */}
          {option === 4 && (
            <motion.div
              key="option4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="rounded-2xl border border-border/60 bg-muted/10 overflow-hidden" style={{ height: 640 }}>
                <div className="grid lg:grid-cols-[2fr,3fr] h-full">
                  {/* Left — title + accordion */}
                  <div className="border-b lg:border-b-0 lg:border-r border-border/60 flex flex-col justify-between h-full">
                    <div className="px-8 pt-8 pb-6">
                      <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-label-sm text-primary mb-4">
                        <product.icon className="h-3 w-3" />
                        {product.label}
                      </div>
                      <h3 className="text-heading-md sm:text-2xl">{product.title}</h3>
                      <p className="mt-3 text-body-sm text-muted-foreground">{product.desc}</p>
                      <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-label-md text-primary hover:underline transition-colors">
                        Explore {product.label} <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                    <div className="divide-y divide-border/40 mt-auto border-t border-border/40">
                      {product.modules.map((mod, i) => {
                        const isActive = i === activeIndex;
                        const Icon = mod.icon;
                        return (
                          <button
                            key={mod.name}
                            onClick={() => selectTab(i)}
                            className={`flex w-full items-center gap-3 px-6 py-4 text-left text-[15px] font-medium transition-all duration-300 ${
                              isActive
                                ? "text-foreground bg-muted/40"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-primary" : ""}`} />
                            <span className="leading-snug">{mod.name}</span>
                            <ArrowRight
                              className={`ml-auto h-4 w-4 shrink-0 transition-all duration-300 ${
                                isActive
                                  ? "text-primary opacity-100 translate-x-0"
                                  : "opacity-0 -translate-x-2"
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  {/* Right — visual + text */}
                  <div className="p-6 lg:p-8 flex flex-col h-full overflow-hidden">
                    <div className="relative rounded-xl border border-border/40 bg-white overflow-hidden flex-1">
                      {product.modules.map((mod, i) => (
                        <div
                          key={mod.name}
                          className={`absolute inset-0 transition-all duration-500 ease-out ${
                            i === activeIndex
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-[0.98] pointer-events-none"
                          }`}
                        >
                          {mod.visual}
                        </div>
                      ))}
                    </div>
                    <div className="mt-5">
                      <h3 className="text-heading-md mb-2">
                        {product.modules[activeIndex].name}
                      </h3>
                      <p className="text-body-xs text-muted-foreground max-w-xl">
                        {product.modules[activeIndex].desc}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {product.modules[activeIndex].tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border/80 bg-white px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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

/* ══════════════════════════════════════════════════════
   SECOND EXPORT — Scroll-Driven Accordion + Visual
   ══════════════════════════════════════════════════════ */

const SCROLL_PER_MODULE = 400;

const AUTO_ROTATE_INTERVAL = 4000; // 4 seconds per module

export function ProductScrollAccordion() {
  const [activeProduct, setActiveProduct] = useState<ProductId>("observeops");
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const product = products.find((p) => p.id === activeProduct)!;

  // Auto-rotate modules
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1;
        if (next >= product.modules.length) {
          // Switch to other product and reset
          setActiveProduct((curr) => curr === "observeops" ? "serviceops" : "observeops");
          return 0;
        }
        return next;
      });
    }, AUTO_ROTATE_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, product.modules.length]);

  const switchProduct = (id: ProductId) => {
    if (id === activeProduct) return;
    setActiveProduct(id);
    setActiveIndex(0);
    setPaused(false);
  };

  const selectModule = (index: number) => {
    setActiveIndex(index);
    setPaused(true);
    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => setPaused(false), 10000);
  };

  return (
    <section className="relative z-10 bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-6">

            {/* ── Toggle Only ── */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center rounded-lg border border-border/60 p-1 bg-white">
                {products.map((p) => {
                  const isActive = activeProduct === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => switchProduct(p.id as ProductId)}
                      className={`flex items-center gap-2 rounded-md px-5 py-2.5 text-label-md transition-all ${
                        isActive
                          ? "bg-white text-foreground shadow-md ring-1 ring-primary/40"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <p.icon className={`h-4 w-4 transition-colors duration-300 ${isActive ? "text-primary" : ""}`} />
                      {p.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Content: Left accordion + Right info & visual inside one container ── */}
            <div className="rounded-2xl border border-border/60 bg-muted/10 overflow-hidden" style={{ height: 640 }}>
              <div className="grid lg:grid-cols-[2fr,3fr] h-full">

                {/* Left — title (top) + accordion (bottom) */}
                <div className="border-b lg:border-b-0 lg:border-r border-border/60 flex flex-col justify-between h-full">
                  {/* Header — top aligned */}
                  <div className="px-8 pt-8 pb-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-label-sm text-primary mb-4">
                      <product.icon className="h-3 w-3" />
                      {product.label}
                    </div>
                    <h3 className="text-heading-md sm:text-2xl">{product.title}</h3>
                    <p className="mt-3 text-body-sm text-muted-foreground">{product.desc}</p>
                    <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-label-md text-primary hover:underline transition-colors">
                      Explore {product.label} <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                  {/* Module list — bottom aligned */}
                  <div className="divide-y divide-border/40 mt-auto border-t border-border/40">
                    {product.modules.map((mod, i) => {
                      const isActive = i === activeIndex;
                      const Icon = mod.icon;
                      return (
                        <button
                          key={mod.name}
                          onClick={() => selectModule(i)}
                          className={`flex w-full items-center gap-3 px-6 py-4 text-left text-[15px] font-medium transition-all duration-300 ${
                            isActive
                              ? "text-foreground bg-muted/40"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-primary" : ""}`} />
                          <span className="leading-snug">{mod.name}</span>
                          <ArrowRight
                            className={`ml-auto h-4 w-4 shrink-0 transition-all duration-300 ${
                              isActive
                                ? "text-primary opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-2"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right — visual on top, text below */}
                <div className="p-6 lg:p-8 flex flex-col h-full overflow-hidden">
                  {/* Visual dashboard */}
                  <div className="relative rounded-xl border border-border/40 bg-white overflow-hidden flex-1">
                    {product.modules.map((mod, i) => (
                      <div
                        key={mod.name}
                        className={`absolute inset-0 transition-all duration-500 ease-out ${
                          i === activeIndex
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-[0.98] pointer-events-none"
                        }`}
                      >
                        {mod.visual}
                      </div>
                    ))}
                  </div>

                  {/* Module info */}
                  <div className="mt-5">
                    <h3 className="text-heading-md mb-2">
                      {product.modules[activeIndex].name}
                    </h3>
                    <p className="text-body-xs text-muted-foreground max-w-xl">
                      {product.modules[activeIndex].desc}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {product.modules[activeIndex].tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border/80 bg-white px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════
   THIRD EXPORT — Text-Based Two-Product Overview
   ══════════════════════════════════════════════════════ */

export function ProductTextOverview() {
  return (
    <section className="relative z-10 bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-6">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-overline text-primary">Our Products</p>
          <h2 className="mt-3 text-display-md">
            Two Platforms. One Unified Vision.
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Motadata brings observability and service management together — giving your IT teams a single, intelligent foundation to monitor, manage, and evolve.
          </p>
        </div>

        {/* Two Product Cards — connected container */}
        <div className="rounded-2xl border border-border/60 overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/60">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="group bg-muted/5 p-8 lg:p-10 transition-all duration-300 hover:bg-muted/10"
              >
                {/* Product Tag */}
                <p className="text-overline text-primary mb-5">
                  {product.label}
                </p>

                {/* Title & Description */}
                <h3 className="text-heading-md sm:text-2xl mb-3">
                  {product.title}
                </h3>
                <p className="text-body-sm text-muted-foreground mb-4">
                  {product.desc}
                </p>

                {/* CTA */}
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-label-md text-foreground hover:text-primary transition-colors mb-8"
                >
                  Explore {product.label} <ArrowRight className="h-3.5 w-3.5 text-primary" />
                </a>

                {/* Separator */}
                <div className="-mx-8 lg:-mx-10 mb-2">
                  <div className="h-px w-full bg-border/40" />
                </div>

                {/* Module List */}
                <div className="-mx-8 lg:-mx-10 -mb-8 lg:-mb-10 divide-y divide-border/40">
                  {product.modules.map((mod) => {
                    const ModIcon = mod.icon;
                    return (
                      <a
                        key={mod.name}
                        href={mod.url || "#"}
                        className="group/mod flex items-start gap-3 px-8 lg:px-10 py-4 transition-colors duration-200"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-foreground/5 group-hover/mod:bg-primary/10 mt-0.5 transition-colors duration-200">
                          <ModIcon className="h-4 w-4 text-foreground/70 group-hover/mod:text-primary transition-colors duration-200" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-[15px] font-semibold text-foreground group-hover/mod:text-primary transition-colors duration-200">{mod.name}</h4>
                          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground line-clamp-2">
                            {mod.desc}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 shrink-0 self-center text-primary opacity-0 -translate-x-2 group-hover/mod:opacity-100 group-hover/mod:translate-x-0 transition-all duration-200" />
                      </a>
                    );
                  })}
                </div>

              </div>
            );
          })}
          </div>
        </div>

      </div>
    </section>
  );
}
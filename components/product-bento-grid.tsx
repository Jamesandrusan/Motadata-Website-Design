"use client";

import React, { useState } from "react";
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
  ChevronRight,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Clock,
  Search,
  Wifi,
  Database,
  Cloud,
  Monitor,
  FileText,
  Cpu,
  Globe,
  Building2,
  Zap,
  GitBranch,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

/* ── Types ── */
export interface BentoCard {
  name: string;
  desc: string;
  icon: LucideIcon;
  span: "large" | "small";
  visual: React.ReactNode;
}

/* ══════════════════════════════════════════════════════
   MINI DASHBOARD VISUALS — SaaS UI component mockups
   ══════════════════════════════════════════════════════ */

/* ── ObserveOps Visuals ── */

function NetworkTopologyVisual() {
  const trafficBars = [38, 62, 45, 78, 52, 34, 68, 55, 42, 72, 48, 58];
  return (
    <div className="relative h-full w-full rounded-lg border border-border/40 bg-neutral-50 overflow-hidden">
      {/* Dashboard toolbar */}
      <div className="flex items-center justify-between border-b border-border/30 bg-white px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary/60" />
          <span className="text-[10px] font-semibold text-foreground/70">Network Dashboard</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] text-muted-foreground">Last 24h</span>
          <ChevronRight className="h-2.5 w-2.5 text-muted-foreground" />
        </div>
      </div>
      {/* Mini topology map */}
      <div className="px-3 pt-3 pb-2">
        <div className="relative flex items-center justify-between px-2">
          {/* Router node */}
          <div className="flex flex-col items-center gap-1 z-10">
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border/50 bg-white shadow-sm">
              <Wifi className="h-3.5 w-3.5 text-foreground/50" />
            </div>
            <span className="text-[8px] font-medium text-muted-foreground">Router</span>
          </div>
          {/* Connection line */}
          <div className="absolute left-[15%] right-[15%] top-4 h-px bg-primary/20" />
          <div className="absolute left-[32%] top-[10px] h-3 w-px bg-primary/20" />
          <div className="absolute right-[32%] top-[10px] h-3 w-px bg-primary/20" />
          {/* Switch node */}
          <div className="flex flex-col items-center gap-1 z-10">
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border/50 bg-white shadow-sm">
              <Network className="h-3.5 w-3.5 text-foreground/50" />
            </div>
            <span className="text-[8px] font-medium text-muted-foreground">Switch</span>
          </div>
          {/* Firewall node */}
          <div className="flex flex-col items-center gap-1 z-10">
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border/50 bg-white shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5 text-foreground/50" />
            </div>
            <span className="text-[8px] font-medium text-muted-foreground">Firewall</span>
          </div>
        </div>
      </div>
      {/* Bandwidth chart */}
      <div className="px-3 pb-2">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[9px] font-medium text-foreground/60">Bandwidth Utilization</span>
          <span className="text-[9px] text-primary/70 font-medium">67% avg</span>
        </div>
        <div className="flex items-end gap-[3px] h-8">
          {trafficBars.map((h, i) => (
            <div key={i} className={`flex-1 rounded-t-sm transition-all ${h > 65 ? "bg-primary/25" : "bg-foreground/12"}`} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      {/* Device summary table */}
      <div className="px-3 pb-3">
        <div className="rounded-md border border-border/30 bg-white overflow-hidden">
          <div className="flex items-center bg-neutral-50 px-2.5 py-1 border-b border-border/20">
            <span className="text-[9px] font-semibold text-foreground/50 w-1/3">Device</span>
            <span className="text-[9px] font-semibold text-foreground/50 w-1/3 text-center">Status</span>
            <span className="text-[9px] font-semibold text-foreground/50 w-1/3 text-right">Traffic</span>
          </div>
          {[
            { name: "Core-SW-01", status: "Active", traffic: "1.2 Gbps" },
            { name: "Edge-RT-02", status: "Active", traffic: "890 Mbps" },
            { name: "FW-Main", status: "Active", traffic: "654 Mbps" },
            { name: "Dist-SW-03", status: "Active", traffic: "432 Mbps" },
            { name: "AP-Floor-04", status: "Active", traffic: "215 Mbps" },
          ].map((d, i, arr) => (
            <div key={i} className={`flex items-center px-2.5 py-1.5 ${i < arr.length - 1 ? "border-b border-border/10" : ""}`}>
              <span className="text-[10px] font-medium text-foreground/70 w-1/3">{d.name}</span>
              <div className="w-1/3 flex justify-center">
                <span className="flex items-center gap-1 text-[9px] text-foreground/50"><span className="h-1.5 w-1.5 rounded-full bg-primary/50" />{d.status}</span>
              </div>
              <span className="text-[10px] text-muted-foreground w-1/3 text-right">{d.traffic}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ComplianceVisual() {
  return (
    <div className="relative h-full w-full rounded-lg border border-border/40 bg-neutral-50 overflow-hidden">
      <div className="flex items-center justify-between border-b border-border/30 bg-white px-3 py-2">
        <span className="text-[10px] font-semibold text-foreground/70">Config Compliance</span>
        <span className="text-[9px] text-muted-foreground">Scanned 2m ago</span>
      </div>
      {/* Compliance score */}
      <div className="px-3 pt-3 pb-2 flex items-center gap-3">
        <div className="relative h-14 w-14 shrink-0">
          <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-border/30" />
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary/40" strokeDasharray="97.4" strokeDashoffset="9.7" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-label-md-strong text-primary/70">90%</span>
          </div>
        </div>
        <div className="space-y-1 flex-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-foreground/60">Compliant</span>
            <span className="text-[10px] font-bold text-foreground/60">45</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-foreground/60">Drifted</span>
            <span className="text-[10px] font-bold text-primary/60">3</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-foreground/60">Pending</span>
            <span className="text-[10px] font-bold text-foreground/60">2</span>
          </div>
        </div>
      </div>
      {/* Config changes list */}
      <div className="px-3 pb-3 space-y-1.5">
        {[
          { device: "SW-Core-01", action: "Backup saved", icon: CheckCircle2, alert: false },
          { device: "RT-Edge-02", action: "Drift detected", icon: AlertCircle, alert: true },
          { device: "FW-Main-01", action: "Policy applied", icon: CheckCircle2, alert: false },
          { device: "SW-Dist-04", action: "Config synced", icon: CheckCircle2, alert: false },
        ].map((c, i) => (
          <div key={i} className="flex items-center gap-2 rounded-md border border-border/20 bg-white px-2.5 py-1.5">
            <c.icon className={`h-3 w-3 shrink-0 ${c.alert ? "text-primary/50" : "text-foreground/30"}`} />
            <span className="text-[10px] font-medium text-foreground/70 flex-1">{c.device}</span>
            <span className={`text-[9px] ${c.alert ? "text-primary/60 font-medium" : "text-muted-foreground"}`}>{c.action}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfraVisual() {
  return (
    <div className="relative h-full w-full rounded-lg border border-border/40 bg-neutral-50 overflow-hidden">
      <div className="flex items-center justify-between border-b border-border/30 bg-white px-3 py-2">
        <span className="text-[10px] font-semibold text-foreground/70">Infrastructure Overview</span>
        <span className="text-[9px] text-muted-foreground">50 hosts</span>
      </div>
      {/* Resource gauges */}
      <div className="grid grid-cols-3 gap-2 px-3 pt-3 pb-2">
        {[
          { label: "CPU", value: 64, high: false },
          { label: "Memory", value: 72, high: true },
          { label: "Disk", value: 45, high: false },
        ].map((g) => (
          <div key={g.label} className="rounded-md border border-border/20 bg-white p-2 text-center">
            <span className="text-[9px] text-muted-foreground">{g.label}</span>
            <div className={`text-label-md-strong mt-0.5 ${g.high ? "text-primary/70" : "text-foreground/70"}`}>{g.value}%</div>
            <div className="mt-1 h-1 rounded-full bg-border/30">
              <div className={`h-full rounded-full ${g.high ? "bg-primary/30" : "bg-foreground/20"}`} style={{ width: `${g.value}%` }} />
            </div>
          </div>
        ))}
      </div>
      {/* Host grid */}
      <div className="px-3 pb-3">
        <span className="text-[9px] font-medium text-foreground/50 mb-1.5 block">Host Status</span>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            { name: "AWS us-east", icon: Cloud, count: 12 },
            { name: "DC Primary", icon: Server, count: 8 },
            { name: "K8s Cluster", icon: Cpu, count: 24 },
            { name: "Database", icon: Database, count: 6 },
          ].map((h) => (
            <div key={h.name} className="flex items-center gap-1.5 rounded-md border border-border/20 bg-white px-2 py-1.5">
              <h.icon className="h-3 w-3 text-foreground/30 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[9px] font-medium text-foreground/70 truncate">{h.name}</div>
                <div className="text-[8px] text-muted-foreground">{h.count} nodes</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LogVisual() {
  return (
    <div className="relative h-full w-full rounded-lg border border-border/40 bg-neutral-50 overflow-hidden">
      <div className="flex items-center justify-between border-b border-border/30 bg-white px-3 py-2">
        <span className="text-[10px] font-semibold text-foreground/70">Log Explorer</span>
        <div className="flex items-center gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-primary/50 animate-pulse" />
          <span className="text-[9px] text-muted-foreground">Live</span>
        </div>
      </div>
      {/* Search bar */}
      <div className="px-3 pt-2.5 pb-2">
        <div className="flex items-center gap-1.5 rounded-md border border-border/30 bg-white px-2 py-1.5">
          <Search className="h-3 w-3 text-muted-foreground shrink-0" />
          <span className="text-[9px] text-muted-foreground">Search logs...</span>
        </div>
      </div>
      {/* Log histogram */}
      <div className="px-3 pb-1.5">
        <div className="flex items-end gap-[2px] h-5">
          {[30, 45, 20, 65, 40, 55, 35, 70, 25, 50, 60, 45, 38, 72, 42].map((h, i) => (
            <div key={i} className={`flex-1 rounded-t-sm ${h > 60 ? "bg-primary/20" : "bg-foreground/10"}`} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      {/* Log entries */}
      <div className="px-3 pb-3 space-y-1 font-mono">
        {[
          { time: "14:23:01", level: "ERR", msg: "Connection timeout db-03", color: "text-primary/60" },
          { time: "14:22:58", level: "WRN", msg: "Memory 89% worker-7", color: "text-primary/40" },
          { time: "14:22:45", level: "INF", msg: "Deploy v2.4.1 complete", color: "text-foreground/25" },
          { time: "14:22:30", level: "INF", msg: "Health check passed", color: "text-foreground/25" },
          { time: "14:22:18", level: "ERR", msg: "Auth failed user svc-02", color: "text-primary/60" },
          { time: "14:22:05", level: "WRN", msg: "Latency spike api-gw", color: "text-primary/40" },
        ].map((l, i) => (
          <div key={i} className="flex items-center gap-1.5 rounded border border-border/15 bg-white px-2 py-1">
            <span className="text-[8px] text-muted-foreground shrink-0">{l.time}</span>
            <span className={`text-[8px] font-bold shrink-0 ${l.color}`}>{l.level}</span>
            <span className="text-[9px] text-foreground/60 truncate">{l.msg}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function APMVisual() {
  const latencyBars = [24, 18, 32, 15, 42, 28, 20, 35, 22, 38, 26, 30];
  return (
    <div className="relative h-full w-full rounded-lg border border-border/40 bg-neutral-50 overflow-hidden">
      <div className="flex items-center justify-between border-b border-border/30 bg-white px-3 py-2">
        <span className="text-[10px] font-semibold text-foreground/70">APM Dashboard</span>
        <span className="text-[9px] text-muted-foreground">4 services</span>
      </div>
      {/* Response time chart */}
      <div className="px-3 pt-2.5 pb-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[9px] font-medium text-foreground/50">Avg Response Time</span>
          <span className="text-label-sm-strong text-primary/60">23ms</span>
        </div>
        <div className="flex items-end gap-[3px] h-7">
          {latencyBars.map((h, i) => (
            <div key={i} className={`flex-1 rounded-t-sm ${h > 35 ? "bg-primary/20" : "bg-foreground/12"}`} style={{ height: `${h * 2}%` }} />
          ))}
        </div>
      </div>
      {/* Service traces */}
      <div className="px-3 pb-3 space-y-1.5">
        {[
          { name: "api-gateway", latency: "12ms", pct: 55, slow: false },
          { name: "auth-service", latency: "8ms", pct: 35, slow: false },
          { name: "order-svc", latency: "45ms", pct: 85, slow: true },
          { name: "payment-svc", latency: "23ms", pct: 60, slow: false },
        ].map((s) => (
          <div key={s.name} className="rounded-md border border-border/20 bg-white px-2.5 py-1.5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-medium text-foreground/70">{s.name}</span>
              <span className={`text-[9px] ${s.slow ? "text-primary/60 font-medium" : "text-muted-foreground"}`}>{s.latency}</span>
            </div>
            <div className="h-1 rounded-full bg-border/30">
              <div className={`h-full rounded-full ${s.slow ? "bg-primary/25" : "bg-foreground/15"}`} style={{ width: `${s.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RUMVisual() {
  const browsers = [
    { name: "Chrome", pct: 33, color: "bg-primary/30" },
    { name: "Firefox", pct: 25, color: "bg-foreground/20" },
    { name: "Safari", pct: 19, color: "bg-foreground/15" },
    { name: "Edge", pct: 14, color: "bg-foreground/12" },
    { name: "Opera", pct: 9, color: "bg-foreground/8" },
  ];
  const vitals = [
    { metric: "LCP", value: "1.2s", bar: 40, status: "good" as const },
    { metric: "INP", value: "68ms", bar: 28, status: "good" as const },
    { metric: "CLS", value: "0.04", bar: 15, status: "good" as const },
    { metric: "FCP", value: "0.9s", bar: 32, status: "good" as const },
    { metric: "TTFB", value: "320ms", bar: 55, status: "warn" as const },
  ];
  const trendBars = [38, 52, 45, 60, 72, 65, 58, 78, 70, 62, 55, 68, 74, 80, 72, 65, 58, 82, 75, 68];
  const perfRows = [
    { browser: "Chrome", sessions: "4.2k", errors: "128", lcp: "1.1s", cls: "0.03" },
    { browser: "Firefox", sessions: "3.1k", errors: "96", lcp: "1.3s", cls: "0.05" },
    { browser: "Safari", sessions: "2.4k", errors: "72", lcp: "1.4s", cls: "0.02" },
  ];

  /* Donut ring segments */
  const donutSegments = [
    { pct: 33, offset: 0 },
    { pct: 25, offset: 33 },
    { pct: 19, offset: 58 },
    { pct: 14, offset: 77 },
    { pct: 9, offset: 91 },
  ];

  return (
    <div className="relative h-full w-full rounded-lg border border-border/40 bg-neutral-50 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/30 bg-white px-3 py-1.5">
        <div className="flex items-center gap-2">
          <Globe className="h-3 w-3 text-primary/40" />
          <span className="text-[10px] font-semibold text-foreground/70">Real User Monitoring</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded bg-green-500/10 px-1.5 py-0.5 text-[8px] font-medium text-green-600">Live</span>
          <span className="text-[9px] text-muted-foreground">12.4k sessions</span>
        </div>
      </div>

      {/* Browser breakdown row */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/20">
        {browsers.map((b) => (
          <div key={b.name} className="flex-1 rounded-md border border-border/25 bg-white px-2 py-1.5 text-center">
            <span className="text-[13px] font-bold text-foreground/70 block leading-none">{b.pct}%</span>
            <span className="text-[8px] text-muted-foreground mt-0.5 block">{b.name}</span>
          </div>
        ))}
      </div>

      <div className="flex">
        {/* Left panel: Core Web Vitals + mini trend */}
        <div className="w-[55%] border-r border-border/20 px-3 pt-2 pb-2">
          <span className="text-[9px] font-medium text-foreground/50 mb-1.5 block">Core Web Vitals</span>
          <div className="space-y-1.5">
            {vitals.map((v) => (
              <div key={v.metric}>
                <div className="flex items-center justify-between mb-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className={`inline-block h-1.5 w-1.5 rounded-full ${v.status === "good" ? "bg-green-400/60" : "bg-primary/50"}`} />
                    <span className="text-[9px] font-medium text-foreground/60">{v.metric}</span>
                  </div>
                  <span className={`text-[9px] font-bold ${v.status === "warn" ? "text-primary/60" : "text-foreground/60"}`}>{v.value}</span>
                </div>
                <div className="h-[3px] rounded-full bg-border/30">
                  <div
                    className={`h-full rounded-full ${v.status === "warn" ? "bg-primary/30" : "bg-green-400/30"}`}
                    style={{ width: `${v.bar}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Page Load Trend */}
          <span className="text-[8px] font-medium text-foreground/40 mt-2.5 mb-1 block">Page Load Trend</span>
          <div className="flex items-end gap-[2px] h-8">
            {trendBars.map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-[1px] ${h > 72 ? "bg-primary/20" : "bg-foreground/10"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Right panel: Donut + Experience + perf table */}
        <div className="w-[45%] px-3 pt-2 pb-2">
          {/* Donut chart */}
          <div className="flex items-center gap-3 mb-2">
            <div className="relative flex-shrink-0">
              <svg width="52" height="52" viewBox="0 0 52 52">
                <circle cx="26" cy="26" r="20" fill="none" stroke="currentColor" className="text-border/20" strokeWidth="6" />
                {donutSegments.map((seg, i) => {
                  const colors = ["text-primary/50", "text-foreground/30", "text-foreground/20", "text-foreground/15", "text-foreground/10"];
                  return (
                    <circle
                      key={i}
                      cx="26" cy="26" r="20"
                      fill="none"
                      stroke="currentColor"
                      className={colors[i]}
                      strokeWidth="6"
                      strokeDasharray={`${(seg.pct / 100) * 125.66} 125.66`}
                      strokeDashoffset={`${-(seg.offset / 100) * 125.66}`}
                      transform="rotate(-90 26 26)"
                    />
                  );
                })}
                <text x="26" y="24" textAnchor="middle" className="fill-foreground/60" fontSize="8" fontWeight="700">31.9K</text>
                <text x="26" y="31" textAnchor="middle" className="fill-foreground/30" fontSize="5">errors</text>
              </svg>
            </div>
            <div className="flex-1">
              <span className="text-[8px] text-muted-foreground block mb-1">Errors by Browser</span>
              <div className="space-y-0.5">
                {browsers.slice(0, 3).map((b) => (
                  <div key={b.name} className="flex items-center justify-between">
                    <span className="text-[8px] text-foreground/50">{b.name}</span>
                    <span className="text-[8px] font-medium text-foreground/60">{b.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience score */}
          <div className="rounded-md border border-primary/12 bg-white px-2 py-1.5 mb-2 flex items-center justify-between">
            <div>
              <span className="text-[8px] text-muted-foreground block">Experience Score</span>
              <span className="text-[8px] text-foreground/40">Apdex 0.94</span>
            </div>
            <div className="text-right">
              <span className="text-heading-sm text-primary/60 leading-none">92</span>
              <span className="text-[8px] text-foreground/30">/100</span>
            </div>
          </div>

          {/* Mini performance table */}
          <div className="rounded-md border border-border/20 bg-white overflow-hidden">
            <div className="grid grid-cols-5 gap-0 border-b border-border/15 px-1.5 py-1">
              {["Browser", "Sessions", "Errors", "LCP", "CLS"].map((h) => (
                <span key={h} className="text-[7px] font-medium text-foreground/40 text-center">{h}</span>
              ))}
            </div>
            {perfRows.map((r) => (
              <div key={r.browser} className="grid grid-cols-5 gap-0 border-b border-border/10 last:border-0 px-1.5 py-[3px]">
                <span className="text-[7px] text-foreground/60 text-center">{r.browser}</span>
                <span className="text-[7px] text-foreground/50 text-center">{r.sessions}</span>
                <span className="text-[7px] text-primary/50 text-center font-medium">{r.errors}</span>
                <span className="text-[7px] text-foreground/50 text-center">{r.lcp}</span>
                <span className="text-[7px] text-foreground/50 text-center">{r.cls}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── ServiceOps Visuals ── */

function ServiceManagementVisual() {
  return (
    <div className="relative h-full w-full rounded-lg border border-border/40 bg-neutral-50 overflow-hidden">
      <div className="flex items-center justify-between border-b border-border/30 bg-white px-3 py-2">
        <span className="text-[10px] font-semibold text-foreground/70">Service Desk</span>
        <div className="flex items-center gap-2">
          <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[9px] font-bold text-primary/70">12 Open</span>
          <span className="rounded bg-foreground/5 px-1.5 py-0.5 text-[9px] text-muted-foreground">48 Resolved</span>
        </div>
      </div>
      {/* Workflow pipeline */}
      <div className="px-3 pt-3 pb-2">
        <div className="flex items-center gap-1">
          {[
            { stage: "New", count: 5, active: true },
            { stage: "Assigned", count: 4, active: false },
            { stage: "In Progress", count: 3, active: false },
            { stage: "Resolved", count: 48, active: false },
          ].map((s, i) => (
            <React.Fragment key={s.stage}>
              <div className={`flex-1 rounded-md border px-1.5 py-1.5 text-center ${s.active ? "border-primary/30 bg-primary/5" : "border-border/20 bg-white"}`}>
                <div className={`text-label-sm-strong ${s.active ? "text-primary/70" : "text-foreground/60"}`}>{s.count}</div>
                <div className="text-[8px] text-muted-foreground">{s.stage}</div>
              </div>
              {i < 3 && <ChevronRight className="h-3 w-3 text-border/60 shrink-0" />}
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* SLA compliance */}
      <div className="px-3 pb-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[9px] font-medium text-foreground/50">SLA Compliance</span>
          <span className="text-[10px] font-bold text-primary/60">96.2%</span>
        </div>
        <div className="h-1.5 rounded-full bg-border/30">
          <div className="h-full rounded-full bg-primary/30" style={{ width: "96%" }} />
        </div>
      </div>
      {/* Recent tickets */}
      <div className="px-3 pb-2 space-y-1.5">
        {[
          { id: "INC-3012", title: "Email server unresponsive", priority: "P1", status: "Investigating", time: "8m", critical: true },
          { id: "SR-4521", title: "New laptop provisioning", priority: "P3", status: "Approved", time: "2h", critical: false },
          { id: "CHG-1087", title: "Firewall rule update", priority: "P2", status: "Scheduled", time: "4h", critical: false },
        ].map((t) => (
          <div key={t.id} className={`rounded-md border bg-white px-2.5 py-2 ${t.critical ? "border-primary/20" : "border-border/20"}`}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-bold text-foreground/50">{t.id}</span>
                <span className={`rounded px-1 py-0.5 text-[8px] font-bold ${t.critical ? "bg-primary/10 text-primary/60" : "bg-foreground/5 text-foreground/40"}`}>{t.priority}</span>
              </div>
              <span className="text-[9px] text-muted-foreground">{t.time} ago</span>
            </div>
            <p className="text-[10px] font-medium text-foreground/70 leading-snug">{t.title}</p>
            <span className="mt-1 inline-block rounded-full bg-neutral-100 px-1.5 py-0.5 text-[8px] font-medium text-muted-foreground">{t.status}</span>
          </div>
        ))}
      </div>
      {/* Resolution metrics */}
      <div className="grid grid-cols-3 gap-1 px-3 pb-3">
        <div className="rounded border border-border/15 bg-white px-1.5 py-1 text-center">
          <div className="text-[10px] font-bold text-primary/60">24m</div>
          <div className="text-[7px] text-muted-foreground">Avg Resolve</div>
        </div>
        <div className="rounded border border-border/15 bg-white px-1.5 py-1 text-center">
          <div className="text-[10px] font-bold text-foreground/60">98%</div>
          <div className="text-[7px] text-muted-foreground">First Call</div>
        </div>
        <div className="rounded border border-border/15 bg-white px-1.5 py-1 text-center">
          <div className="text-[10px] font-bold text-foreground/60">4.8</div>
          <div className="text-[7px] text-muted-foreground">CSAT</div>
        </div>
      </div>
    </div>
  );
}

function AssetConfigVisual() {
  return (
    <div className="relative h-full w-full rounded-lg border border-border/40 bg-neutral-50 overflow-hidden">
      <div className="flex items-center justify-between border-b border-border/30 bg-white px-3 py-2">
        <span className="text-[10px] font-semibold text-foreground/70">Asset Inventory</span>
        <span className="text-label-sm-strong text-foreground/50">1,247</span>
      </div>
      {/* Asset categories */}
      <div className="grid grid-cols-3 gap-1.5 px-3 pt-3 pb-2">
        {[
          { type: "Hardware", count: 586, icon: Monitor },
          { type: "Software", count: 412, icon: Package },
          { type: "Consumable", count: 249, icon: ClipboardList },
        ].map((a) => (
          <div key={a.type} className="rounded-md border border-border/20 bg-white p-2 text-center">
            <a.icon className="h-3.5 w-3.5 text-foreground/35 mx-auto mb-1" />
            <div className="text-label-sm-strong text-foreground/60">{a.count}</div>
            <div className="text-[8px] text-muted-foreground">{a.type}</div>
          </div>
        ))}
      </div>
      {/* Compliance */}
      <div className="px-3 pb-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[9px] font-medium text-foreground/50">License Compliance</span>
          <span className="text-[10px] font-bold text-foreground/50">94%</span>
        </div>
        <div className="h-1.5 rounded-full bg-border/30">
          <div className="h-full rounded-full bg-foreground/20" style={{ width: "94%" }} />
        </div>
      </div>
      {/* Lifecycle */}
      <div className="px-3 pb-2">
        <span className="text-[9px] font-medium text-foreground/50 mb-1.5 block">Lifecycle</span>
        <div className="flex gap-px rounded-md overflow-hidden h-2.5">
          <div className="bg-primary/30" style={{ width: "52%" }} />
          <div className="bg-foreground/15" style={{ width: "28%" }} />
          <div className="bg-foreground/8" style={{ width: "20%" }} />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[8px] text-muted-foreground">Active 52%</span>
          <span className="text-[8px] text-muted-foreground">Maint. 28%</span>
          <span className="text-[8px] text-muted-foreground">EOL 20%</span>
        </div>
      </div>
      {/* Recent activity */}
      <div className="px-3 pb-1.5 space-y-1">
        {[
          { asset: "Laptop-0384", action: "Assigned" },
          { asset: "SW-Lic-0921", action: "Renewed" },
          { asset: "SRV-Node-12", action: "Retired" },
        ].map((r) => (
          <div key={r.asset} className="flex items-center justify-between rounded border border-border/15 bg-white px-2 py-1">
            <span className="text-[8px] font-medium text-foreground/60 truncate">{r.asset}</span>
            <span className="text-[8px] text-muted-foreground shrink-0 ml-1">{r.action}</span>
          </div>
        ))}
      </div>
      {/* Config summary */}
      <div className="grid grid-cols-2 gap-1 px-3 pb-3">
        <div className="rounded border border-border/15 bg-white px-2 py-1 text-center">
          <div className="text-[10px] font-bold text-foreground/60">38</div>
          <div className="text-[7px] text-muted-foreground">CI Items</div>
        </div>
        <div className="rounded border border-border/15 bg-white px-2 py-1 text-center">
          <div className="text-[10px] font-bold text-primary/60">7</div>
          <div className="text-[7px] text-muted-foreground">Expiring</div>
        </div>
      </div>
    </div>
  );
}

function PatchDeployVisual() {
  return (
    <div className="relative h-full w-full rounded-lg border border-border/40 bg-neutral-50 overflow-hidden">
      <div className="flex items-center justify-between border-b border-border/30 bg-white px-3 py-2">
        <span className="text-[10px] font-semibold text-foreground/70">Patch Manager</span>
        <div className="flex items-center gap-2">
          <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[9px] font-bold text-primary/70">23 Pending</span>
          <span className="text-[9px] text-muted-foreground">142 endpoints</span>
        </div>
      </div>
      {/* Patch status breakdown */}
      <div className="flex border-b border-border/20">
        {[
          { label: "Available", count: 23, highlight: true },
          { label: "Approved", count: 18, highlight: false },
          { label: "Scheduled", count: 7, highlight: false },
          { label: "Deployed", count: 156, highlight: false },
        ].map((p, i) => (
          <div key={p.label} className={`flex-1 px-2 py-2 text-center ${i < 3 ? "border-r border-border/20" : ""}`}>
            <div className={`text-label-md-strong ${p.highlight ? "text-primary/70" : "text-foreground/60"}`}>{p.count}</div>
            <div className="text-[8px] text-muted-foreground">{p.label}</div>
          </div>
        ))}
      </div>
      {/* Two-column layout */}
      <div className="flex flex-col sm:flex-row">
        {/* Left: Recent Patches */}
        <div className="w-full sm:w-1/2 border-b sm:border-b-0 sm:border-r border-border/20 px-3 pt-3 pb-3">
          <span className="text-[9px] font-medium text-foreground/50 mb-2 block">Recent Patches</span>
          <div className="space-y-1.5">
            {[
              { name: "KB5034441", os: "Win Server 2022", status: "Deployed", ok: true },
              { name: "CVE-2024-1234", os: "Ubuntu 22.04", status: "Pending", ok: false },
              { name: "KB5034439", os: "Windows 11", status: "Deployed", ok: true },
              { name: "RHSA-2024:0897", os: "RHEL 9", status: "Approved", ok: true },
            ].map((p, i) => (
              <div key={i} className="flex items-center justify-between rounded-md border border-border/20 bg-white px-2.5 py-1.5">
                <div>
                  <div className="text-[10px] font-medium text-foreground/70">{p.name}</div>
                  <div className="text-[8px] text-muted-foreground">{p.os}</div>
                </div>
                <span className={`flex items-center gap-1 text-[9px] shrink-0 ${p.ok ? "text-foreground/40" : "text-primary/60 font-medium"}`}>
                  {p.ok ? <CheckCircle2 className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Endpoint Compliance */}
        <div className="w-full sm:w-1/2 px-3 pt-3 pb-3">
          <span className="text-[9px] font-medium text-foreground/50 mb-2 block">Endpoint Compliance</span>
          <div className="space-y-2">
            {[
              { platform: "Windows Servers", patched: 89, total: 95 },
              { platform: "Linux Servers", patched: 42, total: 45 },
              { platform: "Workstations", patched: 118, total: 130 },
              { platform: "macOS", patched: 11, total: 12 },
            ].map((e) => (
              <div key={e.platform}>
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[10px] font-medium text-foreground/60">{e.platform}</span>
                  <span className="text-[9px] text-muted-foreground">{e.patched}/{e.total}</span>
                </div>
                <div className="h-1.5 rounded-full bg-border/30">
                  <div className="h-full rounded-full bg-primary/25" style={{ width: `${(e.patched / e.total) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
          {/* Overall compliance */}
          <div className="mt-3 rounded-md border border-primary/15 bg-white p-2.5 text-center">
            <span className="text-[9px] text-muted-foreground block">Overall Compliance</span>
            <span className="text-heading-md text-primary/60">92.2</span>
            <span className="text-[9px] text-foreground/30">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AgenticAIVisual() {
  return (
    <div className="relative h-full w-full rounded-lg border border-border/40 bg-neutral-50 overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-border/30 bg-white px-3 py-2">
        <div className="flex items-center gap-1.5">
          <BrainCircuit className="h-3 w-3 text-primary/40" />
          <span className="text-[10px] font-semibold text-foreground/70">AI Studio</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-[8px] font-medium text-primary/60">Agents</span>
          <span className="text-[9px] text-muted-foreground">Teams</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row">
        {/* Left panel: Search + Agents */}
        <div className="w-full sm:w-[46%] border-b sm:border-b-0 sm:border-r border-border/20 px-2 pt-2 pb-2">
          {/* Search */}
          <div className="flex items-center gap-1 rounded-md border border-border/30 bg-white px-2 py-0.5 mb-1.5">
            <Search className="h-2.5 w-2.5 text-muted-foreground shrink-0" />
            <span className="text-[8px] text-muted-foreground">Search agents...</span>
          </div>
          {/* Agent list */}
          <div className="space-y-1">
            {[
              { name: "Ticket Classifier", status: "Published", color: "#10b981", published: true },
              { name: "Incident Resolver", status: "Draft", color: "#f43f5e", published: false },
              { name: "Change Approval Bot", status: "Published", color: "#f59e0b", published: true },
              { name: "SLA Breach Predictor", status: "Published", color: "#10b981", published: true },
              { name: "Request Fulfillment", status: "Draft", color: "#3b82f6", published: false },
              { name: "Knowledge Suggester", status: "Published", color: "#8b5cf6", published: true },
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-1.5 rounded-md border border-border/20 bg-white px-2 py-1">
                <div className="h-3.5 w-3.5 rounded flex items-center justify-center shrink-0" style={{ backgroundColor: `${a.color}18` }}>
                  <BrainCircuit className="h-2 w-2" style={{ color: `${a.color}99` }} />
                </div>
                <span className="text-[8px] font-medium text-foreground/70 flex-1 truncate">{a.name}</span>
                <span className={`rounded px-1 py-0.5 text-[7px] font-medium shrink-0 ${a.published ? "bg-primary/10 text-primary/60" : "bg-foreground/5 text-foreground/40"}`}>
                  {a.status}
                </span>
              </div>
            ))}
          </div>
          {/* AI Stats */}
          <div className="grid grid-cols-3 gap-1 mt-1.5">
            <div className="rounded border border-border/15 bg-white px-1 py-0.5 text-center">
              <div className="text-[9px] font-bold text-primary/60">94%</div>
              <div className="text-[6px] text-muted-foreground">Accuracy</div>
            </div>
            <div className="rounded border border-border/15 bg-white px-1 py-0.5 text-center">
              <div className="text-[9px] font-bold text-foreground/60">3.6h</div>
              <div className="text-[6px] text-muted-foreground">Saved/Day</div>
            </div>
            <div className="rounded border border-border/15 bg-white px-1 py-0.5 text-center">
              <div className="text-[9px] font-bold text-foreground/60">1.2K</div>
              <div className="text-[6px] text-muted-foreground">Auto-resolved</div>
            </div>
          </div>
        </div>

        {/* Right panel: Workflow tree */}
        <div className="w-full sm:w-[54%] px-2 pt-2 pb-2 flex flex-col">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[9px] font-medium text-foreground/50">Auto Assignment</span>
            <div className="flex items-center">
              <span className="rounded-l-sm border border-r-0 border-primary/20 bg-primary/5 px-1.5 py-0.5 text-[7px] font-medium text-primary/60">Event</span>
              <span className="rounded-r-sm border border-border/20 bg-white px-1.5 py-0.5 text-[7px] text-foreground/40">Periodic</span>
            </div>
          </div>
          {/* Workflow: Trigger → Branch → Category branches */}
          <div className="flex items-start">
            {/* Trigger */}
            <div className="shrink-0 mt-[18px]">
              <div className="rounded-md border border-primary/20 bg-primary/5 px-1.5 py-1 text-center">
                <Zap className="h-2.5 w-2.5 text-primary/40 mx-auto" />
                <span className="text-[7px] font-medium text-foreground/60 block mt-0.5">Trigger</span>
              </div>
              <span className="text-[6px] text-muted-foreground block text-center mt-0.5">Incident created</span>
            </div>
            {/* Connector */}
            <div className="shrink-0 mt-[28px] w-2.5 h-px bg-foreground/15" />
            {/* Branch */}
            <div className="shrink-0 mt-[18px]">
              <div className="rounded-md border border-foreground/15 bg-white px-1.5 py-1 text-center">
                <GitBranch className="h-2.5 w-2.5 text-foreground/35 mx-auto" />
                <span className="text-[7px] font-medium text-foreground/60 block mt-0.5">Branch</span>
              </div>
              <span className="text-[6px] text-muted-foreground block text-center mt-0.5">Category</span>
            </div>
            {/* Category branches tree */}
            <div className="flex-1 min-w-0 relative pt-0.5">
              <div className="absolute left-0 top-[8px] bottom-[4px] w-px bg-foreground/12" />
              <div className="pl-2.5 space-y-1">
                {[
                  { cat: "Software", desc: "Set Technician Group to Software S..." },
                  { cat: "Hardware", desc: "Set Technician Group to Hardware..." },
                  { cat: "Network", desc: "Set Technician Group to Network S..." },
                  { cat: "Default", desc: "Set Technician Group to General T..." },
                ].map((r) => (
                  <div key={r.cat} className="relative">
                    <div className="absolute -left-2.5 top-1/2 w-2.5 h-px bg-foreground/12" />
                    <div className="rounded border border-border/20 bg-white px-1.5 py-1">
                      <div className="flex items-center gap-0.5">
                        <span className="text-[7px] font-medium text-primary/50">{r.cat}</span>
                        <ChevronRight className="h-2 w-2 text-foreground/15" />
                        <span className="text-[7px] font-semibold text-foreground/60">Assign Tech</span>
                      </div>
                      <span className="text-[6px] text-muted-foreground block truncate">{r.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Execution Log */}
          <div className="mt-1.5 border-t border-border/20 pt-1.5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] font-medium text-foreground/60">Recent Executions</span>
              <span className="text-[8px] text-primary/50">View All</span>
            </div>
            <div className="space-y-1">
              {[
                { id: "#WF-1042", status: "success", time: "2m ago", agent: "Ticket Classifier" },
                { id: "#WF-1041", status: "success", time: "5m ago", agent: "Incident Resolver" },
                { id: "#WF-1040", status: "failed", time: "12m ago", agent: "Change Approval" },
              ].map((ex) => (
                <div key={ex.id} className="flex items-center gap-1.5 rounded border border-border/15 bg-white px-2 py-1">
                  {ex.status === "success" ? (
                    <CheckCircle2 className="h-2.5 w-2.5 text-emerald-400 shrink-0" />
                  ) : (
                    <AlertCircle className="h-2.5 w-2.5 text-red-400 shrink-0" />
                  )}
                  <span className="text-[8px] font-medium text-foreground/70 truncate flex-1">{ex.agent}</span>
                  <span className="text-[7px] text-muted-foreground shrink-0">{ex.id}</span>
                  <span className="text-[7px] text-muted-foreground shrink-0">{ex.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MSPEditionVisual() {
  return (
    <div className="relative h-full w-full rounded-lg border border-border/40 bg-neutral-50 overflow-hidden">
      <div className="flex items-center justify-between border-b border-border/30 bg-white px-3 py-2">
        <div className="flex items-center gap-1.5">
          <Building2 className="h-3 w-3 text-primary/40" />
          <span className="text-[10px] font-semibold text-foreground/70">MSP Console</span>
        </div>
        <span className="text-[9px] text-muted-foreground">8 tenants</span>
      </div>
      {/* Compact metrics */}
      <div className="grid grid-cols-2 gap-1.5 px-3 pt-3 pb-2">
        <div className="rounded-md border border-border/20 bg-white p-2 text-center">
          <div className="text-label-md-strong text-primary/60">1.2k</div>
          <div className="text-[8px] text-muted-foreground">Total Users</div>
        </div>
        <div className="rounded-md border border-border/20 bg-white p-2 text-center">
          <div className="text-label-md-strong text-foreground/60">99.2%</div>
          <div className="text-[8px] text-muted-foreground">Avg SLA</div>
        </div>
      </div>
      {/* Client list */}
      <div className="px-3 pb-1.5 space-y-1.5">
        {[
          { name: "Acme Corp", users: 245, status: "Active" },
          { name: "TechFlow Inc", users: 189, status: "Active" },
          { name: "DataPrime", users: 134, status: "Active" },
          { name: "CloudNex", users: 98, status: "Active" },
        ].map((c, i) => (
          <div key={i} className="flex items-center gap-2 rounded-md border border-border/20 bg-white px-2.5 py-1.5">
            <div className="h-5 w-5 rounded bg-primary/8 flex items-center justify-center shrink-0">
              <span className="text-[8px] font-bold text-primary/50">{c.name[0]}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-medium text-foreground/70 truncate">{c.name}</div>
              <div className="text-[8px] text-muted-foreground">{c.users} users</div>
            </div>
            <span className="flex items-center gap-1 text-[9px] text-foreground/50 shrink-0">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
              {c.status}
            </span>
          </div>
        ))}
      </div>
      {/* Tenant health */}
      <div className="px-3 pb-1.5">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[9px] font-medium text-foreground/50">Tenant Health</span>
          <span className="text-[10px] font-bold text-foreground/50">97%</span>
        </div>
        <div className="h-1.5 rounded-full bg-border/30">
          <div className="h-full rounded-full bg-primary/30" style={{ width: "97%" }} />
        </div>
      </div>
      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-1 px-3 pb-3">
        {[
          { label: "Tickets", value: "342" },
          { label: "Devices", value: "1.8K" },
          { label: "Alerts", value: "12" },
        ].map((s) => (
          <div key={s.label} className="rounded border border-border/15 bg-white px-1.5 py-1 text-center">
            <div className="text-[10px] font-bold text-foreground/60">{s.value}</div>
            <div className="text-[7px] text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   CARD DATA
   ══════════════════════════════════════════════════════ */

const observeCards: BentoCard[] = [
  {
    name: "Network Observability",
    desc: "Eliminates blind spots across networks so you get real-time visibility into flows, packets, and infrastructure behavior across your environment.",
    icon: Network,
    span: "large",
    visual: <NetworkTopologyVisual />,
  },
  {
    name: "Network Configuration & Compliance Management",
    desc: "Automates configuration control so you track drift, validate compliance, and maintain consistent, audit-ready network states across devices.",
    icon: ShieldCheck,
    span: "small",
    visual: <ComplianceVisual />,
  },
  {
    name: "Hybrid Infrastructure Monitoring",
    desc: "Bring cloud and on-prem systems into one view, so you monitor performance, availability, and resource health across all environments together.",
    icon: Server,
    span: "small",
    visual: <InfraVisual />,
  },
  {
    name: "Log Monitoring",
    desc: "Converts large-logs data into structured insights so you correlate events, filter noise, and trace root causes across distributed systems.",
    icon: ScrollText,
    span: "small",
    visual: <LogVisual />,
  },
  {
    name: "Application Performance Monitoring",
    desc: "Tracks every application transaction in real time so you identify latency, errors, and performance bottlenecks across services and dependencies.",
    icon: Gauge,
    span: "small",
    visual: <APMVisual />,
  },
  {
    name: "Real User Monitoring",
    desc: "Captures real user sessions across browsers and devices so you understand performance behavior, user journeys, and experience signals.",
    icon: Users,
    span: "large",
    visual: <RUMVisual />,
  },
];

const serviceCards: BentoCard[] = [
  {
    name: "Service Management",
    desc: "Handles end-to-end IT service delivery so you manage incidents, problems, changes, and requests with AI-driven workflows across IT operations.",
    icon: Headset,
    span: "large",
    visual: <ServiceManagementVisual />,
  },
  {
    name: "IT Asset & Configuration Management",
    desc: "Tracks full lifecycle of IT assets so you maintain visibility into ownership, configuration state, and compliance across hardware and software.",
    icon: Package,
    span: "small",
    visual: <AssetConfigVisual />,
  },
  {
    name: "MSP Edition",
    desc: "Supports multi-tenant service operations, so you manage multiple clients with isolation, branding control, and centralized service delivery.",
    icon: Building2,
    span: "small",
    visual: <MSPEditionVisual />,
  },
  {
    name: "Agentic AI & Orchestration",
    desc: "Automates classification, routing, and workflow handling so ticket movement and service processes reduce manual intervention across operations.",
    icon: BrainCircuit,
    span: "large",
    visual: <AgenticAIVisual />,
  },
  {
    name: "Patch & Deployment Management",
    desc: "Manages patch discovery, approval, and deployment so endpoints and servers stay updated with controlled rollout and compliance tracking.",
    icon: ShieldCheck,
    span: "large",
    visual: <PatchDeployVisual />,
  },
];

export type BentoProduct = "observeops" | "serviceops";

export const bentoProdMeta: Record<BentoProduct, { label: string; icon: LucideIcon; title: string; desc: string; cards: BentoCard[] }> = {
  observeops: {
    label: "ObserveOps",
    icon: Activity,
    title: "Unified Observability Platform",
    desc: "Unified observability across metrics, logs, traces, and events at enterprise scale.",
    cards: observeCards,
  },
  serviceops: {
    label: "ServiceOps",
    icon: Headset,
    title: "Unified IT Service Management Platform",
    desc: "ServiceOps connects incidents, requests, and workflows into one system for end-to-end IT service delivery with AI-driven automation.",
    cards: serviceCards,
  },
};

/* ══════════════════════════════════════════════════════
   BENTO CELL
   ══════════════════════════════════════════════════════ */

export function BentoCell({ card, isLarge }: { card: BentoCard; isLarge: boolean }) {
  return (
    <div className="feature-cell group relative h-full overflow-hidden bg-white">
      <DottedGlowBackground
        className="opacity-0 transition-opacity duration-500 group-hover:opacity-60"
        gap={14}
        radius={1.2}
        opacity={0.4}
      />
      <div className="relative z-10 flex h-full flex-col">
        {/* Text — top */}
        <div className={`p-6 pb-3 ${!isLarge ? "min-h-[200px]" : ""}`}>
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5">
            <card.icon className="h-[16px] w-[16px] text-foreground/50 transition-colors duration-100 group-hover:text-primary" />
          </div>
          <h3 className="text-lg font-semibold leading-snug">
            {card.name}
          </h3>
          <p className="mt-1.5 text-[14px] font-medium leading-[22.75px] text-[#6B7280]" style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}>
            {card.desc}
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-caption text-primary opacity-0 transition-opacity duration-100 group-hover:opacity-100">
            Learn more <ChevronRight className="h-3 w-3" />
          </span>
        </div>

        {/* Visual — below text */}
        <div className="flex-1 px-4 pb-4">
          {card.visual}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   MAIN SECTION
   ══════════════════════════════════════════════════════ */

export function ProductBentoGrid() {
  const [active, setActive] = useState<BentoProduct>("observeops");
  const current = bentoProdMeta[active];

  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {/* ── Header + Inline Tabs ── */}
        <div className="mx-auto max-w-2xl text-center">
          {/* Compact toggle tabs */}
          <div className="mx-auto inline-flex items-center rounded-lg border border-border/60 p-1 bg-white">
            {(Object.keys(bentoProdMeta) as BentoProduct[]).map((key) => {
              const p = bentoProdMeta[key];
              const isActive = active === key;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
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
          <h2 className="mt-5 text-display-md">
            {current.title}
          </h2>
          <p className="mt-4 text-[16px] font-medium leading-[26px] text-[#6B7280]" style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}>
            {current.desc}
          </p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-border/60 bg-border/60 shadow-sm">
          {/* Row 1: 2/4 + 1/4 + 1/4 */}
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

          {/* Row 2: adapts to 5 or 6 cards */}
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

        {/* ── Explore CTA ── */}
        <div className="mt-12 text-center">
          <Button size="lg" className="h-12 px-8 text-[15px] bg-foreground text-white hover:bg-foreground/90">
            Explore {current.label} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Network,
  Settings2,
  FileText,
  Server,
  Activity,
  Users,
  type LucideIcon,
} from "lucide-react";

interface SuiteTab {
  icon: LucideIcon;
  title: string;
  desc: string;
  visual: React.ReactNode;
}

/* ── Mini visuals for each suite product ── */

function NetworkObservabilityVisual() {
  const devices = [
    { name: "Switch-Core-01", iface: "Gi0/1", traffic: "1.2 Gbps", status: "Healthy" },
    { name: "Router-Edge-02", iface: "Eth1/0", traffic: "840 Mbps", status: "Healthy" },
    { name: "FW-Perimeter", iface: "wan0", traffic: "620 Mbps", status: "Warning" },
    { name: "AP-Floor3", iface: "wlan0", traffic: "210 Mbps", status: "Healthy" },
  ];
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground/70">Network Devices</span>
        <span className="text-caption text-muted-foreground">4 devices</span>
      </div>
      {/* Header row */}
      <div className="flex items-center justify-between px-4 py-2 text-caption text-muted-foreground">
        <span className="w-[38%]">Device</span>
        <span className="w-[20%]">Interface</span>
        <span className="w-[22%]">Traffic</span>
        <span className="w-[20%] text-right">Status</span>
      </div>
      <div className="space-y-2 flex-1 flex flex-col justify-center">
        {devices.map((d) => (
          <div key={d.name} className="flex items-center justify-between rounded-md bg-white px-4 py-3 border border-border/20">
            <span className="w-[38%] text-label-md text-foreground/80 truncate">{d.name}</span>
            <span className="w-[20%] text-caption text-muted-foreground">{d.iface}</span>
            <span className="w-[22%] text-caption text-muted-foreground">{d.traffic}</span>
            <span className={`w-[20%] text-right text-caption ${d.status === "Warning" ? "text-primary" : "text-foreground/40"}`}>
              {d.status}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

function NCCMVisual() {
  const policies = [
    { name: "SSH Timeout Policy", compliance: 98 },
    { name: "ACL Standard Baseline", compliance: 91 },
    { name: "SNMP Community Audit", compliance: 100 },
    { name: "NTP Sync Enforcement", compliance: 85 },
  ];
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground/70">Config Compliance</span>
        <span className="text-xs text-primary font-medium">93.5% Overall</span>
      </div>
      <div className="space-y-3 flex-1 flex flex-col justify-center">
        {policies.map((p) => (
          <div key={p.name} className="rounded-md bg-white px-4 py-3 border border-border/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-label-md text-foreground/80">{p.name}</span>
              <span className={`text-caption ${p.compliance < 90 ? "text-primary" : "text-foreground/50"}`}>
                {p.compliance}%
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-foreground/5">
              <div
                className={`h-full rounded-full transition-all ${p.compliance === 100 ? "bg-foreground/20" : p.compliance >= 90 ? "bg-foreground/15" : "bg-primary/50"}`}
                style={{ width: `${p.compliance}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function LogMonitoringVisual() {
  const logs = [
    { time: "14:23:01.342", level: "INFO", message: "Health check passed — node prod-web-01" },
    { time: "14:23:01.587", level: "WARN", message: "Disk usage at 82% on prod-db-01" },
    { time: "14:23:02.104", level: "ERROR", message: "Connection timeout: redis-cache-03" },
    { time: "14:23:02.441", level: "INFO", message: "Deployment rollout complete — v2.4.1" },
    { time: "14:23:03.022", level: "WARN", message: "Certificate expiry in 7 days — api.motadata.io" },
    { time: "14:23:03.198", level: "INFO", message: "Backup snapshot created — db-primary" },
  ];
  const levelColors: Record<string, string> = {
    INFO: "bg-foreground/10 text-foreground/50",
    WARN: "bg-amber-100 text-amber-700",
    ERROR: "bg-red-100 text-red-600",
  };
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground/70">Log Stream</span>
        <span className="text-caption text-muted-foreground">Powered by Motastore</span>
      </div>
      <div className="space-y-1.5 flex-1 flex flex-col justify-center font-mono">
        {logs.map((l, i) => (
          <div key={i} className="flex items-center gap-3 rounded-md bg-white px-3 py-2 border border-border/20 text-xs">
            <span className="text-muted-foreground whitespace-nowrap">{l.time}</span>
            <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${levelColors[l.level]}`}>
              {l.level}
            </span>
            <span className="text-foreground/70 truncate">{l.message}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function HIMVisual() {
  const hosts = [
    { name: "dc-hypervisor-01", cpu: 34, mem: 62, status: "Healthy" },
    { name: "k8s-worker-03", cpu: 67, mem: 78, status: "Warning" },
    { name: "private-cloud-vm", cpu: 22, mem: 45, status: "Healthy" },
    { name: "container-host-02", cpu: 51, mem: 58, status: "Healthy" },
  ];
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground/70">Hybrid Infrastructure</span>
        <span className="text-caption text-muted-foreground">4 hosts</span>
      </div>
      <div className="space-y-3 flex-1 flex flex-col justify-center">
        {hosts.map((h) => (
          <div key={h.name} className="flex items-center justify-between rounded-md bg-white px-4 py-3 border border-border/20">
            <div>
              <div className="text-label-md text-foreground/80">{h.name}</div>
              <div className="flex gap-3 mt-1 text-caption text-muted-foreground">
                <span>CPU {h.cpu}%</span>
                <span>MEM {h.mem}%</span>
              </div>
            </div>
            <span className={`text-caption ${h.status === "Warning" ? "text-primary" : "text-foreground/40"}`}>
              {h.status}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

function APMVisual() {
  const services = [
    { name: "payment-gateway", latency: "23ms", errors: "0.1%", rpm: "1.2k" },
    { name: "auth-service", latency: "8ms", errors: "0%", rpm: "890" },
    { name: "order-processor", latency: "45ms", errors: "1.2%", rpm: "340" },
    { name: "notification-svc", latency: "12ms", errors: "0.3%", rpm: "560" },
  ];
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground/70">Service Performance</span>
        <span className="text-xs text-primary font-medium">99.2% Apdex</span>
      </div>
      <div className="space-y-3 flex-1 flex flex-col justify-center">
        {services.map((s) => (
          <div key={s.name} className="rounded-md bg-white px-4 py-3 border border-border/20">
            <div className="text-label-md text-foreground/80">{s.name}</div>
            <div className="flex gap-4 mt-1 text-caption text-muted-foreground">
              <span>Latency: <span className="font-medium text-foreground/60">{s.latency}</span></span>
              <span>Errors: <span className={`font-medium ${parseFloat(s.errors) > 1 ? "text-primary" : "text-foreground/60"}`}>{s.errors}</span></span>
              <span>RPM: <span className="font-medium text-foreground/60">{s.rpm}</span></span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function RUMVisual() {
  const pages = [
    { page: "/checkout", lcp: "1.2s", fid: "18ms", cls: "0.02", region: "North America" },
    { page: "/dashboard", lcp: "2.1s", fid: "45ms", cls: "0.08", region: "Europe" },
    { page: "/product-list", lcp: "1.8s", fid: "22ms", cls: "0.04", region: "Asia Pacific" },
    { page: "/login", lcp: "0.9s", fid: "12ms", cls: "0.01", region: "Global" },
  ];
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground/70">Real User Metrics</span>
        <span className="text-caption text-muted-foreground">4 pages monitored</span>
      </div>
      <div className="space-y-2.5 flex-1 flex flex-col justify-center">
        {pages.map((p) => (
          <div key={p.page} className="rounded-md bg-white px-4 py-3 border border-border/20">
            <div className="flex items-center justify-between mb-1">
              <span className="text-label-md text-foreground/80">{p.page}</span>
              <span className="text-[10px] font-medium text-muted-foreground bg-foreground/5 rounded px-1.5 py-0.5">{p.region}</span>
            </div>
            <div className="flex gap-4 text-caption text-muted-foreground">
              <span>LCP: <span className={`font-medium ${parseFloat(p.lcp) > 2 ? "text-primary" : "text-foreground/60"}`}>{p.lcp}</span></span>
              <span>FID: <span className={`font-medium ${parseInt(p.fid) > 40 ? "text-primary" : "text-foreground/60"}`}>{p.fid}</span></span>
              <span>CLS: <span className={`font-medium ${parseFloat(p.cls) > 0.05 ? "text-primary" : "text-foreground/60"}`}>{p.cls}</span></span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ── Suite tabs data ── */

const suiteTabs: SuiteTab[] = [
  {
    icon: Network,
    title: "Network Observability",
    desc: "Monitor every device, interface, and flow with granular precision. Detect congestion, capacity issues, or anomalies before they disrupt operations.",
    visual: <NetworkObservabilityVisual />,
  },
  {
    icon: Settings2,
    title: "NCCM",
    desc: "Automate configuration control, policy enforcement, and compliance auditing \u2014 eliminating human error and ensuring regulatory adherence.",
    visual: <NCCMVisual />,
  },
  {
    icon: Server,
    title: "Hybrid Infrastructure Monitoring",
    desc: "Unify visibility across datacenters, private clouds, and containers. Maintain performance and compliance across complex ecosystems.",
    visual: <HIMVisual />,
  },
  {
    icon: FileText,
    title: "Log Monitoring",
    desc: "Aggregate and correlate logs across the stack. Powered by Motastore for instantaneous search and analytics at scale.",
    visual: <LogMonitoringVisual />,
  },
  {
    icon: Activity,
    title: "Application Performance Monitoring (APM)",
    desc: "Trace distributed transactions, identify code-level bottlenecks, and accelerate resolution with AI-driven root-cause analysis.",
    visual: <APMVisual />,
  },
  {
    icon: Users,
    title: "Real User Monitoring (RUM)",
    desc: "Quantify digital experience in real time. Optimize application responsiveness from the user\u2019s perspective \u2014 across browsers, regions, and devices.",
    visual: <RUMVisual />,
  },
];

/* ── Scroll-trigger item ── */

function ScrollItem({ tab, index, onInView }: { tab: SuiteTab; index: number; onInView: (i: number) => void }) {
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
    </div>
  );
}

/* ── Main component ── */

export function OOSuite() {
  const [scrollActive, setScrollActive] = useState(0);

  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-12"
        >
          <p className="text-overline text-primary">
            Product Suite
          </p>
          <h2 className="mt-3 text-display-md">
            The ObserveOps Suite
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Comprehensive by Design
          </p>
        </motion.div>

        {/* Scroll-driven layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left -- scrollable text items */}
          <div className="divide-y divide-border/40">
            {suiteTabs.map((tab, i) => (
              <ScrollItem key={tab.title} tab={tab} index={i} onInView={setScrollActive} />
            ))}
          </div>

          {/* Right -- sticky visual */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="relative">
                {/* Orange rectangle behind with diagonal lines */}
                <div className="absolute -left-6 -bottom-6 w-full h-full rounded-lg bg-primary/15 overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <pattern id="oo-diag-lines" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="12" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.15" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#oo-diag-lines)" />
                  </svg>
                </div>
                {/* Static white box — only inner content animates */}
                <div className="relative rounded-lg border border-border bg-neutral-50 p-6 shadow-sm" style={{ aspectRatio: "4/3" }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={scrollActive}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col justify-between h-full"
                    >
                      {suiteTabs[scrollActive].visual}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Headset,
  PackageSearch,
  Network,
  Download,
  Bot,
  Building2,
  type LucideIcon,
} from "lucide-react";

interface SuiteTab {
  icon: LucideIcon;
  label: string;
  title: string;
  desc: string;
  visual: React.ReactNode;
}

/* ── Mini visuals ── */

function ServiceMgmtVisual() {
  const tickets = [
    { id: "INC-4012", priority: "P1", subject: "Email server down", status: "In Progress", sla: "2h remaining" },
    { id: "REQ-1187", priority: "P3", subject: "New laptop request", status: "Approved", sla: "On track" },
    { id: "CHG-0089", priority: "P2", subject: "Firewall rule update", status: "CAB Review", sla: "4h remaining" },
    { id: "PRB-0034", priority: "P2", subject: "Recurring DNS failures", status: "Root Cause", sla: "Under review" },
  ];
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground/70">Service Desk</span>
        <span className="text-caption text-muted-foreground">12 open tickets</span>
      </div>
      <div className="space-y-3 flex-1 flex flex-col justify-center">
        {tickets.map((t) => (
          <div key={t.id} className="flex items-center justify-between rounded-md bg-white px-4 py-3 border border-border/20">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-foreground/60">{t.id}</span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${t.priority === "P1" ? "bg-red-100 text-red-600" : t.priority === "P2" ? "bg-amber-100 text-amber-600" : "bg-blue-100 text-blue-600"}`}>{t.priority}</span>
              </div>
              <div className="text-label-md text-foreground/80 mt-0.5">{t.subject}</div>
            </div>
            <div className="text-right">
              <div className="text-caption text-foreground/60">{t.status}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">{t.sla}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function AssetMgmtVisual() {
  const assets = [
    { name: "Dell Latitude 5540", type: "Laptop", status: "In Use", user: "J. Smith" },
    { name: "HP ProLiant DL380", type: "Server", status: "Active", user: "DC-Rack-04" },
    { name: "Adobe Creative Suite", type: "Software", status: "Licensed", user: "Design Team" },
    { name: "Cisco Catalyst 9300", type: "Network", status: "Active", user: "Floor-2" },
  ];
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground/70">Asset Inventory</span>
        <span className="text-caption text-muted-foreground">1,247 assets</span>
      </div>
      <div className="space-y-3 flex-1 flex flex-col justify-center">
        {assets.map((a) => (
          <div key={a.name} className="flex items-center justify-between rounded-md bg-white px-4 py-3 border border-border/20">
            <div>
              <div className="text-label-md text-foreground/80">{a.name}</div>
              <div className="text-caption text-muted-foreground mt-0.5">{a.type} · {a.user}</div>
            </div>
            <span className="text-caption text-foreground/40">{a.status}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function CMDBVisual() {
  const cis = [
    { name: "web-prod-cluster", type: "Application", relations: 14, impact: "Critical" },
    { name: "db-primary-01", type: "Database", relations: 8, impact: "High" },
    { name: "auth-gateway", type: "Service", relations: 11, impact: "Critical" },
  ];
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground/70">Configuration Items</span>
        <span className="text-caption text-muted-foreground">342 CIs mapped</span>
      </div>
      <div className="space-y-3 flex-1 flex flex-col justify-center">
        {cis.map((c) => (
          <div key={c.name} className="rounded-md bg-white px-4 py-3 border border-border/20">
            <div className="flex items-center justify-between">
              <div className="text-label-md text-foreground/80">{c.name}</div>
              <span className={`text-caption ${c.impact === "Critical" ? "text-primary" : "text-foreground/40"}`}>{c.impact}</span>
            </div>
            <div className="flex gap-3 mt-1 text-caption text-muted-foreground">
              <span>{c.type}</span>
              <span>{c.relations} relationships</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function PatchVisual() {
  const patches = [
    { name: "KB5034441", os: "Windows", severity: "Critical", status: "Deployed", pct: "98%" },
    { name: "CVE-2024-1086", os: "Linux", severity: "High", status: "Testing", pct: "45%" },
    { name: "macOS 14.3.1", os: "macOS", severity: "Medium", status: "Scheduled", pct: "0%" },
  ];
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground/70">Patch Status</span>
        <span className="text-xs text-primary font-medium">3 pending</span>
      </div>
      <div className="space-y-3 flex-1 flex flex-col justify-center">
        {patches.map((p) => (
          <div key={p.name} className="rounded-md bg-white px-4 py-3 border border-border/20">
            <div className="flex items-center justify-between">
              <div className="text-label-md text-foreground/80">{p.name}</div>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${p.severity === "Critical" ? "bg-red-100 text-red-600" : p.severity === "High" ? "bg-amber-100 text-amber-600" : "bg-blue-100 text-blue-600"}`}>{p.severity}</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-caption text-muted-foreground">{p.os} · {p.status}</span>
              <span className="text-caption text-foreground/60">{p.pct}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function AgenticAIVisual() {
  const actions = [
    { name: "Auto-classify incoming tickets", triggers: 245, status: "Active" },
    { name: "Route by sentiment analysis", triggers: 89, status: "Active" },
    { name: "Reset password via chatbot", triggers: 156, status: "Active" },
  ];
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground/70">AI Automations</span>
        <span className="text-caption text-muted-foreground">490 actions today</span>
      </div>
      <div className="space-y-3 flex-1 flex flex-col justify-center">
        {actions.map((a) => (
          <div key={a.name} className="flex items-center justify-between rounded-md bg-white px-4 py-3 border border-border/20">
            <div>
              <div className="text-label-md text-foreground/80">{a.name}</div>
              <div className="text-caption text-muted-foreground mt-1">{a.triggers} triggers this week</div>
            </div>
            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-caption text-primary">{a.status}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function MSPVisual() {
  const tenants = [
    { name: "Acme Corp", tickets: 34, sla: "99.2%", status: "Healthy" },
    { name: "GlobalTech Inc", tickets: 18, sla: "98.8%", status: "Warning" },
    { name: "DataFlow Ltd", tickets: 7, sla: "99.9%", status: "Healthy" },
  ];
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-label-md text-foreground/70">Tenant Overview</span>
        <span className="text-caption text-muted-foreground">3 clients</span>
      </div>
      <div className="space-y-3 flex-1 flex flex-col justify-center">
        {tenants.map((t) => (
          <div key={t.name} className="flex items-center justify-between rounded-md bg-white px-4 py-3 border border-border/20">
            <div>
              <div className="text-label-md text-foreground/80">{t.name}</div>
              <div className="flex gap-3 mt-1 text-caption text-muted-foreground">
                <span>{t.tickets} tickets</span>
                <span>SLA {t.sla}</span>
              </div>
            </div>
            <span className={`text-caption ${t.status === "Warning" ? "text-primary" : "text-foreground/40"}`}>{t.status}</span>
          </div>
        ))}
      </div>
    </>
  );
}

const tabs: SuiteTab[] = [
  {
    icon: Headset,
    label: "Service Management",
    title: "Service Management",
    desc: "AI-enhanced incident, problem, change, and request handling with multi-channel intake, SLA governance, and ITIL-driven workflows.",
    visual: <ServiceMgmtVisual />,
  },
  {
    icon: PackageSearch,
    label: "IT Asset Management",
    title: "IT Asset Management",
    desc: "Full lifecycle visibility for hardware, software, non-IT, and consumables — powered by automated discovery and compliance intelligence.",
    visual: <AssetMgmtVisual />,
  },
  {
    icon: Network,
    label: "Configuration Management",
    title: "Configuration Management (CMDB)",
    desc: "Centralized CI repository, relationship mapping, topology insights, and impact analysis for safer, more informed decisions.",
    visual: <CMDBVisual />,
  },
  {
    icon: Download,
    label: "Patch & Deployment",
    title: "Patch & Deployment Management",
    desc: "Automated patch discovery, prioritization, testing, and deployment across Windows, Linux, and macOS — with security-first controls.",
    visual: <PatchVisual />,
  },
  {
    icon: Bot,
    label: "Agentic AI",
    title: "Agentic AI & Orchestration",
    desc: "AI classification, sentiment-aware routing, multi-system orchestration, workflow automation, and autonomous service actions.",
    visual: <AgenticAIVisual />,
  },
  {
    icon: Building2,
    label: "MSP Edition",
    title: "MSP Edition",
    desc: "True multi-tenancy with client isolation, per-company SLAs, branded portals, tenant-specific catalogs, and centralized technician operations.",
    visual: <MSPVisual />,
  },
];

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

export function SOSuite() {
  const [scrollActive, setScrollActive] = useState(0);

  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
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
            The ServiceOps Suite
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Comprehensive IT Service Management Intelligence
          </p>
        </motion.div>

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
                      <pattern id="so-diag-lines" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="12" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.15" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#so-diag-lines)" />
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
                      {tabs[scrollActive].visual}
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

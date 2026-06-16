"use client";

import React, { useState } from "react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import {
  Network,
  ShieldCheck,
  Server,
  ScrollText,
  Gauge,
  Users,
  ChevronRight,
  Activity,
  Headset,
  TicketCheck,
  RefreshCw,
  Package,
  ClipboardList,
  BrainCircuit,
  BookOpen,
} from "lucide-react";
import {
  FloatingDiamond,
  FloatingSquare,
  FloatingDots,
} from "@/components/decorative-shapes";

const observeFeatures = [
  {
    name: "Network Observability",
    desc: "Unites flows, packets, and paths into clarity, control, and confidence.",
    icon: Network,
  },
  {
    name: "Config & Compliance",
    desc: "Keeps every device aligned with automation, assurance, and audit-readiness.",
    icon: ShieldCheck,
  },
  {
    name: "Infrastructure Monitoring",
    desc: "Brings on-prem and cloud together with visibility, stability, and scale.",
    icon: Server,
  },
  {
    name: "Log Monitoring",
    desc: "Reveals root cause with context, correlation, and clarity.",
    icon: ScrollText,
  },
  {
    name: "APM",
    desc: "Traces every transaction with depth, detail, and discovery.",
    icon: Gauge,
  },
  {
    name: "Real User Monitoring",
    desc: "Captures every click with insight, impact, and intuition.",
    icon: Users,
  },
];

const serviceFeatures = [
  {
    name: "Service Management",
    desc: "End-to-end IT service delivery with AI-driven incident, problem, change, and request management for faster resolution and improved service quality.",
    icon: Headset,
  },
  {
    name: "IT Asset & Configuration Management",
    desc: "Unified lifecycle management for hardware, software, and consumables\u2014ensuring complete visibility, compliance, and cost control across all IT assets.",
    icon: Package,
  },
  {
    name: "MSP Edition",
    desc: "Purpose-built for managed service providers with secure multi-tenancy, client isolation, custom branding, and centralized service delivery.",
    icon: Users,
  },
  {
    name: "Agentic AI & Orchestration",
    desc: "AI-powered classification, routing, and workflow automation that accelerates operations and eliminates manual effort across service processes.",
    icon: BrainCircuit,
  },
  {
    name: "Patch & Deployment Management",
    desc: "Automated patch discovery, approval, and deployment across endpoints and servers to maintain security, compliance, and system stability.",
    icon: ShieldCheck,
  },
];

type Product = "observeops" | "serviceops";

const products: Record<Product, { label: string; icon: React.ElementType; title: string; desc: string; features: typeof observeFeatures }> = {
  observeops: {
    label: "ObserveOps",
    icon: Activity,
    title: "Unified Observability Platform",
    desc: "No silos, no noise — ObserveOps unites every signal, every metric, every log, every trace into harmony at scale.",
    features: observeFeatures,
  },
  serviceops: {
    label: "ServiceOps",
    icon: Headset,
    title: "Unified IT Service Management Platform",
    desc: "From incidents to insights, from requests to resolution — ServiceOps makes service flow with ease.",
    features: serviceFeatures,
  },
};

export function ObserveOpsSection() {
  const [active, setActive] = useState<Product>("observeops");
  const current = products[active];

  return (
    <section id="platform" className="relative z-10 bg-white">
      <FloatingDiamond
        className="absolute left-[8%] top-20 opacity-40"
        size={32}
      />
      <FloatingSquare
        className="absolute right-[5%] top-28 opacity-30"
        size={20}
        rotate={45}
      />
      <FloatingDots className="absolute left-[12%] bottom-20 opacity-40" />

      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {/* ── Product Tabs ── */}
        <div className="mx-auto flex max-w-md items-center justify-center gap-3">
          {(Object.keys(products) as Product[]).map((key) => {
            const p = products[key];
            const isActive = active === key;
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`group flex items-center gap-2.5 rounded-full border px-6 py-3 text-label-md transition-all duration-300 ${
                  isActive
                    ? "border-primary bg-primary text-white shadow-lg shadow-primary/20"
                    : "border-border bg-white text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {React.createElement(p.icon, { className: `h-4 w-4 ${isActive ? "text-white" : "text-muted-foreground group-hover:text-primary"}` })}
                {p.label}
              </button>
            );
          })}
        </div>

        {/* ── Header ── */}
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-overline text-primary">
            {current.label}
          </p>
          <h2 className="mt-3 text-display-md">
            {current.title}
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            {current.desc}
          </p>
        </div>

        {/* ── Feature Grid ── */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {current.features.map((f) => (
            <a
              key={f.name}
              href="#"
              className="feature-cell group relative flex flex-col overflow-hidden bg-white p-7"
            >
              <DottedGlowBackground
                className="opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                gap={14}
                radius={1.2}
                opacity={0.4}
              />
              <div className="relative z-10">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border bg-muted/40">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-lg font-semibold transition-colors group-hover:text-primary">
                  {f.name}
                </p>
                <p className="mt-1.5 flex-1 text-body-xs text-muted-foreground">
                  {f.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-caption text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ChevronRight className="h-3 w-3" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* ── Explore CTA ── */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-label-md text-primary hover:underline"
          >
            Explore {current.label} <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

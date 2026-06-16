"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye, Wrench } from "lucide-react";

/* ── Data types ── */
interface UseCaseCard {
  name: string;
  comingSoon?: boolean;
  hasExplore?: boolean;
  desc: string;
  category: string;
}

/* ── ObserveOps Data ── */
const observeOpsCategories = [
  "All",
  "Infrastructure",
  "AIOps",
  "Network",
  "Application",
  "Logging",
  "Compliance",
  "Automation",
  "Security",
  "Unified",
];

const observeOpsCards: UseCaseCard[] = [
  {
    name: "Hybrid Infrastructure Visibility",
    desc: "Gain unified visibility across cloud, on-prem, and virtual environments; ensure uptime and SLA compliance.",
    category: "Infrastructure",
    hasExplore: true,
  },
  {
    name: "Proactive Incident Detection (AIOps)",
    desc: "Detect anomalies early, reduce alert noise, and automate triage with AI-powered correlation.",
    category: "AIOps",
    comingSoon: true,
  },
  {
    name: "Network Performance Optimization",
    desc: "Assure availability, optimize traffic, and trace packet-to-path issues for fast remediation.",
    category: "Network",
    comingSoon: true,
  },
  {
    name: "Application & User Experience Monitoring",
    desc: "Track performance across services, APIs, and end-user sessions to ensure digital experience.",
    category: "Application",
    comingSoon: true,
  },
  {
    name: "Log Intelligence & Root Cause Analysis",
    desc: "Correlate logs with metrics and traces to pinpoint failures instantly.",
    category: "Logging",
    comingSoon: true,
  },
  {
    name: "Configuration & Compliance Management",
    desc: "Prevent drift, automate audits, and maintain CIS/NIST-aligned compliance across devices.",
    category: "Compliance",
    comingSoon: true,
  },
  {
    name: "Predictive Analytics & Capacity Planning",
    desc: "Forecast resource needs and prevent outages through trend and anomaly analytics.",
    category: "AIOps",
    comingSoon: true,
  },
  {
    name: "Automation & Self-Healing Operations",
    desc: "Automate recurring tasks and enable self-remediation for predictable uptime.",
    category: "Automation",
    comingSoon: true,
  },
  {
    name: "IT & Network Security Monitoring",
    desc: "Detect unusual behaviors and configuration deviations that indicate threats.",
    category: "Security",
    comingSoon: true,
  },
  {
    name: "Unified Service & Monitoring Workflow",
    desc: "Integrate Observability alerts with ITSM workflows for closed-loop resolution.",
    category: "Unified",
    comingSoon: true,
  },
];

/* ── ServiceOps Data ── */
const serviceOpsCategories = [
  "All",
  "Service Desk",
  "Incident",
  "Change",
  "Asset",
  "Patch",
  "SLA",
  "CMDB",
  "Knowledge",
  "Request",
  "Integration",
];

const serviceOpsCards: UseCaseCard[] = [
  {
    name: "Intelligent Service Desk & Self-Service",
    desc: "AI chatbot-driven support with unified multichannel ticketing and knowledge base.",
    category: "Service Desk",
    hasExplore: true,
  },
  {
    name: "Automated Incident & Problem Management",
    desc: "Auto-detect incidents, trigger workflows, and track root causes with AI correlation.",
    category: "Incident",
    comingSoon: true,
  },
  {
    name: "Change & Release Orchestration",
    desc: "Govern changes, approvals, rollbacks, and release pipelines with audit trails.",
    category: "Change",
    comingSoon: true,
  },
  {
    name: "IT Asset & License Management",
    desc: "Track hardware, software, contracts, and compliance across the IT lifecycle.",
    category: "Asset",
    comingSoon: true,
  },
  {
    name: "Patch & Vulnerability Management",
    desc: "Automate patch deployment, scan for vulnerabilities, and ensure compliance.",
    category: "Patch",
    comingSoon: true,
  },
  {
    name: "SLA & Performance Tracking",
    desc: "Monitor SLA adherence, escalate breaches, and report on service performance.",
    category: "SLA",
    comingSoon: true,
  },
  {
    name: "CMDB & Dependency Mapping",
    desc: "Maintain a living CMDB with auto-discovery and dependency visualization.",
    category: "CMDB",
    comingSoon: true,
  },
  {
    name: "Knowledge Management & AI Suggestions",
    desc: "Capture resolutions, auto-tag, and suggest articles to agents and users.",
    category: "Knowledge",
    comingSoon: true,
  },
  {
    name: "Request Fulfillment & Catalog",
    desc: "Streamline service requests with approval workflows and service catalog.",
    category: "Request",
    comingSoon: true,
  },
  {
    name: "Integrated Service Ops with Observability",
    desc: "Bridge monitoring alerts with ITSM workflows for unified incident resolution.",
    category: "Integration",
  },
];

/* ── Card Component ── */
function Card({ card, index }: { card: UseCaseCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative flex flex-col rounded-lg border border-border/60 bg-white p-6 transition-colors hover:border-primary/40"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold">{card.name}</h3>
        {card.comingSoon && (
          <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
            Coming Soon
          </span>
        )}
      </div>
      <p className="text-body-xs text-muted-foreground mb-4 flex-1">
        {card.desc}
      </p>
      {card.hasExplore ? (
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-label-md text-primary"
        >
          Explore Solution <ArrowRight className="h-3.5 w-3.5" />
        </a>
      ) : (
        <span className="inline-flex items-center gap-1.5 text-label-md text-primary opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
          Learn more <ArrowRight className="h-3.5 w-3.5" />
        </span>
      )}
    </motion.div>
  );
}

export function UseCaseListing() {
  const [product, setProduct] = useState<"observeops" | "serviceops">("observeops");
  const [filter, setFilter] = useState("All");

  const categories = product === "observeops" ? observeOpsCategories : serviceOpsCategories;
  const cards = product === "observeops" ? observeOpsCards : serviceOpsCards;
  const filtered = filter === "All" ? cards : cards.filter((c) => c.category === filter);

  const handleProductSwitch = (p: "observeops" | "serviceops") => {
    setProduct(p);
    setFilter("All");
  };

  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {/* Product Switch */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center rounded-lg border border-border/60 p-1 bg-white">
            {([
              { key: "observeops" as const, label: "ObserveOps", icon: Eye },
              { key: "serviceops" as const, label: "ServiceOps", icon: Wrench },
            ]).map((opt) => {
              const OptIcon = opt.icon;
              return (
                <button
                  key={opt.key}
                  onClick={() => handleProductSwitch(opt.key)}
                  className={`flex items-center gap-2 rounded-md px-5 py-2.5 text-label-md transition-all ${
                    product === opt.key
                      ? "bg-white text-foreground shadow-md ring-1 ring-primary/40"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <OptIcon className={`h-4 w-4 ${product === opt.key ? "text-primary" : ""}`} />
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex gap-2 justify-center flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-label-md transition-all ${
                filter === cat
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/30 ring-1 ring-border/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${product}-${filter}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((card, i) => (
                <Card key={card.name} card={card} index={i} />
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-12">
                No use cases found for this category.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye, Wrench } from "lucide-react";

/* ── Data types ── */
interface TechCard {
  name: string;
  comingSoon?: boolean;
  desc: string;
  tags: string[];
  category: string;
}

/* ── ObserveOps Data ── */
const observeOpsCategories = ["All", "Observability", "Cloud Native", "Cloud Platforms", "Network", "Logging"];

const observeOpsCards: TechCard[] = [
  {
    name: "OpenTelemetry",
    comingSoon: true,
    desc: "Native integration for unified metrics, logs, and traces across hybrid environments",
    tags: ["Unified telemetry", "Distributed tracing", "Metrics collection", "Log correlation"],
    category: "Observability",
  },
  {
    name: "Prometheus",
    desc: "Time-series metrics collection and monitoring for cloud-native infrastructure",
    tags: ["Time-series data", "Pull-based metrics", "PromQL queries", "Alert manager"],
    category: "Cloud Native",
  },
  {
    name: "Kubernetes",
    desc: "Container orchestration monitoring with full cluster visibility and insights",
    tags: ["Cluster monitoring", "Pod health", "Resource tracking", "Auto-scaling"],
    category: "Cloud Native",
  },
  {
    name: "AWS",
    desc: "Comprehensive monitoring for Amazon Web Services infrastructure and applications",
    tags: ["EC2 monitoring", "CloudWatch integration", "Lambda tracking", "S3 analytics"],
    category: "Cloud Platforms",
  },
  {
    name: "Microsoft Azure",
    desc: "End-to-end visibility for Azure cloud services and hybrid deployments",
    tags: ["VM monitoring", "App Services", "Azure Monitor", "Hybrid cloud"],
    category: "Cloud Platforms",
  },
  {
    name: "SNMP",
    desc: "Industry-standard network device monitoring and management protocol",
    tags: ["Device monitoring", "SNMP v1/v2c/v3", "MIB support", "Trap handling"],
    category: "Network",
  },
  {
    name: "NetFlow / sFlow",
    desc: "Network traffic analysis and bandwidth monitoring for performance optimization",
    tags: ["Traffic analysis", "Bandwidth tracking", "Flow collection", "Top talkers"],
    category: "Network",
  },
  {
    name: "Syslog",
    desc: "Centralized log collection and analysis from network devices and servers",
    tags: ["Centralized logs", "Real-time collection", "Log parsing", "Alert rules"],
    category: "Logging",
  },
];

/* ── ServiceOps Data ── */
const serviceOpsCategories = ["All", "Asset Management", "Automation", "AI & Automation", "Knowledge", "Self-Service", "Integration", "Service Management"];

const serviceOpsCards: TechCard[] = [
  {
    name: "CMDB",
    desc: "Comprehensive configuration management database for complete asset tracking and relationship mapping",
    tags: ["Asset discovery", "Dependency mapping", "Change tracking", "Impact analysis"],
    category: "Asset Management",
  },
  {
    name: "Workflow Automation",
    desc: "Intelligent workflow orchestration for streamlined IT service delivery and operations",
    tags: ["Process automation", "Approval flows", "SLA management", "Task routing"],
    category: "Automation",
  },
  {
    name: "AI Chatbot",
    comingSoon: true,
    desc: "Advanced AI-powered virtual agent for intelligent self-service and instant support",
    tags: ["Natural language", "Intent recognition", "Auto-resolution", "24/7 support"],
    category: "AI & Automation",
  },
  {
    name: "Knowledge Management",
    desc: "Centralized knowledge base with AI-powered search and content recommendations",
    tags: ["Smart search", "Version control", "Content analytics", "Auto-tagging"],
    category: "Knowledge",
  },
  {
    name: "Self-Service Portal",
    desc: "Modern employee portal with intelligent service catalog and request management",
    tags: ["Service catalog", "Request tracking", "Knowledge access", "Custom forms"],
    category: "Self-Service",
  },
  {
    name: "ITSM Integration Hub",
    desc: "Seamless integration framework connecting all your IT service management tools",
    tags: ["API connectors", "Data sync", "Bidirectional flow", "Custom mappings"],
    category: "Integration",
  },
  {
    name: "Auto-Remediation",
    desc: "Intelligent automation engine for proactive issue detection and automated resolution",
    tags: ["Pattern detection", "Auto-fix scripts", "Root cause analysis", "Remediation logs"],
    category: "Automation",
  },
  {
    name: "Service Catalog",
    desc: "Comprehensive catalog of IT services with automated provisioning and lifecycle management",
    tags: ["Service templates", "Auto-provisioning", "Cost tracking", "Approval workflows"],
    category: "Service Management",
  },
];

/* ── Card Component ── */
function Card({ card, index }: { card: TechCard; index: number }) {
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
      <div className="flex flex-wrap gap-2 mb-4">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-foreground/[0.04] px-2.5 py-1 text-[11px] font-medium text-foreground/60"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="inline-flex items-center gap-1.5 text-label-md text-primary opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
        Learn more <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </motion.div>
  );
}

export function TechListing() {
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
                No technologies found for this category.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Server, AppWindow, Network, GitBranch, Package, Database,
  Cloud, Mail, Layers, Cpu, Activity, LayoutGrid,
  LifeBuoy, ClipboardList, Archive, BookOpen, LayoutList,
  Headphones, FileText, Lock, KeyRound, Users, Headset,
} from "lucide-react";

const observeOpsCategories = [
  { id: "servers",      icon: Server,      name: "Servers",                           count: 10 },
  { id: "applications", icon: AppWindow,   name: "Applications",                      count: 15 },
  { id: "network",      icon: Network,     name: "Network",                           count: 14 },
  { id: "sdn",          icon: GitBranch,   name: "Software Defined Network (SDN)",    count: 10 },
  { id: "container",    icon: Package,     name: "Container Orchestration",           count: 12 },
  { id: "storage",      icon: Database,    name: "Storage",                           count: 12 },
  { id: "cloud-aws",    icon: Cloud,       name: "Cloud (AWS)",                       count: 15 },
  { id: "cloud-azure",  icon: Cloud,       name: "Cloud (Azure)",                     count: 13 },
  { id: "cloud-o365",   icon: Mail,        name: "Cloud (O365)",                      count:  9 },
  { id: "virt",         icon: Layers,      name: "Virtualization",                    count: 11 },
  { id: "hci",          icon: Cpu,         name: "Hyper-Converged Infrastructure",    count:  9 },
  { id: "service-chk",  icon: Activity,    name: "Service Check",                     count: 13 },
  { id: "other",        icon: LayoutGrid,  name: "Other",                             count: 12 },
];

const serviceOpsCategories = [
  { id: "itsm",         icon: LifeBuoy,    name: "ITSM Platforms",       count: 15 },
  { id: "ticketing",    icon: ClipboardList,name: "Ticketing Systems",    count: 12 },
  { id: "asset",        icon: Archive,     name: "Asset Management",     count: 10 },
  { id: "knowledge",    icon: BookOpen,    name: "Knowledge Management", count:  8 },
  { id: "catalog",      icon: LayoutList,  name: "Service Catalog",      count:  7 },
  { id: "remote",       icon: Headphones,  name: "Remote Support",       count:  9 },
  { id: "docs",         icon: FileText,    name: "IT Documentation",     count:  8 },
  { id: "password",     icon: Lock,        name: "Password Management",  count:  6 },
  { id: "license",      icon: KeyRound,    name: "License Management",   count:  7 },
  { id: "collab",       icon: Users,       name: "Collaboration Tools",  count:  8 },
  { id: "other",        icon: LayoutGrid,  name: "Other",                count: 23 },
];

const products = [
  { id: "observeops", label: "ObserveOps", icon: Activity,  categories: observeOpsCategories },
  { id: "serviceops", label: "ServiceOps", icon: Headset,   categories: serviceOpsCategories },
];

export function IntCategories() {
  const [activeProduct, setActiveProduct] = useState("observeops");
  const active = products.find((p) => p.id === activeProduct)!;

  return (
    <section className="relative z-10 py-16 pb-24">
      <div className="mx-auto w-full max-w-7xl px-6">

        {/* ── Product switcher ── */}
        <div className="flex justify-center pb-12">
          <div className="mx-auto inline-flex items-center rounded-lg border border-border/60 bg-white p-1">
            {products.map((p) => {
              const isActive = activeProduct === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveProduct(p.id)}
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

        {/* ── Category grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {active.categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.id}
                  href={`/resources/integrations/${activeProduct}#int-section-${cat.id}`}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                    <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-label-md leading-snug">{cat.name}</h3>
                    <p className="mt-0.5 text-caption text-muted-foreground">{cat.count} integrations</p>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

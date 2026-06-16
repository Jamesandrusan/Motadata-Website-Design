"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { type DemoProduct } from "./ld-data";
import { type DemoUser } from "./ld-email-gate";
import {
  NetworkDashboard,
  ComplianceDashboard,
  InfraDashboard,
  LogDashboard,
  APMDashboard,
  RUMDashboard,
  IncidentDashboard,
  ChangeDashboard,
  AssetDashboard,
  RequestDashboard,
  AIDashboard,
  KnowledgeDashboard,
} from "@/components/product-scroll-section";

const dashboardMap: Record<string, React.ComponentType> = {
  network: NetworkDashboard,
  compliance: ComplianceDashboard,
  infra: InfraDashboard,
  logs: LogDashboard,
  apm: APMDashboard,
  rum: RUMDashboard,
  incidents: IncidentDashboard,
  changes: ChangeDashboard,
  assets: AssetDashboard,
  requests: RequestDashboard,
  ai: AIDashboard,
  knowledge: KnowledgeDashboard,
};

interface LdDemoEnvironmentProps {
  product: DemoProduct;
  user: DemoUser;
  onExit: () => void;
}

export function LdDemoEnvironment({ product, user, onExit }: LdDemoEnvironmentProps) {
  const [activeModuleId, setActiveModuleId] = useState(product.modules[0].id);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const activeModule = product.modules.find((m) => m.id === activeModuleId) ?? product.modules[0];
  const DashboardComponent = dashboardMap[activeModule.dashboardKey];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex flex-col bg-[#f8f9fb]"
    >
      {/* ── Top Bar ── */}
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-border/60 bg-white px-5">
        <div className="flex items-center gap-4">
          <BrandLogo className="h-5" />
          <div className="h-5 w-px bg-border/60" />
          <div className="flex items-center gap-2">
            <product.icon className="h-4 w-4 text-primary" />
            <span className="text-label-md text-foreground">{product.label}</span>
          </div>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
            DEMO
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden text-body-xs text-muted-foreground sm:block">
            {user.name} &middot; {user.company}
          </span>
          <button
            onClick={onExit}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-white px-3 py-1.5 text-label-md text-foreground transition-colors hover:bg-muted/30"
          >
            <X className="h-3.5 w-3.5" />
            Exit Demo
          </button>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden w-60 shrink-0 flex-col border-r border-border/60 bg-white md:flex">
          <div className="px-4 pt-5 pb-3">
            <p className="text-overline-sm text-muted-foreground/60">
              Modules
            </p>
          </div>
          <nav className="flex-1 space-y-0.5 px-2 overflow-y-auto">
            {product.modules.map((mod) => {
              const isActive = mod.id === activeModuleId;
              const Icon = mod.icon;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModuleId(mod.id)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-label-md transition-all ${
                    isActive
                      ? "bg-primary/5 text-foreground"
                      : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 ${isActive ? "text-primary" : ""}`}
                  />
                  <span className="leading-snug">{mod.name}</span>
                  {isActive && (
                    <ChevronRight className="ml-auto h-3.5 w-3.5 text-primary" />
                  )}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {/* Module Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-caption text-muted-foreground mb-1">
              <span>{product.label}</span>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground font-medium">{activeModule.name}</span>
            </div>
            <h2 className="text-heading-md">{activeModule.name}</h2>
            <p className="mt-1 text-body-xs text-muted-foreground">{activeModule.desc}</p>
          </div>

          {/* Dashboard Visual */}
          <div className="rounded-xl border border-border/60 bg-white shadow-sm overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModuleId}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {DashboardComponent ? <DashboardComponent /> : null}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Hint bar */}
          <div className="mt-6 rounded-lg border border-border/40 bg-muted/20 px-5 py-3">
            <p className="text-caption text-muted-foreground text-center">
              This is a demo environment with sample data. Use the sidebar to explore different modules.
            </p>
          </div>
        </main>
      </div>
    </motion.div>
  );
}

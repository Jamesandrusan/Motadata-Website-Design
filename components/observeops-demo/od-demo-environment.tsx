"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Activity } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { odModules } from "./od-data";
import { OdGuidedTour, shouldShowTour } from "./od-guided-tour";
import {
  NetworkDashboard,
  ComplianceDashboard,
  InfraDashboard,
  LogDashboard,
  APMDashboard,
  RUMDashboard,
} from "@/components/product-scroll-section";

const dashboardMap: Record<string, React.ComponentType> = {
  network: NetworkDashboard,
  compliance: ComplianceDashboard,
  infra: InfraDashboard,
  logs: LogDashboard,
  apm: APMDashboard,
  rum: RUMDashboard,
};

interface OdDemoEnvironmentProps {
  email: string;
  onExit: () => void;
}

export function OdDemoEnvironment({ email, onExit }: OdDemoEnvironmentProps) {
  const [activeModuleId, setActiveModuleId] = useState(odModules[0].id);
  const [showTour, setShowTour] = useState(false);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Check if tour should show
  useEffect(() => {
    setShowTour(shouldShowTour());
  }, []);

  const activeModule = odModules.find((m) => m.id === activeModuleId) ?? odModules[0];
  const DashboardComponent = dashboardMap[activeModule.dashboardKey];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex flex-col overflow-hidden bg-[#f8f9fb]"
    >
      {/* Top Bar */}
      <div
        data-tour="top-bar"
        className="shrink-0 border-b border-border/60 bg-white"
      >
        <div className="mx-auto flex h-14 w-full items-center justify-between px-5">
          <div className="flex min-w-0 items-center gap-4">
            <BrandLogo className="h-5 shrink-0" />
            <div className="hidden h-5 w-px bg-border/60 sm:block" />
            <div className="hidden items-center gap-2 sm:flex">
              <Activity className="h-4 w-4 text-primary" />
              <span className="text-label-md text-foreground">ObserveOps</span>
            </div>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
              DEMO
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-4">
            <span className="hidden text-body-xs text-muted-foreground lg:block">
              {email}
            </span>
            <button
              data-tour="exit-demo"
              onClick={onExit}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-white px-3 py-1.5 text-label-md text-foreground transition-colors hover:bg-muted/30"
            >
              <X className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Exit Demo</span>
              <span className="sm:hidden">Exit</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Module Tabs */}
      <div className="flex shrink-0 gap-1 overflow-x-auto border-b border-border/60 bg-white px-4 py-2 md:hidden">
        {odModules.map((mod) => {
          const isActive = mod.id === activeModuleId;
          const Icon = mod.icon;
          return (
            <button
              key={mod.id}
              onClick={() => setActiveModuleId(mod.id)}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-caption whitespace-nowrap transition-all ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted/30"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {mod.name.split(" ")[0]}
            </button>
          );
        })}
      </div>

      {/* Body */}
      <div className="flex min-h-0 flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          data-tour="sidebar"
          className="hidden w-60 shrink-0 flex-col border-r border-border/60 bg-white md:flex"
        >
          <div className="px-4 pt-5 pb-3">
            <p className="text-overline-sm text-muted-foreground/60">
              Modules
            </p>
          </div>
          <nav className="flex-1 space-y-0.5 overflow-y-auto px-2">
            {odModules.map((mod) => {
              const isActive = mod.id === activeModuleId;
              const Icon = mod.icon;
              return (
                <button
                  key={mod.id}
                  data-tour={`module-${mod.id}`}
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
        <main data-tour="dashboard-area" className="min-w-0 flex-1 overflow-y-auto overflow-x-hidden p-6 lg:p-8">
          <div className="mx-auto w-full max-w-7xl">
            {/* Module Header */}
            <div className="mb-6">
              <div className="mb-1 flex items-center gap-2 text-caption text-muted-foreground">
                <span>ObserveOps</span>
                <ChevronRight className="h-3 w-3" />
                <span className="font-medium text-foreground">{activeModule.name}</span>
              </div>
              <h2 className="text-heading-md">{activeModule.name}</h2>
              <p className="mt-1 text-body-xs text-muted-foreground">{activeModule.desc}</p>
            </div>

            {/* Dashboard Visual */}
            <div className="overflow-hidden rounded-xl border border-border/60 bg-white shadow-sm">
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
              <p className="text-center text-caption text-muted-foreground">
                This is a demo environment with sample data. Use the sidebar to explore different modules.
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Guided Tour Overlay */}
      {showTour && (
        <OdGuidedTour onComplete={() => setShowTour(false)} />
      )}
    </motion.div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { CapabilitiesData } from "./types";

interface TabItem {
  icon: LucideIcon;
  label: string;
  title: string;
  desc: string;
  visual: React.ReactNode;
}

function ScrollItem({ tab, index, onInView }: { tab: TabItem; index: number; onInView: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });
  const Icon = tab.icon;

  useEffect(() => {
    if (isInView) onInView(index);
  }, [isInView, index, onInView]);

  return (
    <div ref={ref} className={`py-10 transition-opacity duration-300 ${isInView ? "opacity-100" : "opacity-30"}`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 mb-4">
        <Icon className={`h-5 w-5 transition-colors ${isInView ? "text-primary" : "text-foreground/50"}`} />
      </div>
      <h3 className="text-heading-md mb-3">{tab.title}</h3>
      <p className="text-body-sm text-muted-foreground">{tab.desc}</p>
    </div>
  );
}

export function PTCapabilitiesTabs({ data }: { data: CapabilitiesData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [scrollActive, setScrollActive] = useState(0);
  const [option, setOption] = useState(1);

  const tabs = data.tabs;

  useEffect(() => {
    if (option !== 1 || paused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, option, tabs.length]);

  const selectTab = (i: number) => {
    setActiveIndex(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 10000);
  };

  const active = tabs[activeIndex];

  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center rounded-full border border-border/40 p-0.5 bg-muted/20">
            {[1, 2].map((num) => (
              <button key={num} onClick={() => setOption(num)} className={`flex items-center justify-center rounded-full h-5 w-5 text-[10px] font-medium transition-all ${option === num ? "bg-white text-foreground shadow-sm" : "text-muted-foreground/60 hover:text-foreground"}`}>
                {num}
              </button>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-overline text-primary">{data.label}</p>
          <h2 className="mt-3 text-display-md">{data.title}</h2>
          <p className="mt-4 text-body-md text-muted-foreground">{data.subtitle}</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {option === 1 ? (
            <motion.div key="option1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
              <div className="flex gap-2 justify-center flex-wrap mb-10">
                {tabs.map((tab, i) => {
                  const Icon = tab.icon;
                  const isActive = i === activeIndex;
                  return (
                    <button key={tab.label} onClick={() => selectTab(i)} className={`group flex shrink-0 items-center gap-2 rounded-lg px-5 py-2.5 text-label-md transition-all duration-200 ${isActive ? "text-foreground bg-neutral-100 ring-1 ring-primary/40" : "text-muted-foreground hover:text-foreground hover:bg-neutral-100 ring-1 ring-border/40"}`}>
                      <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`} />
                      <span className="whitespace-nowrap">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
              <div className="rounded-2xl border border-border/60 overflow-hidden">
                <div className="grid lg:grid-cols-2 min-h-[400px]">
                  <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                    <AnimatePresence mode="wait">
                      <motion.div key={activeIndex} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
                          <active.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-heading-md mb-4">{active.title}</h3>
                        <p className="text-body-sm text-muted-foreground">{active.desc}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="relative bg-neutral-100 p-6 lg:p-8 flex items-center">
                    <div className="w-full rounded-lg border border-border bg-neutral-50 p-6 shadow-sm" style={{ aspectRatio: "4/3" }}>
                      <AnimatePresence mode="wait">
                        <motion.div key={activeIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="flex flex-col justify-between h-full">
                          {active.visual}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div key="option2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="divide-y divide-border/40">
                  {tabs.map((tab, i) => (
                    <ScrollItem key={tab.label} tab={tab} index={i} onInView={setScrollActive} />
                  ))}
                </div>
                <div className="hidden lg:block">
                  <div className="sticky top-32">
                    <div className="relative">
                      <div className="absolute -left-6 -bottom-6 w-full h-full rounded-lg bg-primary/15 overflow-hidden">
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                          <defs>
                            <pattern id="diag-lines-pt" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                              <line x1="0" y1="0" x2="0" y2="12" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.15" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#diag-lines-pt)" />
                        </svg>
                      </div>
                      <div className="relative rounded-lg border border-border bg-neutral-50 p-6 shadow-sm" style={{ aspectRatio: "4/3" }}>
                        <AnimatePresence mode="wait">
                          <motion.div key={scrollActive} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="flex flex-col justify-between h-full">
                            {tabs[scrollActive].visual}
                          </motion.div>
                        </AnimatePresence>
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

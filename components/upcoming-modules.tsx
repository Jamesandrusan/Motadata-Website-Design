"use client";

import React from "react";
import { Sparkles, Cloud, Layers, ArrowRight, ChevronRight } from "lucide-react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

const features = [
  {
    icon: Sparkles,
    label: "Agentic AI",
    desc: "AI agents monitor system behavior, process signals, and handle actions across workflows so issues are addressed before operational disruption.",
  },
  {
    icon: Cloud,
    label: "Cloud-Native Architecture",
    desc: "Built for cloud environments with scalable deployment, controlled maintenance, and enterprise-grade security across infrastructure.",
  },
  {
    icon: Layers,
    label: "Unified Experience",
    desc: "Observability and IT service management operate within one platform, one interface, and one operational view across teams and systems.",
  },
];

export function UpcomingModules() {
  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-label-sm text-primary">
            Coming Soon
          </span>
          <h2 className="mt-5 text-display-md">
            The Future of IT Operations
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Intelligent. Immersive. Autonomous.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-[16px] font-medium leading-[26px] text-[#6B7280]" style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}>
            Imagine IT that thinks, acts, and evolves with your environment. A single platform brings observability and service management together, powered by Agentic AI for coordinated operations across systems.
          </p>
        </div>

        {/* Connected bento-style cards — no gap, shared borders */}
        <div className="mt-16 overflow-hidden rounded-2xl border bg-border">
          <div className="grid gap-px md:grid-cols-3">
            {features.map((item, i) => (
              <div
                key={item.label}
                className="feature-cell group relative flex flex-col overflow-hidden bg-white p-8"
              >
                <DottedGlowBackground
                  className="opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                  gap={14}
                  radius={1.2}
                  opacity={0.4}
                />
                <div className="relative z-10">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border bg-muted/40">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>

                  <p className="text-lg font-semibold">
                    {item.label}
                  </p>
                  <p className="mt-2 text-[14px] font-medium leading-[22.75px] text-[#6B7280]" style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}>
                    {item.desc}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

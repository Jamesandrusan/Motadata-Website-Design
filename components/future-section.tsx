"use client";

import React from "react";
import { Sparkles, Cloud, Layers, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    label: "Agentic AI",
    desc: "AI agents that think, learn, and act autonomously to prevent issues before they impact your business.",
  },
  {
    icon: Cloud,
    label: "Cloud-Native",
    desc: "Built for the cloud era with infinite scalability, zero maintenance, and enterprise-grade security.",
  },
  {
    icon: Layers,
    label: "Unified Experience",
    desc: "One platform, one interface, one source of truth for all your IT operations and service management.",
  },
];

export function FutureSection() {
  return (
    <section id="future" className="relative z-10 bg-white">
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
          <p className="mx-auto mt-4 max-w-lg text-body-xs text-muted-foreground">
            Imagine IT that thinks, acts, and evolves with you — powered by
            Agentic AI, our next-gen platform unifies observability and service
            management in perfect harmony.
          </p>
        </div>

        <div className="mt-16 grid w-full gap-6 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.label}
              className="hover-lift flex flex-col items-center rounded-2xl border bg-white p-7 text-center shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="mt-4 text-label-lg">{item.label}</p>
              <p className="mt-2 text-body-xs text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-label-md text-primary hover:underline"
          >
            Explore the Future <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

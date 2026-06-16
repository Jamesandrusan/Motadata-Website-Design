"use client";

import { motion } from "framer-motion";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { Eye, BrainCircuit, Cloud, TrendingDown, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: Eye,
    title: "Visibility Across the Stack",
    desc: "Unified observability of logs, metrics, and events across all cloud resources and services.",
  },
  {
    icon: BrainCircuit,
    title: "Anomaly Detection & AI Alerts",
    desc: "AI-powered detection of unusual patterns with intelligent alerting and predictive insights.",
  },
  {
    icon: Cloud,
    title: "Hybrid & Multi-Cloud Support",
    desc: "Seamless monitoring across AWS, Azure, GCP, and on-premise infrastructure.",
  },
  {
    icon: TrendingDown,
    title: "Optimize Cost & Resource Usage",
    desc: "Identify underutilized resources and eliminate cloud waste to reduce operational costs.",
  },
];

export function CMWhyMatters() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-14"
        >
          <p className="text-overline text-primary">
            Why It Matters
          </p>
          <h2 className="mt-3 text-display-md">
            Why Cloud Monitoring Matters
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Prevent downtime, improve performance, and reduce cloud waste with
            intelligent monitoring
          </p>
        </motion.div>

        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid md:grid-cols-2">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              const isNotFirstCol = i % 2 !== 0;
              const isBottomRow = i >= 2;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`group relative overflow-hidden p-6 lg:p-8 transition-colors hover:bg-neutral-50 ${
                    !isBottomRow ? "border-b border-border/40" : ""
                  } ${isNotFirstCol ? "md:border-l border-border/40" : ""}`}
                >
                  <DottedGlowBackground
                    className="opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                    gap={14}
                    radius={1.2}
                    opacity={0.4}
                  />
                  <div className="relative z-10">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                      <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-body-xs text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

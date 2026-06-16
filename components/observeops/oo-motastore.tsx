"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import {
  Zap,
  Layers,
  BrainCircuit,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Extreme Performance",
    desc: "Ingest millions of events per second with consistent sub-second query latency.",
  },
  {
    icon: Layers,
    title: "Unified Data Fabric",
    desc: "Seamlessly connect metrics, logs, and traces for context-rich analysis.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Native Architecture",
    desc: "Enables predictive modeling, anomaly detection, and autonomous remediation.",
  },
  {
    icon: ShieldCheck,
    title: "Optimized for Security and Retention",
    desc: "Maintain data integrity across compliance frameworks and retention policies.",
  },
];

export function OOMotastore() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid lg:grid-cols-2">
            {/* Left — heading, subtitle, stats, CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center p-8 lg:p-12"
            >
              <p className="text-overline text-primary">
                Motastore
              </p>
              <h2 className="mt-3 text-display-md">
                Where Data Meets Determinism.
              </h2>
              <p className="mt-4 text-body-md text-muted-foreground">
                At the core of ObserveOps is Motastore — a high-throughput,
                AI-ready datastore built to sustain modern observability
                workloads.
              </p>

              {/* Stats */}
              <div className="flex gap-10 mt-8">
                <div>
                  <p className="text-heading-xl">M+</p>
                  <p className="mt-1 text-body-xs text-muted-foreground">Events/Second</p>
                </div>
                <div>
                  <p className="text-heading-xl">&lt;1s</p>
                  <p className="mt-1 text-body-xs text-muted-foreground">Query Latency</p>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  variant="ghost"
                  className="h-12 px-0 text-[15px] text-foreground hover:text-primary hover:bg-transparent"
                >
                  Learn More{" "}
                  <ArrowRight className="ml-1 h-4 w-4 text-primary" />
                </Button>
              </div>
            </motion.div>

            {/* Right — 4 features */}
            <div className="border-t lg:border-t-0 lg:border-l border-border/40">
              {features.map((item, i) => {
                const Icon = item.icon;
                const isLast = i === features.length - 1;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className={`group flex items-start gap-4 px-6 py-6 lg:px-8 lg:py-8 transition-all hover:bg-neutral-100 ${!isLast ? "border-b border-border/40" : ""}`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/60 transition-colors group-hover:border-primary/30 group-hover:bg-primary/10 mt-0.5">
                      <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-1 text-body-xs text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom tagline — same style as features grid bottom line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="group relative overflow-hidden rounded-2xl border border-border/60 mt-6 px-6 py-8 lg:py-10 text-center bg-neutral-50"
        >
          <DottedGlowBackground
            className="opacity-0 transition-opacity duration-500 group-hover:opacity-60"
            gap={14}
            radius={1.2}
            opacity={0.4}
          />
          <p className="relative z-10 text-xl sm:text-2xl font-semibold text-foreground">
            Designed. Tested. Proven. Motastore powers enterprise intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

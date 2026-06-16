"use client";

import { motion } from "framer-motion";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { Eye, BrainCircuit, Database, Blocks, ShieldCheck, Scan, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: Eye,
    title: "Unified Observability",
    desc: "A single platform correlating metrics, logs, traces, and topology across hybrid and multi-cloud ecosystems.",
  },
  {
    icon: BrainCircuit,
    title: "AI at the Core",
    desc: "Automated anomaly detection, causal correlation, and predictive insights for faster decision-making.",
  },
  {
    icon: Database,
    title: "Motastore Engine",
    desc: "A home-engineered datastore architected for high-volume, low-latency performance.",
  },
  {
    icon: Blocks,
    title: "Modular Architecture",
    desc: "Deploy what you need, expand without disruption.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    desc: "Role-based control, compliance readiness, and full data sovereignty.",
  },
  {
    icon: Scan,
    title: "Absolute Insight",
    desc: "One Platform. All Signals. Complete visibility across your entire stack.",
  },
];

export function OOFeaturesGrid() {
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
            Core Platform
          </p>
          <h2 className="mt-3 text-display-md">
            Built for Command, Clarity, and Scale
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            A unified observability platform that transforms fragmented data into actionable intelligence — powered by AI at the core and secured for enterprise operations.
          </p>
        </motion.div>

        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid md:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              const isNotFirstCol = i % 3 !== 0;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`group p-6 lg:p-8 transition-colors hover:bg-neutral-50 border-b border-border/40 ${
                    isNotFirstCol ? "md:border-l border-border/40" : ""
                  }`}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                    <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-body-xs text-muted-foreground">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
          {/* Full-width bottom row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="group relative overflow-hidden px-6 py-8 lg:py-10 text-center bg-neutral-50"
          >
            <DottedGlowBackground
              className="opacity-0 transition-opacity duration-500 group-hover:opacity-60"
              gap={14}
              radius={1.2}
              opacity={0.4}
            />
            <p className="relative z-10 text-xl sm:text-2xl text-muted-foreground">
              One <span className="font-semibold text-foreground">Platform</span>. All <span className="font-semibold text-foreground">Signals</span>. Absolute <span className="font-semibold text-foreground">Insight</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

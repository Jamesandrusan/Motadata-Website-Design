"use client";

import { motion } from "framer-motion";
import {
  Zap,
  BellOff,
  TrendingUp,
  ShieldCheck,
  Layers,
  type LucideIcon,
} from "lucide-react";

const benefits: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Zap,
    title: "Faster Root Cause",
    desc: "Faster root cause identification across compute and virtualization layers",
  },
  {
    icon: BellOff,
    title: "Reduced Alert Noise",
    desc: "Reduced alert noise through contextual correlation",
  },
  {
    icon: TrendingUp,
    title: "Better Utilization",
    desc: "Improved infrastructure utilization and capacity planning",
  },
  {
    icon: ShieldCheck,
    title: "Higher SLA Adherence",
    desc: "Higher SLA adherence through service-aligned monitoring",
  },
  {
    icon: Layers,
    title: "Operational Consistency",
    desc: "Operational consistency across hybrid environments",
  },
];

export function UCVVisibilityControl() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid lg:grid-cols-[1fr,1.2fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center p-8 lg:p-12"
            >
              <p className="text-overline text-primary">
                From Visibility to Control
              </p>
              <h2 className="mt-3 text-display-md">
                From Visibility to Control
              </h2>
            </motion.div>

            <div className="border-t lg:border-t-0 lg:border-l border-border/40 divide-y divide-border/40">
              {benefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group flex items-start gap-4 px-6 py-5 lg:px-8 transition-colors hover:bg-neutral-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10 mt-0.5">
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
      </div>
    </section>
  );
}

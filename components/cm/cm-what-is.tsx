"use client";

import { motion } from "framer-motion";
import { Activity, Clock, BarChart3, type LucideIcon } from "lucide-react";

const checkItems: { label: string; icon: LucideIcon }[] = [
  { label: "Real-time performance tracking", icon: Activity },
  { label: "Uptime and availability monitoring", icon: Clock },
  { label: "Resource utilization analysis", icon: BarChart3 },
];

export function CMWhatIs() {
  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-overline text-primary">
              Overview
            </p>
            <h2 className="mt-3 text-display-md">
              What is Cloud Monitoring?
            </h2>
            <p className="mt-5 text-body-md text-muted-foreground">
              Cloud monitoring is the process of evaluating stability,
              performance, logs, and metrics of cloud infrastructure. It
              provides comprehensive observability across public, private, and
              hybrid cloud environments.
            </p>
            <p className="mt-4 text-body-md text-muted-foreground">
              By continuously analyzing cloud resources, workloads, and
              services, organizations gain real-time insights into utilization
              patterns, cost efficiency, and potential issues before they impact
              business operations.
            </p>
          </motion.div>

          {/* Right column */}
          <div className="space-y-4">
            {checkItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                  className="group flex items-center gap-4 rounded-xl border border-border/60 bg-white p-5 transition-colors hover:bg-neutral-50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                    <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                  </div>
                  <span className="text-body-md text-foreground">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

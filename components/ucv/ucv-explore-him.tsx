"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Database,
  Cloud,
  TrendingUp,
  BrainCircuit,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface ExploreItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
}

const exploreItems: ExploreItem[] = [
  {
    icon: Database,
    title: "Deep Application & Data Insight",
    desc: "Correlate application performance and database behavior with infrastructure signals for full-stack root cause clarity.",
    href: "/products/observeops/hybrid-infrastructure-monitoring/deep-application-insight",
  },
  {
    icon: Cloud,
    title: "Cloud-Native & Service Intelligence",
    desc: "Monitor cloud platforms, Kubernetes clusters, and critical services with unified visibility across environments.",
    href: "/products/observeops/hybrid-infrastructure-monitoring/cloud-native-intelligence",
  },
  {
    icon: TrendingUp,
    title: "Capacity Foresight & Resource Optimization",
    desc: "Predict utilization trends, prevent bottlenecks, and optimize infrastructure investments with AI-driven forecasting.",
    href: "/products/observeops/hybrid-infrastructure-monitoring/capacity-foresight",
  },
  {
    icon: BrainCircuit,
    title: "Autonomous Operations & Predictive Analytics",
    desc: "Detect, diagnose, and remediate issues automatically using AI-driven correlation and runbook automation.",
    href: "/products/observeops/hybrid-infrastructure-monitoring/autonomous-operations",
  },
];

export function UCVExploreHim() {
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
            Explore More
          </p>
          <h2 className="mt-3 text-display-md">
            Continue Exploring Hybrid Infrastructure Monitoring
          </h2>
        </motion.div>

        <div className="rounded-2xl border border-border/60 overflow-hidden divide-y divide-border/40 bg-white">
          {exploreItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  href={item.href}
                  className="group flex items-center gap-5 px-6 py-5 lg:px-8 transition-colors hover:bg-neutral-100"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                    <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-label-lg">{item.title}</h3>
                    <p className="mt-0.5 text-body-xs text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

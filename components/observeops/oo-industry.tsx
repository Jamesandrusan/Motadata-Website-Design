"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  Radio,
  HeartPulse,
  Building2,
  Factory,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

interface Industry {
  icon: LucideIcon;
  name: string;
  desc: string;
}

const industries: Industry[] = [
  {
    icon: Landmark,
    name: "BFSI",
    desc: "Guarantee real-time visibility across trading, core banking, and digital payments — ensuring compliance, security, and always-on service.",
  },
  {
    icon: Radio,
    name: "Telecom",
    desc: "Monitor multi-gigabit networks, correlate NetFlow data with subscriber QoE, and prevent outages before they scale.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    desc: "Safeguard critical patient systems and comply with HIPAA through secure, low-latency observability.",
  },
  {
    icon: Building2,
    name: "Government & Public Sector",
    desc: "Achieve transparency, security, and control with on-premise observability supporting strict data sovereignty.",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    desc: "Integrate IT and OT data to prevent production downtime and improve predictive maintenance accuracy.",
  },
  {
    icon: ShoppingCart,
    name: "Retail & eCommerce",
    desc: "Deliver frictionless digital experiences, monitor transactions in real time, and optimize site reliability at global scale.",
  },
];

export function OOIndustry() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-14"
        >
          <p className="text-overline text-primary">
            Industry Solutions
          </p>
          <h2 className="mt-3 text-display-md">
            Industry Expertise. Operational Excellence.
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Purpose-Built for Performance
          </p>
        </motion.div>

        {/* Connected 2x3 grid */}
        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid md:grid-cols-3">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              const isNotFirstCol = i % 3 !== 0;
              const isTopRow = i < 3;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`group relative overflow-hidden p-6 lg:p-8 transition-colors hover:bg-neutral-50 ${
                    isNotFirstCol ? "md:border-l border-border/40" : ""
                  } ${isTopRow ? "border-b border-border/40" : ""}`}
                >
                  {/* Large icon — hidden by default, appears on hover */}
                  <Icon
                    className="absolute -right-3 -bottom-3 h-24 w-24 text-primary/0 transition-all duration-500 group-hover:text-primary/10"
                    strokeWidth={1}
                  />
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold">{industry.name}</h3>
                    <p className="mt-2 text-body-xs text-muted-foreground">
                      {industry.desc}
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

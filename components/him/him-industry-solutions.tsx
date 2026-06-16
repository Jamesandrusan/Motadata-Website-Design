"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
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

export function HIMIndustrySolutions() {
  const [option, setOption] = useState(1);

  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {/* Option toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center rounded-full border border-border/40 p-0.5 bg-muted/20">
            {[1, 2].map((num) => (
              <button
                key={num}
                onClick={() => setOption(num)}
                className={`flex items-center justify-center rounded-full h-5 w-5 text-[10px] font-medium transition-all ${
                  option === num
                    ? "bg-white text-foreground shadow-sm"
                    : "text-muted-foreground/60 hover:text-foreground"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

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
            Industry-Proven Infrastructure Solutions
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Tailored for Your Infrastructure Challenges
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* ── Option 1: Cards with icon top-left ── */}
          {/* ── Option 1: Connected 2x3 grid, hover icon bottom-right ── */}
          {option === 1 ? (
            <motion.div
              key="option1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
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
                        <Icon className="absolute -right-3 -bottom-3 h-24 w-24 text-primary/0 transition-all duration-500 group-hover:text-primary/10" strokeWidth={1} />
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
            </motion.div>

          /* ── Option 2: Separate cards with icon top-left ── */
          ) : (
            <motion.div
              key="option2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {industries.map((industry, i) => {
                  const Icon = industry.icon;
                  return (
                    <motion.div
                      key={industry.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="group relative overflow-hidden rounded-lg border border-border/60 bg-white p-6 transition-all"
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
                        <h3 className="text-lg font-semibold">{industry.name}</h3>
                        <p className="mt-2 text-body-xs text-muted-foreground">
                          {industry.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

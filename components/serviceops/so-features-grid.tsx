"use client";

import { motion } from "framer-motion";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { Layers, BrainCircuit, Blocks, ShieldCheck, Scale, Scan, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: Layers,
    title: "Unified Service Management",
    desc: "A single, cohesive backbone for every ITIL workflow — incidents, requests, problems, and changes — ensuring consistency, compliance, and seamless execution across the service lifecycle.",
  },
  {
    icon: BrainCircuit,
    title: "AI at the Core",
    desc: "Intelligence woven into every action. From auto-triage and priority prediction to recommended solutions and predictive routing, AI accelerates resolution and elevates service experience.",
  },
  {
    icon: Blocks,
    title: "Modular Architecture",
    desc: "Build your platform your way. Deploy ITSM, Asset Management, CMDB, Patch Management, Agentic AI, or MSP capabilities as needed — expanding effortlessly as your operations grow.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Govern with confidence using granular RBAC, audit trails, compliance-aligned controls, encryption, and data sovereignty features that safeguard your service ecosystem.",
  },
  {
    icon: Scale,
    title: "Scalable Foundation",
    desc: "Designed for global teams, distributed enterprises, and high-volume MSP environments. Handles thousands of users, multi-location footprints, and complex workflows without performance compromise.",
  },
  {
    icon: Scan,
    title: "Absolute Control",
    desc: "One Platform. All Services. Complete governance across your entire service ecosystem.",
  },
];

export function SOFeaturesGrid() {
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
            Built for Harmony, Intelligence, and Scale
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            A unified service platform that replaces fragmented tools with intelligent automation, enterprise-grade governance, and contextual visibility — powered by AI at the core.
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
              One <span className="font-semibold text-foreground">Platform</span>. All <span className="font-semibold text-foreground">Services</span>. Absolute <span className="font-semibold text-foreground">Control</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { Zap, Eye, Cloud, BrainCircuit, ShieldCheck, BarChart3, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Real-Time Performance",
    desc: "Monitor thousands of servers and VMs simultaneously with sub-second metric collection and instant alerting.",
  },
  {
    icon: Eye,
    title: "Unified Visibility",
    desc: "Single pane of glass for physical servers, virtual machines, cloud instances, and containerized workloads.",
  },
  {
    icon: Cloud,
    title: "Hybrid & Cloud Ready",
    desc: "Seamlessly monitor on-premises, cloud, and hybrid infrastructure from AWS, Azure, GCP, and more.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Driven Insights",
    desc: "Machine learning detects anomalies, predicts capacity issues, and recommends optimization opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Secure monitoring with encryption, RBAC, and compliance reporting for regulated industries.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    desc: "Visualize trends, create custom dashboards, and correlate infrastructure metrics with application performance.",
  },
];

export function HIMFeaturesGrid() {
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
            Core Features
          </p>
          <h2 className="mt-3 text-display-md">
            Built for Speed, Scale, and Security
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Infrastructure monitoring that transforms raw metrics into intelligence — giving you complete visibility across your hybrid environment.
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
              Every <span className="font-semibold text-foreground">Server</span>. Every <span className="font-semibold text-foreground">VM</span>. Complete <span className="font-semibold text-foreground">Visibility</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

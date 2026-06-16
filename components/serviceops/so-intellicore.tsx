"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import {
  Zap,
  TrendingUp,
  Workflow,
  Cog,
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
    title: "AI Classification & Auto-Routing",
    desc: "Zero manual triage across incidents and requests.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    desc: "Anticipate SLA breaches, agent workload overload, and service bottlenecks.",
  },
  {
    icon: Workflow,
    title: "Workflow Orchestration",
    desc: "Build visual workflows that span HR, IAM, ITSM, monitoring tools, and more.",
  },
  {
    icon: Cog,
    title: "Process Automation",
    desc: "Automate repetitive tasks, resolutions, account actions, and provisioning.",
  },
];

export function SOIntellicore() {
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
                IntelliCore
              </p>
              <h2 className="mt-3 text-display-md">
                Where Service Meets Autonomous Intelligence.
              </h2>
              <p className="mt-4 text-body-md text-muted-foreground">
                At the heart of ServiceOps is IntelliCore — the AI-native automation engine that powers classification, routing, prioritization, service insights, and orchestration.
              </p>

              {/* Stats */}
              <div className="flex gap-10 mt-8">
                <div>
                  <p className="text-heading-xl">70%</p>
                  <p className="mt-1 text-body-xs text-muted-foreground">Auto-Resolved</p>
                </div>
                <div>
                  <p className="text-heading-xl">3x</p>
                  <p className="mt-1 text-body-xs text-muted-foreground">Faster Resolution</p>
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

        {/* Bottom tagline */}
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
            Designed. Trained. Proven. IntelliCore powers enterprise service automation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

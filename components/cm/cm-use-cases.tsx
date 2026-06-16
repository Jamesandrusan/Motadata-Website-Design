"use client";

import { motion } from "framer-motion";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import {
  ArrowRight,
  ScalingIcon,
  PiggyBank,
  SearchSlash,
  Activity,
  type LucideIcon,
} from "lucide-react";

interface UseCase {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const useCases: UseCase[] = [
  {
    icon: ScalingIcon,
    title: "Auto-scale Detection",
    desc: "Automatically identify when to scale resources up or down based on real-time demand patterns and historical trends.",
  },
  {
    icon: PiggyBank,
    title: "Cost Optimization",
    desc: "Discover unused or underutilized cloud resources, right-size instances, and eliminate wasteful spending.",
  },
  {
    icon: SearchSlash,
    title: "Identifying Underutilized Resources",
    desc: "Find idle instances, orphaned storage, and over-provisioned services that drain your cloud budget.",
  },
  {
    icon: Activity,
    title: "Diagnosing Cloud Latency & Errors",
    desc: "Pinpoint performance bottlenecks, API errors, and network issues across your distributed cloud infrastructure.",
  },
];

export function CMUseCases() {
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
            Use Cases
          </p>
          <h2 className="mt-3 text-display-md">
            How Enterprises Leverage Cloud Monitoring
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Real-world scenarios where Motadata AIOps delivers measurable
            business impact
          </p>
          <a
            href="#"
            className="mt-5 inline-flex items-center gap-1.5 text-label-md text-primary hover:underline"
          >
            Explore Platform Features
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid md:grid-cols-2">
            {useCases.map((useCase, i) => {
              const Icon = useCase.icon;
              const isRightCol = i % 2 !== 0;
              const isTopRow = i < 2;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`group p-6 lg:p-8 transition-colors hover:bg-neutral-50 border-b border-border/40 ${
                    isRightCol ? "md:border-l border-border/40" : ""
                  }`}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                    <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{useCase.title}</h3>
                  <p className="mt-2 text-body-xs text-muted-foreground">
                    {useCase.desc}
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
              Built for <span className="font-semibold text-foreground">cloud teams</span>. Powered by <span className="font-semibold text-foreground">AI</span>. Designed for <span className="font-semibold text-foreground">infinite scale</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

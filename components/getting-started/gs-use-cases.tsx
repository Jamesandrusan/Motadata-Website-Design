"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cloud, Activity, FileText } from "lucide-react";

const useCases = [
  {
    icon: Cloud,
    title: "Monitor Cloud Infrastructure",
    description: "Set up monitoring for AWS, Azure, and GCP environments.",
    href: "#",
  },
  {
    icon: Activity,
    title: "Application Performance",
    description:
      "Configure APM for distributed microservices applications.",
    href: "#",
  },
  {
    icon: FileText,
    title: "Log Management",
    description: "Aggregate and analyze logs from multiple sources.",
    href: "#",
  },
];

export function GsUseCases() {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Heading row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <span className="text-label-md uppercase tracking-widest text-primary">
              Popular Use Cases
            </span>
            <h2 className="mt-3 text-display-md">
              Step-by-step Implementation Guides
            </h2>
            <p className="mt-4 max-w-xl text-body-md text-muted-foreground">
              Step-by-step guides to help you implement the most common
              monitoring scenarios.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-label-md text-primary hover:underline"
          >
            Browse All Use Cases <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Connected 3-panel container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 overflow-hidden rounded-2xl border border-border"
        >
          <div className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {useCases.map((uc) => (
              <a
                key={uc.title}
                href={uc.href}
                className="group flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-muted/40"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                  <uc.icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold leading-snug">
                    {uc.title}
                  </h3>
                  <p className="mt-1.5 text-body-xs text-muted-foreground">
                    {uc.description}
                  </p>
                </div>

                <div className="mt-auto flex items-center gap-1 text-label-md text-muted-foreground transition-colors group-hover:text-primary">
                  Get Started
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

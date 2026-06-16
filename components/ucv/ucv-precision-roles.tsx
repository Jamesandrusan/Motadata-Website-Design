"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Radio,
  Code,
  type LucideIcon,
} from "lucide-react";

interface Role {
  icon: LucideIcon;
  title: string;
  bullets: string[];
}

const roles: Role[] = [
  {
    icon: Building2,
    title: "For CIOs / CTOs",
    bullets: [
      "Gain enterprise-wide visibility into compute utilization and performance.",
      "Make confident capacity and infrastructure investment decisions backed by real data.",
    ],
  },
  {
    icon: Users,
    title: "For IT Directors / Managers",
    bullets: [
      "Standardize monitoring across hybrid environments.",
      "Eliminate tool sprawl and ensure consistent performance visibility across teams.",
    ],
  },
  {
    icon: Radio,
    title: "For NOC Engineers / SREs",
    bullets: [
      "Detect anomalies faster with cross-layer correlation between host and virtualization layers.",
      "Reduce alert fatigue and accelerate root cause identification.",
    ],
  },
  {
    icon: Code,
    title: "For DevOps / Platform Teams",
    bullets: [
      "Understand how infrastructure behavior impacts application performance.",
      "Correlate compute resources with workloads, deployments, and service dependencies.",
    ],
  },
];

export function UCVPrecisionRoles() {
  const [activeIndex, setActiveIndex] = useState(0);

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
            Role-Based Value
          </p>
          <h2 className="mt-3 text-display-md">
            Precision for Every Role
          </h2>
        </motion.div>

        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-border/40">
            {roles.map((role, i) => {
              const Icon = role.icon;
              const isActive = i === activeIndex;
              return (
                <div
                  key={role.title}
                  className={`cursor-pointer transition-[flex,background-color] duration-500 ease-in-out ${
                    isActive ? "lg:flex-[2.5] bg-neutral-50" : "lg:flex-[1] bg-white"
                  }`}
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  <div className="flex flex-col h-full px-6 py-8 lg:px-7 lg:py-10">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg mb-5 transition-colors duration-300 ${
                      isActive ? "bg-primary/10" : "bg-foreground/5"
                    }`}>
                      <Icon className={`h-5 w-5 transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-foreground/50"
                      }`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {role.title}
                    </h3>
                    <div className={`hidden lg:block overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive
                        ? "max-h-[300px] opacity-100 mt-4"
                        : "max-h-0 opacity-0 mt-0"
                    }`}>
                      <ul className="space-y-3">
                        {role.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                            <span className="text-body-xs text-muted-foreground">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <ul className="mt-4 space-y-3 lg:hidden">
                      {role.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                          <span className="text-body-xs text-muted-foreground">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

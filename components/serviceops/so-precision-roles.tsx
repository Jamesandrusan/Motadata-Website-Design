"use client";

import { motion } from "framer-motion";
import { TrendingUp, Monitor, Headset, PackageSearch, ArrowRightLeft, Building2, type LucideIcon } from "lucide-react";

interface Role {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  desc: string;
}

const roles: Role[] = [
  {
    icon: TrendingUp,
    title: "CIO / CTO",
    subtitle: "Strategic Governance & ROI",
    desc: "Unify IT service delivery, strengthen governance, and demonstrate clear ROI through automation and consolidated service operations.",
  },
  {
    icon: Monitor,
    title: "IT Director / Manager",
    subtitle: "Operational Efficiency & Compliance",
    desc: "Standardize workflows, enforce compliance, automate high-volume tasks, and maintain total visibility over service KPIs.",
  },
  {
    icon: Headset,
    title: "Service Desk Leader",
    subtitle: "Faster Resolution & Better Experience",
    desc: "Reduce volume with self-service, improve FCR with AI recommendations, and accelerate response times with automated routing.",
  },
  {
    icon: PackageSearch,
    title: "IT Asset Manager",
    subtitle: "Complete Asset Intelligence",
    desc: "Maintain accurate inventories, eliminate compliance risks, optimize licensing spend, and centralize asset intelligence.",
  },
  {
    icon: ArrowRightLeft,
    title: "IT Change Manager",
    subtitle: "Risk-Aware Change Control",
    desc: "Reduce change failures with CI dependency tracking and CMDB-driven impact analysis.",
  },
  {
    icon: Building2,
    title: "MSP Executive",
    subtitle: "Scalable Service Delivery",
    desc: "Deliver ITSM-as-a-service at scale with tenant isolation, SLA customization, branded portals, and centralized service operations.",
  },
];

export function SOPrecisionRoles() {
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
            Built for Every Stakeholder
          </p>
          <h2 className="mt-3 text-display-md">
            Precision for Every Role
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Where Decision-Makers and Operators Move in Sync — United on One Intelligent Platform.
          </p>
        </motion.div>

        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid md:grid-cols-2">
            {roles.map((role, i) => {
              const Icon = role.icon;
              const isRightCol = i % 2 !== 0;
              const isBottomRow = i >= roles.length - 2;
              return (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`group p-6 lg:p-8 transition-colors hover:bg-neutral-50 ${
                    !isBottomRow ? "border-b border-border/40" : ""
                  } ${isRightCol ? "md:border-l border-border/40" : ""}`}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                    <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{role.title}</h3>
                  <p className="mt-1 text-label-md text-primary">{role.subtitle}</p>
                  <p className="mt-2 text-body-xs text-muted-foreground">
                    {role.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

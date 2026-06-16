"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Monitor,
  Radio,
  Code,
  type LucideIcon,
} from "lucide-react";

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
    subtitle: "Strategic Insight Across the Digital Enterprise",
    desc: "See every heartbeat of your hybrid ecosystem in one unified view. ObserveOps turns fragmented telemetry into executive clarity — proving ROI, strengthening uptime, and guiding transformation with data that speaks the truth.",
  },
  {
    icon: Monitor,
    title: "IT Director / IT Manager",
    subtitle: "Unified Control, Zero Blind Spots",
    desc: "Modernize operations with full-stack visibility across networks, infrastructure, logs and applications. Standardize performance reporting, eliminate tool overload and drive efficiency with an observability layer that scales as fast as your enterprise.",
  },
  {
    icon: Radio,
    title: "NOC Engineer / SRE",
    subtitle: "Less Noise, Faster Answers, Confident Stability",
    desc: "Cut the clutter. Surface the signal. Correlate metrics, logs, traces, flows and configs in real time to isolate true root causes, reduce alert fatigue and resolve issues before they ripple into user impact.",
  },
  {
    icon: Code,
    title: "Application Owner / DevOps Engineer",
    subtitle: "Experience That Never Slips",
    desc: "Follow every transaction, every user journey and every dependency from edge to core. With APM and RUM powered by AI-driven analytics, deliver flawless performance, catch anomalies early and ship with confidence.",
  },
];

export function OOPrecisionRoles() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="text-overline text-primary">
            Built for Every Stakeholder
          </p>
          <h2 className="mt-3 text-display-md">
            Precision for Every Role
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Where Decision-Makers and Operators Move in Sync — United on One
            Intelligent Platform.
          </p>
        </motion.div>

        {/* 2x2 connected card grid */}
        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid md:grid-cols-2">
            {roles.map((role, i) => {
              const Icon = role.icon;
              const isBottomRow = i >= 2;
              const isRightCol = i % 2 === 1;

              return (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`group p-6 lg:p-8 transition-colors hover:bg-neutral-50 ${
                    isBottomRow ? "" : "border-b border-border/40"
                  } ${isRightCol ? "md:border-l border-border/40" : ""}`}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                    <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{role.title}</h3>
                  <p className="mt-1 text-label-md text-primary">
                    {role.subtitle}
                  </p>
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

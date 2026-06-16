"use client";

import { motion } from "framer-motion";
import { BookOpen, Scale, MessageCircle, Rocket, Award, Gift } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

const perks: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: BookOpen,
    title: "Self-Development",
    description:
      "We value our employees and their best efforts to make sure we bring out the best from them.",
  },
  {
    icon: Scale,
    title: "Work-Life Balance",
    description:
      "We encourage a work-life balance with five working days a week.",
  },
  {
    icon: MessageCircle,
    title: "Open Communication",
    description:
      "We follow the concept of an open-door policy and support transparent communication.",
  },
  {
    icon: Rocket,
    title: "Ambitious",
    description:
      "Open to people who are passionate, curious, willing to learn with a never say die attitude.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Offer excellence in HR by creating a healthy work environment and employee-friendly policies.",
  },
  {
    icon: Gift,
    title: "Rewards & Recognition",
    description:
      "Employees' contribution towards the company gets recognized and rewarded.",
  },
];

export function CareersPerks() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-label-md uppercase tracking-widest text-primary">
            Benefits & Perks
          </p>
          <h2 className="mt-3 text-display-md">
            Come Work with Us
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            At Motadata we provide the best environment and work culture for
            young as well as seasoned professionals to hone their skills and
            build a thriving career in the IT industry.
          </p>
        </motion.div>

        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid md:grid-cols-3">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              const isNotFirstCol = i % 3 !== 0;
              return (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`group relative overflow-hidden p-6 lg:p-8 transition-colors hover:bg-neutral-50 border-b border-border/40 ${
                    isNotFirstCol ? "md:border-l border-border/40" : ""
                  } last:border-b-0 [&:nth-last-child(-n+3)]:border-b-0`}
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
                    <h3 className="text-lg font-semibold">{perk.title}</h3>
                    <p className="mt-2 text-body-xs text-muted-foreground">
                      {perk.description}
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

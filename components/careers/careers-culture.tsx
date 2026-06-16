"use client";

import { motion } from "framer-motion";
import { Zap, Users, Target } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Move Fast, Ship Smart",
    description:
      "We believe in rapid iteration without compromising quality. Ship daily, learn constantly, and build with purpose.",
  },
  {
    icon: Users,
    title: "Collaborate Openly",
    description:
      "Cross-functional teams, transparent communication, and shared ownership drive everything we build.",
  },
  {
    icon: Target,
    title: "Own the Outcome",
    description:
      "Every team member has the autonomy to make decisions and the accountability to deliver results.",
  },
];

export function CareersCulture() {
  return (
    <section id="culture" className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-overline text-primary">
            Our Culture
          </p>
          <h2 className="mt-3 text-display-md">
            Where Innovation Meets Impact
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="group rounded-xl border border-border bg-white p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                <pillar.icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-body-xs text-muted-foreground">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

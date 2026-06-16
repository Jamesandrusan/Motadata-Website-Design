"use client";

import { motion } from "framer-motion";
import { Heart, Users, Zap, BookOpen, Shield, Smile } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Heart,
    title: "Customer Obsessed",
    description:
      "Our customers are at the heart of everything we do. We listen, adapt, and build solutions that solve real problems and deliver exceptional value.",
  },
  {
    icon: Users,
    title: "People First",
    description:
      "We believe our team is our greatest asset. We foster a culture of respect, growth, and collaboration where everyone can thrive.",
  },
  {
    icon: Zap,
    title: "Challenge The Status Quo",
    description:
      "We're not afraid to question conventional thinking. Innovation happens when we dare to push boundaries and explore new possibilities.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "We embrace curiosity and commit to constant growth. Every challenge is an opportunity to learn, improve, and evolve.",
  },
  {
    icon: Shield,
    title: "Ownership",
    description:
      "We take responsibility for our work and its impact. Accountability drives us to deliver quality and stand behind what we create.",
  },
  {
    icon: Smile,
    title: "Humility",
    description:
      "We stay grounded and open-minded. Success is a team effort, and there's always more to learn from each other.",
  },
];

export function CompanyValues() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-14"
        >
          <p className="text-label-md uppercase tracking-widest text-primary">
            Our Values
          </p>
          <h2 className="mt-3 text-display-md">
            What Drives Us Forward
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            To build for the next era of companies, we stand by our core
            principles in everything we do — from the features we ship to how
            we show up every day.
          </p>
        </motion.div>

        {/* Bordered container — 3x2 grid like HIM features */}
        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid md:grid-cols-2">
            {values.map((value, i) => {
              const Icon = value.icon;
              const isNotFirstCol = i % 2 !== 0;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`group relative overflow-hidden p-6 lg:p-8 transition-colors hover:bg-neutral-50 border-b border-border/40 ${
                    isNotFirstCol ? "md:border-l border-border/40" : ""
                  } last:border-b-0 [&:nth-last-child(-n+2)]:border-b-0`}
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
                    <h3 className="text-lg font-semibold">{value.title}</h3>
                    <p className="mt-2 text-body-xs text-muted-foreground">
                      {value.description}
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

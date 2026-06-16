"use client";

import { ArrowRight, Monitor, Users, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

const ctaCards = [
  {
    icon: Monitor,
    title: "Executive Demo",
    desc: "See ServiceOps in action with a personalized walkthrough tailored to your enterprise needs.",
    cta: "Schedule Demo",
  },
  {
    icon: Users,
    title: "ServiceOps Architect",
    desc: "Discuss your service management strategy with our expert architects and solution engineers.",
    cta: "Connect with Expert",
  },
  {
    icon: Cpu,
    title: "AI ITOM Platform",
    desc: "Explore the complete AI-Native ITOM ecosystem that powers autonomous operations.",
    cta: "Discover Platform",
  },
];

export function SOCta() {
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
          <h2 className="text-display-md">
            Take Command of Enterprise Service Management.
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Resolve faster, automate smarter, and scale confidently with AI at the center of every workflow.
          </p>
        </motion.div>

        {/* 3 CTA cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {ctaCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group rounded-2xl border border-border/60 bg-white p-6 lg:p-8 transition-colors hover:border-primary/40"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                  <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-body-xs text-muted-foreground">
                  {card.desc}
                </p>
                <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-label-md text-primary hover:underline">
                  {card.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center text-body-xs text-muted-foreground mb-16"
        >
          Serve. Automate. Transform.
        </motion.p>

        {/* Dark CTA */}
        <div className="group relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center text-white sm:px-16 sm:py-20">
          <DottedGlowBackground
            className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
            gap={14}
            radius={1.8}
            opacity={0.6}
            color="rgba(255,255,255,0.4)"
          />
          <div className="relative z-10">
            <h2 className="text-display-md">
              See It. Try It. Transform IT.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60">
              From observability to service excellence, See Motadata in action and experience unified IT like never before.
            </p>
            <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-12 rounded-xl bg-white text-foreground hover:bg-white/90 px-7 text-[15px]"
              >
                Get a Demo <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white px-7 text-[15px]"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

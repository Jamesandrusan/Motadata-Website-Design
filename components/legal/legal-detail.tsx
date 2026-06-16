"use client";

import Link from "next/link";
import { ArrowRight, Shield, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { CtaSection } from "@/components/cta-section";

const legalCards = [
  {
    title: "Privacy Policy",
    description: "Learn how we collect, use, and protect your personal information.",
    href: "/privacy-policy",
    icon: Shield,
  },
  {
    title: "Google API Disclosure",
    description: "Understand how we use Google APIs and handle your Google data.",
    href: "#",
    icon: Globe,
  },
];

export function LegalDetail() {
  return (
    <>
      {/* Hero */}
      <section className="relative z-10 overflow-hidden py-24 lg:py-32">
        <HeroOrbs />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp delay={100}>
              <div className="flex justify-center">
                <AnimatedBadge text="Legal Information" />
              </div>
            </FadeUp>
            <FadeUp delay={250}>
              <h1 className="mt-6 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
                Legal
              </h1>
            </FadeUp>
            <FadeUp delay={400}>
              <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
                Learn about our policies and disclosures to understand how we protect your privacy and handle your data.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {legalCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group flex flex-col justify-between rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/40 hover:bg-muted/30"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <card.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-body-xs text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-label-md text-primary">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </>
  );
}

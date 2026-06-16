"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Activity,
  FileText,
  Server,
  Network,
} from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { FtForm } from "./ft-form";

const features = [
  {
    icon: Activity,
    title: "Reduce Monitoring Fatigue",
    desc: "Pay attention to metrics that matter and solve issues based on its business impact and urgency.",
  },
  {
    icon: FileText,
    title: "Log Analytics",
    desc: "View logs from multiple sources and build context while identifying root cause of any issue.",
  },
  {
    icon: Server,
    title: "Infrastructure Monitoring",
    desc: "Collect all the telemetry to get complete visibility of resource availability, performance & efficiency to keep apps & services up at all times.",
  },
  {
    icon: Network,
    title: "Network Automation",
    desc: "Enable your team with self-service access to the operations capabilities with runbook automation.",
  },
];

export function FtAiopsDetail() {
  return (
    <>
      {/* Hero */}
      <section className="relative z-10 overflow-hidden pt-12 pb-12 lg:pt-16 lg:pb-16">
        <HeroOrbs />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <FadeUp delay={50}>
            <Link
              href="/free-trial"
              className="inline-flex items-center gap-1.5 text-body-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Products
            </Link>
          </FadeUp>
          <div className="mx-auto max-w-3xl text-center mt-8">
            <FadeUp delay={100}>
              <div className="flex justify-center">
                <AnimatedBadge text="ObserveOps Free Trial" />
              </div>
            </FadeUp>
            <FadeUp delay={250}>
              <h1 className="mt-6 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
                Motadata ObserveOps
              </h1>
            </FadeUp>
            <FadeUp delay={400}>
              <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
                Experience AI-native observability with comprehensive monitoring
                across your entire infrastructure. Start your 30-day free trial
                today.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Content + Form */}
      <section className="relative z-10 py-16">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr]">
              {/* Left — Info */}
              <div className="p-8 lg:p-10">
                <h2 className="text-heading-md text-foreground">
                  Start Your Free Trial Today
                </h2>
                <p className="mt-3 text-body-xs text-muted-foreground">
                  Experience AI-native observability with comprehensive
                  monitoring across your entire infrastructure. No credit card
                  required.
                </p>

                <div className="mt-8 space-y-6">
                  {features.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-label-md text-foreground">
                            {item.title}
                          </p>
                          <p className="mt-1 text-body-xs text-muted-foreground">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right — Form */}
              <div className="border-t lg:border-t-0 lg:border-l border-border p-8 lg:p-10">
                <h3 className="text-heading-sm text-foreground">
                  Free Trial - ObserveOps
                </h3>
                <p className="mt-1.5 text-body-xs text-muted-foreground">
                  Fill out the form below and our team will get back to you shortly.
                </p>

                <div className="mt-6">
                  <FtForm productSlug="aiops" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

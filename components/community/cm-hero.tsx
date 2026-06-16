"use client";

import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { Users, MessageSquare, UserCheck, Headphones } from "lucide-react";

const stats = [
  { icon: Users, value: "50K+", label: "Community Members" },
  { icon: MessageSquare, value: "10K+", label: "Forum Topics" },
  { icon: UserCheck, value: "500+", label: "Contributors" },
  { icon: Headphones, value: "24/7", label: "Active Support" },
];

export function CmHero() {
  return (
    <section className="relative z-10 overflow-hidden py-24 lg:py-32">
      <HeroOrbs />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp delay={100}>
            <div className="flex justify-center">
              <AnimatedBadge text="Community" />
            </div>
          </FadeUp>
          <FadeUp delay={250}>
            <h1 className="mt-6 text-[clamp(2.2rem,5.5vw,4.75rem)] font-bold leading-[1.05] tracking-tight">
              Join the Motadata Community
            </h1>
          </FadeUp>
          <FadeUp delay={400}>
            <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
              Connect with thousands of IT professionals, share knowledge, get support, and shape
              the future of Motadata&apos;s unified observability and service management platform.
            </p>
          </FadeUp>
          <FadeUp delay={550}>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="rounded-2xl border border-border bg-card p-4 text-center">
                    <Icon className="mx-auto h-5 w-5 text-primary" />
                    <p className="mt-2 text-heading-lg text-foreground">{s.value}</p>
                    <p className="mt-0.5 text-caption text-muted-foreground">{s.label}</p>
                  </div>
                );
              })}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

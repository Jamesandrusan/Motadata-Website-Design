"use client";

import { LogIn, Handshake, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: LogIn,
    title: "Partner Portal Login",
    desc: "A centralized location to avail all partner-related services.",
    cta: "Login to Portal",
    href: "#",
  },
  {
    icon: Handshake,
    title: "Become A Partner",
    desc: "Let\u2019s solve complex business challenges together, using AI.",
    cta: "Get Started",
    href: "#become-partner",
  },
];

export function PtPortal() {
  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.title}
                href={c.href}
                className="group/card flex items-center gap-5 rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/card:bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-body-xs text-muted-foreground">{c.desc}</p>
                </div>
                <span className="hidden shrink-0 items-center gap-1 text-label-md text-primary sm:inline-flex">
                  {c.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/card:translate-x-0.5" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

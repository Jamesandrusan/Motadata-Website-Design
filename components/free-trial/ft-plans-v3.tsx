"use client";

import Link from "next/link";
import { ArrowRight, Check, CircleCheck } from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { products, trustItems } from "./ft-data";
import { FtTrust } from "./ft-trust";

export function FtPlansV3() {
  return (
    <>
      {/* ── Hero — same as Option 1 ── */}
      <section className="relative z-10 overflow-hidden pt-12 pb-12 lg:pt-16 lg:pb-16">
        <HeroOrbs />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp delay={100}>
              <div className="flex justify-center">
                <AnimatedBadge text="Free Trial" />
              </div>
            </FadeUp>
            <FadeUp delay={250}>
              <h1 className="mt-6 text-[clamp(2.2rem,5.5vw,4.75rem)] font-bold leading-[1.05] tracking-tight">
                Start Your 30-Day Free Trial
              </h1>
            </FadeUp>
            <FadeUp delay={400}>
              <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
                Experience the power of AI-native observability and service management.
                Choose your platform and get started in minutes.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="relative z-10 border-t border-border pb-16 pt-10">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
              {products.map((product) => (
                <div key={product.slug} className="p-8 lg:p-10">
                  {/* Product badge */}
                  <div className="mb-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-label-sm text-primary">
                    {product.slug === "aiops" ? "Observability" : "Service Management"}
                  </div>
                  <h3 className="text-heading-md text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-body-xs text-muted-foreground">
                    {product.desc}
                  </p>

                  {/* Features list */}
                  <div className="mt-6 space-y-3">
                    {product.features.map((f) => (
                      <div key={f.label} className="flex items-center gap-3">
                        <CircleCheck className="h-4.5 w-4.5 shrink-0 text-primary" />
                        <span className="text-sm text-foreground">{f.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mt-8 space-y-4 border-t border-border pt-6">
                    <p className="text-overline text-muted-foreground/60">
                      Highlights
                    </p>
                    {product.detailFeatures.slice(0, 3).map((f) => {
                      const Icon = f.icon;
                      return (
                        <div key={f.title} className="flex items-start gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-label-md text-foreground">{f.title}</p>
                            <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <Link
                      href={`/free-trial/v3/${product.slug}`}
                      className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary text-label-md text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Start {product.name} Trial
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-center text-body-xs text-muted-foreground">
            {trustItems.map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FtTrust />
    </>
  );
}

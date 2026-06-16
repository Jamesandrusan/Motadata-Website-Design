"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { products, trustItems } from "./ft-data";
import { FtTrust } from "./ft-trust";

export function FtPlansV5() {
  return (
    <>
      {/* ── Hero — left content + right product cards ── */}
      <section className="relative z-10 overflow-hidden pt-12 pb-12 lg:pt-16 lg:pb-16">
        <HeroOrbs />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left — Hero content */}
            <div>
              <FadeUp delay={100}>
                <div className="flex lg:justify-start justify-center">
                  <AnimatedBadge text="Free Trial" />
                </div>
              </FadeUp>
              <FadeUp delay={250}>
                <h1 className="mt-6 text-[clamp(2.2rem,5.5vw,4.75rem)] font-bold leading-[1.05] tracking-tight lg:text-left text-center">
                  Start Your 30-Day Free Trial
                </h1>
              </FadeUp>
              <FadeUp delay={400}>
                <p className="mt-5 max-w-lg text-body-md text-muted-foreground lg:text-left text-center">
                  Experience the power of AI-native observability and service management.
                  Choose your platform and get started in minutes.
                </p>
              </FadeUp>

              {/* Trust items */}
              <FadeUp delay={550}>
                <div className="mt-8 flex flex-col gap-2.5">
                  {trustItems.map((item) => (
                    <span key={item} className="flex items-center gap-2 text-body-xs text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Right — 2 Product cards */}
            <div className="flex flex-col gap-4">
              {products.map((product, idx) => (
                <FadeUp key={product.slug} delay={300 + idx * 150}>
                  <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        {(() => {
                          const Icon = product.features[0].icon;
                          return <Icon className="h-6 w-6 text-primary" />;
                        })()}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-heading-sm text-foreground">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-body-xs text-muted-foreground">
                          {product.desc}
                        </p>
                      </div>
                    </div>

                    {/* Feature list */}
                    <div className="mt-4 space-y-2">
                      {product.features.map((f) => {
                        const Icon = f.icon;
                        return (
                          <div key={f.label} className="flex items-center gap-3">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                              <Icon className="h-3.5 w-3.5 text-primary" />
                            </div>
                            <span className="text-sm text-foreground">{f.label}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* CTA */}
                    <div className="mt-5">
                      <Link
                        href={`/free-trial/v5/${product.slug}`}
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-primary text-label-md text-primary-foreground transition-opacity hover:opacity-90"
                      >
                        Start Free Trial
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FtTrust />
    </>
  );
}

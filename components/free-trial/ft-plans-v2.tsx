"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { products, trustItems } from "./ft-data";
import { FtForm } from "./ft-form";
import { FtTrust } from "./ft-trust";

export function FtPlansV2() {
  const [active, setActive] = useState(0);
  const product = products[active];

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

      {/* ── Product Tabs + Content ── */}
      <section className="relative z-10 border-t border-border pb-16 pt-10">
        <div className="mx-auto w-full max-w-7xl px-6">
          {/* Tabs */}
          <div className="flex justify-center">
            <div className="inline-flex rounded-2xl border border-border bg-card/60 p-1.5 backdrop-blur-sm">
              {products.map((p, i) => (
                <button
                  key={p.slug}
                  onClick={() => setActive(i)}
                  className={`rounded-xl px-8 py-3 text-label-md transition-all ${
                    active === i
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {/* Content Card */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left — Features */}
              <div className="p-8 lg:p-10">
                <h3 className="text-heading-md text-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 text-body-xs text-muted-foreground">
                  {product.desc}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {product.features.map((f) => {
                    const Icon = f.icon;
                    return (
                      <div
                        key={f.label}
                        className="flex items-center gap-3 rounded-lg border border-border/50 p-3"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm text-foreground">{f.label}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6">
                  <Link
                    href={`/free-trial/v2/${product.slug}`}
                    className="inline-flex items-center gap-2 text-label-md text-primary hover:underline"
                  >
                    View Full Details
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right — Form */}
              <div className="border-t lg:border-t-0 lg:border-l border-border p-8 lg:p-10">
                <h3 className="text-heading-sm text-foreground">
                  Start Your Free Trial
                </h3>
                <p className="mt-1.5 text-body-xs text-muted-foreground">
                  Get started with {product.name} — no credit card required.
                </p>
                <div className="mt-6">
                  <FtForm productSlug={product.slug} />
                </div>
              </div>
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

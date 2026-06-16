"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { products } from "./ft-data";
import { FtForm } from "./ft-form";

interface Props {
  productSlug: string;
}

export function FtDetailV5({ productSlug }: Props) {
  const product = products.find((p) => p.slug === productSlug) || products[0];
  const [step, setStep] = useState(1);

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
                <AnimatedBadge text={`${product.name} Free Trial`} />
              </div>
            </FadeUp>
            <FadeUp delay={250}>
              <h1 className="mt-6 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
                {product.name}
              </h1>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Multi-step Detail */}
      <section className="relative z-10 py-16">
        <div className="mx-auto w-full max-w-4xl px-6">
          {/* Step indicator */}
          <div className="mb-8 flex items-center justify-center gap-2">
            {[
              { num: 1, label: "Features" },
              { num: 2, label: "Start Trial" },
            ].map((s, i) => (
              <div key={s.num} className="flex items-center gap-2">
                {i > 0 && (
                  <div
                    className={`h-px w-12 sm:w-20 ${
                      step > i ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}
                <button
                  onClick={() => setStep(s.num)}
                  className="flex items-center gap-2"
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-label-sm-strong transition-colors ${
                      step >= s.num
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > s.num ? <Check className="h-4 w-4" /> : s.num}
                  </div>
                  <span
                    className={`text-label-md ${
                      step >= s.num
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
              </div>
            ))}
          </div>

          {/* Step 1 — Features */}
          {step === 1 && (
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
              <h2 className="text-heading-md text-foreground">
                Explore {product.name}
              </h2>
              <p className="mt-2 text-body-xs text-muted-foreground">
                {product.desc}
              </p>

              {/* Feature grid */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {product.features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.label}
                      className="flex items-center gap-3 rounded-xl border border-border/50 p-4"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{f.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Detail features */}
              <div className="mt-8 space-y-5 border-t border-border pt-6">
                {product.detailFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.title} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-label-md text-foreground">
                          {f.title}
                        </p>
                        <p className="mt-1 text-body-xs text-muted-foreground">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setStep(2)}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary text-label-md text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Continue to Trial Form
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2 — Form */}
          {step === 2 && (
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
              <button
                onClick={() => setStep(1)}
                className="mb-4 inline-flex items-center gap-1.5 text-body-xs text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to features
              </button>

              <div className="mb-6 flex items-center gap-3 rounded-xl bg-primary/5 p-4">
                {(() => {
                  const Icon = product.features[0].icon;
                  return (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  );
                })()}
                <div>
                  <p className="text-label-md-strong text-foreground">
                    {product.name}
                  </p>
                  <p className="text-caption text-muted-foreground">
                    30-day free trial — full feature access
                  </p>
                </div>
              </div>

              <h3 className="text-heading-sm text-foreground">
                Free Trial - {product.name.replace("Motadata ", "")}
              </h3>
              <p className="mt-1.5 text-body-xs text-muted-foreground">
                Fill out the form below and our team will get back to you shortly.
              </p>
              <div className="mt-6">
                <FtForm productSlug={product.slug} />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

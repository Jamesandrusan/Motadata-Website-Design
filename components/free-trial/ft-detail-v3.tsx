"use client";

import Link from "next/link";
import { ArrowLeft, CircleCheck } from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { products } from "./ft-data";
import { FtForm } from "./ft-form";

interface Props {
  productSlug: string;
}

export function FtDetailV3({ productSlug }: Props) {
  const product = products.find((p) => p.slug === productSlug) || products[0];
  const other = products.find((p) => p.slug !== productSlug) || products[1];

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
            <FadeUp delay={400}>
              <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
                {product.desc}. Start your 30-day free trial today.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive + Form */}
      <section className="relative z-10 py-16">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px]">
            {/* Left — Full Feature Breakdown */}
            <div className="space-y-8">
              {/* All features */}
              <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
                <h2 className="text-heading-md text-foreground">
                  Complete Feature Overview
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {product.features.map((f) => (
                    <div
                      key={f.label}
                      className="flex items-center gap-3 rounded-xl border border-border/50 p-4"
                    >
                      <CircleCheck className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-label-md text-foreground">
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detail features */}
              <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
                <h2 className="text-heading-md text-foreground">
                  Why {product.name}?
                </h2>
                <div className="mt-6 space-y-6">
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
              </div>

              {/* Other product CTA */}
              <div className="rounded-2xl border border-dashed border-border p-6 text-center">
                <p className="text-body-xs text-muted-foreground">
                  Also interested in{" "}
                  <Link
                    href={`/free-trial/v3/${other.slug}`}
                    className="font-semibold text-primary hover:underline"
                  >
                    {other.name}
                  </Link>
                  ?
                </p>
              </div>
            </div>

            {/* Right — Sticky Form */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-border bg-card p-8">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

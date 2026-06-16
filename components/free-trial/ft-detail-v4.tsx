"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { products } from "./ft-data";
import { FtForm } from "./ft-form";

interface Props {
  productSlug: string;
}

export function FtDetailV4({ productSlug }: Props) {
  const product = products.find((p) => p.slug === productSlug) || products[0];

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

      {/* Split-screen: Features + Form */}
      <section className="relative z-10 py-16">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
            {/* Left — Features */}
            <div className="rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none border border-border bg-card p-8 lg:p-10">
              <h2 className="text-heading-md text-foreground">
                What You Get
              </h2>
              <p className="mt-3 text-body-xs text-muted-foreground">
                Everything included in your 30-day trial of {product.name}.
              </p>

              {/* Feature grid */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {product.features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.label}
                      className="flex items-center gap-3 rounded-xl border border-border/50 p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-4.5 w-4.5 text-primary" />
                      </div>
                      <span className="text-label-md text-foreground">
                        {f.label}
                      </span>
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
            </div>

            {/* Right — Form */}
            <div className="rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none border border-t-0 lg:border-t lg:border-l-0 border-border bg-muted/20 p-8 lg:p-10">
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
      </section>
    </>
  );
}

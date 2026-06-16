"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { products } from "./ft-data";
import { FtForm } from "./ft-form";

interface Props {
  productSlug: string;
}

export function FtDetailV2({ productSlug }: Props) {
  const initialIdx = products.findIndex((p) => p.slug === productSlug);
  const [active, setActive] = useState(initialIdx >= 0 ? initialIdx : 0);
  const product = products[active];

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
                <AnimatedBadge text="Free Trial" />
              </div>
            </FadeUp>
            <FadeUp delay={250}>
              {/* Product switcher in hero */}
              <div className="mt-6 flex justify-center">
                <div className="inline-flex rounded-xl border border-border bg-muted/30 p-1">
                  {products.map((p, i) => (
                    <button
                      key={p.slug}
                      onClick={() => setActive(i)}
                      className={`rounded-lg px-5 py-2 text-label-md transition-all ${
                        active === i
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={400}>
              <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
                {product.desc}. Start your 30-day free trial today.
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
              {/* Left — Features */}
              <div className="p-8 lg:p-10">
                <h2 className="text-heading-md text-foreground">
                  {product.name} Features
                </h2>
                <p className="mt-3 text-body-xs text-muted-foreground">
                  {product.desc}. No credit card required.
                </p>

                <div className="mt-8 space-y-6">
                  {product.detailFeatures.map((item) => {
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

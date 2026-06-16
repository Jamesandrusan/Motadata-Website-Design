"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

interface SDClosingCtaProps {
  data: {
    headline: string;
    description: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
}

export function SDClosingCta({ data }: SDClosingCtaProps) {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative overflow-hidden rounded-2xl bg-[#111] p-10 lg:p-16 text-white text-center"
        >
          <DottedGlowBackground
            className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
            gap={14}
            radius={1.8}
            opacity={0.6}
            color="rgba(255,255,255,0.3)"
          />
          <div className="relative z-10">
            <h2 className="text-heading-lg sm:text-3xl lg:text-4xl">
              {data.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60">
              {data.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={data.ctaPrimary.href}
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-7 text-label-md text-primary-foreground transition-opacity hover:opacity-90"
              >
                {data.ctaPrimary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={data.ctaSecondary.href}
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 text-label-md text-white transition-opacity hover:bg-white/20"
              >
                {data.ctaSecondary.label}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

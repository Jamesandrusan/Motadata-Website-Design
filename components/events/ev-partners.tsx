"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, Plus, HeartHandshake } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import type { EventPartner } from "@/components/events/ev-event-data";

/* One logo (with optional tier caption); links out when a url is set. */
function PartnerLogo({ partner }: { partner: EventPartner }) {
  const img = partner.logo ? (
    // Plain <img> so any partner asset (local or external CDN) works without Next image-domain config.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={partner.logo} alt={partner.name} className="max-h-16 w-auto max-w-[220px] object-contain sm:max-h-20" />
  ) : (
    <span className="text-2xl font-bold tracking-tight text-foreground/70">{partner.name}</span>
  );

  return partner.url ? (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={partner.name}
      className="inline-flex shrink-0 transition-opacity hover:opacity-80"
    >
      {img}
    </a>
  ) : (
    <span className="inline-flex shrink-0">{img}</span>
  );
}

export function EvPartners({
  partners,
  label,
}: {
  partners: EventPartner[];
  label?: string;
  eventTitle?: string;
}) {
  const [variant, setVariant] = useState<"handshake" | "plus" | "divider" | "heart" | "cross">("handshake");

  if (!partners.length) return null;

  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col items-center gap-8 rounded-2xl border border-border/60 bg-card px-8 py-8 text-center sm:flex-row sm:justify-between sm:gap-10 sm:px-12 sm:text-left"
        >
          {/* Left — label (2/3) */}
          <div className="sm:basis-0 sm:grow-[2]">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-overline text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {label ?? "In Partnership With"}
            </span>
            <h2 className="mt-3 text-2xl font-bold leading-snug tracking-tight lg:text-3xl">
              Proudly <span className="text-primary">co-hosted</span> with our partner
            </h2>
            <p className="mt-2 text-body-xs text-muted-foreground">
              Bringing together industry expertise and local insight to make this event happen.
            </p>
          </div>

          {/* Right — Motadata × Partner lockup with style switcher */}
          <div className="flex flex-col items-center gap-4 sm:basis-0 sm:grow sm:items-end sm:justify-end">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 sm:flex-nowrap sm:justify-end sm:gap-x-4">
              <BrandLogo className="h-6 w-auto shrink-0 text-foreground sm:h-8" />
              
              <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={variant}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center justify-center"
                  >
                    {variant === "handshake" && (
                      <Handshake className="h-6 w-6 text-muted-foreground/60 transition-colors hover:text-primary sm:h-7 sm:w-7" aria-hidden />
                    )}
                    {variant === "plus" && (
                      <Plus className="h-5 w-5 text-muted-foreground/60 transition-colors hover:text-primary sm:h-6 sm:w-6" aria-hidden />
                    )}
                    {variant === "divider" && (
                      <div className="h-8 w-px bg-border/80 transition-colors hover:bg-primary" />
                    )}
                    {variant === "heart" && (
                      <HeartHandshake className="h-6 w-6 text-muted-foreground/60 transition-colors hover:text-primary sm:h-7 sm:w-7" aria-hidden />
                    )}
                    {variant === "cross" && (
                      <span aria-hidden className="select-none text-2xl font-light text-muted-foreground/50 transition-colors hover:text-primary sm:text-3xl">×</span>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {partners.map((p) => (
                <PartnerLogo key={p.name} partner={p} />
              ))}
            </div>

            {/* Switcher Control */}
            <div className="flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/40 p-1 text-[11px] font-medium text-muted-foreground backdrop-blur-sm">
              <span className="pl-2.5 pr-1 text-muted-foreground/60 select-none">Style:</span>
              {(["handshake", "plus", "divider", "heart", "cross"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={`rounded-full px-2.5 py-0.5 capitalize transition-all ${
                    variant === v
                      ? "bg-white text-foreground shadow-sm dark:bg-zinc-800 dark:text-zinc-100"
                      : "hover:bg-muted-foreground/10 hover:text-foreground"
                  }`}
                >
                  {v === "heart" ? "heart handshake" : v}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

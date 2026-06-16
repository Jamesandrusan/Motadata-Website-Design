"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  LayoutGrid,
  List,
  Columns2,
  CreditCard,
  type LucideIcon,
} from "lucide-react";
import type { JourneyData } from "./types";

type ViewType = "grid" | "list" | "split" | "cards";

function GridCard({ product, delay }: { product: { icon: LucideIcon; name: string; desc: string; href: string }; delay: number }) {
  const Icon = product.icon;
  return (
    <motion.a
      href={product.href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group relative flex flex-col bg-white p-6 lg:p-8 transition-colors hover:bg-muted/10"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
        <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
      </div>
      <h3 className="text-label-lg">{product.name}</h3>
      <p className="mt-2 flex-1 text-body-xs text-muted-foreground">{product.desc}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-label-md text-primary opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
        Explore <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </motion.a>
  );
}

const viewOptions: { key: ViewType; icon: LucideIcon; label: string }[] = [
  { key: "list", icon: List, label: "List" },
  { key: "split", icon: Columns2, label: "Split" },
  { key: "cards", icon: CreditCard, label: "Cards" },
  { key: "grid", icon: LayoutGrid, label: "Grid" },
];

export function PTJourney({ data }: { data: JourneyData }) {
  const [view, setView] = useState<ViewType>("list");

  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center rounded-full border border-border/40 p-0.5 bg-muted/20">
            {viewOptions.map((opt) => {
              const OptIcon = opt.icon;
              return (
                <button
                  key={opt.key}
                  onClick={() => setView(opt.key)}
                  className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-medium transition-all ${
                    view === opt.key
                      ? "bg-white text-foreground shadow-sm"
                      : "text-muted-foreground/60 hover:text-foreground"
                  }`}
                >
                  <OptIcon className="h-2.5 w-2.5" />
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {view === "grid" ? (
            <motion.div key="grid" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto max-w-2xl text-center mb-14">
                <p className="text-overline text-primary">{data.label}</p>
                <h2 className="mt-3 text-display-md">{data.title}</h2>
                <p className="mt-4 text-body-md text-muted-foreground">{data.subtitle}</p>
              </motion.div>
              <div className="grid gap-px rounded-2xl border border-border/60 overflow-hidden bg-border/60 md:grid-cols-3">
                {data.products.slice(0, 3).map((product, i) => (
                  <GridCard key={product.name} product={product} delay={i * 0.08} />
                ))}
              </div>
              {data.products.length > 3 && (
                <div className="mt-px grid gap-px rounded-b-2xl border border-t-0 border-border/60 overflow-hidden bg-border/60 md:grid-cols-2 max-w-[66.8%] mx-auto">
                  {data.products.slice(3).map((product, i) => (
                    <GridCard key={product.name} product={product} delay={(i + 3) * 0.08} />
                  ))}
                </div>
              )}
            </motion.div>
          ) : view === "list" ? (
            <motion.div key="list" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto max-w-2xl text-center mb-14">
                <p className="text-overline text-primary">{data.label}</p>
                <h2 className="mt-3 text-display-md">{data.title}</h2>
                <p className="mt-4 text-body-md text-muted-foreground">{data.subtitle}</p>
              </motion.div>
              <div className="rounded-2xl border border-border/60 overflow-hidden divide-y divide-border/40 bg-white">
                {data.products.map((product, i) => {
                  const Icon = product.icon;
                  return (
                    <motion.a key={product.name} href={product.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="group flex items-center gap-5 px-6 py-5 lg:px-8 transition-colors hover:bg-neutral-100">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                        <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-label-lg">{product.name}</h3>
                        <p className="mt-0.5 text-body-xs text-muted-foreground">{product.desc}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          ) : view === "split" ? (
            <motion.div key="split" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
              <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
                <div className="grid lg:grid-cols-[1fr,1.2fr]">
                  <div className="flex flex-col justify-center p-8 lg:p-12">
                    <p className="text-overline text-primary">{data.label}</p>
                    <h2 className="mt-3 text-display-md">{data.title}</h2>
                    <p className="mt-4 text-body-md text-muted-foreground">{data.subtitle}</p>
                  </div>
                  <div className="border-t lg:border-t-0 lg:border-l border-border/40 divide-y divide-border/40">
                    {data.products.map((product, i) => {
                      const Icon = product.icon;
                      return (
                        <motion.a key={product.name} href={product.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="group flex items-start gap-4 px-6 py-5 lg:px-8 transition-colors hover:bg-neutral-100">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10 mt-0.5">
                            <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-label-lg text-foreground">{product.name}</h4>
                            <p className="mt-1 text-body-xs text-muted-foreground line-clamp-2">{product.desc}</p>
                          </div>
                          <ArrowRight className="h-4 w-4 shrink-0 self-center text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div key="cards" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto max-w-2xl text-center mb-14">
                <p className="text-overline text-primary">{data.label}</p>
                <h2 className="mt-3 text-display-md">{data.title}</h2>
                <p className="mt-4 text-body-md text-muted-foreground">{data.subtitle}</p>
              </motion.div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {data.products.map((product, i) => {
                  const Icon = product.icon;
                  return (
                    <motion.a key={product.name} href={product.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="group relative flex flex-col items-center text-center rounded-2xl border border-border/60 bg-white p-6 transition-colors">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                        <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                      </div>
                      <h3 className="text-label-md">{product.name}</h3>
                      <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">{product.desc}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-label-sm text-primary opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                        Explore <ArrowRight className="h-3 w-3" />
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { WhyMotadataData } from "./types";

export function PTWhyMotadata({ data }: { data: WhyMotadataData }) {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid lg:grid-cols-[1fr,1.2fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center p-8 lg:p-12"
            >
              <p className="text-overline text-primary">
                {data.label}
              </p>
              <h2 className="mt-3 text-display-md">
                {data.title}
              </h2>
              <p className="mt-4 text-body-md text-muted-foreground">
                {data.subtitle}
              </p>
              <div className="mt-8">
                <Link href={data.ctaHref}>
                  <Button size="lg" variant="ghost" className="h-12 px-0 text-[15px] text-foreground hover:text-primary hover:bg-transparent">
                    {data.ctaLabel} <ArrowRight className="ml-1 h-4 w-4 text-primary" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <div className="border-t lg:border-t-0 lg:border-l border-border/40 divide-y divide-border/40">
              {data.items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group flex items-start gap-4 px-6 py-6 lg:px-8 lg:py-8 transition-all hover:bg-neutral-100"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10 mt-0.5">
                      <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-1 text-body-xs text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

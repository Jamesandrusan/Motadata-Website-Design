"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import type { IndustrySolutionsData } from "./types";

export function PTIndustrySolutions({ data }: { data: IndustrySolutionsData }) {
  const [option, setOption] = useState(1);

  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center rounded-full border border-border/40 p-0.5 bg-muted/20">
            {[1, 2].map((num) => (
              <button
                key={num}
                onClick={() => setOption(num)}
                className={`flex items-center justify-center rounded-full h-5 w-5 text-[10px] font-medium transition-all ${
                  option === num
                    ? "bg-white text-foreground shadow-sm"
                    : "text-muted-foreground/60 hover:text-foreground"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-14"
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
        </motion.div>

        <AnimatePresence mode="wait">
          {option === 1 ? (
            <motion.div
              key="option1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
                <div className="grid md:grid-cols-3">
                  {data.industries.map((industry, i) => {
                    const Icon = industry.icon;
                    const isNotFirstCol = i % 3 !== 0;
                    const isTopRow = i < 3;
                    return (
                      <motion.div
                        key={industry.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        className={`group relative overflow-hidden p-6 lg:p-8 transition-colors hover:bg-neutral-50 ${
                          isNotFirstCol ? "md:border-l border-border/40" : ""
                        } ${isTopRow ? "border-b border-border/40" : ""}`}
                      >
                        <Icon className="absolute -right-3 -bottom-3 h-24 w-24 text-primary/0 transition-all duration-500 group-hover:text-primary/10" strokeWidth={1} />
                        <div className="relative z-10">
                          <h3 className="text-lg font-semibold">{industry.name}</h3>
                          <p className="mt-2 text-body-xs text-muted-foreground">
                            {industry.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="option2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {data.industries.map((industry, i) => {
                  const Icon = industry.icon;
                  return (
                    <motion.div
                      key={industry.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="group relative overflow-hidden rounded-lg border border-border/60 bg-white p-6 transition-all"
                    >
                      <DottedGlowBackground
                        className="opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                        gap={14}
                        radius={1.2}
                        opacity={0.4}
                      />
                      <div className="relative z-10">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                          <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold">{industry.name}</h3>
                        <p className="mt-2 text-body-xs text-muted-foreground">
                          {industry.desc}
                        </p>
                      </div>
                    </motion.div>
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

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { EnterpriseVisibilityData } from "./types";

export function PTEnterpriseVisibility({ data }: { data: EnterpriseVisibilityData }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
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

        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-border/40">
            {data.sections.map((section, i) => {
              const Icon = section.icon;
              const isActive = i === activeIndex;
              return (
                <div
                  key={i}
                  className={`cursor-pointer transition-[flex,background-color] duration-500 ease-in-out ${
                    isActive ? "lg:flex-[2.2] bg-neutral-50" : "lg:flex-[1] bg-white"
                  }`}
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  <div className="flex flex-col h-full px-6 py-8 lg:px-7 lg:py-10">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg mb-5 transition-colors duration-300 ${
                      isActive ? "bg-primary/10" : "bg-foreground/5"
                    }`}>
                      <Icon className={`h-5 w-5 transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-foreground/50"
                      }`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {section.title}
                    </h3>
                    <div className={`hidden lg:block overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive
                        ? "max-h-[300px] opacity-100 mt-4"
                        : "max-h-0 opacity-0 mt-0"
                    }`}>
                      <p className="text-body-xs text-muted-foreground">
                        {section.desc}
                      </p>
                    </div>
                    <p className="mt-3 text-body-xs text-muted-foreground lg:hidden">
                      {section.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

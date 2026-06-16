"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { demoProducts, type DemoProduct } from "./ld-data";

interface LdProductSelectorProps {
  onSelect: (product: DemoProduct) => void;
}

export function LdProductSelector({ onSelect }: LdProductSelectorProps) {
  return (
    <section className="relative z-10 pb-20">
      <div className="mx-auto w-full max-w-3xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-heading-lg sm:text-3xl">
            Choose a Platform
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Select which product you&apos;d like to explore
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {demoProducts.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.button
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                onClick={() => onSelect(product)}
                className="group relative rounded-2xl border border-border/60 bg-white p-8 text-left transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-label-sm text-primary mb-4">
                  <Icon className="h-3.5 w-3.5" />
                  {product.label}
                </div>

                <h3 className="text-heading-sm mb-2">
                  {product.title}
                </h3>
                <p className="text-body-xs text-muted-foreground mb-6">
                  {product.desc}
                </p>

                <div className="space-y-1.5 mb-6">
                  {product.modules.map((mod) => {
                    const ModIcon = mod.icon;
                    return (
                      <div
                        key={mod.id}
                        className="flex items-center gap-2 text-body-xs text-muted-foreground"
                      >
                        <ModIcon className="h-3.5 w-3.5 shrink-0 text-primary/50" />
                        <span>{mod.name}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center gap-1.5 text-label-md text-primary">
                  Launch Demo
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

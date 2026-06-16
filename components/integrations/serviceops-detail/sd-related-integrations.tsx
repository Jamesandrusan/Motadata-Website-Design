"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface SDRelatedIntegrationsProps {
  data: {
    label: string;
    title: string;
    items: Array<{
      name: string;
      slug: string;
    }>;
  };
}

export function SDRelatedIntegrations({ data }: SDRelatedIntegrationsProps) {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid lg:grid-cols-[1fr,1.2fr]">

            {/* Left — label + title */}
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
            </motion.div>

            {/* Right — connected list */}
            <div className="border-t lg:border-t-0 lg:border-l border-border/40 divide-y divide-border/40">
              {data.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link
                    href={
                      item.slug.startsWith("/")
                        ? item.slug
                        : `/resources/integrations/serviceops/${item.slug}`
                    }
                    className="group flex items-center justify-between px-6 py-6 lg:px-8 lg:py-8 transition-all hover:bg-neutral-100"
                  >
                    <span className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {item.name}
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-1 group-hover:text-primary" />
                  </Link>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

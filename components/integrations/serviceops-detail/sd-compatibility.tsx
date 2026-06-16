"use client";

import { motion } from "framer-motion";

interface SDCompatibilityProps {
  data: {
    headline: string;
    description: string;
  };
}

export function SDCompatibility({ data }: SDCompatibilityProps) {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="px-8 py-6 text-center"
        >
          <h3 className="text-lg font-semibold text-foreground mb-2">{data.headline}</h3>
          <p className="text-body-xs text-muted-foreground max-w-2xl mx-auto">
            {data.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

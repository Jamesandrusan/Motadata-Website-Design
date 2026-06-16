"use client";

import { motion } from "framer-motion";

export function BlogHero() {
  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-overline-sm text-muted-foreground/60">
            Blog
          </p>
          <h1 className="mt-3 text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.1] tracking-tight">
            Insights & Updates
          </h1>
          <p className="mt-4 text-body-md text-muted-foreground">
            Explore the latest trends in AI-native ITOM, observability, service
            management, and engineering best practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export function SOTestimonial() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <svg
                className="h-5 w-5 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>
            </div>
          </div>
          <blockquote className="text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
            &ldquo;ServiceOps unified our service operations across teams and geographies.
            Automation, visibility, and ITIL alignment improved dramatically.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="text-label-md text-foreground">IT Operations Leader</p>
            <p className="text-body-xs text-muted-foreground">
              Head of IT Operations, Global Manufacturing Enterprise
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

interface SDHowItWorksProps {
  data: {
    label: string;
    title: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
}

export function SDHowItWorks({ data }: SDHowItWorksProps) {
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
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/30"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 text-heading-sm text-primary transition-colors group-hover:bg-primary/10">
                {i + 1}
              </div>
              <h3 className="mt-4 text-label-lg">{step.title}</h3>
              <p className="mt-2 text-body-xs text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

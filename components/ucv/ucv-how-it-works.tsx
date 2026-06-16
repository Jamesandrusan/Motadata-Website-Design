"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Discover compute assets across hybrid environments",
  },
  {
    num: "02",
    title: "Ingest",
    desc: "Ingest telemetry via agents, APIs, and protocols",
  },
  {
    num: "03",
    title: "Normalize",
    desc: "Normalize data into Motastore's unified data model",
  },
  {
    num: "04",
    title: "Correlate",
    desc: "Correlate host, VM, and service dependencies",
  },
  {
    num: "05",
    title: "Analyze",
    desc: "Apply AI-driven baselines and anomaly detection",
  },
  {
    num: "06",
    title: "Visualize",
    desc: "Visualize insights through SLA-linked dashboards and topology views",
  },
];

export function UCVHowItWorks() {
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
            How It Works
          </p>
          <h2 className="mt-3 text-display-md">
            Unified Compute Intelligence Architecture
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-2xl border border-border/60 bg-white p-6 lg:p-8 transition-colors hover:bg-neutral-50"
            >
              <span className="text-display-lg text-primary/20 transition-colors group-hover:text-primary/40">
                {step.num}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-body-xs text-muted-foreground">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-12 max-w-3xl text-center text-body-md text-muted-foreground"
        >
          This ensures compute visibility is not isolated, but fully integrated into your observability ecosystem.
        </motion.p>
      </div>
    </section>
  );
}

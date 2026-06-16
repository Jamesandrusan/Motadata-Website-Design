"use client";

import { motion } from "framer-motion";

export function UCVComputeIntelligence() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid lg:grid-cols-[1fr,1.2fr]">
            {/* Left — heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center p-8 lg:p-12"
            >
              <p className="text-overline text-primary">
                Intelligence
              </p>
              <h2 className="mt-3 text-display-md">
                From Metrics to Meaningful Compute Intelligence
              </h2>
              <p className="mt-4 text-body-md text-muted-foreground">
                Transforming raw telemetry into actionable operational clarity.
              </p>
            </motion.div>

            {/* Right — paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t lg:border-t-0 lg:border-l border-border/40 p-8 lg:p-12 flex flex-col justify-center"
            >
              <div className="space-y-5">
                <p className="text-body-sm text-muted-foreground">
                  Modern compute environments span physical servers, virtual machines, hypervisors, and hyper-converged systems. Traditional monitoring surfaces metrics, but fails to connect them across layers. Motadata unifies compute telemetry into a single operational model.
                </p>
                <p className="text-body-sm text-muted-foreground">
                  Metrics from operating systems, virtualization platforms, and infrastructure layers are ingested, normalized, and correlated through Motastore. This allows teams to understand not just what is happening, but why it is happening and how it impacts dependent services.
                </p>
                <p className="text-body-sm text-muted-foreground">
                  With AI-driven baselines and dependency awareness, teams detect anomalies earlier, isolate contention points faster, and resolve issues before they impact business operations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

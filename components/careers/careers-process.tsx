"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Apply Online",
    description:
      "Submit your application with resume and portfolio. We review every application.",
  },
  {
    num: "02",
    title: "Initial Screen",
    description:
      "A 30-minute call with our recruiting team to discuss your background and interests.",
  },
  {
    num: "03",
    title: "Technical Round",
    description:
      "A hands-on assessment relevant to your role — coding challenge, design exercise, or case study.",
  },
  {
    num: "04",
    title: "Final Interview",
    description:
      "Meet the team leads. We assess mutual fit and discuss the role, growth, and expectations.",
  },
];

export function CareersProcess() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-overline text-primary">
            Hiring Process
          </p>
          <h2 className="mt-3 text-display-md">
            What to Expect
          </h2>
        </motion.div>

        <div className="relative mt-16">
          {/* Horizontal connecting line (desktop only) */}
          <div className="pointer-events-none absolute left-0 right-0 top-[60px] hidden h-px bg-border md:block" />

          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative rounded-xl border border-border bg-white p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-heading-xl text-primary">{step.num}</p>
                <h3 className="mt-3 text-label-lg">{step.title}</h3>
                <p className="mt-2 text-body-xs text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

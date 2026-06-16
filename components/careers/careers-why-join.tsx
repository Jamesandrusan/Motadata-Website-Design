"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

const benefits: { title: string; desc: string; iconPath: ReactNode }[] = [
  {
    title: "Competitive Compensation",
    desc: "Competitive salary and equity packages that reward your contributions.",
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  },
  {
    title: "Health & Wellness",
    desc: "Comprehensive health insurance and wellness programs for you and your family.",
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />,
  },
  {
    title: "Flexible Work",
    desc: "Flexible work arrangements and unlimited PTO policy.",
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  },
  {
    title: "Growth & Development",
    desc: "Learning budget, mentorship programs, and career advancement opportunities.",
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />,
  },
];

export function CareersWhyJoin() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-stretch">
          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-label-md uppercase tracking-widest text-primary">
              Why Join Motadata?
            </p>

            <h2 className="mt-4 text-display-md">
              Why Join Motadata?
            </h2>

            <div className="mt-3 h-px w-16 bg-primary/40" />

            <p className="mt-6 text-body-md text-muted-foreground">
              We&apos;re committed to building a culture where talented people
              can do their best work and grow their careers.
            </p>
          </motion.div>

          {/* ── Right: 2x2 benefits grid ── */}
          <div className="grid grid-cols-2 gap-px rounded-2xl border border-border/60 bg-border/40 overflow-hidden h-full">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative bg-white p-8 lg:p-10 overflow-hidden"
              >
                {/* Icon — big & faded by default, shrinks & fills on hover */}
                <svg
                  className="pointer-events-none absolute right-3 top-3 h-10 w-10 scale-[2] text-primary/[0.06] transition-all duration-500 ease-out origin-top-right group-hover:scale-[1] group-hover:text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  {b.iconPath}
                </svg>

                <div className="relative z-10">
                  <h3 className="text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 text-body-xs text-muted-foreground">
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

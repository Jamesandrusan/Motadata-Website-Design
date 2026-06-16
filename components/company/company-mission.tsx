"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

/* ── CountUp ── */
function CountUp({ value, suffix = "", duration = 1.8 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const ms = duration * 1000;
    function tick(now: number) {
      const progress = Math.min((now - startTime) / ms, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased).toString());
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const stats: { value: number; suffix: string; label: string; iconPath: ReactNode }[] = [
  {
    value: 15, suffix: "+", label: "Years",
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  },
  {
    value: 1000, suffix: "+", label: "Customers",
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />,
  },
  {
    value: 50, suffix: "+", label: "Countries",
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />,
  },
  {
    value: 200, suffix: "+", label: "Team Members",
    iconPath: <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />,
  },
];

export function CompanyMission() {
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
              About Us
            </p>

            <h2 className="mt-4 text-display-md">
              Reinventing IT Operations for Businesses
            </h2>

            <div className="mt-3 h-px w-16 bg-primary/40" />

            <p className="mt-6 text-body-md text-muted-foreground">
              Motadata, a brand name of Mindarray Systems Pvt Ltd, is a Global
              software organization that provides a solution for IT operations
              through its AIOps and ServiceOps platform.
            </p>
            <p className="mt-4 text-body-xs text-muted-foreground/80">
              Both platforms leverage the power of the Deep Learning Framework
              for IT Operation (DFIT) to enhance visibility and control over IT
              infrastructure. For an organization, every event matters, and
              Motadata collects all the events from heterogeneous and hybrid IT
              infrastructure, processes, correlates and provides powerful
              insights to drive business outcomes.
            </p>
          </motion.div>

          {/* ── Right: Stats 2x2 grid ── */}
          <div className="grid grid-cols-2 gap-px rounded-2xl border border-border/60 bg-border/40 overflow-hidden h-full">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative bg-white p-8 lg:p-10 overflow-hidden"
              >
                {/* Icon — top-right by default, scales bigger toward bottom-left on hover */}
                <svg
                  className="pointer-events-none absolute right-3 top-3 h-10 w-10 scale-[2] text-primary/[0.06] transition-all duration-500 ease-out origin-top-right group-hover:scale-[1] group-hover:text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  {s.iconPath}
                </svg>

                <p className="stat-number text-display-lg relative z-10">
                  {s.value}{s.suffix}
                </p>
                <p className="mt-2 text-caption uppercase tracking-wider text-muted-foreground relative z-10">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

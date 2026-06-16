"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import type { ImpactStatsData } from "./types";

function CircularProgress({ percent, delay }: { percent: number; delay: number }) {
  const size = 120;
  const stroke = 8;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  const opacity = percent / 100;

  return (
    <svg width={size} height={size} className="mx-auto">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" className="text-primary/10" strokeWidth={stroke} />
      <motion.circle
        cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={`hsl(var(--primary) / ${opacity})`} strokeWidth={stroke} strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
        style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
      />
    </svg>
  );
}

function CountUp({ value, suffix = "%", duration = 1.5 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const start = 0;
    const end = value;
    const startTime = performance.now();
    const ms = duration * 1000;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / ms, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;
      if (end % 1 !== 0) { setDisplay(current.toFixed(1)); } else { setDisplay(Math.round(current).toString()); }
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  return <span ref={ref}>{display}{suffix}</span>;
}

function SectionHeading({ data }: { data: ImpactStatsData; center?: boolean }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl mb-10 mx-auto text-center">
      <p className="text-overline text-primary">{data.label}</p>
      <h2 className="mt-3 text-display-md">{data.title}</h2>
      <p className="mt-4 text-body-md text-muted-foreground">{data.subtitle}</p>
    </motion.div>
  );
}

function OptionWrapper({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <motion.div key={id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
      {children}
    </motion.div>
  );
}

export function PTImpactStats({ data }: { data: ImpactStatsData }) {
  const [option, setOption] = useState(1);

  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center rounded-full border border-border/40 p-0.5 bg-muted/20">
            {[1, 2, 3, 4, 5].map((num) => (
              <button key={num} onClick={() => setOption(num)} className={`flex items-center justify-center rounded-full h-5 w-5 text-[10px] font-medium transition-all ${option === num ? "bg-white text-foreground shadow-sm" : "text-muted-foreground/60 hover:text-foreground"}`}>
                {num}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {option === 1 ? (
            <OptionWrapper id="option1">
              <SectionHeading data={data} />
              <div className="grid gap-6 md:grid-cols-3">
                {data.stats.map((s, i) => (
                  <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="py-6 text-center">
                    <p className="stat-number text-display-lg sm:text-5xl"><CountUp value={s.percent} /></p>
                    <p className="mt-4 text-xl font-semibold">{s.label}</p>
                    <p className="mt-2 text-body-xs text-muted-foreground">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </OptionWrapper>
          ) : option === 2 ? (
            <OptionWrapper id="option2">
              <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
                <div className="grid lg:grid-cols-[1fr,1.5fr]">
                  <div className="flex flex-col justify-center p-8 lg:p-12">
                    <p className="text-overline text-primary">{data.label}</p>
                    <h2 className="mt-3 text-display-md">{data.title}</h2>
                    <p className="mt-4 text-body-md text-muted-foreground">{data.subtitle}</p>
                  </div>
                  <div className="border-t lg:border-t-0 lg:border-l border-border/40 divide-y divide-border/40">
                    {data.stats.map((s, i) => (
                      <motion.div key={`split-${s.num}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="group px-6 py-6 lg:px-8 lg:py-8 transition-colors hover:bg-neutral-50">
                        <p className="stat-number text-heading-xl sm:text-4xl"><CountUp value={s.percent} /></p>
                        <p className="mt-2 text-xl font-semibold">{s.label}</p>
                        <p className="mt-1 text-body-xs text-muted-foreground">{s.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </OptionWrapper>
          ) : option === 3 ? (
            <OptionWrapper id="option3">
              <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
                <div className="p-8 lg:p-12 border-b border-border/40">
                  <p className="text-overline text-primary">{data.label}</p>
                  <h2 className="mt-3 text-display-md">{data.title}</h2>
                  <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">{data.subtitle}</p>
                </div>
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/40">
                  {data.stats.map((s, i) => (
                    <motion.div key={`box-${s.num}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="px-6 py-8 lg:px-8 lg:py-10 transition-colors hover:bg-neutral-50">
                      <p className="stat-number text-heading-xl sm:text-4xl"><CountUp value={s.percent} /></p>
                      <p className="mt-3 text-xl font-semibold">{s.label}</p>
                      <p className="mt-2 text-body-xs text-muted-foreground">{s.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </OptionWrapper>
          ) : option === 4 ? (
            <OptionWrapper id="option4">
              <SectionHeading data={data} />
              <div className="grid gap-6 md:grid-cols-3">
                {data.stats.map((s, i) => (
                  <motion.div key={`ring-${s.num}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="py-6 text-center">
                    <div className="relative inline-flex items-center justify-center mb-4">
                      <CircularProgress percent={s.percent} delay={i * 0.15} />
                      <p className="absolute stat-number text-heading-lg"><CountUp value={s.percent} /></p>
                    </div>
                    <p className="text-xl font-semibold">{s.label}</p>
                    <p className="mt-2 text-body-xs text-muted-foreground">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </OptionWrapper>
          ) : (
            <OptionWrapper id="option5">
              <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
                <div className="grid lg:grid-cols-[1fr,1.5fr]">
                  <div className="flex flex-col justify-center p-8 lg:p-12">
                    <p className="text-overline text-primary">{data.label}</p>
                    <h2 className="mt-3 text-display-md">{data.title}</h2>
                    <p className="mt-4 text-body-md text-muted-foreground">{data.subtitle}</p>
                  </div>
                  <div className="border-t lg:border-t-0 lg:border-l border-border/40 divide-y divide-border/40">
                    {data.stats.map((s, i) => (
                      <motion.div key={`splitbar-${s.num}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="px-6 py-6 lg:px-8 lg:py-8 transition-colors hover:bg-neutral-50">
                        <div className="flex items-baseline justify-between mb-1">
                          <p className="text-xl font-semibold">{s.label}</p>
                          <p className="stat-number text-heading-lg ml-4 shrink-0"><CountUp value={s.percent} /></p>
                        </div>
                        <p className="text-body-xs text-muted-foreground mb-3">{s.desc}</p>
                        <div className="h-[3px] w-full rounded-full bg-foreground/[0.06] overflow-hidden">
                          <motion.div className="h-full rounded-full" style={{ backgroundColor: `hsl(var(--primary) / ${s.percent / 100})` }} initial={{ width: 0 }} whileInView={{ width: `${s.percent}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </OptionWrapper>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

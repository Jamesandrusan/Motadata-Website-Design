"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const steps = [
  { num: "01", title: "Selection", desc: "Application review and partner fit assessment" },
  { num: "02", title: "On-boarding & Training", desc: "Comprehensive enablement and certification" },
  { num: "03", title: "Engagement", desc: "Active collaboration and opportunity generation" },
  { num: "04", title: "Measurement", desc: "Performance tracking and program optimization" },
];

export function PtProgression() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", country: "" });

  const inputClass =
    "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/40 focus:ring-2 focus:ring-ring/30";

  return (
    <section id="become-partner" className="relative z-10 py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">

          {/* Left — Header + Timeline */}
          <div>
            <p className="mb-3 text-overline text-primary">
              Partner Membership Progression
            </p>
            <h2 className="text-heading-xl lg:text-4xl">
              How We Work Together
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              You will go through the following stages as a Motadata partner, creating synergy at every step.
            </p>

            {/* Timeline steps */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {steps.map((s) => (
                <div
                  key={s.num}
                  className="group/card flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
                >
                  <span className="text-heading-lg text-primary/20">{s.num}</span>
                  <h3 className="mt-2 text-base font-bold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-body-xs text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <h3 className="text-heading-md text-foreground">
              Fill in the form below to get started
            </h3>
            <p className="mt-2 text-body-xs text-muted-foreground">
              Become a partner and unlock new growth opportunities.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 space-y-4"
            >
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Company Name"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className={inputClass}
              />
              <input
                type="email"
                placeholder="Business Email (info@example.com)"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
              <input
                type="tel"
                placeholder="Contact number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
              <div className="relative">
                <select
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className={`${inputClass} appearance-none pr-10`}
                >
                  <option value="">Country</option>
                  <option value="US">United States</option>
                  <option value="IN">India</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom</option>
                  <option value="DE">Germany</option>
                  <option value="SG">Singapore</option>
                  <option value="AU">Australia</option>
                  <option value="Other">Other</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>

              <p className="text-caption text-muted-foreground">
                By clicking the button below, you agree to the{" "}
                <a href="#" className="text-primary hover:underline underline-offset-2">Privacy policy</a>
              </p>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-label-md text-primary-foreground transition-opacity hover:opacity-90"
              >
                GET IN TOUCH
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

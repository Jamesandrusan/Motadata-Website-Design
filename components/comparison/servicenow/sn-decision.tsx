"use client";

import { Check, GitMerge, ArrowRight } from "lucide-react";
import { decision } from "@/lib/servicenow-comparison-data";
import { Reveal } from "./sn-shared";

export function SnDecision() {
  return (
    <section
      id="decision"
      className="relative z-10 scroll-mt-28 border-t border-border bg-background py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Centered header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-overline text-primary">Final Verdict</p>
            <h2 className="mt-3 text-display-md leading-[1.1] text-foreground">
              How to choose between Motadata and ServiceNow
            </h2>
            <p className="mt-4 text-body-md text-muted-foreground">
              {decision.verdictIntro}
            </p>
          </div>
        </Reveal>

        {/* Connected choose-if card + coexistence footer */}
        <Reveal delay={80}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border">
            <div className="grid md:grid-cols-2">
              {/* Motadata — recommended */}
              <div className="border-b border-border bg-primary/[0.03] p-8 sm:p-10 md:border-b-0 md:border-r">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <h3 className="text-heading-md text-foreground">
                    Choose Motadata ServiceOps if
                  </h3>
                  <span className="ml-auto rounded-full bg-primary/10 px-2.5 py-1 text-label-sm text-primary">
                    Recommended
                  </span>
                </div>
                <ul className="mt-6 space-y-4 border-t border-primary/15 pt-6">
                  {decision.motadataIf.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      <span className="text-body-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ServiceNow */}
              <div className="bg-card p-8 sm:p-10">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                  <h3 className="text-heading-md text-foreground">
                    Choose ServiceNow if
                  </h3>
                </div>
                <ul className="mt-6 space-y-4 border-t border-border/60 pt-6">
                  {decision.servicenowIf.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                      <span className="text-body-sm text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Coexistence — connected footer */}
            <div className="flex items-start gap-3.5 border-t border-border bg-muted/20 p-6 sm:px-10 sm:py-7">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background text-primary">
                <GitMerge className="h-4 w-4" />
              </span>
              <p className="text-body-sm text-muted-foreground">
                {decision.coexist}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Closing CTA — orange gradient */}
        <Reveal delay={120}>
          <div
            className="relative mt-8 overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-14"
            style={{ background: "linear-gradient(135deg, #F17463, #D4543F)" }}
          >
            <div className="relative">
              <h3 className="mx-auto max-w-2xl text-display-md text-white">
                See ServiceOps against your own workflows
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-body-md text-white/75">
                Start your free trial or request a demo, and price complete ITSM
                (service desk, assets, and patch in one license) against your own
                fulfiller count.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#"
                  className="group inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-label-md text-foreground transition-opacity hover:opacity-90"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 text-label-md text-white transition-colors hover:bg-white/20"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/servicenow-comparison-data";
import { Reveal } from "./sn-shared";

export function SnFaq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="faq"
      className="relative z-10 scroll-mt-28 border-t border-border py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
            <div className="grid lg:grid-cols-[1fr_1.2fr]">
              {/* Left — title */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <p className="text-overline text-primary">FAQ</p>
                <h2 className="mt-3 text-display-md text-foreground">
                  Frequently asked questions
                </h2>
                <p className="mt-4 text-body-md text-muted-foreground">
                  Everything teams ask when weighing Motadata ServiceOps against
                  ServiceNow.
                </p>
              </div>

              {/* Right — questions */}
              <div className="divide-y divide-border/60 border-t border-border/60 lg:border-l lg:border-t-0">
                {faqs.map((item, i) => {
                  const isOpen = i === openIndex;
                  return (
                    <div key={item.q}>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? -1 : i)}
                        className="group flex w-full items-center justify-between gap-4 px-6 py-6 text-left transition-colors hover:bg-muted/30 lg:px-8 lg:py-7"
                        aria-expanded={isOpen}
                      >
                        <span
                          className={`pr-2 text-label-lg transition-colors ${
                            isOpen
                              ? "text-primary"
                              : "text-foreground group-hover:text-primary"
                          }`}
                        >
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                            isOpen
                              ? "rotate-180 text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-6 pb-6 text-body-xs text-muted-foreground lg:px-8 lg:pb-7">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

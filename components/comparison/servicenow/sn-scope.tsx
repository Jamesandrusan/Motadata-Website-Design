"use client";

import { Reveal } from "./sn-shared";

const items = [
  "Core ITSM modules and how they are packaged across both platforms",
  "Differences in asset, patch, and configuration management depth",
  "AI capabilities and pricing impact",
  "Deployment effort, usability, and implementation timelines",
  "Total cost of ownership and ideal use cases for each platform",
];

/* Motadata brand pattern mark — used as the bullet marker (matches the
   "Key Highlights" bullet style elsewhere on the site). */
function PatternMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.9 14.9"
      className="mt-1 h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path fill="#f17463" d="M0,10.4c0,2.5,2,4.4,4.4,4.4h0V6h0C2,6,0,8,0,10.4Z" />
      <path fill="#f17463" d="M14.9,4.4c0-2.5-2-4.4-4.4-4.4h0v8.9h0c2.4,0,4.4-2,4.4-4.4Z" />
      <path fill="#f17463" d="M6,10.4c0,2.5,2,4.4,4.4,4.4s4.4-2,4.4-4.4h0c0,0-8.9,0-8.9,0h0Z" />
      <path fill="#f17463" d="M8.9,4.4C8.9,2,6.9,0,4.4,0S0,2,0,4.4h0c0,0,8.9,0,8.9,0h0Z" />
    </svg>
  );
}

export function SnScope() {
  return (
    <section className="relative z-10 py-6">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="grid lg:grid-cols-[1fr_2fr]">
              {/* Left — label + title only */}
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <p className="text-overline text-primary">What we cover</p>
                <h2 className="mt-4 text-display-md leading-[1.1] text-foreground">
                  In this comparison, we look at
                </h2>
                <div className="mt-6 h-1 w-12 rounded-full bg-primary" />
              </div>

              {/* Right — bullets with brand pattern marker */}
              <div className="border-t border-border p-8 lg:border-l lg:border-t-0 lg:p-10">
                <ul className="space-y-6">
                  {items.map((text) => (
                    <li key={text} className="flex items-start gap-3.5">
                      <PatternMark />
                      <span className="text-body-md text-foreground">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

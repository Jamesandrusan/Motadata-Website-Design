"use client";

import { useState } from "react";
import {
  InfinityHero,
  InfinityWhyNow,
  InfinityTco,
  InfinityPipeline,
  InfinityLicensing,
  InfinityAgenticAi,
  InfinityAudiences,
  InfinityFaq,
  InfinityCommitment,
} from "./infinity-launch-page";
import { InfinityHero as InfinityHeroV2 } from "./infinity-launch-page-v2";
import { InfinityConcisePage } from "./infinity-concise-page";

function Divider() {
  return (
    <div className="relative z-10 mx-auto max-w-7xl">
      <div className="section-divider" />
    </div>
  );
}

/* Page version switcher — 1: full launch page, 2: concise text-based version.
   The toggle lives beside the hero badge. */
export function InfinityVersionedPage() {
  const [version, setVersion] = useState<1 | 2>(1);

  return (
    <>
      {/* Sticky version switcher — always available while scrolling */}
      <div className="fixed bottom-6 right-6 z-[200] flex items-center gap-1.5 rounded-full border border-border/60 bg-white px-3 py-2 shadow-lg">
        <span className="text-[12px] font-semibold text-muted-foreground">Version</span>
        {([1, 2] as const).map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setVersion(n)}
            aria-label={`Page version ${n}`}
            className={`h-6 w-6 rounded-full text-[11px] font-semibold transition-colors ${
              version === n
                ? "bg-primary text-primary-foreground"
                : "bg-foreground/5 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      {version === 1 ? (
        <InfinityHero version={version} onVersionChange={setVersion} />
      ) : (
        <InfinityHeroV2 version={version} onVersionChange={setVersion} />
      )}

      <Divider />

      {version === 1 ? (
        <>
          <InfinityWhyNow />
          <Divider />
          <InfinityTco />
          <Divider />
          <InfinityPipeline />
          <Divider />
          <InfinityLicensing />
          <Divider />
          <InfinityAgenticAi />
          <Divider />
          <InfinityAudiences />
          <Divider />
          <InfinityFaq />
          <Divider />
          <InfinityCommitment />
        </>
      ) : (
        <InfinityConcisePage />
      )}

      <Divider />
    </>
  );
}

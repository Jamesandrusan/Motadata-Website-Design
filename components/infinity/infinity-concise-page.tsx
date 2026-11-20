"use client";

import {
  InfinityWhyNow,
  InfinityTco,
  InfinityPipeline,
  InfinityLicensing,
  InfinityAgenticAi,
  InfinityAudiences,
  InfinityFaq,
  InfinityCommitment,
} from "./infinity-launch-page-v2";

function Divider() {
  return (
    <div className="relative z-10 mx-auto max-w-7xl">
      <div className="section-divider" />
    </div>
  );
}

/* Page option 2 — identical layout to option 1, concise copy swapped in
   (sections come from infinity-launch-page-v2.tsx). */
export function InfinityConcisePage() {
  return (
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
  );
}

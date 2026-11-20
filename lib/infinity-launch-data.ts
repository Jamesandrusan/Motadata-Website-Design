/**
 * ObserveOps Infinity: launch content.
 *
 * The launch page content lives inline in
 * components/infinity/infinity-launch-page.tsx and mirrors the approved
 * launch page copy exactly (observeops-infinity-launch source). This file
 * keeps only what the homepage banner needs.
 */

export const INFINITY_ROUTE = "/products/observeops/infinity";

export const INFINITY_BANNER = {
  eyebrow: "Now Generally Available",
  titleLead: "ObserveOps",
  titleAccent: "Infinity",
  titleTail: "is here.",
  titleSecond: "Four foundations. One edition.",
  markCaption: "One edition · No feature limits",
  primaryCta: { label: "Explore the launch", href: INFINITY_ROUTE },
  secondaryCta: { label: "Talk to us", href: "/contact" },
  pillars: [
    { num: "01", label: "Lower Hardware TCO" },
    { num: "02", label: "Observability Pipeline" },
    { num: "03", label: "Unified Licensing" },
    { num: "04", label: "Agentic-AI Ready" },
  ],
} as const;

/* Top-of-page announcement (SuperOps-style): a tall light hero banner that
   scrolls away, plus a slim strip that stays pinned above the navbar. */
export const INFINITY_TOP_BANNER = {
  overline: "One edition. No tiers. No feature limits.",
  headlineLead: "Introducing",
  headlineAccent: "ObserveOps Infinity",
  headlineTail: "Four foundations. One edition.",
  status: "Now generally available.",
  primaryCta: { label: "Explore the launch", href: INFINITY_ROUTE },
  secondaryCta: { label: "Talk to us", href: "/contact" },
  strip: {
    label: "New",
    text: "ObserveOps Infinity: up to 30–40% lower hardware footprint, with a full observability pipeline included",
    cta: { label: "See what's new", href: INFINITY_ROUTE },
  },
} as const;

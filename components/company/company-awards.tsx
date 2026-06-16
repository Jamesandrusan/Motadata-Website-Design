"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

/* ── Brand Logos ──────────────────────────────────────────────── */

function CapterraLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 28" fill="none" className={className} aria-label="Capterra">
      <polygon points="0,14 11,0 11,9 22,9 22,19 11,19 11,28" fill="#FF6C2F" />
      <text x="27" y="20" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14" fill="#1A1A2E">Capterra</text>
    </svg>
  );
}

function GetAppLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 95 28" fill="none" className={className} aria-label="GetApp">
      <rect x="0" y="4" width="20" height="20" rx="4" fill="#7A5AF8" />
      <text x="4" y="19" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="13" fill="white">G</text>
      <text x="26" y="20" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14" fill="#1A1A2E">GetApp</text>
    </svg>
  );
}

function G2Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 24" fill="none" className={className} aria-label="G2">
      <text x="0" y="20" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="22" fill="#FF492C" letterSpacing="-1">G2</text>
    </svg>
  );
}

function CrozdeskLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 28" fill="none" className={className} aria-label="Crozdesk">
      <circle cx="12" cy="14" r="11" fill="#0085CA" />
      <path d="M18 8.5 A8 8 0 1 0 18 19.5" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <text x="28" y="20" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14" fill="#1A1A2E">Crozdesk</text>
    </svg>
  );
}

/* ── Data ─────────────────────────────────────────────────────── */

const g2Badges = [
  { region: "EUROPE",         award: "High Performer", season: "Fall 2025" },
  { region: "Momentum",       award: "High Performer", season: "Fall 2025" },
  { region: "UNITED KINGDOM", award: "Leader",         season: "Fall 2025" },
  { region: "LATIN AMERICA",  award: "High Performer", season: "Fall 2025" },
];

const reviewSites = [
  { name: "Capterra", rating: "4.7", reviews: "190+", Logo: CapterraLogo, accent: "#FF6C2F" },
  { name: "GetApp",   rating: "4.7", reviews: "190+", Logo: GetAppLogo,   accent: "#7A5AF8" },
  { name: "G2",       rating: "4.7", reviews: "120+", Logo: G2Logo,       accent: "#FF492C" },
  { name: "Crozdesk", rating: "4.8", reviews: "80+",  Logo: CrozdeskLogo, accent: "#0085CA" },
];

/* ── Component ────────────────────────────────────────────────── */

export function CompanyAwards() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-14"
        >
          <p className="text-label-md uppercase tracking-widest text-primary">
            Recognition
          </p>
          <h2 className="mt-3 text-heading-xl text-foreground sm:text-4xl">
            An Award-Winning Software.
            <br />
            Loved by Customers.
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Global trust. Proven results. 5,800+ organizations. 4.7/5 star average.
          </p>
        </motion.div>

        {/* Unified container */}
        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">

          {/* G2 Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            {g2Badges.map((badge, i) => (
              <motion.div
                key={badge.region}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className={`flex flex-col items-center justify-center gap-1 px-4 py-8 text-center
                  ${i % 2 !== 0 ? "border-l border-border/40" : ""}
                  ${i >= 2 ? "border-t border-border/40 md:border-t-0" : ""}
                  ${i !== 0 ? "md:border-l border-border/40" : "md:border-l-0"}
                `}
              >
                <span className="text-base font-black tracking-tight text-[#FF492C]">G2</span>
                <p className="text-[13px] font-semibold text-foreground leading-tight">{badge.award}</p>
                <p className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-wider mt-0.5">
                  {badge.season} · {badge.region}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Review ratings — footer band */}
          <div className="border-t border-border/40 bg-neutral-50/60">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {reviewSites.map((site, i) => {
                const { Logo } = site;
                return (
                  <motion.div
                    key={site.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    className={`flex items-center justify-center gap-4 px-6 py-5
                      ${i % 2 !== 0 ? "border-l border-border/40" : ""}
                      ${i >= 2 ? "border-t border-border/40 sm:border-t-0" : ""}
                      ${i !== 0 ? "sm:border-l border-border/40" : "sm:border-l-0"}
                    `}
                  >
                    <Logo className="h-5 w-auto shrink-0" />
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="h-3 w-3" style={{ fill: site.accent, color: site.accent }} />
                        ))}
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-label-md-strong text-foreground">{site.rating}</span>
                        <span className="text-[10px] text-muted-foreground">/5 · {site.reviews} reviews</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

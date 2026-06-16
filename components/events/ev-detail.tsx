"use client";

import Image from "next/image";
import {
  Calendar,
  MapPin,
  Hash,
  CheckCircle,
  Cpu,
  Activity,
  Settings,
  Award,
  ArrowRight,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { EvRecap } from "@/components/events/ev-recap";
import { EvPartners } from "@/components/events/ev-partners";
import type { EventDetailData, EventStatus, EventTeamMember } from "@/components/events/ev-event-data";

const highlightIcons = [Cpu, Activity, Settings, Award];

/* ── Speaker card (Option 1 — big-type editorial, shared style with webinar detail) ── */

function LinkedInGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 11.01-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function MemberAvatar({ member }: { member: EventTeamMember }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = member.image && !imgFailed;
  return (
    <div className="relative h-32 w-28 shrink-0 overflow-hidden rounded-xl bg-foreground/5 ring-1 ring-border/60 transition-transform duration-500 group-hover:scale-110">
      {showImage ? (
        <Image
          src={member.image as string}
          alt={member.name}
          fill
          sizes="112px"
          className="object-cover"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-heading-md text-foreground/50">
          {member.initials}
        </div>
      )}
    </div>
  );
}

function SpeakerTicket({ member, index }: { member: EventTeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8 transition-all hover:border-primary/40"
    >
      <div className="flex items-center gap-6">
        <div className="min-w-0 flex-1">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-caption text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Speaker
          </span>

          <div className="mt-5 flex items-center gap-2">
            <h3 className="text-[clamp(1.05rem,1.6vw,1.25rem)] font-bold leading-tight tracking-tight text-foreground">
              {member.name}
            </h3>
            <a
              href="#"
              aria-label={`${member.name} on LinkedIn`}
              className="text-primary transition-colors hover:text-[#0A66C2]"
            >
              <LinkedInGlyph className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-3 text-body-xs text-foreground">{member.role}</p>
          <p className="mt-1 text-caption text-muted-foreground/70">Motadata</p>
        </div>

        <MemberAvatar member={member} />
      </div>
    </motion.div>
  );
}

/* ── Main component ── */

export function EvDetail({ data }: { data: EventDetailData }) {
  /* Preview switch — flip the page between Upcoming and Past to check both. */
  const [statusOverride, setStatusOverride] = useState<EventStatus>(data.status ?? "upcoming");
  const isPast = statusOverride === "past";
  const hasRecap = Boolean(data.recap && data.recap.media.length > 0);

  const infoCards = [
    { icon: Calendar, label: "Date & Time", value: data.date, sub: data.dateTime },
    { icon: MapPin, label: "Location", value: data.locationDetail ?? data.location },
    ...(data.booth
      ? [{ icon: Hash, label: "Booth Number", value: data.boothDetail ?? data.booth }]
      : []),
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative z-10 overflow-hidden py-24 lg:py-32">
        <HeroOrbs />

        {/* Preview switch (Upcoming / Past) — pinned right of the hero */}
        <div className="absolute right-4 top-6 z-30 flex items-center gap-1 rounded-full border border-border/60 bg-card/90 p-1 shadow-sm backdrop-blur sm:right-6">
          <span className="hidden px-2 text-[11px] font-medium text-muted-foreground sm:inline">Preview:</span>
          {(["upcoming", "past"] as EventStatus[]).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStatusOverride(s)}
              className={`rounded-full px-3 py-1 text-[11px] font-semibold capitalize transition-colors ${
                statusOverride === s ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-6xl text-center">
            <FadeUp>
              <div className="flex justify-center">
                <AnimatedBadge text={isPast ? "Past Event" : "Events"} />
              </div>
            </FadeUp>

            <FadeUp delay={150}>
              <h1 className="mt-6 text-[clamp(2.2rem,5.5vw,4.75rem)] font-bold leading-[1.05] tracking-tight">
                {data.title}
              </h1>
            </FadeUp>

            <FadeUp delay={300}>
              <p className="mx-auto mt-5 max-w-3xl text-body-md text-muted-foreground">
                {data.description}
              </p>
            </FadeUp>

            <FadeUp delay={450}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                {isPast ? (
                  hasRecap ? (
                    <a
                      href="#recap"
                      className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-7 text-label-md text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg"
                    >
                      View Event Highlights
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : null
                ) : (
                  <a
                    href={data.registerUrl ?? "#register"}
                    {...(data.registerUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-7 text-label-md text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg"
                  >
                    Register Now
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Partners / Co-sponsors ── */}
      {data.partners && data.partners.length > 0 && (
        <EvPartners partners={data.partners} label={data.partnersLabel} eventTitle={data.shortTitle ?? data.title} />
      )}

      {/* ── About Motadata ── */}
      <section className="relative z-10 py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="rounded-2xl border border-border/60 overflow-hidden bg-card">
            <div className="grid lg:grid-cols-[1.2fr,1fr]">

              {/* Left — Intro + Platform bullets */}
              <div className="p-8 lg:p-12">
                <h2 className="text-display-md">
                  Motadata at {data.shortTitle ?? data.title}
                </h2>
                <p className="mt-4 text-body-md text-muted-foreground">
                  {data.aboutIntro}
                </p>

                {/* AIOps */}
                <div className="mt-8">
                  <h3 className="mb-3 text-label-md text-foreground">
                    {data.aboutAIOpsLabel ?? "AIOps Platform"}
                  </h3>
                  <div className="space-y-2">
                    {data.aiOpsBullets.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <p className="text-body-xs text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ServiceOps */}
                <div className="mt-6">
                  <h3 className="mb-3 text-label-md text-foreground">
                    {data.aboutServiceOpsLabel ?? "ServiceOps Platform"}
                  </h3>
                  <div className="space-y-2">
                    {data.serviceOpsBullets.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <p className="text-body-xs text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — Info cards */}
              <div className="border-t lg:border-t-0 lg:border-l border-border/40 flex flex-col divide-y divide-border/40">
                {infoCards.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="flex flex-1 items-center gap-5 px-8 py-8 lg:px-10 transition-colors hover:bg-muted/30">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-caption text-muted-foreground">{s.label}</p>
                        <p className="mt-1.5 text-base font-bold text-foreground">{s.value}</p>
                        {"sub" in s && s.sub && (
                          <p className="mt-1 text-body-xs text-muted-foreground">{s.sub}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Past Event Recap (photos + videos) ── */}
      {isPast && hasRecap && data.recap && (
        <EvRecap recap={data.recap} eventTitle={data.shortTitle ?? data.title} />
      )}

      {/* ── Event Highlights ── */}
      <section className="relative z-10 py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="mb-3 text-overline text-primary">Event Highlights</p>
            <h2 className="text-heading-xl lg:text-4xl">What to Expect</h2>
            <p className="mt-4 text-base text-muted-foreground">
              The key experiences and opportunities at our {data.booth ? "booth" : "session"} during {data.shortTitle ?? data.title}.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 overflow-hidden bg-card">
            <div className="grid md:grid-cols-2">
              {data.highlights.map((h, i) => {
                const Icon = highlightIcons[i % highlightIcons.length];
                const isRightCol = i % 2 !== 0;
                const isBottomRow = i >= 2;
                return (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className={`group relative overflow-hidden p-6 lg:p-8 transition-colors ${
                      !isBottomRow ? "border-b border-border/40" : ""
                    } ${isRightCol ? "md:border-l border-border/40" : ""}`}
                  >
                    <DottedGlowBackground
                      className="opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                      gap={14}
                      radius={1.2}
                      opacity={0.4}
                    />
                    <div className="relative z-10">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                        <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{h.title}</h3>
                      <p className="mt-2 text-body-md text-muted-foreground">{h.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Event Schedule ── */}
      <section className="relative z-10 py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="rounded-2xl border border-border/60 overflow-hidden bg-card">
            <div className="grid lg:grid-cols-[1fr,1.2fr]">

              {/* Left — Header */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <p className="mb-3 text-overline text-primary">{data.scheduleOverline ?? "Event Schedule"}</p>
                <h2 className="text-display-md">
                  {data.scheduleTitle ?? (data.schedule.length === 1 ? "Event Day" : `${data.schedule.length}-Day Program`)}
                </h2>
                <p className="mt-4 text-body-md text-muted-foreground">
                  {data.scheduleIntro ?? `${data.schedule.length === 1 ? "A day" : `${data.schedule.length} days`} of innovation, networking, and insights at ${data.title}.`}
                </p>
              </div>

              {/* Right — Schedule cards */}
              <div className="border-t lg:border-t-0 lg:border-l border-border/40 divide-y divide-border/40">
                {data.schedule.map((day, i) => (
                  <div key={i} className="flex flex-col px-8 py-8 lg:px-10 lg:py-10 transition-colors hover:bg-muted/30">
                    <p className="text-xl font-semibold text-foreground">{day.title}{day.date ? ` — ${day.date}` : ""}</p>
                    <p className="mt-2 text-body-md text-muted-foreground">{day.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Speakers & Presenters ── */}
      <section className="relative z-10 py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="mb-3 text-overline text-primary">
              Speakers &amp; Presenters
            </p>
            <h2 className="text-heading-xl lg:text-4xl">
              Who You&apos;ll Meet
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Industry experts and Motadata leaders presenting at {data.title}.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.team.map((member, i) => (
              <SpeakerTicket key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="register" className="relative z-10 scroll-mt-24">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <div
            className="group relative overflow-hidden rounded-3xl px-8 py-16 text-center text-white sm:px-16 sm:py-20"
            style={{ background: "linear-gradient(135deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)))" }}
          >
            <DottedGlowBackground
              className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
              gap={14}
              radius={1.8}
              opacity={0.6}
              color="rgba(255,255,255,0.4)"
            />
            <div className="relative z-10">
              <h2 className="text-display-md">Have any questions?</h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
                {data.ctaDescription ?? `Get in touch with our team to learn more about Motadata solutions or schedule a meeting at ${data.title}.`}
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a href="#" className="inline-flex h-11 items-center gap-2 rounded-xl bg-white px-6 text-label-md text-foreground transition-opacity hover:opacity-90">
                  Book a Meeting
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${data.ctaEmail}`}
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/20 px-6 text-label-md text-white transition-colors hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" />
                  Contact Us
                </a>
              </div>
              <p className="mt-4 text-xs text-white/40">{data.ctaEmail}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

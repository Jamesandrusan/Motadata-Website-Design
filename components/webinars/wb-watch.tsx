"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Calendar,
  Clock,
  Users,
  BarChart3,
  Play,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

/* ── Hero stats ── */
const infoCards = [
  { icon: Calendar, label: "Date", value: "9th October 2025" },
  { icon: Clock, label: "Duration", value: "45 minutes" },
  { icon: Users, label: "Attended", value: "3,100+" },
  { icon: BarChart3, label: "Level", value: "Intermediate" },
];

/* ── Agenda ── */
const agenda = [
  {
    title: "The Viral Content Formula",
    desc: "Break down the core structure behind LinkedIn posts that consistently break a million views.",
  },
  {
    title: "Hooks, Stories & Insights",
    desc: "How to open strong, structure a narrative, and end with a takeaway your audience will share.",
  },
  {
    title: "Building a Personal Brand at Scale",
    desc: "Strategies to position yourself as an authority and turn followers into a community.",
  },
  {
    title: "Distribution & Engagement Tactics",
    desc: "Posting cadence, comment strategy, and using DMs to amplify reach without sounding salesy.",
  },
  {
    title: "Live Q&A",
    desc: "Aidan answers questions on growth, monetization, and avoiding the algorithm's penalty box.",
  },
];

/* ── Speaker ── */
type Speaker = {
  name: string;
  role: string;
  company: string;
  image: string;
  initials: string;
};

const speakers: Speaker[] = [
  {
    name: "Aiden Brannigan",
    role: "Founder & Content Strategist",
    company: "The Marketing Millennials",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
    initials: "AB",
  },
  {
    name: "Sakshi Asudhani",
    role: "Host & Moderator · Associate Product Lead",
    company: "Motadata",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
    initials: "SA",
  },
  {
    name: "Keertan Zala",
    role: "Co-host · Product Manager, PMG Team",
    company: "Motadata",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
    initials: "KZ",
  },
];

function BrandMark({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.9 14.9" className={className} aria-hidden="true">
      <path fill="#f17463" d="M0,10.4c0,2.5,2,4.4,4.4,4.4h0V6h0C2,6,0,8,0,10.4Z" />
      <path fill="#f17463" d="M14.9,4.4c0-2.5-2-4.4-4.4-4.4h0v8.9h0c2.4,0,4.4-2,4.4-4.4Z" />
      <path fill="#f17463" d="M6,10.4c0,2.5,2,4.4,4.4,4.4s4.4-2,4.4-4.4h0c0,0-8.9,0-8.9,0h0Z" />
      <path fill="#f17463" d="M8.9,4.4C8.9,2,6.9,0,4.4,0S0,2,0,4.4h0c0,0,8.9,0,8.9,0h0Z" />
    </svg>
  );
}

function LinkedInGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 11.01-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function SpeakerTicketCard({ speaker, index }: { speaker: Speaker; index: number }) {
  const [imgFailed, setImgFailed] = useState(false);
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
            <h3 className="text-[clamp(1.25rem,2.2vw,1.5rem)] font-bold leading-tight tracking-tight text-foreground">
              {speaker.name}
            </h3>
            <a
              href="#"
              aria-label={`${speaker.name} on LinkedIn`}
              className="text-primary transition-colors hover:text-[#0A66C2]"
            >
              <LinkedInGlyph className="h-5 w-5" />
            </a>
          </div>

          <p className="mt-3 text-caption leading-snug text-muted-foreground">{speaker.role}</p>
          <p className="mt-1 text-caption text-muted-foreground/70">{speaker.company}</p>
        </div>

        <div className="relative h-32 w-28 shrink-0 overflow-hidden rounded-xl bg-foreground/5 ring-1 ring-border/60 transition-transform duration-500 group-hover:scale-110">
          {imgFailed ? (
            <div className="flex h-full w-full items-center justify-center text-heading-md text-foreground/50">
              {speaker.initials}
            </div>
          ) : (
            <Image
              src={speaker.image}
              alt={speaker.name}
              fill
              sizes="112px"
              className="object-cover"
              onError={() => setImgFailed(true)}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main ── */

export function WbWatch() {
  const [form, setForm] = useState({ firstName: "", email: "" });
  const [emailError, setEmailError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [aboutLayout, setAboutLayout] = useState<1 | 2>(1);

  // Block obvious throwaway / unverifiable mailboxes — surface the same error you'd see on prod
  const BLOCKED_EMAIL_DOMAINS = ["yopmail.com", "mailinator.com", "tempmail.com", "guerrillamail.com"];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError(null);

    const email = form.email.trim().toLowerCase();
    const validShape = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const domain = email.split("@")[1] ?? "";

    if (!validShape || BLOCKED_EMAIL_DOMAINS.includes(domain)) {
      setEmailError("We are unable to validate your email address. Try with other email.");
      return;
    }

    if (!form.firstName.trim()) return;
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── Hero (with inline form) ── */}
      <section className="relative z-10 overflow-hidden py-20 lg:py-28">
        <HeroOrbs />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr,1fr] lg:gap-16">
            {/* Left — Content */}
            <div className="text-center lg:text-left">
              <FadeUp>
                <div className="flex justify-center lg:justify-start">
                  <AnimatedBadge text={submitted ? "Recording Unlocked" : "On-Demand Webinar"} />
                </div>
              </FadeUp>

              <FadeUp delay={150}>
                <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.05] tracking-tight">
                  Learn How to Create Viral Content for LinkedIn
                </h1>
              </FadeUp>

              <FadeUp delay={300}>
                <p className="mt-5 max-w-xl text-body-md text-muted-foreground lg:mx-0 mx-auto">
                  Join Aidan, who generated 240M+ views at The Marketing Millennials, as he shares the
                  viral content strategies to help you grow your and your company&apos;s LinkedIn presence.
                </p>
              </FadeUp>
            </div>

            {/* Right — Form / Player */}
            <FadeUp delay={400}>
              <div className="rounded-2xl border border-border/60 bg-card p-6 lg:p-8 shadow-sm">
                {submitted ? (
                  <div className="flex flex-col">
                    <p className="text-overline text-primary">Thank you for registering</p>
                    <h2 className="mt-2 text-heading-md font-bold">Watch the recording below</h2>
                    <a
                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/player relative mt-5 block aspect-video w-full overflow-hidden rounded-xl bg-foreground/[0.04] ring-1 ring-border/60 transition-all hover:ring-primary/40 hover:shadow-lg"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary/5" />
                      <Image
                        src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                        alt="Webinar recording thumbnail"
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover opacity-70 transition-opacity group-hover/player:opacity-90"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-xl transition-transform group-hover/player:scale-110">
                          <Play className="h-7 w-7 translate-x-0.5 text-primary-foreground" fill="currentColor" />
                        </span>
                      </div>
                      <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-caption text-white backdrop-blur-sm">
                        YouTube
                      </span>
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-label-md text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      <Play className="h-4 w-4" fill="currentColor" />
                      Click here to watch on YouTube
                    </a>
                    <p className="mt-3 text-caption text-muted-foreground">
                      Recording also sent to{" "}
                      <span className="text-foreground">{form.email}</span>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
                      <p className="text-overline text-primary">Free Access</p>
                      <h2 className="mt-2 text-heading-md font-bold">Watch Webinar Recording</h2>
                      <p className="mt-2 text-body-xs text-muted-foreground">
                        Fill in your details and instantly unlock the full session.
                      </p>
                    </div>
                    <div>
                      <label htmlFor="hero-watch-name" className="text-caption text-foreground">
                        First Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="hero-watch-name"
                        type="text"
                        required
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className="mt-1.5 h-11 w-full rounded-xl border border-border bg-background px-4 text-body-xs outline-none transition-colors focus:border-primary"
                        placeholder="James"
                      />
                    </div>
                    <div>
                      <label htmlFor="hero-watch-email" className="text-caption text-foreground">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        id="hero-watch-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          if (emailError) setEmailError(null);
                        }}
                        aria-invalid={emailError ? true : undefined}
                        aria-describedby={emailError ? "hero-watch-email-error" : undefined}
                        className={`mt-1.5 h-11 w-full rounded-xl border bg-background px-4 text-body-xs outline-none transition-colors ${
                          emailError ? "border-red-400 focus:border-red-500" : "border-border focus:border-primary"
                        }`}
                        placeholder="you@company.com"
                      />
                      {emailError && (
                        <p
                          id="hero-watch-email-error"
                          className="mt-1.5 flex items-start gap-1.5 text-caption text-red-500"
                        >
                          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                          {emailError}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-label-md text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Watch Webinar Recording
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="text-caption text-muted-foreground/70">
                      By submitting, you agree to receive event-related emails from Motadata.
                    </p>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── About This Webinar (with layout switcher) ── */}
      <section className="relative z-10 bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          {/* Layout switcher — absolute, minimalist (no box) */}
          <div className="absolute right-6 top-6 z-20 hidden md:flex items-center gap-3">
            {([1, 2] as const).map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setAboutLayout(opt)}
                aria-label={`About layout ${opt}`}
                className={`text-[11px] font-medium transition-colors ${
                  aboutLayout === opt
                    ? "text-primary"
                    : "text-muted-foreground/60 hover:text-foreground"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Option 1 — Bordered split-card (matches Upcoming detail page) */}
          {aboutLayout === 1 && (
            <div className="rounded-2xl border border-border/60 overflow-hidden bg-card">
              <div className="grid lg:grid-cols-[1.2fr,1fr]">
                {/* Left — About */}
                <div className="p-8 lg:p-12">
                  <h2 className="text-display-md">About This Webinar</h2>
                  <p className="mt-4 text-body-md text-muted-foreground">
                    Aidan has built a personal media engine that consistently breaks the algorithm —
                    with hundreds of viral posts and 240M+ total impressions. In this session, he walks
                    through the exact playbook he uses every week, with no fluff and a lot of receipts.
                  </p>

                  <div className="mt-8">
                    <h3 className="mb-3 text-label-md text-foreground">What You&apos;ll Learn</h3>
                    <div className="space-y-2">
                      {[
                        "The viral content formula behind 240M+ impressions",
                        "How to hook readers in the first two lines on LinkedIn",
                        "Structuring posts that get shared by people outside your network",
                        "Posting cadence, engagement tactics, and avoiding the algorithm penalty box",
                        "Turning a personal brand into a sustainable distribution channel",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <BrandMark className="mt-1 h-3.5 w-3.5 shrink-0" />
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
                      <div
                        key={s.label}
                        className="flex flex-1 items-center gap-5 px-8 py-8 lg:px-10 transition-colors hover:bg-muted/30"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-caption text-muted-foreground">{s.label}</p>
                          <p className="mt-1.5 text-base font-bold text-foreground">{s.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Option 2 — Sticky heading + boxed What You'll Learn */}
          {aboutLayout === 2 && (
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left — Heading, description & session meta */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:sticky lg:top-28 lg:self-start"
              >
                <p className="mb-3 text-overline text-primary">Overview</p>
                <h2 className="text-display-md">About This Webinar</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Aidan has built a personal media engine that consistently breaks the algorithm —
                  with hundreds of viral posts and 240M+ total impressions. In this session, he walks
                  through the exact playbook he uses every week, with no fluff and a lot of receipts.
                </p>

                {/* Session meta grid */}
                <dl className="mt-10 grid grid-cols-2 gap-y-7 gap-x-8">
                  {infoCards.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.label} className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <dt className="text-caption uppercase tracking-wider text-muted-foreground/70">
                            {s.label}
                          </dt>
                          <dd className="mt-1 text-base font-semibold text-foreground">{s.value}</dd>
                        </div>
                      </div>
                    );
                  })}
                </dl>
              </motion.div>

              {/* Right — What You'll Learn (boxed) */}
              <div className="rounded-2xl border border-border/60 bg-muted/40 p-8 lg:p-10">
                <h3 className="mb-5 text-xl font-semibold text-foreground">What You&apos;ll Learn</h3>
                <div className="space-y-4">
                  {[
                    "The viral content formula behind 240M+ impressions",
                    "How to hook readers in the first two lines on LinkedIn",
                    "Structuring posts that get shared by people outside your network",
                    "Posting cadence, engagement tactics, and avoiding the algorithm penalty box",
                    "Turning a personal brand into a sustainable distribution channel",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <BrandMark className="mt-1.5 h-4 w-4 shrink-0" />
                      <p className="text-body-md text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Speakers & Presenters (centered heading above + cards below) ── */}
      <section className="relative z-10 py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="mb-3 text-overline text-primary">Speakers &amp; Presenters</p>
            <h2 className="text-heading-xl lg:text-4xl">Who You&apos;ll Hear From</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Learn from industry-leading experts in growth, content, and modern marketing.
            </p>
          </div>

          {/* Original layout — 2-column grid (untouched) */}
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {speakers.slice(0, 2).map((s, i) => (
              <SpeakerTicketCard key={s.name} speaker={s} index={i} />
            ))}
          </div>

          {/* New row — 3-column grid showing all 3 speakers */}
          <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {speakers.map((s, i) => (
              <SpeakerTicketCard key={`row2-${s.name}`} speaker={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Agenda ── */}
      <section className="relative z-10 bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <p className="text-overline text-primary">Webinar Agenda</p>
              <h2 className="mt-3 text-display-md">What You&apos;ll Learn</h2>
              <p className="mt-4 text-body-md text-muted-foreground">
                A breakdown of everything Aidan covers — from the viral content formula to live Q&amp;A.
              </p>
            </motion.div>

            <ul className="divide-y divide-border/60">
              {agenda.map((a, i) => (
                <motion.li
                  key={a.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="flex items-start gap-4 py-7 first:pt-0 last:pb-0"
                >
                  <BrandMark className="mt-2 h-5 w-5 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold text-foreground">{a.title}</h3>
                    <p className="mt-2 text-body-md text-muted-foreground">{a.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Extra credit (post-submit only) ── */}
      {submitted && (
        <section className="relative z-10">
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
                <p className="text-overline text-white/70">Results — Even Before the Webinar</p>
                <h2 className="mt-3 text-display-md">
                  You&apos;re about to learn how to grow on LinkedIn.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
                  Wish to try the platform now? That&apos;s called extra credit.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="#"
                    className="inline-flex h-11 items-center gap-2 rounded-xl bg-white px-6 text-label-md text-foreground transition-opacity hover:opacity-90"
                  >
                    Try Motadata for Free
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

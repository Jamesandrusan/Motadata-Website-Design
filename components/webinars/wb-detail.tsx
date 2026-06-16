"use client";

import {
  Calendar,
  Clock,
  Users,
  BarChart3,
  CheckCircle,
  Cpu,
  Activity,
  Settings,
  Award,
  FileText,
  Download,
  ArrowRight,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

/* ── Hero stats ── */
const infoCards = [
  { icon: Calendar, label: "Date", value: "March 15, 2024" },
  { icon: Clock, label: "Duration", value: "45 minutes" },
  { icon: Users, label: "Attendees", value: "2,500+" },
  { icon: BarChart3, label: "Level", value: "Intermediate" },
];

/* ── Learning points ── */
const learnings = [
  "Understanding the fundamentals of AIOps and its impact on modern IT operations",
  "Implementing machine learning models for anomaly detection and root cause analysis",
  "Reducing Mean Time To Resolution (MTTR) by up to 70% with intelligent automation",
  "Best practices for integrating AIOps into existing monitoring infrastructure",
  "Real-world case studies from Fortune 500 companies",
];

/* ── Speakers ── */
const speakers = [
  {
    name: "Sakshi Asudhani",
    role: "Associate Product Lead, PMG Team",
    company: "Motadata",
    bio: "Sakshi Asudhani is an Associate Product Lead at Motadata, working within the Product Management Group (PMG). She focuses on building and enhancing AI-driven IT operations and ITSM solutions. With strong expertise in product strategy and user-centric innovation, she plays a key role in shaping Motadata’s ServiceOps and ITSM capabilities.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
    initials: "SA",
  },
  {
    name: "Keertan Zala",
    role: "Product Manager, PMG Team",
    company: "Motadata",
    bio: "Product Manager at Motadata and part of the PMG team. He is responsible for driving product development, feature enhancements, and aligning solutions with customer needs. His work focuses on delivering scalable IT monitoring and observability solutions that improve operational efficiency and performance.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
    initials: "KZ",
  },
];

/* ── Agenda ── */
const agenda = [
  { title: "Introduction & Welcome", desc: "Overview of webinar objectives and speaker introductions" },
  { title: "State of Modern IT Operations", desc: "Current challenges facing IT teams and the need for intelligent automation" },
  { title: "Deep Dive: Core Concepts", desc: "Technical exploration of key monitoring and observability principles" },
  { title: "Live Demo & Best Practices", desc: "Real-world implementation examples and proven strategies" },
  { title: "Q&A Session", desc: "Open discussion and answers to audience questions" },
];

/* ── Resources ── */
const resources = [
  { title: "Webinar Slides", desc: "Complete presentation deck in PDF format", meta: "PDF \u2022 2.4 MB" },
  { title: "Technical Whitepaper", desc: "In-depth guide to AIOps implementation", meta: "PDF \u2022 4.8 MB" },
  { title: "Implementation Checklist", desc: "Step-by-step deployment guide", meta: "PDF \u2022 1.2 MB" },
];

const highlightIcons = [Cpu, Activity, Settings, Award];


type Speaker = {
  name: string;
  role: string;
  company: string;
  bio: string;
  image: string;
  initials: string;
};

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

function SpeakerAvatar({
  speaker,
  className,
  sizes,
  fallbackSize = "text-label-md",
}: {
  speaker: Speaker;
  className: string;
  sizes: string;
  fallbackSize?: string;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <div className={className}>
      {imgFailed ? (
        <div className={`flex h-full w-full items-center justify-center ${fallbackSize} text-foreground/50`}>
          {speaker.initials}
        </div>
      ) : (
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          sizes={sizes}
          className="object-cover"
          onError={() => setImgFailed(true)}
        />
      )}
    </div>
  );
}

/* ─ Option 1 — Big-type editorial (name + LinkedIn, passport photo right) ─ */
function SpeakerTicket({ speaker, index }: { speaker: Speaker; index: number }) {
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
              {speaker.name}
            </h3>
            <a
              href="#"
              aria-label={`${speaker.name} on LinkedIn`}
              className="text-primary transition-colors hover:text-[#0A66C2]"
            >
              <LinkedInGlyph className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-3 text-body-xs text-foreground">{speaker.role}</p>
          <p className="mt-1 text-caption text-muted-foreground/70">{speaker.company}</p>
        </div>

        <SpeakerAvatar
          speaker={speaker}
          className="relative h-32 w-28 shrink-0 overflow-hidden rounded-xl bg-foreground/5 ring-1 ring-border/60 transition-transform duration-500 group-hover:scale-110"
          sizes="112px"
          fallbackSize="text-heading-md"
        />
      </div>
    </motion.div>
  );
}

function SpeakerSplit({ speaker, index }: { speaker: Speaker; index: number }) {
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative grid grid-cols-[140px,1fr] overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:border-primary/40 hover:shadow-lg sm:grid-cols-[160px,1fr]"
    >
      <div className="relative overflow-hidden bg-foreground/5">
        {imgFailed ? (
          <div className="flex h-full w-full items-center justify-center text-display-md text-foreground/30">
            {speaker.initials}
          </div>
        ) : (
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            sizes="(min-width: 640px) 160px, 140px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgFailed(true)}
          />
        )}
      </div>

      <div className="relative flex flex-col justify-center p-6">
        <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-caption text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Speaker
        </div>
        <h3 className="text-heading-md font-bold text-foreground">{speaker.name}</h3>
        <p className="mt-1 text-body-xs text-muted-foreground">{speaker.role}</p>
        <p className="mt-0.5 text-caption text-muted-foreground/70">{speaker.company}</p>

        <a
          href="#"
          aria-label={`${speaker.name} on LinkedIn`}
          className="absolute bottom-4 right-4 text-primary transition-colors hover:text-[#0A66C2]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 11.01-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

function SpeakerSpotlight({ speaker, index }: { speaker: Speaker; index: number }) {
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:border-primary/40 hover:shadow-lg"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-foreground/5">
        {imgFailed ? (
          <div className="flex h-full w-full items-center justify-center text-display-md text-foreground/30">
            {speaker.initials}
          </div>
        ) : (
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgFailed(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-caption text-white backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Speaker
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="text-heading-md font-bold text-white">{speaker.name}</h3>
          <p className="mt-1 text-body-xs text-white/80">{speaker.role}</p>
          <p className="mt-0.5 text-caption text-white/60">{speaker.company}</p>
        </div>
      </div>
    </motion.div>
  );
}

function SpeakerCompact({ speaker, index }: { speaker: Speaker; index: number }) {
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group flex items-center gap-5"
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-foreground/5">
        {imgFailed ? (
          <div className="flex h-full w-full items-center justify-center text-heading-md text-foreground/60">
            {speaker.initials}
          </div>
        ) : (
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            sizes="80px"
            className="object-cover"
            onError={() => setImgFailed(true)}
          />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-label-lg font-semibold text-foreground truncate">{speaker.name}</h3>
          <a
            href="#"
            aria-label={`${speaker.name} on LinkedIn`}
            className="shrink-0 text-primary transition-colors hover:text-[#0A66C2]"
          >
            <LinkedInGlyph className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-1.5 text-body-xs text-muted-foreground">{speaker.role}</p>
        <p className="mt-0.5 text-caption text-muted-foreground/70">{speaker.company}</p>
      </div>
    </motion.div>
  );
}

function SpeakerCard({ speaker, index }: { speaker: Speaker; index: number }) {
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/40"
    >
      <div className="mb-4 relative h-20 w-20 overflow-hidden rounded-full bg-foreground/5 ring-1 ring-border/60 transition-colors group-hover:ring-primary/40">
        {imgFailed ? (
          <div className="flex h-full w-full items-center justify-center text-heading-md text-foreground/50 transition-colors group-hover:text-primary">
            {speaker.initials}
          </div>
        ) : (
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            sizes="80px"
            className="object-cover"
            onError={() => setImgFailed(true)}
          />
        )}
      </div>
      <h3 className="text-label-md text-foreground">{speaker.name}</h3>
      <p className="mt-1 text-caption text-muted-foreground">
        {speaker.role} &bull; {speaker.company}
      </p>
      <p className="mt-3 text-body-xs text-muted-foreground">{speaker.bio}</p>
    </motion.div>
  );
}

/* ── Main component ── */

export function WbDetail() {
  const [form, setForm] = useState({ name: "", email: "", company: "", title: "" });
  const [speakerLayout, setSpeakerLayout] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);
  const [isRegistered, setIsRegistered] = useState(false);
  const [agendaLayout, setAgendaLayout] = useState<1 | 2 | 3 | 4 | 5>(1);

  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setIsRegistered(true);
  };

  const resetRegistration = () => {
    setIsRegistered(false);
    setForm({ name: "", email: "", company: "", title: "" });
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative z-10 overflow-hidden py-24 lg:py-32">
        <HeroOrbs />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <div className="flex justify-center">
                <AnimatedBadge text="Webinar" />
              </div>
            </FadeUp>

            <FadeUp delay={150}>
              <h1 className="mt-6 text-[clamp(2.2rem,5.5vw,4.75rem)] font-bold leading-[1.05] tracking-tight">
                AIOps: Transforming IT Operations with Artificial Intelligence
              </h1>
            </FadeUp>

            <FadeUp delay={300}>
              <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
                Discover how AI-powered observability can revolutionize your IT operations. Learn practical
                strategies for implementing AIOps to reduce MTTR, predict failures, and automate remediation.
              </p>
            </FadeUp>

            <FadeUp delay={450}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#register"
                  className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-7 text-label-md text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg"
                >
                  Register Now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Webinar Details ── */}
      <section className="relative z-10 py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="rounded-2xl border border-border/60 overflow-hidden bg-card">
            <div className="grid lg:grid-cols-[1.2fr,1fr]">

              {/* Left — About */}
              <div className="p-8 lg:p-12">
                <h2 className="text-display-md">
                  About This Webinar
                </h2>
                <p className="mt-4 text-body-md text-muted-foreground">
                  This webinar explores how AI-powered observability can revolutionize your IT operations,
                  covering practical strategies for implementing AIOps to reduce MTTR, predict failures,
                  and automate remediation across your infrastructure.
                </p>

                <div className="mt-8">
                  <h3 className="mb-3 text-label-md text-foreground">What You&apos;ll Learn</h3>
                  <div className="space-y-2">
                    {learnings.map((item, i) => (
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
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Webinar Agenda ── */}
      <section className="relative z-10 bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          {agendaLayout !== 1 && agendaLayout !== 4 && (
            <div className="mx-auto max-w-2xl text-center mb-12">
              <p className="mb-3 text-overline text-primary">Webinar Agenda</p>
              <h2 className="text-heading-xl lg:text-4xl">What to Expect</h2>
              <p className="mt-4 text-base text-muted-foreground">
                A comprehensive breakdown of topics covered in this session.
              </p>
            </div>
          )}

          {/* Layout switcher (compact, absolute top-right) */}
          <div className="absolute right-6 top-6 z-20 hidden md:block">
            <div className="inline-flex items-center gap-0.5 rounded-lg border border-border/60 bg-card/80 p-1 backdrop-blur-sm">
              {([1, 2, 3, 4, 5] as const).map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setAgendaLayout(opt)}
                  aria-label={`Agenda layout ${opt}`}
                  className={`flex h-6 w-6 items-center justify-center rounded-md text-[11px] font-medium transition-colors ${
                    agendaLayout === opt
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {agendaLayout === 2 && (
            <div className="rounded-2xl border border-border/60 overflow-hidden bg-card">
              <div className="grid md:grid-cols-2">
                {agenda.map((a, i) => {
                  const Icon = highlightIcons[i % highlightIcons.length];
                  const isRightCol = i % 2 !== 0;
                  const isNotLastRow = i < agenda.length - 1 && (i < agenda.length - 2 || agenda.length % 2 === 0);
                  const isLastOddItem = agenda.length % 2 !== 0 && i === agenda.length - 1;
                  return (
                    <motion.div
                      key={a.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className={`group relative overflow-hidden p-6 lg:p-8 transition-colors ${
                        isNotLastRow ? "border-b border-border/40" : ""
                      } ${isRightCol ? "md:border-l border-border/40" : ""} ${
                        isLastOddItem ? "md:col-span-2 md:border-b-0" : ""
                      }`}
                    >
                      <DottedGlowBackground
                        className="opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                        gap={14}
                        radius={1.2}
                        opacity={0.4}
                      />
                      <div className="relative z-10 flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-primary/10">
                          <Icon className="h-5 w-5 text-foreground/50 transition-colors group-hover:text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{a.title}</h3>
                          <p className="mt-2 text-body-md text-muted-foreground">{a.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {agendaLayout === 3 && (
            <div className="mx-auto max-w-6xl">
              <ul className="grid gap-x-12 gap-y-8 md:grid-cols-2">
                {agenda.map((a, i) => (
                  <motion.li
                    key={a.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    className="flex items-start gap-4"
                  >
                    <BrandMark className="mt-2 h-5 w-5 shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground">{a.title}</h3>
                      <p className="mt-2 text-body-md text-muted-foreground">{a.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Option 4 — Left sticky heading + right timeline */}
          {agendaLayout === 4 && (
            <div className="grid gap-12 lg:grid-cols-[1fr,1.5fr] lg:gap-16">
              {/* Left — Sticky heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:sticky lg:top-28 lg:self-start"
              >
                <p className="text-overline text-primary">Webinar Agenda</p>
                <h2 className="mt-3 text-display-md">What to Expect</h2>
                <p className="mt-4 text-body-md text-muted-foreground">
                  A comprehensive breakdown of topics covered in this session — from opening introductions through live Q&amp;A.
                </p>
              </motion.div>

              {/* Right — Agenda list */}
              <ol className="space-y-10">
                {agenda.map((a, i) => (
                  <motion.li
                    key={a.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                  >
                    <p className="text-overline text-primary">
                      Agenda {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1.5 text-xl font-semibold text-foreground">{a.title}</h3>
                    <p className="mt-2 text-body-md text-muted-foreground">{a.desc}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          )}

          {/* Option 5 — Cards in 2-column grid */}
          {agendaLayout === 5 && (
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
              {agenda.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 transition-colors hover:border-primary/40"
                >
                  <BrandMark className="h-6 w-6" />
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{a.title}</h3>
                  <p className="mt-2 text-body-md text-muted-foreground">{a.desc}</p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Option 1 — Left sticky heading + right divided list (was Option 5) */}
          {agendaLayout === 1 && (
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left — Sticky heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:sticky lg:top-28 lg:self-start"
              >
                <p className="text-overline text-primary">Webinar Agenda</p>
                <h2 className="mt-3 text-display-md">What to Expect</h2>
                <p className="mt-4 text-body-md text-muted-foreground">
                  A comprehensive breakdown of topics covered in this session — from opening introductions through live Q&amp;A.
                </p>
              </motion.div>

              {/* Right — Divided list */}
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
          )}
        </div>
      </section>

      {/* ── Expert Speakers ── */}
      <section className="relative z-10 py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          {speakerLayout !== 6 && (
            <div className="mx-auto max-w-2xl text-center mb-16">
              <p className="mb-3 text-overline text-primary">
                Speakers &amp; Presenters
              </p>
              <h2 className="text-heading-xl lg:text-4xl">
                Who You&apos;ll Hear From
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Learn from industry-leading experts in observability and IT operations.
              </p>
            </div>
          )}

          {/* Layout switcher (compact, absolute top-right) */}
          <div className="absolute right-6 top-6 z-20 hidden md:block">
            <div className="inline-flex flex-wrap items-center justify-end gap-0.5 rounded-lg border border-border/60 bg-card/80 p-1 backdrop-blur-sm">
              {([1, 2, 3, 4, 5, 6] as const).map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setSpeakerLayout(opt)}
                  aria-label={`Layout ${opt}`}
                  className={`flex h-6 w-6 items-center justify-center rounded-md text-[11px] font-medium transition-colors ${
                    speakerLayout === opt
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {speakerLayout === 1 && (
            <div className="mx-auto w-full space-y-16">
              {/* Preview — 1 speaker (same card size as 2-up row) */}
              <div className="mx-auto" style={{ maxWidth: "calc((64rem - 1.5rem) / 2)" }}>
                <SpeakerTicket speaker={speakers[0]} index={0} />
              </div>

              {/* Preview — 2 speakers in a 2-column row (original) */}
              <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
                {speakers.map((s, i) => (
                  <SpeakerTicket key={s.name} speaker={s} index={i} />
                ))}
              </div>

              {/* Preview — 3 speakers in a 3-column row */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ...speakers,
                  {
                    name: "Mitul Modesara",
                    role: "Co-host · Chief Operating Officer",
                    company: "Motadata",
                    bio: "Mitul leads Motadata's operations across 50+ countries, scaling customer-first delivery and product execution at enterprise scale.",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
                    initials: "MM",
                  },
                ].map((s, i) => (
                  <SpeakerTicket key={`row2-${s.name}`} speaker={s} index={i} />
                ))}
              </div>
            </div>
          )}

          {speakerLayout === 2 && (
            <div className="mx-auto w-full space-y-16">
              {/* Preview — 1 speaker (same card size as 2-up row) */}
              <div className="mx-auto" style={{ maxWidth: "calc((56rem - 2.5rem) / 2)" }}>
                <SpeakerCompact speaker={speakers[0]} index={0} />
              </div>

              {/* Preview — 2 speakers in a 2-column row */}
              <div className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-2">
                {speakers.map((s, i) => (
                  <SpeakerCompact key={s.name} speaker={s} index={i} />
                ))}
              </div>

              {/* Preview — 3 speakers in a 3-column row */}
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ...speakers,
                  {
                    name: "Mitul Modesara",
                    role: "Co-host · Chief Operating Officer",
                    company: "Motadata",
                    bio: "Mitul leads Motadata's operations across 50+ countries, scaling customer-first delivery and product execution at enterprise scale.",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
                    initials: "MM",
                  },
                ].map((s, i) => (
                  <SpeakerCompact key={`row2-${s.name}`} speaker={s} index={i} />
                ))}
              </div>
            </div>
          )}

          {speakerLayout === 3 && (
            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
              {speakers.map((s, i) => (
                <SpeakerSplit key={s.name} speaker={s} index={i} />
              ))}
            </div>
          )}

          {speakerLayout === 4 && (
            <div className="grid gap-5 sm:grid-cols-2 max-w-4xl mx-auto">
              {speakers.map((s, i) => (
                <SpeakerCard key={s.name} speaker={s} index={i} />
              ))}
            </div>
          )}

          {speakerLayout === 5 && (
            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
              {speakers.map((s, i) => (
                <SpeakerSpotlight key={s.name} speaker={s} index={i} />
              ))}
            </div>
          )}

          {speakerLayout === 6 && (
            <div className="grid gap-12 lg:grid-cols-[1fr,1.5fr] lg:gap-16">
              {/* Left — Sticky heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:sticky lg:top-28 lg:self-start"
              >
                <p className="text-overline text-primary">Speakers &amp; Presenters</p>
                <h2 className="mt-3 text-display-md">Who You&apos;ll Hear From</h2>
                <p className="mt-4 text-body-md text-muted-foreground">
                  Learn from industry-leading experts in observability and IT operations.
                </p>
              </motion.div>

              {/* Right — Presenter cards */}
              <div className="grid gap-6">
                {speakers.map((s, i) => (
                  <SpeakerTicket key={s.name} speaker={s} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Register for Webinar (inline form) ── */}
      <section id="register" className="relative z-10 py-20 scroll-mt-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="rounded-2xl border border-border/60 overflow-hidden bg-card">
            <div className="grid lg:grid-cols-2">

              {/* Left — Heading & details */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <p className="mb-3 text-overline text-primary">Reserve Your Seat</p>
                <h2 className="text-display-md">Register for this Webinar</h2>
                <p className="mt-4 text-body-md text-muted-foreground">
                  Free registration · 45-minute session · Live Q&amp;A · Recording shared with all registrants.
                </p>

                <ul className="mt-8 space-y-3">
                  {[
                    "Live interactive session with expert speakers",
                    "Downloadable slides and resources",
                    "Certificate of attendance",
                    "Recording access for 30 days",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <p className="text-body-xs text-muted-foreground">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — Form */}
              <div className="border-t lg:border-t-0 lg:border-l border-border/40 p-8 lg:p-12">
                {isRegistered ? (
                  <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-heading-md font-bold">You&apos;re registered!</h3>
                    <p className="mt-3 max-w-sm text-body-xs text-muted-foreground">
                      A confirmation has been sent to{" "}
                      <span className="text-foreground">{form.email}</span>. We&apos;ll share calendar
                      details and the join link shortly.
                    </p>
                    <button
                      type="button"
                      onClick={resetRegistration}
                      className="mt-6 inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-card px-5 text-label-md text-foreground transition-colors hover:bg-muted/40"
                    >
                      Register another attendee
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleRegisterSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="reg-name" className="text-caption text-foreground">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="reg-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="mt-1.5 h-11 w-full rounded-xl border border-border bg-background px-4 text-body-xs outline-none transition-colors focus:border-primary"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="reg-email" className="text-caption text-foreground">
                        Work Email <span className="text-primary">*</span>
                      </label>
                      <input
                        id="reg-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="mt-1.5 h-11 w-full rounded-xl border border-border bg-background px-4 text-body-xs outline-none transition-colors focus:border-primary"
                        placeholder="jane@company.com"
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="reg-company" className="text-caption text-foreground">
                          Company
                        </label>
                        <input
                          id="reg-company"
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="mt-1.5 h-11 w-full rounded-xl border border-border bg-background px-4 text-body-xs outline-none transition-colors focus:border-primary"
                          placeholder="Acme Inc."
                        />
                      </div>
                      <div>
                        <label htmlFor="reg-title" className="text-caption text-foreground">
                          Job Title
                        </label>
                        <input
                          id="reg-title"
                          type="text"
                          value={form.title}
                          onChange={(e) => setForm({ ...form, title: e.target.value })}
                          className="mt-1.5 h-11 w-full rounded-xl border border-border bg-background px-4 text-body-xs outline-none transition-colors focus:border-primary"
                          placeholder="IT Operations Lead"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-label-md text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Confirm Registration
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="text-caption text-muted-foreground/70">
                      By registering, you agree to our terms and to receive event-related emails from Motadata.
                    </p>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Related Resources (Schedule-style split panel) ── */}
      <section className="relative z-10 py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="rounded-2xl border border-border/60 overflow-hidden bg-card">
            <div className="grid lg:grid-cols-[1fr,1.2fr]">

              {/* Left — Header */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <p className="mb-3 text-overline text-primary">Resources</p>
                <h2 className="text-display-md">
                  Related Materials
                </h2>
                <p className="mt-4 text-body-md text-muted-foreground">
                  Download additional materials to enhance your learning from this webinar.
                </p>
              </div>

              {/* Right — Resource cards */}
              <div className="border-t lg:border-t-0 lg:border-l border-border/40 divide-y divide-border/40">
                {resources.map((r, i) => (
                  <a
                    key={r.title}
                    href="#"
                    className="group/card flex items-center gap-5 px-8 py-8 lg:px-10 lg:py-10 transition-colors hover:bg-muted/30"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/card:bg-primary/20">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-label-lg text-foreground transition-colors group-hover/card:text-primary">{r.title}</p>
                      <p className="mt-1 text-body-xs text-muted-foreground">{r.desc}</p>
                      <p className="mt-1 text-caption text-muted-foreground/60">{r.meta}</p>
                    </div>
                    <Download className="h-5 w-5 shrink-0 text-primary opacity-0 transition-opacity group-hover/card:opacity-100" />
                  </a>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                <Calendar className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-display-md">Save Your Seat</h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
                Register now to lock in your spot, get a calendar invite, and receive reminders so you don&apos;t miss the live session.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#register"
                  className="inline-flex h-11 items-center gap-2 rounded-xl bg-white px-6 text-label-md text-foreground transition-opacity hover:opacity-90"
                >
                  Register Now
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:webinar@motadata.com"
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/20 px-6 text-label-md text-white transition-colors hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" />
                  Contact Us
                </a>
              </div>
              <p className="mt-4 text-xs text-white/40">Limited seats · Free registration · Recording shared with all registrants</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

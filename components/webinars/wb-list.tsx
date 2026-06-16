"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Search, Clock, ArrowRight, Play, Calendar, Video } from "lucide-react";

/* ── Motadata-branded webinar promo cover (used by Option 3 cards) ──
   Pixel-spec'd 16:9 promo graphic on bg-slate-50 with coral-orange brand
   accents, watermark patterns, two speaker profiles, and date/time bar.
   Renders at any size — sits inside the card's aspect-video container. */

/* ── Speaker pool — same people used on webinar detail / watch pages ── */
type CoverSpeaker = {
  name: string;
  role: string;
  company: string;
  image: string;
};

const SPEAKER_POOL: CoverSpeaker[] = [
  {
    name: "Sakshi Asudhani",
    role: "Host & Moderator · Associate Product Lead",
    company: "Motadata",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Keertan Zala",
    role: "Co-host · Product Manager, PMG Team",
    company: "Motadata",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Aiden Brannigan",
    role: "Founder & Content Strategist",
    company: "The Marketing Millennials",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Mitul Modesara",
    role: "Co-host · Chief Operating Officer",
    company: "Motadata",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Alpesh Dhamelia",
    role: "Founder & CTO",
    company: "Motadata",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Amit Shingala",
    role: "Founder & CEO",
    company: "Motadata",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
  },
];

/* Deterministic hash → stable speaker pairing for a given webinar title */
function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

function pickSpeakersFor(title: string): [CoverSpeaker, CoverSpeaker] {
  const len = SPEAKER_POOL.length;
  const h = hashString(title);
  const i1 = h % len;
  let i2 = (h >>> 3) % len;
  if (i2 === i1) i2 = (i1 + 1) % len;
  return [SPEAKER_POOL[i1], SPEAKER_POOL[i2]];
}

function splitHeadline(title: string, firstTag: string): { prefix: string; rest: string } {
  // If the title starts with the tag, use that as the orange prefix.
  if (title.toLowerCase().startsWith(firstTag.toLowerCase())) {
    return {
      prefix: title.slice(0, firstTag.length),
      rest: title.slice(firstTag.length).replace(/^[:\s—–-]+/, "").trim(),
    };
  }
  return { prefix: `${firstTag}:`, rest: title };
}

function BrandedCover({
  tags,
  label,
  date,
  time,
}: {
  tags: [string, string];
  label: string;
  date: string;
  time: string;
}) {
  const { prefix, rest } = splitHeadline(label, tags[0]);
  const orange = "#F05A44";
  const orangeSoft = "rgba(240,90,68,0.18)";
  const orangeDivider = "rgba(240,90,68,0.5)";

  return (
    <div
      className="relative h-full w-full overflow-hidden font-sans"
      style={{
        background:
          "radial-gradient(120% 100% at 100% 0%, #1c2538 0%, #0b1120 60%, #060a16 100%)",
      }}
    >
      {/* Watermark — dot grid, top-right */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-[-2%] top-[-2%] h-[55%] w-[42%]"
        viewBox="0 0 200 150"
        fill={orange}
      >
        {Array.from({ length: 8 }).flatMap((_, row) =>
          Array.from({ length: 11 }).map((_, col) => (
            <circle key={`${row}-${col}`} cx={col * 18 + 8} cy={row * 18 + 8} r={1.5} opacity={0.32} />
          ))
        )}
      </svg>

      {/* Watermark — overlapping faint circles, bottom-left */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-25%] left-[-15%] h-[80%] w-[45%]"
        viewBox="0 0 200 200"
        fill="none"
        stroke={orange}
        strokeWidth="0.8"
      >
        <circle cx={80} cy={120} r={60} opacity={0.3} />
        <circle cx={120} cy={140} r={70} opacity={0.24} />
        <circle cx={60} cy={150} r={50} opacity={0.36} />
        <circle cx={100} cy={100} r={45} opacity={0.28} />
      </svg>

      {/* Two-column content */}
      <div className="relative grid h-full w-full grid-cols-[55fr_45fr] gap-[3.5%] p-[5%]">
        {/* Left column */}
        <div className="flex min-w-0 flex-col justify-between">
          <div className="min-w-0">
            <p className="text-[clamp(0.75rem,3cqi,1.25rem)] font-extrabold lowercase tracking-tight text-white">
              motadata
            </p>

            <div className="mt-[6%] inline-block">
              <p
                className="text-[clamp(0.6rem,2.4cqi,1rem)] font-semibold"
                style={{ color: orange }}
              >
                Webinar
              </p>
              <div
                className="mt-[3px] h-[2px] w-full"
                style={{ backgroundColor: orange }}
              />
            </div>

            <h2 className="mt-[7%] text-[clamp(1rem,4.4cqi,2.5rem)] font-extrabold leading-[1.05] tracking-tight">
              <span style={{ color: orange }}>{prefix}</span>{" "}
              <span className="text-white">{rest}</span>
            </h2>
          </div>

          {/* Date & Time bar */}
          <div className="mt-[6%] flex items-center gap-[4%]">
            <div className="flex items-center gap-[8%]">
              <div
                className="flex aspect-square h-[clamp(1.1rem,4.4cqi,2rem)] items-center justify-center rounded-md"
                style={{ backgroundColor: orangeSoft }}
              >
                <Calendar
                  className="h-[55%] w-[55%]"
                  style={{ color: orange }}
                  strokeWidth={2.5}
                />
              </div>
              <span className="text-[clamp(0.6rem,2.2cqi,0.95rem)] font-semibold text-gray-200">
                {date}
              </span>
            </div>

            <div
              className="h-[clamp(1rem,3.5cqi,1.75rem)] w-[2px] rounded-full"
              style={{ backgroundColor: orangeDivider }}
            />

            <div className="flex items-center gap-[8%]">
              <div
                className="flex aspect-square h-[clamp(1.1rem,4.4cqi,2rem)] items-center justify-center rounded-md"
                style={{ backgroundColor: orangeSoft }}
              >
                <Clock
                  className="h-[55%] w-[55%]"
                  style={{ color: orange }}
                  strokeWidth={2.5}
                />
              </div>
              <span className="text-[clamp(0.6rem,2.2cqi,0.95rem)] font-semibold text-gray-200">
                {time}
              </span>
            </div>
          </div>
        </div>

        {/* Right column — Speakers (randomised from real pool per title) */}
        <div className="flex min-w-0 flex-col justify-center gap-[10%]">
          {pickSpeakersFor(label).map((s, i) => (
            <SpeakerBadge
              key={s.name}
              label={i === 0 ? "Speaker" : "Co-host"}
              name={s.name}
              role={s.role}
              company={s.company}
              image={s.image}
              orange={orange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SpeakerBadge({
  label,
  name,
  role,
  company,
  image,
  orange,
}: {
  label: string;
  name: string;
  role: string;
  company: string;
  image: string;
  orange: string;
}) {
  return (
    <div className="relative flex items-center gap-[7%] pt-[8%]">
      <span
        className="pointer-events-none absolute -top-[2%] left-[16%] flex origin-bottom-left -rotate-6 items-center gap-[3px] whitespace-nowrap text-[clamp(0.65rem,2.4cqi,1.05rem)] font-semibold italic leading-none"
        style={{
          color: orange,
          fontFamily: "'Caveat', 'Brush Script MT', cursive",
        }}
      >
        <span aria-hidden="true">~~</span>
        {label}
      </span>

      <div
        className="relative aspect-square h-[clamp(2.75rem,11cqi,5.25rem)] shrink-0 overflow-hidden rounded-full"
        style={{ backgroundColor: orange, boxShadow: `inset 0 0 0 2px ${orange}, 0 0 0 2px rgba(255,255,255,0.18)` }}
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p
          className="truncate text-[clamp(0.75rem,2.9cqi,1.25rem)] font-extrabold tracking-tight"
          style={{ color: orange }}
        >
          {name}
        </p>
        <p className="mt-[2px] text-[clamp(0.55rem,1.9cqi,0.85rem)] leading-snug text-gray-300">
          {role}
        </p>
        <p className="mt-[2px] text-[clamp(0.6rem,2.1cqi,0.9rem)] font-bold text-white">
          {company}
        </p>
      </div>
    </div>
  );
}

/* ── Types ── */

interface Webinar {
  title: string;
  tags: [string, string];
  date: string;
  time: string;
  type: "upcoming" | "past";
}

/* ── Data ── */

const webinars: Webinar[] = [
  { title: "Transforming IT Operations with AI-Powered Observability", tags: ["AIOps", "Observability"], date: "15th December 2025", time: "2:00 PM EST", type: "upcoming" },
  { title: "Modern ITSM: Best Practices for Digital-First Organizations", tags: ["ITSM", "Best Practices"], date: "8th December 2025", time: "11:00 AM EST", type: "upcoming" },
  { title: "Maximizing ROI with Unified Observability Platforms", tags: ["Observability", "ROI"], date: "1st December 2025", time: "3:30 PM EST", type: "upcoming" },
  { title: "Empowering Customers Through Insightful Learning and Hands-On Training Sessions", tags: ["Training", "Best Practices"], date: "9th October 2025", time: "1:00 PM EST", type: "past" },
  { title: "Empowering Growth with AI-Driven IT: Webinar Recap", tags: ["AIOps", "AI"], date: "16th September 2025", time: "10:00 AM EST", type: "past" },
  { title: "Uncover the Power of AI-Driven ITAM for the Modern Enterprise", tags: ["ITAM", "AI"], date: "7th August 2025", time: "2:00 PM EST", type: "past" },
  { title: "Redefining IT Operations for the Digital Era", tags: ["ITOM", "Digital Transformation"], date: "14th July 2025", time: "11:30 AM EST", type: "past" },
  { title: "Say Goodbye to IT Chaos: Discover the Power of Unified ITSM", tags: ["ITSM", "Unified Platform"], date: "18th June 2025", time: "3:00 PM EST", type: "past" },
  { title: "Future of IT, Powered by Partnership", tags: ["Partnerships", "Innovation"], date: "13th June 2025", time: "1:30 PM EST", type: "past" },
  { title: "The Real Cost of Downtime \u2013 How AIOps Can Save You Millions", tags: ["AIOps", "Cost Savings"], date: "6th May 2025", time: "12:00 PM EST", type: "past" },
];

/* ── Filter tabs ── */

type TabKey = "all" | "upcoming" | "past";

const upcomingCount = webinars.filter((w) => w.type === "upcoming").length;
const pastCount = webinars.filter((w) => w.type === "past").length;

const tabs: { key: TabKey; label: string; count: number }[] = [
  { key: "all", label: "All Webinars", count: webinars.length },
  { key: "upcoming", label: "Upcoming", count: upcomingCount },
  { key: "past", label: "Past", count: pastCount },
];

/* ── Scroll reveal ── */

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ── Webinar card ── */

function WebinarCard({ webinar, isUpcoming }: { webinar: Webinar; isUpcoming: boolean }) {
  return (
    <a
      href={isUpcoming ? "/resources/webinars/detail" : "/resources/webinars/watch"}
      className="group/card flex h-full flex-col rounded-2xl border border-border bg-card overflow-hidden transition-colors hover:border-primary/40"
    >
      <div className="flex flex-1 flex-col p-6">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {webinar.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="flex-1 text-heading-sm text-foreground leading-snug transition-colors group-hover/card:text-primary">
          {webinar.title}
        </h3>

        {/* Meta */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-caption text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3 shrink-0" />
            {webinar.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3 shrink-0" />
            {webinar.time}
          </span>
          <span>•</span>
          <span>Online</span>
        </div>
      </div>

      {/* CTA — hover-only, matches events pattern */}
      <span className="flex w-full items-center justify-between px-6 border-t border-primary/20 py-3 text-label-md text-primary transition-opacity duration-200 opacity-0 group-hover/card:opacity-100">
        {isUpcoming ? (
          <>
            Register Now
            <ArrowRight className="h-3.5 w-3.5" />
          </>
        ) : (
          <>
            Watch Recording
            <Play className="h-3.5 w-3.5" />
          </>
        )}
      </span>
    </a>
  );
}

/* ── V2 Upcoming card (matches whitepaper/ebook resource card style) ── */

function WebinarCardV2Upcoming({ webinar }: { webinar: Webinar }) {
  return (
    <a
      href="/resources/webinars/detail"
      className="group/card flex h-full flex-col rounded-2xl border border-border bg-card overflow-hidden transition-colors hover:border-primary/40"
    >
      <div className="flex flex-1 flex-col p-8">
        {/* Icon */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/card:bg-primary/20">
          <Video className="h-6 w-6 text-primary" />
        </div>

        {/* Tag */}
        <span className="mb-2 text-caption text-muted-foreground">
          {webinar.tags.join(" • ")}
        </span>

        {/* Title */}
        <h3 className="text-heading-sm leading-snug">{webinar.title}</h3>

        {/* Meta */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-caption text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3 shrink-0" />
            {webinar.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3 shrink-0" />
            {webinar.time}
          </span>
        </div>
      </div>

      <span className="flex w-full items-center justify-between px-6 border-t border-primary/20 py-3 text-label-md text-primary transition-opacity duration-200 opacity-0 group-hover/card:opacity-100">
        Register Now
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </a>
  );
}

/* ── V2 Past card (same vertical card as Upcoming — resource page theme) ── */

function WebinarCardV2Past({ webinar }: { webinar: Webinar }) {
  return (
    <a
      href="/resources/webinars/watch"
      className="group/card flex h-full flex-col rounded-2xl border border-border bg-card overflow-hidden transition-colors hover:border-primary/40"
    >
      <div className="flex flex-1 flex-col p-8">
        {/* Icon */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/card:bg-primary/20">
          <Play className="h-6 w-6 translate-x-0.5 text-primary" fill="currentColor" />
        </div>

        {/* Tag */}
        <span className="mb-2 text-caption text-muted-foreground">
          {webinar.tags.join(" • ")}
        </span>

        {/* Title */}
        <h3 className="text-heading-sm leading-snug">{webinar.title}</h3>

        {/* Meta */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-caption text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3 shrink-0" />
            {webinar.date}
          </span>
          <span>•</span>
          <span>45 min</span>
        </div>
      </div>

      <span className="flex w-full items-center justify-between px-6 border-t border-primary/20 py-3 text-label-md text-primary transition-opacity duration-200 opacity-0 group-hover/card:opacity-100">
        Watch Recording
        <Play className="h-3.5 w-3.5" />
      </span>
    </a>
  );
}

/* ── V3 card (cover image at top, details below — used by Option 3) ── */

function WebinarCardV3({ webinar, isUpcoming }: { webinar: Webinar; isUpcoming: boolean }) {
  return (
    <a
      href={isUpcoming ? "/resources/webinars/detail" : "/resources/webinars/watch"}
      className="group/card flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg"
    >
      {/* Branded cover (Motadata canvas graphic) */}
      <div
        className="relative aspect-[16/9] w-full overflow-hidden"
        style={{ containerType: "inline-size" }}
      >
        <BrandedCover
          tags={webinar.tags}
          label={webinar.title}
          date={webinar.date}
          time={webinar.time}
        />

        {/* Status pill */}
        <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-medium text-gray-700 shadow-sm backdrop-blur-sm">
          {isUpcoming ? (
            <>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F05A44]" />
              Upcoming
            </>
          ) : (
            <>
              <Play className="h-3 w-3 text-[#F05A44]" fill="currentColor" />
              On-Demand
            </>
          )}
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-6">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {webinar.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="flex-1 text-heading-sm text-foreground leading-snug transition-colors group-hover/card:text-primary">
          {webinar.title}
        </h3>

        {/* Meta */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-caption text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3 shrink-0" />
            {webinar.date}
          </span>
          <span>•</span>
          {isUpcoming ? (
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3 shrink-0" />
              {webinar.time}
            </span>
          ) : (
            <span>45 min</span>
          )}
        </div>
      </div>

      <span className="flex w-full items-center justify-between px-6 border-t border-primary/20 py-3 text-label-md text-primary transition-opacity duration-200 opacity-0 group-hover/card:opacity-100">
        {isUpcoming ? (
          <>
            Register Now
            <ArrowRight className="h-3.5 w-3.5" />
          </>
        ) : (
          <>
            Watch Recording
            <Play className="h-3.5 w-3.5" />
          </>
        )}
      </span>
    </a>
  );
}

/* ── V4 card (minimalist — real PNG cover + text below, no card chrome) ── */

function WebinarCardV4({ webinar, isUpcoming }: { webinar: Webinar; isUpcoming: boolean }) {
  return (
    <a
      href={isUpcoming ? "/resources/webinars/detail" : "/resources/webinars/watch"}
      className="group/card flex h-full flex-col"
    >
      {/* Cover image — real PNG, scales gently on hover */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-foreground/5">
        <Image
          src="/images/webinars/webinar.png"
          alt={webinar.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.03]"
        />

        {/* Status badge — minimalist, top-right */}
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-white/90">
          {isUpcoming ? (
            <>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F05A44]" />
              Upcoming
            </>
          ) : (
            <>
              <span className="h-1.5 w-1.5 rounded-full bg-[#F05A44]" />
              On-Demand
            </>
          )}
        </span>
      </div>

      {/* Editorial content — no card chrome, no borders */}
      <div className="flex flex-1 flex-col pt-5">
        {/* Tag row */}
        <div className="flex flex-wrap items-center gap-1.5 text-caption text-muted-foreground">
          <span className="font-medium uppercase tracking-wider text-primary">
            {webinar.tags[0]}
          </span>
          <span aria-hidden="true">·</span>
          <span>{webinar.tags[1]}</span>
        </div>

        {/* Title — slightly larger for editorial feel */}
        <h3 className="mt-2 text-heading-sm font-semibold leading-snug text-foreground transition-colors group-hover/card:text-primary">
          {webinar.title}
        </h3>

        {/* Meta */}
        <div className="mt-3 flex flex-wrap items-center gap-2 text-caption text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3 shrink-0" />
            {webinar.date}
          </span>
          <span>·</span>
          {isUpcoming ? (
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3 shrink-0" />
              {webinar.time}
            </span>
          ) : (
            <span>45 min</span>
          )}
        </div>

        {/* CTA — inline link, always visible underline-on-hover */}
        <span className="mt-4 inline-flex items-center gap-1.5 text-label-md font-medium text-primary">
          <span className="transition-[letter-spacing] group-hover/card:tracking-wide">
            {isUpcoming ? "Register Now" : "Watch Recording"}
          </span>
          {isUpcoming ? (
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/card:translate-x-0.5" />
          ) : (
            <Play className="h-3.5 w-3.5 transition-transform duration-300 group-hover/card:translate-x-0.5" fill="currentColor" />
          )}
        </span>
      </div>
    </a>
  );
}

/* ── Main component ── */

type ListLayout = 1 | 2 | 3 | 4;

export function WbList() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [query, setQuery] = useState("");
  const [isStuck, setIsStuck] = useState(false);
  const [listLayout, setListLayout] = useState<ListLayout>(1);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setIsStuck(!e.isIntersecting), { threshold: 0 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const filtered = webinars.filter((w) => {
    const matchesTab = activeTab === "all" || w.type === activeTab;
    const matchesSearch = query === "" || w.title.toLowerCase().includes(query.toLowerCase()) || w.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const upcoming = filtered.filter((w) => w.type === "upcoming");
  const past = filtered.filter((w) => w.type === "past");

  return (
    <>
      <div ref={sentinelRef} className="h-0" />
      {/* Filter bar */}
      <section className={`sticky top-14 z-20 py-4 transition-all duration-200 ${isStuck ? "border-b border-border bg-white/85 backdrop-blur-md" : ""}`}>
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex flex-wrap items-center gap-2">

            {/* Category pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`rounded-lg px-3.5 py-1.5 text-[12.5px] font-medium transition-colors ${
                    activeTab === tab.key
                      ? "bg-primary text-primary-foreground"
                      : "border border-border/60 bg-card text-muted-foreground hover:border-border hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground/60" />
              <input
                type="text"
                placeholder="Search webinars..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-[34px] w-[195px] rounded-lg border border-border/60 bg-background pl-9 pr-4 text-[12.5px] text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-ring/30 lg:w-[215px]"
              />
            </div>

            {/* Layout switcher (1 / 2) */}
            <div className="ml-1 hidden md:inline-flex items-center gap-0.5 rounded-lg border border-border/60 bg-card p-0.5">
              {([1, 2, 3, 4] as const).map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setListLayout(opt)}
                  aria-label={`Layout ${opt}`}
                  className={`flex h-7 w-7 items-center justify-center rounded-md text-[11px] font-medium transition-colors ${
                    listLayout === opt
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      {upcoming.length > 0 && (
        <section className="relative z-10 bg-white pt-10 pb-8">
          <div className="mx-auto w-full max-w-7xl px-6">
            {listLayout === 1 ? (
              <div className="mb-10">
                <h2 className="text-heading-xl font-bold tracking-tight text-foreground">
                  Live &amp; Upcoming Webinars
                </h2>
              </div>
            ) : (
              <div className="mb-6 flex items-center gap-3">
                <span className="text-overline text-primary">Upcoming Webinars</span>
                <div className="h-px flex-1 bg-border" />
              </div>
            )}

            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${listLayout === 1 ? "gap-x-8 gap-y-12" : "gap-4"}`}>
              {upcoming.map((w, i) => (
                <ScrollReveal key={`${w.title}-${i}`} delay={i * 100}>
                  {listLayout === 1 && <WebinarCardV4 webinar={w} isUpcoming />}
                  {listLayout === 2 && <WebinarCard webinar={w} isUpcoming />}
                  {listLayout === 3 && <WebinarCardV2Upcoming webinar={w} />}
                  {listLayout === 4 && <WebinarCardV3 webinar={w} isUpcoming />}
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Webinars */}
      {past.length > 0 && (
        <section className="relative z-10 bg-white border-t border-border py-16">
          <div className="mx-auto w-full max-w-7xl px-6">
            {listLayout === 1 ? (
              <div className="mb-10">
                <h2 className="text-heading-xl font-bold tracking-tight text-foreground">
                  On-Demand Webinars
                </h2>
              </div>
            ) : (
              <div className="mb-8 flex items-center gap-3">
                <span className="text-overline text-primary">Past Webinars</span>
                <div className="h-px flex-1 bg-border" />
                <span className="text-body-xs text-muted-foreground">Watch recordings from our previous webinar sessions</span>
              </div>
            )}

            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${listLayout === 1 ? "gap-x-8 gap-y-12" : "gap-4"}`}>
              {past.map((w, i) => (
                <ScrollReveal key={`${w.title}-${i}`} delay={(i % 3) * 100}>
                  {listLayout === 1 && <WebinarCardV4 webinar={w} isUpcoming={false} />}
                  {listLayout === 2 && <WebinarCard webinar={w} isUpcoming={false} />}
                  {listLayout === 3 && <WebinarCardV2Past webinar={w} />}
                  {listLayout === 4 && <WebinarCardV3 webinar={w} isUpcoming={false} />}
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state */}
      {filtered.length === 0 && (
        <section className="relative z-10 py-24">
          <div className="mx-auto w-full max-w-7xl px-6 text-center">
            <p className="text-body-xs text-muted-foreground">No webinars found matching your criteria.</p>
          </div>
        </section>
      )}
    </>
  );
}

"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getEventBySlug, type EventDetailData } from "@/components/events/ev-event-data";

/* ── Featured upcoming event (latest added) ── */
const FEATURED_SLUG = "it-excellence-saudi-arabia-jeddah-2026";

/* Featured event cover graphic (native 1280×720). */
const ANNOUNCEMENT_IMAGE =
  "https://www.motadata.com/storage/events/featured-images/image-2026-06-05t122058219.png";

/* Demo set of "upcoming" events for the carousel layouts.
   In production, build this list from real upcoming events. */
type FeaturedEvent = EventDetailData & { image: string; type: string };

const FEATURED: { slug: string; image: string; date?: string; type?: string }[] = [
  { slug: "it-excellence-saudi-arabia-jeddah-2026", image: ANNOUNCEMENT_IMAGE, type: "Event" },
  {
    slug: "convergence-india-2025",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1100&q=80&auto=format&fit=crop",
    date: "18 July 2026",
    type: "Conference",
  },
  {
    slug: "gitex-global-2024",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1100&q=80&auto=format&fit=crop",
    date: "12 August 2026",
    type: "Event",
  },
  {
    slug: "dtx-europe-2024",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1100&q=80&auto=format&fit=crop",
    date: "03 September 2026",
    type: "Webinar",
  },
];

function getFeaturedEvents(): FeaturedEvent[] {
  return FEATURED.map((f) => {
    const e = getEventBySlug(f.slug);
    if (!e) return null;
    return { ...e, image: f.image, date: f.date ?? e.date, type: f.type ?? "Event" };
  }).filter((e): e is FeaturedEvent => e !== null);
}

/* ── Carousel engine ── */
function useCarousel(count: number, intervalMs = 5000) {
  const [index, setIndex] = useState(0);
  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);
  useEffect(() => {
    if (count <= 1) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % count), intervalMs);
    return () => window.clearInterval(t);
  }, [count, intervalMs]);
  return { index, setIndex, go };
}

function CarouselDots({
  count,
  index,
  setIndex,
  light = false,
}: {
  count: number;
  index: number;
  setIndex: (i: number) => void;
  light?: boolean;
}) {
  if (count <= 1) return null;
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => setIndex(i)}
          aria-label={`Go to event ${i + 1}`}
          className={`h-1.5 rounded-full transition-all ${
            i === index
              ? `w-5 ${light ? "bg-white" : "bg-primary"}`
              : `w-1.5 ${light ? "bg-white/40 hover:bg-white/70" : "bg-border hover:bg-muted-foreground/40"}`
          }`}
        />
      ))}
    </div>
  );
}

function Counter({ index, count }: { index: number; count: number }) {
  return (
    <span className="absolute left-3 top-3 z-10 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
      {index + 1} / {count}
    </span>
  );
}

/* ── Shared modal shell (backdrop + centered holder + outside close) ── */

function ModalShell({
  onClose,
  maxWidth = "max-w-lg",
  children,
}: {
  onClose: () => void;
  maxWidth?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        aria-label="Close announcement"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className={`relative z-10 w-full ${maxWidth}`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -right-3 -top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white text-foreground shadow-lg ring-1 ring-black/5 transition-colors hover:bg-white/90 sm:-right-4 sm:-top-4"
        >
          <X className="h-4 w-4" />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
}

function EventMeta({ event }: { event: FeaturedEvent }) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2.5 text-body-xs text-foreground">
        <Calendar className="h-4 w-4 shrink-0 text-primary" />
        <span>{event.date}{event.dateTime ? ` · ${event.dateTime}` : ""}</span>
      </div>
      <div className="flex items-center gap-2.5 text-body-xs text-foreground">
        <MapPin className="h-4 w-4 shrink-0 text-primary" />
        <span>{event.locationDetail ?? event.location}</span>
      </div>
    </div>
  );
}

function EventActions({ event, href, onClose }: { event: FeaturedEvent; href: string; onClose: () => void }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {event.registerUrl ? (
        <a
          href={event.registerUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-label-md text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg"
        >
          Register Now
          <ArrowRight className="h-4 w-4" />
        </a>
      ) : null}
      <Link
        href={href}
        onClick={onClose}
        className="inline-flex h-11 items-center gap-2 rounded-xl border border-border px-5 text-label-md text-foreground transition-colors hover:bg-muted/40"
      >
        View Details
      </Link>
    </div>
  );
}

function SideArrow({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "left" ? "Previous" : "Next"}
      className={`absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 ${
        dir === "left" ? "left-2" : "right-2"
      }`}
    >
      {dir === "left" ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
    </button>
  );
}

/* ───────────── Layout: Single ───────────── */

function PopupSingle({ event, onClose }: { event: FeaturedEvent; onClose: () => void }) {
  const href = `/resources/events/${event.slug}`;
  const title = event.shortTitle ?? event.title;
  return (
    <ModalShell onClose={onClose}>
      <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
        <div className="relative aspect-[16/9] w-full">
          <Image src={event.image} alt={title} fill sizes="(min-width: 512px) 512px, 100vw" className="object-cover" priority />
        </div>
        <div className="flex flex-col gap-5 p-7 sm:p-8">
          <div>
            <p className="text-overline text-primary">News &amp; Announcements</p>
            <h3 className="mt-2 text-heading-md font-bold leading-snug text-foreground">{title}</h3>
            <p className="mt-3 line-clamp-3 text-body-xs text-muted-foreground">{event.description}</p>
          </div>
          <EventMeta event={event} />
          <EventActions event={event} href={href} onClose={onClose} />
        </div>
      </div>
    </ModalShell>
  );
}

/* ───────────── Carousel A: Classic (image top, content below) ───────────── */

function CarouselClassic({ events, onClose }: { events: FeaturedEvent[]; onClose: () => void }) {
  const count = events.length;
  const { index, setIndex, go } = useCarousel(count);
  const event = events[index];
  const href = `/resources/events/${event.slug}`;
  const title = event.shortTitle ?? event.title;

  return (
    <ModalShell onClose={onClose}>
      <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
        <div className="relative aspect-[16/9] w-full bg-foreground/5">
          <AnimatePresence mode="wait">
            <motion.div key={event.slug} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0">
              <Image src={event.image} alt={title} fill sizes="(min-width: 512px) 512px, 100vw" className="object-cover" priority />
            </motion.div>
          </AnimatePresence>
          <Counter index={index} count={count} />
          {count > 1 && (
            <>
              <SideArrow dir="left" onClick={() => go(-1)} />
              <SideArrow dir="right" onClick={() => go(1)} />
            </>
          )}
        </div>
        <div className="flex flex-col gap-4 p-7 sm:p-8">
          <div>
            <p className="text-overline text-primary">News &amp; Announcements</p>
            <h3 className="mt-2 line-clamp-2 text-heading-md font-bold leading-snug text-foreground">{title}</h3>
          </div>
          <EventMeta event={event} />
          <EventActions event={event} href={href} onClose={onClose} />
          <div className="flex justify-center">
            <CarouselDots count={count} index={index} setIndex={setIndex} />
          </div>
        </div>
      </div>
    </ModalShell>
  );
}

/* ───────────── Carousel B: Split (image left, content right) ───────────── */

function CarouselSplit({ events, onClose }: { events: FeaturedEvent[]; onClose: () => void }) {
  const count = events.length;
  const { index, setIndex, go } = useCarousel(count);
  const event = events[index];
  const href = `/resources/events/${event.slug}`;
  const title = event.shortTitle ?? event.title;

  return (
    <ModalShell onClose={onClose} maxWidth="max-w-3xl">
      <div className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:grid-cols-2">
        <div className="relative aspect-[4/3] bg-foreground/5 sm:aspect-auto sm:min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div key={event.slug} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0">
              <Image src={event.image} alt={title} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" priority />
            </motion.div>
          </AnimatePresence>
          <Counter index={index} count={count} />
        </div>
        <div className="flex flex-col justify-center gap-4 p-7 sm:p-8">
          <div>
            <p className="text-overline text-primary">News &amp; Announcements</p>
            <h3 className="mt-2 line-clamp-3 text-heading-md font-bold leading-snug text-foreground">{title}</h3>
            <p className="mt-3 line-clamp-3 text-body-xs text-muted-foreground">{event.description}</p>
          </div>
          <EventMeta event={event} />
          <EventActions event={event} href={href} onClose={onClose} />
          {count > 1 && (
            <div className="flex items-center gap-3 pt-1">
              <button type="button" onClick={() => go(-1)} aria-label="Previous" className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted/40">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <CarouselDots count={count} index={index} setIndex={setIndex} />
              <button type="button" onClick={() => go(1)} aria-label="Next" className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted/40">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </ModalShell>
  );
}

/* ───────────── Carousel C: Immersive (full image + overlay) ───────────── */

function CarouselImmersive({ events, onClose }: { events: FeaturedEvent[]; onClose: () => void }) {
  const count = events.length;
  const { index, setIndex, go } = useCarousel(count);
  const event = events[index];
  const href = `/resources/events/${event.slug}`;
  const title = event.shortTitle ?? event.title;

  return (
    <ModalShell onClose={onClose} maxWidth="max-w-md">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-foreground/5 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div key={event.slug} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="absolute inset-0">
            <Image src={event.image} alt={title} fill sizes="(min-width: 448px) 448px, 100vw" className="object-cover" priority />
          </motion.div>
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <Counter index={index} count={count} />
        {count > 1 && (
          <>
            <SideArrow dir="left" onClick={() => go(-1)} />
            <SideArrow dir="right" onClick={() => go(1)} />
          </>
        )}

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 text-white">
          <div>
            <p className="text-overline text-white/80">Upcoming Event</p>
            <h3 className="mt-1 line-clamp-2 text-heading-md font-bold leading-snug">{title}</h3>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-caption text-white/85">
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3 shrink-0" />{event.date}</span>
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3 shrink-0" />{event.locationDetail ?? event.location}</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {event.registerUrl ? (
              <a
                href={event.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="inline-flex h-10 items-center gap-1.5 rounded-xl bg-white px-4 text-label-md text-foreground transition-opacity hover:opacity-90"
              >
                Register Now
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : null}
            <Link
              href={href}
              onClick={onClose}
              className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-white/30 px-4 text-label-md text-white transition-colors hover:bg-white/10"
            >
              View Details
            </Link>
          </div>
          <div className="pt-1">
            <CarouselDots count={count} index={index} setIndex={setIndex} light />
          </div>
        </div>
      </div>
    </ModalShell>
  );
}

/* ───────────── Carousel D: Thumbnails (strip navigation) ───────────── */

function CarouselThumbs({ events, onClose }: { events: FeaturedEvent[]; onClose: () => void }) {
  const count = events.length;
  const { index, setIndex } = useCarousel(count);
  const event = events[index];
  const href = `/resources/events/${event.slug}`;
  const title = event.shortTitle ?? event.title;

  return (
    <ModalShell onClose={onClose}>
      <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
        <div className="relative aspect-[16/9] w-full bg-foreground/5">
          <AnimatePresence mode="wait">
            <motion.div key={event.slug} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0">
              <Image src={event.image} alt={title} fill sizes="(min-width: 512px) 512px, 100vw" className="object-cover" priority />
            </motion.div>
          </AnimatePresence>
          <Counter index={index} count={count} />
        </div>
        <div className="flex flex-col gap-4 p-7 sm:p-8">
          <div>
            <p className="text-overline text-primary">News &amp; Announcements</p>
            <h3 className="mt-2 line-clamp-2 text-heading-md font-bold leading-snug text-foreground">{title}</h3>
          </div>
          <EventMeta event={event} />
          <EventActions event={event} href={href} onClose={onClose} />
          {count > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {events.map((e, i) => (
                <button
                  key={e.slug}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show ${e.shortTitle ?? e.title}`}
                  className={`relative h-12 w-20 shrink-0 overflow-hidden rounded-lg ring-2 transition-all ${
                    i === index ? "ring-primary" : "opacity-60 ring-transparent hover:opacity-100"
                  }`}
                >
                  <Image src={e.image} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </ModalShell>
  );
}

/* ─────────────────────── Other styles (single event) ─────────────────────── */

function ToastVariant({ event, onClose }: { event: FeaturedEvent; onClose: () => void }) {
  const href = `/resources/events/${event.slug}`;
  const title = event.shortTitle ?? event.title;
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 60 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className="fixed bottom-4 right-4 z-[100] w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
      role="dialog"
      aria-label={`Upcoming event: ${title}`}
    >
      <button type="button" onClick={onClose} aria-label="Close" className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60">
        <X className="h-4 w-4" />
      </button>
      <Link href={href} onClick={onClose} className="block">
        <div className="relative aspect-[16/9] w-full">
          <Image src={event.image} alt={title} fill sizes="384px" className="object-cover" />
        </div>
      </Link>
      <div className="p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">Upcoming Event</p>
        <h3 className="mt-1 line-clamp-2 text-label-lg font-semibold leading-snug text-foreground">{title}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-caption text-muted-foreground">
          <span className="flex items-center gap-1"><Calendar className="h-3 w-3 shrink-0" />{event.date}</span>
          <span className="flex items-center gap-1"><MapPin className="h-3 w-3 shrink-0" />{event.locationDetail ?? event.location}</span>
        </div>
        <div className="mt-3 flex items-center gap-2">
          {event.registerUrl ? (
            <a href={event.registerUrl} target="_blank" rel="noopener noreferrer" onClick={onClose} className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 text-label-md text-primary-foreground transition-all hover:opacity-90">
              Register Now
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          ) : null}
          <Link href={href} onClick={onClose} className="inline-flex h-9 items-center justify-center rounded-lg border border-border px-3 text-label-md text-foreground transition-colors hover:bg-muted/40">
            Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────── Top Bar (5 minimalist layouts) ─────────────────────── */

const BAR_BTN_PRIMARY =
  "hidden h-8 shrink-0 items-center gap-1.5 rounded-lg bg-white px-3.5 text-[12.5px] font-medium text-foreground transition-opacity hover:opacity-90 sm:inline-flex";
const BAR_BTN_GHOST =
  "hidden h-8 shrink-0 items-center rounded-lg border border-white/40 px-3.5 text-[12.5px] font-medium text-primary-foreground transition-colors hover:bg-white/15 sm:inline-flex";

/* Publish the bar's height as a CSS var so the navbar (and the in-flow spacer)
   offset by it — pushing the page down instead of overlapping. */
function useBarHeightVar(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const root = document.documentElement;
    const apply = () => root.style.setProperty("--event-bar-h", `${el.offsetHeight}px`);
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => {
      ro.disconnect();
      root.style.setProperty("--event-bar-h", "0px");
    };
  }, [ref]);
}

/* Fixed shell: slides down from the top, measures itself, full-width primary bar. */
function BarShell({ ariaLabel, children }: { ariaLabel: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useBarHeightVar(ref);
  return (
    <motion.div
      ref={ref}
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
      className="fixed inset-x-0 top-0 z-[110] bg-primary text-primary-foreground shadow-md"
      role="region"
      aria-label={ariaLabel}
    >
      {children}
    </motion.div>
  );
}

/* One rotating slot (single line, auto-advancing, swaps with a soft slide). */
function BarRotate({ slug, children, className = "" }: { slug: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative min-w-0 flex-1 overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={slug}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* Both CTAs — Register Now falls back to the details page (so it shows for every event). */
function BarCtas({ event, href }: { event: FeaturedEvent; href: string }) {
  const registerHref = event.registerUrl ?? href;
  const external = Boolean(event.registerUrl);
  return (
    <>
      {external ? (
        <a href={registerHref} target="_blank" rel="noopener noreferrer" className={BAR_BTN_PRIMARY}>
          Register Now
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      ) : (
        <Link href={registerHref} className={BAR_BTN_PRIMARY}>
          Register Now
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
      <Link href={href} className={BAR_BTN_GHOST}>
        View Details
      </Link>
      {/* Mobile: compact tap target so the bar stays actionable on small screens */}
      {external ? (
        <a
          href={registerHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Register now"
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-foreground transition-opacity hover:opacity-90 sm:hidden"
        >
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      ) : (
        <Link
          href={registerHref}
          aria-label="View details"
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-foreground transition-opacity hover:opacity-90 sm:hidden"
        >
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </>
  );
}

function BarClose({ onClose }: { onClose: () => void }) {
  return (
    <button type="button" onClick={onClose} aria-label="Close" className="shrink-0 rounded-md p-1 transition-colors hover:bg-white/20">
      <X className="h-4 w-4" />
    </button>
  );
}

/* ── 1 · Inline — pulse dot · headline · dots · CTAs ── */
function BarInline({ events, onClose }: { events: FeaturedEvent[]; onClose: () => void }) {
  const count = events.length;
  const { index, setIndex } = useCarousel(count);
  const event = events[index];
  const href = `/resources/events/${event.slug}`;
  const title = event.shortTitle ?? event.title;
  return (
    <BarShell ariaLabel="Upcoming events">
      <div className="mx-auto flex min-h-[3rem] w-full max-w-7xl items-center gap-2 px-6 py-2 sm:h-12 sm:gap-3 sm:py-0">
        <span className="flex h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-white" />
        <BarRotate slug={event.slug}>
          <Link href={href} className="block min-w-0 break-words text-label-md underline-offset-2 hover:underline sm:truncate">
            <span className="font-semibold">Upcoming:</span> {title} — {event.locationDetail ?? event.location} · {event.date}
          </Link>
        </BarRotate>
        {count > 1 && (
          <div className="hidden shrink-0 md:flex">
            <CarouselDots count={count} index={index} setIndex={setIndex} light />
          </div>
        )}
        <BarCtas event={event} href={href} />
        <BarClose onClose={onClose} />
      </div>
    </BarShell>
  );
}

/* ── 2 · Centered — everything centred, CTAs as text links, dots left ── */
function BarCentered({ events, onClose }: { events: FeaturedEvent[]; onClose: () => void }) {
  const count = events.length;
  const { index, setIndex } = useCarousel(count);
  const event = events[index];
  const href = `/resources/events/${event.slug}`;
  const title = event.shortTitle ?? event.title;
  const registerHref = event.registerUrl ?? href;
  const external = Boolean(event.registerUrl);
  return (
    <BarShell ariaLabel="Upcoming events">
      <div className="relative mx-auto flex min-h-[3rem] w-full max-w-7xl items-center justify-center px-10 py-2 sm:h-12 sm:px-14 sm:py-0">
        {count > 1 && (
          <div className="absolute left-4 hidden sm:flex">
            <CarouselDots count={count} index={index} setIndex={setIndex} light />
          </div>
        )}
        <div className="relative min-w-0 max-w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={event.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex min-w-0 flex-wrap items-center justify-center gap-x-2 text-label-md"
            >
              <Link href={href} className="break-words text-center underline-offset-2 hover:underline sm:truncate">
                <span className="font-semibold">{title}</span>
                <span className="text-primary-foreground/80"> · {event.locationDetail ?? event.location} · {event.date}</span>
              </Link>
              {external ? (
                <a href={registerHref} target="_blank" rel="noopener noreferrer" className="hidden font-medium underline underline-offset-2 hover:opacity-80 sm:inline">
                  Register Now
                </a>
              ) : (
                <Link href={registerHref} className="hidden font-medium underline underline-offset-2 hover:opacity-80 sm:inline">
                  Register Now
                </Link>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <BarClose onClose={onClose} />
        </div>
      </div>
    </BarShell>
  );
}

/* ── 2b · Centre - New — Centered layout with a type badge ── */
function BarCenteredBadge({ events, onClose }: { events: FeaturedEvent[]; onClose: () => void }) {
  const count = events.length;
  const { index, setIndex } = useCarousel(count);
  const event = events[index];
  const href = `/resources/events/${event.slug}`;
  const title = event.shortTitle ?? event.title;
  const registerHref = event.registerUrl ?? href;
  const external = Boolean(event.registerUrl);
  return (
    <BarShell ariaLabel="Upcoming events">
      <div className="mx-auto flex min-h-[3rem] w-full max-w-7xl items-center gap-3 px-6 py-2.5 sm:h-12 sm:py-0">
        {/* TEXT — left 3/5 on mobile, flexible on desktop */}
        <div className="min-w-0 basis-3/5 sm:flex-1 sm:basis-auto">
          <BarRotate slug={event.slug}>
            <div className="flex min-w-0 flex-col items-start gap-1.5 sm:flex-row sm:items-center sm:gap-2.5">
              {/* Event label */}
              <span className="shrink-0 rounded-full bg-white/15 px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-primary-foreground ring-1 ring-inset ring-white/20">
                {event.type}
              </span>
              {/* Event name (row) + subline (new row) */}
              <Link href={href} className="min-w-0 break-words text-left underline-offset-2 hover:underline sm:truncate">
                <span className="block text-xs font-semibold leading-snug sm:inline sm:text-sm">{title}</span>
                <span className="block text-[11px] leading-snug text-primary-foreground/80 sm:inline sm:text-sm sm:font-semibold">
                  <span className="hidden sm:inline"> · </span>
                  {event.locationDetail ?? event.location} · {event.date}
                </span>
              </Link>
              {/* CTA — desktop inline link */}
              {external ? (
                <a href={registerHref} target="_blank" rel="noopener noreferrer" className="hidden shrink-0 font-medium underline underline-offset-2 hover:opacity-80 sm:ml-1 sm:inline">
                  Register Now
                </a>
              ) : (
                <Link href={registerHref} className="hidden shrink-0 font-medium underline underline-offset-2 hover:opacity-80 sm:ml-1 sm:inline">
                  Register Now
                </Link>
              )}
            </div>
          </BarRotate>
        </div>
        {/* RIGHT — 2/5 on mobile: button right-aligned; desktop: dots + close */}
        <div className="flex shrink-0 basis-2/5 items-center justify-end gap-2 sm:basis-auto">
          {/* CTA — mobile button */}
          {external ? (
            <a href={registerHref} target="_blank" rel="noopener noreferrer" className="inline-flex h-7 shrink-0 items-center gap-1.5 rounded-lg bg-white px-2.5 text-[11.5px] font-medium text-foreground transition-opacity hover:opacity-90 sm:hidden">
              Register Now
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          ) : (
            <Link href={registerHref} className="inline-flex h-7 shrink-0 items-center gap-1.5 rounded-lg bg-white px-2.5 text-[11.5px] font-medium text-foreground transition-opacity hover:opacity-90 sm:hidden">
              View Details
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          )}
          {count > 1 && (
            <div className="hidden shrink-0 md:flex">
              <CarouselDots count={count} index={index} setIndex={setIndex} light />
            </div>
          )}
          <BarClose onClose={onClose} />
        </div>
      </div>
    </BarShell>
  );
}

/* ── 3 · Badge — uppercase pill label, then headline + CTAs ── */
function BarBadge({ events, onClose }: { events: FeaturedEvent[]; onClose: () => void }) {
  const count = events.length;
  const { index, setIndex } = useCarousel(count);
  const event = events[index];
  const href = `/resources/events/${event.slug}`;
  const title = event.shortTitle ?? event.title;
  return (
    <BarShell ariaLabel="Upcoming events">
      <div className="mx-auto flex min-h-[3rem] w-full max-w-7xl items-center gap-2 px-6 py-2 sm:h-12 sm:gap-3 sm:py-0">
        <span className="hidden shrink-0 rounded-full bg-white/15 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider sm:inline-flex">
          Upcoming Event
        </span>
        <BarRotate slug={event.slug}>
          <Link href={href} className="block min-w-0 break-words text-label-md underline-offset-2 hover:underline sm:truncate">
            <span className="font-semibold">{title}</span>
            <span className="text-primary-foreground/80"> — {event.locationDetail ?? event.location} · {event.date}</span>
          </Link>
        </BarRotate>
        {count > 1 && (
          <div className="hidden shrink-0 md:flex">
            <CarouselDots count={count} index={index} setIndex={setIndex} light />
          </div>
        )}
        <BarCtas event={event} href={href} />
        <BarClose onClose={onClose} />
      </div>
    </BarShell>
  );
}

/* Petal/pinwheel bullet (from the UCV "Key Highlights" list) — used here in
   white as the divider between events in the ticker. */
function TickerSeparator() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.9 14.9"
      aria-hidden
      fill="currentColor"
      className="mx-8 h-3 w-3 shrink-0 text-white/80"
    >
      <path d="M0,10.4c0,2.5,2,4.4,4.4,4.4h0V6h0C2,6,0,8,0,10.4Z" />
      <path d="M14.9,4.4c0-2.5-2-4.4-4.4-4.4h0v8.9h0c2.4,0,4.4-2,4.4-4.4Z" />
      <path d="M6,10.4c0,2.5,2,4.4,4.4,4.4s4.4-2,4.4-4.4h0c0,0-8.9,0-8.9,0h0Z" />
      <path d="M8.9,4.4C8.9,2,6.9,0,4.4,0S0,2,0,4.4h0c0,0,8.9,0,8.9,0h0Z" />
    </svg>
  );
}

/* ── 4 · Ticker — continuous marquee of every event ── */
function BarTicker({ events, onClose }: { events: FeaturedEvent[]; onClose: () => void }) {
  const loop = [...events, ...events];
  return (
    <BarShell ariaLabel="Upcoming events">
      <div className="mx-auto flex h-11 w-full max-w-7xl items-center gap-2 px-6 sm:gap-3">
        <span className="hidden shrink-0 rounded-full bg-white/15 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider sm:inline-flex">
          Upcoming
        </span>
        {/* CSS marquee — GPU-accelerated, pauses on hover (globals.css) */}
        <div className="marquee-wrap relative min-w-0 flex-1">
          <div className="event-ticker-track">
            {loop.map((e, i) => (
              <Fragment key={`${e.slug}-${i}`}>
                <Link
                  href={`/resources/events/${e.slug}`}
                  className="whitespace-nowrap text-label-md underline-offset-2 hover:underline"
                >
                  <span className="font-semibold">{e.shortTitle ?? e.title}</span>
                  <span className="text-primary-foreground/80"> · {e.locationDetail ?? e.location} · {e.date}</span>
                </Link>
                <TickerSeparator />
              </Fragment>
            ))}
          </div>
        </div>
        <Link href="/resources/events" className="hidden shrink-0 text-[12.5px] font-medium underline-offset-2 hover:underline sm:inline">
          View all
        </Link>
        <BarClose onClose={onClose} />
      </div>
    </BarShell>
  );
}

/* ── 5 · Date Chip — calendar chip leads, then headline + CTAs ── */
function BarChip({ events, onClose }: { events: FeaturedEvent[]; onClose: () => void }) {
  const count = events.length;
  const { index, setIndex } = useCarousel(count);
  const event = events[index];
  const href = `/resources/events/${event.slug}`;
  const title = event.shortTitle ?? event.title;
  return (
    <BarShell ariaLabel="Upcoming events">
      <div className="mx-auto flex min-h-[3rem] w-full max-w-7xl items-center gap-2 px-6 py-2 sm:h-12 sm:gap-3 sm:py-0">
        <BarRotate slug={event.slug}>
          <Link href={href} className="flex min-w-0 items-center gap-2.5 underline-offset-2">
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-white/15 px-2 py-1 text-[11px] font-medium">
              <Calendar className="h-3 w-3" />
              {event.date}
            </span>
            <span className="min-w-0 break-words text-label-md hover:underline sm:truncate">
              <span className="font-semibold">{title}</span>
              <span className="text-primary-foreground/80"> — {event.locationDetail ?? event.location}</span>
            </span>
          </Link>
        </BarRotate>
        {count > 1 && (
          <div className="hidden shrink-0 md:flex">
            <CarouselDots count={count} index={index} setIndex={setIndex} light />
          </div>
        )}
        <BarCtas event={event} href={href} />
        <BarClose onClose={onClose} />
      </div>
    </BarShell>
  );
}

/* ── 6 · Type-led — event type tag · topic · minimal "Read more" ── */
function BarTyped({ events, onClose }: { events: FeaturedEvent[]; onClose: () => void }) {
  const count = events.length;
  const { index, setIndex } = useCarousel(count);
  const event = events[index];
  const href = `/resources/events/${event.slug}`;
  const title = event.shortTitle ?? event.title;
  return (
    <BarShell ariaLabel="Upcoming events">
      <div className="mx-auto flex min-h-[3rem] w-full max-w-7xl items-center gap-2 px-6 py-2 sm:h-12 sm:gap-3 sm:py-0">
        <BarRotate slug={event.slug}>
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="shrink-0 rounded-full bg-white/15 px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-primary-foreground ring-1 ring-inset ring-white/20">
              {event.type}
            </span>
            <Link href={href} className="min-w-0 break-words text-label-md font-medium underline-offset-2 hover:underline sm:truncate">
              {title}
            </Link>
          </div>
        </BarRotate>
        {count > 1 && (
          <div className="hidden shrink-0 md:flex">
            <CarouselDots count={count} index={index} setIndex={setIndex} light />
          </div>
        )}
        <Link href={href} className="hidden shrink-0 items-center gap-1 text-[12.5px] font-medium underline-offset-2 hover:underline sm:inline-flex">
          Read more
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        {/* Mobile: compact tap target */}
        <Link
          href={href}
          aria-label="Read more"
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/15 text-primary-foreground transition-colors hover:bg-white/25 sm:hidden"
        >
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <BarClose onClose={onClose} />
      </div>
    </BarShell>
  );
}

function BannerVariant({ event, onClose }: { event: FeaturedEvent; onClose: () => void }) {
  const href = `/resources/events/${event.slug}`;
  const title = event.shortTitle ?? event.title;
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-card/95 shadow-2xl backdrop-blur-md"
      role="region"
      aria-label={`Upcoming event: ${title}`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <div className="relative hidden h-14 w-24 shrink-0 overflow-hidden rounded-lg sm:block">
          <Image src={event.image} alt={title} fill sizes="96px" className="object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">Upcoming Event</p>
          <p className="mt-0.5 truncate text-label-lg font-semibold text-foreground">{title}</p>
          <p className="mt-0.5 truncate text-caption text-muted-foreground">
            {event.locationDetail ?? event.location} · {event.date}{event.dateTime ? ` · ${event.dateTime}` : ""}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {event.registerUrl ? (
            <a href={event.registerUrl} target="_blank" rel="noopener noreferrer" onClick={onClose} className="inline-flex h-10 items-center gap-1.5 rounded-xl bg-primary px-4 text-label-md text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg">
              Register Now
              <ArrowRight className="h-4 w-4" />
            </a>
          ) : null}
          <Link href={href} onClick={onClose} className="hidden h-10 items-center rounded-xl border border-border px-4 text-label-md text-foreground transition-colors hover:bg-muted/40 sm:inline-flex">
            View Details
          </Link>
          <button type="button" onClick={onClose} aria-label="Close" className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted/60">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ───────────────────────── Main (with style switcher) ───────────────────────── */

type Variant = "popup" | "toast" | "bar" | "banner";
type PopupLayout = "single" | "classic" | "split" | "immersive" | "thumbs";
type BarLayout = "inline" | "centered" | "centeredbadge" | "badge" | "ticker" | "chip" | "typed";

const VARIANTS: { key: Variant; label: string }[] = [
  { key: "popup", label: "Popup" },
  { key: "toast", label: "Corner" },
  { key: "bar", label: "Top Bar" },
  { key: "banner", label: "Bottom" },
];

const POPUP_LAYOUTS: { key: PopupLayout; label: string }[] = [
  { key: "single", label: "Single" },
  { key: "classic", label: "Carousel · Classic" },
  { key: "split", label: "Carousel · Split" },
  { key: "immersive", label: "Carousel · Immersive" },
  { key: "thumbs", label: "Carousel · Thumbs" },
];

const BAR_LAYOUTS: { key: BarLayout; label: string }[] = [
  { key: "ticker", label: "Ticker" },
  { key: "typed", label: "Type" },
  { key: "centeredbadge", label: "Centre - New" },
  { key: "inline", label: "Inline" },
  { key: "centered", label: "Centered" },
  { key: "badge", label: "Badge" },
  { key: "chip", label: "Date Chip" },
];

export function EventAnnouncement() {
  const events = getFeaturedEvents();
  const [variant, setVariant] = useState<Variant>("bar");
  const [popupLayout, setPopupLayout] = useState<PopupLayout>("classic");
  const [barLayout, setBarLayout] = useState<BarLayout>("ticker");
  const [visible, setVisible] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);

  if (!events.length) return null;

  const first = events[0];
  const onClose = () => setVisible(false);

  return (
    <>
      {/* In-flow spacer: reserves the bar's height so the navbar & page are
          pushed down (not covered) while the Top Bar is visible. */}
      {visible && variant === "bar" && (
        <div aria-hidden style={{ height: "var(--event-bar-h, 0px)" }} />
      )}

      {/* Announcement chip — small, top-right, opens the announcement */}
      {!visible && (
        <button
          type="button"
          onClick={() => setVisible(true)}
          aria-label="Show announcement"
          className="fixed right-3 top-[calc(var(--top-banner-visible,0px)+var(--announce-strip-h,0px)+4rem)] z-[90] inline-flex h-6 items-center gap-1.5 rounded-full border border-border/60 bg-card/90 px-2 text-[10px] font-medium text-muted-foreground shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-foreground"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          News
        </button>
      )}

      {/* Nav chip — small, bottom-left, toggles the style switcher panels */}
      <button
        type="button"
        onClick={() => setPanelOpen((o) => !o)}
        aria-label="Toggle announcement style switcher"
        className={`fixed bottom-3 left-3 z-[141] inline-flex h-6 items-center rounded-full border px-2 text-[10px] font-medium shadow-sm backdrop-blur-sm transition-colors ${
          panelOpen
            ? "border-primary/40 bg-primary text-primary-foreground"
            : "border-border/60 bg-card/90 text-muted-foreground hover:text-foreground"
        }`}
      >
        Nav
      </button>

      {/* Preview switcher — flip between styles, then pick one. (Remove once chosen.) */}
      {panelOpen && (
      <div className="fixed bottom-4 left-20 z-[140] flex flex-wrap items-center gap-1 rounded-xl border border-border bg-card/95 p-1 shadow-lg backdrop-blur-sm">
        <span className="px-2 text-[11px] font-medium text-muted-foreground">Style:</span>
        {VARIANTS.map((v) => (
          <button
            key={v.key}
            type="button"
            onClick={() => {
              setVariant(v.key);
              setVisible(true);
            }}
            className={`rounded-lg px-2.5 py-1 text-[11px] font-medium transition-colors ${
              variant === v.key ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {v.label}
          </button>
        ))}
        <button type="button" onClick={() => setVisible(false)} className="rounded-lg px-2.5 py-1 text-[11px] font-medium text-muted-foreground hover:text-foreground">
          Off
        </button>
      </div>
      )}

      {/* Popup layout sub-switcher (carousel variants) */}
      {panelOpen && variant === "popup" && (
        <div className="fixed bottom-16 left-4 z-[140] flex max-w-[calc(100vw-2rem)] flex-wrap items-center gap-1 rounded-xl border border-border bg-card/95 p-1 shadow-lg backdrop-blur-sm">
          <span className="px-2 text-[11px] font-medium text-muted-foreground">Layout:</span>
          {POPUP_LAYOUTS.map((l) => (
            <button
              key={l.key}
              type="button"
              onClick={() => {
                setPopupLayout(l.key);
                setVisible(true);
              }}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-medium transition-colors ${
                popupLayout === l.key ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      {/* Top Bar layout sub-switcher (5 minimalist styles) */}
      {panelOpen && variant === "bar" && (
        <div className="fixed bottom-16 left-4 z-[140] flex max-w-[calc(100vw-2rem)] flex-wrap items-center gap-1 rounded-xl border border-border bg-card/95 p-1 shadow-lg backdrop-blur-sm">
          <span className="px-2 text-[11px] font-medium text-muted-foreground">Bar:</span>
          {BAR_LAYOUTS.map((l) => (
            <button
              key={l.key}
              type="button"
              onClick={() => {
                setBarLayout(l.key);
                setVisible(true);
              }}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-medium transition-colors ${
                barLayout === l.key ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {visible && variant === "popup" && popupLayout === "single" && <PopupSingle key="p-single" event={first} onClose={onClose} />}
        {visible && variant === "popup" && popupLayout === "classic" && <CarouselClassic key="p-classic" events={events} onClose={onClose} />}
        {visible && variant === "popup" && popupLayout === "split" && <CarouselSplit key="p-split" events={events} onClose={onClose} />}
        {visible && variant === "popup" && popupLayout === "immersive" && <CarouselImmersive key="p-immersive" events={events} onClose={onClose} />}
        {visible && variant === "popup" && popupLayout === "thumbs" && <CarouselThumbs key="p-thumbs" events={events} onClose={onClose} />}
        {visible && variant === "toast" && <ToastVariant key="toast" event={first} onClose={onClose} />}
        {visible && variant === "bar" && barLayout === "inline" && <BarInline key="b-inline" events={events} onClose={onClose} />}
        {visible && variant === "bar" && barLayout === "centered" && <BarCentered key="b-centered" events={events} onClose={onClose} />}
        {visible && variant === "bar" && barLayout === "centeredbadge" && <BarCenteredBadge key="b-centeredbadge" events={events} onClose={onClose} />}
        {visible && variant === "bar" && barLayout === "badge" && <BarBadge key="b-badge" events={events} onClose={onClose} />}
        {visible && variant === "bar" && barLayout === "ticker" && <BarTicker key="b-ticker" events={events} onClose={onClose} />}
        {visible && variant === "bar" && barLayout === "chip" && <BarChip key="b-chip" events={events} onClose={onClose} />}
        {visible && variant === "bar" && barLayout === "typed" && <BarTyped key="b-typed" events={events} onClose={onClose} />}
        {visible && variant === "banner" && <BannerVariant key="banner" event={first} onClose={onClose} />}
      </AnimatePresence>
    </>
  );
}

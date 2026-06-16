"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Search, MapPin, Calendar, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Types ── */

type EventCategory = "Conference" | "Partner Session" | "Award" | "Webinar";

interface EventItem {
  title: string;
  category: EventCategory;
  date: string;
  location: string;
  href?: string;
}

/* ── Data ── */

const upcomingEvents: EventItem[] = [
  {
    title: "Driving IT Excellence in Saudi Arabia: Building Resilient and Intelligent Digital Operations",
    category: "Conference",
    date: "05 July 2026",
    location: "Holiday Inn, Jeddah, Saudi Arabia",
    href: "/resources/events/it-excellence-saudi-arabia-jeddah-2026",
  },
  {
    title: "Building a Safer Digital World Through Collaboration and Innovation",
    category: "Conference",
    date: "05-06 November 2025",
    location: "Dubai, UAE",
    href: "/resources/events/safer-digital-world-dubai-2025",
  },
];

const pastEvents: EventItem[] = [
  { title: "5 Outstanding Days of GITEX Global 2022!", category: "Conference", date: "10-14 October 2022", location: "Dubai, UAE", href: "/resources/events/gitex-global-2022" },
  { title: "Powering Africa's Growth Through Innovation and Collaboration", category: "Conference", date: "29-31 October 2025", location: "Cape Town, South Africa", href: "/resources/events/powering-africa-growth-2025" },
  { title: "Driving Meaningful Conversations and Collaboration at the SAT Forum Event", category: "Conference", date: "24th October 2025", location: "Singapore", href: "/resources/events/sat-forum-singapore-2025" },
  { title: "Empowering Innovation Together: A Remarkable Experience at Our Malaysia Event", category: "Partner Session", date: "09th October 2025", location: "Kuala Lumpur, Malaysia", href: "/resources/events/partner-session-malaysia-2025" },
  { title: "Customer Roundtable focusing on Digital Transformation", category: "Partner Session", date: "30th September 2025", location: "Dubai, UAE", href: "/resources/events/customer-roundtable-dubai-2025" },
  { title: "Thrilled to engage with industry leaders at the Customer Roundtable in Bahrain", category: "Partner Session", date: "25th September 2025", location: "Manama, Bahrain", href: "/resources/events/customer-roundtable-bahrain-2025" },
  { title: "Showcasing Innovation at Mannai NEXCHANGE 2025, Doha Qatar", category: "Conference", date: "23rd September 2025", location: "Doha, Qatar", href: "/resources/events/mannai-nexchange-doha-2025" },
  { title: "Embracing Innovation at CIO 500 Accelerator X Awards", category: "Award", date: "22nd September 2025", location: "Mumbai, India", href: "/resources/events/cio-500-accelerator-awards-mumbai-sept-2025" },
  { title: "Empowering Growth with AI-Driven IT: Webinar Recap", category: "Webinar", date: "16th September 2025", location: "Online", href: "/resources/events/ai-driven-it-webinar-2025" },
  { title: "CIO500 Accelerator X Awards 2025: Driving Innovation with Precision", category: "Award", date: "20th August 2025", location: "Bangalore, India", href: "/resources/events/cio500-awards-bangalore-2025" },
  { title: "CIO500 Accelerator X Awards 2025: A Celebration of Leadership, Innovation & Collaboration", category: "Award", date: "13th August 2025", location: "Delhi, India", href: "/resources/events/cio500-awards-delhi-2025" },
  { title: "Motadata Joins the CIO500 Accelerator X Awards 2025 as Silver Partner: Driving the Future of Intelligent IT", category: "Award", date: "13th August 2025", location: "Mumbai, India", href: "/resources/events/cio500-awards-mumbai-2025" },
  { title: "Driving Smarter IT Futures: Motadata & Savex in Surat", category: "Partner Session", date: "13th August 2025", location: "Surat, India", href: "/resources/events/partner-session-surat-2025" },
  { title: "Shaping the Future of IT: Bhubaneswar Partner Session with Savex", category: "Partner Session", date: "8th August 2025", location: "Bhubaneswar, India", href: "/resources/events/partner-session-bhubaneswar-2025" },
  { title: "Uncover the Power of AI-Driven ITAM for the Modern Enterprise", category: "Webinar", date: "07th August 2025", location: "Online", href: "/resources/events/ai-driven-itam-webinar-2025" },
  { title: "Empowering IT with Intelligence and Collaboration", category: "Partner Session", date: "06th August 2025", location: "Chennai, India", href: "/resources/events/partner-session-chennai-2025" },
  { title: "Future-Ready IT Begins Here: Highlights from Our Partner Enablement Drive in Bangalore", category: "Partner Session", date: "23rd July 2025", location: "Bangalore, India", href: "/resources/events/partner-session-bangalore-2025" },
  { title: "Exploring Innovation, Insights, and Intelligent IT with Savex Technologies", category: "Partner Session", date: "16th July 2025", location: "Hyderabad, India", href: "/resources/events/partner-session-hyderabad-2025" },
  { title: "Redefining IT Operations for the Digital Era", category: "Webinar", date: "14th July 2025", location: "Online", href: "/resources/events/redefining-it-operations-webinar-2025" },
  { title: "Technology, Temples and Trust: A Memorable Day in Madurai", category: "Partner Session", date: "11th July 2025", location: "Madurai, India", href: "/resources/events/partner-session-madurai-2025" },
  { title: "Coimbatore Chronicles: Fueling Smarter IT with Innovation and Partnership", category: "Partner Session", date: "9th July 2025", location: "Coimbatore, India", href: "/resources/events/partner-session-coimbatore-2025" },
  { title: "Key Takeaways from Our Pune Partner Session with Savex Technologies", category: "Partner Session", date: "04th July 2025", location: "Pune, India", href: "/resources/events/partner-session-pune-2025" },
  { title: "Igniting Intelligent IT Conversations in Guwahati", category: "Partner Session", date: "20th June 2025", location: "Guwahati, India", href: "/resources/events/partner-session-guwahati-2025" },
  { title: "Unifying Vision and Velocity: Empowering Partners for the Future of IT Operations", category: "Partner Session", date: "19th June 2025", location: "Mumbai, India", href: "/resources/events/partner-session-mumbai-2025" },
  { title: "Empowering IT Teams Through Collaboration and Insight: Kolkata Partner Session Recap", category: "Partner Session", date: "18th June 2025", location: "Kolkata, India", href: "/resources/events/partner-session-kolkata-2025" },
  { title: "Enabling the Future: Motadata and Savex Collaborate in Chandigarh to Empower IT Operations", category: "Partner Session", date: "13th June 2025", location: "Chandigarh, India", href: "/resources/events/partner-enablement-chandigarh-2025" },
  { title: "Unlocking Possibilities: Motadata & Savex Drive Partner Enablement in Secunderabad", category: "Partner Session", date: "11th June 2025", location: "Secunderabad, India", href: "/resources/events/partner-enablement-secunderabad-2025" },
  { title: "Say Goodbye to IT Chaos: Discover the Power of Unified ITSM", category: "Webinar", date: "18th June 2025", location: "Online", href: "/resources/events/unified-itsm-webinar-2025" },
  { title: "Future of IT, Powered by Partnership", category: "Webinar", date: "13th June 2025", location: "Online", href: "/resources/events/future-of-it-partnership-webinar-2025" },
  { title: "Intelligent IT Starts Here: Future DigiTech Summit 2025", category: "Conference", date: "28-29 May 2025", location: "Mumbai, India", href: "/resources/events/future-digitech-summit-2025" },
  { title: "Empowering Banking with AI at Africa Summit", category: "Conference", date: "13-15 May 2025", location: "Lagos, Nigeria", href: "/resources/events/empowering-banking-africa-summit-2025" },
  { title: "The Real Cost of Downtime \u2013 How AIOps Can Save You Millions", category: "Webinar", date: "6th May 2025", location: "Online", href: "/resources/events/real-cost-of-downtime-webinar-2025" },
  { title: "TekQ Global CIO Forum Annual Cyber Security Conclave- 2025", category: "Conference", date: "26th April 2025", location: "Bangalore, India", href: "/resources/events/tekq-cyber-security-conclave-2025" },
  { title: "Smarter IT, Stronger Communication: Partner Meet", category: "Partner Session", date: "23rd April 2025", location: "Delhi, India", href: "/resources/events/smarter-it-partner-meet-delhi-2025" },
  { title: "Experience the Future of IT Operations at Convergence India 2025", category: "Conference", date: "March 19-22, 2025", location: "New Delhi, India", href: "/resources/events/convergence-india-2025" },
  { title: "GITEX Global 2024", category: "Conference", date: "14-18 October 2024", location: "Dubai, UAE", href: "/resources/events/gitex-global-2024" },
  { title: "Motadata at DTX Europe 2024!", category: "Conference", date: "2-3 October, 2024", location: "Amsterdam, Netherlands", href: "/resources/events/dtx-europe-2024" },
  { title: "BFSI CXO Conclave 2024", category: "Conference", date: "18 September 2024", location: "Mumbai, India", href: "/resources/events/bfsi-cxo-conclave-2024" },
  { title: "Motadata at GITEX Global 2023!", category: "Conference", date: "16-20 October, 2023", location: "Dubai, UAE", href: "/resources/events/gitex-global-2023" },
  { title: "SITS 2023 - Europe's leading ITSM event show", category: "Conference", date: "10-11 May, 2023", location: "London, UK", href: "/resources/events/sits-2023" },
  { title: "Witness the best ITOps Solutions in Action at Asia's Largest Data Centre Event, Singapore.", category: "Conference", date: "12-13 October 2022", location: "Singapore", href: "/resources/events/asia-data-centre-event-singapore-2022" },
  { title: "Africa Tech Festival 2022", category: "Conference", date: "7-11 November, 2022", location: "Cape Town, South Africa", href: "/resources/events/africa-tech-festival-2022" },
  { title: "Digital Transformation Summit 2022", category: "Conference", date: "15-17 September, 2022", location: "Mumbai, India", href: "/resources/events/digital-transformation-summit-2022" },
  { title: "IT Infrastructure Excellence Awards 2022", category: "Award", date: "22nd August, 2022", location: "Bangalore, India", href: "/resources/events/it-infrastructure-excellence-awards-2022" },
];

/* ── Filter tabs ── */

const allEvents = [...upcomingEvents, ...pastEvents];

type TabKey = "all" | "conference" | "partner" | "award" | "webinar";

const tabs: { key: TabKey; label: string; count: number }[] = [
  { key: "all", label: "All Events", count: allEvents.length },
  { key: "conference", label: "Conferences & Exhibitions", count: allEvents.filter((e) => e.category === "Conference").length },
  { key: "partner", label: "Partner Sessions", count: allEvents.filter((e) => e.category === "Partner Session").length },
  { key: "award", label: "Awards & Forums", count: allEvents.filter((e) => e.category === "Award").length },
  { key: "webinar", label: "Webinars", count: allEvents.filter((e) => e.category === "Webinar").length },
];

const categoryMap: Record<TabKey, EventCategory | null> = {
  all: null,
  conference: "Conference",
  partner: "Partner Session",
  award: "Award",
  webinar: "Webinar",
};

/* Category labels use unified primary color for minimalist consistency */

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

/* ── Event card (borderless editorial — matches webinar list V4 card) ── */

function EventCoverCard({ ev, isUpcoming }: { ev: EventItem; isUpcoming: boolean }) {
  return (
    <a href={ev.href ?? "#"} className="group/card flex h-full flex-col">
      {/* Cover image — same PNG used on the webinar list cards */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-foreground/5">
        <Image
          src="/images/webinars/webinar.png"
          alt={ev.title}
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
              Past Event
            </>
          )}
        </span>
      </div>

      {/* Editorial content — no card chrome, no borders */}
      <div className="flex flex-1 flex-col pt-5">
        {/* Category */}
        <div className="flex flex-wrap items-center gap-1.5 text-caption text-muted-foreground">
          <span className="font-medium uppercase tracking-wider text-primary">{ev.category}</span>
        </div>

        {/* Title */}
        <h3 className="mt-2 line-clamp-3 text-heading-sm font-semibold leading-snug text-foreground transition-colors group-hover/card:text-primary">
          {ev.title}
        </h3>

        {/* Meta */}
        <div className="mt-3 flex flex-wrap items-center gap-2 text-caption text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3 shrink-0" />
            {ev.date}
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3 shrink-0" />
            {ev.location}
          </span>
        </div>

        {/* CTA — inline link, always visible */}
        <span className="mt-4 inline-flex items-center gap-1.5 text-label-md font-medium text-primary">
          <span className="transition-[letter-spacing] group-hover/card:tracking-wide">
            {isUpcoming ? "Register Now" : "View Details"}
          </span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/card:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}

/* ── Main component ── */

const PRIMARY_TAB_COUNT = 3;

export function EvEvents() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [query, setQuery] = useState("");
  const [moreOpen, setMoreOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const primaryTabs = tabs.slice(0, PRIMARY_TAB_COUNT);
  const moreTabs = tabs.slice(PRIMARY_TAB_COUNT);
  const activeIsMore = moreTabs.some((t) => t.key === activeTab);

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node))
        setMoreOpen(false);
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setIsStuck(!e.isIntersecting), { threshold: 0 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const pillBase =
    "rounded-lg px-3.5 py-1.5 text-[12.5px] font-medium transition-colors";
  const pillActive = "bg-primary text-primary-foreground";
  const pillIdle =
    "border border-border/60 bg-card text-muted-foreground hover:border-border hover:text-foreground";

  const dropdownVariants = {
    hidden: { opacity: 0, y: 6, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const filterFn = (ev: EventItem) => {
    const matchesTab = activeTab === "all" || ev.category === categoryMap[activeTab];
    const matchesSearch = query === "" || ev.title.toLowerCase().includes(query.toLowerCase()) || ev.location.toLowerCase().includes(query.toLowerCase());
    return matchesTab && matchesSearch;
  };

  const filteredUpcoming = upcomingEvents.filter(filterFn);
  const filteredPast = pastEvents.filter(filterFn);

  return (
    <>
      <div ref={sentinelRef} className="h-0" />
      {/* Filter bar */}
      <section className={`sticky top-14 z-20 py-4 transition-all duration-200 ${isStuck ? "border-b border-border bg-background/80 backdrop-blur-md" : ""}`}>
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex flex-wrap items-center gap-2">

            {/* Category pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {primaryTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`${pillBase} ${activeTab === tab.key ? pillActive : pillIdle}`}
                >
                  {tab.label}
                </button>
              ))}

              {moreTabs.length > 0 && (
                <div className="relative" ref={moreRef}>
                  <button
                    onClick={() => setMoreOpen((o) => !o)}
                    className={`flex items-center gap-1 ${pillBase} ${
                      activeIsMore ? pillActive : pillIdle
                    }`}
                  >
                    {activeIsMore ? tabs.find((t) => t.key === activeTab)!.label : "More Categories"}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        moreOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {moreOpen && (
                      <motion.div
                        key="more-dropdown"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full z-50 mt-2 min-w-[172px] overflow-hidden rounded-xl border border-border/60 bg-popover shadow-lg"
                      >
                        {moreTabs.map((tab) => (
                          <button
                            key={tab.key}
                            onClick={() => {
                              setActiveTab(tab.key);
                              setMoreOpen(false);
                            }}
                            className={`flex w-full items-center px-4 py-2.5 text-left text-[13px] transition-colors hover:bg-muted/60 ${
                              activeTab === tab.key
                                ? "font-semibold text-primary"
                                : "text-foreground"
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground/60" />
              <input
                type="text"
                placeholder="Search events..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-[34px] w-[195px] rounded-lg border border-border/60 bg-background pl-9 pr-4 text-[12.5px] text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-ring/30 lg:w-[215px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {filteredUpcoming.length > 0 && (
        <section className="relative z-10 pt-10 pb-8">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-10">
              <h2 className="text-heading-xl font-bold tracking-tight text-foreground">
                Live &amp; Upcoming Events
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {filteredUpcoming.map((ev, i) => (
                <ScrollReveal key={`${ev.title}-${i}`} delay={(i % 3) * 100}>
                  <EventCoverCard ev={ev} isUpcoming />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {filteredPast.length > 0 && (
        <section className="relative z-10 border-t border-border py-16">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-10">
              <h2 className="text-heading-xl font-bold tracking-tight text-foreground">
                Past Events
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPast.map((ev, i) => (
                <ScrollReveal key={`${ev.title}-${i}`} delay={(i % 3) * 100}>
                  <EventCoverCard ev={ev} isUpcoming={false} />
                </ScrollReveal>
              ))}
            </div>

            {filteredPast.length === 0 && (
              <p className="py-12 text-center text-body-xs text-muted-foreground">No events found matching your criteria.</p>
            )}
          </div>
        </section>
      )}

      {/* Empty state */}
      {filteredUpcoming.length === 0 && filteredPast.length === 0 && (
        <section className="relative z-10 py-24">
          <div className="mx-auto w-full max-w-7xl px-6 text-center">
            <p className="text-body-xs text-muted-foreground">No events found matching your criteria.</p>
          </div>
        </section>
      )}
    </>
  );
}

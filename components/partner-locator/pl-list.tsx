"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, MapPin, ArrowRight, ChevronDown } from "lucide-react";

/* ── Data ── */

type PartnerType = "Distributor" | "System Integrator" | "Reseller" | "Managed Service Provider" | "Professional Service Partner";

interface Partner {
  name: string;
  type: PartnerType;
  location: string;
  region: string;
  desc: string;
  logo: string;
}

const partners: Partner[] = [
  {
    name: "TechSolutions Inc.",
    type: "Distributor",
    location: "New York, United States",
    region: "North America",
    desc: "Leading IT infrastructure and observability solutions provider in North America with 20+ years of experience.",
    logo: "/logos/jsw_steel.svg",
  },
  {
    name: "Global Systems Ltd",
    type: "System Integrator",
    location: "London, United Kingdom",
    region: "Europe",
    desc: "Enterprise IT integration specialist focused on unified observability and service management solutions.",
    logo: "/logos/vodafone.svg",
  },
  {
    name: "DataFlow Partners",
    type: "Reseller",
    location: "Singapore, Singapore",
    region: "Asia Pacific",
    desc: "Premier reseller of enterprise monitoring and observability tools across Southeast Asia.",
    logo: "/logos/airtel.svg",
  },
  {
    name: "CloudOps Solutions",
    type: "Managed Service Provider",
    location: "Toronto, Canada",
    region: "North America",
    desc: "Managed services provider specializing in cloud infrastructure monitoring and optimization.",
    logo: "/logos/nec.svg",
  },
  {
    name: "EuroTech Consulting",
    type: "Professional Service Partner",
    location: "Berlin, Germany",
    region: "Europe",
    desc: "IT consultancy providing implementation and customization services for enterprise observability.",
    logo: "/logos/kansai.svg",
  },
  {
    name: "Pacific Digital Group",
    type: "Distributor",
    location: "Sydney, Australia",
    region: "Asia Pacific",
    desc: "Value-added distributor of enterprise IT solutions across Australia and New Zealand.",
    logo: "/logos/kotak.svg",
  },
  {
    name: "Innovate IT Services",
    type: "System Integrator",
    location: "Mumbai, India",
    region: "Asia Pacific",
    desc: "Leading system integrator delivering comprehensive IT infrastructure solutions.",
    logo: "/logos/suzuki-2.svg",
  },
  {
    name: "Atlantic Solutions",
    type: "Reseller",
    location: "Paris, France",
    region: "Europe",
    desc: "Authorized reseller focused on observability and monitoring solutions for enterprises.",
    logo: "/logos/bandhan_bank.svg",
  },
];

/* ── Filters ── */

const regions = ["All Regions", "North America", "Europe", "Asia Pacific"];
const types = ["All Types", "Distributor", "System Integrator", "Reseller", "Managed Service Provider", "Professional Service Partner"];

/* ── Component ── */

export function PlList() {
  const [region, setRegion] = useState("All Regions");
  const [type, setType] = useState("All Types");
  const [query, setQuery] = useState("");

  const filtered = partners.filter((p) => {
    const matchRegion = region === "All Regions" || p.region === region;
    const matchType = type === "All Types" || p.type === type;
    const matchSearch = query === "" || p.name.toLowerCase().includes(query.toLowerCase()) || p.location.toLowerCase().includes(query.toLowerCase());
    return matchRegion && matchType && matchSearch;
  });

  return (
    <section className="relative z-10 border-t border-border py-8">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Filter bar */}
        <div className="sticky top-16 z-20 -mx-6 mb-6 flex flex-col gap-3 border-b border-border/50 bg-background/80 px-6 py-3 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="h-9 appearance-none rounded-xl border border-border bg-card pl-3 pr-8 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
              >
                {regions.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            </div>
            <div className="relative">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="h-9 appearance-none rounded-xl border border-border bg-card pl-3 pr-8 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
              >
                {types.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-56">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search partners..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-9 w-full rounded-xl border border-border bg-card pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
        </div>

        {/* Partner cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div
              key={p.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card p-6 pb-0 transition-all hover:border-primary/40 hover:shadow-sm"
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={96}
                height={96}
                className="h-10 shrink-0 object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
              />
              <span className="mt-3 text-[11px] font-medium text-primary">
                {p.type}
              </span>

              <h3 className="mt-4 text-label-lg text-foreground">{p.name}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-caption text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-primary/60" />
                {p.location}
              </p>

              <p className="mt-3 flex-1 pb-5 text-[13px] leading-relaxed text-muted-foreground">
                {p.desc}
              </p>

              <a
                href="#"
                className="-mx-6 flex h-10 items-center justify-between border-t border-border/50 px-6 text-label-md text-primary opacity-0 transition-all group-hover:opacity-100 hover:bg-primary/[0.03]"
              >
                Contact Partner
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-body-xs text-muted-foreground">No partners found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}

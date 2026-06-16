"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { Office } from "./contact-map";

/* Dynamic import — Leaflet needs the browser (no SSR) */
const ContactMap = dynamic(
  () => import("./contact-map").then((m) => m.ContactMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full animate-pulse bg-neutral-100 rounded-r-2xl" />
    ),
  }
);

const offices: Office[] = [
  {
    city: "Ahmedabad",
    country: "India",
    isHQ: true,
    address:
      "C wing, 12th & 11th Floor, Krish Cubical, Avalon Hotel Road, Sindhu Bhavan Marg, Thaltej, Ahmedabad – 380059, Gujarat",
    lat: 23.0374,
    lng: 72.5103,
  },
  {
    city: "Delhi (Noida)",
    country: "India",
    isHQ: false,
    address:
      "Unit No-819, Plot No-58, Block BW, Bhutani Office Tower, Sector-32, Noida",
    lat: 28.5706,
    lng: 77.3272,
  },
  {
    city: "Mumbai (Navi Mumbai)",
    country: "India",
    isHQ: false,
    address:
      "Office No. 2503, HQ 24, 25 & 26 Floor, Haware Infotech Park, Plot 39/3 Sector 30A Vashi, Navi Mumbai 400705, Maharashtra",
    lat: 19.0771,
    lng: 73.0127,
  },
  {
    city: "Indonesia",
    country: "Indonesia",
    isHQ: false,
    address: "Jl. Ir H. Juanda IV No.3B-C, Jakarta, Indonesia",
    lat: -6.1751,
    lng: 106.865,
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    isHQ: false,
    address:
      "AL Thuraya Building No. 1, Office 1406, Dubai Media City, Dubai, United Arab Emirates",
    lat: 25.0989,
    lng: 55.1634,
  },
  {
    city: "South Africa",
    country: "South Africa",
    isHQ: false,
    address:
      "86 Concorde Road E, Bedfordview, Germiston, 2008, South Africa",
    lat: -26.182,
    lng: 28.1306,
  },
];

export function ContactOffices() {
  const [selected, setSelected] = useState<number | null>(0);

  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto w-full max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-12"
        >
          <p className="text-label-md uppercase tracking-widest text-primary">
            Our Offices
          </p>
          <h2 className="mt-3 text-heading-xl text-foreground sm:text-4xl">
            Find Us Around the World
          </h2>
        </motion.div>

        {/* Unified container */}
        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid lg:grid-cols-[400px_1fr]">

            {/* Left — Office list */}
            <div className="divide-y divide-border/40">
              {offices.map((office, i) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  onClick={() => setSelected(selected === i ? null : i)}
                  className={`flex cursor-pointer items-start gap-3 px-6 py-5 transition-colors ${
                    selected === i
                      ? "bg-primary/5"
                      : "hover:bg-neutral-50/70"
                  }`}
                >
                  <div
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                      selected === i
                        ? "border-primary/30 bg-primary/10"
                        : "border-primary/15 bg-primary/5"
                    }`}
                  >
                    <MapPin
                      className={`h-4 w-4 transition-colors ${
                        selected === i ? "text-primary" : "text-primary/60"
                      }`}
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-label-md text-foreground leading-tight">
                        {office.city}
                      </h3>
                      {office.isHQ && (
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                          HQ
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] font-medium text-primary/70 uppercase tracking-wider mt-0.5">
                      {office.country}
                    </p>
                    <p className="mt-0.5 text-caption text-muted-foreground leading-snug">
                      {office.address}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right — Leaflet map */}
            <div className="relative border-t lg:border-t-0 lg:border-l border-border/40 min-h-[520px]">
              <ContactMap
                offices={offices}
                selected={selected}
                onSelect={setSelected}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

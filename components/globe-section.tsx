"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Globe2, Headphones, Building2 } from "lucide-react";
import { DottedMap } from "@/components/ui/dotted-map";

const highlights = [
  { icon: Building2, label: "HQ in Ahmedabad", desc: "Engineering & innovation center" },
  { icon: MapPin, label: "30+ Countries", desc: "Enterprise deployments worldwide" },
  { icon: Globe2, label: "500+ Enterprises", desc: "Across industries and continents" },
  { icon: Headphones, label: "24/7 Support", desc: "Follow-the-sun global coverage" },
];

const markers = [
  // Office Locations
  { lat: 23.0225, lng: 72.5714, size: 1.0 },   // Ahmedabad (HQ)
  { lat: 19.076, lng: 72.8777, size: 0.6 },    // Mumbai
  { lat: 28.5355, lng: 77.391, size: 0.6 },    // Delhi/Noida

  // North America
  { lat: 40.7128, lng: -74.006, size: 0.6 },   // USA (New York)

  // Middle East & West Asia
  { lat: 25.2048, lng: 55.2708, size: 0.6 },   // UAE (Dubai)
  { lat: 31.7683, lng: 35.2137, size: 0.6 },   // Israel

  // Southeast Asia
  { lat: 14.5995, lng: 120.9842, size: 0.6 },  // Philippines (Manila)

  // Africa
  { lat: -1.2921, lng: 36.8219, size: 0.6 },   // Africa (Nairobi)
  { lat: -26.2041, lng: 28.0473, size: 0.6 },  // Africa (Johannesburg)

  // Europe
  { lat: 51.5074, lng: -0.1278, size: 0.6 },   // Europe (London)
  { lat: 50.1109, lng: 8.6821, size: 0.6 },    // Europe (Frankfurt)

  // SAARC
  { lat: 27.7172, lng: 85.324, size: 0.6 },    // Nepal (Kathmandu)
  { lat: 23.8103, lng: 90.4125, size: 0.6 },   // Bangladesh (Dhaka)
  { lat: 6.9271, lng: 79.8612, size: 0.6 },    // Sri Lanka (Colombo)
];

export function GlobeSection() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-overline text-primary">
            Global Presence
          </p>
          <h2 className="mt-3 text-display-md">
            Trusted by Enterprises{" "}
            <span className="stat-number">Worldwide</span>
          </h2>
          <p className="mt-4 text-[16px] font-medium leading-[26px] text-[#6B7280]" style={{ fontFamily: 'Inter, "Inter Fallback", system-ui, sans-serif' }}>
            From Ahmedabad to San Francisco, Motadata powers IT operations for
            500+ enterprises across 30+ countries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto mt-14 overflow-hidden rounded-2xl border bg-white shadow-sm"
        >
          {/* Map as full background with 20% left padding */}
          <div className="absolute inset-0" style={{ paddingLeft: "20%" }}>
            <DottedMap
              markers={markers}
              dotColor="#d4d4d8"
              markerColor="hsl(var(--primary))"
              dotRadius={0.22}
              className="text-zinc-300 h-full w-full"
              style={{ display: "block" }}
            />
          </div>

          {/* Content overlaid on map — left-aligned highlights */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 p-10 sm:p-14">
            <div className="flex flex-col gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{item.label}</p>
                    <p className="text-body-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Right side is empty — map shows through */}
            <div className="hidden lg:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

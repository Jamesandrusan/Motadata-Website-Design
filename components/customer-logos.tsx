"use client";

import React from "react";
import Image from "next/image";

/* ── Customer Logo Data ── */

const customerLogos: { name: string; src: string; w?: number; h?: number }[] = [
  { name: "Redington", src: "/logos/redwin-1.svg" },
  { name: "UAB", src: "/logos/UAB.svg" },
  { name: "Bandhan Bank", src: "/logos/bandhan_bank.svg", w: 140, h: 44 },
  { name: "Union Bank", src: "/logos/union-bank.svg" },
  { name: "Kotak", src: "/logos/kotak.svg" },
  { name: "JSW Steel", src: "/logos/jsw_steel.svg" },
  { name: "Muthoot", src: "/logos/muthoon.svg", w: 120, h: 42 },
  { name: "HDFC Life", src: "/logos/hdfc-lif.svg" },
  { name: "Airtel", src: "/logos/airtel.svg", w: 120, h: 42 },
  { name: "Vodafone", src: "/logos/vodafone.svg" },
  { name: "MTNL", src: "/logos/mtnl.svg", w: 120, h: 42 },
  { name: "NEC", src: "/logos/nec.svg" },
  { name: "Kansai", src: "/logos/kansai.svg" },
  { name: "Suzuki", src: "/logos/suzuki-2.svg", w: 120, h: 42 },
  { name: "ONGC", src: "/logos/ongc.svg", w: 120, h: 42 },
  { name: "Hindustan Petroleum", src: "/logos/hind.svg", w: 130, h: 44 },
  { name: "Kuwait Petroleum", src: "/logos/kopetro.svg", w: 120, h: 42 },
  { name: "du", src: "/logos/du.svg" },
];

/* ── Marquee Component ── */

export function CustomerLogoMarquee() {
  // Repeat logos for seamless marquee
  const repeated = [...customerLogos, ...customerLogos, ...customerLogos, ...customerLogos];

  return (
    <div className="relative z-10 py-5 mb-6">
      <div className="marquee-wrap mx-auto max-w-7xl">
        <div className="marquee-track">
          {repeated.map((logo, i) => {
            const w = logo.w ?? 110;
            const h = logo.h ?? 36;
            return (
              <div
                key={i}
                className="mx-7 shrink-0 flex items-center justify-center grayscale opacity-40 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                style={{ width: w, height: h }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={w}
                  height={h}
                  className="w-full h-full object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

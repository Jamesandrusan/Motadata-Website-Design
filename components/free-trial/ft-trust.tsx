"use client";

import Image from "next/image";

const logos = [
  { name: "Bandhan Bank", src: "/logos/bandhan_bank.svg" },
  { name: "Union Bank", src: "/logos/union-bank.svg" },
  { name: "Kotak", src: "/logos/kotak.svg" },
  { name: "HDFC Life", src: "/logos/hdfc-lif.svg" },
  { name: "JSW Steel", src: "/logos/jsw_steel.svg" },
  { name: "NEC", src: "/logos/nec.svg" },
  { name: "Kansai", src: "/logos/kansai.svg" },
  { name: "Suzuki", src: "/logos/suzuki-2.svg" },
  { name: "Vodafone", src: "/logos/vodafone.svg" },
  { name: "Airtel", src: "/logos/airtel.svg" },
  { name: "ONGC", src: "/logos/ongc.svg" },
  { name: "MTNL", src: "/logos/mtnl.svg" },
];

// Duplicate for seamless loop
const marqueeLogos = [...logos, ...logos];

export function FtTrust() {
  return (
    <section className="relative z-10 border-t border-border py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-8 text-center">
          <span className="text-overline text-primary">
            Trusted by Leading Organizations
          </span>
          <p className="mt-2 text-body-xs text-muted-foreground">
            Join thousands of companies that trust Motadata for their observability needs
          </p>
        </div>
      </div>

      {/* Logo marquee */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex animate-logo-marquee items-center gap-12 py-4">
          {marqueeLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex h-10 w-24 shrink-0 items-center justify-center grayscale opacity-40 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={80}
                height={32}
                className="h-7 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes logo-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logo-marquee {
          animation: logo-marquee 30s linear infinite;
        }
        .animate-logo-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

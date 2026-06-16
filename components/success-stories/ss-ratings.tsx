"use client";

import { Star } from "lucide-react";
import Image from "next/image";

const platforms = [
  {
    platform: "Capterra",
    customerLogo: "/logos/success-stories/radwin.svg",
    customerName: "RADWIN",
    logoClass: "max-w-[115px]",
    rating: 4.8,
    max: 5,
    label: "out of 5",
    reviews: "250+ reviews",
  },
  {
    platform: "G2",
    customerLogo: "/logos/success-stories/mcmahon.png",
    customerName: "McMahon Services",
    logoClass: "max-w-[140px]",
    rating: 4.7,
    max: 5,
    label: "out of 5",
    reviews: "180+ reviews",
  },
  {
    platform: "Software Suggest",
    customerLogo: "/logos/success-stories/airtel.png",
    customerName: "Airtel",
    logoClass: "max-w-[100px]",
    rating: 4.9,
    max: 5,
    label: "out of 5",
    reviews: "120+ reviews",
  },
  {
    platform: "TrustRadius",
    customerLogo: "/logos/success-stories/kopetro.png",
    customerName: "Kopetro",
    logoClass: "max-w-[140px]",
    rating: 9.2,
    max: 10,
    label: "out of 10",
    reviews: "95+ reviews",
  },
];

function StarRating({ rating, max }: { rating: number; max: number }) {
  const normalized = (rating / max) * 5;
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i <= Math.round(normalized) ? "fill-amber-400 text-amber-400" : "text-border"}`}
        />
      ))}
    </div>
  );
}

export function SsRatings() {
  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto w-full max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="mb-3 text-overline text-primary">Reviews</p>
          <h2 className="text-heading-xl lg:text-4xl">
            Discover Why Organizations Choose Motadata
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            See what real users are saying about Motadata across leading software review platforms.
          </p>
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((p) => (
            <div
              key={p.platform}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
            >
              {/* Logo */}
              <div className="h-10 w-full">
                <Image
                  src={p.customerLogo}
                  alt={p.customerName}
                  width={300}
                  height={40}
                  className={`h-full w-auto object-contain object-left brightness-0 dark:invert ${p.logoClass ?? "max-w-full"}`}
                />
              </div>

              {/* Stars + score */}
              <div className="flex items-center gap-2">
                <StarRating rating={p.rating} max={p.max} />
                <span className="text-label-md-strong text-foreground">{p.rating}</span>
                <span className="text-caption text-muted-foreground">{p.label}</span>
              </div>

              {/* Platform + review count */}
              <div className="flex items-center justify-between">
                <span className="text-label-sm text-foreground">{p.platform}</span>
                <span className="text-caption text-muted-foreground">{p.reviews}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/*
  Bento grid — 4 columns, 2 rows
  Row 1: img1 (2/4)  |  img2 (1/4)  |  img3 (1/4)
  Row 2: img4 (1/4)  |  img5 (1/4)  |  img6 (2/4)
*/
const images = [
  { src: "/images/careers/img1.jpg", alt: "Celebration at Motadata", className: "col-span-2" },
  { src: "/images/careers/img2.jpg", alt: "Team event at Motadata", className: "col-span-1" },
  { src: "/images/careers/img3.jpg", alt: "Office gathering at Motadata", className: "col-span-1" },
  { src: "/images/careers/img4.jpg", alt: "Festival celebration at Motadata", className: "col-span-1" },
  { src: "/images/careers/img5.jpg", alt: "Fun activities at Motadata", className: "col-span-1" },
  { src: "/images/careers/img6.jpg", alt: "Team outing at Motadata", className: "col-span-2" },
];

export function CareersCelebration() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-label-md uppercase tracking-widest text-primary">
            Life at Motadata
          </p>
          <h2 className="mt-3 text-display-md">
            Celebration At Motadata
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Come discover motadata – the best platform to take your career to
            new heights.
          </p>
        </motion.div>

        {/* Bento grid: 4 cols × 2 rows, fixed row height */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[240px] md:auto-rows-[280px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`${img.className} group relative overflow-hidden rounded-2xl border border-border/60`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes={img.className.includes("col-span-2") ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

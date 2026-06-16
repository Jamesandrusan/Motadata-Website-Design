"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

const leaders = [
  {
    name: "Amit Shingala",
    title: "Founder & CEO",
    image: "/team/amit.avif",
    bio: "Visionary leader driving Motadata's mission to unify observability and service management for global enterprises.",
  },
  {
    name: "Alpesh Dhamelia",
    title: "Founder & CTO",
    image: "/team/alpesh.avif",
    bio: "Architect of Motadata's AI-native platform and the Deep Learning Framework for IT Operations (DFIT).",
  },
  {
    name: "Mitul Modesara",
    title: "COO",
    image: "/team/mitul.avif",
    bio: "Operational strategist scaling Motadata across 50+ countries with customer-first excellence.",
  },
];

export function CompanyLeadership() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-14"
        >
          <p className="text-label-md uppercase tracking-widest text-primary">
            Leadership
          </p>
          <h2 className="mt-3 text-display-md">
            Meet the Minds Behind Motadata
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            Our leadership team brings decades of combined experience in IT
            operations, artificial intelligence, and enterprise software
            solutions.
          </p>
        </motion.div>

        {/* Leader cards — site-consistent bordered container */}
        <div className="rounded-2xl border border-border/60 overflow-hidden bg-white">
          <div className="grid md:grid-cols-3">
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group relative overflow-hidden transition-colors hover:bg-neutral-50 ${
                  i > 0 ? "md:border-l border-border/40" : ""
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-muted/20">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                  {/* Hover bio overlay */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-4 px-6 pb-6 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm leading-relaxed text-white/80">
                      {leader.bio}
                    </p>
                    <a
                      href="#"
                      className="mt-3 inline-flex items-center gap-1.5 text-label-sm text-white/70 transition-colors hover:text-white"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                {/* Info below image */}
                <div className="p-6">
                  <DottedGlowBackground
                    className="opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                    gap={14}
                    radius={1.2}
                    opacity={0.4}
                  />
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold">{leader.name}</h3>
                    <p className="mt-1 text-body-xs text-muted-foreground">
                      {leader.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

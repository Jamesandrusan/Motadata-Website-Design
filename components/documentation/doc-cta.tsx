"use client";

import { Button } from "@/components/ui/button";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { Headphones, MessagesSquare } from "lucide-react";

export function DocCta() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div
          className="group relative overflow-hidden rounded-3xl px-8 py-16 text-center text-white sm:px-16 sm:py-20"
          style={{ background: "linear-gradient(135deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)))" }}
        >
          <DottedGlowBackground
            className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
            gap={14}
            radius={1.8}
            opacity={0.6}
            color="rgba(255,255,255,0.4)"
          />
          <div className="relative z-10">
            <h2 className="text-display-md">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
              Our support team is here to help with any questions or technical
              challenges.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="h-12 rounded-xl bg-white px-7 text-foreground hover:bg-white/90"
              >
                <Headphones className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-white/20 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white"
              >
                <MessagesSquare className="mr-2 h-4 w-4" />
                Community Forum
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

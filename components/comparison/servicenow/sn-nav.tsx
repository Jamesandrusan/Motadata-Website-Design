"use client";

import { useEffect, useState } from "react";
import { sections } from "@/lib/servicenow-comparison-data";

/* Sticky in-page navigation with a scroll-progress bar and active-section
   highlighting. Modern SaaS "long-read" pattern. */
export function SnNav() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);

      // active section = last heading whose top has crossed ~40% of viewport
      const mark = window.innerHeight * 0.4;
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= mark) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-[calc(var(--event-bar-h,0px)+3.5rem)] z-30 hidden border-b border-border bg-background/80 backdrop-blur-md lg:block">
      {/* progress bar */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-primary to-[hsl(var(--gradient-to))] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <nav className="mx-auto flex w-full max-w-7xl items-center gap-1 px-6 py-3">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`rounded-full px-3.5 py-1.5 text-label-sm transition-colors ${
              active === s.id
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {s.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

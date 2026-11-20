"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

export type FooterLink = { label: string; href: string };

/* One footer link group. Below lg it is a tap-to-expand accordion row;
   at lg and up it is a static column heading with its list always shown. */
export function FooterGroup({ title, links, className = "" }: { title: string; links: FooterLink[]; className?: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className={`border-b border-border/50 lg:border-0 ${className}`}>
      <h4 className="m-0">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between py-4 text-left text-label-md text-foreground lg:pointer-events-none lg:py-0 lg:text-[11px] lg:font-bold lg:uppercase lg:leading-snug lg:tracking-widest lg:text-muted-foreground/60"
        >
          {title}
          <ChevronDown
            className={`h-4 w-4 text-muted-foreground transition-transform duration-200 lg:hidden ${open ? "rotate-180" : ""}`}
          />
        </button>
      </h4>
      <ul
        id={id}
        className={`${open ? "grid" : "hidden"} gap-1 pb-4 lg:mt-4 lg:block lg:space-y-2.5 lg:pb-0`}
      >
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="block py-2 text-body-xs text-muted-foreground transition-colors hover:text-primary lg:inline lg:py-0 lg:text-[13px]"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

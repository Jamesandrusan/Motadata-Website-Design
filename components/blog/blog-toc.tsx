"use client";

import { useState, useEffect } from "react";
import { List } from "lucide-react";
import type { TocItem } from "@/data/blog-posts";

interface BlogTocProps {
  items: TocItem[];
}

export function BlogToc({ items }: BlogTocProps) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="rounded-xl border bg-card p-5">
      <div className="flex items-center gap-2 text-[13px] font-semibold text-foreground">
        <List className="h-4 w-4" />
        Table of Contents
      </div>
      <ul className="mt-4 space-y-1">
        {items.map((item) => {
          const isSubItem = !item.id.startsWith("what-") &&
            !item.id.startsWith("why-") &&
            !item.id.startsWith("types-") &&
            !item.id.startsWith("how-") &&
            !item.id.startsWith("best-") &&
            !item.id.startsWith("tools-") &&
            !item.id.startsWith("troubleshooting") &&
            !item.id.startsWith("physical-") &&
            !item.id.startsWith("logical-") &&
            !item.id.startsWith("faq");

          return (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`block w-full text-left rounded-md px-3 py-1.5 text-[12px] leading-snug transition-colors ${
                  isSubItem ? "pl-6" : ""
                } ${
                  activeId === item.id
                    ? "bg-muted font-medium text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

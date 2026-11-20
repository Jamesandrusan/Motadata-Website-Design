"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Globe } from "lucide-react";

/**
 * Navbar language selector (globe + code, dropdown of native names).
 *
 * UI only for now: it remembers the choice and sets <html lang>, but the
 * site has no translations yet. Wire `onChange` to your i18n routing
 * (e.g. /ar, /es) when localized content exists.
 */
export type Language = { code: string; label: string; english: string };

export const LANGUAGES: Language[] = [
  { code: "en", label: "English", english: "English" },
  { code: "ar", label: "العربية", english: "Arabic" },
  { code: "es", label: "Español", english: "Spanish" },
  { code: "fr", label: "Français", english: "French" },
  { code: "de", label: "Deutsch", english: "German" },
  { code: "pt", label: "Português", english: "Portuguese" },
  { code: "ja", label: "日本語", english: "Japanese" },
  { code: "hi", label: "हिन्दी", english: "Hindi" },
];

const STORAGE_KEY = "motadata-language";

export function LanguageSwitcher({
  className = "",
  onChange,
}: {
  className?: string;
  onChange?: (lang: Language) => void;
}) {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("en");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && LANGUAGES.some((l) => l.code === saved)) {
        setCode(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      /* ignore */
    }
  }, []);

  /* Close on outside click / Escape */
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const select = (lang: Language) => {
    setCode(lang.code);
    setOpen(false);
    document.documentElement.lang = lang.code;
    try {
      localStorage.setItem(STORAGE_KEY, lang.code);
    } catch {
      /* ignore */
    }
    onChange?.(lang);
  };

  const current = LANGUAGES.find((l) => l.code === code) ?? LANGUAGES[0];

  return (
    <div ref={rootRef} className={`static sm:relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${current.english}`}
        title={`Language: ${current.english}`}
        className={`flex h-8 min-w-8 items-center justify-center gap-1.5 rounded-lg px-1.5 text-[13px] font-medium transition-colors sm:px-2 ${
          open ? "bg-foreground/[0.06] text-foreground" : "text-foreground/70 hover:bg-foreground/[0.04] hover:text-foreground"
        }`}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden uppercase tracking-wide sm:inline">{current.code}</span>
        <ChevronDown className={`hidden h-3 w-3 opacity-60 transition-transform duration-200 sm:block ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-full z-[80] mt-2 w-60 max-w-[calc(100vw-2rem)] origin-top-right overflow-hidden rounded-xl border border-border/70 bg-white p-1.5 shadow-[0_16px_40px_-12px_rgba(15,23,42,0.25)]"
          >
            <p className="px-2.5 pb-1.5 pt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground/45">
              Language
            </p>
            <ul role="listbox" aria-label="Select language" className="max-h-[320px] overflow-y-auto">
              {LANGUAGES.map((l) => {
                const active = l.code === code;
                return (
                  <li key={l.code}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={active}
                      onClick={() => select(l)}
                      className={`flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left transition-colors ${
                        active ? "bg-primary/[0.08]" : "hover:bg-foreground/[0.04]"
                      }`}
                    >
                      <span
                        className={`flex h-6 w-7 shrink-0 items-center justify-center rounded-md text-[10.5px] font-bold uppercase ${
                          active ? "bg-primary text-white" : "bg-foreground/[0.06] text-foreground/60"
                        }`}
                      >
                        {l.code}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span lang={l.code} className="block text-[13.5px] font-medium leading-tight text-foreground">
                          {l.label}
                        </span>
                        {l.label !== l.english && (
                          <span className="block text-[11.5px] leading-tight text-foreground/45">{l.english}</span>
                        )}
                      </span>
                      {active && <Check className="h-4 w-4 shrink-0 text-primary" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

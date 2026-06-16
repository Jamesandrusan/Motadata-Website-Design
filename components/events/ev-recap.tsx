"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { EventRecap, EventRecapMedia } from "@/components/events/ev-event-data";

/* Detect how a video src should be rendered. */
function isEmbed(src: string) {
  return /youtube\.com|youtu\.be|vimeo\.com|\/embed\//.test(src);
}
function toEmbedUrl(src: string) {
  const yt = src.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([\w-]+)/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
  return src;
}
function poster(item: EventRecapMedia) {
  return item.type === "video" ? item.thumbnail ?? item.src : item.src;
}

/* ── Lightbox (fullscreen view + video playback) ── */

function Lightbox({
  media,
  index,
  onClose,
  onNav,
}: {
  media: EventRecapMedia[];
  index: number;
  onClose: () => void;
  onNav: (dir: number) => void;
}) {
  const item = media[index];
  const count = media.length;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNav(-1);
      if (e.key === "ArrowRight") onNav(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNav]);

  const isVideo = item.type === "video";

  return (
    <motion.div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      role="dialog"
      aria-modal="true"
      aria-label={item.caption ?? "Event media"}
    >
      <button type="button" aria-label="Close" onClick={onClose} className="absolute inset-0 cursor-default bg-black/85 backdrop-blur-sm" />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>

      {count > 1 && (
        <>
          <button type="button" onClick={() => onNav(-1)} aria-label="Previous" className="absolute left-3 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20 sm:left-6">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button type="button" onClick={() => onNav(1)} aria-label="Next" className="absolute right-3 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20 sm:right-6">
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <motion.div key={index} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.25 }} className="relative z-10 flex w-full max-w-5xl flex-col items-center">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
          {isVideo ? (
            isEmbed(item.src) ? (
              <iframe
                src={`${toEmbedUrl(item.src)}?autoplay=1&rel=0`}
                title={item.caption ?? "Event video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              // eslint-disable-next-line jsx-a11y/media-has-caption
              <video src={item.src} controls autoPlay className="absolute inset-0 h-full w-full object-contain" />
            )
          ) : (
            <Image src={item.src} alt={item.caption ?? "Event photo"} fill sizes="(min-width: 1024px) 1024px, 100vw" className="object-contain" priority />
          )}
        </div>

        {(item.caption || count > 1) && (
          <div className="mt-3 flex w-full items-center justify-between gap-4 px-1 text-white/80">
            <p className="text-body-xs">{item.caption}</p>
            {count > 1 && <span className="shrink-0 text-caption text-white/50">{index + 1} / {count}</span>}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ── Section: single-column slider + thumbnail strip ── */

export function EvRecap({ recap, eventTitle }: { recap: EventRecap; eventTitle: string }) {
  const media = recap.media;
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const count = media.length;
  const go = useCallback((dir: number) => setIndex((i) => (i + dir + count) % count), [count]);
  const navLightbox = useCallback(
    (dir: number) => setLightbox((i) => (i === null ? i : (i + dir + count) % count)),
    [count]
  );

  if (!count) return null;
  const current = media[index];

  return (
    <section id="recap" className="relative z-10 scroll-mt-24 py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-overline text-primary">{recap.overline ?? "Event Recap"}</p>
          <h2 className="text-heading-xl lg:text-4xl">{recap.title ?? `Highlights from ${eventTitle}`}</h2>
          {recap.intro && <p className="mt-4 text-base text-muted-foreground">{recap.intro}</p>}
        </div>

        {/* Single-column stage */}
        <div className="mx-auto max-w-4xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/60 bg-foreground/5 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.button
                key={index}
                type="button"
                onClick={() => setLightbox(index)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="group absolute inset-0"
                aria-label={current.type === "video" ? "Play video" : "View photo"}
              >
                <Image src={poster(current)} alt={current.caption ?? ""} fill sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" priority />

                {current.type === "video" && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-1 h-7 w-7 fill-current" />
                    </span>
                  </span>
                )}
              </motion.button>
            </AnimatePresence>

            {count > 1 && (
              <>
                <button type="button" onClick={() => go(-1)} aria-label="Previous" className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button type="button" onClick={() => go(1)} aria-label="Next" className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60">
                  <ChevronRight className="h-5 w-5" />
                </button>
                <span className="absolute right-3 top-3 z-10 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                  {index + 1} / {count}
                </span>
              </>
            )}
          </div>

          {/* Thumbnail strip */}
          {count > 1 && (
            <div className="mt-4 flex gap-2.5 overflow-x-auto pb-2">
              {media.map((m, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show ${m.caption ?? `item ${i + 1}`}`}
                  className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg ring-2 transition-all sm:h-20 sm:w-32 ${
                    i === index ? "ring-primary" : "opacity-55 ring-transparent hover:opacity-100"
                  }`}
                >
                  <Image src={poster(m)} alt="" fill sizes="128px" className="object-cover" />
                  {m.type === "video" && (
                    <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-primary">
                        <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                      </span>
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox media={media} index={lightbox} onClose={() => setLightbox(null)} onNav={navLightbox} />
        )}
      </AnimatePresence>
    </section>
  );
}

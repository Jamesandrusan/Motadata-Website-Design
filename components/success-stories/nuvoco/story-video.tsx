"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

/**
 * Click-to-load YouTube embed. Shows the video thumbnail with a play button and
 * only loads the (heavy) YouTube player once the visitor clicks, then autoplays.
 */
export function StoryVideo({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`);
  const imgRef = useRef<HTMLImageElement>(null);

  // maxresdefault doesn't exist for every video. YouTube then answers with a 120×90 grey
  // placeholder (or an error), so fall back to hqdefault, which every video has.
  const checkThumb = () => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth <= 120 && thumb.includes("maxresdefault"))
      setThumb(`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`);
  };
  // The image may finish loading before React hydrates and attaches onLoad/onError.
  useEffect(checkThumb);

  return (
    /* Brand-coral frame around the player */
    <div className="rounded-3xl bg-primary p-1 shadow-lg shadow-primary/20 sm:p-1.5">
    <div className="relative aspect-video w-full overflow-hidden rounded-[20px] bg-black sm:rounded-[18px]">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group/video absolute inset-0 h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src={thumb}
            alt=""
            loading="lazy"
            onLoad={checkThumb}
            onError={checkThumb}
            className="h-full w-full object-cover transition-transform duration-500 group-hover/video:scale-[1.02]"
          />
          {/* Very light dim so the play button reads; lifts on hover */}
          <span aria-hidden className="absolute inset-0 bg-black/10 transition-colors group-hover/video:bg-black/0" />

          {/* Play button */}
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl ring-8 ring-white/25 transition-transform duration-200 group-hover/video:scale-110 sm:h-20 sm:w-20"
          >
            <Play className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8" />
          </span>
        </button>
      )}
    </div>
    </div>
  );
}

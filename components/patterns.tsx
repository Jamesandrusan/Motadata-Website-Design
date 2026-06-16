type PatternProps = {
  className?: string;
  fade?: "top" | "bottom" | "both" | "radial" | "none";
};

function getFadeMask(fade: PatternProps["fade"]) {
  switch (fade) {
    case "top":
      return "linear-gradient(to bottom, black 20%, transparent 90%)";
    case "bottom":
      return "linear-gradient(to top, black 20%, transparent 90%)";
    case "both":
      return "linear-gradient(to bottom, transparent 5%, black 20%, black 80%, transparent 95%)";
    case "radial":
      return "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 80%)";
    default:
      return "none";
  }
}

export function DotPattern({ className = "", fade = "both" }: PatternProps) {
  const mask = getFadeMask(fade);
  /* 64px matches the interactive grid cell size.
     Dots sit exactly at grid intersections so lines
     always pass through dot centres, never between them. */
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={mask !== "none" ? { maskImage: mask, WebkitMaskImage: mask } : undefined}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="dots" width="64" height="64" patternUnits="userSpaceOnUse">
          <circle cx="0" cy="0" r="1.5" fill="rgba(0,0,0,0.18)" />
          <circle cx="64" cy="0" r="1.5" fill="rgba(0,0,0,0.18)" />
          <circle cx="0" cy="64" r="1.5" fill="rgba(0,0,0,0.18)" />
          <circle cx="64" cy="64" r="1.5" fill="rgba(0,0,0,0.18)" />
          <circle cx="32" cy="32" r="1" fill="rgba(0,0,0,0.10)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

export function DotPatternLg({ className = "", fade = "both" }: PatternProps) {
  const mask = getFadeMask(fade);
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={mask !== "none" ? { maskImage: mask, WebkitMaskImage: mask } : undefined}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="dots-lg" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1.5" fill="rgba(0,0,0,0.12)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots-lg)" />
    </svg>
  );
}

export function DiagPattern({ className = "", fade = "both" }: PatternProps) {
  const mask = getFadeMask(fade);
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={mask !== "none" ? { maskImage: mask, WebkitMaskImage: mask } : undefined}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="diag" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
          <line x1="0" y1="0" x2="0" y2="12" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diag)" />
    </svg>
  );
}

export function CrosshatchPattern({ className = "", fade = "radial" }: PatternProps) {
  const mask = getFadeMask(fade);
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={mask !== "none" ? { maskImage: mask, WebkitMaskImage: mask } : undefined}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="crosshatch" width="16" height="16" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="16" y2="16" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
          <line x1="16" y1="0" x2="0" y2="16" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#crosshatch)" />
    </svg>
  );
}

export function GridSmPattern({ className = "", fade = "radial" }: PatternProps) {
  const mask = getFadeMask(fade);
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={mask !== "none" ? { maskImage: mask, WebkitMaskImage: mask } : undefined}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid-sm" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-sm)" />
    </svg>
  );
}

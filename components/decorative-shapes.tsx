/* Decorative geometric shapes that float between sections.
   Triangles, circles, squares, diamonds — the kind of subtle
   accents modern SaaS landing pages use for visual rhythm. */

export function FloatingTriangle({
  className = "",
  size = 40,
  rotate = 0,
}: {
  className?: string;
  size?: number;
  rotate?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={`pointer-events-none ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M20 4L36 34H4L20 4Z"
        stroke="hsl(var(--primary) / 0.15)"
        strokeWidth="1"
        fill="hsl(var(--primary) / 0.03)"
      />
    </svg>
  );
}

export function FloatingCircle({
  className = "",
  size = 36,
  filled = false,
}: {
  className?: string;
  size?: number;
  filled?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      className={`pointer-events-none ${className}`}
    >
      <circle
        cx="18"
        cy="18"
        r="16"
        stroke="hsl(var(--primary) / 0.15)"
        strokeWidth="1"
        fill={filled ? "hsl(var(--primary) / 0.04)" : "none"}
      />
      {filled && (
        <circle
          cx="18"
          cy="18"
          r="4"
          fill="hsl(var(--primary) / 0.12)"
        />
      )}
    </svg>
  );
}

export function FloatingSquare({
  className = "",
  size = 22,
  rotate = 0,
}: {
  className?: string;
  size?: number;
  rotate?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={`pointer-events-none ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="4"
        stroke="hsl(var(--primary) / 0.12)"
        strokeWidth="1"
        fill="hsl(var(--primary) / 0.02)"
      />
      <rect
        x="10"
        y="10"
        width="12"
        height="12"
        rx="2"
        stroke="hsl(var(--primary) / 0.08)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

export function FloatingDiamond({
  className = "",
  size = 28,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={`pointer-events-none ${className}`}
    >
      <rect
        x="14"
        y="2"
        width="16"
        height="16"
        rx="2"
        transform="rotate(45 14 2)"
        stroke="hsl(var(--primary) / 0.15)"
        strokeWidth="1"
        fill="hsl(var(--primary) / 0.03)"
      />
    </svg>
  );
}

export function FloatingCross({
  className = "",
  size = 24,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`pointer-events-none ${className}`}
    >
      <path
        d="M12 4V20M4 12H20"
        stroke="hsl(var(--primary) / 0.15)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Dots-in-a-row — a small row of 3 dots */
export function FloatingDots({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      width="32"
      height="8"
      viewBox="0 0 32 8"
      fill="none"
      className={`pointer-events-none ${className}`}
    >
      <circle cx="4" cy="4" r="2" fill="hsl(var(--primary) / 0.12)" />
      <circle cx="16" cy="4" r="2" fill="hsl(var(--primary) / 0.08)" />
      <circle cx="28" cy="4" r="2" fill="hsl(var(--primary) / 0.05)" />
    </svg>
  );
}

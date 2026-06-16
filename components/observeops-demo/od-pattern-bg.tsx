"use client";

/**
 * Tiling pattern background — repeats the Motadata brand mark.
 * Uses an inline data-URI SVG so markSize and gap are truly independent.
 */

interface OdPatternBgProps {
  /** Brand mark size in pixels (default 32) */
  markSize?: number;
  /** Gap between marks in pixels (default 16) */
  gap?: number;
  /** Opacity 0–1 */
  opacity?: number;
  /** Fill colour of the mark */
  fill?: string;
  /** Render as stroke/outline only (default false) */
  strokeOnly?: boolean;
  /** Stroke width when strokeOnly is true (default 0.5) */
  strokeWidth?: number;
}

function buildPatternSvg(tileSize: number, markSize: number, fill: string, strokeOnly: boolean, strokeWidth: number) {
  const offset = (tileSize - markSize) / 2;
  const s = markSize / 14.9; // scale factor from original 14.9×14.9 mark

  const pathAttrs = strokeOnly
    ? `fill="none" stroke="${fill}" stroke-width="${strokeWidth / s}"`
    : `fill="${fill}"`;

  // Scale and translate all original paths
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${tileSize}" height="${tileSize}" viewBox="0 0 ${tileSize} ${tileSize}"><g transform="translate(${offset},${offset}) scale(${s})"><path ${pathAttrs} d="M0,10.4c0,2.5,2,4.4,4.4,4.4h0V6h0C2,6,0,8,0,10.4Z"/><path ${pathAttrs} d="M14.9,4.4c0-2.5-2-4.4-4.4-4.4h0v8.9h0c2.4,0,4.4-2,4.4-4.4Z"/><path ${pathAttrs} d="M6,10.4c0,2.5,2,4.4,4.4,4.4s4.4-2,4.4-4.4h0c0,0-8.9,0-8.9,0h0Z"/><path ${pathAttrs} d="M8.9,4.4C8.9,2,6.9,0,4.4,0S0,2,0,4.4h0c0,0,8.9,0,8.9,0h0Z"/></g></svg>`;
}

export function OdPatternBg({
  markSize = 32,
  gap = 16,
  opacity = 1,
  fill = "#fff",
  strokeOnly = false,
  strokeWidth = 0.5,
}: OdPatternBgProps) {
  const tileSize = markSize + gap;
  const svg = buildPatternSvg(tileSize, markSize, fill, strokeOnly, strokeWidth);
  const dataUri = `data:image/svg+xml,${encodeURIComponent(svg)}`;

  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `url("${dataUri}")`,
        backgroundRepeat: "repeat",
        backgroundSize: `${tileSize}px ${tileSize}px`,
        opacity,
      }}
    />
  );
}

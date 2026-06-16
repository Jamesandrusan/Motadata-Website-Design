"use client";

import type { ReactElement } from "react";

/* ─────────────────────────────────────────────────────────────
   BlogThumbnail — per-post unique SVG thumbnails
   Website-matching palette: black backgrounds + brand orange.
   One accent colour (#f17463) at varying opacities keeps
   every thumbnail cohesive with the site's dark theme.
   ───────────────────────────────────────────────────────────── */

/* Brand colour shortcuts (used inline as strings) */
const B  = "#f17463";          // primary brand orange
const B2 = "rgba(241,116,99,"; // prefix for opacity variants

interface SlugConfig {
  bg1: string;
  bg2: string;
  Pattern: (p: { id: string }) => ReactElement;
}

/* ══════════════════════════════════════════════════════════════
   PATTERN COMPONENTS  (viewBox 0 0 800 450)
   ══════════════════════════════════════════════════════════════ */

/* ── 1. Network Topology Guide ── 3-tier enterprise hierarchy */
function P_NetworkTopology({ id: _ }: { id: string }) {
  // Core layer
  const CX = 400, CY = 76, CW = 108, CH = 52;
  // Distribution layer [x, y, w, h]
  const D: [number, number, number, number][] = [
    [195, 192, 90, 44],
    [605, 192, 90, 44],
  ];
  // Access layer [x, y, w, h]
  const A: [number, number, number, number][] = [
    [96,  316, 74, 34],
    [276, 316, 74, 34],
    [524, 316, 74, 34],
    [704, 316, 74, 34],
  ];
  // Endpoint pairs per access switch
  const EP: [number, number][][] = [
    [[66, 405], [126, 405]],
    [[246, 405], [306, 405]],
    [[494, 405], [554, 405]],
    [[674, 405], [734, 405]],
  ];

  // Device box — switch/router visual with port dots
  function Box({ x, y, w, h, op, ports }: {
    x: number; y: number; w: number; h: number; op: number; ports: number;
  }) {
    const hw = w / 2, hh = h / 2;
    const sp = ports > 1 ? (w - 20) / (ports - 1) : 0;
    return (
      <g>
        <rect x={x-hw-4} y={y-hh-4} width={w+8} height={h+8} rx="12"
          fill={`${B2}${(op*0.06).toFixed(2)})`} />
        <rect x={x-hw} y={y-hh} width={w} height={h} rx="8"
          fill={`${B2}${(op*0.15).toFixed(2)})`}
          stroke={B} strokeWidth="1.6" strokeOpacity={op} />
        {/* Status LED strip */}
        <rect x={x-hw+6} y={y-hh+6} width={w-12} height="3" rx="1.5"
          fill={B} opacity={op*0.55} />
        {/* Port indicators */}
        {Array.from({ length: ports }, (__, i) => (
          <circle key={i} cx={x-hw+10 + i*sp} cy={y+hh*0.2} r="2.5"
            fill={B} opacity={op*0.48} />
        ))}
      </g>
    );
  }

  return (
    <>
      {/* Layer guide lines + labels */}
      {([
        [CY,       "CORE LAYER",         0.55],
        [D[0][1],  "DISTRIBUTION LAYER", 0.38],
        [A[0][1],  "ACCESS LAYER",       0.26],
      ] as [number, string, number][]).map(([y, lbl, op]) => (
        <g key={lbl}>
          <line x1="36" y1={y - 16} x2="764" y2={y - 16}
            stroke={B} strokeWidth="0.5" strokeDasharray="3 5"
            opacity={op * 0.22} />
          <text x="38" y={y - 19} fontSize="7.5" fontWeight="800"
            letterSpacing="2" fill={B} opacity={op}>{lbl}</text>
        </g>
      ))}

      {/* Core → Distribution */}
      {D.map(([dx, dy, , dh], i) => (
        <line key={`cd${i}`}
          x1={CX} y1={CY + CH/2}
          x2={dx} y2={dy - dh/2}
          stroke={B} strokeWidth="2.5" opacity="0.55" />
      ))}

      {/* Distribution redundancy arc (dashed cross-link) */}
      <path
        d={`M${D[0][0]+D[0][2]/2},${D[0][1]} Q400,${D[0][1]-40} ${D[1][0]-D[1][2]/2},${D[1][1]}`}
        fill="none" stroke={B} strokeWidth="1.3" opacity="0.20" strokeDasharray="6 4"
      />

      {/* Distribution → Access */}
      {([[0,0],[0,1],[1,2],[1,3]] as [number,number][]).map(([di, ai], i) => (
        <line key={`da${i}`}
          x1={D[di][0]} y1={D[di][1] + D[di][3]/2}
          x2={A[ai][0]} y2={A[ai][1] - A[ai][3]/2}
          stroke={B} strokeWidth="1.7" opacity="0.33" />
      ))}

      {/* Access → Endpoints */}
      {EP.map((pairs, ai) =>
        pairs.map(([ex, ey], ei) => (
          <line key={`ae${ai}-${ei}`}
            x1={A[ai][0]} y1={A[ai][1] + A[ai][3]/2}
            x2={ex} y2={ey - 14}
            stroke={B} strokeWidth="0.9" opacity="0.18" />
        ))
      )}

      {/* Endpoint devices (monitor/PC icons) */}
      {EP.flat().map(([ex, ey], i) => (
        <g key={`ep${i}`}>
          <rect x={ex-13} y={ey-12} width="26" height="18" rx="4"
            fill={`${B2}0.08)`} stroke={B} strokeWidth="1" strokeOpacity="0.28" />
          <line x1={ex} y1={ey+6} x2={ex} y2={ey+12}
            stroke={B} strokeWidth="1.5" opacity="0.28" />
          <line x1={ex-6} y1={ey+12} x2={ex+6} y2={ey+12}
            stroke={B} strokeWidth="1.5" opacity="0.28" />
        </g>
      ))}

      {/* Access switches */}
      {A.map(([ax, ay, aw, ah], i) => (
        <Box key={`a${i}`} x={ax} y={ay} w={aw} h={ah} op={0.60} ports={5} />
      ))}

      {/* Distribution switches */}
      {D.map(([dx, dy, dw, dh], i) => (
        <Box key={`d${i}`} x={dx} y={dy} w={dw} h={dh} op={0.80} ports={7} />
      ))}

      {/* Core switch */}
      <Box x={CX} y={CY} w={CW} h={CH} op={0.95} ports={9} />

      {/* Core halo */}
      <ellipse cx={CX} cy={CY} rx="66" ry="33"
        fill="none" stroke={B} strokeWidth="1" opacity="0.07" />
    </>
  );
}

/* ── 2. Reducing MTTR ── declining bars + alert funnel */
function P_ReducingMTTR({ id: _ }: { id: string }) {
  const bars = [[130, 180], [220, 145], [310, 115], [400, 88], [490, 65], [580, 46], [670, 34]];
  const baseY = 400;
  return (
    <>
      {[80, 160, 240, 320].map((y, i) => (
        <line key={i} x1="110" y1={baseY - y} x2="720" y2={baseY - y}
          stroke={B} strokeWidth="0.6" opacity="0.07" />
      ))}
      {bars.map(([x, h], i) => (
        <g key={i}>
          <rect x={x} y={baseY - h} width="62" height={h} rx="7"
            fill={B} opacity={0.07 + i * 0.02} />
          <rect x={x} y={baseY - h} width="62" height="4" rx="2"
            fill={B} opacity={0.5 + i * 0.07} />
        </g>
      ))}
      <polyline
        points={bars.map(([x, h]) => `${x + 31},${baseY - h}`).join(" ")}
        fill="none" stroke={B} strokeWidth="2.8"
        strokeLinecap="round" strokeLinejoin="round" opacity="0.85"
      />
      {bars.map(([x, h], i) => (
        <circle key={i} cx={x + 31} cy={baseY - h} r="5"
          fill={i === bars.length - 1 ? "white" : B} opacity="0.9" />
      ))}
      {/* Alert funnel */}
      <rect x="620" y="50" width="120" height="20" rx="5" fill={B} opacity="0.18" />
      <rect x="640" y="80" width="80" height="16" rx="4" fill={B} opacity="0.14" />
      <rect x="655" y="106" width="50" height="14" rx="4" fill={B} opacity="0.10" />
      <rect x="665" y="130" width="30" height="12" rx="4" fill={B} opacity="0.25" />
      <line x1="620" y1="70" x2="655" y2="106" stroke={B} strokeWidth="0.8" opacity="0.18" />
      <line x1="740" y1="70" x2="705" y2="106" stroke={B} strokeWidth="0.8" opacity="0.18" />
      <line x1="680" y1="142" x2="680" y2="168" stroke={B} strokeWidth="2" opacity="0.45" />
      <polygon points="673,168 687,168 680,180" fill={B} opacity="0.55" />
      <text x="100" y="380" fontSize="38" fontWeight="800" fill={B} opacity="0.75">60%</text>
      <text x="100" y="400" fontSize="11" fill={B} opacity="0.38">MTTR Reduction</text>
    </>
  );
}

/* ── 3. Cloud Cost Optimization ── cloud outline + savings bars */
function P_CloudCost({ id: _ }: { id: string }) {
  const bars = [[90, 140], [175, 195], [260, 160], [345, 230], [430, 110]];
  const baseY = 390;
  return (
    <>
      <path d="M700 240 Q672 205 682 168 Q660 125 618 140 Q596 102 555 118 Q516 92 486 118 Q446 108 436 145 Q400 152 404 188 Q386 216 410 232 Z"
        fill={`${B2}0.08)`} stroke={B} strokeWidth="2.2" opacity="0.55" />
      <path d="M580 300 Q562 282 570 260 Q554 236 530 247 Q515 224 494 235 Q470 228 464 250 Q442 256 445 276 Q434 294 450 306 Z"
        fill={`${B2}0.06)`} stroke={B} strokeWidth="1.5" opacity="0.35" />
      {bars.map(([x, h], i) => (
        <g key={i}>
          <rect x={x} y={baseY - h} width="58" height={h} rx="7"
            fill={B} opacity={0.08 + i * 0.025} />
          <rect x={x} y={baseY - h} width="58" height="5" rx="2.5"
            fill={B} opacity={0.6 + i * 0.07} />
        </g>
      ))}
      <polyline
        points={bars.map(([x, h]) => `${x + 29},${baseY - h}`).join(" ")}
        fill="none" stroke={B} strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round" opacity="0.65"
      />
      {bars.map(([x, h], i) => (
        <circle key={i} cx={x + 29} cy={baseY - h} r="5" fill={B} opacity="0.8" />
      ))}
      {/* Coin */}
      <circle cx="660" cy="350" r="28" fill={`${B2}0.14)`} />
      <circle cx="660" cy="350" r="20" fill={`${B2}0.35)`} />
      <text x="660" y="356" textAnchor="middle" fill={B} fontSize="18" fontWeight="900">$</text>
      <text x="88" y="370" fontSize="34" fontWeight="800" fill={B} opacity="0.7">32%</text>
      <text x="88" y="390" fontSize="11" fill={B} opacity="0.38">avg cloud waste saved</text>
    </>
  );
}

/* ── 4. Future of AIOps (FEATURED) ── neural network + AI chip */
function P_FutureAIOps({ id: _ }: { id: string }) {
  const nodes: [number, number][] = [
    [400, 85],
    [270, 140], [530, 140],
    [180, 210], [340, 210], [460, 210], [620, 210],
    [240, 290], [370, 300], [490, 290], [650, 280],
    [310, 370], [470, 370],
  ];
  const edges: [number, number][] = [
    [0, 1], [0, 2],
    [1, 3], [1, 4], [2, 5], [2, 6],
    [3, 7], [4, 7], [4, 8], [5, 8], [5, 9], [6, 9], [6, 10],
    [7, 11], [8, 11], [8, 12], [9, 12], [10, 12],
  ];
  const active = new Set([0, 4, 8, 12]);
  return (
    <>
      {edges.map(([a, b], i) => (
        <line key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke={B} strokeWidth="1.3" opacity="0.18" />
      ))}
      {[[0, 4], [4, 8], [8, 12]].map(([a, b], i) => (
        <line key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke={B} strokeWidth="3" opacity="0.6" />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={active.has(i) ? 20 : 12} fill={`${B2}0.10)`} />
          <circle cx={x} cy={y} r={active.has(i) ? 10 : 6} fill={`${B2}0.50)`} />
          <circle cx={x} cy={y} r={active.has(i) ? 4.5 : 2.5}
            fill={active.has(i) ? "white" : B} opacity={active.has(i) ? 1 : 0.7} />
        </g>
      ))}
      {/* Lightning */}
      <path d="M700 55 L683 108 L700 108 L678 168 L714 100 L694 100 Z"
        fill={B} opacity="0.65" />
      {/* Chip */}
      <rect x="640" y="295" width="110" height="76" rx="10"
        fill={`${B2}0.08)`} stroke={B} strokeWidth="1.8" opacity="0.5" />
      <rect x="656" y="311" width="78" height="44" rx="6" fill={`${B2}0.06)`} />
      <rect x="666" y="321" width="58" height="8" rx="3" fill={B} opacity="0.35" />
      <rect x="666" y="334" width="42" height="6" rx="3" fill={B} opacity="0.22" />
      <rect x="666" y="345" width="50" height="5" rx="2.5" fill={B} opacity="0.14" />
      {[306, 321, 336, 351].map((y, i) => (
        <g key={i}>
          <line x1="640" y1={y} x2="628" y2={y} stroke={B} strokeWidth="2.2" opacity="0.4" />
          <line x1="750" y1={y} x2="762" y2={y} stroke={B} strokeWidth="2.2" opacity="0.4" />
        </g>
      ))}
    </>
  );
}

/* ── 5. Unified Observability ── 3 streams converging */
function P_UnifiedObservability({ id: _ }: { id: string }) {
  return (
    <>
      {/* Stream labels */}
      <rect x="36" y="62" width="90" height="26" rx="7" fill={`${B2}0.12)`} />
      <rect x="36" y="207" width="76" height="26" rx="7" fill={`${B2}0.10)`} />
      <rect x="36" y="352" width="90" height="26" rx="7" fill={`${B2}0.08)`} />
      <text x="81" y="80" textAnchor="middle" fontSize="11" fontWeight="700" fill={B} opacity="0.9">METRICS</text>
      <text x="74" y="225" textAnchor="middle" fontSize="11" fontWeight="700" fill={B} opacity="0.65">LOGS</text>
      <text x="81" y="370" textAnchor="middle" fontSize="11" fontWeight="700" fill={B} opacity="0.5">TRACES</text>
      {/* Stream 1 – metrics (bright) */}
      <path d="M130 75 Q240 75 360 225"
        fill="none" stroke={B} strokeWidth="3" opacity="0.7" strokeLinecap="round" />
      {/* Stream 2 – logs (medium) */}
      <line x1="116" y1="220" x2="360" y2="220"
        stroke={B} strokeWidth="3" opacity="0.5" />
      {/* Stream 3 – traces (dim) */}
      <path d="M130 365 Q240 365 360 225"
        fill="none" stroke={B} strokeWidth="3" opacity="0.35" strokeLinecap="round" />
      {/* Stream dots */}
      {[[190, 110], [270, 165]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill={B} opacity="0.65" />
      ))}
      {[185, 275].map((x, i) => (
        <circle key={i} cx={x} cy={220} r="5" fill={B} opacity="0.5" />
      ))}
      {[[190, 330], [270, 278]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill={B} opacity="0.35" />
      ))}
      {/* Convergence */}
      <circle cx="360" cy="220" r="32" fill={`${B2}0.12)`} />
      <circle cx="360" cy="220" r="18" fill={`${B2}0.40)`} />
      <circle cx="360" cy="220" r="8" fill={B} />
      {/* Outflow */}
      <path d="M392 220 Q540 180 720 150"
        fill="none" stroke={B} strokeWidth="3.5" opacity="0.55" strokeLinecap="round" />
      <path d="M392 220 Q540 220 720 220"
        fill="none" stroke={B} strokeWidth="2.5" opacity="0.3" strokeLinecap="round" />
      {/* Dashboard panel */}
      <rect x="580" y="80" width="190" height="280" rx="14"
        fill={`${B2}0.04)`} stroke={B} strokeWidth="1.5" opacity="0.35" />
      <rect x="596" y="98" width="158" height="14" rx="5" fill={B} opacity="0.25" />
      {[122, 146, 170, 194, 218, 246].map((y, i) => (
        <rect key={i} x="596" y={y} width={70 + i * 14} height="9" rx="3"
          fill={B} opacity={0.10 + i * 0.04} />
      ))}
      <rect x="596" y="276" width="158" height="65" rx="8" fill={`${B2}0.08)`} />
    </>
  );
}

/* ── 6. ITSM Best Practices ── pipeline with AI stages */
function P_ITSM({ id: _ }: { id: string }) {
  const stages: [number, number][] = [
    [110, 205], [255, 185], [400, 205], [545, 185], [690, 205],
  ];
  return (
    <>
      <line x1="60" y1="205" x2="760" y2="205"
        stroke={B} strokeWidth="2.2" opacity="0.14" strokeDasharray="8 5" />
      <line x1="60" y1="205" x2="545" y2="205"
        stroke={B} strokeWidth="3" opacity="0.38" />
      {stages.map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 40} y={y - 26} width="80" height="52" rx="11"
            fill={i < 4 ? `${B2}0.10)` : `${B2}0.04)`} opacity="0.9"
            stroke={B} strokeWidth={i < 4 ? 1.8 : 0.8}
            strokeOpacity={i < 4 ? 0.55 : 0.2} />
          <rect x={x - 22} y={y - 9} width="44" height="6" rx="3"
            fill={B} opacity={i < 4 ? 0.55 : 0.18} />
          <rect x={x - 16} y={y + 4} width="32" height="4" rx="2"
            fill={B} opacity={i < 4 ? 0.28 : 0.10} />
          {i < 3 && (
            <polyline points={`${x - 9},${y} ${x - 3},${y + 8} ${x + 11},${y - 7}`}
              fill="none" stroke={B} strokeWidth="2.2"
              strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
          )}
          {i === 3 && (
            <circle cx={x} cy={y} r="9" fill="none" stroke={B} strokeWidth="2.2"
              strokeDasharray="18 10" opacity="0.7" />
          )}
        </g>
      ))}
      <path d="M200 160 Q400 70 600 160"
        fill="none" stroke={B} strokeWidth="1.5" opacity="0.22"
        strokeDasharray="6 4" />
      <polygon points="596,154 608,162 598,170" fill={B} opacity="0.32" />
      <text x="100" y="340" fontSize="34" fontWeight="800" fill={B} opacity="0.7">98%</text>
      <text x="100" y="360" fontSize="10" fill={B} opacity="0.35">First-Contact Resolution</text>
      <text x="300" y="340" fontSize="34" fontWeight="800" fill={B} opacity="0.55">4.8★</text>
      <text x="300" y="360" fontSize="10" fill={B} opacity="0.28">Employee Satisfaction</text>
      <text x="510" y="340" fontSize="28" fontWeight="800" fill={B} opacity="0.42">2min</text>
      <text x="510" y="360" fontSize="10" fill={B} opacity="0.22">Avg Response Time</text>
    </>
  );
}

/* ── 7. Log Monitoring at Scale ── terminal stream + anomalies */
function P_LogMonitoring({ id: _ }: { id: string }) {
  const lines = [
    { y: 82,  w: 340, hi: false },
    { y: 104, w: 260, hi: false },
    { y: 126, w: 410, hi: true  },
    { y: 148, w: 190, hi: false },
    { y: 170, w: 370, hi: false },
    { y: 192, w: 240, hi: false },
    { y: 214, w: 430, hi: true  },
    { y: 236, w: 300, hi: false },
    { y: 258, w: 175, hi: false },
    { y: 280, w: 355, hi: false },
    { y: 302, w: 220, hi: false },
    { y: 324, w: 460, hi: true  },
    { y: 346, w: 280, hi: false },
  ];
  return (
    <>
      <rect x="38" y="48" width="510" height="360" rx="14"
        fill="#080c0e" stroke={B} strokeWidth="1.2" opacity="0.55" />
      <rect x="38" y="48" width="510" height="30" rx="14" fill="#0a1014" opacity="0.95" />
      <rect x="38" y="62" width="510" height="16" fill="#0a1014" opacity="0.95" />
      {/* Traffic light dots — all brand orange for minimalism */}
      <circle cx="62" cy="63" r="5.5" fill={B} opacity="0.35" />
      <circle cx="83" cy="63" r="5.5" fill={B} opacity="0.55" />
      <circle cx="104" cy="63" r="5.5" fill={B} opacity="0.8" />
      {lines.map(({ y, w, hi }, i) => (
        <g key={i}>
          {hi && (
            <rect x="46" y={y - 3} width="494" height="20" rx="3"
              fill={B} opacity="0.08" />
          )}
          <rect x="54" y={y} width="58" height="7" rx="2"
            fill={B} opacity={hi ? 0.5 : 0.18} />
          <rect x="122" y={y} width="26" height="7" rx="2"
            fill={B} opacity={hi ? 0.7 : 0.10} />
          <rect x="158" y={y} width={w * 0.75} height="7" rx="2"
            fill={hi ? B : "rgba(255,255,255,1)"} opacity={hi ? 0.4 : 0.08} />
        </g>
      ))}
      {/* Stats panel */}
      <rect x="584" y="48" width="180" height="360" rx="14"
        fill="#06090c" stroke={B} strokeWidth="1" opacity="0.45" />
      <text x="624" y="96" fontSize="30" fontWeight="800" fill={B} opacity="0.75">5B+</text>
      <text x="600" y="114" fontSize="10" fill={B} opacity="0.32">events / day</text>
      {[32, 50, 42, 70, 58, 90, 68].map((h, i) => (
        <rect key={i} x={592 + i * 23} y={240 - h} width="17" height={h} rx="3"
          fill={B} opacity={0.10 + (i / 7) * 0.40} />
      ))}
      <text x="624" y="318" fontSize="26" fontWeight="700" fill={B} opacity="0.8">3</text>
      <text x="600" y="336" fontSize="10" fill={B} opacity="0.38">anomalies found</text>
      <text x="600" y="380" fontSize="10" fill={B} opacity="0.25">70% cost saved</text>
    </>
  );
}

/* ── 8. Network Observability Deep Dive ── sonar rings + layers */
function P_NetworkObservability({ id: _ }: { id: string }) {
  const detected: [number, number][] = [
    [440, 100], [650, 65], [730, 185], [650, 315], [390, 295],
  ];
  return (
    <>
      {[55, 105, 162, 225].map((r, i) => (
        <circle key={i} cx="555" cy="185" r={r}
          fill="none" stroke={B} strokeWidth="1.3"
          opacity={0.35 - i * 0.07}
          strokeDasharray={i % 2 === 0 ? "none" : "9 6"} />
      ))}
      <line x1="555" y1="185" x2="380" y2="38"
        stroke={B} strokeWidth="1.8" opacity="0.35" />
      <circle cx="555" cy="185" r="10" fill={B} opacity="0.85" />
      <circle cx="555" cy="185" r="4" fill="white" />
      {detected.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="15" fill={`${B2}0.10)`} />
          <circle cx={x} cy={y} r="7.5" fill={`${B2}0.45)`} />
          <circle cx={x} cy={y} r="3" fill={B} />
          <line x1={x} y1={y} x2="555" y2="185"
            stroke={B} strokeWidth="0.9" opacity="0.18" />
        </g>
      ))}
      {/* Observation layers */}
      {(["Application", "Network", "Physical"] as const).map((label, i) => (
        <g key={i}>
          <rect x="38" y={90 + i * 96} width="250" height="62" rx="11"
            fill="#06090c" stroke={B} strokeWidth="1.3"
            strokeOpacity={0.55 - i * 0.12} opacity="0.9" />
          <text x="56" y={115 + i * 96} fontSize="11" fontWeight="700"
            fill={B} opacity={0.8 - i * 0.15}>{label}</text>
          <rect x="56" y={122 + i * 96} width="100" height="7" rx="3"
            fill={B} opacity={0.3 - i * 0.06} />
          <rect x="56" y={134 + i * 96} width="72" height="5" rx="2.5"
            fill={B} opacity={0.14 - i * 0.02} />
        </g>
      ))}
    </>
  );
}

/* ── 9. Motadata CMDB Launch ── asset relationship tree */
function P_CMDBLaunch({ id: _ }: { id: string }) {
  const root: [number, number] = [400, 72];
  const l1: [number, number][] = [[200, 178], [400, 178], [600, 178]];
  const l2: [number, number][] = [
    [105, 295], [280, 295], [360, 295], [440, 295], [520, 295], [685, 295],
  ];
  const edgesL1toL2: [number, number][] = [
    [0, 0], [0, 1], [1, 2], [1, 3], [2, 4], [2, 5],
  ];
  return (
    <>
      {l1.map(([x, y], i) => (
        <line key={i} x1={root[0]} y1={root[1] + 22} x2={x} y2={y - 22}
          stroke={B} strokeWidth="1.6" opacity="0.4" />
      ))}
      {edgesL1toL2.map(([p, c], i) => (
        <line key={i}
          x1={l1[p][0]} y1={l1[p][1] + 22}
          x2={l2[c][0]} y2={l2[c][1] - 18}
          stroke={B} strokeWidth="1.1" opacity="0.22" />
      ))}
      {/* Root */}
      <rect x={root[0] - 40} y={root[1] - 24} width="80" height="48" rx="12"
        fill={`${B2}0.12)`} stroke={B} strokeWidth="2.2" strokeOpacity="0.7" />
      <rect x={root[0] - 24} y={root[1] - 8} width="48" height="7" rx="3"
        fill={B} opacity="0.7" />
      <rect x={root[0] - 18} y={root[1] + 5} width="36" height="5" rx="2.5"
        fill={B} opacity="0.35" />
      {/* L1 */}
      {l1.map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 36} y={y - 22} width="72" height="44" rx="10"
            fill={`${B2}0.08)`} stroke={B} strokeWidth="1.6" strokeOpacity="0.5" />
          <rect x={x - 20} y={y - 9} width="40" height="6" rx="3" fill={B} opacity="0.5" />
          <rect x={x - 14} y={y + 3} width="28" height="4" rx="2" fill={B} opacity="0.25" />
        </g>
      ))}
      {/* L2 */}
      {l2.map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 27} y={y - 18} width="54" height="36" rx="8"
            fill={`${B2}0.06)`} stroke={B} strokeWidth="1.2" strokeOpacity="0.35" />
          <rect x={x - 16} y={y - 7} width="32" height="5" rx="2.5"
            fill={B} opacity="0.35" />
          <rect x={x - 12} y={y + 4} width="24" height="3.5" rx="1.5"
            fill={B} opacity="0.16" />
        </g>
      ))}
      <text x="400" y="420" textAnchor="middle"
        fontSize="60" fontWeight="900" fill={B} opacity="0.04">CMDB</text>
    </>
  );
}

/* ── 10. Building Resilient Microservices ── hexagonal service mesh */
function P_Microservices({ id: _ }: { id: string }) {
  const hexPts = (cx: number, cy: number, s: number): string =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 180) * (60 * i - 30);
      return `${cx + s * Math.cos(a)},${cy + s * Math.sin(a)}`;
    }).join(" ");

  const hexes: [number, number, number, boolean][] = [
    [400, 165, 58, true],
    [280, 218, 46, false], [520, 218, 46, false],
    [220, 318, 38, false], [400, 318, 46, false], [580, 318, 38, false],
    [310, 400, 32, false], [490, 400, 32, false],
  ];
  const beams: [number, number][] = [
    [0, 1], [0, 2], [1, 3], [1, 4], [2, 4], [2, 5],
    [3, 6], [4, 6], [4, 7], [5, 7],
  ];
  return (
    <>
      {beams.map(([a, b], i) => (
        <line key={i}
          x1={hexes[a][0]} y1={hexes[a][1]}
          x2={hexes[b][0]} y2={hexes[b][1]}
          stroke={B} strokeWidth="1.6" opacity="0.24" />
      ))}
      {hexes.map(([cx, cy, s, isMain], i) => (
        <g key={i}>
          <polygon points={hexPts(cx, cy, s)}
            fill={isMain ? `${B2}0.14)` : `${B2}0.06)`}
            stroke={B} strokeWidth={isMain ? 2.2 : 1.3}
            strokeOpacity={isMain ? 0.65 : 0.28} />
          <rect x={cx - s * 0.38} y={cy - 7} width={s * 0.76} height="6" rx="2.5"
            fill={B} opacity={isMain ? 0.65 : 0.22} />
          <rect x={cx - s * 0.28} y={cy + 5} width={s * 0.56} height="4.5" rx="2"
            fill={B} opacity={isMain ? 0.35 : 0.10} />
        </g>
      ))}
      <line x1="400" y1="107" x2="170" y2="44"
        stroke={B} strokeWidth="1.6" opacity="0.32" strokeDasharray="5 4" />
      <line x1="400" y1="107" x2="690" y2="44"
        stroke={B} strokeWidth="1.6" opacity="0.32" strokeDasharray="5 4" />
      {/* Chaos indicator */}
      <path d="M730 310 Q752 265 730 218"
        fill="none" stroke={B} strokeWidth="2" strokeDasharray="5 3" opacity="0.4" />
      <polygon points="724,218 736,218 730,204" fill={B} opacity="0.5" />
      <text x="700" y="350" fontSize="11" fill={B} opacity="0.35">chaos test</text>
    </>
  );
}

/* ── 11. Gartner Market Guide Recognition ── quadrant + award */
function P_GartnerRecognition({ id: _ }: { id: string }) {
  const starPath = (cx: number, cy: number, r: number): string =>
    Array.from({ length: 10 }, (_, i) => {
      const a = (Math.PI / 180) * (36 * i - 90);
      const radius = i % 2 === 0 ? r : r * 0.42;
      return `${cx + radius * Math.cos(a)},${cy + radius * Math.sin(a)}`;
    }).join(" ");

  return (
    <>
      <line x1="380" y1="68" x2="380" y2="390" stroke={B} strokeWidth="1" opacity="0.12" />
      <line x1="148" y1="230" x2="660" y2="230" stroke={B} strokeWidth="1" opacity="0.12" />
      <text x="530" y="100" textAnchor="middle" fontSize="10" fill={B} opacity="0.22">LEADERS</text>
      <text x="530" y="340" textAnchor="middle" fontSize="10" fill={B} opacity="0.10">CHALLENGERS</text>
      <text x="260" y="100" textAnchor="middle" fontSize="10" fill={B} opacity="0.10">VISIONARIES</text>
      {/* Competitor dots */}
      {[[445, 170], [490, 125], [560, 175], [448, 200]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="7" fill={B} opacity="0.22" />
      ))}
      {/* Motadata — leader position */}
      <circle cx="522" cy="138" r="30" fill={`${B2}0.14)`} />
      <circle cx="522" cy="138" r="19" fill={B} opacity="0.8" />
      <circle cx="522" cy="138" r="8" fill="white" />
      <text x="522" y="180" textAnchor="middle" fontSize="9" fill={B} opacity="0.55">Motadata</text>
      {/* Stars */}
      {[630, 672, 714].map((x, i) => (
        <polygon key={i} points={starPath(x, 95, 14)}
          fill={B} opacity={0.8 - i * 0.2} />
      ))}
      {/* Award badge */}
      <circle cx="670" cy="305" r="56" fill={`${B2}0.06)`} stroke={B} strokeWidth="2.2" strokeOpacity="0.55" />
      <circle cx="670" cy="305" r="42" fill={`${B2}0.04)`} stroke={B} strokeWidth="1" strokeOpacity="0.28" />
      <text x="670" y="296" textAnchor="middle" fontSize="11" fontWeight="700" fill={B} opacity="0.85">2025</text>
      <text x="670" y="311" textAnchor="middle" fontSize="9" fill={B} opacity="0.55">GARTNER</text>
      <text x="670" y="325" textAnchor="middle" fontSize="8" fill={B} opacity="0.42">RECOGNIZED</text>
      {/* Podium */}
      <rect x="95" y="300" width="76" height="100" rx="7"
        fill={`${B2}0.06)`} stroke={B} strokeWidth="1.3" strokeOpacity="0.35" />
      <rect x="188" y="278" width="76" height="122" rx="7"
        fill={`${B2}0.14)`} stroke={B} strokeWidth="2" strokeOpacity="0.6" />
      <text x="226" y="268" textAnchor="middle" fontSize="20" fill={B} opacity="0.85">1</text>
      <rect x="280" y="320" width="76" height="80" rx="7"
        fill={`${B2}0.08)`} stroke={B} strokeWidth="1" strokeOpacity="0.25" />
    </>
  );
}

/* ── 12. Automated Patch Management ── shield + progress rings */
function P_PatchManagement({ id: _ }: { id: string }) {
  const shieldD = "M430 48 L594 90 L594 202 Q594 308 430 368 Q266 308 266 202 L266 90 Z";
  /* Severity rings — Critical brightest, Medium dimmest */
  const progressData: [string, number, number][] = [
    ["Critical", 0.92, 0.88],   // label, fill-pct, opacity
    ["High",     0.74, 0.60],
    ["Medium",   0.52, 0.38],
  ];
  return (
    <>
      <path d={shieldD} fill={`${B2}0.08)`} />
      <path d={shieldD} fill="none" stroke={B} strokeWidth="2.8" opacity="0.6" />
      <path d="M430 106 L548 132 L548 208 Q548 278 430 326 Q312 278 312 208 L312 132 Z"
        fill="none" stroke={B} strokeWidth="1.2" opacity="0.22" />
      <polyline points="375,215 412,252 492,174"
        fill="none" stroke={B} strokeWidth="5.5"
        strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
      {progressData.map(([label, pct, op], i) => {
        const cx = 130, cy = 115 + i * 115;
        const r = 40;
        const circ = 2 * Math.PI * r;
        const dash = pct * circ;
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r={r} fill="none"
              stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
            <circle cx={cx} cy={cy} r={r} fill="none" stroke={B} strokeWidth="7"
              strokeDasharray={`${dash} ${circ}`}
              strokeLinecap="round"
              transform={`rotate(-90 ${cx} ${cy})`} opacity={op} />
            <text x={cx} y={cy - 4} textAnchor="middle" fontSize="14" fontWeight="800"
              fill={B} opacity={op}>{Math.round(pct * 100)}%</text>
            <text x={cx} y={cy + 12} textAnchor="middle" fontSize="9"
              fill={B} opacity={op * 0.6}>{label}</text>
          </g>
        );
      })}
      {/* Endpoint grid */}
      {Array.from({ length: 5 }).flatMap((_, r) =>
        Array.from({ length: 4 }).map((_, c) => (
          <circle key={`${r}-${c}`}
            cx={608 + c * 36} cy={102 + r * 42} r="7"
            fill={B}
            opacity={(r + c) % 5 === 3 ? 0.22 : 0.65} />
        ))
      )}
    </>
  );
}

/* ── 13. APM & Distributed Tracing ── flamegraph trace spans */
function P_APMTracing({ id: _ }: { id: string }) {
  const spans = [
    { x: 78,  y: 58,  w: 644, d: 0, op: 0.22, lw: 110 },
    { x: 78,  y: 98,  w: 400, d: 1, op: 0.16, lw: 86  },
    { x: 78,  y: 138, w: 236, d: 2, op: 0.12, lw: 72  },
    { x: 334, y: 138, w: 144, d: 2, op: 0.12, lw: 68  },
    { x: 498, y: 98,  w: 224, d: 1, op: 0.16, lw: 80  },
    { x: 498, y: 138, w: 120, d: 2, op: 0.10, lw: 64  },
    { x: 638, y: 138, w: 84,  d: 2, op: 0.14, lw: 50  },
    { x: 78,  y: 178, w: 604, d: 1, op: 0.16, lw: 92  },
    { x: 78,  y: 218, w: 198, d: 2, op: 0.10, lw: 74  },
    { x: 296, y: 218, w: 180, d: 2, op: 0.10, lw: 70  },
    { x: 496, y: 218, w: 186, d: 2, op: 0.12, lw: 76  },
    { x: 78,  y: 258, w: 404, d: 2, op: 0.08, lw: 88  }, // error span — dimmer
    { x: 78,  y: 298, w: 644, d: 0, op: 0.22, lw: 102 },
  ];
  return (
    <>
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={i} x1={78 + i * 80} y1="48" x2={78 + i * 80} y2="360"
          stroke={B} strokeWidth="0.5" opacity="0.05" />
      ))}
      {spans.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={s.y} width={s.w} height="28" rx="5"
            fill={B} opacity={s.op}
            stroke={B} strokeWidth="0.8" strokeOpacity="0.4" />
          <rect x={s.x} y={s.y} width="4" height="28" rx="2" fill={B} opacity="0.8" />
          <rect x={s.x + 12} y={s.y + 10} width={s.lw} height="6" rx="2.5"
            fill={B} opacity={s.op * 2.5} />
        </g>
      ))}
      <text x="714" y="50" textAnchor="end" fontSize="30" fontWeight="800"
        fill={B} opacity="0.68">247ms</text>
      <text x="714" y="70" textAnchor="end" fontSize="10" fill={B} opacity="0.32">total latency</text>
      <rect x="78" y="344" width="150" height="38" rx="9"
        fill={`${B2}0.06)`} stroke={B} strokeWidth="1.6" strokeOpacity="0.5" />
      <text x="153" y="368" textAnchor="middle" fontSize="13" fontWeight="700"
        fill={B} opacity="0.85">p99: 380ms</text>
      <rect x="252" y="344" width="130" height="38" rx="9"
        fill={`${B2}0.06)`} stroke={B} strokeWidth="1.6" strokeOpacity="0.35" />
      <text x="317" y="368" textAnchor="middle" fontSize="12" fontWeight="700"
        fill={B} opacity="0.55">1 error span</text>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════
   SLUG → CONFIG MAP
   Backgrounds: true black → barely-tinted warm black
   ══════════════════════════════════════════════════════════════ */

const SLUG_PATTERNS: Record<string, SlugConfig> = {
  "network-topology-comprehensive-guide":      { bg1: "#08080e", bg2: "#0c1020", Pattern: P_NetworkTopology },
  "reducing-mttr-intelligent-correlation":     { bg1: "#08080a", bg2: "#080e0a", Pattern: P_ReducingMTTR },
  "cloud-cost-optimization-observability":     { bg1: "#08080e", bg2: "#0a0c18", Pattern: P_CloudCost },
  "future-of-aiops-2025":                      { bg1: "#080808", bg2: "#0e0818", Pattern: P_FutureAIOps },
  "unified-observability-guide":               { bg1: "#080808", bg2: "#0c0a1c", Pattern: P_UnifiedObservability },
  "itsm-best-practices-modern-enterprise":     { bg1: "#08080c", bg2: "#080e0c", Pattern: P_ITSM },
  "log-monitoring-at-scale":                   { bg1: "#080808", bg2: "#08100e", Pattern: P_LogMonitoring },
  "network-observability-deep-dive":           { bg1: "#08080e", bg2: "#080e18", Pattern: P_NetworkObservability },
  "motadata-cmdb-launch":                      { bg1: "#080808", bg2: "#08100a", Pattern: P_CMDBLaunch },
  "building-resilient-microservices":          { bg1: "#0c0808", bg2: "#120c08", Pattern: P_Microservices },
  "gartner-market-guide-recognition":          { bg1: "#080808", bg2: "#0c0a10", Pattern: P_GartnerRecognition },
  "automated-patch-management":                { bg1: "#08080c", bg2: "#0a0c12", Pattern: P_PatchManagement },
  "apm-distributed-tracing-best-practices":    { bg1: "#080808", bg2: "#0e0a18", Pattern: P_APMTracing },
};

const CATEGORY_FALLBACK: Record<string, SlugConfig> = {
  "ObserveOps":         { bg1: "#08080e", bg2: "#0a0c18", Pattern: P_UnifiedObservability },
  "ServiceOps":         { bg1: "#08080c", bg2: "#080e0c", Pattern: P_ITSM },
  "AIOps":              { bg1: "#080808", bg2: "#0e0818", Pattern: P_FutureAIOps },
  "Network Management": { bg1: "#08080e", bg2: "#0c1020", Pattern: P_NetworkTopology },
  "Engineering":        { bg1: "#0c0808", bg2: "#120c08", Pattern: P_Microservices },
  "Industry News":      { bg1: "#080808", bg2: "#0c0a10", Pattern: P_GartnerRecognition },
  "Product Updates":    { bg1: "#080808", bg2: "#08100a", Pattern: P_CMDBLaunch },
};

const FALLBACK: SlugConfig = {
  bg1: "#080808", bg2: "#0e0818", Pattern: P_FutureAIOps,
};

/* ══════════════════════════════════════════════════════════════
   BlogThumbnail — exported component
   ══════════════════════════════════════════════════════════════ */

interface BlogThumbnailProps {
  category: string;
  title: string;
  uid: string;
  aspectClass?: string;
  titleSize?: "xs" | "sm" | "md" | "lg";
}

export function BlogThumbnail({
  category,
  title,
  uid,
  aspectClass = "aspect-[16/9]",
  titleSize = "sm",
}: BlogThumbnailProps) {
  const slug = uid.replace(/^(featured-|trending-|latest-)/, "");
  const config = SLUG_PATTERNS[slug] ?? CATEGORY_FALLBACK[category] ?? FALLBACK;
  const { bg1, bg2, Pattern } = config;
  const gId = `bt-bg-${uid}`;

  const titleClass =
    titleSize === "lg" ? "text-heading-xl"
    : titleSize === "md" ? "text-heading-lg"
    : "text-heading-md";

  return (
    <div className={`relative overflow-hidden ${aspectClass}`}>
      <svg
        viewBox="0 0 800 450"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={bg1} />
            <stop offset="100%" stopColor={bg2} />
          </linearGradient>
        </defs>
        <rect width="800" height="450" fill={`url(#${gId})`} />
        <Pattern id={uid} />
      </svg>

      {/* Fade for text legibility — only when text is shown */}
      {titleSize !== "xs" && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      )}

      {/* Text — hidden for xs (pattern-only thumbnails) */}
      {titleSize !== "xs" && (
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <span className="text-[9px] font-semibold uppercase tracking-widest text-white/40">
            {category}
          </span>
          <p className={`line-clamp-2 leading-snug text-white drop-shadow-lg ${titleClass}`}>
            {title}
          </p>
        </div>
      )}
    </div>
  );
}

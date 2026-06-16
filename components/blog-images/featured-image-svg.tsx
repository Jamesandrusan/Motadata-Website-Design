"use client";

import { type BlogImageEntry, getIllustrationType, type IllustrationType } from "@/data/blog-image-data";

/* ══════════════════════════════════════════════════════════════
   DARK FLAT DESIGN SYSTEM
   - Pure black background, zero gradients, zero glow
   - Grey structural elements + #F17463 accent highlights
   - Bottom metrics bar with 3 text labels
   - Minimalist, element-based, fully consistent
   ══════════════════════════════════════════════════════════════ */

const BG  = "#0D0D0D";
const C   = "#F17463";
const G1  = "#161616";
const G2  = "#1E1E1E";
const G3  = "#2A2A2A";
const G4  = "#3A3A3A";
const G5  = "#555555";
const G6  = "#777777";
const G7  = "#999999";
const W   = "#FFFFFF";

/* ── Default metrics per illustration type ── */
const DEFAULT_METRICS: Record<IllustrationType, [string, string, string]> = {
  "network-graph":     ["99.9% Uptime",  "< 1ms Latency", "Full Topology"],
  "server-stack":      ["CPU Optimized", "Memory Safe",   "Disk Healthy"],
  "cloud-arch":        ["Multi-Cloud",   "Auto Scale",    "High Avail"],
  "dashboard-panel":   ["Real-Time",     "Apdex 0.95",   "SLO Met"],
  "ticket-pipeline":   ["Auto Route",    "SLA Met",       "CSAT 4.8"],
  "alert-system":      ["-85% Noise",    "Actionable",    "Low Load"],
  "shield-check":      ["Compliant",     "Patched",       "Secured"],
  "brain-neural":      ["AI Powered",    "Predictive",    "Autonomous"],
  "code-block":        ["CI/CD Ready",   "92% Coverage",  "Deployed"],
  "trophy-badge":      ["Recognized",    "Certified",     "Leader"],
  "rocket-product":    ["New Feature",   "v2.0 Live",     "GA Ready"],
  "data-tree":         ["CMDB Mapped",   "CI Linked",     "Discovered"],
  "globe-enterprise":  ["Global Scale",  "Multi-DC",      "Enterprise"],
  "chart-analytics":   ["KPIs Met",      "ROI 340%",      "Trending Up"],
  "workflow-gear":     ["Automated",     "Orchestrated",  "Efficient"],
  "log-stream":        ["10K Logs/s",    "Indexed",       "Correlated"],
  "api-endpoint":      ["REST API",      "< 50ms",        "99.99% Up"],
  "container-grid":    ["128 Pods",      "5 Clusters",    "HA Mode"],
  "database-schema":   ["Optimized",     "Schema v3",     "< 10ms"],
  "incident-timeline": ["-35% MTTR",     "Resolved",      "RCA Done"],
  "service-catalog":   ["Self-Service",  "SLA Met",       "Fulfilled"],
  "topology-map":      ["Mapped",        "Discovered",    "Monitored"],
  "cost-dashboard":    ["-30% Cost",     "Utilized",      "FinOps"],
  "sla-gauge":         ["99.95% SLA",    "Compliant",     "On Track"],
  "pipeline-cicd":     ["Build OK",      "Tests Pass",    "Deployed"],
  "asset-inventory":   ["Asset Discovery","Lifecycle",     "Compliance"],
};

/* ── Keyword → metrics overrides ── */
const METRICS_OVERRIDES: [RegExp, [string, string, string]][] = [
  [/itam|asset.*management.*tool|asset.*tracking/i,    ["Asset Discovery","Lifecycle",   "Audit Ready"]],
  [/alert.*fatigue|avoid.*alert/i,                    ["-85% Noise",   "Actionable",    "Low Load"]],
  [/noise.*reduction|alert.*noise/i,                  ["Grouped",      "AI Root Cause", "Noise Reduced"]],
  [/cloud.*small.*business|benefits.*cloud/i,         ["Lower Cost",   "Remote Access", "Zero CapEx"]],
  [/reducing.*downtime|unified.*observability.*track/i,["-50% Downtime","Unified",       "Live Analysis"]],
  [/service.*desk.*automation/i,                      ["Auto Tasks",   "-60% Work",     "24/7"]],
  [/help.*desk.*vs|vs.*service.*desk/i,               ["Tactical",     "Strategic",     "Unified"]],
  [/network.*consisten|data.*center.*consisten/i,     ["Global Sync",  "Policy",        "Secure"]],
  [/predictive.*analytic|improved.*decision/i,        ["Predictive",   "90% Accuracy",  "Proactive"]],
  [/itsm.*maturity|maturity.*roadblock/i,             ["Level 5",      "Unified",       "Aligned"]],
  [/incident.*management.*cloud|effective.*incident/i,["Cloud Ready",  "-35% MTTR",     "Zero Impact"]],
  [/cloud.*cost.*optim|cost.*optimization.*strat/i,   ["-30% Cost",    "100% Utilized", "FinOps"]],
  [/observability.*best.*practice/i,                  ["OTel",         "SLO",           "Cost Aware"]],
  [/reactive.*to.*predictive/i,                       ["Shift-Left",   "Early Alerts",  "Stable"]],
  [/observability.*prediction|prediction.*202/i,      ["AI Ops",       "Resilience",    "Autonomous"]],
  [/dem|digital.*experience.*monitor/i,               ["End-to-End",   "MTTR",          "SLA"]],
  [/rum|real.*user.*monitor/i,                        ["Real-Time",    "Apdex",         "Edge Data"]],
  [/snmp|dhcp.*port/i,                                ["Protocol",     "Discovery",     "Mapped"]],
  [/apm|application.*performance/i,                   ["Response Time","Error Rate",    "Throughput"]],
  [/cmdb|asset.*manag/i,                              ["CI Mapped",    "Relations",     "Discovered"]],
  [/kubernetes|container|docker/i,                    ["128 Pods",     "HA Mode",       "Orchestrated"]],
  [/log.*monitor|log.*manage/i,                       ["10K/sec",      "Indexed",       "Correlated"]],
  [/sla|service.*level/i,                             ["99.95%",       "Compliant",     "On Track"]],
  [/devops|ci.*cd|pipeline/i,                         ["Build OK",     "Tests Pass",    "Deployed"]],
  [/security|patch|vulnerab/i,                        ["Patched",      "Scanned",       "Compliant"]],
  [/database|sql/i,                                   ["Optimized",    "< 10ms",        "Schema v3"]],
  [/gartner|award|recogni/i,                          ["Recognized",   "Leader",        "Certified"]],
  [/roi|kpi/i,                                        ["ROI 340%",     "KPIs Met",      "Trending"]],
  [/automation|workflow/i,                             ["Automated",    "-60% Manual",   "Efficient"]],
  [/mttr|incident/i,                                  ["-35% MTTR",    "Resolved",      "RCA Done"]],
  [/server.*monitor|server.*health/i,                 ["CPU OK",       "Memory Safe",   "Healthy"]],
  [/network.*topology|topology/i,                     ["Mapped",       "Visualized",    "Real-Time"]],
  [/msp|managed.*service/i,                           ["Multi-Tenant", "White-Label",   "Scalable"]],
  [/capacity.*plan/i,                                 ["Forecasted",   "Right-Sized",   "Optimized"]],
];

function deriveMetrics(entry: BlogImageEntry, type: IllustrationType): [string, string, string] {
  const text = `${entry.title} ${entry.excerpt}`;
  for (const [pattern, metrics] of METRICS_OVERRIDES) {
    if (pattern.test(text)) return metrics;
  }
  return DEFAULT_METRICS[type];
}

/* ── Bottom Metrics Bar ── */
function MetricsBar({ metrics }: { metrics: [string, string, string] }) {
  return (
    <g>
      <rect x="0" y="408" width="800" height="42" fill={G1} />
      <line x1="0" y1="408" x2="800" y2="408" stroke={G3} strokeWidth="1" />
      {metrics.map((m, i) => (
        <g key={i}>
          {i > 0 && <line x1={267 * i} y1="416" x2={267 * i} y2="442" stroke={G3} strokeWidth="1" />}
          <rect x={267 * i + 20} y="418" width="6" height="20" fill={C} />
          <text x={267 * i + 36} y="433" fill={W} fontSize="13" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600">{m}</text>
        </g>
      ))}
    </g>
  );
}

/* ══════════════════════════════════════════════════════════════
   25 ILLUSTRATION COMPONENTS — Dark flat, grey + #F17463
   Each fills 800×408 (bottom 42px reserved for metrics)
   ══════════════════════════════════════════════════════════════ */

function IllNetworkGraph() {
  const nodes: [number, number, number][] = [
    [400, 65, 24], [220, 145, 18], [580, 145, 18],
    [120, 235, 14], [310, 235, 16], [490, 235, 16], [680, 235, 14],
    [70, 330, 12], [200, 330, 12], [350, 330, 14], [500, 330, 14], [620, 330, 12], [730, 330, 12],
  ];
  const edges: [number, number][] = [
    [0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[3,8],[4,8],[4,9],[5,9],[5,10],[6,11],[6,12],[5,11],
  ];
  const active = new Set([0, 2, 5, 10]);
  return (
    <g>
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          stroke={G4} strokeWidth="1.5" />
      ))}
      {[[0,2],[2,5],[5,10]].map(([a,b], i) => (
        <line key={`h${i}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          stroke={C} strokeWidth="3" />
      ))}
      {nodes.map(([x, y, r], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r + 4} fill={active.has(i) ? G2 : G1} />
          <circle cx={x} cy={y} r={r} fill={active.has(i) ? C : G4}
            stroke={active.has(i) ? C : G5} strokeWidth="1.5" />
          <circle cx={x} cy={y} r={r * 0.3} fill={active.has(i) ? W : G6} />
        </g>
      ))}
      {[55, 740].map((x, i) => (
        <g key={i}>
          {[0,1,2,3,4].map(j => (
            <rect key={j} x={x} y={90 + j * 16} width="5" height="10" fill={j > 2 ? C : G4} />
          ))}
        </g>
      ))}
    </g>
  );
}

function IllServerStack() {
  const servers = [
    { y: 40, h: 65, active: true },
    { y: 118, h: 65, active: false },
    { y: 196, h: 65, active: false },
    { y: 274, h: 65, active: false },
  ];
  return (
    <g>
      <line x1="195" y1="25" x2="195" y2="365" stroke={G3} strokeWidth="2" />
      <line x1="585" y1="25" x2="585" y2="365" stroke={G3} strokeWidth="2" />
      {servers.map(({ y, h, active }, i) => (
        <g key={i}>
          <rect x="210" y={y} width="360" height={h} fill={G2} stroke={active ? C : G3} strokeWidth="1.5" />
          <circle cx="234" cy={y + h / 2 - 8} r="4" fill={active ? C : G5} />
          <circle cx="234" cy={y + h / 2 + 8} r="4" fill={G4} />
          {Array.from({ length: 8 }).map((_, j) => (
            <rect key={j} x={260 + j * 36} y={y + 10} width="28" height={h - 20} fill={active ? G3 : G2} stroke={G4} strokeWidth="0.5" />
          ))}
          <rect x="260" y={y + h - 8} width={280 * (0.9 - i * 0.15)} height="3" fill={active ? C : G5} />
        </g>
      ))}
      <rect x="620" y="40" width="145" height="140" fill={G1} stroke={G3} strokeWidth="1" />
      {[0,1,2,3,4].map(i => (
        <rect key={i} x="635" y={55 + i * 24} width={60 + i * 10} height="10" fill={i === 0 ? C : G4} />
      ))}
      <circle cx="692" cy="270" r="50" fill="none" stroke={G3} strokeWidth="10" />
      <circle cx="692" cy="270" r="50" fill="none" stroke={C} strokeWidth="10"
        strokeDasharray="235 314" strokeLinecap="butt" transform="rotate(-90 692 270)" />
    </g>
  );
}

function IllCloudArch() {
  return (
    <g>
      <path d="M580 130 Q545 75 480 95 Q455 55 400 70 Q355 45 315 75 Q270 65 255 110 Q220 125 235 155 Q210 180 245 195 L580 195 Q625 180 620 155 Q640 130 580 130 Z"
        fill={G2} stroke={C} strokeWidth="2" />
      {[[185, 235], [320, 235], [460, 235], [595, 235]].map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 45} y={y} width="90" height="60" fill={G2} stroke={i === 0 ? C : G4} strokeWidth="1.5" />
          <rect x={x - 25} y={y + 12} width="50" height="8" fill={i === 0 ? C : G5} />
          <rect x={x - 20} y={y + 28} width="40" height="6" fill={G4} />
          <rect x={x - 15} y={y + 40} width="30" height="5" fill={G3} />
        </g>
      ))}
      {[255, 390, 525].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="195" x2={x} y2="235" stroke={G5} strokeWidth="1.5" />
          <polygon points={`${x-4},230 ${x+4},230 ${x},237`} fill={G5} />
        </g>
      ))}
      <rect x="135" y="325" width="530" height="50" fill={G1} stroke={G3} strokeWidth="1" />
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={i} x={150 + i * 42} y="333" width="32" height="34" fill={i === 3 ? G3 : G2} stroke={G3} strokeWidth="0.5" />
      ))}
    </g>
  );
}

function IllDashboardPanel() {
  return (
    <g>
      <rect x="55" y="25" width="690" height="375" fill={G1} stroke={G3} strokeWidth="1.5" />
      <rect x="55" y="25" width="690" height="36" fill={G2} />
      <circle cx="78" cy="43" r="5" fill={G5} />
      <circle cx="95" cy="43" r="5" fill={C} />
      <circle cx="112" cy="43" r="5" fill={G4} />
      <rect x="55" y="61" width="135" height="339" fill={G2} />
      {[0,1,2,3,4,5,6].map(i => (
        <g key={i}>
          <rect x="68" y={80 + i * 42} width="110" height="28" fill={i === 1 ? G3 : "transparent"} />
          <circle cx="82" cy={94 + i * 42} r="4" fill={i === 1 ? C : G5} />
          <rect x="94" y={90 + i * 42} width={50 + i * 4} height="5" fill={i === 1 ? C : G5} />
        </g>
      ))}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={210 + i * 130} y="75" width="115" height="60" fill={G2} stroke={G3} strokeWidth="1" />
          <rect x={222 + i * 130} y="88" width="55" height="8" fill={i === 0 ? C : G5} />
          <rect x={222 + i * 130} y="104" width="75" height="5" fill={G4} />
          <rect x={222 + i * 130} y="116" width="40" height="4" fill={G3} />
        </g>
      ))}
      <rect x="210" y="152" width="340" height="130" fill={G2} stroke={G3} strokeWidth="0.8" />
      {[0,1,2,3].map(i => (
        <line key={i} x1="210" y1={178 + i * 28} x2="550" y2={178 + i * 28} stroke={G3} strokeWidth="0.5" />
      ))}
      <path d="M210 270 L250 252 L290 244 L330 226 L370 234 L410 210 L450 200 L490 212 L530 192 L550 198 L550 282 L210 282 Z"
        fill={G3} />
      <polyline points="210,270 250,252 290,244 330,226 370,234 410,210 450,200 490,212 530,192 550,198"
        fill="none" stroke={C} strokeWidth="2.5" strokeLinecap="square" />
      {[[250,252],[330,226],[410,210],[490,212],[550,198]].map(([x,y], i) => (
        <rect key={i} x={x-4} y={y-4} width="8" height="8" fill={C} />
      ))}
      <rect x="570" y="152" width="160" height="130" fill={G2} stroke={G3} strokeWidth="0.8" />
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={585 + i * 28} y={282 - [55, 85, 65, 105, 80][i]}
          width="20" height={[55, 85, 65, 105, 80][i]} fill={i === 3 ? C : G4} />
      ))}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="210" y={300 + i * 22} width="520" height="18" fill={i % 2 === 0 ? G2 : "transparent"} />
          <rect x="220" y={305 + i * 22} width="60" height="5" fill={G5} />
          <rect x="300" y={305 + i * 22} width="45" height="5" fill={G4} />
          <rect x="370" y={305 + i * 22} width="55" height="5" fill={G3} />
          <circle cx="710" cy={309 + i * 22} r="4" fill={i === 0 ? C : G5} />
        </g>
      ))}
    </g>
  );
}

function IllTicketPipeline() {
  const cols = [105, 280, 455, 630];
  const counts = [4, 3, 2, 1];
  return (
    <g>
      {cols.map((x, ci) => (
        <g key={ci}>
          <rect x={x - 65} y="30" width="130" height="28" fill={ci === 0 ? G3 : G2} />
          <rect x={x - 45} y="39" width="60" height="6" fill={ci === 0 ? C : G5} />
          <rect x={x - 65} y="58" width="130" height="335" fill={G1} stroke={G3} strokeWidth="1" />
          {Array.from({ length: counts[ci] }).map((_, j) => (
            <g key={j}>
              <rect x={x - 55} y={75 + j * 75} width="110" height="58" fill={G2} stroke={G4} strokeWidth="1" />
              <rect x={x - 55} y={75 + j * 75} width="4" height="58" fill={ci === 0 && j === 0 ? C : G5} />
              <rect x={x - 42} y={85 + j * 75} width="70" height="6" fill={G6} />
              <rect x={x - 42} y={97 + j * 75} width="50" height="5" fill={G4} />
              <circle cx={x + 42} cy={82 + j * 75} r="4" fill={ci === 0 && j === 0 ? C : G5} />
              <circle cx={x + 42} cy={120 + j * 75} r="7" fill={G3} stroke={G4} strokeWidth="1" />
            </g>
          ))}
        </g>
      ))}
      {[0,1,2].map(i => (
        <g key={i}>
          <line x1={cols[i] + 65} y1="210" x2={cols[i+1] - 65} y2="210"
            stroke={G5} strokeWidth="1.5" strokeDasharray="6 4" />
          <polygon points={`${cols[i+1]-70},206 ${cols[i+1]-62},210 ${cols[i+1]-70},214`} fill={G5} />
        </g>
      ))}
    </g>
  );
}

function IllAlertSystem() {
  return (
    <g>
      <path d="M380 90 Q380 35 420 22 Q460 35 460 90 L472 150 L368 150 Z"
        fill={G3} stroke={C} strokeWidth="2" />
      <line x1="368" y1="150" x2="472" y2="150" stroke={C} strokeWidth="2.5" />
      <rect x="405" y="158" width="30" height="8" fill={G5} />
      <circle cx="420" cy="15" r="5" fill={C} />
      <rect x="452" y="42" width="24" height="24" fill={C} />
      <line x1="100" y1="40" x2="100" y2="390" stroke={G3} strokeWidth="2" />
      {[70, 130, 195, 260, 320, 375].map((y, i) => (
        <g key={i}>
          <rect x="96" y={y - 4} width="8" height="8" fill={i === 2 || i === 4 ? C : G5} />
          <rect x="120" y={y - 12} width="180" height="28" fill={i === 2 ? G3 : G2} stroke={i === 2 ? C : G3} strokeWidth="1" />
          <rect x="130" y={y - 4} width={80 + i * 6} height="5" fill={G5} />
          <rect x="130" y={y + 5} width="50" height="4" fill={G4} />
          <rect x="270" y={y - 2} width="18" height="8" fill={i === 2 ? C : G4} />
        </g>
      ))}
      <rect x="540" y="30" width="210" height="360" fill={G1} stroke={G3} strokeWidth="1" />
      <circle cx="645" cy="120" r="55" fill="none" stroke={G3} strokeWidth="14" />
      <circle cx="645" cy="120" r="55" fill="none" stroke={C} strokeWidth="14"
        strokeDasharray="200 345" strokeLinecap="butt" transform="rotate(-90 645 120)" />
      {[210, 250, 290, 330, 370].map((y, i) => (
        <g key={i}>
          <rect x="560" y={y} width="8" height="18" fill={i === 0 ? C : G5} />
          <rect x="578" y={y + 3} width="60" height="5" fill={G5} />
          <rect x="690" y={y + 2} width={30 + i * 5} height="7" fill={G4} />
        </g>
      ))}
    </g>
  );
}

function IllShieldCheck() {
  return (
    <g>
      <path d="M400 25 L615 72 L615 210 Q615 335 400 395 Q185 335 185 210 L185 72 Z"
        fill={G2} stroke={G4} strokeWidth="2" />
      <path d="M400 60 L575 100 L575 210 Q575 310 400 360 Q225 310 225 210 L225 100 Z"
        fill="none" stroke={G3} strokeWidth="1.5" />
      <polyline points="340,210 382,252 462,172"
        fill="none" stroke={C} strokeWidth="8" strokeLinecap="square" strokeLinejoin="miter" />
      {[0,1,2,3,4,5].map(i => (
        <line key={i} x1="200" y1={110 + i * 45} x2="600" y2={110 + i * 45}
          stroke={G3} strokeWidth="0.5" />
      ))}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="645" y={70 + i * 80} width="115" height="60" fill={G2} stroke={G3} strokeWidth="1" />
          <rect x="655" y={83 + i * 80} width="50" height="5" fill={G5} />
          <rect x="655" y={96 + i * 80} width="85" height="8" fill={G3} />
          <rect x="655" y={96 + i * 80} width={[65, 50, 75, 40][i]} height="8" fill={i === 2 ? C : G5} />
          <rect x="655" y={110 + i * 80} width="35" height="4" fill={G4} />
        </g>
      ))}
      <rect x="40" y="150" width="95" height="120" fill={G2} stroke={G3} strokeWidth="1" />
      <rect x="60" y="175" width="40" height="40" fill={G3} stroke={G5} strokeWidth="1.5" />
      <path d="M68 175 L68 162 Q68 148 88 148 Q108 148 108 162 L108 175" fill="none" stroke={G5} strokeWidth="2" />
      <rect x="80" y="190" width="10" height="14" fill={C} />
    </g>
  );
}

function IllBrainNeural() {
  const layers: [number, number][][] = [
    [[400, 50]],
    [[240, 120], [400, 120], [560, 120]],
    [[140, 210], [300, 210], [420, 210], [540, 210], [660, 210]],
    [[200, 295], [360, 295], [500, 295], [640, 295]],
    [[300, 375], [500, 375]],
  ];
  const activeSet = new Set(["0-0", "1-1", "2-2", "3-1", "4-0"]);
  return (
    <g>
      {layers.slice(0, -1).map((layer, li) =>
        layer.map(([x1, y1], ni) =>
          layers[li + 1].map(([x2, y2], ni2) => {
            const isActive = activeSet.has(`${li}-${ni}`) && activeSet.has(`${li+1}-${ni2}`);
            return (
              <line key={`${li}-${ni}-${ni2}`} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={isActive ? C : G3} strokeWidth={isActive ? 2.5 : 1} />
            );
          })
        )
      )}
      {layers.map((layer, li) =>
        layer.map(([x, y], ni) => {
          const isA = activeSet.has(`${li}-${ni}`);
          const r = isA ? 16 : 11;
          return (
            <g key={`${li}-${ni}`}>
              <circle cx={x} cy={y} r={r + 4} fill={isA ? G2 : G1} />
              <circle cx={x} cy={y} r={r} fill={isA ? C : G4} stroke={isA ? C : G5} strokeWidth="1.5" />
              <circle cx={x} cy={y} r={r * 0.3} fill={isA ? W : G6} />
            </g>
          );
        })
      )}
      <rect x="680" y="340" width="80" height="50" fill={G2} stroke={C} strokeWidth="1.5" />
      <rect x="694" y="352" width="52" height="7" fill={C} />
      <rect x="694" y="364" width="36" height="5" fill={G5} />
      {[350, 362, 374, 386].map((y, i) => (
        <g key={i}>
          <rect x="672" y={y} width="8" height="3" fill={G5} />
          <rect x="760" y={y} width="8" height="3" fill={G5} />
        </g>
      ))}
    </g>
  );
}

function IllCodeBlock() {
  const lines = [
    { indent: 0, kw: 40, code: 140, hi: false },
    { indent: 1, kw: 35, code: 100, hi: false },
    { indent: 2, kw: 45, code: 180, hi: true },
    { indent: 2, kw: 30, code: 120, hi: false },
    { indent: 2, kw: 50, code: 160, hi: false },
    { indent: 1, kw: 25, code: 90, hi: false },
    { indent: 0, kw: 40, code: 200, hi: true },
    { indent: 1, kw: 35, code: 150, hi: false },
    { indent: 2, kw: 45, code: 130, hi: false },
    { indent: 2, kw: 30, code: 170, hi: true },
    { indent: 1, kw: 40, code: 110, hi: false },
    { indent: 0, kw: 35, code: 80, hi: false },
    { indent: 0, kw: 45, code: 190, hi: false },
    { indent: 1, kw: 30, code: 140, hi: false },
  ];
  return (
    <g>
      <rect x="35" y="20" width="500" height="380" fill={G1} stroke={G3} strokeWidth="1.5" />
      <rect x="35" y="20" width="500" height="32" fill={G2} />
      <circle cx="57" cy="36" r="5" fill={G5} />
      <circle cx="75" cy="36" r="5" fill={C} />
      <circle cx="93" cy="36" r="5" fill={G4} />
      <rect x="35" y="52" width="38" height="348" fill={G2} />
      {lines.map(({ indent, kw, code, hi }, i) => {
        const y = 67 + i * 25;
        const x0 = 82 + indent * 20;
        return (
          <g key={i}>
            {hi && <rect x="73" y={y - 4} width="455" height="20" fill={G2} />}
            <rect x="42" y={y} width="20" height="6" fill={G4} />
            <rect x={x0} y={y} width={kw} height="6" fill={hi ? C : G5} />
            <rect x={x0 + kw + 8} y={y} width={code} height="6" fill={hi ? G6 : G4} />
          </g>
        );
      })}
      <rect x="555" y="20" width="210" height="185" fill={G1} stroke={G3} strokeWidth="1" />
      <rect x="555" y="20" width="210" height="26" fill={G2} />
      <rect x="570" y="29" width="60" height="6" fill={C} />
      {[0,1,2,3,4,5].map(i => (
        <rect key={i} x="570" y={58 + i * 22} width={80 + i * 10} height="5" fill={G4} />
      ))}
      <rect x="555" y="225" width="210" height="175" fill={G1} stroke={G3} strokeWidth="1" />
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x="570" y={242 + i * 52} width="180" height="38" fill={G2} stroke={G3} strokeWidth="0.5" />
          <polyline
            points={Array.from({length: 8}, (_, j) =>
              `${580 + j * 20},${265 + i * 52 - [8,15,10,18,12,20,14,16][j]}`
            ).join(" ")}
            fill="none" stroke={i === 0 ? C : G5} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
}

function IllTrophyBadge() {
  return (
    <g>
      <line x1="400" y1="30" x2="400" y2="330" stroke={G3} strokeWidth="1" />
      <line x1="120" y1="180" x2="680" y2="180" stroke={G3} strokeWidth="1" />
      {[[540, 70], [260, 70], [540, 270], [260, 270]].map(([x, y], i) => (
        <rect key={i} x={x - 30} y={y} width="60" height="7" fill={i === 0 ? C : G5} />
      ))}
      {[[460, 130], [510, 105], [570, 140], [470, 160], [520, 155], [440, 115]].map(([x, y], i) => (
        <rect key={i} x={x - 5} y={y - 5} width="10" height="10" fill={G5} />
      ))}
      <rect x="502" y="82" width="46" height="46" fill={G3} stroke={C} strokeWidth="2" />
      <circle cx="525" cy="105" r="10" fill={C} />
      <rect x="640" y="210" width="120" height="120" fill={G2} stroke={C} strokeWidth="2" />
      <polygon points="700,245 707,265 728,265 711,277 718,297 700,285 682,297 689,277 672,265 693,265"
        fill={C} />
      <rect x="80" y="250" width="80" height="110" fill={G3} stroke={G4} strokeWidth="1.5" />
      <rect x="175" y="220" width="80" height="140" fill={G4} stroke={C} strokeWidth="2" />
      <rect x="270" y="270" width="80" height="90" fill={G2} stroke={G4} strokeWidth="1" />
      <rect x="200" y="230" width="30" height="8" fill={C} />
      <rect x="105" y="260" width="30" height="8" fill={G6} />
      <rect x="295" y="280" width="30" height="8" fill={G5} />
    </g>
  );
}

function IllRocketProduct() {
  return (
    <g>
      <path d="M380 70 Q400 15 420 70 L425 268 Q425 298 400 308 Q375 298 375 268 Z"
        fill={G3} stroke={C} strokeWidth="2" />
      <rect x="388" y="120" width="24" height="24" fill={G4} stroke={C} strokeWidth="1.5" />
      <rect x="393" y="125" width="14" height="14" fill={C} />
      <rect x="385" y="170" width="30" height="4" fill={G5} />
      <rect x="385" y="190" width="30" height="4" fill={G4} />
      <rect x="385" y="210" width="30" height="4" fill={G3} />
      <path d="M375 230 L342 282 L375 268" fill={G3} stroke={G5} strokeWidth="1.5" />
      <path d="M425 230 L458 282 L425 268" fill={G3} stroke={G5} strokeWidth="1.5" />
      <polygon points="388,308 400,365 412,308" fill={C} />
      <polygon points="392,308 400,350 408,308" fill={G5} />
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="55" y={60 + i * 85} width="220" height="65" fill={G2} stroke={G3} strokeWidth="1" />
          <rect x="67" y={72 + i * 85} width="8" height="40" fill={i === 0 ? C : G5} />
          <rect x="85" y={78 + i * 85} width="80" height="6" fill={G6} />
          <rect x="85" y={92 + i * 85} width="160" height="5" fill={G4} />
          <rect x="85" y={104 + i * 85} width="120" height="5" fill={G3} />
          <line x1="275" y1={95 + i * 85} x2="375" y2={140 + i * 28}
            stroke={G3} strokeWidth="1" strokeDasharray="4 4" />
        </g>
      ))}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="525" y={60 + i * 85} width="220" height="65" fill={G2} stroke={G3} strokeWidth="1" />
          <rect x="725" y={72 + i * 85} width="8" height="40" fill={i === 0 ? C : G5} />
          <rect x="537" y={78 + i * 85} width="80" height="6" fill={G6} />
          <rect x="537" y={92 + i * 85} width="160" height="5" fill={G4} />
          <rect x="537" y={104 + i * 85} width="120" height="5" fill={G3} />
          <line x1="525" y1={95 + i * 85} x2="425" y2={140 + i * 28}
            stroke={G3} strokeWidth="1" strokeDasharray="4 4" />
        </g>
      ))}
      {[[300, 42], [500, 35], [280, 365], [520, 370]].map(([x, y], i) => (
        <rect key={i} x={x-3} y={y-3} width="6" height="6" fill={C} transform={`rotate(45 ${x} ${y})`} />
      ))}
    </g>
  );
}

function IllDataTree() {
  const root: [number, number] = [400, 50];
  const l1: [number, number][] = [[200, 148], [400, 148], [600, 148]];
  const l2: [number, number][] = [[100, 255], [250, 255], [400, 255], [550, 255], [700, 255]];
  const l3: [number, number][] = [[60, 350], [180, 350], [300, 350], [420, 350], [540, 350], [660, 350], [760, 350]];
  return (
    <g>
      {l1.map(([x, y], i) => (
        <line key={`r${i}`} x1={root[0]} y1={root[1] + 20} x2={x} y2={y - 20}
          stroke={i === 1 ? C : G4} strokeWidth={i === 1 ? 2.5 : 1.5} />
      ))}
      {[[0,0],[0,1],[1,1],[1,2],[2,3],[2,4]].map(([p,c], i) => (
        <line key={`l1${i}`} x1={l1[p][0]} y1={l1[p][1] + 20} x2={l2[c][0]} y2={l2[c][1] - 16}
          stroke={G4} strokeWidth="1.5" />
      ))}
      {[[0,0],[0,1],[1,1],[1,2],[2,2],[2,3],[3,4],[3,5],[4,5],[4,6]].map(([p,c], i) => (
        <line key={`l2${i}`} x1={l2[p][0]} y1={l2[p][1] + 14} x2={l3[c][0]} y2={l3[c][1] - 12}
          stroke={G3} strokeWidth="1" />
      ))}
      <rect x={root[0] - 45} y={root[1] - 20} width="90" height="40" fill={G3} stroke={C} strokeWidth="2" />
      <rect x={root[0] - 28} y={root[1] - 6} width="56" height="7" fill={C} />
      <rect x={root[0] - 22} y={root[1] + 6} width="44" height="5" fill={G5} />
      {l1.map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 40} y={y - 18} width="80" height="36" fill={G2} stroke={i === 1 ? C : G4} strokeWidth="1.5" />
          <rect x={x - 25} y={y - 6} width="50" height="6" fill={i === 1 ? C : G5} />
          <rect x={x - 20} y={y + 4} width="40" height="5" fill={G4} />
        </g>
      ))}
      {l2.map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 32} y={y - 14} width="64" height="28" fill={G2} stroke={G4} strokeWidth="1" />
          <rect x={x - 20} y={y - 5} width="40" height="5" fill={G5} />
          <rect x={x - 16} y={y + 4} width="32" height="4" fill={G4} />
        </g>
      ))}
      {l3.map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 26} y={y - 12} width="52" height="24" fill={G1} stroke={G3} strokeWidth="1" />
          <rect x={x - 16} y={y - 4} width="32" height="5" fill={G4} />
          <rect x={x - 12} y={y + 4} width="24" height="4" fill={G3} />
        </g>
      ))}
    </g>
  );
}

function IllGlobeEnterprise() {
  return (
    <g>
      <circle cx="400" cy="195" r="148" fill={G1} stroke={G4} strokeWidth="1.5" />
      <ellipse cx="400" cy="195" rx="80" ry="148" fill="none" stroke={G3} strokeWidth="0.8" />
      <ellipse cx="400" cy="195" rx="40" ry="148" fill="none" stroke={G3} strokeWidth="0.5" />
      <ellipse cx="400" cy="195" rx="148" ry="55" fill="none" stroke={G3} strokeWidth="0.8" />
      <line x1="252" y1="195" x2="548" y2="195" stroke={G3} strokeWidth="0.5" />
      <line x1="400" y1="47" x2="400" y2="343" stroke={G3} strokeWidth="0.5" />
      {[[350, 140], [440, 155], [380, 205], [430, 235], [340, 190], [470, 175], [360, 260]].map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 5} y={y - 5} width="10" height="10" fill={i === 0 ? C : G5} />
        </g>
      ))}
      <path d="M350 140 Q390 110 440 155" fill="none" stroke={C} strokeWidth="1.5" />
      <path d="M380 205 Q420 190 430 235" fill="none" stroke={G5} strokeWidth="1" />
      <path d="M340 190 Q400 165 470 175" fill="none" stroke={G4} strokeWidth="1" />
      {[55, 640].map((x, i) => (
        <g key={i}>
          <rect x={x} y="330" width="105" height="65" fill={G2} stroke={G3} strokeWidth="1" />
          {[0,1,2].map(j => (
            <rect key={j} x={x + 10} y={342 + j * 18} width="85" height="12" fill={j === 0 ? G3 : G2} stroke={G3} strokeWidth="0.5" />
          ))}
        </g>
      ))}
      <line x1="160" y1="340" x2="300" y2="250" stroke={G4} strokeWidth="1" strokeDasharray="5 4" />
      <line x1="640" y1="340" x2="500" y2="250" stroke={G4} strokeWidth="1" strokeDasharray="5 4" />
      <rect x="100" y="22" width="600" height="5" fill={G3} />
      <rect x="100" y="22" width="420" height="5" fill={C} />
    </g>
  );
}

function IllChartAnalytics() {
  const bars = [[80, 110], [160, 170], [240, 130], [320, 210], [400, 160], [480, 240], [560, 190], [640, 270]];
  const baseY = 370;
  return (
    <g>
      {[0,1,2,3,4,5].map(i => (
        <line key={i} x1="55" y1={baseY - i * 52} x2="740" y2={baseY - i * 52}
          stroke={G3} strokeWidth="0.5" />
      ))}
      {bars.map(([x, h], i) => (
        <g key={i}>
          <rect x={x} y={baseY - h} width="55" height={h} fill={i === 5 ? G4 : G3} />
          <rect x={x} y={baseY - h} width="55" height="4" fill={i === 5 ? C : G5} />
        </g>
      ))}
      <polyline
        points={bars.map(([x, h]) => `${x + 27},${baseY - h}`).join(" ")}
        fill="none" stroke={C} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" />
      {bars.map(([x, h], i) => (
        <rect key={i} x={x + 22} y={baseY - h - 5} width="10" height="10" fill={C} />
      ))}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={75 + i * 170} y="22" width="148" height="48" fill={G2} stroke={G3} strokeWidth="1" />
          <rect x={87 + i * 170} y="34" width="60" height="8" fill={i === 0 ? C : G5} />
          <rect x={87 + i * 170} y="48" width="100" height="5" fill={G4} />
        </g>
      ))}
    </g>
  );
}

function IllWorkflowGear() {
  const gearPath = (cx: number, cy: number, r: number): string => {
    const teeth = 8;
    const inner = r * 0.7;
    let d = "";
    for (let i = 0; i < teeth; i++) {
      const a1 = (Math.PI * 2 * i) / teeth;
      const a2 = (Math.PI * 2 * (i + 0.35)) / teeth;
      const a3 = (Math.PI * 2 * (i + 0.5)) / teeth;
      const a4 = (Math.PI * 2 * (i + 0.85)) / teeth;
      d += `${i === 0 ? "M" : "L"}${cx + r * Math.cos(a1)},${cy + r * Math.sin(a1)} `;
      d += `L${cx + r * Math.cos(a2)},${cy + r * Math.sin(a2)} `;
      d += `L${cx + inner * Math.cos(a3)},${cy + inner * Math.sin(a3)} `;
      d += `L${cx + inner * Math.cos(a4)},${cy + inner * Math.sin(a4)} `;
    }
    return d + "Z";
  };
  return (
    <g>
      <path d={gearPath(320, 170, 80)} fill={G3} stroke={G5} strokeWidth="1.5" />
      <circle cx="320" cy="170" r="28" fill={G2} stroke={C} strokeWidth="1.5" />
      <rect x="310" y="162" width="20" height="16" fill={C} />
      <path d={gearPath(475, 120, 50)} fill={G2} stroke={G4} strokeWidth="1" />
      <circle cx="475" cy="120" r="16" fill={G1} stroke={G5} strokeWidth="1" />
      <path d={gearPath(555, 195, 35)} fill={G2} stroke={G4} strokeWidth="1" />
      <circle cx="555" cy="195" r="12" fill={G1} stroke={G4} strokeWidth="1" />
      {[100, 250, 400, 550, 700].map((x, i) => (
        <g key={i}>
          <rect x={x - 50} y="305" width="100" height="55" fill={i < 3 ? G3 : G2}
            stroke={i < 3 ? G5 : G3} strokeWidth={i < 3 ? 1.5 : 1} />
          <rect x={x - 32} y="318" width="64" height="6" fill={i === 0 ? C : G5} />
          <rect x={x - 26} y="330" width="52" height="5" fill={G4} />
          <rect x={x - 20} y="340" width="40" height="4" fill={G3} />
          {i < 4 && (
            <polygon points={`${x + 55},332 ${x + 68},328 ${x + 68},336`} fill={G5} />
          )}
        </g>
      ))}
      <line x1="320" y1="250" x2="320" y2="305" stroke={G4} strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="475" y1="170" x2="475" y2="305" stroke={G3} strokeWidth="1" strokeDasharray="4 3" />
    </g>
  );
}

function IllLogStream() {
  return (
    <g>
      <rect x="45" y="20" width="710" height="380" fill={G1} stroke={G3} strokeWidth="1.5" />
      <rect x="45" y="20" width="710" height="30" fill={G2} />
      <circle cx="67" cy="35" r="5" fill={G5} />
      <circle cx="85" cy="35" r="5" fill={C} />
      <circle cx="103" cy="35" r="5" fill={G4} />
      <rect x="695" y="28" width="8" height="8" fill={C} />
      <rect x="708" y="31" width="30" height="5" fill={G5} />
      {Array.from({ length: 14 }).map((_, i) => {
        const y = 62 + i * 24;
        const isErr = [3, 9].includes(i);
        const isWarn = [0, 6, 12].includes(i);
        const msgW = [280, 220, 340, 380, 200, 310, 260, 190, 350, 400, 240, 300, 180, 270][i];
        return (
          <g key={i}>
            {isErr && <rect x="45" y={y - 3} width="710" height="22" fill={G2} />}
            <rect x="58" y={y} width="78" height="6" fill={G4} />
            <rect x="146" y={y - 2} width="38" height="10" fill={isErr ? C : isWarn ? G5 : G3} />
            <rect x="195" y={y} width="52" height="6" fill={G5} />
            <rect x="258" y={y} width={Math.min(msgW, 470)} height="6" fill={isErr ? G6 : G4} />
            <circle cx="740" cy={y + 3} r="3" fill={isErr ? C : G3} />
          </g>
        );
      })}
      <rect x="750" y="70" width="4" height="55" fill={G5} />
    </g>
  );
}

function IllApiEndpoint() {
  const endpoints = [
    { y: 70, method: true, path: 140, active: true },
    { y: 135, method: false, path: 180, active: false },
    { y: 200, method: false, path: 120, active: false },
    { y: 265, method: false, path: 160, active: false },
    { y: 330, method: false, path: 200, active: false },
  ];
  return (
    <g>
      <line x1="40" y1="52" x2="40" y2="370" stroke={G3} strokeWidth="2" />
      {endpoints.map(({ y, method, path, active }, i) => (
        <g key={i}>
          <line x1="40" y1={y + 20} x2="60" y2={y + 20} stroke={G4} strokeWidth="1.5" />
          <rect x="60" y={y} width="345" height="42" fill={active ? G2 : G1} stroke={active ? C : G3} strokeWidth="1" />
          <rect x="68" y={y + 10} width="45" height="14" fill={method ? C : G4} />
          <rect x="122" y={y + 12} width={path} height="6" fill={G5} />
          <rect x="340" y={y + 10} width="32" height="14" fill={active ? G3 : G2} stroke={G4} strokeWidth="0.5" />
          <rect x="122" y={y + 28} width={70 + i * 18} height="4" fill={active ? C : G3} />
        </g>
      ))}
      <rect x="435" y="50" width="325" height="175" fill={G1} stroke={G3} strokeWidth="1" />
      <rect x="435" y="50" width="325" height="26" fill={G2} />
      <rect x="450" y="58" width="55" height="6" fill={C} />
      <rect x="520" y="58" width="45" height="6" fill={G5} />
      {[0,1,2,3,4].map(j => (
        <g key={j}>
          <rect x={450 + (j > 0 && j < 4 ? 16 : 0)} y={88 + j * 24} width={40 + j * 6} height="6" fill={G5} />
          <rect x={510 + j * 6} y={88 + j * 24} width={75 - j * 8} height="6" fill={G4} />
        </g>
      ))}
      <rect x="435" y="245" width="325" height="150" fill={G1} stroke={G3} strokeWidth="1" />
      <rect x="435" y="245" width="325" height="26" fill={G2} />
      <rect x="450" y="253" width="60" height="6" fill={G6} />
      {Array.from({ length: 10 }).map((_, j) => (
        <rect key={j} x={452 + j * 29} y={375 - [30,45,65,85,55,38,50,42,28,18][j]}
          width="22" height={[30,45,65,85,55,38,50,42,28,18][j]} fill={j === 3 ? C : G4} />
      ))}
    </g>
  );
}

function IllContainerGrid() {
  return (
    <g>
      <rect x="35" y="22" width="730" height="378" fill="none" stroke={G4} strokeWidth="2" strokeDasharray="8 4" />
      <rect x="55" y="40" width="335" height="155" fill={G1} stroke={G3} strokeWidth="1.5" />
      <rect x="55" y="40" width="335" height="22" fill={G2} />
      <rect x="67" y="46" width="55" height="6" fill={C} />
      <circle cx="370" cy="51" r="5" fill={C} />
      {[0,1,2,3,4,5].map(i => {
        const px = 67 + (i % 3) * 108;
        const py = 72 + Math.floor(i / 3) * 58;
        return (
          <g key={i}>
            <rect x={px} y={py} width="95" height="48" fill={i < 4 ? G2 : G1}
              stroke={i < 4 ? G4 : G3} strokeWidth="1" />
            <rect x={px + 6} y={py + 8} width="35" height="5" fill={i === 0 ? C : G5} />
            <rect x={px + 6} y={py + 18} width="55" height="4" fill={G4} />
            <rect x={px + 6} y={py + 30} width={60 * (0.4 + i * 0.1)} height="4" fill={i < 4 ? C : G4} />
            <circle cx={px + 82} cy={py + 10} r="3" fill={i < 4 ? C : G4} />
          </g>
        );
      })}
      <rect x="410" y="40" width="335" height="155" fill={G1} stroke={G3} strokeWidth="1.5" />
      <rect x="410" y="40" width="335" height="22" fill={G2} />
      <rect x="422" y="46" width="55" height="6" fill={G6} />
      <circle cx="725" cy="51" r="5" fill={G5} />
      {[0,1,2,3].map(i => {
        const px = 422 + (i % 2) * 160;
        const py = 72 + Math.floor(i / 2) * 58;
        return (
          <g key={`n2-${i}`}>
            <rect x={px} y={py} width="145" height="48" fill={G2} stroke={G3} strokeWidth="1" />
            <rect x={px + 8} y={py + 8} width="48" height="5" fill={G5} />
            <rect x={px + 8} y={py + 20} width="80" height="4" fill={G4} />
            <rect x={px + 8} y={py + 32} width={100 * (0.4 + i * 0.15)} height="4" fill={G5} />
          </g>
        );
      })}
      <rect x="55" y="215" width="690" height="55" fill={G1} stroke={G3} strokeWidth="1" />
      <rect x="67" y="222" width="65" height="5" fill={G6} />
      {[95, 235, 375, 515, 655].map((x, i) => (
        <g key={i}>
          <rect x={x} y="235" width="85" height="28" fill={G2} stroke={G3} strokeWidth="0.8" />
          <rect x={x + 8} y="242" width="40" height="5" fill={G5} />
          <rect x={x + 8} y="250" width="55" height="4" fill={G4} />
        </g>
      ))}
      <rect x="55" y="288" width="690" height="100" fill={G1} stroke={G3} strokeWidth="1" />
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={75 + i * 168} y="300" width="145" height="72" fill={G2} stroke={G3} strokeWidth="0.5" />
          <rect x={87 + i * 168} y="312" width="55" height="5" fill={i === 0 ? C : G5} />
          <rect x={87 + i * 168} y="324" width="80" height="9" fill={i === 0 ? C : G4} />
          <rect x={87 + i * 168} y="342" width="55" height="4" fill={G3} />
        </g>
      ))}
    </g>
  );
}

function IllDatabaseSchema() {
  const tables: { x: number; y: number; w: number; rows: number; accent: boolean }[] = [
    { x: 75, y: 40, w: 180, rows: 5, accent: true },
    { x: 335, y: 70, w: 160, rows: 4, accent: false },
    { x: 565, y: 40, w: 170, rows: 5, accent: false },
    { x: 135, y: 240, w: 170, rows: 4, accent: false },
    { x: 415, y: 260, w: 160, rows: 4, accent: false },
    { x: 640, y: 250, w: 120, rows: 3, accent: false },
  ];
  return (
    <g>
      <path d="M255 100 Q295 100 335 110" fill="none" stroke={C} strokeWidth="1.5" />
      <path d="M495 110 Q530 85 565 85" fill="none" stroke={G4} strokeWidth="1.5" />
      <path d="M170 195 Q170 218 190 240" fill="none" stroke={G4} strokeWidth="1.5" />
      <path d="M415 190 Q415 225 445 260" fill="none" stroke={G4} strokeWidth="1" />
      <path d="M575 300 Q608 300 640 290" fill="none" stroke={G3} strokeWidth="1" />
      <path d="M305 300 Q360 300 415 290" fill="none" stroke={G3} strokeWidth="1" />
      {tables.map(({ x, y, w, rows, accent }, ti) => (
        <g key={ti}>
          <rect x={x} y={y} width={w} height={24 + rows * 20} fill={G1} stroke={accent ? C : G4} strokeWidth={accent ? 1.5 : 1} />
          <rect x={x} y={y} width={w} height="24" fill={accent ? G3 : G2} />
          <rect x={x + 10} y={y + 7} width={w * 0.5} height="6" fill={accent ? C : G5} />
          {Array.from({ length: rows }).map((_, ri) => {
            const ry = y + 24 + ri * 20;
            return (
              <g key={ri}>
                {ri % 2 === 0 && <rect x={x} y={ry} width={w} height="20" fill={G2} />}
                <rect x={x + 10} y={ry + 6} width="10" height="5" fill={ri === 0 ? C : G4} />
                <rect x={x + 26} y={ry + 6} width={w * 0.35} height="5" fill={G5} />
                <rect x={x + w * 0.55} y={ry + 6} width={w * 0.28} height="5" fill={G4} />
              </g>
            );
          })}
        </g>
      ))}
      <rect x="555" y="345" width="205" height="55" fill={G2} stroke={G3} strokeWidth="1" />
      <rect x="570" y="355" width="55" height="5" fill={C} />
      <rect x="570" y="366" width="170" height="4" fill={G4} />
      <rect x="570" y="376" width="140" height="4" fill={G3} />
      <rect x="570" y="386" width={120} height="6" fill={G3} />
      <rect x="570" y="386" width={85} height="6" fill={C} />
    </g>
  );
}

function IllIncidentTimeline() {
  const stages = [
    { x: 80, h: 38 },
    { x: 230, h: 52 },
    { x: 380, h: 68 },
    { x: 530, h: 42 },
    { x: 680, h: 28 },
  ];
  return (
    <g>
      <line x1="55" y1="210" x2="745" y2="210" stroke={G4} strokeWidth="2.5" />
      {stages.map(({ x, h }, i) => (
        <g key={i}>
          <line x1={x} y1={210 - h} x2={x} y2="210" stroke={i === 2 ? C : G5} strokeWidth="2" />
          <rect x={x - 7} y={203} width="14" height="14" fill={i === 2 ? C : G5} />
          <rect x={x - 55} y={210 - h - 52} width="110" height="48" fill={G2} stroke={i === 2 ? C : G3} strokeWidth="1.5" />
          <rect x={x - 42} y={210 - h - 42} width="72" height="6" fill={i === 2 ? C : G5} />
          <rect x={x - 42} y={210 - h - 30} width="55" height="5" fill={G4} />
          <rect x={x - 42} y={210 - h - 20} width="80" height="5" fill={G3} />
          <rect x={x - 28} y="228" width="56" height="5" fill={G4} />
        </g>
      ))}
      {[0,1,2,3].map(i => (
        <polygon key={i} points={`${stages[i].x + 55},207 ${stages[i].x + 67},210 ${stages[i].x + 55},213`}
          fill={G5} />
      ))}
      <circle cx="700" cy="62" r="42" fill="none" stroke={G3} strokeWidth="8" />
      <circle cx="700" cy="62" r="42" fill="none" stroke={C} strokeWidth="8"
        strokeDasharray="165 264" strokeLinecap="butt" transform="rotate(-90 700 62)" />
      <line x1="700" y1="62" x2="700" y2="44" stroke={C} strokeWidth="2" />
      <line x1="700" y1="62" x2="716" y2="67" stroke={G6} strokeWidth="1.5" />
      <rect x="55" y="260" width="690" height="75" fill={G1} stroke={G3} strokeWidth="1" />
      {[0,1,2,3,4].map(i => (
        <g key={i}>
          <rect x={75 + i * 132} y="272" width="110" height="50" fill={G2} stroke={G3} strokeWidth="0.8" />
          <rect x={75 + i * 132} y="272" width="4" height="50" fill={i === 0 ? C : G5} />
          <rect x={89 + i * 132} y="280" width="55" height="5" fill={G5} />
          <rect x={89 + i * 132} y="293" width="80" height="8" fill={i === 0 ? C : G4} />
          <rect x={89 + i * 132} y="306" width="45" height="4" fill={G3} />
        </g>
      ))}
      {[355, 375].map((y, i) => (
        <g key={i}>
          <rect x="55" y={y} width="690" height="18" fill={i === 0 ? G2 : "transparent"} />
          <rect x="70" y={y + 5} width="50" height="5" fill={G5} />
          <rect x="135" y={y + 5} width="70" height="5" fill={G4} />
          <rect x="225" y={y + 5} width="40" height="5" fill={G3} />
        </g>
      ))}
    </g>
  );
}

function IllServiceCatalog() {
  return (
    <g>
      <rect x="115" y="22" width="570" height="32" fill={G2} stroke={G3} strokeWidth="1.5" />
      <rect x="130" y="32" width="15" height="10" fill={G5} />
      <rect x="155" y="34" width="200" height="5" fill={G4} />
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={75 + i * 132} y="68" width="115" height="22" fill={i === 0 ? G3 : G2}
          stroke={i === 0 ? C : G3} strokeWidth={i === 0 ? 1.5 : 0.5} />
      ))}
      {[0,1,2,3,4].map(i => (
        <rect key={`l${i}`} x={92 + i * 132} y="75" width="65" height="5" fill={i === 0 ? C : G5} />
      ))}
      {Array.from({ length: 9 }).map((_, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const cx = 115 + col * 220;
        const cy = 105 + row * 96;
        return (
          <g key={i}>
            <rect x={cx} y={cy} width="200" height="82" fill={G1} stroke={G3} strokeWidth="1" />
            <rect x={cx + 12} y={cy + 10} width="28" height="28" fill={G3} stroke={G4} strokeWidth="0.8" />
            <rect x={cx + 18} y={cy + 16} width="16" height="16" fill={i === 0 ? C : G5} />
            <rect x={cx + 50} y={cy + 13} width="120" height="7" fill={G6} />
            <rect x={cx + 50} y={cy + 26} width="130" height="5" fill={G4} />
            <rect x={cx + 50} y={cy + 36} width="90" height="4" fill={G3} />
            <rect x={cx + 120} y={cy + 54} width="65" height="17" fill={i === 0 ? C : G4}
              stroke={i === 0 ? C : G5} strokeWidth="0.8" />
            <rect x={cx + 12} y={cy + 58} width="50" height="10" fill={G2} />
          </g>
        );
      })}
    </g>
  );
}

function IllTopologyMap() {
  const devices: { x: number; y: number; type: string; active: boolean }[] = [
    { x: 400, y: 48, type: "cloud", active: true },
    { x: 250, y: 130, type: "firewall", active: false },
    { x: 550, y: 130, type: "firewall", active: true },
    { x: 150, y: 228, type: "router", active: false },
    { x: 400, y: 210, type: "router", active: false },
    { x: 650, y: 228, type: "router", active: true },
    { x: 80, y: 325, type: "switch", active: false },
    { x: 220, y: 325, type: "switch", active: false },
    { x: 360, y: 325, type: "switch", active: false },
    { x: 500, y: 325, type: "switch", active: false },
    { x: 640, y: 325, type: "switch", active: true },
    { x: 720, y: 325, type: "server", active: false },
  ];
  const links: [number, number][] = [
    [0,1],[0,2],[1,3],[1,4],[2,4],[2,5],[3,6],[3,7],[4,8],[4,9],[5,10],[5,11],
  ];
  return (
    <g>
      {links.map(([a, b], i) => (
        <line key={i} x1={devices[a].x} y1={devices[a].y + 15} x2={devices[b].x} y2={devices[b].y - 15}
          stroke={G4} strokeWidth="1.5" />
      ))}
      {[[0,2],[2,5],[5,10]].map(([a,b], i) => (
        <line key={`hp${i}`} x1={devices[a].x} y1={devices[a].y + 15} x2={devices[b].x} y2={devices[b].y - 15}
          stroke={C} strokeWidth="3" />
      ))}
      {devices.map(({ x, y, type, active }, i) => {
        const sz = type === "cloud" ? 30 : type === "firewall" ? 22 : 18;
        return (
          <g key={i}>
            {active && <rect x={x - sz - 6} y={y - sz - 6} width={(sz + 6) * 2} height={(sz + 6) * 2} fill={G2} />}
            {type === "cloud" ? (
              <path d={`M${x-22} ${y+8} Q${x-28} ${y-12} ${x-8} ${y-16} Q${x-4} ${y-26} ${x+4} ${y-22} Q${x+18} ${y-30} ${x+22} ${y-12} Q${x+30} ${y-4} ${x+22} ${y+8} Z`}
                fill={active ? G3 : G2} stroke={active ? C : G5} strokeWidth="1.5" />
            ) : (
              <rect x={x - sz} y={y - sz} width={sz * 2} height={sz * 2}
                fill={active ? G3 : G2} stroke={active ? C : G4} strokeWidth={active ? 2 : 1} />
            )}
            {type === "router" && <>
              <line x1={x - 7} y1={y} x2={x + 7} y2={y} stroke={active ? C : G5} strokeWidth="2" />
              <line x1={x} y1={y - 7} x2={x} y2={y + 7} stroke={active ? C : G5} strokeWidth="2" />
            </>}
            {type === "switch" && <>
              <rect x={x - 10} y={y - 3} width="20" height="6" fill={active ? C : G5} />
              {[-5, 0, 5].map((dx, j) => (
                <rect key={j} x={x + dx - 2} y={y - 10} width="4" height="4" fill={active ? C : G5} />
              ))}
            </>}
            {type === "firewall" && <>
              {[-5, 0, 5].map((dy, j) => (
                <line key={j} x1={x - 8} y1={y + dy} x2={x + 8} y2={y + dy} stroke={active ? C : G5} strokeWidth="1" />
              ))}
            </>}
            {type === "server" && <>
              {[0, 1, 2].map(j => (
                <rect key={j} x={x - 10} y={y - 10 + j * 8} width="20" height="6" fill={G4} />
              ))}
            </>}
            <circle cx={x + sz - 2} cy={y - sz + 2} r="3" fill={active ? C : G4} />
          </g>
        );
      })}
      <rect x="55" y="370" width="690" height="28" fill={G2} />
      {["Router", "Switch", "Firewall", "Server", "Cloud"].map((t, i) => (
        <g key={t}>
          <rect x={75 + i * 132} y="377" width="10" height="10" fill={i === 0 ? C : G5} />
          <text x={92 + i * 132} y="386" fill={G6} fontSize="9" fontFamily="system-ui, sans-serif">{t}</text>
        </g>
      ))}
    </g>
  );
}

function IllCostDashboard() {
  return (
    <g>
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={55 + i * 178} y="30" width="160" height="60" fill={G2} stroke={G3} strokeWidth="1" />
          <rect x={67 + i * 178} y="42" width="55" height="5" fill={G5} />
          <rect x={67 + i * 178} y="54" width="85" height="9" fill={i === 0 ? C : G5} />
          <polygon points={`${190 + i * 178},${i % 2 === 0 ? 48 : 62} ${197 + i * 178},${i % 2 === 0 ? 62 : 48} ${204 + i * 178},${i % 2 === 0 ? 48 : 62}`}
            fill={i === 0 ? C : G5} />
          <rect x={67 + i * 178} y="72" width="65" height="4" fill={G4} />
        </g>
      ))}
      <circle cx="175" cy="200" r="62" fill="none" stroke={G3} strokeWidth="28" />
      <circle cx="175" cy="200" r="62" fill="none" stroke={C} strokeWidth="28"
        strokeDasharray="135 390" strokeLinecap="butt" transform="rotate(-90 175 200)" />
      <circle cx="175" cy="200" r="62" fill="none" stroke={G5} strokeWidth="28"
        strokeDasharray="78 390" strokeDashoffset="-135" strokeLinecap="butt" transform="rotate(-90 175 200)" />
      <circle cx="175" cy="200" r="62" fill="none" stroke={G4} strokeWidth="28"
        strokeDasharray="55 390" strokeDashoffset="-213" strokeLinecap="butt" transform="rotate(-90 175 200)" />
      <circle cx="175" cy="200" r="36" fill={BG} />
      <rect x="155" y="194" width="40" height="10" fill={C} />
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="80" y={278 + i * 20} width="10" height="10" fill={[C, G5, G4, G3][i]} />
          <rect x="98" y={280 + i * 20} width="78" height="5" fill={G5} />
          <rect x="192" y={280 + i * 20} width="35" height="5" fill={G4} />
        </g>
      ))}
      <rect x="285" y="112" width="460" height="195" fill={G1} stroke={G3} strokeWidth="1" />
      {[0,1,2,3].map(i => (
        <line key={i} x1="285" y1={155 + i * 40} x2="745" y2={155 + i * 40} stroke={G3} strokeWidth="0.5" />
      ))}
      <path d="M305 290 L355 270 L405 262 L455 242 L505 248 L555 222 L605 214 L655 228 L705 205 L745 210 L745 307 L305 307 Z"
        fill={G3} />
      <polyline points="305,290 355,270 405,262 455,242 505,248 555,222 605,214 655,228 705,205 745,210"
        fill="none" stroke={C} strokeWidth="2.5" strokeLinecap="square" />
      <polyline points="305,275 355,272 405,268 455,264 505,260 555,256 605,252 655,248 705,244 745,240"
        fill="none" stroke={G5} strokeWidth="1.5" strokeDasharray="6 4" />
      <rect x="285" y="328" width="460" height="68" fill={G1} stroke={G3} strokeWidth="1" />
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={305 + i * 148} y="340" width="125" height="42" fill={G2} stroke={G3} strokeWidth="0.5" />
          <rect x={317 + i * 148} y="350" width="52" height="5" fill={G5} />
          <rect x={317 + i * 148} y="362" width="85" height="8" fill={i === 0 ? C : G4} />
        </g>
      ))}
    </g>
  );
}

function IllSlaGauge() {
  const gauges = [
    { cx: 200, cy: 148, r: 68, value: 0.85 },
    { cx: 420, cy: 148, r: 68, value: 0.95 },
    { cx: 640, cy: 148, r: 68, value: 0.72 },
  ];
  return (
    <g>
      {gauges.map(({ cx, cy, r, value }, i) => {
        const circ = Math.PI * r;
        const dash = circ * value;
        return (
          <g key={i}>
            <path d={`M${cx - r} ${cy} A${r} ${r} 0 0 1 ${cx + r} ${cy}`}
              fill="none" stroke={G3} strokeWidth="12" />
            <path d={`M${cx - r} ${cy} A${r} ${r} 0 0 1 ${cx + r} ${cy}`}
              fill="none" stroke={i === 1 ? C : G5} strokeWidth="12"
              strokeDasharray={`${dash} ${circ}`} />
            <rect x={cx - 26} y={cy - 8} width="52" height="16" fill={i === 1 ? C : G4} />
            <rect x={cx - 38} y={cy + 18} width="76" height="6" fill={G5} />
            <rect x={cx - 28} y={cy + 30} width="56" height="5" fill={G4} />
          </g>
        );
      })}
      <rect x="55" y="232" width="690" height="165" fill={G1} stroke={G3} strokeWidth="1" />
      <rect x="55" y="232" width="690" height="26" fill={G2} />
      {[75, 195, 335, 475, 595].map((x, i) => (
        <rect key={i} x={x} y="240" width={[88,100,100,80,100][i]} height="6" fill={G5} />
      ))}
      {[0,1,2,3,4].map(i => (
        <g key={i}>
          <rect x="55" y={258 + i * 28} width="690" height="28" fill={i % 2 === 0 ? G2 : "transparent"} />
          <rect x="75" y={266 + i * 28} width="70" height="5" fill={G5} />
          <rect x="195" y={266 + i * 28} width="85" height="5" fill={G4} />
          <rect x="335" y={264 + i * 28} width="100" height="9" fill={G3} />
          <rect x="335" y={264 + i * 28} width={[92, 98, 85, 95, 88][i]} height="9"
            fill={i === 1 ? C : G5} />
          <rect x="475" y={266 + i * 28} width="55" height="5" fill={G4} />
          <rect x="615" y={264 + i * 28} width="55" height="9" fill={[G5, C, G4, G5, G4][i]} />
        </g>
      ))}
    </g>
  );
}

function IllPipelineCicd() {
  const stages = [
    { x: 78, w: 115, active: true },
    { x: 225, w: 115, active: true },
    { x: 372, w: 115, active: true },
    { x: 519, w: 115, active: false },
    { x: 666, w: 95, active: false },
  ];
  return (
    <g>
      <rect x="35" y="18" width="730" height="38" fill={G2} stroke={G3} strokeWidth="1" />
      <rect x="50" y="30" width="78" height="7" fill={C} />
      <rect x="145" y="30" width="55" height="7" fill={G5} />
      <rect x="700" y="27" width="45" height="14" fill={C} />
      {stages.map(({ x, w, active }, i) => (
        <g key={i}>
          <rect x={x} y="75" width={w} height="72" fill={active ? G2 : G1}
            stroke={active ? G5 : G3} strokeWidth={active ? 1.5 : 1} />
          <rect x={x} y="75" width={w} height="20" fill={active ? G3 : G2} />
          <rect x={x + 10} y="81" width={w * 0.45} height="5" fill={active ? C : G5} />
          <rect x={x + 10} y="102" width={w - 20} height="7" fill={active ? G5 : G4} />
          <rect x={x + 10} y="116" width={w * 0.55} height="5" fill={G4} />
          <rect x={x + 10} y="130" width="38" height="4" fill={G3} />
          <rect x={x} y="73" width={active ? w : w * 0.3} height="2" fill={active ? C : G4} />
          {i < 4 && (
            <g>
              <line x1={x + w} y1="111" x2={stages[i+1].x} y2="111"
                stroke={active ? G5 : G3} strokeWidth="1.5" />
              <polygon points={`${stages[i+1].x - 7},107 ${stages[i+1].x},111 ${stages[i+1].x - 7},115`}
                fill={active ? G5 : G3} />
            </g>
          )}
        </g>
      ))}
      <rect x="55" y="168" width="690" height="115" fill={G1} stroke={G3} strokeWidth="1" />
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={75 + i * 168} y="180" width="145" height="88" fill={G2} stroke={G3} strokeWidth="1" />
          <circle cx={95 + i * 168} cy="200" r="7" fill={[C, G5, C, G4][i]} />
          <rect x={110 + i * 168} y="196" width="78" height="6" fill={G5} />
          <rect x={110 + i * 168} y="208" width="52" height="5" fill={G4} />
          <rect x={85 + i * 168} y="232" width="120" height="6" fill={G3} />
          <rect x={85 + i * 168} y="232" width={[120, 92, 120, 38][i]} height="6"
            fill={[C, G5, C, G4][i]} />
          <rect x={85 + i * 168} y="246" width="38" height="4" fill={G3} />
        </g>
      ))}
      <rect x="55" y="302" width="335" height="95" fill={G2} stroke={G3} strokeWidth="1" />
      <rect x="67" y="312" width="65" height="6" fill={C} />
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x="67" y={328 + i * 20} width="12" height="10" fill={G4} />
          <rect x="87" y={330 + i * 20} width={115 + i * 18} height="5" fill={G4} />
          <rect x="275" y={330 + i * 20} width="40" height="5" fill={G3} />
        </g>
      ))}
      <rect x="410" y="302" width="335" height="95" fill={G2} stroke={G3} strokeWidth="1" />
      <rect x="422" y="312" width="78" height="6" fill={G6} />
      <line x1="430" y1="338" x2="725" y2="338" stroke={G3} strokeWidth="1.5" />
      {[0,1,2,3,4,5].map(i => (
        <circle key={i} cx={440 + i * 52} cy="338" r="5" fill={[C, G5, C, G5, G4, G3][i]} />
      ))}
    </g>
  );
}

/* ══════════════════════════════════════════════════════════════
   IllAssetInventory — ITAM Dashboard
   Asset discovery, inventory grid, lifecycle stages, license
   compliance, CMDB relationships, cost optimization
   ══════════════════════════════════════════════════════════════ */
function IllAssetInventory() {
  return (
    <g>
      {/* ── Left Panel: Asset Inventory Dashboard ── */}
      <rect x="30" y="18" width="310" height="385" fill={G1} stroke={G3} strokeWidth="1.5" />
      {/* Panel header */}
      <rect x="30" y="18" width="310" height="28" fill={G2} />
      <rect x="44" y="26" width="75" height="6" fill={C} />
      <rect x="130" y="26" width="50" height="6" fill={G5} />
      {/* Asset count KPIs */}
      {[0,1,2].map(i => (
        <g key={`kpi-${i}`}>
          <rect x={42 + i * 98} y="56" width="88" height="42" fill={G2} stroke={G3} strokeWidth="0.8" />
          <rect x={52 + i * 98} y="64" width="38" height="5" fill={G5} />
          <rect x={52 + i * 98} y="76" width="55" height="10" fill={i === 0 ? C : G4} />
        </g>
      ))}
      {/* Hardware inventory grid */}
      <rect x="42" y="108" width="135" height="18" fill={G3} />
      <rect x="50" y="112" width="60" height="6" fill={C} />
      {Array.from({ length: 6 }).map((_, i) => {
        const row = Math.floor(i / 2);
        const col = i % 2;
        return (
          <g key={`hw-${i}`}>
            <rect x={42 + col * 70} y={130 + row * 38} width="64" height="32" fill={G2} stroke={G3} strokeWidth="0.8" />
            {/* Device icon */}
            <rect x={50 + col * 70} y={136 + row * 38} width="14" height="10" fill={i === 0 ? C : G5} />
            <rect x={50 + col * 70} y={150 + row * 38} width="48" height="4" fill={G4} />
          </g>
        );
      })}
      {/* Software inventory grid */}
      <rect x="185" y="108" width="145" height="18" fill={G3} />
      <rect x="193" y="112" width="65" height="6" fill={G6} />
      {Array.from({ length: 6 }).map((_, i) => {
        const row = Math.floor(i / 2);
        const col = i % 2;
        return (
          <g key={`sw-${i}`}>
            <rect x={185 + col * 75} y={130 + row * 38} width="68" height="32" fill={G2} stroke={G3} strokeWidth="0.8" />
            {/* License status */}
            <circle cx={197 + col * 75} cy={140 + row * 38} r="4" fill={i < 3 ? C : G5} />
            <rect x={207 + col * 75} y={137 + row * 38} width="38" height="5" fill={G5} />
            <rect x={195 + col * 75} y={150 + row * 38} width="50" height="4" fill={G4} />
          </g>
        );
      })}
      {/* Compliance meter */}
      <rect x="42" y="248" width="286" height="48" fill={G2} stroke={G3} strokeWidth="0.8" />
      <rect x="52" y="255" width="65" height="5" fill={G6} />
      <rect x="52" y="268" width="266" height="10" fill={G3} />
      <rect x="52" y="268" width="228" height="10" fill={C} />
      <rect x="52" y="282" width="40" height="4" fill={G5} />
      {/* Asset table rows */}
      <rect x="42" y="304" width="286" height="20" fill={G3} />
      <rect x="50" y="309" width="30" height="5" fill={G6} />
      <rect x="90" y="309" width="40" height="5" fill={G6} />
      <rect x="145" y="309" width="35" height="5" fill={G6} />
      <rect x="195" y="309" width="40" height="5" fill={G6} />
      <rect x="250" y="309" width="35" height="5" fill={G6} />
      {[0,1,2,3].map(i => (
        <g key={`row-${i}`}>
          <rect x="42" y={324 + i * 18} width="286" height="18" fill={i % 2 === 0 ? G2 : "transparent"} />
          <rect x="50" y={329 + i * 18} width="25" height="5" fill={G5} />
          <rect x="90" y={329 + i * 18} width="35" height="5" fill={G4} />
          <rect x="145" y={329 + i * 18} width="28" height="5" fill={G4} />
          <circle cx="210" cy={332 + i * 18} r="3.5" fill={i < 2 ? C : G5} />
          <rect x="250" y={329 + i * 18} width="30" height="5" fill={G3} />
        </g>
      ))}

      {/* ── Center: Lifecycle Flow (vertical) ── */}
      <line x1="465" y1="30" x2="465" y2="395" stroke={G4} strokeWidth="2" />
      {/* Lifecycle stages */}
      {[
        { y: 40, label: "PROCURE", active: true },
        { y: 128, label: "DEPLOY", active: true },
        { y: 216, label: "MAINTAIN", active: true },
        { y: 304, label: "RETIRE", active: false },
      ].map(({ y, label, active }, i) => (
        <g key={`lc-${i}`}>
          {/* Stage marker */}
          <rect x="455" y={y} width="20" height="20" fill={active ? C : G4} />
          {/* Stage card */}
          <rect x="360" y={y - 5} width="85" height="72" fill={G2} stroke={active ? C : G3} strokeWidth={active ? 1.5 : 1} />
          <rect x="372" y={y + 6} width="60" height="6" fill={active ? C : G5} />
          <rect x="372" y={y + 18} width="55" height="4" fill={G4} />
          <rect x="372" y={y + 28} width="48" height="4" fill={G3} />
          {/* Progress bar */}
          <rect x="372" y={y + 42} width="60" height="5" fill={G3} />
          <rect x="372" y={y + 42} width={[60, 48, 35, 12][i]} height="5" fill={active ? C : G4} />
          {/* Status text placeholder */}
          <rect x="372" y={y + 54} width="35" height="4" fill={G4} />
          {/* Right connector */}
          <line x1="475" y1={y + 10} x2="510" y2={y + 10}
            stroke={active ? C : G3} strokeWidth="1.5" strokeDasharray="4 3" />
        </g>
      ))}
      {/* Flow arrows between stages */}
      {[0,1,2].map(i => (
        <polygon key={`arrow-${i}`}
          points={`461,${78 + i * 88} 465,${88 + i * 88} 469,${78 + i * 88}`}
          fill={i < 2 ? C : G5} />
      ))}

      {/* ── Right Panel: Discovery + CMDB + Cost ── */}
      {/* Discovery scan radar */}
      <rect x="520" y="18" width="250" height="125" fill={G1} stroke={G3} strokeWidth="1" />
      <rect x="520" y="18" width="250" height="22" fill={G2} />
      <rect x="532" y="24" width="72" height="6" fill={C} />
      {/* Radar circles */}
      <circle cx="645" cy="90" r="40" fill="none" stroke={G3} strokeWidth="1" />
      <circle cx="645" cy="90" r="27" fill="none" stroke={G3} strokeWidth="0.8" />
      <circle cx="645" cy="90" r="14" fill="none" stroke={G4} strokeWidth="0.5" />
      <circle cx="645" cy="90" r="3" fill={C} />
      {/* Scan sweep line */}
      <line x1="645" y1="90" x2="680" y2="65" stroke={C} strokeWidth="1.5" />
      {/* Discovered devices */}
      {[[625,68],[660,75],[638,105],[670,100],[620,95]].map(([x,y], i) => (
        <rect key={`dev-${i}`} x={x-3} y={y-3} width="6" height="6" fill={i < 3 ? C : G5} />
      ))}
      {/* Discovery stats */}
      <rect x="532" y="50" width="80" height="28" fill={G2} stroke={G3} strokeWidth="0.5" />
      <rect x="540" y="56" width="35" height="5" fill={G5} />
      <rect x="540" y="66" width="55" height="7" fill={C} />
      <rect x="532" y="85" width="80" height="28" fill={G2} stroke={G3} strokeWidth="0.5" />
      <rect x="540" y="91" width="42" height="5" fill={G5} />
      <rect x="540" y="101" width="48" height="7" fill={G4} />

      {/* CMDB Relationship Map */}
      <rect x="520" y="152" width="250" height="120" fill={G1} stroke={G3} strokeWidth="1" />
      <rect x="520" y="152" width="250" height="22" fill={G2} />
      <rect x="532" y="158" width="55" height="6" fill={G6} />
      {/* CI nodes */}
      {[
        [590, 205], [645, 190], [700, 205], [620, 240], [670, 240],
      ].map(([x, y], i) => (
        <g key={`ci-${i}`}>
          <rect x={x-12} y={y-10} width="24" height="20" fill={i === 1 ? G3 : G2}
            stroke={i === 1 ? C : G4} strokeWidth={i === 1 ? 1.5 : 0.8} />
          <rect x={x-6} y={y-4} width="12" height="4" fill={i === 1 ? C : G5} />
        </g>
      ))}
      {/* CI relationship lines */}
      <line x1="602" y1="205" x2="633" y2="195" stroke={G5} strokeWidth="1" />
      <line x1="657" y1="195" x2="688" y2="205" stroke={G5} strokeWidth="1" />
      <line x1="633" y1="200" x2="620" y2="230" stroke={C} strokeWidth="1.5" />
      <line x1="657" y1="200" x2="670" y2="230" stroke={G5} strokeWidth="1" />
      <line x1="632" y1="240" x2="658" y2="240" stroke={G4} strokeWidth="1" />

      {/* Cost Optimization Panel */}
      <rect x="520" y="282" width="250" height="120" fill={G1} stroke={G3} strokeWidth="1" />
      <rect x="520" y="282" width="250" height="22" fill={G2} />
      <rect x="532" y="288" width="68" height="6" fill={G6} />
      {/* Savings bars */}
      {[0,1,2,3,4].map(i => (
        <g key={`cost-${i}`}>
          <rect x="540" y={314 + i * 16} width="150" height="10" fill={G3} />
          <rect x="540" y={314 + i * 16} width={[120, 95, 135, 80, 110][i]} height="10"
            fill={i === 0 || i === 2 ? C : G5} />
          <rect x="700" y={315 + i * 16} width="45" height="6" fill={G4} />
        </g>
      ))}
    </g>
  );
}

/* ── Illustration picker ── */
const ILLUSTRATIONS: Record<IllustrationType, () => React.JSX.Element> = {
  "network-graph": IllNetworkGraph,
  "server-stack": IllServerStack,
  "cloud-arch": IllCloudArch,
  "dashboard-panel": IllDashboardPanel,
  "ticket-pipeline": IllTicketPipeline,
  "alert-system": IllAlertSystem,
  "shield-check": IllShieldCheck,
  "brain-neural": IllBrainNeural,
  "code-block": IllCodeBlock,
  "trophy-badge": IllTrophyBadge,
  "rocket-product": IllRocketProduct,
  "data-tree": IllDataTree,
  "globe-enterprise": IllGlobeEnterprise,
  "chart-analytics": IllChartAnalytics,
  "workflow-gear": IllWorkflowGear,
  "log-stream": IllLogStream,
  "api-endpoint": IllApiEndpoint,
  "container-grid": IllContainerGrid,
  "database-schema": IllDatabaseSchema,
  "incident-timeline": IllIncidentTimeline,
  "service-catalog": IllServiceCatalog,
  "topology-map": IllTopologyMap,
  "cost-dashboard": IllCostDashboard,
  "sla-gauge": IllSlaGauge,
  "pipeline-cicd": IllPipelineCicd,
  "asset-inventory": IllAssetInventory,
};

/* ══════════════════════════════════════════════════════════════
   FeaturedImageSVG — Pure black flat background
   800x450, sharp corners, no patterns, no gradients, no glow
   Bottom metrics bar with 3 contextual labels
   ══════════════════════════════════════════════════════════════ */

interface FeaturedImageSVGProps {
  entry: BlogImageEntry;
  id?: string;
}

export function FeaturedImageSVG({ entry, id }: FeaturedImageSVGProps) {
  const illustrationType = getIllustrationType(entry);
  const Illustration = ILLUSTRATIONS[illustrationType];
  const metrics = deriveMetrics(entry, illustrationType);

  return (
    <svg
      id={id}
      viewBox="0 0 800 450"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Pure flat black background */}
      <rect width="800" height="450" fill={BG} />

      {/* Full-canvas illustration */}
      <Illustration />

      {/* Bottom metrics bar */}
      <MetricsBar metrics={metrics} />

      {/* Top accent bar */}
      <rect x="0" y="0" width="800" height="2" fill={C} />
    </svg>
  );
}

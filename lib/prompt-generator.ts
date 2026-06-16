/* ── AI Image Prompt Generator ──
   Generates consistent SaaS-style image prompts for blog featured images.
   Template-based system with category-specific visual concept mapping.
*/

import type { BlogImageEntry, BlogImageCategory } from "@/data/blog-image-data";

/* ── Category → Visual Concept Map ── */
const CATEGORY_VISUALS: Record<BlogImageCategory, string> = {
  "Network Monitoring":
    "Network topology map with connected nodes, routers, switches, signal waves, real-time traffic flow indicators, latency graphs, and uptime dashboard panels",
  "ITSM":
    "Service desk interface with ticket queues, workflow pipelines, approval chains, SLA timers, kanban boards, and automated routing indicators",
  "IT Infrastructure":
    "Server rack visualization with hardware modules, CPU/memory gauges, storage arrays, power distribution, and capacity utilization meters",
  "Cloud Computing":
    "Cloud architecture diagram with multi-cloud layers, VPC boundaries, auto-scaling indicators, cost breakdown charts, and deployment pipelines",
  "Application Monitoring":
    "APM dashboard with response time charts, error rate heat maps, distributed traces, code-level profiling views, and user journey flows",
  "ObserveOps":
    "Unified observability console with correlated metrics/logs/traces panels, anomaly detection overlays, and root cause analysis tree",
  "ServiceOps":
    "Operations command center with incident timelines, escalation chains, change calendars, CMDB relationship maps, and automation workflows",
  "AIOps":
    "Neural network / AI brain visualization with data input streams, pattern recognition nodes, prediction outputs, and automated remediation flows",
  "Engineering":
    "Code editor / IDE interface with syntax-highlighted blocks, CI/CD pipeline stages, test coverage bars, and deployment status indicators",
  "Industry News":
    "Award podium / recognition graphic with trophy, star ratings, analyst quadrant chart, and achievement badges",
  "Product Updates":
    "Product launch graphic with rocket trajectory, feature cards radiating outward, version timeline, and changelog markers",
  "Network Management":
    "Network management console with device inventory grid, configuration diff view, firmware status indicators, and topology map",
};

/* ── Title → Specific Concept Keywords ── */
function extractConceptKeywords(entry: BlogImageEntry): string {
  const title = entry.title.toLowerCase();
  const excerpt = entry.excerpt.toLowerCase();
  const text = `${title} ${excerpt}`;

  const concepts: string[] = [];

  if (/snmp|protocol|oid|mib/i.test(text)) concepts.push("SNMP protocol flow diagrams, MIB trees, trap notifications");
  if (/dhcp|ip.address|ipam/i.test(text)) concepts.push("IP address allocation grids, DHCP handshake flow, address pools");
  if (/netflow|traffic|bandwidth/i.test(text)) concepts.push("Traffic flow visualizations, bandwidth utilization bars, packet analysis");
  if (/kubernetes|k8s|container|docker/i.test(text)) concepts.push("Container orchestration grid, pod lifecycle diagrams, cluster topology");
  if (/cloud.cost|cost.optim/i.test(text)) concepts.push("Cost breakdown pie charts, savings trend lines, resource utilization heat maps");
  if (/sla|slo|service.level/i.test(text)) concepts.push("SLA compliance gauges, breach prediction timelines, uptime percentages");
  if (/alert|fatigue|noise/i.test(text)) concepts.push("Alert notification bells, noise reduction funnel, severity classification matrix");
  if (/cmdb|asset|configuration/i.test(text)) concepts.push("Asset relationship graph, CI dependency map, discovery scan radars");
  if (/incident|mttr|downtime/i.test(text)) concepts.push("Incident timeline with stages, resolution clock, severity indicators");
  if (/security|patch|vulnerability|compliance/i.test(text)) concepts.push("Security shield layers, vulnerability scan results, compliance checkmarks");
  if (/roi|kpi|metric|analytic/i.test(text)) concepts.push("KPI scorecards, ROI trend charts, performance comparison matrices");
  if (/automation|workflow|orchestrat/i.test(text)) concepts.push("Workflow gear mechanisms, automation pipeline stages, trigger-action flows");
  if (/observability|monitoring/i.test(text)) concepts.push("Three pillars visualization (metrics/logs/traces), correlation arrows, unified dashboard");
  if (/aiops|ai|machine.learning|neural/i.test(text)) concepts.push("Neural network layers, AI prediction graphs, anomaly detection patterns");
  if (/log|syslog|event/i.test(text)) concepts.push("Log stream visualizations, event correlation lines, timestamp entries");
  if (/database|sql|query/i.test(text)) concepts.push("Database schema diagrams, query execution plans, connection pool indicators");
  if (/api|rest|endpoint/i.test(text)) concepts.push("API endpoint tree, request/response flow arrows, latency distribution");
  if (/vmware|virtual|hypervisor/i.test(text)) concepts.push("Virtual machine stack, hypervisor layer diagram, resource allocation bars");
  if (/aws|azure|gcp/i.test(text)) concepts.push("Cloud provider service icons, multi-cloud architecture, region availability map");
  if (/devops|ci.cd|pipeline/i.test(text)) concepts.push("CI/CD pipeline stages, build/test/deploy arrows, deployment status indicators");
  if (/microservice/i.test(text)) concepts.push("Microservice mesh topology, service-to-service communication arrows, circuit breakers");
  if (/wireless|wifi|access.point/i.test(text)) concepts.push("WiFi signal propagation waves, access point coverage zones, client connection indicators");
  if (/gartner|award|recogni/i.test(text)) concepts.push("Magic quadrant positioning, award medallion, analyst recognition badges");
  if (/msp|managed.service/i.test(text)) concepts.push("Multi-tenant dashboard panels, client health overview grid, white-label interface");
  if (/opentelemetry|instrumentation/i.test(text)) concepts.push("Telemetry data flow diagram, SDK instrumentation points, collector pipeline");
  if (/nagios|zabbix|solarwinds|prtg|dynatrace/i.test(text)) concepts.push("Tool comparison matrix, feature radar chart, migration path arrows");
  if (/capacity|scaling|performance/i.test(text)) concepts.push("Capacity planning timeline, scaling threshold indicators, performance curve");
  if (/change|release|enablement/i.test(text)) concepts.push("Change approval workflow, release calendar, risk assessment matrix");
  if (/problem|root.cause/i.test(text)) concepts.push("Root cause analysis fishbone diagram, problem trend chart, known error database");
  if (/service.catalog|self.service/i.test(text)) concepts.push("Service catalog grid, request form templates, fulfillment workflow");
  if (/noc|operations.center/i.test(text)) concepts.push("NOC wall display, multi-screen monitoring layout, escalation chain");
  if (/topology|mapping|dependency/i.test(text)) concepts.push("Network topology visualization, dependency tree, relationship mapping");

  return concepts.length > 0 ? concepts.join("; ") : "Abstract IT operations dashboard with monitoring panels and data flows";
}

/* ── Master Prompt Generator ── */
export function generateImagePrompt(entry: BlogImageEntry): string {
  const categoryVisual = CATEGORY_VISUALS[entry.category];
  const conceptKeywords = extractConceptKeywords(entry);

  return `Create a modern SaaS-style feature image in 16:9 aspect ratio (800x450).

Theme:
${entry.title}

Concept:
${entry.excerpt}

Design Style:
- Clean SaaS UI illustration
- Monochromatic color palette (light grey / white base)
- Accent color: #F17463 (subtle highlights only)
- Soft shadows and depth
- Minimal and futuristic design
- ITSM / Observability / APM inspired visuals

Visual Elements:
- ${categoryVisual}
- ${conceptKeywords}
- Abstract dashboard UI panels
- Graphs, logs, metrics, or system flows
- Network nodes / pipelines / monitoring visuals
- Transformation from complexity to clarity

Branding:
- Use geometric grid pattern subtly in background (Motadata brand pinwheel mark repeated)
- Pattern fades from top (visible) to bottom (transparent)
- Avoid clutter, keep it premium

Lighting:
- Soft gradient background (light grey or 10% orange tint)
- Subtle glow effects using accent color #F17463

Composition:
- Full canvas illustration with no empty space
- Clean whitespace balanced with graphical density
- No text inside image
- Sharp vector edges, no rounded corners

Output:
- SVG format
- Sharp vector style
- Consistent with SaaS product branding
- 800x450 pixels, 16:9 aspect ratio`;
}

/* ── Export prompts as JSON ── */
export function exportPromptsAsJSON(entries: BlogImageEntry[]): string {
  const prompts = entries.map((entry) => ({
    id: entry.id,
    title: entry.title,
    slug: entry.slug,
    category: entry.category,
    prompt: generateImagePrompt(entry),
  }));
  return JSON.stringify(prompts, null, 2);
}

/* ── Export prompts as plain text ── */
export function exportPromptsAsText(entries: BlogImageEntry[]): string {
  return entries
    .map(
      (entry) =>
        `━━━ #${entry.id} — ${entry.title} ━━━\n\n${generateImagePrompt(entry)}\n`
    )
    .join("\n\n");
}

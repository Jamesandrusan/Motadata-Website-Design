import {
  Network,
  BellRing,
  Boxes,
  ShieldCheck,
  Headphones,
  Activity,
  LayoutGrid,
  Headset,
  Building2,
  Users,
  MapPin,
  Eye,
  Zap,
  Clock,
  Archive,
  type LucideIcon,
} from "lucide-react";

/* ── Shared, public-safe data for every Nuvoco case study variant ── */

export const company = {
  name: "Nuvoco Vistas",
  legal: "Nuvoco Vistas Corporation Limited",
  title:
    "Integrating Infrastructure Monitoring & Service Management for a National Building Materials Group",
  deck: "How Nuvoco Vistas replaced a patchwork of applications with one Motadata platform that unifies infrastructure monitoring and IT service management across the organization.",
  descriptor:
    "One of India's largest building materials producers, active in cement, ready-mix concrete and modern building materials.",
  intro:
    "Nuvoco Vistas Corporation Limited is one of India's largest building materials producers, active across cement, ready-mix concrete, and modern building materials. As the business grew, so did its technology footprint: the IT function had become a patchwork of individual applications that made oversight difficult and slowed coordination between departments. Motadata replaced that setup with one platform spanning infrastructure and internal support.",
  logo: "/logos/success-stories/nuvoco.png",
  href: "/resources/success-stories/nuvoco",
};

/** Customer story video. PLACEHOLDER: youtubeId is the project's stand-in video (also used on
 *  the webinar watch page) only to preview the layout — replace it with the Nuvoco video's ID. */
export const video = {
  youtubeId: "dQw4w9WgXcQ",
  title: "Nuvoco Vistas on unifying IT operations with Motadata",
};

export const glance: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: Building2, label: "Industry", value: "Manufacturing (Building Materials)" },
  { icon: Users, label: "Company Size", value: "1,001–5,000 employees" },
  { icon: MapPin, label: "Region", value: "India" },
  { icon: LayoutGrid, label: "Products", value: "ObserveOps + ServiceOps" },
];

export const stats: { value: string; label: string; icon: LucideIcon }[] = [
  { value: "1,000", label: "Network Devices", icon: Network },
  { value: "5,000", label: "IT Assets Managed", icon: Boxes },
  { value: "4,100", label: "Assets Under Patching", icon: ShieldCheck },
  { value: "120", label: "Service Technicians", icon: Headphones },
];

export const challenges: { icon: LucideIcon; lead: string; text: string }[] = [
  { icon: Eye, lead: "Fragmented visibility", text: "Day-to-day visibility was split across disconnected tools." },
  { icon: Zap, lead: "Reactive to outages", text: "Network disruptions became visible only after users felt the impact." },
  { icon: Headphones, lead: "Context-poor requests", text: "Requests reached the help team without enough working context." },
  { icon: Clock, lead: "Manual overhead", text: "Repetitive administrative work absorbed much of each working day." },
  { icon: Archive, lead: "Scattered records", text: "Hardware and licensing records were kept in scattered local sheets." },
];

export const solutions: { icon: LucideIcon; lead: string; text: string }[] = [
  { icon: Network, lead: "Automatic discovery & monitoring", text: "Automatic discovery and ongoing monitoring of connected network devices across the estate." },
  { icon: BellRing, lead: "Severity-graded alerting", text: "Severity-graded fault alerts raised across the whole environment, the moment something drifts." },
  { icon: Headphones, lead: "Unified service desk", text: "Incident, problem, and change handling brought together on one service desk." },
  { icon: Boxes, lead: "Central asset inventory", text: "A single asset inventory maintained across the organization, with no more scattered sheets." },
  { icon: ShieldCheck, lead: "Scheduled patching", text: "Scheduled patch delivery to grouped, priority-ranked systems." },
];

export const results: { short: string; text: string }[] = [
  { short: "One screen, whole estate", text: "One screen now shows the whole environment at a glance." },
  { short: "Issues caught early", text: "Issues are caught and cleared before they interrupt daily operations." },
  { short: "Faster answers", text: "Staff get quicker answers to their everyday IT needs." },
  { short: "Less manual upkeep", text: "Less time goes to manual upkeep, and more to what matters most." },
  { short: "Every asset accounted for", text: "Every asset stays accounted for in a single trusted record." },
];

export const products: {
  name: string;
  tagline: string;
  description: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    name: "ObserveOps",
    tagline: "Unified infrastructure & network observability",
    description:
      "Auto-discovers the estate, tracks every connected device, and raises severity-graded alerts so issues surface before users feel them.",
    href: "/products/observeops",
    icon: Activity,
  },
  {
    name: "ServiceOps",
    tagline: "IT service management & asset control",
    description:
      "Runs incident, problem, and change on one service desk, backed by a central asset inventory and scheduled, priority-ranked patching.",
    href: "/products/serviceops",
    icon: Headset,
  },
];

/* Before / after framing used by comparison-style variants */
export const beforeAfter: { before: string; after: string }[] = [
  { before: "Visibility split across disconnected tools", after: "One screen shows the whole environment at a glance" },
  { before: "Outages noticed only after users complained", after: "Severity-graded alerts catch issues before impact" },
  { before: "Requests arrived without working context", after: "Incident, problem & change on one service desk" },
  { before: "Days lost to repetitive manual upkeep", after: "Automation frees time for higher-value work" },
  { before: "Assets tracked in scattered local sheets", after: "Every asset in a single trusted inventory" },
];

export const variantMeta = [
  { id: 1, label: "Editorial", hint: "TOC + long-form" },
  { id: 2, label: "Results-First", hint: "Metrics hero" },
  { id: 3, label: "Journey", hint: "Timeline story" },
  { id: 4, label: "Magazine", hint: "Split visual" },
  { id: 5, label: "Scorecard", hint: "Dashboard" },
  { id: 6, label: "Narrative", hint: "Site24x7 style" },
  { id: 7, label: "Enterprise", hint: "Full 18-section" },
];

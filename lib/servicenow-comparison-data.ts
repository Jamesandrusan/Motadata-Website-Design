/* =====================================================================
   Content data for the Motadata ServiceOps vs ServiceNow comparison page.
   Text is taken verbatim from the approved source copy. Only structure,
   status tags (for coloring), and grouping are added here.
   ===================================================================== */

export type CellStatus = "good" | "warn" | "bad";

export interface GlanceRow {
  aspect: string;
  servicenow: string;
  motadata: string;
}

export interface ModuleRow {
  capability: string;
  servicenow: { text: string; status: CellStatus };
  motadata: { text: string; status: CellStatus };
}

export interface DeepDivePoint {
  label: string;
  body: string;
}

export interface DeepDiveSection {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  servicenow: { heading: string; points: DeepDivePoint[] };
  motadata: { heading: string; points: DeepDivePoint[] };
  winner: { who: "motadata" | "servicenow" | "split"; label: string; verdict: string };
}

export interface FaqItem {
  q: string;
  a: string;
}

/* ── In-page navigation ──────────────────────────────────────────── */
export const sections = [
  { id: "tldr", label: "At a Glance" },
  { id: "overview", label: "Overview" },
  { id: "module-map", label: "Module Map" },
  { id: "deep-dive", label: "Deep Dive" },
  { id: "decision", label: "Final Verdict" },
  { id: "faq", label: "FAQ" },
];

/* ── TL;DR verdict cards ─────────────────────────────────────────── */
export const verdictCards = {
  servicenow: {
    name: "ServiceNow",
    body: "Best for large enterprises that need deep customization, agentic AI, and one platform spanning ITSM, IT operations, HR, and security. The cost and the implementation effort match that ambition.",
  },
  motadata: {
    name: "Motadata ServiceOps",
    body: "The better fit for mid-market and lower-enterprise IT teams that want certified ITIL service management, asset tracking, and patching in one place, running in weeks, without per-fulfiller pricing stacked on per-module pricing.",
  },
  note: "There is no single winner. The right pick depends on your team size, budget, deployment model, and how much of an enterprise platform you will genuinely use. If you are replacing an aging tool and want certified ITSM without ServiceNow-class cost, ServiceOps is worth a direct look, and you can book a ServiceOps demo and walk your own workflows through it before you decide.",
};

/* ── Quick-glance table ──────────────────────────────────────────── */
export const glanceRows: GlanceRow[] = [
  { aspect: "Best for", servicenow: "Large, complex enterprises", motadata: "Mid-market to lower enterprise" },
  { aspect: "Pricing model", servicenow: "Per fulfiller, per module, quote only", motadata: "Subscription, modular, transparent trial" },
  { aspect: "Free trial", servicenow: "None", motadata: "30-day free trial" },
  { aspect: "Deployment", servicenow: "SaaS; on-prem only via separate Private Stack process", motadata: "SaaS and on-premises, go live in weeks" },
  { aspect: "ITIL certification", servicenow: "ITIL-aligned, no equivalent accreditation", motadata: "PeopleCert ITIL 4 Tool Vendor Accreditation, 12 practices" },
  { aspect: "AI model", servicenow: "Now Assist bundled, metered assist pools, configuration to enable", motadata: "DFIT AI included, out of the box, no metering" },
  { aspect: "Patch management", servicenow: "Not part of ITSM", motadata: "Built in across Windows, Linux, macOS, and 30+ third-party apps" },
  { aspect: "MSP edition", servicenow: "No dedicated product; Domain Separation workaround", motadata: "Purpose-built MSP Edition, native multi-tenancy" },
  { aspect: "Gartner Peer Insights", servicenow: "4.4 stars", motadata: "4.5 stars" },
];

/* ── "What is" overview + method ─────────────────────────────────── */
export const overview = {
  motadata: {
    name: "What is Motadata ServiceOps?",
    body: [
      "Motadata ServiceOps is an AI-enabled, ITIL v4-aligned ITSM platform from Mindarray Systems. It brings service desk, IT asset management, and patch and package management together on one platform, with a shared CMDB and a shared AI engine.",
      "We built it on our DFIT deep learning framework, the same engine behind Motadata ObserveOps, so monitoring alerts and service tickets can connect end to end. It runs on-premises and in private or public cloud, and it holds PeopleCert ITIL 4 Tool Vendor Accreditation for 12 practices rather than a general claim of alignment.",
    ],
  },
  servicenow: {
    name: "What is ServiceNow ITSM?",
    body: [
      "ServiceNow is a cloud workflow platform that began in ITSM and grew into IT operations, HR, customer service, and security. Its ITSM product is mature and highly configurable, and it is the platform large enterprises reach for when they need to model complex processes across thousands of users.",
      "In April 2026, ServiceNow restructured ITSM into three AI-native tiers, Foundation, Advanced, and Prime, with AI bundled into each. If your research still references the old Standard, Pro, and Enterprise names, it is out of date.",
    ],
  },
  method: {
    title: "How we compared these two platforms",
    body: "A short note on method, because it changes how you should read what follows. We did not run a head-to-head lab test of ServiceNow, and we are not going to pretend we did. This comparison draws on three things: ServiceNow's published ITSM packaging and product documentation, third-party pricing analyses from 2026 (ServiceNow does not publish list prices), and verified user reviews on G2, TrustRadius, and Gartner Peer Insights. For the Motadata side, we use our own product documentation and certification listings. Where a figure is a marketed number or a third-party estimate, we label it, so you can weigh it for yourself instead of taking it on faith.",
  },
};

/* ── Module / capability map ─────────────────────────────────────── */
export const moduleIntro =
  'Most "vs" pages stop at a checklist. The useful question is not whether a box is ticked, but whether the capability is included or waiting behind a higher tier or a separate product. Here is the full module map with that in mind.';

export const moduleRows: ModuleRow[] = [
  { capability: "Incident Management", servicenow: { text: "Core, Foundation tier", status: "good" }, motadata: { text: "Core, included", status: "good" } },
  { capability: "Service Request Management", servicenow: { text: "Core, Foundation tier", status: "good" }, motadata: { text: "Core, included", status: "good" } },
  { capability: "Service Catalog", servicenow: { text: "Core, Foundation tier", status: "good" }, motadata: { text: "Core, included", status: "good" } },
  { capability: "Knowledge Management", servicenow: { text: "Core platform capability", status: "good" }, motadata: { text: "Core, included", status: "good" } },
  { capability: "CMDB / Configuration Management", servicenow: { text: "Core, Foundation tier", status: "good" }, motadata: { text: "Core, included", status: "good" } },
  { capability: "Asset Management", servicenow: { text: "ITAM is a separately licensed add-on (HAM plus SAM)", status: "warn" }, motadata: { text: "Core, included (IT, non-IT, consumables)", status: "good" } },
  { capability: "Problem Management", servicenow: { text: "Advanced tier, not Foundation", status: "warn" }, motadata: { text: "Core, included, ITIL 4 certified", status: "good" } },
  { capability: "Change Management", servicenow: { text: "Advanced tier, not Foundation", status: "warn" }, motadata: { text: "Core, included, ITIL 4 certified", status: "good" } },
  { capability: "Major Incident Management", servicenow: { text: "Advanced tier", status: "warn" }, motadata: { text: "Part of incident handling", status: "good" } },
  { capability: "Release Management", servicenow: { text: "Advanced or Prime (Digital Product Release)", status: "warn" }, motadata: { text: "Core, included, ITIL 4 certified", status: "good" } },
  { capability: "Project Management", servicenow: { text: "Separate product (Strategic Portfolio Management)", status: "bad" }, motadata: { text: "Core service desk pillar", status: "good" } },
  { capability: "Purchase Management", servicenow: { text: "Via separate ITAM and procurement", status: "warn" }, motadata: { text: "Core asset pillar", status: "good" } },
  { capability: "Contract Management", servicenow: { text: "Via separate ITAM and procurement", status: "warn" }, motadata: { text: "Core asset pillar", status: "good" } },
  { capability: "Patch and Package Management", servicenow: { text: "Not native; needs Tanium or SCCM via separate ITOM license", status: "bad" }, motadata: { text: "Core pillar (Windows, Linux, macOS, 30+ third-party apps)", status: "good" } },
  { capability: "Vulnerability to Patch", servicenow: { text: "Separate SecOps, ITOM, and third-party patch tool", status: "bad" }, motadata: { text: "Detect a CVE and deploy the patch in one interface", status: "good" } },
  { capability: "Remote Desktop and Endpoint Control", servicenow: { text: "No native remote desktop or USB device control; needs third-party tools", status: "bad" }, motadata: { text: "Native remote desktop, USB device control, Wake-on-LAN, remote lock, restart, and shutdown", status: "good" } },
  { capability: "CMDB Discovery and Service Mapping", servicenow: { text: "Paid ITOM Discovery and Service Mapping add-on", status: "warn" }, motadata: { text: "Multi-method discovery and service mapping included", status: "good" } },
  { capability: "SLA Penalty Management", servicenow: { text: "Not native; OLA and UC need extra configuration", status: "bad" }, motadata: { text: "Native fixed and cumulative penalty tracking, OLA and UC support", status: "good" } },
  { capability: "Reporting", servicenow: { text: "Jelly and JavaScript for complex reports; 180-day history limit", status: "warn" }, motadata: { text: "No-code builder, 12 dashboards, open to all technicians", status: "good" } },
  { capability: "Communication Channels", servicenow: { text: "Several need integration; Viber and Line unavailable", status: "warn" }, motadata: { text: "11+ native channels with cross-channel history", status: "good" } },
  { capability: "AI and Automation", servicenow: { text: "Now Assist bundled per tier, metered assist pools", status: "warn" }, motadata: { text: "DFIT AI included, out of the box, no metering", status: "good" } },
  { capability: "Process Mining / Workforce Optimization", servicenow: { text: "Advanced or Prime", status: "good" }, motadata: { text: "Not offered", status: "bad" } },
  { capability: "ITIL 4 certification", servicenow: { text: "ITIL-aligned, no equivalent accreditation", status: "warn" }, motadata: { text: "PeopleCert ITIL 4 accreditation, 12 practices", status: "good" } },
  { capability: "Gartner Peer Insights", servicenow: { text: "4.4 stars", status: "good" }, motadata: { text: "4.5 stars", status: "good" } },
  { capability: "Free trial", servicenow: { text: "None, quote only", status: "bad" }, motadata: { text: "30-day free trial", status: "good" } },
];

export const moduleTakeaway =
  "One pattern runs through that table. Capabilities that ServiceOps includes in the base platform tend to sit behind a higher tier, a separate module, or a paid add-on on the ServiceNow side. Problem and Change Management need the Advanced tier. Patch management, vulnerability remediation, CMDB discovery, and service mapping each need a separate product or ITOM license. Asset management is a licensed add-on suite. Release, project, purchase, and contract management are separate modules too.";

/* ── Detailed head-to-head sections ──────────────────────────────── */
export const deepDive: DeepDiveSection[] = [
  {
    id: "core-itsm",
    eyebrow: "Round 1",
    title: "Core ITSM",
    intro:
      "Both platforms cover incident, request, catalog, knowledge, problem, and change management. A service desk agent would feel at home in either. The differences are in how the processes are packaged, how tickets get routed, and whether the practices are certified.",
    servicenow: {
      heading: "Deep, unified process control across one platform and a single shared CMDB",
      points: [
        { label: "One data model", body: "Incidents, changes, problems, and requests run on a single platform and a single CMDB, so teams share context across every record." },
        { label: "Autonomous AI specialists", body: "AI specialists triage, investigate, and resolve routine incidents end to end, detect patterns, and route issues into problem management to cut repeats." },
        { label: "Omnichannel self-service", body: "Employees get help through EmployeeWorks, voice, chat, portal, Teams, Slack, or mobile, though channels like WhatsApp, Google Chat, and Facebook need integration, and Viber and Line are not available." },
        { label: "Packaging catch", body: "Foundation covers incident, request, catalog, asset, and CMDB. Problem and Change Management sit in the Advanced tier, so formal change control starts one step up the ladder." },
      ],
    },
    motadata: {
      heading: "Certified ITIL coverage, fully included from the very first entry tier",
      points: [
        { label: "Unified service desk", body: "Incident, service request, problem, change, release, project, and knowledge management are standard, not tier-gated." },
        { label: "Eleven-plus native channels", body: "Requests and chat arrive through WhatsApp, Telegram, Viber, Line, Facebook, Google Chat, Teams, Slack, SMS, email, and web, with cross-channel history and no per-channel integration to buy." },
        { label: "AI routing built in", body: "IntelliCore auto-classifies and routes tickets, predicts priority, and suggests resolutions, so triage does not sit on a human." },
        { label: "SLA penalty management", body: "Native fixed and cumulative penalty tracking with configurable cost, currency, and duration, plus full OLA and underpinning contract support." },
        { label: "No-code reporting", body: "A no-code report builder with tabular, matrix, summary, and query reports, 12 out-of-the-box dashboards, and access for every technician, not locked behind scripting." },
        { label: "Certified, not just aligned", body: "The processes hold PeopleCert ITIL 4 Tool Vendor Accreditation for 12 ITIL 4 practices, a stronger claim than alignment alone." },
      ],
    },
    winner: {
      who: "motadata",
      label: "Motadata ServiceOps",
      verdict:
        "For most IT teams, ServiceOps takes this one. Every core ITIL process, including Problem and Change, is independently certified under PeopleCert ITIL 4 accreditation and included from the entry point, with AI routing built in, so you are not climbing a tier to run formal change control. ServiceNow's process depth goes further, and at the largest, most customized desks that depth is the reason to pick it. For the majority of mid-market and lower-enterprise teams, ServiceOps covers the same practices with less cost and less setup.",
    },
  },
  {
    id: "asset-patch",
    eyebrow: "Round 2",
    title: "Asset, Patch, and Configuration Management",
    intro:
      "Both platforms give you a CMDB and asset management. The divergence is patching, and it is the sharpest module-level difference between the two.",
    servicenow: {
      heading: "Enterprise-grade scale, assembled one licensed module and add-on at a time",
      points: [
        { label: "One CMDB for everything", body: "Incidents, changes, problems, and requests consolidate on a single CMDB, and dependency data helps teams reduce self-inflicted outages." },
        { label: "Discovery costs extra", body: "CMDB discovery and service mapping are paid ITOM add-on modules, not part of the base ITSM packages." },
        { label: "Asset management as an add-on", body: "IT asset management is a separately licensed suite (hardware and software asset modules) at additional cost, and non-IT assets need an extension or customization." },
        { label: "No native patching", body: "OS and third-party patch deployment is not part of ServiceNow ITSM. To patch endpoints, you add a tool like Tanium or Microsoft SCCM through a separate ITOM license, and vulnerability remediation pulls in SecOps on top." },
        { label: "No endpoint control", body: "There is no native remote desktop and no USB device control, so remote support and endpoint actions depend on separate third-party tools." },
      ],
    },
    motadata: {
      heading: "Assets, discovery, configuration, and patching unified in a single pillar",
      points: [
        { label: "Full lifecycle asset visibility", body: "Hardware, software, non-IT, and consumable assets are tracked across a documented eight-stage lifecycle through automated discovery, with consumable stock thresholds, low-inventory alerts, and AI-based depletion forecasting." },
        { label: "Discovery and mapping included", body: "Multi-method discovery (agent, agentless, and credential-less via WMI, SSH, SNMP, and VMware) and service mapping are part of the base platform, and a shared CMDB maps CI dependencies so a change shows its blast radius before it ships." },
        { label: "Patch and deployment built in", body: "Patch management runs the full lifecycle, scanning, approval policies, relay servers, and registry deployments, across Windows, Linux, macOS, and 30+ third-party apps. Motadata reports 85 percent faster patch remediation (a marketed figure)." },
        { label: "Vulnerability to patch in one place", body: "Detect a CVE and deploy the patch from the same interface, without stitching together a vulnerability scanner, an automation layer, and a separate patch tool." },
        { label: "Remote desktop and endpoint control", body: "Native remote desktop with audio and video calling and file sharing, USB device control, Wake-on-LAN, remote lock, restart, and shutdown, plus prohibited-software auto-detection." },
        { label: "Procurement in the same pillar", body: "Purchase and contract management live alongside assets, where ServiceNow handles them as separate procurement capabilities." },
      ],
    },
    winner: {
      who: "motadata",
      label: "Motadata ServiceOps",
      verdict:
        "ServiceOps takes this one, and for most teams it is not close. Asset, CMDB, discovery, service mapping, purchase, contract, and patch all sit in the base platform, and the vulnerability-to-patch path runs in one interface. On the ServiceNow side, patching, discovery, mapping, and asset management each arrive as a separate licensed product or add-on. ServiceNow keeps the edge on CMDB depth at massive scale, but for everyone else the consolidation is a measurable saving, not a rounding error.",
    },
  },
  {
    id: "ai-automation",
    eyebrow: "Round 3",
    title: "AI and Automation",
    intro:
      "Both platforms now lead with agentic AI, so the question is no longer who has it. It is how deep it goes and what it does to your bill.",
    servicenow: {
      heading: "Broad, autonomous agentic AI reaching across the entire platform",
      points: [
        { label: "Autonomous AI specialists", body: "resolve routine requests end-to-end, toward zero-touch service." },
        { label: "Now Assist bundled in every tier,", body: "with the most autonomous agents reserved for Prime." },
        { label: "Setup still required,", body: "bundled AI needs model configuration and tuning before it works." },
        { label: "Metered assist pools", body: "drain with heavy use, then per-unit top-ups apply, a usage forecast rather than a fixed cost." },
      ],
    },
    motadata: {
      heading: "IntelliCore AI built in, with predictable, flat, meter-free economics",
      points: [
        { label: "Auto-classification and routing", body: "across incidents and requests, with no manual triage." },
        { label: "Predictive analytics", body: "flag SLA breaches, agent overload, and bottlenecks before they land." },
        { label: "Agentic AI", body: "adds sentiment-aware routing and multi-system automation; 70% auto-resolution (marketed)." },
        { label: "Usable on day one,", body: "with no lengthy configuration or tuning project." },
        { label: "Omnichannel virtual agent", body: "built in across WhatsApp, Teams, Slack, and 8 more channels, no extra license." },
        { label: "No assist meter,", body: "DFIT-based AI runs adaptively, so usage never changes the bill." },
      ],
    },
    winner: {
      who: "motadata",
      label: "Motadata ServiceOps",
      verdict:
        "For most teams, ServiceOps takes this one on economics. You get agentic routing, prediction, and automation built in, with no assist meter to watch and no overage to forecast at renewal. ServiceNow's agentic AI is more mature and goes further at the frontier of autonomous IT, so if that frontier is the goal and the budget is there, it leads. For capable AI that does not move your bill, ServiceOps is the stronger pick.",
    },
  },
  {
    id: "deployment",
    eyebrow: "Round 4",
    title: "Deployment, Ease of Use, and Implementation",
    intro:
      "How long until value, who has to run it, and what the interface asks of a new agent. This is where the two platforms feel most different day to day.",
    servicenow: {
      heading: "A structured, partner-led implementation program measured in months",
      points: [
        { label: "Cloud platform, partner-led rollout", body: "Implementation runs 3 to 12 or more months and usually needs dedicated, certified ServiceNow administrators. On-premises is available only through a separate process, branded Private Stack." },
        { label: "Total cost beyond the license", body: "Third-party analyses in 2026 put total cost of ownership at roughly three to five times the first-year license once implementation, data migration, and training are counted." },
        { label: "Dated UI with a learning curve", body: "The interface is feature-rich but dated, and that complexity is exactly what new users and agents find steep at first." },
      ],
    },
    motadata: {
      heading: "Built to deploy in weeks, on cloud or on-premises, with less overhead",
      points: [
        { label: "Flexible hosting", body: "It runs as SaaS and on-premises, which matters for teams with data residency or strict security needs." },
        { label: "Out-of-the-box configurations", body: "Extensive ready-made configurations across every module mean simple setup and a go-live measured in weeks, not quarters." },
        { label: "Modern low-training UI", body: "A modern, intuitive interface needs minimal training, so a smaller IT team can run it without a dedicated platform group." },
      ],
    },
    winner: {
      who: "motadata",
      label: "Motadata ServiceOps",
      verdict:
        "ServiceOps takes this one. Weeks instead of quarters, on-prem or cloud, and a smaller team can run it without a dedicated platform group. ServiceNow's longer rollout buys deeper customization that large enterprises need, but for teams that want value sooner, ServiceOps gets there faster.",
    },
  },
  {
    id: "scalability",
    eyebrow: "Round 5",
    title: "Scalability and Ecosystem Fit",
    intro:
      "This is the dimension where the platforms are built for different jobs: one for enterprise breadth, one for focused IT and MSP scale.",
    servicenow: {
      heading: "Enterprise scale and breadth reaching across every department and domain",
      points: [
        { label: "One platform across the enterprise", body: "ITSM, ITOM, HR service delivery, customer service, security, finance, and procurement run on a single AI platform with shared data and workflows." },
        { label: "Proven at the top end", body: "ServiceNow reports that 85 percent of the Fortune 500 run on its platform, a track record few vendors can claim." },
        { label: "One vendor everywhere", body: "If your plan is to standardize an entire enterprise across many departments on one platform, that breadth is hard to match." },
        { label: "No dedicated MSP product", body: "Multi-tenancy relies on Domain Separation, an architectural workaround that needs specialized consultants, rather than a purpose-built MSP edition." },
      ],
    },
    motadata: {
      heading: "Focused, right-sized scale for IT and service operations teams and MSPs",
      points: [
        { label: "Enterprise and multi-location scale", body: "It scales across thousands of users, distributed sites, and high-volume workflows without performance compromise." },
        { label: "MSP-ready by design", body: "The purpose-built MSP Edition offers true native multi-tenancy with isolated client portals, per-client white-labeling, per-company SLAs, tenant-specific catalogs, and shared configurations, with no scripting required." },
        { label: "Service reach beyond IT", body: "The same catalog and workflow engine extend into HR, facilities, and finance, and ServiceOps pairs natively with Motadata ObserveOps for observability." },
      ],
    },
    winner: {
      who: "servicenow",
      label: "ServiceNow",
      verdict:
        "This is the dimension ServiceNow takes, and we will say so plainly. For very large, multi-domain estates that want one vendor across IT, HR, customer service, and security, its breadth is hard to match. ServiceOps wins for IT-centered organizations and MSPs that want to scale, including multi-tenant delivery, without paying for breadth they will not use.",
    },
  },
  {
    id: "pricing",
    eyebrow: "Round 6",
    title: "Pricing and Total Cost of Ownership",
    intro:
      "Sticker price is only the start. What matters is how the bill builds once you add the modules you actually need, and how predictable it stays at renewal.",
    servicenow: {
      heading: "A layered cost that builds up across seats, modules, and renewals",
      points: [
        { label: "Quote-only pricing", body: "Licensing is per fulfiller, per module, by custom quote, with no public list price and no free trial to test against." },
        { label: "Add-ons stack on top", body: "Capabilities ServiceOps includes (patch, discovery, service mapping, asset management, project management, SLA penalty tracking) arrive as separate licensed modules at additional cost." },
        { label: "Per-fulfiller rate", body: "Industry estimates in 2026 put ITSM near 100 to 250 US dollars per fulfiller per month, with the average annual ITSM contract close to 130,000 US dollars (NowTribe, 2026)." },
        { label: "Implementation multiplier", body: "Total cost of ownership runs three to five times the license once implementation, migration, and training are counted." },
        { label: "Renewal creep", body: "The assist-pool meter plus an annual uplift that often runs near 8 percent can push the renewal past the first-year quote." },
      ],
    },
    motadata: {
      heading: "Simple, subscription-based pricing you can forecast with confidence",
      points: [
        { label: "Subscription, core included", body: "Pricing is subscription-based and modular across ITSM, ITAM, and patch, with core capabilities in the base platform rather than bolted on as paid add-ons." },
        { label: "No stacked seat-plus-module cost", body: "There is no per-fulfiller charge layered on top of per-module charges, so the bill does not multiply as you turn features on." },
        { label: "Test before you buy", body: "A published 30-day free trial lets a mid-market team prove the fit before committing a budget. You can start a 30-day ServiceOps trial and price it against your own fulfiller count rather than a list estimate." },
      ],
    },
    winner: {
      who: "motadata",
      label: "Motadata ServiceOps",
      verdict:
        "For small and mid-sized teams, ServiceOps is the stronger value: lower cost, a bill you can predict, and a trial before you buy. ServiceNow earns its price at enterprise scale, where its depth and breadth pay back across many teams and use cases.",
    },
  },
];

/* ── Decision + final verdict ────────────────────────────────────── */
export const decision = {
  intro: "The decision comes down to a few honest questions about your own organization.",
  chooseServiceNow:
    "you are a large enterprise standardizing many departments on one platform, you have the budget and a team or partner to run it, and you need the deepest customization and autonomous AI agents.",
  chooseMotadata:
    "you are a mid-market or lower-enterprise IT team, you want a certified ITIL service desk plus asset and patch management in one license, you need on-prem or fast cloud deployment, and you want a cost you can forecast.",
  coexist:
    "One more option that often gets missed: the two can coexist. Motadata ObserveOps and ServiceOps integrate with ServiceNow, so a team already invested in ServiceNow can connect monitoring and ticketing rather than rip and replace. The right move is not always all-or-nothing.",
  verdictIntro:
    "After comparing ServiceNow and Motadata ServiceOps across ITSM capabilities, AI, deployment, and cost, the decision comes down to scale and real-world need rather than feature depth alone. Both platforms handle core ITSM processes like incident, change, problem, and asset management. The difference is how far those capabilities extend and what it takes to run them.",
  servicenowIf: [
    "You are a large enterprise with complex, global IT operations",
    "You need deep customization and cross-department workflows",
    "You are investing in advanced capabilities like autonomous AI agents and process mining",
    "You have the budget, time, and skilled teams for a long implementation cycle",
  ],
  motadataIf: [
    "You want full ITSM coverage without enterprise overhead",
    "You need ITIL-certified service desk, CMDB, asset, and patch management in one platform",
    "You prefer faster deployment and predictable pricing",
    "You want cloud or on-prem flexibility with a low-risk start",
  ],
  closing:
    "Motadata ServiceOps is built for teams that want complete ITSM capability without paying enterprise-scale costs.",
};

/* ── FAQ ─────────────────────────────────────────────────────────── */
export const faqs: FaqItem[] = [
  {
    q: "Is Motadata a credible alternative to ServiceNow?",
    a: "Yes. Motadata ServiceOps covers the core ITIL processes ServiceNow does, holds PeopleCert ITIL 4 Tool Vendor Accreditation for 12 practices, and adds asset and patch management in the same license. For mid-market and lower-enterprise teams, it covers the same ground at a lower cost.",
  },
  {
    q: "Is Motadata cheaper than ServiceNow?",
    a: "In most mid-sized deployments, yes. ServiceNow prices per fulfiller and per module by custom quote, with total cost often three to five times the first-year license once implementation is counted. ServiceOps uses subscription pricing with a free trial and no per-module stacking. Confirm both against your own quote before you sign anything.",
  },
  {
    q: "Does Motadata integrate with ServiceNow?",
    a: "Yes. Motadata ObserveOps and ServiceOps integrate with ServiceNow, so you can connect monitoring and ticketing if you run both platforms together.",
  },
  {
    q: "Can Motadata ServiceOps replace ServiceNow?",
    a: "For many IT teams, yes, especially those that do not need ServiceNow's breadth across HR, customer service, and security, or its deepest customization. For large multi-domain enterprises, ServiceNow may still be the better fit.",
  },
  {
    q: "Does ServiceNow offer a free trial?",
    a: "No. ServiceNow does not offer a public free trial or self-serve signup, and access requires a custom quote. Motadata ServiceOps offers a 30-day free trial.",
  },
  {
    q: "Which platform is easier to implement?",
    a: "Motadata ServiceOps typically deploys in weeks with a lighter administration model. ServiceNow rollouts are larger projects, usually run with certified partners over several months.",
  },
];

/* ── Event detail data ── */

export interface EventTeamMember {
  name: string;
  role: string;
  initials: string;
  image?: string;
}

export interface EventScheduleDay {
  title: string;
  date: string;
  desc: string;
}

export interface EventHighlight {
  title: string;
  desc: string;
}

/* ── Partners / co-sponsors ── */

export interface EventPartner {
  name: string;
  /** Logo image URL (SVG/PNG on a transparent background works best). Falls back to a text wordmark. */
  logo?: string;
  /** Partner website — makes the logo a link. */
  url?: string;
  /** Relationship label, e.g. "Co-Host", "Title Sponsor", "Partner". Used to group logos. */
  tier?: string;
}

/* ── Past-event recap (photo + video gallery) ── */

/** Backend toggle: mark an event as upcoming (default) or past. */
export type EventStatus = "upcoming" | "past";

export interface EventRecapMedia {
  type: "image" | "video";
  /** Image URL, or a video URL — a YouTube/Vimeo embed link or a direct .mp4 file. */
  src: string;
  /** Poster image shown in the grid for video tiles. */
  thumbnail?: string;
  caption?: string;
  /** Make this tile span larger in the gallery (good for a hero photo/video). */
  featured?: boolean;
}

export interface EventRecapStat {
  value: string;
  label: string;
}

export interface EventRecap {
  overline?: string;
  title?: string;
  intro?: string;
  stats?: EventRecapStat[];
  media: EventRecapMedia[];
}

export interface EventDetailData {
  slug: string;
  title: string;
  shortTitle?: string;
  description: string;
  date: string;
  dateTime?: string;
  location: string;
  locationDetail?: string;
  booth?: string;
  boothDetail?: string;
  /** "upcoming" (default) or "past" — switch in the data to flip the page. */
  status?: EventStatus;
  /** Photo + video recap, shown when status is "past". */
  recap?: EventRecap;
  /** Section overline for partners, e.g. "In Partnership With". */
  partnersLabel?: string;
  /** Co-sponsors / partners shown as a logo lockup under the hero. */
  partners?: EventPartner[];
  aboutIntro: string;
  aboutAIOpsLabel?: string;
  aboutServiceOpsLabel?: string;
  aiOpsBullets: string[];
  serviceOpsBullets: string[];
  highlights: EventHighlight[];
  schedule: EventScheduleDay[];
  scheduleOverline?: string;
  scheduleTitle?: string;
  scheduleIntro?: string;
  team: EventTeamMember[];
  registerUrl?: string;
  ctaEmail: string;
  ctaDescription?: string;
}

/* ── Reusable team rosters ── */

const teamCore = [
  { name: "Amit Shingala", role: "CEO & Co-founder", initials: "AS" },
  { name: "Gaurang Kanpariya", role: "VP – International Business", initials: "GK" },
  { name: "Ankit Dave", role: "Territory Sales Manager", initials: "AD" },
  { name: "Mahak Goyal", role: "Lead Presales", initials: "MG" },
  { name: "Keertan Zala", role: "Senior Product Analyst", initials: "KZ" },
  { name: "Kavit Gohel", role: "Partner Marketing Manager", initials: "KG" },
];

const teamInternational = [
  { name: "Amit Shingala", role: "CEO & Co-founder", initials: "AS" },
  { name: "Gaurang Kanpariya", role: "VP – International Business", initials: "GK" },
  { name: "Ankit Dave", role: "Territory Sales Manager", initials: "AD" },
  { name: "Kavit Gohel", role: "Partner Marketing Manager", initials: "KG" },
];

const teamPartnerIndia = [
  { name: "Amit Shingala", role: "CEO & Co-founder", initials: "AS" },
  { name: "Mahak Goyal", role: "Lead Presales", initials: "MG" },
  { name: "Keertan Zala", role: "Senior Product Analyst", initials: "KZ" },
  { name: "Kavit Gohel", role: "Partner Marketing Manager", initials: "KG" },
];

const teamWebinar = [
  { name: "Amit Shingala", role: "CEO & Co-founder", initials: "AS" },
  { name: "Mahak Goyal", role: "Lead Presales", initials: "MG" },
  { name: "Keertan Zala", role: "Senior Product Analyst", initials: "KZ" },
];

/* ── Reusable bullet sets ── */

const defaultAIOps = [
  "AI-driven anomaly detection and root cause analysis",
  "Unified network, server, and cloud monitoring",
  "Predictive analytics to prevent outages before they occur",
  "Real-time dashboards and intelligent alerting",
];

const defaultServiceOps = [
  "ITIL-aligned service desk with AI-powered ticket routing",
  "Automated workflow orchestration and SLA management",
  "Self-service portal for end-user empowerment",
  "Integrated CMDB and asset lifecycle management",
];

/* ── Reusable highlight sets ── */

const highlightsConference: EventHighlight[] = [
  { title: "AI-Powered Observability", desc: "Experience our next-gen AIOps platform that uses machine learning to detect, diagnose, and resolve IT issues before they impact business." },
  { title: "Real-Time Monitoring", desc: "See live demonstrations of unified monitoring across hybrid infrastructure — network, server, cloud, and applications in a single pane of glass." },
  { title: "Service Management", desc: "Discover our ITIL-aligned ServiceOps platform with AI-driven automation, smart ticket routing, and seamless CMDB integration." },
  { title: "Proven Expertise", desc: "Meet our ITOps experts and learn from real-world case studies of enterprises achieving 70% faster MTTR with Motadata solutions." },
];

const highlightsPartner: EventHighlight[] = [
  { title: "Partner Enablement", desc: "Deep-dive sessions on Motadata's partner program, co-selling strategies, and joint go-to-market opportunities." },
  { title: "Live Product Demos", desc: "Hands-on demonstrations of AIOps and ServiceOps platforms showcasing real-world deployment scenarios." },
  { title: "Business Growth", desc: "Explore how Motadata solutions help partners deliver differentiated value to their customers and grow revenue." },
  { title: "Networking", desc: "Connect with Motadata leadership, fellow partners, and industry peers to share insights and build lasting relationships." },
];

const highlightsWebinar: EventHighlight[] = [
  { title: "Expert Insights", desc: "Gain actionable knowledge from Motadata's product and domain experts on the latest in IT operations." },
  { title: "Live Demonstrations", desc: "Watch real-time product walkthroughs showcasing practical use cases and deployment best practices." },
  { title: "Interactive Q&A", desc: "Engage directly with our experts during dedicated Q&A sessions to address your specific challenges." },
  { title: "Takeaway Resources", desc: "Receive presentation materials, whitepapers, and implementation guides to share with your team." },
];

const highlightsAward: EventHighlight[] = [
  { title: "Industry Recognition", desc: "Celebrating Motadata's contributions to IT infrastructure excellence and innovation in intelligent IT operations." },
  { title: "Thought Leadership", desc: "Engaging with CIOs and IT leaders on the future of AI-driven IT operations and digital transformation." },
  { title: "Networking", desc: "Connecting with senior IT decision-makers, analysts, and industry peers at a premier awards gathering." },
  { title: "Innovation Showcase", desc: "Demonstrating how Motadata's AI-powered platform is setting new benchmarks in observability and service management." },
];

/* ── All events keyed by slug ── */

const events: Record<string, EventDetailData> = {
  /* ─────────────────────────── 2022 ─────────────────────────── */

  "gitex-global-2022": {
    slug: "gitex-global-2022",
    title: "GITEX Global 2022",
    description: "The world\u2019s largest tech + startup show is right around the corner. We invite you to meet us at Hall 7 Stand: H7-15 and explore a world where businesses manage their ITOps with actionable data and AI-driven automation to provide a seamless end-user experience.",
    date: "10-14 October, 2022",
    dateTime: "10:00 AM \u2013 5:00 PM UAE Time",
    location: "World Trade Center Dubai",
    locationDetail: "World Trade Center Dubai",
    booth: "H7-15 | Dubai WTC",
    boothDetail: "H7-15 | Dubai WTC",
    aboutIntro: "Motadata offers 10+ years of industry experience in building data-driven solutions for managing ITOps.",
    aboutAIOpsLabel: "Motadata AIOps, an AI-powered Observability platform to:",
    aboutServiceOpsLabel: "Motadata ServiceOps, an AI-powered Service Management platform to:",
    aiOpsBullets: [
      "Accelerate root cause analysis by leveraging our deep learning methods on ingested data.",
      "Visualize your complete tech stack using our accurate real-time data streaming technology.",
      "Filter through noisy event data.",
    ],
    serviceOpsBullets: [
      "Deliver better ESM (Enterprise Service Management) experience with end-to-end automation using AIOps and ServiceOps.",
      "Manage flood of tickets using automation like a virtual agent.",
      "Drive automation across people, processes, and technology.",
    ],
    highlights: [
      { title: "AI-Powered Observability", desc: "Experience our advanced AIOps platform that accelerates root cause analysis using deep learning methods on ingested data." },
      { title: "Real-Time Monitoring", desc: "Visualize your complete tech stack using our accurate real-time data streaming technology." },
      { title: "Service Management", desc: "Discover our ServiceOps platform that delivers better ESM experience with end-to-end automation." },
      { title: "Proven Expertise", desc: "Learn from our 10+ years of industry experience in building data-driven solutions for managing ITOps." },
    ],
    schedule: [
      { title: "Day 1", date: "October 10, 2022", desc: "Opening day - Product demonstrations and networking sessions" },
      { title: "Day 2", date: "October 11, 2022", desc: "Technical deep-dive sessions on AIOps and observability" },
      { title: "Day 3", date: "October 12, 2022", desc: "ServiceOps platform showcase and automation workshops" },
      { title: "Day 4", date: "October 13, 2022", desc: "One-on-one consultations and solution architecture discussions" },
      { title: "Day 5", date: "October 14, 2022", desc: "Final day - Closing presentations and partnership opportunities" },
    ],
    team: [
      { name: "Amit Shingala", role: "CEO & Co-founder", initials: "AS", image: "/team/amit.avif" },
      { name: "Gaurang Kanpariya", role: "VP \u2013 International Business", initials: "GK" },
      { name: "Ankit Dave", role: "Territory Sales Manager", initials: "AD" },
      { name: "Mahak Goyal", role: "Lead Presales", initials: "MG" },
      { name: "Keertan Zala", role: "Senior Product Analyst", initials: "KZ" },
      { name: "Kavit Gohel", role: "Partner Marketing Manager", initials: "KG" },
    ],
    ctaEmail: "ankit.dave@motadata.com",
    ctaDescription: "We would love to meet if you are in Dubai during the event.",
  },

  "asia-data-centre-event-singapore-2022": {
    slug: "asia-data-centre-event-singapore-2022",
    title: "Asia's Largest Data Centre Event – Singapore 2022",
    description: "Motadata showcased the best ITOps solutions in action at Asia's largest data centre event in Singapore, connecting with industry leaders and demonstrating intelligent monitoring and service management capabilities.",
    date: "12–13 October 2022",
    location: "Marina Bay Sands, Singapore",
    aboutIntro: "At Asia's largest data centre event in Singapore, Motadata demonstrated how enterprises across the APAC region can harness AI-powered observability and service management to optimise their data centre operations and hybrid infrastructure.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsConference,
    schedule: [
      { title: "Day 1 — Exhibition & Demos", date: "12 October 2022", desc: "Live product demonstrations showcasing AIOps capabilities for data centre monitoring, network observability, and hybrid cloud management." },
      { title: "Day 2 — Networking & Closing", date: "13 October 2022", desc: "One-on-one consultations, partner discussions, and final demonstrations. Engaging with APAC enterprises on their IT operations challenges." },
    ],
    team: teamInternational,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "africa-tech-festival-2022": {
    slug: "africa-tech-festival-2022",
    title: "Africa Tech Festival 2022",
    description: "Motadata participated in Africa Tech Festival 2022, the continent's premier technology event, to showcase AI-powered IT monitoring and service management solutions tailored for African enterprises.",
    date: "7–11 November 2022",
    location: "CTICC, Cape Town, South Africa",
    aboutIntro: "Africa Tech Festival 2022 brought together technology leaders from across the continent. Motadata demonstrated how African enterprises can modernise their IT operations with AI-driven observability and ITIL-aligned service management.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsConference,
    schedule: [
      { title: "Day 1 — Opening & Setup", date: "7 November 2022", desc: "Exhibition opening with booth setup and initial product demonstrations for early visitors." },
      { title: "Day 2 — AIOps Showcase", date: "8 November 2022", desc: "Focused demonstrations of AI-driven network monitoring, anomaly detection, and predictive analytics for African enterprises." },
      { title: "Day 3 — ServiceOps Deep Dive", date: "9 November 2022", desc: "Showcasing ITIL-aligned service desk capabilities, automated workflows, and self-service portal features." },
      { title: "Day 4 — Partner Engagement", date: "10 November 2022", desc: "Exclusive partner meetings and discussions on expanding Motadata's presence across African markets." },
      { title: "Day 5 — Closing", date: "11 November 2022", desc: "Final demonstrations, networking sessions, and wrap-up discussions with key prospects and partners." },
    ],
    team: teamInternational,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "digital-transformation-summit-2022": {
    slug: "digital-transformation-summit-2022",
    title: "Digital Transformation Summit 2022",
    description: "Motadata was part of the Digital Transformation Summit 2022 in Mumbai, engaging with CIOs and IT leaders on how AI-powered IT operations can accelerate digital transformation initiatives.",
    date: "15–17 September 2022",
    location: "Mumbai, India",
    aboutIntro: "At the Digital Transformation Summit 2022, Motadata showcased how enterprises embarking on digital transformation journeys can leverage intelligent IT operations to ensure reliability, performance, and seamless service delivery across their technology stack.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsConference,
    schedule: [
      { title: "Day 1 — Keynotes & Exhibition", date: "15 September 2022", desc: "Opening keynotes on digital transformation trends followed by live product demonstrations at the Motadata booth." },
      { title: "Day 2 — Deep Dive Sessions", date: "16 September 2022", desc: "Technical sessions on AIOps implementation, IT service management modernisation, and real-world case studies." },
      { title: "Day 3 — Networking & Closing", date: "17 September 2022", desc: "Executive roundtables, one-on-one consultations, and closing networking sessions with enterprise IT leaders." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "it-infrastructure-excellence-awards-2022": {
    slug: "it-infrastructure-excellence-awards-2022",
    title: "IT Infrastructure Excellence Awards 2022",
    description: "Motadata participated in the IT Infrastructure Excellence Awards 2022 in Bangalore, celebrating innovation and leadership in IT infrastructure management.",
    date: "22 August 2022",
    location: "Bangalore, India",
    aboutIntro: "The IT Infrastructure Excellence Awards 2022 recognised outstanding achievements in IT infrastructure management. Motadata engaged with industry leaders and demonstrated how AI-powered solutions are setting new standards in IT operations excellence.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsAward,
    schedule: [
      { title: "Awards Ceremony & Exhibition", date: "22 August 2022", desc: "Full-day event featuring keynote addresses, awards presentations, live product demonstrations, and networking with senior IT leaders." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  /* ─────────────────────────── 2023 ─────────────────────────── */

  "gitex-global-2023": {
    slug: "gitex-global-2023",
    title: "GITEX Global 2023",
    description: "Motadata returned to GITEX Global 2023 in Dubai with an expanded showcase of AI-powered AIOps and ServiceOps solutions, engaging with enterprises and partners from across the globe.",
    date: "16–20 October 2023",
    location: "Dubai World Trade Centre, UAE",
    booth: "Hall 3",
    aboutIntro: "At GITEX Global 2023, Motadata demonstrated the latest advancements in its AI-powered observability and service management platforms, helping enterprises achieve intelligent automation and operational excellence.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsConference,
    schedule: [
      { title: "Day 1 — Grand Opening", date: "16 October 2023", desc: "Booth launch with live product demos and an overview of new AIOps and ServiceOps capabilities." },
      { title: "Day 2 — AIOps Innovation", date: "17 October 2023", desc: "Deep-dive sessions on next-gen AI-driven monitoring, anomaly detection, and predictive analytics." },
      { title: "Day 3 — ServiceOps Evolution", date: "18 October 2023", desc: "Showcasing enhanced ITSM workflows, AI-powered ticket routing, and integrated CMDB features." },
      { title: "Day 4 — Partner & Enterprise Day", date: "19 October 2023", desc: "Exclusive meetings with partners and enterprise clients exploring deployment and integration strategies." },
      { title: "Day 5 — Closing & Networking", date: "20 October 2023", desc: "Executive roundtables, final demonstrations, and networking with GITEX attendees." },
    ],
    team: teamCore,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "sits-2023": {
    slug: "sits-2023",
    title: "SITS 2023 – Europe's Leading ITSM Event",
    description: "Motadata exhibited at SITS 2023 in London, Europe's premier IT service management show, showcasing its ServiceOps and AIOps platforms to European enterprises.",
    date: "10–11 May 2023",
    location: "ExCeL London, UK",
    aboutIntro: "SITS 2023 brought together ITSM professionals from across Europe. Motadata demonstrated how its AI-powered ServiceOps and AIOps platforms deliver operational excellence for enterprises seeking to modernise their IT service delivery.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsConference,
    schedule: [
      { title: "Day 1 — Exhibition Launch", date: "10 May 2023", desc: "Opening day with live demonstrations of ServiceOps and AIOps platforms, engaging with European ITSM professionals." },
      { title: "Day 2 — Deep Dive & Closing", date: "11 May 2023", desc: "Technical deep dives, one-on-one consultations, and closing networking sessions with enterprise prospects." },
    ],
    team: teamInternational,
    ctaEmail: "ankit.dave@motadata.com",
  },

  /* ─────────────────────────── 2024 ─────────────────────────── */

  "gitex-global-2024": {
    slug: "gitex-global-2024",
    title: "GITEX Global 2024",
    description: "Motadata showcased the latest innovations in AI-powered IT operations at GITEX Global 2024, the world's largest tech show, engaging with thousands of enterprises and partners.",
    date: "14–18 October 2024",
    location: "Dubai World Trade Centre, UAE",
    booth: "Hall 3",
    aboutIntro: "At GITEX Global 2024, Motadata presented cutting-edge advancements in its AIOps and ServiceOps platforms, demonstrating how enterprises can achieve next-level operational efficiency through intelligent automation.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsConference,
    schedule: [
      { title: "Day 1 — Grand Opening", date: "14 October 2024", desc: "Booth launch featuring the latest AIOps and ServiceOps innovations, live demos, and product roadmap previews." },
      { title: "Day 2 — Intelligent Monitoring", date: "15 October 2024", desc: "Deep-dive sessions on AI-driven observability, hybrid cloud monitoring, and real-time analytics." },
      { title: "Day 3 — Service Excellence", date: "16 October 2024", desc: "Showcasing advanced ITSM capabilities, AI-powered automation, and seamless service delivery workflows." },
      { title: "Day 4 — Partner & Channel Day", date: "17 October 2024", desc: "Dedicated sessions for channel partners, MSPs, and system integrators exploring partnership opportunities." },
      { title: "Day 5 — Closing & Networking", date: "18 October 2024", desc: "Final demonstrations, executive meetings, and networking with global technology leaders." },
    ],
    team: teamCore,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "dtx-europe-2024": {
    slug: "dtx-europe-2024",
    title: "DTX Europe 2024",
    description: "Motadata exhibited at DTX Europe 2024 in Amsterdam, engaging with European enterprises on AI-powered IT monitoring and service management solutions.",
    date: "2–3 October 2024",
    location: "RAI Amsterdam, Netherlands",
    aboutIntro: "At DTX Europe 2024, Motadata showcased its AI-powered AIOps and ServiceOps platforms to European IT leaders, demonstrating how intelligent automation can transform IT operations across the continent.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsConference,
    schedule: [
      { title: "Day 1 — Exhibition & Demos", date: "2 October 2024", desc: "Opening day with live demonstrations of AIOps and ServiceOps capabilities for European enterprises." },
      { title: "Day 2 — Consultations & Closing", date: "3 October 2024", desc: "In-depth consultations, partner meetings, and closing networking sessions." },
    ],
    team: teamInternational,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "bfsi-cxo-conclave-2024": {
    slug: "bfsi-cxo-conclave-2024",
    title: "BFSI CXO Conclave 2024",
    description: "Motadata participated in the BFSI CXO Conclave 2024 in Mumbai, engaging with banking and financial services leaders on how AI-powered IT operations can drive digital resilience.",
    date: "18 September 2024",
    location: "Mumbai, India",
    aboutIntro: "The BFSI CXO Conclave 2024 brought together top banking and financial services technology leaders. Motadata demonstrated how its AI-powered platforms help BFSI organisations ensure uptime, compliance, and seamless digital service delivery.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsConference,
    schedule: [
      { title: "CXO Conclave", date: "18 September 2024", desc: "Full-day event with keynote sessions, panel discussions, live demos, and networking with BFSI CXOs and IT leaders." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  /* ─────────────────────────── 2025 ─────────────────────────── */

  "convergence-india-2025": {
    slug: "convergence-india-2025",
    title: "Convergence India 2025",
    description: "Motadata showcased the future of IT operations at Convergence India 2025, engaging with enterprises and government organisations on AI-powered monitoring and service management.",
    date: "19–22 March 2025",
    location: "Pragati Maidan, New Delhi, India",
    aboutIntro: "At Convergence India 2025, Motadata demonstrated how enterprises and public sector organisations can leverage AI-driven observability and ITIL-aligned service management to modernise their IT infrastructure.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsConference,
    schedule: [
      { title: "Day 1 — Exhibition Launch", date: "19 March 2025", desc: "Opening day with booth setup and initial product demonstrations for Convergence India attendees." },
      { title: "Day 2 — AIOps Showcase", date: "20 March 2025", desc: "Focused sessions on AI-driven network and infrastructure monitoring, predictive analytics, and alerting." },
      { title: "Day 3 — ServiceOps Demos", date: "21 March 2025", desc: "Demonstrations of ITSM workflows, automated service desk capabilities, and CMDB integration." },
      { title: "Day 4 — Closing & Networking", date: "22 March 2025", desc: "Final demonstrations, executive roundtables, and closing networking sessions." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "smarter-it-partner-meet-delhi-2025": {
    slug: "smarter-it-partner-meet-delhi-2025",
    title: "Smarter IT, Stronger Communication: Partner Meet",
    description: "Motadata hosted a partner meet in Delhi focused on smarter IT and stronger communication, bringing together channel partners to explore collaborative growth opportunities.",
    date: "23 April 2025",
    location: "Delhi, India",
    aboutIntro: "This partner meet in Delhi brought together Motadata's channel ecosystem to discuss strategies for smarter IT operations, explore new product capabilities, and strengthen go-to-market collaboration.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsPartner,
    schedule: [
      { title: "Partner Meet", date: "23 April 2025", desc: "Full-day partner engagement session featuring product updates, co-selling strategies, live demonstrations, and networking." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "tekq-cyber-security-conclave-2025": {
    slug: "tekq-cyber-security-conclave-2025",
    title: "TekQ Global CIO Forum – Cyber Security Conclave 2025",
    description: "Motadata participated in the TekQ Global CIO Forum Annual Cyber Security Conclave 2025 in Bangalore, engaging with CIOs on AI-driven IT security and operations.",
    date: "26 April 2025",
    location: "Bangalore, India",
    aboutIntro: "At the TekQ Cyber Security Conclave, Motadata demonstrated how AI-powered observability and intelligent IT operations play a critical role in strengthening enterprise cyber security posture and incident response.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsConference,
    schedule: [
      { title: "Cyber Security Conclave", date: "26 April 2025", desc: "Full-day conclave with keynotes, panel discussions on cyber security, live product demos, and CIO networking." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "real-cost-of-downtime-webinar-2025": {
    slug: "real-cost-of-downtime-webinar-2025",
    title: "The Real Cost of Downtime – How AIOps Can Save You Millions",
    description: "This webinar explored how IT downtime impacts business revenue and how AIOps-driven intelligent monitoring can prevent outages, reduce MTTR, and save enterprises millions.",
    date: "6 May 2025",
    location: "Online",
    aboutIntro: "In this insightful webinar, Motadata experts broke down the true cost of IT downtime and demonstrated how AI-powered observability can proactively prevent outages, dramatically reduce mean time to resolution, and protect business revenue.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsWebinar,
    schedule: [
      { title: "Live Webinar Session", date: "6 May 2025", desc: "Expert-led session covering the business impact of downtime, AIOps strategies for prevention, live platform demo, and interactive Q&A." },
    ],
    team: teamWebinar,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "empowering-banking-africa-summit-2025": {
    slug: "empowering-banking-africa-summit-2025",
    title: "Empowering Banking with AI at Africa Summit",
    description: "Motadata engaged with banking and financial technology leaders at the Africa Summit in Lagos, demonstrating how AI-powered IT operations can transform the BFSI sector across Africa.",
    date: "13–15 May 2025",
    location: "Lagos, Nigeria",
    aboutIntro: "At the Africa Banking Summit, Motadata showcased how financial institutions across Africa can leverage AI-driven IT monitoring and service management to ensure uptime, compliance, and superior digital banking experiences.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsConference,
    schedule: [
      { title: "Day 1 — Summit Opening", date: "13 May 2025", desc: "Opening sessions and initial engagement with banking technology leaders on AI-driven IT operations." },
      { title: "Day 2 — Live Demos & Panels", date: "14 May 2025", desc: "Product demonstrations, panel discussions on BFSI digital transformation, and one-on-one meetings." },
      { title: "Day 3 — Closing & Networking", date: "15 May 2025", desc: "Final presentations, partnership discussions, and networking with African banking IT leaders." },
    ],
    team: teamInternational,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "future-digitech-summit-2025": {
    slug: "future-digitech-summit-2025",
    title: "Future DigiTech Summit 2025",
    description: "Motadata showcased intelligent IT solutions at the Future DigiTech Summit 2025 in Mumbai, engaging with enterprise leaders on the convergence of AI and IT operations.",
    date: "28–29 May 2025",
    location: "Mumbai, India",
    aboutIntro: "At the Future DigiTech Summit, Motadata demonstrated how enterprises can harness AI-powered observability and intelligent service management to stay ahead in the rapidly evolving digital landscape.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsConference,
    schedule: [
      { title: "Day 1 — Summit & Exhibition", date: "28 May 2025", desc: "Keynote sessions, panel discussions, and live product demonstrations at the Motadata booth." },
      { title: "Day 2 — Deep Dives & Closing", date: "29 May 2025", desc: "Technical deep dives, enterprise consultations, and closing networking sessions." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "partner-enablement-secunderabad-2025": {
    slug: "partner-enablement-secunderabad-2025",
    title: "Partner Enablement – Secunderabad",
    description: "Motadata and Savex Technologies drove partner enablement in Secunderabad, unlocking new possibilities for channel partners with AI-powered IT solutions.",
    date: "11 June 2025",
    location: "Secunderabad, India",
    aboutIntro: "This partner enablement session in Secunderabad brought together channel partners to explore Motadata's AI-powered AIOps and ServiceOps platforms, equipping them with the knowledge and tools to deliver transformative IT solutions.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsPartner,
    schedule: [
      { title: "Partner Enablement Session", date: "11 June 2025", desc: "Full-day session covering product capabilities, deployment strategies, partner program benefits, and live demonstrations." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "partner-enablement-chandigarh-2025": {
    slug: "partner-enablement-chandigarh-2025",
    title: "Partner Enablement – Chandigarh",
    description: "Motadata and Savex collaborated in Chandigarh to empower IT operations through a focused partner enablement session.",
    date: "13 June 2025",
    location: "Chandigarh, India",
    aboutIntro: "This Chandigarh session enabled channel partners to understand and leverage Motadata's intelligent IT operations platforms, fostering stronger go-to-market collaboration.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsPartner,
    schedule: [
      { title: "Partner Enablement Session", date: "13 June 2025", desc: "Full-day session covering product training, deployment best practices, and collaborative growth strategies." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "future-of-it-partnership-webinar-2025": {
    slug: "future-of-it-partnership-webinar-2025",
    title: "Future of IT, Powered by Partnership",
    description: "This webinar explored the future of IT operations powered by strategic partnerships, showcasing how collaborative approaches drive better outcomes for enterprises.",
    date: "13 June 2025",
    location: "Online",
    aboutIntro: "In this webinar, Motadata experts discussed how partnerships are shaping the future of IT operations, and how channel partners can leverage AI-powered platforms to deliver exceptional value to their customers.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsWebinar,
    schedule: [
      { title: "Live Webinar Session", date: "13 June 2025", desc: "Expert panel discussion on partnership-driven IT innovation, followed by a live platform demo and interactive Q&A." },
    ],
    team: teamWebinar,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "unified-itsm-webinar-2025": {
    slug: "unified-itsm-webinar-2025",
    title: "Say Goodbye to IT Chaos: Discover the Power of Unified ITSM",
    description: "This webinar demonstrated how unified ITSM brings order to IT chaos, streamlining service delivery with AI-powered automation and ITIL-aligned workflows.",
    date: "18 June 2025",
    location: "Online",
    aboutIntro: "Motadata experts showcased how a unified ITSM platform eliminates IT silos, automates service delivery, and empowers IT teams to deliver faster, more reliable support through intelligent automation.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsWebinar,
    schedule: [
      { title: "Live Webinar Session", date: "18 June 2025", desc: "Deep-dive into unified ITSM capabilities, live demonstrations of automated workflows, and interactive Q&A with product experts." },
    ],
    team: teamWebinar,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "partner-session-kolkata-2025": {
    slug: "partner-session-kolkata-2025",
    title: "Partner Session – Kolkata",
    description: "Motadata empowered IT teams through collaboration and insight at the Kolkata partner session, driving meaningful conversations with channel partners.",
    date: "18 June 2025",
    location: "Kolkata, India",
    aboutIntro: "This partner session in Kolkata brought together channel partners to explore Motadata's AI-powered IT solutions, share best practices, and strengthen collaborative go-to-market strategies.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsPartner,
    schedule: [
      { title: "Partner Session", date: "18 June 2025", desc: "Full-day session with product updates, live demonstrations, partner program overview, and networking." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "partner-session-mumbai-2025": {
    slug: "partner-session-mumbai-2025",
    title: "Partner Session – Mumbai",
    description: "Motadata unified vision and velocity at the Mumbai partner session, empowering partners for the future of IT operations.",
    date: "19 June 2025",
    location: "Mumbai, India",
    aboutIntro: "This Mumbai session brought together partners to align on vision and velocity, exploring how Motadata's AI-powered platforms can accelerate partner success in the IT operations market.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsPartner,
    schedule: [
      { title: "Partner Session", date: "19 June 2025", desc: "Full-day engagement featuring product roadmap, partner success stories, live demos, and collaborative planning." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "partner-session-guwahati-2025": {
    slug: "partner-session-guwahati-2025",
    title: "Partner Session – Guwahati",
    description: "Motadata ignited intelligent IT conversations in Guwahati, engaging with partners on AI-driven IT operations and collaborative growth.",
    date: "20 June 2025",
    location: "Guwahati, India",
    aboutIntro: "The Guwahati partner session brought together channel partners from North-East India to explore Motadata's intelligent IT solutions and discover new business opportunities in the region.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsPartner,
    schedule: [
      { title: "Partner Session", date: "20 June 2025", desc: "Full-day session covering product capabilities, regional market opportunities, live demonstrations, and partner networking." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "partner-session-pune-2025": {
    slug: "partner-session-pune-2025",
    title: "Partner Session – Pune",
    description: "Key takeaways from the Pune partner session with Savex Technologies, focusing on AI-powered IT solutions and partner enablement.",
    date: "4 July 2025",
    location: "Pune, India",
    aboutIntro: "This partner session in Pune with Savex Technologies provided channel partners with hands-on product knowledge, deployment strategies, and insights into Motadata's AI-powered IT operations platform.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsPartner,
    schedule: [
      { title: "Partner Session", date: "4 July 2025", desc: "Full-day session with product training, live demos, partner program updates, and collaborative networking." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "partner-session-coimbatore-2025": {
    slug: "partner-session-coimbatore-2025",
    title: "Partner Session – Coimbatore",
    description: "Coimbatore Chronicles: Fueling smarter IT with innovation and partnership as Motadata engaged with channel partners in southern India.",
    date: "9 July 2025",
    location: "Coimbatore, India",
    aboutIntro: "The Coimbatore partner session brought together channel partners from southern India to explore Motadata's AI-powered solutions and drive smarter IT operations through innovation and collaboration.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsPartner,
    schedule: [
      { title: "Partner Session", date: "9 July 2025", desc: "Full-day engagement with product demonstrations, partner enablement, and networking with regional channel partners." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "partner-session-madurai-2025": {
    slug: "partner-session-madurai-2025",
    title: "Partner Session – Madurai",
    description: "Technology, Temples and Trust: A memorable day in Madurai as Motadata connected with partners on intelligent IT solutions.",
    date: "11 July 2025",
    location: "Madurai, India",
    aboutIntro: "This partner session in Madurai combined cultural richness with technology innovation, engaging channel partners on Motadata's AI-driven IT operations and building lasting business relationships.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsPartner,
    schedule: [
      { title: "Partner Session", date: "11 July 2025", desc: "Full-day partner engagement with product showcases, regional business discussions, and networking." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "redefining-it-operations-webinar-2025": {
    slug: "redefining-it-operations-webinar-2025",
    title: "Redefining IT Operations for the Digital Era",
    description: "This webinar explored how modern enterprises can redefine their IT operations strategy with AI-powered observability and intelligent automation.",
    date: "14 July 2025",
    location: "Online",
    aboutIntro: "Motadata experts discussed how enterprises can redefine IT operations for the digital era, leveraging AI-driven monitoring, predictive analytics, and automated remediation to stay ahead of operational challenges.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsWebinar,
    schedule: [
      { title: "Live Webinar Session", date: "14 July 2025", desc: "Expert-led session on modern IT operations strategies, live AIOps platform demo, and interactive Q&A." },
    ],
    team: teamWebinar,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "partner-session-hyderabad-2025": {
    slug: "partner-session-hyderabad-2025",
    title: "Partner Session – Hyderabad",
    description: "Exploring innovation, insights, and intelligent IT with Savex Technologies at the Hyderabad partner session.",
    date: "16 July 2025",
    location: "Hyderabad, India",
    aboutIntro: "This partner session in Hyderabad explored innovation and intelligent IT with Savex Technologies, enabling partners to leverage Motadata's platforms for business growth.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsPartner,
    schedule: [
      { title: "Partner Session", date: "16 July 2025", desc: "Full-day session covering product innovations, deployment strategies, and partner enablement activities." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "partner-session-bangalore-2025": {
    slug: "partner-session-bangalore-2025",
    title: "Partner Enablement – Bangalore",
    description: "Future-ready IT begins here: Highlights from Motadata's partner enablement drive in Bangalore.",
    date: "23 July 2025",
    location: "Bangalore, India",
    aboutIntro: "This partner enablement session in Bangalore equipped channel partners with the knowledge and tools to deliver Motadata's AI-powered IT solutions, driving future-ready IT for enterprises.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsPartner,
    schedule: [
      { title: "Partner Enablement Session", date: "23 July 2025", desc: "Full-day session with product deep dives, hands-on demonstrations, and collaborative business planning." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "partner-session-chennai-2025": {
    slug: "partner-session-chennai-2025",
    title: "Partner Session – Chennai",
    description: "Empowering IT with intelligence and collaboration at the Chennai partner session.",
    date: "6 August 2025",
    location: "Chennai, India",
    aboutIntro: "This partner session in Chennai empowered channel partners with Motadata's intelligent IT solutions, fostering collaboration and enabling smarter IT operations for enterprises in the region.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsPartner,
    schedule: [
      { title: "Partner Session", date: "6 August 2025", desc: "Full-day partner engagement with product demonstrations, business planning, and networking." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "ai-driven-itam-webinar-2025": {
    slug: "ai-driven-itam-webinar-2025",
    title: "Uncover the Power of AI-Driven ITAM for the Modern Enterprise",
    description: "This webinar uncovered how AI-driven IT Asset Management helps modern enterprises optimise costs, ensure compliance, and maintain complete visibility of their IT assets.",
    date: "7 August 2025",
    location: "Online",
    aboutIntro: "Motadata experts demonstrated how AI-driven IT Asset Management transforms the way enterprises track, manage, and optimise their IT assets throughout the entire lifecycle.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsWebinar,
    schedule: [
      { title: "Live Webinar Session", date: "7 August 2025", desc: "Deep-dive into AI-driven ITAM capabilities, live demonstrations of asset lifecycle management, and interactive Q&A." },
    ],
    team: teamWebinar,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "partner-session-bhubaneswar-2025": {
    slug: "partner-session-bhubaneswar-2025",
    title: "Partner Session – Bhubaneswar",
    description: "Shaping the future of IT at the Bhubaneswar partner session with Savex Technologies.",
    date: "8 August 2025",
    location: "Bhubaneswar, India",
    aboutIntro: "This partner session in Bhubaneswar with Savex Technologies engaged channel partners on shaping the future of IT with Motadata's AI-powered monitoring and service management platforms.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsPartner,
    schedule: [
      { title: "Partner Session", date: "8 August 2025", desc: "Full-day session with product training, live demonstrations, and collaborative partner networking." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "partner-session-surat-2025": {
    slug: "partner-session-surat-2025",
    title: "Partner Session – Surat",
    description: "Driving smarter IT futures as Motadata and Savex engaged partners in Surat on AI-powered IT solutions.",
    date: "13 August 2025",
    location: "Surat, India",
    aboutIntro: "This partner session in Surat with Savex Technologies focused on driving smarter IT futures, enabling channel partners with Motadata's intelligent IT operations platform.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsPartner,
    schedule: [
      { title: "Partner Session", date: "13 August 2025", desc: "Full-day partner engagement with product showcases, enablement workshops, and networking." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "cio500-awards-mumbai-2025": {
    slug: "cio500-awards-mumbai-2025",
    title: "CIO500 Accelerator X Awards 2025 – Mumbai",
    description: "Motadata joined the CIO500 Accelerator X Awards 2025 as Silver Partner in Mumbai, driving the future of intelligent IT.",
    date: "13 August 2025",
    location: "Mumbai, India",
    aboutIntro: "As Silver Partner at the CIO500 Accelerator X Awards 2025 in Mumbai, Motadata engaged with India's top CIOs and IT leaders, showcasing how AI-powered IT operations are defining the future of enterprise technology.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsAward,
    schedule: [
      { title: "Awards Ceremony", date: "13 August 2025", desc: "Full-day awards event with keynote sessions, awards presentations, product demonstrations, and CIO networking." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "cio500-awards-delhi-2025": {
    slug: "cio500-awards-delhi-2025",
    title: "CIO500 Accelerator X Awards 2025 – Delhi",
    description: "A celebration of leadership, innovation and collaboration at the CIO500 Accelerator X Awards 2025 in Delhi.",
    date: "13 August 2025",
    location: "Delhi, India",
    aboutIntro: "The CIO500 Accelerator X Awards 2025 in Delhi celebrated leadership and innovation in IT. Motadata showcased how AI-powered solutions are transforming IT operations and empowering CIOs to drive digital excellence.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsAward,
    schedule: [
      { title: "Awards Ceremony", date: "13 August 2025", desc: "Full-day awards event featuring keynotes, awards presentations, live demos, and networking with IT leaders." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "cio500-awards-bangalore-2025": {
    slug: "cio500-awards-bangalore-2025",
    title: "CIO500 Accelerator X Awards 2025 – Bangalore",
    description: "CIO500 Accelerator X Awards 2025 in Bangalore: Driving innovation with precision as Motadata engaged with top IT leaders.",
    date: "20 August 2025",
    location: "Bangalore, India",
    aboutIntro: "At the CIO500 Awards in Bangalore, Motadata demonstrated how AI-driven precision in IT operations is enabling enterprises to achieve new levels of efficiency, reliability, and innovation.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsAward,
    schedule: [
      { title: "Awards Ceremony", date: "20 August 2025", desc: "Full-day awards event with keynotes, awards presentations, product showcases, and networking with CIOs." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "ai-driven-it-webinar-2025": {
    slug: "ai-driven-it-webinar-2025",
    title: "Empowering Growth with AI-Driven IT: Webinar Recap",
    description: "This webinar explored how AI-driven IT empowers business growth, covering intelligent monitoring, automated service management, and real-world success stories.",
    date: "16 September 2025",
    location: "Online",
    aboutIntro: "Motadata experts discussed how AI-driven IT solutions empower business growth by improving operational efficiency, reducing downtime, and enabling proactive IT management.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsWebinar,
    schedule: [
      { title: "Live Webinar Session", date: "16 September 2025", desc: "Expert-led session on AI-driven IT growth strategies, live platform demo, and interactive Q&A." },
    ],
    team: teamWebinar,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "cio-500-accelerator-awards-mumbai-sept-2025": {
    slug: "cio-500-accelerator-awards-mumbai-sept-2025",
    title: "CIO 500 Accelerator X Awards – Mumbai",
    description: "Motadata embraced innovation at the CIO 500 Accelerator X Awards in Mumbai, connecting with top industry leaders.",
    date: "22 September 2025",
    location: "Mumbai, India",
    aboutIntro: "At the CIO 500 Accelerator X Awards in Mumbai, Motadata engaged with senior IT leaders, showcasing innovative AI-powered approaches to IT operations and service management.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsAward,
    schedule: [
      { title: "Awards & Exhibition", date: "22 September 2025", desc: "Full-day awards event featuring keynotes, product demonstrations, awards ceremony, and networking." },
    ],
    team: teamPartnerIndia,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "mannai-nexchange-doha-2025": {
    slug: "mannai-nexchange-doha-2025",
    title: "Mannai NEXCHANGE 2025 – Doha",
    description: "Motadata showcased innovation at Mannai NEXCHANGE 2025 in Doha, Qatar, engaging with regional enterprises on intelligent IT solutions.",
    date: "23 September 2025",
    location: "Doha, Qatar",
    aboutIntro: "At Mannai NEXCHANGE 2025, Motadata demonstrated how enterprises in the Middle East can leverage AI-powered monitoring and service management to modernise their IT operations.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsConference,
    schedule: [
      { title: "Exhibition & Demos", date: "23 September 2025", desc: "Full-day exhibition with live product demonstrations, enterprise consultations, and networking with regional IT leaders." },
    ],
    team: teamInternational,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "customer-roundtable-bahrain-2025": {
    slug: "customer-roundtable-bahrain-2025",
    title: "Customer Roundtable – Bahrain",
    description: "Motadata engaged with industry leaders at the Customer Roundtable in Bahrain, driving meaningful conversations on digital transformation and intelligent IT.",
    date: "25 September 2025",
    location: "Manama, Bahrain",
    aboutIntro: "This Customer Roundtable in Bahrain brought together regional IT leaders to discuss digital transformation challenges and how Motadata's AI-powered platforms can accelerate their IT modernisation journey.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsPartner,
    schedule: [
      { title: "Customer Roundtable", date: "25 September 2025", desc: "Intimate roundtable with customer presentations, solution deep dives, and open discussion on IT challenges and strategies." },
    ],
    team: teamInternational,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "customer-roundtable-dubai-2025": {
    slug: "customer-roundtable-dubai-2025",
    title: "Customer Roundtable – Dubai",
    description: "A Customer Roundtable in Dubai focusing on digital transformation, bringing together enterprise leaders to explore AI-powered IT solutions.",
    date: "30 September 2025",
    location: "Dubai, UAE",
    aboutIntro: "This Customer Roundtable in Dubai focused on digital transformation, engaging enterprise leaders on how Motadata's intelligent IT platforms can drive operational efficiency and business agility.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsPartner,
    schedule: [
      { title: "Customer Roundtable", date: "30 September 2025", desc: "Executive roundtable featuring product demonstrations, customer success stories, and collaborative discussion on digital transformation." },
    ],
    team: teamInternational,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "partner-session-malaysia-2025": {
    slug: "partner-session-malaysia-2025",
    title: "Partner Session – Malaysia",
    description: "Empowering innovation together at the Malaysia partner event, delivering a remarkable experience for channel partners.",
    date: "9 October 2025",
    location: "Kuala Lumpur, Malaysia",
    aboutIntro: "This partner event in Malaysia brought together channel partners to explore Motadata's AI-powered IT solutions, fostering innovation and enabling collaborative growth across the APAC region.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsPartner,
    schedule: [
      { title: "Partner Session", date: "9 October 2025", desc: "Full-day partner engagement with product demonstrations, regional business strategies, and networking." },
    ],
    team: teamInternational,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "sat-forum-singapore-2025": {
    slug: "sat-forum-singapore-2025",
    title: "SAT Forum Event – Singapore",
    description: "Motadata drove meaningful conversations and collaboration at the SAT Forum Event in Singapore, engaging with APAC technology leaders.",
    date: "24 October 2025",
    location: "Singapore",
    aboutIntro: "At the SAT Forum Event in Singapore, Motadata engaged with APAC technology leaders on AI-driven IT operations, demonstrating how intelligent observability and service management can transform enterprise IT.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsConference,
    schedule: [
      { title: "Forum & Exhibition", date: "24 October 2025", desc: "Full-day forum with keynotes, panel discussions, live product demonstrations, and networking with APAC IT leaders." },
    ],
    team: teamInternational,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "powering-africa-growth-2025": {
    slug: "powering-africa-growth-2025",
    title: "Powering Africa's Growth Through Innovation and Collaboration",
    description: "Motadata participated in this conference in Cape Town, engaging with African enterprises on AI-powered IT solutions that drive growth and innovation.",
    date: "29–31 October 2025",
    location: "Cape Town, South Africa",
    aboutIntro: "At this Cape Town conference, Motadata showcased how African enterprises can power growth through AI-driven IT operations, intelligent monitoring, and modern service management.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsConference,
    schedule: [
      { title: "Day 1 — Conference Opening", date: "29 October 2025", desc: "Opening sessions, exhibition launch, and initial product demonstrations for conference attendees." },
      { title: "Day 2 — Deep Dive Sessions", date: "30 October 2025", desc: "Technical sessions on AIOps and ServiceOps, live demonstrations, and enterprise consultations." },
      { title: "Day 3 — Closing & Networking", date: "31 October 2025", desc: "Final presentations, partnership discussions, and closing networking sessions." },
    ],
    team: teamInternational,
    ctaEmail: "ankit.dave@motadata.com",
  },

  "safer-digital-world-dubai-2025": {
    slug: "safer-digital-world-dubai-2025",
    title: "Building a Safer Digital World Through Collaboration and Innovation",
    description: "Motadata participates in this upcoming Dubai conference focused on building a safer digital world through collaboration, innovation, and intelligent IT operations.",
    date: "5–6 November 2025",
    location: "Dubai, UAE",
    aboutIntro: "At this upcoming conference in Dubai, Motadata will demonstrate how AI-powered IT operations and intelligent service management contribute to building a safer, more resilient digital infrastructure for enterprises worldwide.",
    aiOpsBullets: defaultAIOps,
    serviceOpsBullets: defaultServiceOps,
    highlights: highlightsConference,
    schedule: [
      { title: "Day 1 — Conference & Exhibition", date: "5 November 2025", desc: "Opening sessions, live product demonstrations, and engagement with global technology leaders on digital safety." },
      { title: "Day 2 — Deep Dive & Closing", date: "6 November 2025", desc: "Technical deep dives, partner meetings, and closing networking sessions." },
    ],
    team: teamInternational,
    ctaEmail: "ankit.dave@motadata.com",
  },

  /* ─────────────────────────── 2026 ─────────────────────────── */

  "it-excellence-saudi-arabia-jeddah-2026": {
    slug: "it-excellence-saudi-arabia-jeddah-2026",
    title: "Driving IT Excellence in Saudi Arabia: Building Resilient and Intelligent Digital Operations",
    shortTitle: "Driving IT Excellence in Saudi Arabia",
    description: "See how Saudi enterprises are reshaping IT operations with observability, automation, and AI-driven intelligence. Join Motadata and Hilal for an invitation-only networking event in Jeddah, with industry insights, expert discussions, and peer-to-peer knowledge sharing built to help organizations run resilient, future-ready digital operations.",
    date: "05 July 2026",
    dateTime: "9:00 AM – 2:00 PM (Saudi Arabia Time)",
    location: "Jeddah, Saudi Arabia",
    locationDetail: "Holiday Inn, Jeddah",
    partnersLabel: "In Partnership With",
    partners: [
      { name: "Hilal", tier: "Co-Host", url: "https://www.motadata.com", logo: "/logos/bahrain-logo.png" },
    ],
    recap: {
      overline: "Event Recap",
      title: "Highlights from Jeddah",
      intro: "A look back at our invitation-only IT leaders' session in Jeddah — keynotes, live AIOps and ServiceOps demonstrations, and candid conversations with enterprise IT teams from across the Kingdom.",
      stats: [
        { value: "120+", label: "IT Leaders" },
        { value: "8", label: "Sessions & Demos" },
        { value: "40+", label: "Enterprises" },
        { value: "100%", label: "Invitation-Only" },
      ],
      media: [
        { type: "video", src: "https://www.youtube.com/embed/ydN_Gn2bnHE", thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1280&q=80&auto=format&fit=crop", caption: "Event recap film", featured: true },
        { type: "image", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1280&q=80&auto=format&fit=crop", caption: "Keynote: Building resilient digital operations" },
        { type: "image", src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1280&q=80&auto=format&fit=crop", caption: "Networking over welcome coffee" },
        { type: "image", src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1280&q=80&auto=format&fit=crop", caption: "Live AIOps & ServiceOps demo" },
        { type: "image", src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1280&q=80&auto=format&fit=crop", caption: "Panel discussion with ITOps leaders" },
        { type: "image", src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=1280&q=80&auto=format&fit=crop", caption: "Networking lunch" },
      ],
    },
    aboutIntro: "Hosted by Motadata in partnership with Hilal, this exclusive networking event in Jeddah brings Saudi enterprise IT leaders together to talk through the priorities and challenges shaping IT operations across the Kingdom. The session shows how AI-driven observability and ITIL-aligned service management support resilient, intelligent digital operations that align with Vision 2030.",
    aiOpsBullets: [
      "AI-driven anomaly detection and root cause analysis across your environment.",
      "Unified monitoring for network, server, and cloud in one place.",
      "Predictive analytics that flag outages before they hit.",
      "Real-time dashboards and intelligent alerting that cut the noise.",
    ],
    serviceOpsBullets: [
      "ITIL-aligned service desk with AI-powered ticket routing.",
      "Automated workflow orchestration and SLA management.",
      "A self-service portal that lets end users resolve common requests on their own.",
      "An integrated CMDB tied to full asset lifecycle management.",
    ],
    highlights: [
      { title: "AI-Powered Observability", desc: "See our AIOps platform use machine learning to detect, diagnose, and resolve IT issues before they reach the business." },
      { title: "Real-Time Monitoring", desc: "Watch live demonstrations of unified monitoring across hybrid infrastructure, covering network, server, cloud, and applications on one screen." },
      { title: "Service Management", desc: "Discover our ITIL-aligned ServiceOps platform, with AI-driven automation, smart ticket routing, and CMDB integration that connects every record." },
      { title: "Proven Expertise", desc: "Meet our ITOps experts and learn from real customer case studies, including enterprises that reached up to 70 percent faster MTTR with Motadata." },
    ],
    scheduleOverline: "Event Agenda",
    scheduleTitle: "Agenda of the Day",
    scheduleIntro: "How the session runs, from arrival to close.",
    schedule: [
      { title: "Registration and Welcome Coffee", date: "", desc: "Arrive, collect your badge, and settle in over coffee before the sessions begin." },
      { title: "Opening Remarks", date: "", desc: "Motadata and Hilal open the day with a short look at where IT operations in the Kingdom are heading and what this session covers." },
      { title: "Keynote: Building Resilient Digital Operations", date: "", desc: "A practitioner-led talk on how Saudi enterprises are moving from reactive monitoring to predictive, AI-driven operations." },
      { title: "Live Demo: AI-Driven Observability and Service Management", date: "", desc: "A working walkthrough of the AIOps and ServiceOps platforms, showing how machine learning detects and resolves issues and how ticket routing, workflow automation, and CMDB integration tie it together." },
      { title: "Customer Case Study and Panel Discussion", date: "", desc: "Real examples from enterprises that cut MTTR and reduced downtime, followed by an open Q&A with ITOps leaders on the challenges shaping IT operations across the Kingdom." },
      { title: "Networking Lunch", date: "", desc: "Continue the conversation with peers and the Motadata team over lunch before the event wraps." },
    ],
    team: [
      { name: "Kavit Gohel", role: "Partner Marketing Manager", initials: "KG", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces&auto=format&q=80" },
      { name: "Tejas Bhatt", role: "Motadata Team", initials: "TB", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&auto=format&q=80" },
      { name: "Hemal Parmar", role: "Motadata Team", initials: "HP", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces&auto=format&q=80" },
    ],
    registerUrl: "https://forms.office.com/r/HeMuZkUTVQ",
    ctaEmail: "ankit.dave@motadata.com",
    ctaDescription: "We would love to connect if you are attending in Jeddah. Reach out to schedule a one-on-one conversation with our team.",
  },
};

/* ── Lookup helpers ── */

export function getEventBySlug(slug: string): EventDetailData | undefined {
  return events[slug];
}

export function getAllEventSlugs(): string[] {
  return Object.keys(events);
}

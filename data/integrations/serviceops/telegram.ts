import type { ServiceOpsIntegrationData } from "@/components/integrations/serviceops-integration-types";

export const telegramData: ServiceOpsIntegrationData = {
  meta: {
    title: "ServiceOps + Telegram Integration | Motadata",
    description: "Messages become tickets. Chats become actions. Support becomes instant.",
  },
  hero: {
    badge: "ServiceOps Integration",
    headline: "ServiceOps + Telegram",
    tagline: "Support that moves with your users.",
    description: "Messages become tickets. Chats become actions. Support becomes instant.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Talk to an Expert", href: "/contact" },
  },
  compatibility: {
    headline: "ServiceOps integrates seamlessly with Telegram",
    description: "From mobile conversations to structured service workflows.",
  },
  whyItMatters: {
    label: "Why this integration matters",
    title: "Support should be as mobile as your users.",
    description: "Work doesn't wait for portals.\nIt happens on the move.\nTeams message. Users chat. Issues surface in real time.\nBut service systems stay disconnected.\nThat gap slows response. Breaks context. Delays resolution.\nServiceOps bridges that gap.\nBy turning Telegram into a real-time service channel.\nSo users don't switch tools. And support teams don't lose control.\nFrom scattered chats to structured service delivery. From delay to instant response.",
  },
  keyOutcomes: {
    label: "Key Outcomes",
    title: "What you unlock with Telegram + ServiceOps",
    items: [
      { title: "Mobile-first support", description: "Enable users to raise requests instantly from Telegram." },
      { title: "Real-time ticket creation", description: "Convert chats into incidents and service requests automatically." },
      { title: "Faster response cycles", description: "Respond and resolve issues without channel switching." },
      { title: "Always-on accessibility", description: "Support users anytime, anywhere, on any device." },
      { title: "Reduced service friction", description: "Eliminate dependency on portals for faster engagement." },
      { title: "Improved user experience", description: "Meet users where they already communicate." },
    ],
  },
  howItWorks: {
    label: "How it works",
    title: "From chat to closure",
    steps: [
      { title: "Capture", description: "Users send requests via Telegram messages." },
      { title: "Convert", description: "Messages are instantly transformed into structured tickets." },
      { title: "Enrich", description: "User context and history are mapped automatically." },
      { title: "Resolve", description: "Teams act, respond, and close tickets without leaving ServiceOps." },
    ],
  },
  coreUseCases: {
    label: "Core Use Cases",
    title: "Built for real-time, mobile-first IT support",
    items: [
      { title: "On-the-go incident reporting", description: "Employees report issues instantly from mobile devices." },
      { title: "Remote workforce support", description: "Support distributed teams without relying on traditional channels." },
      { title: "Instant service requests", description: "Enable quick requests without logging into portals." },
      { title: "Chat-driven IT support", description: "Turn conversations into trackable, SLA-bound workflows." },
      { title: "Emergency communication channel", description: "Provide a fast fallback channel during outages or disruptions." },
    ],
  },
  personaValue: {
    label: "Persona Value",
    title: "Speed for users. Control for teams.",
    personas: [
      { role: "For Service Desk Leaders", description: "Reduce ticket delays and improve response SLAs with real-time, chat-driven support." },
      { role: "For IT Directors", description: "Extend service reach across mobile and distributed environments without adding complexity." },
      { role: "For CIOs and CTOs", description: "Deliver modern, always-available support experiences that align with digital workplace expectations." },
    ],
  },
  enterpriseReadiness: {
    label: "Enterprise Readiness",
    title: "Real-time support. Structured control.",
    description: "No missed messages.\nNo lost requests.\nNo delayed action.\nJust instant service. At scale.\nBuilt to unify communication and service workflows into one intelligent system.",
  },
  relatedIntegrations: {
    label: "Related Integrations",
    title: "Extend your communication ecosystem",
    items: [
    { name: "Microsoft Teams", slug: "microsoft-teams" },
    { name: "Slack", slug: "slack" },
    { name: "WhatsApp", slug: "whatsapp" },
    ],
  },
  closingCta: {
    headline: "Support at the speed of conversation",
    description: "Respond faster. Resolve smarter. Serve anywhere.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Explore Integrations", href: "/resources/integrations/serviceops" },
  },
};

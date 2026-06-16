import type { ServiceOpsIntegrationData } from "@/components/integrations/serviceops-integration-types";

export const facebookMessengerData: ServiceOpsIntegrationData = {
  meta: {
    title: "ServiceOps + Facebook Messenger Integration | Motadata",
    description: "Messages become tickets. Conversations become resolution. Service becomes effortless.",
  },
  hero: {
    badge: "ServiceOps Integration",
    headline: "ServiceOps + Facebook Messenger",
    tagline: "Support where your users already are.",
    description: "Messages become tickets. Conversations become resolution. Service becomes effortless.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Talk to an Expert", href: "/contact" },
  },
  compatibility: {
    headline: "ServiceOps integrates seamlessly with Facebook Messenger",
    description: "From social conversations to structured service workflows.",
  },
  whyItMatters: {
    label: "Why this integration matters",
    title: "Your users don't think in tickets. They think in messages.",
    description: "They reach out where it's easy. Where it's familiar. Where they already spend time.\nBut when support lives somewhere else, requests get delayed, context gets lost, and experience breaks.\nServiceOps changes that.\nBy bringing Facebook Messenger into your service ecosystem, you meet users where they are while keeping your operations structured and controlled.\nFrom scattered conversations to unified service. From missed messages to managed outcomes.",
  },
  keyOutcomes: {
    label: "Key Outcomes",
    title: "What you unlock with Facebook Messenger + ServiceOps",
    items: [
      { title: "Social-first support", description: "Enable users to raise queries directly via Messenger." },
      { title: "Instant ticket creation", description: "Convert conversations into structured incidents and requests automatically." },
      { title: "Faster response times", description: "Respond to users in real time without switching platforms." },
      { title: "Unified service visibility", description: "Manage Messenger interactions alongside all other service channels." },
      { title: "Higher engagement", description: "Increase response rates by supporting users on familiar platforms." },
      { title: "Improved customer experience", description: "Deliver seamless, conversational support without friction." },
    ],
  },
  howItWorks: {
    label: "How it works",
    title: "From message to resolution",
    steps: [
      { title: "Capture", description: "Users send messages through Facebook Messenger." },
      { title: "Convert", description: "Messages are automatically logged as tickets in ServiceOps." },
      { title: "Enrich", description: "User context, history, and conversation threads are attached." },
      { title: "Resolve", description: "Agents respond, update, and close requests from a unified console." },
    ],
  },
  coreUseCases: {
    label: "Core Use Cases",
    title: "Built for modern, customer-facing support teams",
    items: [
      { title: "Customer service inquiries", description: "Handle product, service, or support queries from social channels." },
      { title: "Omnichannel support strategy", description: "Unify Messenger with email, portal, chat, and ITSM workflows." },
      { title: "High-volume query handling", description: "Manage large volumes of repetitive queries efficiently." },
      { title: "Brand engagement + support", description: "Turn social interactions into meaningful service experiences." },
      { title: "Always-on support channel", description: "Provide 24x7 accessibility through a familiar platform." },
    ],
  },
  personaValue: {
    label: "Persona Value",
    title: "Better engagement for users. Better control for teams.",
    personas: [
      { role: "For Service Desk Leaders", description: "Handle higher ticket volumes without compromising response quality or SLAs." },
      { role: "For IT Directors", description: "Unify social and traditional service channels into a single operational view." },
      { role: "For MSPs", description: "Extend customer support capabilities across social platforms while maintaining multi-client control." },
    ],
  },
  enterpriseReadiness: {
    label: "Enterprise Readiness",
    title: "Social reach. Enterprise control.",
    description: "No missed messages.\nNo fragmented conversations.\nNo disconnected service workflows.\nJust unified support across every channel.\nBuilt to scale engagement while maintaining operational discipline.",
  },
  relatedIntegrations: {
    label: "Related Integrations",
    title: "Extend your communication ecosystem",
    items: [
    { name: "WhatsApp", slug: "whatsapp" },
    { name: "Telegram", slug: "telegram" },
    { name: "Microsoft Teams", slug: "microsoft-teams" },
    ],
  },
  closingCta: {
    headline: "Support that meets users where they are",
    description: "Be available. Be responsive. Be everywhere.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Explore Integrations", href: "/resources/integrations/serviceops" },
  },
};

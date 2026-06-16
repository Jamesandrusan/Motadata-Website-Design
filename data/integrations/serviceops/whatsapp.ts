import type { ServiceOpsIntegrationData } from "@/components/integrations/serviceops-integration-types";

export const whatsappData: ServiceOpsIntegrationData = {
  meta: {
    title: "ServiceOps + WhatsApp Integration | Motadata",
    description: "Extend your helpdesk beyond portals and emails. Let users raise and track tickets directly through WhatsApp.",
  },
  hero: {
    badge: "ServiceOps Integration",
    headline: "ServiceOps + WhatsApp",
    tagline: "Support that reaches everywhere. Service that responds instantly.",
    description: "Extend your helpdesk beyond portals and emails. Let users raise and track tickets directly through WhatsApp. Simple. Familiar. Always available.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Talk to an Expert", href: "/contact" },
  },
  compatibility: {
    headline: "ServiceOps integrates seamlessly with WhatsApp",
    description: "Your service desk. Now in every user's pocket.",
  },
  whyItMatters: {
    label: "Why this integration matters",
    title: "Support should be as accessible as a message",
    description: "Not every user logs into a portal.\nNot every issue waits for email.\nIn fast-moving environments, users expect support the same way they communicate \u2014 instantly.\nServiceOps brings IT support to WhatsApp.\nNo friction. No learning curve. No delays.\nFrom missed requests to instant engagement. From disconnected support to always-on service.",
  },
  keyOutcomes: {
    label: "Key Outcomes",
    title: "What you unlock with WhatsApp + ServiceOps",
    items: [
      { title: "Anytime, anywhere ticket creation", description: "Users can raise incidents or requests instantly via WhatsApp." },
      { title: "Real-time updates", description: "Track ticket status, responses, and resolutions directly in chat." },
      { title: "Higher user adoption", description: "Meet users on a platform they already use daily." },
      { title: "Faster response cycles", description: "Reduce delays caused by emails, portals, or call queues." },
      { title: "Conversational support experience", description: "Turn IT support into a simple, chat-driven interaction." },
      { title: "Reduced service desk workload", description: "Automate responses and deflect repetitive queries through chat workflows." },
    ],
  },
  howItWorks: {
    label: "How it works",
    title: "Support that travels with your users",
    steps: [
      { title: "Message", description: "User sends a request via WhatsApp." },
      { title: "Create", description: "Ticket is automatically logged in ServiceOps with full context." },
      { title: "Respond", description: "Agents engage, update, and resolve issues seamlessly." },
      { title: "Notify", description: "Real-time updates keep users informed until closure." },
    ],
  },
  coreUseCases: {
    label: "Core Use Cases",
    title: "Built for always-connected enterprises",
    items: [
      { title: "Mobile-first incident reporting", description: "Enable employees to log issues without needing a portal or laptop." },
      { title: "Remote workforce support", description: "Support distributed teams across locations and time zones." },
      { title: "Field workforce enablement", description: "Allow on-ground teams to raise tickets instantly from anywhere." },
      { title: "Automated responses", description: "Answer common queries with chatbot-driven workflows." },
      { title: "Ticket tracking via chat", description: "Keep users updated without switching channels." },
      { title: "Alerts and notifications", description: "Send proactive service updates, outages, and reminders." },
    ],
  },
  personaValue: {
    label: "Persona Value",
    title: "Built for reach, speed, and simplicity",
    personas: [
      { role: "For Service Desk Leaders", description: "Increase ticket visibility and user engagement without increasing workload. Deliver support where users actually respond." },
      { role: "For IT Directors", description: "Drive higher service adoption across distributed teams. Improve SLA performance with faster response cycles." },
      { role: "For NOC and IT Operations Teams", description: "Reduce fragmented communication. Capture structured requests directly from users in real time." },
      { role: "For CIOs and CTOs", description: "Enhance employee experience at scale. Extend IT support beyond traditional channels with measurable impact." },
    ],
  },
  enterpriseReadiness: {
    label: "Enterprise Readiness",
    title: "Built for scale. Designed for reach.",
    description: "ServiceOps + WhatsApp enables organizations to deliver IT support beyond traditional boundaries. Whether employees are remote, mobile, or on-field, support stays connected.\nThis is omnichannel service, simplified. Unified. Intelligent. Always on.",
  },
  relatedIntegrations: {
    label: "Related Integrations",
    title: "Extend your communication ecosystem",
    items: [
    { name: "Microsoft Teams", slug: "microsoft-teams" },
    { name: "Slack", slug: "slack" },
    { name: "Email", slug: "office-365" },
    { name: "Web Portal", slug: "web-portal" },
    ],
  },
  closingCta: {
    headline: "Support that's always within reach",
    description: "Bring IT support to WhatsApp. Respond faster. Engage better. Resolve smarter.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Explore Integrations", href: "/resources/integrations/serviceops" },
  },
};

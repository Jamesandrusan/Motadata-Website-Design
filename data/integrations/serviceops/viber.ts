import type { ServiceOpsIntegrationData } from "@/components/integrations/serviceops-integration-types";

export const viberData: ServiceOpsIntegrationData = {
  meta: {
    title: "ServiceOps + Viber Integration | Motadata",
    description: "Make IT support instantly accessible. Enable users to raise issues through Viber.",
  },
  hero: {
    badge: "ServiceOps Integration",
    headline: "ServiceOps + Viber",
    tagline: "Support that meets users where they are.",
    description: "Make IT support instantly accessible. Enable users to raise issues through Viber. Resolve faster with real-time conversations.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Talk to an Expert", href: "/contact" },
  },
  compatibility: {
    headline: "ServiceOps integrates seamlessly with Viber",
    description: "From mobile conversations to structured resolution.",
  },
  whyItMatters: {
    label: "Why this integration matters",
    title: "Support should be easy to reach. Not hard to access.",
    description: "Not every user logs into a portal.\nNot every issue starts with a ticket.\nSometimes, users just want to message. Quickly. Simply. From their phone.\nServiceOps brings IT support to Viber.\nTurning everyday conversations into actionable service requests.\nFrom inaccessible support channels to always-on communication. From delays to instant engagement.",
  },
  keyOutcomes: {
    label: "Key Outcomes",
    title: "What you unlock with Viber + ServiceOps",
    items: [
      { title: "Accessible support anywhere", description: "Allow users to raise tickets directly from Viber." },
      { title: "Faster issue reporting", description: "Eliminate delays caused by portal or email dependency." },
      { title: "Real-time communication", description: "Engage users instantly for faster resolution." },
      { title: "Higher user adoption", description: "Meet users on a platform they already use daily." },
      { title: "Reduced support friction", description: "Simplify how users connect with IT." },
      { title: "Conversational service experience", description: "Make IT support intuitive, mobile-first, and human." },
    ],
  },
  howItWorks: {
    label: "How it works",
    title: "From message to resolution",
    steps: [
      { title: "Initiate", description: "User sends a message on Viber." },
      { title: "Capture", description: "ServiceOps converts it into a structured ticket." },
      { title: "Engage", description: "Agents respond, ask for details, and collaborate in real time." },
      { title: "Resolve", description: "Issue gets resolved with full visibility and tracking." },
    ],
  },
  coreUseCases: {
    label: "Core Use Cases",
    title: "Designed for distributed and mobile-first teams",
    items: [
      { title: "Field workforce support", description: "Enable on-the-go employees to report issues instantly." },
      { title: "Remote user assistance", description: "Provide seamless support for hybrid and remote teams." },
      { title: "Incident reporting", description: "Allow quick escalation of issues through simple messaging." },
      { title: "Service notifications", description: "Send updates, alerts, and resolution messages via Viber." },
      { title: "Customer-facing IT support", description: "Extend IT services to external users or partners." },
      { title: "Multichannel service strategy", description: "Unify Viber with other channels into one ServiceOps platform." },
    ],
  },
  personaValue: {
    label: "Persona Value",
    title: "Accessibility meets efficiency",
    personas: [
      { role: "For Service Desk Leaders", description: "Increase ticket intake without increasing complexity. Deliver consistent service across channels while improving user satisfaction." },
      { role: "For IT Directors", description: "Expand support reach across distributed teams. Ensure no issue goes unreported due to access barriers." },
      { role: "For IT Operations Teams", description: "Capture issues early. Resolve faster with real-time user interaction." },
      { role: "For CIOs and CTOs", description: "Drive adoption of IT services. Improve service accessibility across the organization while maintaining control and visibility." },
    ],
  },
  enterpriseReadiness: {
    label: "Enterprise Readiness",
    title: "Simple for users. Structured for IT.",
    description: "Every Viber message becomes a tracked request.\nEvery interaction is logged, visible, and actionable.\nYou get the flexibility of chat. With the discipline of ITSM.\nAccessible. Scalable. Accountable.",
  },
  relatedIntegrations: {
    label: "Related Integrations",
    title: "Build a complete communication ecosystem",
    items: [
    { name: "WhatsApp", slug: "whatsapp" },
    { name: "Slack", slug: "slack" },
    { name: "Microsoft Teams", slug: "microsoft-teams" },
    { name: "Email", slug: "office-365" },
    ],
  },
  closingCta: {
    headline: "Make IT support truly accessible",
    description: "Meet users where they are. Respond instantly. Resolve efficiently.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Explore Integrations", href: "/resources/integrations/serviceops" },
  },
};

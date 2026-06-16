import type { ServiceOpsIntegrationData } from "@/components/integrations/serviceops-integration-types";

export const adfsData: ServiceOpsIntegrationData = {
  meta: {
    title: "ServiceOps + ADFS Integration | Motadata",
    description: "Connect Motadata ServiceOps with Active Directory Federation Services (ADFS) to extend on-prem identities into modern service environments.",
  },
  hero: {
    badge: "ServiceOps Integration",
    headline: "ServiceOps + ADFS",
    tagline: "Extend identity. Simplify access. Secure every interaction.",
    description: "Connect Motadata ServiceOps with Active Directory Federation Services (ADFS) to extend on-prem identities into modern service environments with seamless, secure authentication.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Talk to an Expert", href: "/contact" },
  },
  compatibility: {
    headline: "ServiceOps integrates seamlessly with ADFS",
    description: "On-prem identity. Cloud-ready access. Enterprise-grade security.",
  },
  whyItMatters: {
    label: "Why this integration matters",
    title: "Why connect ServiceOps with ADFS?",
    description: "Because identity should move with your infrastructure. Not slow it down.\nEnterprises running Active Directory need a secure way to extend identity into modern service platforms without rebuilding access frameworks. With ADFS and ServiceOps, you preserve your existing identity investments while enabling seamless authentication across hybrid environments.\nNo disruption. No duplication. Just controlled, secure access.",
  },
  keyOutcomes: {
    label: "Key Outcomes",
    title: "What you unlock with ADFS + ServiceOps",
    items: [
      { title: "Seamless Single Sign-On", description: "Enable users to access ServiceOps using existing Active Directory credentials." },
      { title: "Hybrid identity extension", description: "Extend on-prem identity to cloud and distributed environments." },
      { title: "Centralized authentication control", description: "Maintain control of authentication policies within your enterprise directory." },
      { title: "Enhanced security posture", description: "Leverage federation and secure token-based authentication." },
      { title: "Reduced identity duplication", description: "Avoid managing multiple user directories across systems." },
      { title: "Compliance-ready access governance", description: "Maintain audit trails and enforce enterprise security standards." },
    ],
  },
  howItWorks: {
    label: "How it works",
    title: "Trusted identity. Everywhere it matters.",
    steps: [
      { title: "Authenticate", description: "Users log in using enterprise Active Directory credentials via ADFS." },
      { title: "Federate", description: "ADFS securely validates identity and issues authentication tokens." },
      { title: "Grant Access", description: "ServiceOps authorizes access based on mapped roles and policies." },
      { title: "Operate", description: "Users and agents work seamlessly without repeated logins." },
    ],
  },
  coreUseCases: {
    label: "Core Use Cases",
    title: "Built for hybrid, security-first enterprises",
    items: [
      { title: "Enterprise SSO with Active Directory", description: "Deliver a consistent login experience across ServiceOps." },
      { title: "Hybrid IT identity management", description: "Extend identity across on-prem and cloud service environments." },
      { title: "Secure remote workforce access", description: "Enable authenticated access for distributed teams." },
      { title: "Identity-driven ITSM workflows", description: "Align user roles with service requests, approvals, and access control." },
      { title: "Compliance and audit readiness", description: "Track and govern access using centralized identity systems." },
      { title: "Zero trust access foundation", description: "Strengthen authentication flows with federation and policy enforcement." },
    ],
  },
  personaValue: {
    label: "Persona Value",
    title: "Built for teams managing identity at enterprise scale",
    personas: [
      { role: "For Service Desk Leaders", description: "Reduce login-related tickets and access issues. Enable faster user onboarding and fewer disruptions so your team can focus on resolving real service challenges." },
      { role: "For IT Directors", description: "Extend existing identity systems into modern ITSM workflows without adding complexity. Maintain centralized control while supporting hybrid infrastructure." },
      { role: "For CIOs and CTOs", description: "Preserve identity investments while enabling secure digital transformation. Ensure compliance, reduce risk, and modernize access across the enterprise." },
    ],
  },
  enterpriseReadiness: {
    label: "Enterprise Readiness",
    title: "Built for secure, hybrid-first organizations",
    description: "Motadata ServiceOps integrates with ADFS using secure federation protocols. Designed for enterprise environments, it supports hybrid infrastructure, strict security requirements, and scalable identity management without disrupting existing systems.",
  },
  relatedIntegrations: {
    label: "Related Integrations",
    title: "Extend your identity ecosystem",
    items: [
    { name: "Azure Active Directory", slug: "azure-ad" },
    { name: "OneLogin", slug: "onelogin" },
    { name: "Okta", slug: "okta" },
    { name: "Keycloak", slug: "keycloak" },
    ],
  },
  closingCta: {
    headline: "Extend identity. Enable access. Secure every service.",
    description: "Connect Motadata ServiceOps with ADFS to bring trusted identity into every service interaction.",
    ctaPrimary: { label: "Get a Demo", href: "/contact" },
    ctaSecondary: { label: "Explore Integrations", href: "/resources/integrations/serviceops" },
  },
};

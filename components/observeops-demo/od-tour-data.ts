export interface TourStep {
  target: string;
  title: string;
  description: string;
  position: "bottom" | "right" | "left" | "top";
}

export const tourSteps: TourStep[] = [
  {
    target: "[data-tour='sidebar']",
    title: "Module Navigation",
    description:
      "Switch between ObserveOps modules here. Each module provides a dedicated dashboard with real-time metrics and insights.",
    position: "right",
  },
  {
    target: "[data-tour='module-network']",
    title: "Network Observability",
    description:
      "Monitor network flows, device health, latency, and availability across your entire infrastructure.",
    position: "right",
  },
  {
    target: "[data-tour='module-logs']",
    title: "Log Monitoring",
    description:
      "Aggregate and analyze logs with structured insights, event correlation, and root cause tracing.",
    position: "right",
  },
  {
    target: "[data-tour='dashboard-area']",
    title: "Live Dashboard",
    description:
      "Interactive dashboards display real-time metrics, charts, and alerts for the selected module.",
    position: "left",
  },
  {
    target: "[data-tour='top-bar']",
    title: "Navigation Bar",
    description:
      "Access product branding, user info, and the Exit Demo button from the top bar.",
    position: "bottom",
  },
  {
    target: "[data-tour='exit-demo']",
    title: "Exit Demo",
    description:
      "Click here when you're done exploring to return to the ObserveOps product page.",
    position: "bottom",
  },
];

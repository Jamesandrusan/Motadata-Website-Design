"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ── Release data ── */

interface ReleaseVersion {
  version: string;
  date: string;
  content?: React.ReactNode;
}

const releases: ReleaseVersion[] = [
  {
    version: "7.7.906",
    date: "25th September' 2025",
    content: (
      <div className="space-y-6">
        {/* What's New */}
        <div>
          <h4 className="text-label-md-strong text-foreground">What&apos;s New?</h4>
          <div className="mt-3 space-y-4">
            <div>
              <h5 className="text-label-md text-foreground">
                Support for ClickHouse 22.3.11.12 and Ubuntu 24.04
              </h5>
              <p className="mt-1 text-body-xs text-muted-foreground">
                The system now supports Ubuntu 24.04 and includes an upgrade to ClickHouse version 22.3.11.12,
                ensuring compatibility with the latest platform and database enhancements.
              </p>
            </div>
          </div>
        </div>

        {/* Log Improvements */}
        <div>
          <h4 className="text-label-md-strong text-foreground">Log Improvements</h4>
          <div className="mt-3 space-y-4">
            <div>
              <h5 className="text-label-md text-foreground">Windows DNS Server Log</h5>
              <p className="mt-1 text-body-xs text-muted-foreground">
                The Windows DNS Log details are now available in the &ldquo;Windows DNS Server Log&rdquo; parser separately.
                Previously, they appeared in the &ldquo;WebSphere Log parser&rdquo;. For this, the universal log parser
                plugin has been upgraded to version 10.0.
              </p>
            </div>
            <div>
              <h5 className="text-label-md text-foreground">
                Added log parser support for multiple network device log types
              </h5>
              <p className="mt-1 text-body-xs text-muted-foreground">
                The system now includes log parsers for key network device logs, enabling better monitoring,
                analysis, and alerting for network activities:
              </p>
              <ul className="mt-2 space-y-1 pl-4">
                {[
                  "CheckPoint Audit Logs",
                  "CheckPoint Messages",
                  "F5 Audit Logs",
                  "F5 ITM Logs",
                  "Extreme Switch AAA Event Logs",
                  "Cisco Switch Authentication Logs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-body-xs text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Rule-Based Filtering */}
        <div>
          <h4 className="text-label-md-strong text-foreground">Rule-Based Filtering in Availability Report</h4>
          <p className="mt-1 text-body-xs text-muted-foreground">
            Added rule functionality in the Availability Report to filter devices based on their status percentage
            (e.g., Down &gt; 50%). Exported Availability Reports now reflect the applied filters, enabling users
            to generate reports for Down or Maintenance devices individually.
          </p>
        </div>

        {/* Enhanced Ring Topology */}
        <div>
          <h4 className="text-label-md-strong text-foreground">
            Enhanced Ring Topology-Based Alert Correlation Functionality
          </h4>
          <p className="mt-1 text-body-xs text-muted-foreground">
            The alert correlation system has been improved to provide more accurate and reliable monitoring
            in ring topologies:
          </p>
          <ul className="mt-2 space-y-1.5 pl-4">
            {[
              "Down Ping Check: The system now pings each child device before disabling it. Only devices confirmed as down are disabled, preventing unnecessary outages.",
              "Ring-Based Connectivity Check: Devices that reconnect through alternate routes are automatically re-checked and re-enabled if they are up. Device-level alert correlation and RPE sync for root devices ensure smoother failover handling.",
              "UPS Dependency Handling: If a UPS fails, its parent access switch is automatically disabled to maintain network stability.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-body-xs text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Security Fixes */}
        <div>
          <h4 className="text-label-md-strong text-foreground">Security Fixes</h4>
          <div className="mt-2 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="px-4 py-2 text-left text-label-sm text-muted-foreground">No.</th>
                  <th className="px-4 py-2 text-left text-label-sm text-muted-foreground">Vulnerability Name</th>
                  <th className="px-4 py-2 text-left text-label-sm text-muted-foreground">CVE-ID</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="px-4 py-2 text-muted-foreground">1</td><td className="px-4 py-2 text-foreground">Apache Struts2 Remote Code Execution (RCE) Vulnerability</td><td className="px-4 py-2 text-muted-foreground">CVE-2024-53677</td></tr>
                <tr><td className="px-4 py-2 text-muted-foreground">2</td><td className="px-4 py-2 text-foreground">Spring Framework Multiple Vulnerabilities</td><td className="px-4 py-2 text-muted-foreground">CVE-2024-22262</td></tr>
                <tr><td className="px-4 py-2 text-muted-foreground">3</td><td className="px-4 py-2 text-foreground">Using Components with Known Vulnerabilities</td><td className="px-4 py-2 text-muted-foreground">CWE-1104</td></tr>
                <tr><td className="px-4 py-2 text-muted-foreground">4</td><td className="px-4 py-2 text-foreground">Server Information Disclosure</td><td className="px-4 py-2 text-muted-foreground">CWE-200</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bug Fixes */}
        <div>
          <h4 className="text-label-md-strong text-foreground">Bug Fixes</h4>
          <ul className="mt-2 space-y-1.5 pl-4">
            {[
              "SLA Reports can now be generated without errors caused by Redis output buffer limits.",
              "NCM firmware templates now display correctly in the GUI.",
              "H2 backups from the DC now restore correctly on the DR system, resolving driver initialization issues in the restore utility.",
              '"Last Triggered (Last 24 Hours)" field now correctly displays data for Trap Alerts in the UI.',
              "CPU metric polling data now displays correctly on the Monitor and Dashboard screens.",
              "Alert Trend data now displays correctly on the Home screen in the GUI.",
              '"Failed Backups" widget in NCM Dashboard now loads and displays data correctly in the UI.',
              "SMS alerts now deliver complete alert messages to the Master NMS in WAN HA setups. For this, the SMS Alert plugin has been upgraded to version 4.0.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-body-xs text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  { version: "7.7.905", date: "TBD" },
  { version: "7.7.904", date: "TBD" },
  { version: "7.7.903", date: "TBD" },
  { version: "7.7.902", date: "TBD" },
  { version: "7.7.901", date: "TBD" },
  { version: "7.7.9", date: "TBD" },
  { version: "7.7.8", date: "TBD" },
  { version: "7.7.7", date: "TBD" },
  { version: "7.7.6", date: "TBD" },
  { version: "7.7.5", date: "TBD" },
  { version: "7.7.4", date: "TBD" },
  { version: "7.7.3", date: "TBD" },
  { version: "7.7.2", date: "TBD" },
  { version: "7.7.1", date: "TBD" },
  { version: "7.7.0", date: "TBD" },
  { version: "7.6.9", date: "TBD" },
  { version: "7.6.8", date: "TBD" },
  { version: "7.6.7", date: "TBD" },
  { version: "7.6.6", date: "TBD" },
  { version: "7.6.5", date: "TBD" },
  { version: "7.6.4", date: "TBD" },
  { version: "7.6.3", date: "TBD" },
  { version: "7.6.2", date: "TBD" },
  { version: "7.6.1", date: "TBD" },
  { version: "7.6.0", date: "TBD" },
  { version: "7.5.9", date: "TBD" },
  { version: "7.5.8", date: "TBD" },
];

/* ── Accordion item ── */

function ReleaseAccordion({ release }: { release: ReleaseVersion }) {
  const [open, setOpen] = useState(false);
  const hasContent = !!release.content;

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => hasContent && setOpen(!open)}
        className={`flex w-full items-center justify-between px-6 py-4 text-left transition-colors ${
          hasContent ? "hover:bg-muted/30 cursor-pointer" : "cursor-default"
        }`}
      >
        <div>
          <p className="text-label-md text-foreground">
            Release Version {release.version}
          </p>
          <p className="mt-0.5 text-caption text-muted-foreground">
            Release Date: {release.date}
          </p>
        </div>
        {hasContent && (
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </button>
      {open && hasContent && (
        <div className="border-t border-border bg-muted/10 px-6 py-6">
          {release.content}
        </div>
      )}
    </div>
  );
}

/* ── Main component ── */

export function PrReleaseNotes() {
  return (
    <section className="relative z-10 border-t border-border py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left — sticky header */}
          <div className="lg:w-2/5">
            <div className="lg:sticky lg:top-24">
              <span className="text-overline text-primary">
                Release Notes
              </span>
              <h2 className="mt-3 text-heading-lg sm:text-3xl">
                NMS Release Notes
              </h2>
              <p className="mt-3 text-body-xs text-muted-foreground">
                Stay updated with the latest features, improvements, and bug fixes
                in Motadata Network Management System
              </p>
            </div>
          </div>

          {/* Right — accordion list */}
          <div className="lg:w-3/5">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              {releases.map((r) => (
                <ReleaseAccordion key={r.version} release={r} />
              ))}
            </div>

            {/* Older releases note */}
            <div className="mt-6 rounded-2xl border border-border bg-card p-5 text-center">
              <p className="text-body-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Older Releases</span>
                <br />
                Contact support for information about releases prior to version 7.5.8
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

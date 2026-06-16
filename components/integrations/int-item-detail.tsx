"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, List } from "lucide-react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { motion } from "framer-motion";
import { HeroOrbs, AnimatedBadge, FadeUp } from "@/components/hero-effects";

/* ── Types ── */

interface TocItem {
  id: string;
  title: string;
  level?: number;
}

interface RelatedIntegration {
  name: string;
  slug: string;
}

interface KpiMetric {
  metric: string;
  description: string;
  type: string;
}

interface KpiSection {
  id: string;
  name: string;
  metrics: KpiMetric[];
}

/* ── TOC sidebar (same as glossary) ── */

function IntToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="rounded-xl border bg-card p-5">
      <div className="flex items-center gap-2 text-[13px] font-semibold text-foreground">
        <List className="h-4 w-4" />
        Table of Contents
      </div>
      <ul className="mt-4 space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className={`block w-full text-left rounded-md px-3 py-1.5 text-[12px] leading-snug transition-colors ${
                (item.level ?? 1) > 1 ? "pl-6" : ""
              } ${
                activeId === item.id
                  ? "bg-muted font-medium text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ── Type badge colors ── */

function typeBadge(type: string) {
  const t = type.toLowerCase();
  if (t === "count") return "bg-blue-50 text-blue-600 border-blue-200";
  if (t === "rate") return "bg-emerald-50 text-emerald-600 border-emerald-200";
  if (t === "percentage") return "bg-amber-50 text-amber-600 border-amber-200";
  if (t === "bytes") return "bg-purple-50 text-purple-600 border-purple-200";
  return "bg-gray-50 text-gray-600 border-gray-200";
}

/* ── KPI Table renderer ── */

function KpiTable({ section }: { section: KpiSection }) {
  return (
    <div className="mb-10">
      <h3 id={section.id} className="mb-3 mt-8 text-lg font-semibold text-foreground scroll-mt-24">
        {section.name}
      </h3>
      <div className="overflow-hidden rounded-xl border border-border">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-5 py-3.5 text-left text-label-sm uppercase tracking-wider text-muted-foreground">
                  Metrics
                </th>
                <th className="px-5 py-3.5 text-left text-label-sm uppercase tracking-wider text-muted-foreground">
                  Description
                </th>
                <th className="px-5 py-3.5 text-left text-label-sm uppercase tracking-wider text-muted-foreground w-28">
                  Type
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {section.metrics.map((m, i) => (
                <tr
                  key={m.metric + i}
                  className="transition-colors hover:bg-muted/20"
                >
                  <td className="px-5 py-3 align-top">
                    <code className="rounded-md bg-foreground/5 px-2 py-0.5 text-caption text-foreground">
                      {m.metric}
                    </code>
                  </td>
                  <td className="px-5 py-3 text-[13px] leading-relaxed text-muted-foreground">
                    {m.description}
                  </td>
                  <td className="px-5 py-3 align-top">
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${typeBadge(m.type)}`}
                    >
                      {m.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ── Data ── */

const tocItems: TocItem[] = [
  { id: "overview", title: "Overview" },
  { id: "prerequisites", title: "Prerequisites" },
  { id: "supported-kpis", title: "List of Supported KPIs" },
  { id: "windows", title: "Windows", level: 2 },
  { id: "cpu-core", title: "Windows CPU Core", level: 2 },
  { id: "directory", title: "Windows Directory", level: 2 },
  { id: "disk", title: "Windows Disk", level: 2 },
  { id: "file", title: "Windows File", level: 2 },
  { id: "service", title: "Windows Service", level: 2 },
  { id: "process", title: "Windows Process", level: 2 },
  { id: "task-scheduler", title: "Windows Task Scheduler", level: 2 },
  { id: "network-interface", title: "Windows Network Interface", level: 2 },
];

const relatedIntegrations: RelatedIntegration[] = [
  { name: "Ubuntu Server", slug: "#" },
  { name: "Red Hat Enterprise Linux", slug: "#" },
  { name: "Windows Cluster", slug: "#" },
];

const kpiSections: KpiSection[] = [
  {
    id: "windows",
    name: "Windows",
    metrics: [
      { metric: "system.network.output.queue.length", description: "The number of packets in the output packet queue.", type: "Count" },
      { metric: "uptime", description: "The uptime of the system.", type: "Count" },
      { metric: "system.network.out.packets.per.sec", description: "The number of packets being transferred out of the device per second.", type: "Count" },
      { metric: "system.disk.io.write.bytes.psec", description: "The bytes transferred per second writing to the disk.", type: "Rate" },
      { metric: "system.cpu.idle.percent", description: "The percentage of time a CPU has spent in the idle state.", type: "Percentage" },
      { metric: "system.disk.used.bytes", description: "The total amount of used disk space on a system.", type: "Bytes" },
      { metric: "system.memory.free.percent", description: "The percentage of free RAM out of total RAM.", type: "Percentage" },
      { metric: "system.serial.number", description: "The serial number of the device.", type: "String" },
      { metric: "system.logical.processors", description: "The number of logical processors on the device CPU.", type: "Count" },
      { metric: "system.virtual", description: "'No' if the system is not virtual. 'Yes' if the system is virtual.", type: "String" },
      { metric: "system.cache.memory.bytes", description: "The amount of memory used as cache memory.", type: "Bytes" },
      { metric: "system.disk.io.time.percent", description: "The percentage of time spent reading or writing to the disk.", type: "Percentage" },
      { metric: "system.os.name", description: "The name of the operating system on the device.", type: "String" },
      { metric: "system.disk.io.write.ops.per.sec", description: "The writing operations per second to the disk.", type: "Rate" },
      { metric: "system.network.bytes.per.sec", description: "The number of bytes per second sent or received for a device.", type: "Rate" },
      { metric: "system.memory.used.percent", description: "The percentage of used RAM out of the total RAM.", type: "Percentage" },
      { metric: "system.model", description: "The model of the device.", type: "String" },
      { metric: "system.disk.io.bytes.per.sec", description: "The amount of bytes transferred per second in I/O operations to and from the disk.", type: "Rate" },
      { metric: "system.memory.available.bytes", description: "The amount of free RAM.", type: "Bytes" },
      { metric: "system.cpu.interrupt.percent", description: "The percentage of time the CPU spent servicing hardware interrupts.", type: "Percentage" },
      { metric: "system.network.out.bytes.per.sec", description: "The number of bytes per second being sent out of an interface.", type: "Rate" },
      { metric: "system.memory.used.bytes", description: "The total amount of used RAM on a system.", type: "Bytes" },
      { metric: "system.network.error.packets", description: "The total number of error packets in a network.", type: "Count" },
      { metric: "system.cpu.description", description: "The description of the CPU.", type: "String" },
      { metric: "system.os.service.pack", description: "The service pack of the operating system.", type: "String" },
      { metric: "system.interrupts.per.sec", description: "The number of CPU interrupts per second.", type: "Rate" },
      { metric: "system.memory.committed.bytes", description: "The amount of committed virtual memory on the RAM.", type: "Bytes" },
      { metric: "system.disk.free.percent", description: "The percentage of free disk space out of the total disk space in the system.", type: "Percentage" },
      { metric: "system.disk.used.percent", description: "The percentage of used disk space out of the total disk space on a system.", type: "Percentage" },
      { metric: "system.network.tcp.connections", description: "The total number of TCP connections.", type: "Count" },
      { metric: "system.context.switches.per.sec", description: "The number of context switches per second.", type: "Rate" },
      { metric: "system.disk.io.read.ops.per.sec", description: "The number of read operations per second from the disk.", type: "Rate" },
      { metric: "system.disk.capacity.bytes", description: "The capacity of the disk.", type: "Bytes" },
      { metric: "system.cpu.type", description: "The type of the CPU.", type: "String" },
      { metric: "system.vendor", description: "The vendor of the device.", type: "String" },
      { metric: "system.name", description: "The name of the system.", type: "String" },
      { metric: "system.threads", description: "The number of threads used by this process.", type: "Count" },
      { metric: "system.processor.queue.length", description: "The number of threads that are delayed in the processor ready queue and are waiting to be executed.", type: "Count" },
      { metric: "system.disk.free.bytes", description: "The total amount of free disk space available on a system.", type: "Bytes" },
      { metric: "system.memory.installed.bytes", description: "The total amount of installed RAM.", type: "Bytes" },
      { metric: "system.disk.ops.per.sec", description: "The number of read-write operations per second on the device.", type: "Rate" },
      { metric: "system.disk.io.idle.time.percent", description: "The percentage of time the CPU is idle while having pending disk I/O requests.", type: "Percentage" },
      { metric: "system.memory.free.bytes", description: "The total amount of free RAM space on a system.", type: "Bytes" },
      { metric: "system.pages.per.sec", description: "The number of pages per second written or read to the disk.", type: "Rate" },
      { metric: "system.disk.io.read.bytes.per.sec", description: "The number of bytes transferred per second while reading from the disk.", type: "Rate" },
      { metric: "system.cpu.user.percent", description: "The percentage of time the CPU spent running user space processes.", type: "Percentage" },
      { metric: "system.cpu.percent", description: "The percentage of a CPU being utilized in a particular instance.", type: "Percentage" },
      { metric: "system.pages.faults.per.sec", description: "The number of page faults per second.", type: "Rate" },
      { metric: "system.network.tcp.retransmissions", description: "The count of lost or damaged packets that were resent over the network.", type: "Count" },
      { metric: "system.os.version", description: "The version of the operating system.", type: "String" },
      { metric: "system.physical.processors", description: "The count of physical processors on the system.", type: "Count" },
      { metric: "system.running.processes", description: "The count of running processes on the system.", type: "Count" },
      { metric: "system.disk.queue.length", description: "The queue length of IO requests issued to your device.", type: "Count" },
      { metric: "system.cpu.cores", description: "The number of CPU cores on your host.", type: "Count" },
      { metric: "system.non.paged.memory.bytes", description: "The space allocated as non-paged memory on the RAM.", type: "Bytes" },
      { metric: "system.paged.memory.bytes", description: "The space allocated as paged memory on the RAM.", type: "Bytes" },
      { metric: "system.network.in.packets.per.sec", description: "The number of packets per second transferred into a device.", type: "Rate" },
      { metric: "system.network.in.bytes.per.sec", description: "The bytes per second transferred into a device.", type: "Rate" },
    ],
  },
  {
    id: "cpu-core",
    name: "Windows CPU Core",
    metrics: [
      { metric: "system.cpu.core", description: "This metric is used to identify the core.", type: "String" },
      { metric: "system.cpu.core.user.percent", description: "The percentage of CPU core being utilized by the user.", type: "Percentage" },
      { metric: "system.cpu.core.percent", description: "The percentage of CPU core being utilized.", type: "Percentage" },
      { metric: "system.cpu.core.interrupt.percent", description: "The percentage of time the CPU core has spent servicing hardware interrupts.", type: "Percentage" },
      { metric: "system.cpu.core.idle.percent", description: "The percentage of time the CPU core has spent idle.", type: "Percentage" },
    ],
  },
  {
    id: "directory",
    name: "Windows Directory",
    metrics: [
      { metric: "system.directory", description: "The path of the directory.", type: "String" },
      { metric: "system.directory.last.access.time", description: "The time when the directory was last accessed.", type: "String" },
      { metric: "system.directory.last.modified.by", description: "The user that last modified the system directory.", type: "String" },
      { metric: "status", description: "'Up' if the directory is available for monitoring. 'Down' if the directory is not available for monitoring.", type: "String" },
      { metric: "system.directory.files", description: "The number of files present inside the directory.", type: "Count" },
      { metric: "system.directory.dirs", description: "The number of sub-directories.", type: "String" },
      { metric: "system.directory.creation.time", description: "The time of the directory creation.", type: "String" },
      { metric: "system.directory.last.write.time", description: "The time when write operation was last performed on the directory.", type: "String" },
      { metric: "system.directory.size.bytes", description: "The size of the directory.", type: "Bytes" },
      { metric: "system.directory.owner", description: "The owner of the directory.", type: "String" },
    ],
  },
  {
    id: "disk",
    name: "Windows Disk",
    metrics: [
      { metric: "system.disk", description: "The name of the disk volume.", type: "String" },
      { metric: "system.disk.volume", description: "The label of the disk volume.", type: "String" },
      { metric: "system.disk.read.bytes.per.sec", description: "The bytes transferred reading from the disk per second.", type: "Rate" },
      { metric: "system.disk.write.bytes.per.sec", description: "The bytes transferred writing to the disk per second.", type: "Rate" },
      { metric: "system.disk.bytes.per.sec", description: "The bytes transferred doing I/O operations to and from the disk per second.", type: "Count" },
      { metric: "system.disk.write.ops.per.sec", description: "The writing operations performed on the disk per second.", type: "Count" },
      { metric: "system.disk.write.time.percent", description: "The percentage of time taken while writing to the disk.", type: "Percentage" },
      { metric: "system.disk.queue.length", description: "The queue length of IO requests issued to your device.", type: "Count" },
      { metric: "system.disk.read.ops.per.sec", description: "The reading operations performed on the disk per second.", type: "Rate" },
      { metric: "system.disk.ops.per.sec", description: "The I/O operations per second on the disk.", type: "Rate" },
      { metric: "system.disk.read.time.percent", description: "The percentage of time taken while reading from the disk.", type: "Percentage" },
      { metric: "system.disk.time.percent", description: "The percentage of time spent doing I/O operations on the disk.", type: "Percentage" },
      { metric: "system.disk.volume.free.bytes", description: "The amount of free disk space.", type: "Bytes" },
      { metric: "system.disk.volume.used.bytes", description: "The amount of used disk space.", type: "Bytes" },
      { metric: "system.disk.volume.capacity.bytes", description: "The capacity of the disk.", type: "Bytes" },
      { metric: "system.disk.volume.used.percent", description: "The percentage of used disk space out of the total disk space on a system.", type: "Percentage" },
      { metric: "system.disk.volume.free.percent", description: "The percentage of free disk space out of the total disk space on a system.", type: "Percentage" },
    ],
  },
  {
    id: "file",
    name: "Windows File",
    metrics: [
      { metric: "system.file", description: "The name of the file.", type: "String" },
      { metric: "system.file.creation.time", description: "The time at which the file was created.", type: "String" },
      { metric: "system.file.last.access.time", description: "The time at which the file was last accessed.", type: "String" },
      { metric: "system.file.owner", description: "The user that created the file.", type: "String" },
      { metric: "system.file.last.write.time", description: "The time at which the last writing operation was performed on the file.", type: "String" },
      { metric: "system.file.last.modified.by", description: "The user that last modified the file.", type: "String" },
      { metric: "system.file.size.bytes", description: "Total size of the file.", type: "Bytes" },
      { metric: "system.file.directory", description: "The name of the directory to which the file belongs.", type: "String" },
      { metric: "status", description: "'Up' if the file is available and 'Down' if the file is not available.", type: "String" },
    ],
  },
  {
    id: "service",
    name: "Windows Service",
    metrics: [
      { metric: "system.service.display.name", description: "The display name of the service.", type: "String" },
      { metric: "system.service", description: "The system service.", type: "String" },
      { metric: "system.service.description", description: "The description of the service.", type: "String" },
      { metric: "system.service.status", description: "The status of the service.", type: "String" },
      { metric: "system.service.startup.type", description: "'Auto' if it starts running on system startup. 'Manual' if the service has to be manually started by the user.", type: "String" },
      { metric: "status", description: "'Up' if the service is available and 'Down' if the service is not available.", type: "String" },
    ],
  },
  {
    id: "process",
    name: "Windows Process",
    metrics: [
      { metric: "system.process", description: "The name of the process.", type: "String" },
      { metric: "system.process.handles", description: "The number of handles used by a process.", type: "Count" },
      { metric: "system.process.memory.used.bytes", description: "The total space used in RAM by a process.", type: "Bytes" },
      { metric: "system.process.io.bytes.per.sec", description: "The bytes transferred per second doing I/O operations to or from the disk for a process.", type: "Rate" },
      { metric: "system.process.uptime", description: "The time for which the process is in running state.", type: "Count" },
      { metric: "system.process.io.ops.per.sec", description: "The count of I/O operations to or from the disk for a process.", type: "Count" },
      { metric: "system.process.threads", description: "The number of threads used by this process.", type: "Count" },
      { metric: "system.process.cpu.percent", description: "The CPU utilization of a process.", type: "Percentage" },
      { metric: "status", description: "'Up' if the process is available and 'Down' if the process is not available.", type: "String" },
      { metric: "system.process.virtual.memory.bytes", description: "The total amount of virtual memory used by a process.", type: "Bytes" },
      { metric: "system.process.name", description: "The name of the process.", type: "String" },
      { metric: "system.process.id", description: "The process Id.", type: "Count" },
      { metric: "system.process.command", description: "The command used to identify the status of the process.", type: "String" },
    ],
  },
  {
    id: "task-scheduler",
    name: "Windows Task Scheduler",
    metrics: [
      { metric: "windows.scheduler.task", description: "The name of the task.", type: "String" },
      { metric: "windows.scheduler.running.tasks", description: "The count of the running tasks.", type: "Count" },
      { metric: "windows.scheduler.failed.tasks", description: "The count of the tasks in failed state.", type: "Count" },
      { metric: "windows.scheduler.task.enabled", description: "'True' if the task is enabled. 'False' if the task is disabled.", type: "String" },
      { metric: "windows.scheduler.task.last.runtime", description: "The time at which the task started its last run.", type: "String" },
      { metric: "windows.scheduler.task.next.runtime", description: "The time at which the task will start its next run.", type: "String" },
      { metric: "windows.scheduler.task.state", description: "The state of the task. Possible values: 'Unknown', 'Disabled', 'Queued', 'Ready', 'Running'.", type: "String" },
      { metric: "windows.scheduler.task.status.code", description: "The status code of the task.", type: "String" },
      { metric: "windows.scheduler.task.result.code", description: "The result code of the task.", type: "Count" },
      { metric: "windows.scheduler.task.state.code", description: "The state code of the task. Values: 0 = 'Unknown', 1 = 'Disabled', 2 = 'Queued', 3 = 'Ready', 4 = 'Running'.", type: "Count" },
      { metric: "windows.scheduler.task.missed.runs", description: "The count of the missed task runs.", type: "Count" },
      { metric: "windows.scheduler.task.result", description: "The description of the end result of the task.", type: "String" },
    ],
  },
  {
    id: "network-interface",
    name: "Windows Network Interface",
    metrics: [
      { metric: "system.network.interface", description: "The name of the interface.", type: "String" },
      { metric: "system.network.interface.in.bytes.per.sec", description: "Bytes transferred into an interface per second.", type: "Count" },
      { metric: "system.network.interface.output.queue.length", description: "The number of network packets in the output packet queue for an interface.", type: "Count" },
      { metric: "system.network.interface.in.packets.per.sec", description: "The number of packets transferred into an interface per second.", type: "Count" },
      { metric: "system.network.interface.out.packets.per.sec", description: "The number of packets transferred out of an interface per second.", type: "Count" },
      { metric: "system.network.interface.bytes.per.sec", description: "The number of bytes sent or received for an interface per second.", type: "Count" },
    ],
  },
];

/* ── Main component ── */

export function IntItemDetail({
  product,
  slug,
}: {
  product: string;
  slug: string;
}) {
  return (
    <>
      {/* Hero */}
      <section className="relative z-10 overflow-hidden py-24 lg:py-32">
        <HeroOrbs />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <FadeUp delay={50}>
            <Link
              href="/resources/integrations/observeops#int-section-servers"
              className="inline-flex items-center gap-1.5 text-body-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Integrations
            </Link>
          </FadeUp>
          <div className="mx-auto max-w-3xl text-center mt-8">
            <FadeUp delay={100}>
              <div className="flex justify-center">
                <AnimatedBadge text="Integration" />
              </div>
            </FadeUp>
            <FadeUp delay={250}>
              <h1 className="mt-6 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
                Windows
              </h1>
            </FadeUp>
            <FadeUp delay={400}>
              <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
                Comprehensive monitoring of Windows-based devices and servers
                with real-time analysis of critical performance metrics, system
                health, and event logs.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Content + TOC */}
      <article className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
              {/* Left: content */}
              <div>
                {/* Overview */}
                <h2 id="overview" className="mb-4 mt-12 text-heading-md text-foreground scroll-mt-24">
                  Overview
                </h2>
                <p className="mb-5 text-[15px] leading-[1.8] text-muted-foreground">
                  The Windows integration in Motadata AIOps allows comprehensive
                  monitoring of Windows-based devices and servers. This integration
                  enables real-time analysis of critical performance metrics, system
                  health, and event logs from Windows machines. By gathering valuable
                  insights into Windows infrastructure, users can proactively
                  identify potential issues, optimize resource utilization, and
                  ensure smooth and efficient operations.
                </p>

                {/* Prerequisites */}
                <h2 id="prerequisites" className="mb-4 mt-12 text-heading-md text-foreground scroll-mt-24">
                  Prerequisites
                </h2>
                <p className="mb-5 text-[15px] leading-[1.8] text-muted-foreground">
                  Kindly refer the prerequisites for Adding Windows Servers for
                  Monitoring{" "}
                  <a
                    href="#"
                    className="font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    here
                  </a>
                  .
                </p>

                {/* Supported KPIs */}
                <h2 id="supported-kpis" className="mb-4 mt-12 text-heading-md text-foreground scroll-mt-24">
                  List of Supported KPIs
                </h2>
                <p className="mb-5 text-[15px] leading-[1.8] text-muted-foreground">
                  The following metrics are collected and monitored by the Windows
                  integration across different subsystems.
                </p>

                {/* KPI Tables */}
                {kpiSections.map((section) => (
                  <KpiTable key={section.id} section={section} />
                ))}

                {/* CTA — orange */}
                <div
                  className="group relative my-8 overflow-hidden rounded-2xl p-8 text-white"
                  style={{ background: "linear-gradient(135deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)))" }}
                >
                  <DottedGlowBackground
                    className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
                    gap={14} radius={1.8} opacity={0.6} color="rgba(255,255,255,0.3)"
                  />
                  <div className="relative z-10">
                    <h3 className="text-heading-md sm:text-2xl">Explore More Integrations</h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/50">
                      Browse our comprehensive integrations catalog to discover all supported platforms and services.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Link href="/resources/integrations/observeops" className="inline-flex h-11 items-center gap-2 rounded-xl bg-white px-6 text-label-md text-foreground transition-opacity hover:bg-white/90">
                        Back to Integrations <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link href="/contact" className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 text-label-md text-white transition-opacity hover:bg-white/20">
                        Contact Us <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* CTA — black */}
                <div className="group relative my-8 overflow-hidden rounded-2xl bg-[#111] p-8 text-white">
                  <DottedGlowBackground
                    className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
                    gap={14} radius={1.8} opacity={0.6} color="rgba(255,255,255,0.3)"
                  />
                  <div className="relative z-10">
                    <h3 className="text-heading-md sm:text-2xl">Explore More Integrations</h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/50">
                      Browse our comprehensive integrations catalog to discover all supported platforms and services.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Link href="/resources/integrations/observeops" className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-label-md text-primary-foreground transition-opacity hover:opacity-90">
                        Back to Integrations <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link href="/contact" className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 text-label-md text-white transition-opacity hover:bg-white/20">
                        Contact Us <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* CTA — white */}
                <div className="group relative my-8 overflow-hidden rounded-2xl border border-border/60 bg-muted/30 p-8 text-foreground">
                  <DottedGlowBackground
                    className="opacity-0 transition-opacity duration-500 group-hover:opacity-50"
                    gap={14} radius={1.8} opacity={0.6}
                  />
                  <div className="relative z-10">
                    <h3 className="text-heading-md sm:text-2xl">Explore More Integrations</h3>
                    <p className="mt-3 max-w-lg text-body-xs text-muted-foreground">
                      Browse our comprehensive integrations catalog to discover all supported platforms and services.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Link href="/resources/integrations/observeops" className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-label-md text-primary-foreground transition-opacity hover:opacity-90">
                        Back to Integrations <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link href="/contact" className="inline-flex h-11 items-center gap-2 rounded-xl border border-border/60 bg-card px-6 text-label-md text-foreground transition-opacity hover:bg-muted">
                        Contact Us <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: sticky TOC */}
              <aside className="hidden lg:block">
                <div className="sticky top-20 space-y-6">
                  <IntToc items={tocItems} />
                </div>
              </aside>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Integrations */}
      <section className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-heading-lg">Related Integrations</h2>
            <p className="mt-2 text-body-xs text-muted-foreground">
              Continue exploring with these related server integrations
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedIntegrations.map((item) => (
              <Link
                key={item.name}
                href={item.slug}
                className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/40 hover:bg-muted/30"
              >
                <span className="text-label-md text-foreground transition-colors group-hover:text-primary">
                  {item.name}
                </span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

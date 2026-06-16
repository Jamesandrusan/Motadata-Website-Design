import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { PrReleaseNotes } from "@/components/press-releases/pr-release-notes";

export default function ReleaseNotesPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />

      {/* Hero */}
      <section className="relative z-10 overflow-hidden py-24 lg:py-32">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-overline text-primary">
              Product Launch • January 15, 2025
            </p>
            <h1 className="mt-4 text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight">
              Motadata Launches AI-Native AIOps Platform with Generative AI Capabilities
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-body-md text-muted-foreground">
              New platform leverages large language models for intelligent incident resolution
              and automated remediation, reducing MTTR by up to 90%.
            </p>
          </div>
        </div>
      </section>

      <PrReleaseNotes />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { CmHero } from "@/components/community/cm-hero";
import { CmForums } from "@/components/community/cm-forums";
import { CmPrograms } from "@/components/community/cm-programs";
import { CmResources } from "@/components/community/cm-resources";
import { CmTestimonials } from "@/components/community/cm-testimonials";
import { CmCta } from "@/components/community/cm-cta";

export default function CommunityPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <CmHero />
      <CmForums />
      <CmPrograms />
      <CmResources />
      <CmTestimonials />
      <CmCta />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}

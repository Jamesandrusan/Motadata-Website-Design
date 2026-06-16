import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { PrivacyPolicyDetail } from "@/components/legal/privacy-policy-detail";

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <PrivacyPolicyDetail />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}

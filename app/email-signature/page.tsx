import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveGrid } from "@/components/interactive-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { EmailSignatureContent } from "@/components/email-signature/email-signature-content";

export default function EmailSignaturePage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <EmailSignatureContent />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}

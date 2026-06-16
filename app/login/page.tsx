import { InteractiveGrid } from "@/components/interactive-grid";
import { Navbar } from "@/components/navbar";
import { LoginPortalSelection } from "@/components/login/login-portal-selection";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Footer } from "@/components/footer";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGrid />
      <Navbar />
      <LoginPortalSelection />
      <ThemeSwitcher />
      <Footer />
    </main>
  );
}

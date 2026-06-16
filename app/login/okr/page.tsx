import { LoginLayout } from "@/components/login/login-layout";
import { LoginForm } from "@/components/login/login-form";

export default function OkrLoginPage() {
  return (
    <LoginLayout portalName="OKR Portal">
      <LoginForm portalType="okr" />
    </LoginLayout>
  );
}

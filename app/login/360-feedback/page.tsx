import { LoginLayout } from "@/components/login/login-layout";
import { LoginForm } from "@/components/login/login-form";

export default function FeedbackLoginPage() {
  return (
    <LoginLayout portalName="360° Feedback Portal">
      <LoginForm portalType="360-feedback" />
    </LoginLayout>
  );
}

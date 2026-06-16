import { LoginLayout } from "@/components/login/login-layout";
import { LoginForm } from "@/components/login/login-form";

export default function EmployeeLoginPage() {
  return (
    <LoginLayout portalName="Employee Portal">
      <LoginForm portalType="employee" />
    </LoginLayout>
  );
}

import Email from "@/components/forms/login/Email";
import { useTranslations } from "next-intl";

export default function Login() {
  const t = useTranslations("Login");
  return <Email />;
}

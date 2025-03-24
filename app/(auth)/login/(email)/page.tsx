import { auth } from "@/auth";
import Email from "@/components/forms/login/Email";

export default async function Login() {
  const session = await auth();
  return <Email />;
}

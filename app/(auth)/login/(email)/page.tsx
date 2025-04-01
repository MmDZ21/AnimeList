import { auth } from "@/auth";
import Email from "@/components/forms/login/Email";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await auth();
  session?.user ? redirect("/dashboard") : null
  return <Email />;
}

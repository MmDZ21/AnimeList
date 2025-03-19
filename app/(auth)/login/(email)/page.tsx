import { auth } from "@/auth";
import Email from "@/components/forms/login/Email";

export default async function Login() {
  const session = await auth();
  console.log(session);
  return <Email />;
}

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

export default async function LoginPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (session && session.value === "authenticated") {
    redirect("/admin");
  }

  return <LoginForm />;
}

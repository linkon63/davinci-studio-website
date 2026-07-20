"use server"

import { cookies } from "next/headers";

export async function loginAction(prevState: unknown, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const expectedEmail = process.env.ADMIN_EMAIL || "admin@gmail.com";
  const expectedPassword = process.env.ADMIN_PASSWORD || "password";

  if (email === expectedEmail && password === expectedPassword) {
    const cookieStore = await cookies();
    cookieStore.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
      sameSite: "lax",
    });
    return { success: true, error: null };
  }

  return { success: false, error: "Invalid email or password" };
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
}

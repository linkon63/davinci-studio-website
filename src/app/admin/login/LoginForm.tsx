"use client"

import * as React from "react";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "../actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Mail, AlertCircle, Loader2 } from "lucide-react";
import Image from "next/image";

export default function LoginForm() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(loginAction, {
    success: false,
    error: null,
  });

  useEffect(() => {
    if (state?.success) {
      router.push("/admin");
      router.refresh();
    }
  }, [state, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground font-sans relative overflow-hidden px-4">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02),transparent_60%)] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Brand Logo & Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-16 h-12 mb-3">
            <Image
              src="/logo.jpg"
              alt="Da Vinci Media"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h2 className="font-montserrat font-bold text-xl tracking-wider text-foreground">
            DAVINCI STUDIO
          </h2>
          <p className="text-muted-foreground text-xs mt-1">Admin Portal Sign In</p>
        </div>

        {/* Login Card */}
        <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
          <form action={formAction} className="space-y-5">
            {/* Error Message */}
            {state?.error && (
              <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 p-3 rounded-lg animate-fade-up">
                <AlertCircle className="size-4 shrink-0" />
                <span>{state.error}</span>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-muted-foreground">
                  <Mail className="size-4" />
                </span>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="admin@gmail.com"
                  defaultValue="admin@gmail.com"
                  className="pl-10 h-10 border-input bg-transparent text-foreground placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:ring-ring/50"
                  disabled={isPending}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-muted-foreground">
                  <Lock className="size-4" />
                </span>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  defaultValue="password"
                  className="pl-10 h-10 border-input bg-transparent text-foreground placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:ring-ring/50"
                  disabled={isPending}
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isPending}
              className="w-full h-10 mt-2 bg-primary text-primary-foreground hover:bg-primary/95 active:translate-y-0 rounded-lg font-montserrat font-bold text-xs tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              {isPending ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  AUTHENTICATING...
                </>
              ) : (
                "SIGN IN"
              )}
            </Button>
          </form>
        </div>

        {/* Footer info */}
        <p className="text-center text-muted-foreground text-xs mt-6 font-light">
          &copy; {new Date().getFullYear()} Da Vinci Media. All rights reserved.
        </p>
      </div>
    </div>
  );
}

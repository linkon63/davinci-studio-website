"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Status = "idle" | "loading" | "success" | "error";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const value = email.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!isValid) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    // No backend yet — simulate a request so the UI is complete.
    // Swap this for a POST to your mailing-list provider when ready.
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return (
      <p
        role="status"
        className="text-sm text-foreground/80"
      >
        Thanks — you&apos;re on the list. We&apos;ll be in touch soon.
      </p>
    );
  }

  return (
    <div className="w-full space-y-2">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 sm:flex-row"
        noValidate
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <Input
          id="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") setStatus("idle");
          }}
          aria-invalid={status === "error"}
          className="h-11 flex-1"
          disabled={status === "loading"}
        />
        <Button
          type="submit"
          size="lg"
          className="h-11"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Joining…" : "Notify me"}
        </Button>
      </form>
      {status === "error" && (
        <p role="alert" className="text-sm text-destructive">
          Please enter a valid email address.
        </p>
      )}
    </div>
  );
}

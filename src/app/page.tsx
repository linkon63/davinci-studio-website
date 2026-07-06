import Image from "next/image";
import { SubscribeForm } from "@/components/subscribe-form";

export default function ComingSoonPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-16">
      {/* Ambient background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_75%)]" />
      </div>

      <section className="flex w-full max-w-xl flex-col items-center gap-8 text-center">
        <Image
          src="/logo.jpg"
          alt="Davinci Media"
          width={948}
          height={915}
          priority
          className="h-40 w-40 rounded-2xl object-contain sm:h-48 sm:w-48"
        />

        <div className="space-y-4">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Coming Soon
          </span>

          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Davinci Project Studio
          </h1>

          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            We&apos;re crafting something remarkable. Our new studio site is on
            its way — leave your email and be the first to know when we launch.
          </p>
        </div>

        <div className="w-full max-w-md">
          <SubscribeForm />
        </div>
      </section>

      <footer className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-1 text-center text-xs text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Davinci Media. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

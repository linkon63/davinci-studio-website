import Image from "next/image";
import { Countdown } from "@/components/countdown";

export default function ComingSoonPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-16">
      {/* Ambient aurora background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-aurora absolute left-1/2 top-1/2 h-[45rem] w-[45rem] rounded-full bg-[conic-gradient(from_0deg,rgba(255,255,255,0.10),rgba(120,120,120,0.04),rgba(255,255,255,0.10))] blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_78%)]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
      </div>

      <section className="flex w-full max-w-4xl flex-col items-center gap-10 text-center">
        {/* Logo */}
        <Image
          src="/logo.jpg"
          alt="Davinci Media"
          width={948}
          height={915}
          priority
          className="animate-float-slow animate-fade-up h-20 w-20 rounded-2xl object-contain sm:h-24 sm:w-24"
        />

        {/* Big animated headline */}
        <div className="animate-fade-up space-y-4 [animation-delay:120ms]">
          <p className="font-apple text-xs font-medium uppercase tracking-[0.5em] text-muted-foreground sm:text-sm">
            Davinci Project Studio
          </p>
          <h1 className="font-apple text-[19vw] font-semibold leading-[0.85] tracking-[-0.04em] sm:text-[13rem]">
            <span className="animate-shimmer block">Coming</span>
            <span className="animate-shimmer block">Soon</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="animate-fade-up max-w-xl text-pretty font-apple text-base font-light leading-relaxed text-muted-foreground [animation-delay:240ms] sm:text-lg">
          Something remarkable is on its way. We&apos;re putting the finishing
          touches on the new studio experience.
        </p>

        {/* Countdown */}
        <div className="animate-fade-up mt-2 [animation-delay:360ms]">
          <Countdown />
        </div>

        {/* Launch date */}
        <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-5 py-2 font-apple text-sm font-medium tracking-tight text-foreground/90 backdrop-blur [animation-delay:480ms]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-foreground/70" />
          Launching August 15, 2026
        </p>
      </section>

      <footer className="absolute inset-x-0 bottom-6 text-center font-apple text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Davinci Media. All rights reserved.
      </footer>
    </main>
  );
}

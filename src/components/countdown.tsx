"use client";

import { useSyncExternalStore } from "react";

// Launch date — August 15, 2026.
const LAUNCH_DATE = new Date("2026-08-15T00:00:00");

// --- A tiny "current time" store so the countdown stays hydration-safe. ---
// Server and the first client render both read 0 (the placeholder), then the
// subscription kicks in on the client and ticks every second.
let currentNow = 0;

function subscribe(onChange: () => void) {
  currentNow = Date.now();
  onChange();
  const id = setInterval(() => {
    currentNow = Date.now();
    onChange();
  }, 1000);
  return () => clearInterval(id);
}

const getSnapshot = () => currentNow;
const getServerSnapshot = () => 0;

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function computeTimeLeft(now: number): TimeLeft {
  const clamped = Math.max(0, LAUNCH_DATE.getTime() - now);
  return {
    days: Math.floor(clamped / 86_400_000),
    hours: Math.floor((clamped / 3_600_000) % 24),
    minutes: Math.floor((clamped / 60_000) % 60),
    seconds: Math.floor((clamped / 1_000) % 60),
  };
}

const UNITS: Array<{ key: keyof TimeLeft; label: string }> = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export function Countdown() {
  const now = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const timeLeft = now === 0 ? null : computeTimeLeft(now);

  const isLaunched =
    timeLeft !== null &&
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (isLaunched) {
    return (
      <p className="font-apple text-lg font-medium tracking-tight text-foreground/80">
        We&apos;re live. Welcome to Davinci Project Studio.
      </p>
    );
  }

  return (
    <div
      className="flex items-start justify-center gap-3 sm:gap-5"
      role="timer"
      aria-label="Time remaining until launch"
    >
      {UNITS.map(({ key, label }, index) => (
        <div key={key} className="flex items-start gap-3 sm:gap-5">
          <div className="flex w-16 flex-col items-center sm:w-24">
            <span className="font-apple text-4xl font-semibold tabular-nums tracking-tight text-foreground sm:text-6xl">
              {timeLeft ? String(timeLeft[key]).padStart(2, "0") : "--"}
            </span>
            <span className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
              {label}
            </span>
          </div>
          {index < UNITS.length - 1 && (
            <span
              aria-hidden
              className="font-apple text-4xl font-light text-muted-foreground/40 sm:text-6xl"
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

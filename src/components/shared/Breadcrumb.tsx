"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SplitType from "split-type";
import { BreadcrumbPath } from "@/types/common";

interface BreadcrumbProps {
  title: string;
  description: string;
  paths: BreadcrumbPath[];
  className?: string;
}

export default function Breadcrumb({ title, description, paths, className }: BreadcrumbProps) {
  const breadcrumbRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!breadcrumbRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let titleText: SplitType | null = null;

    const descEl = breadcrumbRef.current.querySelector("p");
    const lineEl = breadcrumbRef.current.querySelector(".lg\\:block");
    const navEl = breadcrumbRef.current.querySelector("nav");

    const tl = gsap.timeline();

    if (!prefersReduced) {
      const titleEl = breadcrumbRef.current.querySelector("#breadcrumb-title");
      if (titleEl) {
        titleText = new SplitType(titleEl as HTMLElement, { types: "chars" });
        if (titleText.chars && titleText.chars.length > 0) {
          tl.fromTo(
            titleText.chars,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1, stagger: 0.03, ease: "power1.out" }
          );
        }
      }
    }

    if (descEl || lineEl || navEl) {
      tl.fromTo(
        [descEl, lineEl, navEl].filter(Boolean),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" },
        "-=0.6"
      );
    }

    return () => {
      if (titleText) {
        titleText.revert();
      }
    };
  }, { scope: breadcrumbRef });

  return (
    <div
      ref={breadcrumbRef}
      className={cn(
        "relative w-full bg-[#010101] py-16 md:py-24 lg:py-28 overflow-hidden border-b border-zinc-900 select-none",
        className
      )}
    >
      <div className="absolute left-0 top-[-50px] md:top-[-72px] w-[500px] md:w-[871px] h-full pointer-events-none opacity-[0.04] z-0 select-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 871 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet"
        >
          <path
            d="M-50 -100 L320 440 L690 -100"
            stroke="#F4F4EA"
            strokeWidth="80"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col gap-6 md:gap-8">
          <h1
            id="breadcrumb-title"
            className="text-white-color text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-proxima uppercase leading-tight tracking-tight overflow-hidden py-1"
          >
            {title}
          </h1>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-11">
            <p className="text-body-color text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-proxima leading-relaxed md:leading-8 max-w-[676px]">
              {description}
            </p>

            <div className="hidden lg:block lg:flex-grow h-[1px] bg-zinc-700 max-w-[384px]" />

            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-3 bg-transparent py-2 border-b border-transparent"
            >
              {paths.map((path, index) => (
                <div key={path.name} className="flex items-center gap-3">
                  {path.href && !path.active ? (
                    <Link
                      href={path.href}
                      className="text-recording-red text-base md:text-lg font-semibold font-proxima uppercase leading-5 tracking-tight hover:underline transition-all"
                    >
                      {path.name}
                    </Link>
                  ) : (
                    <span className="text-white-color text-base md:text-lg font-semibold font-proxima uppercase leading-5 tracking-tight">
                      {path.name}
                    </span>
                  )}

                  {index < paths.length - 1 && (
                    <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
                      <Image
                        src="/bredcump-icon.svg"
                        alt="arrow"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

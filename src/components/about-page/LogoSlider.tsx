"use client";

import { useState } from "react";
import Image from "next/image";

const logos = [
  "/assets/aboutpage/logos/1.png",
  "/assets/aboutpage/logos/2.png",
  "/assets/aboutpage/logos/3.png",
  "/assets/aboutpage/logos/4.png",
  "/assets/aboutpage/logos/5.png",
  "/assets/aboutpage/logos/6.png",
];

const duplicatedLogos = [...logos, ...logos];

const horizontalGradient =
  "linear-gradient(90deg, rgba(70, 70, 70, 0.00) 0%, #464646 55.29%, rgba(70, 70, 70, 0.00) 100%)";

const leftFade =
  "linear-gradient(to right, #010101 0%, transparent 100%)";

const rightFade =
  "linear-gradient(to left, #010101 0%, transparent 100%)";

export default function LogoSlider() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="w-full bg-primary-color overflow-hidden flex flex-col items-center py-[70px]">
      {/* Heading */}
      <div>
        <h1 className="font-proxima font-semibold text-[32px] text-white-color mb-6">
          We worked with global largest brands
        </h1>
      </div>

      {/* Top gradient bar */}
      <div
        className="h-[1px] w-full"
        style={{ background: horizontalGradient }}
      />

      {/* Slider with edge fades */}
      <div
        className="relative w-full py-[52px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left edge fade */}
        <div
          className="absolute inset-y-0 left-0 z-10 w-[80px] md:w-[150px] pointer-events-none"
          style={{ background: leftFade }}
        />

        {/* Marquee track */}
        <div
          className="flex w-max animate-logo-scroll"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {duplicatedLogos.map((src, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 mx-[24px] md:mx-[40px] flex items-center justify-center w-[120px] h-[60px] md:w-[160px] md:h-[80px] hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={src}
                alt={`Partner Logo ${(index % logos.length) + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 120px, 160px"
              />
            </div>
          ))}
        </div>

        {/* Right edge fade */}
        <div
          className="absolute inset-y-0 right-0 z-10 w-[80px] md:w-[150px] pointer-events-none"
          style={{ background: rightFade }}
        />
      </div>

      {/* Bottom gradient bar */}
      <div
        className="h-[1px] w-full"
        style={{ background: horizontalGradient }}
      />
    </div>
  );
}

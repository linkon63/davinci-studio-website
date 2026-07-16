"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/assets/homepage/case1.webp",
  "/assets/homepage/case2.webp",
  "/assets/homepage/case3.webp",
  "/assets/homepage/case4.webp",
  "/assets/homepage/case5.webp",
  "/assets/homepage/service1.webp",
  "/assets/homepage/service2.webp",
  "/assets/homepage/service3.webp",
  "/assets/homepage/blog1.webp",
];

export default function ImageSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;
    const slides = container.querySelectorAll<HTMLElement>(".slide-item");

    const ctx = gsap.context(() => {
      const totalWidth = container.scrollWidth;
      const sectionWidth = section.offsetWidth;
      const scrollDistance = totalWidth - sectionWidth;

      // Horizontal scroll
      const horizontalScroll = gsap.to(container, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Continuous depth-of-field per image
      slides.forEach((slide: HTMLElement) => {
        // Entrance: edge → center
        gsap.fromTo(
          slide,
          { scale: 0.85, rotation: -8, filter: "blur(10px)" },
          {
            scale: 1,
            rotation: 0,
            filter: "blur(0px)",
            ease: "none",
            scrollTrigger: {
              trigger: slide,
              containerAnimation: horizontalScroll,
              start: "left right",
              end: "left center",
              scrub: true,
            },
          }
        );

        // Exit: center → edge
        gsap.fromTo(
          slide,
          { scale: 1, rotation: 0, filter: "blur(0px)" },
          {
            scale: 0.85,
            rotation: 8,
            filter: "blur(10px)",
            ease: "none",
            scrollTrigger: {
              trigger: slide,
              containerAnimation: horizontalScroll,
              start: "right center",
              end: "right left",
              scrub: true,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-primary-color overflow-hidden flex items-center"
    >
      <div ref={containerRef} className="flex gap-6 pl-16">
        {images.map((src, i) => (
          <div
            key={i}
            className={`slide-item relative overflow-hidden rounded-lg h-[414px] shrink-0 ${i % 2 === 0 ? "translate-y-[60px]" : ""
              } w-[312px] md:w-[422px]`}
          >
            <Image
              src={src}
              alt={`Work ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 312px, 422px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
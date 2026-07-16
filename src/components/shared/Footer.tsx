"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FooterCTA from "../footer/FooterCTA";
import FooterColumns from "../footer/FooterColumns";
import FooterBranding from "../footer/FooterBranding";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!footerRef.current) return;
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // 1. Hero Content Entrance
      const heroSub = footerRef.current.querySelector(".footer-hero-sub");
      const heroTitle = footerRef.current.querySelector(".footer-hero-title");
      const heroDesc = footerRef.current.querySelector(".footer-hero-desc");
      const heroSocials = footerRef.current.querySelector(".footer-social-links");
      const heroJourney = footerRef.current.querySelector(".footer-journey-btn");

      const heroElements = [heroSub, heroTitle, heroDesc, heroSocials, heroJourney].filter(Boolean);

      if (heroElements.length > 0) {
        gsap.fromTo(
          heroElements,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 2. Columns Entrance
      const cols = footerRef.current.querySelectorAll(".footer-col");
      if (cols.length > 0) {
        gsap.fromTo(
          cols,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cols[0],
              start: "top 92%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 3. Social & Journey Button Waves (Horizontal flow + Hover timeline)
      const buttons = footerRef.current.querySelectorAll(".social-btn");
      buttons.forEach((btn) => {
        const redBg = btn.querySelector(".red-bg");
        const waveBack = btn.querySelector(".btn-wave-back");
        const waveFront = btn.querySelector(".btn-wave-front");

        gsap.set(redBg, { yPercent: 65 });

        const hoverTl = gsap.timeline({ paused: true });
        hoverTl.to(redBg, {
          yPercent: 0,
          duration: 0.4,
          ease: "power3.out",
        });

        if (waveBack && waveFront) {
          gsap.set(waveFront, { xPercent: -50 });

          gsap.to(waveBack, {
            xPercent: -50,
            duration: 16,
            ease: "none",
            repeat: -1,
          });

          gsap.to(waveFront, {
            xPercent: 0,
            duration: 11,
            ease: "none",
            repeat: -1,
          });
        }

        btn.addEventListener("mouseenter", () => hoverTl.play());
        btn.addEventListener("mouseleave", () => hoverTl.reverse());
      });

      // 4. Large Branding Text Wave & Buoyant Lettering Animations
      const waveBack = footerRef.current.querySelector(".wave-back");
      const waveFront = footerRef.current.querySelector(".wave-front");
      const wavesGroup = footerRef.current.querySelector(".waves-group");
      const waveContainer = footerRef.current.querySelector(".wave-container");

      if (waveBack && waveFront && wavesGroup && waveContainer) {
        gsap.set(waveBack, { x: 0 });
        gsap.set(waveFront, { x: -1308 });

        gsap.to(waveBack, {
          x: -1308,
          duration: 15,
          ease: "none",
          repeat: -1,
          force3D: true,
        });

        gsap.to(waveFront, {
          x: 0,
          duration: 10,
          ease: "none",
          repeat: -1,
          force3D: true,
        });

        gsap.to(waveBack, {
          y: 8,
          duration: 4.0,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          force3D: true,
        });

        gsap.to(waveFront, {
          y: 12,
          duration: 3.0,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          force3D: true,
        });

        const brandingHoverTl = gsap.timeline({ paused: true });
        brandingHoverTl.to(wavesGroup, {
          y: -110,
          duration: 1.5,
          ease: "power3.inOut",
          force3D: true,
        });

        waveContainer.addEventListener("mouseenter", () => brandingHoverTl.play());
        waveContainer.addEventListener("mouseleave", () => brandingHoverTl.reverse());

        // 5. Letter reveal + weightless floating
        const chars = waveContainer.querySelectorAll(".wave-char");
        if (chars.length > 0) {
          gsap.set(chars, { transformOrigin: "50% 50%", opacity: 0, scale: 0.8 });

          const revealTl = gsap.timeline({
            scrollTrigger: {
              trigger: waveContainer,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          });

          chars.forEach((char, index) => {
            const delay = index * 0.04;
            gsap.set(char, { transformOrigin: "50% 50%", opacity: 0, scale: 0.6, rotation: index % 2 === 0 ? -12 : 12, filter: "blur(12px)" });
            revealTl.fromTo(
              char,
              { opacity: 0, scale: 0.6, rotation: index % 2 === 0 ? -12 : 12, filter: "blur(12px)" },
              {
                opacity: 1,
                scale: 1,
                rotation: 0,
                filter: "blur(0px)",
                duration: 1.4,
                ease: "power3.out",
                onComplete: () => {
                  if (prefersReduced) return;

                  // Infinite sloshing vertical drift
                  const floatTl = gsap.timeline({
                    repeat: -1,
                    yoyo: true,
                    defaults: { ease: "sine.inOut" },
                  });
                  floatTl
                    .to(char, {
                      y: -16,
                      duration: 2.2 + Math.random() * 0.4,
                      force3D: true,
                    })
                    .to(char, {
                      y: 4,
                      duration: 2.2 + Math.random() * 0.4,
                      force3D: true,
                    });

                  // Continuous rotation rocking
                  gsap.to(char, {
                    rotation: (index % 2 === 0 ? 1 : -1) * (3 + Math.random() * 2),
                    duration: 3.5 + Math.random() * 1.5,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1,
                    force3D: true,
                  });

                  // Continuous organic scaling shifts
                  gsap.to(char, {
                    scaleY: 1.06,
                    scaleX: 0.94,
                    duration: 1.6 + Math.random() * 0.4,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1,
                    force3D: true,
                  });
                },
              },
              delay
            );
          });
        }
      }
    },
    { scope: footerRef }
  );

  return (
    <footer ref={footerRef} className="bg-primary-color">
      {/* Top CTA */}
      <FooterCTA />

      {/* Bottom Columns */}
      <FooterColumns />

      {/* Large Branding text wave */}
      <FooterBranding />

      {/* Copyright */}
      <div className="font-proxima bg-secondary-dark text-center text-white-color text-sm md:text-xl pt-3 pb-2">
        @ {new Date().getFullYear()} Da Vinci Media. All rights reserved.
      </div>
    </footer>
  );
}

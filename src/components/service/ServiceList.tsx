"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard, { ServiceCardData } from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const services: ServiceCardData[] = [
  {
    id: "01.",
    title: "Digital\n& Marketing",
    image: "/assets/homepage/service1.webp",
    items: [
      {
        title: "Ad Marketing & Campaign Design",
        desc: "Defining who your next best customers are and new market opportunities.",
      },
      {
        title: "Business Growth Strategy & Optimization",
        desc: "Defining who your next best customers are and new market opportunities.",
      },
      {
        title: "Event & Activity",
        desc: "Defining who your next best customers are and new market opportunities.",
      },
    ],
  },
  {
    id: "02.",
    title: "Web &\nExperience",
    image: "/assets/homepage/service2.webp",
    items: [
      {
        title: "Digital Product experience Design",
        desc: "Defining who your next best customers are and new market opportunities.",
      },
      {
        title: "Web Design Development",
        desc: "Defining who your next best customers are and new market opportunities.",
      },
      {
        title: "Growth strategy",
        desc: "Defining who your next best customers are and new market opportunities.",
      },
    ],
  },
  {
    id: "03.",
    title: "Branding\nYour Business",
    image: "/assets/homepage/service3.webp",
    items: [
      {
        title: "Brand Storytelling & Content",
        desc: "Defining who your next best customers are and new market opportunities.",
      },
      {
        title: "Brand Design & Identity",
        desc: "Defining who your next best customers are and new market opportunities.",
      },
      {
        title: "Creating Production Work",
        desc: "Defining who your next best customers are and new market opportunities.",
      },
    ],
  },
];

export default function ServiceList() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      // Animate each service card on scroll
      const cards = sectionRef.current.querySelectorAll(".service-card");
      cards.forEach((card) => {
        const imageWrapper = card.querySelector(".service-image-wrapper");
        const image = card.querySelector(".service-image") as HTMLImageElement;
        const items = card.querySelectorAll(".group");
        const titleWords = card.querySelectorAll("h3");
        const idSpan = card.querySelector("span");

        // Set initial states
        gsap.set([idSpan, titleWords], { opacity: 0, y: 30 });
        gsap.set(items, { opacity: 0, y: 20 });

        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        // 1. Text & ID reveals
        cardTl.to(
          [idSpan, titleWords],
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          }
        );

        // 2. Image reveal (clip-path)
        if (imageWrapper && image) {
          gsap.set(imageWrapper, { clipPath: "inset(0 100% 0 0)" });
          gsap.set(image, { scale: 1.15 });

          cardTl.to(
            imageWrapper,
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 1.2,
              ease: "power4.inOut",
            },
            "-=0.6"
          );

          cardTl.to(
            image,
            {
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
            },
            "-=1.0"
          );
        }

        // 3. Right column items stagger
        if (items.length > 0) {
          cardTl.to(
            items,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
            },
            "-=0.8"
          );
        }

        // 4. Mousemove interactive parallax hover effect on desktop
        const matchMedia = gsap.matchMedia();
        matchMedia.add("(min-width: 1024px)", () => {
          if (image) {
            const handleMouseMove = (e: Event) => {
              const mouseEvent = e as MouseEvent;
              const rect = card.getBoundingClientRect();
              const x = mouseEvent.clientX - rect.left;
              const y = mouseEvent.clientY - rect.top;

              const xNorm = x / rect.width - 0.5;
              const yNorm = y / rect.height - 0.5;

              gsap.to(image, {
                xPercent: -xNorm * 5,
                yPercent: -yNorm * 5,
                scale: 1.08,
                ease: "power3.out",
                duration: 0.8,
                overwrite: "auto",
              });
            };

            const handleMouseLeave = () => {
              gsap.to(image, {
                xPercent: 0,
                yPercent: 0,
                scale: 1,
                ease: "power3.out",
                duration: 0.8,
                overwrite: "auto",
              });
            };

            card.addEventListener("mousemove", handleMouseMove);
            card.addEventListener("mouseleave", handleMouseLeave);

            return () => {
              card.removeEventListener("mousemove", handleMouseMove);
              card.removeEventListener("mouseleave", handleMouseLeave);
            };
          }
        });
      });

      // Animate dividers
      const dividers = sectionRef.current.querySelectorAll(".service-divider");
      dividers.forEach((divider) => {
        gsap.fromTo(
          divider,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            ease: "power2.inOut",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: divider,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-primary-color text-white-color py-10 md:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        {services.map((service, index) => (
          <div key={service.id}>
            <ServiceCard service={service} />
            {index < services.length - 1 && (
              <div className="service-divider h-[1px] bg-zinc-700/60 w-full" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

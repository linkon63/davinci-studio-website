"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  aspectRatio: string;
}

const initialCaseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Modern SaaS Dashboard for Business Analytics",
    category: "UI/UX Design",
    year: "2026",
    image: "/assets/img/work/work1.webp",
    aspectRatio: "aspect-[480/371]",
  },
  {
    id: 2,
    title: "Modern SaaS Dashboard for Business Analytics",
    category: "UI/UX Design",
    year: "2026",
    image: "/assets/img/work/work2.webp",
    aspectRatio: "aspect-[700/535]",
  },
  {
    id: 3,
    title: "Modern SaaS Dashboard for Business Analytics",
    category: "UI/UX Design",
    year: "2026",
    image: "/assets/img/work/work3.webp",
    aspectRatio: "aspect-[1096/535]",
  },
  {
    id: 4,
    title: "Modern SaaS Dashboard for Business Analytics",
    category: "UI/UX Design",
    year: "2026",
    image: "/assets/img/work/work4.webp",
    aspectRatio: "aspect-[608/497]",
  },
  {
    id: 5,
    title: "Modern SaaS Dashboard for Business Analytics",
    category: "UI/UX Design",
    year: "2026",
    image: "/assets/img/work/work5.webp",
    aspectRatio: "aspect-[608/497]",
  },
];

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cases, setCases] = useState<CaseStudy[]>(initialCaseStudies);
  const [loading, setLoading] = useState(false);

  // Stagger entrance animation, scroll parallax, and interactive hover tilt
  useGSAP(() => {
    if (!containerRef.current) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const matchMedia = gsap.matchMedia();

    matchMedia.add({
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)",
    }, (context) => {
      const isDesktop = context.conditions?.isDesktop;
      const cards = containerRef.current!.querySelectorAll(".case-card:not([data-initialized])");

      cards.forEach((card, index) => {
        const img = card.querySelector(".hover-image");
        const wrapper = card.querySelector(".parallax-wrapper");

        // Mark the card as initialized to prevent duplicate setups
        card.setAttribute("data-initialized", "true");

        // 1. Scroll-triggered Clip-path Reveal + inner image scale zoom on entrance
        if (wrapper && img) {
          gsap.set(wrapper, { clipPath: "inset(0 100% 0 0)" });
          gsap.set(img, { scale: 1.15 });

          const cardTl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            }
          });

          cardTl.to(wrapper, {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.3,
            ease: "power4.inOut",
          });

          cardTl.to(img, {
            scale: 1,
            duration: 1.3,
            ease: "power3.out",
          }, "-=1.1");

          // Image Parallax scroll inside card cropped wrapper (all devices)
          gsap.fromTo(
            wrapper,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }

        // 2. Responsive Scroll motion
        if (isDesktop) {
          // Asymmetric Column Parallax (Push-Pull Grid) on Desktop
          const isCenter = card.parentElement?.classList.contains("justify-center");
          const isLeft = index % 2 === 0 && !isCenter;
          const isRight = index % 2 !== 0 && !isCenter;

          let yStart = 0;
          let yEnd = 0;

          if (isLeft) {
            yStart = 45;
            yEnd = -45;
          } else if (isRight) {
            yStart = -45;
            yEnd = 45;
          } else {
            // centered card
            yStart = 20;
            yEnd = -20;
          }

          gsap.fromTo(
            card,
            { y: yStart },
            {
              y: yEnd,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            }
          );
        } else {
          // Standard fade & slide up reveal for Mobile stacked grids
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // 3. Interactive Cursor Tilt / Parallax Effect on Hover (Desktop only)
        if (img && isDesktop) {
          const handleMouseMove = (e: Event) => {
            const mouseEvent = e as MouseEvent;
            const rect = card.getBoundingClientRect();
            const x = mouseEvent.clientX - rect.left;
            const y = mouseEvent.clientY - rect.top;

            const xPercent = (x / rect.width - 0.5) * 8; // offset bounds: -4% to 4%
            const yPercent = (y / rect.height - 0.5) * 8; // offset bounds: -4% to 4%

            gsap.to(img, {
              xPercent: xPercent,
              yPercent: yPercent,
              scale: 1.08,
              overwrite: "auto",
              duration: 0.45,
              ease: "power2.out",
            });
          };

          const handleMouseLeave = () => {
            gsap.to(img, {
              xPercent: 0,
              yPercent: 0,
              scale: 1,
              overwrite: "auto",
              duration: 0.6,
              ease: "power3.out",
            });
          };

          card.addEventListener("mousemove", handleMouseMove);
          card.addEventListener("mouseleave", handleMouseLeave);
        }
      });
    });

    return () => matchMedia.revert();
  }, { dependencies: [cases], scope: containerRef });

  const handleLoadMore = () => {
    setLoading(true);
    // Simulate loading more items
    setTimeout(() => {
      const nextCases: CaseStudy[] = [
        {
          id: cases.length + 1,
          title: "Premium E-Commerce Platform Rebrand",
          category: "Brand Design",
          year: "2026",
          image: "/assets/img/work/work1.webp",
          aspectRatio: "aspect-[480/371]",
        },
        {
          id: cases.length + 2,
          title: "Mobile FinTech App UX Architecture",
          category: "Mobile Design",
          year: "2026",
          image: "/assets/img/work/work2.webp",
          aspectRatio: "aspect-[700/535]",
        },
      ];
      setCases((prev) => [...prev, ...nextCases]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-[#010101] min-h-screen flex flex-col font-proxima">
      <Navbar />

      {/* Breadcrumb Section */}
      <Breadcrumb
        title="Our Case Study"
        description="Da Vinci Media helps brands stand out with exceptional design, powerful websites, strategic marketing, and creative digital solutions."
        paths={[
          { name: "Home", href: "/" },
          { name: "Work", active: true },
        ]}
      />

      {/* Case Studies Section */}
      <main
        ref={containerRef}
        className="container mx-auto px-4 md:px-6 py-20 md:py-28 flex flex-col gap-16 md:gap-24"
      >
        {/* Row 1: Side by Side (Tablet & Laptop) */}
        {cases.length >= 2 && (
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24 w-full">
            {/* Card 1: Smaller Column (w-[480px] equivalent) */}
            <div className="case-card group cursor-pointer w-full lg:max-w-[480px] flex flex-col gap-6">
              <div className={cn("relative w-full overflow-hidden bg-zinc-900", cases[0].aspectRatio)}>
                <div className="parallax-wrapper absolute inset-0 w-full h-[120%] top-[-10%] left-0">
                  <Image
                    src={cases[0].image}
                    alt={cases[0].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="hover-image object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-neutral-400 text-lg font-semibold uppercase tracking-tight leading-5">
                  <span>{cases[0].category}</span>
                  <span>/{cases[0].year}</span>
                </div>
                <h3 className="text-white-color text-2xl md:text-3xl font-semibold leading-tight md:leading-9 transition-colors group-hover:text-recording-red">
                  {cases[0].title}
                </h3>
              </div>
            </div>

            {/* Card 2: Larger Column (w-[700px] equivalent) */}
            <div className="case-card group cursor-pointer w-full lg:max-w-[700px] flex flex-col gap-6">
              <div className={cn("relative w-full overflow-hidden bg-zinc-900", cases[1].aspectRatio)}>
                <div className="parallax-wrapper absolute inset-0 w-full h-[120%] top-[-10%] left-0">
                  <Image
                    src={cases[1].image}
                    alt={cases[1].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="hover-image object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-neutral-400 text-lg font-semibold uppercase tracking-tight leading-5">
                  <span>{cases[1].category}</span>
                  <span>/{cases[1].year}</span>
                </div>
                <h3 className="text-white-color text-2xl md:text-3xl font-semibold leading-tight md:leading-9 transition-colors group-hover:text-recording-red">
                  {cases[1].title}
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* Row 2: Centered Large Card (NEWME Magazine, w-[1096px] equivalent) */}
        {cases.length >= 3 && (
          <div className="w-full flex justify-center">
            <div className="case-card group cursor-pointer w-full lg:max-w-[1096px] flex flex-col gap-6">
              <div className={cn("relative w-full overflow-hidden bg-zinc-900", cases[2].aspectRatio)}>
                <div className="parallax-wrapper absolute inset-0 w-full h-[120%] top-[-10%] left-0">
                  <Image
                    src={cases[2].image}
                    alt={cases[2].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1096px"
                    className="hover-image object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-neutral-400 text-lg font-semibold uppercase tracking-tight leading-5">
                  <span>{cases[2].category}</span>
                  <span>/{cases[2].year}</span>
                </div>
                <h3 className="text-white-color text-2xl md:text-3xl font-semibold leading-tight md:leading-9 transition-colors group-hover:text-recording-red">
                  {cases[2].title}
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* Row 3: Side by Side (A4 Mockups & Office People, equal widths w-[1320px] total) */}
        {cases.length >= 5 && (
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24 w-full">
            {/* Card 4: Left Column (flex-1) */}
            <div className="case-card group cursor-pointer w-full flex-1 flex flex-col gap-6">
              <div className={cn("relative w-full overflow-hidden bg-zinc-900", cases[3].aspectRatio)}>
                <div className="parallax-wrapper absolute inset-0 w-full h-[120%] top-[-10%] left-0">
                  <Image
                    src={cases[3].image}
                    alt={cases[3].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 608px"
                    className="hover-image object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-neutral-400 text-lg font-semibold uppercase tracking-tight leading-5">
                  <span>{cases[3].category}</span>
                  <span>/{cases[3].year}</span>
                </div>
                <h3 className="text-white-color text-2xl md:text-3xl font-semibold leading-tight md:leading-9 transition-colors group-hover:text-recording-red">
                  {cases[3].title}
                </h3>
              </div>
            </div>

            {/* Card 5: Right Column (flex-1) */}
            <div className="case-card group cursor-pointer w-full flex-1 flex flex-col gap-6">
              <div className={cn("relative w-full overflow-hidden bg-zinc-900", cases[4].aspectRatio)}>
                <div className="parallax-wrapper absolute inset-0 w-full h-[120%] top-[-10%] left-0">
                  <Image
                    src={cases[4].image}
                    alt={cases[4].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 608px"
                    className="hover-image object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-neutral-400 text-lg font-semibold uppercase tracking-tight leading-5">
                  <span>{cases[4].category}</span>
                  <span>/{cases[4].year}</span>
                </div>
                <h3 className="text-white-color text-2xl md:text-3xl font-semibold leading-tight md:leading-9 transition-colors group-hover:text-recording-red">
                  {cases[4].title}
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* Dynamically Loaded Extra Cases (if any) */}
        {cases.length > 5 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 w-full">
            {cases.slice(5).map((extraCase) => (
              <div key={extraCase.id} className="case-card group cursor-pointer w-full flex flex-col gap-6">
                <div className={cn("relative w-full overflow-hidden bg-zinc-900", extraCase.aspectRatio)}>
                  <div className="parallax-wrapper absolute inset-0 w-full h-[120%] top-[-10%] left-0">
                    <Image
                      src={extraCase.image}
                      alt={extraCase.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 608px"
                      className="hover-image object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center text-neutral-400 text-lg font-semibold uppercase tracking-tight leading-5">
                    <span>{extraCase.category}</span>
                    <span>/{extraCase.year}</span>
                  </div>
                  <h3 className="text-white-color text-2xl md:text-3xl font-semibold leading-tight md:leading-9 transition-colors group-hover:text-recording-red">
                    {extraCase.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        <div className="w-full flex justify-center pt-8">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="py-2 border-b border-white-color hover:border-recording-red hover:text-recording-red text-white-color text-lg font-semibold font-proxima uppercase leading-5 tracking-tight transition-all duration-300 cursor-pointer disabled:opacity-50"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import CaseRowRenderer from "@/components/work/CaseRowRenderer";
import LoadMoreButton from "@/components/work/LoadMoreButton";
import { CaseStudy, CaseRow, BreadcrumbPath } from "@/types/work";

gsap.registerPlugin(ScrollTrigger);

const breadcrumbPaths: BreadcrumbPath[] = [
  { name: "Home", href: "/" },
  { name: "Work", active: true },
];

const initialCaseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "FinFlow Business Intelligence SaaS Dashboard",
    category: "Product Design",
    year: "2025",
    image: "/assets/img/work/work1.webp",
    aspectRatio: "aspect-[480/371]",
    widthClass: "lg:max-w-[480px]",
    sizes: "(max-width: 1024px) 100vw, 480px",
  },
  {
    id: 2,
    title: "Aura Brand Identity & Web Platform",
    category: "Branding & Web",
    year: "2025",
    image: "/assets/img/work/work2.webp",
    aspectRatio: "aspect-[700/535]",
    widthClass: "lg:max-w-[700px]",
    sizes: "(max-width: 1024px) 100vw, 700px",
  },
  {
    id: 3,
    title: "NEWME Luxury Fashion Editorial Magazine",
    category: "Creative Direction",
    year: "2026",
    image: "/assets/img/work/work3.webp",
    aspectRatio: "aspect-[1096/535]",
    widthClass: "lg:max-w-[1096px]",
    sizes: "(max-width: 1024px) 100vw, 1096px",
  },
  {
    id: 4,
    title: "Nova Corp Identity Stationery Mockups",
    category: "Brand Systems",
    year: "2026",
    image: "/assets/img/work/work4.webp",
    aspectRatio: "aspect-[608/497]",
    widthClass: "flex-1",
    sizes: "(max-width: 1024px) 100vw, 608px",
  },
  {
    id: 5,
    title: "Omni Fintech Mobile App Architecture",
    category: "UI/UX Strategy",
    year: "2026",
    image: "/assets/img/work/work5.webp",
    aspectRatio: "aspect-[608/497]",
    widthClass: "flex-1",
    sizes: "(max-width: 1024px) 100vw, 608px",
  },
];

function groupCasesForLayout(items: CaseStudy[]): CaseRow[] {
  const rows: CaseRow[] = [];

  if (items.length > 0) {
    if (items.length >= 2) {
      rows.push({
        id: "row-1",
        type: "split",
        items: [items[0], items[1]],
      });
    } else {
      rows.push({
        id: "row-1",
        type: "split",
        items: [items[0]],
      });
    }

    if (items.length >= 3) {
      rows.push({
        id: "row-2",
        type: "centered",
        items: [items[2]],
      });
    }

    if (items.length >= 5) {
      rows.push({
        id: "row-3",
        type: "split",
        items: [items[3], items[4]],
      });
    } else if (items.length === 4) {
      rows.push({
        id: "row-3",
        type: "split",
        items: [items[3]],
      });
    }

    if (items.length > 5) {
      rows.push({
        id: "row-extra",
        type: "grid",
        items: items.slice(5),
      });
    }
  }

  return rows;
}

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cases, setCases] = useState<CaseStudy[]>(initialCaseStudies);
  const [loading, setLoading] = useState(false);

  const layoutRows = groupCasesForLayout(cases);

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
        const titleWords = card.querySelectorAll(".case-title-word");

        card.setAttribute("data-initialized", "true");

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

        if (titleWords.length > 0) {
          gsap.fromTo(
            titleWords,
            { yPercent: 100, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.05,
              ease: "power4.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        if (isDesktop) {
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

        if (img && isDesktop) {
          const handleMouseMove = (e: Event) => {
            const mouseEvent = e as MouseEvent;
            const rect = card.getBoundingClientRect();
            const x = mouseEvent.clientX - rect.left;
            const y = mouseEvent.clientY - rect.top;

            const xNorm = (x / rect.width - 0.5);
            const yNorm = (y / rect.height - 0.5);

            gsap.to(img, {
              xPercent: -xNorm * 4,
              yPercent: -yNorm * 4,
              scale: 1.08,
              ease: "power3.out",
              duration: 0.8,
              overwrite: "auto",
            });
          };

          const handleMouseLeave = () => {
            gsap.to(img, {
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
        }
      });
    });

    return () => matchMedia.revert();
  }, { dependencies: [cases], scope: containerRef });

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const nextCases: CaseStudy[] = [
        {
          id: cases.length + 1,
          title: "Apex Luxury E-Commerce Rebrand",
          category: "Brand Strategy",
          year: "2026",
          image: "/assets/img/work/work1.webp",
          aspectRatio: "aspect-[480/371]",
          widthClass: "w-full",
          sizes: "(max-width: 1024px) 100vw, 608px",
        },
        {
          id: cases.length + 2,
          title: "Zenith Mobile Banking Interface",
          category: "Mobile UX Design",
          year: "2026",
          image: "/assets/img/work/work2.webp",
          aspectRatio: "aspect-[700/535]",
          widthClass: "w-full",
          sizes: "(max-width: 1024px) 100vw, 608px",
        },
      ];
      setCases((prev) => [...prev, ...nextCases]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-[#010101] min-h-screen flex flex-col font-proxima">
      <Navbar />

      <Breadcrumb
        title="Our Case Study"
        description="Da Vinci Media helps brands stand out with exceptional design, powerful websites, strategic marketing, and creative digital solutions."
        paths={breadcrumbPaths}
      />

      <main
        ref={containerRef}
        className="container mx-auto px-4 md:px-6 py-20 md:py-28 flex flex-col gap-16 md:gap-24"
      >
        {layoutRows.map((row) => (
          <CaseRowRenderer key={row.id} row={row} />
        ))}

        <LoadMoreButton
          onClick={handleLoadMore}
          loading={loading}
        />
      </main>

      <Footer />
    </div>
  );
}

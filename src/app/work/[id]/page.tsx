"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { use, useRef } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { ProjectDetail } from "@/types/work";

gsap.registerPlugin(ScrollTrigger);

interface WorkDetailsProps {
  params: Promise<{ id: string }>;
}

const projectDetails: Record<number, ProjectDetail> = {
  1: {
    title: "FinFlow Business Intelligence SaaS Dashboard",
    description: "FinFlow is a modern SaaS dashboard designed to help businesses monitor performance, analyze data, and make smarter decisions through a clean, intuitive, and user-centered interface.",
    category: "Product Design",
    client: "FinFlow Inc.",
    startDate: "July 10, 2025",
    endDate: "October 20, 2025",
    challenge: "The existing platform suffered from a cluttered interface, inconsistent navigation, and poor data visualization. Users found it difficult to locate important information, resulting in a frustrating experience and reduced productivity. The existing platform suffered from a cluttered interface, inconsistent navigation, and poor data visualization. Users found it difficult to locate important information, resulting in a frustrating experience and reduced productivity.",
    solution: "We redesigned the platform with a user-first approach by introducing a scalable design system, streamlined navigation, improved dashboard layouts, and clear data visualization. Every interaction was carefully crafted to enhance usability while maintaining a modern and professional appearance. We redesigned the platform with a user-first approach by introducing a scalable design system, streamlined navigation, improved dashboard layouts, and clear data visualization. Every interaction was carefully crafted to enhance usability while maintaining a modern and professional appearance.",
    features: [
      "Modern & Minimal Dashboard",
      "Responsive Design",
      "Advanced Analytics Widgets",
      "Dark & Light Mode",
      "Interactive Charts",
      "Smart Data Visualization",
      "User Management",
      "Notification Center",
      "Custom Reports",
      "Design System Components"
    ],
    images: {
      hero: "/assets/img/work/work-details1.webp",
      gallery1: "/assets/img/work/work-details2.webp",
      gallery2: "/assets/img/work/work-details3.webp",
      gallery3: "/assets/img/work/work-details4.webp",
      bottom: "/assets/img/work/work-details5.webp"
    }
  },
  2: {
    title: "Aura Brand Identity & Web Platform",
    description: "Aura is a digital-first lifestyle brand. We developed their visual identity, brand guidelines, and a high-performance web platform that captures their premium, minimalist aesthetic.",
    category: "Branding & Web",
    client: "Aura Labs",
    startDate: "November 01, 2025",
    endDate: "January 15, 2026",
    challenge: "Aura lacked a cohesive digital signature across their touchpoints. Their branding felt outdated, and the web performance lagged, resulting in high bounce rates and low digital engagement from premium customers. Aura lacked a cohesive digital signature across their touchpoints. Their branding felt outdated, and the web performance lagged, resulting in high bounce rates and low digital engagement from premium customers.",
    solution: "We created a flexible brand system built around modern typography, organic motion design, and a content-focused web experience. Using high-speed modern technologies, we reduced page loading speed by 60% and raised user conversions. We created a flexible brand system built around modern typography, organic motion design, and a content-focused web experience. Using high-speed modern technologies, we reduced page loading speed by 60% and raised user conversions.",
    features: [
      "Minimal Brand System",
      "Custom Grid Layouts",
      "Liquid Transition Effects",
      "Next-Gen Typography",
      "Highly Optimized Assets",
      "Responsive Brand Assets",
      "Optimized Core Web Vitals",
      "Flexible Layout Blocks",
      "Modern Digital Guidelines",
      "Fluid Animation Systems"
    ],
    images: {
      hero: "/assets/img/work/work-details1.webp",
      gallery1: "/assets/img/work/work-details2.webp",
      gallery2: "/assets/img/work/work-details3.webp",
      gallery3: "/assets/img/work/work-details4.webp",
      bottom: "/assets/img/work/work-details5.webp"
    }
  },
  3: {
    title: "NEWME Luxury Fashion Editorial Magazine",
    description: "A stunning lifestyle publication blending high fashion with interactive digital storytelling. We directed the aesthetic tone, photography styling, and layout typography.",
    category: "Creative Direction",
    client: "NEWME Studio",
    startDate: "February 15, 2026",
    endDate: "April 30, 2026",
    challenge: "Traditional fashion magazines struggle to translate their tactile, luxurious print layouts into digital forms. Screen experiences often feel flat, losing the editorial rhythm and typographic expression of paper print. Traditional fashion magazines struggle to translate their tactile, luxurious print layouts into digital forms. Screen experiences often feel flat, losing the editorial rhythm and typographic expression of paper print.",
    solution: "We designed an interactive editorial experience utilizing large images, dynamic viewport grids, and micro-animations that mirror the act of turning premium magazine pages. Typography changes dynamically to keep layouts organic. We designed an interactive editorial experience utilizing large images, dynamic viewport grids, and micro-animations that mirror the act of turning premium magazine pages. Typography changes dynamically to keep layouts organic.",
    features: [
      "Luxury Editorial Grid",
      "Staggered Image Parallax",
      "Dynamic Typographic Scales",
      "Custom Photography Art Direction",
      "Interactive Layout Fills",
      "Editorial Storyboards",
      "Smooth Viewport Snapping",
      "Aesthetic Monocle Views",
      "Print-to-Digital Transitions",
      "Staggered Text Segments"
    ],
    images: {
      hero: "/assets/img/work/work-details1.webp",
      gallery1: "/assets/img/work/work-details2.webp",
      gallery2: "/assets/img/work/work-details3.webp",
      gallery3: "/assets/img/work/work-details4.webp",
      bottom: "/assets/img/work/work-details5.webp"
    }
  },
  4: {
    title: "Nova Corp Identity Stationery Mockups",
    description: "A complete physical and digital brand identity package designed for a progressive financial institution. Includes logos, cards, systems, and customized textures.",
    category: "Brand Systems",
    client: "Nova Capital",
    startDate: "May 01, 2026",
    endDate: "June 10, 2026",
    challenge: "Corporate identity systems often feel cold, repetitive, and distant. Nova Corp needed to express trust and stability while standing out as a forward-thinking, modern investment platform for new-age portfolios. Corporate identity systems often feel cold, repetitive, and distant. Nova Corp needed to express trust and stability while standing out as a forward-thinking, modern investment platform for new-age portfolios.",
    solution: "We structured a clean, modernist identity using deep monochromatic colors, crisp geometric shapes, and premium physical print mockups. Every asset, from cards to digital UI, shares the same mathematical grid rules. We structured a clean, modernist identity using deep monochromatic colors, crisp geometric shapes, and premium physical print mockups. Every asset, from cards to digital UI, shares the same mathematical grid rules.",
    features: [
      "Stationery Print Systems",
      "Mathematical Brand Grids",
      "Monochromatic Style Guides",
      "Geometric Logo Layouts",
      "Physical Stamp Elements",
      "Corporate Assets Directory",
      "Custom Monogram Assets",
      "Digital Presentation Decks",
      "Minimal Vector Elements",
      "Scalable Vector Layouts"
    ],
    images: {
      hero: "/assets/img/work/work-details1.webp",
      gallery1: "/assets/img/work/work-details2.webp",
      gallery2: "/assets/img/work/work-details3.webp",
      gallery3: "/assets/img/work/work-details4.webp",
      bottom: "/assets/img/work/work-details5.webp"
    }
  },
  5: {
    title: "Omni Fintech Mobile App Architecture",
    description: "A cross-platform financial application facilitating seamless instant transfers, smart automated budgeting, and micro-investment tools in a simple tap.",
    category: "UI/UX Strategy",
    client: "Omni Pay",
    startDate: "June 15, 2026",
    endDate: "Present",
    challenge: "Most fintech applications overload the user with complex statistical charts, confusing terms, and multi-step transfer interfaces, creating transactional friction and user anxiety. Most fintech applications overload the user with complex statistical charts, confusing terms, and multi-step transfer interfaces, creating transactional friction and user anxiety.",
    solution: "We designed a single-screen transaction dashboard that utilizes natural conversational cues, smart shortcuts, and highly readable, simple color codes to manage finances effortlessly and stress-free. We designed a single-screen transaction dashboard that utilizes natural conversational cues, smart shortcuts, and highly readable, simple color codes to manage finances effortlessly and stress-free.",
    features: [
      "Conversational Interface",
      "One-Tap Instant Transfer",
      "Automatic Micro-Investments",
      "Damped Biometric Security",
      "Dynamic Spending Forecasts",
      "Custom Budgeting Wizards",
      "Instant Support Channels",
      "Personal Ledger Systems",
      "Monitored Account Limits",
      "Encrypted Cloud Backups"
    ],
    images: {
      hero: "/assets/img/work/work-details1.webp",
      gallery1: "/assets/img/work/work-details2.webp",
      gallery2: "/assets/img/work/work-details3.webp",
      gallery3: "/assets/img/work/work-details4.webp",
      bottom: "/assets/img/work/work-details5.webp"
    }
  }
};

export default function WorkDetailsPage({ params }: WorkDetailsProps) {
  const { id } = use(params);
  const containerRef = useRef<HTMLDivElement>(null);

  const projectId = parseInt(id) || 1;
  const project = projectDetails[projectId] || projectDetails[1];

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

      const heroWrapper = containerRef.current!.querySelector(".hero-image-wrapper .parallax-wrapper");
      const heroImg = containerRef.current!.querySelector(".hero-image-wrapper .hover-image");

      if (heroWrapper && heroImg) {
        gsap.set(heroWrapper, { clipPath: "inset(0 100% 0 0)" });
        gsap.set(heroImg, { scale: 1.15 });

        const tl = gsap.timeline({ delay: 0.2 });
        tl.to(heroWrapper, {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.4,
          ease: "power4.inOut",
        });
        tl.to(heroImg, {
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
        }, "-=1.2");

        gsap.fromTo(heroWrapper,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero-image-wrapper",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      }

      const blocks = containerRef.current!.querySelectorAll(".detail-block");
      blocks.forEach((block) => {
        const title = block.querySelector("h2");
        const body = block.querySelector("p, ul");

        const blockTl = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: "top 88%",
            toggleActions: "play none none none",
          }
        });

        if (title) {
          const titleWords = title.querySelectorAll(".detail-title-word");
          if (titleWords.length > 0) {
            blockTl.fromTo(titleWords,
              { opacity: 0, yPercent: 100 },
              { opacity: 1, yPercent: 0, duration: 0.8, stagger: 0.08, ease: "power4.out" }
            );
          } else {
            blockTl.fromTo(title,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
            );
          }
        }
        if (body) {
          const features = body.querySelectorAll(".feature-item");
          if (features.length > 0) {
            blockTl.fromTo(features,
              { opacity: 0, y: 15 },
              { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" },
              "-=0.6"
            );
          } else {
            blockTl.fromTo(body,
              { opacity: 0, y: 25 },
              { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
              "-=0.6"
            );
          }
        }
      });

      const galleryWrappers = containerRef.current!.querySelectorAll(".gallery-wrapper, .bottom-image-wrapper");
      galleryWrappers.forEach((wrapperBlock) => {
        const wrapper = wrapperBlock.querySelector(".parallax-wrapper");
        const img = wrapperBlock.querySelector(".hover-image");

        if (wrapper && img) {
          gsap.set(wrapper, { clipPath: "inset(0 100% 0 0)" });
          gsap.set(img, { scale: 1.15 });

          const galleryTl = gsap.timeline({
            scrollTrigger: {
              trigger: wrapperBlock,
              start: "top 88%",
              toggleActions: "play none none none",
            }
          });

          galleryTl.to(wrapper, {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.3,
            ease: "power4.inOut",
          });

          galleryTl.to(img, {
            scale: 1,
            duration: 1.3,
            ease: "power3.out",
          }, "-=1.1");

          gsap.fromTo(wrapper,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: "none",
              scrollTrigger: {
                trigger: wrapperBlock,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              }
            }
          );

          if (isDesktop) {
            const handleMouseMove = (e: Event) => {
              const mouseEvent = e as MouseEvent;
              const rect = wrapperBlock.getBoundingClientRect();
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

            wrapperBlock.addEventListener("mousemove", handleMouseMove);
            wrapperBlock.addEventListener("mouseleave", handleMouseLeave);
          }
        }
      });
    });

    return () => matchMedia.revert();
  }, { scope: containerRef });

  return (
    <div className="bg-[#010101] min-h-screen flex flex-col font-proxima text-white-color select-none">
      <Navbar />

      <Breadcrumb
        title={project.title}
        description={project.description}
        paths={[
          { name: "Home", href: "/" },
          { name: "Work", href: "/work" },
          { name: "Work Details", active: true },
        ]}
      />

      <main
        ref={containerRef}
        className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-28 flex flex-col gap-16 md:gap-24"
      >
        <div className="flex flex-col gap-8 md:gap-12 w-full">
          <div className="relative w-full aspect-[1320/554] overflow-hidden bg-zinc-900 rounded-[4px] hero-image-wrapper">
            <div className="absolute inset-0 w-full h-[120%] top-[-10%] left-0 parallax-wrapper">
              <Image
                src={project.images.hero}
                alt={project.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1320px"
                className="object-cover w-full h-full hover-image"
                priority
                unoptimized
              />
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-row justify-between gap-6 md:gap-8 items-center py-6 border-b border-zinc-850">
            <div className="flex items-center gap-2">
              <span className="text-neutral-400 text-base md:text-lg font-semibold uppercase tracking-tight">Category:</span>
              <span className="text-stone-100 text-base md:text-lg font-semibold uppercase tracking-tight">{project.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neutral-400 text-base md:text-lg font-semibold uppercase tracking-tight">Client:</span>
              <span className="text-stone-100 text-base md:text-lg font-semibold uppercase tracking-tight">{project.client}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neutral-400 text-base md:text-lg font-semibold uppercase tracking-tight">Start Date:</span>
              <span className="text-stone-100 text-base md:text-lg font-semibold uppercase tracking-tight">{project.startDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neutral-400 text-base md:text-lg font-semibold uppercase tracking-tight">End Date:</span>
              <span className="text-stone-100 text-base md:text-lg font-semibold uppercase tracking-tight">{project.endDate}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 md:gap-16 w-full text-section">
          <div className="flex flex-col gap-4 max-w-[1096px] detail-block">
            <h2 className="text-white text-3xl md:text-5xl font-semibold leading-tight tracking-tight uppercase flex flex-wrap gap-x-3 overflow-hidden py-1">
              {"The Challenge".split(" ").map((word, i) => (
                <span key={i} className="inline-flex overflow-hidden">
                  <span className="detail-title-word inline-block">
                    {word}
                  </span>
                </span>
              ))}
            </h2>
            <p className="text-neutral-300 text-base md:text-lg lg:text-xl font-medium leading-relaxed md:leading-8">
              {project.challenge}
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-[1096px] detail-block">
            <h2 className="text-white text-3xl md:text-5xl font-semibold leading-tight tracking-tight uppercase flex flex-wrap gap-x-3 overflow-hidden py-1">
              {"Our Solution".split(" ").map((word, i) => (
                <span key={i} className="inline-flex overflow-hidden">
                  <span className="detail-title-word inline-block">
                    {word}
                  </span>
                </span>
              ))}
            </h2>
            <p className="text-neutral-300 text-base md:text-lg lg:text-xl font-medium leading-relaxed md:leading-8">
              {project.solution}
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-[1096px] detail-block">
            <h2 className="text-white text-3xl md:text-5xl font-semibold leading-tight tracking-tight uppercase flex flex-wrap gap-x-3 overflow-hidden py-1">
              {"Key Features".split(" ").map((word, i) => (
                <span key={i} className="inline-flex overflow-hidden">
                  <span className="detail-title-word inline-block">
                    {word}
                  </span>
                </span>
              ))}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-neutral-300 text-base md:text-lg lg:text-xl font-medium leading-normal list-disc list-inside">
              {project.features.map((feature, i) => (
                <li key={i} className="feature-item">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-10 w-full gallery-section">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-stretch">
            <div className="md:col-span-3 aspect-[312/320] relative overflow-hidden bg-zinc-900 rounded-[4px] gallery-wrapper">
              <div className="absolute inset-0 w-full h-[120%] top-[-10%] left-0 parallax-wrapper">
                <Image
                  src={project.images.gallery1}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 312px"
                  className="object-cover w-full h-full hover-image"
                  unoptimized
                />
              </div>
            </div>

            <div className="md:col-span-6 aspect-[616/320] relative overflow-hidden bg-zinc-900 rounded-[4px] gallery-wrapper">
              <div className="absolute inset-0 w-full h-[120%] top-[-10%] left-0 parallax-wrapper">
                <Image
                  src={project.images.gallery2}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 616px"
                  className="object-cover w-full h-full hover-image"
                  unoptimized
                />
              </div>
            </div>

            <div className="md:col-span-3 aspect-[311/320] relative overflow-hidden bg-zinc-900 rounded-[4px] gallery-wrapper">
              <div className="absolute inset-0 w-full h-[120%] top-[-10%] left-0 parallax-wrapper">
                <Image
                  src={project.images.gallery3}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 311px"
                  className="object-cover w-full h-full hover-image"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="relative w-full aspect-[1320/600] overflow-hidden bg-zinc-900 rounded-[4px] bottom-image-wrapper">
            <div className="absolute inset-0 w-full h-[120%] top-[-10%] left-0 parallax-wrapper">
              <Image
                src={project.images.bottom}
                alt={project.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1320px"
                className="object-cover w-full h-full hover-image"
                unoptimized
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

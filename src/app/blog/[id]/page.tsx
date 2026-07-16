"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { use, useRef } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SmoothScroll from "@/components/shared/SmoothScroll";
import { blogDetails } from "@/data/blog";

gsap.registerPlugin(ScrollTrigger);

interface BlogDetailsProps {
  params: Promise<{ id: string }>;
}

export default function BlogDetailsPage({ params }: BlogDetailsProps) {
  const { id } = use(params);
  const containerRef = useRef<HTMLDivElement>(null);

  const blogId = parseInt(id) || 1;
  const blog = blogDetails[blogId] || blogDetails[1];

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
    <SmoothScroll>
      <div className="bg-[#010101] min-h-screen flex flex-col font-proxima text-white-color select-none">
        <Navbar />

      <Breadcrumb
        title={blog.title}
        description={blog.description}
        paths={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: "Blog Details", active: true },
        ]}
      />

      <main
        ref={containerRef}
        className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-28 flex flex-col gap-16 md:gap-24"
      >
        <div className="flex flex-col gap-8 md:gap-12 w-full">
          {/* Hero Parallax Image */}
          <div className="relative w-full aspect-[1320/554] overflow-hidden bg-zinc-900 rounded-[4px] hero-image-wrapper">
            <div className="absolute inset-0 w-full h-[120%] top-[-10%] left-0 parallax-wrapper">
              <Image
                src={blog.images.hero}
                alt={blog.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1320px"
                className="object-cover w-full h-full hover-image"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Metadata Row */}
          <div className="flex flex-wrap lg:flex-row justify-between gap-6 md:gap-8 items-center py-6 border-b border-zinc-850">
            <div className="flex items-center gap-2">
              <span className="text-neutral-400 text-base md:text-lg font-semibold uppercase tracking-tight">Category:</span>
              <span className="text-stone-100 text-base md:text-lg font-semibold uppercase tracking-tight">{blog.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neutral-400 text-base md:text-lg font-semibold uppercase tracking-tight">Author:</span>
              <span className="text-stone-100 text-base md:text-lg font-semibold uppercase tracking-tight">{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neutral-400 text-base md:text-lg font-semibold uppercase tracking-tight">Publish Date:</span>
              <span className="text-stone-100 text-base md:text-lg font-semibold uppercase tracking-tight">{blog.publishDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neutral-400 text-base md:text-lg font-semibold uppercase tracking-tight">Read Time:</span>
              <span className="text-stone-100 text-base md:text-lg font-semibold uppercase tracking-tight">{blog.readTime}</span>
            </div>
          </div>
        </div>

        {/* Text Blocks */}
        <div className="flex flex-col gap-12 md:gap-16 w-full text-section">
          {/* Concept Block */}
          <div className="flex flex-col gap-4 max-w-[1096px] detail-block">
            <h2 className="text-white text-3xl md:text-5xl font-semibold leading-tight tracking-tight uppercase flex flex-wrap gap-x-3 overflow-hidden py-1">
              {"The Concept".split(" ").map((word, i) => (
                <span key={i} className="inline-flex overflow-hidden">
                  <span className="detail-title-word inline-block">
                    {word}
                  </span>
                </span>
              ))}
            </h2>
            <p className="text-neutral-300 text-base md:text-lg lg:text-xl font-medium leading-relaxed md:leading-8">
              {blog.concept}
            </p>
          </div>

          {/* Story Block */}
          <div className="flex flex-col gap-4 max-w-[1096px] detail-block">
            <h2 className="text-white text-3xl md:text-5xl font-semibold leading-tight tracking-tight uppercase flex flex-wrap gap-x-3 overflow-hidden py-1">
              {"The Story".split(" ").map((word, i) => (
                <span key={i} className="inline-flex overflow-hidden">
                  <span className="detail-title-word inline-block">
                    {word}
                  </span>
                </span>
              ))}
            </h2>
            <p className="text-neutral-300 text-base md:text-lg lg:text-xl font-medium leading-relaxed md:leading-8">
              {blog.story}
            </p>
          </div>

          {/* Key Takeaways Block */}
          <div className="flex flex-col gap-6 max-w-[1096px] detail-block">
            <h2 className="text-white text-3xl md:text-5xl font-semibold leading-tight tracking-tight uppercase flex flex-wrap gap-x-3 overflow-hidden py-1">
              {"Key Takeaways".split(" ").map((word, i) => (
                <span key={i} className="inline-flex overflow-hidden">
                  <span className="detail-title-word inline-block">
                    {word}
                  </span>
                </span>
              ))}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-neutral-300 text-base md:text-lg lg:text-xl font-medium leading-normal list-disc list-inside">
              {blog.takeaways.map((takeaway, i) => (
                <li key={i} className="feature-item">
                  {takeaway}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="flex flex-col gap-6 md:gap-10 w-full gallery-section">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-stretch">
            {/* Gallery 1 */}
            <div className="md:col-span-3 aspect-[312/320] relative overflow-hidden bg-zinc-900 rounded-[4px] gallery-wrapper">
              <div className="absolute inset-0 w-full h-[120%] top-[-10%] left-0 parallax-wrapper">
                <Image
                  src={blog.images.gallery1}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 312px"
                  className="object-cover w-full h-full hover-image"
                  unoptimized
                />
              </div>
            </div>

            {/* Gallery 2 */}
            <div className="md:col-span-6 aspect-[616/320] relative overflow-hidden bg-zinc-900 rounded-[4px] gallery-wrapper">
              <div className="absolute inset-0 w-full h-[120%] top-[-10%] left-0 parallax-wrapper">
                <Image
                  src={blog.images.gallery2}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 616px"
                  className="object-cover w-full h-full hover-image"
                  unoptimized
                />
              </div>
            </div>

            {/* Gallery 3 */}
            <div className="md:col-span-3 aspect-[311/320] relative overflow-hidden bg-zinc-900 rounded-[4px] gallery-wrapper">
              <div className="absolute inset-0 w-full h-[120%] top-[-10%] left-0 parallax-wrapper">
                <Image
                  src={blog.images.gallery3}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 311px"
                  className="object-cover w-full h-full hover-image"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Bottom Landscape Image */}
          <div className="relative w-full aspect-[1320/600] overflow-hidden bg-zinc-900 rounded-[4px] bottom-image-wrapper">
            <div className="absolute inset-0 w-full h-[120%] top-[-10%] left-0 parallax-wrapper">
              <Image
                src={blog.images.bottom}
                alt={blog.title}
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
    </SmoothScroll>
  );
}

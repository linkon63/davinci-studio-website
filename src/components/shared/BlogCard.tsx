"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/types/blog";
import { useRef } from "react";
import gsap from "gsap";

interface BlogCardProps {
  post: BlogPost;
  variant?: "light" | "dark"; // "light" = homepage (white bg), "dark" = blog listing (dark bg)
}

export default function BlogCard({ post, variant = "dark" }: BlogCardProps) {
  const isLight = variant === "light";
  const arrowRef = useRef<SVGSVGElement>(null);

  const handleMouseEnter = () => {
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        rotation: -45,
        x: 3,
        y: -3,
        duration: 0.35,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        rotation: 0,
        x: 0,
        y: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div className="blog-card group cursor-pointer space-y-4 font-proxima">
      <Link
        href={`/blog/${post.id}`}
        className="block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image Container (Not rounded!) */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900 mb-5">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 1024px) 100vw, 416px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
        </div>

        {/* Date */}
        <div
          className={`text-sm md:text-base font-semibold uppercase tracking-wider mb-2 ${
            isLight ? "text-zinc-500" : "text-neutral-400"
          }`}
        >
          {post.date}
        </div>

        {/* Title */}
        <h3
          className={`text-2xl md:text-3xl font-semibold leading-snug tracking-tight mb-4 transition-colors duration-300 group-hover:text-recording-red ${
            isLight ? "text-zinc-900" : "text-white"
          }`}
        >
          {post.title}
        </h3>

        {/* Read More */}
        <div
          className={`flex items-center justify-between text-base md:text-lg font-semibold tracking-wider uppercase transition-colors duration-300 pb-1 w-full group-hover:text-recording-red ${
            isLight
              ? "text-zinc-900 border-b border-zinc-300"
              : "text-stone-100 border-b border-zinc-800"
          }`}
        >
          <span>READ MORE</span>
          <div className="inline-flex overflow-hidden">
            <ArrowRight ref={arrowRef} className="arrow-icon w-5 h-5" />
          </div>
        </div>
      </Link>
    </div>
  );
}

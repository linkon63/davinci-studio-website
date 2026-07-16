"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SmoothScroll from "@/components/shared/SmoothScroll";
import BlogCard from "@/components/shared/BlogCard";
import Pagination from "@/components/shared/Pagination";
import { initialBlogPosts } from "@/data/blog";
import { BlogPost } from "@/types/blog";

gsap.registerPlugin(ScrollTrigger);

const breadcrumbPaths = [
  { name: "Home", href: "/" },
  { name: "Blog & News", active: true },
];

export default function BlogPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [blogs] = useState<BlogPost[]>(initialBlogPosts);
  const [currentPage, setCurrentPage] = useState(1);

  useGSAP(() => {
    if (!containerRef.current) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(containerRef.current.querySelectorAll(".blog-card"), { opacity: 1, y: 0 });
      return;
    }

    const cards = containerRef.current.querySelectorAll(".blog-card");

    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <SmoothScroll>
      <div className="bg-[#010101] min-h-screen flex flex-col font-proxima text-white-color select-none">
        <Navbar />

      <Breadcrumb
        title="Blog & News"
        description="Stay ahead of the latest trends in design, development, branding, and digital marketing. Explore expert insights, practical guides, and creative ideas to help your business grow in the digital world."
        paths={breadcrumbPaths}
      />

      <main
        ref={containerRef}
        className="container mx-auto px-4 md:px-6 py-20 md:py-28 flex flex-col gap-16 md:gap-24"
      >
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {blogs.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
            />
          ))}
        </div>

        {/* Dynamic Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={4}
          onPageChange={setCurrentPage}
        />
      </main>

      <Footer />
      </div>
    </SmoothScroll>
  );
}

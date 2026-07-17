"use client"
import Link from "next/link";
import BlogCard from "@/components/shared/BlogCard";
import { initialBlogPosts } from "@/data/blog";
import { useEffect, useRef } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);


export default function Blogs() {
    const containerRef = useRef<HTMLDivElement>(null);
    // Show only the first 3 blog posts on the homepage
    const featuredPosts = initialBlogPosts.slice(0, 3);

    useEffect(() => {
        const text = new SplitType("#blogTitle", { types: "chars" });

        const tl = gsap.timeline({ paused: true });
        tl.from(text.chars, {
            x: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.03,
            ease: "power1.out",
        });

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top 70%",
            onEnter: () => tl.play(),
        });

        return () => {
            tl.kill();
        };
    }, []);

    useGSAP(() => {
        gsap.from("#blog-card", {
            x: 200,
            duration: 1,
            stagger: 0.3,
            ease: "power1.out",
            pacity: 0,
            filter: "blur(2px)",
            scrollTrigger: {
                trigger: "#blog-card",
                start: "top 90%",
                end: "bottom 80%",
                toggleActions: "play none none none",
            }

        })
    }, [])

    return (
        <section ref={containerRef} className="container py-16 md:py-24 lg:py-30">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between font-proxima items-start sm:items-center gap-4 mb-12">
                <h2 id="blogTitle" className="font-bold text-[32px] md:text-[48px] lg:text-[80px] tracking-[0.02em] overflow-hidden">
                    BLOG & NEWS
                </h2>
                <Link href="/blog" className="flex items-center gap-2 text-lg font-semibold border-b border-black pb-1 hover:text-recording-red cursor-pointer">
                    SEE ALL BLOGS <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} variant="light" />
                ))}
            </div>
        </section>
    );
}
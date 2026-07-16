"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
    {
        id: 1,
        image: "/assets/homepage/blog1.webp",
        date: "JULY 9, 2026",
        title: "Modern SaaS Dashboard for Business Analytics",
        link: "#",
        isSpecial: true,
    },
    {
        id: 2,
        image: "/assets/homepage/blog2.webp",
        date: "JULY 9, 2026",
        title: "Modern SaaS Dashboard for Business Analytics",
        link: "#",
        isSpecial: false,
    },
    {
        id: 3,
        image: "/assets/homepage/blog3.webp",
        date: "JULY 9, 2026",
        title: "Modern SaaS Dashboard for Business Analytics",
        link: "#",
        isSpecial: false,
    },
];

export default function Blogs() {
    const containerRef = useRef<HTMLDivElement>(null);

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
                <Link href="/blogs" className="flex items-center gap-2 text-lg font-semibold border-b border-black pb-1 hover:text-recording-red cursor-pointer">
                    SEE ALL BLOGS <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <div id="blog-card" key={post.id} className="group cursor-pointer space-y-3">
                        {/* Image Container */}
                        <div className="relative w-full aspect-[4/3] overflow-hidden mb-6">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <span className="text-base md:text-lg text-body-color font-semibold font-proxima tracking-[0.02em]">{post.date}</span>
                        <h3 className="text-2xl md:text-3xl font-semibold font-proxima transition-colors">
                            {post.title}
                        </h3>

                        {/* Read More */}
                        <Link href={post.link} className="flex items-center justify-between text-lg gap-2 tracking-[0.02em] font-proxima group-hover:text-recording-red font-semibold uppercase">
                            READ MORE
                            {post.isSpecial ? <ArrowUpRight className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
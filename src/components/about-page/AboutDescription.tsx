"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutDescription() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 30%",
                end: "bottom center",
                scrub: 2,
            },
        });


       const lines = gsap.utils.toArray<Element>(".reveal-line");

        lines.forEach((line, index) => {
            tl.to(line, {
                backgroundPosition: "0% 0%",
                ease: "none",
                duration: 2 + (index * 0.5),
            }, 0);
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="bg-primary-color py-10 md:py-[70px] px-4 overflow-hidden">
            <div className="container text-center font-proxima text-[28px] md:text-[36px] lg:text-[46px] font-semibold leading-tight">
                <div className="reveal-line reveal-text">At Da Vinci Media, we combine creativity, technology, and</div>
                <div className="reveal-line reveal-text"> strategy to help businesses build impactful digital experiences.</div>
                <div className="reveal-line reveal-text"> Our mission is to transform ideas into innovative solutions that </div>
                <div className="reveal-line reveal-text"> strengthen brands, engage audiences, and drive </div>
                <div className="reveal-line reveal-text"> measurable growth.</div>
            </div>
        </div>
    );
}
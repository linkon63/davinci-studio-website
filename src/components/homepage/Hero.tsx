"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import SplitType from "split-type"

import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef(null);
    const heroRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!heroRef.current) return;

        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let titleText: SplitType | null = null;

        if (!prefersReduced) {
            const titleEl = heroRef.current.querySelector("#hero-title");
            if (titleEl) {
                titleText = new SplitType(titleEl as HTMLElement, { types: "chars" });
                gsap.from(titleText.chars, {
                    x: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.03,
                    ease: "power1.out"
                });
            }
        }

        const matchMedia = gsap.matchMedia();

        matchMedia.add({
            is2xl: "(min-width: 1536px)",
            isXl: "(max-width: 1535px) and (min-width: 1280px)",
            isLg: "(max-width: 1279px) and (min-width: 1024px)",
        }, (context) => {
            const { is2xl, isXl } = context.conditions as Record<string, boolean>;

            const config = is2xl
                ? { x: -460, y: 700, scale: 2.4 }
                : isXl
                    ? { x: -360, y: 520, scale: 2.2 }
                    : { x: -290, y: 420, scale: 2.2 }


            gsap.to("#hero-video", {
                ...config,
                scrollTrigger: {
                    trigger: "#hero-video",
                    start: "top 40%",
                    scrub: true,
                },
                ease: "power1.inOut"
            });
        });

        return () => {
            matchMedia.revert();
            if (titleText) {
                titleText.revert();
            }
        };
    }, { scope: heroRef })

    return (
        <div ref={heroRef} className="bg-black bg-[url('/assets/hompage/hero-bg.png')]   bg-no-repeat pt-[80px] pb-[80px] px-6 md:pt-[120px] md:pb-[120px] md:px-8 lg:pt-[180px] lg:pb-[180px] xl:px-4 2xl:px-0">
            <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-col lg:flex-row gap-6 justify-center">
                <div id="hero-title" className="font-proxima lg:w-[57%] text-[36px] font-semibold max-w-none md:text-[60px] md:max-w-none lg:text-[60px] xl:text-[70px] 2xl:text-[100px] lg:max-w-225 text-[#F4F4EA] tracking-[-0.02em] leading-[36px] md:leading-[60px] lg:leading-[100px] uppercase relative z-20">
                    Turning Creative Ideas Into Powerful Digital Experiences
                </div>
                <div className="lg:w-[43%]">
                    <h1 className="text-[#F4F4EA] font-proxima font-semibold text-lg leading-6 md:text-xl md:leading-7 lg:text-xl xl:text-2xl lg:leading-8">Da Vinci Media helps brands stand out with exceptional design, powerful websites, strategic marketing, and creative digital solutions.</h1>
                    {/* Video */}
                    <div id="hero-video" className=" relative z-8 mt-6 md:mt-8 lg:mt-[37px] will-change-transform border border-[#464646]" ref={containerRef} >
                        <video
                            src="/Davinci_Media.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto "
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

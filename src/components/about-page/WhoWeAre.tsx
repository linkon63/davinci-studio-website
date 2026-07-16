"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
        });

        // SVG spins in with spring overshoot
        tl.from(".who-svg", {
            rotation: -180,
            scale: 0.5,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
        });

        // "Our Story" chars stagger from left with blur
        const storyText = new SplitType("#ourStoryTitle", { types: "chars" });
        tl.from(storyText.chars, {
            x: -40,
            opacity: 0,
            filter: "blur(4px)",
            duration: 0.8,
            stagger: 0.03,
            ease: "power3.out",
        }, "-=0.7");

        // "Our Story" paragraph wipes up
        tl.from("#ourStoryCard p", {
            clipPath: "inset(0 0 100% 0)",
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        }, "-=0.6");

        // "Who We Are" chars stagger from right with blur
        const whoText = new SplitType("#whoWeAreTitle", { types: "chars" });
        tl.from(whoText.chars, {
            x: 40,
            opacity: 0,
            filter: "blur(4px)",
            duration: 0.8,
            stagger: 0.03,
            ease: "power3.out",
        }, "-=0.6");

        //  "Who We Are" paragraph wipes up
        tl.from("#whoWeAreCard p", {
            clipPath: "inset(0 0 100% 0)",
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        }, "-=0.6");
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative bg-white-color overflow-hidden pb-[80px] pt-[200px] lg:py-[100px] xl:py-[120px]">
            {/* Background SVG Element */}
            <img
                src="/assets/aboutpage/q.svg"
                alt=""
                className="who-svg absolute top-[3%] right-[8%] md:top-[2%] md:right-[15%] lg:top-[5%] 2xl:top-[3%] lg:right-[2%] 2xl:right-[15%] w-[180px] md:w-[200px] lg:w-[260px] h-auto opacity-100 pointer-events-none"
            />

            {/* Container using flex items-end to align cards at the bottom */}
            <div className="container flex flex-col-reverse lg:flex-row items-end gap-8 relative z-10">

                {/* Our Story Card */}
                <div id="ourStoryCard" className="who-card border border-[#E5E2D9] bg-white-color font-proxima p-6 md:p-8 lg:p-10 flex-1">
                    <h2 id="ourStoryTitle" className="text-[28px] md:text-[36px] lg:text-[46px] font-semibold mb-5">Our Story</h2>
                    <div className="overflow-hidden">
                        <p className="text-secondary-dark font-normal text-base md:text-lg font-montserrat">
                            Da Vinci Media was founded with a simple vision—to empower businesses
                            with creative and effective digital solutions. We believe that great
                            design is more than aesthetics; it&apos;s about solving problems, building
                            meaningful connections, and creating experiences that leave a lasting
                            impression. Over the years, we&apos;ve partnered with startups, growing
                            businesses, and established brands to deliver high-quality websites,
                            compelling brand identities, user-centered digital products, and
                            marketing solutions that generate real impact.
                        </p>
                    </div>
                </div>

                {/* Who We Are Card */}
                <div id="whoWeAreCard" className="who-card border border-[#E5E2D9] bg-white-color font-proxima p-6 md:p-8 lg:p-10 flex-1">
                    <h2 id="whoWeAreTitle" className="text-[28px] md:text-[36px] lg:text-[46px] font-semibold mb-5">Who We Are</h2>
                    <div className="overflow-hidden">
                        <p className="text-secondary-dark font-normal text-base md:text-lg font-montserrat">
                            We are a team of passionate designers, developers, strategists,
                            and digital creators dedicated to helping businesses succeed in an
                            ever-evolving digital world. Every project we take on is driven
                            by collaboration, innovation, and a commitment to excellence.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

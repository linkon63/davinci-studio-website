"use client"
import CaseStudyGallery from "@/components/homepage/CaseStudy";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrambleTextPlugin);

export default function OurCaseStudy() {
    const container = useRef(null);

    useGSAP(() => {

        const text = new SplitType('#caseStudyTitle', { types: 'chars' });

        const tl = gsap.timeline({ paused: true });
        tl.from(text.chars, {
            x: 100,
            opacity: 0,
            duration: 2,
            stagger: 0.03,
            ease: "power1.out"
        });

        ScrollTrigger.create({
            trigger: container.current,
            start: "top 70%",
            onEnter: () => tl.play(),
        });

        ScrollTrigger.create({
            trigger: container.current,
            start: "top 40%",
            onLeaveBack: () => tl.reverse(),
        });
    }, { scope: container });

    return (
        <div ref={container} className="py-30">
            <div className="container font-proxima">
                <h2
                    id="caseStudyTitle"
                    className="text-[80px] font-bold mb-8 uppercase text-center overflow-hidden"
                >
                    OUR CASE STUDY
                </h2>
                {/* Image Gallery */}
                <CaseStudyGallery />
            </div>
        </div>
    )
}
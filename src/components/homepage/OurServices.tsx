"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: "01.",
        title: "Digital\n& Marketing",
        image: "/assets/homepage/service1.webp",
        items: [
            { title: "Ad Marketing & Campaign Design", desc: "Defining who your next best customers are and new market opportunities." },
            { title: "Business Growth Strategy & Optimization", desc: "Defining who your next best customers are and new market opportunities." },
            { title: "Event & Activity", desc: "Defining who your next best customers are and new market opportunities." },
        ],
    },
    {
        id: "02.",
        title: "Web &\nExperience",
        image: "/assets/homepage/service2.webp",
        items: [
            { title: "Digital Product experience Design", desc: "Defining who your next best customers are and new market opportunities." },
            { title: "Web Design Development", desc: "Defining who your next best customers are and new market opportunities." },
            { title: "Growth strategy", desc: "Defining who your next best customers are and new market opportunities." },
        ],
    },
    {
        id: "03.",
        title: "Branding\nYour Business",
        image: "/assets/homepage/service3.webp",
        items: [
            { title: "Brand Storytelling & Content", desc: "Defining who your next best customers are and new market opportunities." },
            { title: "Brand Design & Identity", desc: "Defining who your next best customers are and new market opportunities." },
            { title: "Creating Production Work", desc: "Defining who your next best customers are and new market opportunities." },
        ],
    },
];

export default function OurServices() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add(
            {
                isMobile: "(max-width: 1023px)",
                isTablet: "(min-width: 1024px) and (max-width: 1279px)",
                isDesktop: "(min-width: 1280px) and (max-width: 1535px)",
                isLargeDesktop: "(min-width: 1536px)",
            },
            (context) => {
                const { isMobile, isTablet, isDesktop, isLargeDesktop } =
                    context.conditions as any;

                const endValue = isMobile
                    ? "bottom 100%"
                    : isTablet
                        ? "bottom 80%"
                        : isDesktop
                            ? "bottom 60%"
                            : "bottom 60%";

                const cards = gsap.utils.toArray(".service-card") as any;
                cards.forEach((card:any) => {
                    ScrollTrigger.create({
                        trigger: card,
                        start: "top top+=60",
                        endTrigger: sectionRef.current,
                        end: endValue,
                        pin: true,
                        pinSpacing: false,
                        scrub: true,
                    });
                });
            }
        );

        return () => {
            mm.revert();
        };
    }, []);

    useEffect(() => {
        const text = new SplitType("#ourServiceTitle", { types: "chars" });

        const tl = gsap.timeline({ paused: true });
        tl.from(text.chars, {
            x: -50,
            opacity: 0,
            duration: 1,
            stagger: 0.05,
            ease: "power1.out",
        });

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 70%",
            onEnter: () => tl.play(),
        });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section 
            ref={sectionRef} 
            className="bg-primary-color text-white-color py-15 sm:py-20 md:py-30 font-proxima min-h-screen"
        >
            <div className="container mx-auto px-4">
                <h2 id="ourServiceTitle" className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold mb-10 md:mb-20 overflow-hidden">OUR SERVICE</h2>

                {/* Service Container */}
                <div className="flex flex-col gap-10">
                    {services.map((service, index) => (
                        <div 
                            key={service.id} 
                            className="service-card bg-primary-color py-10"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                                {/* ID & Title */}
                                <div className="md:col-span-3 flex flex-col justify-between h-full">
                                    <span className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold">{service.id}</span>
                                    <h3 className="text-[28px] sm:text-[36px] md:text-[46px] font-semibold leading-tight whitespace-pre-line">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Image */}
                                <div className="md:col-span-4 relative h-[240px] sm:h-[300px] md:h-[380px] w-full">
                                    <Image
                                        src={service.image}
                                        alt={service.id}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Items */}
                                <div className="md:col-span-5 space-y-4 md:space-y-10">
                                    {service.items.map((item, idx) => (
                                        <div key={idx} className="group cursor-pointer space-y-2">
                                            <h4 className="text-lg md:text-2xl font-semibold group-hover:text-recording-red transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-body-color font-montserrat text-sm md:text-base leading-relaxed max-w-md">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
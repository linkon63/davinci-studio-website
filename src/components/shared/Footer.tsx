"use client"
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaBehance, FaDribbble, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const socialLinks = [
    { name: "FACEBOOK", icon: FaFacebookF, href: "#" },
    { name: "BEHANCE", icon: FaBehance, href: "#" },
    { name: "DRIBBBLE", icon: FaDribbble, href: "#" },
    { name: "LINKEDIN", icon: FaLinkedinIn, href: "#" },
];

export default function Footer() {

    const footerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!footerRef.current) return;

        const buttons = footerRef.current.querySelectorAll(".social-btn");

        buttons.forEach((btn: any) => {
            const redBg = btn.querySelector(".red-bg");

            gsap.set(redBg, { yPercent: 100 });

            const tl = gsap.timeline({ paused: true });

            tl.to(redBg, {
                yPercent: 0,
                duration: 0.4,
                ease: "power3.out"
            });

            btn.addEventListener("mouseenter", () => tl.play());
            btn.addEventListener("mouseleave", () => tl.reverse());
        });
    }, []);

    return (
        <footer ref={footerRef} className="bg-primary-color">
            {/* Top Section */}
            <section className="container mx-auto py-10 md:py-20">
                <div className="mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
                    <div className="max-w-[760px]">
                        <div className="font-proxima flex gap-2 font-semibold text-white-color uppercase tracking-[0.02em] space-y-5">
                            <h1 className="text-sm md:text-base">GET&apos;S STARTED A PROJECTS?</h1>
                            <div className="relative w-[77px] h-[24px]">
                                <Image
                                    src="/assets/footer/arrow.svg"
                                    alt="arrow"
                                    fill
                                    className="object-contain"
                                    sizes="77px"
                                />
                            </div>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-proxima uppercase text-white-color">
                            LET&apos;S JOIN WITH US
                        </h1>

                        <p className="font-montserrat text-sm md:text-base font-normal text-body-color mt-4 mb-10 md:mb-20">
                            Da Vinci Media helps brands stand out with exceptional design,
                            powerful websites, strategic marketing, and creative digital
                            solutions.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-6 font-proxima ">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="social-btn bg-secondary-dark relative overflow-hidden flex items-center gap-2 px-6 py-4 rounded-[999px] font-proxima font-semibold text-white-color"
                                >
                                    <div className="red-bg absolute inset-0 bg-recording-red "></div>
                                    <link.icon className="w-5 h-5 relative z-10" />
                                    <span className="relative z-10">{link.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="font-proxima font-semibold text-lg">
                        <Link
                            href="#"
                            className="w-32 h-32 social-btn md:w-40 md:h-40 rounded-full text-white-color bg-secondary-dark relative overflow-hidden flex flex-col items-center justify-center text-center"
                        >
                            <div className="red-bg absolute inset-0 bg-recording-red"></div>

                            <div className="relative z-10 flex flex-col items-center">
                                <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 mb-1" />
                                <span className="text-xs md:text-sm font-bold leading-tight">
                                    START THE
                                    <br />
                                    JOURNEY
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Bottom Section */}
            <section className="container mx-auto pt-10 md:pt-20 border-t border-zinc-800 font-proxima">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">

                    {/* Logo & Newsletter */}
                    <div className="col-span-1 md:col-span-2 max-w-[424px] space-y-5">
                        <div>
                            <Image src="/logo.jpg" alt="Da Vinci Media" width={158} height={100} />
                        </div>
                        <p className="text-body-color font-semibold text-base md:text-xl">
                            Da Vinci Media helps brands stand out with exceptional design, powerful websites, strategic marketing, and creative digital solutions.
                        </p>
                        <div className="flex items-center bg-secondary-dark p-1">
                            <input
                                type="email"
                                placeholder="Enter Your E-mail"
                                className="bg-transparent text-white px-4 py-3 outline-none flex-grow min-w-0"
                            />
                            <div className="w-[1px] h-6 bg-body-color shrink-0"></div>
                            <button className="bg-transparent text-white-color px-4 md:px-6 py-3 flex items-center gap-2 hover:text-recording-red cursor-pointer transition-colors whitespace-nowrap">
                                SUBSCRIBE <span>&rarr;</span>
                            </button>
                        </div>
                    </div>

                    {/* Quick Access */}
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold text-body-color mb-4 md:mb-6">Quick Access</h3>
                        <ul className="space-y-3 md:space-y-4 text-gray-400">
                            {["About Us", "Contact Us", "FAQs", "Blog", "Support"].map((item) => (
                                <li key={item} className="group cursor-pointer">
                                    <span className="block text-white-color text-xl md:text-[32px] font-semibold transition-all duration-300 group-hover:text-recording-red group-hover:translate-x-4">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold text-body-color mb-4 md:mb-6">Contact Us</h3>
                        <ul className="space-y-3 md:space-y-4 text-white-color text-xl md:text-[32px] font-semibold">
                            <li>Gareeb-e-Nawaz Ave, Sector 11, Uttara, Dhaka - 1230</li>
                            <li>+880 1865 94 21 83</li>
                            <li>contact@davincymedia.com</li>
                        </ul>
                    </div>
                </div>

                {/* Large Branding Text */}
                <div className="mt-10 md:mt-20 text-center">
                    <h2 className="text-[8vw] font-semibold text-white-color leading-none select-none">
                        DA VINCI MEDIA
                    </h2>
                </div>

            </section>
            {/* Copyright */}
            <div className="font-proxima bg-secondary-dark text-center text-white-color text-sm md:text-xl pt-3 pb-2">
                @ {new Date().getFullYear()} Da Vinci Media. All rights reserved.
            </div>
        </footer>
    );
}

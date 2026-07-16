import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaBehance, FaDribbble, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import WaveButton from "./WaveButton";

const socialLinks = [
  { name: "FACEBOOK", icon: FaFacebookF, href: "#" },
  { name: "BEHANCE", icon: FaBehance, href: "#" },
  { name: "DRIBBBLE", icon: FaDribbble, href: "#" },
  { name: "LINKEDIN", icon: FaLinkedinIn, href: "#" },
];

export default function FooterCTA() {
  return (
    <section className="container mx-auto py-10 md:py-20">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
        <div className="max-w-[760px]">
          <div className="font-proxima flex gap-2 font-semibold text-white-color uppercase tracking-[0.02em] space-y-5 footer-hero-sub opacity-0">
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

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-proxima uppercase text-white-color footer-hero-title opacity-0">
            LET&apos;S JOIN WITH US
          </h1>

          <p className="font-montserrat text-sm md:text-base font-normal text-body-color mt-4 mb-10 md:mb-20 footer-hero-desc opacity-0">
            Da Vinci Media helps brands stand out with exceptional design,
            powerful websites, strategic marketing, and creative digital
            solutions.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-6 font-proxima footer-social-links opacity-0">
            {socialLinks.map((link) => (
              <WaveButton
                key={link.name}
                href={link.href}
                className="gap-2 px-6 py-4 rounded-[999px]"
              >
                <link.icon className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{link.name}</span>
              </WaveButton>
            ))}
          </div>
        </div>

        <div className="font-proxima font-semibold text-lg footer-journey-btn opacity-0">
          <WaveButton
            href="#"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full flex-col text-center"
          >
            <div className="relative z-10 flex flex-col items-center">
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 mb-1" />
              <span className="text-xs md:text-sm font-bold leading-tight">
                START THE
                <br />
                JOURNEY
              </span>
            </div>
          </WaveButton>
        </div>
      </div>
    </section>
  );
}

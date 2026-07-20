"use client";

import { useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ContactForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [subject, setSubject] = useState("");

  useGSAP(() => {
    if (!containerRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const cards = containerRef.current.querySelectorAll(".contact-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.0, stagger: 0.2, ease: "power3.out" }
    );
  }, { scope: containerRef });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section ref={containerRef} className="bg-[#FAF9F5] py-20 md:py-28 select-none">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Left Card: Contact Info */}
          <div className="contact-card opacity-0 bg-transparent border border-border-color p-8 md:p-12 flex flex-col justify-between h-full min-h-[450px]">
            <div>
              <h3 className="font-proxima font-bold text-3xl md:text-[36px] text-primary-color mb-8 md:mb-12">
                Contact Us
              </h3>
              
              <div className="space-y-6 md:space-y-8 font-proxima">
                {/* Address */}
                <div className="space-y-1">
                  <p className="text-primary-color text-lg md:text-xl font-semibold leading-relaxed max-w-[280px]">
                    Gareeb-e-Nawaz Ave, Sector 11, Uttara, Dhaka - 1230
                  </p>
                </div>

                <div className="h-[1px] bg-border-color w-full" />

                {/* Phone */}
                <div className="space-y-1">
                  <a
                    href="tel:+8801865942183"
                    className="text-primary-color text-lg md:text-xl font-semibold hover:text-recording-red transition-colors duration-300"
                  >
                    +880 1865 94 21 83
                  </a>
                </div>

                <div className="h-[1px] bg-border-color w-full" />

                {/* Email */}
                <div className="space-y-1">
                  <a
                    href="mailto:contact@davincymedia.com"
                    className="text-primary-color text-lg md:text-xl font-semibold hover:text-recording-red transition-colors duration-300 break-all block"
                  >
                    contact@davincymedia.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Form */}
          <div className="contact-card opacity-0 bg-transparent border border-border-color p-8 md:p-12 lg:col-span-2">
            <h3 className="font-proxima font-bold text-3xl md:text-[36px] text-primary-color mb-8 md:mb-10">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 font-proxima">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-xs md:text-sm font-bold text-primary-color uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    className="w-full bg-[#EAEAE0]/40 border border-border-color py-3.5 px-5 text-primary-color text-base outline-none focus:border-recording-red transition-all duration-300 placeholder:text-body-color"
                  />
                </div>

                {/* E-mail (Figma replicates full name specs exactly) */}
                <div className="space-y-2">
                  <label className="block text-xs md:text-sm font-bold text-primary-color uppercase tracking-wider">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Your Full Name"
                    className="w-full bg-[#EAEAE0]/40 border border-border-color py-3.5 px-5 text-primary-color text-base outline-none focus:border-recording-red transition-all duration-300 placeholder:text-body-color"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="block text-xs md:text-sm font-bold text-primary-color uppercase tracking-wider">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Your Phone Number"
                    className="w-full bg-[#EAEAE0]/40 border border-border-color py-3.5 px-5 text-primary-color text-base outline-none focus:border-recording-red transition-all duration-300 placeholder:text-body-color"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="block text-xs md:text-sm font-bold text-primary-color uppercase tracking-wider">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-[#EAEAE0]/40 border border-border-color py-3.5 px-5 pr-10 text-primary-color text-base outline-none focus:border-recording-red transition-all duration-300 appearance-none cursor-pointer placeholder:text-body-color"
                    >
                      <option value="" disabled hidden>
                        Select Subject
                      </option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Project Partnership</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="saas">SaaS Development</option>
                      <option value="support">Support</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-primary-color">
                      <ChevronDown className="w-5 h-5 text-primary-color animate-pulse" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Message text area - Label and placeholder are FULL NAME / Your Full Name per Figma screenshot */}
              <div className="space-y-2">
                <label className="block text-xs md:text-sm font-bold text-primary-color uppercase tracking-wider">
                  Full Name
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Your Full Name"
                  className="w-full bg-[#EAEAE0]/40 border border-border-color py-3.5 px-5 text-primary-color text-base outline-none focus:border-recording-red transition-all duration-300 resize-none placeholder:text-body-color"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="group flex items-center gap-3 bg-primary-color text-white-color font-semibold uppercase py-4 px-8 cursor-pointer hover:bg-recording-red transition-all duration-300 tracking-wider text-sm md:text-base"
                >
                  Submit Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

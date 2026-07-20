"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SmoothScroll from "@/components/shared/SmoothScroll";
import JobCard from "@/components/career/JobCard";
import { jobPositions } from "@/data/career";

gsap.registerPlugin(ScrollTrigger);


export default function CareerPageClient() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReduced) {
        gsap.set(
          sectionRef.current.querySelectorAll(
            ".career-heading, .career-job, .career-divider"
          ),
          { opacity: 1, y: 0 }
        );
        return;
      }

      const splitInstances: SplitType[] = [];

      // 1. "Open Positions" Heading character animation
      const headingEl = sectionRef.current.querySelector(".career-heading");
      let headingSplit: SplitType | null = null;
      if (headingEl) {
        headingSplit = new SplitType(headingEl as HTMLElement, { types: "chars" });
        splitInstances.push(headingSplit);

        gsap.from(headingSplit.chars, {
          x: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.03,
          ease: "power1.out",
          scrollTrigger: {
            trigger: headingEl,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      // 2. Job Cards animations (characters of the title + fade-up details)
      const jobs = sectionRef.current.querySelectorAll(".career-job");
      jobs.forEach((jobCard) => {
        const titleEl = jobCard.querySelector("h3");
        const metaRow = jobCard.querySelector(".flex-wrap");
        const descEl = jobCard.querySelector("p");
        const applyBtn = jobCard.querySelector(".shrink-0");

        let titleSplit: SplitType | null = null;
        if (titleEl) {
          titleSplit = new SplitType(titleEl as HTMLElement, { types: "chars" });
          splitInstances.push(titleSplit);

          gsap.from(titleSplit.chars, {
            x: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.02,
            ease: "power1.out",
            scrollTrigger: {
              trigger: jobCard,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        }

        const cardDetails = [metaRow, descEl, applyBtn].filter(Boolean);
        if (cardDetails.length > 0) {
          gsap.fromTo(
            cardDetails,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: jobCard,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      // 3. Dividers scale animation
      const dividers = sectionRef.current.querySelectorAll(".career-divider");
      dividers.forEach((divider) => {
        gsap.fromTo(
          divider,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power2.out",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: divider,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      return () => {
        splitInstances.forEach((inst) => inst.revert());
      };
    },
    { scope: sectionRef }
  );

  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen bg-[#FAF9F5]">
        <Navbar />

      <main className="flex-grow">
        {/* Breadcrumb Hero */}
        <Breadcrumb
          title="JOIN OUR TEAM"
          description="Join a team of passionate designers, developers, marketers, and creative thinkers who are shaping exceptional digital products. At Da Vinci Media, you'll work on meaningful projects, collaborate with talented professionals, and grow your career in an inspiring environment."
        />

        {/* Open Positions Section */}
        <section
          ref={sectionRef}
          className="bg-stone-100 py-16 md:py-28 font-proxima"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col gap-7">
              {/* Section Title */}
              <h2 className="career-heading text-black text-2xl md:text-3xl font-semibold leading-9">
                Open Positions
              </h2>

              {/* Job Listings */}
              <div className="career-list flex flex-col gap-10">
                {/* Top divider */}
                <div className="career-divider h-px bg-zinc-300 origin-left" />

                {jobPositions.map((job, index) => (
                  <div key={job.id}>
                    <JobCard job={job} />

                    {/* Divider after each job */}
                    {index < jobPositions.length - 1 && (
                      <div className="career-divider h-px bg-zinc-300 origin-left mt-10" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      </div>
    </SmoothScroll>
  );
}

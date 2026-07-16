"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SmoothScroll from "@/components/shared/SmoothScroll";
import JobCard from "@/components/career/JobCard";
import { jobPositions } from "@/data/career";

gsap.registerPlugin(ScrollTrigger);

const breadcrumbPaths = [
  { name: "Home", href: "/" },
  { name: "Career", active: true },
];

export default function CareerPage() {
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

      // Animate "Open Positions" heading
      gsap.fromTo(
        sectionRef.current.querySelector(".career-heading"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Stagger animate each job card
      const jobs = sectionRef.current.querySelectorAll(".career-job");
      if (jobs.length > 0) {
        gsap.fromTo(
          jobs,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current.querySelector(".career-list"),
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Dividers fade in
      const dividers = sectionRef.current.querySelectorAll(".career-divider");
      if (dividers.length > 0) {
        gsap.fromTo(
          dividers,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current.querySelector(".career-list"),
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
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
          paths={breadcrumbPaths}
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

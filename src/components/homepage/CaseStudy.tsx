"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CaseStudy } from "@/utils/case-study";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const initialCaseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Modern SaaS Dashboard for Business Analytics",
    category: "UI/UX Design",
    year: "2026",
    image: "/assets/homepage/case1.webp",
    aspectRatio: "aspect-[480/371]",
  },
  {
    id: 2,
    title: "Modern SaaS Dashboard for Business Analytics",
    category: "UI/UX Design",
    year: "2026",
    image: "/assets/homepage/case2.webp",
    aspectRatio: "aspect-[700/535]",
  },
  {
    id: 3,
    title: "Modern SaaS Dashboard for Business Analytics",
    category: "UI/UX Design",
    year: "2026",
    image: "/assets/homepage/case3.webp",
    aspectRatio: "aspect-[1096/535]",
  },
  {
    id: 4,
    title: "Modern SaaS Dashboard for Business Analytics",
    category: "UI/UX Design",
    year: "2026",
    image: "/assets/homepage/case4.webp",
    aspectRatio: "aspect-[608/497]",
  },
  {
    id: 5,
    title: "Modern SaaS Dashboard for Business Analytics",
    category: "UI/UX Design",
    year: "2026",
    image: "/assets/homepage/case5.webp",
    aspectRatio: "aspect-[608/497]",
  },
];

export default function CaseStudyGallery() {
  const [cases, setCases] = useState<CaseStudy[]>(initialCaseStudies);

  return (
    <div className=" flex flex-col font-proxima">
      {/* Case Studies Section */}
      <main className="flex flex-col gap-16">
        {/* Row 1: Side by Side (Tablet & Laptop) */}
        {cases.length >= 2 && (
          <div className="flex flex-row items-start justify-between gap-12 w-full">
            {/* Card 1: Smaller Column (w-[480px] equivalent) */}
            <div className="case-card cursor-pointer w-full max-w-[480px] flex flex-col gap-6">
              <div className={cn("relative w-full overflow-hidden bg-zinc-900", cases[0].aspectRatio)}>
                <Image
                  src={cases[0].image}
                  alt={cases[0].title}
                  fill
                  sizes="480px"
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-secondary-dark text-lg font-semibold uppercase tracking-tight leading-5">
                  <span>{cases[0].category}</span>
                  <span>/{cases[0].year}</span>
                </div>
                <h3 className="text-primary-color text-[32px] font-semibold leading-tight">
                  {cases[0].title}
                </h3>
              </div>
            </div>

            {/* Card 2: Larger Column (w-[700px] equivalent) */}
            <div className="case-card cursor-pointer w-full max-w-[700px] flex flex-col gap-6">
              <div className={cn("relative w-full overflow-hidden bg-zinc-900", cases[1].aspectRatio)}>
                <Image
                  src={cases[1].image}
                  alt={cases[1].title}
                  fill
                  sizes="700px"
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-secondary-dark text-lg font-semibold uppercase tracking-tight leading-5">
                  <span>{cases[1].category}</span>
                  <span>/{cases[1].year}</span>
                </div>
                <h3 className="text-primary-color text-[32px] font-semibold leading-tight">
                  {cases[1].title}
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* Row 2: Centered Large Card (NEWME Magazine, w-[1096px] equivalent) */}
        {cases.length >= 3 && (
          <div className="w-full flex justify-center">
            <div className="case-card cursor-pointer w-full max-w-[1096px] flex flex-col gap-6">
              <div className={cn("relative w-full overflow-hidden bg-zinc-900", cases[2].aspectRatio)}>
                <Image
                  src={cases[2].image}
                  alt={cases[2].title}
                  fill
                  sizes="1096px"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-secondary-dark text-lg font-semibold uppercase tracking-tight leading-5">
                  <span>{cases[2].category}</span>
                  <span>/{cases[2].year}</span>
                </div>
                <h3 className="text-primary-color text-[32px] font-semibold leading-tight">
                  {cases[2].title}
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* Row 3: Side by Side (A4 Mockups & Office People, equal widths w-[1320px] total) */}
        {cases.length >= 5 && (
          <div className="flex flex-row items-start justify-between gap-12 w-full">
            {/* Card 4: Left Column (flex-1) */}
            <div className="case-card cursor-pointer w-full flex-1 flex flex-col gap-6">
              <div className={cn("relative w-full overflow-hidden bg-zinc-900", cases[3].aspectRatio)}>
                <Image
                  src={cases[3].image}
                  alt={cases[3].title}
                  fill
                  sizes="608px"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-secondary-dark text-lg font-semibold uppercase tracking-tight leading-5">
                  <span>{cases[3].category}</span>
                  <span>/{cases[3].year}</span>
                </div>
                <h3 className="text-primary-color text-[32px] font-semibold leading-tight">
                  {cases[3].title}
                </h3>
              </div>
            </div>

            {/* Card 5: Right Column (flex-1) */}
            <div className="case-card cursor-pointer w-full flex-1 flex flex-col gap-6">
              <div className={cn("relative w-full overflow-hidden bg-zinc-900", cases[4].aspectRatio)}>
                <Image
                  src={cases[4].image}
                  alt={cases[4].title}
                  fill
                  sizes="608px"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-secondary-dark text-lg font-semibold uppercase tracking-tight leading-5">
                  <span>{cases[4].category}</span>
                  <span>/{cases[4].year}</span>
                </div>
                <h3 className="text-primary-color text-[32px] font-semibold leading-tight">
                  {cases[4].title}
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* Dynamically Loaded Extra Cases (if any) */}
        {cases.length > 5 && (
          <div className="grid grid-cols-1 gap-12 w-full">
            {cases.slice(5).map((extraCase) => (
              <div key={extraCase.id} className="case-card cursor-pointer w-full flex flex-col gap-6">
                <div className={cn("relative w-full overflow-hidden bg-zinc-900", extraCase.aspectRatio)}>
                  <Image
                    src={extraCase.image}
                    alt={extraCase.title}
                    fill
                    sizes="608px"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center text-secondary-dark text-lg font-semibold uppercase tracking-tight leading-5">
                    <span>{extraCase.category}</span>
                    <span>/{extraCase.year}</span>
                  </div>
                  <h3 className="text-primary-color text-[32px] font-semibold leading-tight">
                    {extraCase.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="w-full flex justify-center pt-12">
          <Link
            href="/case-studies"
            className="group flex items-center gap-4 py-2 border-b-2 border-black text-black text-lg font-semibold font-proxima uppercase hover:text-recording-red tracking-[0.02em] transition-all duration-300"
          >
            SEE ALL OUR CASE STUDY
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}

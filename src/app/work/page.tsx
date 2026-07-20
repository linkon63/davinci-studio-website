import type { Metadata } from "next";
import WorkPageClient from "@/components/work/WorkPageClient";

export const metadata: Metadata = {
  title: "Our Case Study",
  description:
    "Da Vinci Media helps brands stand out with exceptional design, powerful websites, strategic marketing, and creative digital solutions.",
};

export default function WorkPage() {
  return <WorkPageClient />;
}

import type { Metadata } from "next";
import ServicePageClient from "@/components/service/ServicePageClient";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Da Vinci Media helps brands stand out with exceptional design, powerful websites, strategic marketing, and creative digital solutions.",
};

export default function ServicePage() {
  return <ServicePageClient />;
}

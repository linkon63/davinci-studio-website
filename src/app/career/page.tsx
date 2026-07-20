import type { Metadata } from "next";
import CareerPageClient from "@/components/career/CareerPageClient";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Join a team of passionate designers, developers, marketers, and creative thinkers who are shaping exceptional digital products. At Da Vinci Media, you'll work on meaningful projects, collaborate with talented professionals, and grow your career in an inspiring environment.",
};

export default function CareerPage() {
  return <CareerPageClient />;
}

import type { Metadata } from "next";
import BlogPageClient from "@/components/blog/BlogPageClient";

export const metadata: Metadata = {
  title: "Blog & News",
  description:
    "Stay ahead of the latest trends in design, development, branding, and digital marketing. Explore expert insights, practical guides, and creative ideas to help your business grow in the digital world.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}

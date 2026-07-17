import type { Metadata } from "next";
import BlogDetailPageClient from "@/components/blog/BlogDetailPageClient";
import { blogDetails } from "@/data/blog";

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const blogId = parseInt(id) || 1;
  const blog = blogDetails[blogId] || blogDetails[1];

  return {
    title: blog.title,
    description: blog.description,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const blogId = parseInt(id) || 1;

  return <BlogDetailPageClient blogId={blogId} />;
}

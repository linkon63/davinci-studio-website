import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCard from "@/components/shared/BlogCard";
import { initialBlogPosts } from "@/data/blog";

export default function Blogs() {
    // Show only the first 3 blog posts on the homepage
    const featuredPosts = initialBlogPosts.slice(0, 3);

    return (
        <section className="container py-30">
            {/* Header */}
            <div className="flex justify-between font-proxima items-center mb-12">
                <h2 className="font-bold text-[80px] tracking-[0.02em]">
                    BLOG & NEWS
                </h2>
                <Link href="/blog" className="flex items-center gap-2 text-lg font-semibold border-b border-black pb-1 hover:text-recording-red cursor-pointer">
                    SEE ALL BLOGS <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} variant="light" />
                ))}
            </div>
        </section>
    );
}
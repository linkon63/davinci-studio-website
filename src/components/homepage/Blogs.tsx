import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const blogPosts = [
    {
        id: 1,
        image: "/assets/homepage/blog1.webp",
        date: "JULY 9, 2026",
        title: "Modern SaaS Dashboard for Business Analytics",
        link: "#",
        isSpecial: true,
    },
    {
        id: 2,
        image: "/assets/homepage/blog2.webp",
        date: "JULY 9, 2026",
        title: "Modern SaaS Dashboard for Business Analytics",
        link: "#",
        isSpecial: false,
    },
    {
        id: 3,
        image: "/assets/homepage/blog3.webp",
        date: "JULY 9, 2026",
        title: "Modern SaaS Dashboard for Business Analytics",
        link: "#",
        isSpecial: false,
    },
];

export default function Blogs() {
    return (
        <section className="container py-30">
            {/* Header */}
            <div className="flex justify-between font-proxima items-center mb-12">
                <h2 className="font-bold text-[80px] tracking-[0.02em]">
                    BLOG & NEWS
                </h2>
                <Link href="/blogs" className="flex items-center gap-2 text-lg font-semibold border-b border-black pb-1 hover:text-recording-red cursor-pointer">
                    SEE ALL BLOGS <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <div key={post.id} className="group cursor-pointer space-y-3">
                        {/* Image Container */}
                        <div className="relative w-full aspect-[4/3] overflow-hidden mb-6">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <span className="text-lg text-body-color font-semibold font-proxima tracking-[0.02em]">{post.date}</span>
                        <h3 className="text-3xl font-semibold font-proxima transition-colors">
                            {post.title}
                        </h3>

                        {/* Read More */}
                        <Link href={post.link} className="flex items-center justify-between text-lg gap-2 tracking-[0.02em] font-proxima group-hover:text-recording-red font-semibold uppercase">
                            READ MORE
                            {post.isSpecial ? <ArrowUpRight className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
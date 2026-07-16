import { BlogPost, BlogDetail } from "@/types/blog";
import { DetailImages } from "@/types/common";

const DEFAULT_DETAIL_IMAGES: DetailImages = {
  hero: "/assets/img/work/work-details1.webp",
  gallery1: "/assets/img/work/work-details2.webp",
  gallery2: "/assets/img/work/work-details3.webp",
  gallery3: "/assets/img/work/work-details4.webp",
  bottom: "/assets/img/work/work-details5.webp",
};

export const initialBlogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/assets/homepage/blog1.webp",
    date: "JULY 9, 2026",
    title: "Modern SaaS Dashboard for Business Business Analytics",
    link: "/blog/1",
    isSpecial: true,
  },
  {
    id: 2,
    image: "/assets/homepage/blog2.webp",
    date: "JULY 9, 2026",
    title: "Modern SaaS Dashboard for Business Analytics",
    link: "/blog/2",
    isSpecial: false,
  },
  {
    id: 3,
    image: "/assets/homepage/blog3.webp",
    date: "JULY 9, 2026",
    title: "Modern SaaS Dashboard for Business Analytics",
    link: "/blog/3",
    isSpecial: false,
  },
  {
    id: 4,
    image: "/assets/homepage/blog3.webp",
    date: "JULY 9, 2026",
    title: "Modern SaaS Dashboard for Business Analytics",
    link: "/blog/4",
    isSpecial: false,
  },
];

export const blogDetails: Record<number, BlogDetail> = {
  1: {
    title: "Modern SaaS Dashboard for Business Analytics",
    description: "Discover the design principles and UX methodologies utilized to craft a high-performance business intelligence workspace that bridges complex data with simple, actionable insights.",
    category: "Product Design",
    author: "FinFlow Design Team",
    publishDate: "July 9, 2026",
    readTime: "5 MINS READ",
    concept: "In the era of big data, dashboards often suffer from data overload. The challenge was to transform massive real-time analytical data into clear visual modules without overwhelming decision-makers. In the era of big data, dashboards often suffer from data overload. The challenge was to transform massive real-time analytical data into clear visual modules without overwhelming decision-makers.",
    story: "We solved the clutter issue by introducing a scalable design system built on high-contrast visual hierarchies. By using contextual color guidelines and flexible card-based widget layouts, users can now customize their workflow and locate key metrics in seconds. We solved the clutter issue by introducing a scalable design system built on high-contrast visual hierarchies. By using contextual color guidelines and flexible card-based widget layouts, users can now customize their workflow and locate key metrics in seconds.",
    takeaways: [
      "Modular Widget Layouts",
      "Contextual Color Coding",
      "Dynamic Data Visualizations",
      "Responsive Fluid Spacing",
      "Interactive Filter Systems",
      "High-Contrast Typography"
    ],
    images: DEFAULT_DETAIL_IMAGES
  },
  2: {
    title: "Aura Brand Identity & Web Platform",
    description: "Learn how we developed Aura's premium identity, modern guidelines, and a high-performance web platform that captures their core minimalist and content-driven aesthetic.",
    category: "Branding & Web",
    author: "Aura Labs Studio",
    publishDate: "July 9, 2026",
    readTime: "6 MINS READ",
    concept: "Cohesive visual presence across offline print and modern web portals is hard to maintain. Our objective was to lay down a solid design framework that guarantees consistency and fluid brand messaging.",
    story: "Our team developed a fluid typography scale and motion-first interactive components. The resulting design was lightweight, asset-optimized, and improved search engine indexing while delivering premium visual layouts. Our team developed a fluid typography scale and motion-first interactive components. The resulting design was lightweight, asset-optimized, and improved search engine indexing while delivering premium visual layouts.",
    takeaways: [
      "Minimalist Design Systems",
      "Typography Scale Alignment",
      "Optimized Vector Guidelines",
      "Fluid Animation Foundations",
      "Premium Editorial Grids",
      "Responsive Layout Grids"
    ],
    images: DEFAULT_DETAIL_IMAGES
  },
  3: {
    title: "Creative Art Direction & Editorial Layouts",
    description: "An in-depth look at editorial magazine typography, layout grids, and print-inspired web designs designed to elevate luxury visual storytelling.",
    category: "Creative Direction",
    author: "Art Direction Hub",
    publishDate: "July 9, 2026",
    readTime: "7 MINS READ",
    concept: "Luxury brands demand storytelling that defaults to clean whitespace, premium typography, and asymmetrical balances. The design challenge was to translate tactile print details into a dynamic screen experience.",
    story: "We designed a layout system using modern CSS Grid that breaks traditional horizontal alignments, creating an organic reading flow that replicates turning the pages of an art magazine. We designed a layout system using modern CSS Grid that breaks traditional horizontal alignments, creating an organic reading flow that replicates turning the pages of an art magazine.",
    takeaways: [
      "Asymmetric Grid Alignment",
      "tactile Editorial Aesthetics",
      "Tactful Whitespace Controls",
      "Custom Serif Combinations",
      "Immersive Parallax Scrollytelling",
      "Responsive Image Splines"
    ],
    images: DEFAULT_DETAIL_IMAGES
  },
  4: {
    title: "Brand Systems & Identity stationery Mockups",
    description: "How cohesive stationery mocks and robust corporate systems build trust and scale high-profile visual touchpoints consistently.",
    category: "Brand Systems",
    author: "Identity Lab Co.",
    publishDate: "July 9, 2026",
    readTime: "4 MINS READ",
    concept: "A corporate identity must scale cleanly from a letterhead to dynamic billboard signs. The focus was establishing strict geometric assets and grids that withstand scale changes.",
    story: "By setting rigorous mathematical rules for logotype proportions, line spacing, and negative spaces, we designed stationery that projects stability and premium corporate branding. By setting rigorous mathematical rules for logotype proportions, line spacing, and negative spaces, we designed stationery that projects stability and premium corporate branding.",
    takeaways: [
      "Rigid Proportional Systems",
      "Geometric Asset Styling",
      "Scale-Invariant Typography",
      "Premium Stationery Colors",
      "Unified Visual Touchpoints",
      "Clean Dynamic Mockups"
    ],
    images: DEFAULT_DETAIL_IMAGES
  }
};

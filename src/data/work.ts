import { CaseStudy, ProjectDetail } from "@/types/work";

export const initialCaseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "FinFlow Business Intelligence SaaS Dashboard",
    category: "Product Design",
    year: "2025",
    image: "/assets/img/work/work1.webp",
    aspectRatio: "aspect-[480/371]",
    widthClass: "lg:max-w-[480px]",
    sizes: "(max-width: 1024px) 100vw, 480px",
  },
  {
    id: 2,
    title: "Aura Brand Identity & Web Platform",
    category: "Branding & Web",
    year: "2025",
    image: "/assets/img/work/work2.webp",
    aspectRatio: "aspect-[700/535]",
    widthClass: "lg:max-w-[700px]",
    sizes: "(max-width: 1024px) 100vw, 700px",
  },
  {
    id: 3,
    title: "NEWME Luxury Fashion Editorial Magazine",
    category: "Creative Direction",
    year: "2026",
    image: "/assets/img/work/work3.webp",
    aspectRatio: "aspect-[1096/535]",
    widthClass: "lg:max-w-[1096px]",
    sizes: "(max-width: 1024px) 100vw, 1096px",
  },
  {
    id: 4,
    title: "Nova Corp Identity Stationery Mockups",
    category: "Brand Systems",
    year: "2026",
    image: "/assets/img/work/work4.webp",
    aspectRatio: "aspect-[608/497]",
    widthClass: "flex-1",
    sizes: "(max-width: 1024px) 100vw, 608px",
  },
  {
    id: 5,
    title: "Omni Fintech Mobile App Architecture",
    category: "UI/UX Strategy",
    year: "2026",
    image: "/assets/img/work/work5.webp",
    aspectRatio: "aspect-[608/497]",
    widthClass: "flex-1",
    sizes: "(max-width: 1024px) 100vw, 608px",
  },
];

export const projectDetails: Record<number, ProjectDetail> = {
  1: {
    title: "FinFlow Business Intelligence SaaS Dashboard",
    description: "FinFlow is a modern SaaS dashboard designed to help businesses monitor performance, analyze data, and make smarter decisions through a clean, intuitive, and user-centered interface.",
    category: "Product Design",
    client: "FinFlow Inc.",
    startDate: "July 10, 2025",
    endDate: "October 20, 2025",
    challenge: "The existing platform suffered from a cluttered interface, inconsistent navigation, and poor data visualization. Users found it difficult to locate important information, resulting in a frustrating experience and reduced productivity. The existing platform suffered from a cluttered interface, inconsistent navigation, and poor data visualization. Users found it difficult to locate important information, resulting in a frustrating experience and reduced productivity.",
    solution: "We redesigned the platform with a user-first approach by introducing a scalable design system, streamlined navigation, improved dashboard layouts, and clear data visualization. Every interaction was carefully crafted to enhance usability while maintaining a modern and professional appearance. We redesigned the platform with a user-first approach by introducing a scalable design system, streamlined navigation, improved dashboard layouts, and clear data visualization. Every interaction was carefully crafted to enhance usability while maintaining a modern and professional appearance.",
    features: [
      "Modern & Minimal Dashboard",
      "Responsive Design",
      "Advanced Analytics Widgets",
      "Dark & Light Mode",
      "Interactive Charts",
      "Smart Data Visualization",
      "User Management",
      "Notification Center",
      "Custom Reports",
      "Design System Components"
    ],
    images: {
      hero: "/assets/img/work/work-details1.webp",
      gallery1: "/assets/img/work/work-details2.webp",
      gallery2: "/assets/img/work/work-details3.webp",
      gallery3: "/assets/img/work/work-details4.webp",
      bottom: "/assets/img/work/work-details5.webp"
    }
  },
  2: {
    title: "Aura Brand Identity & Web Platform",
    description: "Aura is a digital-first lifestyle brand. We developed their visual identity, brand guidelines, and a high-performance web platform that captures their premium, minimalist aesthetic.",
    category: "Branding & Web",
    client: "Aura Labs",
    startDate: "November 01, 2025",
    endDate: "January 15, 2026",
    challenge: "Aura lacked a cohesive digital signature across their touchpoints. Their branding felt outdated, and the web performance lagged, resulting in high bounce rates and low digital engagement from premium customers. Aura lacked a cohesive digital signature across their touchpoints. Their branding felt outdated, and the web performance lagged, resulting in high bounce rates and low digital engagement from premium customers.",
    solution: "We created a flexible brand system built around modern typography, organic motion design, and a content-focused web experience. Using high-speed modern technologies, we reduced page loading speed by 60% and raised user conversions. We created a flexible brand system built around modern typography, organic motion design, and a content-focused web experience. Using high-speed modern technologies, we reduced page loading speed by 60% and raised user conversions.",
    features: [
      "Minimal Brand System",
      "Custom Grid Layouts",
      "Liquid Transition Effects",
      "Next-Gen Typography",
      "Highly Optimized Assets",
      "Responsive Brand Assets",
      "Optimized Core Web Vitals",
      "Flexible Layout Blocks",
      "Modern Digital Guidelines",
      "Fluid Animation Systems"
    ],
    images: {
      hero: "/assets/img/work/work-details1.webp",
      gallery1: "/assets/img/work/work-details2.webp",
      gallery2: "/assets/img/work/work-details3.webp",
      gallery3: "/assets/img/work/work-details4.webp",
      bottom: "/assets/img/work/work-details5.webp"
    }
  },
  3: {
    title: "NEWME Luxury Fashion Editorial Magazine",
    description: "A stunning lifestyle publication blending high fashion with interactive digital storytelling. We directed the aesthetic tone, photography styling, and layout typography.",
    category: "Creative Direction",
    client: "NEWME Studio",
    startDate: "February 15, 2026",
    endDate: "April 30, 2026",
    challenge: "Traditional fashion magazines struggle to translate their tactile, luxurious print layouts into digital forms. Screen experiences often feel flat, losing the editorial rhythm and typographic expression of paper print. Traditional fashion magazines struggle to translate their tactile, luxurious print layouts into digital forms. Screen experiences often feel flat, losing the editorial rhythm and typographic expression of paper print.",
    solution: "We designed an interactive editorial experience utilizing large images, dynamic viewport grids, and micro-animations that mirror the act of turning premium magazine pages. Typography changes dynamically to keep layouts organic. We designed an interactive editorial experience utilizing large images, dynamic viewport grids, and micro-animations that mirror the act of turning premium magazine pages. Typography changes dynamically to keep layouts organic.",
    features: [
      "Luxury Editorial Grid",
      "Staggered Image Parallax",
      "Dynamic Typographic Scales",
      "Custom Photography Art Direction",
      "Interactive Layout Fills",
      "Editorial Storyboards",
      "Smooth Viewport Snapping",
      "Aesthetic Monocle Views",
      "Print-to-Digital Transitions",
      "Staggered Text Segments"
    ],
    images: {
      hero: "/assets/img/work/work-details1.webp",
      gallery1: "/assets/img/work/work-details2.webp",
      gallery2: "/assets/img/work/work-details3.webp",
      gallery3: "/assets/img/work/work-details4.webp",
      bottom: "/assets/img/work/work-details5.webp"
    }
  },
  4: {
    title: "Nova Corp Identity Stationery Mockups",
    description: "A complete physical and digital brand identity package designed for a progressive financial institution. Includes logos, cards, systems, and customized textures.",
    category: "Brand Systems",
    client: "Nova Capital",
    startDate: "May 01, 2026",
    endDate: "June 10, 2026",
    challenge: "Corporate identity systems often feel cold, repetitive, and distant. Nova Corp needed to express trust and stability while standing out as a forward-thinking, modern investment platform for new-age portfolios. Corporate identity systems often feel cold, repetitive, and distant. Nova Corp needed to express trust and stability while standing out as a forward-thinking, modern investment platform for new-age portfolios.",
    solution: "We structured a clean, modernist identity using deep monochromatic colors, crisp geometric shapes, and premium physical print mockups. Every asset, from cards to digital UI, shares the same mathematical grid rules. We structured a clean, modernist identity using deep monochromatic colors, crisp geometric shapes, and premium physical print mockups. Every asset, from cards to digital UI, shares the same mathematical grid rules.",
    features: [
      "Stationery Print Systems",
      "Mathematical Brand Grids",
      "Monochromatic Style Guides",
      "Geometric Logo Layouts",
      "Physical Stamp Elements",
      "Corporate Assets Directory",
      "Custom Monogram Assets",
      "Digital Presentation Decks",
      "Minimal Vector Elements",
      "Scalable Vector Layouts"
    ],
    images: {
      hero: "/assets/img/work/work-details1.webp",
      gallery1: "/assets/img/work/work-details2.webp",
      gallery2: "/assets/img/work/work-details3.webp",
      gallery3: "/assets/img/work/work-details4.webp",
      bottom: "/assets/img/work/work-details5.webp"
    }
  },
  5: {
    title: "Omni Fintech Mobile App Architecture",
    description: "A cross-platform financial application facilitating seamless instant transfers, smart automated budgeting, and micro-investment tools in a simple tap.",
    category: "UI/UX Strategy",
    client: "Omni Pay",
    startDate: "June 15, 2026",
    endDate: "Present",
    challenge: "Most fintech applications overload the user with complex statistical charts, confusing terms, and multi-step transfer interfaces, creating transactional friction and user anxiety. Most fintech applications overload the user with complex statistical charts, confusing terms, and multi-step transfer interfaces, creating transactional friction and user anxiety.",
    solution: "We designed a single-screen transaction dashboard that utilizes natural conversational cues, smart shortcuts, and highly readable, simple color codes to manage finances effortlessly and stress-free. We designed a single-screen transaction dashboard that utilizes natural conversational cues, smart shortcuts, and highly readable, simple color codes to manage finances effortlessly and stress-free.",
    features: [
      "Conversational Interface",
      "One-Tap Instant Transfer",
      "Automatic Micro-Investments",
      "Damped Biometric Security",
      "Dynamic Spending Forecasts",
      "Custom Budgeting Wizards",
      "Instant Support Channels",
      "Personal Ledger Systems",
      "Monitored Account Limits",
      "Encrypted Cloud Backups"
    ],
    images: {
      hero: "/assets/img/work/work-details1.webp",
      gallery1: "/assets/img/work/work-details2.webp",
      gallery2: "/assets/img/work/work-details3.webp",
      gallery3: "/assets/img/work/work-details4.webp",
      bottom: "/assets/img/work/work-details5.webp"
    }
  }
};

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = localFont({
  variable: "--font-montserrat",
  display: "swap",
  src: [
    { path: "../../public/fonts/montserrat/Montserrat-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/montserrat/Montserrat-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/montserrat/Montserrat-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/montserrat/Montserrat-Bold.ttf", weight: "700", style: "normal" },
  ],
});

const proxima = localFont({
  variable: "--font-proxima",
  display: "swap",
  src: [
    { path: "../../public/fonts/Proxima-Nova-Font-Family/ProximaNova-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Proxima-Nova-Font-Family/ProximaNova-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/Proxima-Nova-Font-Family/ProximaNova-Semibold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/Proxima-Nova-Font-Family/ProximaNova-Bold.ttf", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Davinci Project Studio",
    template: "%s | Davinci Project Studio",
  },
  description:
    "Davinci Media is crafting something remarkable. Our new studio site is coming soon — sign up to be the first to know when we launch.",
  keywords: [
    "Davinci Media",
    "Davinci Project Studio",
    "creative studio",
    "coming soon",
    "design studio",
  ],
  authors: [{ name: "Davinci Media" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Davinci Project Studio",
    title: "Davinci Project Studio — Coming Soon",
    description:
      "Davinci Media is crafting something remarkable. Sign up to be the first to know when we launch.",
    images: [{ url: "/logo.jpg", width: 948, height: 915, alt: "Davinci Media" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Davinci Project Studio — Coming Soon",
    description:
      "Davinci Media is crafting something remarkable. Sign up to be the first to know when we launch.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: "/logo.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${proxima.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <div id="mobile-menu-root" />
      </body>
    </html>
  );
}

"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ServiceList from "@/components/service/ServiceList";
import SmoothScroll from "@/components/shared/SmoothScroll";
import { BreadcrumbPath } from "@/types/common";

const breadcrumbPaths: BreadcrumbPath[] = [
  { name: "Home", href: "/" },
  { name: "Service", active: true },
];

export default function ServicePage() {
  return (
    <SmoothScroll>
      <div className="bg-[#010101] min-h-screen flex flex-col font-proxima">
        <Navbar />

        <Breadcrumb
          title="OUR SERVICE"
          description="Da Vinci Media helps brands stand out with exceptional design, powerful websites, strategic marketing, and creative digital solutions."
          paths={breadcrumbPaths}
        />

        <ServiceList />

        <Footer />
      </div>
    </SmoothScroll>
  );
}

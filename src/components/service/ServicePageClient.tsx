"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ServiceList from "@/components/service/ServiceList";
import SmoothScroll from "@/components/shared/SmoothScroll";


export default function ServicePageClient() {
  return (
    <SmoothScroll>
      <div className="bg-[#010101] min-h-screen flex flex-col font-proxima">
        <Navbar />

        <Breadcrumb
          title="OUR SERVICE"
          description="Da Vinci Media helps brands stand out with exceptional design, powerful websites, strategic marketing, and creative digital solutions."
        />

        <ServiceList />

        <Footer />
      </div>
    </SmoothScroll>
  );
}

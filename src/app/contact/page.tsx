import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ContactForm from "@/components/contact/ContactForm";
import SmoothScroll from "@/components/shared/SmoothScroll";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Whether you're starting a new project, looking to enhance your digital presence, or simply have a question, we're here to help. Get in touch with our team, and let's create something extraordinary together.",
};

export default function ContactPage() {
  const breadcrumbPaths = [
    { name: "HOME", href: "/" },
    { name: "CONTACT US", active: true },
  ];

  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen bg-[#FAF9F5]">
        {/* Header / Navbar */}
        <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Breadcrumb Header Section */}
        <Breadcrumb
          title="CONTACT US"
          description="Whether you're starting a new project, looking to enhance your digital presence, or simply have a question, we're here to help. Get in touch with our team, and let's create something extraordinary together."
          paths={breadcrumbPaths}
        />

        {/* Contact Info & Message Form Grid Section */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
      </div>
    </SmoothScroll>
  );
}

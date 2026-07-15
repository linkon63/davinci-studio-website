import Blogs from "@/components/homepage/Blogs";
import Hero from "@/components/homepage/Hero";
import OurCaseStudy from "@/components/homepage/OurCaseStudy";
import OurServices from "@/components/homepage/OurServices";
import VideoPlayingContainer from "@/components/homepage/VideoPlayingContainer";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function ComingSoonPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <VideoPlayingContainer />
      <OurCaseStudy />
      <OurServices />
      <Blogs />
      <Footer />
    </div>
  );
}

import Blogs from "@/components/homepage/Blogs";
import Hero from "@/components/homepage/Hero";
import OurCaseStudy from "@/components/homepage/OurCaseStudy";
import OurServices from "@/components/homepage/OurServices";
import VideoPlayingContainer from "@/components/homepage/VideoPlayingContainer";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import SmoothScroll from "@/components/shared/SmoothScroll";

export default function ComingSoonPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <Hero />
      <VideoPlayingContainer />
      <OurCaseStudy />
      <OurServices />
      <Blogs />
      <Footer />
    </SmoothScroll>
  );
}

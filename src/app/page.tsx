import Hero from "@/components/homepage/Hero";
import VideoPlayingContainer from "@/components/homepage/VideoPlayingContainer";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function ComingSoonPage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <VideoPlayingContainer/>
      <Footer/>
    </div>
  );
}

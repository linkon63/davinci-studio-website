import AboutDescription from "@/components/about-page/AboutDescription";
import ImageSlider from "@/components/about-page/ImageSlider";
import LogoSlider from "@/components/about-page/LogoSlider";
import WhoWeAre from "@/components/about-page/WhoWeAre";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import SmoothScroll from "@/components/shared/SmoothScroll";


export default function AboutPage() {
    return (
        <div>
            <SmoothScroll>
                <Navbar />
                <AboutDescription />
                <LogoSlider />
                <WhoWeAre />
                <Footer />
            </SmoothScroll>
        </div>
    )
}
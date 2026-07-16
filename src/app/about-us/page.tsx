import AboutDescription from "@/components/about-page/AboutDescription";
import EntranceReveal from "@/components/about-page/EntranceReveal";
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
                <ImageSlider />
                <div className="relative z-10 -mt-[150px] md:-mt-[210px]">
                    <EntranceReveal>
                        <AboutDescription />
                    </EntranceReveal>
                </div>
                <LogoSlider />
                <WhoWeAre />
                <Footer />
            </SmoothScroll>
        </div>
    )
}
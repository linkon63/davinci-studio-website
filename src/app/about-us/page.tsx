import AboutDescription from "@/components/about-page/AboutDescription";
import BookSection from "@/components/about-page/BookSection";
import EntranceReveal from "@/components/about-page/EntranceReveal";
import ImageSlider from "@/components/about-page/ImageSlider";
import LogoSlider from "@/components/about-page/LogoSlider";
import TestimonialSection from "@/components/about-page/Testimonial";
import WhoWeAre from "@/components/about-page/WhoWeAre";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import SmoothScroll from "@/components/shared/SmoothScroll";


export default function AboutPage() {
    return (
        <div>
            <SmoothScroll>
                <Navbar />
                <Breadcrumb
                    title="ABOUT US"
                    description="At Da Vinci Media, we combine creativity, technology, and strategy to help businesses build impactful digital experiences. "
                />
                <ImageSlider />
                <div className="relative z-10 -mt-[150px] md:-mt-[210px]">
                    <EntranceReveal>
                        <AboutDescription />
                    </EntranceReveal>
                </div>
                <LogoSlider />
                <WhoWeAre />
                <TestimonialSection />
                <BookSection />
                <Footer />
            </SmoothScroll>
        </div>
    )
}
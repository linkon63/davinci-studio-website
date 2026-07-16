import AboutDescription from "@/components/about-page/AboutDescription";
import ImageSlider from "@/components/about-page/ImageSlider";
import LogoSlider from "@/components/about-page/LogoSlider";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function AboutPage(){
    return(
        <div>
            <Navbar/>
            <AboutDescription/>
            <LogoSlider/>
            <Footer/>
        </div>
    )
}
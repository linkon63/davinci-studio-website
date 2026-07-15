import CaseStudyGallery from "@/components/homepage/CaseStudy";

export default function OurCaseStudy() {
    return (
        <div className="py-30">
            <div className="container font-proxima">
                <h2 className="text-[80px] font-bold mb-8 uppercase text-center">OUR CASE STUDY</h2>
                {/* Image Gallary */}
                <CaseStudyGallery/>
            </div>

        </div>
    )
}
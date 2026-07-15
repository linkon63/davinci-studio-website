import Image from "next/image";

const services = [
    {
        id: "01.",
        title: "Digital\n& Marketing",
        image: "/assets/homepage/service1.webp",
        items: [
            { title: "Ad Marketing & Campaign Design", desc: "Defining who your next best customers are and new market opportunities." },
            { title: "Business Growth Strategy & Optimization", desc: "Defining who your next best customers are and new market opportunities." },
            { title: "Event & Activity", desc: "Defining who your next best customers are and new market opportunities." },
        ],
    },
    {
        id: "02.",
        title: "Web &\nExperience",
        image: "/assets/homepage/service2.webp",
        items: [
            { title: "Digital Product experience Design", desc: "Defining who your next best customers are and new market opportunities." },
            { title: "Web Design Development", desc: "Defining who your next best customers are and new market opportunities." },
            { title: "Growth strategy", desc: "Defining who your next best customers are and new market opportunities." },
        ],
    },
    {
        id: "03.",
        title: "Branding\nYour Business",
        image: "/assets/homepage/service3.webp",
        items: [
            { title: "Brand Storytelling & Content", desc: "Defining who your next best customers are and new market opportunities." },
            { title: "Brand Design & Identity", desc: "Defining who your next best customers are and new market opportunities." },
            { title: "Creating Production Work", desc: "Defining who your next best customers are and new market opportunities." },
        ],
    },
];

export default function OurServices() {
    return (
        <section className="bg-primary-color text-white-color py-30 font-proxima">
            <div className="container">
                <h2 className="text-[80px] font-bold mb-12">OUR SERVICE</h2>

                <div className="">
                    {services.map((service, index) => (
                        <div key={service.id}>
                            <div key={service.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                                {/* ID & Title */}
                                <div className="md:col-span-3 flex flex-col justify-between h-full">
                                    <span className="text-[32px] font-semibold">{service.id}</span>
                                    <h3 className="text-[46px] font-semibold">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Image */}
                                <div className="md:col-span-4 relative h-[380px] w-full">
                                    <Image
                                        src={service.image}
                                        alt={service.id}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Items */}
                                <div className="md:col-span-5 space-y-10">
                                    {service.items.map((item, idx) => (
                                        <div key={idx} className="group cursor-pointer space-y-2">
                                            <h4 className="text-2xl font-semibold group-hover:text-recording-red transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-body-color font-montserrat text-base leading-relaxed max-w-md">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>




                            </div>
                            {/* Horizontal Line */}

                            {index !== services.length - 1 && (
                                <div className="py-15">
                                    <div className="w-full h-[1px] bg-zinc-800"></div>
                                </div>
                            )}

                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}
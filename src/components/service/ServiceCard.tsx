"use client";

import Image from "next/image";

export interface ServiceItem {
  title: string;
  desc: string;
}

export interface ServiceCardData {
  id: string;
  title: string;
  image: string;
  items: ServiceItem[];
}

interface ServiceCardProps {
  service: ServiceCardData;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="service-card bg-primary-color py-10 md:py-16">
      <div className="flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-10">
        {/* ID & Title */}
        <div className="w-full lg:w-80 lg:self-stretch lg:shrink-0 flex flex-col justify-between items-start gap-4 lg:gap-0">
          <span className="text-2xl md:text-3xl font-semibold font-proxima text-white-color leading-9">
            {service.id}
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-proxima leading-tight lg:leading-[54px] text-white-color whitespace-pre-line">
            {service.title}
          </h3>
        </div>

        {/* Image */}
        <div className="relative w-full h-[240px] sm:h-[300px] md:h-[380px] lg:w-[500px] lg:h-[380px] lg:shrink-0 overflow-hidden service-image-wrapper">
          <Image
            src={service.image}
            alt={service.title.replace(/\n/g, " ")}
            fill
            className="object-cover service-image"
            sizes="(max-width: 1024px) 100vw, 500px"
            loading="lazy"
          />
        </div>

        {/* Items */}
        <div className="w-full lg:w-96 lg:self-stretch lg:shrink-0 flex flex-col justify-between items-start gap-6 lg:gap-2">
          {service.items.map((item, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col justify-start items-start gap-2 w-full">
              <h4 className="text-xl md:text-2xl font-semibold font-proxima text-white-color group-hover:text-recording-red transition-colors duration-300 leading-8">
                {item.title}
              </h4>
              <p className="text-body-color font-montserrat text-sm md:text-base font-normal leading-6 max-w-md">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

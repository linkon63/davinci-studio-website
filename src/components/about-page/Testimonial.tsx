'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { TestimonialCardProps } from '@/types/testimonial';


const TestimonialCard = ({ quote, name, title, imgSrc, imageLeft = true }: TestimonialCardProps) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12 xl:gap-[60px] bg-secondary-dark relative p-6 md:p-8 lg:px-14 lg:py-12 xl:px-[80px] xl:py-[60px] rounded-[24px] md:rounded-[32px] xl:rounded-[40px]
        ${imageLeft
          ? 'xl:rounded-tl-[40px] xl:rounded-bl-[40px] xl:rounded-tr-[10px] xl:rounded-br-[120px]'
          : 'xl:rounded-tl-[120px] xl:rounded-bl-[10px] xl:rounded-tr-[40px] xl:rounded-br-[40px]'
        }`}
    >

      {/* Image section */}
      <div className={`w-full h-[250px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] flex-shrink-0 ${imageLeft ? '' : 'lg:order-2'}`}>
        <div className="relative w-full h-full rounded-[16px] md:rounded-[20px] xl:rounded-[30px] overflow-hidden">
          <Image src={imgSrc} alt={name} fill className="object-cover" />
        </div>
      </div>

      {/* Text section */}
      <div className="flex-1 text-white font-proxima text-center lg:text-left">
        <p className="text-base md:text-lg lg:text-[22px] xl:text-[24px] leading-[1.4] font-semibold mb-6 md:mb-8 xl:mb-[40px]">"{quote}"</p>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h4 className="text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-semibold">— {name}</h4>
            <p className="text-border-color text-sm md:text-base lg:text-lg xl:text-[20px]">{title}</p>
          </div>
          <div className="flex gap-4 justify-center lg:justify-end">
            <a href="#" className="w-[50px] h-[50px] flex items-center justify-center bg-white/10 rounded-full hover:bg-recording-red transition-colors">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="w-[50px] h-[50px] flex items-center justify-center bg-white/10 rounded-full hover:bg-recording-red transition-colors">
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const upperCardRef = useRef<HTMLDivElement>(null);
  const lowerCardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: '(max-width: 767px)',
          isTablet: '(min-width: 768px) and (max-width: 1023px)',
          isDesktop: '(min-width: 1024px)',
        },
        (context) => {
          const { isMobile, isTablet } = context.conditions as { isMobile: boolean; isTablet: boolean };
          const translateX = isMobile ? 30 : isTablet ? 50 : 80;

          const tl = gsap.timeline({
            repeat: -1,
            defaults: { ease: 'power2.inOut', duration: 1.5 },
          });

          tl.to(upperCardRef.current, { x: translateX, duration: 1.5 });
          tl.to(lowerCardRef.current, { x: -translateX, duration: 1.5 }, '<');

          tl.to(upperCardRef.current, { x: 0, duration: 1.5 });
          tl.to(lowerCardRef.current, { x: 0, duration: 1.5 }, '<');

          tl.to(upperCardRef.current, { x: -translateX, duration: 1.5 });
          tl.to(lowerCardRef.current, { x: translateX, duration: 1.5 }, '<');

          tl.to(upperCardRef.current, { x: 0, duration: 1.5 });
          tl.to(lowerCardRef.current, { x: 0, duration: 1.5 }, '<');
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-black pb-10 lg:pb-20 xl:pb-30">
      <div className='container px-4 md:px-6 lg:px-10 space-y-10 lg:space-y-20 xl:space-y-30'>
        <div ref={upperCardRef} className="-mt-[40px] lg:-mt-[60px] xl:-mt-[80px] relative z-10">
          <TestimonialCard
            quote="At Da Vinci Media, we believe great digital experiences are built through creativity, strategy, and collaboration. Every project is an opportunity to create meaningful value for our clients, and we're committed to delivering solutions that inspire growth and long-term success."
            name="David Anderson"
            title="Chief Executive Officer (CEO)"
            imgSrc="/assets/aboutpage/devid.png"
            imageLeft={false}
          />
        </div>
        <div ref={lowerCardRef}>
          <TestimonialCard
            quote="Our focus is on understanding each client's unique goals and transforming them into practical, high-quality digital solutions. Through clear communication, efficient execution, and attention to detail, we ensure every project delivers real business impact."
            name="Emily Carter"
            title="Project Manager"
            imgSrc="/assets/aboutpage/emily.webp"
            imageLeft={true}
          />
        </div>
      </div>
    </section>
  );
}
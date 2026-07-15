import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CaseStudy } from "@/types/work";

interface CaseCardProps {
  item: CaseStudy;
  priority?: boolean;
}

export default function CaseCard({ item, priority = false }: CaseCardProps) {
  return (
    <Link href={`/work/${item.id}`} className={cn("case-card group cursor-pointer w-full flex flex-col gap-6", item.widthClass)}>
      <div className={cn("relative w-full overflow-hidden bg-zinc-900", item.aspectRatio)}>
        <div className="parallax-wrapper absolute inset-0 w-full h-[120%] top-[-10%] left-0">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes={item.sizes}
            className="hover-image object-cover w-full h-full"
            priority={priority}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center text-neutral-400 text-lg font-semibold uppercase tracking-tight leading-5">
          <span>{item.category}</span>
          <span>/{item.year}</span>
        </div>
        <h3 className="text-white-color text-2xl md:text-3xl font-semibold leading-tight md:leading-9 transition-colors group-hover:text-recording-red flex flex-wrap gap-x-2 overflow-hidden py-0.5">
          {item.title.split(" ").map((word, i) => (
            <span key={i} className="inline-flex overflow-hidden">
              <span className="case-title-word inline-block">
                {word}
              </span>
            </span>
          ))}
        </h3>
      </div>
    </Link>
  );
}

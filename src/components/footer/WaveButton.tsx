import Link from "next/link";
import { ReactNode } from "react";

interface WaveButtonProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export default function WaveButton({ href, className = "", children }: WaveButtonProps) {
  return (
    <Link
      href={href}
      className={`social-btn bg-secondary-dark relative overflow-hidden flex items-center justify-center text-white-color ${className}`}
    >
      <div className="red-bg absolute inset-0 w-full h-full pointer-events-none select-none">
        {/* Back Wave Layer */}
        <svg
          className="btn-wave-back absolute inset-0 w-[200%] h-full text-recording-red"
          viewBox="0 0 600 120"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#wave-grad-3)"
            opacity="0.45"
            d="M 0 50 C 75 35, 75 35, 150 50 C 225 65, 225 65, 300 50 C 375 35, 375 35, 450 50 C 525 65, 525 65, 600 50 L 600 150 L 0 150 Z"
          />
        </svg>
        {/* Front Wave Layer */}
        <svg
          className="btn-wave-front absolute inset-0 w-[200%] h-full text-recording-red"
          viewBox="0 0 600 120"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#wave-grad-1)"
            stroke="url(#highlight-grad)"
            strokeWidth="2"
            d="M 0 65 C 75 43, 75 43, 150 65 C 225 87, 225 87, 300 65 C 375 43, 375 43, 450 65 C 525 87, 525 87, 600 65 L 600 150 L 0 150 Z"
          />
        </svg>
      </div>
      {children}
    </Link>
  );
}

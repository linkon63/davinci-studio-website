export default function FooterBranding() {
  return (
    <div className="container mx-auto px-4 md:px-6 mt-10 md:mt-20">
      <div className="text-center wave-container cursor-pointer select-none relative overflow-hidden w-full">
        <svg
          viewBox="0 0 1308 220"
          className="w-full h-auto block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wave-grad-1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#F60100" />
              <stop offset="50%" stopColor="#ff4d4d" />
              <stop offset="100%" stopColor="#c50000" />
            </linearGradient>
            <linearGradient id="wave-grad-2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#d60000" />
              <stop offset="50%" stopColor="#a30000" />
              <stop offset="100%" stopColor="#700000" />
            </linearGradient>
            <linearGradient id="wave-grad-3" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#800000" />
              <stop offset="50%" stopColor="#e60000" />
              <stop offset="100%" stopColor="#F60100" />
            </linearGradient>

            <linearGradient id="highlight-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#ff9999" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#ff4d4d" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="text-base-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#fbfbf7" />
              <stop offset="100%" stopColor="#dcdcd0" />
            </linearGradient>

            <clipPath id="footer-text-clip">
              <text
                x="0"
                y="110"
                textLength="1308"
                dominantBaseline="central"
                className="font-proxima font-extrabold uppercase select-none"
                style={{
                  fontSize: "180px",
                  fontFamily: "var(--font-proxima), sans-serif",
                }}
              >
                <tspan className="wave-char">D</tspan>
                <tspan className="wave-char">A</tspan>
                <tspan className="wave-char">{" "}</tspan>
                <tspan className="wave-char">V</tspan>
                <tspan className="wave-char">I</tspan>
                <tspan className="wave-char">N</tspan>
                <tspan className="wave-char">C</tspan>
                <tspan className="wave-char">I</tspan>
                <tspan className="wave-char">{" "}</tspan>
                <tspan className="wave-char">M</tspan>
                <tspan className="wave-char">E</tspan>
                <tspan className="wave-char">D</tspan>
                <tspan className="wave-char">I</tspan>
                <tspan className="wave-char">A</tspan>
              </text>
            </clipPath>
          </defs>

          <g clipPath="url(#footer-text-clip)">
            <rect width="1308" height="220" fill="url(#text-base-grad)" />

            <g className="waves-group">
              <path
                className="wave-back"
                fill="url(#wave-grad-3)"
                opacity="0.45"
                d="M 0 100 C 119 60, 208 60, 327 100 C 446 140, 535 140, 654 100 C 773 60, 862 60, 981 100 C 1100 140, 1189 140, 1308 100 C 1427 60, 1516 60, 1635 100 C 1754 140, 1843 140, 1962 100 C 2081 60, 2170 60, 2289 100 C 2408 140, 2497 140, 2616 100 L 2616 350 L 0 350 Z"
              />

              <path
                className="wave-front"
                fill="url(#wave-grad-1)"
                stroke="url(#highlight-grad)"
                strokeWidth="3"
                d="M 0 120 C 119 88, 208 88, 327 120 C 446 152, 535 152, 654 120 C 773 88, 862 88, 981 120 C 1100 152, 1189 152, 1308 120 C 1427 88, 1516 88, 1635 120 C 1754 152, 1843 152, 1962 120 C 2081 88, 2170 88, 2289 120 C 2408 152, 2497 152, 2616 120 L 2616 350 L 0 350 Z"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

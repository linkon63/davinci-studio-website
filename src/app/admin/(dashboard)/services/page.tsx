import * as React from "react";
import { Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminServicesPage() {
  const services = [
    { title: "Brand Identity Design", price: "Starts at $5K", description: "Logo design, typographic systems, styleguides, and digital assets.", features: ["2 Designers", "Full Brand Book", "Vector/SVG exports"] },
    { title: "Premium Web Development", price: "Starts at $15K", description: "Immersive high-performance websites built with Next.js, WebGL, and custom GSAP.", features: ["SEO Optimizations", "React 19 Server Components", "Vercel deployments"] },
    { title: "3D Animation & Motion Graphics", price: "Starts at $10K", description: "Photorealistic rendering, custom animation sequences, and 3D product visualizations.", features: ["Blender rendering", "4K resolution videos", "Source assets delivery"] },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-montserrat font-bold text-xl tracking-wide text-foreground">
            Welcome to Services Manager
          </h2>
          <p className="text-muted-foreground text-sm mt-0.5">
            Configure prices, capability lists, and service descriptions shown to clients.
          </p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat font-bold text-xs tracking-wider flex items-center gap-1.5 h-9 px-4 cursor-pointer">
          <Plus className="size-4" />
          ADD SERVICE
        </Button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:border-primary/20 transition-all duration-200">
            <div>
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="font-semibold text-base text-foreground leading-snug">
                  {service.title}
                </h3>
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded-md shrink-0">
                  {service.price}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Included features</p>
                {service.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs text-foreground">
                    <Check className="size-3.5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full py-2 border border-border hover:border-primary text-xs font-semibold rounded-lg hover:bg-muted hover:text-foreground transition-colors cursor-pointer">
              Edit Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

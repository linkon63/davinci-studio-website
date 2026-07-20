import * as React from "react";
import { LayoutDashboard, FileText, Briefcase, MessageSquare, Settings, ArrowRight, Eye, Users, FilePlus2 } from "lucide-react";
import Link from "next/link";

export default function AdminDashboardPage() {
  const metrics = [
    { name: "Total Blogs", value: "5", description: "Published articles", icon: FileText, href: "/admin/blogs", color: "text-primary bg-primary/10" },
    { name: "Careers/Jobs", value: "2", description: "Active listings", icon: Briefcase, href: "/admin/career", color: "text-blue-600 bg-blue-50" },
    { name: "Testimonials", value: "12", description: "Approved feedback", icon: MessageSquare, href: "/admin/testimonials", color: "text-emerald-600 bg-emerald-50" },
    { name: "Our Services", value: "8", description: "Offered capabilities", icon: Settings, href: "/admin/services", color: "text-violet-600 bg-violet-50" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-sm relative overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 text-primary rounded-lg">
            <LayoutDashboard className="size-6" />
          </div>
          <div>
            <h2 className="font-montserrat font-bold text-xl tracking-wide text-foreground">
              Welcome Back, Admin!
            </h2>
            <p className="text-muted-foreground text-sm mt-0.5">
              Here is what is happening with Da Vinci Media today.
            </p>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Link
              key={metric.name}
              href={metric.href}
              className="bg-card hover:bg-muted/40 border border-border hover:border-primary/20 transition-all duration-200 rounded-xl p-5 shadow-sm group"
            >
              <div className="flex justify-between items-start mb-3">
                <div className={`p-2.5 rounded-lg ${metric.color}`}>
                  <Icon className="size-4" />
                </div>
                <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-xl font-montserrat font-bold text-foreground">
                {metric.value}
              </p>
              <p className="text-xs font-semibold text-foreground mt-0.5">
                {metric.name}
              </p>
              <p className="text-[11px] text-muted-foreground">
                {metric.description}
              </p>
            </Link>
          );
        })}
      </div>

      {/* Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent actions card */}
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6 shadow-sm">
          <h3 className="font-montserrat font-bold text-xs tracking-wider text-foreground uppercase mb-4">
            Recent System Activity
          </h3>
          <div className="space-y-4">
            {[
              { text: "New blog draft created: 'Next.js 16 Rendering Options'", time: "2 hours ago", icon: FilePlus2 },
              { text: "Admin credentials successfully verified from .env.local", time: "Just now", icon: Users },
              { text: "Services listing page visited by user", time: "Yesterday", icon: Eye },
            ].map((activity, i) => {
              const Icon = activity.icon;
              return (
                <div key={i} className="flex gap-4 items-start pb-4 border-b border-border/50 last:border-0 last:pb-0">
                  <div className="p-2 bg-muted text-muted-foreground rounded-md mt-0.5">
                    <Icon className="size-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {activity.text}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Tips card */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-montserrat font-bold text-xs tracking-wider text-foreground uppercase mb-3">
              Admin Tip
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Use the sidebar to navigate to other pages. You can check the server configurations, verify active layouts, and review draft blogs, applications, and customer testimonials.
            </p>
          </div>
          <div className="pt-6 border-t border-border mt-6">
            <span className="text-xs text-primary font-semibold tracking-wider uppercase block">
              Da Vinci Media v1.0.0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

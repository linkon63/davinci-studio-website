"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, FileText, Briefcase, MessageSquare, Settings, LogOut } from "lucide-react";
import { logoutAction } from "../actions";

const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Blogs", href: "/admin/blogs", icon: FileText },
  { name: "Career", href: "/admin/career", icon: Briefcase },
  { name: "Testimonials", href: "/admin/testimonials", icon: MessageSquare },
  { name: "Services", href: "/admin/services", icon: Settings },
];

export default function SidebarNav() {
  const pathname = usePathname();

  const handleLogout = async () => {
    await logoutAction();
    window.location.href = "/admin/login";
  };

  return (
    <nav className="flex-1 space-y-1 px-3 py-6">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm transition-colors duration-200 group relative",
              isActive
                ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
            )}
          >
            <Icon className="size-4 shrink-0" />
            <span>{item.name}</span>
          </Link>
        );
      })}

      <div className="pt-6 border-t border-border mt-6">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 px-3 py-2 rounded-lg font-medium text-sm text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors cursor-pointer"
        >
          <LogOut className="size-4 shrink-0" />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
}

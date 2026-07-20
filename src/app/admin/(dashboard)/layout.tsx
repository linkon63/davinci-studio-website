import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import SidebarNav from "./SidebarNav";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (!session || session.value !== "authenticated") {
    redirect("/admin/login");
  }

  const expectedEmail = process.env.ADMIN_EMAIL || "admin@gmail.com";

  return (
    <div className="min-h-screen flex bg-background text-foreground font-sans">
      {/* Sidebar */}
      <aside className="w-60 border-r border-sidebar-border bg-sidebar flex flex-col shrink-0">
        {/* Sidebar Header */}
        <div className="h-14 flex items-center gap-2.5 px-5 border-b border-sidebar-border">
          <div className="relative w-7 h-7">
            <Image
              src="/logo.jpg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-montserrat font-bold text-xs tracking-wider text-sidebar-foreground">
            STUDIO ADMIN
          </span>
        </div>

        {/* Navigation */}
        <SidebarNav />

        {/* Sidebar Footer / Profile */}
        <div className="p-4 border-t border-sidebar-border bg-sidebar-accent/10 flex items-center gap-3">
          <div className="size-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-montserrat font-bold text-xs shrink-0">
            {expectedEmail[0].toUpperCase()}
          </div>
          <div className="overflow-hidden">
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Signed in</p>
            <p className="text-xs font-semibold truncate text-foreground" title={expectedEmail}>
              {expectedEmail}
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-14 border-b border-border bg-card flex items-center justify-between px-6 z-10">
          <h1 className="font-montserrat font-bold text-xs tracking-wider text-foreground uppercase">
            Davinci Project Studio Management
          </h1>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>System Online</span>
            <span className="size-2 rounded-full bg-green-500" />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-8 bg-muted/20 relative">
          <div className="relative z-10 max-w-5xl mx-auto animate-fade-up">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

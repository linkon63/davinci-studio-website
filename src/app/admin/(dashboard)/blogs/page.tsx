import * as React from "react";
import { FileText, Plus, Eye, Edit3, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminBlogsPage() {
  const blogs = [
    { title: "Building a Premium Brand Identity in 2026", status: "Published", views: "1,240", date: "Jul 10, 2026" },
    { title: "Next.js 16 and React 19: The New Frontiers of SSR", status: "Published", views: "852", date: "Jun 28, 2026" },
    { title: "The Art of Micro-Animations in Modern Web Design", status: "Draft", views: "0", date: "Pending" },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-montserrat font-bold text-xl tracking-wide text-foreground">
            Welcome to the Blogs Manager
          </h2>
          <p className="text-muted-foreground text-sm mt-0.5">
            Add, update, or publish blogs on the Da Vinci Media website.
          </p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat font-bold text-xs tracking-wider flex items-center gap-1.5 h-9 px-4 cursor-pointer">
          <Plus className="size-4" />
          CREATE NEW BLOG
        </Button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Published Blogs</p>
          <p className="text-2xl font-montserrat font-bold text-foreground mt-0.5">2</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Drafts</p>
          <p className="text-2xl font-montserrat font-bold text-foreground mt-0.5">1</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Total Readers</p>
          <p className="text-2xl font-montserrat font-bold text-foreground mt-0.5">2,092</p>
        </div>
      </div>

      {/* Blogs List */}
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        <div className="p-5 border-b border-border flex items-center justify-between">
          <h3 className="font-montserrat font-bold text-xs tracking-wider text-foreground uppercase">
            Active Articles
          </h3>
        </div>
        <div className="divide-y divide-border">
          {blogs.map((blog, i) => (
            <div key={i} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-muted/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-muted text-muted-foreground rounded-lg mt-0.5 shrink-0">
                  <FileText className="size-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm leading-snug">
                    {blog.title}
                  </h4>
                  <div className="flex items-center gap-2.5 mt-1 text-xs text-muted-foreground">
                    <span>Date: {blog.date}</span>
                    <span>&bull;</span>
                    <span className={`font-semibold ${blog.status === "Published" ? "text-emerald-600" : "text-amber-600"}`}>
                      {blog.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 self-end md:self-auto">
                <div className="text-right hidden md:block">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Views</p>
                  <p className="text-xs font-bold text-foreground">{blog.views}</p>
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-2 hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer" title="View Article">
                    <Eye className="size-4" />
                  </button>
                  <button className="p-2 hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer" title="Edit Article">
                    <Edit3 className="size-4" />
                  </button>
                  <button className="p-2 hover:bg-destructive/10 text-muted-foreground hover:text-destructive rounded-lg transition-colors cursor-pointer" title="Delete Article">
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

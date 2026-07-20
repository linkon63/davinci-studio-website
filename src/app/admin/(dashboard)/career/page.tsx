import * as React from "react";
import { Briefcase, Plus, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminCareerPage() {
  const jobs = [
    { title: "Senior 3D Animator", department: "Animation", type: "Full-time", applicants: "8", active: true },
    { title: "Full Stack Engineer (Next.js)", department: "Development", type: "Contract", applicants: "6", active: true },
    { title: "Creative Art Director", department: "Design", type: "Full-time", applicants: "3", active: false },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-montserrat font-bold text-xl tracking-wide text-foreground">
            Welcome to the Career Portal
          </h2>
          <p className="text-muted-foreground text-sm mt-0.5">
            Manage job vacancies, specifications, and review studio applicant submissions.
          </p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat font-bold text-xs tracking-wider flex items-center gap-1.5 h-9 px-4 cursor-pointer">
          <Plus className="size-4" />
          POST NEW JOB
        </Button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-xl p-4 shadow-sm flex items-center gap-4">
          <div className="p-2.5 bg-primary/10 text-primary rounded-lg shrink-0">
            <Briefcase className="size-4" />
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Active Openings</p>
            <p className="text-lg font-montserrat font-bold text-foreground mt-0.5">2</p>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-4 shadow-sm flex items-center gap-4">
          <div className="p-2.5 bg-primary/10 text-primary rounded-lg shrink-0">
            <Users className="size-4" />
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Pending Applicants</p>
            <p className="text-lg font-montserrat font-bold text-foreground mt-0.5">14</p>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-4 shadow-sm flex items-center gap-4">
          <div className="p-2.5 bg-primary/10 text-primary rounded-lg shrink-0">
            <Award className="size-4" />
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Interviews Scheduled</p>
            <p className="text-lg font-montserrat font-bold text-foreground mt-0.5">3</p>
          </div>
        </div>
      </div>

      {/* Jobs list placeholder */}
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        <div className="p-5 border-b border-border">
          <h3 className="font-montserrat font-bold text-xs tracking-wider text-foreground uppercase">
            Active Studio Vacancies
          </h3>
        </div>
        <div className="divide-y divide-border">
          {jobs.map((job, i) => (
            <div key={i} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-muted/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-muted text-muted-foreground rounded-lg mt-0.5 shrink-0">
                  <Briefcase className="size-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm leading-snug">
                    {job.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2.5 mt-1 text-xs text-muted-foreground">
                    <span>Dept: {job.department}</span>
                    <span>&bull;</span>
                    <span>Type: {job.type}</span>
                    <span>&bull;</span>
                    <span className={`font-semibold ${job.active ? "text-emerald-600" : "text-muted-foreground"}`}>
                      {job.active ? "Active" : "Archived"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 self-end md:self-auto">
                <div className="text-right">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Applicants</p>
                  <p className="text-xs font-bold text-foreground">{job.applicants} applied</p>
                </div>
                <button className="px-3 py-1.5 border border-border hover:border-primary text-xs font-semibold rounded-lg hover:bg-muted hover:text-foreground transition-all cursor-pointer">
                  View Applicants
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

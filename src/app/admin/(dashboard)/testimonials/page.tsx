import * as React from "react";
import { Star, CheckCircle, XCircle } from "lucide-react";

export default function AdminTestimonialsPage() {
  const feedback = [
    { client: "Alex Mercer", company: "Aether Dynamics", text: "Da Vinci Media delivered a visual experience that completely redefined our brand identity. Absolute professionals.", rating: 5, status: "Approved" },
    { client: "Sophia Chen", company: "Lumina Labs", text: "The custom WebGL animations they built for our launch page blew our investors away. Truly creative visionaries.", rating: 5, status: "Approved" },
    { client: "Marcus Brody", company: "Chronos Group", text: "They helped us tell our story in a way we never thought possible. Highly recommended for premium design.", rating: 4, status: "Pending Review" },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="font-montserrat font-bold text-xl tracking-wide text-foreground">
          Welcome to Testimonials Control
        </h2>
        <p className="text-muted-foreground text-sm mt-0.5">
          Approve, reject, or feature client reviews on the homepage portfolio sections.
        </p>
      </div>

      {/* Testimonials List */}
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        <div className="p-5 border-b border-border flex items-center justify-between">
          <h3 className="font-montserrat font-bold text-xs tracking-wider text-foreground uppercase">
            Client Submissions
          </h3>
          <span className="text-xs text-muted-foreground font-semibold bg-muted px-2.5 py-1 rounded-full">
            {feedback.length} submissions
          </span>
        </div>
        <div className="divide-y divide-border">
          {feedback.map((item, i) => (
            <div key={i} className="p-5 space-y-3 hover:bg-muted/30 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-xs text-primary shrink-0">
                    {item.client[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-xs leading-snug">
                      {item.client}
                    </h4>
                    <p className="text-[10px] text-muted-foreground">{item.company}</p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <div className="flex text-amber-500 gap-0.5">
                    {Array.from({ length: item.rating }).map((_, j) => (
                      <Star key={j} className="size-3 fill-current" />
                    ))}
                  </div>
                  <span className={`text-[9px] uppercase tracking-wider font-semibold ${item.status === "Approved" ? "text-emerald-600" : "text-amber-600"}`}>
                    {item.status}
                  </span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground italic leading-relaxed pl-11">
                &quot;{item.text}&quot;
              </p>

              <div className="flex justify-end gap-2 pt-1 pl-11">
                {item.status === "Pending Review" ? (
                  <>
                    <button className="flex items-center gap-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200/50 px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer">
                      <CheckCircle className="size-3" />
                      Approve
                    </button>
                    <button className="flex items-center gap-1 bg-destructive/10 text-destructive hover:bg-destructive/20 border border-destructive/20 px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer">
                      <XCircle className="size-3" />
                      Reject
                    </button>
                  </>
                ) : (
                  <button className="px-2.5 py-1 border border-border hover:border-primary text-xs font-semibold rounded-lg transition-colors cursor-pointer">
                    Archive Feedback
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

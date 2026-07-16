import { ArrowUpRight } from "lucide-react";
import { JobPosition } from "@/types/career";
import JobMetaField from "./JobMetaField";

interface JobCardProps {
  job: JobPosition;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="career-job flex flex-col lg:flex-row justify-between items-start gap-8">
      {/* Left: Job Info */}
      <div className="flex-1 max-w-[1081px] flex flex-col gap-8">
        {/* Title & Meta */}
        <div className="flex flex-col gap-3">
          <h3 className="text-black text-3xl md:text-5xl font-semibold leading-tight md:leading-[54px]">
            {job.title}
          </h3>

          {/* Job Meta Row */}
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
            <JobMetaField label="Employment Type" value={job.employmentType} />
            <JobMetaField label="Location" value={job.location} />
            <JobMetaField label="Experience" value={job.experience} />
            <JobMetaField label="Salary" value={job.salary} />
          </div>
        </div>

        {/* Description */}
        <p className="font-montserrat text-zinc-700 text-sm md:text-lg leading-6 md:leading-7">
          <span className="font-bold">Description: </span>
          <span className="font-normal">{job.description}</span>
        </p>
      </div>

      {/* Right: Apply Now Button */}
      <div className="flex flex-col items-center gap-0.5 shrink-0 group cursor-pointer">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-zinc-700 flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:border-black">
          <ArrowUpRight className="w-7 h-7 md:w-8 md:h-8 text-black transition-colors duration-300 group-hover:text-white" />
        </div>
        <span className="text-black text-base md:text-lg font-semibold font-proxima uppercase leading-5 tracking-tight text-center transition-colors duration-300 group-hover:text-recording-red">
          Apply Now
        </span>
      </div>
    </div>
  );
}

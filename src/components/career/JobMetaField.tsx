interface JobMetaFieldProps {
  label: string;
  value: string;
}

export default function JobMetaField({ label, value }: JobMetaFieldProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-neutral-400 text-base md:text-xl font-semibold leading-7">
        {label}:
      </span>
      <span className="text-black text-base md:text-xl font-semibold leading-7">
        {value}
      </span>
    </div>
  );
}

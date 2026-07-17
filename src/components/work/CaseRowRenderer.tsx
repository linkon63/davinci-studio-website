import { CaseStudy, CaseRow } from "@/types/work";
import CaseCard from "./CaseCard";

interface SplitRowProps {
  id: string;
  items: CaseStudy[];
}

function SplitRow({ id, items }: SplitRowProps) {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24 w-full">
      {items.map((item, idx) => (
        <CaseCard key={item.id} item={item} priority={id === "row-1" && idx < 2} />
      ))}
    </div>
  );
}

interface CenteredRowProps {
  items: CaseStudy[];
}

function CenteredRow({ items }: CenteredRowProps) {
  return (
    <div className="w-full flex justify-center">
      {items.map((item) => (
        <CaseCard key={item.id} item={item} />
      ))}
    </div>
  );
}

interface GridRowProps {
  items: CaseStudy[];
}

function GridRow({ items }: GridRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 w-full">
      {items.map((item) => (
        <CaseCard key={item.id} item={item} />
      ))}
    </div>
  );
}

interface CaseRowRendererProps {
  row: CaseRow;
}

export default function CaseRowRenderer({ row }: CaseRowRendererProps) {
  return (
    <>
      {row.type === "split" && (
        <SplitRow id={row.id} items={row.items} />
      )}
      {row.type === "centered" && (
        <CenteredRow items={row.items} />
      )}
      {row.type === "grid" && (
        <GridRow items={row.items} />
      )}
    </>
  );
}

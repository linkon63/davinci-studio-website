import { FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-6 mt-4">
      {pages.map((page) => {
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            onClick={() => onPageChange?.(page)}
            className={`w-10 h-10 flex items-center justify-center rounded-[4px] text-xl font-semibold font-proxima leading-7 cursor-pointer transition-all ${
              isActive
                ? "bg-recording-red text-white border-transparent hover:opacity-90"
                : "bg-black border border-zinc-800 text-white hover:bg-zinc-900"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button className="w-10 h-10 flex items-center justify-center rounded-[4px] bg-black border border-zinc-800 text-neutral-400 text-xl font-semibold font-proxima leading-7 cursor-pointer hover:bg-zinc-900 transition-all">
        <FiChevronRight className="w-5 h-5 text-neutral-400" />
      </button>
    </div>
  );
}

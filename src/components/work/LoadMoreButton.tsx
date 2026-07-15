interface LoadMoreButtonProps {
  onClick: () => void;
  loading: boolean;
}

export default function LoadMoreButton({ onClick, loading }: LoadMoreButtonProps) {
  return (
    <div className="w-full flex justify-center pt-8">
      <button
        onClick={onClick}
        disabled={loading}
        className="py-2 border-b border-white-color hover:border-recording-red hover:text-recording-red text-white-color text-lg font-semibold font-proxima uppercase leading-5 tracking-tight transition-all duration-300 cursor-pointer disabled:opacity-50"
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}

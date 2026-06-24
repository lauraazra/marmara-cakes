export default function LoadMoreButton({ onClick, isVisible }) {
  if (!isVisible) return null;

  return (
    <div className="mt-16 text-center">
      <button
        onClick={onClick}
        className="px-8 py-3 border-2 border-btn-secondary text-text-site  hover:bg-btn-secondary font-bold rounded-full transition-all duration-300 cursor-pointer shadow-xs"
      >
        Load More Articles
      </button>
    </div>
  );
}

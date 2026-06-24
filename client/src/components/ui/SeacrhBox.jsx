import { Search } from "lucide-react";

export default function SearchBox({ value, onChange, onSubmit }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(value);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full flex items-center gap-2"
    >
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-site/40 size-5" />
        <input
          type="text"
          placeholder="Cari artikel..."
          value={value}
          onChange={onChange}
          className="w-full pl-12 pr-4 py-3 rounded-full border border-text-site/10 bg-bg-site text-text-site focus:border-marmara-teal focus:ring-2 focus:ring-marmara-teal/10 outline-none transition-all duration-300"
        />
      </div>

      <button
        type="submit"
        className="px-6 py-3 font-bold text-sm sm:text-base rounded-full bg-btn-primary text-btn-primary-text hover:opacity-90 active:scale-95 transition-all duration-300 shadow-xs cursor-pointer whitespace-nowrap"
      >
        Search
      </button>
    </form>
  );
}

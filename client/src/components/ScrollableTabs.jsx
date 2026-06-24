import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ScrollableTabs({
  items,
  activeId,
  onSelect,
  idKey = "_id",
  labelKey,
  themeColor = "text-marmara-teal bg-marmara-teal",
}) {
  const scrollRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);

  const checkScrollable = () => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      setCanScroll(scrollWidth > clientWidth);
    }
  };

  useEffect(() => {
    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    return () => window.removeEventListener("resize", checkScrollable);
  }, [items]);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const isTeal = themeColor.includes("marmara-teal");

  return (
    <div className="relative mx-auto flex items-center group w-full">
      {/* Panah Kiri */}
      {canScroll && (
        <button
          type="button"
          onClick={() => handleScroll("left")}
          className="absolute -left-6 z-10 p-2 bg-white shadow-md rounded-full border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block hover:bg-gray-50"
        >
          <ChevronLeft
            className={`size-5 ${isTeal ? "text-marmara-teal" : "text-marmara-deepTeal"}`}
          />
        </button>
      )}

      {/* Kontainer Scroll */}
      <div
        ref={scrollRef}
        onScroll={checkScrollable}
        className="flex overflow-x-auto gap-3 pb-2 px-2 no-scrollbar items-center w-full scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, idx) => {
          const isObject = typeof item === "object" && item !== null;
          const itemId = isObject ? item[idKey] : item;
          const itemLabel = isObject ? item[labelKey] : item;

          const isActive = activeId === itemId;

          return (
            <button
              key={isObject ? itemId : `${item}-${idx}`}
              type="button"
              onClick={() => onSelect(itemId)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap shrink-0 border cursor-pointer ${
                isActive
                  ? isTeal
                    ? "bg-btn-primary text-btn-primary-text shadow-md shadow-shadow-primary/20 border-btn-primary scale-[1.02]"
                    : "bg-marmara-deep-teal text-marmara-white shadow-md shadow-marmara-deep-teal/20 border-marmara-deep-teal scale-[1.02]"
                  : isTeal
                    ? "bg-card-site text-text-site/70 hover:bg-text-site/10 border-transparent"
                    : "text-marmara-deep-teal dark:text-marmara-gold hover:bg-marmara-deep-teal/10 dark:hover:bg-marmara-gold/10 border-border-site bg-transparent hover:scale-[1.02]"
              }`}
            >
              {itemLabel}
            </button>
          );
        })}
      </div>

      {/* Panah Kanan */}
      {canScroll && (
        <button
          type="button"
          onClick={() => handleScroll("right")}
          className="absolute -right-6 z-10 p-2 bg-white shadow-md rounded-full border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block hover:bg-gray-50"
        >
          <ChevronRight
            className={`size-5 ${isTeal ? "text-marmara-teal" : "text-marmara-deepTeal"}`}
          />
        </button>
      )}
    </div>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFetchData } from "../hooks/useFetchData";

export default function FAQBox() {
  const { data: rawFaqs, loading, error } = useFetchData("faqs");

  const [activeCategory, setActiveCategory] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = rawFaqs.reduce((acc, item) => {
    let categoryGroup = acc.find((c) => c.category === item.category);

    if (!categoryGroup) {
      categoryGroup = {
        category: item.category,
        icon: item.icon || "Cake",
        questions: [],
      };
      acc.push(categoryGroup);
    }

    categoryGroup.questions.push({
      q: item.question,
      a: item.answer,
    });

    return acc;
  }, []);

  useEffect(() => {
    if (faqData.length > 0 && !activeCategory) {
      setActiveCategory(faqData[0].category);
    }
  }, [faqData, activeCategory]);

  useEffect(() => {
    setOpenIndex(null);
  }, [activeCategory]);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const activeCategoryData = faqData.find(
    (item) => item.category === activeCategory,
  );

  // === RENDER LOADING STATE ===
  if (loading) {
    return (
      <div className="text-center py-12 text-sm text-text-site/70">
        <div className="animate-spin inline-block w-6 h-6 border-2 border-current border-t-transparent text-marmara-deep-teal rounded-full mb-2"></div>
        <p>Memuat pertanyaan...</p>
      </div>
    );
  }

  // === RENDER ERROR STATE ===
  if (error) {
    return (
      <div className="text-center py-12 text-sm text-marmara-deep-pink font-semibold">
        Gagal memuat FAQ: {error}
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl w-full mx-auto px-4 font-sans antialiased text-zinc-800 flex flex-col gap-3"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-black tracking-tight text-text-site sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-text-site/50 mt-1">
          Butuh info cepat? Cek daftar pertanyaan standar kami di bawah atau
          gunakan fitur TanyaAI.
        </p>
      </div>

      {/* Komponen Kategori Tab/Chips */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 border-b border-border-site">
        {faqData.map((item) => {
          const isActive = item.category === activeCategory;
          return (
            <button
              key={item.category}
              onClick={() => setActiveCategory(item.category)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? "bg-btn-secondary text-marmara-light-grey shadow-md shadow-shadow-primary/20"
                  : "bg-btn-primary text-marmara-light-grey hover:dark:bg-btn-secondary hover:bg-marmara-deep-teal"
              }`}
            >
              {item.category}
            </button>
          );
        })}
      </div>

      {/* Komponen Accordion List */}
      <motion.div layout className="space-y-3">
        {activeCategoryData && activeCategoryData.questions.length > 0 ? (
          activeCategoryData.questions.map((item, index) => {
            const isExpanded = openIndex === index;

            return (
              <motion.div
                layout
                key={`${activeCategory}-${index}`}
                className="bg-card-site rounded-xl border border-border-site overflow-hidden shadow-sm transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left font-extrabold text-sm sm:text-base text-text-site focus:outline-none select-none"
                >
                  <span>{item.q}</span>

                  <span className="flex-shrink-0 text-text-site/50">
                    <svg
                      className={`h-5 w-5 transform transition-transform duration-300 ${
                        isExpanded ? "rotate-180 text-custom-purple" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      {/* Kotak Jawaban (a) */}
                      <div className="px-5 pb-5 pt-1 border-t border-border-site/60 bg-card-site/40">
                        <p className="text-text-site text-sm sm:text-base leading-relaxed whitespace-pre-line">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        ) : (
          <div className="text-center py-8 text-sm text-text-site">
            Belum ada pertanyaan di kategori ini.
          </div>
        )}
      </motion.div>
    </motion.section>
  );
}

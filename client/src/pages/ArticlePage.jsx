import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

const CATEGORIES = ["All", "Baking Tips", "Event & Promo"];

const ARTICLES = [
  {
    id: 1,
    title: "5 Tips Rahasia Membuat Sponge Cake Anti Bantet",
    category: "Baking Tips",
    excerpt:
      "Membuat sponge cake memang gampang-gampang susah. Kenali teknik pengocokan telur yang benar untuk hasil maksimal...",
    date: "15 Mei 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 3,
    title: "Marmara Cake Kini Hadir di Pusat Kota Bandung!",
    category: "Event & Promo",
    excerpt:
      "Kabar gembira untuk warga Bandung! Kami resmi membuka cabang ke-7 dengan promo Buy 1 Get 1 Free...",
    date: "10 Mei 2026",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Marmara Cake Kini Hadir di Pusat Kota Bandung!",
    category: "Event & Promo",
    excerpt:
      "Kabar gembira untuk warga Bandung! Kami resmi membuka cabang ke-7 dengan promo Buy 1 Get 1 Free...",
    date: "10 Mei 2026",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Marmara Cake Kini Hadir di Pusat Kota Bandung!",
    category: "Event & Promo",
    excerpt:
      "Kabar gembira untuk warga Bandung! Kami resmi membuka cabang ke-7 dengan promo Buy 1 Get 1 Free...",
    date: "10 Mei 2026",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function ArticleHub() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const scrollRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo =
        direction === "left" ? scrollLeft - 200 : scrollLeft + 200;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      // Logika: Jika total lebar konten lebih besar dari area yang tampak
      setCanScroll(scrollWidth > clientWidth);
    }
  };

  useEffect(() => {
    // Cek saat pertama kali render
    checkScroll();
    // Cek ulang kalau layar di-resize
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCategory =
      activeCategory === "All" || art.category === activeCategory;
    const matchesSearch = art.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = ARTICLES.find((a) => a.featured);

  return (
    <>
      <Navbar />
      <section className="py-12 bg-white min-h-screen">
        <Container>
          {/* --- A. HERO SECTION --- */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif font-bold text-marmara-deepTeal mb-4"
            >
              Marmara Journal
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg mb-8"
            >
              Manisnya Cerita & Tips Seputar Kue untuk Momen Berharga Anda.
            </motion.p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-10">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
              <input
                type="text"
                placeholder="Cari artikel..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-marmara-teal focus:ring-2 focus:ring-marmara-teal/10 outline-none transition-all"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Tabs */}
            <div className="relative max-w-4xl mx-auto flex items-center group">
              {/* Panah Kiri: Hanya muncul jika canScroll true */}
              {canScroll && (
                <button
                  onClick={() => scroll("left")}
                  className="absolute -left-6 z-10 p-2 bg-white shadow-md rounded-full border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
                >
                  <ChevronLeft className="size-5 text-marmara-teal" />
                </button>
              )}

              {/* Kontainer Scroll */}
              <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-3 pb-4 px-2 no-scrollbar items-center w-full scroll-smooth"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                      activeCategory === cat
                        ? "bg-marmara-teal text-white shadow-lg shadow-marmara-teal/20"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Panah Kanan: Hanya muncul jika canScroll true */}
              {canScroll && (
                <button
                  onClick={() => scroll("right")}
                  className="absolute -right-6 z-10 p-2 bg-white shadow-md rounded-full border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
                >
                  <ChevronRight className="size-5 text-marmara-teal" />
                </button>
              )}
            </div>
          </div>

          {/* --- B. FEATURED & POPULAR SECTION --- */}
          {featuredArticle && activeCategory === "All" && !searchQuery && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-8 relative group cursor-pointer overflow-hidden rounded-3xl bg-gray-900 aspect-video lg:aspect-auto lg:h-[450px]"
              >
                <img
                  src={featuredArticle.image}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  alt="Featured"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6 md:p-10">
                  <span className="bg-marmara-gold text-white px-3 py-1 rounded-full text-[10px] font-bold w-fit mb-3 uppercase tracking-widest">
                    Featured Article
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3 max-w-xl leading-tight">
                    {featuredArticle.title}
                  </h2>
                  <button className="flex items-center gap-2 text-white text-sm font-bold hover:gap-4 transition-all">
                    Read Full Story <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-4 flex flex-col"
              >
                <div className="bg-marmara-lightGrey/50 rounded-3xl p-8 h-full border border-gray-100">
                  <h3 className="text-xl font-serif font-bold text-marmara-deepTeal mb-6 flex items-center gap-2">
                    <Sparkles className="size-5 text-marmara-gold" />
                    Topik Populer
                  </h3>

                  <div className="space-y-6">
                    {ARTICLES.slice(0, 3).map((pop, idx) => (
                      <a
                        key={pop.id}
                        href={`#${pop.id}`}
                        className="group block"
                      >
                        <div className="flex gap-4">
                          <span className="text-2xl font-serif font-black text-marmara-teal/20 group-hover:text-marmara-teal/50 transition-colors">
                            0{idx + 1}
                          </span>
                          <div className="space-y-1">
                            <h4 className="text-sm font-bold text-marmara-neutral group-hover:text-marmara-teal transition-colors line-clamp-2 leading-snug">
                              {pop.title}
                            </h4>
                            <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">
                              {pop.category} • {pop.readTime}
                            </p>
                          </div>
                        </div>
                        {idx !== 2 && (
                          <hr className="mt-5 border-gray-200/50" />
                        )}
                      </a>
                    ))}
                  </div>

                  <button className="mt-8 w-full py-3 text-sm font-bold text-marmara-teal border-2 border-dashed border-marmara-teal/30 rounded-xl hover:bg-marmara-teal hover:text-white hover:border-solid transition-all">
                    Lihat Semua Tren
                  </button>
                </div>
              </motion.div>
            </div>
          )}

          {/* --- C. ARTICLE GRID --- */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* --- D. LOAD MORE --- */}
          <div className="mt-16 text-center">
            <button className="px-8 py-3 border-2 border-marmara-teal text-marmara-teal font-bold rounded-full hover:bg-marmara-teal hover:text-white transition-all duration-300">
              Load More Articles
            </button>
          </div>
        </Container>
      </section>
    </>
  );
}

function ArticleCard({ article }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-marmara-deepTeal px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
          {article.category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={14} /> {article.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} /> {article.readTime}
          </span>
        </div>
        <h3 className="text-xl font-bold text-marmara-deepTeal mb-3 line-clamp-2 group-hover:text-marmara-teal transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-6 leading-relaxed">
          {article.excerpt}
        </p>
        <div className="mt-auto">
          <button className="text-marmara-teal font-bold text-sm flex items-center gap-2 group/btn">
            Read More{" "}
            <span className="group-hover/btn:translate-x-1 transition-transform inline-block">
              →
            </span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}

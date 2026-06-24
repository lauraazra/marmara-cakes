import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFetchData } from "../hooks/useFetchData";

// === Layout Components ===
import Container from "../components/layouts/Container";
import Section from "../components/layouts/Section";

// === Components ===
import ArticleCard from "../components/features/article/ArticleCard";
import ScrollableTabs from "../components/ScrollableTabs";
import TextSection from "../components/TextSection";
import SearchBox from "../components/ui/SeacrhBox";
import FeaturedSection from "../components/features/article/FeaturedSection";
import PopularSection from "../components/features/article/PopulerSection";
import LoadMoreButton from "../components/ui/LoadMoreButton";

export default function ArticleHub() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);

  const {
    data: categories,
    loading: catLoading,
    error: catError,
  } = useFetchData("categoryarticle");
  const {
    data: articles,
    loading: articleLoading,
    error: articleError,
  } = useFetchData("articles");

  const allCategories = [{ _id: "all", name: "All" }, ...(categories || [])];

  // Logic Filter Artikel
  const filteredArticles = (articles || []).filter((art) => {
    const categoryId = art.categoryArticle?._id || art.categoryArticle;
    const matchesCategory =
      activeCategory === "all" || String(categoryId) === String(activeCategory);
    const matchesSearch = art.title
      ? art.title.toLowerCase().includes(searchQuery.toLowerCase())
      : false;
    return matchesCategory && matchesSearch;
  });

  const displayedArticles = filteredArticles.slice(0, visibleCount);
  const featuredArticle = (articles || []).find(
    (a) => a.isFeatured === true || a.isFeatured === "true",
  );

  const handleLoadMore = () => setVisibleCount((prev) => prev + 9);

  const handleCategorySelect = (id) => {
    setActiveCategory(id);
    setVisibleCount(9);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setVisibleCount(9);
  };

  if (catLoading || articleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-marmara-teal font-medium bg-bg-site">
        Memuat Cerita Manis Marmara...
      </div>
    );
  }

  if (catError || articleError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 font-medium bg-bg-site">
        Gagal memuat data: {catError || articleError}
      </div>
    );
  }

  return (
    <>
      {/* SEKSI JUDUL */}
      <Section>
        <Container>
          <div className="flex flex-col gap-12">
            <TextSection
              title="Marmara Articles & Treats"
              subtitle="Ikuti keseruan momen perayaan, info produk baru, event menarik, serta promo eksklusif terbaru dari Marmara Cake di sini."
            />
            {/* --- HERO SEARCH & TABS --- */}
            <div className="text-center flex flex-col gap-6">
              {/* 1. Component Search */}
              <SearchBox value={searchQuery} onChange={handleSearchChange} />

              <ScrollableTabs
                items={allCategories}
                activeId={activeCategory}
                onSelect={handleCategorySelect}
                idKey="_id"
                labelKey="name"
                themeColor="text-marmara-teal bg-marmara-teal dark:text-marmara-light-gold"
              />
            </div>

            {/* --- FEATURED & POPULAR SECTION --- */}
            {featuredArticle && activeCategory === "all" && !searchQuery && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
                {/* 2. Component Featured */}
                <FeaturedSection article={featuredArticle} />

                {/* 3. Component Popular */}
                <PopularSection articles={articles} />
              </div>
            )}

            {/* --- ARTICLE GRID --- */}
            <div className="flex flex-col gap-1">
              {displayedArticles.length > 0 ? (
                <motion.div
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  <AnimatePresence mode="popLayout">
                    {displayedArticles.map((article) => (
                      <ArticleCard key={article._id} article={article} />
                    ))}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <div className="text-center py-12 text-text-site/40 text-sm font-light">
                  Tidak ada artikel yang cocok dengan pencarian Anda.
                </div>
              )}

              {/* --- 4. Component Load More --- */}
              <LoadMoreButton
                onClick={handleLoadMore}
                isVisible={filteredArticles.length > visibleCount}
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

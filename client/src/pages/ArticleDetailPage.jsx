import { useParams, Link } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";

// === Layout Component ===
import Section from "../components/layouts/Section";
import Container from "../components/layouts/Container";

// === COMPONENTS ===
import ArticleHeader from "../components/features/article/ArticleHeader";
import ArticleDetailSkeleton from "../components/features/article/ArticleDetailSkeleton";
import ArticleCard from "../components/features/article/ArticleCard";
import Grid3 from "../components/Grid3";

export default function ArticleDetail() {
  const { slug } = useParams();

  // 1. Fetch Detail Artikel
  const {
    data: article,
    loading: articleLoading,
    error: articleError,
  } = useFetchData(`article/${slug}`);

  // 2. Fetch Semua Artikel
  const { data: allArticles, loading: articlesLoading } =
    useFetchData("articles");

  // 3. Fetch Kategori Produk
  const { data: allCategories, loading: categoriesLoading } =
    useFetchData("categoryproduct");

  // Formatter tanggal bawaan database
  const formatTanggal = (dateString) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Guard Loading
  if (articleLoading || articlesLoading || categoriesLoading) {
    return (
      <div className="min-h-screen bg-bg-site text-text-site transition-colors duration-300">
        <ArticleDetailSkeleton />
      </div>
    );
  }

  // Guard Error / Artikel tidak ditemukan
  if (articleError || !article) {
    return (
      <div className="min-h-screen bg-bg-site text-text-site flex flex-col items-center justify-center gap-4">
        <p className="text-lg font-semibold text-marmara-deepTeal">
          {articleError || "Aduh Bre, artikelnya gak ketemu di database!"}
        </p>
        <Link to="/article" className="text-text-secondary font-bold underline">
          Kembali ke Blog
        </Link>
      </div>
    );
  }

  // LOGIC REKOMENDASI KATEGORI DENGAN GRID3

  // data kategori produk
  const mappedCategories = Array.isArray(allCategories)
    ? allCategories.map((cat) => ({
        _id: cat._id,
        slug: cat.slug,
        name: cat.name,
        description:
          cat.description || "Lihat varian kue pilihan terbaik kami.",
        image: cat.image || "/img/default-category.jpg",
      }))
    : [];

  // Filter Artikel Lainnya
  const otherArticles = Array.isArray(allArticles)
    ? allArticles.filter((a) => a._id !== article._id).slice(0, 3)
    : [];

  // Nama kategori artikel aktif
  const categoryName = article.categoryArticle?.name || "Uncategorized";

  // URL Banner Artikel
  const imageUrl = article.image?.startsWith("http")
    ? article.image
    : `/img/article/${article.image}`;

  return (
    <>
      <Section>
        <Container>
          <div className="flex flex-col gap-12">
            <div className="min-h-screen transition-colors duration-300">
              {/* A. KONTEN UTAMA ARTIKEL */}
              <article>
                <ArticleHeader
                  categoryName={categoryName}
                  title={article.title}
                  publishedAt={article.publishedAt || article.createdAt}
                  readTime={article.readTime}
                  formatTanggal={formatTanggal}
                />

                {/* Main Image Banner */}
                <div className="w-3/4 h-full rounded-2xl overflow-hidden shadow-xs border border-text-site/5 mb-8 mx-auto">
                  <img
                    src={imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Body HTML */}
                <div
                  className="prose dark:prose-invert max-w-none mx-auto text-text-site/80"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Tags Section */}
                {article.tags && article.tags.length > 0 && (
                  <div className="mt-10 pt-6 border-t border-text-site/10">
                    <p className="text-xs font-bold uppercase tracking-wider text-text-site/40 mb-3">
                      Tags Terkait:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          className="text-xs font-bold text-text-site/70 bg-card-site hover:bg-text-site/10 px-3.5 py-1.5 rounded-full transition-all duration-200"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </div>
            <div className="mt-4 pt-4 border-t border-text-site/10">
              <h3 className="text-xl font-extrabold text-text-site mb-6">
                Artikel Lainnya
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherArticles.map((article) => (
                  <ArticleCard key={article._id} article={article} />
                ))}
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-text-site/10">
              <h3 className="text-xl font-extrabold text-text-site mb-6">
                Jelajahi Menu Marmara Cakes
              </h3>

              {mappedCategories.length > 0 && (
                <Grid3
                  sliceNumber={4}
                  loading={categoriesLoading}
                  list={mappedCategories}
                  linkto="product"
                />
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

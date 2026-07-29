import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function ArticlePreview({ loading, articles, error }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (loading && (!articles || articles.length === 0)) {
    return (
      <div className="text-center py-10 text-marmara-deepTeal font-medium">
        Memuat artikel terbaru...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500 font-medium">
        Gagal memuat artikel: {error}
      </div>
    );
  }

  const previewArticles = articles ? articles.slice(0, 3) : [];

  return (
    <div className="relative">
      {loading && (
        <div className="absolute -top-6 right-0 text-xs text-marmara-deepTeal/60 animate-pulse font-medium">
          Menyelaraskan data...
        </div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {previewArticles.map((article) => {
          const articleId = article._id?.$oid || article._id;

          const categoryName = article.category?.name || "Marmara Updates";

          const dateRaw = article.publishedAt?.$date || article.createdAt;
          const formattedDate = dateRaw
            ? new Date(dateRaw).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : "Marmara News";

          return (
            <motion.div
              key={articleId}
              variants={cardVariants}
              className="group"
            >
              <Link
                to={`/articles/${article.slug}`}
                className="flex flex-col h-full"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-50 mb-4 shadow-sm">
                  <img
                    src={`/img/article/${article.image}`}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center gap-3 text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                  <span>{categoryName}</span>
                  <span className="text-text-site/70">•</span>
                  <span className="text-text-site/70 flex items-center gap-1 font-normal normal-case">
                    <Clock size={12} /> {article.readTime} min read{" "}
                  </span>
                  <span className="text-text-site/70">•</span>
                  <span className="text-text-site/70 font-normal normal-case">
                    {formattedDate}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-marmara-deepTeal group-hover:text-text-secondary transition-colors duration-200 line-clamp-2 leading-snug mb-2">
                  {article.title}
                </h3>

                <p className="text-text-site/70 text-sm line-clamp-2 leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <div className="mt-auto pt-1">
                  <span className="text-marmara-deepTeal font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Story{" "}
                    <ArrowRight size={14} className="text-text-secondary" />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  const formatDate = (dateString) => {
    if (!dateString) return "No Date";
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col bg-card-site rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={`/img/article/${article.image}`}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-4 left-4 bg-card-site/90 backdrop-blur-sm text-text-secondary px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
          {article.categoryArticle?.name ||
            article.category?.name ||
            "Uncategorized"}
        </span>
      </div>
      <div className="p-6 flex flex-col grow">
        <div className="flex items-center gap-4 text-text-site/80 text-xs mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={14} /> {formatDate(article.publishedAt)}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} /> {article.readTime || 1} min read
          </span>
        </div>
        <h3 className="text-xl font-bold text-marmara-deepTeal mb-3 line-clamp-2 group-hover:text-text-secondary transition-colors">
          {article.title}
        </h3>
        <p className="text-text-site/95 text-sm line-clamp-3 mb-6 leading-relaxed">
          {article.excerpt}
        </p>
        <div className="mt-auto">
          <Link
            to={`/articles/${article.slug}`}
            className="font-bold text-sm inline-flex items-center gap-2 group/btn px-6 py-2.5 rounded-xl bg-btn-primary text-marmara-white hover:bg-btn-primary-hover shadow-md hover:shadow-lg hover:shadow-shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            Read More
            <span className="group-hover/btn:translate-x-1.5 transition-transform duration-300 inline-block">
              →
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

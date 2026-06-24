import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedSection({ article }) {
  if (!article) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-8 relative group cursor-pointer overflow-hidden rounded-3xl bg-marmara-dark-bg aspect-video lg:aspect-auto lg:h-112.5 shadow-xs"
    >
      <Link to={`/articles/${article.slug}`}>
        <img
          src={`img/article/${article.image}`}
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          alt={article.title || "Featured"}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6 md:p-10">
          <span className="bg-marmara-gold text-marmara-white px-3 py-1 rounded-full text-[10px] font-bold w-fit mb-3 uppercase tracking-widest">
            Featured Article
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 max-w-xl leading-tight">
            {article.title}
          </h2>
          <button className="flex items-center gap-2 text-white text-sm font-bold hover:gap-4 transition-all bg-transparent border-none cursor-pointer">
            Read Full Story <ArrowRight size={18} />
          </button>
        </div>
      </Link>
    </motion.div>
  );
}

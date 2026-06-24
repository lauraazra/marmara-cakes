import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function PopularSection({ articles = [] }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-4 flex flex-col"
    >
      <div className="bg-card-site rounded-3xl px-8 py-5 h-full border border-text-site/10 transition-colors duration-300">
        <h3 className="text-xl font-bold text-text-secondary mb-6 flex items-center gap-2">
          <Sparkles className="size-5 text-marmara-gold" />
          Topik Populer
        </h3>

        <div className="space-y-6">
          {articles.slice(0, 4).map((pop, idx) => (
            <Link
              key={pop._id}
              to={`/articles/${pop.slug}`}
              className="group block mt-3"
            >
              <div className="flex gap-4">
                <span className="text-2xl font-black text-text-secondary/50 group-hover:text-text-secondary transition-colors">
                  0{idx + 1}
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-text-site group-hover:text-text-secondary transition-colors line-clamp-2 leading-snug">
                    {pop.title}
                  </h4>
                  <p className="text-[11px] text-text-site/50 uppercase tracking-wider font-semibold">
                    {pop.categoryArticle?.name ||
                      pop.category?.name ||
                      "Uncategorized"}{" "}
                    • {pop.readTime} min read
                  </p>
                </div>
              </div>
              {idx !== 3 && <hr className="mt-5 border-text-site/10" />}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

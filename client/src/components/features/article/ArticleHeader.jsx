export default function ArticleHeader({
  categoryName,
  title,
  publishedAt,
  readTime,
  formatTanggal,
}) {
  return (
    <>
      {/* Breadcrumb Navigation */}
      <nav className="text-xs font-bold text-text-site/40 tracking-wide uppercase mb-4 select-none">
        <span className="hover:text-marmara-gold transition-colors cursor-pointer">
          Home
        </span>
        <span className="mx-2 text-text-site/20">&gt;</span>
        <span className="hover:text-marmara-gold transition-colors cursor-pointer">
          Articles
        </span>
        <span className="mx-2 text-text-site/20">&gt;</span>
        <span className="text-marmara-teal dark:text-marmara-light-gold font-extrabold">
          {categoryName}
        </span>
      </nav>

      {/* Title */}
      <h1 className="text-2xl sm:text-4xl font-black text-text-site tracking-tight leading-tight mb-4">
        {title}
      </h1>

      {/* Metadata Card */}
      <div className="flex items-center gap-3 text-xs font-semibold text-text-site/60 mb-6 bg-card-site/40 p-3 rounded-xl border border-text-site/5 w-fit shadow-xs">
        <span className="flex items-center gap-1">
          📅 {formatTanggal(publishedAt)}
        </span>
        <span className="text-text-site/20">•</span>
        <span className="flex items-center gap-1">
          ⏱️ {readTime} Menit Membaca
        </span>
      </div>
    </>
  );
}

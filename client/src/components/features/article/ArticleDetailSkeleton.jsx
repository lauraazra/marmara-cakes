export default function ArticleDetailSkeleton() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 animate-pulse space-y-6">
      <div className="space-y-3">
        <div className="h-4 bg-text-site/10 rounded w-1/4"></div>
        <div className="h-8 bg-text-site/10 rounded w-3/4"></div>
        <div className="h-10 bg-text-site/10 rounded-xl w-1/3"></div>
      </div>
      <div className="h-64 sm:h-100 bg-text-site/10 rounded-2xl w-full"></div>
      <div className="space-y-3 pt-4">
        <div className="h-4 bg-text-site/10 rounded w-full"></div>
        <div className="h-4 bg-text-site/10 rounded w-11/12"></div>
        <div className="h-4 bg-text-site/10 rounded w-4/5"></div>
      </div>
    </div>
  );
}

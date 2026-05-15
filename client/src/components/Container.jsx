export default function Container({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-10 mb-6 md:mb-10 lg:mb-12">
      {children}
    </div>
  );
}

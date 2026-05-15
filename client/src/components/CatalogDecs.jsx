export default function CatalogDesc({ data, style }) {
  return (
    <div
      className={`card-desc mt-auto text-sm line-clamp-2 text-marmara-neutral/80 md:text-base lg:line-clamp-1 ${style}`}
    >
      {data}
    </div>
  );
}

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "./Container";

export default function Grid3({ sliceNumber, loading, list, renderChildren }) {
  if (loading)
    return (
      <Container>
        <p className="text-center py-10">Loading yummy cakes...</p>
      </Container>
    );

  if (!list || !Array.isArray(list)) return null;

  // 2. Definisi varian untuk animasi container (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Jeda antar item 0.1 detik
      },
    },
  };

  // 3. Definisi varian untuk masing-masing card produk
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <Container>
      {/* 4. Ubah div grid menjadi motion.div */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // amount 0.1 biar animasi jalan pas baru masuk layar dikit
        className="grid grid-cols-2 gap-x-4 gap-y-4 md:gap-y-6 lg:gap-y-10 mx-2 lg:grid-cols-4 mb-6 md:mb-10 lg:mb-12"
      >
        {list.slice(0, sliceNumber).map((item) => (
          <motion.div key={item._id} variants={itemVariants}>
            <NavLink
              className="card p-2 group flex flex-col h-full"
              to={`/product/${item.slug}`}
            >
              <div className="card-image overflow-hidden rounded-2xl md:rounded-3xl group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-300 ease-in-out">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <div className="card-title mt-2 mb-1.5 font-bold md:text-2xl lg:text-xl lg:mt-4 text-marmara-deepTeal line-clamp-2">
                  {item.name}
                </div>

                <div
                  className={`card-desc mt-auto text-sm line-clamp-2 text-marmara-neutral/80 md:text-base lg:line-clamp-1`}
                >
                  {item.description}
                </div>

                {renderChildren && renderChildren(item)}
              </div>
            </NavLink>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}

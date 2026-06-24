import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Grid3({
  sliceNumber,
  loading,
  list,
  renderChildren,
  linkto,
}) {
  if (loading)
    return <p className="text-center py-10">Loading yummy cakes...</p>;

  if (!list || !Array.isArray(list)) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 gap-x-4 gap-y-4 md:gap-y-6 lg:gap-y-10 mx-2 lg:grid-cols-4"
      >
        {list.slice(0, sliceNumber).map((item) => (
          <motion.div key={item._id} variants={itemVariants}>
            <NavLink
              className="card p-2 group flex flex-col h-full"
              to={`/${linkto}/${item.slug}`}
            >
              <div className="card-image overflow-hidden rounded-2xl md:rounded-3xl group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-300 ease-in-out">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-2.5 ">
                <div className="card-title font-bold md:text-2xl lg:text-xl lg:mt-4 text-marmara-deep-teal dark:text-marmara-gold line-clamp-2">
                  {item.name}
                </div>

                <div
                  className={`card-desc mt-auto text-sm line-clamp-2 text-text-site md:text-base lg:line-clamp-2`}
                >
                  {item.description}
                </div>

                {renderChildren && renderChildren(item)}
              </div>
            </NavLink>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

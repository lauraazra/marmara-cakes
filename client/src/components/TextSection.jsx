import { motion } from "framer-motion";

export default function TextSection({ title, subtitle }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      className="px-4 text-center w-full"
      initial="hidden"
      animate="visible"
    >
      {/* Judul Utama */}
      {title && (
        <motion.h2
          variants={childVariants}
          className="text-marmara-deep-teal dark:text-marmara-gold text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight"
        >
          {title}
        </motion.h2>
      )}

      {/* Deskripsi / Sub-judul */}
      {subtitle && (
        <motion.p
          variants={childVariants}
          className="mt-4 text-sm sm:text-base lg:text-lg font-light text-text-site md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed whitespace-pre-line text-balance"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

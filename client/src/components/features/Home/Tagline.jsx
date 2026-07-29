import { motion } from "framer-motion";

export default function Tagline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    },
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-site text-center leading-tight tracking-tight transition-colors duration-300"
    >
      {/* Baris Pertama */}
      <motion.span variants={textVariants} className="block drop-shadow-sm">
        Spark your Happiness,
      </motion.span>

      {/* Baris Kedua */}
      <motion.span
        variants={textVariants}
        className="
          block mt-3 pb-2 text-transparent bg-clip-text text-balance
          
          /* --- DESIGN LIGHT MODE --- */
          bg-linear-to-r from-[#79B7A6] to-marmara-deep-teal
          [text-shadow:4px_4px_12px_rgba(0,107,115,0.15)]
          
          /* --- DESIGN DARK MODE (KREATIVE OVERRIDE) --- */
          dark:bg-linear-to-r dark:from-marmara-light-gold dark:to-marmara-gold
          dark:[text-shadow:0_4px_20px_rgba(197,160,89,0.3)]
          
          transition-all duration-300
        "
      >
        Enjoy every Moment.
      </motion.span>
    </motion.h1>
  );
}

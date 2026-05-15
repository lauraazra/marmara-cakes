import { motion } from "framer-motion";
import Container from "./Container";

export default function TextSection({ title, subtitle }) {
  // 1. Definisikan varian animasinya
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        // Ini biar anak-anaknya (h2 & p) otomatis ikut muncul berurutan
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <Container>
      <motion.div
        className="px-4 py-1 md:py-2 lg:py-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        // once: true memastikan ketika sudah 'visible', dia gak bakal balik ke 'hidden' lagi
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2
          className="text-marmara-deepTeal text-xl text-center font-bold lg:text-3xl md:text-2xl leading-tight"
          variants={childVariants}
        >
          {title}
        </motion.h2>

        <motion.p
          className="mt-4 text-sm sm:text-base lg:text-lg text-center font-light text-marmara-neutral md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed"
          variants={childVariants}
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </Container>
  );
}

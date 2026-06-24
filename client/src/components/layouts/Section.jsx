import { motion } from "framer-motion";

export default function Section({ children, className = "", isHero = false }) {
  const scrollReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  if (isHero) {
    return (
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollReveal}
        className={`pt-0 pb-12 md:pb-20 w-full ${className}`}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={scrollReveal}
      className={`py-12 md:py-20 w-full ${className}`}
    >
      {children}
    </motion.section>
  );
}

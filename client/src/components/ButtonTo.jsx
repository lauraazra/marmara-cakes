import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ButtonTo({ text = "Lihat selengkapnya", to = "/" }) {
  const buttonReveal = {
    hidden: { opacity: 0, y: 25 },
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
    <div className="w-full flex justify-center select-none">
      <motion.div
        variants={buttonReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        whileHover={{
          scale: 1.03,
          y: -3,
        }}
        whileTap={{ scale: 0.98, y: 0 }}
      >
        <Link
          to={to}
          className="
            inline-flex items-center justify-center
            text-xs py-2 px-6 border-2  rounded-full font-bold text-text-site 
            
            sm:text-sm sm:py-2.5 sm:px-7
            md:text-base md:py-3 md:px-8 
            lg:text-lg lg:py-3.5 lg:px-10 shadow-md tracking-wide
            transition-all duration-300 ease-out 
            border-btn-secondary text-btn-secondary hover:bg-btn-secondary 
            hover:text-marmara-light-grey
            hover:shadow-xl hover:shadow-shadow-primary/30
            
          "
        >
          {text}
        </Link>
      </motion.div>
    </div>
  );
}

import { motion } from "framer-motion";

export default function MapsEmbed() {
  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -4 }}
      transition={{ duration: 0.3 }}
      className="relative w-full h-62.5 md:h-122.5 lg:h-100 overflow-hidden rounded-2xl shadow-lg border border-transparent dark:border-border-site/30 hover:shadow-xl transition-colors duration-300"
    >
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1TwfbqyJ68VUkWwmIe0StIII_rm4edYU&ehbc=2E312F&noprof=1"
        className="absolute left-0 w-full h-75 -top-12.5 md:h-135 lg:h-112.5 border-0 grayscale-10 contrast-105 dark:invert dark:hue-rotate-180 dark:contrast-100 dark:grayscale-20 transition-all duration-500"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </motion.div>
  );
}

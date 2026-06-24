import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useFetchData } from "../hooks/useFetchData";

export default function BannerSlider() {
  const { data: banners = [] } = useFetchData("banner");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (banners.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 7500);

    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="img-slider relative overflow-hidden justify-items-center mx-auto lg:max-w-4xl"
    >
      <div
        className="flex transition-all duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((item) => (
          <img
            key={item._id}
            src={`/img/${item.img}`}
            alt=""
            className="w-full shrink-0 object-cover lg:rounded-2xl lg:max-w-4xl"
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bullets flex justify-center mt-4"
      >
        {banners.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 mr-2 rounded-full cursor-pointer transition-all duration-500 ${
              index === currentIndex ? "bg-border-site w-8" : "bg-text-site/20"
            } hover:bg-border-site`}
          ></div>
        ))}
      </motion.div>
    </motion.div>
  );
}

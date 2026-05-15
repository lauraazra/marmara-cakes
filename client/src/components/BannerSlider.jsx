import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // 1. Import motion
import { useFetchData } from "../hooks/useFetchData";
import Container from "./Container";

export default function BannerSlider() {
  const { data: banners = [] } = useFetchData("banner"); // Kasih default empty array biar ga error .length
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (banners.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 7500);

    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <Container>
      {/* 2. Tambahkan motion.div sebagai pembungkus utama slider */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="img-slider relative overflow-hidden justify-items-center mx-auto lg:max-w-4xl"
      >
        <div
          className="flex transition-all duration-1000 ease-in-out" // Gue percepat dikit transisinya biar lebih responsif
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((item) => (
            <img
              key={item._id}
              src={`/img/${item.img}`}
              alt=""
              className="w-full flex-shrink-0 object-cover rounded-2xl px-2 lg:rounded-2xl lg:max-w-4xl"
            />
          ))}
        </div>

        {/* 3. Animasi untuk Bullets/Indikator */}
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
                index === currentIndex
                  ? "bg-marmara-deepTeal/50 w-8"
                  : "bg-marmara-deepTeal/20"
              } hover:bg-marmara-deepTeal`}
            ></div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
}

import { motion } from "framer-motion";
import BrandValues from "../components/BrandValues";
import Navbar from "../components/Navbar";
import Tagline from "../components/Tagline";
import TextSection from "../components/TextSection";
import { useFetchData } from "../hooks/useFetchData";

export default function AboutUs() {
  // Variasi animasi untuk reveal pas scroll
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const { data: brandvalues, loading } = useFetchData("brandvalue");

  return (
    <>
      <Navbar />

      {/* 1. Hero Section: Animasi Fade In & Scale pas baru buka */}
      <section className="relative w-full h-screen flex items-center justify-center bg-marmara-deepTeal/5 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="z-10 text-center" // HAPUS h-screen DI SINI
        >
          <div className="flex justify-center">
            <motion.img
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              src="/img/logoMarmaraTeal.png"
              alt="Marmara Logo"
              className="w-auto h-12 md:h-16 mb-6"
            />
          </div>
          <Tagline />
        </motion.div>
        {/* Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/5 to-transparent"></div>
      </section>

      {/* 2. Parallax Divider */}
      <div className="w-full h-48 md:h-80 lg:h-56 bg-[url(/img/turki.png)] bg-cover bg-center bg-no-repeat bg-scroll lg:bg-fixed lg:bg-[position:0%_0%]" />

      {/* 3. Marmara Way Section: Scroll Reveal */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="pt-16 pb-12 flex flex-col items-center bg-white"
      >
        <TextSection
          title="Marmara Way"
          subtitle="More Than Just Cake, We Share Happiness."
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl flex flex-col gap-6 px-8 md:px-10 text-base leading-relaxed text-marmara-neutral/80"
        >
          <p>
            Marmara Delightful Cake is a cake shop dedicated to creating sweet
            moments for every celebration. From weddings, birthdays, and
            corporate events to thoughtful gifts for loved ones and colleagues,
            our cakes are made to bring people closer through happiness and
            togetherness.
          </p>

          <p>
            We are committed to serving premium-quality cakes at affordable
            prices, allowing more people to enjoy and share special moments with
            those they care about. This commitment became the foundation of our
            “affordable premium” concept — elegant cakes with exceptional
            quality that remain accessible to everyone.
          </p>

          <p>
            Established in 2017 by Resa Darusman and Shelly Agustianti, Marmara
            Delightful Cake later underwent a rebranding process in 2021
            together with Wahyu Soekirno bawah PT Marmara Selaras Indonesia.
          </p>
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src="/img/STORE-BANJAR.png"
            alt="Marmara Store Banjar"
            className="rounded-3xl mt-6 shadow-lg border border-marmara-lightGrey cursor-pointer"
          />
        </motion.div>

        {/* Hover Effect pada Gambar Store */}
      </motion.section>

      {/* 4. Brand Story Section: Slide in from Left & Right */}
      <section className="relative overflow-hidden pt-20 pb-20 flex flex-col lg:flex-row items-center ">
        {/* KONTEN TEKS: Slide from Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-3/5 lg:pl-20 flex flex-col"
        >
          <div className="px-10">
            <TextSection
              title="Brand Story"
              subtitle="Elegant Taste, Accessible to All."
              className="!items-start !text-left"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col px-10 gap-5 text-base leading-relaxed text-marmara-neutral/80"
          >
            <p>
              The name{" "}
              <span className="font-bold text-marmara-teal">“Marmara”</span> was
              inspired by the colorful and beautiful Marmara region of Turkey,
              known for its breathtaking scenery and vibrant atmosphere. This
              inspiration is reflected in every cake we create — beautifully
              layered, visually delightful, and rich in flavor.
            </p>

            <p>
              To maintain trust and quality, Marmara Delightful Cake is
              officially certified with P-IRT, registered trademark rights
              (HAKI), and Halal certification.
            </p>

            <p>
              Today, Marmara Delightful Cake has expanded to several cities
              termasuk{" "}
              <span className="font-semibold italic">
                Banjar, Ciamis, Tasikmalaya, Majenang, dan Bandung
              </span>
              .
            </p>

            <motion.p
              animate={{ color: ["#008080", "#c5a059", "#008080"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="font-serif italic text-marmara-teal text-lg mt-4"
            >
              Spark Your Happiness, Enjoy Every Moment!
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-2/5 flex justify-end mt-12 lg:mt-0"
        >
          <motion.img
            whileHover={{ scale: 1.05, rotate: -1 }}
            src="/img/firstMarmara.jpg"
            alt="Marmara First Store"
            className="w-[90%] md:w-[70%] lg:w-full h-auto rounded-l-4xl lg:rounded-r-none shadow-2xl object-cover transition-shadow hover:shadow-marmara-teal/20"
          />
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="pt-10 md:pt-16 lg:pt-24 pb-5 md:pb-8 lg:pb-12 bg-[#FAFAFA]"
      >
        <TextSection
          title="Brand Values"
          subtitle="Committed to delivering honest, halal, and premium delights for every meaningful moment."
        />
        <BrandValues data={brandvalues} loading={loading} />
      </motion.section>
    </>
  );
}

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import BannerSlider from "../components/BannerSlider";
import Highlight from "../components/Highlight";
import TextSection from "../components/TextSection";
import Grid3 from "../components/Grid3";
import Container from "../components/Container";
import ButtonTo from "../components/ButtonTo";
import Tagline from "../components/Tagline";
import { useFetchData } from "../hooks/useFetchData";

export default function Home() {
  // Preset animasi pas di-scroll (Scroll Reveal)
  const scrollReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const { data: list, loading } = useFetchData("categoryproduct");

  return (
    <>
      <Navbar />

      {/* 1. Top Section (Banner & WhatsApp Button): Animasi pas baru buka halaman */}
      <section className="pb-5 md:pb-8 lg:pb-12">
        <BannerSlider />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Tagline />
          </motion.div>

          <motion.h6
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="positioning text-sm sm:text-lg md:text-xl text-center font-light text-marmara-neutral mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto px-5 md:max-w-xl "
          >
            Marmara: Indonesia’s premium, affordable cake destination, sparking
            happiness in every bite.
          </motion.h6>

          {/* Tombol WA: Ditambah efek hover bounce & glow halus */}
          <div className="mb-12 flex justify-center">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 128, 128, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex gap-3 border-2 border-marmara-neutral/50 py-3 px-6 lg:py-4 lg:px-8 rounded-full font-bold text-marmara-deepTeal hover:border-[#94D3C1] hover:bg-marmara-deepTeal/2.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-6 sm:h-6 text-green-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
              </svg>
              Order via WhatsApp
            </motion.button>
          </div>
        </Container>
        <Highlight />
      </section>

      {/* 2. Categories Section: Muncul perlahan pas di-scroll */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollReveal}
        className="pt-10 md:pt-16 lg:pt-24 pb-5 md:pb-8 lg:pb-12 bg-[#FAFAFA]"
      >
        <TextSection
          title="Various Categories of Cakes"
          subtitle="Curated collections of handcrafted treats, baked daily with premium ingredients to celebrate your most precious moments."
        />
        <Grid3 sliceNumber={4} loading={loading} list={list} />
        <ButtonTo to={"/categoryproduct"} />
      </motion.section>

      {/* 3. Sweet Stories Section: Muncul perlahan pas di-scroll */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollReveal}
        className="pt-10 md:pt-16 lg:pt-24 pb-5 md:pb-8 lg:pb-12"
      >
        <TextSection
          title="Marmara's Sweet Stories"
          subtitle="Dive into the world of Marmara. From sweet inspirations to exclusive offers, find everything you need to celebrate life’s most precious highlights right here."
        />
      </motion.section>

      {/* 4. Repeat Categories Section: Muncul perlahan pas di-scroll */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollReveal}
        className="pt-10 md:pt-16 lg:pt-24 pb-5 md:pb-8 lg:pb-12 bg-[#FAFAFA]"
      >
        <TextSection
          title="Various Categories of Cakes"
          subtitle="Curated collections of handcrafted treats, baked daily with premium ingredients to celebrate your most precious moments."
        />
      </motion.section>

      {/* 5. Outlets Map Section: Map hover effect */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollReveal}
        className="pt-10 md:pt-16 lg:pt-24 pb-5 md:pb-8 lg:pb-12"
      >
        <TextSection
          title="Visit Our Outlets"
          subtitle="Find your favorite handcrafted cakes and treats at a Marmara store near you. We are ready to serve you daily with premium quality and joy."
        />
        <Container>
          {/* Iframe dibungkus efek hover mengangkat (scale up) halus */}
          <motion.div
            whileHover={{ scale: 1.01, y: -4 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-[250px] md:h-[490px] lg:h-[400px] overflow-hidden rounded-2xl shadow-lg border border-transparent hover:shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1TwfbqyJ68VUkWwmIe0StIII_rm4edYU&ehbc=2E312F&noprof=1"
              className="absolute left-0 w-full h-[300px] top-[-50px] md:h-[540px] lg:h-[450px]"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </Container>
        <ButtonTo />
      </motion.section>

      {/* 6. FAQ Section: Muncul perlahan pas di-scroll */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollReveal}
        className="pt-10 md:pt-16 lg:pt-24 pb-5 md:pb-8 lg:pb-12 bg-[#FAFAFA]"
      >
        <TextSection
          title="Questions & Answers"
          subtitle="Find instant answers to your questions or chat directly with our AI assistant for personalized help."
        />
      </motion.section>
    </>
  );
}

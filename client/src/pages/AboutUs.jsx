// === Layout Components ===
import Section from "../components/layouts/Section";
import Container from "../components/layouts/Container";

// === Third Import ===
import { motion } from "framer-motion";
import { useFetchData } from "../hooks/useFetchData";

// === Components ===
import BrandValues from "../components/BrandValues";
import Tagline from "../components/features/Home/Tagline";
import TextSection from "../components/TextSection";

export default function AboutUs() {
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
      {/* 1. Hero Section */}
      <Section
        isHero
        className="relative w-full h-screen flex items-center justify-center bg-marmara-deepTeal/5 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="z-10 text-center flex flex-col gap-6"
        >
          <div className="flex justify-center">
            <motion.img
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              src="/img/logoMarmaraTeal.png"
              alt="Marmara Logo"
              className="w-auto h-12 md:h-16 "
            />
          </div>
          <Tagline />
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black/5 to-transparent"></div>
      </Section>

      {/* 2. Parallax Divider */}
      <div className="w-full h-48 md:h-80 lg:h-56 bg-[url(/img/turki.png)] bg-cover bg-center bg-no-repeat bg-scroll lg:bg-fixed lg:bg-position-[0%_0%]" />

      {/* 3. Marmara Way Section */}
      <Section className="flex flex-col items-center">
        <Container>
          <div className="flex flex-col gap-12">
            <TextSection
              title="Marmara Way"
              subtitle="Lebih dari Sekadar Kue, Kami Berbagi Kebahagiaan."
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-4xl flex flex-col gap-6 text-base leading-relaxed text-text-site"
            >
              <p>
                Marmara Delightful Cake adalah toko kue yang didedikasikan untuk
                menciptakan momen manis di setiap perayaan. Mulai dari
                pernikahan, ulang tahun, acara perusahaan, hingga hadiah spesial
                untuk orang tercinta dan rekan kerja, kue kami hadir untuk
                mendekatkan setiap orang melalui kebahagiaan dan kebersamaan.
              </p>

              <p>
                Kami berkomitmen untuk menyajikan kue berkualitas premium dengan
                harga yang terjangkau, sehingga lebih banyak orang dapat
                menikmati dan berbagi momen spesial bersama mereka yang berarti.
                Komitmen inilah yang menjadi fondasi utama dari konsep
                “affordable premium” kami — kue elegan dengan kualitas luar
                biasa yang tetap dapat diakses oleh semua kalangan.
              </p>

              <p>
                Didirikan pada tahun 2017 oleh Resa Darusman dan Shelly
                Agustianti, Marmara Delightful Cake kemudian melakukan proses
                rebranding pada tahun 2021 bersama Wahyu Soekirno di bawah
                naungan PT Marmara Selaras Indonesia.
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
          </div>
        </Container>
      </Section>

      {/* 4. Brand Story Section */}
      <Section className="overflow-hidden flex flex-col lg:flex-row items-center bg-bg-section-2/10 py-16 lg:py-24 gap-12 lg:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-3/5 px-6 md:px-12 lg:pl-24 lg:pr-12 flex flex-col gap-8 md:gap-12"
        >
          <TextSection
            title="Brand Story"
            subtitle="Cita Rasa Elegan yang Dapat Dinikmati Semua Orang."
          />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl flex flex-col gap-5 text-sm md:text-base leading-relaxed text-text-site"
          >
            <p>
              Nama{" "}
              <span className="font-bold text-btn-secondary-text">
                “Marmara”
              </span>{" "}
              terinspirasi dari wilayah Marmara di Turki yang indah dan penuh
              warna, yang dikenal karena pemandangannya yang memukau serta
              suasananya yang hidup. Inspirasi ini tercermin di setiap kue yang
              kami buat — berlapis indah, memanjakan mata, dan kaya akan cita
              rasa.
            </p>

            <p>
              Untuk menjaga kepercayaan dan kualitas, Marmara Delightful Cake
              telah resmi bersertifikat P-IRT, terdaftar hak kekayaan
              intelektual (HAKI), serta memiliki sertifikasi Halal.
            </p>

            <p>
              Kini, Marmara Delightful Cake telah berkembang ke beberapa kota
              termasuk{" "}
              <span className="font-semibold italic">
                Banjar, Ciamis, Tasikmalaya, Majenang, dan Bandung
              </span>
              .
            </p>

            <motion.p
              animate={{ color: ["#008080", "#c5a059", "#008080"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="font-serif italic text-marmara-teal text-base md:text-lg mt-4"
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
          className="w-full lg:w-2/5 flex justify-end pl-6 lg:pl-0"
        >
          <motion.img
            whileHover={{ scale: 1.05, rotate: -1 }}
            src="/img/firstMarmara.jpg"
            alt="Marmara First Store"
            className="w-full h-75 md:h-112.5 lg:h-137.5 rounded-l-2xl md:rounded-l-4xl lg:rounded-r-none shadow-2xl object-cover transition-shadow hover:shadow-marmara-teal/20"
          />
        </motion.div>
      </Section>

      {/* 5. Brand Values */}
      <Section>
        <Container>
          <div className="flex flex-col gap-12">
            <TextSection
              title="Brand Values"
              subtitle="Berkomitmen untuk menghadirkan kelezatan yang jujur, halal, dan premium di setiap momen berhargamu."
            />
            <BrandValues data={brandvalues} loading={loading} />
          </div>
        </Container>
      </Section>
    </>
  );
}

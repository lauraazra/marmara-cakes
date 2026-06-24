// === Layout Component ===
import Section from "../components/layouts/Section";
import Container from "../components/layouts/Container";

// === Third Import ===
import { motion } from "framer-motion";
import { useFetchData } from "../hooks/useFetchData";

// === Component ===
import BannerSlider from "../components/BannerSlider";
import Highlight from "../components/features/Home/Highlight";
import TextSection from "../components/TextSection";
import Grid3 from "../components/Grid3";
import ButtonTo from "../components/ButtonTo";
import Tagline from "../components/features/Home/Tagline";
import ArticlePreview from "../components/ArticlePreview";
import TanyaAI from "../components/TanyaAI";
import FAQBox from "../components/FAQBox";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import MapsEmbed from "../components/features/Home/MapsEmbed";

export default function Home() {
  const { data: list, loading } = useFetchData("categoryproduct");
  const {
    data: articles,
    loadingArticle,
    errorArticle,
  } = useFetchData("articles");

  return (
    <>
      {/* 1. Top Section */}
      <Section isHero>
        <div className="banner mb-6">
          <BannerSlider />
        </div>
        <Container>
          <div className="flex flex-col gap-12 w-full">
            <div className="flex flex-col gap-6">
              <Tagline />
              <motion.h6
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="positioning text-sm sm:text-lg md:text-xl text-center font-light text-text-site max-w-3xl mx-auto px-5 md:max-w-xl "
              >
                Marmara: Indonesia’s premium, affordable cake destination,
                sparking happiness in every bite.
              </motion.h6>
            </div>
            <WhatsAppButton />
            <Highlight />
          </div>
        </Container>
      </Section>

      {/* 2. Categories Section */}
      <Section className="bg-bg-section-2/10">
        <Container className="flex flex-col gap-12">
          <TextSection
            title="Our Signature Categories"
            subtitle="Jelajahi berbagai pilihan kue premium, artisan pastry, dan sajian manis lezat yang dibuat sepenuh hati untuk menyempurnakan setiap momen manismu."
          />
          <div className="flex flex-col gap-8">
            <Grid3
              sliceNumber={4}
              loading={loading}
              list={list}
              linkto={"product"}
            />
            <ButtonTo to={"/categoryproduct"} />
          </div>
        </Container>
      </Section>

      {/* 3. Article Section */}
      <Section>
        <Container>
          <div className="flex flex-col gap-12">
            <TextSection
              title="Marmara Articles & Treats"
              subtitle="Ikuti keseruan momen perayaan, info produk baru, event menarik, serta promo eksklusif terbaru dari Marmara Cake di sini."
            />
            <div className="flex flex-col gap-8">
              <ArticlePreview
                articles={articles}
                loading={loadingArticle}
                error={errorArticle}
              />
              <ButtonTo to={"/article"} />
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Outlets Map Section */}
      <Section className="bg-bg-section-2/10">
        <Container>
          <div className="flex flex-col gap-12">
            <TextSection
              title="Visit Our Outlets"
              subtitle="Temukan kue dan hidangan favoritmu di cabang Marmara terdekat. Kami siap menyambutmu setiap hari dengan produk premium penuh kebahagiaan."
            />
            <div className="flex flex-col gap-8">
              <MapsEmbed />
              <ButtonTo to="/location" />
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. FAQ Section */}
      <Section>
        <Container>
          <div className="flex flex-col gap-12">
            <TextSection
              title="Questions & Answers"
              subtitle="Temukan jawaban instan untuk pertanyaanmu atau ajak mengobrol AI Assistant kami untuk bantuan langsung yang dipersonalisasi."
            />
            <div className="flex flex-col gap-8">
              <TanyaAI />
              <FAQBox />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

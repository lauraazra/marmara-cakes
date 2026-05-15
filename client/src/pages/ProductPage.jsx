import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import TextSection from "../components/TextSection";
import Grid3 from "../components/Grid3";
import CatalogDesc from "../components/CatalogDecs";

export default function ProductPage() {
  const { slug } = useParams();

  const { data, loading } = useFetchData(`product/${slug}`);
  const [selectedSub, setSelectedSub] = useState("all");
  useEffect(() => {
    setSelectedSub("all");
  }, [slug]);

  const products = data.products || [];
  const subCategories = data.subCategories || [];
  const category = data.category || [];

  // 4. Logic Filter
  const filteredItems =
    selectedSub === "all"
      ? products
      : products.filter(
          (product) => product.subcategoryproductId === selectedSub,
        );

  const scrollReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <Navbar />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollReveal}
        className="py-2.5 md:py-4 lg:py-6"
      >
        <span className="flex max-w-7xl mx-auto px-6 tracking-widest sm:px-10 lg:px-14 mb-8 md:mb-5 lg:mb-6 text-sm md:text-base lg:text-lg">
          <NavLink to="/">Home</NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          <NavLink to="/categoryproduct">Menu</NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          <p className="font-bold">{category.name}</p>
        </span>
        <TextSection title={category.name} subtitle={category.description} />
        <Container>
          {subCategories.length > 0 && (
            <div className="filter-container flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => setSelectedSub("all")}
                className={`px-6 py-2 rounded-full border border-marmara-deepTeal transition-all ${
                  selectedSub === "all"
                    ? "bg-marmara-deepTeal text-white"
                    : "text-marmara-deepTeal hover:bg-marmara-deepTeal/10"
                }`}
              >
                All
              </button>

              {subCategories.map((sub) => (
                <button
                  key={sub._id}
                  onClick={() => setSelectedSub(sub._id)}
                  className={`px-6 py-2 rounded-full border border-marmara-deepTeal transition-all ${
                    selectedSub === sub._id
                      ? "bg-marmara-deepTeal text-white"
                      : "text-marmara-deepTeal hover:bg-marmara-deepTeal/10"
                  }`}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          )}

          {/* 3. GRID PRODUK */}
        </Container>
        <Grid3
          list={filteredItems}
          loading={loading}
          renderChildren={(item) => {
            let finalPrice = item.basePrice;
            let isStartingPrice = false;

            if (!finalPrice && item.variants?.length > 0) {
              const prices = item.variants.map((v) => v.price);
              finalPrice = Math.min(...prices);
              isStartingPrice = true;
            }

            return (
              <CatalogDesc
                data={
                  finalPrice
                    ? `${isStartingPrice ? "Starts from " : ""}Rp ${finalPrice.toLocaleString()}`
                    : "Price TBA"
                }
                style="font-bold text-marmara-teal mt-1"
              />
            );
          }}
        />
      </motion.section>
    </>
  );
}

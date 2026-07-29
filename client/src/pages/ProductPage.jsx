import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { NavLink } from "react-router-dom";
import Container from "../components/layouts/Container";
import Section from "../components/layouts/Section";
import TextSection from "../components/TextSection";
import Grid3 from "../components/Grid3";
import CatalogDesc from "../components/CatalogDecs";
import ScrollableTabs from "../components/ScrollableTabs";

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

  const filteredItems =
    selectedSub === "all"
      ? products
      : products.filter((product) => {
          const prodSubId = (
            product.subcategoryproductId ||
            product.subCategoryProductId ||
            product.subCategoryproductId
          )?.toString();
          const selectedId = selectedSub?.toString();
          return prodSubId === selectedId;
        });

  return (
    <>
      <Section>
        <Container>
          <div className="flex flex-col gap-12">
            <span className="flex tracking-widest text-sm md:text-base lg:text-lg">
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
            {category && category.name && (
              <TextSection
                title={category.name}
                subtitle={category.description}
              />
            )}
            {subCategories.length > 0 && (
              <ScrollableTabs
                items={[{ _id: "all", name: "All" }, ...subCategories]}
                activeId={selectedSub}
                onSelect={setSelectedSub}
                idKey="_id"
                labelKey="name"
                themeColor=""
              />
            )}
            <Grid3
              key={selectedSub}
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
                    style="font-bold text-marmara-teal dark:text-marmara-gold mt-1"
                  />
                );
              }}
              linkto={"productdetail"}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}

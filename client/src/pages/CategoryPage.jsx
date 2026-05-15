import Navbar from "../components/Navbar";
import TextSection from "../components/TextSection";
import Grid3 from "../components/Grid3";
import { NavLink } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";

export default function CategoryPage() {
  const { data: list, loading } = useFetchData("categoryproduct");

  return (
    <>
      <Navbar />

      <section className="py-2.5 md:py-4 lg:py-6">
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
          <p className="font-bold">Menu</p>
        </span>
        <TextSection
          title="Various Categories of Cakes"
          subtitle="Curated collections of handcrafted treats, baked daily with premium ingredients to celebrate your most precious moments."
        />
        <Grid3 loading={loading} list={list} />
      </section>
    </>
  );
}

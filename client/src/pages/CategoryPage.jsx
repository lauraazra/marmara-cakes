// === Layout Component ===
import Section from "../components/layouts/Section";
import Container from "../components/layouts/Container";

// === Third Import
import { NavLink } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";

// === Components ===
import TextSection from "../components/TextSection";
import Grid3 from "../components/Grid3";

export default function CategoryPage() {
  const { data: list, loading } = useFetchData("categoryproduct");

  return (
    <>
      <Section>
        <Container>
          <div className="flex flex-col gap-12">
            <span className="flex tracking-widest text-sm md:text-base lg:text-lg lg:-mt-10">
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
              title="Our Signature Categories"
              subtitle="Jelajahi berbagai pilihan kue premium, artisan pastry, dan sajian manis lezat yang dibuat sepenuh hati untuk menyempurnakan setiap momen manismu."
            />
            <Grid3 loading={loading} list={list} linkto={`product`} />
          </div>
        </Container>
      </Section>
    </>
  );
}

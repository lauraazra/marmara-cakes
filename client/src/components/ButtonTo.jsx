import { NavLink } from "react-router-dom";
import Container from "./Container";

export default function ButtonTo({ text = "Lihat selengkapnya", to }) {
  return (
    <Container>
      <div className="flex justify-center">
        <NavLink
          className="
            text-sm py-1 px-6 border-2 border-marmara-deepTeal rounded-full font-bold text-marmara-deepTeal 
            
            md:text-base md:py-2 md:px-8 
            
            lg:text-lg lg:py-3 lg:px-10
            
            transition-all duration-500 ease-in-out 
            hover:bg-marmara-deepTeal hover:text-white hover:-translate-y-1 
            shadow-sm hover:shadow-2xl hover:shadow-marmara-deepTeal/20
          "
          to={to}
        >
          {text}
        </NavLink>
      </div>
    </Container>
  );
}

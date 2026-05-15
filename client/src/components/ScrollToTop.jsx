import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Pakai instant biar gak pusing, atau 'smooth' kalau mau estetik
    window.scrollTo(0, 0);
  }, [pathname]); // Setiap kali pathname (url) berubah, fungsi ini jalan

  return null;
}

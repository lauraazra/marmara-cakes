import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyCartBar from "./StickyCartBar";

export default function MainLayout() {
  const location = useLocation();
  const whatsappNumber = "628111803344";
  const defaultMessage = encodeURIComponent(
    "Halo Marmara Cakes, saya mau tanya-tanya tentang menu kuenya dong! ✨",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  const hiddenWaRoutes = [["/collaboration", "/career", "/partnership"]];
  const shouldHideWhatsApp = hiddenWaRoutes.includes(location.pathname);

  // ==================== STATE & LOGIKA POP-UP PROMO ====================
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    const hasSeenPromo = sessionStorage.getItem("hasSeenPromoPopUp");
    if (!hasSeenPromo) {
      setShowPromo(true);
    }
  }, []);

  const handleClosePromo = () => {
    setShowPromo(false);
    sessionStorage.setItem("hasSeenPromoPopUp", "true");
  };
  // ====================================================================

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased relative bg-bg-site text-text-site">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <StickyCartBar />

      {/* ================= STICKY WHATSAPP WITH CUSTOM ANIMATION ================= */}
      {!shouldHideWhatsApp && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat via WhatsApp"
          className="
          fixed bottom-24 right-6 z-50 bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-lg shadow-emerald-600/30 
          hover:bg-[#20ba56] hover:scale-110 active:scale-95 group transition-all duration-300
          "
        >
          {/* Tooltip text */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-bg-site border border-text-site/10 text-text-site text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block shadow-md">
            Tanya Marmara via WA 👋
          </span>

          {/* SVG Icon WhatsApp */}
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.498 1.452 5.411 1.453 5.45.001 10.774-4.648 10.775-10.363.001-2.768-1.077-5.37-3.033-7.329C17.035 1.264 14.432.025 11.664.025c-5.952 0-10.794 4.842-10.797 10.797-.001 1.902.497 3.761 1.442 5.39L1.171 21.84l5.476-1.435zM17.18 14.542c-.3-.15-1.77-.874-2.046-.974-.276-.1-.477-.15-.677.15-.2.3-.777.974-.951 1.174-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.487-.89-.794-1.49-1.773-1.665-2.073-.175-.3-.019-.463.13-.612.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.677-1.632-.927-2.233-.243-.585-.49-.507-.677-.517-.175-.008-.376-.01-.577-.01-.2 0-.526.075-.802.375-.276.3-1.052 1.026-1.052 2.502s1.077 2.9 1.227 3.1c.15.2 2.12 3.237 5.137 4.537.717.31 1.277.495 1.71.633.72.23 1.376.198 1.895.12.578-.087 1.77-.724 2.02-1.412.25-.688.25-1.276.175-1.4-.075-.124-.275-.2-.576-.35z" />
          </svg>
        </a>
      )}

      <Footer />

      {/* ================= COMPONENT POP-UP PROMO GLOBAL ================= */}
      <AnimatePresence>
        {showPromo && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClosePromo}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl bg-card-site rounded-3xl overflow-hidden shadow-2xl z-10 border border-text-site/10"
            >
              {/* Tombol Silang Bulat */}
              <button
                onClick={handleClosePromo}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-colors duration-200 group"
                aria-label="Close Pop-up"
              >
                <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>

              <div className="relative aspect-video w-full bg-marmara-teal/5">
                <img
                  src="/img/article/SLIDE-PROMO-1-1024x576.jpg"
                  alt="Marmara Cakes Promo"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              <div className="p-5 bg-card-site text-center border-t border-text-site/5 flex flex-col gap-2">
                <h3 className="font-bold text-marmara-deepTeal text-base sm:text-lg">
                  Ada Promo Manis Menunggumu! ✨
                </h3>
                <Link
                  to="/articles/siap-siap-war-temani-long-weekend-dengan-diskon-fairy-cookies-hingga-50-cuma-1-hari"
                  onClick={handleClosePromo}
                  className="w-full mt-1 py-3 rounded-2xl bg-btn-primary hover:bg-btn-primary-hover text-white text-sm font-bold shadow-md shadow-shadow-primary/10 transition-all duration-300"
                >
                  Lihat Promo Sekarang
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

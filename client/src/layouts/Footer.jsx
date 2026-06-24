import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="
        w-full transition-colors duration-300 border-t border-border-site/30 font-sans antialiased
        bg-bg-site text-text-site
      "
    >
      {/* AREA UTAMA FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* ================= BLOK KIRI: BRAND IDENTITY & TAGLINE ================= */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 ">
              {/* Gambar Logo Marmara Cake */}
              <img
                src="/img/logoMarmara.png"
                alt="Marmara Cakes Logo"
                className="w-32 object-contain bg-linear-to-br from-marmara-deep-teal to-marmara-gold rounded-xl p-5 shadow-lg shadow-marmara-teal/15"
              />
            </div>
            <p className="text-sm font-medium leading-relaxed max-w-xs italic text-text-site/70">
              "Spark your Happiness, Enjoy every Moment."
            </p>

            {/* Informasi Kontak Utama */}
            <div className="space-y-2 pt-2 text-xs font-semibold">
              <a
                href="mailto:info@marmaracakes.com"
                className="flex items-center gap-2 hover:text-link-hover transition-colors duration-200"
                aria-label="Kirim Email ke Marmara Cakes"
              >
                <span>✉️</span> info@marmaracakes.com
              </a>
              <a
                href="https://wa.me/628111803344"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-link-hover transition-colors duration-200"
                aria-label="Hubungi Marmara Order via WhatsApp"
              >
                <span>📞</span> 0811-1803-344 (Marmara Order)
              </a>
            </div>
          </div>

          {/* ================= BLOK TENGAH: QUICK LINKS ================= */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-link-hover">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-bold">
              <li>
                <Link
                  to="/about"
                  className="hover:text-link-hover transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="hover:text-link-hover transition-colors duration-200"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/articles"
                  className="hover:text-link-hover transition-colors duration-200"
                >
                  Article
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-link-hover transition-colors duration-200"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/partnership"
                  className="hover:text-link-hover transition-colors duration-200"
                >
                  Partnership
                </Link>
              </li>
              <li>
                <Link
                  to="/location"
                  className="hover:text-link-hover transition-colors duration-200"
                >
                  Location
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= BLOK TENGAH: JAM OPERASIONAL INFO ================= */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-link-hover">
              Jam Operasional
            </h3>
            <div className="space-y-2">
              <p className="text-sm font-bold">Setiap Hari</p>
              <p className="text-xs font-medium bg-card-site border border-border-site/20 px-3 py-2 rounded-xl inline-block shadow-xs">
                ⏰ 08:00 - 20:00 WIB
              </p>
              <p className="text-[11px] text-text-site/60 leading-relaxed">
                *Acuan utama layanan pelanggan pusat dan Marmara Order online.
              </p>
            </div>
          </div>

          {/* ================= BLOK KANAN: MEDIA SOSIAL & FEEDBACK ================= */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-link-hover">
              Connect With Us
            </h3>
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com/marmaracakes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-card-site border border-border-site/10 rounded-xl flex items-center justify-center text-lg hover:bg-link-hover hover:text-bg-site transition-all duration-300"
                aria-label="Ikuti Marmara Cakes di Instagram"
              >
                📸
              </a>
              <a
                href="https://facebook.com/marmaracakes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-card-site border border-border-site/10 rounded-xl flex items-center justify-center text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="Ikuti Marmara Cakes di Facebook"
              >
                👥
              </a>
              <a
                href="https://tiktok.com/@marmaracakes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-card-site border border-border-site/10 rounded-xl flex items-center justify-center text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                aria-label="Ikuti Marmara Cakes di TikTok"
              >
                🎵
              </a>
            </div>

            <div className="pt-2">
              <a
                href="https://forms.gle/marmarafeedback"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider px-4 py-2.5 bg-btn-primary text-btn-primary-text rounded-xl hover:bg-btn-primary-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md shadow-marmara-teal/10"
              >
                ✍️ Kritik & Saran
              </a>
            </div>
          </div>
        </div>

        {/* ================= SUB-FOOTER (BARIS PENUH PALING BAWAH) ================= */}
        <div className="mt-12 pt-8 border-t border-border-site/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-text-site/50">
          <p>
            &copy; {new Date().getFullYear()} Marmara Cakes Premium. All rights
            reserved.
          </p>

          <p>
            Dibuat oleh{" "}
            <a
              href="https://github.com/lauraazra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-site hover:underline decoration-link-hover underline-offset-4 font-bold transition-all"
            >
              AzraCode
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

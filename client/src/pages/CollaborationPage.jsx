import { Briefcase, Handshake, ArrowRight, Users, Rocket } from "lucide-react";
import Navbar from "../components/Navbar";

const CollaborationPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen">
        {/* 1. Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Background dengan perbaikan posisi */}
          <div
            className="
              absolute inset-0 z-0 
              bg-[url(/img/STORE-BANJAR.png)] 
              bg-cover 
              /* Default Mobile & Tab: Tengah */
              bg-center 
              brightness-[0.4]
              bg-scroll
              /* Laptop: Parallax Nyala & Posisi diatur ke bawah biar nggak kepotong */
              lg:bg-fixed
              lg:bg-[position:0%_150%]
            "
          ></div>

          {/* Content (Text) - Dibuat lebih kontras tanpa box putih yang ganggu */}
          <div className="relative z-10 text-center px-6">
            <h1 className="font-bold text-4xl md:text-6xl text-white mb-4 drop-shadow-lg">
              Grow With Marmara
            </h1>
            <p className="text-marmara-lightGold text-lg md:text-xl max-w-2xl mx-auto font-sans uppercase tracking-[0.2em] drop-shadow-md">
              Crafting Success and Happiness Together
            </p>
          </div>
        </section>

        {/* 2. Main Choice Section */}
        <section className="max-w-7xl mx-auto py-24 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Card: Careers */}
            <div className="group p-8 md:p-12 bg-marmara-lightGrey rounded-3xl border border-transparent hover:border-marmara-gold transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col justify-between">
              <div>
                <div className="bg-marmara-teal w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                  <Briefcase className="text-white" size={32} />
                </div>
                <h2 className="text-3xl text-marmara-neutral mb-4">Careers</h2>
                <p className="text-marmara-neutral opacity-80 mb-8 leading-relaxed">
                  Apakah kamu seorang pastry chef berbakat, barista yang ramah,
                  atau profesional yang ingin berkembang? Bergabunglah dengan
                  tim Marmara.
                </p>
                <ul className="space-y-4 mb-10 text-sm md:text-base">
                  {[
                    "Creative Environment",
                    "Career Growth",
                    "Team Excellence",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center text-marmara-teal font-semibold"
                    >
                      <span className="w-2 h-2 bg-marmara-gold rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="flex items-center justify-center gap-2 bg-marmara-teal text-white px-8 py-4 rounded-xl font-bold hover:bg-marmara-deepTeal transition-all group w-full md:w-fit">
                Join Our Team
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </div>

            {/* Card: Partnership */}
            <div className="group p-8 md:p-12 bg-marmara-teal rounded-3xl border border-transparent hover:border-marmara-lightGold transition-all duration-500 shadow-sm hover:shadow-2xl text-white flex flex-col justify-between">
              <div>
                <div className="bg-marmara-gold w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:-rotate-6 transition-transform">
                  <Handshake className="text-marmara-teal" size={32} />
                </div>
                <h2 className="text-3xl mb-4 text-marmara-lightGold">
                  Partnerships
                </h2>
                <p className="opacity-90 mb-8 leading-relaxed text-white">
                  Kami terbuka untuk kolaborasi B2B, suplai korporat, event
                  partnership, hingga reseller program untuk menciptakan nilai
                  lebih.
                </p>
                <ul className="space-y-4 mb-10 text-sm md:text-base">
                  {[
                    "Corporate Gifting",
                    "Wholesale Supply",
                    "Event Collaboration",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center text-marmara-lightGold font-semibold"
                    >
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="flex items-center justify-center gap-2 bg-marmara-gold text-marmara-teal px-8 py-4 rounded-xl font-bold hover:bg-marmara-lightGold transition-all group w-full md:w-fit">
                Discuss Partnership
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </div>
          </div>
        </section>

        {/* 3. Stats Section */}
        <section className="bg-marmara-neutral py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <Users className="text-marmara-gold mb-4" size={40} />
              <h4 className="text-white text-2xl">100+ Team Members</h4>
              <p className="text-marmara-lightGrey opacity-60 text-sm mt-2">
                Dukungan tim profesional
              </p>
            </div>
            <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-white/10 py-10 md:py-0">
              <Rocket className="text-marmara-gold mb-4" size={40} />
              <h4 className="text-white text-2xl">Growing Brand</h4>
              <p className="text-marmara-lightGrey opacity-60 text-sm mt-2">
                Ekspansi nasional sejak 2017
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Handshake className="text-marmara-gold mb-4" size={40} />
              <h4 className="text-white text-2xl">Trusted Partner</h4>
              <p className="text-marmara-lightGrey opacity-60 text-sm mt-2">
                Ratusan kolaborasi sukses
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CollaborationPage;

// Asumsi lu pake Lucide Icons buat portofolio, install dulu: npm i lucide-react
import { Sparkles, Award, Tag, Bike, ArrowRight } from "lucide-react";

// Sample data untuk Brand Values, disarikan dari teks asli Marmara
const marmaraValues = [
  {
    title: "Help Moments Sparkle",
    desc: "Membawa percikan kebahagiaan di setiap momen berharga Anda agar lebih bermakna.",
    icon: Sparkles, // Mewakili 'Help'
    color: "text-marmara-deepPink",
    bgColor: "bg-marmara-deepPink/10",
  },
  {
    title: "Premium & Halal Resmi",
    desc: "Komitmen menyajikan cake kualitas premium yang bersertifikat Halal, P-IRT, dan HAKI.",
    icon: Award, // Mewakili 'Quality/Halal'
    color: "text-marmara-darkGold",
    bgColor: "bg-marmara-darkGold/10",
  },
  {
    title: "Affordable Luxury",
    desc: "Konsep 'Affordable Premium'—kue mewah yang ramah di kantong agar Kita bisa berbagi kebahagiaan.",
    icon: Tag, // Mewakili 'Easy/Affordable'
    color: "text-marmara-teal",
    bgColor: "bg-marmara-teal/10",
  },
  {
    title: "Speedy Omnichannel",
    desc: "Pelayanan, pengiriman, dan respon cepat melalui berbagai kanal untuk kenyamanan Anda.",
    icon: Bike, // Mewakili 'Speed/Responsive'
    color: "text-gray-700",
    bgColor: "bg-gray-100",
  },
];

export default function HomeAboutPreview() {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* 1. SECTION: BRAND STORY PREVIEW (Visual Storytelling) */}
      <section className="py-20 lg:py-28 bg-marmara-teal/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Kiri: Foto Estetik (Visualizing Quality) */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-marmara-pink/20 rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop" // Ganti dengan foto kue Marmara yang ikonik
                alt="Delicious Marmara Cake Layer"
                className="relative rounded-3xl shadow-2xl object-cover w-full h-[400px] md:h-[500px]"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-marmara-pink/10">
                <p className="text-marmara-deepTeal font-bold text-lg">
                  Sejak 2017
                </p>
                <p className="text-sm text-gray-600">Berbagi Kebahagiaan</p>
              </div>
            </div>

            {/* Kanan: Konten Ringkas & Menarik */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-marmara-pink/10 text-marmara-deepPink px-4 py-1.5 rounded-full font-semibold text-sm">
                <Sparkles className="size-4" />
                Spark Your Happiness!
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-marmara-deepTeal leading-tight">
                MARMARA-kan
                <br /> Momen Berhargamu.
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                Terinspirasi dari keindahan panorama Turki, Marmara hadir untuk
                menyajikan cake berkualitas{" "}
                <span className="font-semibold text-marmara-teal">premium</span>{" "}
                dengan harga{" "}
                <span className="font-semibold text-marmara-teal">
                  terjangkau
                </span>
                . Mari rayakan setiap momen bahagia bersama pasangan, kolega,
                dan keluarga tercinta.
              </p>

              <div className="pt-4">
                <button className="inline-flex items-center gap-2.5 bg-marmara-pink text-white px-8 py-4 rounded-xl font-bold hover:bg-marmara-deepPink transition-all shadow-lg hover:shadow-marmara-pink/30 hover:-translate-y-1">
                  Kunjungi Perjalanan Kami
                  <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: BRAND VALUES (Visual Grid) */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h3 className="text-sm font-bold text-marmara-pink uppercase tracking-widest mb-3">
              Nilai Kami
            </h3>
            <p className="text-4xl md:text-5xl font-extrabold text-marmara-deepTeal">
              Janji Marmara Untukmu
            </p>
            <div className="w-24 h-1.5 bg-marmara-darkGold mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {marmaraValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="relative group p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-50 hover:shadow-marmara-teal/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Dekorisasi Background */}
                  <div
                    className={`absolute -bottom-10 -right-10 size-32 ${value.bgColor} rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity`}
                  ></div>

                  <div className="relative z-10 space-y-5">
                    <div
                      className={`inline-flex p-4 rounded-2xl ${value.bgColor} ${value.color}`}
                    >
                      <Icon className="size-8" strokeWidth={2} />
                    </div>

                    <h4 className="text-2xl font-bold text-marmara-deepTeal leading-snug">
                      {value.title}
                    </h4>

                    <p className="text-gray-600 text-base leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

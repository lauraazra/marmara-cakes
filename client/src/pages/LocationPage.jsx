import { useState, useEffect } from "react";

export default function Location() {
  const [stores] = useState([
    {
      _id: "6646b333b1a23c880011333c",
      name: "Marmara Banjar",
      slug: "marmara-cake-banjar",
      city: "Banjar",
      address:
        "Jl. Kapten Jamhur No. 15 (Depan Kantor PLN), Banjar, Jawa Barat",
      whatsappNumber: "628111803344",
      googleMapsLink: "https://maps.app.goo.gl/xyzBanjar",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Marmara%20Cake%20Jl.%20Kapten%20Jamhur%20No.%2015%20Banjar&t=&z=15&ie=UTF8&iwloc=&output=embed",
      operationalHoursText: "Setiap hari: 07.00 - 21.00 WIB", // 🌟 Ditambahkan teks manual
    },
    {
      _id: "6646b666b1a23c880011666f",
      name: "Marmara Ciamis",
      slug: "marmara-cake-ciamis",
      city: "Ciamis",
      address:
        "Jl. Ir. H. Juanda No. 115 (Depan Lapangan Lokasana), Ciamis, Jawa Barat",
      whatsappNumber: "628111803344",
      googleMapsLink: "https://maps.app.goo.gl/xyzCiamis",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Marmara%20Cake%20Jl.%20Ir.%20H.%20Juanda%20No.%20115%20Ciamis&t=&z=15&ie=UTF8&iwloc=&output=embed",
      operationalHoursText: "Setiap hari: 07.00 - 21.00 WIB",
    },
    {
      _id: "6646b111b1a23c880011111a",
      name: "Marmara Tasikmalaya",
      slug: "marmara-cake-tasikmalaya",
      city: "Tasikmalaya",
      address:
        "Jl. Dr. Sukardjo No. 77 (Dekat Simpang 5), Tasikmalaya, Jawa Barat",
      whatsappNumber: "628111803344",
      googleMapsLink: "https://maps.app.goo.gl/Y7uE76zBfW8Z9Mba8",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Marmara%20Cake%20Jl.%20Dr.%20Sukardjo%20No.%2077%20Tasikmalaya&t=&z=15&ie=UTF8&iwloc=&output=embed",
      operationalHoursText:
        "Senin - Jumat: 07.00 - 21.00 WIB | Sabtu - Minggu: 07.00 - 22.00 WIB",
    },
    {
      _id: "6646b444b1a23c880011444d",
      name: "Marmara Majenang",
      slug: "marmara-cake-majenang",
      city: "Majenang",
      address:
        "Jl. Diponegoro No. 134 (Samping Yogya Toserba), Majenang, Cilacap, Jawa Tengah",
      whatsappNumber: "628111803344",
      googleMapsLink: "https://maps.app.goo.gl/xyzMajenang",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Marmara%20Cake%20Jl.%20Diponegoro%20No.%20134%20Majenang&t=&z=15&ie=UTF8&iwloc=&output=embed",
      operationalHoursText: "Setiap hari: 10.00 - 20.00 WIB",
    },
    {
      _id: "6646b222b1a23c880011222b",
      name: "Marmara Garut",
      slug: "marmara-cake-garut",
      city: "Garut",
      address:
        "Jalan Cimanuk.444 A, Jayaraga, Tarogong Kidul, Jawa, Barat, Kabupaten Garut, Jawa Barat 44150",
      whatsappNumber: "628111803344",
      googleMapsLink: "https://maps.app.goo.gl/xyzGarut",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Marmara%20Cake%20Garut&t=&z=15&ie=UTF8&iwloc=&output=embed",
      operationalHoursText: "Setiap hari: 07.00 - 21.00 WIB",
    },
    {
      _id: "6646b555b1a23c880011555e",
      name: "Marmara Bandung",
      slug: "marmara-cake-bandung",
      city: "Bandung",
      address:
        "Jl. Komud Supadio Bandung No.16, Husen Sastranegara, Kec. Cicendo, Kota Bandung, Jawa Barat 40174",
      whatsappNumber: "628111803344",
      googleMapsLink: "https://share.google/LgL8O4t5I9jG3TsIK",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Marmara%20Cake%20Jl.%20Komud%20Supadio%20Bandung%20No.16%20Cicendo&t=&z=15&ie=UTF8&iwloc=&output=embed",
      operationalHoursText: "Setiap hari: 07.00 - 21.00 WIB",
    },
  ]);

  const cities = [
    "All",
    "Tasikmalaya",
    "Garut",
    "Banjar",
    "Majenang",
    "Bandung",
    "Ciamis",
  ];

  const [selectedCity, setSelectedCity] = useState("All");
  const [activeStore, setActiveStore] = useState(stores[0]);

  const isStoreOpen = (store) => {
    const now = new Date();
    const hours = now.getHours();
    const day = now.getDay();

    if (store.city === "Tasikmalaya") {
      const isWeekend = day === 0 || day === 6;
      const closeHour = isWeekend ? 22 : 21;
      return hours >= 7 && hours < closeHour;
    }

    if (store.city === "Majenang") {
      return hours >= 10 && hours < 20;
    }

    return hours >= 7 && hours < 21;
  };

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const filteredStores = stores.filter((store) => {
    if (selectedCity === "All") return true;
    return store.city.toLowerCase() === selectedCity.toLowerCase();
  });

  useEffect(() => {
    if (filteredStores.length > 0) {
      const isStillVisible = filteredStores.some(
        (s) => s._id === activeStore._id,
      );
      if (!isStillVisible) {
        setActiveStore(filteredStores[0]);
      }
    }
  }, [selectedCity]);

  const getWhatsAppLink = (store) => {
    const textMessage = `Halo Mima, saya ingin bertanya seputar produk atau layanan di outlet ${store.name}.`;
    return `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
  };

  return (
    <>
      <div className="bg-bg-site min-h-screen font-sans text-text-site antialiased transition-colors duration-300">
        <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen lg:overflow-hidden">
          {/* BAGIAN KIRI */}
          <div className="w-full lg:w-112.5 xl:w-125 bg-card-site border-r border-border-site/30 flex flex-col h-full lg:overflow-y-auto order-2 lg:order-1 transition-colors duration-300">
            <div className="p-6 border-b border-border-site/20 bg-card-site transition-colors duration-300">
              <span className="text-xs font-bold uppercase tracking-wider text-text-secondary bg-text-secondary/10 px-2.5 py-1 rounded-md mb-2 inline-block">
                Our Stores
              </span>
              <h1 className="text-2xl font-black tracking-tight text-text-site sm:text-3xl">
                Temukan Cabang Marmara
              </h1>
              <p className="text-text-site/70 text-sm mt-1">
                Klik pada kartu toko untuk melihat lokasinya di peta secara
                langsung.
              </p>

              <div className="mt-5 flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-2 px-2">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
                      selectedCity === city
                        ? "bg-btn-primary text-btn-primary-text border-btn-primary shadow-sm shadow-shadow-primary/20"
                        : "bg-transparent text-text-site border-border-site/40 hover:bg-border-site/10"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1">
              {filteredStores.map((store) => {
                const isSelected = activeStore._id === store._id;
                const isOpen = isStoreOpen(store);

                return (
                  <div
                    key={store._id}
                    onClick={() => setActiveStore(store)}
                    className={`rounded-xl p-5 shadow-sm transition-all duration-200 flex flex-col justify-between cursor-pointer border-2 ${
                      isSelected
                        ? "bg-text-secondary/5 border-border-site shadow-shadow-primary/10"
                        : "bg-bg-site border-border-site/20 hover:border-border-site/60"
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-extrabold text-base text-text-site tracking-tight leading-snug">
                          {store.name}
                        </h3>

                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold border ${
                            isOpen
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800"
                              : "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-400 dark:border-rose-800"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${isOpen ? "bg-emerald-500 dark:bg-emerald-400" : "bg-rose-500 dark:bg-rose-400"}`}
                          />
                          {isOpen ? "Buka" : "Tutup"}
                        </span>
                      </div>

                      <p className="text-sm text-text-site/80 leading-relaxed mb-1.5">
                        {store.address}
                      </p>
                      <p className="text-xs text-text-site/50 font-medium mb-4">
                        Jam Operasional: {store.operationalHoursText}
                      </p>
                    </div>

                    <div
                      className="grid grid-cols-2 gap-3 pt-2 border-t border-border-site/20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a
                        href={store.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 border border-border-site/50 text-text-site font-bold py-2 px-3 rounded-lg text-xs hover:bg-border-site/10 transition-all duration-200 active:scale-95 text-center"
                      >
                        <svg
                          className="h-4 w-4 text-text-site/50"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        Petunjuk Arah
                      </a>
                      <a
                        href={getWhatsAppLink(store)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 dark:bg-[#128C7E] text-white font-bold py-2 px-3 rounded-lg text-xs hover:bg-emerald-700 transition-all duration-200 shadow-sm active:scale-95 text-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.488 4.652 1.492 5.423 0 9.85-4.414 9.853-9.84.002-2.63-1.023-5.101-2.887-6.967C16.36 1.98 13.882.955 11.25.955c-5.432 0-9.86 4.414-9.863 9.841-.001 1.76.49 3.424 1.474 4.885l-.993 3.626 3.73-.974z" />
                        </svg>
                        Chat via WA 💬
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* BAGIAN KANAN */}
          <div className="sticky top-18 z-20 w-full lg:static lg:flex-1 shrink-0 bg-bg-site h-[25vh] sm:h-[30vh] lg:h-full order-1 lg:order-2 transition-colors duration-300 shadow-md lg:shadow-none">
            {activeStore ? (
              <iframe
                title={activeStore.name}
                src={activeStore.mapEmbedUrl}
                className="w-full h-full border-0 grayscale-10 contrast-105 dark:invert dark:hue-rotate-180 dark:contrast-100 dark:grayscale-20 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-card-site text-sm text-text-site/60 transition-colors duration-300">
                Pilih cabang untuk memuat peta lokasi.
              </div>
            )}

            <div className="absolute top-4 right-4 bg-card-site/90 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-border-site/40 shadow-md text-xs font-bold text-text-site transition-all duration-300 z-10">
              📍 Lokasi Fokus:{" "}
              <span className="text-text-secondary font-black">
                {activeStore?.name || "Marmara"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

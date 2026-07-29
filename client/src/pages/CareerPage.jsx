import { useState } from "react";

export default function CareerPage() {
  const [activePoster, setActivePoster] = useState(null);
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Store Crew",
      location: "Tasikmalaya",
      type: "Full-Time",
      link: "https://forms.gle/dummyGoogleFormStoreCrew",
      image: "/img/loker1.jpeg",
    },
    {
      id: 2,
      title: "Baker Helper",
      location: "Tasikmalaya",
      type: "Full-Time",
      link: "https://forms.gle/dummyGoogleFormBakerHelper",
      image: "/img/loker1.jpeg",
    },
    {
      id: 3,
      title: "Customer Service Ritel",
      location: "Tasikmalaya",
      type: "Full-Time",
      link: "https://forms.gle/dummyGoogleFormCSRetail",
      image: "/img/loker1.jpeg",
    },
  ]);

  const generalFormLink = "https://forms.gle/dummyGoogleFormGeneralDatabase";

  return (
    <div className="bg-bg-site min-h-screen font-sans text-text-site antialiased transition-colors duration-300">
      <section className="relative overflow-hidden bg-bg-site py-16 sm:py-24 border-b border-border-site/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center rounded-md bg-text-secondary/10 px-3 py-1 text-xs font-semibold text-text-secondary ring-1 ring-inset ring-text-secondary/20 mb-4">
            Marmara Career
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-text-site sm:text-5xl lg:max-w-4xl md:max-w-2xl mx-auto leading-tight">
            Mari Bertumbuh dan Berbagi Kebahagiaan Bersama Marmara Cake
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-text-site/80 max-w-2xl mx-auto">
            Bergabunglah dengan tim profesional kami yang berdedikasi tinggi
            untuk menyajikan produk bakery terbaik berstandar internasional.
          </p>

          <div className="mt-12 max-w-4xl mx-auto aspect-[16/9] rounded-2xl bg-card-site border border-border-site/30 shadow-lg flex items-center justify-center overflow-hidden group">
            <img
              src="/img/career.png"
              alt="Marmara Cake Team Culture"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-bg-site">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-text-site sm:text-3xl">
              Mengapa Bergabung Bersama Kami?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Benefit 1 */}
            <div className="relative p-6 bg-card-site rounded-xl border border-border-site/20 shadow-sm transition-all duration-300 hover:shadow-md hover:border-border-site/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-btn-primary text-btn-primary-text shadow-sm mb-5 transition-colors duration-300">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-site mb-2">
                Standar Internasional
              </h3>
              <p className="text-sm leading-relaxed text-text-site/70">
                Lingkungan kerja bersih, higienis, dan bersertifikasi ISO
                22000:2018.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="relative p-6 bg-card-site rounded-xl border border-border-site/20 shadow-sm transition-all duration-300 hover:shadow-md hover:border-border-site/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-btn-primary text-btn-primary-text shadow-sm mb-5 transition-colors duration-300">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-site mb-2">
                Pengembangan Karir
              </h3>
              <p className="text-sm leading-relaxed text-text-site/70">
                Pelatihan keterampilan berkala di bidang bakery, manajemen
                ritel, dan profesionalitas kerja.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="relative p-6 bg-card-site rounded-xl border border-border-site/20 shadow-sm transition-all duration-300 hover:shadow-md hover:border-border-site/40 sm:col-span-2 lg:col-span-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-btn-primary text-btn-primary-text shadow-sm mb-5 transition-colors duration-300">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-site mb-2">
                Benefit Industri
              </h3>
              <p className="text-sm leading-relaxed text-text-site/70">
                Diskon khusus karyawan untuk semua produk kue dan roti Marmara
                Cake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Lowongan Kerja Aktif */}
      <section className="py-12 sm:py-16 bg-bg-site border-t border-border-site/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {jobs.length > 0 ? (
            <div>
              <div className="mb-8 text-center sm:text-left">
                <h2 className="text-2xl font-bold tracking-tight text-text-site">
                  Lowongan Kerja Aktif
                </h2>
                <p className="mt-2 text-sm text-text-site/60">
                  Pilih posisi yang sesuai dengan keahlianmu dan bertumbuh
                  bersama kami.
                </p>
              </div>

              {/* List Card Lowongan */}
              <div className="space-y-4">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-card-site p-6 rounded-xl border border-border-site/20 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between transition-all duration-200 hover:border-border-site/60"
                  >
                    <div className="mb-4 sm:mb-0">
                      <h3 className="text-lg font-bold text-text-site">
                        {job.title}
                      </h3>

                      <div className="mt-2 flex flex-wrap gap-2 items-center text-sm text-text-site/60">
                        <span className="flex items-center gap-1">
                          <svg
                            className="h-4 w-4 text-text-secondary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
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
                          {job.location}
                        </span>

                        <span className="text-border-site/40">•</span>

                        <span className="inline-flex items-center rounded-md bg-bg-site px-2 py-0.5 text-xs font-medium text-text-secondary border border-border-site/20">
                          {job.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2.5 sm:items-center">
                      <button
                        onClick={() => setActivePoster(job.image)}
                        className="inline-flex w-full sm:w-auto items-center justify-center bg-bg-site border border-border-site/60 text-text-site font-bold py-2.5 px-5 rounded-lg text-sm hover:bg-card-site/80 transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
                      >
                        <svg
                          className="mr-2 h-4 w-4 text-text-secondary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        Lihat Detail
                      </button>

                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full sm:w-auto items-center justify-center bg-btn-primary text-marmara-white font-bold py-2.5 px-6 rounded-lg text-sm hover:bg-btn-primary-hover transition-all duration-300 shadow-sm active:scale-95"
                      >
                        Lamar Sekarang
                        <svg
                          className="ml-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Skenario Lowongan Kosong */
            <div className="text-center py-12 px-6 bg-card-site rounded-2xl border border-border-site/20 shadow-md max-w-2xl mx-auto">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-bg-site border border-border-site/30 text-text-secondary mb-5">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>

              {/* Judul Teks */}
              <h3 className="text-lg font-bold text-text-site">
                Saat ini seluruh posisi di Marmara Cake telah terisi penuh.
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-text-site/70 max-w-md mx-auto">
                Jangan berkecil hati! Anda tetap bisa mengirimkan CV terbaik
                Anda langsung ke email resmi kami untuk peluang karir di masa
                mendatang.
              </p>

              <div className="mt-8">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=career@marmara.com&su=Spontan%20Application%20-%20Talent%20Pool%20Marmara&body=Halo%20Tim%20HRD%20Marmara%2C%0A%0ABersama%20dengan%20email%20ini%2C%20saya%20ingin%20mengirimkan%20CV%20saya%20untuk%20bergabung%20ke%20dalam%20database%20talenta%20Marmara.%20Berikut%20saya%20lampirkan%20CV%20terbaru%20saya.%0A%0ATerima%20kasih."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-btn-primary text-btn-primary-text font-bold py-3 px-8 rounded-lg text-sm hover:bg-btn-primary-hover transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                >
                  Kirim CV ke Email HRD
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {activePoster && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-all duration-300"
          onClick={() => setActivePoster(null)}
        >
          <div
            className="relative max-w-lg w-full max-h-[90vh] bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center p-2 border border-zinc-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePoster(null)}
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors duration-200 cursor-pointer shadow-md"
              aria-label="Tutup Poster"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="w-full h-full flex items-center justify-center overflow-y-auto rounded-xl">
              <img
                src={activePoster}
                alt="Detail Poster Lowongan Kerja"
                className="max-h-[82vh] w-auto object-contain rounded-lg shadow-inner select-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

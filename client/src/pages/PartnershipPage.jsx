import { useState, useRef } from "react";

export default function PartnershipPage() {
  const formSectionRef = useRef(null);

  // State Form Input
  const [formData, setFormData] = useState({
    nama: "",
    perusahaan: "",
    email: "",
    noHp: "",
    industri: "Kafe/Coffee Shop",
    pesan: "",
  });

  // State Validasi & Status Form
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Template Pesan WhatsApp B2B
  const waNumber = "6281222152255";
  const waMessage = encodeURIComponent(
    "Halo Tim B2B Marmara Cake, saya tertarik untuk mendiskusikan peluang kerja sama kemitraan untuk bisnis saya. Boleh dibantu untuk proses awalnya? Terima kasih.",
  );
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Handle Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Validasi Input Sederhana
    let validationErrors = {};
    if (!formData.email.trim()) {
      validationErrors.email = "Email wajib diisi";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    // 2. Susun template teks rapi dari isi Form data
    const teksWhatsApp = `*KEMITRAAN BARU - MARMARA B2B*

* Nama Lengkap: ${formData.nama}
* Perusahaan: ${formData.perusahaan}
* Email Aktif: ${formData.email}
* No. WhatsApp: ${formData.noHp}
* Jenis Industri: ${formData.industri}

*Pesan / Kebutuhan:*
"${formData.pesan}"

Mohon dibantu untuk proses awal kemitraan ini. Terima kasih!`;

    const kustomWaMessage = encodeURIComponent(teksWhatsApp);
    const kustomWaLink = `https://wa.me/${waNumber}?text=${kustomWaMessage}`;
    window.open(kustomWaLink, "_blank", "noopener,noreferrer");

    setIsSubmitted(true);
    setLoading(false);

    setFormData({
      nama: "",
      perusahaan: "",
      email: "",
      noHp: "",
      industri: "Kafe/Coffee Shop",
      pesan: "",
    });
  };

  return (
    <div className="min-h-screen bg-bg-site font-sans text-text-site relative antialiased transition-colors duration-300">
      {/* 3.1 HERO SECTION */}
      <section className="relative bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white py-24 px-4 sm:px-6 lg:px-8 text-center border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-marmara-gold bg-marmara-gold/10 px-3 py-1 rounded-full border border-marmara-gold/20">
            Marmara B2B Partnership
          </span>
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none">
            Elevate Your Business with <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-marmara-light-gold to-marmara-gold">
              Marmara Cake Premium Partnership
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Solusi kebutuhan bakery premium, aman, dan bersertifikasi
            internasional untuk hotel, kafe, korporat, hingga kebutuhan
            white-label Anda.
          </p>

          {/* Tombol CTA Hero */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto px-8 py-3.5 bg-btn-primary text-white-marmara font-bold rounded-lg transition-all duration-300 shadow-lg hover:bg-btn-primary-hover text-sm tracking-wide active:scale-95 cursor-pointer"
            >
              Isi Formulir Kemitraan
            </button>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg border border-zinc-700 transition-all duration-300 text-sm tracking-wide active:scale-95"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 3.2 KEUNGGULAN KERJA SAMA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-site">
            Mengapa Bermitra dengan Marmara Cake?
          </h2>
          <div className="h-1 w-12 bg-text-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Keunggulan 1 */}
          <div className="bg-card-site p-6 rounded-xl border border-border-site/20 shadow-sm hover:shadow-md hover:border-border-site/40 transition-all duration-300">
            <div className="w-12 h-12 bg-text-secondary/10 text-text-secondary rounded-lg flex items-center justify-center font-bold text-xl mb-5">
              ✦
            </div>
            <h3 className="text-lg font-bold text-text-site mb-2">
              Customized & Co-Branded Products
            </h3>
            <p className="text-sm text-text-site/80 leading-relaxed">
              Kami menawarkan solusi produk white-label yang disesuaikan dengan
              spesifikasi unik bisnis Anda. Kami juga membuka peluang kerja sama
              co-branding untuk menghadirkan produk eksklusif bagi relasi bisnis
              Anda.
            </p>
          </div>

          {/* Keunggulan 2 */}
          <div className="bg-card-site p-6 rounded-xl border border-border-site/20 shadow-sm hover:shadow-md hover:border-border-site/40 transition-all duration-300">
            <div className="w-12 h-12 bg-text-secondary/10 text-text-secondary rounded-lg flex items-center justify-center font-bold text-xl mb-5">
              $
            </div>
            <h3 className="text-lg font-bold text-text-site mb-2">
              Budget-Optimized Solutions
            </h3>
            <p className="text-sm text-text-site/80 leading-relaxed">
              Membangun produk berkualitas tinggi yang disesuaikan dengan
              batasan anggaran perusahaan tanpa mengorbankan integritas rasa.
              Tim kami siap merekomendasikan produk yang tepat untuk pertumbuhan
              pasar Anda.
            </p>
          </div>

          {/* Keunggulan 3 */}
          <div className="bg-card-site p-6 rounded-xl border border-border-site/20 shadow-sm hover:shadow-md hover:border-border-site/40 transition-all duration-300">
            <div className="w-12 h-12 bg-text-secondary/10 text-text-secondary rounded-lg flex items-center justify-center font-bold text-xl mb-5">
              📦
            </div>
            <h3 className="text-lg font-bold text-text-site mb-2">
              A Diverse Product Portfolio
            </h3>
            <p className="text-sm text-text-site/80 leading-relaxed">
              Memproduksi variasi format produk yang luas, mulai dari produk
              frozen (adonan beku) hingga produk siap saji seperti cake, roti,
              dan hampers. Kami juga menyediakan pilihan menu sehat seperti
              varian gluten-free dan less sugar.
            </p>
          </div>

          {/* Keunggulan 4 */}
          <div className="bg-card-site p-6 rounded-xl border border-border-site/20 shadow-sm hover:shadow-md hover:border-border-site/40 transition-all duration-300">
            <div className="w-12 h-12 bg-text-secondary/10 text-text-secondary rounded-lg flex items-center justify-center font-bold text-xl mb-5">
              🛡️
            </div>
            <h3 className="text-lg font-bold text-text-site mb-2">
              ISO 22000:2018 Certified
            </h3>
            <p className="text-sm text-text-site/80 leading-relaxed">
              Fasilitas produksi kami telah diaudit dan mendapatkan sertifikasi
              ISO 22000:2018 oleh SAI Global, standar internasional yang
              mencakup jaminan keamanan pangan tertinggi melalui sistem GMP dan
              HACCP.
            </p>
          </div>

          {/* Keunggulan 5 & 6*/}
          <div className="bg-card-site p-6 rounded-xl border border-border-site/20 shadow-sm hover:shadow-md hover:border-border-site/40 transition-all duration-300 md:col-span-2 lg:col-span-2">
            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-lg flex items-center justify-center font-bold text-xl mb-5">
              ✓
            </div>
            <h3 className="text-lg font-bold text-text-site mb-2">
              Halal & Food Safety Commitment
            </h3>
            <p className="text-sm text-text-site/80 leading-relaxed">
              Menjamin ketenangan pikiran bagi konsumen Anda dengan seluruh lini
              produk yang telah tersertifikasi resmi oleh LPPOM MUI (Halal) dan
              BPOM. Seluruh proses pengolahan bahan baku dipantau ketat demi
              menjaga standar keamanan pangan komersial.
            </p>
          </div>
        </div>
      </section>

      {/* 3.3 SKEMA & MODEL KEMITRAAN */}
      <section className="py-20 bg-card-site/40 border-y border-border-site/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-site">
              Pilihan Model Kemitraan
            </h2>
            <p className="text-sm text-text-site/60 mt-2">
              Didesain fleksibel sesuai fokus operasional industri Anda
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Model 1 */}
            <div className="bg-card-site rounded-xl shadow-sm border border-border-site/20 overflow-hidden flex flex-col justify-between p-8 hover:border-border-site/50 transition-all duration-300">
              <div>
                <span className="text-xs font-semibold text-text-secondary uppercase bg-text-secondary/10 px-2.5 py-1 rounded">
                  Supply Bulanan
                </span>
                <h3 className="text-xl font-bold text-text-site mt-4 mb-3">
                  Horeca & B2B Supply
                </h3>
                <p className="text-sm text-text-site/70 leading-relaxed">
                  Suplai rutin aneka jenis kue potong, roti masal, dan adonan
                  bakery berkualitas tinggi untuk kebutuhan Hotel, Restoran, dan
                  jaringan Kafe (Coffee Shop).
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border-site/20 text-xs text-text-site/40 font-medium">
                Pengiriman Terjadwal • Kontrak Fleksibel
              </div>
            </div>

            {/* Model 2 */}
            <div className="bg-card-site rounded-xl shadow-sm border border-border-site/20 overflow-hidden flex flex-col justify-between p-8 hover:border-border-site/50 transition-all duration-300">
              <div>
                <span className="text-xs font-semibold text-marmara-deep-pink uppercase bg-marmara-deep-pink/10 px-2.5 py-1 rounded">
                  Bulk Order
                </span>
                <h3 className="text-xl font-bold text-text-site mt-4 mb-3">
                  Corporate Gift & Hampers
                </h3>
                <p className="text-sm text-text-site/70 leading-relaxed">
                  Pemesanan paket bingkisan kue kering premium dan cake box
                  dalam jumlah besar khusus untuk cinderamata event perusahaan,
                  reward karyawan, atau kebutuhan hari raya.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border-site/20 text-xs text-text-site/40 font-medium">
                Custom Logo Perusahaan • Pengiriman Multi-Destinasi
              </div>
            </div>

            {/* Model 3 */}
            <div className="bg-card-site rounded-xl shadow-sm border border-border-site/20 overflow-hidden flex flex-col justify-between p-8 hover:border-border-site/50 transition-all duration-300">
              <div>
                <span className="text-xs font-semibold text-emerald-500 uppercase bg-emerald-500/10 px-2.5 py-1 rounded">
                  Kustomisasi Penuh
                </span>
                <h3 className="text-xl font-bold text-text-site mt-4 mb-3">
                  White-Label (Maklon)
                </h3>
                <p className="text-sm text-text-site/70 leading-relaxed">
                  Produksi kue skala besar menggunakan resep khusus atau
                  kustomisasi penuh yang dicetak serta dikemas menggunakan brand
                  atau merk dagang milik perusahaan Anda sendiri.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border-site/20 text-xs text-text-site/40 font-medium">
                Kerahasiaan Resep • Skala Produksi Massal
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ALUR KONVERSI & KONTAK */}
      <section
        ref={formSectionRef}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* 4.1 FORM PENGAJUAN KEMITRAAN */}
          <div className="lg:col-span-7 bg-card-site border border-border-site/20 p-6 sm:p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-text-site mb-2">
              Formulir Pengajuan Kemitraan
            </h3>
            <p className="text-xs text-text-site/60 mb-6">
              Lengkapi data di bawah ini untuk mendapatkan proposal penawaran
              resmi dari tim kami.
            </p>

            {isSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-text-site p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  ✓
                </div>
                <h4 className="font-bold text-base mb-1">
                  Pengajuan Berhasil Dikirim!
                </h4>
                <p className="text-xs text-text-site/70 leading-relaxed">
                  Terima kasih, Tim B2B kami akan menghubungi Anda dalam waktu
                  maksimal 1x24 jam melalui Email/WhatsApp.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-text-secondary hover:underline"
                >
                  Kirim pengajuan baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-site/70 mb-1">
                      Nama Lengkap{" "}
                      <span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      name="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      placeholder="Contoh: Azra Laura"
                      className="w-full text-sm px-3 py-2 border border-border-site/30 rounded-md focus:outline-none focus:ring-1 focus:ring-text-secondary focus:border-text-secondary bg-bg-site text-text-site"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-site/70 mb-1">
                      Nama Perusahaan / Bisnis{" "}
                      <span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      name="perusahaan"
                      value={formData.perusahaan}
                      onChange={handleChange}
                      placeholder="Contoh: Marmara Cafe Group"
                      className="w-full text-sm px-3 py-2 border border-border-site/30 rounded-md focus:outline-none focus:ring-1 focus:ring-text-secondary focus:border-text-secondary bg-bg-site text-text-site"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-site/70 mb-1">
                      Alamat Email Aktif{" "}
                      <span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className={`w-full text-sm px-3 py-2 border bg-bg-site text-text-site ${errors.email ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-border-site/30 focus:ring-text-secondary focus:border-text-secondary"} rounded-md focus:outline-none focus:ring-1`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[11px] mt-1 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-site/70 mb-1">
                      Nomor WhatsApp (No. HP){" "}
                      <span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="tel"
                      name="noHp"
                      value={formData.noHp}
                      onChange={handleChange}
                      placeholder="Contoh: 08123456789"
                      className="w-full text-sm px-3 py-2 border border-border-site/30 rounded-md focus:outline-none focus:ring-1 focus:ring-text-secondary focus:border-text-secondary bg-bg-site text-text-site"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-site/70 mb-1">
                    Jenis Industri
                  </label>
                  <select
                    name="industri"
                    value={formData.industri}
                    onChange={handleChange}
                    className="w-full text-sm px-3 py-2 border border-border-site/30 rounded-md focus:outline-none focus:ring-1 focus:ring-text-secondary focus:border-text-secondary bg-bg-site text-text-site"
                  >
                    <option value="Kafe/Coffee Shop">Kafe/Coffee Shop</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Restoran">Restoran</option>
                    <option value="Korporat/Kantor">Korporat/Kantor</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-site/70 mb-1">
                    Pesan / Kebutuhan Kerja Sama{" "}
                    <span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <textarea
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Deskripsikan estimasi volume order, jenis produk, atau detail kustomisasi yang Anda inginkan..."
                    className="w-full text-sm px-3 py-2 border border-border-site/30 rounded-md focus:outline-none focus:ring-1 focus:ring-text-secondary focus:border-text-secondary bg-bg-site text-text-site"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 py-3 bg-btn-primary text-marmara-white font-bold rounded-md transition-all text-xs uppercase tracking-widest hover:bg-btn-primary-hover disabled:bg-zinc-600 disabled:text-zinc-400 active:scale-95 shadow-sm"
                >
                  {loading ? "Sedang Mengirim..." : "Kirim Pengajuan Kemitraan"}
                </button>
              </form>
            )}
          </div>

          {/* 4.2 KORESPONDENSI RESMI */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4">
            <div>
              <h3 className="text-xl font-bold text-text-site mb-2">
                Korespondensi Resmi
              </h3>
              <p className="text-xs text-text-site/60">
                Hubungi kantor pusat administrasi kami langsung untuk kebutuhan
                verifikasi dokumen atau pertemuan luring.
              </p>
            </div>

            <div className="bg-card-site p-5 rounded-xl border border-border-site/20 space-y-4">
              {/* Kontak Email */}
              <div className="flex items-start gap-3">
                <div className="text-base mt-0.5 text-text-secondary">✉</div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-text-site/50 tracking-wider">
                    Email Resmi
                  </h4>
                  <div className="mt-1 flex flex-col text-sm font-semibold text-text-site">
                    <a
                      href="mailto:partnership@marmaracakes.com"
                      className="hover:text-text-secondary transition-all underline decoration-text-secondary/40"
                    >
                      partnership@marmaracakes.com
                    </a>
                    <a
                      href="mailto:b2b@marmaracakes.com"
                      className="hover:text-text-secondary transition-all underline decoration-text-secondary/40"
                    >
                      b2b@marmaracakes.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Kontak Telepon */}
              <div className="flex items-start gap-3">
                <div className="text-base mt-0.5 text-text-secondary">📞</div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-text-site/50 tracking-wider">
                    Hot-Line Kantor Pusat
                  </h4>
                  <p className="text-sm font-semibold text-text-site mt-0.5">
                    +62 81222152255
                  </p>
                </div>
              </div>

              {/* Kontak Alamat */}
              <div className="flex items-start gap-3">
                <div className="text-base mt-0.5 text-text-secondary">📍</div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-text-site/50 tracking-wider">
                    Alamat Kantor & Pabrik Utama
                  </h4>
                  <p className="text-xs text-text-site/80 font-medium mt-1 leading-relaxed">
                    Jl. Komud Supadio Bandung No.16, Husen Sastranegara, Kec.
                    Cicendo, Kota Bandung, Jawa Barat 40174
                  </p>
                </div>
              </div>
            </div>

            {/* Info Tambahan Trust */}
            <div className="p-4 bg-text-secondary/5 rounded-xl border border-text-secondary/10 text-[11px] text-text-site/60 leading-relaxed">
              💡 <strong>Catatan Kemitraan:</strong> Pertemuan tatap muka
              (offline) untuk finalisasi resep khusus maklon atau negosiasi
              budget korporat besar wajib menjadwalkan janji temu minimal 3 hari
              kerja sebelum kunjungan melalui email B2B.
            </div>
          </div>
        </div>
      </section>

      {/* 4.3 FLOATING WIDGET WHATSAPP */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi WhatsApp B2B Marmara"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300 group"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.498 1.452 5.411 1.453 5.45.004 9.884-4.432 9.888-9.886.002-2.643-1.022-5.127-2.883-6.991C17.186 1.864 14.708.84 12.013.84c-5.451 0-9.887 4.434-9.892 9.889-.001 1.97.513 3.894 1.49 5.603L2.641 21.36l5.006-1.314zM17.486 14.4c-.3-.149-1.772-.874-2.047-.975-.276-.101-.476-.149-.676.149-.199.3-.772.976-.947 1.173-.174.197-.35.223-.649.074-.3-.149-1.265-.467-2.41-1.487-.89-.793-1.49-1.773-1.665-2.07-.174-.3-.019-.463.13-.611.135-.133.3-.349.449-.523.149-.174.199-.299.299-.497.1-.198.05-.374-.025-.523-.075-.149-.675-1.628-.925-2.228-.243-.584-.489-.504-.676-.513-.174-.008-.374-.01-.574-.01s-.524.074-.798.374c-.275.3-1.047 1.022-1.047 2.492 0 1.47 1.071 2.893 1.221 3.092.149.198 2.107 3.217 5.104 4.512.713.308 1.27.492 1.704.631.716.227 1.368.195 1.884.118.575-.085 1.771-.724 2.022-1.424.252-.699.252-1.299.175-1.424-.077-.125-.275-.199-.575-.349z" />
        </svg>
        <span className="absolute right-16 bg-zinc-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-zinc-700 shadow-xl pointer-events-none">
          Chat Tim B2B Marmara
        </span>
      </a>
    </div>
  );
}

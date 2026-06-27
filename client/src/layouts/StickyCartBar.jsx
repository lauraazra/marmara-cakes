import { useState } from "react";
import { useCart } from "../layouts/CartContext";

export default function StickyCartBar() {
  const {
    cartItems,
    totalItems,
    totalPrice,
    isCartModalOpen,
    setIsCartModalOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const nomorWhatsApp = "6281234567890";

  if (cartItems.length === 0) return null;

  const handleCheckoutKeranjang = () => {
    let daftarPesanan = `Halo Marmara Cakes, saya mau pesan list keranjang berikut:\n\n`;

    cartItems.forEach((item, idx) => {
      const hargaAktif = item.variant ? item.variant.price : item.basePrice;
      daftarPesanan += `${idx + 1}. *${item.name}*\n`;

      if (item.variant) {
        daftarPesanan += `   - Varian: ${item.variant.type} (${item.variant.size})\n`;
      }

      daftarPesanan +=
        `   - Jumlah: ${item.quantity}x\n` +
        `   - Subtotal: Rp ${(hargaAktif * item.quantity).toLocaleString("id-ID")}\n\n`;
    });

    daftarPesanan +=
      `*TOTAL AKHIR: Rp ${totalPrice.toLocaleString("id-ID")}*\n\n` +
      `Mohon dibantu proses min!`;

    clearCart();
    setIsCartModalOpen(false);

    const url = `https://api.whatsapp.com/send?phone=${nomorWhatsApp}&text=${encodeURIComponent(daftarPesanan)}`;
    window.open(url, "_blank");
  };

  const handleEksekusiReset = () => {
    clearCart();
    setIsConfirmOpen(false);
  };

  return (
    <>
      {/* 📥 FLOATING BAR BAWAH */}
      <div className="fixed bottom-0 left-0 right-0 bg-bg-site/95 backdrop-blur-md border-t border-border-site/20 shadow-xl px-4 py-4 pb-safe z-40 animate-fade-in">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative bg-btn-primary/10 p-2.5 rounded-xl text-btn-primary">
              <span className="text-lg">🛒</span>
              <span className="absolute -top-1.5 -right-1.5 bg-marmara-deep-pink text-marmara-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-text-site/50 uppercase tracking-wide">
                Keranjang Belanja
              </p>
              <p className="text-base font-black text-text-site">
                Rp {totalPrice.toLocaleString("id-ID")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsConfirmOpen(true)}
              title="Reset Semua Pesanan"
              className="bg-marmara-deep-pink/10 hover:bg-marmara-deep-pink text-marmara-deep-pink hover:text-white p-2.5 rounded-xl transition-all active:scale-[0.95] flex items-center justify-center cursor-pointer border border-marmara-deep-pink/20"
            >
              <span className="text-base">🗑️</span>
            </button>

            <button
              type="button"
              onClick={() => setIsCartModalOpen(true)}
              className="bg-marmara-deep-teal dark:bg-marmara-gold text-marmara-white dark:text-marmara-dark-bg font-extrabold px-4 sm:px-5 py-2.5 rounded-xl text-sm transition-all flex items-center gap-2 active:scale-[0.97] cursor-pointer"
            >
              <span>Review Pesanan</span>
              <span className="text-base">📋</span>
            </button>
          </div>
        </div>
      </div>

      {/* MODAL DIALOG PRE-CHECKOUT */}
      {isCartModalOpen && (
        <div className="fixed inset-0 bg-marmara-neutral/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-bg-site border border-border-site/30 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden max-h-[80vh] flex flex-col animate-scale-up">
            <div className="p-4 border-b border-border-site/20 flex justify-between items-center bg-card-site/40">
              <div className="flex items-center gap-2">
                <span className="text-xl">📋</span>
                <h2 className="text-md font-bold text-text-site">
                  Ubah Isi Pilihan Kue
                </h2>
              </div>
              <button
                onClick={() => setIsCartModalOpen(false)}
                className="text-text-site/50 hover:text-text-site text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* List Item Belanja */}
            <div className="p-4 overflow-y-auto flex-1 divide-y divide-border-site/10">
              {cartItems.map((item) => {
                const hargaPerPcs = item.variant
                  ? item.variant.price
                  : item.basePrice;

                return (
                  <div
                    key={item.id}
                    className="py-3 flex justify-between items-center gap-4"
                  >
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-text-site">
                        {item.name}
                      </h4>

                      {item.variant && (
                        <p className="text-xs text-text-site/60 mt-0.5">
                          {item.variant.type} ({item.variant.size})
                        </p>
                      )}

                      <p className="text-xs font-semibold text-btn-secondary-text mt-1">
                        Rp {hargaPerPcs.toLocaleString("id-ID")}
                      </p>
                    </div>

                    {/* Pengubah Kuantitas */}
                    <div className="flex items-center gap-2.5">
                      <div className="flex items-center border border-border-site/30 rounded-lg bg-card-site">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2.5 py-1 text-sm font-bold text-text-site/70 hover:bg-text-site/10 rounded-l-lg cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2 text-center font-bold text-text-site text-xs min-w-4.5">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2.5 py-1 text-sm font-bold text-text-site/70 hover:bg-text-site/10 rounded-r-lg cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-marmara-deep-pink hover:bg-marmara-deep-pink/5 p-2 rounded-lg transition cursor-pointer"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer Modal */}
            <div className="p-4 border-t border-border-site/20 bg-card-site/40 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-text-site/70">
                  Total Pembayaran:
                </span>
                <span className="text-lg font-black text-btn-secondary-text">
                  Rp {totalPrice.toLocaleString("id-ID")}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsCartModalOpen(false)}
                  className="w-full bg-transparent border border-border-site/40 hover:bg-text-site/5 text-text-site font-bold py-2.5 rounded-xl text-xs cursor-pointer"
                >
                  ← Tambah Menu Lain
                </button>
                <button
                  type="button"
                  onClick={handleCheckoutKeranjang}
                  className="w-full bg-marmara-teal text-marmara-white font-extrabold py-2.5 rounded-xl text-xs shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Kirim Ke WA</span>
                  <span>🚀</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL KUSTOM KONFIRMASI RESET KERANJANG */}
      {isConfirmOpen && (
        <div className="fixed inset-0 bg-marmara-neutral/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-bg-site border border-border-site/40 w-full max-w-sm rounded-2xl shadow-2xl p-6 text-center animate-scale-up">
            <div className="w-14 h-14 bg-marmara-deep-pink/10 text-marmara-deep-pink text-2xl rounded-full flex items-center justify-center mx-auto mb-4">
              ⚠️
            </div>
            <h3 className="text-md font-bold text-text-site mb-2">
              Kosongkan Keranjang Belanja?
            </h3>
            <p className="text-xs text-text-site/60 mb-6 leading-relaxed">
              Tindakan ini akan menghapus seluruh daftar pilihan kue yang sudah
              kamu masukkan ke dalam keranjang secara permanen.
            </p>

            {/* Navigasi Tombol Pilihan */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setIsConfirmOpen(false)}
                className="w-full bg-card-site hover:bg-text-site/5 border border-border-site/20 text-text-site text-xs font-bold py-2.5 rounded-xl cursor-pointer transition"
              >
                Batalkan
              </button>
              <button
                type="button"
                onClick={handleEksekusiReset}
                className="w-full bg-marmara-deep-pink hover:bg-marmara-deep-pink/90 text-white text-xs font-extrabold py-2.5 rounded-xl shadow-sm cursor-pointer transition active:scale-[0.98]"
              >
                Ya, Kosongkan!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

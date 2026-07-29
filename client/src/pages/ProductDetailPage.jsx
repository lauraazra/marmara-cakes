import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../layouts/CartContext";
import { useFetchData } from "../hooks/useFetchData";
import { NavLink } from "react-router-dom";

import Section from "../components/layouts/Section";
import Container from "../components/layouts/Container";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useFetchData(`productdetail/${slug}`);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    if (product && product.variants && product.variants.length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedVariant(product.variants[1] || product.variants[0]);
    } else {
      setSelectedVariant(null);
    }
  }, [product]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Memuat detail kue Marmara... 🎂
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-rose-500">
        ❌ Kue tidak ditemukan.
      </div>
    );
  }

  const price = selectedVariant
    ? selectedVariant.price
    : product.basePrice || 0;
  const totalHargaDetail = price * quantity;

  const handleTambahKeKeranjang = () => {
    let variantToSend = null;
    if (product.variants && selectedVariant) {
      variantToSend =
        product.variants.find((v) => v.type === selectedVariant.type) ||
        selectedVariant;
    }

    addToCart(product, variantToSend, quantity);
    setQuantity(1);
  };

  const handlePesanInstan = () => {
    const text = `Halo Marmara Cakes, saya mau pesan: ${product.name} ${selectedVariant ? `(${selectedVariant.type})` : ""} sebanyak ${quantity}x`;
    window.open(
      `https://api.whatsapp.com/send?phone=6281234567890&text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  const slugify = (text) => text?.toString().toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      <Section>
        <Container>
          <div className="flex flex-col gap-12">
            <span className="flex tracking-widest text-sm md:text-base lg:text-lg">
              <NavLink to="/">Home</NavLink>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              <NavLink to="/categoryproduct">Menu</NavLink>

              <NavLink
                to={`/product/${slugify(product.categoryproductId?.name)}`}
              >
                {product.categoryproductId?.name}
              </NavLink>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              <p className="font-bold">{product.name}</p>
            </span>
            <div className="px-4 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-card-site/40 p-8 rounded-2xl">
                <div className="bg-card-site rounded-xl aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info Produk */}
                <div className="flex flex-col justify-between">
                  <span className="text-xs font-bold uppercase text-marmara-white bg-btn-primary px-4 py-1 rounded-full text-center w-fit mb-4">
                    {product.categoryproductId?.name}
                  </span>
                  <h1 className="text-2xl font-extrabold">{product.name}</h1>
                  <p className="text-sm text-text-site/70 mt-3">
                    {product.description}
                  </p>

                  {product.variants?.length > 0 ? (
                    <div className="mt-6">
                      <label className="text-xs font-bold uppercase mb-2 block">
                        Pilih Varian:
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {product.variants.map((v) => (
                          <button
                            key={v.type}
                            onClick={() => setSelectedVariant(v)}
                            className={`p-3 rounded-xl border ${selectedVariant?.type === v.type ? "ring-2 ring-border-site" : "border-border-site/30"}`}
                          >
                            <p className="text-xs font-bold">{v.type}</p>
                            <p className="text-xs font-black">
                              Rp {v.price.toLocaleString()}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="mt-6 text-xl font-black">
                      Rp {product.basePrice?.toLocaleString()}
                    </div>
                  )}

                  {/* Counter */}
                  <div className="mt-6 flex items-center gap-4">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-4 py-2 bg-card-site rounded-lg cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-bold">{quantity}</span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="px-4 py-2 bg-card-site rounded-lg cursor-pointer"
                    >
                      +
                    </button>
                    <div className="ml-auto text-xl font-black">
                      Rp {totalHargaDetail.toLocaleString()}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex flex-col md:grid md:grid-cols-2 gap-3 text-sm text-center">
                    <button
                      onClick={handleTambahKeKeranjang}
                      className="bg-card-site py-3 px-2 rounded-xl font-bold w-full cursor-pointer"
                    >
                      🛒 Keranjang
                    </button>
                    <button
                      onClick={handlePesanInstan}
                      className="bg-btn-primary text-white py-3 px-2 rounded-xl font-bold w-full cursor-pointer"
                    >
                      ⚡ Pesan Instan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./database");
const HeroBanner = require("./models/herobanners");
const CategoryProduct = require("./models/categoryproducts");
const SubCategoryProduct = require("./models/subcategoryproduct");
const Product = require("./models/product");
const BrandValue = require("./models/brandvalue");
const Article = require("./models/article");
const CategoryArticle = require("./models/categoryarticle");
const { GoogleGenAI } = require("@google/genai");
const FAQ = require("./models/FAQ");

const app = express();

connectDB();

app.use(
  cors({
    origin: ["https://marmara-cakes.vercel.app", "http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  }),
);
app.use(express.json());

// HeroBanner
app.get("/api/banner", async (req, res) => {
  try {
    const banners = await HeroBanner.find();
    res.status(200).json(banners);
  } catch (err) {
    res.status(500).json({ error: "Failed to get data: " + err.message });
  }
});

// Brand Values
app.get("/api/brandvalue", async (req, res) => {
  try {
    const brandvalue = await BrandValue.find();
    res.status(200).json(brandvalue);
  } catch (err) {
    res.status(500).json({ error: "Failed to get data: " + err.message });
  }
});

// Category Product
app.get("/api/categoryproduct", async (req, res) => {
  try {
    const categoryproduct = await CategoryProduct.find();
    res.status(200).json(categoryproduct);
  } catch (err) {
    res.status(500).json({ error: "Failed to get data: " + err.message });
  }
});

// Product
app.get("/api/product/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const category = await CategoryProduct.findOne({ slug: slug });

    if (!category) {
      return res.status(404).json({ message: "Kategori tidak ditemukan" });
    }

    const subCategories = await SubCategoryProduct.find({
      categoryProductId: category._id,
    });

    const products = await Product.find({
      categoryproductId: category._id,
    });

    res.json({
      category,
      subCategories,
      products,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

// Product Detail
app.get("/api/productdetail/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const product = await Product.findOne({ slug: slug }).populate(
      "categoryProductId",
    );

    if (!product) {
      return res.status(404).json({ message: "Produk tidak ditemukan" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Category Article
app.get("/api/categoryarticle", async (req, res) => {
  try {
    const categoryarticle = await CategoryArticle.find();
    res.status(200).json(categoryarticle);
  } catch (err) {
    res.status(500).json({ error: "Failed to get data: " + err.message });
  }
});

// Article
app.get("/api/articles", async (req, res) => {
  try {
    const articles = await Article.find({})
      .populate("categoryArticle")
      .sort({ publishedAt: -1 });
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ error: "Failed to get data: " + err.message });
  }
});

// Article Detail
app.get("/api/article/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const article = await Article.findOne({ slug }).populate("categoryArticle");

    if (!article) {
      return res.status(404).json({ error: "Artikel tidak ditemukan, Bre!" });
    }

    res.status(200).json(article);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Gagal ambil detail artikel: " + err.message });
  }
});

// AI FAQ
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// FAQS
app.get("/api/faqs", async (req, res) => {
  try {
    // Mengambil semua data FAQ dari MongoDB
    const faqs = await FAQ.find({});

    // Kirim data ke front-end
    res.status(200).json(faqs);
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    res.status(500).json({
      success: false,
      message: "Gagal mengambil data FAQ dari database",
      error: error.message,
    });
  }
});

// Mara AI
app.post("/api/tanya-ai", async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) {
      return res.json({
        reply:
          "Mohon maaf, Anda belum memasukkan pertanyaan. Silakan ketikkan sesuatu ya.",
      });
    }

    // 1. Ambil data
    const [products, subcategories, categories, catArticles, articles, faqs] =
      await Promise.all([
        Product.find()
          .select("name description basePrice variants subcategoryproductId")
          .lean(),
        SubCategoryProduct.find().lean(),
        CategoryProduct.find().select("name description").lean(),
        CategoryArticle.find().lean(),
        Article.find({ status: "published" })
          .select("title excerpt categoryArticle")
          .lean(),
        FAQ.find().select("question category answer").lean(),
      ]);

    // 2. Olah Kategori Produk Utama
    let infoKategoriProduk = "KATEGORI UTAMA DI MARMARA CAKES:\n";
    categories.forEach((cat, index) => {
      infoKategoriProduk += `${index + 1}. Kategori: ${cat.name || "Kategori"}\n Deskripsi: ${cat.description || ""}\n\n`;
    });

    // 3. Olah Detail Produk Kue
    let infoProdukMarmara = "DAFTAR MENU & DETAIL PRODUK KUE:\n";
    products.forEach((prod, index) => {
      const subIdTarget = prod.subcategoryproductId?.toString() || "";

      const namaSub =
        subcategories.find((s) => {
          const sId = s._id?.toString() || "";
          return sId && subIdTarget && sId === subIdTarget;
        })?.name || "Lainnya";

      infoProdukMarmara += `${index + 1}. Nama Kue: ${prod.name}\n Subkategori: ${namaSub}\n Deskripsi: ${prod.description || ""}\n`;

      if (prod.basePrice) {
        infoProdukMarmara += `   Harga Dasar: Rp ${prod.basePrice.toLocaleString("id-ID")}\n`;
      }

      if (prod.variants && prod.variants.length > 0) {
        infoProdukMarmara += `   Varian Ukuran & Harga:\n`;
        prod.variants.forEach((v) => {
          if (v.price) {
            infoProdukMarmara += `     - Tipe: ${v.type}, Ukuran: ${v.size || "Standar"}, Harga: Rp ${v.price.toLocaleString("id-ID")}\n`;
          }
        });
      }
      infoProdukMarmara += "\n";
    });

    // 4. Olah Artikel
    let infoBlogMarmara = "ARTIKEL MARMARA:\n";
    articles.forEach((art, index) => {
      const catArtIdTarget = art.categoryArticle?.toString() || "";

      const namaKategoriArt =
        catArticles.find((c) => {
          const cId = c._id?.toString() || "";
          return cId && catArtIdTarget && cId === catArtIdTarget;
        })?.name || "Umum";

      infoBlogMarmara += `${index + 1}. Judul: ${art.title}\n Kategori: ${namaKategoriArt}\n Ringkasan: ${art.excerpt || ""}\n\n`;
    });

    // 5. Olah Data FAQ
    let infoFaqMarmara = "PERTANYAAN UMUM (FAQ) & KEBIJAKAN TOKO:\n";
    faqs.forEach((faq, index) => {
      infoFaqMarmara += `${index + 1}. Pertanyaan: ${faq.question}\n Kategori: ${faq.category}\n Jawaban Resmi: ${faq.answer}\n\n`;
    });

    // 6. AI Instructions
    const systemInstruction = `Kamu adalah "Mara AI", asisten digital dan customer care resmi untuk "Marmara Cakes". Karakter kamu ramah, sopan, profesional, namun tetap humble. Sebut dirimu "Mara" dan sapa pelanggan dengan panggilan "Kakak" atau "Happiness Seekers".

Tugas utama kamu adalah menjawab segala pertanyaan pelanggan tentang Marmara Cakes secara akurat berdasarkan data asli toko yang disediakan di bawah ini. JANGAN PERNAH mengarang data, harga, atau kebijakan di luar data ini!

INFORMASI OPERASIONAL TOKO:
- Jam Buka: Setiap hari jam 08.00 pagi sampai 21.00 malam.
      
INFORMASI ALAMAT TOKO:
- Bandung: Jl. Komud Supadio No. 16
- Tasikmalaya: Jl. Dr. Soekardjo No.77
- Garut: Jl. Cimanuk No. 444 A
- Ciamis: Jl. Ir. H. Juanda No.115
- Banjar: Jl. Kapten Jamhur No.15
- Majenang: Jl. Diponegoro No.134

INFORMASI PESANAN ONLINE / ORDER ONLINE:
- VIA GOFOOD, GRABFOOD, DAN SHOPEEFOOD
- Chat WhatsApp Admin Mima: https://web.whatsapp.com/send/?phone=628111803344

${infoKategoriProduk}
${infoProdukMarmara}
${infoBlogMarmara}
${infoFaqMarmara}

ATURAN WAJIB MARA AI:
1. JANGAN PERNAH menggunakan kata gaul, kasar, atau slang seperti "Bre", "Gua", "Lu", "Bro", atau "Cuy".
2. Jika pelanggan bertanya tentang ketahanan kue, status halal, refund, pengiriman, pisau/lilin, baca dan jawab secara eksklusif mengikuti data PERTANYAAN UMUM (FAQ) di atas.
3. Jika pertanyaan di luar konteks atau data tidak ditemukan pada teks di atas, tolak dengan sangat halus: "Mohon maaf, Mara belum berhasil menemukan informasi tersebut saat ini. Ada hal lain yang bisa Mara bantu seputar produk kue Marmara?"`;

    // 7. Pemanggilan Resmi Sesuai Aturan Terbaru SDK dengan format Object murni
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: question }] }],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.2,
      },
    });

    // 8. Response to front-end
    res.json({ reply: response.text });
  } catch (err) {
    console.error("Error Detail dari Mara AI:", err);
    res.status(500).json({
      error:
        "Mohon maaf, terjadi kendala teknis pada sistem Mara AI: " +
        err.message,
    });
  }
});

if (process.env.NODE_ENV !== "production") {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Backend lokal standby di http://localhost:${PORT}`);
  });
}

module.exports = app;

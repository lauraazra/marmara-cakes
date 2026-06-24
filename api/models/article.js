const mongoose = require("mongoose");

// ========================================================
// ARTICLE SCHEMA DEFINITION
// ========================================================
const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Judul artikel wajib diisi"],
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    excerpt: {
      type: String,
      required: [true, "Ringkasan pendek wajib diisi"],
    },
    content: {
      type: String,
      required: [true, "Isi lengkap artikel wajib diisi"],
    },

    categoryArticle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CategoryArticle",
      required: [true, "Kategori wajib dipilih"],
    },
    tags: {
      type: [String],
      default: [],
    },
    image: {
      type: String,
      required: [true, "Gambar utama wajib diupload"],
    },

    readTime: {
      type: Number,
      default: 1,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
    publishedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

// ========================================================
// MODEL EXPORT
// ========================================================
module.exports = mongoose.model("Article", articleSchema);

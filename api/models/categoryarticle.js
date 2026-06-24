const mongoose = require("mongoose");

const categoryArticleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nama kategori wajib diisi"],
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model(
  "CategoryArticle",
  categoryArticleSchema,
  "categoryarticles",
);

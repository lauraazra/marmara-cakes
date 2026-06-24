const mongoose = require("mongoose");

const FAQSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    icon: {
      type: String,
      required: true,
      default: "Cake",
    },
    question: {
      type: String,
      required: true,
      trim: true,
    },
    answer: {
      type: String,
      required: true,
    },
    keywords: [
      {
        type: String,
        trim: true,
      },
    ],
    vectorEmbeddings: {
      type: [Number],
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

FAQSchema.index({ question: "text", answer: "text", keywords: "text" });

module.exports = mongoose.model("FAQ", FAQSchema);

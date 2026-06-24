const mongoose = require("mongoose");

/**
 * Embedded Sub-Schemas
 * Defines internal structures for product variations and optional add-ons
 */
const variantSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String },
    img: { type: String },
  },
  { _id: false },
);

const addOnSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { _id: false },
);

/**
 * Main Product Schema
 * Defines the core structure, relations, and options for products
 */
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  basePrice: { type: Number },
  subcategoryproductId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategoryProduct",
    default: null,
  },
  categoryProductId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categoryProduct",
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
  },
  variants: [variantSchema],
  addOn: [addOnSchema],
  momentIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Moment",
    },
  ],
});

/**
 * Model Export
 * Exports the Product model for database operations
 */
module.exports = mongoose.model("Product", productSchema);

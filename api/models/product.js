const mongoose = require("mongoose");

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

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  img: { type: String },
  basePrice: { type: Number },
  subcategoryproductId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategoryProduct",
    default: null,
  },
  categoryproductId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CategoryProduct",
    required: true,
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

module.exports = mongoose.model("Product", productSchema);

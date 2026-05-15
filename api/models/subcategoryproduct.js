const mongoose = require("mongoose");

const subCategoryProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String },
  categoryProductId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CategoryProduct",
    required: true,
  },
});

module.exports = mongoose.model("SubCategoryProduct", subCategoryProductSchema);

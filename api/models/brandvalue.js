const mongoose = require("mongoose");

const brandValueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String },
  icon: { type: String },
});

module.exports = mongoose.model("BrandValue", brandValueSchema);

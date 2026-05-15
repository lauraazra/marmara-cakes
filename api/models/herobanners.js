const mongoose = require("mongoose");

const heroBannerSchema = new mongoose.Schema({
  img: { type: String, required: true },
});

module.exports = mongoose.model("HeroBanner", heroBannerSchema);

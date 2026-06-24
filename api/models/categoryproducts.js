const mongoose = require("mongoose");

const categoryProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  slug: { type: String, unique: true },
});

// Automatically generates a URL-friendly slug
categoryProductSchema.pre("save", function (next) {
  if (this.isModified("name")) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
  }
  next();
});

module.exports = mongoose.model("CategoryProduct", categoryProductSchema);

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const HeroBanner = require("./models/herobanners");
const CategoryProduct = require("./models/categoryproducts");
const SubCategoryProduct = require("./models/subcategoryproduct");
const Product = require("./models/product");
const BrandValue = require("./models/brandvalue");

const app = express();

connectDB();

app.use(cors());
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

// Route tes
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend & Database Toko Samudra siap!" });
});

module.exports = app;

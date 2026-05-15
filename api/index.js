require("dotenv").config();

const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");

const connectDB = require("../db");

const HeroBanner = require("../models/herobanners");
const CategoryProduct = require("../models/categoryproducts");
const SubCategoryProduct = require("../models/subcategoryproduct");
const Product = require("../models/product");
const BrandValue = require("../models/brandvalue");

const app = express();

// Connect Database
connectDB();

app.use(
  cors({
    origin: ["https://marmara-cakes.vercel.app", "http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  }),
);

app.use(express.json());

// =========================
// Hero Banner
// =========================
app.get("/api/banner", async (req, res) => {
  try {
    const banners = await HeroBanner.find();
    res.status(200).json(banners);
  } catch (err) {
    res.status(500).json({
      error: "Failed to get banner data",
      message: err.message,
    });
  }
});

// =========================
// Brand Value
// =========================
app.get("/api/brandvalue", async (req, res) => {
  try {
    const brandvalue = await BrandValue.find();
    res.status(200).json(brandvalue);
  } catch (err) {
    res.status(500).json({
      error: "Failed to get brand value data",
      message: err.message,
    });
  }
});

// =========================
// Category Product
// =========================
app.get("/api/categoryproduct", async (req, res) => {
  try {
    const categoryproduct = await CategoryProduct.find();
    res.status(200).json(categoryproduct);
  } catch (err) {
    res.status(500).json({
      error: "Failed to get category product data",
      message: err.message,
    });
  }
});

// =========================
// Product by Slug
// =========================
app.get("/api/product/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const category = await CategoryProduct.findOne({ slug });

    if (!category) {
      return res.status(404).json({
        message: "Kategori tidak ditemukan",
      });
    }

    const subCategories = await SubCategoryProduct.find({
      categoryProductId: category._id,
    });

    const products = await Product.find({
      categoryproductId: category._id,
    });

    res.status(200).json({
      category,
      subCategories,
      products,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
});

// =========================
// TEST API
// =========================
app.get("/api/test", async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Backend & Database Marmara Cakes siap!",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// EXPORT SERVERLESS
module.exports = serverless(app);

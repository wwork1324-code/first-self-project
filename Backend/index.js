const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");

    app.listen(process.env.PORT || 3000, () => {
      console.log("Server running at http://localhost:3000");
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });

// Product Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
});

// Product Model
const Product = mongoose.model("Product", productSchema);

// GET: Get all products from MongoDB
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST: Save a product in MongoDB
app.post("/products", async (req, res) => {
  try {
    const { name, price } = req.body;

    const newProduct = await Product.create({
      name,
      price
    });

    res.status(201).json({
      message: "Product saved successfully",
      product: newProduct
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

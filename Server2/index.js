//index.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const cors = require("cors");

const app = express();

// Middleware: parse incoming JSON
app.use(express.json());
app.use(cors());
// Connect to MongoDB
connectDB();

// Routes
app.get('/', (req, res) => {
  res.send('Products API is running');
});
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

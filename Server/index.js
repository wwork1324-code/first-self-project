
const express = require("express");
const app = express();

app.use(express.json());

// List of products
let products = [
    { id: 1, name: "Face Wash", price: 500 },
    { id: 2, name: "Moisturizer", price: 1200 },
    { id: 3, name: "Sunscreen", price: 800 }
];

// GET: Display a message
app.get("/", (req, res) => {
    res.send("Express server is working!");
});

// GET: Display all products
app.get("/products", (req, res) => {
    res.status(200).json(products);
});

// POST: Add a new product
app.post("/products", (req, res) => {
    const { name, price } = req.body;

    if (!name || price === undefined) {
        return res.status(400).json({
            message: "Name and price are required"
        });
    }

    // Create a new product
    const newProduct = {
        id: products.length
            ? Math.max(...products.map(product => product.id)) + 1
            : 1,
        name: name,
        price: price
    };

    // PUSH: Add the new product to the array
    products.push(newProduct);

    // Send response
    res.status(201).json({
        message: "Product added successfully",
        product: newProduct
    });
});

// Start server
app.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});


import React, { useState } from "react";
import "./ProductForm.css";

function ProductForm() {

    const [product, setProduct] = useState({
        id: "",
        name: "",
        price: "",
        category: ""
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...product,
                    id: Number(product.id),
                    price: Number(product.price)
                })
            });

            if (!response.ok) {
                throw new Error("Failed to add product");
            }

            alert("Product added successfully!");

            setProduct({
                id: "",
                name: "",
                price: "",
                category: ""
            });

        } catch (error) {
            console.log(error);
            alert("Something went wrong!");
        }
    };

    return (
        <div className="page-container">

            <div className="form-card">

                <div className="form-header">
                    <h1>Add New Product</h1>
                    <p>Enter your product details below</p>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label>Product ID</label>
                        <input
                            type="number"
                            name="id"
                            placeholder="Enter product ID"
                            value={product.id}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Product Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter product name"
                            value={product.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Price</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Enter product price"
                            value={product.price}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Category</label>
                        <input
                            type="text"
                            name="category"
                            placeholder="Enter product category"
                            value={product.category}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        Add Product
                    </button>

                </form>

            </div>

        </div>
    );
}

export default ProductForm; 
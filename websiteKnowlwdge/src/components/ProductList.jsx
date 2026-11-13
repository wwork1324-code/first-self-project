import React, { useState, useEffect } from "react";
import "./ProductList.css";

function ProductList() {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [editProduct, setEditProduct] = useState(null);

    const API = "http://localhost:5000/api/products";

    // GET PRODUCTS
    const fetchProducts = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();

            setProducts(data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // SEARCH PRODUCTS
    const filteredProducts = products.filter((product) => {

        const value = search.toLowerCase();

        return (
            String(product.id || product._id).toLowerCase().includes(value) ||
            product.name.toLowerCase().includes(value) ||
            product.category.toLowerCase().includes(value)
        );
    });

    // UPDATE PRODUCT
    const handleEdit = (product) => {
        setEditProduct({ ...product });
    };

    const handleChange = (e) => {
        setEditProduct({
            ...editProduct,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${API}/${editProduct._id}`, {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: editProduct.name,
                    price: Number(editProduct.price),
                    category: editProduct.category
                })
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Update failed");
                return;
            }

            alert("Product updated successfully!");

            setEditProduct(null);
            fetchProducts();

        } catch (error) {
            console.log(error);
        }
    };

    // DELETE PRODUCT
    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) return;

        try {
            const response = await fetch(`${API}/${id}`, {
                method: "DELETE"
            });

            if (!response.ok) {
                alert("Delete failed");
                return;
            }

            alert("Product deleted successfully!");

            fetchProducts();

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <div style={{ padding: "30px" }}>

            <h1>Product List</h1>

            {/* SEARCH BAR */}

            <input
                type="text"
                placeholder="Search by ID, name or category..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    padding: "12px",
                    width: "300px",
                    marginBottom: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "6px"
                }}
            />

            {/* PRODUCT TABLE */}

            <table style={{
                width: "100%",
                borderCollapse: "collapse",
                backgroundColor: "white"
            }}>

                <thead>

                    <tr style={{
                        backgroundColor: "#25243f",
                        color: "white"
                    }}>

                        <th style={{ padding: "14px" }}>S.No</th>
                        <th style={{ padding: "14px" }}>Product ID</th>
                        <th style={{ padding: "14px" }}>Name</th>
                        <th style={{ padding: "14px" }}>Price</th>
                        <th style={{ padding: "14px" }}>Category</th>
                        <th style={{ padding: "14px" }}>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {filteredProducts.map((product, index) => (

                        <tr key={product._id} style={{
                            borderBottom: "1px solid #ddd",
                            textAlign: "center"
                        }}>

                            <td style={{ padding: "12px" }}>
                                {index + 1}
                            </td>

                            <td style={{ padding: "12px" }}>
                                {product.id || product._id}
                            </td>

                            <td style={{ padding: "12px" }}>
                                {product.name}
                            </td>

                            <td style={{ padding: "12px" }}>
                                Rs. {product.price}
                            </td>

                            <td style={{ padding: "12px" }}>
                                {product.category}
                            </td>

                            <td style={{ padding: "12px" }}>

                                <button
                                    onClick={() => handleEdit(product)}
                                    style={{
                                        backgroundColor: "#6657ff",
                                        color: "white",
                                        padding: "8px 15px",
                                        border: "none",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        marginRight: "8px"
                                    }}
                                >
                                    Update
                                </button>

                                <button
                                    onClick={() => handleDelete(product._id)}
                                    style={{
                                        backgroundColor: "#e74c3c",
                                        color: "white",
                                        padding: "8px 15px",
                                        border: "none",
                                        borderRadius: "5px",
                                        cursor: "pointer"
                                    }}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

            {filteredProducts.length === 0 && (
                <p>No products found!</p>
            )}

            {/* EDIT FORM */}

            {editProduct && (

                <form onSubmit={handleUpdate} className="edit-form">

                    <h2>Update Product</h2>

                    <input
                        type="text"
                        name="name"
                        value={editProduct.name}
                        onChange={handleChange}
                        placeholder="Product Name"
                    />

                    <input
                        type="number"
                        name="price"
                        value={editProduct.price}
                        onChange={handleChange}
                        placeholder="Price"
                    />

                    <input
                        type="text"
                        name="category"
                        value={editProduct.category}
                        onChange={handleChange}
                        placeholder="Category"
                    />

                    <button type="submit">
                        Save Changes
                    </button>

                    <button
                        type="button"
                        onClick={() => setEditProduct(null)}
                    >
                        Cancel
                    </button>

                </form>

            )}

        </div>
    );
}

export default ProductList;
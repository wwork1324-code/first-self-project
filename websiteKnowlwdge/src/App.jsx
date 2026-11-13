import React, { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("form");

  return (
    <div>
      <nav className="navbar">
        <h2>Product Manager</h2>

        <div className="nav-buttons">
          <button
            className={activePage === "form" ? "active" : ""}
            onClick={() => setActivePage("form")}
          >
            Add Product
          </button>

          <button
            className={activePage === "products" ? "active" : ""}
            onClick={() => setActivePage("products")}
          >
            Product List
          </button>
        </div>
      </nav>

      <main>
        {activePage === "form" && <ProductForm />}
        {activePage === "products" && <ProductList />}
      </main>
    </div>
  );
}

export default App;
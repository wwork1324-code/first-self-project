import React from "react";
import "./Header.css";
import './herostyle.css'


function Header() {
  return (
    <header className="header">

      {/* Logo */}
      <div className="logo">
        Pure Glow<span>.</span>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Shop Button */}
      <div className="header-button">
        <a href="#products">Shop Now</a>
      </div>

    </header>
  );
}

export default Header;
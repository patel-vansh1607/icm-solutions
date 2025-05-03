import React from 'react';
import "../styles/Navbar.css"
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo192.png" alt="GrowWell Logo" className="logo" />
        <span className="brand-name">GrowWell</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#products">Products ▾</a></li>
        <li><a href="#guides">Growing Guides</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-right">
        <FiSearch className="icon" />
        <FiShoppingCart className="icon" />
        <button className="sign-in-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section brand">
          <h2 className="logo">
            <span className="logo-icon">🌱</span> GrowWell
          </h2>
          <p>Premium seeds for beautiful gardens.<br />Nurturing green dreams since 2010.</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        <div className="footer-section shop">
          <h4>Shop</h4>
          <ul>
            <li>Vegetable Seeds</li>
            <li>Flower Seeds</li>
            <li>Herb Seeds</li>
            <li>Fruit Seeds</li>
            <li>Organic Collection</li>
            <li>Seasonal Picks</li>
          </ul>
        </div>

        <div className="footer-section help">
          <h4>Help</h4>
          <ul>
            <li>Your Account</li>
            <li>Orders & Shipping</li>
            <li>Returns Policy</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact</h4>
          <p><i className="fas fa-map-marker-alt"></i> 123 Garden Way, Portland, OR 97218, United States</p>
          <p><i className="fas fa-phone"></i> (555) 123-4567</p>
          <p><i className="fas fa-envelope"></i> hello@growwellseeds.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 GrowWell Seeds. All rights reserved.</p>
        <div>
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Accessibility</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

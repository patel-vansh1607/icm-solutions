
import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-page">
      <h1>About ICM Seeds</h1>
      <p>
        At ICM, we're committed to sustainable agriculture through
        high-quality seeds. Founded in 2008, we empower farmers across Africa
        and beyond to grow better, healthier, and more resilient crops.
      </p>

      <div className="about-sections">
        <div>
          <h2>Our Mission</h2>
          <p>Deliver premium seeds for a greener tomorrow.</p>
        </div>
        <div>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✅ 100% Organic & Non-GMO Seeds</li>
            <li>🌍 Serving 25+ Countries</li>
            <li>📈 Trusted by 100,000+ Farmers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

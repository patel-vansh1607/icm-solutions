// src/pages/Faq.js
import React from "react";
import "../styles/Faq.css";

const Faq = () => {
  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-item">
        <h3>🌱 Where are your seeds sourced from?</h3>
        <p>All seeds are sourced from certified organic farms across Kenya and Uganda.</p>
      </div>

      <div className="faq-item">
        <h3>🚚 Do you ship internationally?</h3>
        <p>Yes, we ship to 20+ countries with reliable agricultural logistics partners.</p>
      </div>

      <div className="faq-item">
        <h3>🌾 Are your seeds non-GMO?</h3>
        <p>Absolutely. We strictly provide non-GMO, naturally bred seed varieties.</p>
      </div>
    </div>
  );
};

export default Faq;

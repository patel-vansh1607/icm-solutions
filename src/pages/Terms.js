// src/pages/Terms.js
import React from "react";
import "../styles/Terms.css";

const Terms = () => {
  return (
    <div className="terms-page">
      <h1>Terms and Conditions</h1>
      <p>Last updated: May 2025</p>

      <ol>
        <li><strong>Acceptance:</strong> By using this website, you agree to the terms.</li>
        <li><strong>Use of Content:</strong> Content is for personal use only.</li>
        <li><strong>Intellectual Property:</strong> All trademarks and copyrights belong to GreenGrow.</li>
        <li><strong>Limitation of Liability:</strong> We are not liable for agricultural losses.</li>
        <li><strong>Changes:</strong> We may update terms at any time without prior notice.</li>
      </ol>
    </div>
  );
};

export default Terms;

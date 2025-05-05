import React from "react";
import "../../styles/SeedStyles.css";

const SeedCard = ({ seed }) => {
  return (
    <div className="seed-card">
      <div className="image-container">
        <img src={seed.image} alt={seed.name} className="seed-image" />
        <div className="tags">
          {seed.isOrganic && <span className="tag organic">Organic</span>}
          {seed.isBestseller && <span className="tag bestseller">Bestseller</span>}
        </div>
      </div>
      <div className="seed-info">
        <button className="add-btn">🛒 Add to Cart</button>
        <h3>{seed.name}</h3>
        <p>${seed.price}</p>
        <p className="seed-count">{seed.seedCount} seeds</p>
      </div>
    </div>
  );
};

export default SeedCard;

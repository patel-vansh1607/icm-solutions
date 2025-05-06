import React from "react";
import "../styles/SeedFeatures.css";

const features = [
  {
    title: "Premium Quality",
    description:
      "Our seeds are carefully selected for their high germination rates and exceptional produce quality.",
    icon: "🌾",
  },
  {
    title: "100% Organic",
    description:
      "All our seeds are grown without synthetic pesticides or fertilizers, ensuring a healthier garden.",
    icon: "🌱",
  },
  {
    title: "Sustainably Sourced",
    description:
      "We partner with eco-conscious growers who use sustainable farming practices to protect our planet.",
    icon: "🌿",
  },
  {
    title: "Seasonal Selection",
    description:
      "Our curated seasonal collections ensure you’re planting the right seeds at the right time.",
    icon: "📅",
  },
  {
    title: "Growth Guarantee",
    description:
      "We stand behind our seeds with a growth guarantee. If they don’t germinate, we’ll replace them.",
    icon: "🛡️",
  },
  {
    title: "Expert Guidance",
    description:
      "Every purchase includes access to our growing guides and expert gardening support.",
    icon: "📝",
  },
];

export default function SeedFeatures() {
  return (
    <section className="seed-features-container">
      <h2>Why Choose Our Seeds?</h2>
      <p className="subtitle">
        Our commitment to quality and sustainability ensures you’ll have a successful
        garden every season.
      </p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

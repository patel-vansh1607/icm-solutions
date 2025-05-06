import React from "react";
import SeedCard from "./SeedCard";
import "../../styles/SeedStyles.css";


const seeds = [
  {
    name: "Heirloom Tomato Mix",
    image: "https://source.unsplash.com/400x300/?tomato",
    price: "4.99",
    seedCount: 250,
    isOrganic: true,
    isBestseller: true,
  },
  {
    name: "Rainbow Swiss Chard",
    image: "https://source.unsplash.com/400x300/?carrot",
    price: "3.49",
    seedCount: 250,
    isOrganic: true,
    isBestseller: false,
  },
  {
    name: "Wildflower Meadow Mix",
    image: "https://source.unsplash.com/400x300/?wildflowers",
    price: "5.99",
    seedCount: 250,
    isOrganic: false,
    isBestseller: false,
  },
  {
    name: "Culinary Herb Collection",
    image: "https://source.unsplash.com/400x300/?herbs",
    price: "12.99",
    seedCount: 250,
    isOrganic: true,
    isBestseller: true,
  },
  {
    name: "Black Beauty Eggplant",
    image: "https://source.unsplash.com/400x300/?eggplant",
    price: "3.99",
    seedCount: 250,
    isOrganic: false,
    isBestseller: false,
  },
  {
    name: "Sunflower Giants",
    image: "https://source.unsplash.com/400x300/?sunflower",
    price: "2.99",
    seedCount: 250,
    isOrganic: true,
    isBestseller: true,
  },
  {
    name: "Purple Basil",
    image: "https://source.unsplash.com/400x300/?basil",
    price: "3.49",
    seedCount: 250,
    isOrganic: true,
    isBestseller: false,
  },
  {
    name: "Alpine Strawberry",
    image: "https://source.unsplash.com/400x300/?strawberry",
    price: "4.99",
    seedCount: 250,
    isOrganic: true,
    isBestseller: true,
  },
];

const SeedGrid = () => {
  return (
    <div className="grid-container">
      {seeds.map((seed, index) => (
        <SeedCard key={index} seed={seed} />
      ))}
    </div>
  );
};

export default SeedGrid;

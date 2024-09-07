import React from "react";
import { ButtonDemo } from "./button";

const BestSelling = () => {
  return (
    <div className="mb-24 mt-24">
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          BEST SELLING PRODUCTS
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
        </div>
      </div>
      
      {/* Bestselling Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Map through product data */}
        {productsData.map((product, index) => (
          <div
            key={index}
            className="card bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl"
          >
            <figure className="px-10 pt-10">
              <img src={product.imageUrl} alt={product.name} className="rounded-xl" />
              <figcaption className="text-center mt-4 font-semibold text-lg">{product.name}</figcaption>
              <p className="text-center text-gray-700">${product.price}</p>
            </figure>
            <div className="card-body items-center text-center">
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between w-full items-center">
                <div className="flex flex-col items-center">
                  <p className="text-xl font-bold text-gray-900">${product.price}</p>
                  <button className="btn btn-primary mt-2 transition-transform transform hover:scale-105 bg-blue-600 text-white py-2 px-4 rounded-lg">
                    Buy Now
                  </button>
                </div>
                <div className="flex items-center">
                  <img
                    src="/pictures/add to cart.webp"
                    alt="Add to Cart"
                    className="w-6 h-6 mr-2"
                  />
                  <ButtonDemo />
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

// Product Data
const productsData = [
  {
    name: "Mango",
    price: 5,
    imageUrl: "/pictures/veg21.jpg",
    description: "If a sweet MANGO, whose MANGO does he choose?",
  },
  {
    name: "Kivi",
    price: 10,
    imageUrl: "/pictures/veg9.jpg",
    description: "Kivi is the most popular fruit from continental west America.",
  },
  {
    name: "Black Tea",
    price: 8,
    imageUrl: "/pictures/black tea.jpg",
    description: "Black Tea is the most popular tea in the world.",
  },
  {
    name: "Milk",
    price: 12,
    imageUrl: "/pictures/milk.png",
    description: "Powdered Milk is the most popular brand from Nestle.",
  },
  {
    name: "Ferrozen",
    price: 15,
    imageUrl: "/pictures/FERRROZEN.jpg",
    description: "Ferrozen items are essential for our health.",
  },
  {
    name: "Strawberry",
    price: 20,
    imageUrl: "/pictures/veg14.jpg",
    description: "The best strawberries, straight from the farm.",
  },
];

export default BestSelling;

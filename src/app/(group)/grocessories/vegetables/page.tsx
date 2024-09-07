"use client"
import React, { useState } from 'react';
import { ButtonDemo } from '@/components/button';
import Image from 'next/image';

const Vegetables = () => {
  const [selected, setSelected] = useState(null); // To manage selected category

  const handleSelect = (itemId) => {
    setSelected(itemId); // Set the selected category
  };

  return (
    <div className="bg-sky-400-border md:bg-origin-padding hover:bg-red-200">
      <section className="text-gray-600 body-font bg-sky-400-border md:bg-origin-padding">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Each product */}
            {vegetablesData.map((item, index) => (
              <div
                key={index}
                className={`lg:w-1/4 md:w-1/2 p-4 w-full transition-transform duration-300 ease-in-out transform ${
                  selected === index ? 'translate-x-2 scale-105 bg-red-500 text-white' : 'hover:translate-x-0.5 hover:bg-red-200'
                }`}
                onClick={() => handleSelect(index)} // Handle click to select item
              >
                <a className="block relative h-48 rounded overflow-hidden group">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    src={item.imageUrl}
                    width={400}
                    height={400}
                  />
                </a>
                <div className={`mt-4 group-hover:text-red-500 transition-colors duration-300 ease-in-out ${selected === index ? 'text-white' : ''}`}>
                  <h2>{item.title}</h2>
                  <p className="mt-1">${item.price}</p>
                  <div>
                    {selected === index && <ButtonDemo />} {/* Show button if selected */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Section if item is selected */}
        {selected !== null && (
          <div className="mt-10 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-center">Proceed to Payment</h2>
            <PaymentForm item={vegetablesData[selected]} />
          </div>
        )}
      </section>
    </div>
  );
};

// Payment Form Component
const PaymentForm = ({ item }) => {
  const handlePayment = (e) => {
    e.preventDefault();
    alert(`Processing payment for ${item.title} - $${item.price}`);
  };

  return (
    <form onSubmit={handlePayment}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input type="text" required className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="John Doe" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Card Number</label>
        <input type="text" required className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="1234 5678 9012 3456" />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
          <input type="text" required className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="MM/YY" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">CVV</label>
          <input type="text" required className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="123" />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Pay ${item.price}
      </button>
    </form>
  );
};

// Dummy data for vegetables
const vegetablesData = [
  {
    title: 'The Tomato',
    price: 16.00,
    imageUrl: '/pictures/vegatables/images (1).jpg',
  },
  {
    title: 'The Apple',
    price: 21.15,
    imageUrl: '/pictures/vegatables/images.jpg',
  },
  {
    title: 'The Kiwi',
    price: 12.00,
    imageUrl: '/pictures/vegatables/veg14jpg.jpg',
  },
  {
    title: 'The Arches',
    price: 18.40,
    imageUrl: '/pictures/vegatables/veg17.jpg',
  },
  {
    title: 'The Strawberry',
    price: 16.00,
    imageUrl: '/pictures/vegatables/veg19.jpg',
  },
  {
    title: 'The Banana',
    price: 21.15,
    imageUrl: '/pictures/vegatables/veg22.jpg',
  },
  {
    title: 'The Cherry',
    price: 12.00,
    imageUrl: '/pictures/vegatables/veg23.jpg',
  },
  {
    title: 'The Avocado',
    price: 18.40,
    imageUrl: '/pictures/vegatables/veg8.jpg',
  },
];

export default Vegetables;

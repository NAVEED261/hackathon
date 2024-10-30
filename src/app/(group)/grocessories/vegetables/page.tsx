'use client';
import React, { useState } from 'react';
import { ButtonDemo } from '@/components/button';
import Image from 'next/image';

// Type definitions for vegetable items
interface VegetableItem {
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}

const Vegetables: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<VegetableItem | null>(null); // Store selected item details

  const handleSelect = (item: VegetableItem) => {
    setSelectedItem(item); // Set the selected item to show in payment form
  };

  return (
    <div className="bg-sky-400 border md:bg-origin-padding hover:bg-red-200">
      <section className="text-gray-600 body-font bg-sky-400 border md:bg-origin-padding">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Each product */}
            {vegetablesData.map((item, index) => (
              <div
                key={index}
                className={`lg:w-1/4 md:w-1/2 p-4 w-full transition-transform duration-300 ease-in-out transform ${
                  selectedItem === item ? 'translate-x-2 scale-105 bg-red-500 text-white' : 'hover:translate-x-0.5 hover:bg-red-200'
                }`}
                onClick={() => handleSelect(item)} // Pass entire item to handleSelect
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
                <div className={`mt-4 group-hover:text-red-500 transition-colors duration-300 ease-in-out ${selectedItem === item ? 'text-white' : ''}`}>
                  <h2>{item.title}</h2>
                  <p className="mt-1">${item.price}</p>
                  <div>
                    {selectedItem === item && <ButtonDemo />} {/* Show button if selected */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Section if item is selected */}
        {selectedItem && (
          <div className="mt-10 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-center">Proceed to Payment</h2>
            <PaymentForm item={selectedItem} />
          </div>
        )}
      </section>
    </div>
  );
};

// Payment Form Component with typed props
interface PaymentFormProps {
  item: VegetableItem;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ item }) => {
  const handlePayment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Processing payment for ${item.title} - $${item.price}`);
  };

  return (
    <form onSubmit={handlePayment}>
      {/* Display product name and description */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
      </div>

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

// Dummy data for vegetables with descriptions
const vegetablesData: VegetableItem[] = [
  {
    title: 'The Okra',
    price: 16.0,
    imageUrl: '/pictures/vegatables/images (1).jpg',
    description: 'Fresh, tender okra pods, perfect for stir-fries, curries, or stews. Known for its rich fiber and vitamin C content.',
  },
  {
    title: 'The Cucumber',
    price: 21.15,
    imageUrl: '/pictures/vegatables/images.jpg',
    description: 'Crisp and refreshing cucumbers, great for salads, smoothies, or as a cooling snack. Packed with hydration and nutrients.',
  },
  {
    title: 'The Green Pea Pod',
    price: 12.0,
    imageUrl: '/pictures/vegatables/veg14jpg.jpg',
    description: 'Sweet and crunchy green pea pods, excellent for adding a burst of flavor and texture to your meals. High in protein and fiber.',
  },
  {
    title: 'The Speckled Pumpkin',
    price: 18.4,
    imageUrl: '/pictures/vegatables/veg17.jpg',
    description: 'A unique speckled pumpkin, perfect for fall decor or hearty pumpkin dishes. Rich in vitamins and antioxidants.',
  },
  {
    title: 'The Broccoli',
    price: 16.0,
    imageUrl: '/pictures/vegatables/veg19.jpg',
    description: 'Fresh broccoli florets, ideal for steaming, roasting, or stir-frying. A powerhouse of nutrients, including vitamin C and fiber.',
  },
  {
    title: 'The Eggplant',
    price: 21.15,
    imageUrl: '/pictures/vegatables/veg22.jpg',
    description: 'Smooth and glossy eggplant, perfect for grilling, roasting, or making classic dishes like eggplant parmesan. Rich in antioxidants and fiber.',
  },
  {
    title: 'The Red Onion',
    price: 12.0,
    imageUrl: '/pictures/vegatables/veg23.jpg',
    description: 'Mildly sweet and tangy red onions, perfect for salads, sandwiches, or pickling. High in antioxidants and adds vibrant color to dishes.',
  },
  {
    title: 'The Orange Pumpkin',
    price: 18.4,
    imageUrl: '/pictures/vegatables/veg8.jpg',
    description: 'Classic orange pumpkin, perfect for carving, baking, or making soups. Loaded with vitamins A and C for a nutritious boost.',
  },
];

export default Vegetables;

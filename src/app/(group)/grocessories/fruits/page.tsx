'use client';
import React, { useState } from 'react';
import { ButtonDemo } from '@/components/button';
import Image from 'next/image';

// Type definition for fruit item
interface FruitItem {
  title: string;
  price: number;
  imageUrl: string;
  description?: string;
}

const Fruits: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<FruitItem | null>(null); // Store selected item details

  const handleSelect = (item: FruitItem) => {
    setSelectedItem(item); // Set the selected item to show in payment form
  };

  return (
    <div className="bg-sky-400 border md:bg-origin-padding hover:bg-red-200">
      <section className="text-gray-600 body-font bg-sky-400 border md:bg-origin-padding">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Map through the fruits data */}
            {fruitsData.map((item, index) => (
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
                    height={300}
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

        {/* Payment section if an item is selected */}
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

// Type definition for PaymentForm props
interface PaymentFormProps {
  item: FruitItem;
}

// Payment Form Component with typed props
const PaymentForm: React.FC<PaymentFormProps> = ({ item }) => {
  const handlePayment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Processing payment for ${item.title} - $${item.price}`);
  };

  return (
    <form onSubmit={handlePayment}>
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
        <p className="text-gray-600 mb-4">{item.description || 'No description available.'}</p>
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

// Dummy data for fruits with description
const fruitsData: FruitItem[] = [
  {
    title: 'The Tomato',
    price: 16.00,
    imageUrl: '/fruits/veg10.jpg',
    description: 'A fresh and juicy tomato directly from our farm.',
  },
  {
    title: 'The Apple',
    price: 21.15,
    imageUrl: '/fruits/veg11.jpg',
    description: 'Crisp and delicious apples for a healthy snack.',
  },
  {
    title: 'The Kiwi',
    price: 12.00,
    imageUrl: '/fruits/veg12.jpg',
    description: 'A sweet and tangy kiwi, perfect for a refreshing taste.',
  },
  {
    title: 'The Arches',
    price: 18.40,
    imageUrl: '/fruits/veg13.jpg',
    description: 'Arches with unique flavors and nutritious value.',
  },
  {
    title: 'The Strawberry',
    price: 16.00,
    imageUrl: '/fruits/veg14.jpg',
    description: 'Fresh strawberries to add a touch of sweetness.',
  },
  {
    title: 'The Banana',
    price: 21.15,
    imageUrl: '/fruits/veg6.jpg',
    description: 'Ripe bananas that are perfect for any time snack.',
  },
  {
    title: 'The Cherry',
    price: 12.00,
    imageUrl: '/fruits/veg7.jpg',
    description: 'Cherries that burst with flavor.',
  },
  {
    title: 'The Avocado',
    price: 18.40,
    imageUrl: '/fruits/veg9.jpg',
    description: 'Smooth and creamy avocados packed with nutrients.',
  },
];

export default Fruits;

'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// Type definitions for beverages data
interface BeverageItem {
  title: string;
  price: number;
  imageUrl: string;
  description: string; // Add description to the type
}

// Button component that triggers showing the payment form
interface ButtonDemoProps {
  onAddToCart: () => void;
}

const ButtonDemo: React.FC<ButtonDemoProps> = ({ onAddToCart }) => {
  return (
    <button
      onClick={onAddToCart}
      className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
    >
      Add to Cart
    </button>
  );
};

const Beverages: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<BeverageItem | null>(null); // Store selected item details

  const handleAddToCart = (item: BeverageItem) => {
    setSelectedItem(item); // Set the selected item to show in payment form
  };

  return (
    <div className="bg-sky-200">
      <section className="text-gray-600 body-font bg-sky-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Each product */}
            {beveragesData.map((item, index) => (
              <div
                key={index}
                className="lg:w-1/4 md:w-1/2 p-4 w-full transition-transform duration-300 ease-in-out transform hover:translate-x-0.5 hover:bg-red-200"
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
                <div className="mt-4 group-hover:text-red-500 transition-colors duration-300 ease-in-out">
                  <h2>{item.title}</h2>
                  <p className="mt-1">${item.price}</p>
                  <div>
                    {/* Show the button for adding to cart, which triggers payment display */}
                    <ButtonDemo onAddToCart={() => handleAddToCart(item)} />
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

// Type definitions for PaymentForm props
interface PaymentFormProps {
  item: BeverageItem;
}

// Payment Form Component with typed props
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

// Dummy data for beverages with type annotations
const beveragesData: BeverageItem[] = [
  {
    title: 'Beverage 1',
    price: 16.0,
    imageUrl: '/beverages/images (5).jpg',
    description: 'Refreshing and delicious, perfect for any time of the day.',
  },
  {
    title: 'Beverage 2',
    price: 21.15,
    imageUrl: '/beverages/images (6).jpg',
    description: 'An energizing drink for your daily boost.',
  },
  {
    title: 'Beverage 3',
    price: 12.0,
    imageUrl: '/beverages/61CxLtEM8nL._AC_UL600_SR600,600_.jpg',
    description: 'A tasty and healthy choice for any meal.',
  },
  {
    title: 'Beverage 4',
    price: 18.4,
    imageUrl: '/beverages/images (10).jpg',
    description: 'The perfect balance of flavor and refreshment.',
  },
  // Add more items as needed
];

export default Beverages;

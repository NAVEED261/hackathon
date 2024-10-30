'use client';

import React from 'react';

// Main About Page Component
const AboutPage: React.FC = () => {
  return (
    <div
      className="min-h-screen p-10 bg-cover bg-center flex flex-col items-center"
      style={{ backgroundImage: "url('/pictures/for about.jpg')" }} // Correct path for the background image
    >
      {/* Semi-transparent overlay for readability */}
      <div className="bg-black bg-opacity-30 w-full h-full absolute top-0 left-0 z-0"></div>

      <div className="relative z-10 w-full max-w-5xl">
        {/* Main Title */}
        <h1 className="text-5xl text-center text-gray-800 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text font-bold mb-12">
          FRESH GROCESSORIES
        </h1>

        {/* Content Section */}
        <div className="grid gap-12 mx-auto">
          <ContentCard
            title="Fresh and Important Fruits"
            description="At Fatima Zehra Online Store, we pride ourselves on offering the freshest fruit available. Our selection is handpicked daily to ensure that you receive only the best produce."
          />
          <ContentCard
            title="Fresh Vegetables"
            description="Our extensive range includes everything from crisp lettuce and spinach to vibrant bell peppers and tomatoes, carefully selected to meet high standards for quality and taste."
          />
          <ContentCard
            title="Frozen Foods"
            description="Perfect for busy lifestyles, our frozen foods retain their nutritional value and flavor, providing you with a quick and easy meal solution."
          />
        </div>

        {/* Payment Section */}
        <div className="mt-16 p-8 bg-white shadow-lg rounded-lg max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Make a Payment</h2>
          <PaymentForm />
        </div>
      </div>
    </div>
  );
};

// Payment Form Component
const PaymentForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Payment Submitted (This is a placeholder).');
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Card Number Field */}
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
            placeholder="1234 5678 9123 4567"
            required
          />
        </div>

        {/* Expiry Date and CVV */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
              placeholder="MM/YY"
              required
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
            <input
              type="text"
              id="cvv"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
              placeholder="123"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 rounded-md hover:bg-gradient-to-l hover:from-green-500 hover:to-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
        >
          Submit Payment
        </button>
      </div>
    </form>
  );
};

// ContentCard Component
const ContentCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out relative">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex justify-center absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-6">
        <IconInfo icon="👁️" text="1.2K" />
        <IconInfo icon="💬" text="6" />
      </div>
    </div>
  );
};

// IconInfo Component
const IconInfo: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <div className="flex items-center text-gray-500 space-x-2">
    <span>{icon}</span>
    <span>{text}</span>
  </div>
);

export default AboutPage;

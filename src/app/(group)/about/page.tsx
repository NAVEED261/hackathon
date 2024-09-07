'use client'
import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-sky-200 p-5">
      {/* Main Title */}
      <h1 className="text-5xl text-center text-sky-500 bg-gray-700 p-12 font-bold underline decoration-wavy hover:bg-red-300 hover:text-white transition-all duration-300">
        FRESH GROCESSORIES
      </h1>

      {/* Content Section */}
      <div className="mt-10 px-5 space-y-10">
        <ContentCard
          title="FRESH AND IMPORTANT FRUITS"
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
      <div className="mt-16 p-5 bg-white shadow-lg rounded-lg max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Make a Payment</h2>
        <PaymentForm />
      </div>
    </div>
  );
};

// Payment Form Component
const PaymentForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment Submitted (This is a placeholder).');
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4">
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
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
        >
          Submit Payment
        </button>
      </div>
    </form>
  );
};

// Content Card Component
const ContentCard = ({ title, description }) => {
  return (
    <div className="bg-gray-100 text-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out relative">
      <h2 className="text-2xl font-semibold mb-4 underline decoration-dotted">{title}</h2>
      <p className="italic mb-6">{description}</p>
      {/* Icons for interactions */}
      <div className="flex justify-center absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-6">
        <IconInfo icon="👁️" text="1.2K" />
        <IconInfo icon="💬" text="6" />
      </div>
    </div>
  );
};

// Icon Info Component
const IconInfo = ({ icon, text }) => (
  <div className="flex items-center text-gray-500 space-x-2">
    <span>{icon}</span>
    <span>{text}</span>
  </div>
);

export default AboutPage;

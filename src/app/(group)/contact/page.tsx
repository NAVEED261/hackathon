'use client';

import Image from "next/image";
import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle the modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/pictures/contact b.g.png')" }} // Corrected path for the background image
    >
      {/* Overlay for better text visibility */}
      <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 z-0"></div>

      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Header Section */}
        <header className="w-full text-center p-8 bg-gradient-to-r from-pink-300 to-blue-400 text-white shadow-lg rounded-b-xl">
          <Image
            src="/pictures/fatima zehra logo.jpg"
            alt="Fatima Zehra Online Store"
            width={100}
            height={100}
            className="mx-auto mb-4 rounded-full border-4 border-white shadow-md"
          />
          <h1 className="text-5xl font-bold italic">Fatima Zehra Online Store</h1>
          <p className="text-lg font-light mt-2">We are here to assist you!</p>
        </header>

        {/* Contact Form Section */}
        <section className="bg-white shadow-xl rounded-lg p-10 max-w-lg w-full mt-10 mx-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-700">Get In Touch</h2>
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john@example.com"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Type your message here..."
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-lg shadow-lg hover:from-green-500 hover:to-blue-500 transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>

          {/* Shop Now Button */}
          <button
            onClick={toggleModal}
            className="w-full mt-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-105"
          >
            Shop Now
          </button>
        </section>

        {/* Payment Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
              <h2 className="text-2xl font-semibold mb-6 text-center">Proceed to Payment</h2>
              <PaymentForm />
              <button
                onClick={toggleModal}
                className="w-full mt-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Social Media Section */}
        <footer className="text-center mt-12 text-white space-y-4">
          <p className="text-lg mb-2">Connect with us on Social Media</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-200 hover:text-white transition duration-300 transform hover:scale-110">Facebook</a>
            <a href="#" className="text-gray-200 hover:text-white transition duration-300 transform hover:scale-110">Twitter</a>
            <a href="#" className="text-gray-200 hover:text-white transition duration-300 transform hover:scale-110">Instagram</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

// Payment Form Component
const PaymentForm: React.FC = () => {
  const handlePayment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Payment Submitted!');
  };

  return (
    <form onSubmit={handlePayment} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700">Full Name</label>
        <input type="text" required className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="John Doe" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700">Card Number</label>
        <input type="text" required className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="1234 5678 9012 3456" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700">Expiry Date</label>
          <input type="text" required className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="MM/YY" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">CVV</label>
          <input type="text" required className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="123" />
        </div>
      </div>
      <button type="submit" className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
        Submit Payment
      </button>
    </form>
  );
};

export default ContactPage;

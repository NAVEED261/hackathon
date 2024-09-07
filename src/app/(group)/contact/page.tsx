'use client';

import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {/* Header Section */}
      <header className="w-full text-center p-8 bg-gradient-to-r from-pink-300 to-blue-400 text-white shadow-lg">
        <Image
          src="/pictures/fatima zehra logo.jpg"
          alt="Fatima Zehra Online Store"
          width={100}
          height={100}
          className="mx-auto mb-4 rounded-full"
        />
        <h1 className="text-7xl font-bold italic">Fatima Zehra Online Store</h1>
        <p className="text-xl font-light mt-4">We are here to help you!</p>
      </header>

      {/* Contact Form Section */}
      <section className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full mt-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Get In Touch</h2>
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="john@example.com"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Type your message here..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Social Media Section */}
      <footer className="text-center mt-10 text-white">
        <p className="text-lg mb-4">Connect with us on Social Media</p>
        <div className="space-x-4">
          <a href="#" className="text-gray-200 hover:text-white transition">Facebook</a>
          <a href="#" className="text-gray-200 hover:text-white transition">Twitter</a>
          <a href="#" className="text-gray-200 hover:text-white transition">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;

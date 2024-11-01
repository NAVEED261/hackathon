'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const ButtonDemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:from-amber-700 hover:to-yellow-600 focus:ring-4 focus:ring-amber-300"
      >
        Add to Cart
      </button>
      <div className="mt-2 text-sm text-gray-700">
        <span className="inline-block mx-1">{count}</span>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 p-4 shadow-2xl rounded-full w-[95%] mx-auto mt-4 z-50 relative">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Image
              src="/pictures/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full object-cover border border-gray-300 shadow-md"
            />
            <span className="text-sky-800 text-xl md:text-3xl font-serif italic font-bold tracking-wider">
              Fatima Zehra Store
            </span>
          </div>

          <nav className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 z-50 relative">
            <Link href="/" className="bg-amber-200 border border-amber-300 shadow-md px-3 py-1 md:px-4 md:py-2 rounded-md text-amber-800 hover:bg-amber-300 transition-all duration-300 ease-in-out">
              Home
            </Link>
            <Link href="/about" className="bg-green-200 border border-green-300 shadow-md px-3 py-1 md:px-4 md:py-2 rounded-md text-green-800 hover:bg-green-300 transition-all duration-300 ease-in-out">
              About
            </Link>
            <Link href="/contact" className="bg-blue-200 border border-blue-300 shadow-md px-3 py-1 md:px-4 md:py-2 rounded-md text-blue-800 hover:bg-blue-300 transition-all duration-300 ease-in-out">
              Contact
            </Link>

            <div className="relative group">
              <span className="bg-purple-200 border border-purple-300 shadow-md px-3 py-1 md:px-4 md:py-2 rounded-md text-purple-800 cursor-pointer hover:bg-purple-300 transition-all duration-300 ease-in-out">
                Grocessories
              </span>
              <ul className="absolute hidden group-hover:block bg-purple-100 shadow-lg rounded-lg mt-2 p-4 w-40 z-40 border border-purple-300 transition-all duration-300 ease-in-out">
                <li className="p-2 hover:bg-purple-200 rounded-lg">
                  <Link href="/grocessories/fruits" className="block text-purple-900 hover:text-gray-900">Fruits</Link>
                </li>
                <li className="p-2 hover:bg-purple-200 rounded-lg">
                  <Link href="/grocessories/vegetables" className="block text-purple-900 hover:text-gray-900">Vegetables</Link>
                </li>
                <li className="p-2 hover:bg-purple-200 rounded-lg">
                  <Link href="/grocessories/beverages" className="block text-purple-900 hover:text-gray-900">Beverages</Link>
                </li>
                <li className="p-2 hover:bg-purple-200 rounded-lg">
                  <Link href="/grocessories/frozen" className="block text-purple-900 hover:text-gray-900">Frozen</Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="flex items-center space-x-2 mt-4 md:mt-0 z-50">
            <Image
              src="/pictures/add to cart.webp"
              alt="Add to Cart"
              width={25}
              height={25}
              className="opacity-80"
            />
            <ButtonDemo />
          </div>
        </div>
      </header>

      <main className="mt-16 p-6">
        <section>
          <h1 className="text-4xl font-bold text-sky-800">Welcome to Fatima Zehra Online Store</h1>
          <p className="mt-4 text-gray-600">
            Indulge in the freshness of nature with our handpicked selection of organic fruits & vegetables.
          </p>
          <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition-all duration-300 ease-in-out">
            Shop Now
          </button>
        </section>
      </main>
    </>
  );
};

export default Header;

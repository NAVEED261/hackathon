'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

export const ButtonDemo = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const handleClick = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
      >
        Add to Cart
      </button>
      <div className="mt-2">
        <span className="inline-block mx-1">{count}</span>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      {/* Sticky Header */}
      <header className="bg-gradient-to-r from-red-100 via-red-200 to-red-100 text-gray-700 body-font p-5 shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo and Title */}
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/pictures/fatima zehra logo.jpg"
              alt="Logo"
              width={70}
              height={70}
              className="rounded-full"
            />
            <span className="text-sky-400 ml-3 mr-5 text-2xl font-bold italic hover:bg-gray-600 ">
              Fatima Zehra Online Store
            </span>
          </div>

          {/* Navigation */}
          <nav className="font-semibold text-gray-600 md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <ul className="flex justify-center items-center space-x-8 text-gray-600 font-semibold">
              <li>
                <Link href="/">
                  <span className="mr-5 hover:text-gray-900 cursor-pointer transition-colors duration-300 ease-in-out">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="mr-5 hover:text-gray-900 cursor-pointer transition-colors duration-300 ease-in-out">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="mr-5 hover:text-gray-900 cursor-pointer transition-colors duration-300 ease-in-out">
                    Contact
                  </span>
                </Link>
              </li>

              {/* Dropdown for Grocessories */}
              <li className="relative group">
                <span className="mr-5 cursor-pointer transition-colors duration-300 ease-in-out">
                  Grocessories
                </span>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 z-10 group-hover:flex flex-col space-y-2 transition-all duration-300 ease-in-out">
                  <li className="p-2 hover:bg-gray-100 rounded-t-lg">
                    <Link href="/grocessories/fruits">
                      <span className="text-sky-900 hover:text-gray-900 cursor-pointer">
                        Fruits
                      </span>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <Link href="/grocessories/vegetables">
                      <span className="text-gray-600 hover:text-gray-900 cursor-pointer">
                        Vegetables
                      </span>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <Link href="/grocessories/beverages">
                      <span className="text-gray-600 hover:text-gray-900 cursor-pointer">
                        Beverages
                      </span>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100 rounded-b-lg">
                    <Link href="/grocessories/frozen">
                      <span className="text-gray-600 hover:text-gray-900 cursor-pointer">
                        Frozen
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* Add to Cart Button */}
          <div className="flex items-center">
            <Image
              src="/pictures/add to cart.webp"
              alt="Add to Cart"
              width={24}
              height={24}
              className="mr-2"
            />
            <div className="rounded-lg hover:bg-red-400 transition-transform duration-300 ease-in-out">
              <ButtonDemo />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

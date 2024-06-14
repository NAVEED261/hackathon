"use client"
import Image from "next/image";
import Link from "next/link";
// import { ButtonDemo } from "./button";
import { useState, useEffect, useRef } from "react";

export const ButtonDemo = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
        className="bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-700"
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
      <header className="bg-gradient-to-r from-red-100 via-red-200 to-red-100 text-gray-700 body-font p-5 hover:from-pink-300 hover:to-pink-300 transition-all duration-300 ease-in-out shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/pictures/fatima zehra logo.jpg"
              alt="Logo"
              width={70}
              height={70}
              className="rounded-full"
            />

            <span className=" text-sky-400 ml-3 mr-5 text-2xl font-bold italic hover:bg-gray-600 ">
              Fatima Zehra Online Shopping Store
            </span>
          </div>
          <nav className=" font-semibold text-gray-600 md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hover:bg-sky-400">
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
              <li className="relative group">
                <span className="mr-5 cursor-pointer transition-colors duration-300 ease-in-out">
                  Grocessories
                </span>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2">
                  <li className="p-2 hover:bg-gray-100 rounded-t-lg">
                    <Link href="/grocessories/fruits">
                      <span className="text-sky-900 hover:text-gray-900 cursor-pointer transition-colors duration-300 ease-in-out">
                        Fruits
                      </span>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <Link href="/grocessories/vegetables">
                      <span className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-300 ease-in-out">
                        Vegetables
                      </span>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <Link href="/grocessories/beverages">
                      <span className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-300 ease-in-out">
                        Beverages
                      </span>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100 rounded-b-lg">
                    <Link href="/grocessories/frozen">
                      <span className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-300 ease-in-out">
                        Frozen
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <img
                  src="/pictures/add to cart.webp"
                  alt="Add to Cart"
                  className="w-6 h-6 mr-2"
                />

          <div className="rounded-lg hover:bg-red-400">
          
            <ButtonDemo></ButtonDemo>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

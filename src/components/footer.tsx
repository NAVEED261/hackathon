import Link from "next/link";
import React from "react";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-sky-400 hover:bg-red-200 font-serif font-semibold italic">
        <div className="container px-5 py-24 mx-auto hover:bg-red-200 font-serif font-semibold italic">
          <div className="flex flex-wrap md:text-left text-center order-first hover:bg-red-200 font-serif font-semibold italic">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 hover:bg-red-200 font-serif font-semibold italic">
              <h2 className="title-font font-medium text-red-300tracking-widest text-sm mb-3 hover:bg-sky-200 font-serif font-semibold italic text-4xl">
                COMPANY
              </h2>
              <nav className="list-none mb-10 hover:bg-red-200 font-serif font-semibold italic">
                <li></li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-gray-800 hover:bg-pink-400"
                    href={"#"}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-gray-800 hover:bg-pink-400"
                    href={"#"}
                  >
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-gray-800 hover:bg-pink-400"
                    href={"#"}
                  >
                    CONTACT US
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className=" text-4xl title-font font-medium text-red-300tracking-widest text-sm mb-3 hover:bg-pink-400 hover:bg-sky-200 font-serif font-semibold italic">
                SERVICES
              </h2>
              <nav className="list-none mb-10 hover:bg-pink-400">
                <li>
                  <Link
                    className="text-gray-600 hover:text-gray-800 hover:bg-pink-400"
                    href={"#"}
                  >
                    BRANDING
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-gray-800 hover:bg-pink-400"
                    href={"#"}
                  >
                    DESIGN
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-gray-800"
                    href={"#"}
                  >
                    MARKETING
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-gray-800"
                    href={"#"}
                  >
                    ADVERTISEMENT
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className=" text-4xl title-font font-medium text-red-300tracking-widest text-sm mb-3 hover:bg-sky-200 font-serif font-semibold italic">
                LEGAL
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    className="text-gray-600 hover:text-gray-800 hover:bg-pink-400"
                    href={"#"}
                  >
                    TERM AND CONDITON
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-gray-800"
                    href={"#"}
                  >
                    PRIVICY POLICY
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-600 hover:text-gray-800 hover:bg-pink-400"
                    href={"#"}
                  >
                    COOKIES POLICY
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-red-300tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="leading-7 text-sm text-gray-600 hover:bg-pink-400 font-serif font-semibold italic"
                  >
                    YOUR EMAIL HERE
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  EMAIL
                </button>
              </div>
              <p className="text-blue-300 text-sm mt-2 md:text-left text-center font-serif font-semibold italic">
                PLEASE PROVIDE YOUR EMAIL
                <br className="lg:block hidden " />
                TO GET NOTIFYING FOR EXCITING PROMS
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col font-serif font-semibold italic">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-pink-300 font-serif font-semibold italic">
              <img
                src="/pictures/fatima zehra logo.jpg" // Adjust the path according to your file structure
                alt="Logo"
                className="h-20 "
              />
              <span className="ml-3 text-xl">SHOPPING CART</span>
            </a>
            <p className="text-sm text-blue-300 sm:ml-6 sm:mt-0 mt-4 font-serif font-semibold italic hover:bg-sky-200 font-serif font-semibold italic">
              © 2024 FATIMA ZEHRA —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @ONLINE SHOPPING STORE
                
              </a>
              
            </p>
            <a className="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
          </div>
          
        </div>
        
      </footer>
    </div>
  );
};

export default Footer;

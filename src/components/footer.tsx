import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-sky-400 hover:bg-red-200 font-serif font-semibold italic">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            {/* Company Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 text-2xl mb-3">COMPANY</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href="/">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href="/about">
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href="/contact">
                    CONTACT US
                  </Link>
                </li>
              </nav>
            </div>

            {/* Services Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 text-2xl mb-3">SERVICES</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href="#">
                    BRANDING
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href="#">
                    DESIGN
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href="#">
                    MARKETING
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href="#">
                    ADVERTISEMENT
                  </Link>
                </li>
              </nav>
            </div>

            {/* Legal Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 text-2xl mb-3">LEGAL</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href="#">
                    TERM AND CONDITION
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href="#">
                    PRIVACY POLICY
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-800" href="#">
                    COOKIES POLICY
                  </Link>
                </li>
              </nav>
            </div>

            {/* Subscribe Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 text-2xl mb-3">SUBSCRIBE</h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="leading-7 text-sm text-gray-600"
                  >
                    YOUR EMAIL
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Subscribe
                </button>
              </div>
              <p className="text-blue-300 text-sm mt-2 md:text-left text-center">
                Subscribe to our newsletter to stay updated on offers and promotions.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img
                src="/pictures/fatima zehra logo.jpg"
                alt="Logo"
                className="h-10"
              />
              <span className="ml-3 text-xl">SHOPPING CART</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2024 Fatima Zehra —
              <Link href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" target="_blank">
                @Online Shopping Store
              </Link>
            </p>
            <div className="flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="ml-3 text-gray-500 hover:text-blue-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="ml-3 text-gray-500 hover:text-pink-500">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="ml-3 text-gray-500 hover:text-red-600">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

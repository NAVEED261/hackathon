"use client";
import Image from 'next/image';
import React from 'react';
import { FaShoppingBasket } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative hero min-h-[80vh] custom-img">
      <style jsx>{`
        /* General styles */
        .hero-content {
          margin-left: 4rem;
          margin-right: 4rem;
          animation: fadeIn 1.5s ease-in-out;
        }

        .btn {
          transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
        }

        .btn:hover {
          background-color: #4CAF50;
          transform: scale(1.1); /* Slight scaling on hover */
        }

        .hero-text {
          color: #fff;
          font-size: 1.2rem;
        }

        /* Animations */
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive styles */
        @media screen and (max-width: 768px) {
          .hero-content {
            margin: 0 1rem; /* Adjust margin for smaller screens */
            text-align: center;
          }

          .hero-text {
            font-size: 1rem;
          }

          h1 {
            font-size: 3rem;
          }
        }
      `}</style>

      <Image
        src="/pictures/vegefoods-1.jpg"
        alt="Ecommerce"
        layout="fill"
        objectFit="cover"
        priority={true}
        className="absolute z-0"
      />
      <div className="hero-overlay bg-black bg-opacity-50 absolute inset-0 z-10 mb-5"></div>

      <div className="hero-content text-center text-neutral-content relative z-20 mb-5">
        <div className="max-w-md mb-5">
          <h1 className="mb-5 text-5xl font-bold text-white animate-fadeIn">ASSALAMU-ALYKUM</h1>
          <p className="hero-text mb-5">
            Indulge in the freshness of nature with our handpicked selection of organic vegetables. Sourced directly from local farms, our vegetables are grown with care and dedication to bring you the highest quality produce.
          </p>
          <button className="btn btn-primary text-white px-6 py-3 rounded-lg bg-green-500 flex items-center justify-center">
            SHOP NOW <FaShoppingBasket className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

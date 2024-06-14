"use client"
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
        }

        .btn {
          transition: background-color 0.3s ease-in-out;
        }

        .btn:hover {
          background-color: #4CAF50;
        }

        .btn-text {
          font-weight: bold;
          color: white;
        }

        .btn-font {
          font-family: Arial, sans-serif;
        }

        .hero-text {
          color: #333;
          font-size: 1.2rem;
        }

        /* Responsive styles */
        @media screen and (max-width: 768px) {
          .hero-content {
            margin: 0 1rem; /* Adjust margin for smaller screens */
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
      <div className="hero-overlay bg-opacity-60 absolute inset-0 z-10 mb-5"></div>
      <div className="hero-content text-center text-neutral-content relative z-20 mb-5">
        <div className="max-w-md mb-5">
          { <h1 className="mb-5 text-5xl font-bold">ASSALAMU-ALYKUM</h1> }
          <p className="hero-text mb-5">
            Indulge in the freshness of nature with our handpicked selection of organic vegetables. Sourced directly from local farms, our vegetables are grown with care and dedication to bring you the highest quality produce. Packed with nutrients and bursting with flavor, each vegetable is a testament to our commitment to healthy living and sustainable farming practices.
          </p>
          <button className="btn btn-primary">SHOP NOW <FaShoppingBasket /></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

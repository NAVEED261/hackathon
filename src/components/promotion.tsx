import Image from 'next/image';
import React from 'react';
import { ButtonDemo } from './button';

const Promotion = () => {
  return (
    <div className='mb-24 mt-24'>
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          OUR PROMOTIONS
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
        </div>
      </div>

      {/* Promotion Section */}
      <div className="flex justify-center">
        <div className="relative w-4/5 h-[25rem] group">
          <Image
            src="/pictures/vegitable 1.jpg"
            alt="Promotion"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg group-hover:opacity-90 transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4 rounded-lg">
            <h1 className="text-5xl font-bold text-center mb-4 animate-fadeIn">GET UP TO 40% OFF</h1>
            <p className="py-6 text-center text-lg">For the launch of our new branch, get a discount and a chance to win exciting gifts!</p>
            <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
              <ButtonDemo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotion;

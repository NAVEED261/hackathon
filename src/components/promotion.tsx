import Image from 'next/image';
import React from 'react';

import { ButtonDemo } from './button';

const Promotion = () => {
  return (
   
    <div className='mb-[100px] mt-[100px]'>
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          OUR Promotions
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative w-4/5 h-[25rem]">
          <Image
            src="/pictures/vegitable 1.jpg"
            alt="Promotion"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4 rounded-lg">
            <h1 className="text-5xl font-bold text-center">GET UP TO 40% OFF</h1>
            <p className="py-6 text-center">FOR STARTUP NEW OUR BRANCHE U CAN GET DISCOUNT AND ALSO WIN LOTS OF GIFT</p>
            <ButtonDemo/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotion;

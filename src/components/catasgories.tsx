import Image from 'next/image';
import React from 'react';

const Categories = () => {
  return (
    <div className='mb-[100px] mt-[100px]'>
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          OUR Categories
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
        </div>
      </div>
      {/* categories  */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto relative'>
          <div className="relative group">
            <Image 
              src="/pictures/fruits-and-vegetables_650x366_41486465566.webp"
              alt="Description of the first image"
              width={500}
              height={500}
              className="rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-5xs font-semibold">Vegetables AND Fruits</span>
            </div>
          </div>
        </div>
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto relative'>
          <div className="relative group">
            <Image 
              src="/pictures/FERRROZEN.jpg"
              alt="Description of the second image"
              width={500}
              height={500}
              className="rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-5xs font-semibold">FEROXEN Foods</span>
            </div>
          </div>
        </div>
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto relative'>
          <div className="relative group">
            <Image 
              src="/pictures/BEVERAGES.jpg"
              alt="Description of the third image"
              width={500}
              height={500}
              className="rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-5xs font-semibold">Beverages</span>
            </div>
          </div>
        </div>
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto relative'>
          <div className="relative group">
            <Image 
              src="/pictures/GROCERRIES.jpg"
              alt="Description of the fourth image"
              width={500}
              height={500}
              className="rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-5xs font-semibold">Groceries</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;

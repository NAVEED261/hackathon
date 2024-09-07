import Image from 'next/image';
import React from 'react';

const Categories = () => {
  return (
    <div className='mb-24 mt-24'>
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          OUR CATEGORIES
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
        </div>
      </div>

      {/* Categories Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {/* First Category */}
        <div className='overflow-hidden relative group'>
          <Image 
            src="/pictures/fruits-and-vegetables_650x366_41486465566.webp"
            alt="Vegetables and Fruits"
            width={500}
            height={500}
            className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-xl font-semibold">Vegetables & Fruits</span>
          </div>
        </div>

        {/* Second Category */}
        <div className='overflow-hidden relative group'>
          <Image 
            src="/pictures/FERRROZEN.jpg"
            alt="Ferrozen Foods"
            width={500}
            height={500}
            className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-xl font-semibold">Frozen Foods</span>
          </div>
        </div>

        {/* Third Category */}
        <div className='overflow-hidden relative group'>
          <Image 
            src="/pictures/BEVERAGES.jpg"
            alt="Beverages"
            width={500}
            height={500}
            className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-xl font-semibold">Beverages</span>
          </div>
        </div>

        {/* Fourth Category */}
        <div className='overflow-hidden relative group'>
          <Image 
            src="/pictures/GROCERRIES.jpg"
            alt="Groceries"
            width={500}
            height={500}
            className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-xl font-semibold">Groceries</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;

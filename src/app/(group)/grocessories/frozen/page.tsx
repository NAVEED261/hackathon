import { ButtonDemo } from '@/components/button'
import Image from 'next/image'
import React from 'react'

const Ferozen = () => {
  return (
    <div className='bg-sky-400'>
      <section className="text-gray-600 body-font bg-red-400">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-red-200 transition-all duration-300 ease-in-out">
              <a className="block relative h-48 rounded overflow-hidden group">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  src="/ferozen/download (1).jpg"
                />
              </a>
              <div className="mt-4 group-hover:text-red-500 transition-colors duration-300 ease-in-out">
                
                <p className="mt-1">$16.00</p>
                <div><ButtonDemo></ButtonDemo></div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-sky-500 transition-all duration-300 ease-in-out">
              <a className="block relative h-48 rounded overflow-hidden group">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  src="/ferozen/download (2).jpg"
                  width={400}
                  height={400}
                />
              </a>
              <div className="mt-4 group-hover:text-sky-500 transition-colors duration-300 ease-in-out">
               
                <p className="mt-1">$21.15</p>
                <div><ButtonDemo></ButtonDemo></div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-sky-100 transition-all duration-300 ease-in-out">
              <a className="block relative h-48 rounded overflow-hidden group">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  src="/ferozen/download (3).jpg"
                />
              </a>
              <div className="mt-4 group-hover:text-sky-100 transition-colors duration-300 ease-in-out">
                
                <p className="mt-1">$12.00</p>
                <div><ButtonDemo></ButtonDemo></div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-red-500 transition-all duration-300 ease-in-out">
              <a className="block relative h-48 rounded overflow-hidden group">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  src="/ferozen/download (5).jpg"
                />
              </a>
              <div className="mt-4 group-hover:text-red-500 transition-colors duration-300 ease-in-out">
                
                <p className="mt-1">$18.40</p>
                <div><ButtonDemo></ButtonDemo></div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-pink-500 transition-all duration-300 ease-in-out">
              <a className="block relative h-48 rounded overflow-hidden group">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  src="/ferozen/images (2).jpg"
                />
              </a>
              <div className="mt-4 group-hover:text-pink-500 transition-colors duration-300 ease-in-out">
               
                <p className="mt-1">$16.00</p>
                <div><ButtonDemo></ButtonDemo></div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-blue-500 transition-all duration-300 ease-in-out">
              <a className="block relative h-48 rounded overflow-hidden group">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  src="/ferozen/images (3).jpg"
                />
              </a>
              <div className="mt-4 group-hover:text-blue-500 transition-colors duration-300 ease-in-out">
               
                <p className="mt-1">$21.15</p>
                <div><ButtonDemo></ButtonDemo></div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-green-500 transition-all duration-300 ease-in-out">
              <a className="block relative h-48 rounded overflow-hidden group">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  src="/ferozen/images (4).jpg"
                />
              </a>
              <div className="mt-4 group-hover:text-green-500 transition-colors duration-300 ease-in-out">
                
                <p className="mt-1">$12.00</p>
                <div><ButtonDemo></ButtonDemo></div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-brown-200 transition-all duration-300 ease-in-out">
              <a className="block relative h-48 rounded overflow-hidden group">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  src="/ferozen/images (2).jpg"
                />
              </a>
              <div className="mt-4 group-hover:text-brown-200 transition-colors duration-300 ease-in-out">
                
                <p className="mt-1">$18.40</p>
                <div><ButtonDemo></ButtonDemo></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Ferozen
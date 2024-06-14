import { ButtonDemo } from '@/components/button'
import Image from 'next/image'
import React from 'react'
Image
const Vegetables = () => {
  return (
    <div className='bg-sky-400-border md:bg-origin-padding hover:bg-red-200 '>
      <section className="text-gray-600 body-font bg-sky-400-border md:bg-origin-padding">
  <div className="container px-5 py-24 mx-auto bg-sky-400-border md:bg-origin-padding">
    <div className="flex flex-wrap -m-4 bg-sky-400-border md:bg-origin-padding">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-sky-400-border md:bg-origin-padding hover:bg-sky-500 ">
        <a className="block relative h-48 rounded overflow-hidden ">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/pictures/vegatables/images (1).jpg"
          />
        </a>
        <div className="mt-4">
         
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Tomoto
          </h2>
          <p className="mt-1">$16.00 p/kg</p>
          <div><ButtonDemo></ButtonDemo></div>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-sky-500 ">
      <a className="block relative h-48 rounded overflow-hidden hover:bg-sky-500 ">
  <Image
    alt="ecommerce"
    className="object-cover object-center w-full h-full block"
    src="/pictures/vegatables/images.jpg"
    width={400}
    height={400}
  />
</a>

        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Apple
          </h2>
          <p className="mt-1">$21.15 p/kg</p>
          <div><ButtonDemo></ButtonDemo></div>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-sky-100 ">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/pictures/vegatables/veg14jpg.jpg"
          />
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Kivi
          </h2>
          <p className="mt-1">$12.00 p/kg</p>
          <div><ButtonDemo></ButtonDemo></div>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden hover:bg-red-500 ">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/pictures/vegatables/veg17.jpg"
          />
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Arches
          </h2>
          <p className="mt-1">$18.40 p/kg</p>
          <div><ButtonDemo></ButtonDemo></div>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden hover:bg-pink-500 ">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/pictures/vegatables/veg19.jpg"
          />
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Stawebery
          </h2>
          <p className="mt-1">$16.00 p/kg</p>
          <div><ButtonDemo></ButtonDemo></div>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden hover:bg-blue-500 ">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/pictures/vegatables/veg22.jpg"
          />
        </a>
        <div className="mt-4">
         
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Banana
          </h2>
          <p className="mt-1">$21.15 p/kg</p>
          <div><ButtonDemo></ButtonDemo></div>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden hover:bg-green-500 ">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/pictures/vegatables/veg23.jpg"
          />
        </a>
        <div className="mt-4">
         
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Cherry
          </h2>
          <p className="mt-1">$12.00 p/kg</p>
          <div><ButtonDemo></ButtonDemo></div>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden hover:bg-brown-200 ">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/pictures/vegatables/veg8.jpg"
          />
        </a>
        <div className="mt-4">
         
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Avacado
          </h2>
          
          <p className="mt-1"> $18.40</p>
          <div><ButtonDemo></ButtonDemo></div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Vegetables
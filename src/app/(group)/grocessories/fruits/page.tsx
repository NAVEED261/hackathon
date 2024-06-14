import { ButtonDemo } from '@/components/button'
import Image from 'next/image'
import React from 'react'

const Fruits = () => {
  return (
    <div className='bg-sky-400 border md:bg-origin-padding hover:bg-red-200'>
      <section className="text-gray-600 body-font bg-sky-400 border md:bg-origin-padding">
        <div className="container px-5 py-24 mx-auto bg-sky-400 border md:bg-origin-padding">
          <div className="flex flex-wrap -m-4 bg-sky-400 border md:bg-origin-padding">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-sky-400 border md:bg-origin-padding hover:bg-sky-500">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/fruits/veg10.jpg"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Tomato
                </h2>
                <p className="mt-1">$16.00</p>
                <div><ButtonDemo /></div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-sky-500">
              <a className="block relative h-48 rounded overflow-hidden hover:bg-sky-500">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/fruits/veg11.jpg"
                  width={400}
                  height={400}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Apple
                </h2>
                <p className="mt-1">$21.15</p>
                <div><ButtonDemo /></div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-sky-100">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/fruits/veg12.jpg"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Kiwi
                </h2>
                <p className="mt-1">$12.00</p>
                <div><ButtonDemo /></div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden hover:bg-red-500">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/fruits/veg13.jpg"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Arches
                </h2>
                <p className="mt-1">$18.40</p>
                <div><ButtonDemo /></div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden hover:bg-pink-500">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/fruits/veg14.jpg"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Strawberry
                </h2>
                <p className="mt-1">$16.00</p>
                <div><ButtonDemo /></div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden hover:bg-blue-500">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/fruits/veg6.jpg"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Banana
                </h2>
                <p className="mt-1">$21.15</p>
                <div><ButtonDemo /></div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden hover:bg-green-500">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/fruits/veg7.jpg"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Cherry
                </h2>
                <p className="mt-1">$12.00</p>
                <div><ButtonDemo /></div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden hover:bg-brown-200">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/fruits/veg9.jpg"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Avocado
                </h2>
                <p className="mt-1">$18.40</p>
                <div><ButtonDemo /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Fruits

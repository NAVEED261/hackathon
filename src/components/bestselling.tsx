import React from "react";
import { Button } from "./ui/button";
import { ButtonDemo } from "./button";

const BestSelling = () => {
  return (
    <div className="mb-[100px] mt-[100px]">
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          BEST SELLING PRODUCTS
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
        </div>
      </div>
      {/* bestselling */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Product */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/pictures/veg21.jpg" alt="MANGO" className="rounded-xl" />
            <figcaption className="text-center mt-4">MANGO</figcaption>
            <p className="text-center">$5</p>
          </figure>
          <div className="card-body items-center text-center">
            <p>If a sweet MANGO, whose MANGO does he choose?</p>
            <div className="flex justify-between mt-4">
              <div className="flex flex-col items-center">
                <p className="text-center">$5</p>
                <button className="btn btn-primary mt-2">Buy Now</button>
              </div>
              <div className="flex items-center">
                <img
                  src="/pictures/add to cart.webp"
                  alt="Add to Cart"
                  className="w-6 h-6 mr-2"
                />
                <div>
                  <ButtonDemo />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Product */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/pictures/veg9.jpg" alt="kivi" className="rounded-xl" />
            <figcaption className="text-center mt-4">kivi</figcaption>
            <p className="text-center">$10</p>
          </figure>
          <div className="card-body items-center text-center">
            <p>
              kivi is the most popular fruit from continental west America .
            </p>
            <div className="flex justify-between mt-4">
              <div className="flex flex-col items-center">
                <button className="btn btn-primary mt-2">Buy Now</button>
              </div>
              <div className="flex items-center">
                <img
                  src="/pictures/add to cart.webp"
                  alt="Add to Cart"
                  className="w-6 h-6 mr-2"
                />
                <div>
                  <ButtonDemo />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Product */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="/pictures/black tea.jpg"
              alt="Black Tea"
              className="rounded-xl"
            />
            <figcaption className="text-center mt-4">Black Tea</figcaption>
          </figure>
          <div className="card-body items-center text-center">
            <p>Black Tea is the most popular tea in the world.</p>
            <div className="flex justify-between mt-4">
              <div className="flex flex-col items-center">
                <p className="text-center">$8</p>
                <button className="btn btn-primary mt-2">Buy Now</button>
              </div>
              <div className="flex items-center">
                <img
                  src="/pictures/add to cart.webp"
                  alt="Add to Cart"
                  className="w-6 h-6 mr-2"
                />
                <div>
                  <ButtonDemo />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 4th Product */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/pictures/milk.png" alt="Milk" className="rounded-xl" />
            <figcaption className="text-center mt-4">Milk</figcaption>
          </figure>
          <div className="card-body items-center text-center">
            <p>Powdered Milk is the most popular brand from Nestle.</p>
            <div className="flex justify-between mt-4">
              <div className="flex flex-col items-center">
                <p className="text-center">$12</p>
                <button className="btn btn-primary mt-2">Buy Now</button>
              </div>
              <div className="flex items-center">
                <img
                  src="/pictures/add to cart.webp"
                  alt="Add to Cart"
                  className="w-6 h-6 mr-2"
                />
                <div>
                  <ButtonDemo />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 5th Product */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="/pictures/FERRROZEN.jpg"
              alt="Ferrozen"
              className="rounded-xl"
            />
            <figcaption className="text-center mt-4">Ferrozen</figcaption>
          </figure>
          <div className="card-body items-center text-center">
            <p>Ferrozen items are essential for our health.</p>
            <div className="flex justify-between mt-4">
              <div className="flex flex-col items-center">
                <p className="text-center">$15</p>
                <button className="btn btn-primary mt-2">Buy Now</button>
              </div>
              <div className="flex items-center">
                <img
                  src="/pictures/add to cart.webp"
                  alt="Add to Cart"
                  className="w-6 h-6 mr-2"
                />
                <div>
                  <ButtonDemo />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6th Product */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="/pictures/veg14.jpg"
              alt="Product 6"
              className="rounded-xl"
            />
            <figcaption className="text-center mt-4">Strewberry</figcaption>
          </figure>
          <div className="card-body items-center text-center">
            <p>Description of Product 6 goes here.</p>
            <div className="flex justify-between mt-4">
              <div className="flex flex-col items-center">
                <p className="text-center">$20</p>
                <button className="btn btn-primary mt-2">Buy Now</button>
              </div>
              <div className="flex items-center">
                <img
                  src="/pictures/add to cart.webp"
                  alt="Add to Cart"
                  className="w-6 h-6 mr-2"
                />
                <div>
                  <ButtonDemo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;

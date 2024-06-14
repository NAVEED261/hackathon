import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="body-font mb-[100px] mt-[100px]">
      <div className="container max-w-screen-lg px-4 sm:px-6 mx-auto">
        <div className="text-center mb-20">
          <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
            OUR SERVICES
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 w-full sm:w-1/2 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-32 h-32 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img
                src="/pictures/free delivery.png"
                alt="Service 1"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Free Delivery Order Above $1000
              </h2>
              <p className="text-indigo-500 text-sm">FREE DELIVERY</p>
            </div>
          </div>
          <div className="p-4 w-full sm:w-1/2 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-32 h-32 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img
                src="/pictures/png-clipart-24-7-service-illustration-24-7-service-handyman-los-angeles-customer-service-twenty-four-company-text.png"
                alt="Service 2"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                For Queries and Questions Feel Free to Contact
              </h2>
              <p className="text-indigo-500 text-sm">24/7 CUSTOMER SERVICES</p>
            </div>
          </div>
          <div className="p-4 w-full sm:w-1/2 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-32 h-32 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img
                src="/pictures/iso.png"
                alt="Service 3"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Approved from ISO
              </h2>
              <p className="text-indigo-500 text-sm">ISO APPROVED</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

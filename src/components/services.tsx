import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="body-font mb-24 mt-24">
      <div className="container max-w-screen-lg px-4 sm:px-6 mx-auto">
        <div className="text-center mb-16">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
            OUR SERVICES
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
          </div>
        </div>
        
        {/* Services Section */}
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          
          {/* First Service */}
          <div className="p-4 w-full sm:w-1/2 md:w-1/3 flex flex-col text-center items-center hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="w-32 h-32 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 shadow-lg">
              <Image
                src="/pictures/free delivery.png" // Adjust this path if needed
                alt="Free Delivery"
                width={128}
                height={128}
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-semibold mb-3">
                Free Delivery on Orders Above $1000
              </h2>
              <p className="text-indigo-500 text-sm">FREE DELIVERY</p>
            </div>
          </div>

          {/* Second Service */}
          <div className="p-4 w-full sm:w-1/2 md:w-1/3 flex flex-col text-center items-center hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="w-32 h-32 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 shadow-lg">
              <Image
                src="/pictures/png-clipart-24-7-service-illustration-24-7-service-handyman-los-angeles-customer-service-twenty-four-company-text.png" // Adjust path if needed
                alt="24/7 Service"
                width={128}
                height={128}
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-semibold mb-3">
                24/7 Customer Support for Queries and Questions
              </h2>
              <p className="text-indigo-500 text-sm">24/7 CUSTOMER SERVICE</p>
            </div>
          </div>

          {/* Third Service */}
          <div className="p-4 w-full sm:w-1/2 md:w-1/3 flex flex-col text-center items-center hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="w-32 h-32 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 shadow-lg">
              <Image
                src="/pictures/iso.png" // Update this path with the correct image file for ISO Certification
                alt="ISO Certified"
                width={128}
                height={128}
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-semibold mb-3">
                ISO Certified and Approved Services
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

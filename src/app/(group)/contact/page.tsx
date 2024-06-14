import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <section className="text-gray-800 body-font relative w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg">
        <div className="container mx-auto">
          <div className="flex flex-col text-center w-full mb-12 bg-purple-600 hover:bg-indigo-700 transition-colors duration-300 ease-in-out rounded-lg">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-white">
              Any complaints or queries? Feel free to reach out!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div >
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-900 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded text-lg transition-transform transform hover:scale-105">
                  Submit
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-300 text-center">
                <a className="text-indigo-600 hover:underline" href="mailto:hnaveed264@email.com">
                  hna***@email.com
                </a>
                <p className="leading-normal my-5 text-gray-600">
                  House No. R-98,
                  <br />
                  Sector 5c-2 North Karachi.
                </p>
                <span className="inline-flex">
                  <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors duration-200 ml-4">
                    Facebook
                  </a>
                  <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors duration-200 ml-4">
                    Twitter
                  </a>
                  <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors duration-200 ml-4">
                    Instagram
                  </a>
                  <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors duration-200 ml-4">
                    LinkedIn
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

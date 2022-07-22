import React from 'react';
// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Car() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_13/2798361/190325-rental-cars-cs-229p.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            >
              {" "}
            </span>
                     </div>

          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
          
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        
      </main>
      <section className="relative block -mt-49 ">
              <div className="flex flex-wrap justify-center lg:-mt-2 -mt-2">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-teal-200">
                    <div className="flex-auto p-5 lg:p-10">
                      <h4 className="text-2xl font-semibold">
                        Want to contact us?
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                        Complete this form
                      </p>
                      <div className="relative w-full mb-3 mt-8">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="full-name"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Full Name"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Email"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          rows="4"
                          cols="80"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Type a message..."
                        />
                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

      <Footer />
    </>
  );
}

import React from "react";

// components

// layout for page

import Client from "layouts/Client";

export default function AboutUsClient() {
  return (
    <>
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
            ></span>
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

        <section className="relative py-20">
          <div className="relative  font-bold text-center text-blueGray-100  hidden md:flex flex-wrap -mt-32 ">
            <h2 className="font-semibold text-4xl mb-8 ml-4"> About Us</h2>
          </div>
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg "
                  src="/img/tele.png"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">Who are we?</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Our car rental company KriAuto offers you comfort and a good
                    quality of automobile any choice is present to accompany
                    you. You can manage your reservation online or on site. The
                    world's largest car rental booking service Working with over
                    900 companies in 160 countries, we can find you the right
                    car, in the right place, at the right price. We have been
                    rated by over 3.5 million customers
                  </p>
                  <ul className="list-none mt-6">
                    <h3 className="text-3xl font-semibold">Our Mission</h3>
                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Our mission as much as a car rental agency, is to satisfy our customers and allow them to revisit our premises and 
                    our platform if necessary. We are at the service any car is available in any corner
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

AboutUsClient.layout = Client;

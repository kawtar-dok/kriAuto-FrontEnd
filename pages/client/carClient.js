import React from "react";

// components

// layout for page

import Client from "layouts/Client.js";
import HeaderCarsClient from "components/Headers/HeaderCarsClient.js";

export default function CarsClient() {
  return (
    <>
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
      </div>
      {/* Header */}
      <section className="pb-20 bg-blueGray-200 -mt-49">
          <div className="container mx-auto px-4">
            <HeaderCarsClient />
          </div>
        </section>
     {/*  <img
          className="absolute lg:w-4/12  top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="..."
        />*/}
    </>
  );
}

CarsClient.layout = Client;

import React from "react";

// components

import CardAgencyList from "components/Cards/CardAgencyList.js";

// layout for page

import Client from "layouts/Client.js";

export default function AgenciesClient() {
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
        <section className="pb-20 bg-blueGray-200 -mt-49">
          <div className="container mx-auto px-4">
           <div className="relative  font-bold text-center text-blueGray-100  flex flex-wrap -mt-32 ">
        <h2 className="font-semibold text-4xl mb-8">Our Agencies</h2>
      </div>
          <CardAgencyList />
          </div>
        </section>
        
    </>
  );
}

AgenciesClient.layout = Client;

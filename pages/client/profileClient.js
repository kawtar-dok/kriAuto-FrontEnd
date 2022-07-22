import React from "react";

// components

import CardClientDoll from "components/Cards/CardClientDoll.js";
import CardClientDollImg from "components/Cards/CardClientDollImg.js";
// layout for page

import Client from "layouts/Client.js";

export default function ProfileClient() {
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
      <div className="flex flex-wrap -mt-49">
        <div className="w-full lg:w-8/12 px-14">
          <CardClientDoll />
        </div>

        <div className="w-full lg:w-4/12 px-14">
          <CardClientDollImg />
        </div>
      </div>
    </>
  );
}

ProfileClient.layout = Client;

import React from "react";

// components

import CardAgenceDoll from "components/Cards/CardAgenceDoll.js";
import  CardAgenceDollImg from "components/Cards/CardAgenceDollImg.js";
// layout for page

import AgenceAdmin from "layouts/AgenceAdmin.js";

export default function ProfileAgence() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardAgenceDoll />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          < CardAgenceDollImg />
        </div>
       
      </div>
     {/*  <img
          className="absolute lg:w-4/12  top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="..."
        />*/}
    </>
  );
}

ProfileAgence.layout = AgenceAdmin;

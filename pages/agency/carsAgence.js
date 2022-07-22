import React from "react";

// components

// layout for page

import AgenceAdmin from "layouts/AgenceAdmin.js";
import HeaderCarsAgence from "components/Headers/HeaderCarsAgence.js";

export default function CarsAgence() {
  return (
    <>
      {/* Header */}
      <HeaderCarsAgence />
     {/*  <img
          className="absolute lg:w-4/12  top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="..."
        />*/}
    </>
  );
}

CarsAgence.layout = AgenceAdmin;

import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import HeaderCarsAgence from "components/Headers/HeaderCarsAgence.js";
// layout for page

import AgenceAdmin from "layouts/AgenceAdmin.js";

export default function DashboardAgence() {
  return (
    <>
    
          {/* Header */}
          <HeaderCarsAgence />
          <div className="px-4 md:px-10 mx-auto w-full -m-24">    
      <div className="flex flex-wrap">
       

        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      </div>
    </>
  );
}

DashboardAgence.layout = AgenceAdmin;

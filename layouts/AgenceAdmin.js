import React from "react";

// components

import AgenceAdminNavbar from "components/Navbars/AgenceAdminNavbar.js";
import AgenceSidebar from "components/Sidebar/AgenceSidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";

export default function AgenceAdmin({ children }) {
  return (
    <>
      <AgenceSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AgenceAdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
       
        </div>
      </div>
    </>
  );
}

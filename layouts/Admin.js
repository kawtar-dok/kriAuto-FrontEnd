import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Header from "components/Headers/Header.js";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <Header />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
         
        </div>
      </div>
    </>
  );
}

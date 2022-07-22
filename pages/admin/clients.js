import React from "react";

// components

import CardTable from "components/Cards/CardClients.js";

// layout for page

import Admin from "layouts/Admin.js";

 
export default function Clients() {
  return (
    <>
    <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
     </>      
      );
} 

Clients.layout = Admin;

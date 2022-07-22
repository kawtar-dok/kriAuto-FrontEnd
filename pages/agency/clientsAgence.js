import React from "react";

// components

import CardClientAgence from "components/Cards/CardClientAgence.js";

// layout for page

import AgenceAdmin from "layouts/AgenceAdmin.js";

 
export default function ClientsAgence() {
  return (
    <>
    <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardClientAgence color="dark" />
        </div>
      </div>
     </>      
      );
} 

ClientsAgence.layout = AgenceAdmin;

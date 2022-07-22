/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link  from "next/link";


import IndexNavbar from "components/Navbars/IndexNavbar.js";


export default function Index() {
  return (
    <>
         <div className=" relative pt-16 bg-teal-800 items-center flex h-screen  max-h-860-px max-w-screen-2xl">
      <IndexNavbar relative />
      <Link href="/indexSecond">
          <img src="/img/flech-back.png" alt="logo" className="h-8 -mr-2 ml-2 " />
        </Link>
       
        <img
          className="relative items-center ml-30  "
          src="/img/Wavy Buddies - Address.png"
          alt="..."
        />
         <h1 className="text-white font-semibold text-1xl uppercase mt-50 mr-24 ">  Enjoy your ride</h1>
      
        
        </div>
    </>
  );
}
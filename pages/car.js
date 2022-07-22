import React from "react";
import HeaderCarsUser from "components/Headers/HeaderCarsUser";
// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Car() {
  return (
    <>
      <Navbar transparent />
      <main>
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

          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-49">
          <div className="container mx-auto px-4">
            <HeaderCarsUser />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

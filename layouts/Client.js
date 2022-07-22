import React from "react";
// components

import NavbarClient from "components/Navbars/AuthNavbarClient.js";
import Footer from "components/Footers/Footer.js";

export default function Landing({ children })  {
  return (
    <>
      <NavbarClient transparent />
      <main>
         {children}
      </main>
      <Footer />
    </>
  );
}

import React from "react";

// components

import NavbarlOGIN from "components/Navbars/AuthNavbarLogin.js";

export default function Auth({ children }) {
  return (
    <>
    <NavbarlOGIN transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-teal-900 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          ></div>
          {children}
        </section>
      </main>
    </>
  );
}

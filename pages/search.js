import React from "react";
import Navbar from "components/Navbars/AuthNavbar";
import Cars from "components/Search/Cars";

function search() {
  let startDate = "";
  let endDate = "";
  if (typeof window !== "undefined") {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    startDate = urlParams.get("startDate");
    endDate = urlParams.get("endDate");
    console.log(startDate, endDate);
  }

  return (
    <div
      style={{
        backgroundColor: "#2C7A7B",
        height: "200vh",
      }}
    >
      <Navbar />

      <section className="">
        <div className="container mx-auto px-4">
          <Cars startDate={startDate} endDate={endDate} />
        </div>
      </section>
    </div>
  );
}

export default search;

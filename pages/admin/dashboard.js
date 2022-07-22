import React, { useEffect } from "react";

// components
import { useRouter } from "next/router";
import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardAgencyList from "components/Cards/CardAgencyList.js";
import HeaderCars from "components/Headers/HeaderCars.js";
// layout for page

import Admin from "layouts/Admin.js";

export default function Dashboard() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      let user = localStorage.getItem("user");
      user = JSON.parse(JSON.stringify(user));
      user = JSON.parse(user);
      if (user.role === "admin") {
        setLoggedIn(true);
      } else {
        router.push("/auth/login");
      }
    } else {
    }
  }, []);
  if (loggedIn) {
    return (
      <>
        <div className="relative  font-bold text-center text-blueGray-100  flex flex-wrap -mt-32 ">
          <h2 className="font-semibold text-4xl mb-8">Our Agencies</h2>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-4/12 px-4">
            <CardAgencyList />
          </div>
        </div>

        <h2 className="font-semibold text-4xl mb-8">All Cars</h2>

        <HeaderCars />

        <div className="px-4 md:px-10 mt-12 mx-auto w-full -m-24">
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
  } else {
    return <div>Not authorized</div>;
  }
}

Dashboard.layout = Admin;

import React from "react";
// components
import CardCarAgence from "components/Cards/CardCarAgence.js";
// layout for page

import AgenceAdmin from "layouts/AgenceAdmin.js";

export default function ReservationAgence() {
  return (
    <>
      <div className="relative   md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className="relative  font-bold text-center text-blueGray-100  flex flex-wrap -mt-32 ">
              <h2 className="font-semibold text-4xl mb-8">Reservation</h2>
            </div>

            <div className="flex flex-wrap"></div>
            <div className="w-full lg:w-8/12 xl:w-4/12 px-4">
             
              <span class="text-xs p-4 mt-2  inline-block py-1 px-4 -m-8 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded">
                Reserved
              </span>
              <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                <CardCarAgence
                  statTitleModel="Hyundai Accent Grey"
                  statMarque="Hyundai"
                  statAgenceName="Big Red"
                  statImageName="/img/cars/Accents-Hyundai.jpg"
                  statArrow="up"
                  statPrice="300"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statLocation="Rabat, Morocco"
                  statSeats="5 seats"
                  statPetrol="Petrol"
                  statAuto=" no Auto"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ReservationAgence.layout = AgenceAdmin;

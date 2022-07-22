import React from "react";

// components
import CardCar from "components/Cards/CardCar.js";

export default function Cars({ startDate, endDate }) {
  return (
    <>
      <div className="pt-32">
        <div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-8/12 xl:w-4/12 px-4">
              <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full  shadow-lg rounded-lg ease-linear transition-all duration-150">
                <CardCar
                  statTitleModel="5ème génération - Facelift - 2021"
                  statMarque="Hyundai Accent Grey"
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
                  startDate={startDate}
                  endDate={endDate}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
              <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                <CardCar
                  statTitleModel="5ème génération - 2019"
                  statMarque="Renault Clio"
                  statAgenceName="Big Red"
                  statImageName="/img/cars/Renault-Clio.jpg"
                  statArrow="up"
                  statPrice="200"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since this day"
                  statLocation="Rabat, Morocco"
                  statSeats="5 seats"
                  statPetrol="Petrol"
                  statAuto="Auto"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                  IconColor="bg-orange-500"
                  startDate={startDate}
                  endDate={endDate}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
              <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                <CardCar
                  statTitleModel="modèle 2021"
                  statMarque="Toyota Yaris "
                  statAgenceName="Chnayti Cars"
                  statImageName="/img/cars/toyotaYaris1.jpg"
                  statArrow="down"
                  statPrice="400"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last week"
                  statLocation="Rabat, Morocco"
                  statSeats="2 seats"
                  statPetrol="Petrol"
                  statAuto="Auto"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                  startDate={startDate}
                  endDate={endDate}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-8/12 xl:w-4/12 px-4">
              <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                <CardCar
                  statTitleModel="modèle 2018n"
                  statMarque="Mercedes classe A4 Tigua"
                  statAgenceName="Chnayti Cars"
                  statImageName="/img/cars/Mercedes classe A4.png"
                  statArrow="up"
                  statPrice="350"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statLocation="Rabat, Morocco"
                  statSeats="4 seats"
                  statPetrol="Petrol"
                  statAuto=" no Auto"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                  startDate={startDate}
                  endDate={endDate}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
              <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                <CardCar
                  statTitleModel="2.0 Tdi Life-2022"
                  statMarque="Volkswagen Tiguan"
                  statAgenceName="B Rent Car"
                  statImageName="/img/cars/volkswagen-tiguan.jpg"
                  statArrow="down"
                  statPrice="250"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since this day"
                  statLocation="Rabat, Morocco"
                  statSeats="5 seats"
                  statPetrol="Petrol"
                  statAuto="Auto"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                  IconColor="bg-orange-500"
                  startDate={startDate}
                  endDate={endDate}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
              <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                <CardCar
                  statTitleModel="Stepway modèle 2021"
                  statMarque="Dacia Sandero"
                  statAgenceName="Chnayti Cars"
                  statImageName="/img/cars/dacia-sandero-stepway.jpg"
                  statArrow="up"
                  statPrice="300"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last week"
                  statLocation="Rabat, Morocco"
                  statSeats="5 seats"
                  statPetrol="Petrol"
                  statAuto="Auto"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                  startDate={startDate}
                  endDate={endDate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

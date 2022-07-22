import React from "react";

// components
import CardCarUser from "components/Cards/CardCarUser.js";

export default function HeaderCarsUser() {
  return (
    <>
      {/* Header */}

      <div className="relative   md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className="relative  font-bold text-center text-blueGray-100  hidden md:flex flex-wrap -mt-32 ">
              <h2 className="font-semibold text-4xl mb-8">Our Cars</h2>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 xl:w-4/12 px-4">
                <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                  <CardCarUser
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
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                  <CardCarUser
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
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                  <CardCarUser
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
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 xl:w-4/12 px-4">
                <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                  <CardCarUser
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
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                  <CardCarUser
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
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                  <CardCarUser
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
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

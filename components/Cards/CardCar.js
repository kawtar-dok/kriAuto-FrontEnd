import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
export default function CardCar({
  statMarque,
  statTitleModel,
  statArrow,
  statPrice,
  statPercentColor,
  statDescripiron,
  statImageName,
  statLocation,
  statAuto,
  statPetrol,
  statSeats,
  statAgenceName,
  startDate,
  endDate,
}) {
  const router = useRouter();
  function bookCar() {
    if (typeof window !== "undefined") {
      if (startDate && endDate) {
        if (!localStorage.getItem("user")) {
          alert("Please login to book a car");
          router.push("/auth/login");
        } else {
          router.push("/paiement/payClient", {
            query: {
              marque: statMarque,
              model: statTitleModel,
              price: statPrice,
              location: statLocation,
              auto: statAuto,
              petrol: statPetrol,
              seats: statSeats,
              agence: statAgenceName,
              startDate: startDate,
              endDate: endDate,
              imageName: statImageName,
            },
          });
        }
      } else {
        alert("Please select a date");
      }
    }
  }
  return (
    <>
      <div className="relative ">
        <div className="flex flex-col justify-center p-4">
          <div className="flex flex-wrap">
            <div className="relative pr-4   ">
              <span className="font-semibold text-xl text-blueGray-700">
                {statMarque}
              </span>
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statTitleModel}
              </h5>
              <div className="text-sm leading-normal mt-0 mb-8/12 text-blueGray-400  ">
                <i className="fas fa-building mr-2 text-lg text-blueGray-400"></i>
                {statAgenceName}
              </div>
              <div className="relative w-auto pl-24 pb-10 p-2 flex-initial">
                <img alt="..." src={statImageName}></img>
              </div>
            </div>
          </div>

          <p className="text-sm text-blueGray-400 mb-1">
            <span className={statPercentColor + " mr-2"}>
              <i
                className={
                  statArrow === "up"
                    ? "fas fa-arrow-up"
                    : statArrow === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "}
              {statPrice}Dh | Day
            </span>
            <span className="whitespace-nowrap">{statDescripiron}</span>
          </p>

          <div className="flex flex-wrap">
            <div className="text-sm leading-normal mt-0 mb-2  text-blueGray-400 font-bold ">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              {statLocation}
            </div>
            <div>
              <div className="text-sm leading-normal mt-0 mb-8/12 ml-2  text-blueGray-400  ">
                <i className="fas fa-wheelchair mr-2 text-lg text-blueGray-400"></i>
                {statSeats}
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="text-sm leading-normal mt-0 mb-4/12  text-blueGray-400 ">
                <i className="fas fa-gas-pump   mr-2 text-lg text-blueGray-400"></i>
                {statPetrol}
              </div>
              <div className="text-sm leading-normal mt-0 mb-1/12  ml-2 text-blueGray-400 ">
                <i className="fas fa-vote-yea mr-2 text-lg text-blueGray-400"></i>
                {statAuto}
              </div>
            </div>
          </div>
          <div className="text-right  -mt-17 ">
            <button
              className=" bg-teal-800 active:bg-teal-800 ml-2 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              <a onClick={bookCar}>Book</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

CardCar.propTypes = {
  statTitleModel: PropTypes.string,
  statMarque: PropTypes.string,
  statImageName: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPrice: PropTypes.string,
  statDescripiron: PropTypes.string,
  statLocation: PropTypes.string,
  statSeats: PropTypes.string,
  statPercentColor: PropTypes.string,
  statPetrol: PropTypes.string,
  statAuto: PropTypes.string,
  statAgenceName: PropTypes.string,
};

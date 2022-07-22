import React from "react";
import Link from "next/dist/client/link";
// components

export default function CardAgencyList() {
  return (
    <>
      <div className="flex ">
        <div className="relative flex flex-col p-16 -mt-10 px-2 ">
          <div className="px-24  ">
            <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
              <div
                className="flex flex-wrap justify-center"
                style={{
                  width: "18rem",
                }}
              >
                <div className="flex flex-wrap justify-center">
                  <div className="w-full mt-8 mr-4  flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="/img/agncyLogo/bigRed.png"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center py-0 lg:pb-2 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        2
                      </span>
                      <span className="text-sm text-blueGray-400">Cars</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        2
                      </span>
                      <span className="text-sm text-blueGray-400">Clients</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        1
                      </span>
                      <span className="text-sm text-blueGray-400">Local</span>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                    Big Red
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    Rabat, Morocco
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-2">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    <p>Salma Zaki -</p>
                    creator of the Agency
                  </div>

                  <div className="text-right  -mt-18  -ml-40 ">
                    <button
                      outline
                      className=" bg-teal-800 active:bg-teal-800 ml-6 mb-2 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      <Link href="/auth/agency/dashboardAgence">
                        <a href="#pablo">Consult</a>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col p-16 -mt-10">
          <div className="px-18   ">
            <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
              <div
                className="flex flex-wrap justify-center"
                style={{
                  width: "18rem",
                }}
              >
                <div className="flex flex-wrap justify-center">
                  <div className="w-full mt-8  ml-13  flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="/img/agncyLogo/chnaytiCars.png"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center py-0 lg:pb-2 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        5
                      </span>
                      <span className="text-sm text-blueGray-400">Cars</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        0
                      </span>
                      <span className="text-sm text-blueGray-400">Clients</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        2
                      </span>
                      <span className="text-sm text-blueGray-400">Local</span>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                    Chnayti Cars
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    Rabat-Agadir Morocco
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-2">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    <p>Doha Zaki -</p> Creative of the Agency
                  </div>

                  <div className="text-right  -mt-18  -ml-40 ">
                    <button
                      outline
                      className=" bg-teal-800 active:bg-teal-800 ml-6  mb-2 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      <Link href="/auth/login">
                        <a href="#pablo">Consult</a>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col p-16 -mt-10">
          <div className="px-18   ">
            <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
              <div
                className="flex flex-wrap justify-center"
                style={{
                  width: "18rem",
                }}
              >
                <div className="flex flex-wrap justify-center">
                  <div className="w-full mt-8  ml-13  flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="/img/agncyLogo/B RENT CAR.png"
                        className="shadow-xl rounded-full h-auto align-middle border-none  bg-white absolute -m-16 -ml-16 lg:-ml-12 max-w-100-px"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center py-0 lg:pb-2 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        10
                      </span>
                      <span className="text-sm text-blueGray-400">Cars</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        5
                      </span>
                      <span className="text-sm text-blueGray-400">Clients</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        1
                      </span>
                      <span className="text-sm text-blueGray-400">Local</span>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                    B RENT CAR
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    Rabat- Morocco
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-2">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    <p>Ahmed Alami -</p> Creative of the Agency
                  </div>

                  <div className="text-right  -mt-18 -ml-40 ">
                    <button
                      outline
                      className=" bg-teal-800 active:bg-teal-800 ml-6  mb-2 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      <Link href="/auth/login">
                        <a href="#pablo">Consult</a>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

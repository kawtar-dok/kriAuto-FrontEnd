/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

export default function Index() {
  return (
    <div
      className="flex justify-around items-center bg-teal-800 pt-16"

    >
      <div className="  items-start flex flex-col md:flex-row h-screen">
        <Link href="/">
          <img
            src="/img/flech-back.png"
            alt="logo"
            className="h-8 absolute left-0 "
            style={{
              top: "50%",
            }}
          />
        </Link>

        <div className="flex flex-col">
          <img className="   " src="/img/secondary1.png" alt="..." />

          <div className="items-center flex flex-col p-7 ">
            <h1 className="text-white font-semibold  text-3xl ">
              Select A Car
            </h1>
            <div className="flex flex-col text-center mt-4">
              <p className=" text-lg text-blueGray-200">
                KriAuto vous propose de multiple choix de voiture
              </p>
              <p className=" text-lg text-blueGray-200">
                A bon prix au niveau national
              </p>
            </div>
          </div>
        </div>

        <Link href="/indexThird">
          <img
            src="/img/flech2.png"
            alt="logo"
            className="h-8 absolute right-0  "
            style={{
              top: "50%",
            }}
          />
        </Link>
      </div>
    </div>
  );
}

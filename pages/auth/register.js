import React from "react";

// layout for page

import Auth from "layouts/Auth.js";
import axios from "axios";

export default function Register() {
  const [info, setInfo] = React.useState({
    username: "",
    password: "",
    email: "",
    role: "client",
    age: 0,
    firstName: "",
    lastName: "",
    telephone: "",
    city: "",
    sexe: "",
  });
  const [error, setError] = React.useState(false);
  async function register() {
    const data = await axios.post("http://localhost:3001/auth/register", {
      username: info.username,
      password: info.password,
      email: info.email,
      role: info.role,
      age: parseInt(info.age),
      firstName: info.firstName,
      lastName: info.lastName,
      telephone: info.telephone,
      city: info.city,
      sexe: info.sexe,
    });
    console.log(data.data);
    if (data.data.success === true) {

      if (data.data.role === "client") {
        window.location.href = "/landing";
        localStorage.setItem("user", JSON.stringify(data.data.client));
      } else if (data.data.role === "adminAg") {
        window.location.href = "/agency/dashboardAgence";
        localStorage.setItem("user", JSON.stringify(data.data.adminAg));
      }
    } else {
      setError(true);
      console.log(data.success)
      
    }
  }
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm  mt-3 mb-6 font-bold ">
                    Login Information
                  </h6>
                </div>
                <div
                  className="text-center mb-3"
                  style={{
                    display: error ? "block" : "none",
                  }}
                >
                  <h6 className="text-white text-sm font-bold bg-red-500 p-2 rounded-2xl">
                    Username existe déjà
                  </h6>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Username"
                        value={info.username}
                        onChange={(e) => {
                          setInfo({ ...info, username: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-6">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                        value={info.password}
                        onChange={(e) => {
                          setInfo({ ...info, password: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>

              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm  mt-3 mb-6 font-bold ">
                    Fill in Your Information
                  </h6>
                </div>
                <form>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-2">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="First Name"
                          value={info.firstName}
                          onChange={(e) => {
                            setInfo({ ...info, firstName: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-2">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Last Name"
                          value={info.lastName}
                          onChange={(e) => {
                            setInfo({ ...info, lastName: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-12/12 px-2">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="email"
                          value={info.email}
                          onChange={(e) => {
                            setInfo({ ...info, email: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-2">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Age
                        </label>
                        <input
                          type="number"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="age"
                          value={info.age}
                          onChange={(e) => {
                            setInfo({ ...info, age: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-2">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Sex
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="sexe"
                          value={info.sexe}
                          onChange={(e) => {
                            setInfo({ ...info, sexe: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-2">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          city country
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="city country"
                          value={info.city}
                          onChange={(e) => {
                            setInfo({ ...info, city: e.target.value });
                          }}
                        />
                      </div>
                    </div>{" "}
                    <div className="w-full lg:w-6/12 px-2">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Phone number
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Phone number"
                          value={info.telephone}
                          onChange={(e) => {
                            setInfo({ ...info, telephone: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        checked={info.role === "agence"}
                        onChange={(e) => {
                          setInfo({ ...info, role: "agence" });
                        }}
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I am an Agency
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        ></a>
                      </span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        checked={info.role === "client"}
                        onChange={(e) => {
                          setInfo({ ...info, role: "client" });
                        }}
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I am a Client
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        ></a>
                      </span>
                    </label>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={register}
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Register.layout = Auth;

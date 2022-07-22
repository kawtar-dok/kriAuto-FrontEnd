import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// layout for page

import Auth from "layouts/Auth.js";
import axios from "axios";

export default function Login() {
  const [info, setInfo] = React.useState({
    username: "",
    password: "",
  });
  const [error, setError] = React.useState(false);
  const router = useRouter();

  async function checkCredentials() {
    const data = await axios.post("http://localhost:3001/auth/login", {
      data: {
        username: info.username,
        password: info.password,
      },
    });
    if (data.data.success) {
      localStorage.setItem("user", JSON.stringify(data.data));
      if (data.data.role === "admin") {
        router.push("/admin/dashboard");
      } else if (data.data.role === "adminAg") {
        router.push("/agency/dashboardAgence");
      } else if (data.data.role === "client") {
        router.push("/landing");
      }
    } else {
      setError(true);
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Se connecter à Kriauto
                  </h6>
                </div>
                <div
                  className="text-center mb-3"
                  style={{
                    display: error ? "block" : "none",
                  }}
                >
                  <h6 className="text-white text-sm font-bold bg-red-500 p-2 rounded-2xl">
                    Username ou mot de passe incorrect
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
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
                      placeholder="username"
                      value={info.username}
                      onChange={(e) => {
                        setInfo({ ...info, username: e.target.value });
                        setError(false);
                      }}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      value={info.password}
                      onChange={(e) => {
                        setInfo({ ...info, password: e.target.value });
                        setError(false);
                      }}
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={checkCredentials}
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-700 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        window.location.href = "/auth/register";
                      }}
                    >
                      Sign UP
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

Login.layout = Auth;

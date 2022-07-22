import React, { useEffect } from "react";
import Link from "next/link";
// components

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/landing">
              <img
                src="/img/logoBlanc.png"
                alt="logo"
                className=" hidden md:flex h-16"
              />
            </Link>

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link href="/landing">
                  <a
                    className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                    href="#pablo"
                  >
                    Home
                  </a>
                </Link>
              </li>

              <li className="flex items-center">
                <Link href="/agencie">
                  <a
                    className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                    href="#pablo"
                  >
                    Agencies
                  </a>
                </Link>
              </li>

              <li className="flex items-center">
                <Link href="/car">
                  <a
                    className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                    href="#pablo"
                  >
                    Cars
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/aboutUs">
                  <a
                    className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                    href="#pablo"
                  >
                    About Us
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/contactUs">
                  <a
                    className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                    href="#pablo"
                  >
                    Contact Us
                  </a>
                </Link>
              </li>
              <div
                style={{
                  display: loggedIn ? "none" : "flex",
                }}
              >
                <li className="flex items-center">
                  <button
                    type="button"
                    className=" bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4  focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg bg-teal-700 active:bg-teal-800 ml-2 text-white uppercase text-xs px-4 py-2 shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  >
                    <Link href="/auth/login">
                      <a href="#pablo">Sign In</a>
                    </Link>
                  </button>
                </li>
                <li className="flex items-center">
                  <button
                    type="button"
                    className=" bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4  focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg bg-teal-700 active:bg-teal-800 ml-2 text-white uppercase text-xs px-4 py-2 shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  >
                    <Link href="/auth/register">
                      <a href="#pablo">Sign Up</a>
                    </Link>
                  </button>
                </li>
              </div>
              <div
                style={{
                  display: loggedIn ? "flex" : "none",
                }}
              >
                <li className="flex items-center">
                  <button
                    type="button"
                    className=" bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4  focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg bg-teal-700 active:bg-teal-800 ml-2 text-white uppercase text-xs px-4 py-2 shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  >
                    <Link href="/auth/login">
                      <a
                        href="#pablo"
                        onClick={() => {
                          localStorage.removeItem("user");
                          setLoggedIn(false);
                        }}
                      >
                        Log out
                      </a>
                    </Link>
                  </button>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

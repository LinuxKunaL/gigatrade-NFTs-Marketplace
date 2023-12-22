import React from "react";
import logo from "../assets/images/logo.png";
import metamaskLogo from "../assets/images/metamask.svg";
import { Link, NavLink } from "react-router-dom";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { SiEthereum } from "react-icons/si";
import { RiMenu4Fill } from "react-icons/ri";
function Navbar() {
  const openCloseMenu = () => {
    const NavLinks = document.getElementById("nav-links").classList;
    if (NavLinks.contains("activeNavLinks")) {
      NavLinks.add("closeNavLinks");
      NavLinks.remove("activeNavLinks");
    } else {
      NavLinks.add("activeNavLinks");
      NavLinks.remove("closeNavLinks");
    }
  };
  return (
    <nav
      id="navbar"
      className="bg-white/50 sticky top-0 sm:top-5 z-[10000] sm:rounded-2xl dark:bg-darkBlue-500/80 backdrop-blur-lg dark:border-darkBlue-400 border-gray-100 border-[1px]"
    >
      <div className="max-w-screen-xl justify-between flex flex-wrap items-center mx-auto p-4">
        <Link
          to="/"
          id="logo"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-12" alt="Logo" />
          <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white/80">
            GiGaTrade
          </span>
        </Link>

        <ul
          id="nav-links"
          className="flex translate-y-[-40pc] flex-col top-[80%] rounded-none gap-3 left-0 right-0 p-4 md:relative absolute md:p-0 mt-4 font-medium border border-gray-100  bg-gray-50 md:translate-y-[0pc] md:gap-0  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-darkBlue-500 md:dark:bg-transparent dark:border-gray-700 text-sm md:text-base"
        >
          <div className="relative block  md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-3 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-darkBlue-500 dark:placeholder-gray-500 border-gray-700/60 dark:text-white outline-none dark:focus:ring-purple-500 "
              placeholder="Search NFt ..."
            />
          </div>
          <li>
            <NavLink
              to="/"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-darkBlue-300 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/explore"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-darkBlue-300 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Shop
            </NavLink>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Services
            </a>
          </li>
          {/* <button
            type="button"
            className="py-2.5 md:hidden  px-5 justify-center text-sm font-medium flex items-center gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
          >
            <img className="w-7" src={metamaskLogo} alt="metamask" /> Connect
          </button> */}
          <NavLink
            to="/myProfile"
            id="profile"
            className="flex gap-4 items-center md:hidden"
          >
            <img
              src="https://opne9reactnext.vercel.app/assets/images/avatar/avatar-small-09.png"
              alt=""
            />
            <span className="dark:text-white/60 text-gray-800/90 font-semibold cursor-pointer hover:dark:bg-darkBlue-500 transition-all rounded-lg p-1 px-2">
              0x234..3443
              <div className="flex gap-3 items-center cursor-pointer">
                <b className="dark:text-white/80 text-gray-700/90">34.455</b>
                <SiEthereum className="dark:text-white/60 text-gray-700/90" />
              </div>
            </span>
          </NavLink>
        </ul>

        <div className="flex justify-between gap-4 items-center md:justify-center md:w-auto">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-36 p-3 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-darkBlue-500 dark:placeholder-gray-500 border-gray-700/60 dark:text-white outline-none dark:focus:ring-purple-500 "
              placeholder="Search NFt ..."
            />
          </div>
          {/* <button
            type="button"
            className="py-2.5 px-5  text-sm font-medium flex items-center gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
          >
            <img className="w-7" src={metamaskLogo} alt="metamask" /> Connect
          </button> */}
          <NavLink
            to="/myProfile"
            id="profile"
            className="md:flex hidden gap-4 items-center"
          >
            <img
              src="https://opne9reactnext.vercel.app/assets/images/avatar/avatar-small-09.png"
              alt=""
            />
            <span className="dark:text-white/60 text-gray-800/90 font-semibold cursor-pointer hover:dark:bg-darkBlue-500 transition-all rounded-lg p-1 px-2">
              0x234..3443
              <div className="flex gap-3 items-center cursor-pointer">
                <b className="dark:text-white/80 text-gray-700/90">34.455</b>
                <SiEthereum className="dark:text-white/60 text-gray-700/90" />
              </div>
            </span>
          </NavLink>
          {/* <DarkThemeToggle /> */}
          <div
            id="menu-ham"
            onClick={() => openCloseMenu()}
            className="md:hidden md:text-md text-xl bg-darkBlue-400 hover:bg-darkBlue-500 cursor-pointer text-white/70 md:p-4 p-3 border-[1px] border-gray-700/40 transition-all rounded-lg active:bg-darkBlue-300"
          >
            <RiMenu4Fill />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

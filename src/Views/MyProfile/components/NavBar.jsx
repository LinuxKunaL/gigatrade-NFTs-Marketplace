import React from "react";
import { SiEthereum } from "react-icons/si";
import { Tooltip } from "flowbite-react";
import { RiSettings3Line } from "react-icons/ri";
function NavBar() {
  return (
    <nav className="h-[6.31pc] flex items-center justify-between border-b-[1px] border-darkBlue-300 w-full dark:bg-darkBlue-600">
      <div className="relative w-max ml-10">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block w-36 p-3 ps-10 text-sm text-gray-900  rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-darkBlue-300  dark:placeholder-gray-400 dark:text-white outline-none dark:focus:ring-purple-500 "
          placeholder="Search NFt ..."
        />
      </div>
      <div className="flex mr-12 gap-4 items-center">
        <div className="flex gap-4 items-center">
          <Tooltip
            theme={{
              arrow: {
                style: {
                  dark: "bg-gray-900 dark:bg-darkBlue-400 rounded-xl",
                  light: "bg-white",
                },
              },
            }}
            className="dark:bg-darkBlue-400/90"
            content={
              <div className="flex gap-2 flex-col items-center">
                <RiSettings3Line className="text-pink-500 text-lg" />{" "}
                <span className=" text-center">
                  Go to setting section <br /> for edit our Profile
                </span>
              </div>
            }
          >
            <img
              src="https://opne9reactnext.vercel.app/assets/images/avatar/avatar-small-09.png"
              alt=""
            />
          </Tooltip>
          <span className="dark:text-white/60 font-semibold cursor-pointer hover:dark:bg-darkBlue-500 transition-all rounded-lg p-1 px-2">
            0x234..3443
            <div className="flex gap-3 items-center cursor-pointer">
              <b className="dark:text-white/80">34.455</b>
              <SiEthereum className="dark:text-white/60" />
            </div>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

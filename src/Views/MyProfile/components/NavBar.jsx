import React from "react";
import { SiEthereum } from "react-icons/si";
import { Tooltip } from "flowbite-react";
import { RiSettings3Line } from "react-icons/ri";
import { FaBarsStaggered } from "react-icons/fa6";
function NavBar({ ClickEvent }) {
  return (
    <nav className="sm:h-[6.31pc] h-[5pc] flex items-center justify-between border-b-[1px] border-darkBlue-300 w-full dark:bg-darkBlue-600">
      <div
        onClick={() => ClickEvent()}
        className="sm:p-4 p-3 sm:ml-12 ml-2 w-max rounded-lg text-white/90 bg-darkBlue-300 hover:bg-darkBlue-200 active:bg-darkBlue-400 transition-all xl:hidden cursor-pointer"
      >
        <FaBarsStaggered />
      </div>
      <div className="flex sm:mr-12 mr-1 gap-4 items-center">
        <div className="flex sm:gap-4 gap-2 items-center">
          <img
            className="sm:w-14 w-10 h-10 sm:h-14"
            src="https://opne9reactnext.vercel.app/assets/images/avatar/avatar-small-09.png"
            alt=""
          />
          <span className="dark:text-white/60 text-[0.8rem] sm:text-lg font-semibold cursor-pointer hover:dark:bg-darkBlue-500 transition-all rounded-lg p-1 px-2">
            0x234..3443
            <div className="flex sm:gap-3 gap-1 items-center cursor-pointer">
              <b className="dark:text-white/80 sm:font-semibold font-medium">
                34.455
              </b>
              <SiEthereum className="dark:text-white/60" />
            </div>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

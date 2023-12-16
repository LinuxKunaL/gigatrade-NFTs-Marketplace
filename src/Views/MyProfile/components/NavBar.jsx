import React from "react";
import { SiEthereum } from "react-icons/si";
import { Tooltip } from "flowbite-react";
import { RiSettings3Line } from "react-icons/ri";
import { FaBarsStaggered } from "react-icons/fa6";
function NavBar() {
  return (
    <nav className="h-[6.31pc] flex items-center justify-between border-b-[1px] border-darkBlue-300 w-full dark:bg-darkBlue-600">
      <div className="p-4 ml-12 w-max rounded-lg text-white/90 bg-darkBlue-300 hover:bg-darkBlue-200 active:bg-darkBlue-400 transition-all cursor-pointer">
        <FaBarsStaggered />
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

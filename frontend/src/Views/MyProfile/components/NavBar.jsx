import React from "react";
import { SiEthereum } from "react-icons/si";
import { Tooltip } from "flowbite-react";
import { RiSettings3Line } from "react-icons/ri";
import { FaBarsStaggered } from "react-icons/fa6";
import { useSelector } from "react-redux";
import demoUserAvatar from "../../../assets/images/user-demo-avatar.svg";

function NavBar({ ClickEvent }) {
  const AccountState = useSelector((state) => state.EthAccountStates);

  return (
    <nav className="sm:h-[6.31pc] h-[5pc] flex items-center justify-between border-b-[1px] border-darkBlue-300 w-full dark:bg-darkBlue-600">
      <div
        onClick={() => ClickEvent()}
        className="sm:p-4 p-3 sm:ml-12 ml-2 w-max rounded-lg text-white/90 bg-darkBlue-300 hover:bg-darkBlue-200 active:bg-darkBlue-400 transition-all xl:opacity-0 cursor-pointer"
      >
        <FaBarsStaggered />
      </div>
      <div className="flex sm:mr-12 mr-1 gap-4 items-center">
        <div className="flex gap-3 items-center">
          <div className="flex items-center overflow-hidden justify-center rounded-full h-14 w-14 bg-gradient-to-tr from-pink-600 to-purple-500">
            <img
              className="h-max w-max p-[2px] rounded-full"
              src={
                AccountState.userAvatar !== ""
                  ? AccountState.userAvatar
                  : demoUserAvatar
              }
              alt=""
            />
          </div>
          <span className="dark:text-white/60 text-gray-800/90 font-semibold cursor-pointer hover:dark:bg-darkBlue-500 transition-all rounded-lg p-1 px-2">
            {AccountState.userName != ""
              ? AccountState.userName
              : `${AccountState.account.slice(
                  0,
                  7
                )}...${AccountState.account.slice(38)}`}
            <div className="flex gap-3 items-center cursor-pointer">
              <b className="dark:text-white/80 text-gray-700/90">
                {AccountState.balance.slice(0, 6)}
              </b>
              <SiEthereum className="dark:text-white/60 text-gray-700/90" />
            </div>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

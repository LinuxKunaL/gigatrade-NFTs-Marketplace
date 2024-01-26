import React from "react";
import logo from "../assets/images/logo.png";
import metamaskLogo from "../assets/images/metamask.svg";
import { Link, NavLink } from "react-router-dom";
import { SiEthereum } from "react-icons/si";
import { Connect } from "../hooks/useConnectWallet";
import { useSelector } from "react-redux";
import demoUserAvatar from "../assets/images/user-demo-avatar.svg";
import { SuccessToast } from "../app/Toast/Success";
import { ErrorToast } from "../app/Toast/Error";
import { Toaster } from "react-hot-toast";

function Navbar() {
  const AccountState = useSelector((state) => state.EthAccountStates);

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

  const connectMetamask = async () => {
    const result = await Connect();
    if (result) {
      navigator.vibrate(100);
      SuccessToast("Metamask is connected 🎉");
    } else {
      navigator.vibrate([100,300]);
      ErrorToast("Metamask is not found 💔");
    }
  };

  return (
    <nav id="navbar" className="sticky z-50 sm:top-5">
      <Toaster position="leftbottom" />
      <div className="w-full bg-darkBlue-600g rounded-b-lg sm:rounded-lg bg-darkBlue-500 justify-between flex flex-wrap items-center mx-aut p-4">
        <Link
          to="/"
          id="logo"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-12 xs:h-16" alt="Logo" />
          <span className="self-center text-base xs:text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white/80">
            GiGaTrade
          </span>
        </Link>
        <ul
          id="nav-links"
          className="flex translate-y-[-40pc] flex-col top-[80%] gap-3 left-0 right-0 p-4 md:relative absolute md:p-0 mt-4 font-medium border-gray-100 bg-gray-50 md:translate-y-[0pc] md:gap-0  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-darkBlue-500 md:dark:bg-transparent rounded-lg borderw dark:border-gray-700d text-sm md:text-base"
        >
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
              Explore
            </NavLink>
          </li>
          {/* <NavLink
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
          </NavLink> */}
        </ul>
        <div className="flex justify-between gap-4 items-center md:justify-center md:w-auto">
          {AccountState.isConnect ? (
            <NavLink
              to="/myProfile"
              id="profile"
              className="flex gap-3 items-center"
            >
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
              <span className="dark:text-white/60 hidden xs:block text-gray-800/90 font-semibold cursor-pointer hover:dark:bg-darkBlue-500 transition-all rounded-lg p-1 px-2">
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
            </NavLink>
          ) : (
            <button
              type="button"
              className=" py-2 px-3 xs:py-2.5 xs:px-5  text-sm font-medium flex items-center gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600 "
              onClick={connectMetamask}
            >
              <img className="w-7" src={metamaskLogo} alt="metamask" /> Connect
            </button>
          )}
          {/* <DarkThemeToggle /> */}
          {/* <div
            id="menu-ham"
            onClick={() => openCloseMenu()}
            className="md:hidden md:text-md text-xl bg-darkBlue-400 hover:bg-darkBlue-500 cursor-pointer text-white/70 md:p-4 p-3 border-[1px] border-gray-700/40 transition-all rounded-lg active:bg-darkBlue-300"
          >
            <RiMenu4Fill />
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
